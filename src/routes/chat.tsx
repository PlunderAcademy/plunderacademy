import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/chat")({
  component: ChatPage,
});

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
import { Response } from "@/components/ai-elements/response";
import { Loader } from "@/components/ai-elements/loader";
import { WalletAuthGuard } from "@/components/wallet-auth-guard";
import { AIFeedback } from "@/components/ai-feedback";
import { useSession } from "@/lib/session-context";
import { trackAIInteraction } from "@/lib/feedback-api";
import { usePageIntro } from "@/hooks/use-page-intro";
import {
  ChevronDown,
  ChevronUp,
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
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
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
  /📊\s*\*\*.*Stake\*\*/,           // getValidatorStake
  /💰\s*\*\*.*Earnings\*\*/,        // getTotalValidatorEarnings  
  /📈\s*\*\*.*Earnings\*\*/,        // getValidatorEarningsBreakdown
  /🎯\s*\*\*.*Success Rate\*\*/,    // getProposerSuccessRate
  /✅\s*\*\*.*Success Rate\*\*/,    // getCosignerSuccessRate
  /ℹ️\s*\*\*.*Info\*\*/,            // getValidatorInfo
  /📋\s*\*\*Known Validators\*\*/,  // listValidators
  /🏆\s*\*\*Top Validators/,        // getTopValidatorsByEarnings
  /ZIL staked/i,
  /validator.*\d+.*ZIL/i,
  /Cosigner Success Rate/i,
  /Proposer Success Rate/i,
  /staked with.*validator/i,
  /Top.*by Stake/i,
  /Top.*by Earnings/i,
];

const DEFAULT_MODEL = "anthropic/claude-haiku-5.5";

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
  "What validators can I query?",
  "Top 10 validators by APR this week",
  "Who are the top 5 validators by earnings this week?",
  "What's Binance's cosigner success rate last month?",
  "Which validators have the best uptime this week?",
  "Top validators by stake",
] as const;

function ChatPage() {
  const { address, sessionId } = useSession();
  
  // Conversation management
  const [currentConversationId, setCurrentConversationId] = React.useState<string>(() =>
    createConversationId()
  );
  const [conversations, setConversations] = React.useState<StoredConversation[]>([]);
  const [showHistory, setShowHistory] = React.useState(false);
  const [historySheetOpen, setHistorySheetOpen] = React.useState(false);
  const intro = usePageIntro("chat");

  // Open history by default on desktop only
  React.useEffect(() => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      setShowHistory(true);
    }
  }, []);
  const [pendingLoadMessages, setPendingLoadMessages] = React.useState<UIMessage[] | null>(null);
  
  // Load conversations on mount and when address changes
  React.useEffect(() => {
    const loaded = getConversations(address);
    setConversations(loaded);
  }, [address]);
  
  const { messages, sendMessage, status, setMessages, error } = useChat({
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
  const chatSectionRef = React.useRef<HTMLElement>(null);

  // On phones the conversation flows in the page, so follow new content like a chat app
  // unless the reader has scrolled up
  React.useEffect(() => {
    const section = chatSectionRef.current;
    if (!section || messages.length === 0 || window.matchMedia("(min-width: 1024px)").matches) return;
    const target = section.offsetTop + section.offsetHeight - window.innerHeight;
    const nearBottom = window.scrollY >= target - 400;
    if (nearBottom || messages[messages.length - 1]?.role === "user") {
      window.scrollTo({ top: Math.max(target, 0) });
    }
  }, [messages]);

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

  const toggleHistory = () => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      setShowHistory((open) => !open);
    } else {
      setHistorySheetOpen(true);
    }
  };

  const historyList = (
    <div className="flex min-h-0 flex-1 flex-col gap-3">
      <Button
        onClick={() => {
          handleNewConversation();
          setHistorySheetOpen(false);
        }}
        size="sm"
        className="w-full"
      >
        <Plus className="mr-2 size-4" />
        New chat
      </Button>
      {conversations.length === 0 ? (
        <p className="py-8 text-center text-xs text-muted-foreground">
          Your past chats will appear here.
        </p>
      ) : (
        <ul className="scrollbar-visible -mr-2 min-h-0 flex-1 space-y-1 overflow-y-auto pr-1">
          {conversations.map((conv) => (
            <li
              key={conv.id}
              className={cn(
                "group flex items-start gap-1 rounded-lg",
                conv.id === currentConversationId ? "bg-primary/10" : "hover:bg-muted/60"
              )}
            >
              <button
                type="button"
                onClick={() => {
                  handleLoadConversation(conv);
                  setHistorySheetOpen(false);
                }}
                className="flex min-w-0 flex-1 items-start gap-2 rounded-lg p-2 text-left focus-visible:outline-2 focus-visible:outline-ring"
                aria-current={conv.id === currentConversationId ? "true" : undefined}
              >
                <MessageSquare className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                <span className="min-w-0">
                  <span className="block truncate text-sm font-medium">{conv.title}</span>
                  <span className="block text-xs text-muted-foreground">
                    {new Date(conv.updatedAt).toLocaleDateString(undefined, {
                      month: "short",
                      day: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </span>
                </span>
              </button>
              <button
                type="button"
                onClick={(e) => handleDeleteConversation(conv.id, e)}
                className="m-1 rounded p-1.5 text-muted-foreground hover:text-destructive focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-ring lg:opacity-0 lg:group-hover:opacity-100"
                aria-label={`Delete chat: ${conv.title}`}
              >
                <Trash2 className="size-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  const promptButton = (prompt: string) => (
    <button
      key={prompt}
      type="button"
      onClick={() => handleSuggestionSelect(prompt)}
      className="rounded-lg border bg-background px-3 py-2 text-left text-sm transition-colors hover:border-primary/40 hover:bg-primary/5 focus-visible:outline-2 focus-visible:outline-ring"
    >
      {prompt}
    </button>
  );

  return (
    <WalletAuthGuard
      title="Wallet Required for AI Chat"
      description="Connect your wallet to access our AI chat assistant for Solidity and EVM development help."
    >
      <div className="mx-auto w-full max-w-6xl space-y-6">
        {intro.open ? (
        <section className="relative rounded-2xl border border-border/70 bg-card/80 p-4 shadow-sm sm:p-5">
          <Button
            variant="ghost"
            size="sm"
            onClick={intro.toggle}
            aria-expanded="true"
            className="absolute right-3 top-3 z-10 gap-1 text-muted-foreground"
          >
            Hide intro
            <ChevronUp className="size-4" />
          </Button>

          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Realtime mentor
            </p>
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
        ) : (
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">AI Chat Assistant</h1>
              <p className="text-sm text-muted-foreground">Guidance for Solidity patterns, tooling, gas strategy, on-chain debugging and live validator data.</p>
            </div>
            <Button variant="ghost" size="sm" onClick={intro.toggle} aria-expanded="false" className="gap-1 text-muted-foreground">
              Show intro
              <ChevronDown className="size-4" />
            </Button>
          </div>
        )}

        <div className="flex gap-4 lg:h-[calc(100dvh-7rem)] lg:min-h-[520px]">
        {showHistory && (
          <aside
            aria-label="Chat history"
            className="hidden w-64 shrink-0 flex-col gap-3 rounded-xl border bg-card p-3 shadow-sm lg:flex"
          >
            <h2 className="px-1 text-sm font-semibold">Chat history</h2>
            {historyList}
          </aside>
        )}

        <Sheet open={historySheetOpen} onOpenChange={setHistorySheetOpen}>
          <SheetContent side="left" className="flex w-80 flex-col gap-3 p-4">
            <SheetHeader className="p-0">
              <SheetTitle>Chat history</SheetTitle>
            </SheetHeader>
            {historyList}
          </SheetContent>
        </Sheet>

        <section
          ref={chatSectionRef}
          aria-label="AI chat"
          className="flex min-h-[70dvh] min-w-0 flex-1 flex-col rounded-xl border bg-card shadow-sm lg:min-h-0 lg:overflow-hidden"
        >
          <div className="flex items-center gap-2 border-b px-3 py-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleHistory}
              className="gap-2"
              aria-label="Chat history"
            >
              <History className="size-4" />
              <span className="hidden sm:inline">History</span>
              {conversations.length > 0 && (
                <span className="rounded-full bg-muted px-1.5 text-[11px] font-medium tabular-nums text-muted-foreground">
                  {conversations.length}
                </span>
              )}
            </Button>
            <span className="text-sm font-semibold">AI Chat</span>
            {messages.length > 0 && (
              <Button variant="outline" size="sm" onClick={handleNewConversation} className="ml-auto gap-2">
                <Plus className="size-4" />
                New chat
              </Button>
            )}
          </div>

          {messages.length === 0 ? (
            <div className="scrollbar-visible flex-1 lg:min-h-0 lg:overflow-y-auto">
              <div className="mx-auto w-full max-w-3xl p-4">
                <div className="flex flex-col gap-6 py-4 sm:py-8">
                  <div className="space-y-1">
                    <h2 className="text-xl font-semibold tracking-tight">
                      What are you building?
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Ask about Solidity, Zilliqa 2.0 or your tooling, paste an error to debug, or
                      look up live validator stats.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Learn and debug</h3>
                    <div className="grid gap-2 sm:grid-cols-2">{starterPrompts.map(promptButton)}</div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Live validator data</h3>
                    <div className="grid gap-2 sm:grid-cols-2">{validatorPrompts.map(promptButton)}</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
          <Conversation className="scrollbar-visible min-h-0 max-lg:overflow-y-visible">
            <ConversationContent className="mx-auto w-full max-w-3xl">
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
                        <div className="prose max-w-none [overflow-wrap:anywhere]">
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

              {status === "submitted" && (
                <Message from="assistant">
                  <MessageAvatar src="/ai-avatar.svg" name="AI" />
                  <MessageContent className="group-[.is-assistant]:bg-card group-[.is-assistant]:border">
                    <div className="flex items-center gap-2" role="status">
                      <Loader size={16} />
                      <span className="text-muted-foreground">Thinking…</span>
                    </div>
                  </MessageContent>
                </Message>
              )}

              {error && !isLoading && (
                <p role="alert" className="mx-auto max-w-md py-2 text-center text-sm text-destructive">
                  The reply didn&apos;t complete. Send your message again to retry.
                </p>
              )}
            </ConversationContent>
            <ConversationScrollButton />
          </Conversation>
          )}

          <div className="sticky bottom-0 z-10 rounded-b-xl border-t bg-card p-3 lg:static">
            <div className="mx-auto max-w-3xl">
              <PromptInput onSubmit={handleSubmit}>
                <div className="flex items-end gap-2 p-1.5">
                  <PromptInputTextarea
                    id="chat-prompt"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Ask a question or paste an error"
                    aria-label="Message"
                    className="flex-1 text-base leading-relaxed"
                  />
                  <PromptInputSubmit status={status} disabled={!input.trim()} className="mb-1" />
                </div>
              </PromptInput>
              <p className="mt-2 text-center text-xs text-muted-foreground">
                AI answers can be wrong. Review and test any code before you deploy it.
              </p>
            </div>
          </div>
        </section>
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
