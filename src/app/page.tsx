import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  Bot,
  MessageCircle,
  Code2,
  ChevronRight,
  Shield,
  Gauge,
  Sparkles,
  Layers,
  Network,
  Wallet,
  Rocket,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-14 text-center">
      {/* Hero */}
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs text-muted-foreground">
          Learn EVM development faster
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Plunder Academy
        </h1>
        <p className="text-muted-foreground text-lg">
          Hands-on articles, an AI Solidity reviewer, and a built-in chat
          assistant trained on the best EVM resources.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild>
            <Link href="/articles">Browse Articles</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/reviewer">Try the Code Reviewer</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/chat">Ask the Chat</Link>
          </Button>
        </div>
      </div>

      {/* Feature bullets */}
      <div className="grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 text-left">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="size-5" /> Deep Articles
            </CardTitle>
            <CardDescription>
              Digestible explanations of core EVM topics and Solidity patterns.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="size-5" /> AI Code Reviewer
            </CardTitle>
            <CardDescription>
              Paste Solidity to get instant security notes and gas tips.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="size-5" /> Chat Assistant
            </CardTitle>
            <CardDescription>
              Ask questions and get context-aware answers and examples.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Why Plunder Academy */}
      <div className="w-full max-w-6xl space-y-8 text-left">
        <div className="space-y-3 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Why Plunder Academy
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            Learn modern EVM development the right way: concise explanations,
            actionable guidance, and tools that accelerate your journey.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="size-5" /> Security-first
              </CardTitle>
              <CardDescription>
                Built-in checks and best practices reduce common pitfalls and
                vulnerabilities.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gauge className="size-5" /> Gas-savvy
              </CardTitle>
              <CardDescription>
                Practical optimizations that actually matter in production
                contracts.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="size-5" /> AI-assisted
              </CardTitle>
              <CardDescription>
                Leverage AI to review Solidity, spot issues, and explain
                tradeoffs instantly.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="size-5" /> From basics to advanced
              </CardTitle>
              <CardDescription>
                Covers fundamentals through testing, deployment, and protocol
                patterns.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      {/* Zilliqa Focus */}
      <div className="w-full max-w-6xl grid grid-cols-1 items-center gap-8 rounded-xl border p-6 text-left md:grid-cols-2">
        <div className="space-y-4">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs">
            Built for Zilliqa EVM
          </div>
          <h3 className="text-2xl font-semibold tracking-tight">
            Deploy with confidence on Zilliqa
          </h3>
          <p className="text-muted-foreground">
            Connect with RainbowKit and wagmi, powered by WalletConnect. Use the
            Zilliqa EVM chain via viem for a familiar developer experience with
            fast finality.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Network className="mt-0.5 size-4" /> Native `zilliqa` chain
              import from `viem/chains`.
            </li>
            <li className="flex items-start gap-2">
              <Wallet className="mt-0.5 size-4" /> One-click wallet connection
              via `ConnectButton`.
            </li>
            <li className="flex items-start gap-2">
              <Rocket className="mt-0.5 size-4" /> Ready for testnet or mainnet
              when you are.
            </li>
          </ul>
          <div className="flex gap-3 pt-2">
            <Button asChild>
              <Link href="/reviewer">Review your contract</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/chat">Ask about Zilliqa</Link>
            </Button>
          </div>
        </div>
        <div>
          <Image
            src="/placeholder.svg"
            alt="Zilliqa focus"
            width={1200}
            height={800}
            className="h-64 w-full rounded-lg border object-cover"
          />
        </div>
      </div>

      {/* CTA band */}
      <div className="w-full max-w-6xl overflow-hidden rounded-xl border bg-gradient-to-b from-secondary/40 to-background p-8 text-left">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_auto]">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold tracking-tight">
              Start building smarter on Zilliqa
            </h3>
            <p className="text-muted-foreground">
              Join now and get instant access to articles, the AI reviewer, and
              the chat assistant.
            </p>
          </div>
          <div className="flex gap-3">
            <Button asChild>
              <Link href="/articles">Get started</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/chat">Talk to the assistant</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Previews */}
      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 text-left">
        <Card className="overflow-hidden">
          <Image
            src="/placeholder.svg"
            alt="Articles preview"
            width={1200}
            height={800}
            className="h-40 w-full object-cover"
          />
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="size-5" /> Articles
            </CardTitle>
            <CardDescription>
              From storage layout to gas optimization, learn the essentials.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="ghost" asChild className="group">
              <Link href="/articles">
                Read articles{" "}
                <ChevronRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <Image
            src="/placeholder.svg"
            alt="Reviewer preview"
            width={1200}
            height={800}
            className="h-40 w-full object-cover"
          />
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code2 className="size-5" /> Solidity Reviewer
            </CardTitle>
            <CardDescription>
              Get fast feedback on quality, security, and gas.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="ghost" asChild className="group">
              <Link href="/reviewer">
                Open reviewer{" "}
                <ChevronRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <Image
            src="/placeholder.svg"
            alt="Chat preview"
            width={1200}
            height={800}
            className="h-40 w-full object-cover"
          />
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="size-5" /> Chat
            </CardTitle>
            <CardDescription>
              Ask the assistant and learn by doing.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="ghost" asChild className="group">
              <Link href="/chat">
                Start chatting{" "}
                <ChevronRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
