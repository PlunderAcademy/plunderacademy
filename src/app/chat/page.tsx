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
import { config } from "@/lib/config";
import { useAchievements } from "@/hooks/use-achievements";
import { cn } from "@/lib/utils";

// ============================================================================
// Secret Achievement Configuration
// ============================================================================
const SECRET_ACHIEVEMENTS = {
  PARLEY: {
    taskCode: 2001,
    achievementNumber: "2001",
    secretAnswer: "aiuniverse",
    title: "Parley",
    description: "You've mastered the art of cryptographic negotiation by exploring Zilliqa 2.0!",
    emoji: "🏴‍☠️",
    gradientFrom: "from-indigo-500",
    gradientTo: "to-purple-700",
    borderColor: "border-indigo-300",
  },
  BURIED_TREASURE_MAP: {
    taskCode: 2002,
    achievementNumber: "2002",
    secretAnswer: "biscuitsai",
    title: "Buried Treasure Map",
    description: "You've discovered the secrets of hidden achievements!",
    emoji: "🗺️",
    gradientFrom: "from-amber-500",
    gradientTo: "to-yellow-600",
    borderColor: "border-amber-300",
  },
  MASTER_CONTROL_PROGRAM: {
    taskCode: 2005,
    achievementNumber: "2005",
    secretAnswer: "aientrepreneurship",
    title: "Master Control Program",
    description: "You've successfully queried live validator data from the Zilliqa network!",
    emoji: "🤖",
    gradientFrom: "from-cyan-500",
    gradientTo: "to-blue-700",
    borderColor: "border-cyan-300",
  },
} as const;

// Zilliqa 2.0 specific detection patterns (for Parley achievement)
const ZILLIQA_SPECIFIC_PATTERNS = [
  /zilliqa\s*2\.?0?/i,
  /\bzq2\b/i,
  /zilliqa.*rpc/i,
  /zilliqa.*api/i,
  /zilliqa.*endpoint/i,
  /chain\s*id.*32769/i,
  /chain\s*id.*33101/i,
  /\bscilla\b/i,
  /fast[- ]?hotstuff/i,
  /pipelined.*consensus/i,
  /ds\s*epoch/i,
  /zilliqa.*sharding/i,
  /zilliqa.*mainnet/i,
  /zilliqa.*testnet/i,
];

// Achievement discovery patterns (for Buried Treasure Map)
const ACHIEVEMENT_PATTERNS = [
  /\bachievement/i,
  /\bsecret/i,
  /\btreasure/i,
  /\bhidden/i,
  /\bunlock.*achievement/i,
  /\beaster\s*egg/i,
  /find.*achievement/i,
  /how.*get.*nft/i,
  /how.*claim.*nft/i,
];

// MCP response patterns (for Master Control Program)
// These are the formatted outputs from zilliqa-mcp.ts
const MCP_RESPONSE_PATTERNS = [
  /📊\s*\*\*.*Stake\*\*/,           // get_validator_stake
  /💰\s*\*\*.*Earnings\*\*/,        // get_total_validator_earnings  
  /📈\s*\*\*.*Earnings\*\*/,        // get_validator_earnings_breakdown
  /🎯\s*\*\*.*Success Rate\*\*/,    // get_proposer_success_rate
  /✅\s*\*\*.*Success Rate\*\*/,    // get_cosigner_success_rate
  /ℹ️\s*\*\*.*Info\*\*/,            // get_validator_info
  /ZIL staked/i,
  /validator.*\d+.*ZIL/i,
  /Cosigner Success Rate/i,
  /Proposer Success Rate/i,
  /staked with.*validator/i,
];

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

// Zilliqa validator query prompts (uses MCP tools)
const validatorPrompts = [
  "How much ZIL is staked with PlunderSwap?",
  "What's Binance's cosigner success rate last month?",
  "Moonlet earnings breakdown last week",
  "How reliable was Torch at proposing blocks in November?",
  "What is the ZIL address for PlunderSwap?",
  "Amazing Pool's total earnings last 3 months",
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
  const [hideValidatorPrompts, setHideValidatorPrompts] = React.useState(false);
  const isLoading = status === "submitted" || status === "streaming";

  const [interactionIds, setInteractionIds] = React.useState<Record<number, string>>({});
  const [messageTiming, setMessageTiming] = React.useState<
    Record<number, { startTime: number; inputText: string }>
  >({});
  const trackedInteractionsRef = React.useRef<Set<string>>(new Set());

  // ============================================================================
  // Secret Achievement State
  // ============================================================================
  const { walletAchievements, fetchWalletAchievements, fetchUnclaimedVouchers } = useAchievements();
  const [secretAchievementModal, setSecretAchievementModal] = React.useState<{
    show: boolean;
    achievement: typeof SECRET_ACHIEVEMENTS.PARLEY | typeof SECRET_ACHIEVEMENTS.BURIED_TREASURE_MAP | typeof SECRET_ACHIEVEMENTS.MASTER_CONTROL_PROGRAM | null;
  }>({ show: false, achievement: null });
  const [isSubmittingSecret, setIsSubmittingSecret] = React.useState(false);
  const [secretError, setSecretError] = React.useState<string | null>(null);
  
  // Track which achievements have been triggered this session
  const triggeredAchievementsRef = React.useRef<Set<string>>(new Set());
  
  // Check if user already has these achievements
  const hasParleyAchievement = React.useMemo(() => 
    walletAchievements.some(a => a.tokenId === SECRET_ACHIEVEMENTS.PARLEY.taskCode),
    [walletAchievements]
  );
  const hasBuriedTreasureMapAchievement = React.useMemo(() => 
    walletAchievements.some(a => a.tokenId === SECRET_ACHIEVEMENTS.BURIED_TREASURE_MAP.taskCode),
    [walletAchievements]
  );
  const hasMasterControlProgramAchievement = React.useMemo(() => 
    walletAchievements.some(a => a.tokenId === SECRET_ACHIEVEMENTS.MASTER_CONTROL_PROGRAM.taskCode),
    [walletAchievements]
  );

  // Detection functions
  const detectsZilliqaSpecific = React.useCallback((text: string): boolean => {
    return ZILLIQA_SPECIFIC_PATTERNS.some(pattern => pattern.test(text));
  }, []);

  const detectsAchievementQuery = React.useCallback((text: string): boolean => {
    return ACHIEVEMENT_PATTERNS.some(pattern => pattern.test(text));
  }, []);

  const detectsMCPResponse = React.useCallback((text: string): boolean => {
    return MCP_RESPONSE_PATTERNS.some(pattern => pattern.test(text));
  }, []);

  // Submit secret achievement to API
  const submitSecretAchievement = React.useCallback(async (
    achievement: typeof SECRET_ACHIEVEMENTS.PARLEY | typeof SECRET_ACHIEVEMENTS.BURIED_TREASURE_MAP | typeof SECRET_ACHIEVEMENTS.MASTER_CONTROL_PROGRAM
  ) => {
    if (!address) {
      setSecretError('Please connect your wallet to claim this secret');
      return;
    }

    setIsSubmittingSecret(true);
    setSecretError(null);

    const requestPayload = {
      walletAddress: address,
      achievementNumber: achievement.achievementNumber,
      submissionType: "secret",
      submissionData: {
        secretAnswer: achievement.secretAnswer
      },
      metadata: {
        timestamp: new Date().toISOString(),
        discoveryMethod: "ai_chat_discovery"
      }
    };

    try {
      const response = await fetch(`${config.apiBaseUrl}/api/v1/vouchers/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestPayload),
      });

      const responseText = await response.text();
      let apiResult;

      try {
        apiResult = JSON.parse(responseText);
      } catch {
        throw new Error(`API returned invalid JSON. Status: ${response.status}`);
      }

      if (response.ok && apiResult.success) {
        // Success! Show modal
        setSecretAchievementModal({ show: true, achievement });
        // Refresh achievement data
        window.dispatchEvent(new CustomEvent('achievementClaimed', { 
          detail: { timestamp: Date.now() } 
        }));
        fetchWalletAchievements();
        fetchUnclaimedVouchers();
      } else {
        // Check if this is an "already completed" error
        const errorMessage = apiResult.error || 'Failed to claim secret achievement';
        if (errorMessage.toLowerCase().includes('already completed') || 
            errorMessage.toLowerCase().includes('already claimed') ||
            errorMessage.toLowerCase().includes('already exists')) {
          // Already claimed - silently mark as triggered to prevent future attempts
          triggeredAchievementsRef.current.add(achievement.achievementNumber);
          return;
        }
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error('Error submitting secret achievement:', error);
      setSecretError(error instanceof Error ? error.message : 'Failed to claim secret achievement');
    } finally {
      setIsSubmittingSecret(false);
    }
  }, [address, fetchWalletAchievements, fetchUnclaimedVouchers]);

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

  const handleValidatorPromptSelect = (suggestion: string) => {
    setHideValidatorPrompts(true);
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

  // ============================================================================
  // Secret Achievement Detection
  // ============================================================================
  React.useEffect(() => {
    // Only check when not loading and we have messages
    if (isLoading || messages.length < 2 || !address) return;

    // Get the last user message and assistant response
    const lastMessage = messages[messages.length - 1];
    const secondLastMessage = messages[messages.length - 2];
    
    if (lastMessage.role !== "assistant" || secondLastMessage.role !== "user") return;

    // Extract text content from messages
    const userText = Array.isArray(secondLastMessage.parts)
      ? secondLastMessage.parts
          .filter((p) => p?.type === "text")
          .map((p) => (p.type === "text" ? p.text : ""))
          .join(" ")
      : "";

    const assistantText = Array.isArray(lastMessage.parts)
      ? lastMessage.parts
          .filter((p) => p?.type === "text")
          .map((p) => (p.type === "text" ? p.text : ""))
          .join(" ")
      : "";

    // Check for Parley achievement (Zilliqa-specific query)
    if (
      !hasParleyAchievement &&
      !triggeredAchievementsRef.current.has(SECRET_ACHIEVEMENTS.PARLEY.achievementNumber) &&
      detectsZilliqaSpecific(userText)
    ) {
      triggeredAchievementsRef.current.add(SECRET_ACHIEVEMENTS.PARLEY.achievementNumber);
      submitSecretAchievement(SECRET_ACHIEVEMENTS.PARLEY);
    }

    // Check for Buried Treasure Map achievement (asking about achievements/secrets)
    if (
      !hasBuriedTreasureMapAchievement &&
      !triggeredAchievementsRef.current.has(SECRET_ACHIEVEMENTS.BURIED_TREASURE_MAP.achievementNumber) &&
      detectsAchievementQuery(userText)
    ) {
      triggeredAchievementsRef.current.add(SECRET_ACHIEVEMENTS.BURIED_TREASURE_MAP.achievementNumber);
      submitSecretAchievement(SECRET_ACHIEVEMENTS.BURIED_TREASURE_MAP);
    }

    // Check for Master Control Program achievement (MCP response detected)
    if (
      !hasMasterControlProgramAchievement &&
      !triggeredAchievementsRef.current.has(SECRET_ACHIEVEMENTS.MASTER_CONTROL_PROGRAM.achievementNumber) &&
      detectsMCPResponse(assistantText)
    ) {
      triggeredAchievementsRef.current.add(SECRET_ACHIEVEMENTS.MASTER_CONTROL_PROGRAM.achievementNumber);
      submitSecretAchievement(SECRET_ACHIEVEMENTS.MASTER_CONTROL_PROGRAM);
    }
  }, [
    isLoading,
    messages,
    address,
    hasParleyAchievement,
    hasBuriedTreasureMapAchievement,
    hasMasterControlProgramAchievement,
    detectsZilliqaSpecific,
    detectsAchievementQuery,
    detectsMCPResponse,
    submitSecretAchievement,
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
        
        {/* Zilliqa Validator Queries - hide after first use */}
        {!hideValidatorPrompts && (
          <section className="rounded-2xl border border-emerald-500/30 bg-emerald-50/20 p-3 dark:bg-emerald-950/20">
            <div className="mb-2 flex items-center gap-2 text-xs font-medium text-emerald-700 dark:text-emerald-400">
              🔗 Live Validator Data
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {validatorPrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleValidatorPromptSelect(prompt)}
                  className="rounded-lg border border-emerald-500/30 bg-emerald-50/50 px-3 py-2 text-left text-xs text-emerald-900 transition-colors hover:bg-emerald-100/70 dark:bg-emerald-950/30 dark:text-emerald-100 dark:hover:bg-emerald-900/40"
                >
                  {prompt}
                </button>
              ))}
            </div>
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

      {/* Secret Achievement Success Modal */}
      {secretAchievementModal.show && secretAchievementModal.achievement && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div 
            className={cn(
              "bg-gradient-to-br p-8 rounded-xl shadow-2xl text-center max-w-md mx-4 border-4 animate-pulse",
              secretAchievementModal.achievement.gradientFrom,
              secretAchievementModal.achievement.gradientTo,
              secretAchievementModal.achievement.borderColor
            )}
          >
            <div className="text-6xl mb-4">{secretAchievementModal.achievement.emoji}</div>
            <h2 className="text-2xl font-bold text-white mb-2">Secret Achievement Discovered!</h2>
            <h3 className="text-lg font-semibold text-white/90 mb-4">
              {secretAchievementModal.achievement.title}
            </h3>
            <p className="text-white/80 mb-6">
              {secretAchievementModal.achievement.description}
            </p>
            <div className="space-y-3">
              <p className="text-sm text-white/70 bg-black/20 p-3 rounded-lg">
                📜 Check your achievements and unclaimed vouchers to claim your NFT!
              </p>
              <button
                onClick={() => setSecretAchievementModal({ show: false, achievement: null })}
                className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg transition-colors border border-white/30"
              >
                Continue Chatting
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Secret Achievement Error Message */}
      {secretError && (
        <div className="fixed top-4 right-4 bg-red-500/90 backdrop-blur text-white p-4 rounded-lg shadow-lg max-w-md z-40">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">⚠️</span>
            <span className="font-semibold">Secret Achievement Failed</span>
          </div>
          <p className="text-sm">{secretError}</p>
          <button
            onClick={() => setSecretError(null)}
            className="mt-2 text-xs bg-white/20 hover:bg-white/30 px-3 py-1 rounded transition-colors"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Loading overlay for secret achievement submission */}
      {isSubmittingSecret && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-40">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-xl text-center">
            <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4" />
            <p className="text-sm text-muted-foreground">Claiming secret achievement...</p>
          </div>
        </div>
      )}
    </WalletAuthGuard>
  );
}
