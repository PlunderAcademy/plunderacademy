// Compare system prompt versions for the reviewer and chat routes.
//
//   node scripts/prompt-evals/run.mjs --suite reviewer \
//     --variant old=path/to/old-prompt.md --variant new=src/prompts/reviewer-system-prompt.md \
//     [--runs 2] [--concurrency 3] [--only case-id,case-id] [--gateway prompt-evals]
//
// A variant can also set request options: --variant "new-low=src/prompts/x.md;effort=low;thinking=disabled"
//
// Calls the same model through the Workers AI binding the app uses (via wrangler's
// getPlatformProxy), so it spends AI Gateway credits. It uses its own gateway (create
// one named "prompt-evals" in the Cloudflare dashboard) so eval traffic doesn't eat into
// production's rate limit or clutter its logs. Full outputs are written to
// .prompt-evals/<timestamp>/ for reading alongside the summary.

import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { parseArgs } from "node:util";
import { getPlatformProxy } from "wrangler";
import { reviewerCases } from "./reviewer-cases.mjs";
import { chatCases } from "./chat-cases.mjs";

const MODEL = "anthropic/claude-haiku-5.5";
const PRIORITY_RANK = { Low: 1, Medium: 2, High: 3, Critical: 4 };

const { values } = parseArgs({
  options: {
    suite: { type: "string" },
    variant: { type: "string", multiple: true },
    runs: { type: "string", default: "1" },
    concurrency: { type: "string", default: "3" },
    only: { type: "string" },
    gateway: { type: "string", default: "prompt-evals" },
    regrade: { type: "string" },
  },
});

if (!["reviewer", "chat"].includes(values.suite) || (!values.variant?.length && !values.regrade)) {
  console.error("Usage: --suite reviewer|chat (--variant name=prompt.md [--variant ...] | --regrade .prompt-evals/<dir>) [--runs N] [--only ids]");
  process.exit(1);
}

const variants = (values.variant ?? []).map((v) => {
  const [head, ...opts] = v.split(";");
  const [name, path] = head.split("=");
  const settings = Object.fromEntries(opts.map((o) => o.split("=")));
  const request = {
    ...(settings.effort && { output_config: { effort: settings.effort } }),
    ...(settings.thinking && { thinking: { type: settings.thinking } }),
  };
  return { name, prompt: readFileSync(path, "utf8"), request };
});
const runs = Number(values.runs);
const only = values.only?.split(",");
const outDir = values.regrade ?? join(".prompt-evals", new Date().toISOString().replace(/[:.]/g, "-"));
mkdirSync(outDir, { recursive: true });

// Lesson URLs that exist, derived from the content tree
const lessonUrls = new Set();
for (const island of readdirSync("src/content/modules")) {
  lessonUrls.add(`https://plunderacademy.com/lessons/${island}`);
  for (const mod of readdirSync(join("src/content/modules", island))) {
    if (statSync(join("src/content/modules", island, mod)).isDirectory() && !["missions", "quizzes"].includes(mod)) {
      lessonUrls.add(`https://plunderacademy.com/lessons/${island}/${mod}`);
    }
  }
}
const validUrl = (u) => lessonUrls.has(u) || u === "https://plunderacademy.com/reviewer" || u === "https://plunderacademy.com/chat";

function linkCheck(text) {
  const urls = [...text.matchAll(/https:\/\/plunderacademy\.com[^\s)\]>"'`]*/g)].map((m) => m[0].replace(/[.,;:]+$/, ""));
  const bad = urls.filter((u) => !validUrl(u));
  return { urls: urls.length, bad };
}

// Mirrors the system prompt assembly in src/routes/api.reviewer.ts and api.chat.ts
function reviewerSystem(prompt) {
  return prompt.replace(/^# .*\n\n/, "");
}
function chatSystem(prompt) {
  let content = prompt.replace(/^# .*\n\n/, "");
  const now = new Date();
  const dateContext = `\n\n## Current Date\n**Today is ${now.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })} (${now.toISOString().split("T")[0]}).** Use this as the reference point for all time-based queries like "this week", "yesterday", "last month", etc.\n`;
  const firstSectionEnd = content.indexOf("\n## ", 10);
  return firstSectionEnd > 0
    ? content.slice(0, firstSectionEnd) + dateContext + content.slice(firstSectionEnd)
    : dateContext + content;
}

const CALL_TIMEOUT_MS = 5 * 60 * 1000;

async function callModel(env, body) {
  const started = Date.now();
  let timer;
  const res = await Promise.race([
    env.AI.run(MODEL, { max_tokens: 32000, ...body }, { gateway: { id: values.gateway } }),
    new Promise((_, reject) => {
      timer = setTimeout(() => reject(new Error(`timed out after ${CALL_TIMEOUT_MS / 1000}s`)), CALL_TIMEOUT_MS);
    }),
  ]).finally(() => clearTimeout(timer));
  const text = res.content.filter((b) => b.type === "text").map((b) => b.text).join("");
  const toolUses = res.content.filter((b) => b.type === "tool_use").map((b) => ({ name: b.name, input: b.input }));
  return { text, toolUses, outputTokens: res.usage?.output_tokens ?? 0, ms: Date.now() - started, stop: res.stop_reason };
}

// ---------------------------------------------------------------------------
// Reviewer grading
// ---------------------------------------------------------------------------
const SECTIONS = ["Executive Summary", "Critical Findings", "Detailed Analysis", "Recommendations", "Zilliqa 2.0 Deployment Notes"];

function sectionBody(text, name) {
  const start = text.indexOf(`## ${name}`);
  if (start < 0) return "";
  const rest = text.slice(start + name.length + 3);
  const next = rest.search(/^## /m);
  return next < 0 ? rest : rest.slice(0, next);
}

// Findings anywhere in the report, de-duplicated by number (the old prompt's template
// repeats findings under Detailed Analysis); the copy carrying a Priority field wins
function parseFindings(text) {
  const parts = text.split(/^### (?=\d+\.)/m).slice(1).map((block) => block.split(/^## /m)[0]);
  const byNumber = new Map();
  for (const block of parts) {
    const n = block.match(/^(\d+)\./)[1];
    if (!byNumber.has(n) || (!/\*\*Priority\*\*/.test(byNumber.get(n)) && /\*\*Priority\*\*/.test(block))) {
      byNumber.set(n, block);
    }
  }
  return [...byNumber.values()].map((block) => {
    const heading = block.split("\n")[0];
    const priority = block.match(/\*\*Priority\*\*:\s*(Critical|High|Medium|Low)/)?.[1] ?? null;
    const severity = block.match(/\*\*Severity Score\*\*:\s*([^\n]+)/)?.[1]?.trim() ?? null;
    const explanation = block.split(/^#### /m).find((s) => s.startsWith("Vulnerability Explanation")) ?? "";
    return { heading, priority, severity, explanation, block };
  });
}

function gradeReview(c, text) {
  const h2 = [...text.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim());
  const exec = sectionBody(text, "Executive Summary");
  const total = Number(exec.match(/Total issues found:\s*(\d+)/)?.[1] ?? NaN);
  const counts = exec.match(/Critical:\s*(\d+)\s*\|\s*High:\s*(\d+)\s*\|\s*Medium:\s*(\d+)\s*\|\s*Low:\s*(\d+)/);
  const findings = parseFindings(text);
  const uiCount = (text.match(/###\s+\d+\./g) ?? []).length;
  const links = linkCheck(text);

  const format = {
    startsWithSummary: text.trimStart().startsWith("## Executive Summary"),
    sectionsInOrder: JSON.stringify(h2) === JSON.stringify(SECTIONS),
    summaryLines: !Number.isNaN(total) && !!counts && /Average Severity Score:\s*\d+(\.\d)?\/10/.test(exec),
    uiCountMatchesTotal: uiCount === total,
    priorityCountsMatch:
      !!counts &&
      ["Critical", "High", "Medium", "Low"].every((p, i) => Number(counts[i + 1]) === findings.filter((f) => f.priority === p).length),
    findingsComplete: findings.every(
      (f) =>
        f.priority &&
        /#### Code Example - Vulnerable/.test(f.block) &&
        /#### Code Example - Secure/.test(f.block) &&
        /#### Related Training[\s\S]*?\]\(https:\/\/plunderacademy\.com\/lessons\//.test(f.block) &&
        /#### Testing Recommendations/.test(f.block),
    ),
    severityFormat: findings.every((f) => /^\d+\.\d\/10/.test(f.severity ?? "")),
    linksValid: links.bad.length === 0,
  };

  const checks = [];
  for (const e of c.expect) {
    if (e.min) {
      const hits = findings.filter((f) => e.match.test(f.heading) || e.match.test(f.explanation));
      const best = Math.max(0, ...hits.map((f) => PRIORITY_RANK[f.priority] ?? 0));
      checks.push({ kind: "detect", name: e.name, pass: best >= PRIORITY_RANK[e.min], got: hits.map((f) => f.priority).join("/") || "missed" });
    } else {
      const hits = findings.filter((f) => e.title.test(f.heading));
      const worst = Math.max(0, ...hits.map((f) => PRIORITY_RANK[f.priority] ?? 0));
      checks.push({ kind: "calibrate", name: e.name, pass: worst <= PRIORITY_RANK[e.max], got: hits.map((f) => f.priority).join("/") || "none" });
    }
  }
  if (c.maxPriority) {
    const over = findings.filter((f) => (PRIORITY_RANK[f.priority] ?? 0) > PRIORITY_RANK[c.maxPriority]);
    checks.push({ kind: "calibrate", name: `nothing above ${c.maxPriority}`, pass: over.length === 0, got: over.map((f) => `${f.priority}: ${f.heading.slice(0, 60)}`).join("; ") || "ok" });
  }
  const mentions = (c.mentions ?? []).map((re) => ({ name: re.source.slice(0, 40), pass: re.test(text) }));

  return { format, checks, mentions, findings: findings.length, badLinks: links.bad };
}

// ---------------------------------------------------------------------------
// Chat grading
// ---------------------------------------------------------------------------
async function loadChatTools() {
  // The app's own MCP wrapper, so routing is tested against the real tool set
  const { getZilliqaInsightsTools } = await import("../../src/lib/zilliqa-mcp.ts");
  const mcp = await getZilliqaInsightsTools();
  if (!mcp) throw new Error("Could not connect to the Zilliqa Insights MCP server");
  const tools = Object.entries(mcp.tools).map(([name, t]) => ({
    name,
    description: t.description,
    input_schema: t.inputSchema?.jsonSchema ?? t.inputSchema,
  }));
  return { tools, close: mcp.close };
}

function gradeChat(c, result) {
  const checks = [];
  if (c.expectTool) {
    const called = result.toolUses.map((t) => t.name);
    checks.push({ kind: "tool", name: `calls ${c.expectTool}`, pass: called.includes(c.expectTool), got: called.join(",") || "no tool" });
  }
  if (c.expectNoTool) {
    checks.push({ kind: "tool", name: "answers without tools", pass: result.toolUses.length === 0, got: result.toolUses.map((t) => t.name).join(",") || "no tool" });
  }
  for (const k of c.checks ?? []) {
    checks.push({ kind: "content", name: k.name, pass: k.test(result.text), got: "" });
  }
  const links = linkCheck(result.text);
  checks.push({ kind: "links", name: "links valid", pass: links.bad.length === 0, got: links.bad.join(" ") });
  return { checks };
}

// ---------------------------------------------------------------------------
// Runner
// ---------------------------------------------------------------------------
async function pool(items, limit, fn) {
  const results = new Array(items.length);
  let next = 0;
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, async () => {
      while (next < items.length) {
        const i = next++;
        results[i] = await fn(items[i]);
      }
    }),
  );
  return results;
}

const cases = (values.suite === "reviewer" ? reviewerCases : chatCases).filter((c) => !only || only.includes(c.id));
const grade = (c, res) => (values.suite === "reviewer" ? gradeReview(c, res.text) : gradeChat(c, res));

// Re-grade outputs saved by an earlier run (file names: <suite>-<variant>-<case>-r<N>.md)
function regrade(dir) {
  const results = [];
  for (const file of readdirSync(dir).filter((f) => f.startsWith(`${values.suite}-`) && f.endsWith(".md"))) {
    const c = cases.find((x) => new RegExp(`-${x.id}-r\\d+\\.md$`).test(file));
    if (!c) continue;
    const [, variant, run] = file.match(new RegExp(`^${values.suite}-(.+)-${c.id}-r(\\d+)\\.md$`));
    const raw = readFileSync(join(dir, file), "utf8");
    const [, stop, outputTokens, ms] = raw.match(/stop: (\w+), (\d+) output tokens, (\d+)ms/);
    const toolUses = JSON.parse(raw.match(/<!-- tools: (.+) -->/)?.[1] ?? "[]");
    const text = raw.replace(/^<!--.*-->\n/gm, "");
    const res = { text, toolUses, outputTokens: Number(outputTokens), ms: Number(ms), stop };
    results.push({ variant, id: c.id, run: Number(run), ...res, grade: grade(c, res) });
  }
  return results;
}

let results;
let variantNames;
let dispose = async () => {};
let chatTools = null;

if (values.regrade) {
  results = regrade(values.regrade);
  variantNames = [...new Set(results.map((x) => x.variant))];
  console.log(`Re-graded ${results.length} saved outputs from ${values.regrade}`);
} else {
  const proxy = await getPlatformProxy();
  const env = proxy.env;
  dispose = proxy.dispose;
  chatTools = values.suite === "chat" && cases.some((c) => c.withTools) ? await loadChatTools() : null;
  variantNames = variants.map((v) => v.name);

  const jobs = [];
  for (const v of variants) for (const c of cases) for (let r = 1; r <= runs; r++) jobs.push({ v, c, r });

  console.log(`Running ${jobs.length} calls (${cases.length} cases x ${variants.length} variants x ${runs} runs)...`);
  results = await pool(jobs, Number(values.concurrency), async ({ v, c, r }) => {
    try {
      const res =
        values.suite === "reviewer"
          ? await callModel(env, { ...v.request, system: reviewerSystem(v.prompt), messages: [{ role: "user", content: c.code }] })
          : await callModel(env, {
              ...v.request,
              system: chatSystem(v.prompt),
              messages: [{ role: "user", content: c.question }],
              ...(c.withTools && { tools: chatTools.tools }),
            });
      const file = join(outDir, `${values.suite}-${v.name}-${c.id}-r${r}.md`);
      writeFileSync(file, `<!-- stop: ${res.stop}, ${res.outputTokens} output tokens, ${res.ms}ms -->\n${res.toolUses.length ? `<!-- tools: ${JSON.stringify(res.toolUses)} -->\n` : ""}${res.text}`);
      process.stdout.write(".");
      return { variant: v.name, id: c.id, run: r, ...res, grade: grade(c, res) };
    } catch (error) {
      process.stdout.write("x");
      return { variant: v.name, id: c.id, run: r, error: String(error?.message ?? error) };
    }
  });
  console.log("\n");
  await chatTools?.close();
}

// Summary
const pct = (n, d) => (d ? `${Math.round((100 * n) / d)}%` : "-");
const rows = [];
for (const name of variantNames) {
  const mine = results.filter((x) => x.variant === name);
  const ok = mine.filter((x) => !x.error);
  const allChecks = ok.flatMap((x) => x.grade.checks);
  const byKind = (k) => allChecks.filter((c) => c.kind === k);
  const row = {
    variant: name,
    errors: mine.length - ok.length,
    avgOutputTokens: Math.round(ok.reduce((s, x) => s + x.outputTokens, 0) / (ok.length || 1)),
    avgSeconds: (ok.reduce((s, x) => s + x.ms, 0) / (ok.length || 1) / 1000).toFixed(1),
  };
  if (values.suite === "reviewer") {
    row.detection = pct(byKind("detect").filter((c) => c.pass).length, byKind("detect").length);
    row.calibration = pct(byKind("calibrate").filter((c) => c.pass).length, byKind("calibrate").length);
    const mentions = ok.flatMap((x) => x.grade.mentions);
    row.remediation = pct(mentions.filter((m) => m.pass).length, mentions.length);
    for (const key of Object.keys(ok[0]?.grade.format ?? {})) {
      row[key] = pct(ok.filter((x) => x.grade.format[key]).length, ok.length);
    }
  } else {
    for (const k of ["tool", "content", "links"]) {
      row[k] = pct(byKind(k).filter((c) => c.pass).length, byKind(k).length);
    }
  }
  rows.push(row);
}
console.table(rows);

console.log("\nPer-case check results (pass count / runs):");
const perCase = {};
for (const x of results) {
  if (x.error) {
    (perCase[x.id] ??= {})[`${x.variant}: ERROR`] = x.error.slice(0, 80);
    continue;
  }
  for (const c of x.grade.checks) {
    const key = `${c.name}`;
    const cell = ((perCase[x.id] ??= {})[`${key} [${x.variant}]`] ??= { pass: 0, n: 0, got: [] });
    cell.pass += c.pass ? 1 : 0;
    cell.n += 1;
    if (c.got) cell.got.push(c.got);
  }
}
for (const [id, checks] of Object.entries(perCase)) {
  console.log(`\n${id}`);
  for (const [k, cell] of Object.entries(checks)) {
    if (typeof cell === "string") console.log(`  ${k} ${cell}`);
    else console.log(`  ${cell.pass === cell.n ? "PASS" : "FAIL"} ${cell.pass}/${cell.n}  ${k}  ${cell.got.join(" | ").slice(0, 140)}`);
  }
}

writeFileSync(join(outDir, "results.json"), JSON.stringify({ rows, results }, null, 2));
console.log(`\nFull outputs: ${outDir}`);
await dispose();
