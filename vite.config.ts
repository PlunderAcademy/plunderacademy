import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";
import { fileURLToPath, URL } from "node:url";

// The app runs with `ssr: false` (SPA mode), so no page component ever
// executes on the Worker. These client-only libraries would otherwise be
// bundled into the Worker script and blow past Cloudflare's size limit, so
// in the SSR environment they are replaced with an inert Proxy stub. The
// client bundle (served as static assets) keeps the real implementations.
const CLIENT_ONLY_LIBS = [
  /^streamdown/,
  /^react-syntax-highlighter/,
  /^@rainbow-me\/rainbowkit/,
  /^wagmi/,
  /^viem/,
  /^recharts/,
  /^framer-motion/,
  /^embla-carousel-react/,
  /^lucide-react/,
  /^@mdx-js\/mdx/,
  /^@mdx-js\/react/,
  /^@radix-ui\//,
  /^use-stick-to-bottom/,
  /^next-themes/,
  /^@ai-sdk\/react/,
];

const STUB_ID = "\0client-only-stub";

// A callable, constructible, infinitely chainable no-op value. Module-scope
// calls like createConfig(...) or motion.div still evaluate without error on
// the Worker; the results are never rendered because SSR is disabled.
const STUB_SOURCE = `
const stub = new Proxy(function stub() {}, {
  get(target, prop) {
    if (prop === Symbol.toPrimitive || prop === "toString") return () => "";
    if (prop === "then") return undefined;
    return stub;
  },
  apply: () => stub,
  construct: () => stub,
});
export default stub;
`;

function stubClientOnlyLibsOnWorker(): Plugin {
  return {
    name: "stub-client-only-libs-on-worker",
    enforce: "pre",
    // Build only: the dev-time SSR module runner does not support
    // syntheticNamedExports, and bundle size only matters when deploying.
    apply: "build",
    applyToEnvironment: (environment) => environment.name === "ssr",
    resolveId(id) {
      if (id.includes(".css")) return null;
      if (CLIENT_ONLY_LIBS.some((pattern) => pattern.test(id))) {
        return { id: STUB_ID, syntheticNamedExports: "default" };
      }
      return null;
    },
    load(id) {
      if (id === STUB_ID) return STUB_SOURCE;
      return null;
    },
  };
}

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [
    stubClientOnlyLibsOnWorker(),
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    tailwindcss(),
    tanstackStart(),
    react(),
  ],
});
