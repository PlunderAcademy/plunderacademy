"use client";

import * as React from "react";
import { useChat } from "@ai-sdk/react";
import type { UIMessage } from "ai";
import { 
  Conversation, 
  ConversationContent, 
  ConversationScrollButton 
} from "@/components/ai-elements/conversation";
import { 
  Message, 
  MessageContent, 
  MessageAvatar 
} from "@/components/ai-elements/message";
import { 
  PromptInput, 
  PromptInputTextarea, 
  PromptInputSubmit, 
  PromptInputToolbar 
} from "@/components/ai-elements/prompt-input";
import { Response } from "@/components/ai-elements/response";
import { Loader } from "@/components/ai-elements/loader";
import { WalletAuthGuard } from "@/components/wallet-auth-guard";

export default function ChatPage() {
  const { messages, sendMessage, status } = useChat();
  const [input, setInput] = React.useState("");
  const isLoading = status === "submitted" || status === "streaming";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage({ text: input.trim() });
    setInput("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  return (
    <WalletAuthGuard 
      title="Wallet Required for AI Chat"
      description="Connect your wallet to access our AI chat assistant for Solidity and EVM development help."
    >
      <div className="mx-auto flex h-[calc(100vh-200px)] w-full max-w-4xl flex-col">
        <div className="mb-4">
          <h1 className="text-3xl font-bold tracking-tight">
            AI Chat Assistant
          </h1>
        </div>
        
        <Conversation className="flex-1 border rounded-xl">
          <ConversationContent>
            {messages.length === 0 && (
              <Message from="assistant">
                <MessageAvatar src="/ai-avatar.svg" name="AI" />
                <MessageContent className="!bg-white !text-gray-900">
                  <Response>
                    Ask me anything about Solidity, EVM, and tooling. I&apos;m here to help with smart contract development, security audits, gas optimization, and more!
                  </Response>
                </MessageContent>
              </Message>
            )}
            
            {messages.map((message: UIMessage) => (
              <Message key={message.id} from={message.role}>
                {message.role === "assistant" && (
                  <MessageAvatar src="/ai-avatar.svg" name="AI" />
                )}
                {message.role === "user" && (
                  <MessageAvatar src="/user-avatar.svg" name="You" />
                )}
                <MessageContent className={message.role === "assistant" ? "!bg-white !text-gray-900" : ""}>
                  {message.role === "user" ? (
                    Array.isArray(message.parts)
                      ? message.parts
                          .filter((p) => p?.type === "text")
                          .map((p, i: number) => (
                            <div key={`${message.id}-${i}`} className="whitespace-pre-wrap">
                              {p.type === "text" ? p.text : ""}
                            </div>
                          ))
                      : null
                  ) : (
                    <Response>
                      {Array.isArray(message.parts)
                        ? message.parts
                            .filter((p) => p?.type === "text")
                            .map((p) => (p.type === "text" ? p.text : ""))
                            .join("\n\n")
                        : ""}
                    </Response>
                  )}
                </MessageContent>
              </Message>
            ))}
            
            {isLoading && (
              <Message from="assistant">
                <MessageAvatar src="/ai-avatar.svg" name="AI" />
                <MessageContent className="!bg-white !text-gray-900">
                  <div className="flex items-center gap-2">
                    <Loader size={16} />
                    <span className="text-gray-600">Thinking...</span>
                  </div>
                </MessageContent>
              </Message>
            )}
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>

        <PromptInput 
          onSubmit={handleSubmit}
          className="mt-4"
        >
          <PromptInputTextarea
            value={input}
            onChange={handleInputChange}
            placeholder="Ask a question about Solidity or the EVM..."
          />
          <PromptInputToolbar>
            <div /> {/* Spacer */}
            <PromptInputSubmit 
              status={status}
              disabled={!input.trim()}
            />
          </PromptInputToolbar>
        </PromptInput>

        <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-800 dark:bg-amber-950/30">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>⚠️ Important:</strong> AI-generated code is provided &ldquo;as is&rdquo; without guarantees. 
            Always review, test, and validate outputs before production use. You are solely responsible 
            for ensuring code meets your security and functional requirements.
          </p>
        </div>
      </div>
    </WalletAuthGuard>
  );
}
