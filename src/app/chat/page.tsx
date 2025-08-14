"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useChat } from "@ai-sdk/react";
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
          {messages.map((m) => (
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
                    Array.isArray((m as any).parts)
                      ? (m as any).parts
                          .filter((p: any) => p?.type === "text")
                          .map((p: any, i: number) => (
                            <div key={`${m.id}-${i}`} className="whitespace-pre-wrap">
                              {String(p.text ?? "")}
                            </div>
                          ))
                      : typeof (m as any).content === "string"
                      ? <div className="whitespace-pre-wrap">{(m as any).content}</div>
                      : String((m as any).content ?? "")
                  )
                : (() => {
                    const text = Array.isArray((m as any).parts)
                      ? (m as any).parts
                          .filter((p: any) => p?.type === "text")
                          .map((p: any) => String(p.text ?? ""))
                          .join("\n\n")
                      : typeof (m as any).content === "string"
                      ? (m as any).content
                      : String((m as any).content ?? "");
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
