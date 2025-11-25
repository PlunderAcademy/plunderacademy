"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ShieldCheck } from "lucide-react";

type ExecutionStep = {
  id: number;
  name: string;
  type: "modifier" | "function" | "placeholder";
  status: "pending" | "executing" | "passed" | "failed";
  check?: string;
  passes?: boolean;
};

export function ModifierExecutionFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [executionFailed, setExecutionFailed] = useState(false);

  const steps: ExecutionStep[] = [
    {
      id: 0,
      name: "onlyOwner",
      type: "modifier",
      status: "pending",
      check: "msg.sender == owner",
      passes: true,
    },
    {
      id: 1,
      name: "notPaused",
      type: "modifier",
      status: "pending",
      check: "!paused",
      passes: true,
    },
    {
      id: 2,
      name: "validAmount",
      type: "modifier",
      status: "pending",
      check: "amount > 0 && amount <= maxAmount",
      passes: true,
    },
    {
      id: 3,
      name: "_ (Function Body)",
      type: "placeholder",
      status: "pending",
    },
    {
      id: 4,
      name: "mintTokens",
      type: "function",
      status: "pending",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length) {
          return prev + 1;
        } else {
          // Reset after a pause
          setTimeout(() => {
            setCurrentStep(0);
            setExecutionFailed(false);
          }, 1000);
          return prev;
        }
      });
    }, 1500);

    return () => clearInterval(timer);
  }, [steps.length]);

  const getStepStatus = (index: number): ExecutionStep["status"] => {
    if (index < currentStep) return steps[index].passes === false ? "failed" : "passed";
    if (index === currentStep) return "executing";
    return "pending";
  };

  return (
    <div className="my-8 w-full rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2">Modifier Execution Flow</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Watch how modifiers execute sequentially before the function body runs
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Execution Flow Visualization */}
          <div className="space-y-3">
            {steps.map((step, index) => {
              const status = getStepStatus(index);
              const isPlaceholder = step.type === "placeholder";

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative p-4 rounded-lg border-2 transition-all ${
                    status === "executing"
                      ? "border-primary bg-primary/10 shadow-md"
                      : status === "passed"
                      ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                      : status === "failed"
                      ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                      : "border-border bg-muted/30"
                  } ${isPlaceholder ? "border-dashed" : ""}`}
                >
                  <div className="flex items-start gap-3">
                    {/* Icon */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                        status === "executing"
                          ? "bg-primary text-primary-foreground"
                          : status === "passed"
                          ? "bg-green-500 text-white"
                          : status === "failed"
                          ? "bg-red-500 text-white"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {status === "passed" ? (
                        <Check className="w-5 h-5" />
                      ) : status === "failed" ? (
                        <X className="w-5 h-5" />
                      ) : isPlaceholder ? (
                        <span className="text-lg">_</span>
                      ) : (
                        <ShieldCheck className="w-5 h-5" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-sm">{step.name}</span>
                        {step.type === "modifier" && (
                          <span className="text-xs px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                            modifier
                          </span>
                        )}
                        {step.type === "function" && (
                          <span className="text-xs px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
                            function
                          </span>
                        )}
                      </div>

                      {step.check && (
                        <div className="font-mono text-xs text-muted-foreground">
                          require({step.check})
                        </div>
                      )}

                      {isPlaceholder && (
                        <div className="text-xs text-muted-foreground italic">
                          Placeholder where function body executes
                        </div>
                      )}

                      {/* Execution Indicator */}
                      {status === "executing" && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="mt-2 text-xs font-semibold text-primary"
                        >
                          ⚡ Executing...
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Arrow to next step */}
                  {index < steps.length - 1 && status !== "failed" && (
                    <div className="absolute left-1/2 -bottom-3 transform -translate-x-1/2">
                      <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-border" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Code Example and Explanation */}
          <div className="space-y-4">
            <div className="p-4 bg-muted/50 rounded-lg border border-border">
              <div className="text-sm font-semibold mb-3">Function with Modifiers</div>
              <pre className="text-xs font-mono overflow-x-auto">
                <code>{`function mintTokens(address to, uint256 amount)
    public
    onlyOwner        // ← Modifier 1
    notPaused        // ← Modifier 2
    validAmount(amount) // ← Modifier 3
{
    // ← Function body runs here (_)
    _mint(to, amount);
    emit TokensMinted(to, amount);
}`}</code>
              </pre>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="text-sm font-semibold mb-2 text-blue-900 dark:text-blue-400">
                📚 How Modifiers Work
              </div>
              <ul className="text-xs text-blue-700 dark:text-blue-300 space-y-1.5">
                <li>• Modifiers execute in order from top to bottom</li>
                <li>• Each modifier checks its conditions with `require`</li>
                <li>• The `_` symbol marks where the function body runs</li>
                <li>• If any modifier fails, the entire transaction reverts</li>
                <li>• No changes are saved if execution fails</li>
              </ul>
            </div>

            {currentStep === steps.length && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800"
              >
                <div className="text-sm font-semibold text-green-900 dark:text-green-400">
                  ✓ Execution Complete!
                </div>
                <div className="text-xs text-green-700 dark:text-green-300 mt-1">
                  All modifiers passed and function executed successfully
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
