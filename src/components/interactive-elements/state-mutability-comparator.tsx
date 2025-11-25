"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Eye, Calculator, Zap, Coins } from "lucide-react";

type MutabilityType = "view" | "pure" | "payable";

type FunctionExample = {
  type: MutabilityType;
  name: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  code: string;
  canReadState: boolean;
  canModifyState: boolean;
  canReceiveEther: boolean;
  gasCost: string;
  description: string;
};

export function StateMutabilityComparator() {
  const [selectedType, setSelectedType] = useState<MutabilityType>("view");
  const [animationStep, setAnimationStep] = useState(0);

  const examples: FunctionExample[] = [
    {
      type: "view",
      name: "view",
      icon: Eye,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      code: `function balanceOf(address account)
    public view returns (uint256)
{
    return _balances[account];
}`,
      canReadState: true,
      canModifyState: false,
      canReceiveEther: false,
      gasCost: "Free (when called externally)",
      description: "Reads blockchain state but doesn't modify it. Perfect for getters.",
    },
    {
      type: "pure",
      name: "pure",
      icon: Calculator,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      code: `function calculateReward(uint256 amount)
    public pure returns (uint256)
{
    return amount * 5 / 100;
}`,
      canReadState: false,
      canModifyState: false,
      canReceiveEther: false,
      gasCost: "Free (when called externally)",
      description: "Doesn't read or write state. Only uses input parameters for calculations.",
    },
    {
      type: "payable",
      name: "payable (state-changing)",
      icon: Coins,
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      code: `function buyTokens()
    public payable
{
    uint256 amount = msg.value * rate;
    _balances[msg.sender] += amount;
}`,
      canReadState: true,
      canModifyState: true,
      canReceiveEther: true,
      gasCost: "Costs gas (modifies state)",
      description: "Can read, write state, and receive ETH/ZIL. Creates blockchain transactions.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % examples.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [examples.length]);

  useEffect(() => {
    setSelectedType(examples[animationStep].type);
  }, [animationStep, examples]);

  const currentExample = examples.find((ex) => ex.type === selectedType)!;
  const Icon = currentExample.icon;

  return (
    <div className="my-8 w-full rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2">State Mutability Comparator</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Understand the difference between view, pure, and state-changing functions
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Function Type Selector */}
          <div className="space-y-4">
            <div className="text-sm font-semibold mb-2">Function Types</div>
            <div className="space-y-2">
              {examples.map((example) => {
                const ExampleIcon = example.icon;
                return (
                  <button
                    key={example.type}
                    onClick={() => setSelectedType(example.type)}
                    className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                      selectedType === example.type
                        ? "border-primary bg-primary/10 shadow-sm"
                        : "border-border bg-muted/30 hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <ExampleIcon className={`w-6 h-6 ${example.color}`} />
                      <div className="flex-1">
                        <code className="text-sm font-mono font-semibold">{example.name}</code>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Code Example */}
            <div className={`p-4 rounded-lg border ${currentExample.bgColor} border-border`}>
              <div className="text-sm font-semibold mb-3">Example</div>
              <pre className="text-xs font-mono overflow-x-auto">
                <code>{currentExample.code}</code>
              </pre>
            </div>
          </div>

          {/* Capabilities Matrix */}
          <div className="space-y-4">
            <motion.div
              key={selectedType}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-lg border ${currentExample.bgColor} border-border`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon className={`w-8 h-8 ${currentExample.color}`} />
                <div>
                  <div className="font-semibold text-lg capitalize">{currentExample.name}</div>
                  <div className="text-xs text-muted-foreground">{currentExample.description}</div>
                </div>
              </div>

              {/* Capabilities */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded bg-background border border-border">
                  <span className="text-sm">📖 Read State</span>
                  <span
                    className={`text-sm font-semibold ${
                      currentExample.canReadState
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {currentExample.canReadState ? "✓ Yes" : "✗ No"}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded bg-background border border-border">
                  <span className="text-sm">✏️ Modify State</span>
                  <span
                    className={`text-sm font-semibold ${
                      currentExample.canModifyState
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {currentExample.canModifyState ? "✓ Yes" : "✗ No"}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded bg-background border border-border">
                  <span className="text-sm">💰 Receive ETH/ZIL</span>
                  <span
                    className={`text-sm font-semibold ${
                      currentExample.canReceiveEther
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {currentExample.canReceiveEther ? "✓ Yes" : "✗ No"}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded bg-background border border-border">
                  <span className="text-sm">⛽ Gas Cost</span>
                  <span className="text-sm font-mono font-semibold">{currentExample.gasCost}</span>
                </div>
              </div>
            </motion.div>

            {/* Comparison Table */}
            <div className="p-4 bg-muted/50 rounded-lg border border-border">
              <div className="text-sm font-semibold mb-3">Quick Comparison</div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-2 font-semibold">Type</th>
                      <th className="text-center py-2 px-1 font-semibold">Read</th>
                      <th className="text-center py-2 px-1 font-semibold">Modify</th>
                      <th className="text-center py-2 px-1 font-semibold">Receive</th>
                    </tr>
                  </thead>
                  <tbody>
                    {examples.map((ex) => (
                      <tr
                        key={ex.type}
                        className={`border-b border-border/50 ${
                          ex.type === selectedType ? "bg-primary/10" : ""
                        }`}
                      >
                        <td className="py-2 px-2">
                          <code className="font-mono font-semibold text-xs">{ex.name}</code>
                        </td>
                        <td className="text-center py-2 px-1">
                          {ex.canReadState ? "✓" : "✗"}
                        </td>
                        <td className="text-center py-2 px-1">
                          {ex.canModifyState ? "✓" : "✗"}
                        </td>
                        <td className="text-center py-2 px-1">
                          {ex.canReceiveEther ? "✓" : "✗"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Best Practices */}
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="text-sm font-semibold mb-2 text-blue-900 dark:text-blue-400">
                💡 Best Practice
              </div>
              <div className="text-xs text-blue-700 dark:text-blue-300">
                Always use the most restrictive mutability that works for your function. Use `view` for
                getters, `pure` for calculations, and only omit modifiers when you need to modify state.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
