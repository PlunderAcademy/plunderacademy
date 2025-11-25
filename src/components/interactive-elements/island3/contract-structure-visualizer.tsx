import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Shield, Coins, Image as ImageIcon, Users, Settings } from 'lucide-react';

type ComponentType = 'state' | 'functions' | 'modifiers' | 'events' | null;

const ContractStructureVisualizer = () => {
  const [activeComponent, setActiveComponent] = useState<ComponentType>(null);

  const components = [
    {
      id: 'state' as ComponentType,
      icon: Code,
      label: 'State Variables',
      color: 'blue',
      description: 'Stores contract data like totalMinted, mintPrice, and isRevealed',
      items: [
        'MAX_SUPPLY: 100 tokens',
        'mintPrice: 1 ZIL',
        'totalMinted: counter',
        'baseTokenURI: IPFS link',
        'isRevealed: bool flag',
        'claimant: address'
      ]
    },
    {
      id: 'functions' as ComponentType,
      icon: Settings,
      label: 'Core Functions',
      color: 'green',
      description: 'Main operations users and owner can perform',
      items: [
        'mint(): paid minting',
        'ownerMint(): free mint',
        'tokenURI(): metadata',
        'reveal(): unlock art',
        'withdraw(): collect funds'
      ]
    },
    {
      id: 'modifiers' as ComponentType,
      icon: Shield,
      label: 'Access Control',
      color: 'red',
      description: 'Restricts who can call certain functions',
      items: [
        'onlyOwner: admin only',
        'payable: accepts ZIL',
        'public: anyone can call',
        'view: read-only'
      ]
    },
    {
      id: 'events' as ComponentType,
      icon: ImageIcon,
      label: 'Events',
      color: 'purple',
      description: 'Logs important actions for transparency and indexing',
      items: [
        'NFTMinted: track mints',
        'Revealed: metadata unlock',
        'PriceUpdated: pricing',
        'Withdrawn: funds moved'
      ]
    }
  ];

  const colorMap = {
    blue: {
      border: 'border-blue-500',
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      text: 'text-blue-600 dark:text-blue-400',
      shadow: 'shadow-blue-500/20'
    },
    green: {
      border: 'border-green-500',
      bg: 'bg-green-50 dark:bg-green-900/20',
      text: 'text-green-600 dark:text-green-400',
      shadow: 'shadow-green-500/20'
    },
    red: {
      border: 'border-red-500',
      bg: 'bg-red-50 dark:bg-red-900/20',
      text: 'text-red-600 dark:text-red-400',
      shadow: 'shadow-red-500/20'
    },
    purple: {
      border: 'border-purple-500',
      bg: 'bg-purple-50 dark:bg-purple-900/20',
      text: 'text-purple-600 dark:text-purple-400',
      shadow: 'shadow-purple-500/20'
    }
  };

  return (
    <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-sans my-8 shadow-sm">
      <div className="flex items-center gap-2 mb-6 border-b border-slate-200 dark:border-slate-700 pb-4">
        <Users className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
        <h3 className="text-lg font-semibold">NFT Contract Anatomy</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {components.map((component) => {
          const Icon = component.icon;
          const colors = colorMap[component.color as keyof typeof colorMap];
          const isActive = activeComponent === component.id;

          return (
            <motion.button
              key={component.id}
              onClick={() => setActiveComponent(isActive ? null : component.id)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`p-4 rounded-xl border-2 transition-all text-left ${
                isActive
                  ? `${colors.border} ${colors.bg} shadow-lg ${colors.shadow}`
                  : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-10 h-10 rounded-full ${colors.bg} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${colors.text}`} />
                </div>
                <h4 className="font-semibold text-sm">{component.label}</h4>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                {component.description}
              </p>
            </motion.button>
          );
        })}
      </div>

      {/* Detail Panel */}
      <AnimatePresence mode="wait">
        {activeComponent && (
          <motion.div
            key={activeComponent}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {components.map((component) => {
              if (component.id !== activeComponent) return null;
              const colors = colorMap[component.color as keyof typeof colorMap];

              return (
                <div key={component.id} className={`p-6 rounded-xl ${colors.bg} border-2 ${colors.border}`}>
                  <h4 className="font-bold mb-4 flex items-center gap-2">
                    <component.icon className={`w-5 h-5 ${colors.text}`} />
                    {component.label}
                  </h4>
                  <ul className="space-y-2">
                    {component.items.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${colors.text.replace('text-', 'bg-')}`} />
                        <code className="font-mono text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded">
                          {item}
                        </code>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {!activeComponent && (
        <div className="text-center p-8 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Click on any component above to see its details
          </p>
        </div>
      )}
    </div>
  );
};

export default ContractStructureVisualizer;
