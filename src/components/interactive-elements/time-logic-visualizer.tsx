import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Coins, AlertTriangle } from 'lucide-react';

const TimeLogicVisualizer = () => {
  const [daysElapsed, setDaysElapsed] = useState(0);
  const [duration, setDuration] = useState(30); // Default 30 days
  const [amount, setAmount] = useState(1000);
  const [apy, setApy] = useState(10); // 10%

  // Calculate reward
  // Formula: (amount * dt * apy) / 100 / 365
  // We'll simplify for the visualizer to match the lesson's logic
  const effectiveDt = Math.min(daysElapsed, duration);
  const reward = (amount * effectiveDt * apy) / 100 / 365;
  const isCapped = daysElapsed > duration;

  return (
    <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-sans my-8 shadow-sm">
      <div className="flex items-center gap-2 mb-6 border-b border-slate-200 dark:border-slate-700 pb-4">
        <Clock className="w-6 h-6 text-blue-500 dark:text-blue-400" />
        <h3 className="text-lg font-semibold">Time-Based Reward Calculator</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">
              Staked Amount: <span className="text-slate-900 dark:text-white font-mono">{amount}</span>
            </label>
            <input
              type="range"
              min="100"
              max="10000"
              step="100"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">
              Lock Duration: <span className="text-slate-900 dark:text-white font-mono">{duration} days</span>
            </label>
            <div className="flex gap-2">
              {[30, 60, 120].map((d) => (
                <button
                  key={d}
                  onClick={() => setDuration(d)}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    duration === d
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {d}d
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">
              APY: <span className="text-slate-900 dark:text-white font-mono">{apy}%</span>
            </label>
            <div className="flex gap-2">
              {[10, 15, 27].map((r) => (
                <button
                  key={r}
                  onClick={() => setApy(r)}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    apy === r
                      ? 'bg-green-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {r}%
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">
              Time Elapsed: <span className="text-slate-900 dark:text-white font-mono">{daysElapsed} days</span>
            </label>
            <input
              type="range"
              min="0"
              max={duration + 60} // Allow going past duration
              step="1"
              value={daysElapsed}
              onChange={(e) => setDaysElapsed(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>
        </div>

        {/* Visualization */}
        <div className="bg-slate-50 dark:bg-slate-950 rounded-xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between relative overflow-hidden">
            {/* Progress Bar Background */}
            <div className="absolute top-0 left-0 h-2 bg-slate-200 dark:bg-slate-800 w-full" />
            <motion.div 
                className="absolute top-0 left-0 h-2 bg-purple-500"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min((daysElapsed / (duration + 60)) * 100, 100)}%` }}
            />

            {/* Stats */}
            <div className="space-y-4 mt-4">
                <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
                    <span className="text-slate-500 dark:text-slate-400 text-sm">Effective Time</span>
                    <span className={`font-mono font-bold ${isCapped ? 'text-orange-500 dark:text-orange-400' : 'text-slate-900 dark:text-white'}`}>
                        {effectiveDt} days
                    </span>
                </div>
                
                {isCapped && (
                    <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-xs text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/20 p-2 rounded border border-orange-200 dark:border-orange-900/50"
                    >
                        <AlertTriangle className="w-3 h-3" />
                        <span>Rewards capped at lock duration ({duration} days)</span>
                    </motion.div>
                )}

                <div className="flex justify-between items-center p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
                    <span className="text-slate-500 dark:text-slate-400 text-sm">Accrued Reward</span>
                    <div className="flex items-center gap-2">
                        <Coins className="w-4 h-4 text-yellow-500 dark:text-yellow-400" />
                        <span className="font-mono font-bold text-yellow-600 dark:text-yellow-400 text-lg">
                            {reward.toFixed(4)}
                        </span>
                    </div>
                </div>
            </div>

            {/* Formula Breakdown */}
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="text-xs text-slate-500 mb-2 font-mono">Reward Formula:</div>
                <div className="font-mono text-xs text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 p-2 rounded overflow-x-auto border border-slate-200 dark:border-slate-800">
                    ({amount} * {effectiveDt} * {apy}) / 100 / 365 = <span className="text-yellow-600 dark:text-yellow-400">{reward.toFixed(4)}</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLogicVisualizer;
