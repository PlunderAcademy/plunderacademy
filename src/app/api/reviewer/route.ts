import { streamText } from "ai";
// Azure AI SDK (commented out in favor of AI Gateway)
// import { azure } from "@ai-sdk/azure";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const maxDuration = 60;

// Available models through AI Gateway (examples):
// - openai/gpt-4o-mini ($0.15/$0.60)
// - openai/gpt-5-mini ($0.25/$2)
// - openai/gpt-5-nano ($0.05/$0.40)
// - openai/gpt-oss-120b ($0.15/$0.75) - using Groq provider for better pricing
// - xai/grok-3-mini ($0.30/$0.50)
// - meta/llama-4-maverick ($0.20/$0.60)
// - google/gemini-2.0-flash ($0.15/$0.60)
// - google/gemini-2.0-flash-lite ($0.07/$0.30)
// - google/gemini-2.5-flash ($0.30/$2.50)
// - google/gemini-2.5-flash-lite ($0.10/$0.40)

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
    const promptPath = join(process.cwd(), 'src/app/api/reviewer/reviewer-system-prompt.md');
    const content = readFileSync(promptPath, 'utf-8');
    // Remove the markdown title and return the content
    return content.replace(/^# .*\n\n/, '');
  } catch (error) {
    console.error('Error loading reviewer system prompt:', error);
    // Fallback to basic prompt if file reading fails
    return "You are a blockchain security expert. Audit the provided Solidity code and return a concise markdown report with prioritized findings, minimal fixes, and brief justifications.";
  }
}

type ReviewerRequestBody = {
  prompt?: string;
  model?: string;
};

export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as ReviewerRequestBody;

  // AI Gateway model selection (format: provider/model-name)
  const modelName =
    typeof body?.model === "string" && body.model.trim()
      ? body.model.trim()
      : DEFAULT_MODEL;

  // Legacy Azure deployment selection (commented out):
  // const deploymentName =
  //   typeof body?.model === "string" && body.model.trim()
  //     ? body.model.trim()
  //     : DEFAULT_DEPLOYMENT;

  // Extract prompt from request body
  const prompt = body?.prompt?.trim();

  if (!prompt) {
    return new Response("Invalid request: provide `prompt`.", {
      status: 400,
    });
  }

  // AI Gateway with provider options
  const result = await streamText({
    model: modelName, // e.g., "openai/gpt-oss-120b"
    system: getSystemPrompt(),
    prompt,
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
  //   prompt,
  // });

  // Return text stream response (works well with useCompletion)
  return result.toTextStreamResponse();
}


