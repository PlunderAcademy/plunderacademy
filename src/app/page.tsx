import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  GraduationCap,
  Compass,
  Trophy,
} from "lucide-react";
import { InteractiveHeroBg } from "@/components/hero/interactive-bg";
import { TiltContainer } from "@/components/hero/tilt-container";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-20 md:gap-24 lg:gap-28 text-center">
      {/* Hero */}
      <section className="hero-wrap relative w-screen max-w-[100vw] mx-[calc(50%-50vw)] -mt-10 overflow-hidden">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="absolute inset-0">
          <InteractiveHeroBg className="h-full w-full" />
        </div>
        <div className="relative mx-auto flex min-h-[50vh] max-w-6xl flex-col items-center justify-center space-y-10 px-4 py-14 sm:py-16">
          <TiltContainer>
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full border bg-background/70 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur">
                Learn EVM development faster
              </div>
              <h1 className="text-balance text-6xl font-extrabold tracking-tight leading-[0.95] sm:text-8xl">
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  Plunder Academy
                </span>
              </h1>
              <p className="mx-auto max-w-4xl text-balance text-xl sm:text-2xl text-muted-foreground">
                Hands-on lessons and deep articles, plus an AI Solidity reviewer
                and chat assistant trained on the best EVM resources.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="h-12 px-7 text-base has-[>svg]:px-5"
                  asChild
                >
                  <Link href="/lessons">
                    <GraduationCap className="mr-2 size-4" /> Start Learning
                    Path
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="h-12 px-7 text-base has-[>svg]:px-5"
                  asChild
                >
                  <Link href="/articles">
                    <BookOpen className="mr-2 size-4" /> Browse Articles
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-7 text-base has-[>svg]:px-5"
                  asChild
                >
                  <Link href="/reviewer">
                    <Code2 className="mr-2 size-4" /> Try Code Reviewer
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="h-12 px-7 text-base has-[>svg]:px-5"
                  asChild
                >
                  <Link href="/chat">
                    <MessageCircle className="mr-2 size-4" /> Ask the Chat
                  </Link>
                </Button>
              </div>
              <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-5 pt-2 text-base text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <BookOpen className="size-5" /> Deep EVM articles
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <GraduationCap className="size-5" /> Structured curriculum
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Bot className="size-5" /> AI Solidity reviewer
                </span>
              </div>
            </div>
          </TiltContainer>
        </div>
      </section>

      {/* Your Complete EVM Arsenal */}
      <div className="w-full max-w-6xl space-y-12">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center rounded-full border border-amber-500/30 bg-gradient-to-r from-amber-500/10 to-orange-500/10 px-6 py-3 text-amber-700 dark:text-amber-300 shadow-lg">
            <Trophy className="mr-3 size-5" />
            <span className="font-semibold">Your Complete EVM Arsenal</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent dark:from-white dark:via-slate-200 dark:to-white">
            Everything You Need to
            <br />
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Conquer the Blockchain
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Four legendary tools forged by blockchain masters. Whether you&apos;re
            starting your journey or sharpening your skills, these treasures
            will guide you to EVM mastery.
          </p>
        </div>

        {/* Hero Feature - Structured Learning Path */}
        <Card className="group relative overflow-hidden border bg-gradient-to-br from-slate-50 to-blue-50/50 dark:from-slate-950 dark:to-blue-950/50 hover:shadow-2xl transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/3 to-indigo-500/5" />

          <div className="relative p-8 md:p-12">
          {/* Treasure Map Header */}
          <div className="relative mb-8">
            <Image
              src="/overall_map.webp"
              alt="Learning Path Treasure Map"
              width={1000}
              height={400}
              className="w-full h-48 md:h-64 object-cover rounded-xl border-2 border-amber-500/30 shadow-lg"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-xl" />
            <div className="absolute bottom-4 left-6 text-white">
              <Badge className="bg-amber-600 text-white px-3 py-1 text-sm font-medium mb-2 shadow-lg">
                Most Popular
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight drop-shadow-lg">
                Comprehensive Learning Path
              </h3>
            </div>
          </div>

            <div className="space-y-8">
              {/* Description & Social Proof */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="flex -space-x-1">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-background flex items-center justify-center"
                      >
                        <span className="text-white text-xs">👤</span>
                      </div>
                    ))}
                  </div>
                  <span>1,200+ developers enrolled</span>
                </div>

                <p className="text-xl text-muted-foreground leading-relaxed">
                  Master blockchain development through our structured
                  curriculum. From fundamentals to advanced concepts, build
                  real-world expertise that employers value.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-foreground">
                  Why join the crew:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-purple-50/80 to-indigo-50/80 dark:from-purple-950/20 dark:to-indigo-950/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800 text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Trophy className="size-6 text-white" />
                    </div>
                    <h5 className="font-semibold text-foreground mb-2">Earn NFT Achievements</h5>
                    <p className="text-sm text-muted-foreground">Complete modules and earn unique achievement NFTs that prove your EVM mastery to the world</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-emerald-50/80 to-green-50/80 dark:from-emerald-950/20 dark:to-green-950/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800 text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Shield className="size-6 text-white" />
                    </div>
                    <h5 className="font-semibold text-foreground mb-2">Battle-Tested Security</h5>
                    <p className="text-sm text-muted-foreground">Learn from real-world exploits and vulnerabilities with hands-on security practices</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-amber-50/80 to-orange-50/80 dark:from-amber-950/20 dark:to-orange-950/20 rounded-xl p-6 border border-amber-200 dark:border-amber-800 text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Rocket className="size-6 text-white" />
                    </div>
                    <h5 className="font-semibold text-foreground mb-2">Deploy Real Projects</h5>
                    <p className="text-sm text-muted-foreground">Build and launch production-ready smart contracts on Zilliqa mainnet</p>
                  </div>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-8 py-6 border-t border-border/50">
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-1">
                    25+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Interactive Lessons
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-1">
                    5
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Core Modules
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-1">
                    15-20h
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Total Duration
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="space-y-4 pt-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-6 w-full"
                >
                  <Link href="/lessons">
                    <Compass className="mr-3 size-5" />
                    Start Learning Path
                    <ChevronRight className="ml-3 size-5" />
                  </Link>
                </Button>
                <div className="text-sm text-muted-foreground text-center">
                  Free to start • Self-paced • Achievements upon completion
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Supporting Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Deep Articles */}
          <Card className="group relative overflow-hidden border-2 bg-gradient-to-br from-emerald-500/10 to-teal-600/10 border-emerald-500/30 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,transparent_70%)]" />
            <CardHeader className="relative pb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg mb-4 mx-auto">
                <BookOpen className="size-7 text-white" />
              </div>
              <CardTitle className="text-xl font-bold mb-3 text-center group-hover:text-emerald-600 transition-colors">
                📖 Knowledge Vault
              </CardTitle>
              <CardDescription className="text-center leading-relaxed">
                Deep-dive articles on EVM internals, security patterns, and
                optimization secrets that separate novices from masters.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative text-center">
              <div className="text-sm text-muted-foreground mb-4">
                <span className="font-semibold text-emerald-600">
                  Expert-level insights
                </span>{" "}
                • Production-ready techniques
              </div>
              <Button
                variant="outline"
                asChild
                className="w-full border-emerald-500/30 hover:bg-emerald-500/10 hover:border-emerald-500/50"
              >
                <Link href="/articles">
                  <BookOpen className="mr-2 size-4" />
                  Discover Secrets
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* AI Code Reviewer */}
          <Card className="group relative overflow-hidden border-2 bg-gradient-to-br from-purple-500/10 to-pink-600/10 border-purple-500/30 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15)_0%,transparent_70%)]" />
            <CardHeader className="relative pb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg mb-4 mx-auto relative">
                <Bot className="size-7 text-white" />
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                  <Sparkles className="size-3 text-white" />
                </div>
              </div>
              <CardTitle className="text-xl font-bold mb-3 text-center group-hover:text-purple-600 transition-colors">
                🤖 AI Security Mate
              </CardTitle>
              <CardDescription className="text-center leading-relaxed">
                Your AI-powered first mate spots vulnerabilities, suggests
                optimizations, and reviews code like a seasoned auditor.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative text-center">
              <div className="text-sm text-muted-foreground mb-4">
                <span className="font-semibold text-purple-600">
                  Instant analysis
                </span>{" "}
                • Security-focused • Gas optimization
              </div>
              <Button
                variant="outline"
                asChild
                className="w-full border-purple-500/30 hover:bg-purple-500/10 hover:border-purple-500/50"
              >
                <Link href="/reviewer">
                  <Shield className="mr-2 size-4" />
                  Audit My Code
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Chat Assistant */}
          <Card className="group relative overflow-hidden border-2 bg-gradient-to-br from-orange-500/10 to-red-600/10 border-orange-500/30 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.15)_0%,transparent_70%)]" />
            <CardHeader className="relative pb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg mb-4 mx-auto">
                <MessageCircle className="size-7 text-white" />
              </div>
              <CardTitle className="text-xl font-bold mb-3 text-center group-hover:text-orange-600 transition-colors">
                💬 Wise Oracle
              </CardTitle>
              <CardDescription className="text-center leading-relaxed">
                Ask anything about EVM development. Get instant answers, code
                examples, and guidance from your personal blockchain sage.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative text-center">
              <div className="text-sm text-muted-foreground mb-4">
                <span className="font-semibold text-orange-600">
                  24/7 guidance
                </span>{" "}
                • Context-aware • Code examples
              </div>
              <Button
                variant="outline"
                asChild
                className="w-full border-orange-500/30 hover:bg-orange-500/10 hover:border-orange-500/50"
              >
                <Link href="/chat">
                  <MessageCircle className="mr-2 size-4" />
                  Ask the Oracle
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Why Choose Our Academy */}
      <div className="w-full max-w-6xl space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-700 dark:text-emerald-300">
            <Shield className="mr-2 size-4" />
            Battle-Tested Approach
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Why Sail with Plunder Academy?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn modern EVM development the pirate way: battle-tested
            strategies, treasure-filled lessons, and AI-powered tools that
            accelerate your journey to mastery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <Card className="group relative overflow-hidden border-2 bg-gradient-to-br from-red-500/10 to-red-600/10 border-red-500/30 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.1)_0%,transparent_50%)]" />
            <CardHeader className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg mb-4">
                <Shield className="size-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">
                ⚔️ Security-First Approach
              </CardTitle>
              <CardDescription className="leading-relaxed">
                Built-in security audits and battle-tested practices protect
                your treasure from common vulnerabilities and exploits.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group relative overflow-hidden border-2 bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-blue-500/30 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
            <CardHeader className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg mb-4">
                <Gauge className="size-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                ⚡ Gas Optimization Mastery
              </CardTitle>
              <CardDescription className="leading-relaxed">
                Learn practical optimization techniques that actually matter in
                production contracts and save real money on deployments.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group relative overflow-hidden border-2 bg-gradient-to-br from-purple-500/10 to-purple-600/10 border-purple-500/30 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.1)_0%,transparent_50%)]" />
            <CardHeader className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg mb-4">
                <Sparkles className="size-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
                🤖 AI-Powered Learning
              </CardTitle>
              <CardDescription className="leading-relaxed">
                Your personal AI first mate reviews code, spots issues, and
                explains complex concepts with instant feedback.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group relative overflow-hidden border-2 bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 border-emerald-500/30 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.1)_0%,transparent_50%)]" />
            <CardHeader className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg mb-4">
                <Layers className="size-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold mb-2 group-hover:text-emerald-600 transition-colors">
                📈 Complete Journey
              </CardTitle>
              <CardDescription className="leading-relaxed">
                From blockchain basics to advanced protocol patterns - covers
                everything you need to become a legendary EVM developer.
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
            src="/deploy-with-confidence.webp"
            alt="Zilliqa focus"
            width={1200}
            height={800}
            className="h-64 w-full rounded-lg border object-cover"
          />
        </div>
      </div>
    </div>
  );
}
