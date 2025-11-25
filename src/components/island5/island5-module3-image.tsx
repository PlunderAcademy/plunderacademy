"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { useAccount } from "wagmi";
import { config } from "@/lib/config";

export function Island5Module3Image() {
  const { address } = useAccount();
  const [videoError, setVideoError] = useState(false);
  const [showTrinket, setShowTrinket] = useState(false);
  const [treasureFound, setTreasureFound] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showSparkles, setShowSparkles] = useState(false);

  // Show trinket after 30 seconds
  useEffect(() => {
    if (!address || treasureFound) return;
    
    const timer = setTimeout(() => {
      setShowTrinket(true);
    }, 30000); // 30 seconds

    return () => clearTimeout(timer);
  }, [address, treasureFound]);

  // Play success sound
  const playSuccessSound = () => {
    const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const audioContext = new AudioContextClass();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.1);
    oscillator.frequency.exponentialRampToValueAtTime(1600, audioContext.currentTime + 0.2);
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
  };

  // Submit secret achievement
  const submitSecretAchievement = async () => {
    if (!address || isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch(`${config.apiBaseUrl}/api/v1/vouchers/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          walletAddress: address,
          achievementNumber: "1005",
          submissionType: "secret",
          submissionData: {
            secretAnswer: "highfive",
          },
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setTreasureFound(true);
        setShowSuccessModal(true);
        setShowSparkles(true);
        
        // Dispatch event for achievement system
        window.dispatchEvent(new CustomEvent('achievementClaimed', {
          detail: { achievementNumber: "1005" }
        }));

        setTimeout(() => setShowSuccessModal(false), 5000);
        setTimeout(() => setShowSparkles(false), 3000);
      } else {
        setErrorMessage(data.message || 'Failed to claim achievement. Please try again.');
        setTimeout(() => setErrorMessage(null), 5000);
      }
    } catch (error) {
      console.error('Error submitting achievement:', error);
      setErrorMessage('Network error. Please try again.');
      setTimeout(() => setErrorMessage(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle trinket click
  const handleTrinketClick = () => {
    if (treasureFound || isSubmitting) return;
    playSuccessSound();
    submitSecretAchievement();
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
          poster="/islands/island5/island5-module3-image.webp"
          onError={() => setVideoError(true)}
        >
          <source src="/islands/island5/island5-module3-video.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback image shown only if video fails */}
        {videoError && (
          <Image
            src="/islands/island5/island5-module3-image.webp"
            alt="dApp Interface Practical - Neon Haven Adventure"
            fill
            className="object-cover"
            priority
          />
        )}
        
        {/* NO ANIMATED EFFECTS - Video/Image is clean, only secret trinket overlay */}
        
        {/* SECRET TRINKET - Zooms in dramatically after 30 seconds */}
        {address && showTrinket && !treasureFound && (
          <div className="absolute inset-0 pointer-events-none">
            {/* Radial glow behind trinket */}
            <div className="absolute top-[80%] left-[20%] -translate-x-1/2 -translate-y-1/2">
              <div className="absolute inset-0 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-cyan-400/30 via-purple-400/20 to-transparent rounded-full animate-trinket-glow"></div>
            </div>
            
            {/* Trinket image with zoom animation */}
            <div 
              className="absolute top-[80%] left-[20%] -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] pointer-events-auto cursor-pointer animate-trinket-zoom-in"
              onClick={handleTrinketClick}
              style={{
                filter: 'drop-shadow(0 0 30px rgba(6, 182, 212, 0.8)) drop-shadow(0 0 60px rgba(168, 85, 247, 0.6))',
              }}
            >
              <Image
                src="https://static.plunderswap.com/training/images/1005-trinket.webp"
                alt="Mysterious Trinket"
                fill
                className="object-contain animate-trinket-float"
                unoptimized
              />
            </div>

            {/* Sparkle particles around trinket */}
            <div className="absolute top-[80%] left-[20%] -translate-x-1/2 -translate-y-1/2">
              <div className="absolute top-[-80px] left-[-60px] w-[3px] h-[3px] bg-cyan-300/90 rounded-full animate-trinket-sparkle-1"></div>
              <div className="absolute top-[-70px] left-[50px] w-[3px] h-[3px] bg-purple-300/90 rounded-full animate-trinket-sparkle-2"></div>
              <div className="absolute top-[60px] left-[-70px] w-[3px] h-[3px] bg-pink-300/90 rounded-full animate-trinket-sparkle-3"></div>
              <div className="absolute top-[70px] left-[60px] w-[3px] h-[3px] bg-cyan-300/90 rounded-full animate-trinket-sparkle-4"></div>
              <div className="absolute top-[-50px] left-[0px] w-[3px] h-[3px] bg-purple-300/90 rounded-full animate-trinket-sparkle-5"></div>
              <div className="absolute top-[50px] left-[0px] w-[3px] h-[3px] bg-pink-300/90 rounded-full animate-trinket-sparkle-6"></div>
            </div>

            {/* Energy rings expanding */}
            <div className="absolute top-[80%] left-[20%] -translate-x-1/2 -translate-y-1/2">
              <div className="absolute inset-0 w-[250px] h-[250px] -translate-x-1/2 -translate-y-1/2 border-2 border-cyan-400/40 rounded-full animate-trinket-ring-1"></div>
              <div className="absolute inset-0 w-[280px] h-[280px] -translate-x-1/2 -translate-y-1/2 border-2 border-purple-400/35 rounded-full animate-trinket-ring-2"></div>
            </div>
          </div>
        )}

        {/* SUCCESS SPARKLES - After claiming */}
        {showSparkles && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[80%] left-[20%] -translate-x-1/2 -translate-y-1/2">
              {/* Explosive burst effect */}
              <div className="absolute top-[-100px] left-0 text-6xl animate-success-burst-1">✨</div>
              <div className="absolute top-[100px] left-0 text-6xl animate-success-burst-2">⭐</div>
              <div className="absolute top-0 left-[-100px] text-6xl animate-success-burst-3">💫</div>
              <div className="absolute top-0 left-[100px] text-6xl animate-success-burst-4">✨</div>
              <div className="absolute top-[-70px] left-[-70px] text-5xl animate-success-burst-5">⭐</div>
              <div className="absolute top-[-70px] left-[70px] text-5xl animate-success-burst-6">💫</div>
              <div className="absolute top-[70px] left-[-70px] text-5xl animate-success-burst-7">✨</div>
              <div className="absolute top-[70px] left-[70px] text-5xl animate-success-burst-8">⭐</div>
            </div>
          </div>
        )}

        {/* SUCCESS MODAL */}
        {showSuccessModal && (
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 p-8 rounded-xl shadow-2xl text-center max-w-md mx-4 border-4 border-cyan-300 animate-pulse">
              <div className="text-6xl mb-4">🏆</div>
              <h2 className="text-2xl font-bold text-white mb-2">Secret Achievement Discovered!</h2>
              <h3 className="text-lg font-semibold text-cyan-100 mb-4">High Five Trinket</h3>
              <p className="text-cyan-100 mb-6">
                You&apos;ve found the ultimate quantum secret! 🎉
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

        {/* ERROR MESSAGE */}
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
          /* TRINKET SECRET ACHIEVEMENT ANIMATIONS - Only styles needed */
          @keyframes trinket-zoom-in {
            filter: blur(8px);
            box-shadow: 0 0 30px currentColor;
          }
          
          .energy-beam-h {
            filter: blur(8px);
            box-shadow: 0 0 30px currentColor;
          }
          
          /* DATA & PARTICLE EFFECTS */
          .data-stream {
            box-shadow: 0 0 18px currentColor, 0 0 36px currentColor;
            filter: blur(0.5px);
          }
          
          .quantum-particle {
            box-shadow: 0 0 20px currentColor, 0 0 40px currentColor;
            filter: blur(0.5px);
          }
          
          /* MATRIX & STRUCTURE */
          .matrix-line {
            filter: blur(2px);
          }
          
          .structure-light {
            filter: blur(15px);
          }
          
          .floor-light {
            filter: blur(5px);
            box-shadow: 0 0 25px currentColor, 0 0 50px currentColor;
          }
          
          /* PORTAL & SCREEN EFFECTS */
          .portal-screen {
            filter: blur(20px);
          }
          
          /* ELECTRIC EFFECTS */
          .electric-arc {
            filter: blur(4px);
            box-shadow: 0 0 25px currentColor;
          }
          
          .arc-spark {
            box-shadow: 0 0 30px currentColor, 0 0 60px currentColor;
            filter: blur(0.3px);
          }
          
          /* HOLOGRAM EFFECTS */
          .hologram-symbol {
            filter: blur(1.5px);
            box-shadow: 0 0 20px currentColor inset, 0 0 20px currentColor;
          }
          
          .ceiling-light {
            box-shadow: 0 0 22px currentColor, 0 0 44px currentColor;
            filter: blur(1px);
          }
          
          .animate-effects .quantum-core,
          .animate-effects .energy-ring,
          .animate-effects .plasma-spark,
          .animate-effects .energy-beam,
          .animate-effects .energy-beam-h,
          .animate-effects .data-stream,
          .animate-effects .quantum-particle,
          .animate-effects .matrix-line,
          .animate-effects .structure-light,
          .animate-effects .floor-light,
          .animate-effects .portal-screen,
          .animate-effects .electric-arc,
          .animate-effects .arc-spark,
          .animate-effects .hologram-symbol,
          .animate-effects .ceiling-light {
            animation-play-state: running;
          }
          
          /* QUANTUM CORE ANIMATIONS */
          @keyframes quantum-core-1 {
            0%, 100% { opacity: 0.4; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.7; transform: scale(1.25) rotate(180deg); }
          }
          
          @keyframes quantum-core-2 {
            0%, 100% { opacity: 0.38; transform: scale(1) rotate(0deg); }
            60% { opacity: 0.68; transform: scale(1.28) rotate(-200deg); }
          }
          
          @keyframes quantum-core-3 {
            0%, 100% { opacity: 0.42; transform: scale(1) rotate(0deg); }
            55% { opacity: 0.72; transform: scale(1.3) rotate(220deg); }
          }
          
          @keyframes quantum-core-4 {
            0%, 100% { opacity: 0.5; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.85; transform: scale(1.4) rotate(-240deg); }
          }
          
          @keyframes energy-ring-1 {
            0%, 100% { opacity: 0.45; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.75; transform: scale(1.15) rotate(360deg); }
          }
          
          @keyframes energy-ring-2 {
            0%, 100% { opacity: 0.4; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.7; transform: scale(1.12) rotate(-360deg); }
          }
          
          @keyframes energy-ring-3 {
            0%, 100% { opacity: 0.35; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.65; transform: scale(1.18) rotate(360deg); }
          }
          
          @keyframes plasma-spark-1 {
            0%, 65%, 100% { opacity: 0; transform: scale(1); }
            70%, 80% { opacity: 0.98; transform: scale(3.5); }
            75% { opacity: 0.6; transform: scale(2.8); }
          }
          
          @keyframes plasma-spark-2 {
            0%, 70%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            75%, 85% { opacity: 1; transform: scale(3.8) rotate(360deg); }
            80% { opacity: 0.65; transform: scale(3) rotate(180deg); }
          }
          
          @keyframes plasma-spark-3 {
            0%, 68%, 100% { opacity: 0; transform: scale(1); }
            73%, 83% { opacity: 0.96; transform: scale(3.6); }
            78% { opacity: 0.62; transform: scale(2.9); }
          }
          
          @keyframes plasma-spark-4 {
            0%, 72%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            77%, 87% { opacity: 1; transform: scale(3.7) rotate(-360deg); }
            82% { opacity: 0.68; transform: scale(3.1) rotate(-180deg); }
          }
          
          @keyframes plasma-spark-5 {
            0%, 66%, 100% { opacity: 0; transform: scale(1); }
            71%, 81% { opacity: 0.98; transform: scale(3.5); }
            76% { opacity: 0.64; transform: scale(2.85); }
          }
          
          @keyframes plasma-spark-6 {
            0%, 74%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            79%, 89% { opacity: 1; transform: scale(3.9) rotate(360deg); }
            84% { opacity: 0.66; transform: scale(3.2) rotate(180deg); }
          }
          
          /* BEAM ANIMATIONS */
          @keyframes beam-vertical-1 {
            0%, 100% { opacity: 0.7; transform: scaleY(1); }
            50% { opacity: 1; transform: scaleY(1.15); }
          }
          
          @keyframes beam-vertical-2 {
            0%, 100% { opacity: 0.7; transform: scaleY(1); }
            60% { opacity: 1; transform: scaleY(1.12); }
          }
          
          @keyframes beam-h-1 {
            0%, 100% { opacity: 0.65; transform: scaleX(1); }
            50% { opacity: 0.95; transform: scaleX(1.08); }
          }
          
          @keyframes beam-h-2 {
            0%, 100% { opacity: 0.65; transform: scaleX(1); }
            60% { opacity: 0.95; transform: scaleX(1.1); }
          }
          
          @keyframes beam-angle-1 {
            0%, 100% { opacity: 0.6; transform: rotate(45deg) scale(1); }
            50% { opacity: 0.9; transform: rotate(45deg) scale(1.12); }
          }
          
          @keyframes beam-angle-2 {
            0%, 100% { opacity: 0.6; transform: rotate(-45deg) scale(1); }
            50% { opacity: 0.9; transform: rotate(-45deg) scale(1.12); }
          }
          
          /* DATA STREAM ANIMATIONS */
          @keyframes data-stream-1 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.9; transform: translateY(150px) translateX(80px); }
            100% { opacity: 0; transform: translateY(300px) translateX(160px); }
          }
          
          @keyframes data-stream-2 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.88; transform: translateY(140px) translateX(-70px); }
            100% { opacity: 0; transform: translateY(280px) translateX(-140px); }
          }
          
          @keyframes data-stream-3 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.92; transform: translateY(160px) translateX(60px); }
            100% { opacity: 0; transform: translateY(320px) translateX(120px); }
          }
          
          @keyframes data-stream-4 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.9; transform: translateY(145px) translateX(-75px); }
            100% { opacity: 0; transform: translateY(290px) translateX(-150px); }
          }
          
          @keyframes data-stream-5 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.88; transform: translateY(155px) translateX(65px); }
            100% { opacity: 0; transform: translateY(310px) translateX(130px); }
          }
          
          @keyframes data-stream-6 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.92; transform: translateY(150px) translateX(-80px); }
            100% { opacity: 0; transform: translateY(300px) translateX(-160px); }
          }
          
          @keyframes data-stream-7 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px); }
            50% { opacity: 0.88; transform: translateX(200px) translateY(30px); }
            100% { opacity: 0; transform: translateX(400px) translateY(60px); }
          }
          
          @keyframes data-stream-8 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px); }
            50% { opacity: 0.9; transform: translateX(180px) translateY(-25px); }
            100% { opacity: 0; transform: translateX(360px) translateY(-50px); }
          }
          
          @keyframes data-stream-9 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px); }
            50% { opacity: 0.88; transform: translateX(-190px) translateY(35px); }
            100% { opacity: 0; transform: translateX(-380px) translateY(70px); }
          }
          
          @keyframes data-stream-10 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px); }
            50% { opacity: 0.92; transform: translateX(-200px) translateY(-28px); }
            100% { opacity: 0; transform: translateX(-400px) translateY(-56px); }
          }
          
          @keyframes data-stream-11 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.9; transform: translateY(-140px) translateX(70px); }
            100% { opacity: 0; transform: translateY(-280px) translateX(140px); }
          }
          
          @keyframes data-stream-12 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.88; transform: translateY(-150px) translateX(-65px); }
            100% { opacity: 0; transform: translateY(-300px) translateX(-130px); }
          }
          
          @keyframes data-stream-13 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.9; transform: translateY(-145px) translateX(75px); }
            100% { opacity: 0; transform: translateY(-290px) translateX(150px); }
          }
          
          @keyframes data-stream-14 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.92; transform: translateY(-155px) translateX(-70px); }
            100% { opacity: 0; transform: translateY(-310px) translateX(-140px); }
          }
          
          /* MATRIX LINE ANIMATIONS */
          @keyframes matrix-h-1 {
            0%, 100% { opacity: 0.35; transform: scaleX(1); }
            50% { opacity: 0.6; transform: scaleX(1.05); }
          }
          
          @keyframes matrix-h-2 {
            0%, 100% { opacity: 0.32; transform: scaleX(1); }
            60% { opacity: 0.58; transform: scaleX(1.08); }
          }
          
          @keyframes matrix-h-3 {
            0%, 100% { opacity: 0.3; transform: scaleX(1); }
            55% { opacity: 0.55; transform: scaleX(1.06); }
          }
          
          @keyframes matrix-h-4 {
            0%, 100% { opacity: 0.33; transform: scaleX(1); }
            58% { opacity: 0.57; transform: scaleX(1.07); }
          }
          
          @keyframes matrix-v-1 {
            0%, 100% { opacity: 0.3; transform: scaleY(1); }
            50% { opacity: 0.55; transform: scaleY(1.05); }
          }
          
          @keyframes matrix-v-2 {
            0%, 100% { opacity: 0.28; transform: scaleY(1); }
            60% { opacity: 0.52; transform: scaleY(1.08); }
          }
          
          @keyframes matrix-v-3 {
            0%, 100% { opacity: 0.32; transform: scaleY(1); }
            55% { opacity: 0.58; transform: scaleY(1.06); }
          }
          
          @keyframes matrix-v-4 {
            0%, 100% { opacity: 0.3; transform: scaleY(1); }
            58% { opacity: 0.54; transform: scaleY(1.07); }
          }
          
          /* STRUCTURE ANIMATIONS */
          @keyframes structure-1 {
            0%, 100% { opacity: 0.35; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.12); }
          }
          
          @keyframes structure-2 {
            0%, 100% { opacity: 0.32; transform: scale(1); }
            60% { opacity: 0.58; transform: scale(1.1); }
          }
          
          @keyframes structure-3 {
            0%, 100% { opacity: 0.34; transform: scale(1); }
            55% { opacity: 0.6; transform: scale(1.14); }
          }
          
          @keyframes structure-4 {
            0%, 100% { opacity: 0.35; transform: scale(1); }
            58% { opacity: 0.62; transform: scale(1.11); }
          }
          
          @keyframes structure-5 {
            0%, 100% { opacity: 0.32; transform: scale(1); }
            52% { opacity: 0.56; transform: scale(1.13); }
          }
          
          @keyframes structure-6 {
            0%, 100% { opacity: 0.34; transform: scale(1); }
            56% { opacity: 0.6; transform: scale(1.15); }
          }
          
          @keyframes structure-7 {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.55; transform: scale(1.08); }
          }
          
          @keyframes structure-8 {
            0%, 100% { opacity: 0.28; transform: scale(1); }
            60% { opacity: 0.52; transform: scale(1.1); }
          }
          
          /* FLOOR LIGHT ANIMATIONS */
          @keyframes floor-light-1 {
            0%, 100% { opacity: 0.75; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.5); }
          }
          
          @keyframes floor-light-2 {
            0%, 100% { opacity: 0.72; transform: scale(1); }
            60% { opacity: 1; transform: scale(1.48); }
          }
          
          @keyframes floor-light-3 {
            0%, 100% { opacity: 0.78; transform: scale(1); }
            55% { opacity: 1; transform: scale(1.52); }
          }
          
          @keyframes floor-light-4 {
            0%, 100% { opacity: 0.75; transform: scale(1); }
            58% { opacity: 1; transform: scale(1.5); }
          }
          
          @keyframes floor-light-5 {
            0%, 100% { opacity: 0.8; transform: scale(1); }
            52% { opacity: 1; transform: scale(1.55); }
          }
          
          @keyframes floor-light-6 {
            0%, 100% { opacity: 0.76; transform: scale(1); }
            56% { opacity: 1; transform: scale(1.51); }
          }
          
          @keyframes floor-light-7 {
            0%, 100% { opacity: 0.78; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.53); }
          }
          
          @keyframes floor-light-8 {
            0%, 100% { opacity: 0.74; transform: scale(1); }
            54% { opacity: 1; transform: scale(1.49); }
          }
          
          @keyframes floor-light-9 {
            0%, 100% { opacity: 0.8; transform: scale(1); }
            58% { opacity: 1; transform: scale(1.56); }
          }
          
          /* QUANTUM FLOAT ANIMATIONS */
          @keyframes quantum-float-1 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.8; transform: translateY(-100px) translateX(40px) rotate(360deg); }
          }
          
          @keyframes quantum-float-2 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.78; transform: translateY(-95px) translateX(-35px) rotate(-360deg); }
          }
          
          @keyframes quantum-float-3 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.82; transform: translateY(-105px) translateX(45px) rotate(400deg); }
          }
          
          @keyframes quantum-float-4 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.8; transform: translateY(-98px) translateX(-40px) rotate(-380deg); }
          }
          
          @keyframes quantum-float-5 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.82; transform: translateY(-102px) translateX(38px) rotate(370deg); }
          }
          
          @keyframes quantum-float-6 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.78; transform: translateY(-96px) translateX(-42px) rotate(-390deg); }
          }
          
          @keyframes quantum-float-7 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.8; transform: translateY(-100px) translateX(43px) rotate(360deg); }
          }
          
          @keyframes quantum-float-8 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.82; transform: translateY(-104px) translateX(-37px) rotate(-370deg); }
          }
          
          @keyframes quantum-float-9 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.75; transform: translateY(-80px) translateX(30px); }
          }
          
          @keyframes quantum-float-10 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.72; transform: translateY(-85px) translateX(-28px); }
          }
          
          @keyframes quantum-float-11 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.78; transform: translateY(-90px) translateX(35px); }
          }
          
          @keyframes quantum-float-12 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.76; transform: translateY(-82px) translateX(-32px); }
          }
          
          @keyframes quantum-float-13 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.75; transform: translateY(-88px) translateX(33px); }
          }
          
          @keyframes quantum-float-14 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.78; transform: translateY(-86px) translateX(-34px); }
          }
          
          @keyframes quantum-float-15 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) scale(1); }
            50% { opacity: 0.85; transform: translateY(-60px) translateX(20px) scale(2.5); }
          }
          
          @keyframes quantum-float-16 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) scale(1); }
            50% { opacity: 0.88; transform: translateY(-65px) translateX(-22px) scale(2.8); }
          }
          
          @keyframes quantum-float-17 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) scale(1); }
            50% { opacity: 0.82; transform: translateY(-58px) translateX(24px) scale(2.6); }
          }
          
          @keyframes quantum-float-18 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) scale(1); }
            50% { opacity: 0.85; transform: translateY(-62px) translateX(-18px) scale(2.7); }
          }
          
          @keyframes quantum-float-19 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) scale(1); }
            50% { opacity: 0.8; transform: translateY(-64px) translateX(21px) scale(2.5); }
          }
          
          @keyframes quantum-float-20 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) scale(1); }
            50% { opacity: 0.88; transform: translateY(-66px) translateX(-23px) scale(2.9); }
          }
          
          /* PORTAL SCREEN ANIMATIONS */
          @keyframes portal-screen-1 {
            0%, 100% { opacity: 0.32; transform: scale(1); }
            50% { opacity: 0.55; transform: scale(1.1); }
          }
          
          @keyframes portal-screen-2 {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            60% { opacity: 0.52; transform: scale(1.08); }
          }
          
          @keyframes portal-screen-3 {
            0%, 100% { opacity: 0.32; transform: scale(1); }
            55% { opacity: 0.56; transform: scale(1.12); }
          }
          
          @keyframes portal-screen-4 {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            58% { opacity: 0.54; transform: scale(1.09); }
          }
          
          @keyframes portal-screen-5 {
            0%, 100% { opacity: 0.28; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.07); }
          }
          
          @keyframes portal-screen-6 {
            0%, 100% { opacity: 0.26; transform: scale(1); }
            60% { opacity: 0.48; transform: scale(1.1); }
          }
          
          @keyframes portal-screen-7 {
            0%, 100% { opacity: 0.28; transform: scale(1); }
            55% { opacity: 0.51; transform: scale(1.08); }
          }
          
          @keyframes portal-screen-8 {
            0%, 100% { opacity: 0.26; transform: scale(1); }
            58% { opacity: 0.49; transform: scale(1.11); }
          }
          
          /* ELECTRIC ARC ANIMATIONS */
          @keyframes arc-1 {
            0%, 100% { opacity: 0.7; transform: scaleX(1); }
            50% { opacity: 1; transform: scaleX(1.08); }
          }
          
          @keyframes arc-2 {
            0%, 100% { opacity: 0.7; transform: scaleX(1); }
            60% { opacity: 1; transform: scaleX(1.1); }
          }
          
          @keyframes arc-3 {
            0%, 100% { opacity: 0.75; transform: scaleY(1); }
            50% { opacity: 1; transform: scaleY(1.12); }
          }
          
          @keyframes arc-spark-1 {
            0%, 60%, 100% { opacity: 0; transform: scale(1); }
            65%, 75% { opacity: 0.95; transform: scale(3); }
            70% { opacity: 0.55; transform: scale(2.2); }
          }
          
          @keyframes arc-spark-2 {
            0%, 68%, 100% { opacity: 0; transform: scale(1); }
            73%, 83% { opacity: 0.95; transform: scale(3.2); }
            78% { opacity: 0.58; transform: scale(2.4); }
          }
          
          @keyframes arc-spark-3 {
            0%, 64%, 100% { opacity: 0; transform: scale(1); }
            69%, 79% { opacity: 0.95; transform: scale(3.1); }
            74% { opacity: 0.56; transform: scale(2.3); }
          }
          
          /* HOLOGRAM SYMBOL ANIMATIONS */
          @keyframes hologram-symbol-1 {
            0%, 100% { opacity: 0.55; transform: rotate(0deg) scale(1); }
            50% { opacity: 0.85; transform: rotate(180deg) scale(1.2); }
          }
          
          @keyframes hologram-symbol-2 {
            0%, 100% { opacity: 0.52; transform: rotate(45deg) scale(1); }
            50% { opacity: 0.82; transform: rotate(225deg) scale(1.18); }
          }
          
          @keyframes hologram-symbol-3 {
            0%, 100% { opacity: 0.54; transform: rotate(0deg) scale(1); }
            50% { opacity: 0.84; transform: rotate(-180deg) scale(1.22); }
          }
          
          @keyframes hologram-symbol-4 {
            0%, 100% { opacity: 0.5; transform: rotate(30deg) scale(1); }
            50% { opacity: 0.8; transform: rotate(210deg) scale(1.15); }
          }
          
          @keyframes hologram-symbol-5 {
            0%, 100% { opacity: 0.6; transform: rotate(45deg) scale(1); }
            50% { opacity: 0.9; transform: rotate(-315deg) scale(1.25); }
          }
          
          @keyframes hologram-symbol-6 {
            0%, 100% { opacity: 0.58; transform: rotate(-45deg) scale(1); }
            50% { opacity: 0.88; transform: rotate(315deg) scale(1.23); }
          }
          
          /* CEILING LIGHT ANIMATIONS */
          @keyframes ceiling-light-1 {
            0%, 100% { opacity: 0.85; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.6); }
          }
          
          @keyframes ceiling-light-2 {
            0%, 100% { opacity: 0.82; transform: scale(1); }
            60% { opacity: 1; transform: scale(1.58); }
          }
          
          @keyframes ceiling-light-3 {
            0%, 100% { opacity: 0.88; transform: scale(1); }
            55% { opacity: 1; transform: scale(1.62); }
          }
          
          @keyframes ceiling-light-4 {
            0%, 100% { opacity: 0.88; transform: scale(1); }
            58% { opacity: 1; transform: scale(1.63); }
          }
          
          @keyframes ceiling-light-5 {
            0%, 100% { opacity: 0.85; transform: scale(1); }
            52% { opacity: 1; transform: scale(1.6); }
          }
          
          @keyframes ceiling-light-6 {
            0%, 100% { opacity: 0.82; transform: scale(1); }
            56% { opacity: 1; transform: scale(1.58); }
          }
          
          /* ANIMATION CLASS ASSIGNMENTS */
          .animate-quantum-core-1 { animation: quantum-core-1 5s ease-in-out infinite; }
          .animate-quantum-core-2 { animation: quantum-core-2 6s ease-in-out infinite 0.8s; }
          .animate-quantum-core-3 { animation: quantum-core-3 5.5s ease-in-out infinite 1.6s; }
          .animate-quantum-core-4 { animation: quantum-core-4 7s ease-in-out infinite 2.4s; }
          
          .animate-energy-ring-1 { animation: energy-ring-1 8s linear infinite; }
          .animate-energy-ring-2 { animation: energy-ring-2 10s linear infinite 1s; }
          .animate-energy-ring-3 { animation: energy-ring-3 12s linear infinite 2s; }
          
          .animate-plasma-spark-1 { animation: plasma-spark-1 6s linear infinite; }
          .animate-plasma-spark-2 { animation: plasma-spark-2 7s linear infinite 1s; }
          .animate-plasma-spark-3 { animation: plasma-spark-3 6.5s linear infinite 2s; }
          .animate-plasma-spark-4 { animation: plasma-spark-4 8s linear infinite 3s; }
          .animate-plasma-spark-5 { animation: plasma-spark-5 6.2s linear infinite 4s; }
          .animate-plasma-spark-6 { animation: plasma-spark-6 7.5s linear infinite 5s; }
          
          .animate-beam-vertical-1 { animation: beam-vertical-1 4s ease-in-out infinite; }
          .animate-beam-vertical-2 { animation: beam-vertical-2 5s ease-in-out infinite 1s; }
          .animate-beam-h-1 { animation: beam-h-1 4.5s ease-in-out infinite; }
          .animate-beam-h-2 { animation: beam-h-2 5.5s ease-in-out infinite 1.5s; }
          .animate-beam-angle-1 { animation: beam-angle-1 6s ease-in-out infinite; }
          .animate-beam-angle-2 { animation: beam-angle-2 7s ease-in-out infinite 2s; }
          
          .animate-data-stream-1 { animation: data-stream-1 8s linear infinite; }
          .animate-data-stream-2 { animation: data-stream-2 9s linear infinite 1s; }
          .animate-data-stream-3 { animation: data-stream-3 8.5s linear infinite 2s; }
          .animate-data-stream-4 { animation: data-stream-4 10s linear infinite 3s; }
          .animate-data-stream-5 { animation: data-stream-5 8.8s linear infinite 4s; }
          .animate-data-stream-6 { animation: data-stream-6 9.5s linear infinite 5s; }
          .animate-data-stream-7 { animation: data-stream-7 10s linear infinite; }
          .animate-data-stream-8 { animation: data-stream-8 11s linear infinite 2s; }
          .animate-data-stream-9 { animation: data-stream-9 10.5s linear infinite 4s; }
          .animate-data-stream-10 { animation: data-stream-10 12s linear infinite 6s; }
          .animate-data-stream-11 { animation: data-stream-11 9s linear infinite 1s; }
          .animate-data-stream-12 { animation: data-stream-12 10s linear infinite 3s; }
          .animate-data-stream-13 { animation: data-stream-13 9.5s linear infinite 5s; }
          .animate-data-stream-14 { animation: data-stream-14 11s linear infinite 7s; }
          
          .animate-matrix-h-1 { animation: matrix-h-1 8s ease-in-out infinite; }
          .animate-matrix-h-2 { animation: matrix-h-2 9s ease-in-out infinite 2s; }
          .animate-matrix-h-3 { animation: matrix-h-3 8.5s ease-in-out infinite 4s; }
          .animate-matrix-h-4 { animation: matrix-h-4 10s ease-in-out infinite 6s; }
          .animate-matrix-v-1 { animation: matrix-v-1 7s ease-in-out infinite; }
          .animate-matrix-v-2 { animation: matrix-v-2 8s ease-in-out infinite 1.5s; }
          .animate-matrix-v-3 { animation: matrix-v-3 7.5s ease-in-out infinite 3s; }
          .animate-matrix-v-4 { animation: matrix-v-4 9s ease-in-out infinite 4.5s; }
          
          .animate-structure-1 { animation: structure-1 5s ease-in-out infinite; }
          .animate-structure-2 { animation: structure-2 5.5s ease-in-out infinite 1s; }
          .animate-structure-3 { animation: structure-3 5.2s ease-in-out infinite 2s; }
          .animate-structure-4 { animation: structure-4 5.8s ease-in-out infinite 3s; }
          .animate-structure-5 { animation: structure-5 5.3s ease-in-out infinite 1.5s; }
          .animate-structure-6 { animation: structure-6 5.6s ease-in-out infinite 2.5s; }
          .animate-structure-7 { animation: structure-7 6s ease-in-out infinite; }
          .animate-structure-8 { animation: structure-8 6.5s ease-in-out infinite 2s; }
          
          .animate-floor-light-1 { animation: floor-light-1 4s ease-in-out infinite; }
          .animate-floor-light-2 { animation: floor-light-2 4.5s ease-in-out infinite 0.5s; }
          .animate-floor-light-3 { animation: floor-light-3 4.2s ease-in-out infinite 1s; }
          .animate-floor-light-4 { animation: floor-light-4 4.8s ease-in-out infinite 1.5s; }
          .animate-floor-light-5 { animation: floor-light-5 4.3s ease-in-out infinite 2s; }
          .animate-floor-light-6 { animation: floor-light-6 4.6s ease-in-out infinite 2.5s; }
          .animate-floor-light-7 { animation: floor-light-7 4.4s ease-in-out infinite 3s; }
          .animate-floor-light-8 { animation: floor-light-8 4.7s ease-in-out infinite 3.5s; }
          .animate-floor-light-9 { animation: floor-light-9 4.9s ease-in-out infinite 4s; }
          
          .animate-quantum-float-1 { animation: quantum-float-1 18s ease-in-out infinite; }
          .animate-quantum-float-2 { animation: quantum-float-2 20s ease-in-out infinite 2s; }
          .animate-quantum-float-3 { animation: quantum-float-3 19s ease-in-out infinite 4s; }
          .animate-quantum-float-4 { animation: quantum-float-4 21s ease-in-out infinite 6s; }
          .animate-quantum-float-5 { animation: quantum-float-5 18.5s ease-in-out infinite 8s; }
          .animate-quantum-float-6 { animation: quantum-float-6 22s ease-in-out infinite 3s; }
          .animate-quantum-float-7 { animation: quantum-float-7 19.5s ease-in-out infinite 5s; }
          .animate-quantum-float-8 { animation: quantum-float-8 20.5s ease-in-out infinite 7s; }
          .animate-quantum-float-9 { animation: quantum-float-9 16s ease-in-out infinite 1s; }
          .animate-quantum-float-10 { animation: quantum-float-10 17s ease-in-out infinite 3s; }
          .animate-quantum-float-11 { animation: quantum-float-11 16.5s ease-in-out infinite 5s; }
          .animate-quantum-float-12 { animation: quantum-float-12 18s ease-in-out infinite 7s; }
          .animate-quantum-float-13 { animation: quantum-float-13 17.5s ease-in-out infinite 2s; }
          .animate-quantum-float-14 { animation: quantum-float-14 19s ease-in-out infinite 4s; }
          .animate-quantum-float-15 { animation: quantum-float-15 14s ease-in-out infinite; }
          .animate-quantum-float-16 { animation: quantum-float-16 15s ease-in-out infinite 2s; }
          .animate-quantum-float-17 { animation: quantum-float-17 14.5s ease-in-out infinite 4s; }
          .animate-quantum-float-18 { animation: quantum-float-18 16s ease-in-out infinite 6s; }
          .animate-quantum-float-19 { animation: quantum-float-19 15.5s ease-in-out infinite 3s; }
          .animate-quantum-float-20 { animation: quantum-float-20 17s ease-in-out infinite 5s; }
          
          .animate-portal-screen-1 { animation: portal-screen-1 6s ease-in-out infinite; }
          .animate-portal-screen-2 { animation: portal-screen-2 7s ease-in-out infinite 1s; }
          .animate-portal-screen-3 { animation: portal-screen-3 6.5s ease-in-out infinite 2s; }
          .animate-portal-screen-4 { animation: portal-screen-4 8s ease-in-out infinite 3s; }
          .animate-portal-screen-5 { animation: portal-screen-5 7.5s ease-in-out infinite 1.5s; }
          .animate-portal-screen-6 { animation: portal-screen-6 9s ease-in-out infinite 2.5s; }
          .animate-portal-screen-7 { animation: portal-screen-7 8.5s ease-in-out infinite 3.5s; }
          .animate-portal-screen-8 { animation: portal-screen-8 10s ease-in-out infinite 4.5s; }
          
          .animate-arc-1 { animation: arc-1 3s ease-in-out infinite; }
          .animate-arc-2 { animation: arc-2 3.5s ease-in-out infinite 0.8s; }
          .animate-arc-3 { animation: arc-3 4s ease-in-out infinite 1.5s; }
          
          .animate-arc-spark-1 { animation: arc-spark-1 5s linear infinite; }
          .animate-arc-spark-2 { animation: arc-spark-2 6s linear infinite 2s; }
          .animate-arc-spark-3 { animation: arc-spark-3 5.5s linear infinite 4s; }
          
          .animate-hologram-symbol-1 { animation: hologram-symbol-1 10s ease-in-out infinite; }
          .animate-hologram-symbol-2 { animation: hologram-symbol-2 12s ease-in-out infinite 2s; }
          .animate-hologram-symbol-3 { animation: hologram-symbol-3 11s ease-in-out infinite 4s; }
          .animate-hologram-symbol-4 { animation: hologram-symbol-4 13s ease-in-out infinite 6s; }
          .animate-hologram-symbol-5 { animation: hologram-symbol-5 9s ease-in-out infinite 1s; }
          .animate-hologram-symbol-6 { animation: hologram-symbol-6 11.5s ease-in-out infinite 3s; }
          
          .animate-ceiling-light-1 { animation: ceiling-light-1 5s ease-in-out infinite; }
          .animate-ceiling-light-2 { animation: ceiling-light-2 5.5s ease-in-out infinite 0.8s; }
          .animate-ceiling-light-3 { animation: ceiling-light-3 5.2s ease-in-out infinite 1.6s; }
          .animate-ceiling-light-4 { animation: ceiling-light-4 5.8s ease-in-out infinite 2.4s; }
          .animate-ceiling-light-5 { animation: ceiling-light-5 5.3s ease-in-out infinite 3.2s; }
          .animate-ceiling-light-6 { animation: ceiling-light-6 5.6s ease-in-out infinite 4s; }

          /* TRINKET SECRET ACHIEVEMENT ANIMATIONS */
          @keyframes trinket-zoom-in {
            0% { 
              opacity: 0; 
              transform: translate(-50%, -50%) scale(0.01) rotate(0deg); 
            }
            60% { 
              opacity: 1; 
              transform: translate(-50%, -50%) scale(1.2) rotate(360deg); 
            }
            80% { 
              transform: translate(-50%, -50%) scale(0.95) rotate(380deg); 
            }
            100% { 
              opacity: 1; 
              transform: translate(-50%, -50%) scale(1) rotate(360deg); 
            }
          }

          @keyframes trinket-float {
            0%, 100% { 
              transform: translateY(0px) rotate(0deg); 
            }
            50% { 
              transform: translateY(-15px) rotate(5deg); 
            }
          }

          @keyframes trinket-glow {
            0%, 100% { 
              opacity: 0.3; 
              transform: translate(-50%, -50%) scale(1); 
            }
            50% { 
              opacity: 0.6; 
              transform: translate(-50%, -50%) scale(1.3); 
            }
          }

          @keyframes trinket-ring-1 {
            0% { 
              opacity: 0.4; 
              transform: translate(-50%, -50%) scale(0.8) rotate(0deg); 
            }
            100% { 
              opacity: 0; 
              transform: translate(-50%, -50%) scale(1.8) rotate(360deg); 
            }
          }

          @keyframes trinket-ring-2 {
            0% { 
              opacity: 0.35; 
              transform: translate(-50%, -50%) scale(0.8) rotate(0deg); 
            }
            100% { 
              opacity: 0; 
              transform: translate(-50%, -50%) scale(2) rotate(-360deg); 
            }
          }

          @keyframes trinket-sparkle-1 {
            0%, 100% { 
              opacity: 0; 
              transform: scale(1); 
            }
            50% { 
              opacity: 0.9; 
              transform: scale(3.5); 
            }
          }

          @keyframes trinket-sparkle-2 {
            0%, 100% { 
              opacity: 0; 
              transform: scale(1); 
            }
            50% { 
              opacity: 0.9; 
              transform: scale(3.8); 
            }
          }

          @keyframes trinket-sparkle-3 {
            0%, 100% { 
              opacity: 0; 
              transform: scale(1); 
            }
            50% { 
              opacity: 0.9; 
              transform: scale(3.6); 
            }
          }

          @keyframes trinket-sparkle-4 {
            0%, 100% { 
              opacity: 0; 
              transform: scale(1); 
            }
            50% { 
              opacity: 0.9; 
              transform: scale(4); 
            }
          }

          @keyframes trinket-sparkle-5 {
            0%, 100% { 
              opacity: 0; 
              transform: scale(1); 
            }
            50% { 
              opacity: 0.9; 
              transform: scale(3.7); 
            }
          }

          @keyframes trinket-sparkle-6 {
            0%, 100% { 
              opacity: 0; 
              transform: scale(1); 
            }
            50% { 
              opacity: 0.9; 
              transform: scale(3.9); 
            }
          }

          @keyframes success-burst-1 {
            0% { opacity: 0; transform: translate(0, 0) scale(0.5); }
            50% { opacity: 1; transform: translate(-50px, -150px) scale(1.5) rotate(180deg); }
            100% { opacity: 0; transform: translate(-100px, -300px) scale(0.3) rotate(360deg); }
          }

          @keyframes success-burst-2 {
            0% { opacity: 0; transform: translate(0, 0) scale(0.5); }
            50% { opacity: 1; transform: translate(50px, 150px) scale(1.5) rotate(-180deg); }
            100% { opacity: 0; transform: translate(100px, 300px) scale(0.3) rotate(-360deg); }
          }

          @keyframes success-burst-3 {
            0% { opacity: 0; transform: translate(0, 0) scale(0.5); }
            50% { opacity: 1; transform: translate(-150px, 50px) scale(1.5) rotate(180deg); }
            100% { opacity: 0; transform: translate(-300px, 100px) scale(0.3) rotate(360deg); }
          }

          @keyframes success-burst-4 {
            0% { opacity: 0; transform: translate(0, 0) scale(0.5); }
            50% { opacity: 1; transform: translate(150px, -50px) scale(1.5) rotate(-180deg); }
            100% { opacity: 0; transform: translate(300px, -100px) scale(0.3) rotate(-360deg); }
          }

          @keyframes success-burst-5 {
            0% { opacity: 0; transform: translate(0, 0) scale(0.5); }
            50% { opacity: 1; transform: translate(-120px, -120px) scale(1.4) rotate(200deg); }
            100% { opacity: 0; transform: translate(-240px, -240px) scale(0.3) rotate(400deg); }
          }

          @keyframes success-burst-6 {
            0% { opacity: 0; transform: translate(0, 0) scale(0.5); }
            50% { opacity: 1; transform: translate(120px, -120px) scale(1.4) rotate(-200deg); }
            100% { opacity: 0; transform: translate(240px, -240px) scale(0.3) rotate(-400deg); }
          }

          @keyframes success-burst-7 {
            0% { opacity: 0; transform: translate(0, 0) scale(0.5); }
            50% { opacity: 1; transform: translate(-120px, 120px) scale(1.4) rotate(200deg); }
            100% { opacity: 0; transform: translate(-240px, 240px) scale(0.3) rotate(400deg); }
          }

          @keyframes success-burst-8 {
            0% { opacity: 0; transform: translate(0, 0) scale(0.5); }
            50% { opacity: 1; transform: translate(120px, 120px) scale(1.4) rotate(-200deg); }
            100% { opacity: 0; transform: translate(240px, 240px) scale(0.3) rotate(-400deg); }
          }

          /* TRINKET ANIMATION CLASS ASSIGNMENTS */
          .animate-trinket-zoom-in { animation: trinket-zoom-in 2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
          .animate-trinket-float { animation: trinket-float 3s ease-in-out infinite; }
          .animate-trinket-glow { animation: trinket-glow 4s ease-in-out infinite; }
          .animate-trinket-ring-1 { animation: trinket-ring-1 3s ease-out infinite; }
          .animate-trinket-ring-2 { animation: trinket-ring-2 3.5s ease-out infinite 0.5s; }
          
          .animate-trinket-sparkle-1 { animation: trinket-sparkle-1 2s ease-in-out infinite; }
          .animate-trinket-sparkle-2 { animation: trinket-sparkle-2 2.2s ease-in-out infinite 0.3s; }
          .animate-trinket-sparkle-3 { animation: trinket-sparkle-3 2.1s ease-in-out infinite 0.6s; }
          .animate-trinket-sparkle-4 { animation: trinket-sparkle-4 2.4s ease-in-out infinite 0.9s; }
          .animate-trinket-sparkle-5 { animation: trinket-sparkle-5 2.3s ease-in-out infinite 1.2s; }
          .animate-trinket-sparkle-6 { animation: trinket-sparkle-6 2.5s ease-in-out infinite 1.5s; }
          
          .animate-success-burst-1 { animation: success-burst-1 2s ease-out forwards; }
          .animate-success-burst-2 { animation: success-burst-2 2s ease-out forwards 0.1s; }
          .animate-success-burst-3 { animation: success-burst-3 2s ease-out forwards 0.2s; }
          .animate-success-burst-4 { animation: success-burst-4 2s ease-out forwards 0.3s; }
          .animate-success-burst-5 { animation: success-burst-5 2s ease-out forwards 0.4s; }
          .animate-success-burst-6 { animation: success-burst-6 2s ease-out forwards 0.5s; }
          .animate-success-burst-7 { animation: success-burst-7 2s ease-out forwards 0.6s; }
          .animate-success-burst-8 { animation: success-burst-8 2s ease-out forwards 0.7s; }
        `}</style>
      </div>
    </Card>
  );
}

