import { createFileRoute } from "@tanstack/react-router";
import { streamText, type UIMessage } from "ai";
import reviewerSystemPrompt from "@/prompts/reviewer-system-prompt.md?raw";
import { gatewayModel } from "@/lib/ai";

// Fixed server-side so callers can't pick a pricier model on our credits
const MODEL = "anthropic/claude-haiku-5.5";

// Load system prompt from bundled markdown, stripping the title
function getSystemPrompt(): string {
  return reviewerSystemPrompt.replace(/^# .*\n\n/, "");
}

type ReviewerRequestBody = {
  messages?: UIMessage[];
};

async function handleReview(req: Request) {
  const body = (await req.json().catch(() => ({}))) as ReviewerRequestBody;

  // Each review is independent: only the latest user message (the contract) is used
  const lastUser = body?.messages?.findLast((m) => m.role === "user");
  const prompt = lastUser?.parts
    .map((p) => (p.type === "text" ? p.text : ""))
    .join("")
    .trim();

  if (!prompt) {
    return new Response("Invalid request: provide the contract as a user message.", {
      status: 400,
    });
  }

  const result = streamText({
    model: gatewayModel(MODEL),
    system: getSystemPrompt(),
    prompt,
    // Summaries of the model's reasoning stream while it thinks (~30s before the report
    // starts), so the reviewer page can show what it's checking
    providerOptions: { anthropic: { thinking: { type: "adaptive", display: "summarized" } } },
  });

  // Log the complete response for debugging formatting issues
  const requestId = Math.random().toString(36).substring(2, 15);
  console.log(`[${requestId}] Starting review with model: ${MODEL}`);
  console.log(`[${requestId}] Input prompt length: ${prompt.length} chars`);

  result.text.then((fullResponse) => {
    console.log(`[${requestId}] === RAW AI RESPONSE START ===`);
    console.log(fullResponse);
    console.log(`[${requestId}] === RAW AI RESPONSE END ===`);
    console.log(`[${requestId}] Response length: ${fullResponse.length} chars`);

    // Basic format validation
    const hasExecutiveSummary = fullResponse.includes('## Executive Summary');
    const hasCriticalFindings = fullResponse.includes('## Critical Findings');
    const hasDetailedAnalysis = fullResponse.includes('## Detailed Analysis');
    const hasRecommendations = fullResponse.includes('## Recommendations');
    const hasZilliqaNotes = fullResponse.includes('## Zilliqa 2.0 Deployment Notes');

    // Check for the problematic markdown code block wrapper
    const hasMarkdownWrapper = fullResponse.trim().startsWith('```markdown') && fullResponse.trim().endsWith('```');
    const startsCorrectly = fullResponse.trim().startsWith('## Executive Summary');

    console.log(`[${requestId}] Format validation:`, {
      hasExecutiveSummary,
      hasCriticalFindings,
      hasDetailedAnalysis,
      hasRecommendations,
      hasZilliqaNotes,
      allSectionsPresent: hasExecutiveSummary && hasCriticalFindings && hasDetailedAnalysis && hasRecommendations && hasZilliqaNotes,
      hasMarkdownWrapper: hasMarkdownWrapper,
      startsCorrectly: startsCorrectly,
      formatIssue: hasMarkdownWrapper ? 'WRAPPED_IN_CODE_BLOCK' : !startsCorrectly ? 'WRONG_START' : 'OK'
    });
  }).catch((error) => {
    console.error(`[${requestId}] Error getting full response:`, error);
  });

  // Log token usage and finish reason after stream completes
  result.usage.then((usage) => {
    console.log(`[${requestId}] Token usage:`, usage);
  }).catch((error) => {
    console.error(`[${requestId}] Error getting token usage:`, error);
  });

  result.finishReason.then((finishReason) => {
    console.log(`[${requestId}] Finish reason:`, finishReason);
  }).catch((error) => {
    console.error(`[${requestId}] Error getting finish reason:`, error);
  });

  return result.toUIMessageStreamResponse({ sendReasoning: true });
}

export const Route = createFileRoute("/api/reviewer")({
  server: {
    handlers: {
      POST: ({ request }) => handleReview(request),
    },
  },
});
