"use client";

import React, { useState, useEffect } from "react";
import { 
  Send, 
  Globe, 
  CheckCircle2, 
  Box, 
  Link as LinkIcon, 
  Database,
  User,
  ShieldCheck,
  Server
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function BlockchainExplainer() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Transaction Creation",
      description: "A user initiates a transaction, signing it with their private key.",
      icon: Send,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      title: "Broadcast & Verification",
      description: "The transaction is broadcast to the network. Nodes verify the signature and funds.",
      icon: Globe,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20"
    },
    {
      title: "Block Formation",
      description: "Verified transactions are grouped into a block by a validator.",
      icon: Box,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20"
    },
    {
      title: "Consensus & Chaining",
      description: "The network agrees on the block, and it's cryptographically linked to the chain.",
      icon: LinkIcon,
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
      <div className="p-6 min-h-[400px] flex flex-col">
        {/* Visualization Area */}
        <div className="flex-1 relative rounded-lg bg-background/50 border border-border/50 mb-6 overflow-hidden p-8 flex items-center justify-center">
          
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div 
                key="step0"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="flex items-center gap-12">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center border-2 border-blue-500">
                      <User className="w-8 h-8 text-blue-500" />
                    </div>
                    <span className="text-sm font-medium">Sender</span>
                  </div>
                  
                  <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex flex-col items-center"
                  >
                    <div className="px-4 py-2 bg-card border border-border rounded-lg shadow-sm flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono">Tx: 50 ZIL</span>
                    </div>
                    <Send className="w-6 h-6 text-muted-foreground animate-pulse" />
                  </motion.div>

                  <div className="flex flex-col items-center gap-2 opacity-50">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center border-2 border-muted-foreground/20">
                      <User className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <span className="text-sm font-medium">Receiver</span>
                  </div>
                </div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="flex items-center gap-2 text-xs text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/20 px-3 py-1 rounded-full"
                >
                  <ShieldCheck className="w-3 h-3" />
                  Signed with Private Key
                </motion.div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-64 h-64 rounded-full border border-purple-500/30"
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-8 z-10">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.2 }}
                      className="flex flex-col items-center gap-2"
                    >
                      <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center border border-purple-500">
                        <Server className="w-6 h-6 text-purple-500" />
                      </div>
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 + (i * 0.2) }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
                <motion.div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-mono bg-background border border-border px-2 py-1 rounded shadow-sm z-20"
                  animate={{ 
                    x: ["-50%", "-150%", "-50%", "50%", "-50%"],
                    y: ["-50%", "-150%", "-50%", "50%", "-50%"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Tx Data
                </motion.div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center gap-6"
              >
                <div className="flex gap-2">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: i * 0.2 }}
                      className="w-16 h-10 bg-background border border-dashed border-amber-500/50 rounded flex items-center justify-center text-[10px] text-muted-foreground"
                    >
                      Tx #{i}
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="w-32 h-32 bg-amber-100 dark:bg-amber-900/20 border-2 border-amber-500 rounded-xl flex flex-col items-center justify-center gap-2 shadow-lg relative"
                >
                  <Box className="w-10 h-10 text-amber-600 dark:text-amber-400" />
                  <span className="text-xs font-bold text-amber-800 dark:text-amber-200">Block #402</span>
                  <div className="absolute -top-3 -right-3 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full">
                    Valid
                  </div>
                </motion.div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center gap-1"
              >
                {[400, 401].map((num, i) => (
                  <div key={num} className="flex items-center opacity-50">
                    <div className="w-20 h-20 bg-muted border-2 border-muted-foreground/20 rounded-lg flex flex-col items-center justify-center gap-1">
                      <Box className="w-6 h-6 text-muted-foreground" />
                      <span className="text-[10px] font-mono">#{num}</span>
                    </div>
                    <div className="w-4 h-1 bg-muted-foreground/30" />
                  </div>
                ))}
                
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="flex items-center"
                >
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: 16 }}
                    transition={{ delay: 0.5 }}
                    className="h-1 bg-emerald-500"
                  />
                  <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/20 border-2 border-emerald-500 rounded-lg flex flex-col items-center justify-center gap-2 shadow-lg z-10">
                    <Box className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-xs font-bold text-emerald-800 dark:text-emerald-200">Block #402</span>
                    <div className="flex items-center gap-1 text-[8px] text-emerald-700 dark:text-emerald-300 bg-emerald-200/50 dark:bg-emerald-800/30 px-1.5 py-0.5 rounded">
                      <LinkIcon className="w-2 h-2" />
                      Linked
                    </div>
                  </div>
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
              onClick={() => {
                setStep(i);
              }}
              className={cn(
                "flex flex-col gap-2 p-3 rounded-lg border transition-all duration-300 text-left h-full",
                step === i 
                  ? `${s.bg} ${s.border} ring-1 ring-offset-1 ring-offset-background ring-${s.color.split('-')[1]}-500` 
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
