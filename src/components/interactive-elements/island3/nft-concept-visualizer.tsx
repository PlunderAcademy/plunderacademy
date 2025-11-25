import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Hash, ArrowRight, RefreshCw } from 'lucide-react';

const NFTConceptVisualizer = () => {
  const [nfts, setNfts] = useState([
    { id: 1, owner: '0xAlice', color: 'bg-red-500' },
    { id: 2, owner: '0xBob', color: 'bg-blue-500' },
    { id: 3, owner: '0xCharlie', color: 'bg-green-500' },
    { id: 4, owner: '0xAlice', color: 'bg-yellow-500' },
  ]);

  const [selectedNft, setSelectedNft] = useState<number | null>(null);
  const [transferTarget, setTransferTarget] = useState<string>('');

  const handleTransfer = () => {
    if (selectedNft !== null && transferTarget) {
      setNfts(nfts.map(nft => 
        nft.id === selectedNft ? { ...nft, owner: transferTarget } : nft
      ));
      setTransferTarget('');
    }
  };

  const selectedNftData = nfts.find(n => n.id === selectedNft);

  return (
    <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-sans my-8 shadow-sm">
      <div className="flex items-center gap-2 mb-6 border-b border-slate-200 dark:border-slate-700 pb-4">
        <Hash className="w-6 h-6 text-purple-500 dark:text-purple-400" />
        <h3 className="text-lg font-semibold">NFT Ownership Mapping</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Visualization Grid */}
        <div className="grid grid-cols-2 gap-4">
          {nfts.map((nft) => (
            <motion.div
              key={nft.id}
              layoutId={`nft-${nft.id}`}
              onClick={() => setSelectedNft(nft.id)}
              className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all ${
                selectedNft === nft.id
                  ? 'border-purple-500 shadow-lg shadow-purple-500/20'
                  : 'border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-700'
              } bg-slate-50 dark:bg-slate-800`}
            >
              <div className={`w-full h-24 rounded-lg mb-3 ${nft.color} opacity-80`} />
              <div className="flex justify-between items-center">
                <span className="font-mono font-bold text-lg">#{nft.id}</span>
                <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-2 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                  <User className="w-3 h-3" />
                  {nft.owner}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Controls & Details */}
        <div className="space-y-6">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <code className="text-xs text-purple-600 dark:text-purple-400 block mb-2">{/* Solidity Mapping */}</code>
            <code className="text-sm text-slate-700 dark:text-slate-300">
              mapping(uint256 =&gt; address) public _owners;
            </code>
          </div>

          <AnimatePresence mode="wait">
            {selectedNftData ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800"
              >
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <RefreshCw className="w-4 h-4" />
                  Transfer NFT #{selectedNftData.id}
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Current Owner</span>
                    <span className="font-mono bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded">
                      {selectedNftData.owner}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <select
                      value={transferTarget}
                      onChange={(e) => setTransferTarget(e.target.value)}
                      className="flex-1 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm"
                    >
                      <option value="">Select new owner...</option>
                      {['0xAlice', '0xBob', '0xCharlie', '0xDave', '0xEve']
                        .filter(u => u !== selectedNftData.owner)
                        .map(u => (
                          <option key={u} value={u}>{u}</option>
                        ))
                      }
                    </select>
                    <button
                      onClick={handleTransfer}
                      disabled={!transferTarget}
                      className="bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                    >
                      Transfer <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 text-slate-400 dark:text-slate-600"
              >
                Select an NFT to view details and transfer
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default NFTConceptVisualizer;
