# Plunder Academy

Plunder Academy is an EVM training portal built around Zilliqa 2.0. It combines curated lessons, interactive quests, and AI copilots so learners can move from blockchain fundamentals to shipping real contracts with confidence.

## Features

- Structured "Treasure Map" curriculum with wallet-gated access, mission storytelling, interactive learning elements (quizzes, deploy challenges), and animated progress trackers.
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
        quizzes/                  # Interactive element definitions (quizzes, challenges) parsed into learning flows
```

- **Articles**: add MDX files with front matter (`title`, `excerpt`, `level`, `tags`, `slug`). They are surfaced on the landing page, `/articles`, and the learning order is controlled inside `getArticles`.
- **Lessons**: each module folder (for example `src/content/modules/island1/creating-erc20-tokens`) contains numbered MDX lessons with objective metadata. Lessons render inside the module tab strip.
- **Quizzes and missions**: place MDX definitions inside `missions/` and `quizzes/`. The parser in `src/lib/mdx.ts` converts headings like `### Question 1` into interactive elements (traditional quizzes, deploy challenges, etc.).
- **Custom components**: interactive MDX blocks (animated maps, token factory UI, achievement celebration) live under `src/components`. Expose them through `MDXContent` if you want them inside markdown.

## Interactive Learning Elements

The platform supports multiple types of interactive learning activities through a modular dual-mode system at `src/components/interactive-elements/`:

### Interactive Element Types

#### Quiz & Assessment Components
- **Traditional Quiz** (`quiz/traditional-quiz.tsx`): Multiple choice and multiple select questions with timer, anti-cheat measures, and automated scoring
- **Word Jumble** (`elements/word-jumble-compact.tsx`): Unscramble blockchain and Solidity terminology
- **Concept Matching** (`elements/concept-matching-compact.tsx`): Drag concepts to match their definitions
- **Timeline Builder** (`elements/timeline-builder-compact.tsx`): Arrange events in chronological order
- **True/False Statements** (`elements/true-false-compact.tsx`): Classify statements as true or false by dragging into columns
- **Drag & Drop Code Puzzle** (`elements/drag-drop-puzzle-compact.tsx`): Arrange code blocks in the correct sequence

#### Deployment Components
- **Deploy Challenge** (`elements/deploy-challenge/token-deploy-challenge.tsx`): Guided deployment exercises with transaction verification (Module 5 token creation)

#### Shared Infrastructure
- **Shared utilities** (`shared/`): Common achievement claiming, voucher submission, and result display components
- **MDX Components** (`mdx-components.tsx`): Wrapper components for easy MDX integration

### Dual-Mode Architecture

All interactive elements support two distinct modes:

**Learning Mode** (in lesson content):
- ✅ Immediate visual feedback (green/red indicators)
- ✅ Show correct answers on completion
- ✅ Hints and explanations available
- ✅ Unlimited retry attempts
- ❌ No API submission

**Assessment Mode** (in quizzes):
- ❌ No visual feedback or answer validation
- ❌ Correct answers never revealed
- ✅ Captures user responses as structured JSON
- ✅ Submitted to backend API for grading
- ✅ Supports partial credit scoring
- ⚠️ Single submission with quiz

### Using Interactive Elements in MDX

Interactive elements can be easily embedded in lesson MDX files:

```mdx
<!-- Word Jumble -->
<WordJumble word="BLOCKCHAIN" hint="Distributed ledger technology" />

<!-- Concept Matching -->
<ConceptMatching pairs={[
  {"conceptId": "evm", "definitionId": "def-evm", "concept": "EVM", "definition": "Virtual machine for smart contracts", "category": "core"}
]} />

<!-- Timeline Builder -->
<TimelineBuilder events={[
  {"id": "evt-1", "text": "Transaction created", "correctPosition": 0},
  {"id": "evt-2", "text": "Transaction signed", "correctPosition": 1}
]} />

<!-- True/False -->
<TrueFalse statements={[
  {"id": "s1", "text": "Solidity is compiled to bytecode", "correctAnswer": true, "explanation": "Solidity compiles to EVM bytecode"}
]} />

<!-- Drag & Drop Puzzle -->
<DragDropPuzzle codeBlocks={[
  {"id": "b1", "content": "pragma solidity ^0.8.0;", "correctPosition": 0},
  {"id": "b2", "content": "contract MyToken {", "correctPosition": 1}
]} />
```

### Quiz Integration

Interactive elements can be mixed with traditional multiple choice questions in quizzes. The MDX format uses separate data structures for assessment mode (no correct answers exposed):

```mdx
### Question 3
**Type:** Word Jumble
**Points:** 6
**Lesson:** 1.1 Introduction

Unscramble this term:

**Interactive Data:**
```json
{
  "hint": "Distributed ledger technology",
  "scrambled": "LKCOHBCANI"
}
```

<!--
API ANSWER FORMAT:
{
  "type": "word-jumble",
  "userResponse": {"word": "BLOCKCHAIN", "timeSpent": 45}
}
CORRECT ANSWER: "BLOCKCHAIN"
-->
```

See `src/components/interactive-elements/README.md` for detailed integration documentation.

## AI Copilots

- Chat endpoint: `src/app/api/chat/route.ts` streams responses using the AI Gateway. Change the default model or provider routing in that file. Update the system prompt at `src/app/api/chat/chat-system-prompt.md`.
- Reviewer endpoint: `src/app/api/reviewer/route.ts` performs contract reviews with temperature `0.2`. Adjust sections or formatting by editing `src/app/api/reviewer/reviewer-system-prompt.md`.
- Frontend hooks: `/chat` uses `useChat` and `/reviewer` uses `useCompletion`. Both pages are behind `WalletAuthGuard` so learners must connect a wallet.

## Feedback & Analytics

The platform includes a comprehensive feedback and analytics system to track learning outcomes and continuously improve the AI tools:

- **AI Interaction Tracking**: Automatically captures usage metrics for the code reviewer and chat assistant (response times, input/output lengths, vulnerability counts, query categories)
- **User Feedback Collection**: Thumbs up/down buttons, star ratings, and detailed text feedback on every AI response with smart debouncing and local caching to minimize API calls
- **Module Completion Surveys**: Optional feedback forms after earning achievements that collect ratings on content difficulty, clarity, practical value, and pace
- **Personal Analytics Dashboard**: User-facing analytics at `/analytics` showing AI tool usage stats, satisfaction rates, module progress, and personalized learning insights
- **Session Management**: Persistent session IDs in localStorage track user activity across page reloads while maintaining privacy (wallet addresses only, no PII)

The frontend (`src/lib/feedback-api.ts`, `src/components/ai-feedback.tsx`, `src/components/user-analytics-dashboard.tsx`) is fully implemented and connects to the Plunder Academy API. Backend implementation requires 4 new API endpoints and 3 database tables. The system is designed to be non-intrusive with optional feedback, skip options everywhere, and all tracking happening in the background without disrupting the learning flow.

## Achievements and On-Chain Flow

- Wallet gating uses `wagmi` + `RainbowKit` with chains defined in `src/lib/wagmi.ts`. Switch to mainnet by exporting the commented configuration and supplying the mainnet factory address.
- The `useAchievements` hook calls the Plunder Academy API (`NEXT_PUBLIC_PLUNDER_ACADEMY_API`) to fetch vouchers and NFT metadata, then submits signatures to the training registry contract at `NEXT_PUBLIC_PLUNDER_ACADEMY_CONTRACT_ADDRESS`.
- The modular interactive elements system (`src/components/interactive-elements/`) handles different learning activities: traditional quizzes with automated scoring, deploy challenges with transaction verification, and achievement claiming flows. Module 5 uses the deploy challenge system alongside the `TokenFactoryInterface` for hands-on token deployments.
- Additional implementation notes for the token factory live in `TOKEN_FACTORY_IMPLEMENTATION.md`.

### API Submission Format

Quiz submissions now support mixed question types including interactive elements. All answers are submitted as a single payload:

```typescript
{
  walletAddress: "0x...",
  achievementNumber: "1",
  submissionType: "quiz",
  submissionData: {
    answers: {
      // Traditional multiple choice/select
      "q1": "B",
      "q2": "A,C,D",
      
      // Interactive elements (stringified JSON)
      "q3": "{\"type\":\"word-jumble\",\"userResponse\":{\"word\":\"BLOCKCHAIN\",\"timeSpent\":45}}",
      "q4": "{\"type\":\"concept-matching\",\"userResponse\":{\"pairs\":[{\"conceptId\":\"gas\",\"definitionId\":\"def-gas\"}]}}",
      "q5": "{\"type\":\"timeline-builder\",\"userResponse\":{\"sequence\":[\"evt-1\",\"evt-2\",\"evt-3\"]}}",
      "q6": "{\"type\":\"true-false-statements\",\"userResponse\":{\"classifications\":[{\"id\":\"s1\",\"answer\":true}]}}",
      "q7": "{\"type\":\"drag-drop-puzzle\",\"userResponse\":{\"sequence\":[\"block-1\",\"block-2\",\"block-3\"]}}"
    }
  },
  metadata: {
    timestamp: "2025-01-15T10:30:00Z",
    timeSpent: 456
  }
}
```

The backend should detect JSON-formatted answers and parse them to extract the `type` and `userResponse` for appropriate grading logic. Interactive elements support partial credit scoring based on the number of correct matches, positions, or classifications.

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
