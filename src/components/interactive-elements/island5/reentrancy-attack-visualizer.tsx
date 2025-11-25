import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Skull, ArrowLeft, RefreshCcw, Lock } from 'lucide-react';

const ReentrancyAttackVisualizer = () => {
  const [step, setStep] = useState(0);

  // Animation loop
  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 5);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 my-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold flex items-center gap-2 text-red-600 dark:text-red-400">
          <Skull className="w-5 h-5" />
          Reentrancy Attack Flow
        </h3>
        <div className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
            Step: {step + 1}/5
        </div>
      </div>

      <div className="flex justify-between items-stretch gap-8 h-64">
        {/* Attacker Contract */}
        <div className={`flex-1 border-2 ${step === 0 || step === 3 ? 'border-red-500 bg-red-50 dark:bg-red-900/10' : 'border-slate-300 dark:border-slate-700'} rounded-lg p-4 relative transition-colors duration-300`}>
            <h4 className="font-bold text-sm mb-2">Attacker.sol</h4>
            <ul className="space-y-2 text-xs font-mono">
                <li className={step === 0 ? "bg-red-200 dark:bg-red-800 px-1 rounded" : ""}>1. attack() calls withdraw</li>
                <li className={step === 3 ? "bg-red-200 dark:bg-red-800 px-1 rounded" : ""}>2. fallback() calls withdraw again!</li>
            </ul>
        </div>

        {/* Vulnerable Contract */}
        <div className={`flex-1 border-2 ${step === 1 || step === 2 ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/10' : 'border-slate-300 dark:border-slate-700'} rounded-lg p-4 relative transition-colors duration-300`}>
            <h4 className="font-bold text-sm mb-2">Vulnerable.sol</h4>
            <ul className="space-y-2 text-xs font-mono">
                <li className={step === 1 ? "bg-blue-200 dark:bg-blue-800 px-1 rounded" : ""}>1. Check Balance (10 ETH)</li>
                <li className={`flex items-center gap-1 ${step === 2 ? "bg-yellow-200 dark:bg-yellow-800 px-1 rounded" : ""}`}>
                    2. Send ETH 
                    {step === 2 && <ArrowLeft className="w-3 h-3 animate-pulse" />}
                </li>
                <li className="text-slate-400">3. Update Balance (Too late!)</li>
            </ul>
            
            {/* Balance Indicator */}
            <div className="mt-4 bg-white dark:bg-slate-900 p-2 rounded border text-center">
                <div className="text-[10px] text-slate-500">Internal Balance</div>
                <div className="font-mono font-bold">10 ETH</div>
            </div>
        </div>
      </div>
      
      {/* Connection Lines / Animation */}
      <div className="relative h-12 mt-2">
        {step === 2 && (
            <motion.div 
                className="absolute top-0 right-1/4 left-1/4 h-0.5 bg-red-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
            />
        )}
        {step === 3 && (
             <motion.div 
                className="absolute top-2 right-1/4 left-1/4 flex items-center justify-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded font-bold flex items-center gap-1">
                    <RefreshCcw className="w-3 h-3" /> Re-entering!
                </span>
            </motion.div>
        )}
      </div>

      <div className="mt-4 bg-slate-100 dark:bg-slate-800 p-3 rounded-lg text-xs text-slate-600 dark:text-slate-300">
        <div className="font-semibold mb-1">Defense: Check-Effects-Interactions</div>
        Updates balance <strong>before</strong> sending ETH, preventing the loop.
      </div>
    </div>
  );
};

export default ReentrancyAttackVisualizer;

