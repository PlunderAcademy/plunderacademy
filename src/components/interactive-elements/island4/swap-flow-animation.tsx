import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, RefreshCw, CheckCircle, Coins } from 'lucide-react';

const SwapFlowAnimation = () => {
  return (
    <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 my-8">
      <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
        <RefreshCw className="w-5 h-5 text-blue-500" />
        Swap Execution Flow
      </h3>
      
      <div className="relative h-64 flex items-center justify-between px-4 overflow-hidden">
        {/* User */}
        <div className="flex flex-col items-center z-10">
          <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center border-2 border-slate-300 dark:border-slate-600">
            <span className="text-2xl">👤</span>
          </div>
          <span className="mt-2 text-sm font-medium">User</span>
        </div>

        {/* Router Contract */}
        <div className="flex flex-col items-center z-10">
          <div className="w-24 h-24 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex flex-col items-center justify-center border-2 border-blue-200 dark:border-blue-800">
            <span className="text-xs font-mono text-blue-600 dark:text-blue-400 mb-1">SwapRouter</span>
            <div className="space-y-1 w-full px-2">
              <div className="h-1 bg-blue-200 dark:bg-blue-700 rounded w-full"></div>
              <div className="h-1 bg-blue-200 dark:bg-blue-700 rounded w-3/4"></div>
            </div>
          </div>
          <span className="mt-2 text-sm font-medium">Router</span>
        </div>

        {/* Pool Contract */}
        <div className="flex flex-col items-center z-10">
          <div className="w-24 h-24 bg-purple-50 dark:bg-purple-900/20 rounded-lg flex flex-col items-center justify-center border-2 border-purple-200 dark:border-purple-800">
            <span className="text-xs font-mono text-purple-600 dark:text-purple-400 mb-1">LiquidityPool</span>
            <div className="flex gap-1 mt-2">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <div className="w-3 h-3 rounded-full bg-orange-400"></div>
            </div>
          </div>
          <span className="mt-2 text-sm font-medium">Pool</span>
        </div>

        {/* Token A Animation */}
        <motion.div
          className="absolute top-1/3 left-[10%] z-20 bg-green-500 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1 shadow-lg"
          animate={{
            x: ["0%", "180%", "360%"],
            opacity: [0, 1, 0],
            scale: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            times: [0, 0.5, 1],
            ease: "linear"
          }}
        >
          <Coins className="w-3 h-3" /> Token A
        </motion.div>

        {/* Token B Animation (Return) */}
        <motion.div
          className="absolute bottom-1/3 left-[10%] z-20 bg-orange-500 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1 shadow-lg"
          initial={{ x: "360%" }}
          animate={{
            x: ["360%", "180%", "0%"],
            opacity: [0, 1, 0],
            scale: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            times: [0, 0.5, 1],
            ease: "linear",
            delay: 2 // Start after Token A arrives
          }}
        >
          <Coins className="w-3 h-3" /> Token B
        </motion.div>

        {/* Steps Indicator */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-8 text-xs text-slate-500">
          <motion.span
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
          >
            1. Transfer In
          </motion.span>
          <motion.span
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 2 }}
          >
            2. Swap & Out
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default SwapFlowAnimation;

