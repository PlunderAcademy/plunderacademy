"use client";

import React, { useState } from "react";
import { Calculator, Fuel, Info } from "lucide-react";

export function GasFeeCalculator() {
  const [gasLimit, setGasLimit] = useState(21000);
  const [gasPrice, setGasPrice] = useState(2000); // in gwei
  const [zilPrice, setZilPrice] = useState(0.025); // USD

  const presets = [
    { name: "Standard Transfer", limit: 21000 },
    { name: "Token Transfer (ZRC-2)", limit: 50000 },
    { name: "Swap on DEX", limit: 185000 },
    { name: "NFT Mint", limit: 250000 },
  ];

  // Calculations
  // Total Gas = Limit * Price (in gwei)
  // 1 ZIL = 1,000,000,000 gwei (10^9)
  // Wait, Zilliqa uses 10^12 for QA? No, standard is usually 10^9 gwei equivalent or similar.
  // Let's assume standard EVM-like units for simplicity or Zilliqa's Li.
  // Zilliqa: 1 ZIL = 10^12 Qa.
  // Min gas price is usually 2000 Li (0.002 ZIL).
  // 1 Li = 10^6 Qa. 
  // Let's stick to the text's example:
  // "Total Fee: 21,000 × 2,000 = 42,000,000 gwei = 0.042 ZIL"
  // This implies 1 ZIL = 1,000,000,000 gwei.
  
  const totalGwei = gasLimit * gasPrice;
  const totalZil = totalGwei / 1000000000;
  const totalUsd = totalZil * zilPrice;

  return (
    <div className="my-8 w-full rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400">
            <Calculator className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-lg">Gas Fee Calculator</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="space-y-6">
            
            {/* Presets */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Operation Type</label>
              <div className="grid grid-cols-2 gap-2">
                {presets.map((p) => (
                  <button
                    key={p.name}
                    onClick={() => setGasLimit(p.limit)}
                    className={`text-xs p-2 rounded border text-left transition-colors ${
                      gasLimit === p.limit 
                        ? "bg-primary/10 border-primary text-primary font-medium" 
                        : "bg-background border-input hover:bg-muted"
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Gas Limit */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium">Gas Limit (Units)</label>
                <span className="text-xs text-muted-foreground">Complexity of work</span>
              </div>
              <input
                type="number"
                value={gasLimit}
                onChange={(e) => setGasLimit(Number(e.target.value))}
                className="w-full p-2 rounded-md border border-input bg-background text-sm"
              />
            </div>

            {/* Gas Price */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium">Gas Price (gwei)</label>
                <span className="text-xs text-muted-foreground">Cost per unit</span>
              </div>
              <input
                type="range"
                min="1000"
                max="10000"
                step="100"
                value={gasPrice}
                onChange={(e) => setGasPrice(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Slow (1000)</span>
                <span className="font-mono text-foreground">{gasPrice} gwei</span>
                <span>Fast (10000)</span>
              </div>
            </div>

          </div>

          {/* Results */}
          <div className="bg-muted/30 rounded-lg p-6 flex flex-col justify-center space-y-6 border border-border/50">
            
            <div>
              <div className="text-sm text-muted-foreground mb-1">Estimated Cost (ZIL)</div>
              <div className="text-3xl font-bold font-mono text-foreground">
                {totalZil.toLocaleString(undefined, { minimumFractionDigits: 3, maximumFractionDigits: 6 })} ZIL
              </div>
            </div>

            <div>
              <div className="text-sm text-muted-foreground mb-1">Estimated Cost (USD)</div>
              <div className="text-xl font-semibold text-green-600 dark:text-green-400">
                ${totalUsd.toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 4 })}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                @ ${zilPrice} / ZIL
              </div>
            </div>

            <div className="pt-4 border-t border-border/50">
              <div className="flex gap-2 items-start text-xs text-muted-foreground">
                <Info className="w-4 h-4 shrink-0 mt-0.5" />
                <p>
                  This is an estimation. Actual costs may vary based on network conditions and the exact complexity of the smart contract interaction.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
