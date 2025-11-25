"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { useAccount } from "wagmi";
import { config } from "@/lib/config";

export function Island3Module3Image() {
  const { address } = useAccount();
  const [videoError, setVideoError] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [treasureFound, setTreasureFound] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showGoldParticles, setShowGoldParticles] = useState(false);
  const [activeShineSpot, setActiveShineSpot] = useState<number | null>(null); // null = no shine, 0/1/2 = active spot
  const [elapsedTime, setElapsedTime] = useState(0); // Track elapsed time in seconds

  // Three dune locations that will shine - updated positions
  const shineSpots = [
    { top: 40, left: 7, label: "Top Dune" },      // First: 40% x, 7% y
    { top: 95, left: 50, label: "Right Dune" },   // Second: 95% x, 50% y  
    { top: 50, left: 93, label: "Bottom Dune" }   // Third: 50% x, 93% y
  ];

  // Timing: 30s wait, then 15s shine, then 30s wait, repeat
  // Spot 0: appears at 30s, visible 30-45s
  // Spot 1: appears at 75s, visible 75-90s
  // Spot 2: appears at 120s, visible 120-135s
  useEffect(() => {
    if (treasureFound) return;

    const interval = setInterval(() => {
      setElapsedTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [treasureFound]);

  // Determine which spot should be shining based on elapsed time
  useEffect(() => {
    if (treasureFound) return;

    const cycleTime = elapsedTime % 135;
    
    // Spot 0: 30-45s (30s wait, then 15s shine)
    if (cycleTime >= 30 && cycleTime < 45) {
      setActiveShineSpot(0);
    }
    // Spot 1: 75-90s (30 + 15 + 30 = 75)
    else if (cycleTime >= 75 && cycleTime < 90) {
      setActiveShineSpot(1);
    }
    // Spot 2: 120-135s (75 + 15 + 30 = 120)
    else if (cycleTime >= 120 && cycleTime < 135) {
      setActiveShineSpot(2);
    }
    else {
      setActiveShineSpot(null); // No shine visible
    }
  }, [elapsedTime, treasureFound]);

  // Play golden chime sound effect
  const playGoldenSound = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;
      
      const audioContext = new AudioContextClass();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Create a "golden chime" sound
      oscillator.frequency.setValueAtTime(1200, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.3);
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.4);
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
      achievementNumber: "1003",
      submissionType: "secret",
      submissionData: {
        secretAnswer: "goodthingscomeinthrees"
      },
      metadata: {
        timestamp: new Date().toISOString(),
        discoveryMethod: "golden_dunes_discovery"
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

  // Handle dune clicks
  const handleDuneClick = async () => {
    if (!address || treasureFound || isSubmitting) return;
    
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);
    
    playGoldenSound();
    setShowGoldParticles(true);
    
    setTimeout(() => {
      setShowGoldParticles(false);
    }, 800);
    
    // Need to click all 3 shining spots
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
          poster="/islands/island3/island3-module3-image.webp"
          onError={() => setVideoError(true)}
        >
          <source src="/islands/island3/island3-module3-video.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback image shown only if video fails */}
        {videoError && (
          <Image
            src="/islands/island3/island3-module3-image.webp"
            alt="NFT Collection Practical - Desert Bluff Adventure"
            fill
            className="object-cover"
            priority
          />
        )}
        
        {/* NO ANIMATED EFFECTS - Video is clean, only secret achievement overlays */}
        
        {/* SECRET ACHIEVEMENT - Golden Ram's Head Shine Spots */}
        {address && !treasureFound && (
          <div className="absolute inset-0 pointer-events-none">
              {/* Three rotating golden shine spots in the dunes */}
              {shineSpots.map((spot, index) => {
                const isActive = activeShineSpot === index;
                return (
                  <div key={index} className="absolute" style={{ top: `${spot.top}%`, left: `${spot.left}%` }}>
                    {/* Massive golden glow when active */}
                    {isActive && (
                      <>
                        {/* Outer massive glow */}
                        <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] bg-yellow-300/60 rounded-full golden-burst animate-golden-burst-massive" style={{ filter: 'blur(50px)' }} />
                        <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[90px] h-[90px] bg-orange-300/70 rounded-full golden-burst animate-golden-burst-medium" style={{ filter: 'blur(40px)', animationDelay: '0.2s' }} />
                        <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-yellow-200/80 rounded-full golden-burst animate-golden-burst-core" style={{ filter: 'blur(30px)', animationDelay: '0.4s' }} />
                        
                        {/* Bright center sparkle */}
                        <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[10px] h-[10px] bg-yellow-100/100 rounded-full golden-sparkle animate-golden-sparkle" style={{ boxShadow: '0 0 60px #fef08a, 0 0 120px #fef08a, 0 0 180px #fef08a' }} />
                        
                        {/* Radiating particles */}
                        <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] bg-yellow-300/100 rounded-full golden-particle animate-golden-particle-1" style={{ boxShadow: '0 0 40px currentColor, 0 0 80px currentColor' }} />
                        <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[5px] h-[5px] bg-orange-300/100 rounded-full golden-particle animate-golden-particle-2" style={{ boxShadow: '0 0 35px currentColor, 0 0 70px currentColor' }} />
                        <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] bg-yellow-200/100 rounded-full golden-particle animate-golden-particle-3" style={{ boxShadow: '0 0 38px currentColor, 0 0 76px currentColor' }} />
                        <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[5px] h-[5px] bg-orange-200/100 rounded-full golden-particle animate-golden-particle-4" style={{ boxShadow: '0 0 36px currentColor, 0 0 72px currentColor' }} />
                      </>
                    )}
                  </div>
                );
              })}
              
              {/* Gold particles when clicking - positioned at active spot */}
              {showGoldParticles && activeShineSpot !== null && (
                <>
                  {/* Explosive gold burst centered on the active spot */}
                  <div className="absolute w-[8px] h-[8px] bg-yellow-300/100 rounded-full pointer-events-none" style={{ top: `${shineSpots[activeShineSpot].top}%`, left: `${shineSpots[activeShineSpot].left}%`, animation: 'gold-burst 0.8s ease-out forwards' }} />
                  <div className="absolute w-[6px] h-[6px] bg-orange-300/100 rounded-full pointer-events-none" style={{ top: `${shineSpots[activeShineSpot].top - 2}%`, left: `${shineSpots[activeShineSpot].left + 2}%`, animation: 'gold-burst 0.8s ease-out forwards', animationDelay: '0.1s' }} />
                  <div className="absolute w-[7px] h-[7px] bg-yellow-200/100 rounded-full pointer-events-none" style={{ top: `${shineSpots[activeShineSpot].top + 2}%`, left: `${shineSpots[activeShineSpot].left - 2}%`, animation: 'gold-burst 0.8s ease-out forwards', animationDelay: '0.05s' }} />
                  <div className="absolute w-[5px] h-[5px] bg-orange-200/100 rounded-full pointer-events-none" style={{ top: `${shineSpots[activeShineSpot].top - 1}%`, left: `${shineSpots[activeShineSpot].left + 1}%`, animation: 'gold-burst 0.8s ease-out forwards', animationDelay: '0.15s' }} />
                  <div className="absolute w-[6px] h-[6px] bg-yellow-400/100 rounded-full pointer-events-none" style={{ top: `${shineSpots[activeShineSpot].top + 1}%`, left: `${shineSpots[activeShineSpot].left - 1}%`, animation: 'gold-burst 0.8s ease-out forwards', animationDelay: '0.08s' }} />
                </>
              )}
              
              {/* Success golden aura after treasure found */}
              {treasureFound && (
                <>
                  <div className="absolute top-[40%] left-[7%] text-3xl animate-pulse pointer-events-none" style={{ filter: 'drop-shadow(0 0 20px gold)' }}>✨</div>
                  <div className="absolute top-[95%] left-[50%] text-3xl animate-pulse pointer-events-none" style={{ filter: 'drop-shadow(0 0 20px gold)', animationDelay: '0.3s' }}>🏆</div>
                  <div className="absolute top-[50%] left-[93%] text-3xl animate-pulse pointer-events-none" style={{ filter: 'drop-shadow(0 0 20px gold)', animationDelay: '0.6s' }}>✨</div>
                </>
              )}
            </div>
          )}
        
        {/* Clickable areas - only active when that spot is shining */}
        {address && !treasureFound && !isSubmitting && shineSpots.map((spot, index) => {
          const isActive = activeShineSpot === index;
          if (!isActive) return null;
          
          return (
            <div
              key={`clickable-${index}`}
              className="absolute cursor-pointer pointer-events-auto z-10"
              style={{
                top: `${spot.top - 4}%`,
                left: `${spot.left - 4}%`,
                width: '8%',
                height: '8%'
              }}
              onClick={handleDuneClick}
            />
          );
        })}
        
        {/* Success Modal */}
        {showSuccessModal && (
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-gradient-to-br from-yellow-400 via-orange-400 to-amber-600 p-8 rounded-xl shadow-2xl text-center max-w-md mx-4 border-4 border-yellow-300 animate-pulse">
              <div className="text-6xl mb-4">🏆</div>
              <h2 className="text-2xl font-bold text-white mb-2">Secret Achievement Discovered!</h2>
              <h3 className="text-lg font-semibold text-yellow-100 mb-4">Golden Ram&apos;s Head</h3>
              <p className="text-yellow-100 mb-6">
                You&apos;ve found all three golden dunes! 🎉
              </p>
              <div className="space-y-3">
                <p className="text-sm text-yellow-200 bg-black/20 p-3 rounded-lg">
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
          @keyframes golden-burst-massive {
            0%, 100% {
              opacity: 0;
              transform: scale(0.5);
            }
            50% {
              opacity: 0.6;
              transform: scale(1.2);
            }
          }
          
          @keyframes golden-burst-medium {
            0%, 100% {
              opacity: 0;
              transform: scale(0.6);
            }
            50% {
              opacity: 0.7;
              transform: scale(1.15);
            }
          }
          
          @keyframes golden-burst-core {
            0%, 100% {
              opacity: 0;
              transform: scale(0.7);
            }
            50% {
              opacity: 0.8;
              transform: scale(1.1);
            }
          }
          
          @keyframes golden-sparkle {
            0%, 100% {
              opacity: 0.8;
              transform: scale(1) rotate(0deg);
            }
            25% {
              opacity: 1;
              transform: scale(1.5) rotate(90deg);
            }
            50% {
              opacity: 0.9;
              transform: scale(1.2) rotate(180deg);
            }
            75% {
              opacity: 1;
              transform: scale(1.4) rotate(270deg);
            }
          }
          
          @keyframes golden-particle-1 {
            0%, 100% {
              opacity: 0;
              transform: translate(0, 0) scale(1);
            }
            25% {
              opacity: 1;
              transform: translate(-25px, -25px) scale(1.5);
            }
            50% {
              opacity: 0.8;
              transform: translate(-35px, -35px) scale(1.2);
            }
            75% {
              opacity: 0.4;
              transform: translate(-45px, -45px) scale(0.8);
            }
          }
          
          @keyframes golden-particle-2 {
            0%, 100% {
              opacity: 0;
              transform: translate(0, 0) scale(1) rotate(0deg);
            }
            25% {
              opacity: 1;
              transform: translate(25px, -25px) scale(1.5) rotate(120deg);
            }
            50% {
              opacity: 0.8;
              transform: translate(35px, -35px) scale(1.2) rotate(240deg);
            }
            75% {
              opacity: 0.4;
              transform: translate(45px, -45px) scale(0.8) rotate(360deg);
            }
          }
          
          @keyframes golden-particle-3 {
            0%, 100% {
              opacity: 0;
              transform: translate(0, 0) scale(1);
            }
            25% {
              opacity: 1;
              transform: translate(-25px, 25px) scale(1.5);
            }
            50% {
              opacity: 0.8;
              transform: translate(-35px, 35px) scale(1.2);
            }
            75% {
              opacity: 0.4;
              transform: translate(-45px, 45px) scale(0.8);
            }
          }
          
          @keyframes golden-particle-4 {
            0%, 100% {
              opacity: 0;
              transform: translate(0, 0) scale(1) rotate(0deg);
            }
            25% {
              opacity: 1;
              transform: translate(25px, 25px) scale(1.5) rotate(-120deg);
            }
            50% {
              opacity: 0.8;
              transform: translate(35px, 35px) scale(1.2) rotate(-240deg);
            }
            75% {
              opacity: 0.4;
              transform: translate(45px, 45px) scale(0.8) rotate(-360deg);
            }
          }
          
          @keyframes gold-burst {
            0% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.9;
              transform: translateX(-40px) translateY(-40px) scale(2);
            }
            100% {
              opacity: 0;
              transform: translateX(-60px) translateY(-60px) scale(0.5);
            }
          }
          
          .animate-golden-burst-massive {
            animation: golden-burst-massive 3s ease-in-out infinite;
          }
          .animate-golden-burst-medium {
            animation: golden-burst-medium 3s ease-in-out infinite;
          }
          .animate-golden-burst-core {
            animation: golden-burst-core 3s ease-in-out infinite;
          }
          .animate-golden-sparkle {
            animation: golden-sparkle 2s linear infinite;
          }
          .animate-golden-particle-1 {
            animation: golden-particle-1 3s ease-out infinite;
          }
          .animate-golden-particle-2 {
            animation: golden-particle-2 3s ease-out infinite 0.5s;
          }
          .animate-golden-particle-3 {
            animation: golden-particle-3 3s ease-out infinite 1s;
          }
          .animate-golden-particle-4 {
            animation: golden-particle-4 3s ease-out infinite 1.5s;
          }
        `}</style>
      </div>
    </Card>
  );
}

