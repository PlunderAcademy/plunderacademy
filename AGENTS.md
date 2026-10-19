# Plunder Academy – Cursor Rules

## Project overview

- This is a Vite + TanStack Start project (deployed on Cloudflare Workers) for an interactive EVM developer training hub.
- Key areas: homepage (`/`), articles (`/articles`, `/articles/$slug`), AI Solidity reviewer (`/reviewer`), and chat (`/chat`).

## Tech stack

- Vite 7 + TanStack Start / TanStack Router (SPA mode, server routes and server functions on Cloudflare Workers)
- TypeScript (strict)
- Tailwind CSS v4
- shadcn/ui (managed via CLI)
- next-themes (theme: system/light/dark — works standalone, no Next.js dependency)

## Conventions

- Path alias: `@/*` → `./src/*` (use `@/components/...`, `@/lib/...`).
- Theming: `ThemeProvider` from `next-themes` is wired via `src/components/providers.tsx` and used in `src/routes/__root.tsx`.
- Global layout: `SiteHeader` + `SiteFooter` wrap a `main` container in `src/routes/__root.tsx`. Keep pages minimal and composable.
- Routes live in `src/routes/` using TanStack Router file conventions (`articles.$slug.tsx`, `api.chat.ts`, etc.). `src/routeTree.gen.ts` is generated — never edit it by hand.
- Server-only data (MDX content parsing) goes through server functions in `src/lib/content.ts`; MDX files are bundled via `import.meta.glob` in `src/lib/mdx.ts`.
- Images: use the local `@/components/image` wrapper (plain `<img>` with next/image-style `fill`/`priority` props).

## shadcn/ui policy (critical)

- ALWAYS install and update shadcn components using the official CLI.
  - Example: `npx shadcn@latest add button input textarea card label --yes`
- NEVER manually add, copy/paste, or directly edit files under `src/components/ui/*`.
  - If a change is needed: prefer composition (wrap the UI component elsewhere) or regenerate with the CLI.
  - If a component is missing: add it via the CLI only.

## Tailwind v4 notes

- Uses CSS variables defined in `src/app/globals.css` with `@theme inline`.
- Prefer utility classes; avoid bespoke global styles unless truly shared.

## Pages and routing

- `/` (Home): high-level CTAs to Articles, Reviewer, and Chat.
- `/articles` (List) and `/articles/$slug` (Detail): MDX content loaded via route loaders + server functions.
- `/reviewer`: client page; code editor with an examples dropdown and a report panel that shows the model's reasoning while it works; calls `/api/reviewer`.
- `/chat`: client page; conversation with history (sidebar on desktop, sheet on mobile) and live validator data; streams responses from `/api/chat`.
- `/share/achievement/$achievementId` and `/api/achievement-frame/$achievementId`: server routes emitting crawler-facing HTML and Open Graph PNGs (workers-og).

## AI features

- Model access goes through `gatewayModel()` in `src/lib/ai.ts`: Claude Haiku 5.5 via the Workers AI binding and the `default` Cloudflare AI Gateway, paid from AI Gateway credits. There are no provider API keys. Keep the model fixed server-side; don't accept a model from the request body.
- Prompts live in `src/prompts/`. Chat runs with thinking off for speed; the reviewer keeps thinking on for accuracy. Both settings were chosen from eval results, so re-run the evals before changing either.
- After changing a prompt or model setting, compare old against new with `scripts/prompt-evals/run.mjs` (see README → Prompt evals). Evals spend AI Gateway credits.
- The reviewer page parses `### N.` finding headings and the `Critical: N | High: N | Medium: N | Low: N` summary line from the report, so keep both in the prompt's format.
- Reviewer example contracts live in `src/lib/reviewer-examples.ts` and double as eval cases. Adding one means adding its expectations in `scripts/prompt-evals/reviewer-cases.mjs`.
- Zilliqa Insights MCP tools (`src/lib/zilliqa-mcp.ts`): tool definitions are cached, but the MCP client must be created per request. Workers can't reuse I/O objects across requests.

## Zilliqa 2.0 facts for content (verified October 2026)

- The EVM runs the Cancun fork: use `evmVersion: "cancun"`. Prague features such as EIP-7702 aren't live.
- Legacy Zilliqa transactions and Scilla are retired, except ZRC-2 tokens used through allow-listed ERC-20 proxies. Don't present zil1 addresses, ViewBlock or sharding as current.
- The gas price is fixed at 4761.9048 Gwei with no fee market. Blocks are about 1 second, with finality after two further blocks. There are 24 active validators.
- Explorers are Blockscout and Otterscan. Zilliqa's Chainlink feeds are a community deployment and were stale as of October 2026.

## Coding style

- Keep components small, typed, and accessible. Use semantic HTML.
- Prefer composition over modification of shadcn UI primitives.
- Use `cn` from `@/lib/utils` to combine class names.

## Commands (examples)

- Add new shadcn components: `npx shadcn@latest add dialog sheet dropdown-menu --yes`
- Do not hand-edit anything in `src/components/ui/*` after generation.
- Verify with `npm run typecheck` and `npm run build`; test the Workers runtime with `npm run preview`.
- Compare prompt versions: `node scripts/prompt-evals/run.mjs --suite reviewer|chat --variant old=<file> --variant new=<file>`.

## Non-negotiables

- shadcn components must be installed and updated via the CLI only.
- Do not directly modify generated shadcn files; wrap or extend externally if needed.

## Web3 integration

- Wallets: Use wagmi + RainbowKit. Do not hand-roll connectors.
- Chains: Prefer importing chains from `viem/chains`. Primary chain is `zilliqa` (add testnet if needed). Avoid hardcoding custom chain objects unless not available in viem.
- Config: `wagmiConfig` in `src/lib/wagmi.ts` using `getDefaultConfig` with `chains: [zilliqa]`, `ssr: true`, and `transports` keyed by chain id.
- Providers: Wrap app in `WagmiProvider`, `QueryClientProvider`, `ThemeProvider`, `RainbowKitProvider` inside `src/components/providers.tsx`.
- UI: Use `ConnectButton` from `@rainbow-me/rainbowkit` in the header.
- Styles: `@rainbow-me/rainbowkit/styles.css` is linked in `src/routes/__root.tsx`.
- Env: Set `VITE_WALLETCONNECT_PROJECT_ID` for WalletConnect.
- Security: Do not expose private keys or secrets; only use public env (`VITE_*`) on the client. Server secrets live as Worker secrets.
- Network scope: Keep chains limited to Zilliqa (and optionally its testnet) unless explicitly expanded.
