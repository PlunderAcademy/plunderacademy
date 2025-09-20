"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function JungleModule2Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        {/* Base image */}
        <Image
          src="/islands/island1/jungle-module2-image.webp"
          alt="Jungle Treehouse Village Scene"
          fill
          className="object-cover"
        />
        
        {/* Animated overlay effects */}
        <div className="absolute inset-0 animate-effects">
          {/* Lantern Flickering Effects */}
          <div className="absolute inset-0">
            {/* Left lanterns */}
            <div className="absolute top-[25%] left-[8%] w-[8px] h-[12px] bg-orange-300/60 rounded-full lantern-glow animate-lantern-flicker-1"></div>
            <div className="absolute top-[45%] left-[12%] w-[6px] h-[10px] bg-yellow-300/50 rounded-full lantern-glow animate-lantern-flicker-2"></div>
            
            {/* Center lanterns */}
            <div className="absolute top-[22%] left-[35%] w-[7px] h-[11px] bg-orange-400/55 rounded-full lantern-glow animate-lantern-flicker-3"></div>
            <div className="absolute top-[28%] left-[65%] w-[8px] h-[12px] bg-yellow-400/60 rounded-full lantern-glow animate-lantern-flicker-4"></div>
            
            {/* Right lanterns */}
            <div className="absolute top-[25%] right-[8%] w-[7px] h-[11px] bg-orange-300/50 rounded-full lantern-glow animate-lantern-flicker-5"></div>
            <div className="absolute top-[42%] right-[12%] w-[6px] h-[9px] bg-yellow-300/45 rounded-full lantern-glow animate-lantern-flicker-6"></div>
          </div>

          {/* Window Light Variations */}
          <div className="absolute inset-0">
            {/* Left treehouse windows */}
            <div className="absolute top-[32%] left-[15%] w-[12px] h-[14px] bg-yellow-200/40 rounded window-glow animate-window-glow-1"></div>
            <div className="absolute top-[38%] left-[18%] w-[8px] h-[10px] bg-orange-200/35 rounded window-glow animate-window-glow-2"></div>
            
            {/* Center treehouse windows */}
            <div className="absolute top-[30%] left-[45%] w-[14px] h-[16px] bg-yellow-300/45 rounded window-glow animate-window-glow-3"></div>
            <div className="absolute top-[36%] left-[48%] w-[10px] h-[12px] bg-orange-300/40 rounded window-glow animate-window-glow-4"></div>
            
            {/* Right treehouse windows */}
            <div className="absolute top-[32%] right-[15%] w-[12px] h-[14px] bg-yellow-200/40 rounded window-glow animate-window-glow-5"></div>
            <div className="absolute top-[38%] right-[18%] w-[9px] h-[11px] bg-orange-200/35 rounded window-glow animate-window-glow-6"></div>
          </div>

          {/* Floating Fireflies */}
          <div className="absolute inset-0">
            <div className="absolute top-[20%] left-[25%] w-[3px] h-[3px] bg-green-300 rounded-full firefly animate-firefly-float-1"></div>
            <div className="absolute top-[35%] left-[70%] w-[2px] h-[2px] bg-yellow-300 rounded-full firefly animate-firefly-float-2"></div>
            <div className="absolute top-[28%] left-[40%] w-[3px] h-[3px] bg-green-400 rounded-full firefly animate-firefly-float-3"></div>
            <div className="absolute top-[50%] left-[80%] w-[2px] h-[2px] bg-yellow-400 rounded-full firefly animate-firefly-float-4"></div>
            <div className="absolute top-[15%] right-[30%] w-[3px] h-[3px] bg-green-300 rounded-full firefly animate-firefly-float-5"></div>
            <div className="absolute top-[60%] left-[20%] w-[2px] h-[2px] bg-yellow-300 rounded-full firefly animate-firefly-float-6"></div>
            <div className="absolute top-[45%] right-[25%] w-[3px] h-[3px] bg-green-400 rounded-full firefly animate-firefly-float-7"></div>
            <div className="absolute top-[25%] left-[85%] w-[2px] h-[2px] bg-yellow-400 rounded-full firefly animate-firefly-float-8"></div>
          </div>

          {/* Dramatic Light Rays */}
          <div className="absolute inset-0">
            {/* Sunbeams piercing through canopy */}
            <div className="absolute top-[0%] left-[20%] w-[3px] h-[60%] bg-gradient-to-b from-yellow-200/40 via-yellow-300/20 to-transparent light-ray animate-light-ray-1"></div>
            <div className="absolute top-[0%] left-[45%] w-[4px] h-[70%] bg-gradient-to-b from-white/30 via-yellow-200/25 to-transparent light-ray animate-light-ray-2"></div>
            <div className="absolute top-[0%] right-[30%] w-[3px] h-[55%] bg-gradient-to-b from-yellow-100/35 via-yellow-300/18 to-transparent light-ray animate-light-ray-3"></div>
            <div className="absolute top-[0%] right-[60%] w-[2px] h-[50%] bg-gradient-to-b from-white/25 via-yellow-200/15 to-transparent light-ray animate-light-ray-4"></div>
            
            {/* Wide area light beams */}
            <div className="absolute top-[0%] left-[15%] w-[40px] h-[65%] bg-gradient-to-b from-yellow-200/15 via-yellow-300/8 to-transparent light-beam animate-light-beam-1"></div>
            <div className="absolute top-[0%] right-[25%] w-[35px] h-[55%] bg-gradient-to-b from-white/12 via-yellow-200/6 to-transparent light-beam animate-light-beam-2"></div>
          </div>

          {/* Mysterious Bottom Fog */}
          <div className="absolute inset-0">
            {/* Dense fog base */}
            <div className="absolute bottom-[0%] left-[0%] w-full h-[20%] bg-gradient-to-t from-gray-300/30 via-gray-400/20 to-transparent fog-base animate-fog-drift-base"></div>
            
            {/* Floating fog wisps */}
            <div className="absolute bottom-[4%] left-[15%] w-[70px] h-[20px] bg-gray-200/25 rounded-full fog-wisp animate-fog-drift-1"></div>
            <div className="absolute bottom-[8%] right-[20%] w-[55px] h-[18px] bg-gray-300/23 rounded-full fog-wisp animate-fog-drift-2"></div>
            <div className="absolute bottom-[2%] left-[65%] w-[65px] h-[22px] bg-gray-100/28 rounded-full fog-wisp animate-fog-drift-3"></div>
            <div className="absolute bottom-[12%] left-[35%] w-[45px] h-[16px] bg-gray-400/22 rounded-full fog-wisp animate-fog-drift-4"></div>
            
            {/* Thin fog tendrils */}
            <div className="absolute bottom-[6%] right-[45%] w-[35px] h-[12px] bg-gray-200/18 rounded-full fog-tendril animate-fog-tendril-1"></div>
            <div className="absolute bottom-[14%] left-[25%] w-[30px] h-[10px] bg-gray-300/16 rounded-full fog-tendril animate-fog-tendril-2"></div>
          </div>

          {/* Ambient Jungle Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-green-600/5 via-emerald-500/3 to-teal-400/5 animate-ambient-jungle"></div>
          
          {/* Atmospheric Depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/8 via-transparent to-green-900/5 animate-atmospheric-depth"></div>
        </div>
        
        <style jsx>{`
          .lantern-glow {
            filter: blur(3px);
            box-shadow: 0 0 15px currentColor, 0 0 30px currentColor;
          }
          
          .window-glow {
            filter: blur(2px);
            box-shadow: 0 0 12px currentColor, 0 0 24px currentColor;
          }
          
          .firefly {
            box-shadow: 0 0 8px currentColor, 0 0 16px currentColor;
            filter: blur(0.5px);
          }
          
          .light-ray {
            filter: blur(1px);
            box-shadow: 0 0 20px currentColor;
            opacity: 0;
          }
          
          .light-beam {
            filter: blur(3px);
            opacity: 0;
          }
          
          .fog-base {
            filter: blur(4px);
            opacity: 0;
          }
          
          .fog-wisp {
            filter: blur(6px);
            opacity: 0;
          }
          
          .fog-tendril {
            filter: blur(3px);
            opacity: 0;
          }
          
          .animate-effects .lantern-glow {
            animation-play-state: running;
          }
          
          .animate-effects .window-glow {
            animation-play-state: running;
          }
          
          .animate-effects .firefly {
            animation-play-state: running;
          }
          
          .animate-effects .light-ray {
            animation-play-state: running;
          }
          
          .animate-effects .light-beam {
            animation-play-state: running;
          }
          
          .animate-effects .fog-base {
            animation-play-state: running;
          }
          
          .animate-effects .fog-wisp {
            animation-play-state: running;
          }
          
          .animate-effects .fog-tendril {
            animation-play-state: running;
          }
          
          @keyframes lantern-flicker-1 {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            25% { opacity: 0.9; transform: scale(1.1); }
            50% { opacity: 0.4; transform: scale(0.9); }
            75% { opacity: 0.8; transform: scale(1.05); }
          }
          
          @keyframes lantern-flicker-2 {
            0%, 100% { opacity: 0.5; transform: scale(1) rotate(2deg); }
            30% { opacity: 0.8; transform: scale(1.15) rotate(-1deg); }
            60% { opacity: 0.3; transform: scale(0.85) rotate(1deg); }
            90% { opacity: 0.7; transform: scale(1.08) rotate(-2deg); }
          }
          
          @keyframes lantern-flicker-3 {
            0%, 100% { opacity: 0.55; transform: scale(1); }
            20% { opacity: 0.9; transform: scale(1.12); }
            40% { opacity: 0.35; transform: scale(0.88); }
            80% { opacity: 0.75; transform: scale(1.06); }
          }
          
          @keyframes lantern-flicker-4 {
            0%, 100% { opacity: 0.6; transform: scale(1) rotate(-1deg); }
            35% { opacity: 0.85; transform: scale(1.1) rotate(2deg); }
            70% { opacity: 0.4; transform: scale(0.9) rotate(-2deg); }
          }
          
          @keyframes lantern-flicker-5 {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            40% { opacity: 0.8; transform: scale(1.13); }
            65% { opacity: 0.3; transform: scale(0.87); }
            85% { opacity: 0.7; transform: scale(1.07); }
          }
          
          @keyframes lantern-flicker-6 {
            0%, 100% { opacity: 0.45; transform: scale(1) rotate(1deg); }
            50% { opacity: 0.75; transform: scale(1.14) rotate(-1deg); }
            25% { opacity: 0.25; transform: scale(0.86) rotate(2deg); }
          }
          
          @keyframes window-glow-1 {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.7; }
          }
          
          @keyframes window-glow-2 {
            0%, 100% { opacity: 0.35; }
            60% { opacity: 0.65; }
          }
          
          @keyframes window-glow-3 {
            0%, 100% { opacity: 0.45; }
            40% { opacity: 0.75; }
          }
          
          @keyframes window-glow-4 {
            0%, 100% { opacity: 0.4; }
            70% { opacity: 0.7; }
          }
          
          @keyframes window-glow-5 {
            0%, 100% { opacity: 0.4; }
            30% { opacity: 0.72; }
          }
          
          @keyframes window-glow-6 {
            0%, 100% { opacity: 0.35; }
            80% { opacity: 0.68; }
          }
          
          @keyframes firefly-float-1 {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.8; }
            33% { transform: translateY(-20px) translateX(15px); opacity: 0.3; }
            66% { transform: translateY(-10px) translateX(-8px); opacity: 1; }
          }
          
          @keyframes firefly-float-2 {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.6; }
            50% { transform: translateY(-25px) translateX(-12px); opacity: 1; }
          }
          
          @keyframes firefly-float-3 {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.9; }
            25% { transform: translateY(-15px) translateX(10px); opacity: 0.4; }
            75% { transform: translateY(-18px) translateX(-6px); opacity: 0.7; }
          }
          
          @keyframes firefly-float-4 {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.7; }
            40% { transform: translateY(-22px) translateX(18px); opacity: 0.2; }
            80% { transform: translateY(-12px) translateX(-10px); opacity: 0.9; }
          }
          
          @keyframes firefly-float-5 {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.8; }
            60% { transform: translateY(-28px) translateX(-15px); opacity: 0.4; }
          }
          
          @keyframes firefly-float-6 {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.6; }
            30% { transform: translateY(-16px) translateX(12px); opacity: 0.9; }
            70% { transform: translateY(-24px) translateX(-5px); opacity: 0.3; }
          }
          
          @keyframes firefly-float-7 {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.9; }
            45% { transform: translateY(-20px) translateX(-14px); opacity: 0.5; }
            85% { transform: translateY(-8px) translateX(8px); opacity: 0.8; }
          }
          
          @keyframes firefly-float-8 {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.7; }
            55% { transform: translateY(-26px) translateX(20px); opacity: 0.2; }
          }
          
          @keyframes light-ray-1 {
            0%, 100% { opacity: 0; transform: scaleY(1) skewX(2deg); }
            25% { opacity: 0.6; transform: scaleY(1.1) skewX(3deg); }
            50% { opacity: 0.3; transform: scaleY(0.9) skewX(1deg); }
            75% { opacity: 0.7; transform: scaleY(1.05) skewX(2deg); }
          }
          
          @keyframes light-ray-2 {
            0%, 100% { opacity: 0; transform: scaleY(1) skewX(-1deg); }
            30% { opacity: 0.5; transform: scaleY(1.2) skewX(-2deg); }
            60% { opacity: 0.2; transform: scaleY(0.8) skewX(0deg); }
            90% { opacity: 0.6; transform: scaleY(1.1) skewX(-1deg); }
          }
          
          @keyframes light-ray-3 {
            0%, 100% { opacity: 0; transform: scaleY(1) skewX(1deg); }
            40% { opacity: 0.4; transform: scaleY(1.15) skewX(2deg); }
            80% { opacity: 0.8; transform: scaleY(0.95) skewX(0deg); }
          }
          
          @keyframes light-ray-4 {
            0%, 100% { opacity: 0; transform: scaleY(1) skewX(-2deg); }
            50% { opacity: 0.3; transform: scaleY(1.3) skewX(-3deg); }
          }
          
          @keyframes light-beam-1 {
            0%, 100% { opacity: 0; transform: scaleY(1) scaleX(1); }
            50% { opacity: 0.25; transform: scaleY(1.1) scaleX(1.2); }
          }
          
          @keyframes light-beam-2 {
            0%, 100% { opacity: 0; transform: scaleY(1) scaleX(1); }
            60% { opacity: 0.20; transform: scaleY(1.15) scaleX(1.1); }
          }
          
          @keyframes ambient-jungle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
          }
          
          @keyframes atmospheric-depth {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.4; }
          }
          
          @keyframes fog-drift-base {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.45; }
          }
          
          @keyframes fog-drift-1 {
            0%, 100% { opacity: 0; transform: translateX(0px) scale(1); }
            50% { opacity: 0.35; transform: translateX(25px) scale(1.1); }
          }
          
          @keyframes fog-drift-2 {
            0%, 100% { opacity: 0; transform: translateX(0px) translateY(0px) scale(1); }
            50% { opacity: 0.32; transform: translateX(-20px) translateY(-2px) scale(1.05); }
          }
          
          @keyframes fog-drift-3 {
            0%, 100% { opacity: 0; transform: translateX(0px) scale(1); }
            50% { opacity: 0.38; transform: translateX(18px) scale(1.2); }
          }
          
          @keyframes fog-drift-4 {
            0%, 100% { opacity: 0; transform: translateX(0px) translateY(0px) scale(1); }
            50% { opacity: 0.28; transform: translateX(-12px) translateY(1px) scale(1.08); }
          }
          
          @keyframes fog-tendril-1 {
            0%, 100% { opacity: 0; transform: translateX(0px) scaleX(1); }
            33% { opacity: 0.22; transform: translateX(12px) scaleX(1.3); }
            66% { opacity: 0.18; transform: translateX(6px) scaleX(0.8); }
          }
          
          @keyframes fog-tendril-2 {
            0%, 100% { opacity: 0; transform: translateX(0px) translateY(0px) scaleX(1); }
            40% { opacity: 0.20; transform: translateX(-8px) translateY(-1px) scaleX(1.2); }
            80% { opacity: 0.16; transform: translateX(-3px) translateY(-0.5px) scaleX(0.9); }
          }
          
          .animate-lantern-flicker-1 {
            animation: lantern-flicker-1 4s ease-in-out infinite;
          }
          
          .animate-lantern-flicker-2 {
            animation: lantern-flicker-2 5s ease-in-out infinite 1s;
          }
          
          .animate-lantern-flicker-3 {
            animation: lantern-flicker-3 4.5s ease-in-out infinite 2s;
          }
          
          .animate-lantern-flicker-4 {
            animation: lantern-flicker-4 5.5s ease-in-out infinite 0.5s;
          }
          
          .animate-lantern-flicker-5 {
            animation: lantern-flicker-5 4.2s ease-in-out infinite 3s;
          }
          
          .animate-lantern-flicker-6 {
            animation: lantern-flicker-6 5.8s ease-in-out infinite 1.5s;
          }
          
          .animate-window-glow-1 {
            animation: window-glow-1 6s ease-in-out infinite;
          }
          
          .animate-window-glow-2 {
            animation: window-glow-2 7s ease-in-out infinite 2s;
          }
          
          .animate-window-glow-3 {
            animation: window-glow-3 5.5s ease-in-out infinite 1s;
          }
          
          .animate-window-glow-4 {
            animation: window-glow-4 6.5s ease-in-out infinite 3s;
          }
          
          .animate-window-glow-5 {
            animation: window-glow-5 7.2s ease-in-out infinite 0.5s;
          }
          
          .animate-window-glow-6 {
            animation: window-glow-6 5.8s ease-in-out infinite 2.5s;
          }
          
          .animate-firefly-float-1 {
            animation: firefly-float-1 12s ease-in-out infinite;
          }
          
          .animate-firefly-float-2 {
            animation: firefly-float-2 14s ease-in-out infinite 3s;
          }
          
          .animate-firefly-float-3 {
            animation: firefly-float-3 11s ease-in-out infinite 6s;
          }
          
          .animate-firefly-float-4 {
            animation: firefly-float-4 13s ease-in-out infinite 1s;
          }
          
          .animate-firefly-float-5 {
            animation: firefly-float-5 15s ease-in-out infinite 8s;
          }
          
          .animate-firefly-float-6 {
            animation: firefly-float-6 10s ease-in-out infinite 4s;
          }
          
          .animate-firefly-float-7 {
            animation: firefly-float-7 12.5s ease-in-out infinite 7s;
          }
          
          .animate-firefly-float-8 {
            animation: firefly-float-8 14.5s ease-in-out infinite 2s;
          }
          
          .animate-light-ray-1 {
            animation: light-ray-1 8s ease-in-out infinite;
          }
          
          .animate-light-ray-2 {
            animation: light-ray-2 10s ease-in-out infinite 2s;
          }
          
          .animate-light-ray-3 {
            animation: light-ray-3 12s ease-in-out infinite 4s;
          }
          
          .animate-light-ray-4 {
            animation: light-ray-4 9s ease-in-out infinite 6s;
          }
          
          .animate-light-beam-1 {
            animation: light-beam-1 15s ease-in-out infinite;
          }
          
          .animate-light-beam-2 {
            animation: light-beam-2 18s ease-in-out infinite 3s;
          }
          
          .animate-ambient-jungle {
            animation: ambient-jungle 12s ease-in-out infinite;
          }
          
          .animate-atmospheric-depth {
            animation: atmospheric-depth 18s ease-in-out infinite;
          }
          
          .animate-fog-drift-base {
            animation: fog-drift-base 12s ease-in-out infinite;
          }
          
          .animate-fog-drift-1 {
            animation: fog-drift-1 18s ease-in-out infinite;
          }
          
          .animate-fog-drift-2 {
            animation: fog-drift-2 22s ease-in-out infinite 4s;
          }
          
          .animate-fog-drift-3 {
            animation: fog-drift-3 16s ease-in-out infinite 7s;
          }
          
          .animate-fog-drift-4 {
            animation: fog-drift-4 20s ease-in-out infinite 2s;
          }
          
          .animate-fog-tendril-1 {
            animation: fog-tendril-1 14s ease-in-out infinite 1s;
          }
          
          .animate-fog-tendril-2 {
            animation: fog-tendril-2 16s ease-in-out infinite 5s;
          }
        `}</style>
      </div>
    </Card>
  );
}
