# Plunder Academy

Plunder Academy is an EVM training portal built around Zilliqa 2.0. It combines curated lessons, interactive quests, and AI copilots so learners can move from blockchain fundamentals to shipping real contracts with confidence.

## Features

- Structured "Treasure Map" curriculum with wallet-gated access, mission storytelling, module quizzes, and animated progress trackers.
- MDX powered content library for long-form Zilliqa and Solidity articles that surface in-app cards and landing page highlights.
- AI Solidity reviewer and chat assistant backed by the `ai` SDK, with configurable system prompts in `src/app/api/**/chat-system-prompt.md` and `reviewer-system-prompt.md`.
- Achievement and voucher flow that talks to the Plunder Academy API, fetches NFT metadata, and submits proofs to the on-chain training registry.
- Token factory practice interface that lets learners deploy ERC-20 tokens on Zilliqa testnet or mainnet directly from the module experience.
- Modern Next.js 15 stack with React 19, Tailwind CSS v4, Radix UI primitives, RainbowKit wallet onboarding, and MDX based layout slots.

## Tech Stack

- Next.js App Router (15.4) with TypeScript and Turbopack dev server.
- Tailwind CSS v4, Shadcn UI components, Radix UI primitives, and Embla for interactive UI.
- `@ai-sdk/react` streaming hooks hitting an AI Gateway (OpenAI, Google Gemini, etc.).
- wagmi + RainbowKit configured for the Zilliqa EVM testnet by default.
- MDX content pipeline (`src/lib/mdx.ts`) for articles, lessons, quizzes, missions, and interactive MDX components.

## Getting Started

### Prerequisites

- Node.js 18.18+ (or any version supported by Next.js 15).
- npm (ships with Node).

### Installation

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Copy `.env.sample` to `.env.local` (or `.env`) and fill in the environment variables below.
4. Start the development server: `npm run dev`.
5. Visit `http://localhost:3000` and connect a wallet to explore gated areas.

### Scripts

- `npm run dev` - start the Turbopack development server.
- `npm run build` - create a production build.
- `npm run start` - serve the production build.
- `npm run lint` - run ESLint with the Next.js config.

> The app stores progress and achievements against connected wallets. For local testing you can use any WalletConnect compatible wallet pointing at the Zilliqa EVM testnet.

## Environment Variables

| Variable | Description | Required |
| --- | --- | --- |
| `AI_GATEWAY_API_KEY` | API key for the AI Gateway powering chat and reviewer routes. | Yes (unless you switch to Azure via the commented code).
| `AZURE_RESOURCE_NAME` | Azure OpenAI resource, used only if you re-enable the Azure path. | Optional.
| `AZURE_API_KEY` | Azure OpenAI key. | Optional.
| `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` | WalletConnect Cloud project ID for RainbowKit. | Yes.
| `NEXT_PUBLIC_PLUNDER_ACADEMY_API` | Base URL for voucher and achievement API requests. | Yes.
| `NEXT_PUBLIC_PLUNDER_ACADEMY_CONTRACT_ADDRESS` | Training registry contract used when claiming vouchers. | Yes.
| `NEXT_PUBLIC_FACTORY_ADDRESS_TESTNET` | ERC-20 factory contract on Zilliqa testnet. | Yes for Module 5 token creation.
| `NEXT_PUBLIC_FACTORY_ADDRESS_MAINNET` | ERC-20 factory contract on Zilliqa mainnet. | Optional, only needed when enabling mainnet deployments.

Store secrets in `.env.local`; Next.js loads them automatically during development.

## Content Authoring

```
src/
  content/
    articles/                 # Standalone Zilliqa and Solidity deep dives (MDX)
    modules/
      island1/
        blockchain-fundamentals/  # Module lessons (MDX with front matter)
        ...
        missions/                 # Narrative story content rendered in Jungle modules
        quizzes/                  # Quiz definitions parsed into interactive flows
```

- **Articles**: add MDX files with front matter (`title`, `excerpt`, `level`, `tags`, `slug`). They are surfaced on the landing page, `/articles`, and the learning order is controlled inside `getArticles`.
- **Lessons**: each module folder (for example `src/content/modules/island1/creating-erc20-tokens`) contains numbered MDX lessons with objective metadata. Lessons render inside the module tab strip.
- **Quizzes and missions**: place MDX definitions inside `missions/` and `quizzes/`. The parser in `src/lib/mdx.ts` converts headings like `### Question 1` into the interactive quiz component.
- **Custom components**: interactive MDX blocks (animated maps, token factory UI, achievement celebration) live under `src/components`. Expose them through `MDXContent` if you want them inside markdown.

## AI Copilots

- Chat endpoint: `src/app/api/chat/route.ts` streams responses using the AI Gateway. Change the default model or provider routing in that file. Update the system prompt at `src/app/api/chat/chat-system-prompt.md`.
- Reviewer endpoint: `src/app/api/reviewer/route.ts` performs contract reviews with temperature `0.2`. Adjust sections or formatting by editing `src/app/api/reviewer/reviewer-system-prompt.md`.
- Frontend hooks: `/chat` uses `useChat` and `/reviewer` uses `useCompletion`. Both pages are behind `WalletAuthGuard` so learners must connect a wallet.

## Achievements and On-Chain Flow

- Wallet gating uses `wagmi` + `RainbowKit` with chains defined in `src/lib/wagmi.ts`. Switch to mainnet by exporting the commented configuration and supplying the mainnet factory address.
- The `useAchievements` hook calls the Plunder Academy API (`NEXT_PUBLIC_PLUNDER_ACADEMY_API`) to fetch vouchers and NFT metadata, then submits signatures to the training registry contract at `NEXT_PUBLIC_PLUNDER_ACADEMY_CONTRACT_ADDRESS`.
- `src/components/module-quiz.tsx` handles quizzes, voucher submission, transaction verification, and triggers celebration modals. Module 5 also embeds the `TokenFactoryInterface` for hands-on deployments.
- Additional implementation notes for the token factory live in `TOKEN_FACTORY_IMPLEMENTATION.md`.

## Deployment Notes

- The site is a standard Next.js app and can be deployed on Vercel or any Node hosting that supports Next.js 15.
- Ensure production environments set the `NEXT_PUBLIC_*` variables and point WalletConnect to the correct domain.
- If you rely on Azure OpenAI instead of the AI Gateway, uncomment the Azure lines inside both API routes and provide the Azure resource and API key.

## Contributing

1. Create a feature branch.
2. Run `npm run lint` before opening a pull request.
3. Follow the existing component patterns (Tailwind utility classes + Radix primitives) and prefer MDX for written curriculum.
4. When adding AI prompts or missions, keep spoilers in separate markdown files so they can be iterated without code changes.

Happy plundering! Learners can now chart the course from fundamentals to contract deployment directly within Plunder Academy.
