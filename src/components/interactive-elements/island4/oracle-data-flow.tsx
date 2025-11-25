import React from 'react';
import { motion } from 'framer-motion';
import { Database, ArrowRight, ShieldCheck, AlertTriangle } from 'lucide-react';

const OracleDataFlow = () => {
  return (
    <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 my-8">
      <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
        <Database className="w-5 h-5 text-blue-500" />
        Secure Oracle Integration
      </h3>

      <div className="relative flex flex-col gap-8">
        {/* Top Layer: Off-chain Data */}
        <div className="flex justify-between items-center px-8">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
            >
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center border border-slate-300 dark:border-slate-600 shadow-sm">
                <span className="text-xl">📡</span>
              </div>
              <span className="text-xs mt-1 text-slate-500">Node {i}</span>
            </motion.div>
          ))}
        </div>

        {/* Middle Layer: Aggregation & Validation */}
        <div className="flex justify-center relative h-32">
            {/* Data Particles */}
            {[1, 2, 3].map((i) => (
            <motion.div
                key={i}
                className="absolute top-0 w-2 h-2 bg-blue-500 rounded-full"
                style={{ left: `${20 + i * 25}%` }}
                animate={{ 
                top: ["0%", "50%", "100%"],
                left: [`${20 + i * 25}%`, "50%", "50%"],
                opacity: [1, 1, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            ))}

            <div className="absolute top-1/2 -translate-y-1/2 z-10 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-lg border border-blue-200 dark:border-blue-800 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-green-500" />
            <div className="text-sm font-mono text-blue-700 dark:text-blue-300">
                Aggregation
            </div>
            </div>
        </div>

        {/* Bottom Layer: On-Chain Consumer */}
        <div className="flex justify-center">
          <div className="w-full max-w-md bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 p-4">
            <div className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">Your Contract</div>
            <div className="space-y-2">
              <motion.div 
                className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, times: [0, 0.1, 0.9, 1] }}
              >
                <CheckCircle size={14} /> Validating Freshness (timestamp)
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 4, delay: 1, repeat: Infinity, times: [0, 0.1, 0.9, 1] }}
              >
                <CheckCircle size={14} /> Checking Deviation
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 text-sm font-mono bg-white dark:bg-slate-900 p-2 rounded border border-slate-200 dark:border-slate-700"
                initial={{ scale: 0.95 }}
                animate={{ scale: [0.95, 1.02, 0.95] }}
                transition={{ duration: 4, delay: 2, repeat: Infinity }}
              >
                 Price: $2,450.50
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function CheckCircle({ size }: { size: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
    )
}

export default OracleDataFlow;

