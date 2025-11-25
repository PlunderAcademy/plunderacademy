import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Database, TrendingDown, AlertTriangle } from 'lucide-react';

const GasEfficiencyVisualizer = () => {
  const [mintAmount, setMintAmount] = useState(5);
  
  // Simplified gas costs for demonstration
  const standardCostPerMint = 21000 + 20000; // Base + SSTORE
  const batchBaseCost = 21000 + 20000; // Base + 1 SSTORE
  const batchMarginalCost = 2000; // Cheap loop operations

  const standardTotal = mintAmount * standardCostPerMint;
  const batchTotal = batchBaseCost + (mintAmount - 1) * batchMarginalCost;
  
  const savings = standardTotal - batchTotal;
  const savingsPercent = Math.round((savings / standardTotal) * 100);

  return (
    <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-sans my-8 shadow-sm">
      <div className="flex items-center gap-2 mb-6 border-b border-slate-200 dark:border-slate-700 pb-4">
        <Zap className="w-6 h-6 text-yellow-500 dark:text-yellow-400" />
        <h3 className="text-lg font-semibold">Gas Efficiency: Standard vs Batch Mint</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">
              Mint Amount: <span className="text-slate-900 dark:text-slate-100 font-bold">{mintAmount} NFTs</span>
            </label>
            <input
              type="range"
              min="1"
              max="20"
              value={mintAmount}
              onChange={(e) => setMintAmount(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>1</span>
              <span>10</span>
              <span>20</span>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
              <Database className="w-4 h-4" /> Storage Operations
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-slate-600 dark:text-slate-400">Standard (Loop)</span>
                <span className="font-mono text-red-500">{mintAmount} x SSTORE</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600 dark:text-slate-400">Batch (ERC721A)</span>
                <span className="font-mono text-green-500">1 x SSTORE</span>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-2">
              <TrendingDown className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm text-blue-800 dark:text-blue-200">Gas Savings</h4>
                <p className="text-xs text-blue-600 dark:text-blue-300 mt-1">
                  Batch minting saves ~{savingsPercent}% gas by writing to storage only once per transaction, regardless of quantity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Visualization Chart */}
        <div className="flex flex-col justify-end space-y-4 min-h-[250px] relative">
          {/* Standard Bar */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-slate-500">
              <span>Standard Mint</span>
              <span>{standardTotal.toLocaleString()} gas</span>
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              className="h-12 bg-red-500/80 rounded-r-lg relative overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center px-2 gap-1 overflow-hidden">
                {Array.from({ length: Math.min(mintAmount, 15) }).map((_, i) => (
                  <div key={i} className="h-8 w-2 bg-white/30 rounded-sm" />
                ))}
                {mintAmount > 15 && <span className="text-white text-xs">...</span>}
              </div>
            </motion.div>
          </div>

          {/* Batch Bar */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-slate-500">
              <span>Batch Mint</span>
              <span>{batchTotal.toLocaleString()} gas</span>
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(batchTotal / standardTotal) * 100}%` }}
              className="h-12 bg-green-500/80 rounded-r-lg relative overflow-hidden"
            >
               <div className="absolute inset-0 flex items-center px-2">
                  <div className="h-8 w-full bg-white/30 rounded-sm" />
              </div>
            </motion.div>
          </div>
          
          <div className="absolute top-0 right-0 p-2 bg-slate-100 dark:bg-slate-800 rounded text-xs font-mono">
            1 SSTORE ≈ 20,000 gas
          </div>
        </div>
      </div>
    </div>
  );
};

export default GasEfficiencyVisualizer;
