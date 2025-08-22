import { streamText, type UIMessage, convertToModelMessages } from "ai";
// Azure AI SDK (commented out in favor of AI Gateway)
// import { azure } from "@ai-sdk/azure";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const maxDuration = 30;

// Available models through AI Gateway (examples):
// - openai/gpt-4o-mini ($0.15/$0.60) - formatting here wasnt very nice
// - openai/gpt-5-mini ($0.25/$2) - looks really nice but was quite slow
// - openai/gpt-5-nano ($0.05/$0.40) - formatting here wasnt very nice
// - openai/gpt-oss-120b ($0.15/$0.75) - this is really nice and fast on cerebras
// - xai/grok-3-mini ($0.30/$0.50) - its ok but think oss and 2.5 flash lite are better
// - meta/llama-4-maverick ($0.20/$0.60) - its ok but think oss and 2.5 flash lite are better
// - google/gemini-2.0-flash ($0.15/$0.60) - formatting here wasnt very nice
// - google/gemini-2.0-flash-lite ($0.07/$0.30) - 2.5 flash lite is better
// - google/gemini-2.5-flash ($0.30/$2.50) - quite slow
// - google/gemini-2.5-flash-lite ($0.10/$0.40) - REALLY like this one
// Best models:
// - google/gemini-2.5-flash-lite
// - openai/gpt-oss-120b

// Default model for AI Gateway
const DEFAULT_MODEL = "openai/gpt-oss-120b";

// Azure deployment names (commented out but preserved for future use):
// To re-enable Azure: uncomment azure import, uncomment DEFAULT_DEPLOYMENT, 
// update model logic, and uncomment the azure() call in streamText
// - gpt-4o-mini ($0.15/$0.60)
// - gpt-5-mini ($0.25/$2)
// - gpt-5-nano ($0.05/$0.40) 
// - gpt-oss-120b ($0.15/$0.75)
// - grok-3-mini ($0.30/$0.50)
// - Llama-4-Maverick-17B-128E-Instruct-FP8 ($0.19/$0.72) - 128k context
// const DEFAULT_DEPLOYMENT = "gpt-oss-120b";

// Load system prompt from markdown file
function getSystemPrompt(): string {
  try {
    const promptPath = join(process.cwd(), 'src/app/api/chat/chat-system-prompt.md');
    const content = readFileSync(promptPath, 'utf-8');
    // Remove the markdown title and return the content
    return content.replace(/^# .*\n\n/, '');
  } catch (error) {
    console.error('Error loading system prompt:', error);
    // Fallback to basic prompt if file reading fails
    return "You are a specialized blockchain training assistant focused exclusively on Zilliqa 2.0 and EVM development. Help developers learn and build on the Zilliqa 2.0 ecosystem.";
  }
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as {
    messages?: UIMessage[];
    prompt?: string;
    model?: string;
  };

  // AI Gateway model selection (format: provider/model-name)
  const modelName =
    typeof body?.model === "string" && body.model.trim()
      ? body.model.trim()
      : DEFAULT_MODEL;

  // Legacy Azure deployment selection (commented out):
  // const modelFromClient = typeof body?.model === "string" && body.model.trim() ? body.model.trim() : undefined;
  // const deploymentName = modelFromClient ?? DEFAULT_DEPLOYMENT;

  if (Array.isArray(body?.messages) && body.messages.length > 0) {
    // AI Gateway with provider options
    const result = await streamText({
      model: modelName, // e.g., "openai/gpt-oss-120b" via groq
      system: getSystemPrompt(),
      messages: convertToModelMessages(body.messages),
      // need to comment this out to use the default gateway
      // providerOptions: {
      //   gateway: {
      //     only: ['cerebras'],
      //   },
      // },
    });

    // Legacy Azure call (commented out):
    // const result = await streamText({
    //   model: azure(deploymentName),
    //   system: getSystemPrompt(),
    //   messages: convertToModelMessages(body.messages),
    // });

    // Log token usage and finish reason after stream completes
    result.usage.then((usage) => {
      console.log('Chat Token usage:', usage);
    }).catch((error) => {
      console.error('Error getting chat token usage:', error);
    });

    result.finishReason.then((finishReason) => {
      console.log('Chat Finish reason:', finishReason);
    }).catch((error) => {
      console.error('Error getting chat finish reason:', error);
    });

    return result.toUIMessageStreamResponse();
  }

  if (typeof body?.prompt === "string" && body.prompt.trim()) {
    // AI Gateway with provider options
    const result = await streamText({
      model: modelName, // e.g., "openai/gpt-oss-120b"
      system: getSystemPrompt(),
      prompt: body.prompt.trim(),
      // need to comment this out to use the default gateway
      providerOptions: {
        gateway: {
          only: ['cerebras'],
        },
      },
    });

    // Legacy Azure call (commented out):
    // const result = await streamText({
    //   model: azure(deploymentName),
    //   system: getSystemPrompt(),
    //   prompt: body.prompt.trim(),
    // });

    // Log token usage and finish reason after stream completes
    result.usage.then((usage) => {
      console.log('Chat Token usage:', usage);
    }).catch((error) => {
      console.error('Error getting chat token usage:', error);
    });

    result.finishReason.then((finishReason) => {
      console.log('Chat Finish reason:', finishReason);
    }).catch((error) => {
      console.error('Error getting chat finish reason:', error);
    });

    return result.toTextStreamResponse();
  }

  return new Response("Invalid request: provide `prompt` or `messages`.", { status: 400 });
}


