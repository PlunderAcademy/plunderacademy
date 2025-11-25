import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle, CheckCircle, ArrowRight, GitBranch } from 'lucide-react';

const RevertVisualizer = () => {
  const [amount, setAmount] = useState(100);
  const [balance, setBalance] = useState(50);
  const [paused, setPaused] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'revert'>('idle');
  const [error, setError] = useState<string | null>(null);

  const attemptWithdraw = () => {
    setStatus('idle');
    setError(null);

    // Simulate execution steps with delays
    setTimeout(() => {
      // Guard 1: Amount > 0
      if (amount <= 0) {
        setStatus('revert');
        setError('ZeroAmount()');
        return;
      }

      setTimeout(() => {
        // Guard 2: Paused
        if (paused) {
          setStatus('revert');
          setError('ContractPaused()');
          return;
        }

        setTimeout(() => {
          // Guard 3: Balance
          if (balance < amount) {
            setStatus('revert');
            setError(`InsufficientBalance(${amount}, ${balance})`);
            return;
          }

          // Success
          setStatus('success');
        }, 600);
      }, 600);
    }, 600);
  };

  return (
    <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-sans my-8 shadow-sm">
      <div className="flex items-center gap-2 mb-6 border-b border-slate-200 dark:border-slate-700 pb-4">
        <GitBranch className="w-6 h-6 text-blue-500 dark:text-blue-400" />
        <h3 className="text-lg font-semibold">Guard Clause Simulator</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Withdraw Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded px-3 py-2 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">User Balance</label>
              <input
                type="number"
                value={balance}
                onChange={(e) => setBalance(Number(e.target.value))}
                className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded px-3 py-2 text-slate-900 dark:text-white"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="paused"
                checked={paused}
                onChange={(e) => setPaused(e.target.checked)}
                className="w-4 h-4 rounded bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600"
              />
              <label htmlFor="paused" className="text-sm font-medium text-slate-500 dark:text-slate-400">Contract Paused</label>
            </div>
          </div>

          <button
            onClick={attemptWithdraw}
            className="w-full py-2 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition-colors text-white"
          >
            Attempt Withdraw
          </button>
        </div>

        {/* Visualization */}
        <div className="bg-slate-50 dark:bg-slate-950 rounded-xl p-6 border border-slate-200 dark:border-slate-800 relative min-h-[200px] flex flex-col items-center justify-center">
          <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-800" />
          
          <div className="space-y-4 w-full pl-8">
            {/* Guard 1 */}
            <motion.div 
              className={`flex items-center gap-3 p-2 rounded border ${
                error === 'ZeroAmount()' 
                  ? 'bg-red-100 dark:bg-red-900/20 border-red-500' 
                  : 'border-slate-200 dark:border-slate-800'
              }`}
              animate={{ opacity: status === 'idle' ? 0.5 : 1 }}
            >
              <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600" />
              <span className="text-sm font-mono text-slate-700 dark:text-slate-300">if (amount == 0) revert ZeroAmount();</span>
              {error === 'ZeroAmount()' && <XCircle className="w-4 h-4 text-red-500 ml-auto" />}
            </motion.div>

            {/* Guard 2 */}
            <motion.div 
              className={`flex items-center gap-3 p-2 rounded border ${
                error === 'ContractPaused()' 
                  ? 'bg-red-100 dark:bg-red-900/20 border-red-500' 
                  : 'border-slate-200 dark:border-slate-800'
              }`}
              animate={{ opacity: status === 'idle' ? 0.5 : 1 }}
            >
              <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600" />
              <span className="text-sm font-mono text-slate-700 dark:text-slate-300">if (paused) revert ContractPaused();</span>
              {error === 'ContractPaused()' && <XCircle className="w-4 h-4 text-red-500 ml-auto" />}
            </motion.div>

            {/* Guard 3 */}
            <motion.div 
              className={`flex items-center gap-3 p-2 rounded border ${
                error && error.startsWith('InsufficientBalance') 
                  ? 'bg-red-100 dark:bg-red-900/20 border-red-500' 
                  : 'border-slate-200 dark:border-slate-800'
              }`}
              animate={{ opacity: status === 'idle' ? 0.5 : 1 }}
            >
              <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600" />
              <span className="text-sm font-mono text-slate-700 dark:text-slate-300">if (bal &lt; amt) revert InsufficientBalance(...);</span>
              {error && error.startsWith('InsufficientBalance') && <XCircle className="w-4 h-4 text-red-500 ml-auto" />}
            </motion.div>

            {/* Success State */}
            {status === 'success' && (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mt-4 p-3 bg-green-100 dark:bg-green-900/20 border border-green-500 rounded-lg flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span className="text-green-800 dark:text-green-100 font-semibold">Transaction Succeeded!</span>
              </motion.div>
            )}

            {/* Revert State */}
            {status === 'revert' && (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mt-4 p-3 bg-red-100 dark:bg-red-900/20 border border-red-500 rounded-lg flex items-center gap-3"
              >
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                <div className="flex flex-col">
                  <span className="text-red-800 dark:text-red-100 font-semibold">Transaction Reverted</span>
                  <span className="text-xs text-red-600 dark:text-red-300 font-mono">{error}</span>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevertVisualizer;
