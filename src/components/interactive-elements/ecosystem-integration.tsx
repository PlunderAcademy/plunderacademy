"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Wallet, Terminal, Box, Check } from "lucide-react";

export function EcosystemIntegration() {
  const tools = [
    { name: "MetaMask", icon: Wallet, color: "text-orange-500", bg: "bg-orange-100 dark:bg-orange-900/20", delay: 0 },
    { name: "Remix IDE", icon: Code2, color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-900/20", delay: 1.5 },
    { name: "Hardhat", icon: Terminal, color: "text-yellow-500", bg: "bg-yellow-100 dark:bg-yellow-900/20", delay: 3 },
    { name: "OpenZeppelin", icon: Box, color: "text-indigo-500", bg: "bg-indigo-100 dark:bg-indigo-900/20", delay: 4.5 },
  ];

  return (
    <div className="my-8 w-full rounded-xl border border-border bg-card/50 shadow-sm overflow-hidden p-8">
      <div className="relative h-[300px] flex items-center justify-center">
        
        {/* Central Hub */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="z-10 w-32 h-32 rounded-full bg-background border-4 border-teal-500 flex flex-col items-center justify-center shadow-xl"
        >
          <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">ZIL</div>
          <div className="text-xs font-medium text-muted-foreground">EVM Compatible</div>
        </motion.div>

        {/* Orbiting Tools */}
        {tools.map((tool, i) => {
          const angle = (i * 360) / tools.length;
          const radius = 120;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <React.Fragment key={tool.name}>
              {/* Connection Line */}
              <motion.div
                className="absolute top-1/2 left-1/2 h-0.5 bg-border origin-left"
                style={{ 
                  width: radius, 
                  rotate: angle,
                  zIndex: 0
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: tool.delay, duration: 0.5 }}
              />

              {/* Tool Node */}
              <motion.div
                className={`absolute w-16 h-16 rounded-xl ${tool.bg} border-2 border-background shadow-lg flex flex-col items-center justify-center gap-1 z-20`}
                style={{ 
                  x, 
                  y,
                  marginLeft: -32,
                  marginTop: -32
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: tool.delay + 0.5, type: "spring" }}
              >
                <tool.icon className={`w-6 h-6 ${tool.color}`} />
                <span className="text-[10px] font-semibold">{tool.name}</span>
                
                {/* Success Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: tool.delay + 1 }}
                  className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-0.5"
                >
                  <Check className="w-3 h-3" />
                </motion.div>
              </motion.div>
            </React.Fragment>
          );
        })}
      </div>
      
      <div className="text-center mt-4 text-sm text-muted-foreground">
        Fully compatible with your favorite Ethereum tools
      </div>
    </div>
  );
}
