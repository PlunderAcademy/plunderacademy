import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, User, Shield, ShieldAlert, Key } from 'lucide-react';

const AccessControlVisualizer = () => {
  const [role, setRole] = useState<'owner' | 'user' | 'admin'>('user');
  const [status, setStatus] = useState<'idle' | 'success' | 'revert'>('idle');

  const attemptAccess = () => {
    setStatus('idle');
    setTimeout(() => {
      if (role === 'owner' || role === 'admin') {
        setStatus('success');
      } else {
        setStatus('revert');
      }
    }, 500);
  };

  return (
    <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-sans my-8 shadow-sm">
      <div className="flex items-center gap-2 mb-6 border-b border-slate-200 dark:border-slate-700 pb-4">
        <Shield className="w-6 h-6 text-blue-500 dark:text-blue-400" />
        <h3 className="text-lg font-semibold">Access Control: onlyOwner</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">1. Select Your Role</label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => { setRole('user'); setStatus('idle'); }}
                className={`p-3 rounded-lg border flex flex-col items-center gap-2 transition-all ${
                  role === 'user'
                    ? 'bg-slate-100 dark:bg-slate-800 border-slate-400 dark:border-slate-500 ring-2 ring-slate-400/20'
                    : 'bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900'
                }`}
              >
                <User className="w-6 h-6 text-slate-500" />
                <span className="text-xs font-medium">Regular User</span>
              </button>
              
              <button
                onClick={() => { setRole('owner'); setStatus('idle'); }}
                className={`p-3 rounded-lg border flex flex-col items-center gap-2 transition-all ${
                  role === 'owner'
                    ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-400 dark:border-yellow-500 ring-2 ring-yellow-400/20'
                    : 'bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 hover:bg-yellow-50/50 dark:hover:bg-yellow-900/10'
                }`}
              >
                <Key className="w-6 h-6 text-yellow-500" />
                <span className="text-xs font-medium">Owner</span>
              </button>

              <button
                onClick={() => { setRole('admin'); setStatus('idle'); }}
                className={`p-3 rounded-lg border flex flex-col items-center gap-2 transition-all ${
                  role === 'admin'
                    ? 'bg-purple-50 dark:bg-purple-900/20 border-purple-400 dark:border-purple-500 ring-2 ring-purple-400/20'
                    : 'bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 hover:bg-purple-50/50 dark:hover:bg-purple-900/10'
                }`}
              >
                <Shield className="w-6 h-6 text-purple-500" />
                <span className="text-xs font-medium">Admin</span>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">2. Action</label>
            <button
              onClick={attemptAccess}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              Call <code className="bg-blue-700 px-1 rounded">mint()</code> Function
            </button>
          </div>
        </div>

        {/* Visualization */}
        <div className="relative bg-slate-100 dark:bg-slate-950 rounded-xl p-8 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center min-h-[250px]">
          <div className="absolute top-4 left-4 font-mono text-xs text-slate-400">
            modifier onlyOwner() &#123;<br/>
            &nbsp;&nbsp;require(msg.sender == owner);<br/>
            &nbsp;&nbsp;_;<br/>
            &#125;
          </div>

          <AnimatePresence mode="wait">
            {status === 'idle' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center text-slate-400"
              >
                <Lock className="w-16 h-16 mb-4" />
                <p className="text-sm">Function is locked</p>
              </motion.div>
            )}

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="flex flex-col items-center text-green-500"
              >
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                  <Unlock className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold mb-1">Access Granted</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">Transaction executed successfully</p>
              </motion.div>
            )}

            {status === 'revert' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: [0, -10, 10, -10, 10, 0] }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center text-red-500"
              >
                <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4">
                  <ShieldAlert className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold mb-1">Access Denied</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-mono bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded mt-2">
                  Error: OwnableUnauthorizedAccount
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AccessControlVisualizer;
