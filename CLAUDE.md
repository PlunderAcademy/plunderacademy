# Plunder Academy - Project Context

## Project Overview
Plunder Academy is an educational platform for learning EVM (Ethereum Virtual Machine) and Solidity development, with special focus on Zilliqa blockchain integration. It combines educational articles, AI-powered tools, and hands-on learning resources.

## Tech Stack
- **Framework**: Next.js 15.4.6 with Turbopack
- **Styling**: Tailwind CSS v4 with Typography plugin  
- **UI**: Radix UI primitives, shadcn/ui components
- **Blockchain**: wagmi v2, viem v2, RainbowKit for Web3
- **AI**: Vercel AI SDK with Azure backend
- **Language**: TypeScript

## Key Features
1. **Educational Articles System** (`/articles`) - Markdown-based articles with three difficulty levels (beginner/intermediate/advanced)
2. **AI Solidity Reviewer** (`/reviewer`) - Code review tool for security and gas optimization
3. **AI Chat Assistant** (`/chat`) - Context-aware helper for EVM/Solidity questions
4. **Zilliqa EVM Support** - Full integration with Zilliqa blockchain via viem chains

## Project Structure
```
src/
├── app/                 # Next.js app router
│   ├── api/            # AI endpoints (chat, reviewer)
│   ├── articles/       # Article pages
│   ├── chat/           # Chat interface
│   └── reviewer/       # Code reviewer interface
├── components/         
│   ├── ai-elements/    # AI-specific UI components
│   └── ui/            # Reusable shadcn components
└── content/              # Article content and prompts
```

## Development Commands
```bash
npm run dev        # Start dev server with Turbopack
npm run build      # Production build
npm run lint       # Run ESLint
npm start          # Start production server
```

## Environment Variables Needed
- `AZURE_OPENAI_*` or `OPENAI_API_KEY` - For AI features
- `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` - For wallet connectivity

## Code Style Guidelines
- Use existing UI components from `/components/ui/`
- Follow existing patterns for new features
- Maintain TypeScript strict mode
- Use Tailwind CSS for styling
- Keep components modular and reusable

## AI Integration Notes
- Chat system uses streaming responses via Vercel AI SDK
- System prompts are stored in markdown files
- Reviewer focuses on Solidity security and gas optimization
- Both tools use Azure OpenAI or OpenAI API backends

## Security Considerations
- This is an educational platform - focus on teaching secure coding practices
- Code reviewer should emphasize security vulnerabilities
- Never store private keys or sensitive data
- All blockchain interactions are client-side via user wallets

## Testing & Quality
- Ensure TypeScript compilation passes
- Run linter before committing
- Test AI features with various Solidity code samples
- Verify wallet connectivity on both testnet and mainnet

## Future Enhancements
- Add more educational content and interactive examples
- Implement code execution sandbox
- Add user authentication and progress tracking
- Expand AI capabilities for more advanced code analysis
- Add support for additional EVM chains