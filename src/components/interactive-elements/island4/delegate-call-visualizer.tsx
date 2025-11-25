import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Code, Database, ArrowRight } from 'lucide-react';

const DelegateCallVisualizer = () => {
  return (
    <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 my-8">
      <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
        <Layers className="w-5 h-5 text-purple-500" />
        DelegateCall: Separation of State & Logic
      </h3>

      <div className="grid grid-cols-2 gap-8 relative">
        {/* Proxy Contract (Storage) */}
        <div className="relative z-10">
          <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-4 border-2 border-purple-500 h-64 flex flex-col shadow-lg">
            <div className="flex items-center gap-2 mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">
              <Database className="w-4 h-4 text-purple-500" />
              <span className="font-semibold text-sm">Proxy (Storage)</span>
            </div>
            
            <div className="space-y-2 flex-1">
              <div className="bg-white dark:bg-slate-900 p-2 rounded text-xs font-mono flex justify-between items-center">
                <span>owner:</span>
                <span className="text-slate-500">0x123...</span>
              </div>
              <div className="bg-white dark:bg-slate-900 p-2 rounded text-xs font-mono flex justify-between items-center">
                <span>balance:</span>
                <motion.span 
                  animate={{ color: ["#64748b", "#22c55e", "#64748b"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  1000 ETH
                </motion.span>
              </div>
              <div className="bg-white dark:bg-slate-900 p-2 rounded text-xs font-mono flex justify-between items-center">
                <span>impl:</span>
                <span className="text-blue-500">0x999...</span>
              </div>
              
              {/* Execution Context Highlight */}
              <motion.div 
                className="mt-4 bg-purple-500/10 border border-purple-500/30 rounded p-2 text-center"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-xs font-bold text-purple-600 dark:text-purple-300">
                  Active Context
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Implementation Contract (Logic) */}
        <div className="relative z-10">
          <div className="bg-slate-50 dark:bg-slate-950 rounded-xl p-4 border border-slate-200 dark:border-slate-800 h-64 flex flex-col opacity-80">
            <div className="flex items-center gap-2 mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">
              <Code className="w-4 h-4 text-blue-500" />
              <span className="font-semibold text-sm">Implementation (Logic)</span>
            </div>
            
            <div className="space-y-2 font-mono text-xs text-slate-500 dark:text-slate-400">
              <p>function transfer(to, amt) &#123;</p>
              <p className="pl-4 text-blue-600 dark:text-blue-400">
                 {/* Runs in Proxy context */}
              </p>
              <motion.div 
                className="pl-4 bg-blue-100 dark:bg-blue-900/30 rounded px-1"
                animate={{ x: [-5, 0, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                balances[msg.sender] -= amt;
              </motion.div>
              <p className="pl-4">emit Transfer(...);</p>
              <p>&#125;</p>
            </div>
          </div>
        </div>

        {/* Flow Arrow */}
        <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
            animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 1, 0.2]
            }}
            transition={{ duration: 3, repeat: Infinity }}
        >
            <div className="flex flex-col items-center">
                <span className="text-[10px] uppercase font-bold tracking-wider text-purple-500 mb-1">DelegateCall</span>
                <ArrowRight className="w-8 h-8 text-purple-500" />
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DelegateCallVisualizer;

