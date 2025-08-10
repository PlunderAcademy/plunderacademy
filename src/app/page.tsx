import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-10 text-center">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs text-muted-foreground">
          Learn EVM development faster
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Plunder Academy
        </h1>
        <p className="text-muted-foreground text-lg">
          Hands-on courses, articles, an AI Solidity reviewer, and a built-in chat assistant trained on the best EVM resources.
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

      <div className="grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-xl border p-6">
          <h3 className="mb-2 font-semibold">Deep Articles</h3>
          <p className="text-sm text-muted-foreground">
            Digestible explanations of core EVM topics and Solidity patterns.
          </p>
        </div>
        <div className="rounded-xl border p-6">
          <h3 className="mb-2 font-semibold">AI Code Reviewer</h3>
          <p className="text-sm text-muted-foreground">
            Paste Solidity code to get instant feedback, gas tips, and security notes.
          </p>
        </div>
        <div className="rounded-xl border p-6">
          <h3 className="mb-2 font-semibold">Chat Assistant</h3>
          <p className="text-sm text-muted-foreground">
            Ask questions and get context-aware answers and examples.
          </p>
        </div>
      </div>
    </div>
  );
}
