import { streamText } from "ai";
import { azure } from "@ai-sdk/azure";

export const runtime = "nodejs";
export const maxDuration = 60;

// Available deployments you mentioned (adjust to your actual Azure deployment names):
// - gpt-5-mini
// - gpt-5-nano   <- default
// - gpt-oss-120b
// - grok-3-mini
// - Llama-4-Maverick-17B-128E-Instruct-FP8

// Default Azure deployment for the reviewer endpoint
const DEFAULT_DEPLOYMENT = "gpt-oss-120b";

// Minimal system prompt used now (full spec below as a comment)
const SYSTEM_PROMPT =
  "You are a blockchain security expert. Audit the provided Solidity code and return a concise markdown report with prioritized findings, minimal fixes, and brief justifications.";

/*
Full end-state prompt (kept for reference and future expansion):

Solidity Smart Contract Security Audit Prompt
I need you to act as a blockchain security expert and do a comprehensive audit of this Solidity codebase. Your goal is to identify critical vulnerabilities and provide practical fixes with minimal code changes.
Follow this 3-phase approach:
Phase 1: Contract Scan
Go through all Solidity files (.sol). Focus especially on:
Access control mechanisms (onlyOwner, roles, permissions)
External function calls and interactions
State-changing functions and modifiers
Ether/token transfers and withdrawals
Mathematical operations and calculations
Oracle integrations and external data sources
Constructor and initialization logic
Fallback and receive functions
Any CVEs you are aware of
Flag anything risky with:
Contract name, function name, and line numbers
Clear explanations of the vulnerability
Priority level (Critical, High, Medium, Low)
Phase 2: Vulnerability Analysis + Fix Plan
For every issue identified:
Explain the smart contract vulnerability
Describe potential attack scenarios and exploit methods
Estimate potential financial impact
Recommend the most minimal, gas-efficient fix
Explain how the fix prevents the attack vector
Avoid overengineering. Focus on battle-tested patterns that secure the contract without breaking existing functionality.
Phase 3: Secure Implementation
Implement minimal, targeted fixes
Show before/after code diffs
Verify fixes don't introduce new attack vectors
Note any changes requiring additional testing or deployment considerations
Flag functions needing integration/mainnet testing
Critical Vulnerability Categories to Prioritize:
Reentrancy attacks - External calls before state updates
Access control bypass - Missing or flawed permission checks
Integer overflow/underflow - Unsafe math operations
Oracle manipulation - Price feed dependencies and validation
Flash loan attacks - Single-transaction exploit scenarios
Front-running/MEV - Transaction ordering dependencies
Gas griefing - DoS through gas consumption
Unchecked external calls - Silent failures in low-level calls
Timestamp dependence - Block.timestamp manipulation risks
Improper inheritance - Diamond problem and storage collisions
Missing input validation - Malformed parameters causing issues
Centralization risks - Single points of failure in governance
Return the final security report as a structured markdown document suitable for development teams and stakeholders.
Be precise about attack vectors. Be realistic about fix complexity. Prioritize by potential financial impact and likelihood of exploitation.
*/

type ReviewerRequestBody = {
  // Prefer `prompt` for compatibility with useCompletion
  prompt?: string;
  // Optional: accept raw code and build the prompt on the server
  code?: string;
  model?: string;
};

export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as ReviewerRequestBody;

  const deploymentName =
    typeof body?.model === "string" && body.model.trim()
      ? body.model.trim()
      : DEFAULT_DEPLOYMENT;

  // Prefer prompt; if only code is provided, wrap it into a prompt
  const prompt =
    typeof body?.prompt === "string" && body.prompt.trim().length > 0
      ? body.prompt.trim()
      : typeof body?.code === "string" && body.code.trim().length > 0
      ? `Audit the following Solidity code and provide findings:
\n\n${body.code.trim()}`
      : undefined;

  if (!prompt) {
    return new Response("Invalid request: provide `prompt` or `code`.", {
      status: 400,
    });
  }

  const result = await streamText({
    model: azure(deploymentName),
    system: SYSTEM_PROMPT,
    prompt,
  });

  // Default UI hook uses data (UI message) protocol; reviewer page uses text protocol.
  // Opt for text streaming response to support both curl and useCompletion(text) easily.
  return result.toTextStreamResponse();
}


