"use client";

import React, { useState, useEffect } from "react";
import { Zap, Clock, Layers } from "lucide-react";
import { motion } from "framer-motion";

export function ThroughputComparison() {
  const [ethCount, setEthCount] = useState(0);
  const [zilCount, setZilCount] = useState(0);

  useEffect(() => {
    // Simulate TPS
    // Eth: ~15 TPS (scaled down for visual) -> 1 tick every ~1000ms
    // Zil: ~2500+ TPS -> 1 tick every ~10ms
    
    const ethTimer = setInterval(() => {
      setEthCount(c => c + 1);
    }, 800);

    const zilTimer = setInterval(() => {
      setZilCount(c => c + 5); // Batch update for performance
    }, 50);

    return () => {
      clearInterval(ethTimer);
      clearInterval(zilTimer);
    };
  }, []);

  return (
    <div className="my-8 w-full rounded-xl border border-border bg-card/50 shadow-sm overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
        
        {/* Ethereum Side */}
        <div className="p-6 flex flex-col gap-4 bg-slate-50/50 dark:bg-slate-900/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                <Layers className="w-4 h-4 text-slate-600 dark:text-slate-400" />
              </div>
              <span className="font-semibold">Ethereum</span>
            </div>
            <span className="text-xs font-mono text-muted-foreground">~15 TPS</span>
          </div>
          
          <div className="h-32 relative bg-background border border-border rounded-lg overflow-hidden flex items-center px-2">
            {/* Traffic Jam Visualization */}
            <div className="flex gap-1 flex-wrap">
               {[...Array(6)].map((_, i) => (
                 <motion.div
                   key={`eth-car-${i}`}
                   className="w-8 h-4 bg-slate-400 rounded-sm"
                   animate={{ x: [0, 5, 0] }}
                   transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                 />
               ))}
            </div>
            <div className="absolute right-2 top-2 text-xs text-red-500 font-bold animate-pulse">
              Congested
            </div>
          </div>

          <div className="flex justify-between items-end">
            <div className="text-sm text-muted-foreground">Processed:</div>
            <div className="text-2xl font-mono font-bold text-slate-600 dark:text-slate-400">
              {ethCount.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Zilliqa Side */}
        <div className="p-6 flex flex-col gap-4 bg-teal-50/50 dark:bg-teal-900/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                <Zap className="w-4 h-4 text-teal-500" />
              </div>
              <span className="font-semibold">Zilliqa 2.0</span>
            </div>
            <span className="text-xs font-mono text-teal-600 dark:text-teal-400">2,500+ TPS</span>
          </div>

          <div className="h-32 relative bg-background border border-border rounded-lg overflow-hidden flex items-center">
            {/* High Speed Highway */}
            <div className="absolute inset-0 flex items-center gap-8 opacity-50">
               {[...Array(3)].map((_, i) => (
                 <motion.div
                   key={`road-line-${i}`}
                   className="w-full h-0.5 bg-teal-200 dark:bg-teal-800"
                   style={{ top: `${(i + 1) * 25}%` }}
                 />
               ))}
            </div>
            
            <div className="w-full relative h-full overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`zil-car-${i}`}
                  className="absolute w-10 h-3 bg-teal-500 rounded-full shadow-sm blur-[1px]"
                  style={{ top: `${20 + (i % 3) * 25}%` }}
                  initial={{ x: -50 }}
                  animate={{ x: "120%" }}
                  transition={{ 
                    duration: 0.8, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: i * 0.3 
                  }}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-between items-end">
            <div className="text-sm text-muted-foreground">Processed:</div>
            <div className="text-2xl font-mono font-bold text-teal-600 dark:text-teal-400">
              {zilCount.toLocaleString()}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
