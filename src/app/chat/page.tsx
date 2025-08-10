"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Message = { id: string; role: "user" | "assistant"; content: string };

export default function ChatPage() {
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: "sys-hello",
      role: "assistant",
      content: "Ask me anything about Solidity, EVM, and tooling.",
    },
  ]);
  const [input, setInput] = React.useState("");
  const [isSending, setIsSending] = React.useState(false);

  async function onSend(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: input.trim(),
    };
    setMessages((m) => [...m, userMessage]);
    setInput("");
    setIsSending(true);
    // TODO: connect to backend streaming endpoint
    await new Promise((r) => setTimeout(r, 600));
    const reply: Message = {
      id: crypto.randomUUID(),
      role: "assistant",
      content:
        "This is a placeholder response. We will stream real answers soon.",
    };
    setMessages((m) => [...m, reply]);
    setIsSending(false);
  }

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
      <div className="rounded-xl border p-4">
        <div className="max-h-[60vh] space-y-3 overflow-y-auto p-1">
          {messages.map((m) => (
            <div
              key={m.id}
              className={
                m.role === "user"
                  ? "ml-auto max-w-[80%] rounded-lg bg-primary px-3 py-2 text-sm text-primary-foreground"
                  : "mr-auto max-w-[80%] rounded-lg border bg-card px-3 py-2 text-sm"
              }
            >
              {m.content}
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={onSend} className="flex items-center gap-2">
        <Input
          className="flex-1"
          placeholder="Ask a question about Solidity or the EVM..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit" disabled={isSending}>
          {isSending ? "Sending..." : "Send"}
        </Button>
      </form>
    </div>
  );
}
