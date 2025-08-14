"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useChat } from "@ai-sdk/react";
import type { UIMessage } from "ai";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ChatPage() {
  const { messages, sendMessage, status } = useChat();
  const [input, setInput] = React.useState("");
  const isLoading = status === "submitted" || status === "streaming";

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
      <div className="rounded-xl border p-4">
        <div className="max-h-[60vh] space-y-3 overflow-y-auto p-1">
          {messages.length === 0 && (
            <div className="mr-auto max-w-[80%] rounded-lg border bg-card px-3 py-2 text-sm">
              Ask me anything about Solidity, EVM, and tooling.
            </div>
          )}
          {messages.map((m: UIMessage) => (
            <div
              key={m.id}
              className={
                m.role === "user"
                  ? "ml-auto max-w-[80%] rounded-lg bg-primary px-3 py-2 text-sm text-primary-foreground"
                  : "mr-auto max-w-[80%] rounded-lg border bg-card px-3 py-2 text-sm"
              }
            >
              {m.role === "user"
                ? (
                    Array.isArray(m.parts)
                      ? m.parts
                          .filter((p) => p?.type === "text")
                          .map((p, i: number) => (
                            <div key={`${m.id}-${i}`} className="whitespace-pre-wrap">
                              {p.type === "text" ? p.text : ""}
                            </div>
                          ))
                      : null
                  )
                : (() => {
                    const text = Array.isArray(m.parts)
                      ? m.parts
                          .filter((p) => p?.type === "text")
                          .map((p) => (p.type === "text" ? p.text : ""))
                          .join("\n\n")
                      : "";
                    return (
                      <div className="prose prose-sm max-w-none">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
                      </div>
                    );
                  })()}
            </div>
          ))}
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.trim()) return;
          sendMessage({ text: input.trim() });
          setInput("");
        }}
        className="flex items-center gap-2"
      >
        <Input
          className="flex-1"
          placeholder="Ask a question about Solidity or the EVM..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send"}
        </Button>
      </form>
    </div>
  );
}
