"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useCompletion } from "@ai-sdk/react";
import { Response } from "@/components/ai-elements/response";
import { WalletAuthGuard } from "@/components/wallet-auth-guard";

export default function ReviewerPage() {
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
  const { completion, complete, isLoading, error } = useCompletion({
    api: "/api/reviewer",
    streamProtocol: "text",
  });

  async function onReview() {
    await complete(code);
  }

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
               <div className="prose max-w-none">
                 <Response>{completion}</Response>
               </div>
            ) : (
              <span className="text-muted-foreground">No findings yet.</span>
            )}
          </div>
        </div>
      </div>
    </WalletAuthGuard>
  );
}
