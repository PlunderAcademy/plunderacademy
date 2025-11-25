"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type Variable = {
  name: string;
  type: string;
  size: number; // in bytes
  color: string;
};

type Layout = {
  title: string;
  subtitle: string;
  variables: Variable[];
  slots: number;
  wastedBytes: number;
};

export function MemoryLayoutVisualizer() {
  const [currentExample, setCurrentExample] = useState(0);

  const inefficientLayout: Layout = {
    title: "❌ Inefficient Layout",
    subtitle: "Uses 4 storage slots",
    variables: [
      { name: "balance", type: "uint256", size: 32, color: "bg-red-400" },
      { name: "timestamp", type: "uint64", size: 8, color: "bg-orange-400" },
      { name: "id", type: "uint256", size: 32, color: "bg-red-400" },
      { name: "isActive", type: "bool", size: 1, color: "bg-yellow-400" },
    ],
    slots: 4,
    wastedBytes: 47,
  };

  const efficientLayout: Layout = {
    title: "✓ Optimized Layout",
    subtitle: "Uses 2 storage slots",
    variables: [
      { name: "balance", type: "uint256", size: 32, color: "bg-green-400" },
      { name: "id", type: "uint256", size: 32, color: "bg-green-400" },
      { name: "timestamp", type: "uint64", size: 8, color: "bg-teal-400" },
      { name: "isActive", type: "bool", size: 1, color: "bg-blue-400" },
    ],
    slots: 2,
    wastedBytes: 23,
  };

  const layouts = [inefficientLayout, efficientLayout];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentExample((prev) => (prev + 1) % layouts.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [layouts.length]);

  const renderSlots = (layout: Layout) => {
    const slots: React.ReactElement[] = [];
    let currentSlot = 0;
    let bytesInSlot = 0;
    let slotVariables: Variable[] = [];

    layout.variables.forEach((variable) => {
      if (variable.size === 32) {
        // uint256 always takes full slot
        if (slotVariables.length > 0) {
          slots.push(renderSlot(currentSlot, slotVariables, 32 - bytesInSlot));
          currentSlot++;
          slotVariables = [];
          bytesInSlot = 0;
        }
        slots.push(renderSlot(currentSlot, [variable], 0));
        currentSlot++;
      } else {
        // Smaller types can pack together
        if (bytesInSlot + variable.size > 32) {
          // Start new slot
          slots.push(renderSlot(currentSlot, slotVariables, 32 - bytesInSlot));
          currentSlot++;
          slotVariables = [variable];
          bytesInSlot = variable.size;
        } else {
          slotVariables.push(variable);
          bytesInSlot += variable.size;
        }
      }
    });

    // Add remaining variables
    if (slotVariables.length > 0) {
      slots.push(renderSlot(currentSlot, slotVariables, 32 - bytesInSlot));
    }

    return slots;
  };

  const renderSlot = (slotNumber: number, variables: Variable[], wastedBytes: number) => {
    return (
      <motion.div
        key={`slot-${slotNumber}-${currentExample}`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: slotNumber * 0.3 }}
        className="mb-4"
      >
        <div className="text-xs font-mono text-muted-foreground mb-1">
          Slot {slotNumber} (32 bytes)
        </div>
        <div className="h-16 border-2 border-border rounded-lg flex overflow-hidden">
          {variables.map((variable, idx) => {
            const widthPercent = (variable.size / 32) * 100;
            return (
              <motion.div
                key={`${variable.name}-${idx}`}
                initial={{ width: 0 }}
                animate={{ width: `${widthPercent}%` }}
                transition={{ delay: slotNumber * 0.3 + idx * 0.1, duration: 0.4 }}
                className={`${variable.color} flex flex-col items-center justify-center border-r border-white dark:border-black`}
                title={`${variable.name}: ${variable.type} (${variable.size} bytes)`}
              >
                <span className="text-xs font-mono font-bold text-white drop-shadow-sm">
                  {variable.name}
                </span>
                <span className="text-xs font-mono text-white/90 drop-shadow-sm">
                  {variable.size}B
                </span>
              </motion.div>
            );
          })}
          {wastedBytes > 0 && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(wastedBytes / 32) * 100}%` }}
              transition={{ delay: slotNumber * 0.3 + variables.length * 0.1, duration: 0.4 }}
              className="bg-gray-300 dark:bg-gray-700 flex items-center justify-center border-l-2 border-dashed border-gray-400"
            >
              <span className="text-xs font-mono text-gray-600 dark:text-gray-400">
                ⚠️ {wastedBytes}B wasted
              </span>
            </motion.div>
          )}
        </div>
      </motion.div>
    );
  };

  const currentLayout = layouts[currentExample];
  const gasCostPerSlot = 20000;
  const currentGasCost = currentLayout.slots * gasCostPerSlot;
  const gasPrice = 2000; // ETH price in USD
  const gweiPrice = 0.000000025; // 25 gwei
  const usdCost = (currentGasCost * gweiPrice * gasPrice).toFixed(4);

  return (
    <div className="my-8 w-full rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2">Storage Slot Packing Visualizer</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Watch how variable ordering affects storage efficiency and gas costs
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Visualization */}
          <div>
            <motion.div
              key={currentExample}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-4"
            >
              <h4 className="font-semibold text-md mb-1">{currentLayout.title}</h4>
              <p className="text-sm text-muted-foreground mb-4">{currentLayout.subtitle}</p>
            </motion.div>

            {renderSlots(currentLayout)}
          </div>

          {/* Stats and Code */}
          <div className="space-y-4">
            {/* Gas Stats */}
            <div className="p-4 bg-muted/50 rounded-lg border border-border">
              <div className="text-sm font-semibold mb-3">Gas Cost Analysis</div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Storage Slots:</span>
                  <span className="font-mono font-semibold">{currentLayout.slots}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Wasted Bytes:</span>
                  <span className="font-mono font-semibold">{currentLayout.wastedBytes}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Gas Cost:</span>
                  <span className="font-mono font-semibold">{currentGasCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">USD Cost:</span>
                  <span className="font-mono font-semibold">${usdCost}</span>
                </div>
              </div>
            </div>

            {/* Savings Comparison */}
            {currentExample === 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800"
              >
                <div className="text-sm font-semibold text-green-900 dark:text-green-400 mb-2">
                  💰 Gas Savings
                </div>
                <div className="text-xs text-green-700 dark:text-green-300 space-y-1">
                  <div>• 2 fewer storage slots</div>
                  <div>• 40,000 gas saved (50%)</div>
                  <div>• 24 bytes saved per struct</div>
                </div>
              </motion.div>
            )}

            {/* Code Example */}
            <div className="p-3 bg-muted/30 rounded-lg border border-border">
              <div className="text-xs font-semibold mb-2">Struct Definition:</div>
              <pre className="text-xs font-mono overflow-x-auto">
                <code>
                  {currentExample === 0
                    ? `struct UserInfo {
  uint256 balance;    // 32B - Slot 0
  uint64 timestamp;   // 8B  - Slot 1
  uint256 id;         // 32B - Slot 2
  bool isActive;      // 1B  - Slot 3
  // ⚠️ 47 bytes wasted
}`
                    : `struct UserInfo {
  uint256 balance;    // 32B - Slot 0
  uint256 id;         // 32B - Slot 1
  uint64 timestamp;   // 8B  \\
  bool isActive;      // 1B   } Slot 2
  // ✓ 23 bytes available
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <div className="mt-4 text-xs text-center text-muted-foreground">
          💡 Tip: Group smaller types together and place uint256 types strategically
        </div>
      </div>
    </div>
  );
}
