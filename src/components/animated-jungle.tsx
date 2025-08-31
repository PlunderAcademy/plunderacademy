"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Pause, RotateCcw, Sparkles } from "lucide-react";

interface AnimatedJungleProps {
  autoStart?: boolean;
}

export function AnimatedJungle({ autoStart = true }: AnimatedJungleProps) {
  const [isAnimating, setIsAnimating] = useState(autoStart);

  const handleToggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  const handleReset = () => {
    setIsAnimating(false);
    setTimeout(() => setIsAnimating(true), 100);
  };

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
            <Sparkles className="w-4 h-4" />
            <span>Magical Forest Effects</span>
          </div>
        </div>
      </Card>

      {/* Animated Jungle Container */}
      <Card className="relative overflow-hidden">
        <div className="relative w-full aspect-[16/9] bg-gradient-to-b from-green-900 to-green-800">
          {/* Base jungle image */}
          <img
            src="/jungle.png"
            alt="Magical Jungle Village"
            className="w-full h-full object-cover"
          />
          
          {/* Animated overlay effects */}
          <div className={`absolute inset-0 ${isAnimating ? 'animate-effects' : ''}`}>
            {/* Window light effects */}
            <div className="absolute inset-0">
              {/* Top left tree house windows */}
              <div className="absolute top-[15%] left-[15%] w-3 h-3 bg-yellow-300 rounded-full opacity-80 window-glow animate-pulse-slow"></div>
              <div className="absolute top-[18%] left-[18%] w-2 h-2 bg-yellow-300 rounded-full opacity-70 window-glow animate-pulse-slow-delay-1"></div>
              
              {/* Center tree house complex */}
              <div className="absolute top-[25%] left-[35%] w-4 h-2 bg-yellow-300 rounded-sm opacity-75 window-glow animate-flicker"></div>
              <div className="absolute top-[35%] left-[32%] w-3 h-3 bg-yellow-300 rounded-full opacity-80 window-glow animate-pulse-slow-delay-2"></div>
              <div className="absolute top-[38%] left-[38%] w-2 h-3 bg-yellow-300 rounded-sm opacity-70 window-glow animate-shimmer"></div>
              
              {/* Right side tree houses */}
              <div className="absolute top-[20%] right-[20%] w-3 h-3 bg-yellow-300 rounded-full opacity-75 window-glow animate-pulse-slow-delay-3"></div>
              <div className="absolute top-[35%] right-[15%] w-2 h-2 bg-yellow-300 rounded-full opacity-80 window-glow animate-flicker-delay"></div>
              <div className="absolute top-[45%] right-[25%] w-3 h-2 bg-yellow-300 rounded-sm opacity-70 window-glow animate-shimmer-delay"></div>
              
              {/* Lower tree houses */}
              <div className="absolute bottom-[40%] left-[25%] w-2 h-2 bg-yellow-300 rounded-full opacity-75 window-glow animate-pulse-slow"></div>
              <div className="absolute bottom-[35%] right-[30%] w-3 h-3 bg-yellow-300 rounded-full opacity-80 window-glow animate-flicker"></div>
              
              {/* Hanging lanterns */}
              <div className="absolute top-[30%] left-[45%] w-2 h-3 bg-yellow-200 rounded-full opacity-60 lantern-glow animate-sway"></div>
              <div className="absolute top-[25%] right-[40%] w-2 h-3 bg-yellow-200 rounded-full opacity-65 lantern-glow animate-sway-delay"></div>
              
              {/* Fireflies */}
              <div className="absolute top-[60%] left-[20%] w-1 h-1 bg-green-300 rounded-full opacity-80 firefly animate-float"></div>
              <div className="absolute top-[55%] left-[60%] w-1 h-1 bg-green-300 rounded-full opacity-70 firefly animate-float-delay-1"></div>
              <div className="absolute top-[65%] right-[25%] w-1 h-1 bg-green-300 rounded-full opacity-75 firefly animate-float-delay-2"></div>
              <div className="absolute top-[50%] left-[75%] w-1 h-1 bg-green-300 rounded-full opacity-80 firefly animate-float-delay-3"></div>
              
              {/* Magical sparkles */}
              <div className="absolute top-[40%] left-[50%] w-1 h-1 bg-purple-300 rounded-full opacity-60 sparkle animate-twinkle"></div>
              <div className="absolute top-[30%] left-[65%] w-1 h-1 bg-purple-300 rounded-full opacity-70 sparkle animate-twinkle-delay-1"></div>
              <div className="absolute top-[70%] left-[40%] w-1 h-1 bg-purple-300 rounded-full opacity-60 sparkle animate-twinkle-delay-2"></div>
            </div>
            
            {/* Ambient light overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-200/5 to-green-300/10 animate-ambient-glow"></div>
          </div>
          
          <style jsx>{`
            .window-glow {
              box-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor;
              filter: blur(0.5px);
            }
            
            .lantern-glow {
              box-shadow: 0 0 8px currentColor, 0 0 16px currentColor;
              filter: blur(0.3px);
            }
            
            .firefly {
              box-shadow: 0 0 6px currentColor, 0 0 12px currentColor;
              filter: blur(0.2px);
            }
            
            .sparkle {
              box-shadow: 0 0 4px currentColor, 0 0 8px currentColor;
            }
            
            .animate-effects .window-glow,
            .animate-effects .lantern-glow,
            .animate-effects .firefly,
            .animate-effects .sparkle {
              animation-play-state: running;
            }
            
            .animate-effects .animate-ambient-glow {
              animation-play-state: running;
            }
            
            @keyframes pulse-slow {
              0%, 100% { opacity: 0.4; transform: scale(0.9); }
              50% { opacity: 1; transform: scale(1.1); }
            }
            
            @keyframes flicker {
              0%, 100% { opacity: 0.7; }
              25% { opacity: 0.3; }
              50% { opacity: 0.9; }
              75% { opacity: 0.5; }
            }
            
            @keyframes shimmer {
              0%, 100% { opacity: 0.6; filter: brightness(1); }
              50% { opacity: 1; filter: brightness(1.5); }
            }
            
            @keyframes sway {
              0%, 100% { transform: translateX(0) rotate(0deg); }
              50% { transform: translateX(2px) rotate(2deg); }
            }
            
            @keyframes float {
              0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.8; }
              33% { transform: translateY(-8px) translateX(3px); opacity: 0.4; }
              66% { transform: translateY(-4px) translateX(-2px); opacity: 1; }
            }
            
            @keyframes twinkle {
              0%, 100% { opacity: 0; transform: scale(0); }
              50% { opacity: 1; transform: scale(1); }
            }
            
            @keyframes ambient-glow {
              0%, 100% { opacity: 0.3; }
              50% { opacity: 0.7; }
            }
            
            .animate-pulse-slow {
              animation: pulse-slow 4s ease-in-out infinite;
            }
            
            .animate-pulse-slow-delay-1 {
              animation: pulse-slow 4s ease-in-out infinite 0.5s;
            }
            
            .animate-pulse-slow-delay-2 {
              animation: pulse-slow 4s ease-in-out infinite 1s;
            }
            
            .animate-pulse-slow-delay-3 {
              animation: pulse-slow 4s ease-in-out infinite 1.5s;
            }
            
            .animate-flicker {
              animation: flicker 3s ease-in-out infinite;
            }
            
            .animate-flicker-delay {
              animation: flicker 3s ease-in-out infinite 1s;
            }
            
            .animate-shimmer {
              animation: shimmer 2s ease-in-out infinite;
            }
            
            .animate-shimmer-delay {
              animation: shimmer 2s ease-in-out infinite 0.7s;
            }
            
            .animate-sway {
              animation: sway 6s ease-in-out infinite;
            }
            
            .animate-sway-delay {
              animation: sway 6s ease-in-out infinite 2s;
            }
            
            .animate-float {
              animation: float 8s ease-in-out infinite;
            }
            
            .animate-float-delay-1 {
              animation: float 8s ease-in-out infinite 2s;
            }
            
            .animate-float-delay-2 {
              animation: float 8s ease-in-out infinite 4s;
            }
            
            .animate-float-delay-3 {
              animation: float 8s ease-in-out infinite 6s;
            }
            
            .animate-twinkle {
              animation: twinkle 3s ease-in-out infinite;
            }
            
            .animate-twinkle-delay-1 {
              animation: twinkle 3s ease-in-out infinite 1s;
            }
            
            .animate-twinkle-delay-2 {
              animation: twinkle 3s ease-in-out infinite 2s;
            }
            
            .animate-ambient-glow {
              animation: ambient-glow 10s ease-in-out infinite;
            }
          `}</style>
        </div>
        
        {/* Info overlay */}
        <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur rounded-lg p-3 border">
          <p className="text-sm font-medium">
            Magical Jungle Village
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {isAnimating ? "✨ Effects active - Windows shimmer, fireflies dance" : "💫 Effects paused"}
          </p>
        </div>
      </Card>
      
      {/* Effects Legend */}
      <Card className="p-4">
        <h3 className="font-semibold mb-3">Animation Effects</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></div>
            <span>Window Lights</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-300 rounded-full animate-bounce"></div>
            <span>Fireflies</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-300 rounded-full animate-ping"></div>
            <span>Magic Sparkles</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-200 rounded-full animate-swing"></div>
            <span>Swaying Lanterns</span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-3">
          Hover over the scene to see the magical effects! Each element has its own animation timing and style.
        </p>
      </Card>
    </div>
  );
}
