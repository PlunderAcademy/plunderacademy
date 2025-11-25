import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Lock, Unlock, Sparkles } from 'lucide-react';

const RevealMechanicsVisualizer = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [hoveredToken, setHoveredToken] = useState<number | null>(null);

  const tokens = [1, 2, 3, 4, 5, 6];

  // Revealed traits for each token
  const revealedTraits = [
    { color: '#FF6B6B', shape: 'Circle', rarity: 'Legendary' },
    { color: '#4ECDC4', shape: 'Square', rarity: 'Common' },
    { color: '#45B7D1', shape: 'Triangle', rarity: 'Rare' },
    { color: '#FFA07A', shape: 'Diamond', rarity: 'Epic' },
    { color: '#98D8C8', shape: 'Pentagon', rarity: 'Common' },
    { color: '#F7DC6F', shape: 'Star', rarity: 'Rare' }
  ];

  return (
    <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-sans my-8 shadow-sm">
      <div className="flex items-center gap-2 mb-6 border-b border-slate-200 dark:border-slate-700 pb-4">
        <Sparkles className="w-6 h-6 text-amber-500 dark:text-amber-400" />
        <h3 className="text-lg font-semibold">NFT Reveal Mechanism</h3>
      </div>

      {/* Control Button */}
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setIsRevealed(!isRevealed)}
          className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
            isRevealed
              ? 'bg-purple-600 hover:bg-purple-700 text-white'
              : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg'
          }`}
        >
          {isRevealed ? (
            <>
              <Lock className="w-5 h-5" />
              Hide Collection
            </>
          ) : (
            <>
              <Unlock className="w-5 h-5 animate-pulse" />
              Reveal Collection
            </>
          )}
        </button>
      </div>

      {/* Tokens Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {tokens.map((tokenId, idx) => (
          <motion.div
            key={tokenId}
            onMouseEnter={() => setHoveredToken(tokenId)}
            onMouseLeave={() => setHoveredToken(null)}
            className="relative aspect-square rounded-xl border-2 border-slate-200 dark:border-slate-700 overflow-hidden bg-slate-50 dark:bg-slate-800 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {/* Hidden State */}
            {!isRevealed && (
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900"
              >
                <EyeOff className="w-12 h-12 text-slate-400 mb-2" />
                <p className="text-2xl font-bold text-slate-300">?</p>
                <p className="text-xs text-slate-400 mt-1">Mystery NFT</p>
                <span className="absolute top-2 right-2 bg-slate-800 text-slate-300 px-2 py-1 rounded text-xs">
                  #{tokenId}
                </span>
              </motion.div>
            )}

            {/* Revealed State */}
            {isRevealed && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-4"
                style={{ backgroundColor: revealedTraits[idx].color }}
              >
                <Eye className="w-12 h-12 text-white/80 mb-2" />
                <p className="text-sm font-semibold text-white">{revealedTraits[idx].shape}</p>
                <span className="mt-2 bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                  {revealedTraits[idx].rarity}
                </span>
                <span className="absolute top-2 right-2 bg-black/30 text-white px-2 py-1 rounded text-xs">
                  #{tokenId}
                </span>
              </motion.div>
            )}

            {/* Hover Tooltip */}
            {hoveredToken === tokenId && isRevealed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-2 text-xs"
              >
                <p>Shape: {revealedTraits[idx].shape}</p>
                <p>Rarity: {revealedTraits[idx].rarity}</p>
                <p>Color: {revealedTraits[idx].color}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Status Info */}
      <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold mb-1">Collection Status</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {isRevealed
                ? 'All NFTs are revealed! Unique traits are now visible.'
                : 'NFTs are hidden. Click "Reveal Collection" to unveil unique traits.'}
            </p>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
            isRevealed
              ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
              : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
          }`}>
            {isRevealed ? 'Revealed' : 'Hidden'}
          </div>
        </div>

        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded text-xs">
          <p className="font-semibold text-blue-700 dark:text-blue-400 mb-1">How it works:</p>
          <ul className="space-y-1 text-blue-600 dark:text-blue-300">
            <li>• Before reveal: <code className="bg-white dark:bg-slate-800 px-1 rounded">tokenURI() → hiddenMetadata.json</code></li>
            <li>• After reveal: <code className="bg-white dark:bg-slate-800 px-1 rounded">tokenURI() → baseURI/tokenId.json</code></li>
            <li>• One-time, atomic operation (cannot be reversed)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RevealMechanicsVisualizer;
