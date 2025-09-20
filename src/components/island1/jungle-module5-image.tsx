"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function JungleModule5Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        <Image
          src="/islands/island1/jungle-module5-image.webp"
          alt="Creating ERC20 Tokens Adventure Scene"
          fill
          className="object-cover"
        />
        
        <div className="absolute inset-0 animate-effects">
          {/* Central Mystical Golden Glow */}
          <div className="absolute inset-0">
            {/* Main central power glow */}
            <div className="absolute top-[55%] left-[47%] w-[60px] h-[40px] bg-yellow-400/70 rounded-full central-glow animate-central-power-1"></div>
            <div className="absolute top-[57%] left-[49%] w-[40px] h-[25px] bg-orange-300/80 rounded-full central-glow animate-central-power-2"></div>
            <div className="absolute top-[56%] left-[50%] w-[25px] h-[15px] bg-yellow-200/90 rounded-full central-glow animate-central-power-3"></div>
            <div className="absolute top-[58%] left-[51%] w-[15px] h-[10px] bg-white/85 rounded-full central-glow animate-central-power-4"></div>
            
            {/* Radiating energy rings */}
            <div className="absolute top-[52%] left-[44%] w-[80px] h-[50px] bg-yellow-300/20 rounded-full energy-ring animate-energy-ring-1"></div>
            <div className="absolute top-[50%] left-[42%] w-[100px] h-[60px] bg-orange-400/15 rounded-full energy-ring animate-energy-ring-2"></div>
          </div>

          {/* Ancient Runes on Stone Pillars */}
          <div className="absolute inset-0">
            {/* Left side pillars */}
            <div className="absolute top-[30%] left-[25%] w-[4px] h-[4px] bg-yellow-400/90 rounded-full ancient-rune animate-rune-glow-1"></div>
            <div className="absolute top-[35%] left-[15%] w-[5px] h-[5px] bg-orange-400/85 rounded-full ancient-rune animate-rune-glow-2"></div>
            <div className="absolute top-[38%] left-[32%] w-[4px] h-[4px] bg-yellow-300/95 rounded-full ancient-rune animate-rune-glow-3"></div>
            
            {/* Center back pillars */}
            <div className="absolute top-[22%] left-[42%] w-[5px] h-[5px] bg-yellow-400/95 rounded-full ancient-rune animate-rune-glow-4"></div>
            <div className="absolute top-[22%] left-[58%] w-[5px] h-[5px] bg-orange-400/90 rounded-full ancient-rune animate-rune-glow-5"></div>
            <div className="absolute top-[22%] left-[50%] w-[4px] h-[4px] bg-yellow-200/95 rounded-full ancient-rune animate-rune-glow-6"></div>
            
            {/* Right side pillars */}
            <div className="absolute top-[30%] right-[25%] w-[4px] h-[4px] bg-yellow-300/90 rounded-full ancient-rune animate-rune-glow-7"></div>
            <div className="absolute top-[35%] right-[15%] w-[5px] h-[5px] bg-orange-300/85 rounded-full ancient-rune animate-rune-glow-8"></div>
          </div>

          {/* Floating Mystical Particles */}
          <div className="absolute inset-0">
            {/* Large mystical orbs */}
            <div className="absolute top-[30%] left-[35%] w-[8px] h-[8px] bg-yellow-400/70 rounded-full mystical-orb animate-mystical-float-1"></div>
            <div className="absolute top-[25%] left-[65%] w-[6px] h-[6px] bg-orange-400/60 rounded-full mystical-orb animate-mystical-float-2"></div>
            <div className="absolute top-[40%] left-[30%] w-[7px] h-[7px] bg-yellow-300/65 rounded-full mystical-orb animate-mystical-float-3"></div>
            <div className="absolute top-[35%] right-[30%] w-[8px] h-[8px] bg-orange-300/70 rounded-full mystical-orb animate-mystical-float-4"></div>
            
            {/* Small magical sparks */}
            <div className="absolute top-[20%] left-[40%] w-[3px] h-[3px] bg-yellow-400/90 rounded-full magical-spark animate-spark-twinkle-1"></div>
            <div className="absolute top-[15%] left-[60%] w-[2px] h-[2px] bg-orange-400/85 rounded-full magical-spark animate-spark-twinkle-2"></div>
            <div className="absolute top-[50%] left-[25%] w-[3px] h-[3px] bg-yellow-300/80 rounded-full magical-spark animate-spark-twinkle-3"></div>
            <div className="absolute top-[55%] right-[25%] w-[2px] h-[2px] bg-orange-300/85 rounded-full magical-spark animate-spark-twinkle-4"></div>
          </div>

          {/* EPIC Energy Laser Beam */}
          <div className="absolute inset-0">
            {/* Main power laser beam */}
            <div className="absolute top-[0%] left-[48.5%] w-[12px] h-[60%] bg-gradient-to-b from-cyan-300/80 via-blue-400/60 to-white/90 laser-beam animate-laser-beam-main"></div>
            <div className="absolute top-[0%] left-[49.5%] w-[4px] h-[62%] bg-gradient-to-b from-white/95 via-cyan-200/70 to-yellow-300/85 laser-core animate-laser-core"></div>
            
            {/* Laser energy pulses */}
            <div className="absolute top-[0%] left-[48%] w-[8px] h-[3px] bg-cyan-400/60 rounded-full laser-pulse animate-laser-pulse-1"></div>
            <div className="absolute top-[15%] left-[48.5%] w-[6px] h-[2px] bg-blue-300/50 rounded-full laser-pulse animate-laser-pulse-2"></div>
            <div className="absolute top-[30%] left-[49%] w-[5px] h-[2px] bg-cyan-300/55 rounded-full laser-pulse animate-laser-pulse-3"></div>
            
            {/* Sky illumination effect */}
            <div className="absolute top-[0%] left-[0%] w-full h-[40%] bg-gradient-to-b from-cyan-200/25 via-blue-300/15 to-transparent sky-illuminate animate-sky-illuminate"></div>
            <div className="absolute top-[0%] left-[40%] w-[20%] h-[25%] bg-gradient-to-b from-white/20 via-cyan-200/10 to-transparent laser-glow animate-laser-glow"></div>
            
            {/* Energy impact at center */}
            <div className="absolute top-[54%] left-[48%] w-[20px] h-[15px] bg-cyan-300/40 rounded-full energy-impact animate-energy-impact"></div>
            <div className="absolute top-[55%] left-[49%] w-[15px] h-[10px] bg-white/60 rounded-full energy-impact animate-energy-impact-core"></div>
          </div>

          {/* Atmospheric Jungle Mist */}
          <div className="absolute inset-0">
            {/* Bottom mist layer */}
            <div className="absolute bottom-[0%] left-[0%] w-full h-[15%] bg-gradient-to-t from-green-200/20 via-green-300/10 to-transparent jungle-mist animate-mist-drift-base"></div>
            
            {/* Floating mist wisps */}
            <div className="absolute bottom-[5%] left-[15%] w-[80px] h-[25px] bg-green-200/15 rounded-full mist-wisp animate-mist-drift-1"></div>
            <div className="absolute bottom-[8%] right-[20%] w-[60px] h-[20px] bg-green-300/12 rounded-full mist-wisp animate-mist-drift-2"></div>
            <div className="absolute bottom-[3%] left-[60%] w-[70px] h-[22px] bg-green-100/18 rounded-full mist-wisp animate-mist-drift-3"></div>
          </div>

          {/* Ancient Temple Atmospheric Glow */}
          <div className="absolute inset-0">
            {/* General atmospheric enhancement */}
            <div className="absolute top-[0%] left-[0%] w-full h-[60%] bg-gradient-to-b from-yellow-300/5 via-orange-400/8 to-transparent atmospheric-glow animate-temple-atmosphere"></div>
            <div className="absolute bottom-[0%] left-[0%] w-full h-[40%] bg-gradient-to-t from-green-400/8 via-yellow-300/5 to-transparent atmospheric-glow animate-jungle-atmosphere"></div>
          </div>
        </div>

        <style jsx>{`
          .animate-effects {
            animation-play-state: running;
          }

          @keyframes central-power-1 {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 0.9; transform: scale(1.4); }
          }
          
          @keyframes central-power-2 {
            0%, 100% { opacity: 0.6; transform: scale(1) rotate(0deg); }
            60% { opacity: 0.95; transform: scale(1.3) rotate(180deg); }
          }
          
          @keyframes central-power-3 {
            0%, 100% { opacity: 0.7; transform: scale(1); }
            40% { opacity: 1; transform: scale(1.6); }
          }
          
          @keyframes central-power-4 {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            70% { opacity: 0.95; transform: scale(2); }
          }
          
          @keyframes energy-ring-1 {
            0%, 100% { opacity: 0; transform: scale(0.8); }
            50% { opacity: 0.3; transform: scale(1.2); }
          }
          
          @keyframes energy-ring-2 {
            0%, 100% { opacity: 0; transform: scale(0.9); }
            60% { opacity: 0.25; transform: scale(1.1); }
          }
          
          @keyframes rune-glow-1 {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            25% { opacity: 0.9; transform: scale(1.8); }
          }
          
          @keyframes rune-glow-2 {
            0%, 100% { opacity: 0.15; transform: scale(1); }
            35% { opacity: 0.85; transform: scale(1.6); }
          }
          
          @keyframes rune-glow-3 {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            45% { opacity: 0.95; transform: scale(1.9); }
          }
          
          @keyframes rune-glow-4 {
            0%, 100% { opacity: 0.25; transform: scale(1); }
            55% { opacity: 1; transform: scale(2); }
          }
          
          @keyframes rune-glow-5 {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            65% { opacity: 0.9; transform: scale(1.7); }
          }
          
          @keyframes rune-glow-6 {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            75% { opacity: 0.95; transform: scale(1.8); }
          }
          
          @keyframes rune-glow-7 {
            0%, 100% { opacity: 0.15; transform: scale(1); }
            85% { opacity: 0.8; transform: scale(1.5); }
          }
          
          @keyframes rune-glow-8 {
            0%, 100% { opacity: 0.25; transform: scale(1); }
            95% { opacity: 0.9; transform: scale(1.9); }
          }
          
          @keyframes mystical-float-1 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.5; }
            33% { transform: translateY(-25px) translateX(15px) rotate(120deg); opacity: 0.9; }
            66% { transform: translateY(-40px) translateX(-10px) rotate(240deg); opacity: 0.3; }
          }
          
          @keyframes mystical-float-2 {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.4; }
            50% { transform: translateY(-30px) translateX(-20px); opacity: 0.8; }
          }
          
          @keyframes mystical-float-3 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.6; }
            40% { transform: translateY(-20px) translateX(25px) rotate(180deg); opacity: 0.2; }
            80% { transform: translateY(-35px) translateX(-15px) rotate(360deg); opacity: 0.9; }
          }
          
          @keyframes mystical-float-4 {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.5; }
            60% { transform: translateY(-28px) translateX(18px); opacity: 0.85; }
          }
          
          @keyframes spark-twinkle-1 {
            0%, 90%, 100% { opacity: 0; }
            95% { opacity: 1; }
          }
          
          @keyframes spark-twinkle-2 {
            0%, 85%, 100% { opacity: 0; }
            90% { opacity: 0.9; }
          }
          
          @keyframes spark-twinkle-3 {
            0%, 80%, 100% { opacity: 0; }
            85% { opacity: 1; }
          }
          
          @keyframes spark-twinkle-4 {
            0%, 75%, 100% { opacity: 0; }
            80% { opacity: 0.95; }
          }
          
          @keyframes mist-drift-base {
            0%, 100% { opacity: 0.15; }
            50% { opacity: 0.25; }
          }
          
          @keyframes mist-drift-1 {
            0%, 100% { opacity: 0; transform: translateX(0px) scale(1); }
            50% { opacity: 0.2; transform: translateX(25px) scale(1.1); }
          }
          
          @keyframes mist-drift-2 {
            0%, 100% { opacity: 0; transform: translateX(0px) translateY(0px) scale(1); }
            50% { opacity: 0.18; transform: translateX(-20px) translateY(-3px) scale(1.05); }
          }
          
          @keyframes mist-drift-3 {
            0%, 100% { opacity: 0; transform: translateX(0px) scale(1); }
            50% { opacity: 0.22; transform: translateX(18px) scale(1.15); }
          }
          
          @keyframes temple-atmosphere {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; }
          }
          
          @keyframes jungle-atmosphere {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 0.9; }
          }
          
          @keyframes laser-beam-main {
            0%, 90%, 100% { opacity: 0; transform: scaleY(0); }
            91% { opacity: 0.3; transform: scaleY(0.5); }
            93% { opacity: 0.9; transform: scaleY(1); }
            97% { opacity: 1; transform: scaleY(1); }
            99% { opacity: 0.2; transform: scaleY(0.3); }
          }
          
          @keyframes laser-core {
            0%, 90%, 100% { opacity: 0; transform: scaleY(0); }
            92% { opacity: 0.7; transform: scaleY(0.8); }
            94% { opacity: 1; transform: scaleY(1); }
            96% { opacity: 1; transform: scaleY(1); }
            98% { opacity: 0.4; transform: scaleY(0.2); }
          }
          
          @keyframes laser-pulse-1 {
            0%, 90%, 100% { opacity: 0; transform: translateY(0px) scale(1); }
            91% { opacity: 0.8; transform: translateY(0px) scale(1.5); }
            94% { opacity: 0.4; transform: translateY(200px) scale(0.8); }
            97% { opacity: 0; transform: translateY(400px) scale(0.3); }
          }
          
          @keyframes laser-pulse-2 {
            0%, 90%, 100% { opacity: 0; transform: translateY(0px) scale(1); }
            92% { opacity: 0.6; transform: translateY(0px) scale(1.3); }
            95% { opacity: 0.3; transform: translateY(150px) scale(0.9); }
            98% { opacity: 0; transform: translateY(300px) scale(0.4); }
          }
          
          @keyframes laser-pulse-3 {
            0%, 90%, 100% { opacity: 0; transform: translateY(0px) scale(1); }
            93% { opacity: 0.7; transform: translateY(0px) scale(1.4); }
            96% { opacity: 0.2; transform: translateY(100px) scale(0.7); }
            99% { opacity: 0; transform: translateY(200px) scale(0.2); }
          }
          
          @keyframes sky-illuminate {
            0%, 90%, 100% { opacity: 0; }
            91%, 98% { opacity: 0.4; }
            94% { opacity: 0.7; }
          }
          
          @keyframes laser-glow {
            0%, 89%, 100% { opacity: 0; transform: scale(1); }
            91%, 97% { opacity: 0.3; transform: scale(1.2); }
            94% { opacity: 0.6; transform: scale(1.5); }
          }
          
          @keyframes energy-impact {
            0%, 92%, 100% { opacity: 0; transform: scale(1); }
            94%, 96% { opacity: 0.6; transform: scale(2); }
            95% { opacity: 0.9; transform: scale(2.5); }
          }
          
          @keyframes energy-impact-core {
            0%, 92%, 100% { opacity: 0; transform: scale(1); }
            94%, 96% { opacity: 0.8; transform: scale(1.8); }
            95% { opacity: 1; transform: scale(2.2); }
          }

          .animate-central-power-1 {
            animation: central-power-1 6s ease-in-out infinite;
          }
          
          .animate-central-power-2 {
            animation: central-power-2 7s ease-in-out infinite 1s;
          }
          
          .animate-central-power-3 {
            animation: central-power-3 5s ease-in-out infinite 2s;
          }
          
          .animate-central-power-4 {
            animation: central-power-4 8s ease-in-out infinite 3s;
          }
          
          .animate-energy-ring-1 {
            animation: energy-ring-1 10s ease-in-out infinite;
          }
          
          .animate-energy-ring-2 {
            animation: energy-ring-2 12s ease-in-out infinite 2s;
          }
          
          .animate-rune-glow-1 {
            animation: rune-glow-1 4s ease-in-out infinite;
          }
          
          .animate-rune-glow-2 {
            animation: rune-glow-2 4.5s ease-in-out infinite 0.5s;
          }
          
          .animate-rune-glow-3 {
            animation: rune-glow-3 5s ease-in-out infinite 1s;
          }
          
          .animate-rune-glow-4 {
            animation: rune-glow-4 4.2s ease-in-out infinite 1.5s;
          }
          
          .animate-rune-glow-5 {
            animation: rune-glow-5 4.8s ease-in-out infinite 2s;
          }
          
          .animate-rune-glow-6 {
            animation: rune-glow-6 4.3s ease-in-out infinite 2.5s;
          }
          
          .animate-rune-glow-7 {
            animation: rune-glow-7 5.2s ease-in-out infinite 3s;
          }
          
          .animate-rune-glow-8 {
            animation: rune-glow-8 4.7s ease-in-out infinite 3.5s;
          }
          
          .animate-mystical-float-1 {
            animation: mystical-float-1 15s ease-in-out infinite;
          }
          
          .animate-mystical-float-2 {
            animation: mystical-float-2 18s ease-in-out infinite 4s;
          }
          
          .animate-mystical-float-3 {
            animation: mystical-float-3 12s ease-in-out infinite 8s;
          }
          
          .animate-mystical-float-4 {
            animation: mystical-float-4 16s ease-in-out infinite 2s;
          }
          
          .animate-spark-twinkle-1 {
            animation: spark-twinkle-1 8s linear infinite;
          }
          
          .animate-spark-twinkle-2 {
            animation: spark-twinkle-2 10s linear infinite 2s;
          }
          
          .animate-spark-twinkle-3 {
            animation: spark-twinkle-3 7s linear infinite 4s;
          }
          
          .animate-spark-twinkle-4 {
            animation: spark-twinkle-4 9s linear infinite 1s;
          }
          
          .animate-mist-drift-base {
            animation: mist-drift-base 20s ease-in-out infinite;
          }
          
          .animate-mist-drift-1 {
            animation: mist-drift-1 25s ease-in-out infinite;
          }
          
          .animate-mist-drift-2 {
            animation: mist-drift-2 30s ease-in-out infinite 5s;
          }
          
          .animate-mist-drift-3 {
            animation: mist-drift-3 22s ease-in-out infinite 10s;
          }
          
          .animate-temple-atmosphere {
            animation: temple-atmosphere 18s ease-in-out infinite;
          }
          
          .animate-jungle-atmosphere {
            animation: jungle-atmosphere 22s ease-in-out infinite 5s;
          }
          
          .animate-laser-beam-main {
            animation: laser-beam-main 30s linear infinite;
          }
          
          .animate-laser-core {
            animation: laser-core 30s linear infinite 0.2s;
          }
          
          .animate-laser-pulse-1 {
            animation: laser-pulse-1 30s linear infinite 0.5s;
          }
          
          .animate-laser-pulse-2 {
            animation: laser-pulse-2 30s linear infinite 0.8s;
          }
          
          .animate-laser-pulse-3 {
            animation: laser-pulse-3 30s linear infinite 1.2s;
          }
          
          .animate-sky-illuminate {
            animation: sky-illuminate 30s linear infinite 0.3s;
          }
          
          .animate-laser-glow {
            animation: laser-glow 30s linear infinite 0.1s;
          }
          
          .animate-energy-impact {
            animation: energy-impact 30s linear infinite 1.5s;
          }
          
          .animate-energy-impact-core {
            animation: energy-impact-core 30s linear infinite 1.6s;
          }
        `}</style>
      </div>
    </Card>
  );
}
