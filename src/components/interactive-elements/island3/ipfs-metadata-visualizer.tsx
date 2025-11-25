import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileJson, Image as ImageIcon, Link, Database, ArrowRight } from 'lucide-react';

const IPFSMetadataVisualizer = () => {
  const [activeNode, setActiveNode] = useState<'contract' | 'json' | 'image' | null>(null);

  return (
    <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-sans my-8 shadow-sm">
      <div className="flex items-center gap-2 mb-6 border-b border-slate-200 dark:border-slate-700 pb-4">
        <Link className="w-6 h-6 text-purple-500 dark:text-purple-400" />
        <h3 className="text-lg font-semibold">NFT Metadata Chain</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 relative">
        {/* Connecting Lines (Desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -z-10 transform -translate-y-1/2" />

        {/* Node 1: Contract */}
        <motion.div
          onMouseEnter={() => setActiveNode('contract')}
          onMouseLeave={() => setActiveNode(null)}
          className={`relative p-6 rounded-xl border-2 bg-white dark:bg-slate-900 cursor-pointer transition-all z-10 ${
            activeNode === 'contract'
              ? 'border-blue-500 shadow-lg shadow-blue-500/20 scale-105'
              : 'border-slate-200 dark:border-slate-700'
          }`}
        >
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Database className="w-6 h-6" />
            </div>
            <h4 className="font-semibold">Smart Contract</h4>
            <p className="text-xs text-slate-500">Stores the pointer</p>
          </div>
          
          {/* Tooltip */}
          <AnimatePresence>
            {activeNode === 'contract' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 w-full mt-4 p-3 bg-slate-800 text-white text-xs rounded-lg shadow-xl z-20"
              >
                <div className="font-mono mb-1 text-blue-300">function tokenURI(1)</div>
                <div className="break-all">Returns: &quot;ipfs://QmMeta/1.json&quot;</div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Node 2: JSON Metadata */}
        <motion.div
          onMouseEnter={() => setActiveNode('json')}
          onMouseLeave={() => setActiveNode(null)}
          className={`relative p-6 rounded-xl border-2 bg-white dark:bg-slate-900 cursor-pointer transition-all z-10 ${
            activeNode === 'json'
              ? 'border-yellow-500 shadow-lg shadow-yellow-500/20 scale-105'
              : 'border-slate-200 dark:border-slate-700'
          }`}
        >
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center text-yellow-600 dark:text-yellow-400">
              <FileJson className="w-6 h-6" />
            </div>
            <h4 className="font-semibold">Metadata (JSON)</h4>
            <p className="text-xs text-slate-500">Describes the token</p>
          </div>

          {/* Tooltip */}
          <AnimatePresence>
            {activeNode === 'json' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 w-full mt-4 p-3 bg-slate-800 text-white text-xs rounded-lg shadow-xl z-20"
              >
                <pre className="font-mono text-[10px] leading-tight">
{`{
  "name": "Jungle #1",
  "image": "ipfs://QmImg/1.png",
  "attributes": [...]
}`}
                </pre>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Node 3: Image */}
        <motion.div
          onMouseEnter={() => setActiveNode('image')}
          onMouseLeave={() => setActiveNode(null)}
          className={`relative p-6 rounded-xl border-2 bg-white dark:bg-slate-900 cursor-pointer transition-all z-10 ${
            activeNode === 'image'
              ? 'border-green-500 shadow-lg shadow-green-500/20 scale-105'
              : 'border-slate-200 dark:border-slate-700'
          }`}
        >
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
              <ImageIcon className="w-6 h-6" />
            </div>
            <h4 className="font-semibold">Asset (Image)</h4>
            <p className="text-xs text-slate-500">The visual content</p>
          </div>

          {/* Tooltip */}
          <AnimatePresence>
            {activeNode === 'image' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 w-full mt-4 p-3 bg-slate-800 text-white text-xs rounded-lg shadow-xl z-20 flex justify-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                  NFT #1
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="mt-12 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg text-sm text-slate-600 dark:text-slate-400 text-center">
        <p>
          The blockchain only stores the <strong>Token ID</strong> and <strong>Owner</strong>. 
          The visual data lives off-chain on IPFS, linked via the <code>tokenURI</code>.
        </p>
      </div>
    </div>
  );
};

export default IPFSMetadataVisualizer;
