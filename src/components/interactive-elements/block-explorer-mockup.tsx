"use client";

import React, { useState, useEffect } from "react";
import { Search, Box, ArrowRight, FileText, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function BlockExplorerMockup() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResult, setShowResult] = useState(false);
  
  const targetHash = "0x742d35Cc6565C42d26A7b4b4c6d3A5c5c5d4e4F4";

  useEffect(() => {
    const typeAndSearch = async () => {
      // Reset
      setSearchTerm("");
      setShowResult(false);
      await new Promise(r => setTimeout(r, 1000));

      // Type
      for (let i = 0; i <= targetHash.length; i += 4) { // Speed up typing
        setSearchTerm(targetHash.slice(0, i));
        await new Promise(r => setTimeout(r, 50));
      }
      setSearchTerm(targetHash);

      // Search
      await new Promise(r => setTimeout(r, 500));
      setShowResult(true);

      // Hold then restart
      await new Promise(r => setTimeout(r, 5000));
      typeAndSearch();
    };

    typeAndSearch();
  }, []);

  return (
    <div className="my-8 w-full rounded-xl border border-border bg-card shadow-sm overflow-hidden flex flex-col">
      {/* Header / Search Bar */}
      <div className="bg-slate-900 text-white p-6">
        <div className="flex items-center gap-2 mb-4">
          <Box className="w-6 h-6 text-teal-400" />
          <span className="font-bold text-lg">Blockscout</span>
        </div>
        
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input 
            type="text" 
            value={searchTerm}
            readOnly
            className="w-full bg-slate-800 border border-slate-700 rounded-md py-2 pl-10 pr-4 text-sm font-mono text-slate-300 focus:outline-none"
            placeholder="Search by address, transaction hash, block..."
          />
        </div>
      </div>

      {/* Results Area */}
      <div className="p-6 bg-slate-50 dark:bg-background min-h-[300px]">
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div 
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center h-full text-muted-foreground gap-2"
            >
              <Search className="w-12 h-12 opacity-20" />
              <p className="text-sm">Enter a transaction hash to explore</p>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2 text-green-600 bg-green-100 dark:bg-green-900/20 px-3 py-1 rounded-full w-fit text-xs font-medium">
                <CheckCircle className="w-3 h-3" />
                Success
              </div>

              <div className="grid gap-4">
                <div className="p-4 bg-white dark:bg-card border border-border rounded-lg shadow-sm">
                  <div className="text-xs text-muted-foreground mb-1">Transaction Hash</div>
                  <div className="font-mono text-xs break-all">{targetHash}</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white dark:bg-card border border-border rounded-lg shadow-sm">
                    <div className="text-xs text-muted-foreground mb-1">From</div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[10px]">Ox</div>
                      <span className="font-mono text-xs text-blue-600">0x1234...5678</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center md:hidden">
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  </div>

                  <div className="p-4 bg-white dark:bg-card border border-border rounded-lg shadow-sm">
                    <div className="text-xs text-muted-foreground mb-1">To</div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-[10px]">Ox</div>
                      <span className="font-mono text-xs text-purple-600">0xabcd...ef90</span>
                      <span className="text-[10px] bg-slate-100 px-1 rounded">Contract</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="p-3 bg-slate-100 dark:bg-muted rounded-lg text-center">
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Block</div>
                    <div className="font-mono font-bold text-sm">#12,405,291</div>
                  </div>
                  <div className="p-3 bg-slate-100 dark:bg-muted rounded-lg text-center">
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Value</div>
                    <div className="font-mono font-bold text-sm">500 ZIL</div>
                  </div>
                  <div className="p-3 bg-slate-100 dark:bg-muted rounded-lg text-center">
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Fee</div>
                    <div className="font-mono font-bold text-sm text-xs">0.002 ZIL</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
