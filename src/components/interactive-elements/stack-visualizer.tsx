"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Operation = {
  name: string;
  description: string;
  execute: (stack: number[]) => number[];
};

export function StackVisualizer() {
  const [stack, setStack] = useState<number[]>([]);
  const [currentStep, setCurrentStep] = useState(0);

  // Calculate (5 + 3) × 2 = 16
  const operations: Operation[] = [
    {
      name: "PUSH 5",
      description: "Push value 5 onto the stack",
      execute: (s) => [...s, 5],
    },
    {
      name: "PUSH 3",
      description: "Push value 3 onto the stack",
      execute: (s) => [...s, 3],
    },
    {
      name: "ADD",
      description: "Pop top two values, add them, push result (5 + 3 = 8)",
      execute: (s) => {
        const newStack = [...s];
        const b = newStack.pop()!;
        const a = newStack.pop()!;
        return [...newStack, a + b];
      },
    },
    {
      name: "PUSH 2",
      description: "Push value 2 onto the stack",
      execute: (s) => [...s, 2],
    },
    {
      name: "MUL",
      description: "Pop top two values, multiply them, push result (8 × 2 = 16)",
      execute: (s) => {
        const newStack = [...s];
        const b = newStack.pop()!;
        const a = newStack.pop()!;
        return [...newStack, a * b];
      },
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        const nextStep = (prev + 1) % (operations.length + 2); // +2 for pause at end and reset
        
        if (nextStep === 0) {
          // Reset
          setStack([]);
          return 0;
        } else if (nextStep <= operations.length) {
          // Execute operation
          setStack(operations[nextStep - 1].execute(stack));
          return nextStep;
        } else {
          // Pause at end before reset
          return nextStep;
        }
      });
    }, 2000);

    return () => clearInterval(timer);
  }, [stack, operations.length]);

  return (
    <div className="my-8 w-full rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-semibold text-lg">EVM Stack Visualizer</h3>
            <p className="text-sm text-muted-foreground">Calculating: (5 + 3) × 2</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Stack Visualization */}
          <div className="space-y-4">
            <div className="text-sm font-medium text-muted-foreground">Stack (LIFO - Last In, First Out)</div>
            <div className="min-h-[300px] bg-muted/30 rounded-lg p-4 flex flex-col-reverse items-center justify-start gap-2 border-2 border-dashed border-border">
              <AnimatePresence>
                {stack.map((value, index) => (
                  <motion.div
                    key={`${index}-${value}`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="w-full max-w-[200px] h-12 bg-primary/20 border-2 border-primary rounded-md flex items-center justify-center font-mono font-bold text-lg"
                  >
                    {value}
                  </motion.div>
                ))}
              </AnimatePresence>
              {stack.length === 0 && (
                <div className="text-sm text-muted-foreground italic">Empty Stack</div>
              )}
            </div>
            <div className="text-xs text-muted-foreground text-center">
              Top of stack is at the bottom ↓
            </div>
          </div>

          {/* Operations List */}
          <div className="space-y-4">
            <div className="text-sm font-medium text-muted-foreground">Operations</div>
            <div className="space-y-2">
              {operations.map((op, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg border transition-all ${
                    index === currentStep - 1
                      ? "bg-primary/10 border-primary shadow-sm"
                      : index < currentStep
                      ? "bg-muted/50 border-border opacity-60"
                      : "bg-background border-border"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        index < currentStep
                          ? "bg-green-500 text-white"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-mono text-sm font-semibold">{op.name}</div>
                      <div className="text-xs text-muted-foreground">{op.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
