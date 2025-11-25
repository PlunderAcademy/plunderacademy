"use client";

import React, { useState } from "react";
import { TrendingDown, AlertCircle } from "lucide-react";

type CodeExample = {
  id: string;
  title: string;
  bad: {
    code: string;
    gasCost: number;
    issues: string[];
  };
  good: {
    code: string;
    gasCost: number;
    improvements: string[];
  };
  savings: number;
};

export function GasCostComparison() {
  const [selectedExample, setSelectedExample] = useState(0);

  const examples: CodeExample[] = [
    {
      id: "storage-reads",
      title: "Minimize Storage Operations",
      bad: {
        code: `function inefficientFunction() public {
  if (users[msg.sender].balance > 100) {
    users[msg.sender].balance -= 100;
    users[msg.sender].lastActivity = block.timestamp;
  }
}`,
        gasCost: 12000,
        issues: ["Multiple SLOAD operations", "Reading same storage slot multiple times"],
      },
      good: {
        code: `function efficientFunction() public {
  User storage user = users[msg.sender];
  if (user.balance > 100) {
    user.balance -= 100;
    user.lastActivity = block.timestamp;
  }
}`,
        gasCost: 6000,
        improvements: ["Single SLOAD for storage pointer", "Reuse cached reference"],
      },
      savings: 6000,
    },
    {
      id: "events-vs-storage",
      title: "Use Events for Historical Data",
      bad: {
        code: `mapping(uint256 => Action) public actions;

function recordAction(string memory desc) public {
  actions[actionCount] = Action(
    block.timestamp, 
    desc, 
    msg.sender
  );
  actionCount++;
}`,
        gasCost: 45000,
        issues: ["Expensive permanent storage", "Large storage footprint"],
      },
      good: {
        code: `event ActionRecorded(
  uint256 indexed actionId,
  address indexed user,
  string description
);

function recordAction(string memory desc) public {
  emit ActionRecorded(actionCount, msg.sender, desc);
  actionCount++;
}`,
        gasCost: 15000,
        improvements: ["Events are cheaper than storage", "Still queryable via logs"],
      },
      savings: 30000,
    },
    {
      id: "struct-packing",
      title: "Pack Struct Variables Efficiently",
      bad: {
        code: `struct User {
  address wallet;  // 20 bytes
  bool isActive;   // 1 byte (uses 32-byte slot)
  uint256 balance; // 32 bytes
  uint8 level;     // 1 byte (uses 32-byte slot)
}
// Uses 4 storage slots`,
        gasCost: 80000,
        issues: ["Inefficient storage packing", "Wasted storage slots"],
      },
      good: {
        code: `struct User {
  address wallet;  // 20 bytes
  bool isActive;   // 1 byte
  uint8 level;     // 1 byte
  // Fits in 1 slot (22 bytes)
  uint256 balance; // 32 bytes in next slot
}
// Uses 2 storage slots`,
        gasCost: 40000,
        improvements: ["Efficient variable ordering", "50% fewer storage slots"],
      },
      savings: 40000,
    },
    {
      id: "memory-arrays",
      title: "Use Memory for Temporary Arrays",
      bad: {
        code: `uint256[] public tempResults;

function processData(uint256[] calldata input) external {
  delete tempResults;
  for (uint i = 0; i < input.length; i++) {
    tempResults.push(input[i] * 2);
  }
}`,
        gasCost: 100000,
        issues: ["Storage array operations", "Expensive SSTORE per element"],
      },
      good: {
        code: `function processData(uint256[] calldata input) external {
  uint256[] memory tempResults = new uint256[](input.length);
  for (uint i = 0; i < input.length; i++) {
    tempResults[i] = input[i] * 2;
  }
}`,
        gasCost: 20000,
        improvements: ["Memory operations are cheap", "No permanent storage needed"],
      },
      savings: 80000,
    },
  ];

  const currentExample = examples[selectedExample];
  const savingsPercent = Math.round((currentExample.savings / currentExample.bad.gasCost) * 100);

  return (
    <div className="my-8 w-full rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-4">Gas Optimization Patterns</h3>

        {/* Example Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
          {examples.map((example, index) => (
            <button
              key={example.id}
              onClick={() => setSelectedExample(index)}
              className={`p-3 rounded-lg text-xs font-medium transition-all ${
                selectedExample === index
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              {example.title}
            </button>
          ))}
        </div>

        {/* Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Bad Example */}
          <div className="rounded-lg border-2 border-red-200 dark:border-red-900/50 bg-red-50/50 dark:bg-red-900/10 overflow-hidden">
            <div className="bg-red-100 dark:bg-red-900/30 px-4 py-2 border-b border-red-200 dark:border-red-900/50">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm text-red-900 dark:text-red-400">
                  ❌ Inefficient
                </span>
                <span className="text-xs font-mono text-red-700 dark:text-red-500">
                  {currentExample.bad.gasCost.toLocaleString()} gas
                </span>
              </div>
            </div>
            <div className="p-4">
              <pre className="text-xs font-mono overflow-x-auto bg-background rounded p-3 mb-3">
                <code>{currentExample.bad.code}</code>
              </pre>
              <div className="space-y-1">
                {currentExample.bad.issues.map((issue, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-red-700 dark:text-red-400">
                    <AlertCircle className="w-3 h-3 mt-0.5 shrink-0" />
                    <span>{issue}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Good Example */}
          <div className="rounded-lg border-2 border-green-200 dark:border-green-900/50 bg-green-50/50 dark:bg-green-900/10 overflow-hidden">
            <div className="bg-green-100 dark:bg-green-900/30 px-4 py-2 border-b border-green-200 dark:border-green-900/50">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm text-green-900 dark:text-green-400">
                  ✓ Optimized
                </span>
                <span className="text-xs font-mono text-green-700 dark:text-green-500">
                  {currentExample.good.gasCost.toLocaleString()} gas
                </span>
              </div>
            </div>
            <div className="p-4">
              <pre className="text-xs font-mono overflow-x-auto bg-background rounded p-3 mb-3">
                <code>{currentExample.good.code}</code>
              </pre>
              <div className="space-y-1">
                {currentExample.good.improvements.map((improvement, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-green-700 dark:text-green-400">
                    <TrendingDown className="w-3 h-3 mt-0.5 shrink-0" />
                    <span>{improvement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Savings Banner */}
        <div className="p-4 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-lg border border-green-200 dark:border-green-900/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                <TrendingDown className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-green-900 dark:text-green-400">
                  Gas Savings: {currentExample.savings.toLocaleString()} gas
                </div>
                <div className="text-sm text-green-700 dark:text-green-500">
                  {savingsPercent}% reduction in gas costs
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-muted-foreground">Cost Difference</div>
              <div className="text-lg font-bold text-green-600 dark:text-green-400">
                ~${((currentExample.savings * 2000 * 0.025) / 1000000000).toFixed(4)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
