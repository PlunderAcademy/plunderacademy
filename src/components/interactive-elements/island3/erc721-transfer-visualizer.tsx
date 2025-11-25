import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, XCircle, Shield, User, FileText } from 'lucide-react';

const ERC721TransferVisualizer = () => {
  const [step, setStep] = useState(0);
  const [isApproved, setIsApproved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const reset = () => {
    setStep(0);
    setError(null);
  };

  const startTransfer = (approved: boolean) => {
    setIsApproved(approved);
    setStep(1);
    setError(null);
  };

  useEffect(() => {
    if (step === 1) {
      const timer = setTimeout(() => {
        if (isApproved) {
          setStep(2);
        } else {
          setError("Caller is not owner nor approved");
        }
      }, 1500);
      return () => clearTimeout(timer);
    }
    if (step === 2) {
      const timer = setTimeout(() => setStep(3), 1500);
      return () => clearTimeout(timer);
    }
    if (step === 3) {
      const timer = setTimeout(() => setStep(4), 1500);
      return () => clearTimeout(timer);
    }
    if (step === 4) {
      const timer = setTimeout(() => setStep(5), 1500); // Completion
      return () => clearTimeout(timer);
    }
  }, [step, isApproved]);

  return (
    <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-sans my-8 shadow-sm">
      <div className="flex items-center gap-2 mb-6 border-b border-slate-200 dark:border-slate-700 pb-4">
        <ArrowRight className="w-6 h-6 text-blue-500 dark:text-blue-400" />
        <h3 className="text-lg font-semibold">ERC721 Transfer Logic</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Controls */}
        <div className="space-y-4 md:col-span-1">
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold mb-2 text-sm">Scenario Setup</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              Simulate a <code>transferFrom</code> call.
            </p>
            
            <div className="space-y-2">
              <button
                onClick={() => startTransfer(true)}
                disabled={step > 0}
                className="w-full text-left px-3 py-2 rounded bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-sm hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors disabled:opacity-50"
              >
                ✅ Valid Transfer (Owner/Approved)
              </button>
              <button
                onClick={() => startTransfer(false)}
                disabled={step > 0}
                className="w-full text-left px-3 py-2 rounded bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 text-sm hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors disabled:opacity-50"
              >
                ❌ Invalid Transfer (Not Authorized)
              </button>
            </div>

            {step > 0 && (
               <button
               onClick={reset}
               className="mt-4 w-full px-3 py-2 rounded border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-400 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
             >
               Reset Simulation
             </button>
            )}
          </div>
        </div>

        {/* Visualization */}
        <div className="md:col-span-2 space-y-4">
          {/* Step 1: Authorization Check */}
          <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: step >= 1 ? 1 : 0.5, scale: step === 1 ? 1.02 : 1 }}
            className={`p-4 rounded-lg border transition-colors ${
              step === 1 
                ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800' 
                : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${step >= 1 ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' : 'bg-slate-200 dark:bg-slate-700 text-slate-400'}`}>
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">1. Check Authorization</h4>
                <code className="text-xs text-slate-500 dark:text-slate-400">require(_isApprovedOrOwner(msg.sender, tokenId))</code>
              </div>
              {step > 1 && !error && <CheckCircle className="ml-auto w-5 h-5 text-green-500" />}
              {error && <XCircle className="ml-auto w-5 h-5 text-red-500" />}
            </div>
            {error && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="mt-2 text-xs text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-2 rounded">
                Error: {error}
              </motion.div>
            )}
          </motion.div>

          {/* Step 2: Clear Approvals */}
          <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: step >= 2 ? 1 : 0.5, scale: step === 2 ? 1.02 : 1 }}
            className={`p-4 rounded-lg border transition-colors ${
              step === 2
                ? 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800' 
                : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${step >= 2 ? 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400' : 'bg-slate-200 dark:bg-slate-700 text-slate-400'}`}>
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">2. Clear Approvals</h4>
                <code className="text-xs text-slate-500 dark:text-slate-400">delete _tokenApprovals[tokenId]</code>
              </div>
              {step > 2 && <CheckCircle className="ml-auto w-5 h-5 text-green-500" />}
            </div>
          </motion.div>

          {/* Step 3: Update Balances & Owner */}
          <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: step >= 3 ? 1 : 0.5, scale: step === 3 ? 1.02 : 1 }}
            className={`p-4 rounded-lg border transition-colors ${
              step === 3
                ? 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800' 
                : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${step >= 3 ? 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400' : 'bg-slate-200 dark:bg-slate-700 text-slate-400'}`}>
                <User className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">3. Update State</h4>
                <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1">
                  <code>_balances[from] -= 1</code><br/>
                  <code>_balances[to] += 1</code><br/>
                  <code>_owners[tokenId] = to</code>
                </div>
              </div>
              {step > 3 && <CheckCircle className="ml-auto w-5 h-5 text-green-500" />}
            </div>
          </motion.div>

           {/* Step 4: Emit Event */}
           <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: step >= 4 ? 1 : 0.5, scale: step === 4 ? 1.02 : 1 }}
            className={`p-4 rounded-lg border transition-colors ${
              step === 4
                ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' 
                : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${step >= 4 ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400' : 'bg-slate-200 dark:bg-slate-700 text-slate-400'}`}>
                <ArrowRight className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">4. Emit Event</h4>
                <code className="text-xs text-slate-500 dark:text-slate-400">emit Transfer(from, to, tokenId)</code>
              </div>
              {step >= 5 && <CheckCircle className="ml-auto w-5 h-5 text-green-500" />}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ERC721TransferVisualizer;
