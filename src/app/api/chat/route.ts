import { streamText, type UIMessage, convertToModelMessages } from "ai";
import { azure } from "@ai-sdk/azure";

export const runtime = "nodejs";
export const maxDuration = 30;

// Available deployments you mentioned (adjust to your actual Azure deployment names):
// - gpt-5-mini
// - gpt-5-nano   <- default
// - gpt-oss-120b
// - grok-3-mini
// - Llama-4-Maverick-17B-128E-Instruct-FP8

const DEFAULT_DEPLOYMENT = "gpt-5-nano";

// System prompt used for all chats
const SYSTEM_PROMPT =
  "you are a trainer to help people in all things blockchain, and especially zilliqa 2.0 and evm and solidity.  try to keep to talk to these subjects only.";

export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as {
    messages?: UIMessage[];
    prompt?: string;
    model?: string;
  };

  const modelFromClient = typeof body?.model === "string" && body.model.trim() ? body.model.trim() : undefined;
  const deploymentName = modelFromClient ?? DEFAULT_DEPLOYMENT;

  if (Array.isArray(body?.messages) && body.messages.length > 0) {
    const result = await streamText({
      model: azure(deploymentName),
      system: SYSTEM_PROMPT,
      messages: convertToModelMessages(body.messages),
    });

    return result.toUIMessageStreamResponse();
  }

  if (typeof body?.prompt === "string" && body.prompt.trim()) {
    const result = await streamText({
      model: azure(deploymentName),
      system: SYSTEM_PROMPT,
      prompt: body.prompt.trim(),
    });

    return result.toTextStreamResponse();
  }

  return new Response("Invalid request: provide `prompt` or `messages`.", { status: 400 });
}


