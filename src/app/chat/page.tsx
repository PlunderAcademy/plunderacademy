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
              <MessageContent className="!bg-white">
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
              <MessageContent className={message.role === "assistant" ? "!bg-white" : ""}>
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
              <MessageContent className="!bg-white">
                <div className="flex items-center gap-2">
                  <Loader size={16} />
                  <span className="text-muted-foreground">Thinking...</span>
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
    </div>
  );
}
