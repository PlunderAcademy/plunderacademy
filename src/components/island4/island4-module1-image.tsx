"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { useAccount } from "wagmi";
import { config } from "@/lib/config";

export function Island4Module1Image() {
  const { address } = useAccount();
  const [videoError, setVideoError] = useState(false);
  const [clickSequence, setClickSequence] = useState<number[]>([]);
  const [treasureFound, setTreasureFound] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showResetFlash, setShowResetFlash] = useState(false);
  const [highlightedArchers, setHighlightedArchers] = useState<Set<number>>(new Set());

  // Correct sequence based on code "13352"
  // Archer positions: 1=leftmost, 2=center-left, 3=center, 4=center-right, 5=rightmost
  const correctSequence = [1, 3, 3, 5, 2];

  // Archer positions on the wall (left to right)
  const archerPositions = [
    { id: 1, top: 29, left: 9, label: "Archer 1" },   // Leftmost
    { id: 2, top: 31, left: 33, label: "Archer 2" },   // Center-left
    { id: 3, top: 31, left: 45, label: "Archer 3" },   // Center (at guard glint 3)
    { id: 4, top: 34, left: 69, label: "Archer 4" },   // Center-right
    { id: 5, top: 35, left: 79, label: "Archer 5" },   // Rightmost (at guard glint 5)
  ];

  // Play success sound
  const playSuccessSound = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;
      
      const audioContext = new AudioContextClass();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Success chime
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    } catch {
      console.log('Audio not available');
    }
  };

  // Play error/reset sound
  const playErrorSound = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;
      
      const audioContext = new AudioContextClass();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Error buzz
      oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.2);
      
      gainNode.gain.setValueAtTime(0.4, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.2);
    } catch {
      console.log('Audio not available');
    }
  };

  // Submit secret achievement
  const submitSecretAchievement = async () => {
    if (!address) {
      setErrorMessage('Please connect your wallet to claim this secret');
      return;
    }
    
    setIsSubmitting(true);
    setErrorMessage(null);
    
    const requestPayload = {
      walletAddress: address,
      achievementNumber: "1004",
      submissionType: "secret",
      submissionData: {
        secretAnswer: "maytheforthbewithyou"
      },
      metadata: {
        timestamp: new Date().toISOString(),
        discoveryMethod: "archer_sequence_puzzle"
      }
    };
    
    try {
      const response = await fetch(`${config.apiBaseUrl}/api/v1/vouchers/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestPayload),
      });
      
      const responseText = await response.text();
      let apiResult;
      
      try {
        apiResult = JSON.parse(responseText);
      } catch {
        throw new Error(`API returned invalid JSON. Status: ${response.status}`);
      }
      
      if (response.ok && apiResult.success) {
        setTreasureFound(true);
        setShowSuccessModal(true);
        window.dispatchEvent(new CustomEvent('achievementClaimed', { 
          detail: { timestamp: Date.now() } 
        }));
      } else {
        const errorMsg = apiResult.error || 'Failed to claim secret achievement';
        if (errorMsg.toLowerCase().includes('already completed') || 
            errorMsg.toLowerCase().includes('already claimed') ||
            errorMsg.toLowerCase().includes('already exists')) {
          setTreasureFound(true);
          setShowSuccessModal(false);
          return;
        }
        throw new Error(errorMsg);
      }
    } catch (error) {
      console.error('Error submitting secret achievement:', error);
      setErrorMessage(error instanceof Error ? error.message : 'Failed to claim secret achievement');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle archer clicks
  const handleArcherClick = async (archerId: number) => {
    if (!address || treasureFound || isSubmitting) return;
    
    const newSequence = [...clickSequence, archerId];
    const currentIndex = clickSequence.length;
    
    // Check if this click is correct
    if (correctSequence[currentIndex] === archerId) {
      // Correct click!
      playSuccessSound();
      setClickSequence(newSequence);
      setHighlightedArchers(new Set([...highlightedArchers, archerId]));
      
      // Check if sequence is complete
      if (newSequence.length === correctSequence.length) {
        await submitSecretAchievement();
      }
    } else {
      // Wrong click - reset!
      playErrorSound();
      setShowResetFlash(true);
      setClickSequence([]);
      setHighlightedArchers(new Set());
      
      setTimeout(() => {
        setShowResetFlash(false);
      }, 500);
    }
  };

  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        {/* Video with image fallback */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/islands/island4/island4-module1-image.webp"
          onError={() => setVideoError(true)}
        >
          <source src="/islands/island4/island4-module1-video.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback image shown only if video fails */}
        {videoError && (
          <Image
            src="/islands/island4/island4-module1-image.webp"
            alt="DeFi Fundamentals & Simple Swaps - Gilded Bastion Adventure"
            fill
            className="object-cover"
            priority
          />
        )}
        
        {/* NO ANIMATED EFFECTS - Video is clean, only secret achievement overlays */}
        
        {/* SECRET CODE - Subtle carved numbers on rock */}
        {address && !treasureFound && (
          <div className="absolute bottom-[1%] left-[4%] pointer-events-none">
            <div className="text-stone-400/40 font-serif text-lg tracking-[0.3em] select-none" style={{ 
              textShadow: '1px 1px 2px rgba(0,0,0,0.6), -1px -1px 1px rgba(255,255,255,0.1)',
              transform: 'rotate(-2deg)',
              letterSpacing: '0.4em'
            }}>
              13352
            </div>
          </div>
        )}

        {/* Archer Click Indicators - Show green glow for correctly clicked archers */}
        {address && !treasureFound && archerPositions.map((archer) => {
          const isHighlighted = highlightedArchers.has(archer.id);
          return isHighlighted ? (
            <div 
              key={`highlight-${archer.id}`}
              className="absolute w-[20px] h-[20px] bg-green-400/60 rounded-full animate-pulse pointer-events-none"
              style={{
                top: `${archer.top}%`,
                left: `${archer.left}%`,
                transform: 'translate(-50%, -50%)',
                filter: 'blur(8px)',
                boxShadow: '0 0 30px rgba(74, 222, 128, 0.8)'
              }}
            />
          ) : null;
        })}

        {/* Reset Flash - Red overlay when wrong click */}
        {showResetFlash && (
          <div className="absolute inset-0 bg-red-600/40 animate-flash-red pointer-events-none" />
        )}

        {/* Success sparkles after treasure found */}
        {treasureFound && (
          <>
            {archerPositions.map((archer) => (
              <div
                key={`success-${archer.id}`}
                className="absolute text-2xl animate-pulse pointer-events-none"
                style={{
                  top: `${archer.top - 3}%`,
                  left: `${archer.left}%`,
                  transform: 'translate(-50%, -50%)',
                  filter: 'drop-shadow(0 0 10px gold)',
                  animationDelay: `${archer.id * 0.2}s`
                }}
              >
                ⭐
              </div>
            ))}
          </>
        )}

        {/* Clickable archer areas - only when wallet connected and not complete */}
        {address && !treasureFound && !isSubmitting && archerPositions.map((archer) => (
          <div
            key={`clickable-${archer.id}`}
            className="absolute cursor-crosshair pointer-events-auto z-10 hover:bg-yellow-400/20 transition-colors rounded-full"
            style={{
              top: `${archer.top - 2}%`,
              left: `${archer.left - 2}%`,
              width: '4%',
              height: '8%'
            }}
            onClick={() => handleArcherClick(archer.id)}
            title={`Archer ${archer.id}`}
          />
        ))}

        {/* Success Modal */}
        {showSuccessModal && (
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-gradient-to-br from-amber-500 via-yellow-500 to-orange-500 p-8 rounded-xl shadow-2xl text-center max-w-md mx-4 border-4 border-amber-300 animate-pulse">
              <div className="text-6xl mb-4">🏹</div>
              <h2 className="text-2xl font-bold text-white mb-2">Secret Achievement Discovered!</h2>
              <h3 className="text-lg font-semibold text-amber-100 mb-4">Aetos Dios</h3>
              <p className="text-amber-100 mb-6">
                You&apos;ve decoded the archer sequence! 🎯
              </p>
              <div className="space-y-3">
                <p className="text-sm text-amber-200 bg-black/20 p-3 rounded-lg">
                  📜 Check your achievements and unclaimed vouchers to claim your NFT!
                </p>
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg transition-colors border border-white/30"
                >
                  Continue Exploring
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {errorMessage && (
          <div className="absolute top-4 right-4 bg-red-500/90 backdrop-blur text-white p-4 rounded-lg shadow-lg max-w-md z-40">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">⚠️</span>
              <span className="font-semibold">Secret Quest Failed</span>
            </div>
            <p className="text-sm">{errorMessage}</p>
            <button
              onClick={() => setErrorMessage(null)}
              className="mt-2 text-xs bg-white/20 hover:bg-white/30 px-3 py-1 rounded transition-colors"
            >
              Dismiss
            </button>
          </div>
        )}

        
        <style jsx>{`
          /* SECRET ACHIEVEMENT ANIMATIONS ONLY */
          
          /* RED FLASH ANIMATION - For wrong archer click */
          @keyframes flash-red {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
          }

          .animate-flash-red { 
            animation: flash-red 0.5s ease-in-out; 
          }
        `}</style>
      </div>
    </Card>
  );
}

