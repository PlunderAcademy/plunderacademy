"use client";

import * as React from "react";
import { useCompletion } from "@ai-sdk/react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Response } from "@/components/ai-elements/response";
import { WalletAuthGuard } from "@/components/wallet-auth-guard";
import { AIFeedback } from "@/components/ai-feedback";
import { useSession } from "@/lib/session-context";
import { trackAIInteraction } from "@/lib/feedback-api";
import { cn } from "@/lib/utils";
import { config } from "@/lib/config";
import { useAchievements } from "@/hooks/use-achievements";

// Secret achievement configuration
const SECRET_ACHIEVEMENTS = {
  REENTRANCY: {
    taskCode: 2003,
    achievementNumber: "2003",
    secretAnswer: "aiscience",
    title: "Mutiny Prevention",
    description: "You've successfully identified a reentrancy vulnerability!",
    emoji: "⚔️",
    gradientFrom: "from-purple-500",
    gradientTo: "to-indigo-700",
    borderColor: "border-purple-300",
  },
  DEAD_MANS_CHEST: {
    taskCode: 2004,
    achievementNumber: "2004",
    secretAnswer: "aihealth",
    title: "Dead Man's Chest",
    description: "You've uncovered critical vulnerabilities: division before multiplication or tx.origin misuse!",
    emoji: "💀",
    gradientFrom: "from-amber-500",
    gradientTo: "to-red-700",
    borderColor: "border-amber-300",
  },
} as const;

// Vulnerability detection patterns
const REENTRANCY_PATTERNS = [
  /reentrancy/i,
  /re-entrancy/i,
  /reentrant/i,
  /recursive call/i,
  /state.*after.*external call/i,
  /call.*before.*state/i,
  /checks-effects-interactions/i,
];

const DEAD_MANS_CHEST_PATTERNS = [
  // Division before multiplication
  /division before multiplication/i,
  /divide before multiply/i,
  /precision loss.*division/i,
  /truncation.*division/i,
  /integer division.*before.*multiplication/i,
  // tx.origin authentication
  /tx\.origin/i,
  /phishing.*tx\.origin/i,
  /origin.*authentication/i,
  /origin.*authorization/i,
];

const starterSnippets = [
  {
    label: "Overflow token",
    description: "unchecked arithmetic in mint()",
    code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract OverflowToken {
    mapping(address => uint256) public balanceOf;

    constructor() {
        balanceOf[msg.sender] = type(uint256).max - 10;
    }

    // BUG: unchecked addition can wrap around
    function mint(uint256 amount) external {
        unchecked {
            balanceOf[msg.sender] += amount; // overflow if amount > 10
        }
    }
}`,
  },
  {
    label: "Guardian vault",
    description: "weak access control",
    code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract GuardianVault {
    address public owner;
    mapping(address => bool) public guardians;

    constructor() {
        owner = msg.sender;
    }

    function setOwner(address newOwner) external {
        require(guardians[msg.sender], "not guardian");
        owner = newOwner; // BUG: no quorum and callable by single guardian
    }

    function toggleGuardian(address account) external {
        require(msg.sender == owner, "not owner");
        guardians[account] = !guardians[account];
    }

    function withdraw() external {
        require(msg.sender == owner, "not owner");
        (bool ok, ) = msg.sender.call{value: address(this).balance}("");
        require(ok, "withdraw failed"); // BUG: vulnerable to reentrancy
    }

    receive() external payable {}
}`,
  },
  {
    label: "Upgradeable timelock",
    description: "initialization flaws",
    code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract UpgradeableTimelock {
    address public admin;
    bool public initialized;
    uint256 public executionDelay;
    mapping(bytes32 => bool) public queued;

    function init(address newAdmin, uint256 delay) external {
        require(!initialized, "already initialized");
        admin = newAdmin; // BUG: anyone can self-assign admin
        executionDelay = delay; // BUG: accepts delay = 0
        initialized = true;
    }

    function queue(bytes32 id) external {
        require(msg.sender == admin, "not admin");
        queued[id] = true;
    }

    function execute(bytes32 id) external {
        require(queued[id], "not queued");
        queued[id] = false;
        (bool ok, ) = admin.call(""); // BUG: ignores return data
        require(ok, "execute failed");
    }
}`,
  },
] as const;

const reviewTags = [
  "Reentrancy",
  "Access control",
  "Gas usage",
  "Upgrade safety",
  "Tokenomics",
  "Deployment hygiene",
] as const;

const focusAreas = [
  {
    title: "Security posture",
    description:
      "Detects overflow/underflow, delegatecall hazards, and reentrancy patterns before audit.",
  },
  {
    title: "Economic safety",
    description:
      "Flags unbounded minting, price manipulation windows, and unchecked supply drifts.",
  },
  {
    title: "Execution health",
    description:
      "Surfaces brittle require paths, unverified external calls, and revert-prone flows.",
  },
  {
    title: "Deployment readiness",
    description:
      "Reminds you about initialization gaps, upgradeable storage, and missing pausable controls.",
  },
] as const;

const REVIEW_MODEL_ID = "openai/gpt-oss-120b";

export default function ReviewerPage() {
  const { address, sessionId } = useSession();
  const [code, setCode] = React.useState<string>(starterSnippets[0].code);
  const [activeSnippetLabel, setActiveSnippetLabel] = React.useState<
    string | null
  >(starterSnippets[0].label);
  const [interactionId, setInteractionId] = React.useState<string>();
  const [startTime, setStartTime] = React.useState<number>(0);
  const [lastSubmittedCodeLength, setLastSubmittedCodeLength] =
    React.useState<number>(starterSnippets[0].code.length);

  // Track if we've already submitted tracking for current interaction
  const hasTrackedRef = React.useRef(false);

  // Secret achievement state
  const { walletAchievements, fetchWalletAchievements, fetchUnclaimedVouchers } = useAchievements();
  const [secretAchievementModal, setSecretAchievementModal] = React.useState<{
    show: boolean;
    achievement: typeof SECRET_ACHIEVEMENTS.REENTRANCY | typeof SECRET_ACHIEVEMENTS.DEAD_MANS_CHEST | null;
  }>({ show: false, achievement: null });
  const [isSubmittingSecret, setIsSubmittingSecret] = React.useState(false);
  const [secretError, setSecretError] = React.useState<string | null>(null);
  
  // Track which achievements have been triggered this session (to prevent duplicate modals)
  const triggeredAchievementsRef = React.useRef<Set<string>>(new Set());
  
  // Check if user already has these achievements
  const hasReentrancyAchievement = React.useMemo(() => 
    walletAchievements.some(a => a.tokenId === SECRET_ACHIEVEMENTS.REENTRANCY.taskCode),
    [walletAchievements]
  );
  const hasDeadMansChestAchievement = React.useMemo(() => 
    walletAchievements.some(a => a.tokenId === SECRET_ACHIEVEMENTS.DEAD_MANS_CHEST.taskCode),
    [walletAchievements]
  );

  // Vulnerability detection functions
  const detectsReentrancy = React.useCallback((text: string): boolean => {
    return REENTRANCY_PATTERNS.some(pattern => pattern.test(text));
  }, []);

  const detectsDeadMansChest = React.useCallback((text: string): boolean => {
    return DEAD_MANS_CHEST_PATTERNS.some(pattern => pattern.test(text));
  }, []);

  // Submit secret achievement to API
  const submitSecretAchievement = React.useCallback(async (
    achievement: typeof SECRET_ACHIEVEMENTS.REENTRANCY | typeof SECRET_ACHIEVEMENTS.DEAD_MANS_CHEST
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
        discoveryMethod: "ai_vulnerability_detection"
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

  const { completion, complete, isLoading, error } = useCompletion({
    api: "/api/reviewer",
    streamProtocol: "text",
  });

  const isCodeEmpty = code.trim().length === 0;

  const analysisStatus = React.useMemo(() => {
    if (isLoading) {
      return {
        label: "Running automated heuristics",
        helper: "Streaming findings in real time",
        textClass: "text-amber-600 dark:text-amber-400",
        dotClass: "bg-amber-500 animate-pulse",
      };
    }

    if (completion) {
      return {
        label: "Latest review ready",
        helper: "Based on your most recent snippet",
        textClass: "text-emerald-600 dark:text-emerald-400",
        dotClass: "bg-emerald-500",
      };
    }

    return {
      label: "Awaiting review",
      helper: "Paste Solidity or pick a starter snippet",
      textClass: "text-muted-foreground",
      dotClass: "bg-muted-foreground/60",
    };
  }, [isLoading, completion]);

  async function onReview() {
    const trimmedCode = code.trim();
    if (!trimmedCode) return;

    // Generate interaction ID and track start time
    const id = crypto.randomUUID();
    setInteractionId(id);
    setStartTime(Date.now());
    setLastSubmittedCodeLength(trimmedCode.length);
    hasTrackedRef.current = false; // Reset tracking flag for new review

    await complete(trimmedCode);
  }

  const handleClear = () => {
    setCode("");
    setActiveSnippetLabel(null);
  };

  const handleSampleSelect = (snippetCode: string, label: string) => {
    setCode(snippetCode);
    setActiveSnippetLabel(label);
  };

  // Track interaction ONLY when streaming completes
  React.useEffect(() => {
    // Only track once when:
    // 1. Stream has finished (isLoading is false)
    // 2. We have a completion
    // 3. We haven't already tracked this interaction
    // 4. We have all required data
    if (
      !isLoading &&
      completion &&
      interactionId &&
      address &&
      startTime > 0 &&
      !hasTrackedRef.current
    ) {
      hasTrackedRef.current = true; // Mark as tracked

      const durationMs = Date.now() - startTime;

      // Count vulnerabilities mentioned in response (rough heuristic)
      const vulnerabilityCount =
        completion.match(/###\s+\d+\./g)?.length ?? 0;

      // Track the interaction
      trackAIInteraction({
        id: interactionId,
        walletAddress: address,
        toolType: "auditor",
        inputLength: lastSubmittedCodeLength,
        outputLength: completion.length,
        modelUsed: REVIEW_MODEL_ID,
        durationMs,
        vulnerabilitiesFound: vulnerabilityCount,
        sessionId,
      });
    }
  }, [
    isLoading,
    completion,
    interactionId,
    address,
    lastSubmittedCodeLength,
    startTime,
    sessionId,
  ]);

  // Secret achievement detection - triggers when AI finds vulnerabilities
  React.useEffect(() => {
    // Only check when:
    // 1. Stream has finished (isLoading is false)
    // 2. We have a completion
    // 3. User is connected
    if (!isLoading && completion && address) {
      // Check for reentrancy achievement
      if (
        !hasReentrancyAchievement && 
        !triggeredAchievementsRef.current.has(SECRET_ACHIEVEMENTS.REENTRANCY.achievementNumber) &&
        detectsReentrancy(completion)
      ) {
        triggeredAchievementsRef.current.add(SECRET_ACHIEVEMENTS.REENTRANCY.achievementNumber);
        submitSecretAchievement(SECRET_ACHIEVEMENTS.REENTRANCY);
      }

      // Check for Dead Man's Chest achievement
      if (
        !hasDeadMansChestAchievement && 
        !triggeredAchievementsRef.current.has(SECRET_ACHIEVEMENTS.DEAD_MANS_CHEST.achievementNumber) &&
        detectsDeadMansChest(completion)
      ) {
        triggeredAchievementsRef.current.add(SECRET_ACHIEVEMENTS.DEAD_MANS_CHEST.achievementNumber);
        submitSecretAchievement(SECRET_ACHIEVEMENTS.DEAD_MANS_CHEST);
      }
    }
  }, [
    isLoading,
    completion,
    address,
    hasReentrancyAchievement,
    hasDeadMansChestAchievement,
    detectsReentrancy,
    detectsDeadMansChest,
    submitSecretAchievement,
  ]);

  return (
    <WalletAuthGuard
      title="Wallet Required for Code Review"
      description="Connect your wallet to access our AI Solidity code reviewer for security analysis and optimization."
    >
      <div className="space-y-10">
        <section className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-slate-50 via-white to-emerald-50 text-zinc-900 shadow-xl dark:from-zinc-950 dark:via-zinc-900 dark:to-black dark:text-white">
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="absolute -top-8 right-0 h-40 w-40 rounded-full bg-emerald-300/40 blur-3xl dark:bg-emerald-500/40" />
            <div className="absolute bottom-0 left-12 h-48 w-48 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-500/30" />
          </div>
          <div className="relative space-y-8 p-6 sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-emerald-800 dark:text-white/80">
                  <Badge className="bg-emerald-600/90 text-white shadow-sm hover:bg-emerald-600 dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
                    Solidity assurance
                  </Badge>
                  <Badge className="bg-white/80 text-emerald-900 shadow-sm hover:bg-white dark:bg-emerald-500/30 dark:text-white dark:hover:bg-emerald-500/40">
                    Zilliqa ready
                  </Badge>
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-semibold text-zinc-900 sm:text-4xl dark:text-white">
                    AI Solidity Reviewer
                  </h1>
                  <p className="text-base text-zinc-700 sm:text-lg dark:text-white/80">
                    Stream instant findings for vulnerabilities, gas waste, and
                    deployment readiness before you ever hit mainnet.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {reviewTags.slice(0, 4).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-emerald-200 bg-white/70 text-emerald-700 hover:bg-white dark:border-white/40 dark:bg-white/10 dark:text-white"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="grid w-full gap-4 text-left sm:grid-cols-3 lg:max-w-md">
                {[
                  {
                    label: "Heuristic checks",
                    value: "35+",
                    helper: "Security patterns",
                  },
                  {
                    label: "Average turnaround",
                    value: "~4s",
                    helper: "Streaming responses",
                  },
                  {
                    label: "Primary chain",
                    value: "Zilliqa",
                    helper: "Mainnet + testnet",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-emerald-100 bg-white/80 p-4 text-zinc-900 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white"
                  >
                    <p className="text-xs uppercase text-emerald-700 dark:text-white/70">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-semibold text-emerald-900 dark:text-white">
                      {stat.value}
                    </p>
                    <p className="text-xs text-zinc-600 dark:text-white/60">
                      {stat.helper}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <Card className="bg-white/90 shadow-lg backdrop-blur-sm dark:bg-card/80">
            <CardHeader className="space-y-4">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <CardTitle>Solidity input</CardTitle>
                  <CardDescription>
                    {activeSnippetLabel
                      ? `Prefilled with ${activeSnippetLabel}. Customize freely.`
                      : "Paste your contract or drag in a snippet to begin."}
                  </CardDescription>
                </div>
                <div className="flex flex-col items-start gap-2 text-left md:items-end">
                  <p className="text-xs font-semibold uppercase text-muted-foreground">
                    Live audit status
                  </p>
                  <div className="flex items-center gap-2 text-xs font-medium">
                    <span
                      className={cn(
                        "h-2 w-2 rounded-full",
                        analysisStatus.dotClass
                      )}
                    />
                    <span className={analysisStatus.textClass}>
                      {analysisStatus.label}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {analysisStatus.helper}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {starterSnippets.map((snippet) => (
                  <Button
                    key={snippet.label}
                    type="button"
                    size="sm"
                    variant={
                      activeSnippetLabel === snippet.label
                        ? "secondary"
                        : "outline"
                    }
                    onClick={() =>
                      handleSampleSelect(snippet.code, snippet.label)
                    }
                  >
                    {snippet.label}
                  </Button>
                ))}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                  setActiveSnippetLabel(null);
                }}
                className="min-h-[420px] rounded-2xl border border-emerald-100 bg-slate-50 font-mono text-sm shadow-inner dark:border-border dark:bg-muted/20"
                spellCheck={false}
              />
              <div className="flex flex-wrap items-center gap-3">
                <Button onClick={onReview} disabled={isLoading || isCodeEmpty}>
                  {isLoading ? "Reviewing..." : "Review code"}
                </Button>
                <Button
                  variant="ghost"
                  onClick={handleClear}
                  disabled={isLoading}
                >
                  Clear
                </Button>
                <div className="ml-auto flex items-center gap-2 text-xs text-muted-foreground">
                  <span
                    className={cn(
                      "h-2 w-2 rounded-full",
                      analysisStatus.dotClass
                    )}
                  />
                  {isLoading ? "Audit in progress" : "Ready for submission"}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="flex h-full flex-col bg-white/90 shadow-lg backdrop-blur-sm dark:bg-card/80">
            <CardHeader className="space-y-2">
              <CardTitle>Findings</CardTitle>
              <CardDescription>
                {isLoading
                  ? "We highlight vulnerabilities as soon as tokens stream in."
                  : completion
                  ? "Latest analysis including mitigation ideas."
                  : "No findings yet. Run a review to populate this panel."}
              </CardDescription>
              <div className="flex items-center gap-2 text-xs font-medium">
                <span
                  className={cn(
                    "h-2 w-2 rounded-full",
                    analysisStatus.dotClass
                  )}
                />
                <span className={analysisStatus.textClass}>
                  {analysisStatus.label}
                </span>
              </div>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col space-y-4">
              <div className="flex flex-1 flex-col rounded-2xl border border-dashed border-emerald-100 bg-slate-50/80 p-4 dark:border-border dark:bg-muted/30">
                {error ? (
                  <div className="flex flex-1 items-center justify-center text-center text-sm text-destructive">
                    {error.message}
                  </div>
                ) : completion ? (
                  <div className="flex-1 overflow-hidden">
                    <ScrollArea className="h-full pr-4">
                      <div className="prose max-w-none text-sm">
                        <Response>{completion}</Response>
                      </div>
                    </ScrollArea>
                  </div>
                ) : (
                  <div className="flex flex-1 flex-col items-center justify-center text-center text-sm text-muted-foreground">
                    <p className="font-medium">Awaiting findings</p>
                    <p className="text-xs text-muted-foreground/80">
                      Run a review to surface prioritized vulnerabilities,
                      severity, and remediation notes.
                    </p>
                  </div>
                )}
              </div>
              {completion && interactionId && (
                <div className="rounded-2xl border border-emerald-100 bg-white/90 p-4 dark:border-border dark:bg-background/70">
                  <AIFeedback interactionId={interactionId} toolType="auditor" />
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/80 shadow-lg backdrop-blur-sm dark:bg-card/50">
          <CardHeader>
            <CardTitle>Review scope</CardTitle>
            <CardDescription>
              Automated heuristics that run on every submission.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {reviewTags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {focusAreas.map((area) => (
                <div
                  key={area.title}
                  className="rounded-2xl border border-emerald-100 bg-slate-50 p-4 dark:border-border dark:bg-muted/30"
                >
                  <p className="text-sm font-semibold">{area.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-red-200 bg-red-50 text-red-900 dark:border-red-900/60 dark:bg-red-950/30 dark:text-red-100">
          <CardHeader className="space-y-3 sm:flex sm:items-start sm:justify-between">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="destructive">Safety notice</Badge>
                <p className="text-sm font-semibold">
                  Not a substitute for a professional audit
                </p>
              </div>
              <CardDescription className="text-red-900/80 dark:text-red-100/80">
                Automated insights are directional only. Critical code should
                always be validated manually and by third-party auditors.
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>
              Results may miss severe bugs or flag false positives. Treat every
              suggestion as guidance that still needs reproduction, testing, and
              code review.
            </p>
            <p>
              You are responsible for verifying smart contracts before
              deployment. Engage qualified security professionals for production
              deployments, bug bounties, or mainnet launches.
            </p>
          </CardContent>
        </Card>

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
                  Continue Reviewing
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
              <div className="animate-spin h-8 w-8 border-4 border-emerald-500 border-t-transparent rounded-full mx-auto mb-4" />
              <p className="text-sm text-muted-foreground">Claiming secret achievement...</p>
            </div>
          </div>
        )}
      </div>
    </WalletAuthGuard>
  );
}
