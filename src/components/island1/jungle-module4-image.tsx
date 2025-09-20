"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function JungleModule4Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        {/* Base image */}
        <Image
          src="/islands/island1/jungle-module4-image.webp"
          alt="Ancient Temple Treasure Adventure Scene"
          fill
          className="object-cover"
        />
        
        {/* Animated overlay effects */}
        <div className="absolute inset-0 animate-effects">
          {/* Dramatic Glowing Coins */}
          <div className="absolute inset-0">
            {/* Large treasure coins */}
            <div className="absolute top-[15%] left-[20%] w-[12px] h-[12px] bg-yellow-400/90 rounded-full treasure-coin animate-coin-dramatic-1"></div>
            <div className="absolute top-[25%] right-[15%] w-[10px] h-[10px] bg-amber-400/85 rounded-full treasure-coin animate-coin-dramatic-2"></div>
            <div className="absolute top-[35%] left-[75%] w-[14px] h-[14px] bg-yellow-300/95 rounded-full treasure-coin animate-coin-dramatic-3"></div>
            <div className="absolute top-[20%] left-[60%] w-[8px] h-[8px] bg-yellow-400/80 rounded-full treasure-coin animate-coin-dramatic-4"></div>
            <div className="absolute top-[40%] right-[25%] w-[11px] h-[11px] bg-yellow-500/88 rounded-full treasure-coin animate-coin-dramatic-5"></div>
            
            {/* Medium floating coins */}
            <div className="absolute top-[30%] left-[35%] w-[9px] h-[9px] bg-amber-300/75 rounded-full treasure-coin animate-coin-float-1"></div>
            <div className="absolute top-[45%] left-[85%] w-[7px] h-[7px] bg-yellow-400/70 rounded-full treasure-coin animate-coin-float-2"></div>
            <div className="absolute top-[18%] right-[40%] w-[10px] h-[10px] bg-amber-300/82 rounded-full treasure-coin animate-coin-float-3"></div>
            <div className="absolute top-[50%] left-[15%] w-[6px] h-[6px] bg-yellow-300/65 rounded-full treasure-coin animate-coin-float-4"></div>
            
            {/* Small coin particles */}
            <div className="absolute top-[12%] left-[45%] w-[5px] h-[5px] bg-amber-400/60 rounded-full coin-particle animate-coin-particle-1"></div>
            <div className="absolute top-[55%] right-[35%] w-[4px] h-[4px] bg-yellow-500/55 rounded-full coin-particle animate-coin-particle-2"></div>
            <div className="absolute top-[28%] left-[90%] w-[5px] h-[5px] bg-amber-400/62 rounded-full coin-particle animate-coin-particle-3"></div>
            <div className="absolute top-[38%] left-[25%] w-[4px] h-[4px] bg-yellow-400/58 rounded-full coin-particle animate-coin-particle-4"></div>
          </div>

          {/* Temple Mystical Energy */}
          <div className="absolute inset-0">
            {/* Temple apex glow */}
            <div className="absolute top-[12%] left-[48%] w-[25px] h-[15px] bg-orange-400/40 rounded-full temple-energy animate-temple-power-1"></div>
            <div className="absolute top-[15%] left-[50%] w-[15px] h-[10px] bg-yellow-300/35 rounded-full temple-energy animate-temple-power-2"></div>
            
            {/* Temple window glows */}
            <div className="absolute top-[35%] left-[49%] w-[3px] h-[4px] bg-orange-300/60 rounded temple-light animate-temple-light-1"></div>
            <div className="absolute top-[42%] left-[47%] w-[2px] h-[3px] bg-yellow-300/50 rounded temple-light animate-temple-light-2"></div>
            <div className="absolute top-[40%] right-[48%] w-[2px] h-[3px] bg-amber-300/55 rounded temple-light animate-temple-light-3"></div>
            
            {/* Ancient energy beams */}
            <div className="absolute top-[8%] left-[49%] w-[2px] h-[20%] bg-gradient-to-b from-yellow-300/30 to-transparent energy-beam animate-energy-beam-1"></div>
            <div className="absolute top-[5%] left-[51%] w-[1px] h-[15%] bg-gradient-to-b from-orange-300/25 to-transparent energy-beam animate-energy-beam-2"></div>
          </div>

          {/* Temple Entrance Light */}
          <div className="absolute inset-0">
            {/* Single brilliant white sphere */}
            <div className="absolute top-[26%] left-[52%] w-[20px] h-[15px] bg-white/90 rounded-full entrance-glow animate-entrance-power-1"></div>
          </div>

          {/* Volcanic Sky Enhancement */}
          <div className="absolute inset-0">
            {/* Sky glow pulses */}
            <div className="absolute top-[8%] left-[30%] w-[40px] h-[20px] bg-orange-500/20 rounded-full sky-glow animate-sky-glow-1"></div>
            <div className="absolute top-[12%] right-[35%] w-[35px] h-[18px] bg-red-400/18 rounded-full sky-glow animate-sky-glow-2"></div>
            <div className="absolute top-[5%] left-[60%] w-[50px] h-[25px] bg-yellow-400/15 rounded-full sky-glow animate-sky-glow-3"></div>
          </div>

          {/* Temple Base Fog */}
          <div className="absolute inset-0">
            {/* Dense temple fog */}
            <div className="absolute bottom-[0%] left-[0%] w-full h-[15%] bg-gradient-to-t from-gray-200/25 via-gray-300/15 to-transparent temple-fog animate-temple-fog-base"></div>
            
            {/* Temple fog wisps */}
            <div className="absolute bottom-[3%] left-[20%] w-[60px] h-[18px] bg-gray-100/22 rounded-full fog-wisp animate-temple-fog-1"></div>
            <div className="absolute bottom-[7%] right-[25%] w-[50px] h-[15px] bg-gray-200/20 rounded-full fog-wisp animate-temple-fog-2"></div>
            <div className="absolute bottom-[2%] left-[70%] w-[55px] h-[20px] bg-gray-300/24 rounded-full fog-wisp animate-temple-fog-3"></div>
            <div className="absolute bottom-[10%] left-[40%] w-[40px] h-[12px] bg-gray-100/18 rounded-full fog-wisp animate-temple-fog-4"></div>
          </div>

          {/* Ancient Atmospheric Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-orange-600/6 via-yellow-500/4 to-amber-400/3 animate-ancient-atmosphere"></div>
          
          {/* Mystical Temple Aura */}
          <div className="absolute inset-0 bg-gradient-to-t from-amber-900/8 via-transparent to-orange-900/6 animate-mystical-aura"></div>
        </div>
        
        <style jsx>{`
          .treasure-coin {
            box-shadow: 0 0 25px currentColor, 0 0 50px currentColor, 0 0 75px currentColor;
            filter: blur(0.3px);
          }
          
          .coin-particle {
            box-shadow: 0 0 15px currentColor, 0 0 30px currentColor;
            filter: blur(0.4px);
          }
          
          .temple-energy {
            filter: blur(6px);
            box-shadow: 0 0 20px currentColor, 0 0 40px currentColor;
          }
          
          .temple-light {
            filter: blur(1px);
            box-shadow: 0 0 12px currentColor, 0 0 24px currentColor;
          }
          
          .energy-beam {
            filter: blur(2px);
            box-shadow: 0 0 15px currentColor;
          }
          
          .sky-glow {
            filter: blur(8px);
            opacity: 0;
          }
          
          .temple-fog {
            filter: blur(5px);
            opacity: 0;
          }
          
          .fog-wisp {
            filter: blur(7px);
            opacity: 0;
          }
          
          .entrance-glow {
            filter: blur(5px);
            box-shadow: 0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor;
          }
          
          .ancient-rune {
            box-shadow: 0 0 12px currentColor, 0 0 24px currentColor;
            filter: blur(0.2px);
          }
          
          .energy-stream {
            filter: blur(1px);
            box-shadow: 0 0 10px currentColor;
            opacity: 0;
          }
          
          .magical-particle {
            box-shadow: 0 0 15px currentColor, 0 0 30px currentColor;
            filter: blur(0.3px);
          }
          
          .guardian-eye {
            box-shadow: 0 0 8px currentColor, 0 0 16px currentColor;
            filter: blur(0.1px);
          }
          
          .treasure-chamber-glow {
            filter: blur(4px);
            box-shadow: 0 0 15px currentColor, 0 0 30px currentColor;
          }
          
          .animate-effects .treasure-coin {
            animation-play-state: running;
          }
          
          .animate-effects .coin-particle {
            animation-play-state: running;
          }
          
          .animate-effects .temple-energy {
            animation-play-state: running;
          }
          
          .animate-effects .temple-light {
            animation-play-state: running;
          }
          
          .animate-effects .energy-beam {
            animation-play-state: running;
          }
          
          .animate-effects .sky-glow {
            animation-play-state: running;
          }
          
          .animate-effects .temple-fog {
            animation-play-state: running;
          }
          
          .animate-effects .fog-wisp {
            animation-play-state: running;
          }
          
          .animate-effects .entrance-glow {
            animation-play-state: running;
          }
          
          .animate-effects .ancient-rune {
            animation-play-state: running;
          }
          
          .animate-effects .energy-stream {
            animation-play-state: running;
          }
          
          .animate-effects .magical-particle {
            animation-play-state: running;
          }
          
          .animate-effects .guardian-eye {
            animation-play-state: running;
          }
          
          .animate-effects .treasure-chamber-glow {
            animation-play-state: running;
          }
          
          @keyframes coin-dramatic-1 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); opacity: 0.9; }
            33% { transform: translateY(-35px) translateX(25px) rotate(180deg) scale(1.4); opacity: 0.5; }
            66% { transform: translateY(-20px) translateX(-15px) rotate(360deg) scale(0.8); opacity: 1; }
          }
          
          @keyframes coin-dramatic-2 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); opacity: 0.85; }
            40% { transform: translateY(-45px) translateX(-20px) rotate(240deg) scale(1.3); opacity: 0.3; }
            80% { transform: translateY(-25px) translateX(10px) rotate(480deg) scale(0.9); opacity: 0.95; }
          }
          
          @keyframes coin-dramatic-3 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); opacity: 0.95; }
            25% { transform: translateY(-30px) translateX(18px) rotate(90deg) scale(1.5); opacity: 0.6; }
            75% { transform: translateY(-40px) translateX(-12px) rotate(270deg) scale(0.7); opacity: 0.8; }
          }
          
          @keyframes coin-dramatic-4 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); opacity: 0.8; }
            50% { transform: translateY(-50px) translateX(-25px) rotate(360deg) scale(1.2); opacity: 0.4; }
          }
          
          @keyframes coin-dramatic-5 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); opacity: 0.88; }
            60% { transform: translateY(-38px) translateX(22px) rotate(300deg) scale(1.1); opacity: 0.2; }
          }
          
          @keyframes coin-float-1 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.75; }
            50% { transform: translateY(-25px) translateX(-15px) rotate(180deg); opacity: 1; }
          }
          
          @keyframes coin-float-2 {
            0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.7; }
            45% { transform: translateY(-20px) translateX(12px) scale(1.3); opacity: 0.9; }
            85% { transform: translateY(-8px) translateX(-6px) scale(0.8); opacity: 0.5; }
          }
          
          @keyframes coin-float-3 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.82; }
            35% { transform: translateY(-28px) translateX(-18px) rotate(120deg); opacity: 0.4; }
            70% { transform: translateY(-15px) translateX(8px) rotate(240deg); opacity: 0.95; }
          }
          
          @keyframes coin-float-4 {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.65; }
            55% { transform: translateY(-22px) translateX(20px); opacity: 0.9; }
          }
          
          @keyframes coin-particle-1 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); opacity: 0.6; }
            33% { transform: translateY(-15px) translateX(10px) rotate(180deg) scale(1.5); opacity: 0.9; }
            66% { transform: translateY(-30px) translateX(-5px) rotate(360deg) scale(0.5); opacity: 0.3; }
          }
          
          @keyframes coin-particle-2 {
            0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.55; }
            50% { transform: translateY(-18px) translateX(-12px) scale(1.8); opacity: 0.8; }
          }
          
          @keyframes coin-particle-3 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.62; }
            40% { transform: translateY(-12px) translateX(15px) rotate(240deg); opacity: 0.9; }
            80% { transform: translateY(-25px) translateX(-8px) rotate(480deg); opacity: 0.4; }
          }
          
          @keyframes coin-particle-4 {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.58; }
            65% { transform: translateY(-20px) translateX(-10px); opacity: 0.85; }
          }
          
          @keyframes temple-power-1 {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.3); }
          }
          
          @keyframes temple-power-2 {
            0%, 100% { opacity: 0.35; transform: scale(1) rotate(0deg); }
            60% { opacity: 0.6; transform: scale(1.4) rotate(180deg); }
          }
          
          @keyframes temple-light-1 {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 0.9; }
          }
          
          @keyframes temple-light-2 {
            0%, 100% { opacity: 0.5; }
            40% { opacity: 0.8; }
          }
          
          @keyframes temple-light-3 {
            0%, 100% { opacity: 0.55; }
            70% { opacity: 0.85; }
          }
          
          @keyframes energy-beam-1 {
            0%, 100% { opacity: 0; transform: scaleY(1) skewX(1deg); }
            50% { opacity: 0.4; transform: scaleY(1.2) skewX(-1deg); }
          }
          
          @keyframes energy-beam-2 {
            0%, 100% { opacity: 0; transform: scaleY(1) skewX(-2deg); }
            60% { opacity: 0.3; transform: scaleY(1.4) skewX(2deg); }
          }
          
          @keyframes sky-glow-1 {
            0%, 100% { opacity: 0; transform: scale(1); }
            50% { opacity: 0.25; transform: scale(1.2); }
          }
          
          @keyframes sky-glow-2 {
            0%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            60% { opacity: 0.22; transform: scale(1.1) rotate(180deg); }
          }
          
          @keyframes sky-glow-3 {
            0%, 100% { opacity: 0; transform: scale(1); }
            40% { opacity: 0.18; transform: scale(1.3); }
          }
          
          @keyframes temple-fog-base {
            0%, 100% { opacity: 0.25; }
            50% { opacity: 0.4; }
          }
          
          @keyframes temple-fog-1 {
            0%, 100% { opacity: 0; transform: translateX(0px) scale(1); }
            50% { opacity: 0.28; transform: translateX(20px) scale(1.1); }
          }
          
          @keyframes temple-fog-2 {
            0%, 100% { opacity: 0; transform: translateX(0px) translateY(0px) scale(1); }
            50% { opacity: 0.25; transform: translateX(-18px) translateY(-2px) scale(1.05); }
          }
          
          @keyframes temple-fog-3 {
            0%, 100% { opacity: 0; transform: translateX(0px) scale(1); }
            50% { opacity: 0.32; transform: translateX(15px) scale(1.2); }
          }
          
          @keyframes temple-fog-4 {
            0%, 100% { opacity: 0; transform: translateX(0px) translateY(0px) scale(1); }
            50% { opacity: 0.22; transform: translateX(-12px) translateY(1px) scale(1.08); }
          }
          
          @keyframes ancient-atmosphere {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 0.9; }
          }
          
          @keyframes mystical-aura {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; }
          }
          
          @keyframes entrance-power-1 {
            0%, 100% { opacity: 0.4; transform: scale(0.8); }
            50% { opacity: 1; transform: scale(2); }
          }
          
          
          .animate-coin-dramatic-1 {
            animation: coin-dramatic-1 15s ease-in-out infinite;
          }
          
          .animate-coin-dramatic-2 {
            animation: coin-dramatic-2 18s ease-in-out infinite 3s;
          }
          
          .animate-coin-dramatic-3 {
            animation: coin-dramatic-3 12s ease-in-out infinite 6s;
          }
          
          .animate-coin-dramatic-4 {
            animation: coin-dramatic-4 20s ease-in-out infinite 2s;
          }
          
          .animate-coin-dramatic-5 {
            animation: coin-dramatic-5 16s ease-in-out infinite 8s;
          }
          
          .animate-coin-float-1 {
            animation: coin-float-1 10s ease-in-out infinite;
          }
          
          .animate-coin-float-2 {
            animation: coin-float-2 11s ease-in-out infinite 4s;
          }
          
          .animate-coin-float-3 {
            animation: coin-float-3 13s ease-in-out infinite 7s;
          }
          
          .animate-coin-float-4 {
            animation: coin-float-4 9s ease-in-out infinite 5s;
          }
          
          .animate-coin-particle-1 {
            animation: coin-particle-1 8s ease-in-out infinite;
          }
          
          .animate-coin-particle-2 {
            animation: coin-particle-2 7s ease-in-out infinite 3s;
          }
          
          .animate-coin-particle-3 {
            animation: coin-particle-3 9s ease-in-out infinite 6s;
          }
          
          .animate-coin-particle-4 {
            animation: coin-particle-4 8.5s ease-in-out infinite 2s;
          }
          
          .animate-temple-power-1 {
            animation: temple-power-1 6s ease-in-out infinite;
          }
          
          .animate-temple-power-2 {
            animation: temple-power-2 8s ease-in-out infinite 2s;
          }
          
          .animate-temple-light-1 {
            animation: temple-light-1 5s ease-in-out infinite;
          }
          
          .animate-temple-light-2 {
            animation: temple-light-2 6s ease-in-out infinite 2s;
          }
          
          .animate-temple-light-3 {
            animation: temple-light-3 7s ease-in-out infinite 4s;
          }
          
          .animate-energy-beam-1 {
            animation: energy-beam-1 10s ease-in-out infinite;
          }
          
          .animate-energy-beam-2 {
            animation: energy-beam-2 12s ease-in-out infinite 3s;
          }
          
          .animate-sky-glow-1 {
            animation: sky-glow-1 14s ease-in-out infinite;
          }
          
          .animate-sky-glow-2 {
            animation: sky-glow-2 16s ease-in-out infinite 5s;
          }
          
          .animate-sky-glow-3 {
            animation: sky-glow-3 18s ease-in-out infinite 8s;
          }
          
          .animate-temple-fog-base {
            animation: temple-fog-base 11s ease-in-out infinite;
          }
          
          .animate-temple-fog-1 {
            animation: temple-fog-1 17s ease-in-out infinite;
          }
          
          .animate-temple-fog-2 {
            animation: temple-fog-2 21s ease-in-out infinite 4s;
          }
          
          .animate-temple-fog-3 {
            animation: temple-fog-3 15s ease-in-out infinite 7s;
          }
          
          .animate-temple-fog-4 {
            animation: temple-fog-4 19s ease-in-out infinite 2s;
          }
          
          .animate-ancient-atmosphere {
            animation: ancient-atmosphere 13s ease-in-out infinite;
          }
          
          .animate-mystical-aura {
            animation: mystical-aura 16s ease-in-out infinite;
          }
          
          .animate-entrance-power-1 {
            animation: entrance-power-1 4s ease-in-out infinite;
          }
          
        `}</style>
      </div>
    </Card>
  );
}
