import { streamText, generateText, type UIMessage, convertToModelMessages } from "ai";
import { readFileSync } from "fs";
import { join } from "path";
import { getZilliqaInsightsTools, formatMCPToolResult } from "@/lib/zilliqa-mcp";

export const runtime = "nodejs";
export const maxDuration = 60; // Increased for MCP tool calls

// ============================================================================
// Model Configuration
// ============================================================================
// Available models through AI Gateway (examples):
// - openai/gpt-4o-mini ($0.15/$0.60) - its ok but think oss and 2.5 flash lite are better, a little slower
// - openai/gpt-5-mini ($0.25/$2) - looks really nice but was really slow
// - openai/gpt-5-nano ($0.05/$0.40) - its ok but think oss and 2.5 flash lite are better, a little slower
// - openai/gpt-oss-120b ($0.15/$0.75) - this is really nice and fast on cerebras
// - xai/grok-3-mini ($0.30/$0.50) - its ok but think oss and 2.5 flash lite are better, a little slower
// - meta/llama-4-maverick ($0.20/$0.60) - its ok but think oss and 2.5 flash lite are better
// - google/gemini-2.0-flash ($0.15/$0.60) - 2.5 flash lite is better 
// - google/gemini-2.0-flash-lite ($0.07/$0.30) - 2.5 flash lite is better
// - google/gemini-2.5-flash ($0.30/$2.50) - quite slow
// - google/gemini-2.5-flash-lite ($0.10/$0.40) - REALLY like this one
// Best models:
// - google/gemini-2.5-flash-lite
// - openai/gpt-oss-120b

// Default model for AI Gateway
const DEFAULT_MODEL = "openai/gpt-oss-120b";

// ============================================================================
// System Prompt
// ============================================================================
function getSystemPrompt(): string {
  try {
    const promptPath = join(process.cwd(), 'src/app/api/chat/chat-system-prompt.md');
    const content = readFileSync(promptPath, 'utf-8');
    return content.replace(/^# .*\n\n/, '');
  } catch (error) {
    console.error('Error loading system prompt:', error);
    return "You are a specialized blockchain training assistant focused exclusively on Zilliqa 2.0 and EVM development. Help developers learn and build on the Zilliqa 2.0 ecosystem.";
  }
}

// ============================================================================
// Request Handler
// ============================================================================
export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as {
    messages?: UIMessage[];
    prompt?: string;
    model?: string;
  };

  const modelName =
    typeof body?.model === "string" && body.model.trim()
      ? body.model.trim()
      : DEFAULT_MODEL;

  // Get Zilliqa Insights tools (cached after first request)
  const tools = await getZilliqaInsightsTools();
  const hasTools = tools && Object.keys(tools).length > 0;
  
  console.log(`[Chat] Model: ${modelName}, MCP tools available: ${hasTools ? Object.keys(tools).length : 0}`);

  if (Array.isArray(body?.messages) && body.messages.length > 0) {
    // If MCP tools are available, use two-phase approach:
    // Phase 1: Let model decide and execute tools
    // Phase 2: Generate response with tool results in context
    if (hasTools) {
      const requestId = Math.random().toString(36).substring(2, 15);
      console.log(`[${requestId}] Using two-phase MCP tool execution...`);
      
      // Phase 1: Execute with tools (maxSteps: 1 to just get tool calls)
      const phase1 = await generateText({
        model: modelName,
        system: getSystemPrompt(),
        messages: convertToModelMessages(body.messages),
        tools,
        // @ts-expect-error - maxSteps exists in runtime but types are outdated
        maxSteps: 1,
        providerOptions: {
          gateway: {
            only: ['cerebras'],
          },
        },
      });

      const toolCallCount = phase1.toolCalls?.length || 0;
      const toolResultCount = phase1.toolResults?.length || 0;
      console.log(`[${requestId}] Phase 1 complete - Tool calls: ${toolCallCount}, Results: ${toolResultCount}`);

      // If tools were called, format and return the results
      if (phase1.toolResults && phase1.toolResults.length > 0) {
        const formattedResults = phase1.toolResults
          .map(tr => formatMCPToolResult(tr.toolName, tr))
          .join('\n\n');

        console.log(`[${requestId}] Formatting MCP response with minimal AI call`);

        // Make a minimal AI call to format the response properly for the UI
        const formattedResponse = await streamText({
          model: modelName,
          system: "You are a data formatter. Output ONLY the exact data given to you. Do not add greetings, explanations, context, recommendations, or any other text. Just the data.",
          prompt: formattedResults,
          providerOptions: {
            gateway: {
              only: ['cerebras'],
            },
          },
        });

        return formattedResponse.toUIMessageStreamResponse();
      }

      // No tools called - stream a proper response
      console.log(`[${requestId}] No tools called, streaming normal response`);
      const normalResponse = await streamText({
        model: modelName,
        system: getSystemPrompt(),
        messages: convertToModelMessages(body.messages),
        providerOptions: {
          gateway: {
            only: ['cerebras'],
          },
        },
      });

      return normalResponse.toUIMessageStreamResponse();
    }

    // No tools available - use regular streaming
    const result = await streamText({
      model: modelName, // e.g., "openai/gpt-oss-120b" via groq
      system: getSystemPrompt(),
      messages: convertToModelMessages(body.messages),
      // need to comment this out to use the default gateway
      providerOptions: {
        gateway: {
          only: ['cerebras'],
        },
      },
    });

    const requestId = Math.random().toString(36).substring(2, 15);
    console.log(`[${requestId}] Chat (messages) started with model: ${modelName}`);

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
    const result = await streamText({
      model: modelName,
      system: getSystemPrompt(),
      prompt: body.prompt.trim(),
      ...(hasTools && {
        tools,
        maxSteps: 5,
      }),
      providerOptions: {
        gateway: {
          only: ['cerebras'],
        },
      },
    });

    const requestId = Math.random().toString(36).substring(2, 15);
    console.log(`[${requestId}] Chat (prompt) started with model: ${modelName}`);

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
