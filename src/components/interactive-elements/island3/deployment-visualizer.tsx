import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileCode, Box, ArrowRight, CheckCircle, Server, Globe } from 'lucide-react';

const DeploymentVisualizer = () => {
  const [step, setStep] = useState(0); // 0: Idle, 1: Compile, 2: Deploy, 3: Confirm

  const startDeployment = () => {
    if (step > 0) return;
    setStep(1);
  };

  useEffect(() => {
    if (step === 1) {
      const timer = setTimeout(() => setStep(2), 2000);
      return () => clearTimeout(timer);
    }
    if (step === 2) {
      const timer = setTimeout(() => setStep(3), 2500);
      return () => clearTimeout(timer);
    }
    if (step === 3) {
      const timer = setTimeout(() => setStep(4), 1000); // Finished
      return () => clearTimeout(timer);
    }
  }, [step]);

  const reset = () => setStep(0);

  return (
    <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-sans my-8 shadow-sm">
      <div className="flex items-center gap-2 mb-6 border-b border-slate-200 dark:border-slate-700 pb-4">
        <Globe className="w-6 h-6 text-blue-500 dark:text-blue-400" />
        <h3 className="text-lg font-semibold">Contract Deployment Flow</h3>
      </div>

      <div className="flex flex-col items-center space-y-8">
        {/* Steps Visualization */}
        <div className="flex items-center justify-between w-full max-w-2xl relative">
           {/* Connecting Line */}
           <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 dark:bg-slate-800 -z-10" />
           <motion.div 
             className="absolute top-1/2 left-0 h-1 bg-blue-500 -z-10" 
             initial={{ width: '0%' }}
             animate={{ width: step >= 3 ? '100%' : step >= 2 ? '66%' : step >= 1 ? '33%' : '0%' }}
             transition={{ duration: 0.5 }}
           />

          {/* Step 1: Source */}
          <div className="flex flex-col items-center gap-2 bg-white dark:bg-slate-900 p-2">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors ${step >= 1 ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-600' : 'border-slate-300 dark:border-slate-600 text-slate-400'}`}>
              <FileCode className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Source Code</span>
          </div>

          {/* Step 2: Compile */}
          <div className="flex flex-col items-center gap-2 bg-white dark:bg-slate-900 p-2">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors ${step >= 2 ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-600' : 'border-slate-300 dark:border-slate-600 text-slate-400'}`}>
              <Box className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Bytecode</span>
          </div>

          {/* Step 3: Network */}
          <div className="flex flex-col items-center gap-2 bg-white dark:bg-slate-900 p-2">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors ${step >= 3 ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-600' : 'border-slate-300 dark:border-slate-600 text-slate-400'}`}>
              <Server className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Network</span>
          </div>

           {/* Step 4: Address */}
           <div className="flex flex-col items-center gap-2 bg-white dark:bg-slate-900 p-2">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors ${step >= 4 ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-600' : 'border-slate-300 dark:border-slate-600 text-slate-400'}`}>
              <CheckCircle className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Deployed</span>
          </div>
        </div>

        {/* Status & Action */}
        <div className="w-full max-w-md bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6 border border-slate-200 dark:border-slate-700 text-center">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="text-sm text-slate-500 mb-4">Ready to deploy contract to Zilliqa testnet</p>
                <button
                  onClick={startDeployment}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors flex items-center gap-2 mx-auto"
                >
                  Start Deployment <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center"
              >
                <div className="animate-spin w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full mb-2" />
                <p className="text-sm font-medium">Compiling Solidity...</p>
                <code className="text-xs text-slate-400 mt-1">solc --bin --abi Contract.sol</code>
              </motion.div>
            )}
             {step === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center"
              >
                <div className="animate-pulse w-6 h-6 bg-blue-500 rounded-full mb-2" />
                <p className="text-sm font-medium">Sending Transaction...</p>
                <code className="text-xs text-slate-400 mt-1">eth_sendTransaction(data=bytecode)</code>
              </motion.div>
            )}
             {step === 3 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center"
              >
                <div className="animate-spin w-6 h-6 border-2 border-green-500 border-t-transparent rounded-full mb-2" />
                <p className="text-sm font-medium">Confirming...</p>
                <code className="text-xs text-slate-400 mt-1">Waiting for block confirmation</code>
              </motion.div>
            )}
             {step === 4 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center"
              >
                <CheckCircle className="w-8 h-8 text-green-500 mb-2" />
                <p className="text-sm font-bold text-green-600 dark:text-green-400">Deployment Successful!</p>
                <code className="text-xs bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded mt-2 font-mono">
                  0x71C...9A23
                </code>
                <button
                  onClick={reset}
                  className="mt-4 text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 underline"
                >
                  Deploy Again
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default DeploymentVisualizer;
