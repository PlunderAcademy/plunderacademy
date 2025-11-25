"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { useAccount } from "wagmi";
import { config } from "@/lib/config";

export function Island2Module2Image() {
  const { address } = useAccount();
  const [videoError, setVideoError] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [treasureFound, setTreasureFound] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showFrostParticles, setShowFrostParticles] = useState(false);

  // Play ice cracking sound effect
  const playIceSound = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;
      
      const audioContext = new AudioContextClass();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Create an "ice crack" sound
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.15);
      
      gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
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
      achievementNumber: "1002",
      submissionType: "secret",
      submissionData: {
        secretAnswer: "justasecond"
      },
      metadata: {
        timestamp: new Date().toISOString(),
        discoveryMethod: "igloo_exploration"
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

  // Handle igloo clicks
  const handleIglooClick = async () => {
    if (!address || treasureFound || isSubmitting) return;
    
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);
    
    playIceSound();
    setShowFrostParticles(true);
    
    setTimeout(() => {
      setShowFrostParticles(false);
    }, 600);
    
    if (newClickCount >= 3) {
      await submitSecretAchievement();
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
          poster="/islands/island2/island2-module2-image.webp"
          onError={() => setVideoError(true)}
        >
          <source src="/islands/island2/island2-module2-video.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback image shown only if video fails */}
        {videoError && (
          <Image
            src="/islands/island2/island2-module2-image.webp"
            alt="Advanced Data Structures & Error Handling - Frost Peak Adventure"
            fill
            className="object-cover"
            priority
          />
        )}
        
        {/* NO ANIMATED EFFECTS - Video is clean, only secret achievement overlays */}
        
        {/* Secret Achievement - Clickable Igloo */}
        {address && !treasureFound && (
          <div className="absolute inset-0 pointer-events-none">
              {/* Frost particles animation when clicking */}
              {showFrostParticles && (
                <>
                  {/* Ice crystals bursting out - centered on igloo */}
                  <div className="absolute top-[70%] left-[19.5%] w-[4px] h-[4px] bg-cyan-300/100 rounded-full pointer-events-none" style={{ animation: 'frost-burst 0.6s ease-out forwards' }} />
                  <div className="absolute top-[68%] left-[21.5%] w-[3px] h-[3px] bg-white/100 rounded-full pointer-events-none" style={{ animation: 'frost-burst 0.6s ease-out forwards', animationDelay: '0.1s' }} />
                  <div className="absolute top-[72%] left-[18.5%] w-[3px] h-[3px] bg-blue-200/100 rounded-full pointer-events-none" style={{ animation: 'frost-burst 0.6s ease-out forwards', animationDelay: '0.05s' }} />
                  <div className="absolute top-[69%] left-[20.5%] w-[2px] h-[2px] bg-cyan-100/100 rounded-full pointer-events-none" style={{ animation: 'frost-burst 0.6s ease-out forwards', animationDelay: '0.15s' }} />
                  <div className="absolute top-[71%] left-[22.5%] w-[2px] h-[2px] bg-white/100 rounded-full pointer-events-none" style={{ animation: 'frost-burst 0.6s ease-out forwards', animationDelay: '0.08s' }} />
                </>
              )}
              
              {/* Success sparkles after treasure found */}
              {treasureFound && (
                <>
                  <div className="absolute top-[60%] left-[19.5%] text-2xl animate-pulse pointer-events-none">❄️</div>
                  <div className="absolute top-[70%] left-[17.5%] text-xl animate-pulse pointer-events-none" style={{ animationDelay: '0.3s' }}>✨</div>
                  <div className="absolute top-[68%] left-[23.5%] text-xl animate-pulse pointer-events-none" style={{ animationDelay: '0.6s' }}>❄️</div>
                </>
              )}
            </div>
          )}
        
        {/* Clickable igloo area (bottom left cabin) - Secret! */}
        {address && !treasureFound && !isSubmitting && (
          <div
            className="absolute top-[66%] left-[17.5%] w-[8%] h-[15%] cursor-pointer pointer-events-auto z-10"
            onClick={handleIglooClick}
          />
        )}
        
        {/* Success Modal */}
        {showSuccessModal && (
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-gradient-to-br from-cyan-400 to-blue-600 p-8 rounded-xl shadow-2xl text-center max-w-md mx-4 border-4 border-cyan-300 animate-pulse">
              <div className="text-6xl mb-4">❄️</div>
              <h2 className="text-2xl font-bold text-white mb-2">Secret Achievement Discovered!</h2>
              <h3 className="text-lg font-semibold text-cyan-100 mb-4">Arctic Majesty</h3>
              <p className="text-cyan-100 mb-6">
                You&apos;ve uncovered the hidden igloo secret! 🎉
              </p>
              <div className="space-y-3">
                <p className="text-sm text-cyan-200 bg-black/20 p-3 rounded-lg">
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

        
        <style jsx global>{`
          @keyframes frost-burst {
            0% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.8;
              transform: translateX(-20px) translateY(-30px) scale(1.5);
            }
            100% {
              opacity: 0;
              transform: translateX(-30px) translateY(-50px) scale(0.5);
            }
          }
        `}</style>
      </div>
    </Card>
  );
}

