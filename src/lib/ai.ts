import { env } from "cloudflare:workers";
import { createAnthropic } from "@ai-sdk/anthropic";

// Anthropic models run through the Workers AI binding and Cloudflare AI Gateway,
// billed to the account's AI Gateway credits (Unified Billing), so no Anthropic
// key is needed. The binding accepts Anthropic Messages request bodies, so the
// AI SDK's Anthropic provider is pointed at it via a custom fetch.
const AI_GATEWAY_ID = "default";

type GatewayModelOptions = {
  // Claude Haiku 5.5 thinks by default. @ai-sdk/anthropic v2 never sends
  // `thinking: disabled` (it treats omitting the field as "off", which is no longer
  // true for this model), so it's added to the request body here instead.
  disableThinking?: boolean;
};

// catalogModel is the Cloudflare model catalog id, e.g. "anthropic/claude-haiku-5.5".
export function gatewayModel(catalogModel: string, options: GatewayModelOptions = {}) {
  const anthropic = createAnthropic({
    apiKey: "unused",
    fetch: async (_url, init) => {
      const { model: _model, ...inputs } = JSON.parse(init?.body as string);
      if (options.disableThinking) inputs.thinking = { type: "disabled" };
      const result = await env.AI.run(catalogModel as keyof AiModels, inputs, {
        gateway: { id: AI_GATEWAY_ID },
      });
      if (result instanceof ReadableStream) {
        return new Response(result, { headers: { "content-type": "text/event-stream" } });
      }
      return Response.json(result);
    },
  });

  // Anthropic's own ids use dashes where the catalog uses dots (claude-haiku-5-5)
  return anthropic(catalogModel.replace(/^anthropic\//, "").replaceAll(".", "-"));
}
