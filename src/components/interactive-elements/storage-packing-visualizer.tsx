import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Zap, AlertTriangle, CheckCircle } from 'lucide-react';

const StoragePackingVisualizer = () => {
  const [isPacked, setIsPacked] = useState(false);

  // Gas costs (approximate)
  const SLOAD_COLD = 2100;
  const SLOAD_WARM = 100;
  const SSTORE_SET = 20000;
  const SSTORE_RESET = 5000;

  const unpackedStats = {
    slots: 3,
    readGas: SLOAD_COLD + (SLOAD_WARM * 2), // Assuming 3 separate accesses, usually 1 cold + 2 warm if contiguous but technically 3 instructions
    writeGas: SSTORE_SET * 3,
  };

  const packedStats = {
    slots: 1,
    readGas: SLOAD_COLD,
    writeGas: SSTORE_SET,
  };

  const stats = isPacked ? packedStats : unpackedStats;

  return (
    <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-sans my-8 shadow-sm">
      <div className="flex items-center justify-between mb-6 border-b border-slate-200 dark:border-slate-700 pb-4">
        <div className="flex items-center gap-2">
          <Box className="w-6 h-6 text-orange-500 dark:text-orange-400" />
          <h3 className="text-lg font-semibold">Storage Packing Simulator</h3>
        </div>
        <div className="flex bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
          <button
            onClick={() => setIsPacked(false)}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
              !isPacked 
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow' 
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
            }`}
          >
            Unpacked
          </button>
          <button
            onClick={() => setIsPacked(true)}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
              isPacked 
                ? 'bg-green-600 text-white shadow' 
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
            }`}
          >
            Packed
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Visual Representation */}
        <div className="lg:col-span-2 space-y-4">
          <div className="text-sm text-slate-500 dark:text-slate-400 mb-2 flex justify-between">
            <span>Storage Layout (256-bit slots)</span>
            <span className={isPacked ? "text-green-600 dark:text-green-400" : "text-orange-600 dark:text-orange-400"}>
              {isPacked ? "Optimized (1 Slot)" : "Inefficient (3 Slots)"}
            </span>
          </div>

          <div className="space-y-3 min-h-[200px]">
            {isPacked ? (
              // PACKED LAYOUT
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative h-16 bg-slate-100 dark:bg-slate-800 rounded border border-slate-300 dark:border-slate-600 flex overflow-hidden"
              >
                <div className="absolute -top-6 left-0 text-xs text-slate-500">Slot 0</div>
                
                {/* uint128 */}
                <div className="h-full w-[50%] bg-blue-500/20 border-r border-blue-500/50 flex items-center justify-center relative group">
                  <span className="text-xs font-mono text-blue-700 dark:text-blue-200">uint128 amount</span>
                  <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                {/* uint64 */}
                <div className="h-full w-[25%] bg-purple-500/20 border-r border-purple-500/50 flex items-center justify-center relative group">
                  <span className="text-xs font-mono text-purple-700 dark:text-purple-200">uint64 last</span>
                  <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                {/* uint64 */}
                <div className="h-full w-[25%] bg-orange-500/20 flex items-center justify-center relative group">
                  <span className="text-xs font-mono text-orange-700 dark:text-orange-200">uint64 flags</span>
                  <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ) : (
              // UNPACKED LAYOUT
              <>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="relative h-16 bg-slate-100 dark:bg-slate-800 rounded border border-slate-300 dark:border-slate-600 flex overflow-hidden"
                >
                  <div className="absolute -top-6 left-0 text-xs text-slate-500">Slot 0</div>
                  <div className="h-full w-full bg-blue-500/20 flex items-center justify-center">
                    <span className="text-xs font-mono text-blue-700 dark:text-blue-200">uint256 amount</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="relative h-16 bg-slate-100 dark:bg-slate-800 rounded border border-slate-300 dark:border-slate-600 flex overflow-hidden"
                >
                  <div className="absolute -top-6 left-0 text-xs text-slate-500">Slot 1</div>
                  <div className="h-full w-full bg-purple-500/20 flex items-center justify-center">
                    <span className="text-xs font-mono text-purple-700 dark:text-purple-200">uint256 lastAccruedAt</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="relative h-16 bg-slate-100 dark:bg-slate-800 rounded border border-slate-300 dark:border-slate-600 flex overflow-hidden"
                >
                  <div className="absolute -top-6 left-0 text-xs text-slate-500">Slot 2</div>
                  <div className="h-full w-full bg-orange-500/20 flex items-center justify-center">
                    <span className="text-xs font-mono text-orange-700 dark:text-orange-200">uint256 flags</span>
                  </div>
                </motion.div>
              </>
            )}
          </div>
        </div>

        {/* Stats Panel */}
        <div className="bg-slate-50 dark:bg-slate-950 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4 flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-500 dark:text-yellow-400" />
            Gas Impact
          </h4>
          
          <div className="space-y-4">
            <div>
              <div className="text-xs text-slate-500 mb-1">Cold Read (SLOAD)</div>
              <div className="flex items-end gap-2">
                <span className={`text-xl font-mono font-bold ${isPacked ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {stats.readGas.toLocaleString()}
                </span>
                <span className="text-xs text-slate-500 mb-1">gas</span>
              </div>
              {isPacked && <div className="text-[10px] text-green-600 dark:text-green-500 mt-1">1 SLOAD vs 3 SLOADs</div>}
            </div>

            <div>
              <div className="text-xs text-slate-500 mb-1">First Write (SSTORE)</div>
              <div className="flex items-end gap-2">
                <span className={`text-xl font-mono font-bold ${isPacked ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {stats.writeGas.toLocaleString()}
                </span>
                <span className="text-xs text-slate-500 mb-1">gas</span>
              </div>
              {isPacked && <div className="text-[10px] text-green-600 dark:text-green-500 mt-1">1 SSTORE vs 3 SSTOREs</div>}
            </div>

            <div className={`mt-4 p-3 rounded-lg border text-xs ${
              isPacked 
                ? 'bg-green-100 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-300' 
                : 'bg-red-100 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-300'
            }`}>
              <div className="flex items-start gap-2">
                {isPacked ? <CheckCircle className="w-4 h-4 shrink-0" /> : <AlertTriangle className="w-4 h-4 shrink-0" />}
                <p>
                  {isPacked 
                    ? "Excellent! Reading the whole struct costs 1 SLOAD. Updating all fields costs 1 SSTORE."
                    : "Warning: Each field lives in its own slot. Reading/writing the full struct is 3x more expensive."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoragePackingVisualizer;
