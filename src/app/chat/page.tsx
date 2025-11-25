"use client";

import * as React from "react";
import { useChat } from "@ai-sdk/react";
import type { UIMessage } from "ai";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import {
  Message,
  MessageContent,
  MessageAvatar,
} from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputSubmit,
} from "@/components/ai-elements/prompt-input";
import { Suggestions, Suggestion } from "@/components/ai-elements/suggestion";
import { Response } from "@/components/ai-elements/response";
import { Loader } from "@/components/ai-elements/loader";
import { WalletAuthGuard } from "@/components/wallet-auth-guard";
import { AIFeedback } from "@/components/ai-feedback";
import { useSession } from "@/lib/session-context";
import { trackAIInteraction } from "@/lib/feedback-api";
import {
  AlertTriangle,
  Cpu,
  Shield,
  Sparkles,
  History,
  Plus,
  Trash2,
  MessageSquare,
} from "lucide-react";
import {
  getConversations,
  saveConversation,
  deleteConversation,
  generateConversationTitle,
  createConversationId,
  type StoredConversation,
} from "@/lib/chat-storage";
import { Button } from "@/components/ui/button";

const DEFAULT_MODEL = "openai/gpt-oss-120b";

const heroHighlights = [
  {
    title: "Security instincts",
    description:
      "Surface reentrancy, delegatecall, and upgrade pitfalls before they land on mainnet.",
    icon: Shield,
  },
  {
    title: "Compiler aware",
    description:
      "Understands Hardhat, Foundry, and deployment scripts to spot fragile assumptions.",
    icon: Cpu,
  },
  {
    title: "Mentor energy",
    description:
      "Breaks concepts down with annotated examples so teammates can follow along.",
    icon: Sparkles,
  },
] as const;

const starterPrompts = [
  "Explain events vs logs in Solidity like I'm new to smart contracts.",
  "Why does my simple ERC20 transfer revert?",
  "How do I set up a basic Foundry test from scratch?",
  "Show a safe pattern for sending ETH from a contract.",
] as const;

export default function ChatPage() {
  const { address, sessionId } = useSession();
  
  // Conversation management
  const [currentConversationId, setCurrentConversationId] = React.useState<string>(() =>
    createConversationId()
  );
  const [conversations, setConversations] = React.useState<StoredConversation[]>([]);
  const [showHistory, setShowHistory] = React.useState(true);
  const [pendingLoadMessages, setPendingLoadMessages] = React.useState<UIMessage[] | null>(null);
  
  // Load conversations on mount and when address changes
  React.useEffect(() => {
    const loaded = getConversations(address);
    setConversations(loaded);
  }, [address]);
  
  const { messages, sendMessage, status, setMessages } = useChat({
    id: currentConversationId,
  });
  
  // Load pending messages after conversation ID changes and hook resets
  React.useEffect(() => {
    if (pendingLoadMessages && messages.length === 0) {
      setMessages(pendingLoadMessages);
      setPendingLoadMessages(null);
    }
  }, [currentConversationId, pendingLoadMessages, messages.length, setMessages]);
  
  const [input, setInput] = React.useState("");
  const isLoading = status === "submitted" || status === "streaming";

  const [interactionIds, setInteractionIds] = React.useState<Record<number, string>>({});
  const [messageTiming, setMessageTiming] = React.useState<
    Record<number, { startTime: number; inputText: string }>
  >({});
  const trackedInteractionsRef = React.useRef<Set<string>>(new Set());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const id = crypto.randomUUID();
    const currentMessageCount = messages.length;

    setMessageTiming((prev) => ({
      ...prev,
      [currentMessageCount]: {
        startTime: Date.now(),
        inputText: trimmed,
      },
    }));

    sendMessage({ text: trimmed });
    setInput("");

    setInteractionIds((prev) => ({
      ...prev,
      [currentMessageCount + 1]: id,
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const focusPromptTextarea = React.useCallback((nextValue: string) => {
    requestAnimationFrame(() => {
      const textarea = document.getElementById("chat-prompt");
      if (textarea instanceof HTMLTextAreaElement) {
        const position = nextValue.length;
        textarea.focus();
        textarea.setSelectionRange(position, position);
      }
    });
  }, []);

  const handleSuggestionSelect = (suggestion: string) => {
    setInput(suggestion);
    focusPromptTextarea(suggestion);
  };

  // Auto-save conversation whenever messages change
  React.useEffect(() => {
    if (messages.length === 0) return;
    
    const title = generateConversationTitle(messages);
    
    saveConversation({
      id: currentConversationId,
      title,
      messages,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      walletAddress: address,
    });
    
    // Refresh conversations list
    setConversations(getConversations(address));
  }, [messages, currentConversationId, address]);

  // Start a new conversation
  const handleNewConversation = React.useCallback(() => {
    const newId = createConversationId();
    setCurrentConversationId(newId);
    setMessages([]);
    setPendingLoadMessages(null);
    setInput("");
    setInteractionIds({});
    setMessageTiming({});
    trackedInteractionsRef.current.clear();
  }, [setMessages]);

  // Load an existing conversation
  const handleLoadConversation = React.useCallback((conversation: StoredConversation) => {
    setCurrentConversationId(conversation.id);
    setPendingLoadMessages(conversation.messages);
    setInput("");
    setInteractionIds({});
    setMessageTiming({});
    trackedInteractionsRef.current.clear();
  }, []);

  // Delete a conversation
  const handleDeleteConversation = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    deleteConversation(id);
    setConversations(getConversations(address));
    
    // If deleting current conversation, start a new one
    if (id === currentConversationId) {
      handleNewConversation();
    }
  };

  React.useEffect(() => {
    if (isLoading) return;
    if (messages.length === 0 || !address) return;

    const lastMessage = messages[messages.length - 1];
    if (lastMessage.role !== "assistant") return;

    const assistantMessageIndex = messages.length - 1;
    const interactionId = interactionIds[assistantMessageIndex];
    if (!interactionId) return;

    if (trackedInteractionsRef.current.has(interactionId)) return;

    const userMessageIndex = assistantMessageIndex - 1;
    const timing = messageTiming[userMessageIndex];
    if (!timing) {
      console.warn(`No timing data found for message index ${userMessageIndex}`);
      return;
    }

    trackedInteractionsRef.current.add(interactionId);

    const durationMs = Date.now() - timing.startTime;

    const assistantContent = Array.isArray(lastMessage.parts)
      ? lastMessage.parts
          .filter((p) => p?.type === "text")
          .map((p) => (p.type === "text" ? p.text : ""))
          .join("\n\n")
      : "";

    const queryLower = timing.inputText.toLowerCase();
    let queryCategory = "general";
    if (
      queryLower.includes("setup") ||
      queryLower.includes("install") ||
      queryLower.includes("configure")
    ) {
      queryCategory = "setup";
    } else if (
      queryLower.includes("error") ||
      queryLower.includes("debug") ||
      queryLower.includes("fix")
    ) {
      queryCategory = "debugging";
    } else if (
      queryLower.includes("how") ||
      queryLower.includes("what") ||
      queryLower.includes("explain")
    ) {
      queryCategory = "concepts";
    } else if (
      queryLower.includes("deploy") ||
      queryLower.includes("mainnet") ||
      queryLower.includes("production")
    ) {
      queryCategory = "deployment";
    }

    console.log("Tracking chat interaction:", {
      interactionId,
      assistantMessageIndex,
      userMessageIndex,
      inputLength: timing.inputText.length,
      outputLength: assistantContent.length,
    });

    trackAIInteraction({
      id: interactionId,
      walletAddress: address,
      toolType: "chat",
      inputLength: timing.inputText.length,
      outputLength: assistantContent.length,
      modelUsed: DEFAULT_MODEL,
      durationMs,
      queryCategory,
      sessionId,
    });

    setMessageTiming((prev) => {
      const newTiming = { ...prev };
      delete newTiming[userMessageIndex];
      return newTiming;
    });
  }, [
    isLoading,
    messages,
    address,
    sessionId,
    interactionIds,
    messageTiming,
  ]);

  return (
    <WalletAuthGuard
      title="Wallet Required for AI Chat"
      description="Connect your wallet to access our AI chat assistant for Solidity and EVM development help."
    >
      <div className="mx-auto flex w-full max-w-7xl flex-1 gap-6">
        {/* History Sidebar */}
        {showHistory && (
          <aside className="w-72 flex-shrink-0 space-y-3">
            <div className="rounded-2xl border border-border/70 bg-card/80 p-4 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-sm font-semibold text-foreground">
                  Chat History
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowHistory(false)}
                  className="h-7 px-2 text-xs"
                >
                  Close
                </Button>
              </div>
              
              <Button
                onClick={handleNewConversation}
                className="mb-3 w-full"
                size="sm"
              >
                <Plus className="mr-2 size-4" />
                New Chat
              </Button>

              <div className="space-y-1.5 max-h-[600px] overflow-y-auto">
                {conversations.length === 0 ? (
                  <p className="py-8 text-center text-xs text-muted-foreground">
                    No previous conversations
                  </p>
                ) : (
                  conversations.map((conv) => (
                    <div
                      key={conv.id}
                      className={`group relative w-full cursor-pointer rounded-lg border p-3 text-left transition-colors ${
                        conv.id === currentConversationId
                          ? "border-primary bg-primary/10"
                          : "border-border/40 bg-background/60 hover:bg-muted/50"
                      }`}
                      onClick={() => handleLoadConversation(conv)}
                    >
                      <div className="flex items-start gap-2">
                        <MessageSquare className="mt-0.5 size-4 flex-shrink-0 text-muted-foreground" />
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-foreground">
                            {conv.title}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(conv.updatedAt).toLocaleDateString(undefined, {
                              month: "short",
                              day: "numeric",
                              hour: "numeric",
                              minute: "2-digit",
                            })}
                          </p>
                        </div>
                        <button
                          onClick={(e) => handleDeleteConversation(conv.id, e)}
                          className="opacity-0 transition-opacity group-hover:opacity-100 hover:text-destructive"
                          aria-label="Delete conversation"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </aside>
        )}

        {/* Main Chat Area */}
        <div className="flex min-w-0 flex-1 flex-col gap-6">
        <section className="rounded-2xl border border-border/70 bg-card/80 p-4 shadow-sm sm:p-5">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Realtime mentor
              </p>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowHistory(!showHistory)}
                  className="h-8 gap-2 text-xs"
                >
                  <History className="size-4" />
                  {showHistory ? "Hide History" : "Show History"}
                  {conversations.length > 0 && (
                    <span className="rounded-full bg-primary px-1.5 py-0.5 text-[10px] font-semibold text-primary-foreground">
                      {conversations.length}
                    </span>
                  )}
                </Button>
                {messages.length > 0 && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleNewConversation}
                    className="h-8 gap-2 text-xs"
                  >
                    <Plus className="size-4" />
                    New
                  </Button>
                )}
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                AI Chat Assistant
              </h1>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Context-aware guidance for Solidity patterns, tooling, gas strategy, and on-chain debugging.
              </p>
            </div>
          </div>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {heroHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-lg border border-border/40 bg-background/60 p-3 text-xs"
                >
                  <div className="mb-1 flex items-center gap-2 text-foreground">
                    <Icon className="size-4 text-muted-foreground" />
                    <span className="font-semibold">{item.title}</span>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {messages.length === 0 && (
          <section className="rounded-2xl border border-dashed border-muted-foreground/40 bg-muted/30 p-4">
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              <Sparkles className="size-3" />
              Jump start a thread
            </div>
            <Suggestions className="px-1">
              {starterPrompts.map((prompt) => (
                <Suggestion
                  key={prompt}
                  suggestion={prompt}
                  onClick={handleSuggestionSelect}
                  className="border-muted-foreground/30 bg-background/70 text-foreground hover:bg-background"
                />
              ))}
            </Suggestions>
          </section>
        )}

        <section className="flex flex-1 flex-col gap-4 rounded-3xl border border-border/60 bg-card/50 p-4 shadow-lg">
          <div className="flex min-h-[420px] flex-1 flex-col overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-b from-background/90 via-background to-background/70">
            <Conversation className="flex-1">
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
                                <div
                                  key={`${message.id}-${i}`}
                                  className="whitespace-pre-wrap"
                                >
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
          </div>

          <div className="rounded-2xl border border-border/70 bg-background/95 shadow-sm">
            <PromptInput
              onSubmit={handleSubmit}
              className="border-0 bg-transparent shadow-none"
            >
              <div className="flex flex-col gap-3 p-3 sm:flex-row sm:items-end">
                <PromptInputTextarea
                  id="chat-prompt"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Describe what you need help with"
                  className="text-base leading-relaxed sm:flex-1"
                />
                <PromptInputSubmit
                  className="sm:self-stretch"
                  status={status}
                  disabled={!input.trim()}
                />
              </div>
            </PromptInput>
          </div>
        </section>

        <div className="flex items-start gap-3 rounded-2xl border border-amber-200/70 bg-amber-50/80 p-4 text-sm text-amber-900 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100">
          <AlertTriangle className="mt-0.5 size-5 flex-shrink-0" />
          <p>
            <strong>Important:</strong> AI-generated code is provided &ldquo;as is&rdquo; without guarantees. Always review, test, and validate outputs before production use. You are solely responsible for ensuring code meets your security and functional requirements.
          </p>
        </div>
        </div>
      </div>
    </WalletAuthGuard>
  );
}
