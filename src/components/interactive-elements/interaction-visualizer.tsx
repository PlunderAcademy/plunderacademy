import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, AlertTriangle, ArrowRight, Lock, Unlock } from 'lucide-react';

const InteractionVisualizer = () => {
  const [mode, setMode] = useState<'unsafe' | 'safe'>('unsafe');
  const [step, setStep] = useState(0); // 0: idle, 1: check, 2: interact/effect, 3: effect/interact, 4: done

  const runSimulation = () => {
    setStep(0);
    setTimeout(() => setStep(1), 500);
    setTimeout(() => setStep(2), 1500);
    setTimeout(() => setStep(3), 2500);
    setTimeout(() => setStep(4), 3500);
  };

  return (
    <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-sans my-8 shadow-sm">
      <div className="flex items-center justify-between mb-6 border-b border-slate-200 dark:border-slate-700 pb-4">
        <div className="flex items-center gap-2">
          <Shield className={`w-6 h-6 ${mode === 'safe' ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`} />
          <h3 className="text-lg font-semibold">CEI & Reentrancy Visualizer</h3>
        </div>
        <div className="flex bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
          <button
            onClick={() => { setMode('unsafe'); setStep(0); }}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
              mode === 'unsafe' 
                ? 'bg-red-600 text-white shadow' 
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
            }`}
          >
            Unsafe (No CEI)
          </button>
          <button
            onClick={() => { setMode('safe'); setStep(0); }}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
              mode === 'safe' 
                ? 'bg-green-600 text-white shadow' 
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
            }`}
          >
            Safe (CEI + Guard)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Code View */}
        <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-xs border border-slate-200 dark:border-slate-800 overflow-hidden relative">
          <div className="absolute top-2 right-2">
            <button
                onClick={runSimulation}
                disabled={step > 0 && step < 4}
                className="px-3 py-1 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 rounded text-white text-xs font-sans"
            >
                {step > 0 && step < 4 ? 'Running...' : 'Simulate'}
            </button>
          </div>

          <div className="text-slate-500 dark:text-slate-500 mb-2">{/* */}{mode === 'safe' ? 'SafeWithdraw.sol' : 'UnsafeWithdraw.sol'}</div>
          
          <div className={`p-1 rounded ${step === 1 ? 'bg-blue-100 dark:bg-blue-900/30' : ''}`}>
            <span className="text-purple-600 dark:text-purple-400">function</span> withdraw(uint amount) public {mode === 'safe' && <span className="text-green-600 dark:text-green-400">nonReentrant</span>} &#123;
          </div>
          
          <div className={`pl-4 p-1 rounded ${step === 1 ? 'bg-blue-100 dark:bg-blue-900/30' : ''}`}>
            <span className="text-slate-500 dark:text-slate-400">{/* 1. Checks */}</span>
            <br/>
            require(balance[msg.sender] &gt;= amount);
          </div>

          {mode === 'unsafe' ? (
            <>
              <div className={`pl-4 p-1 rounded ${step === 2 ? 'bg-red-100 dark:bg-red-900/30' : ''}`}>
                <span className="text-slate-500 dark:text-slate-400">{/* 2. Interactions (DANGER!) */}</span>
                <br/>
                (bool success, ) = msg.sender.call&#123;value: amount&#125;(&quot;&quot;);
              </div>
              <div className={`pl-4 p-1 rounded ${step === 3 ? 'bg-blue-100 dark:bg-blue-900/30' : ''}`}>
                <span className="text-slate-500 dark:text-slate-400">{/* 3. Effects */}</span>
                <br/>
                balance[msg.sender] -= amount;
              </div>
            </>
          ) : (
            <>
              <div className={`pl-4 p-1 rounded ${step === 2 ? 'bg-blue-100 dark:bg-blue-900/30' : ''}`}>
                <span className="text-slate-500 dark:text-slate-400">{/* 2. Effects */}</span>
                <br/>
                balance[msg.sender] -= amount;
              </div>
              <div className={`pl-4 p-1 rounded ${step === 3 ? 'bg-blue-100 dark:bg-blue-900/30' : ''}`}>
                <span className="text-slate-500 dark:text-slate-400">{/* 3. Interactions */}</span>
                <br/>
                (bool success, ) = msg.sender.call&#123;value: amount&#125;(&quot;&quot;);
              </div>
            </>
          )}
          <div>&#125;</div>
        </div>

        {/* Visual Flow */}
        <div className="relative bg-slate-100 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 p-6 flex flex-col items-center justify-center min-h-[250px]">
            <AnimatePresence mode="wait">
                {step === 0 && (
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="text-slate-500 dark:text-slate-500 text-center"
                    >
                        Click &quot;Simulate&quot; to see the flow
                    </motion.div>
                )}

                {step === 1 && (
                    <motion.div
                        key="check"
                        initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}
                        className="bg-blue-100 dark:bg-blue-900/50 border border-blue-300 dark:border-blue-500 p-4 rounded-lg text-center"
                    >
                        <div className="text-blue-700 dark:text-blue-200 font-bold mb-1">1. Checks</div>
                        <div className="text-xs text-blue-600 dark:text-blue-300">Is balance sufficient?</div>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div
                        key="step2"
                        initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 50, opacity: 0 }}
                        className={`p-4 rounded-lg text-center border ${
                            mode === 'unsafe' 
                                ? 'bg-red-100 dark:bg-red-900/50 border-red-300 dark:border-red-500' 
                                : 'bg-green-100 dark:bg-green-900/50 border-green-300 dark:border-green-500'
                        }`}
                    >
                        <div className={`font-bold mb-1 ${mode === 'unsafe' ? 'text-red-700 dark:text-red-200' : 'text-green-700 dark:text-green-200'}`}>
                            {mode === 'unsafe' ? '2. Interaction (External Call)' : '2. Effects (State Update)'}
                        </div>
                        <div className={`text-xs ${mode === 'unsafe' ? 'text-red-600 dark:text-red-300' : 'text-green-600 dark:text-green-300'}`}>
                            {mode === 'unsafe' ? 'Sending ETH... (Attacker can re-enter!)' : 'Balance updated first.'}
                        </div>
                        {mode === 'unsafe' && (
                            <motion.div 
                                initial={{ scale: 0 }} animate={{ scale: 1 }} 
                                className="mt-2 flex items-center justify-center gap-1 text-red-600 dark:text-red-400 text-xs font-bold bg-red-200 dark:bg-black/30 p-1 rounded"
                            >
                                <AlertTriangle className="w-3 h-3" /> REENTRANCY RISK
                            </motion.div>
                        )}
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div
                        key="step3"
                        initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 50, opacity: 0 }}
                        className={`p-4 rounded-lg text-center border ${
                            mode === 'unsafe' 
                                ? 'bg-blue-100 dark:bg-blue-900/50 border-blue-300 dark:border-blue-500' 
                                : 'bg-purple-100 dark:bg-purple-900/50 border-purple-300 dark:border-purple-500'
                        }`}
                    >
                        <div className={`font-bold mb-1 ${mode === 'unsafe' ? 'text-blue-700 dark:text-blue-200' : 'text-purple-700 dark:text-purple-200'}`}>
                            {mode === 'unsafe' ? '3. Effects (Too Late!)' : '3. Interaction (Safe)'}
                        </div>
                        <div className={`text-xs ${mode === 'unsafe' ? 'text-blue-600 dark:text-blue-300' : 'text-purple-600 dark:text-purple-300'}`}>
                            {mode === 'unsafe' ? 'Balance updated after call returns.' : 'Sending ETH. Reentrancy blocked by state/guard.'}
                        </div>
                    </motion.div>
                )}

                {step === 4 && (
                    <motion.div
                        key="done"
                        initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                        className="flex flex-col items-center gap-2"
                    >
                        {mode === 'safe' ? (
                            <>
                                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-500/20 flex items-center justify-center border border-green-500">
                                    <Lock className="w-6 h-6 text-green-600 dark:text-green-400" />
                                </div>
                                <div className="text-green-600 dark:text-green-400 font-bold">Safe Execution</div>
                            </>
                        ) : (
                            <>
                                <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-500/20 flex items-center justify-center border border-red-500">
                                    <Unlock className="w-6 h-6 text-red-600 dark:text-red-400" />
                                </div>
                                <div className="text-red-600 dark:text-red-400 font-bold">Vulnerable!</div>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default InteractionVisualizer;
