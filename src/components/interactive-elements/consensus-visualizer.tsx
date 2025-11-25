"use client";

import React, { useState, useEffect } from "react";
import { Server, CheckCircle2, XCircle, Share2, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ConsensusVisualizer() {
  const [step, setStep] = useState(0);
  
  // Steps:
  // 0: Idle / Proposal
  // 1: Broadcast
  // 2: Validation (Voting)
  // 3: Consensus Reached
  
  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nodes = [
    { id: 1, x: 0, y: -60 },
    { id: 2, x: 60, y: -20 },
    { id: 3, x: 40, y: 50 },
    { id: 4, x: -40, y: 50 },
    { id: 5, x: -60, y: -20 },
  ];

  return (
    <div className="my-8 w-full rounded-xl border border-border bg-card/50 shadow-sm overflow-hidden">
      <div className="p-6 min-h-[350px] flex flex-col items-center justify-center relative">
        
        {/* Central Transaction/Block */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="proposal"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="z-20 bg-background border-2 border-primary rounded-lg px-4 py-2 shadow-lg flex items-center gap-2"
              >
                <Share2 className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold">Proposal</span>
              </motion.div>
            )}
            {step === 3 && (
              <motion.div
                key="consensus"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 1 }}
                className="z-20 bg-green-100 dark:bg-green-900/30 border-2 border-green-500 rounded-full p-4 shadow-lg"
              >
                <ShieldCheck className="w-8 h-8 text-green-600 dark:text-green-400" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Nodes */}
        <div className="relative w-64 h-64">
          {nodes.map((node, i) => (
            <motion.div
              key={node.id}
              className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 rounded-full bg-card border-2 flex items-center justify-center shadow-sm z-10"
              initial={{ x: node.x, y: node.y }}
              animate={{ 
                borderColor: step === 3 ? "rgb(34, 197, 94)" : step === 2 ? "rgb(234, 179, 8)" : "rgb(148, 163, 184)",
                scale: step === 3 ? 1.1 : 1
              }}
              transition={{ duration: 0.5 }}
            >
              <Server className={`w-5 h-5 ${step === 3 ? "text-green-500" : "text-muted-foreground"}`} />
              
              {/* Voting Indicator */}
              <AnimatePresence>
                {step === 2 && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="absolute -top-2 -right-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400 text-[10px] px-1.5 rounded-full border border-yellow-500"
                  >
                    ?
                  </motion.div>
                )}
                {step === 3 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full p-0.5 border border-green-500"
                  >
                    <CheckCircle2 className="w-3 h-3" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

          {/* Broadcast Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
            <AnimatePresence>
              {step === 1 && nodes.map((node) => (
                <motion.line
                  key={`line-${node.id}`}
                  x1="50%"
                  y1="50%"
                  x2={`calc(50% + ${node.x}px)`}
                  y2={`calc(50% + ${node.y}px)`}
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary/30"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              ))}
            </AnimatePresence>
          </svg>
        </div>

        {/* Status Text */}
        <div className="absolute bottom-4 left-0 right-0 text-center">
          <p className="text-sm font-medium text-muted-foreground">
            {step === 0 && "New Block Proposed"}
            {step === 1 && "Broadcasting to Network"}
            {step === 2 && "Nodes Validating Independently"}
            {step === 3 && "Consensus Reached: Block Added"}
          </p>
        </div>
      </div>
    </div>
  );
}
