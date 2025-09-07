"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Pause, RotateCcw, Zap } from "lucide-react";

interface AnimatedModuleImageProps {
  imageNumber: number;
  autoStart?: boolean;
}

export function AnimatedModuleImage({ 
  imageNumber, 
  autoStart = true
}: AnimatedModuleImageProps) {
  const [isAnimating, setIsAnimating] = useState(autoStart);

  const handleToggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  const handleReset = () => {
    setIsAnimating(false);
    setTimeout(() => setIsAnimating(true), 100);
  };

  // Configuration for different images - you can expand this
  const getEffectsConfig = (imageNum: number) => {
    switch (imageNum) {
      case 1:
        return {
          theme: "volcanic",
          effects: ["lightning", "volcanoGlow", "smoke", "embers", "coins", "ambientFire"],
          description: "⚡ Lightning strikes, volcano glows, coins sparkle around temple"
        };
      default:
        return {
          theme: "adventure",
          effects: ["lightning", "glow", "particles"],
          description: "✨ Magical effects active"
        };
    }
  };

  const config = getEffectsConfig(imageNumber);

  return (
    <div className="w-full space-y-6">
      {/* Controls */}
      <Card className="p-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Button
              onClick={handleToggleAnimation}
              size="sm"
              className="flex items-center gap-2"
            >
              {isAnimating ? (
                <>
                  <Pause className="w-4 h-4" />
                  Pause Effects
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  Start Effects
                </>
              )}
            </Button>
            <Button
              onClick={handleReset}
              size="sm"
              variant="outline"
              className="flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </Button>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Zap className="w-4 h-4" />
            <span>Adventure Effects</span>
          </div>
        </div>
      </Card>

      {/* Animated Image Container */}
      <Card className="relative overflow-hidden">
        <div className="relative w-full aspect-[16/9]">
          {/* Base image */}
          <img
            src={`/module-images/${imageNumber}.png`}
            alt={`Adventure scene ${imageNumber}`}
            className="w-full h-full object-cover"
          />
          
          {/* Animated overlay effects */}
          <div className={`absolute inset-0 ${isAnimating ? 'animate-effects' : ''}`}>
            
            {/* Lightning Effects */}
            <div className="absolute inset-0 lightning-container">
              <div className="absolute top-[10%] left-[20%] w-1 h-[30%] bg-white/90 lightning animate-lightning-1"></div>
              <div className="absolute top-[15%] right-[25%] w-1 h-[25%] bg-blue-100/80 lightning animate-lightning-2"></div>
              <div className="absolute top-[5%] left-[60%] w-1 h-[35%] bg-white/70 lightning animate-lightning-3"></div>
              
              {/* Lightning flash overlay */}
              <div className="absolute inset-0 bg-white/20 lightning-flash animate-flash-1"></div>
              <div className="absolute inset-0 bg-blue-100/15 lightning-flash animate-flash-2"></div>
            </div>

            {/* Volcano Glow Effects */}
            <div className="absolute inset-0">
              {/* Main volcano glow - POSITIONING: Adjust top-[X%] and left-[X%] to move */}

              <div className="absolute top-[30%] left-[55%] -translate-x-1/2 w-[100px] h-[50px] bg-red-500/40 rounded-full volcano-glow animate-volcano-pulse-delay"></div>
              <div className="absolute top-[35%] left-[55%] -translate-x-1/2 w-[60px] h-[30px] bg-yellow-300/40 rounded-full volcano-glow animate-volcano-flicker"></div>
            </div>

            {/* Smoke Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-[10%] left-[48%] w-[20px] h-[20px] bg-gray-400/30 rounded-full smoke animate-smoke-rise-1"></div>
              <div className="absolute top-[15%] left-[52%] w-[15px] h-[15px] bg-gray-500/25 rounded-full smoke animate-smoke-rise-2"></div>
              <div className="absolute top-[12%] left-[45%] w-[25px] h-[25px] bg-gray-300/20 rounded-full smoke animate-smoke-rise-3"></div>
            </div>

            {/* Floating Embers */}
            <div className="absolute inset-0">
              <div className="absolute top-[40%] left-[30%] w-[3px] h-[3px] bg-orange-400 rounded-full ember animate-ember-float-1"></div>
              <div className="absolute top-[50%] left-[70%] w-[2px] h-[2px] bg-red-400 rounded-full ember animate-ember-float-2"></div>
              <div className="absolute top-[35%] left-[60%] w-[3px] h-[3px] bg-yellow-400 rounded-full ember animate-ember-float-3"></div>
              <div className="absolute top-[60%] left-[40%] w-[2px] h-[2px] bg-orange-500 rounded-full ember animate-ember-float-4"></div>
              <div className="absolute top-[45%] right-[20%] w-[3px] h-[3px] bg-red-300 rounded-full ember animate-ember-float-5"></div>
            </div>

            {/* Temple Coin Effects */}
            <div className="absolute inset-0">
              {/* Coins around temple area - more concentrated around pyramid/temple structure */}
              <div className="absolute top-[45%] right-[35%] w-[4px] h-[4px] bg-yellow-300 rounded-full coin-glow animate-coin-float-1"></div>
              <div className="absolute top-[50%] right-[30%] w-[3px] h-[3px] bg-amber-400 rounded-full coin-glow animate-coin-float-2"></div>
              <div className="absolute top-[55%] right-[40%] w-[4px] h-[4px] bg-yellow-400 rounded-full coin-glow animate-coin-float-3"></div>
              <div className="absolute top-[40%] right-[25%] w-[3px] h-[3px] bg-yellow-200 rounded-full coin-glow animate-coin-float-4"></div>
              <div className="absolute top-[60%] right-[32%] w-[3px] h-[3px] bg-yellow-300 rounded-full coin-glow animate-coin-float-5"></div>
              <div className="absolute top-[48%] right-[45%] w-[4px] h-[4px] bg-amber-300 rounded-full coin-glow animate-coin-float-6"></div>
              <div className="absolute top-[42%] right-[38%] w-[3px] h-[3px] bg-yellow-400 rounded-full coin-glow animate-coin-float-7"></div>
              
              {/* Some coins on temple steps/structure */}
              <div className="absolute top-[65%] right-[35%] w-[3px] h-[3px] bg-yellow-300 rounded-full coin-glow animate-coin-float-8"></div>
              <div className="absolute top-[38%] right-[42%] w-[4px] h-[4px] bg-amber-400 rounded-full coin-glow animate-coin-float-9"></div>
            </div>

            {/* Ambient Fire Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-600/5 via-orange-500/3 to-yellow-400/5 animate-ambient-fire"></div>
            
            {/* Atmospheric Lighting */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 via-transparent to-blue-900/5 animate-atmospheric"></div>
          </div>
          
          <style jsx>{`
            .lightning {
              opacity: 0;
              box-shadow: 0 0 10px currentColor, 0 0 20px currentColor;
              transform: scaleY(0);
              filter: blur(0.5px);
            }
            
            .lightning-flash {
              opacity: 0;
            }
            
            .volcano-glow {
              filter: blur(8px);
              box-shadow: 0 0 30px currentColor, 0 0 60px currentColor;
            }
            
            
            .smoke {
              filter: blur(4px);
              opacity: 0;
            }
            
            .ember {
              box-shadow: 0 0 6px currentColor, 0 0 12px currentColor;
              filter: blur(0.3px);
            }
            
            .coin-glow {
              box-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor;
              filter: blur(0.2px);
            }
            
            .animate-effects .lightning {
              animation-play-state: running;
            }
            
            .animate-effects .lightning-flash {
              animation-play-state: running;
            }
            
            .animate-effects .volcano-glow {
              animation-play-state: running;
            }
            
            .animate-effects .smoke {
              animation-play-state: running;
            }
            
            .animate-effects .ember {
              animation-play-state: running;
            }
            
            .animate-effects .coin-glow {
              animation-play-state: running;
            }
            
            @keyframes lightning-1 {
              0%, 90%, 100% { opacity: 0; transform: scaleY(0); }
              91%, 93% { opacity: 1; transform: scaleY(1); }
              92% { opacity: 0.7; transform: scaleY(0.8); }
            }
            
            @keyframes lightning-2 {
              0%, 85%, 100% { opacity: 0; transform: scaleY(0) scaleX(0.5); }
              86%, 88% { opacity: 0.8; transform: scaleY(1) scaleX(1); }
              87% { opacity: 0.4; transform: scaleY(0.6) scaleX(0.7); }
            }
            
            @keyframes lightning-3 {
              0%, 93%, 100% { opacity: 0; transform: scaleY(0) rotate(5deg); }
              94%, 96% { opacity: 0.9; transform: scaleY(1) rotate(5deg); }
              95% { opacity: 0.5; transform: scaleY(0.7) rotate(5deg); }
            }
            
            @keyframes flash-1 {
              0%, 90%, 100% { opacity: 0; }
              91%, 93% { opacity: 0.3; }
            }
            
            @keyframes flash-2 {
              0%, 93%, 100% { opacity: 0; }
              94%, 96% { opacity: 0.2; }
            }
            
            @keyframes volcano-pulse {
              0%, 100% { transform: translate(-50%, 0) scale(1); opacity: 0.4; }
              50% { transform: translate(-50%, 0) scale(1.2); opacity: 0.7; }
            }
            
            @keyframes volcano-pulse-delay {
              0%, 100% { transform: translate(-50%, 0) scale(1); opacity: 0.6; }
              50% { transform: translate(-50%, 0) scale(1.1); opacity: 0.9; }
            }
            
            @keyframes volcano-flicker {
              0%, 100% { opacity: 0.4; transform: translate(-50%, 0) scale(1); }
              25% { opacity: 0.8; transform: translate(-50%, 0) scale(1.3); }
              50% { opacity: 0.2; transform: translate(-50%, 0) scale(0.8); }
              75% { opacity: 0.9; transform: translate(-50%, 0) scale(1.1); }
            }
            
            
            @keyframes smoke-rise-1 {
              0% { opacity: 0; transform: translateY(0) scale(0.5); }
              50% { opacity: 0.6; transform: translateY(-40px) scale(1.2); }
              100% { opacity: 0; transform: translateY(-80px) scale(2); }
            }
            
            @keyframes smoke-rise-2 {
              0% { opacity: 0; transform: translateY(0) scale(0.3) translateX(0); }
              50% { opacity: 0.4; transform: translateY(-30px) scale(1) translateX(10px); }
              100% { opacity: 0; transform: translateY(-60px) scale(1.8) translateX(20px); }
            }
            
            @keyframes smoke-rise-3 {
              0% { opacity: 0; transform: translateY(0) scale(0.4) translateX(0); }
              50% { opacity: 0.5; transform: translateY(-35px) scale(1.1) translateX(-8px); }
              100% { opacity: 0; transform: translateY(-70px) scale(2.2) translateX(-15px); }
            }
            
            @keyframes ember-float-1 {
              0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.8; }
              33% { transform: translateY(-15px) translateX(8px); opacity: 0.4; }
              66% { transform: translateY(-8px) translateX(-5px); opacity: 1; }
            }
            
            @keyframes ember-float-2 {
              0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.6; }
              50% { transform: translateY(-20px) translateX(-10px) rotate(180deg); opacity: 1; }
            }
            
            @keyframes ember-float-3 {
              0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.9; }
              25% { transform: translateY(-12px) translateX(6px); opacity: 0.3; }
              75% { transform: translateY(-18px) translateX(-8px); opacity: 0.7; }
            }
            
            @keyframes ember-float-4 {
              0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.7; }
              40% { transform: translateY(-10px) translateX(12px) scale(1.5); opacity: 0.2; }
              80% { transform: translateY(-25px) translateX(-6px) scale(0.8); opacity: 0.9; }
            }
            
            @keyframes ember-float-5 {
              0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.8; }
              60% { transform: translateY(-22px) translateX(15px) rotate(360deg); opacity: 0.4; }
            }
            
            @keyframes ambient-fire {
              0%, 100% { opacity: 0.3; }
              50% { opacity: 0.6; }
            }
            
            @keyframes atmospheric {
              0%, 100% { opacity: 0.2; }
              50% { opacity: 0.5; }
            }
            
            @keyframes coin-float-1 {
              0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.9; }
              33% { transform: translateY(-8px) translateX(3px) scale(1.1); opacity: 0.6; }
              66% { transform: translateY(-4px) translateX(-2px) scale(0.9); opacity: 1; }
            }
            
            @keyframes coin-float-2 {
              0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.8; }
              50% { transform: translateY(-12px) translateX(5px) rotate(180deg); opacity: 1; }
            }
            
            @keyframes coin-float-3 {
              0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.7; }
              25% { transform: translateY(-6px) translateX(4px) scale(1.2); opacity: 0.9; }
              75% { transform: translateY(-10px) translateX(-3px) scale(0.8); opacity: 0.5; }
            }
            
            @keyframes coin-float-4 {
              0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); opacity: 0.9; }
              40% { transform: translateY(-7px) translateX(6px) rotate(120deg) scale(1.1); opacity: 0.4; }
              80% { transform: translateY(-15px) translateX(-4px) rotate(240deg) scale(0.9); opacity: 0.8; }
            }
            
            @keyframes coin-float-5 {
              0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.8; }
              30% { transform: translateY(-9px) translateX(-5px); opacity: 0.3; }
              70% { transform: translateY(-5px) translateX(7px); opacity: 1; }
            }
            
            @keyframes coin-float-6 {
              0%, 100% { transform: translateY(0px) translateX(0px) scale(1) rotate(0deg); opacity: 0.9; }
              60% { transform: translateY(-11px) translateX(2px) scale(1.3) rotate(360deg); opacity: 0.5; }
            }
            
            @keyframes coin-float-7 {
              0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.7; }
              45% { transform: translateY(-6px) translateX(-6px) scale(0.8); opacity: 1; }
              85% { transform: translateY(-13px) translateX(4px) scale(1.1); opacity: 0.6; }
            }
            
            @keyframes coin-float-8 {
              0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.8; }
              35% { transform: translateY(-8px) translateX(8px) rotate(90deg); opacity: 0.4; }
              65% { transform: translateY(-12px) translateX(-2px) rotate(270deg); opacity: 0.9; }
            }
            
            @keyframes coin-float-9 {
              0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.9; }
              50% { transform: translateY(-14px) translateX(-7px) scale(1.2); opacity: 0.3; }
            }
            
            .animate-lightning-1 {
              animation: lightning-1 12s infinite;
            }
            
            .animate-lightning-2 {
              animation: lightning-2 15s infinite 4s;
            }
            
            .animate-lightning-3 {
              animation: lightning-3 18s infinite 8s;
            }
            
            .animate-flash-1 {
              animation: flash-1 12s infinite;
            }
            
            .animate-flash-2 {
              animation: flash-2 18s infinite 8s;
            }
            
            .animate-volcano-pulse {
              animation: volcano-pulse 5s ease-in-out infinite;
            }
            
            .animate-volcano-pulse-delay {
              animation: volcano-pulse-delay 5s ease-in-out infinite 1.5s;
            }
            
            .animate-volcano-flicker {
              animation: volcano-flicker 4s ease-in-out infinite 1s;
            }
            
            
            .animate-smoke-rise-1 {
              animation: smoke-rise-1 6s ease-out infinite;
            }
            
            .animate-smoke-rise-2 {
              animation: smoke-rise-2 7s ease-out infinite 2s;
            }
            
            .animate-smoke-rise-3 {
              animation: smoke-rise-3 8s ease-out infinite 4s;
            }
            
            .animate-ember-float-1 {
              animation: ember-float-1 10s ease-in-out infinite;
            }
            
            .animate-ember-float-2 {
              animation: ember-float-2 8s ease-in-out infinite 2s;
            }
            
            .animate-ember-float-3 {
              animation: ember-float-3 12s ease-in-out infinite 4s;
            }
            
            .animate-ember-float-4 {
              animation: ember-float-4 9s ease-in-out infinite 6s;
            }
            
            .animate-ember-float-5 {
              animation: ember-float-5 11s ease-in-out infinite 1s;
            }
            
            .animate-coin-float-1 {
              animation: coin-float-1 6s ease-in-out infinite;
            }
            
            .animate-coin-float-2 {
              animation: coin-float-2 7s ease-in-out infinite 1s;
            }
            
            .animate-coin-float-3 {
              animation: coin-float-3 8s ease-in-out infinite 2s;
            }
            
            .animate-coin-float-4 {
              animation: coin-float-4 6.5s ease-in-out infinite 0.5s;
            }
            
            .animate-coin-float-5 {
              animation: coin-float-5 7.5s ease-in-out infinite 3s;
            }
            
            .animate-coin-float-6 {
              animation: coin-float-6 8.5s ease-in-out infinite 1.5s;
            }
            
            .animate-coin-float-7 {
              animation: coin-float-7 6.8s ease-in-out infinite 2.5s;
            }
            
            .animate-coin-float-8 {
              animation: coin-float-8 7.2s ease-in-out infinite 4s;
            }
            
            .animate-coin-float-9 {
              animation: coin-float-9 9s ease-in-out infinite 0.8s;
            }
            
            .animate-ambient-fire {
              animation: ambient-fire 8s ease-in-out infinite;
            }
            
            .animate-atmospheric {
              animation: atmospheric 15s ease-in-out infinite;
            }
          `}</style>
        </div>
      </Card>
    </div>
  );
}
