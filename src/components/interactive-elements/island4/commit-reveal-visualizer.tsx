import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Eye, Timer, Dice5 } from 'lucide-react';

const CommitRevealVisualizer = () => {
  return (
    <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 my-8">
      <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
        <Dice5 className="w-5 h-5 text-pink-500" />
        Commit-Reveal Randomness
      </h3>

      <div className="relative pt-8 pb-4">
        {/* Timeline Line */}
        <div className="absolute top-16 left-0 right-0 h-1 bg-slate-200 dark:bg-slate-800"></div>

        <div className="grid grid-cols-3 gap-4 relative z-10">
          {/* Phase 1: Commit */}
          <div className="flex flex-col items-center">
            <motion.div 
              className="w-12 h-12 bg-white dark:bg-slate-900 rounded-full border-2 border-blue-500 flex items-center justify-center shadow-lg mb-4"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Lock className="w-5 h-5 text-blue-500" />
            </motion.div>
            <h4 className="font-bold text-sm">1. Commit</h4>
            <p className="text-xs text-center text-slate-500 mt-1">Submit Hash(Value + Salt)</p>
            <motion.div 
                className="mt-2 px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-mono"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                0x8a7...3f1
            </motion.div>
          </div>

          {/* Phase 2: Wait */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-full border-2 border-slate-300 dark:border-slate-600 flex items-center justify-center shadow mb-4">
              <Timer className="w-5 h-5 text-slate-400" />
            </div>
            <h4 className="font-bold text-sm text-slate-600 dark:text-slate-400">2. Wait</h4>
            <p className="text-xs text-center text-slate-500 mt-1">Wait for blocks to confirm</p>
             <motion.div 
                className="flex gap-1 mt-3"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
            </motion.div>
          </div>

          {/* Phase 3: Reveal */}
          <div className="flex flex-col items-center">
            <motion.div 
              className="w-12 h-12 bg-white dark:bg-slate-900 rounded-full border-2 border-green-500 flex items-center justify-center shadow-lg mb-4"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 180 }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            >
              <Eye className="w-5 h-5 text-green-500" />
            </motion.div>
            <h4 className="font-bold text-sm">3. Reveal</h4>
            <p className="text-xs text-center text-slate-500 mt-1">Send Value + Salt</p>
            <motion.div 
                className="mt-2 px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded text-[10px] font-mono"
                animate={{ scale: [0.9, 1, 0.9] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                Value: 42
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommitRevealVisualizer;

