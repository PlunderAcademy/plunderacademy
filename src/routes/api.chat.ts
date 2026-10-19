import { createFileRoute } from "@tanstack/react-router";
import {
  streamText,
  createUIMessageStream,
  createUIMessageStreamResponse,
  generateId,
  type UIMessage,
  convertToModelMessages,
} from "ai";
import { getZilliqaInsightsTools, formatMCPToolResult } from "@/lib/zilliqa-mcp";
import chatSystemPrompt from "@/prompts/chat-system-prompt.md?raw";
import { gatewayModel } from "@/lib/ai";

// ============================================================================
// Model Configuration
// ============================================================================
// Fixed server-side so callers can't pick a pricier model on our credits
const MODEL = "anthropic/claude-haiku-5.5";

// Chat runs with thinking off: in the prompt evals it answered and routed tools as well
// as with thinking on, and the first words arrive in ~1.5s instead of ~5s
const chatModel = () => gatewayModel(MODEL, { disableThinking: true });

// ============================================================================
// System Prompt
// ============================================================================
function getSystemPrompt(): string {
  let content = chatSystemPrompt.replace(/^# .*\n\n/, "");

  // Inject current date for accurate time-based queries
  const now = new Date();
  const currentDate = now.toISOString().split("T")[0]; // YYYY-MM-DD
  const currentDateFormatted = now.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const dateContext = `\n\n## Current Date\n**Today is ${currentDateFormatted} (${currentDate}).** Use this as the reference point for all time-based queries like "this week", "yesterday", "last month", etc.\n`;

  // Insert date context near the top (after the first section)
  const firstSectionEnd = content.indexOf("\n## ", 10);
  if (firstSectionEnd > 0) {
    content = content.slice(0, firstSectionEnd) + dateContext + content.slice(firstSectionEnd);
  } else {
    content = dateContext + content;
  }

  return content;
}

// ============================================================================
// Request Handler
// ============================================================================
async function handleChat(req: Request) {
  const body = (await req.json().catch(() => ({}))) as {
    messages?: UIMessage[];
    prompt?: string;
  };

  if (Array.isArray(body?.messages) && body.messages.length > 0) {
    // Zilliqa Insights tools, connected for this request only
    const mcp = await getZilliqaInsightsTools();
    console.log(`[Chat] Model: ${MODEL}, MCP tools available: ${mcp ? Object.keys(mcp.tools).length : 0}`);

    // If MCP tools are available, use two-phase approach:
    // Phase 1: Let model decide and execute tools
    // Phase 2: Generate response with tool results in context
    if (mcp) {
      const requestId = Math.random().toString(36).substring(2, 15);
      const messages = convertToModelMessages(body.messages);

      const stream = createUIMessageStream({
        execute: async ({ writer }) => {
          // One streaming call with the tools attached: general questions stream straight
          // away, and validator questions come back as tool results from the same step
          const first = streamText({
            model: chatModel(),
            system: getSystemPrompt(),
            messages,
            tools: mcp.tools,
          });
          // Forward parts in order so the formatted results can't interleave with them
          for await (const part of first.toUIMessageStream({ sendFinish: false })) {
            writer.write(part);
          }

          const toolResults = await first.toolResults.finally(mcp.close);
          console.log(`[${requestId}] Tool calls: ${(await first.toolCalls).length}, results: ${toolResults.length}`);

          // Tool results are already formatted as markdown, so they're streamed as-is
          // rather than through a second model call
          const formattedResults = toolResults
            .map((tr) => formatMCPToolResult(tr.toolName, tr))
            .join("\n\n");
          if (formattedResults.trim()) {
            const id = generateId();
            writer.write({ type: "text-start", id });
            writer.write({ type: "text-delta", id, delta: formattedResults });
            writer.write({ type: "text-end", id });
          }
          writer.write({ type: "finish" });
        },
        onError: (error) => {
          console.error(`[${requestId}] Chat stream error:`, error);
          return "The reply didn't complete.";
        },
      });

      return createUIMessageStreamResponse({ stream });
    }

    // No tools available - use regular streaming
    const result = await streamText({
      model: chatModel(),
      system: getSystemPrompt(),
      messages: convertToModelMessages(body.messages),
    });

    const requestId = Math.random().toString(36).substring(2, 15);
    console.log(`[${requestId}] Chat (messages) started with model: ${MODEL}`);

    // Log token usage
    result.usage.then((usage) => {
      console.log(`[${requestId}] Chat Token usage:`, usage);
    }).catch((error) => {
      console.error(`[${requestId}] Error getting chat token usage:`, error);
    });

    result.finishReason.then((finishReason) => {
      console.log(`[${requestId}] Chat Finish reason:`, finishReason);
    }).catch((error) => {
      console.error(`[${requestId}] Error getting chat finish reason:`, error);
    });

    return result.toUIMessageStreamResponse();
  }

  if (typeof body?.prompt === "string" && body.prompt.trim()) {
    // Tools run during the stream, so the MCP connection closes once it ends
    const mcp = await getZilliqaInsightsTools();
    const result = await streamText({
      model: chatModel(),
      system: getSystemPrompt(),
      prompt: body.prompt.trim(),
      ...(mcp && {
        tools: mcp.tools,
        maxSteps: 5,
        onFinish: mcp.close,
        onAbort: mcp.close,
        onError: ({ error }) => {
          console.error("[Chat] Stream error:", error);
          return mcp.close();
        },
      }),
    });

    const requestId = Math.random().toString(36).substring(2, 15);
    console.log(`[${requestId}] Chat (prompt) started with model: ${MODEL}`);

    result.usage.then((usage) => {
      console.log(`[${requestId}] Chat Token usage:`, usage);
    }).catch((error) => {
      console.error(`[${requestId}] Error getting chat token usage:`, error);
    });

    result.finishReason.then((finishReason) => {
      console.log(`[${requestId}] Chat Finish reason:`, finishReason);
    }).catch((error) => {
      console.error(`[${requestId}] Error getting chat finish reason:`, error);
    });

    return result.toTextStreamResponse();
  }

  return new Response("Invalid request: provide `prompt` or `messages`.", { status: 400 });
}

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: ({ request }) => handleChat(request),
    },
  },
});
