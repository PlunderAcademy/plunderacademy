"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useCompletion } from "@ai-sdk/react";
import { Response } from "@/components/ai-elements/response";
import { WalletAuthGuard } from "@/components/wallet-auth-guard";
import { AIFeedback } from "@/components/ai-feedback";
import { useSession } from "@/lib/session-context";
import { trackAIInteraction } from "@/lib/feedback-api";

export default function ReviewerPage() {
  const { address, sessionId } = useSession();
  const [code, setCode] = React.useState<string>(
    `// SPDX-License-Identifier: MIT
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
}`
  );
  const [interactionId, setInteractionId] = React.useState<string>();
  const [startTime, setStartTime] = React.useState<number>(0);
  
  // Track if we've already submitted tracking for current interaction
  const hasTrackedRef = React.useRef(false);

  const { completion, complete, isLoading, error } = useCompletion({
    api: "/api/reviewer",
    streamProtocol: "text",
  });

  async function onReview() {
    // Generate interaction ID and track start time
    const id = crypto.randomUUID();
    setInteractionId(id);
    setStartTime(Date.now());
    hasTrackedRef.current = false; // Reset tracking flag for new review
    
    await complete(code);
  }

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
      const vulnerabilityCount = (
        completion.match(/###\s+\d+\./g) || []
      ).length;

      // Track the interaction
      trackAIInteraction({
        id: interactionId,
        walletAddress: address,
        toolType: "auditor",
        inputLength: code.length,
        outputLength: completion.length,
        modelUsed: "openai/gpt-oss-120b", // Match your default model
        durationMs,
        vulnerabilitiesFound: vulnerabilityCount,
        sessionId,
      });
    }
  }, [isLoading, completion, interactionId, address, code.length, startTime, sessionId]);

  return (
    <WalletAuthGuard 
      title="Wallet Required for Code Review"
      description="Connect your wallet to access our AI Solidity code reviewer for security analysis and optimization."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">
              AI Solidity Reviewer
            </h1>
            <p className="text-muted-foreground">
              Paste your Solidity code. We will analyze for security issues, gas,
              and quality.
            </p>
          </div>
          <Textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="min-h-[380px] font-mono"
            spellCheck={false}
          />
          <div className="flex items-center gap-3">
            <Button onClick={onReview} disabled={isLoading}>
              {isLoading ? "Reviewing..." : "Review Code"}
            </Button>
            <Button variant="ghost" onClick={() => setCode("")}>
              Clear
            </Button>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="font-semibold">Findings</h2>
          <div className="min-h-[380px] rounded-md border bg-card p-4 text-sm">
            {error ? (
              <span className="text-destructive">{error.message}</span>
            ) : completion ? (
              <>
                <div className="prose max-w-none">
                  <Response>{completion}</Response>
                </div>
                {interactionId && (
                  <AIFeedback
                    interactionId={interactionId}
                    toolType="auditor"
                  />
                )}
              </>
            ) : (
              <span className="text-muted-foreground">No findings yet.</span>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950/30">
        <div className="flex gap-3">
          <div className="flex-shrink-0">
            <span className="text-red-600 dark:text-red-400">⚠️</span>
          </div>
          <div className="text-sm text-red-800 dark:text-red-200">
            <p className="font-semibold mb-2">Important: This tool is NOT a replacement for a professional security audit.</p>
            <p>
              This analysis is automated and heuristic - it may miss critical issues or flag false concerns. 
              Results are provided &ldquo;as is&rdquo; for informational guidance only. You are solely responsible 
              for verifying, testing, and validating your smart contracts independently before deployment. 
              Always engage qualified security professionals for production contracts.
            </p>
          </div>
        </div>
      </div>
    </WalletAuthGuard>
  );
}
