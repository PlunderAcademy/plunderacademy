import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/reviewer")({
  component: ReviewerPage,
});

import * as React from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CodeInput } from "@/components/code-input";
import { usePageIntro } from "@/hooks/use-page-intro";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { reviewerExampleCategories, reviewerExamples } from "@/lib/reviewer-examples";
import { Response } from "@/components/ai-elements/response";
import { WalletAuthGuard } from "@/components/wallet-auth-guard";
import { AIFeedback } from "@/components/ai-feedback";
import { useSession } from "@/lib/session-context";
import { trackAIInteraction } from "@/lib/feedback-api";
import { cn } from "@/lib/utils";
import { config } from "@/lib/config";
import { useAchievements } from "@/hooks/use-achievements";

// Secret achievement configuration
const SECRET_ACHIEVEMENTS = {
  REENTRANCY: {
    taskCode: 2003,
    achievementNumber: "2003",
    secretAnswer: "aiscience",
    title: "Mutiny Prevention",
    description: "You've successfully identified a reentrancy vulnerability!",
    emoji: "⚔️",
    gradientFrom: "from-purple-500",
    gradientTo: "to-indigo-700",
    borderColor: "border-purple-300",
  },
  DEAD_MANS_CHEST: {
    taskCode: 2004,
    achievementNumber: "2004",
    secretAnswer: "aihealth",
    title: "Dead Man's Chest",
    description: "You've uncovered critical vulnerabilities: division before multiplication or tx.origin misuse!",
    emoji: "💀",
    gradientFrom: "from-amber-500",
    gradientTo: "to-red-700",
    borderColor: "border-amber-300",
  },
} as const;

// Vulnerability detection patterns
const REENTRANCY_PATTERNS = [
  /reentrancy/i,
  /re-entrancy/i,
  /reentrant/i,
  /recursive call/i,
  /state.*after.*external call/i,
  /call.*before.*state/i,
  /checks-effects-interactions/i,
];

const DEAD_MANS_CHEST_PATTERNS = [
  // Division before multiplication
  /division before multiplication/i,
  /divide before multiply/i,
  /precision loss.*division/i,
  /truncation.*division/i,
  /integer division.*before.*multiplication/i,
  // tx.origin authentication
  /tx\.origin/i,
  /phishing.*tx\.origin/i,
  /origin.*authentication/i,
  /origin.*authorization/i,
];

const SEVERITIES = [
  { key: "Critical", dot: "bg-red-600" },
  { key: "High", dot: "bg-orange-500" },
  { key: "Medium", dot: "bg-amber-400" },
  { key: "Low", dot: "bg-slate-400" },
] as const;

type SeverityCounts = Record<(typeof SEVERITIES)[number]["key"], number>;

// Reads the counts line the reviewer writes at the top of every report
function parseSeverityCounts(report: string): SeverityCounts | null {
  const m = report.match(/Critical:\s*(\d+)\s*\|\s*High:\s*(\d+)\s*\|\s*Medium:\s*(\d+)\s*\|\s*Low:\s*(\d+)/);
  return m ? { Critical: +m[1], High: +m[2], Medium: +m[3], Low: +m[4] } : null;
}

const REVIEW_MODEL_ID = "anthropic/claude-haiku-5.5";

function ReviewerPage() {
  const { address, sessionId } = useSession();
  const [code, setCode] = React.useState<string>(reviewerExamples[0].code);
  const [activeExampleId, setActiveExampleId] = React.useState<string | null>(
    reviewerExamples[0].id
  );
  const activeExample = reviewerExamples.find((e) => e.id === activeExampleId);
  const [interactionId, setInteractionId] = React.useState<string>();
  const [startTime, setStartTime] = React.useState<number>(0);
  const [lastSubmittedCodeLength, setLastSubmittedCodeLength] =
    React.useState<number>(reviewerExamples[0].code.length);

  // Track if we've already submitted tracking for current interaction
  const hasTrackedRef = React.useRef(false);

  // Secret achievement state
  const { walletAchievements, fetchWalletAchievements, fetchUnclaimedVouchers } = useAchievements();
  const [secretAchievementModal, setSecretAchievementModal] = React.useState<{
    show: boolean;
    achievement: typeof SECRET_ACHIEVEMENTS.REENTRANCY | typeof SECRET_ACHIEVEMENTS.DEAD_MANS_CHEST | null;
  }>({ show: false, achievement: null });
  const [isSubmittingSecret, setIsSubmittingSecret] = React.useState(false);
  const [secretError, setSecretError] = React.useState<string | null>(null);
  
  // Track which achievements have been triggered this session (to prevent duplicate modals)
  const triggeredAchievementsRef = React.useRef<Set<string>>(new Set());
  
  // Check if user already has these achievements
  const hasReentrancyAchievement = React.useMemo(() => 
    walletAchievements.some(a => a.tokenId === SECRET_ACHIEVEMENTS.REENTRANCY.taskCode),
    [walletAchievements]
  );
  const hasDeadMansChestAchievement = React.useMemo(() => 
    walletAchievements.some(a => a.tokenId === SECRET_ACHIEVEMENTS.DEAD_MANS_CHEST.taskCode),
    [walletAchievements]
  );

  // Vulnerability detection functions
  const detectsReentrancy = React.useCallback((text: string): boolean => {
    return REENTRANCY_PATTERNS.some(pattern => pattern.test(text));
  }, []);

  const detectsDeadMansChest = React.useCallback((text: string): boolean => {
    return DEAD_MANS_CHEST_PATTERNS.some(pattern => pattern.test(text));
  }, []);

  // Submit secret achievement to API
  const submitSecretAchievement = React.useCallback(async (
    achievement: typeof SECRET_ACHIEVEMENTS.REENTRANCY | typeof SECRET_ACHIEVEMENTS.DEAD_MANS_CHEST
  ) => {
    if (!address) {
      setSecretError('Please connect your wallet to claim this secret');
      return;
    }

    setIsSubmittingSecret(true);
    setSecretError(null);

    const requestPayload = {
      walletAddress: address,
      achievementNumber: achievement.achievementNumber,
      submissionType: "secret",
      submissionData: {
        secretAnswer: achievement.secretAnswer
      },
      metadata: {
        timestamp: new Date().toISOString(),
        discoveryMethod: "ai_vulnerability_detection"
      }
    };

    try {
      const response = await fetch(`${config.apiBaseUrl}/api/v1/vouchers/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestPayload),
      });

      const responseText = await response.text();
      let apiResult;

      try {
        apiResult = JSON.parse(responseText);
      } catch {
        throw new Error(`API returned invalid JSON. Status: ${response.status}`);
      }

      if (response.ok && apiResult.success) {
        // Success! Show modal
        setSecretAchievementModal({ show: true, achievement });
        // Refresh achievement data
        window.dispatchEvent(new CustomEvent('achievementClaimed', { 
          detail: { timestamp: Date.now() } 
        }));
        fetchWalletAchievements();
        fetchUnclaimedVouchers();
      } else {
        // Check if this is an "already completed" error
        const errorMessage = apiResult.error || 'Failed to claim secret achievement';
        if (errorMessage.toLowerCase().includes('already completed') || 
            errorMessage.toLowerCase().includes('already claimed') ||
            errorMessage.toLowerCase().includes('already exists')) {
          // Already claimed - silently mark as triggered to prevent future attempts
          triggeredAchievementsRef.current.add(achievement.achievementNumber);
          return;
        }
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error('Error submitting secret achievement:', error);
      setSecretError(error instanceof Error ? error.message : 'Failed to claim secret achievement');
    } finally {
      setIsSubmittingSecret(false);
    }
  }, [address, fetchWalletAchievements, fetchUnclaimedVouchers]);

  const { messages, sendMessage, setMessages, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/reviewer" }),
  });
  const isLoading = status === "submitted" || status === "streaming";
  const reviewMessage = messages.findLast((m) => m.role === "assistant");
  const partText = (type: "text" | "reasoning") =>
    reviewMessage?.parts
      .map((p) => (p.type === type ? p.text : ""))
      .join("") ?? "";
  const completion = partText("text");
  // Latest paragraph of the model's reasoning summary, shown while the report hasn't started
  const latestReasoning = partText("reasoning").trim().split(/\n\s*\n/).pop() ?? "";

  const isCodeEmpty = code.trim().length === 0;
  const severityCounts = React.useMemo(() => parseSeverityCounts(completion), [completion]);
  const reportRef = React.useRef<HTMLElement>(null);
  const intro = usePageIntro("reviewer");

  async function onReview() {
    const trimmedCode = code.trim();
    if (!trimmedCode) return;

    // On narrow screens the report sits below the editor, so bring it into view
    if (!window.matchMedia("(min-width: 1024px)").matches) {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      reportRef.current?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    }

    // Generate interaction ID and track start time
    const id = crypto.randomUUID();
    setInteractionId(id);
    setStartTime(Date.now());
    setLastSubmittedCodeLength(trimmedCode.length);
    hasTrackedRef.current = false; // Reset tracking flag for new review

    // Every review starts fresh rather than continuing a conversation
    setMessages([]);
    await sendMessage({ text: trimmedCode });
  }

  const handleClear = () => {
    setCode("");
    setActiveExampleId(null);
  };

  const handleExampleSelect = (id: string) => {
    const example = reviewerExamples.find((e) => e.id === id);
    if (!example) return;
    setCode(example.code);
    setActiveExampleId(example.id);
  };

  // Track interaction ONLY when streaming completes
  React.useEffect(() => {
    // Only track once when:
    // 1. Stream has finished (isLoading is false)
    // 2. We have a completion
    // 3. We haven't already tracked this interaction
    // 4. We have all required data
    if (
      !isLoading &&
      completion &&
      interactionId &&
      address &&
      startTime > 0 &&
      !hasTrackedRef.current
    ) {
      hasTrackedRef.current = true; // Mark as tracked

      const durationMs = Date.now() - startTime;

      // Count vulnerabilities mentioned in response (rough heuristic)
      const vulnerabilityCount =
        completion.match(/###\s+\d+\./g)?.length ?? 0;

      // Track the interaction
      trackAIInteraction({
        id: interactionId,
        walletAddress: address,
        toolType: "auditor",
        inputLength: lastSubmittedCodeLength,
        outputLength: completion.length,
        modelUsed: REVIEW_MODEL_ID,
        durationMs,
        vulnerabilitiesFound: vulnerabilityCount,
        sessionId,
      });
    }
  }, [
    isLoading,
    completion,
    interactionId,
    address,
    lastSubmittedCodeLength,
    startTime,
    sessionId,
  ]);

  // Secret achievement detection - triggers when AI finds vulnerabilities
  React.useEffect(() => {
    // Only check when:
    // 1. Stream has finished (isLoading is false)
    // 2. We have a completion
    // 3. User is connected
    if (!isLoading && completion && address) {
      // Check for reentrancy achievement
      if (
        !hasReentrancyAchievement && 
        !triggeredAchievementsRef.current.has(SECRET_ACHIEVEMENTS.REENTRANCY.achievementNumber) &&
        detectsReentrancy(completion)
      ) {
        triggeredAchievementsRef.current.add(SECRET_ACHIEVEMENTS.REENTRANCY.achievementNumber);
        submitSecretAchievement(SECRET_ACHIEVEMENTS.REENTRANCY);
      }

      // Check for Dead Man's Chest achievement
      if (
        !hasDeadMansChestAchievement && 
        !triggeredAchievementsRef.current.has(SECRET_ACHIEVEMENTS.DEAD_MANS_CHEST.achievementNumber) &&
        detectsDeadMansChest(completion)
      ) {
        triggeredAchievementsRef.current.add(SECRET_ACHIEVEMENTS.DEAD_MANS_CHEST.achievementNumber);
        submitSecretAchievement(SECRET_ACHIEVEMENTS.DEAD_MANS_CHEST);
      }
    }
  }, [
    isLoading,
    completion,
    address,
    hasReentrancyAchievement,
    hasDeadMansChestAchievement,
    detectsReentrancy,
    detectsDeadMansChest,
    submitSecretAchievement,
  ]);

  return (
    <WalletAuthGuard
      title="Wallet Required for Code Review"
      description="Connect your wallet to access our AI Solidity code reviewer for security analysis and optimization."
    >
      <div className="space-y-6">
        {intro.open ? (
        <section className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-slate-50 via-white to-emerald-50 text-zinc-900 shadow-xl dark:from-zinc-950 dark:via-zinc-900 dark:to-black dark:text-white">
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="absolute -top-8 right-0 h-40 w-40 rounded-full bg-emerald-300/40 blur-3xl dark:bg-emerald-500/40" />
            <div className="absolute bottom-0 left-12 h-48 w-48 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-500/30" />
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={intro.toggle}
            aria-expanded="true"
            className="absolute right-3 top-3 z-10 gap-1 text-muted-foreground"
          >
            Hide intro
            <ChevronUp className="size-4" />
          </Button>
          <div className="relative space-y-8 p-6 sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-emerald-800 dark:text-white/80">
                  <Badge className="bg-emerald-600/90 text-white shadow-sm hover:bg-emerald-600 dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
                    Solidity assurance
                  </Badge>
                  <Badge className="bg-white/80 text-emerald-900 shadow-sm hover:bg-white dark:bg-emerald-500/30 dark:text-white dark:hover:bg-emerald-500/40">
                    Zilliqa ready
                  </Badge>
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-semibold text-zinc-900 sm:text-4xl dark:text-white">
                    AI Solidity Reviewer
                  </h1>
                  <p className="text-base text-zinc-700 sm:text-lg dark:text-white/80">
                    Find exploitable bugs before you ever hit mainnet, with each issue
                    ranked, fixed, and linked to the lesson that explains it.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Reentrancy", "Access control", "Oracle manipulation", "Upgrade safety"].map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-emerald-200 bg-white/70 text-emerald-700 hover:bg-white dark:border-white/40 dark:bg-white/10 dark:text-white"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="grid w-full gap-4 text-left sm:grid-cols-3 lg:max-w-md">
                {[
                  {
                    label: "Example contracts",
                    value: String(reviewerExamples.length),
                    helper: `Including ${reviewerExamples.filter((e) => e.category === "historical").length} historical hacks`,
                  },
                  {
                    label: "Full review",
                    value: "~1 min",
                    helper: "Watch it reason live",
                  },
                  {
                    label: "Primary chain",
                    value: "Zilliqa",
                    helper: "Mainnet + testnet",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-emerald-100 bg-white/80 p-4 text-zinc-900 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white"
                  >
                    <p className="text-xs uppercase text-emerald-700 dark:text-white/70">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-semibold text-emerald-900 dark:text-white">
                      {stat.value}
                    </p>
                    <p className="text-xs text-zinc-600 dark:text-white/60">
                      {stat.helper}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        ) : (
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">AI Solidity Reviewer</h1>
              <p className="text-sm text-muted-foreground">Find exploitable bugs before mainnet, with each issue ranked, fixed, and linked to a lesson.</p>
            </div>
            <Button variant="ghost" size="sm" onClick={intro.toggle} aria-expanded="false" className="gap-1 text-muted-foreground">
              Show intro
              <ChevronDown className="size-4" />
            </Button>
          </div>
        )}

        <div className="grid gap-4 lg:h-[calc(100dvh-7rem)] lg:min-h-[600px] lg:grid-cols-2 lg:grid-rows-1">
          <section
            aria-label="Contract"
            className="flex min-h-0 flex-col overflow-hidden rounded-xl border bg-card shadow-sm"
          >
            <div className="flex flex-wrap items-center gap-2 border-b px-3 py-2">
              <Select value={activeExampleId ?? ""} onValueChange={handleExampleSelect}>
                <SelectTrigger
                  size="sm"
                  className="w-full sm:w-64"
                  aria-label="Load an example contract"
                >
                  <SelectValue placeholder="Load an example contract" />
                </SelectTrigger>
                <SelectContent>
                  {reviewerExampleCategories.map((category) => (
                    <SelectGroup key={category.id}>
                      <SelectLabel>{category.label}</SelectLabel>
                      {reviewerExamples
                        .filter((e) => e.category === category.id)
                        .map((example) => (
                          <SelectItem key={example.id} value={example.id}>
                            {example.label}
                          </SelectItem>
                        ))}
                    </SelectGroup>
                  ))}
                </SelectContent>
              </Select>
              <div className="ml-auto flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={handleClear} disabled={isLoading}>
                  Clear
                </Button>
                <Button size="sm" onClick={onReview} disabled={isLoading || isCodeEmpty}>
                  {isLoading ? "Reviewing…" : "Review contract"}
                </Button>
              </div>
            </div>
            <CodeInput
              value={code}
              onChange={(value) => {
                setCode(value);
                setActiveExampleId(null);
              }}
              aria-label="Solidity contract"
              placeholder="Paste your Solidity contract here"
              className="h-[55vh] lg:h-auto lg:flex-1"
            />
            <p className="truncate border-t px-3 py-1.5 text-xs text-muted-foreground">
              {activeExample
                ? `${activeExample.label}: ${activeExample.description}`
                : "Your contract"}
            </p>
          </section>

          <section
            ref={reportRef}
            aria-label="Review"
            className="flex min-h-[50vh] scroll-mt-20 flex-col overflow-hidden rounded-xl border bg-card shadow-sm lg:min-h-0"
          >
            <div className="flex min-h-11 flex-wrap items-center gap-x-4 gap-y-1 border-b px-4 py-2">
              <h2 className="text-sm font-semibold">Review</h2>
              {severityCounts && (
                <ul className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs" aria-label="Findings by severity">
                  {SEVERITIES.map(({ key, dot }) => (
                    <li
                      key={key}
                      className={cn(
                        "flex items-center gap-1.5",
                        severityCounts[key] === 0 && "text-muted-foreground/60"
                      )}
                    >
                      <span className={cn("size-2 rounded-full", severityCounts[key] === 0 ? "bg-muted-foreground/30" : dot)} />
                      <span className="tabular-nums font-medium">{severityCounts[key]}</span> {key}
                    </li>
                  ))}
                </ul>
              )}
              {isLoading && (
                <span className="ml-auto flex items-center gap-2 text-xs text-muted-foreground" role="status">
                  <span className="size-2 animate-pulse rounded-full bg-primary" />
                  {completion ? "Writing report" : "Analysing"}
                </span>
              )}
            </div>

            <div className="scrollbar-visible flex flex-1 flex-col px-5 py-4 lg:min-h-0 lg:overflow-y-auto">
              {completion ? (
                <div className="prose max-w-none text-sm">
                  <Response>{completion}</Response>
                  {error && !isLoading && (
                    <p role="alert" className="not-prose mt-4 text-sm text-destructive">
                      The review stopped before it finished. Choose Review contract to run it again.
                    </p>
                  )}
                </div>
              ) : error ? (
                <div className="m-auto max-w-sm text-center text-sm" role="alert">
                  <p className="font-medium text-destructive">The review didn&apos;t complete.</p>
                  <p className="text-muted-foreground">Choose Review contract to try again in a moment.</p>
                </div>
              ) : isLoading ? (
                <div className="m-auto w-full max-w-md text-center text-sm text-muted-foreground">
                  <div className="mx-auto mb-4 size-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
                  <p className="font-medium text-foreground" role="status">Reviewing your contract…</p>
                  <p className="text-xs">
                    It works through the code first, then writes the report. A full review takes about a minute.
                  </p>
                  {latestReasoning && (
                    <p className="mt-5 rounded-lg border border-dashed bg-muted/40 px-4 py-3 text-left text-xs leading-relaxed text-foreground/80" aria-live="polite">
                      {latestReasoning}
                    </p>
                  )}
                </div>
              ) : (
                <div className="m-auto max-w-sm text-center text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">No review yet</p>
                  <p className="text-xs">
                    Choose Review contract to check your code. Not sure where to start? Try one of
                    the historical hacks from the examples list.
                  </p>
                </div>
              )}
            </div>

            {completion && !isLoading && interactionId && (
              <div className="border-t px-4 py-2">
                <AIFeedback interactionId={interactionId} toolType="auditor" />
              </div>
            )}
          </section>
        </div>

        <p className="text-xs text-muted-foreground">
          This is an automated review, not an audit. It can miss serious bugs or flag issues that
          aren&apos;t exploitable, so reproduce and test every finding, and get an independent audit
          before deploying anything that holds real funds.
        </p>

        {/* Secret Achievement Success Modal */}
        {secretAchievementModal.show && secretAchievementModal.achievement && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div 
              className={cn(
                "bg-gradient-to-br p-8 rounded-xl shadow-2xl text-center max-w-md mx-4 border-4 animate-pulse",
                secretAchievementModal.achievement.gradientFrom,
                secretAchievementModal.achievement.gradientTo,
                secretAchievementModal.achievement.borderColor
              )}
            >
              <div className="text-6xl mb-4">{secretAchievementModal.achievement.emoji}</div>
              <h2 className="text-2xl font-bold text-white mb-2">Secret Achievement Discovered!</h2>
              <h3 className="text-lg font-semibold text-white/90 mb-4">
                {secretAchievementModal.achievement.title}
              </h3>
              <p className="text-white/80 mb-6">
                {secretAchievementModal.achievement.description}
              </p>
              <div className="space-y-3">
                <p className="text-sm text-white/70 bg-black/20 p-3 rounded-lg">
                  📜 Check your achievements and unclaimed vouchers to claim your NFT!
                </p>
                <button
                  onClick={() => setSecretAchievementModal({ show: false, achievement: null })}
                  className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg transition-colors border border-white/30"
                >
                  Continue Reviewing
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Secret Achievement Error Message */}
        {secretError && (
          <div className="fixed top-4 right-4 bg-red-500/90 backdrop-blur text-white p-4 rounded-lg shadow-lg max-w-md z-40">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">⚠️</span>
              <span className="font-semibold">Secret Achievement Failed</span>
            </div>
            <p className="text-sm">{secretError}</p>
            <button
              onClick={() => setSecretError(null)}
              className="mt-2 text-xs bg-white/20 hover:bg-white/30 px-3 py-1 rounded transition-colors"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Loading overlay for secret achievement submission */}
        {isSubmittingSecret && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-40">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-xl text-center">
              <div className="animate-spin h-8 w-8 border-4 border-emerald-500 border-t-transparent rounded-full mx-auto mb-4" />
              <p className="text-sm text-muted-foreground">Claiming secret achievement...</p>
            </div>
          </div>
        )}
      </div>
    </WalletAuthGuard>
  );
}
