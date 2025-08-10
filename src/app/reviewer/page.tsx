"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function ReviewerPage() {
  const [code, setCode] = React.useState<string>(
    `// Paste Solidity code here
// Example:
// pragma solidity ^0.8.24;
// contract Hello {
//   function greet() external pure returns(string memory) { return "hi"; }
// }`
  );
  const [isLoading, setIsLoading] = React.useState(false);
  const [result, setResult] = React.useState<string>("");

  async function onReview() {
    setIsLoading(true);
    // TODO: wire to AI endpoint
    await new Promise((r) => setTimeout(r, 800));
    setResult("Security notes, gas tips, and suggestions will appear here.");
    setIsLoading(false);
  }

  return (
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
          {result || (
            <span className="text-muted-foreground">No findings yet.</span>
          )}
        </div>
      </div>
    </div>
  );
}
