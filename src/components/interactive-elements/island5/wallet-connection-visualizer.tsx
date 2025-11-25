import React from 'react';
import { motion } from 'framer-motion';
import { Power, MousePointer, ShieldCheck, Link } from 'lucide-react';

const WalletConnectionVisualizer = () => {
  return (
    <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 my-8">
      <h3 className="text-lg font-semibold mb-8">Connection Flow</h3>

      <div className="flex justify-around items-center">
        {/* State 1: Connect Button */}
        <motion.div 
            className="flex flex-col items-center opacity-40"
            animate={{ opacity: [0.4, 1, 0.4, 0.4] }}
            transition={{ duration: 6, times: [0, 0.1, 0.25, 1], repeat: Infinity }}
        >
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg mb-2 flex items-center gap-2">
                <Power className="w-4 h-4" /> Connect
            </div>
            <span className="text-xs text-slate-500">1. User Click</span>
        </motion.div>

        {/* State 2: Modal Selection */}
        <motion.div 
            className="flex flex-col items-center opacity-40"
            animate={{ opacity: [0.4, 0.4, 1, 0.4] }}
            transition={{ duration: 6, times: [0, 0.25, 0.5, 1], repeat: Infinity }}
        >
            <div className="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 p-2 rounded-lg shadow-xl mb-2 w-24">
                <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded mb-2 w-1/2"></div>
                <div className="space-y-1">
                    <div className="h-6 bg-orange-100 dark:bg-orange-900/20 rounded flex items-center px-1">
                        <div className="w-4 h-4 bg-orange-500 rounded-full mr-1"></div>
                    </div>
                    <div className="h-6 bg-slate-100 dark:bg-slate-700 rounded"></div>
                </div>
            </div>
            <span className="text-xs text-slate-500">2. Select Wallet</span>
        </motion.div>

        {/* State 3: Connected */}
        <motion.div 
            className="flex flex-col items-center opacity-40"
            animate={{ opacity: [0.4, 0.4, 0.4, 1] }}
            transition={{ duration: 6, times: [0, 0.5, 0.75, 1], repeat: Infinity }}
        >
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-lg font-mono text-sm shadow-sm mb-2 flex items-center gap-2 text-green-600 dark:text-green-400">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                0x12...4F
            </div>
            <span className="text-xs text-slate-500">3. Active Session</span>
        </motion.div>
      </div>

      <div className="mt-8 bg-blue-50 dark:bg-blue-900/10 p-3 rounded border border-blue-100 dark:border-blue-900/30 text-xs text-blue-800 dark:text-blue-300 text-center">
        RainbowKit handles UI states • wagmi handles session logic
      </div>
    </div>
  );
};

export default WalletConnectionVisualizer;

