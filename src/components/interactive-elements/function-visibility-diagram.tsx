"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

type Visibility = "public" | "external" | "internal" | "private";

type CallContext = {
  name: string;
  icon: string;
  description: string;
};

export function FunctionVisibilityDiagram() {
  const [selectedVisibility, setSelectedVisibility] = useState<Visibility>("public");
  const [animationStep, setAnimationStep] = useState(0);

  const visibilityTypes: Visibility[] = ["public", "external", "internal", "private"];

  const contexts: CallContext[] = [
    { name: "External Call", icon: "🌐", description: "Called from outside (wallet/dApp)" },
    { name: "Internal Call", icon: "🏠", description: "Called within same contract" },
    { name: "Child Contract", icon: "👶", description: "Called from inherited contract" },
  ];

  const accessMatrix: Record<Visibility, boolean[]> = {
    public: [true, true, true], // external, internal, child
    external: [true, false, false], // only external
    internal: [false, true, true], // internal + child
    private: [false, true, false], // only internal (same contract)
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setSelectedVisibility(visibilityTypes[animationStep]);
  }, [animationStep]);

  return (
    <div className="my-8 w-full rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2">Function Visibility Diagram</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Understand which contexts can call functions with different visibility levels
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Visibility Selector */}
          <div className="space-y-4">
            <div className="text-sm font-semibold mb-2">Select Visibility Level</div>
            <div className="grid grid-cols-2 gap-2">
              {visibilityTypes.map((visibility) => (
                <button
                  key={visibility}
                  onClick={() => setSelectedVisibility(visibility)}
                  className={`p-3 rounded-lg border-2 transition-all text-left ${
                    selectedVisibility === visibility
                      ? "border-primary bg-primary/10 shadow-sm"
                      : "border-border bg-muted/30 hover:border-primary/50"
                  }`}
                >
                  <code className="text-sm font-mono font-semibold">{visibility}</code>
                </button>
              ))}
            </div>

            {/* Code Example */}
            <div className="p-4 bg-muted/50 rounded-lg border border-border">
              <div className="text-sm font-semibold mb-3">Example Function</div>
              <pre className="text-xs font-mono overflow-x-auto">
                <code>{`function transfer(address to, uint256 amount)
    ${selectedVisibility}
    returns (bool)
{
    _transfer(msg.sender, to, amount);
    return true;
}`}</code>
              </pre>
            </div>

            {/* Description */}
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="text-sm font-semibold mb-2 text-blue-900 dark:text-blue-400">
                {selectedVisibility.charAt(0).toUpperCase() + selectedVisibility.slice(1)} Functions
              </div>
              <div className="text-xs text-blue-700 dark:text-blue-300">
                {selectedVisibility === "public" &&
                  "Can be called from anywhere: externally, internally, and by child contracts. Most flexible but uses slightly more gas."}
                {selectedVisibility === "external" &&
                  "Can only be called from outside the contract. More gas efficient than public for external calls."}
                {selectedVisibility === "internal" &&
                  "Can be called within the contract and by contracts that inherit from it. Cannot be called externally."}
                {selectedVisibility === "private" &&
                  "Can only be called within the same contract. Not accessible to child contracts or external callers."}
              </div>
            </div>
          </div>

          {/* Access Matrix */}
          <div className="space-y-4">
            <div className="text-sm font-semibold mb-2">Access Permissions</div>
            <div className="space-y-3">
              {contexts.map((context, index) => {
                const canAccess = accessMatrix[selectedVisibility][index];
                return (
                  <motion.div
                    key={context.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      canAccess
                        ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                        : "border-red-300 bg-red-50 dark:bg-red-900/20"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">{context.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-sm">{context.name}</span>
                          {canAccess ? (
                            <div className="flex items-center gap-1 text-xs font-semibold text-green-600 dark:text-green-400">
                              <Check className="w-4 h-4" />
                              Allowed
                            </div>
                          ) : (
                            <div className="flex items-center gap-1 text-xs font-semibold text-red-600 dark:text-red-400">
                              <X className="w-4 h-4" />
                              Blocked
                            </div>
                          )}
                        </div>
                        <div className="text-xs text-muted-foreground">{context.description}</div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Summary Table */}
            <div className="p-4 bg-muted/50 rounded-lg border border-border">
              <div className="text-sm font-semibold mb-3">Quick Reference</div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-2 font-semibold">Visibility</th>
                      <th className="text-center py-2 px-2 font-semibold">External</th>
                      <th className="text-center py-2 px-2 font-semibold">Internal</th>
                      <th className="text-center py-2 px-2 font-semibold">Child</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visibilityTypes.map((vis) => (
                      <tr
                        key={vis}
                        className={`border-b border-border/50 ${
                          vis === selectedVisibility ? "bg-primary/10" : ""
                        }`}
                      >
                        <td className="py-2 px-2">
                          <code className="font-mono font-semibold">{vis}</code>
                        </td>
                        {accessMatrix[vis].map((allowed, idx) => (
                          <td key={idx} className="text-center py-2 px-2">
                            {allowed ? (
                              <Check className="w-4 h-4 text-green-500 inline" />
                            ) : (
                              <X className="w-4 h-4 text-red-500 inline" />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
