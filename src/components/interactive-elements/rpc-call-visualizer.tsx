"use client";

import React, { useState, useEffect } from "react";
import { 
  Code2, 
  Server, 
  Database,
  ArrowRight,
  CheckCircle2,
  FileJson,
  Braces
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function RPCCallVisualizer() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Build Request",
      description: "Your code constructs an RPC call with the contract address and function selector.",
      icon: Code2,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      title: "Send to RPC",
      description: "The request is sent to the blockchain node's JSON-RPC endpoint.",
      icon: Server,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20"
    },
    {
      title: "Execute on Chain",
      description: "The node executes the view function against the blockchain state.",
      icon: Database,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20"
    },
    {
      title: "Decode Response",
      description: "The raw hex response is decoded into usable data types.",
      icon: FileJson,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="my-8 w-full rounded-xl border border-border bg-card/50 shadow-sm overflow-hidden">
      <div className="p-6 min-h-[420px] flex flex-col">
        {/* Visualization Area */}
        <div className="flex-1 relative rounded-lg bg-background/50 border border-border/50 mb-6 overflow-hidden p-6">
          
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div 
                key="step0"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center justify-center h-full gap-4"
              >
                <div className="flex items-center gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center border-2 border-blue-500">
                      <Code2 className="w-8 h-8 text-blue-500" />
                    </div>
                    <span className="text-sm font-medium">Your Script</span>
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col items-center"
                  >
                    <ArrowRight className="w-6 h-6 text-muted-foreground" />
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="px-4 py-3 bg-card border border-border rounded-lg shadow-sm max-w-xs"
                  >
                    <div className="text-[10px] font-mono text-muted-foreground mb-1">eth_call</div>
                    <div className="text-xs font-mono bg-muted/50 p-2 rounded">
                      <div className="text-blue-500">to: 0x1234...abcd</div>
                      <div className="text-purple-500">data: 0xa035b1fe</div>
                    </div>
                  </motion.div>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="text-xs text-muted-foreground bg-muted/30 px-3 py-1.5 rounded-full"
                >
                  <Braces className="w-3 h-3 inline mr-1" />
                  ABI encodes function selector
                </motion.div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center h-full"
              >
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-14 h-14 rounded-lg bg-muted flex items-center justify-center border border-border">
                      <Code2 className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <span className="text-xs text-muted-foreground">Client</span>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <motion.div
                      className="h-1 bg-purple-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: 120 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 rounded text-[10px] font-mono text-purple-700 dark:text-purple-300"
                    >
                      POST /json-rpc
                    </motion.div>
                  </div>

                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="w-14 h-14 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center border-2 border-purple-500">
                      <Server className="w-6 h-6 text-purple-500" />
                    </div>
                    <span className="text-xs font-medium">RPC Node</span>
                    <span className="text-[10px] text-muted-foreground">api.zilliqa.com</span>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center h-full"
              >
                <div className="flex flex-col items-center gap-6">
                  <div className="flex items-center gap-8">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center border border-border">
                        <Server className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <span className="text-xs text-muted-foreground">Node</span>
                    </div>

                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.3 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-16 h-0.5 bg-amber-500" />
                      <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                      >
                        <ArrowRight className="w-4 h-4 text-amber-500" />
                      </motion.div>
                    </motion.div>

                    <motion.div 
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 }}
                      className="flex flex-col items-center gap-2"
                    >
                      <div className="w-16 h-16 rounded-lg bg-amber-100 dark:bg-amber-900/20 flex items-center justify-center border-2 border-amber-500 relative">
                        <Database className="w-7 h-7 text-amber-600 dark:text-amber-400" />
                        <motion.div
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                          className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"
                        />
                      </div>
                      <span className="text-xs font-medium">Blockchain State</span>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="px-4 py-2 bg-amber-50 dark:bg-amber-900/20 border border-amber-500/30 rounded-lg"
                  >
                    <div className="text-xs font-mono text-amber-700 dark:text-amber-300">
                      getPrice() → reads storage slot
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center h-full gap-4"
              >
                <div className="flex items-center gap-6">
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="px-4 py-3 bg-muted/50 border border-border rounded-lg"
                  >
                    <div className="text-[10px] text-muted-foreground mb-1">Raw Response</div>
                    <div className="text-xs font-mono text-muted-foreground">
                      0x0de0b6b3a7640000
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <ArrowRight className="w-6 h-6 text-emerald-500" />
                  </motion.div>

                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="px-4 py-3 bg-emerald-50 dark:bg-emerald-900/20 border-2 border-emerald-500 rounded-lg"
                  >
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 mb-1">Decoded</div>
                    <div className="text-lg font-bold text-emerald-700 dark:text-emerald-300">
                      1.0 ZIL
                    </div>
                  </motion.div>
                </div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/20 px-3 py-1.5 rounded-full"
                >
                  <CheckCircle2 className="w-3 h-3" />
                  ABI decoded to uint256
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Progress Steps */}
        <div className="grid grid-cols-4 gap-2">
          {steps.map((s, i) => (
            <button
              key={i}
              onClick={() => setStep(i)}
              className={cn(
                "flex flex-col gap-2 p-3 rounded-lg border transition-all duration-300 text-left h-full",
                step === i 
                  ? `${s.bg} ${s.border} ring-1 ring-offset-1 ring-offset-background` 
                  : "bg-background border-transparent hover:bg-muted/50 opacity-60 hover:opacity-100"
              )}
            >
              <div className="flex items-center gap-2">
                <s.icon className={cn("w-4 h-4", s.color)} />
                <span className={cn("text-xs font-semibold", step === i ? "text-foreground" : "text-muted-foreground")}>
                  Step {i + 1}
                </span>
              </div>
              <span className="text-[10px] font-medium leading-tight hidden sm:block">
                {s.title}
              </span>
            </button>
          ))}
        </div>
        
        <div className="mt-4 p-3 bg-muted/30 rounded-lg border border-border/50">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{steps[step].title}:</span> {steps[step].description}
          </p>
        </div>
      </div>
    </div>
  );
}














