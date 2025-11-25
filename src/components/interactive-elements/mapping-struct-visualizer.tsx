import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, ArrowRight, Box, Layers, Search } from 'lucide-react';

const MappingStructVisualizer = () => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [selectedPool, setSelectedPool] = useState<number | null>(null);
  const [step, setStep] = useState(0); // 0: idle, 1: user lookup, 2: pool lookup, 3: struct found

  const users = ['0xAlice...', '0xBob...', '0xCarol...'];
  const pools = [1, 2, 3];

  const positions: Record<string, Record<number, { amount: number; last: number; flags: number }>> = {
    '0xAlice...': {
      1: { amount: 200, last: 1699000000, flags: 1 },
      2: { amount: 500, last: 1700000000, flags: 0 },
    },
    '0xBob...': {
      1: { amount: 1000, last: 1699500000, flags: 2 },
    },
    '0xCarol...': {
      3: { amount: 50, last: 1701000000, flags: 1 },
    },
  };

  useEffect(() => {
    if (selectedUser && selectedPool) {
      setStep(0);
      const timer1 = setTimeout(() => setStep(1), 100);
      const timer2 = setTimeout(() => setStep(2), 800);
      const timer3 = setTimeout(() => setStep(3), 1600);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    } else {
      setStep(0);
    }
  }, [selectedUser, selectedPool]);

  const currentPosition = selectedUser && selectedPool ? positions[selectedUser]?.[selectedPool] : null;

  return (
    <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-sans my-8 shadow-sm">
      <div className="flex items-center gap-2 mb-6 border-b border-slate-200 dark:border-slate-700 pb-4">
        <Database className="w-6 h-6 text-blue-500 dark:text-blue-400" />
        <h3 className="text-lg font-semibold">Nested Mapping Visualizer</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">1. Select User (Key 1)</label>
            <div className="flex gap-2">
              {users.map((user) => (
                <button
                  key={user}
                  onClick={() => {
                    setSelectedUser(user);
                    setSelectedPool(null);
                  }}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                    selectedUser === user
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {user}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">2. Select Pool ID (Key 2)</label>
            <div className="flex gap-2">
              {pools.map((pool) => (
                <button
                  key={pool}
                  onClick={() => setSelectedPool(pool)}
                  disabled={!selectedUser}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                    selectedPool === pool
                      ? 'bg-purple-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-50'
                  }`}
                >
                  Pool {pool}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <code className="text-xs text-green-600 dark:text-green-400 block mb-2">{/* Solidity Structure */}</code>
            <code className="text-sm text-slate-700 dark:text-slate-300">
              mapping(address =&gt; mapping(uint256 =&gt; Position)) public positions;
            </code>
          </div>
        </div>

        {/* Visualization */}
        <div className="relative bg-slate-50 dark:bg-slate-950 rounded-xl p-6 border border-slate-200 dark:border-slate-800 min-h-[300px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-slate-400 dark:text-slate-500 flex flex-col items-center"
              >
                <Search className="w-12 h-12 mb-2 opacity-50" />
                <p>Select a User and Pool to lookup</p>
              </motion.div>
            )}

            {step >= 1 && (
              <div className="w-full space-y-4">
                {/* Outer Mapping Step */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className={`p-3 rounded-lg border ${
                    step === 1 
                      ? 'bg-blue-100/50 dark:bg-blue-900/30 border-blue-300 dark:border-blue-500' 
                      : 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-700 opacity-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 dark:text-slate-400">Outer Mapping (Address)</span>
                    {step === 1 && <motion.span layoutId="active-indicator" className="w-2 h-2 bg-blue-500 rounded-full" />}
                  </div>
                  <div className="font-mono text-sm mt-1 text-blue-700 dark:text-blue-200">{selectedUser}</div>
                </motion.div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 20, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <ArrowRight className="w-5 h-5 text-slate-400 dark:text-slate-600 rotate-90" />
                  </motion.div>
                </div>

                {/* Inner Mapping Step */}
                {step >= 2 && (
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className={`p-3 rounded-lg border ${
                      step === 2 
                        ? 'bg-purple-100/50 dark:bg-purple-900/30 border-purple-300 dark:border-purple-500' 
                        : 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-700 opacity-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500 dark:text-slate-400">Inner Mapping (Pool ID)</span>
                      {step === 2 && <motion.span layoutId="active-indicator" className="w-2 h-2 bg-purple-500 rounded-full" />}
                    </div>
                    <div className="font-mono text-sm mt-1 text-purple-700 dark:text-purple-200">Pool {selectedPool}</div>
                  </motion.div>
                )}

                 {/* Arrow */}
                 {step >= 2 && (
                  <div className="flex justify-center">
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 20, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <ArrowRight className="w-5 h-5 text-slate-400 dark:text-slate-600 rotate-90" />
                    </motion.div>
                  </div>
                )}

                {/* Result Step */}
                {step >= 3 && (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white dark:bg-slate-800 border border-green-500/50 rounded-lg p-4 shadow-lg shadow-green-900/5 dark:shadow-green-900/20"
                  >
                    <div className="flex items-center gap-2 mb-3 border-b border-slate-100 dark:border-slate-700 pb-2">
                      <Layers className="w-4 h-4 text-green-600 dark:text-green-400" />
                      <span className="text-sm font-semibold text-green-700 dark:text-green-100">Position Struct (Packed)</span>
                    </div>
                    
                    {currentPosition ? (
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="bg-slate-50 dark:bg-slate-900 p-2 rounded border border-slate-200 dark:border-slate-700">
                          <div className="text-[10px] text-slate-500 uppercase">Amount</div>
                          <div className="font-mono text-sm text-slate-700 dark:text-slate-200">{currentPosition.amount}</div>
                          <div className="text-[10px] text-blue-600 dark:text-blue-400">uint128</div>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-900 p-2 rounded border border-slate-200 dark:border-slate-700">
                          <div className="text-[10px] text-slate-500 uppercase">Last</div>
                          <div className="font-mono text-sm text-slate-700 dark:text-slate-200">{currentPosition.last}</div>
                          <div className="text-[10px] text-purple-600 dark:text-purple-400">uint64</div>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-900 p-2 rounded border border-slate-200 dark:border-slate-700">
                          <div className="text-[10px] text-slate-500 uppercase">Flags</div>
                          <div className="font-mono text-sm text-slate-700 dark:text-slate-200">{currentPosition.flags}</div>
                          <div className="text-[10px] text-orange-600 dark:text-orange-400">uint64</div>
                        </div>
                        <div className="col-span-3 mt-1 text-[10px] text-slate-400 dark:text-slate-500 flex justify-between px-1">
                          <span>Slot 0 [0..127]</span>
                          <span>[128..191]</span>
                          <span>[192..255]</span>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-4 text-slate-400 italic">
                        No position found (default value)
                        <div className="mt-2 font-mono text-xs text-slate-500 dark:text-slate-600">
                          &#123; amount: 0, last: 0, flags: 0 &#125;
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default MappingStructVisualizer;
