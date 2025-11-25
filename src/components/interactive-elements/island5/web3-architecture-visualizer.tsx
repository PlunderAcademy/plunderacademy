import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Wallet, Server, Box } from 'lucide-react';

const Web3ArchitectureVisualizer = () => {
  return (
    <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 my-8">
      <h3 className="text-lg font-semibold mb-6">Web3 dApp Architecture</h3>

      <div className="grid grid-cols-4 gap-4 items-center relative">
        
        {/* Connecting Lines */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 dark:bg-slate-700 -z-0"></div>

        {/* Frontend */}
        <Node 
          icon={Layout} 
          label="Frontend" 
          sub="React / Next.js" 
          color="blue" 
          delay={0}
        />

        {/* Wallet */}
        <Node 
          icon={Wallet} 
          label="Wallet" 
          sub="Signer / Provider" 
          color="purple" 
          delay={1}
        />

        {/* RPC */}
        <Node 
          icon={Server} 
          label="RPC Node" 
          sub="Gateway" 
          color="orange" 
          delay={2}
        />

        {/* Blockchain */}
        <Node 
          icon={Box} 
          label="Blockchain" 
          sub="EVM State" 
          color="green" 
          delay={3}
        />
        
        {/* Moving Packet */}
        <motion.div 
            className="absolute top-1/2 w-3 h-3 bg-blue-500 rounded-full -mt-1.5 z-10 shadow-lg"
            animate={{ left: ["10%", "85%", "10%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="grid grid-cols-4 gap-4 mt-8">
        <div className="text-center">
            <p className="text-[10px] text-slate-500">UI & Logic</p>
        </div>
        <div className="text-center">
            <p className="text-[10px] text-slate-500">Auth & Signing</p>
        </div>
        <div className="text-center">
            <p className="text-[10px] text-slate-500">Network API</p>
        </div>
        <div className="text-center">
            <p className="text-[10px] text-slate-500">Consensus & Storage</p>
        </div>
      </div>
    </div>
  );
};

const Node = ({ icon: Icon, label, sub, color, delay }: { icon: React.ComponentType<{ className?: string }>; label: string; sub: string; color: string; delay: number }) => (
    <div className="relative z-10 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col items-center text-center h-32 justify-center">
        <motion.div 
            className={`w-12 h-12 rounded-full bg-${color}-100 dark:bg-${color}-900/30 text-${color}-600 flex items-center justify-center mb-3`}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, delay: delay, repeat: Infinity }}
        >
            <Icon className="w-6 h-6" />
        </motion.div>
        <div className="font-bold text-sm">{label}</div>
        <div className="text-xs text-slate-500">{sub}</div>
    </div>
);

export default Web3ArchitectureVisualizer;

