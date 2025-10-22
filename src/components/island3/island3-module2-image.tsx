"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Island3Module2Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        {/* Base image */}
        <Image
          src="/islands/island3/island3-module2-image.webp"
          alt="Advanced NFT Features - Desert Bluff Adventure"
          fill
          className="object-cover"
          priority
        />
        
        {/* BOLD Animated overlay effects */}
        <div className="absolute inset-0 animate-effects">
          {/* Market Stall Lanterns - BOLD Dancing Flames */}
          <div className="absolute inset-0">
            {/* Left market stalls */}
            <div className="absolute top-[62%] left-[12%] w-[12px] h-[16px] bg-orange-400 rounded-full lantern-flame animate-lantern-dance-1"></div>
            <div className="absolute top-[63%] left-[18%] w-[10px] h-[14px] bg-yellow-400 rounded-full lantern-flame animate-lantern-dance-2"></div>
            <div className="absolute top-[62.5%] left-[24%] w-[11px] h-[15px] bg-orange-300 rounded-full lantern-flame animate-lantern-dance-3"></div>
            
            {/* Right market stalls */}
            <div className="absolute top-[62%] right-[12%] w-[12px] h-[16px] bg-orange-400 rounded-full lantern-flame animate-lantern-dance-4"></div>
            <div className="absolute top-[63%] right-[18%] w-[10px] h-[14px] bg-yellow-400 rounded-full lantern-flame animate-lantern-dance-5"></div>
            <div className="absolute top-[62.5%] right-[24%] w-[11px] h-[15px] bg-orange-300 rounded-full lantern-flame animate-lantern-dance-6"></div>
            
            {/* Lantern glows */}
            <div className="absolute top-[61%] left-[12%] w-[35px] h-[35px] bg-orange-400/60 rounded-full lantern-glow animate-lantern-glow-1"></div>
            <div className="absolute top-[62%] left-[18%] w-[32px] h-[32px] bg-yellow-400/55 rounded-full lantern-glow animate-lantern-glow-2"></div>
            <div className="absolute top-[61%] right-[12%] w-[35px] h-[35px] bg-orange-400/60 rounded-full lantern-glow animate-lantern-glow-3"></div>
            <div className="absolute top-[62%] right-[18%] w-[32px] h-[32px] bg-yellow-400/55 rounded-full lantern-glow animate-lantern-glow-4"></div>
          </div>

          {/* Fountain Water Effects - BOLD */}
          <div className="absolute inset-0">
            {/* Fountain center water sparkles */}
            <div className="absolute top-[67%] left-[48%] w-[10px] h-[10px] bg-cyan-200 rounded-full fountain-sparkle animate-fountain-sparkle-1"></div>
            <div className="absolute top-[68%] left-[47%] w-[8px] h-[8px] bg-white rounded-full fountain-sparkle animate-fountain-sparkle-2"></div>
            <div className="absolute top-[67%] left-[49%] w-[9px] h-[9px] bg-blue-200 rounded-full fountain-sparkle animate-fountain-sparkle-3"></div>
            <div className="absolute top-[69%] left-[48.5%] w-[7px] h-[7px] bg-cyan-100 rounded-full fountain-sparkle animate-fountain-sparkle-4"></div>
            
            {/* Fountain water glow */}
            <div className="absolute top-[66%] left-[46%] w-[80px] h-[60px] bg-cyan-300/50 rounded-full fountain-glow animate-fountain-glow"></div>
          </div>

          {/* Fortress Gate Torches - BOLD */}
          <div className="absolute inset-0">
            {/* Main gate torches */}
            <div className="absolute top-[54%] left-[45%] w-[14px] h-[18px] bg-orange-500 rounded-full gate-torch animate-gate-torch-1"></div>
            <div className="absolute top-[54%] left-[51%] w-[14px] h-[18px] bg-orange-500 rounded-full gate-torch animate-gate-torch-2"></div>
            
            {/* Gate torch glows */}
            <div className="absolute top-[53%] left-[44.5%] w-[45px] h-[50px] bg-orange-400/65 rounded-full torch-glow animate-gate-torch-glow-1"></div>
            <div className="absolute top-[53%] left-[50.5%] w-[45px] h-[50px] bg-orange-400/65 rounded-full torch-glow animate-gate-torch-glow-2"></div>
          </div>

          {/* Fortress Windows - BOLD Golden Lights */}
          <div className="absolute inset-0">
            {/* Upper fortress windows */}
            <div className="absolute top-[22%] left-[44%] w-[8px] h-[10px] bg-yellow-300 rounded window-light animate-window-flicker-1"></div>
            <div className="absolute top-[24%] left-[47%] w-[7px] h-[9px] bg-orange-300 rounded window-light animate-window-flicker-2"></div>
            <div className="absolute top-[23%] left-[50%] w-[8px] h-[10px] bg-yellow-300 rounded window-light animate-window-flicker-3"></div>
            
            {/* Mid fortress windows */}
            <div className="absolute top-[32%] left-[42%] w-[7px] h-[9px] bg-orange-300 rounded window-light animate-window-flicker-4"></div>
            <div className="absolute top-[34%] left-[46%] w-[8px] h-[10px] bg-yellow-300 rounded window-light animate-window-flicker-5"></div>
            <div className="absolute top-[33%] left-[50%] w-[7px] h-[9px] bg-orange-300 rounded window-light animate-window-flicker-6"></div>
            <div className="absolute top-[35%] left-[52%] w-[8px] h-[10px] bg-yellow-300 rounded window-light animate-window-flicker-7"></div>
            
            {/* Lower fortress windows */}
            <div className="absolute top-[42%] left-[43%] w-[7px] h-[9px] bg-orange-300 rounded window-light animate-window-flicker-8"></div>
            <div className="absolute top-[44%] left-[48%] w-[8px] h-[10px] bg-yellow-300 rounded window-light animate-window-flicker-9"></div>
            <div className="absolute top-[43%] left-[51%] w-[7px] h-[9px] bg-orange-300 rounded window-light animate-window-flicker-10"></div>
          </div>

          {/* Palm Tree Leaves Swaying */}
          <div className="absolute inset-0">
            {/* Left palm trees glows */}
            <div className="absolute top-[48%] left-[14%] w-[60px] h-[80px] bg-green-400/30 rounded-full palm-glow animate-palm-sway-1"></div>
            <div className="absolute top-[50%] left-[22%] w-[55px] h-[75px] bg-green-400/28 rounded-full palm-glow animate-palm-sway-2"></div>
            
            {/* Right palm trees glows */}
            <div className="absolute top-[48%] right-[14%] w-[60px] h-[80px] bg-green-400/30 rounded-full palm-glow animate-palm-sway-3"></div>
            <div className="absolute top-[50%] right-[22%] w-[55px] h-[75px] bg-green-400/28 rounded-full palm-glow animate-palm-sway-4"></div>
          </div>

          {/* Market Goods Sparkles - BOLD */}
          <div className="absolute inset-0">
            {/* Left side goods */}
            <div className="absolute top-[70%] left-[16%] w-[8px] h-[8px] bg-purple-300 rounded-full goods-sparkle animate-goods-sparkle-1"></div>
            <div className="absolute top-[72%] left-[20%] w-[7px] h-[7px] bg-pink-300 rounded-full goods-sparkle animate-goods-sparkle-2"></div>
            <div className="absolute top-[74%] left-[18%] w-[8px] h-[8px] bg-red-300 rounded-full goods-sparkle animate-goods-sparkle-3"></div>
            
            {/* Right side goods */}
            <div className="absolute top-[70%] right-[16%] w-[8px] h-[8px] bg-green-300 rounded-full goods-sparkle animate-goods-sparkle-4"></div>
            <div className="absolute top-[72%] right-[20%] w-[7px] h-[7px] bg-blue-300 rounded-full goods-sparkle animate-goods-sparkle-5"></div>
            <div className="absolute top-[74%] right-[18%] w-[8px] h-[8px] bg-yellow-300 rounded-full goods-sparkle animate-goods-sparkle-6"></div>
          </div>

          {/* Background Mountain/Pyramid Golden Gleams - BOLD */}
          <div className="absolute inset-0">
            <div className="absolute top-[28%] left-[58%] w-[9px] h-[9px] bg-yellow-200 rounded-full pyramid-gleam animate-pyramid-gleam-1"></div>
            <div className="absolute top-[32%] left-[62%] w-[8px] h-[8px] bg-white rounded-full pyramid-gleam animate-pyramid-gleam-2"></div>
            <div className="absolute top-[36%] right-[18%] w-[9px] h-[9px] bg-yellow-200 rounded-full pyramid-gleam animate-pyramid-gleam-3"></div>
            <div className="absolute top-[30%] right-[22%] w-[8px] h-[8px] bg-white rounded-full pyramid-gleam animate-pyramid-gleam-4"></div>
          </div>

          {/* Heat Shimmer Waves - BOLD */}
          <div className="absolute inset-0">
            {/* Foreground heat waves */}
            <div className="absolute top-[75%] left-[8%] w-[180px] h-[100px] bg-orange-200/35 rounded-full heat-shimmer animate-heat-shimmer-1"></div>
            <div className="absolute top-[76%] left-[35%] w-[200px] h-[110px] bg-yellow-200/32 rounded-full heat-shimmer animate-heat-shimmer-2"></div>
            <div className="absolute top-[74%] right-[10%] w-[190px] h-[105px] bg-orange-200/38 rounded-full heat-shimmer animate-heat-shimmer-3"></div>
            
            {/* Mid-ground heat */}
            <div className="absolute top-[62%] left-[15%] w-[160px] h-[90px] bg-orange-100/28 rounded-full heat-shimmer animate-heat-shimmer-4"></div>
            <div className="absolute top-[64%] right-[18%] w-[170px] h-[95px] bg-yellow-100/25 rounded-full heat-shimmer animate-heat-shimmer-5"></div>
          </div>

          {/* Sand Particles Blowing - BOLD */}
          <div className="absolute inset-0">
            <div className="absolute top-[68%] left-[10%] w-[6px] h-[6px] bg-orange-300/80 rounded-full sand-particle animate-sand-blow-1"></div>
            <div className="absolute top-[72%] left-[25%] w-[7px] h-[7px] bg-yellow-300/85 rounded-full sand-particle animate-sand-blow-2"></div>
            <div className="absolute top-[70%] left-[45%] w-[6px] h-[6px] bg-orange-300/80 rounded-full sand-particle animate-sand-blow-3"></div>
            <div className="absolute top-[74%] left-[65%] w-[7px] h-[7px] bg-yellow-300/85 rounded-full sand-particle animate-sand-blow-4"></div>
            <div className="absolute top-[71%] left-[82%] w-[6px] h-[6px] bg-orange-300/80 rounded-full sand-particle animate-sand-blow-5"></div>
          </div>

          {/* Fortress Tower Beacon - BOLD Pulsing */}
          <div className="absolute inset-0">
            <div className="absolute top-[10%] left-[47%] w-[50px] h-[50px] bg-orange-400/55 rounded-full tower-beacon animate-tower-beacon-1"></div>
            <div className="absolute top-[11%] left-[47.5%] w-[35px] h-[35px] bg-yellow-400/65 rounded-full tower-beacon animate-tower-beacon-2"></div>
            <div className="absolute top-[12%] left-[48%] w-[20px] h-[20px] bg-white/75 rounded-full tower-beacon animate-tower-beacon-3"></div>
          </div>

          {/* Canopy/Awning Shadows Dancing */}
          <div className="absolute inset-0">
            {/* Left canopy ripples */}
            <div className="absolute top-[58%] left-[10%] w-[120px] h-[60px] bg-black/12 rounded-full canopy-shadow animate-canopy-wave-1"></div>
            <div className="absolute top-[59%] left-[18%] w-[110px] h-[55px] bg-black/10 rounded-full canopy-shadow animate-canopy-wave-2"></div>
            
            {/* Right canopy ripples */}
            <div className="absolute top-[58%] right-[10%] w-[120px] h-[60px] bg-black/12 rounded-full canopy-shadow animate-canopy-wave-3"></div>
            <div className="absolute top-[59%] right-[18%] w-[110px] h-[55px] bg-black/10 rounded-full canopy-shadow animate-canopy-wave-4"></div>
          </div>

          {/* Magic Dust/Spice Particles - BOLD */}
          <div className="absolute inset-0">
            <div className="absolute top-[65%] left-[32%] w-[5px] h-[5px] bg-gold/90 rounded-full magic-dust animate-magic-dust-1"></div>
            <div className="absolute top-[67%] left-[38%] w-[6px] h-[6px] bg-amber-300/95 rounded-full magic-dust animate-magic-dust-2"></div>
            <div className="absolute top-[66%] left-[55%] w-[5px] h-[5px] bg-gold/90 rounded-full magic-dust animate-magic-dust-3"></div>
            <div className="absolute top-[68%] left-[62%] w-[6px] h-[6px] bg-amber-300/95 rounded-full magic-dust animate-magic-dust-4"></div>
          </div>
        </div>
        
        <style jsx>{`
          /* BOLD Effect Styles */
          .lantern-flame {
            box-shadow: 0 0 30px currentColor, 0 0 60px currentColor, 0 0 90px currentColor;
            filter: blur(2px);
          }
          
          .lantern-glow {
            filter: blur(25px);
          }
          
          .fountain-sparkle {
            box-shadow: 0 0 50px currentColor, 0 0 100px currentColor, 0 0 150px currentColor;
            filter: blur(1px);
          }
          
          .fountain-glow {
            filter: blur(35px);
          }
          
          .gate-torch {
            box-shadow: 0 0 40px currentColor, 0 0 80px currentColor, 0 0 120px currentColor;
            filter: blur(2.5px);
          }
          
          .torch-glow {
            filter: blur(30px);
          }
          
          .window-light {
            box-shadow: 0 0 35px currentColor, 0 0 70px currentColor, 0 0 105px currentColor;
            filter: blur(1.5px);
          }
          
          .palm-glow {
            filter: blur(40px);
          }
          
          .goods-sparkle {
            box-shadow: 0 0 45px currentColor, 0 0 90px currentColor, 0 0 135px currentColor;
            filter: blur(1px);
          }
          
          .pyramid-gleam {
            box-shadow: 0 0 55px currentColor, 0 0 110px currentColor, 0 0 165px currentColor;
            filter: blur(0.8px);
          }
          
          .heat-shimmer {
            filter: blur(45px);
            opacity: 0;
          }
          
          .sand-particle {
            box-shadow: 0 0 25px currentColor, 0 0 50px currentColor;
            filter: blur(1.5px);
          }
          
          .tower-beacon {
            filter: blur(28px);
          }
          
          .canopy-shadow {
            filter: blur(30px);
          }
          
          .magic-dust {
            box-shadow: 0 0 40px currentColor, 0 0 80px currentColor, 0 0 120px currentColor;
            filter: blur(0.5px);
          }
          
          .animate-effects .lantern-flame,
          .animate-effects .lantern-glow,
          .animate-effects .fountain-sparkle,
          .animate-effects .fountain-glow,
          .animate-effects .gate-torch,
          .animate-effects .torch-glow,
          .animate-effects .window-light,
          .animate-effects .palm-glow,
          .animate-effects .goods-sparkle,
          .animate-effects .pyramid-gleam,
          .animate-effects .heat-shimmer,
          .animate-effects .sand-particle,
          .animate-effects .tower-beacon,
          .animate-effects .canopy-shadow,
          .animate-effects .magic-dust {
            animation-play-state: running;
          }
          
          /* Lantern Dancing Flame Animations - BOLD */
          @keyframes lantern-dance-1 {
            0%, 100% { opacity: 1; transform: scale(1) translateY(0); }
            25% { opacity: 0.85; transform: scale(1.25) translateY(-4px) skewX(3deg); }
            50% { opacity: 0.95; transform: scale(0.9) translateY(-2px) skewX(-4deg); }
            75% { opacity: 1; transform: scale(1.15) translateY(-5px) skewX(2deg); }
          }
          
          @keyframes lantern-dance-2 {
            0%, 100% { opacity: 1; transform: scale(1) translateY(0) rotate(0deg); }
            30% { opacity: 0.82; transform: scale(1.28) translateY(-5px) rotate(5deg); }
            60% { opacity: 0.92; transform: scale(0.88) translateY(-3px) rotate(-6deg); }
            85% { opacity: 1; transform: scale(1.18) translateY(-6px) rotate(3deg); }
          }
          
          @keyframes lantern-dance-3 {
            0%, 100% { opacity: 1; transform: scale(1) translateY(0); }
            20% { opacity: 0.88; transform: scale(1.22) translateY(-3px) skewX(-3deg); }
            55% { opacity: 0.98; transform: scale(0.92) translateY(-1px) skewX(5deg); }
            80% { opacity: 1; transform: scale(1.12) translateY(-4px) skewX(-2deg); }
          }
          
          @keyframes lantern-dance-4 {
            0%, 100% { opacity: 1; transform: scale(1) translateY(0); }
            28% { opacity: 0.86; transform: scale(1.26) translateY(-5px) skewX(4deg); }
            58% { opacity: 0.94; transform: scale(0.9) translateY(-2px) skewX(-5deg); }
            82% { opacity: 1; transform: scale(1.16) translateY(-6px) skewX(3deg); }
          }
          
          @keyframes lantern-dance-5 {
            0%, 100% { opacity: 1; transform: scale(1) translateY(0) rotate(0deg); }
            22% { opacity: 0.84; transform: scale(1.24) translateY(-4px) rotate(-4deg); }
            52% { opacity: 0.96; transform: scale(0.91) translateY(-3px) rotate(7deg); }
            78% { opacity: 1; transform: scale(1.14) translateY(-5px) rotate(-2deg); }
          }
          
          @keyframes lantern-dance-6 {
            0%, 100% { opacity: 1; transform: scale(1) translateY(0); }
            35% { opacity: 0.87; transform: scale(1.27) translateY(-6px) skewX(-4deg); }
            65% { opacity: 0.93; transform: scale(0.89) translateY(-2px) skewX(6deg); }
            88% { opacity: 1; transform: scale(1.17) translateY(-5px) skewX(-3deg); }
          }
          
          /* Lantern Glow Animations - BOLD */
          @keyframes lantern-glow-1 {
            0%, 100% { opacity: 0.60; transform: scale(1); }
            50% { opacity: 0.85; transform: scale(1.18); }
          }
          
          @keyframes lantern-glow-2 {
            0%, 100% { opacity: 0.55; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.80; transform: scale(1.15) rotate(15deg); }
          }
          
          @keyframes lantern-glow-3 {
            0%, 100% { opacity: 0.60; transform: scale(1); }
            50% { opacity: 0.85; transform: scale(1.18); }
          }
          
          @keyframes lantern-glow-4 {
            0%, 100% { opacity: 0.55; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.80; transform: scale(1.15) rotate(-15deg); }
          }
          
          /* Fountain Sparkle Animations - BOLD */
          @keyframes fountain-sparkle-1 {
            0%, 60%, 100% { opacity: 0; transform: scale(0.5) translateY(0); }
            70%, 85% { opacity: 1; transform: scale(4) translateY(-12px); }
            77% { opacity: 0.7; transform: scale(3.2) translateY(-8px); }
          }
          
          @keyframes fountain-sparkle-2 {
            0%, 65%, 100% { opacity: 0; transform: scale(0.5) translateY(0) rotate(0deg); }
            75%, 90% { opacity: 1; transform: scale(3.8) translateY(-10px) rotate(360deg); }
            82% { opacity: 0.7; transform: scale(3) translateY(-7px) rotate(180deg); }
          }
          
          @keyframes fountain-sparkle-3 {
            0%, 58%, 100% { opacity: 0; transform: scale(0.5) translateY(0); }
            68%, 83% { opacity: 1; transform: scale(4.2) translateY(-14px); }
            75% { opacity: 0.7; transform: scale(3.4) translateY(-9px); }
          }
          
          @keyframes fountain-sparkle-4 {
            0%, 72%, 100% { opacity: 0; transform: scale(0.5) translateY(0) rotate(0deg); }
            82%, 97% { opacity: 1; transform: scale(3.6) translateY(-11px) rotate(360deg); }
            89% { opacity: 0.7; transform: scale(2.8) translateY(-6px) rotate(180deg); }
          }
          
          @keyframes fountain-glow {
            0%, 100% { opacity: 0.50; transform: scale(1); }
            50% { opacity: 0.75; transform: scale(1.22); }
          }
          
          /* Gate Torch Animations - BOLD */
          @keyframes gate-torch-1 {
            0%, 100% { opacity: 1; transform: scale(1) translateY(0); }
            20% { opacity: 0.82; transform: scale(1.35) translateY(-6px) skewX(4deg); }
            45% { opacity: 0.94; transform: scale(0.85) translateY(-2px) skewX(-5deg); }
            70% { opacity: 1; transform: scale(1.25) translateY(-7px) skewX(3deg); }
          }
          
          @keyframes gate-torch-2 {
            0%, 100% { opacity: 1; transform: scale(1) translateY(0) rotate(0deg); }
            25% { opacity: 0.85; transform: scale(1.38) translateY(-7px) rotate(6deg); }
            50% { opacity: 0.92; transform: scale(0.88) translateY(-3px) rotate(-6deg); }
            75% { opacity: 1; transform: scale(1.28) translateY(-8px) rotate(4deg); }
          }
          
          @keyframes gate-torch-glow-1 {
            0%, 100% { opacity: 0.65; transform: scale(1); }
            50% { opacity: 0.90; transform: scale(1.25); }
          }
          
          @keyframes gate-torch-glow-2 {
            0%, 100% { opacity: 0.65; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.90; transform: scale(1.25) rotate(20deg); }
          }
          
          /* Window Flicker Animations - BOLD */
          @keyframes window-flicker-1 {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.75; transform: scale(1.45); }
          }
          
          @keyframes window-flicker-2 {
            0%, 100% { opacity: 0.95; transform: scale(1); }
            60% { opacity: 0.72; transform: scale(1.38); }
          }
          
          @keyframes window-flicker-3 {
            0%, 100% { opacity: 1; transform: scale(1); }
            55% { opacity: 0.78; transform: scale(1.42); }
          }
          
          @keyframes window-flicker-4 {
            0%, 100% { opacity: 0.98; transform: scale(1); }
            48% { opacity: 0.70; transform: scale(1.35); }
          }
          
          @keyframes window-flicker-5 {
            0%, 100% { opacity: 1; transform: scale(1); }
            52% { opacity: 0.76; transform: scale(1.48); }
          }
          
          @keyframes window-flicker-6 {
            0%, 100% { opacity: 0.96; transform: scale(1); }
            58% { opacity: 0.74; transform: scale(1.40); }
          }
          
          @keyframes window-flicker-7 {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.80; transform: scale(1.50); }
          }
          
          @keyframes window-flicker-8 {
            0%, 100% { opacity: 0.97; transform: scale(1); }
            54% { opacity: 0.73; transform: scale(1.37); }
          }
          
          @keyframes window-flicker-9 {
            0%, 100% { opacity: 1; transform: scale(1); }
            56% { opacity: 0.77; transform: scale(1.46); }
          }
          
          @keyframes window-flicker-10 {
            0%, 100% { opacity: 0.95; transform: scale(1); }
            50% { opacity: 0.75; transform: scale(1.44); }
          }
          
          /* Palm Sway Animations */
          @keyframes palm-sway-1 {
            0%, 100% { opacity: 0.30; transform: translateX(0) rotate(0deg); }
            50% { opacity: 0.45; transform: translateX(-8px) rotate(-4deg); }
          }
          
          @keyframes palm-sway-2 {
            0%, 100% { opacity: 0.28; transform: translateX(0) rotate(0deg); }
            50% { opacity: 0.42; transform: translateX(6px) rotate(3deg); }
          }
          
          @keyframes palm-sway-3 {
            0%, 100% { opacity: 0.30; transform: translateX(0) rotate(0deg); }
            50% { opacity: 0.45; transform: translateX(8px) rotate(4deg); }
          }
          
          @keyframes palm-sway-4 {
            0%, 100% { opacity: 0.28; transform: translateX(0) rotate(0deg); }
            50% { opacity: 0.42; transform: translateX(-6px) rotate(-3deg); }
          }
          
          /* Market Goods Sparkle Animations - BOLD */
          @keyframes goods-sparkle-1 {
            0%, 64%, 100% { opacity: 0; transform: scale(0.5); }
            70%, 82% { opacity: 1; transform: scale(4.5); }
            76% { opacity: 0.65; transform: scale(3.5); }
          }
          
          @keyframes goods-sparkle-2 {
            0%, 68%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            74%, 86% { opacity: 1; transform: scale(4.2) rotate(360deg); }
            80% { opacity: 0.65; transform: scale(3.2) rotate(180deg); }
          }
          
          @keyframes goods-sparkle-3 {
            0%, 72%, 100% { opacity: 0; transform: scale(0.5); }
            78%, 90% { opacity: 1; transform: scale(4.8); }
            84% { opacity: 0.65; transform: scale(3.8); }
          }
          
          @keyframes goods-sparkle-4 {
            0%, 62%, 100% { opacity: 0; transform: scale(0.5); }
            68%, 80% { opacity: 1; transform: scale(4.5); }
            74% { opacity: 0.65; transform: scale(3.5); }
          }
          
          @keyframes goods-sparkle-5 {
            0%, 70%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            76%, 88% { opacity: 1; transform: scale(4.3) rotate(360deg); }
            82% { opacity: 0.65; transform: scale(3.3) rotate(180deg); }
          }
          
          @keyframes goods-sparkle-6 {
            0%, 66%, 100% { opacity: 0; transform: scale(0.5); }
            72%, 84% { opacity: 1; transform: scale(4.6); }
            78% { opacity: 0.65; transform: scale(3.6); }
          }
          
          /* Pyramid Gleam Animations - BOLD */
          @keyframes pyramid-gleam-1 {
            0%, 70%, 100% { opacity: 0; transform: scale(0.5); }
            76%, 88% { opacity: 1; transform: scale(5); }
            82% { opacity: 0.6; transform: scale(4); }
          }
          
          @keyframes pyramid-gleam-2 {
            0%, 75%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            81%, 93% { opacity: 1; transform: scale(4.8) rotate(360deg); }
            87% { opacity: 0.6; transform: scale(3.8) rotate(180deg); }
          }
          
          @keyframes pyramid-gleam-3 {
            0%, 68%, 100% { opacity: 0; transform: scale(0.5); }
            74%, 86% { opacity: 1; transform: scale(5.2); }
            80% { opacity: 0.6; transform: scale(4.2); }
          }
          
          @keyframes pyramid-gleam-4 {
            0%, 78%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            84%, 96% { opacity: 1; transform: scale(4.7) rotate(360deg); }
            90% { opacity: 0.6; transform: scale(3.7) rotate(180deg); }
          }
          
          /* Heat Shimmer Animations - BOLD */
          @keyframes heat-shimmer-1 {
            0% { opacity: 0; transform: translateY(0) scaleY(1) skewX(0deg); }
            50% { opacity: 0.42; transform: translateY(-50px) scaleY(1.5) skewX(3deg); }
            100% { opacity: 0; transform: translateY(-100px) scaleY(2) skewX(-3deg); }
          }
          
          @keyframes heat-shimmer-2 {
            0% { opacity: 0; transform: translateY(0) translateX(0) scaleY(1); }
            50% { opacity: 0.38; transform: translateY(-55px) translateX(20px) scaleY(1.55); }
            100% { opacity: 0; transform: translateY(-110px) translateX(40px) scaleY(2.1); }
          }
          
          @keyframes heat-shimmer-3 {
            0% { opacity: 0; transform: translateY(0) scaleY(1) skewX(0deg); }
            50% { opacity: 0.45; transform: translateY(-48px) scaleY(1.52) skewX(-4deg); }
            100% { opacity: 0; transform: translateY(-96px) scaleY(2.05) skewX(4deg); }
          }
          
          @keyframes heat-shimmer-4 {
            0% { opacity: 0; transform: translateY(0) translateX(0) scaleY(1); }
            50% { opacity: 0.35; transform: translateY(-45px) translateX(-18px) scaleY(1.48); }
            100% { opacity: 0; transform: translateY(-90px) translateX(-36px) scaleY(1.95); }
          }
          
          @keyframes heat-shimmer-5 {
            0% { opacity: 0; transform: translateY(0) scaleY(1) skewX(0deg); }
            50% { opacity: 0.32; transform: translateY(-52px) scaleY(1.58) skewX(5deg); }
            100% { opacity: 0; transform: translateY(-104px) scaleY(2.15) skewX(-5deg); }
          }
          
          /* Sand Blowing Animations - BOLD */
          @keyframes sand-blow-1 {
            0% { opacity: 0; transform: translateX(0) translateY(0) rotate(0deg); }
            50% { opacity: 0.85; transform: translateX(180px) translateY(-20px) rotate(240deg); }
            100% { opacity: 0; transform: translateX(360px) translateY(-40px) rotate(480deg); }
          }
          
          @keyframes sand-blow-2 {
            0% { opacity: 0; transform: translateX(0) translateY(0) rotate(0deg); }
            50% { opacity: 0.90; transform: translateX(200px) translateY(-25px) rotate(260deg); }
            100% { opacity: 0; transform: translateX(400px) translateY(-50px) rotate(520deg); }
          }
          
          @keyframes sand-blow-3 {
            0% { opacity: 0; transform: translateX(0) translateY(0) rotate(0deg); }
            50% { opacity: 0.85; transform: translateX(190px) translateY(-22px) rotate(250deg); }
            100% { opacity: 0; transform: translateX(380px) translateY(-44px) rotate(500deg); }
          }
          
          @keyframes sand-blow-4 {
            0% { opacity: 0; transform: translateX(0) translateY(0) rotate(0deg); }
            50% { opacity: 0.90; transform: translateX(-170px) translateY(-18px) rotate(230deg); }
            100% { opacity: 0; transform: translateX(-340px) translateY(-36px) rotate(460deg); }
          }
          
          @keyframes sand-blow-5 {
            0% { opacity: 0; transform: translateX(0) translateY(0) rotate(0deg); }
            50% { opacity: 0.85; transform: translateX(-185px) translateY(-23px) rotate(245deg); }
            100% { opacity: 0; transform: translateX(-370px) translateY(-46px) rotate(490deg); }
          }
          
          /* Tower Beacon Animations - BOLD */
          @keyframes tower-beacon-1 {
            0%, 100% { opacity: 0.55; transform: scale(1); }
            50% { opacity: 0.85; transform: scale(1.45); }
          }
          
          @keyframes tower-beacon-2 {
            0%, 100% { opacity: 0.65; transform: scale(1); }
            50% { opacity: 0.95; transform: scale(1.55); }
          }
          
          @keyframes tower-beacon-3 {
            0%, 100% { opacity: 0.75; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.65); }
          }
          
          /* Canopy Wave Animations */
          @keyframes canopy-wave-1 {
            0%, 100% { opacity: 0.12; transform: translateY(0) skewX(0deg); }
            50% { opacity: 0.20; transform: translateY(-5px) skewX(2deg); }
          }
          
          @keyframes canopy-wave-2 {
            0%, 100% { opacity: 0.10; transform: translateY(0) skewX(0deg); }
            50% { opacity: 0.18; transform: translateY(-4px) skewX(-2deg); }
          }
          
          @keyframes canopy-wave-3 {
            0%, 100% { opacity: 0.12; transform: translateY(0) skewX(0deg); }
            50% { opacity: 0.20; transform: translateY(-5px) skewX(-2deg); }
          }
          
          @keyframes canopy-wave-4 {
            0%, 100% { opacity: 0.10; transform: translateY(0) skewX(0deg); }
            50% { opacity: 0.18; transform: translateY(-4px) skewX(2deg); }
          }
          
          /* Magic Dust Animations - BOLD */
          @keyframes magic-dust-1 {
            0%, 62%, 100% { opacity: 0; transform: scale(0.5) translateY(0); }
            68%, 82% { opacity: 0.95; transform: scale(4) translateY(-15px); }
            75% { opacity: 0.6; transform: scale(3.2) translateY(-10px); }
          }
          
          @keyframes magic-dust-2 {
            0%, 70%, 100% { opacity: 0; transform: scale(0.5) translateY(0) rotate(0deg); }
            76%, 90% { opacity: 0.98; transform: scale(4.3) translateY(-18px) rotate(360deg); }
            83% { opacity: 0.6; transform: scale(3.5) translateY(-12px) rotate(180deg); }
          }
          
          @keyframes magic-dust-3 {
            0%, 66%, 100% { opacity: 0; transform: scale(0.5) translateY(0); }
            72%, 86% { opacity: 0.95; transform: scale(4) translateY(-16px); }
            79% { opacity: 0.6; transform: scale(3.2) translateY(-11px); }
          }
          
          @keyframes magic-dust-4 {
            0%, 74%, 100% { opacity: 0; transform: scale(0.5) translateY(0) rotate(0deg); }
            80%, 94% { opacity: 0.98; transform: scale(4.5) translateY(-20px) rotate(360deg); }
            87% { opacity: 0.6; transform: scale(3.7) translateY(-14px) rotate(180deg); }
          }
          
          /* Animation Class Assignments */
          .animate-lantern-dance-1 { animation: lantern-dance-1 2.2s ease-in-out infinite; }
          .animate-lantern-dance-2 { animation: lantern-dance-2 2.5s ease-in-out infinite 0.3s; }
          .animate-lantern-dance-3 { animation: lantern-dance-3 2.3s ease-in-out infinite 0.6s; }
          .animate-lantern-dance-4 { animation: lantern-dance-4 2.4s ease-in-out infinite 0.9s; }
          .animate-lantern-dance-5 { animation: lantern-dance-5 2.6s ease-in-out infinite 0.2s; }
          .animate-lantern-dance-6 { animation: lantern-dance-6 2.3s ease-in-out infinite 0.7s; }
          
          .animate-lantern-glow-1 { animation: lantern-glow-1 4s ease-in-out infinite; }
          .animate-lantern-glow-2 { animation: lantern-glow-2 4.5s ease-in-out infinite 1s; }
          .animate-lantern-glow-3 { animation: lantern-glow-3 4.2s ease-in-out infinite 2s; }
          .animate-lantern-glow-4 { animation: lantern-glow-4 4.3s ease-in-out infinite 0.5s; }
          
          .animate-fountain-sparkle-1 { animation: fountain-sparkle-1 6s linear infinite; }
          .animate-fountain-sparkle-2 { animation: fountain-sparkle-2 6.5s linear infinite 1.5s; }
          .animate-fountain-sparkle-3 { animation: fountain-sparkle-3 6.2s linear infinite 3s; }
          .animate-fountain-sparkle-4 { animation: fountain-sparkle-4 6.8s linear infinite 4.5s; }
          
          .animate-fountain-glow { animation: fountain-glow 5s ease-in-out infinite; }
          
          .animate-gate-torch-1 { animation: gate-torch-1 2.8s ease-in-out infinite; }
          .animate-gate-torch-2 { animation: gate-torch-2 3s ease-in-out infinite 0.5s; }
          
          .animate-gate-torch-glow-1 { animation: gate-torch-glow-1 5s ease-in-out infinite; }
          .animate-gate-torch-glow-2 { animation: gate-torch-glow-2 5.5s ease-in-out infinite 1s; }
          
          .animate-window-flicker-1 { animation: window-flicker-1 3.5s ease-in-out infinite; }
          .animate-window-flicker-2 { animation: window-flicker-2 3.8s ease-in-out infinite 0.5s; }
          .animate-window-flicker-3 { animation: window-flicker-3 3.6s ease-in-out infinite 1s; }
          .animate-window-flicker-4 { animation: window-flicker-4 3.9s ease-in-out infinite 1.5s; }
          .animate-window-flicker-5 { animation: window-flicker-5 3.7s ease-in-out infinite 2s; }
          .animate-window-flicker-6 { animation: window-flicker-6 4s ease-in-out infinite 2.5s; }
          .animate-window-flicker-7 { animation: window-flicker-7 3.5s ease-in-out infinite 3s; }
          .animate-window-flicker-8 { animation: window-flicker-8 3.8s ease-in-out infinite 0.8s; }
          .animate-window-flicker-9 { animation: window-flicker-9 3.6s ease-in-out infinite 1.3s; }
          .animate-window-flicker-10 { animation: window-flicker-10 3.9s ease-in-out infinite 1.8s; }
          
          .animate-palm-sway-1 { animation: palm-sway-1 7s ease-in-out infinite; }
          .animate-palm-sway-2 { animation: palm-sway-2 7.5s ease-in-out infinite 2s; }
          .animate-palm-sway-3 { animation: palm-sway-3 7.2s ease-in-out infinite 4s; }
          .animate-palm-sway-4 { animation: palm-sway-4 7.8s ease-in-out infinite 1s; }
          
          .animate-goods-sparkle-1 { animation: goods-sparkle-1 7s linear infinite; }
          .animate-goods-sparkle-2 { animation: goods-sparkle-2 7.5s linear infinite 1.5s; }
          .animate-goods-sparkle-3 { animation: goods-sparkle-3 7.2s linear infinite 3s; }
          .animate-goods-sparkle-4 { animation: goods-sparkle-4 7.8s linear infinite 4.5s; }
          .animate-goods-sparkle-5 { animation: goods-sparkle-5 7.3s linear infinite 2s; }
          .animate-goods-sparkle-6 { animation: goods-sparkle-6 7.6s linear infinite 5s; }
          
          .animate-pyramid-gleam-1 { animation: pyramid-gleam-1 8s linear infinite; }
          .animate-pyramid-gleam-2 { animation: pyramid-gleam-2 8.5s linear infinite 2s; }
          .animate-pyramid-gleam-3 { animation: pyramid-gleam-3 8.2s linear infinite 4s; }
          .animate-pyramid-gleam-4 { animation: pyramid-gleam-4 8.8s linear infinite 6s; }
          
          .animate-heat-shimmer-1 { animation: heat-shimmer-1 6s ease-in-out infinite; }
          .animate-heat-shimmer-2 { animation: heat-shimmer-2 6.5s ease-in-out infinite 1.5s; }
          .animate-heat-shimmer-3 { animation: heat-shimmer-3 6.2s ease-in-out infinite 3s; }
          .animate-heat-shimmer-4 { animation: heat-shimmer-4 7s ease-in-out infinite 0.8s; }
          .animate-heat-shimmer-5 { animation: heat-shimmer-5 6.8s ease-in-out infinite 4s; }
          
          .animate-sand-blow-1 { animation: sand-blow-1 12s linear infinite; }
          .animate-sand-blow-2 { animation: sand-blow-2 13s linear infinite 2s; }
          .animate-sand-blow-3 { animation: sand-blow-3 12.5s linear infinite 4s; }
          .animate-sand-blow-4 { animation: sand-blow-4 14s linear infinite 1s; }
          .animate-sand-blow-5 { animation: sand-blow-5 13.5s linear infinite 6s; }
          
          .animate-tower-beacon-1 { animation: tower-beacon-1 4s ease-in-out infinite; }
          .animate-tower-beacon-2 { animation: tower-beacon-2 4s ease-in-out infinite 0.2s; }
          .animate-tower-beacon-3 { animation: tower-beacon-3 4s ease-in-out infinite 0.4s; }
          
          .animate-canopy-wave-1 { animation: canopy-wave-1 5s ease-in-out infinite; }
          .animate-canopy-wave-2 { animation: canopy-wave-2 5.5s ease-in-out infinite 1.5s; }
          .animate-canopy-wave-3 { animation: canopy-wave-3 5.2s ease-in-out infinite 3s; }
          .animate-canopy-wave-4 { animation: canopy-wave-4 5.8s ease-in-out infinite 2s; }
          
          .animate-magic-dust-1 { animation: magic-dust-1 7s linear infinite; }
          .animate-magic-dust-2 { animation: magic-dust-2 7.5s linear infinite 2s; }
          .animate-magic-dust-3 { animation: magic-dust-3 7.2s linear infinite 4s; }
          .animate-magic-dust-4 { animation: magic-dust-4 7.8s linear infinite 6s; }
        `}</style>
      </div>
    </Card>
  );
}

