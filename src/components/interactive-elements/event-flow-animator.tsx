"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Cpu, FileText, Smartphone, BarChart3, Globe } from "lucide-react";

export function EventFlowAnimator() {
  const [currentPhase, setCurrentPhase] = useState(0);

  const phases = [
    { id: 0, name: "emit" },
    { id: 1, name: "log" },
    { id: 2, name: "receipt" },
    { id: 3, name: "consumers" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhase((prev) => (prev + 1) % (phases.length + 1)); // +1 for pause
    }, 2000);

    return () => clearInterval(timer);
  }, [phases.length]);

  return (
    <div className="my-8 w-full rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2">Event Emission Flow</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Watch how events travel from your Solidity code to off-chain applications
        </p>

        {/* Flow Diagram */}
        <div className="relative mb-8">
          <div className="grid grid-cols-4 gap-4">
            {/* Step 1: Emit Event */}
            <motion.div
              animate={{
                scale: currentPhase === 0 ? 1.05 : 1,
                borderColor: currentPhase >= 0 ? "rgb(var(--primary))" : "rgb(var(--border))",
              }}
              className="p-4 rounded-lg border-2 bg-card transition-all"
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-colors ${
                    currentPhase >= 0
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <Code className="w-6 h-6" />
                </div>
                <div className="font-semibold text-sm mb-1">1. Emit Event</div>
                <div className="text-xs text-muted-foreground mb-2">Solidity Code</div>
                <code className="text-xs font-mono bg-muted px-2 py-1 rounded">
                  emit Transfer(...)
                </code>
              </div>
            </motion.div>

            {/* Arrow 1 */}
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: currentPhase >= 1 ? 1 : 0.3,
                  x: currentPhase >= 1 ? 0 : -10,
                }}
                className="flex items-center"
              >
                <div className="h-0.5 w-full bg-primary" />
                <div className="w-0 h-0 border-l-8 border-t-4 border-b-4 border-l-primary border-t-transparent border-b-transparent" />
              </motion.div>
            </div>

            {/* Step 2: LOG Opcode */}
            <motion.div
              animate={{
                scale: currentPhase === 1 ? 1.05 : 1,
                borderColor: currentPhase >= 1 ? "rgb(var(--primary))" : "rgb(var(--border))",
              }}
              className="p-4 rounded-lg border-2 bg-card transition-all"
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-colors ${
                    currentPhase >= 1
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <Cpu className="w-6 h-6" />
                </div>
                <div className="font-semibold text-sm mb-1">2. LOG Opcode</div>
                <div className="text-xs text-muted-foreground mb-2">EVM Execution</div>
                <code className="text-xs font-mono bg-muted px-2 py-1 rounded">LOG1, LOG2</code>
              </div>
            </motion.div>

            {/* Arrow 2 */}
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: currentPhase >= 2 ? 1 : 0.3,
                  x: currentPhase >= 2 ? 0 : -10,
                }}
                className="flex items-center"
              >
                <div className="h-0.5 w-full bg-primary" />
                <div className="w-0 h-0 border-l-8 border-t-4 border-b-4 border-l-primary border-t-transparent border-b-transparent" />
              </motion.div>
            </div>

            {/* Step 3: Receipt Logs */}
            <motion.div
              animate={{
                scale: currentPhase === 2 ? 1.05 : 1,
                borderColor: currentPhase >= 2 ? "rgb(var(--primary))" : "rgb(var(--border))",
              }}
              className="p-4 rounded-lg border-2 bg-card transition-all"
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-colors ${
                    currentPhase >= 2
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <FileText className="w-6 h-6" />
                </div>
                <div className="font-semibold text-sm mb-1">3. Receipt Logs</div>
                <div className="text-xs text-muted-foreground mb-2">Off-chain Storage</div>
                <code className="text-xs font-mono bg-muted px-2 py-1 rounded">Permanent</code>
              </div>
            </motion.div>

            {/* Arrow 3 - Splits into multiple */}
            <div className="col-span-4 flex justify-center my-4">
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{
                  opacity: currentPhase >= 3 ? 1 : 0.3,
                  scaleY: currentPhase >= 3 ? 1 : 0,
                }}
                className="flex flex-col items-center"
              >
                <div className="w-0.5 h-12 bg-primary" />
                <div className="w-0 h-0 border-t-8 border-l-4 border-r-4 border-t-primary border-l-transparent border-r-transparent" />
              </motion.div>
            </div>

            {/* Step 4: Consumers (3 columns) */}
            <div className="col-span-4">
              <div className="grid grid-cols-3 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: currentPhase >= 3 ? 1 : 0.3,
                    y: currentPhase >= 3 ? 0 : -10,
                  }}
                  transition={{ delay: 0.1 }}
                  className="p-4 rounded-lg border-2 border-border bg-purple-50 dark:bg-purple-900/20"
                >
                  <div className="flex flex-col items-center text-center">
                    <Smartphone className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-2" />
                    <div className="font-semibold text-sm">Wallets</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Update balances in real-time
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: currentPhase >= 3 ? 1 : 0.3,
                    y: currentPhase >= 3 ? 0 : -10,
                  }}
                  transition={{ delay: 0.2 }}
                  className="p-4 rounded-lg border-2 border-border bg-blue-50 dark:bg-blue-900/20"
                >
                  <div className="flex flex-col items-center text-center">
                    <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
                    <div className="font-semibold text-sm">Block Explorers</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Display transaction history
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: currentPhase >= 3 ? 1 : 0.3,
                    y: currentPhase >= 3 ? 0 : -10,
                  }}
                  transition={{ delay: 0.3 }}
                  className="p-4 rounded-lg border-2 border-border bg-green-50 dark:bg-green-900/20"
                >
                  <div className="flex flex-col items-center text-center">
                    <BarChart3 className="w-8 h-8 text-green-600 dark:text-green-400 mb-2" />
                    <div className="font-semibold text-sm">Analytics Tools</div>
                    <div className="text-xs text-muted-foreground mt-1">Track token metrics</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-muted/50 rounded-lg border border-border">
            <div className="text-sm font-semibold mb-2">📝 Event Structure</div>
            <pre className="text-xs font-mono overflow-x-auto">
              <code>{`event Transfer(
  address indexed from,  // ← Indexed
  address indexed to,    // ← Indexed
  uint256 value          // ← Data
);`}</code>
            </pre>
          </div>

          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="text-sm font-semibold mb-2 text-blue-900 dark:text-blue-400">
              💡 Key Facts
            </div>
            <ul className="text-xs text-blue-700 dark:text-blue-300 space-y-1">
              <li>• Events are write-only from contracts</li>
              <li>• Up to 3 indexed parameters for filtering</li>
              <li>• Stored permanently in transaction receipts</li>
              <li>• Much cheaper than storage (~375 gas per event)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
