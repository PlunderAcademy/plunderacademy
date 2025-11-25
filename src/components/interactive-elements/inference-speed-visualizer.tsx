"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Zap, Turtle, Rabbit, RotateCcw } from "lucide-react";

export default function InferenceSpeedVisualizer() {
  const [standardText, setStandardText] = useState("");
  const [fastText, setFastText] = useState("");
  const [isResetting, setIsResetting] = useState(false);

  const fullText = "Artificial Intelligence is transforming how developers build software, enabling new capabilities like automated code review, real-time assistance, and dynamic documentation generation. The speed of inference determines the user experience.";
  
  const STANDARD_SPEED_MS = 80; // ~12 chars/sec (~3 tokens/sec) - Typical slow model
  const FAST_SPEED_MS = 5;      // ~200 chars/sec (~50 tokens/sec) - High speed provider

  useEffect(() => {
    if (isResetting) return;

    let standardIndex = 0;
    let fastIndex = 0;
    let standardTimer: NodeJS.Timeout;
    let fastTimer: NodeJS.Timeout;

    const startAnimation = () => {
      // Standard Speed
      standardTimer = setInterval(() => {
        if (standardIndex < fullText.length) {
          setStandardText(fullText.slice(0, standardIndex + 1));
          standardIndex++;
        }
      }, STANDARD_SPEED_MS);

      // Fast Speed
      fastTimer = setInterval(() => {
        if (fastIndex < fullText.length) {
          setFastText(fullText.slice(0, fastIndex + 1));
          fastIndex++;
        }
      }, FAST_SPEED_MS);
    };

    startAnimation();

    // Auto reset loop
    const resetTimer = setInterval(() => {
      setIsResetting(true);
      setTimeout(() => {
        setStandardText("");
        setFastText("");
        standardIndex = 0;
        fastIndex = 0;
        setIsResetting(false);
      }, 1000); // Pause before restart
    }, 12000); // Reset every 12s

    return () => {
      clearInterval(standardTimer);
      clearInterval(fastTimer);
      clearInterval(resetTimer);
    };
  }, [isResetting]);

  // Calculate progress for bars
  const standardProgress = (standardText.length / fullText.length) * 100;
  const fastProgress = (fastText.length / fullText.length) * 100;

  return (
    <div className="my-8 w-full rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6 border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            <h3 className="text-lg font-semibold">Inference Provider Impact</h3>
          </div>
          <div className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
            Looping Demo
          </div>
        </div>

        <div className="grid gap-6">
          {/* Standard Provider */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <div className="flex items-center gap-2">
                <Turtle className="w-4 h-4 text-muted-foreground" />
                <span className="font-medium">Standard GPU Inference</span>
              </div>
              <span className="font-mono text-xs text-muted-foreground">~30 tok/s</span>
            </div>
            
            <div className="relative h-24 rounded-lg border border-border bg-muted/30 p-3 font-mono text-xs overflow-hidden">
              <div className="absolute inset-0 p-3 text-muted-foreground/20 select-none">
                {fullText}
              </div>
              <div className="relative text-foreground">
                {standardText}
                <span className="inline-block w-1.5 h-3 bg-primary ml-0.5 animate-pulse" />
              </div>
            </div>
            
            <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-slate-400"
                animate={{ width: `${standardProgress}%` }}
                transition={{ ease: "linear", duration: 0 }}
              />
            </div>
          </div>

          {/* Fast Provider */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <div className="flex items-center gap-2">
                <Rabbit className="w-4 h-4 text-primary" />
                <span className="font-medium text-primary">Cerebras / Groq (LPU)</span>
              </div>
              <span className="font-mono text-xs text-primary">~300+ tok/s</span>
            </div>
            
            <div className="relative h-24 rounded-lg border border-primary/20 bg-primary/5 p-3 font-mono text-xs overflow-hidden">
              <div className="absolute inset-0 p-3 text-muted-foreground/20 select-none">
                {fullText}
              </div>
              <div className="relative text-foreground">
                {fastText}
                <span className="inline-block w-1.5 h-3 bg-primary ml-0.5 animate-pulse" />
              </div>
            </div>
            
            <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary"
                animate={{ width: `${fastProgress}%` }}
                transition={{ ease: "linear", duration: 0 }}
              />
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-6 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 text-xs text-blue-800 dark:text-blue-300 flex gap-2">
            <RotateCcw className="w-4 h-4 shrink-0 mt-0.5" />
            <p>
                High-speed inference providers minimize &quot;Time to First Token&quot; and dramatically increase throughput, 
                making AI tools feel instant rather than sluggish.
            </p>
        </div>
      </div>
    </div>
  );
}
