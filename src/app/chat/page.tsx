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
import { AIFeedback } from "@/components/ai-feedback";
import { useSession } from "@/lib/session-context";
import { trackAIInteraction } from "@/lib/feedback-api";

export default function ChatPage() {
  const { address, sessionId } = useSession();
  const { messages, sendMessage, status } = useChat();
  const [input, setInput] = React.useState("");
  const isLoading = status === "submitted" || status === "streaming";
  
  // Track interaction IDs for each assistant message
  const [interactionIds, setInteractionIds] = React.useState<Record<number, string>>({});
  const [messageTiming, setMessageTiming] = React.useState<Record<number, { startTime: number; inputText: string }>>({});
  
  // Track which interactions have been submitted to avoid duplicates
  const trackedInteractionsRef = React.useRef<Set<string>>(new Set());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Generate interaction ID for tracking
    const id = crypto.randomUUID();
    const currentMessageCount = messages.length;
    
    // Store timing data indexed by message position
    setMessageTiming(prev => ({
      ...prev,
      [currentMessageCount]: { // User message will be at this index
        startTime: Date.now(),
        inputText: input.trim()
      }
    }));
    
    sendMessage({ text: input.trim() });
    setInput("");
    
    // Store the interaction ID for the assistant message (next position)
    setInteractionIds(prev => ({
      ...prev,
      [currentMessageCount + 1]: id // Assistant message will be at this index
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  // Track interaction ONLY when streaming completes
  React.useEffect(() => {
    // Only track when streaming is done
    if (isLoading) return;
    if (messages.length === 0 || !address) return;

    const lastMessage = messages[messages.length - 1];
    if (lastMessage.role !== "assistant") return;

    const assistantMessageIndex = messages.length - 1;
    const interactionId = interactionIds[assistantMessageIndex];
    if (!interactionId) return;
    
    // Check if we've already tracked this interaction
    if (trackedInteractionsRef.current.has(interactionId)) return;

    // Find the corresponding user message timing (previous index)
    const userMessageIndex = assistantMessageIndex - 1;
    const timing = messageTiming[userMessageIndex];
    if (!timing) {
      console.warn(`No timing data found for message index ${userMessageIndex}`);
      return;
    }

    // Mark as tracked before making the API call
    trackedInteractionsRef.current.add(interactionId);

    const durationMs = Date.now() - timing.startTime;
    
    // Get assistant message content
    const assistantContent = Array.isArray(lastMessage.parts)
      ? lastMessage.parts
          .filter((p) => p?.type === "text")
          .map((p) => (p.type === "text" ? p.text : ""))
          .join("\n\n")
      : "";

    // Categorize the query
    const queryLower = timing.inputText.toLowerCase();
    let queryCategory = "general";
    if (queryLower.includes("setup") || queryLower.includes("install") || queryLower.includes("configure")) {
      queryCategory = "setup";
    } else if (queryLower.includes("error") || queryLower.includes("debug") || queryLower.includes("fix")) {
      queryCategory = "debugging";
    } else if (queryLower.includes("how") || queryLower.includes("what") || queryLower.includes("explain")) {
      queryCategory = "concepts";
    } else if (queryLower.includes("deploy") || queryLower.includes("mainnet") || queryLower.includes("production")) {
      queryCategory = "deployment";
    }

    console.log('Tracking chat interaction:', {
      interactionId,
      assistantMessageIndex,
      userMessageIndex,
      inputLength: timing.inputText.length,
      outputLength: assistantContent.length,
    });

    // Track the interaction
    trackAIInteraction({
      id: interactionId,
      walletAddress: address,
      toolType: "chat",
      inputLength: timing.inputText.length,
      outputLength: assistantContent.length,
      modelUsed: "openai/gpt-oss-120b", // Match your default model
      durationMs,
      queryCategory,
      sessionId,
    });

    // Clean up old timing data
    setMessageTiming(prev => {
      const newTiming = { ...prev };
      delete newTiming[userMessageIndex];
      return newTiming;
    });
  }, [isLoading, messages, address, sessionId, interactionIds, messageTiming]);

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
                <MessageContent className="group-[.is-assistant]:bg-card group-[.is-assistant]:border">
                  <div className="prose max-w-none">
                    <Response>
                      Ask me anything about Solidity, EVM, and tooling. I&apos;m here to help with smart contract development, security audits, gas optimization, and more!
                    </Response>
                  </div>
                </MessageContent>
              </Message>
            )}
            
            {messages.map((message: UIMessage, index: number) => (
              <Message key={message.id} from={message.role}>
                {message.role === "assistant" && (
                  <MessageAvatar src="/ai-avatar.svg" name="AI" />
                )}
                {message.role === "user" && (
                  <MessageAvatar src="/user-avatar.svg" name="You" />
                )}
                <MessageContent className="group-[.is-assistant]:bg-card group-[.is-assistant]:border">
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
                    <>
                      <div className="prose max-w-none">
                        <Response>
                          {Array.isArray(message.parts)
                            ? message.parts
                                .filter((p) => p?.type === "text")
                                .map((p) => (p.type === "text" ? p.text : ""))
                                .join("\n\n")
                            : ""}
                        </Response>
                      </div>
                      {interactionIds[index] && (
                        <AIFeedback
                          interactionId={interactionIds[index]}
                          toolType="chat"
                        />
                      )}
                    </>
                  )}
                </MessageContent>
              </Message>
            ))}
            
            {isLoading && (
              <Message from="assistant">
                <MessageAvatar src="/ai-avatar.svg" name="AI" />
                <MessageContent className="group-[.is-assistant]:bg-card group-[.is-assistant]:border">
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
