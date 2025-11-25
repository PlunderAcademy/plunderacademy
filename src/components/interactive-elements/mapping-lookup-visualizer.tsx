"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

type BalanceEntry = {
  address: string;
  balance: number;
};

export function MappingLookupVisualizer() {
  const [lookupIndex, setLookupIndex] = useState(0);
  const [isSearching, setIsSearching] = useState(false);

  const balances: BalanceEntry[] = [
    { address: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb", balance: 1000 },
    { address: "0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed", balance: 2500 },
    { address: "0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359", balance: 500 },
    { address: "0xdbF03B407c01E7cD3CBea99509d93f8DDDC8C6FB", balance: 7500 },
    { address: "0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb", balance: 150 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsSearching(true);
      setTimeout(() => {
        setLookupIndex((prev) => (prev + 1) % balances.length);
        setIsSearching(false);
      }, 1000);
    }, 3000);

    return () => clearInterval(timer);
  }, [balances.length]);

  const currentLookup = balances[lookupIndex];

  return (
    <div className="my-8 w-full rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2">Mapping Lookup Visualizer</h3>
        <p className="text-sm text-muted-foreground mb-6">
          See how mappings provide instant O(1) key→value lookups
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Lookup Interface */}
          <div className="space-y-4">
            <div className="p-4 bg-muted/50 rounded-lg border border-border">
              <div className="text-sm font-semibold mb-3">Solidity Mapping</div>
              <code className="text-xs font-mono block mb-4">
                mapping(address =&gt; uint256) private _balances;
              </code>

              <div className="text-sm font-semibold mb-2">
                Looking up: <span className="text-primary">balanceOf(address)</span>
              </div>

              {/* Address Input */}
              <motion.div
                key={lookupIndex}
                initial={{ scale: 0.98 }}
                animate={{ scale: 1 }}
                className="relative"
              >
                <div className="flex items-center gap-2 p-3 bg-background rounded border-2 border-primary">
                  <Search className={`w-4 h-4 text-primary ${isSearching ? "animate-pulse" : ""}`} />
                  <code className="text-xs font-mono text-foreground flex-1 overflow-hidden text-ellipsis">
                    {currentLookup.address}
                  </code>
                </div>
              </motion.div>

              {/* Search Animation */}
              {isSearching && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-3 text-xs text-primary font-medium"
                >
                  ⚡ Hashing key and looking up...
                </motion.div>
              )}

              {/* Result */}
              {!isSearching && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800"
                >
                  <div className="text-sm font-semibold text-green-900 dark:text-green-400 mb-1">
                    ✓ Balance Found
                  </div>
                  <code className="text-lg font-mono font-bold text-green-700 dark:text-green-300">
                    {currentLookup.balance.toLocaleString()} tokens
                  </code>
                  <div className="text-xs text-green-600 dark:text-green-400 mt-2">
                    Lookup time: O(1) - Instant!
                  </div>
                </motion.div>
              )}
            </div>

            {/* Comparison */}
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="text-sm font-semibold mb-2 text-blue-900 dark:text-blue-400">
                Why Mappings are Perfect for Tokens
              </div>
              <ul className="text-xs text-blue-700 dark:text-blue-300 space-y-1.5">
                <li>• O(1) constant time lookup regardless of size</li>
                <li>• Only stores addresses with non-zero balances</li>
                <li>• Automatically returns 0 for unknown addresses</li>
                <li>• Gas efficient for reading and writing</li>
              </ul>
            </div>
          </div>

          {/* Visual Representation */}
          <div className="space-y-4">
            <div className="text-sm font-semibold mb-2">All Stored Balances</div>
            <div className="space-y-2">
              {balances.map((entry, index) => (
                <motion.div
                  key={entry.address}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: index === lookupIndex && !isSearching ? 1.02 : 1,
                  }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    index === lookupIndex && !isSearching
                      ? "border-primary bg-primary/10 shadow-md"
                      : "border-border bg-muted/30"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <code className="text-xs font-mono text-muted-foreground truncate flex-1">
                      {entry.address.slice(0, 10)}...{entry.address.slice(-8)}
                    </code>
                    <div className="font-mono font-semibold text-sm whitespace-nowrap">
                      {entry.balance.toLocaleString()}
                    </div>
                  </div>
                  {index === lookupIndex && !isSearching && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-2 text-xs text-primary font-medium"
                    >
                      ← Currently queried
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Comparison with Array */}
            <div className="p-4 bg-muted/50 rounded-lg border border-border">
              <div className="text-sm font-semibold mb-2">vs. Array Lookup</div>
              <div className="text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Mapping:</span>
                  <span className="font-mono font-semibold text-green-600">O(1) instant</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Array (unsorted):</span>
                  <span className="font-mono font-semibold text-red-600">O(n) slow</span>
                </div>
                <div className="text-xs text-muted-foreground mt-2 pt-2 border-t border-border">
                  With millions of addresses, mappings stay instant while arrays become unusably slow
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
