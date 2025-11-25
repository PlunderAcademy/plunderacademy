import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, Server } from 'lucide-react';

const StorageCollisionVisualizer = () => {
  const [scenario, setScenario] = useState<'bad' | 'good'>('bad');

  return (
    <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 my-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Server className="w-5 h-5 text-orange-500" />
          Storage Collision Simulator
        </h3>
        <div className="flex bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
          <button
            onClick={() => setScenario('bad')}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
              scenario === 'bad' ? 'bg-white dark:bg-slate-700 shadow' : 'text-slate-500'
            }`}
          >
            Unsafe Upgrade
          </button>
          <button
            onClick={() => setScenario('good')}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
              scenario === 'good' ? 'bg-white dark:bg-slate-700 shadow' : 'text-slate-500'
            }`}
          >
            Safe Upgrade
          </button>
        </div>
      </div>

      <div className="flex gap-8 items-start">
        {/* V1 Storage */}
        <div className="flex-1">
          <h4 className="text-xs uppercase font-bold text-slate-500 mb-2">Version 1 Layout</h4>
          <div className="space-y-2">
            <Slot index={0} name="owner" type="address" value="0xAb5...890" color="blue" />
            <Slot index={1} name="supply" type="uint256" value="1,000,000" color="green" />
            <Slot index={2} name="balances" type="mapping" value="{...}" color="purple" />
          </div>
        </div>

        {/* Arrow */}
        <div className="self-center text-slate-300">
            ➔
        </div>

        {/* V2 Storage */}
        <div className="flex-1">
          <h4 className="text-xs uppercase font-bold text-slate-500 mb-2">Version 2 Layout</h4>
          <div className="space-y-2 relative">
            {scenario === 'bad' ? (
              <>
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="border-2 border-red-500 rounded-lg overflow-hidden"
                >
                    <div className="bg-red-500/10 p-2 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                        <div className="text-xs font-mono">
                            <span className="text-red-600 font-bold">paused (bool)</span>
                            <span className="block text-[10px] text-slate-500">Reads slot 0 (was owner!)</span>
                        </div>
                    </div>
                </motion.div>
                <div className="opacity-50">
                    <Slot index={1} name="owner" type="address" value="???" color="blue" isMoved />
                </div>
                <div className="opacity-50">
                     <Slot index={2} name="supply" type="uint256" value="???" color="green" isMoved />
                </div>
              </>
            ) : (
               <>
                <Slot index={0} name="owner" type="address" value="0xAb5...890" color="blue" />
                <Slot index={1} name="supply" type="uint256" value="1,000,000" color="green" />
                <Slot index={2} name="balances" type="mapping" value="{...}" color="purple" />
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-4"
                >
                    <Slot index={3} name="paused" type="bool" value="false" color="orange" isNew />
                </motion.div>
               </>
            )}
          </div>
        </div>
      </div>
      
      <div className={`mt-6 p-3 rounded-lg text-xs flex gap-2 ${
          scenario === 'bad' 
            ? 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300' 
            : 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300'
      }`}>
        {scenario === 'bad' 
            ? <AlertTriangle className="w-4 h-4 shrink-0" /> 
            : <CheckCircle className="w-4 h-4 shrink-0" />}
        <p>
            {scenario === 'bad' 
                ? "CRITICAL: Adding 'paused' at the top pushed 'owner' to slot 1. The contract now interprets the owner address as a boolean!" 
                : "SAFE: New variable 'paused' was appended to the end. Existing storage slots remain mapped correctly."}
        </p>
      </div>
    </div>
  );
};

const Slot = ({ index, name, type, value, color, isNew }: { index: number; name: string; type: string; value: string; color: string; isMoved?: boolean; isNew?: boolean }) => (
    <div className={`flex items-center gap-2 p-2 rounded border ${
        isNew ? 'border-green-400 bg-green-50 dark:bg-green-900/10' : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800'
    }`}>
        <div className="w-6 h-6 rounded bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-500">
            {index}
        </div>
        <div className="flex-1">
            <div className="flex justify-between">
                <span className={`text-xs font-mono font-bold text-${color}-600 dark:text-${color}-400`}>
                    {name}
                </span>
                <span className="text-[10px] text-slate-400">{type}</span>
            </div>
            <div className="text-xs font-mono text-slate-600 dark:text-slate-300 truncate">
                {value}
            </div>
        </div>
    </div>
);

export default StorageCollisionVisualizer;

