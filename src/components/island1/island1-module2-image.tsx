"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function JungleModule2Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        {/* Base image */}
        <Image
          src="/islands/island1/island1-module2-image.webp"
          alt="Sunny Tropical Treehouse Village"
          fill
          className="object-cover"
          priority
        />
        
        {/* Animated overlay effects */}
        <div className="absolute inset-0 animate-effects">
          {/* Hanging Lantern Glows */}
          <div className="absolute inset-0">
            {/* Left treehouse lanterns */}
            <div className="absolute top-[38%] left-[8%] w-[6px] h-[10px] bg-amber-400/95 rounded lantern-glow animate-lantern-glow-1"></div>
            <div className="absolute top-[35%] left-[12%] w-[5px] h-[9px] bg-yellow-300/90 rounded lantern-glow animate-lantern-glow-2"></div>
            
            {/* Second left treehouse */}
            <div className="absolute top-[32%] left-[22%] w-[6px] h-[10px] bg-orange-400/92 rounded lantern-glow animate-lantern-glow-3"></div>
            <div className="absolute top-[36%] left-[26%] w-[5px] h-[9px] bg-amber-300/88 rounded lantern-glow animate-lantern-glow-4"></div>
            
            {/* Center treehouse */}
            <div className="absolute top-[30%] left-[48%] w-[6px] h-[10px] bg-yellow-400/95 rounded lantern-glow animate-lantern-glow-5"></div>
            <div className="absolute top-[34%] left-[52%] w-[5px] h-[9px] bg-amber-400/90 rounded lantern-glow animate-lantern-glow-6"></div>
            
            {/* Second right treehouse */}
            <div className="absolute top-[32%] right-[24%] w-[6px] h-[10px] bg-orange-400/93 rounded lantern-glow animate-lantern-glow-7"></div>
            <div className="absolute top-[36%] right-[20%] w-[5px] h-[9px] bg-yellow-300/88 rounded lantern-glow animate-lantern-glow-8"></div>
            
            {/* Right treehouse lanterns */}
            <div className="absolute top-[38%] right-[8%] w-[6px] h-[10px] bg-amber-400/94 rounded lantern-glow animate-lantern-glow-9"></div>
            <div className="absolute top-[35%] right-[12%] w-[5px] h-[9px] bg-yellow-400/89 rounded lantern-glow animate-lantern-glow-10"></div>
          </div>

          {/* Window Glows - Warm Interior Lighting */}
          <div className="absolute inset-0">
            {/* Left treehouse windows */}
            <div className="absolute top-[32%] left-[9%] w-[8px] h-[8px] bg-orange-300/85 rounded-full window-glow animate-window-glow-1"></div>
            <div className="absolute top-[36%] left-[10%] w-[6px] h-[6px] bg-yellow-300/80 rounded window-glow animate-window-glow-2"></div>
            
            {/* Second left treehouse */}
            <div className="absolute top-[28%] left-[24%] w-[10px] h-[10px] bg-amber-300/90 rounded window-glow animate-window-glow-3"></div>
            <div className="absolute top-[33%] left-[25%] w-[7px] h-[10px] bg-orange-300/85 rounded window-glow animate-window-glow-4"></div>
            
            {/* Center treehouse main window */}
            <div className="absolute top-[36%] left-[49%] w-[12px] h-[8px] bg-yellow-200/95 rounded window-glow animate-window-glow-5"></div>
            <div className="absolute top-[33%] left-[50%] w-[8px] h-[8px] bg-orange-200/90 rounded-full window-glow animate-window-glow-6"></div>
            
            {/* Second right treehouse */}
            <div className="absolute top-[28%] right-[22%] w-[10px] h-[10px] bg-amber-300/88 rounded window-glow animate-window-glow-7"></div>
            <div className="absolute top-[33%] right-[23%] w-[7px] h-[10px] bg-yellow-300/83 rounded window-glow animate-window-glow-8"></div>
            
            {/* Right treehouse windows */}
            <div className="absolute top-[32%] right-[9%] w-[8px] h-[8px] bg-orange-300/87 rounded-full window-glow animate-window-glow-9"></div>
            <div className="absolute top-[36%] right-[10%] w-[6px] h-[6px] bg-yellow-300/82 rounded window-glow animate-window-glow-10"></div>
          </div>

          {/* Water Sparkles & Sunlight Reflections */}
          <div className="absolute inset-0">
            {/* Bright water sparkles - foreground */}
            <div className="absolute top-[70%] left-[15%] w-[5px] h-[5px] bg-cyan-200/100 rounded-full water-sparkle animate-water-sparkle-1"></div>
            <div className="absolute top-[75%] left-[25%] w-[5px] h-[5px] bg-white/100 rounded-full water-sparkle animate-water-sparkle-2"></div>
            <div className="absolute top-[72%] left-[35%] w-[6px] h-[6px] bg-cyan-100/100 rounded-full water-sparkle animate-water-sparkle-3"></div>
            <div className="absolute top-[78%] left-[45%] w-[5px] h-[5px] bg-blue-100/100 rounded-full water-sparkle animate-water-sparkle-4"></div>
            <div className="absolute top-[74%] left-[55%] w-[6px] h-[6px] bg-cyan-200/100 rounded-full water-sparkle animate-water-sparkle-5"></div>
            <div className="absolute top-[76%] left-[65%] w-[5px] h-[5px] bg-white/100 rounded-full water-sparkle animate-water-sparkle-6"></div>
            <div className="absolute top-[71%] left-[75%] w-[5px] h-[5px] bg-cyan-100/100 rounded-full water-sparkle animate-water-sparkle-7"></div>
            <div className="absolute top-[77%] left-[85%] w-[6px] h-[6px] bg-blue-100/100 rounded-full water-sparkle animate-water-sparkle-8"></div>
            
            {/* Mid-water sparkles */}
            <div className="absolute top-[68%] left-[20%] w-[4px] h-[4px] bg-cyan-300/100 rounded-full water-sparkle animate-water-sparkle-9"></div>
            <div className="absolute top-[80%] left-[50%] w-[4px] h-[4px] bg-white/100 rounded-full water-sparkle animate-water-sparkle-10"></div>
            <div className="absolute top-[73%] left-[70%] w-[4px] h-[4px] bg-cyan-200/100 rounded-full water-sparkle animate-water-sparkle-11"></div>
          </div>

          {/* Sunbeam Light Rays */}
          <div className="absolute inset-0">
            {/* Golden sunbeams from sky */}
            <div className="absolute top-[0%] left-[12%] w-[4px] h-[55%] bg-gradient-to-b from-yellow-200/50 via-yellow-100/25 to-transparent sunbeam animate-sunbeam-1"></div>
            <div className="absolute top-[0%] left-[28%] w-[5px] h-[60%] bg-gradient-to-b from-white/45 via-yellow-50/30 to-transparent sunbeam animate-sunbeam-2"></div>
            <div className="absolute top-[0%] left-[45%] w-[6px] h-[65%] bg-gradient-to-b from-yellow-100/55 via-yellow-50/35 to-transparent sunbeam animate-sunbeam-3"></div>
            <div className="absolute top-[0%] left-[62%] w-[5px] h-[58%] bg-gradient-to-b from-white/48 via-yellow-100/28 to-transparent sunbeam animate-sunbeam-4"></div>
            <div className="absolute top-[0%] left-[80%] w-[4px] h-[52%] bg-gradient-to-b from-yellow-200/52 via-yellow-100/26 to-transparent sunbeam animate-sunbeam-5"></div>
          </div>

          {/* Tropical Butterflies */}
          <div className="absolute inset-0">
            <div className="absolute top-[25%] left-[18%] w-[4px] h-[4px] bg-pink-300/95 rounded-full butterfly animate-butterfly-float-1"></div>
            <div className="absolute top-[35%] left-[65%] w-[4px] h-[4px] bg-purple-300/90 rounded-full butterfly animate-butterfly-float-2"></div>
            <div className="absolute top-[20%] left-[40%] w-[4px] h-[4px] bg-yellow-300/95 rounded-full butterfly animate-butterfly-float-3"></div>
            <div className="absolute top-[30%] right-[28%] w-[4px] h-[4px] bg-orange-300/90 rounded-full butterfly animate-butterfly-float-4"></div>
            <div className="absolute top-[42%] right-[15%] w-[4px] h-[4px] bg-blue-300/95 rounded-full butterfly animate-butterfly-float-5"></div>
          </div>

          {/* Gentle Leaf Movement Shimmer */}
          <div className="absolute inset-0">
            {/* Foreground leaf glints */}
            <div className="absolute top-[55%] left-[2%] w-[3px] h-[3px] bg-green-200/80 rounded-full leaf-shimmer animate-leaf-shimmer-1"></div>
            <div className="absolute top-[48%] left-[5%] w-[3px] h-[3px] bg-emerald-200/75 rounded-full leaf-shimmer animate-leaf-shimmer-2"></div>
            <div className="absolute top-[52%] right-[3%] w-[3px] h-[3px] bg-green-100/80 rounded-full leaf-shimmer animate-leaf-shimmer-3"></div>
            <div className="absolute top-[60%] right-[6%] w-[3px] h-[3px] bg-emerald-100/75 rounded-full leaf-shimmer animate-leaf-shimmer-4"></div>
          </div>

          {/* Water Ripples Effect */}
          <div className="absolute inset-0">
            <div className="absolute bottom-[18%] left-[30%] w-[50px] h-[8px] bg-cyan-200/15 rounded-full water-ripple animate-water-ripple-1"></div>
            <div className="absolute bottom-[15%] right-[35%] w-[45px] h-[7px] bg-blue-100/12 rounded-full water-ripple animate-water-ripple-2"></div>
            <div className="absolute bottom-[22%] left-[55%] w-[40px] h-[6px] bg-cyan-100/14 rounded-full water-ripple animate-water-ripple-3"></div>
          </div>
        </div>
        
        <style jsx>{`
          .lantern-glow {
            filter: blur(8px);
            box-shadow: 0 0 40px currentColor, 0 0 80px currentColor, 0 0 120px currentColor, 0 0 160px currentColor;
          }
          
          .window-glow {
            filter: blur(10px);
            box-shadow: 0 0 50px currentColor, 0 0 100px currentColor, 0 0 150px currentColor;
          }
          
          .water-sparkle {
            box-shadow: 0 0 40px currentColor, 0 0 80px currentColor, 0 0 120px currentColor, 0 0 160px currentColor;
            filter: blur(0.5px);
          }
          
          .sunbeam {
            filter: blur(2px);
            opacity: 0;
          }
          
          .butterfly {
            box-shadow: 0 0 30px currentColor, 0 0 60px currentColor, 0 0 90px currentColor;
            filter: blur(0.8px);
          }
          
          .leaf-shimmer {
            box-shadow: 0 0 20px currentColor, 0 0 40px currentColor;
            filter: blur(0.6px);
          }
          
          .water-ripple {
            filter: blur(12px);
            opacity: 0;
          }
          
          .animate-effects .lantern-glow {
            animation-play-state: running;
          }
          
          .animate-effects .window-glow {
            animation-play-state: running;
          }
          
          .animate-effects .water-sparkle {
            animation-play-state: running;
          }
          
          .animate-effects .sunbeam {
            animation-play-state: running;
          }
          
          .animate-effects .butterfly {
            animation-play-state: running;
          }
          
          .animate-effects .leaf-shimmer {
            animation-play-state: running;
          }
          
          .animate-effects .water-ripple {
            animation-play-state: running;
          }
          
          @keyframes lantern-glow-1 { 0%, 100% { opacity: 0.95; } 50% { opacity: 1; } }
          @keyframes lantern-glow-2 { 0%, 100% { opacity: 0.9; } 55% { opacity: 1; } }
          @keyframes lantern-glow-3 { 0%, 100% { opacity: 0.92; } 48% { opacity: 1; } }
          @keyframes lantern-glow-4 { 0%, 100% { opacity: 0.88; } 52% { opacity: 1; } }
          @keyframes lantern-glow-5 { 0%, 100% { opacity: 0.95; } 60% { opacity: 1; } }
          @keyframes lantern-glow-6 { 0%, 100% { opacity: 0.9; } 45% { opacity: 1; } }
          @keyframes lantern-glow-7 { 0%, 100% { opacity: 0.93; } 58% { opacity: 1; } }
          @keyframes lantern-glow-8 { 0%, 100% { opacity: 0.88; } 50% { opacity: 1; } }
          @keyframes lantern-glow-9 { 0%, 100% { opacity: 0.94; } 54% { opacity: 1; } }
          @keyframes lantern-glow-10 { 0%, 100% { opacity: 0.89; } 47% { opacity: 1; } }
          
          @keyframes window-glow-1 {
            0%, 100% { opacity: 0.85; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.04); }
          }
          
          @keyframes window-glow-2 {
            0%, 100% { opacity: 0.8; transform: scale(1); }
            55% { opacity: 1; transform: scale(1.05); }
          }
          
          @keyframes window-glow-3 {
            0%, 100% { opacity: 0.9; transform: scale(1); }
            48% { opacity: 1; transform: scale(1.06); }
          }
          
          @keyframes window-glow-4 {
            0%, 100% { opacity: 0.85; transform: scale(1); }
            60% { opacity: 1; transform: scale(1.04); }
          }
          
          @keyframes window-glow-5 {
            0%, 100% { opacity: 0.95; transform: scale(1); }
            52% { opacity: 1; transform: scale(1.07); }
          }
          
          @keyframes window-glow-6 {
            0%, 100% { opacity: 0.9; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.05); }
          }
          
          @keyframes window-glow-7 {
            0%, 100% { opacity: 0.88; transform: scale(1); }
            58% { opacity: 1; transform: scale(1.04); }
          }
          
          @keyframes window-glow-8 {
            0%, 100% { opacity: 0.83; transform: scale(1); }
            54% { opacity: 1; transform: scale(1.05); }
          }
          
          @keyframes window-glow-9 {
            0%, 100% { opacity: 0.87; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.04); }
          }
          
          @keyframes window-glow-10 {
            0%, 100% { opacity: 0.82; transform: scale(1); }
            56% { opacity: 1; transform: scale(1.06); }
          }
          
          @keyframes water-sparkle-1 {
            0%, 75%, 100% { opacity: 0; transform: scale(1); }
            80%, 90% { opacity: 1; transform: scale(2.5); }
            85% { opacity: 0.8; transform: scale(2); }
          }
          
          @keyframes water-sparkle-2 {
            0%, 68%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            73%, 83% { opacity: 1; transform: scale(2.6) rotate(360deg); }
            78% { opacity: 0.75; transform: scale(2.1) rotate(180deg); }
          }
          
          @keyframes water-sparkle-3 {
            0%, 82%, 100% { opacity: 0; transform: scale(1); }
            87%, 95% { opacity: 1; transform: scale(2.8); }
            91% { opacity: 0.85; transform: scale(2.3); }
          }
          
          @keyframes water-sparkle-4 {
            0%, 70%, 100% { opacity: 0; transform: scale(1); }
            75%, 85% { opacity: 1; transform: scale(2.5); }
            80% { opacity: 0.8; transform: scale(2); }
          }
          
          @keyframes water-sparkle-5 {
            0%, 78%, 100% { opacity: 0; transform: scale(1); }
            83%, 93% { opacity: 1; transform: scale(2.7); }
            88% { opacity: 0.82; transform: scale(2.2); }
          }
          
          @keyframes water-sparkle-6 {
            0%, 65%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            70%, 80% { opacity: 1; transform: scale(2.5) rotate(360deg); }
            75% { opacity: 0.78; transform: scale(2) rotate(180deg); }
          }
          
          @keyframes water-sparkle-7 {
            0%, 88%, 100% { opacity: 0; transform: scale(1); }
            92%, 98% { opacity: 1; transform: scale(2.6); }
            95% { opacity: 0.8; transform: scale(2.1); }
          }
          
          @keyframes water-sparkle-8 {
            0%, 72%, 100% { opacity: 0; transform: scale(1); }
            77%, 87% { opacity: 1; transform: scale(2.9); }
            82% { opacity: 0.88; transform: scale(2.4); }
          }
          
          @keyframes water-sparkle-9 {
            0%, 80%, 100% { opacity: 0; transform: scale(1); }
            85%, 95% { opacity: 1; transform: scale(2.4); }
            90% { opacity: 0.76; transform: scale(1.9); }
          }
          
          @keyframes water-sparkle-10 {
            0%, 60%, 100% { opacity: 0; transform: scale(1); }
            65%, 75% { opacity: 1; transform: scale(2.7); }
            70% { opacity: 0.85; transform: scale(2.2); }
          }
          
          @keyframes water-sparkle-11 {
            0%, 85%, 100% { opacity: 0; transform: scale(1); }
            90%, 98% { opacity: 1; transform: scale(2.5); }
            94% { opacity: 0.8; transform: scale(2); }
          }
          
          @keyframes sunbeam-1 {
            0%, 100% { opacity: 0.5; transform: scaleY(1) skewX(1deg); }
            50% { opacity: 0.8; transform: scaleY(1.08) skewX(2deg); }
          }
          
          @keyframes sunbeam-2 {
            0%, 100% { opacity: 0.45; transform: scaleY(1) skewX(-1deg); }
            60% { opacity: 0.75; transform: scaleY(1.1) skewX(-2deg); }
          }
          
          @keyframes sunbeam-3 {
            0%, 100% { opacity: 0.55; transform: scaleY(1) skewX(0deg); }
            55% { opacity: 0.85; transform: scaleY(1.12) skewX(1deg); }
          }
          
          @keyframes sunbeam-4 {
            0%, 100% { opacity: 0.48; transform: scaleY(1) skewX(-2deg); }
            65% { opacity: 0.78; transform: scaleY(1.09) skewX(-1deg); }
          }
          
          @keyframes sunbeam-5 {
            0%, 100% { opacity: 0.52; transform: scaleY(1) skewX(2deg); }
            50% { opacity: 0.82; transform: scaleY(1.1) skewX(3deg); }
          }
          
          @keyframes butterfly-float-1 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.95; }
            25% { transform: translateY(-35px) translateX(25px) rotate(15deg); opacity: 0.7; }
            50% { transform: translateY(-50px) translateX(40px) rotate(-10deg); opacity: 0.85; }
            75% { transform: translateY(-30px) translateX(20px) rotate(8deg); opacity: 0.75; }
          }
          
          @keyframes butterfly-float-2 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.9; }
            33% { transform: translateY(-40px) translateX(-30px) rotate(-12deg); opacity: 0.65; }
            66% { transform: translateY(-25px) translateX(-15px) rotate(10deg); opacity: 0.8; }
          }
          
          @keyframes butterfly-float-3 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.95; }
            30% { transform: translateY(-45px) translateX(20px) rotate(18deg); opacity: 0.7; }
            60% { transform: translateY(-55px) translateX(-10px) rotate(-15deg); opacity: 0.75; }
            90% { transform: translateY(-20px) translateX(5px) rotate(5deg); opacity: 0.85; }
          }
          
          @keyframes butterfly-float-4 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.9; }
            40% { transform: translateY(-38px) translateX(-25px) rotate(-14deg); opacity: 0.68; }
            80% { transform: translateY(-28px) translateX(-12px) rotate(12deg); opacity: 0.82; }
          }
          
          @keyframes butterfly-float-5 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.95; }
            50% { transform: translateY(-42px) translateX(28px) rotate(16deg); opacity: 0.72; }
          }
          
          @keyframes leaf-shimmer-1 {
            0%, 70%, 100% { opacity: 0; transform: scale(1); }
            75%, 85% { opacity: 0.8; transform: scale(2); }
            80% { opacity: 0.6; transform: scale(1.6); }
          }
          
          @keyframes leaf-shimmer-2 {
            0%, 65%, 100% { opacity: 0; transform: scale(1); }
            70%, 80% { opacity: 0.75; transform: scale(1.9); }
            75% { opacity: 0.55; transform: scale(1.5); }
          }
          
          @keyframes leaf-shimmer-3 {
            0%, 75%, 100% { opacity: 0; transform: scale(1); }
            80%, 90% { opacity: 0.8; transform: scale(2.1); }
            85% { opacity: 0.6; transform: scale(1.7); }
          }
          
          @keyframes leaf-shimmer-4 {
            0%, 68%, 100% { opacity: 0; transform: scale(1); }
            73%, 83% { opacity: 0.75; transform: scale(1.95); }
            78% { opacity: 0.58; transform: scale(1.55); }
          }
          
          @keyframes water-ripple-1 {
            0%, 100% { opacity: 0; transform: translateX(0px) scale(1); }
            50% { opacity: 0.18; transform: translateX(15px) scale(1.4); }
          }
          
          @keyframes water-ripple-2 {
            0%, 100% { opacity: 0; transform: translateX(0px) scale(1); }
            60% { opacity: 0.15; transform: translateX(-12px) scale(1.3); }
          }
          
          @keyframes water-ripple-3 {
            0%, 100% { opacity: 0; transform: translateX(0px) scale(1); }
            55% { opacity: 0.16; transform: translateX(10px) scale(1.35); }
          }
          
          .animate-lantern-glow-1 { animation: lantern-glow-1 5s ease-in-out infinite; }
          .animate-lantern-glow-2 { animation: lantern-glow-2 5.5s ease-in-out infinite 0.5s; }
          .animate-lantern-glow-3 { animation: lantern-glow-3 4.8s ease-in-out infinite 1s; }
          .animate-lantern-glow-4 { animation: lantern-glow-4 5.2s ease-in-out infinite 1.5s; }
          .animate-lantern-glow-5 { animation: lantern-glow-5 6s ease-in-out infinite 2s; }
          .animate-lantern-glow-6 { animation: lantern-glow-6 5.4s ease-in-out infinite 0.8s; }
          .animate-lantern-glow-7 { animation: lantern-glow-7 5.8s ease-in-out infinite 2.5s; }
          .animate-lantern-glow-8 { animation: lantern-glow-8 5.3s ease-in-out infinite 1.2s; }
          .animate-lantern-glow-9 { animation: lantern-glow-9 5.6s ease-in-out infinite 3s; }
          .animate-lantern-glow-10 { animation: lantern-glow-10 5.1s ease-in-out infinite 0.3s; }
          
          .animate-window-glow-1 { animation: window-glow-1 4.5s ease-in-out infinite; }
          .animate-window-glow-2 { animation: window-glow-2 5s ease-in-out infinite 0.5s; }
          .animate-window-glow-3 { animation: window-glow-3 4.8s ease-in-out infinite 1s; }
          .animate-window-glow-4 { animation: window-glow-4 5.2s ease-in-out infinite 1.5s; }
          .animate-window-glow-5 { animation: window-glow-5 5.5s ease-in-out infinite 2s; }
          .animate-window-glow-6 { animation: window-glow-6 4.6s ease-in-out infinite 0.8s; }
          .animate-window-glow-7 { animation: window-glow-7 5.3s ease-in-out infinite 2.2s; }
          .animate-window-glow-8 { animation: window-glow-8 4.9s ease-in-out infinite 1.3s; }
          .animate-window-glow-9 { animation: window-glow-9 5.1s ease-in-out infinite 2.5s; }
          .animate-window-glow-10 { animation: window-glow-10 4.7s ease-in-out infinite 0.6s; }
          
          .animate-water-sparkle-1 { animation: water-sparkle-1 7s linear infinite; }
          .animate-water-sparkle-2 { animation: water-sparkle-2 8s linear infinite 1s; }
          .animate-water-sparkle-3 { animation: water-sparkle-3 6.5s linear infinite 2s; }
          .animate-water-sparkle-4 { animation: water-sparkle-4 7.5s linear infinite 3s; }
          .animate-water-sparkle-5 { animation: water-sparkle-5 8.5s linear infinite 4s; }
          .animate-water-sparkle-6 { animation: water-sparkle-6 9s linear infinite 5s; }
          .animate-water-sparkle-7 { animation: water-sparkle-7 7.2s linear infinite 1.5s; }
          .animate-water-sparkle-8 { animation: water-sparkle-8 6.8s linear infinite 2.5s; }
          .animate-water-sparkle-9 { animation: water-sparkle-9 8.2s linear infinite 3.5s; }
          .animate-water-sparkle-10 { animation: water-sparkle-10 9.5s linear infinite 4.5s; }
          .animate-water-sparkle-11 { animation: water-sparkle-11 7.8s linear infinite 5.5s; }
          
          .animate-sunbeam-1 { animation: sunbeam-1 10s ease-in-out infinite; }
          .animate-sunbeam-2 { animation: sunbeam-2 12s ease-in-out infinite 2s; }
          .animate-sunbeam-3 { animation: sunbeam-3 11s ease-in-out infinite 4s; }
          .animate-sunbeam-4 { animation: sunbeam-4 13s ease-in-out infinite 1s; }
          .animate-sunbeam-5 { animation: sunbeam-5 10.5s ease-in-out infinite 3s; }
          
          .animate-butterfly-float-1 { animation: butterfly-float-1 15s ease-in-out infinite; }
          .animate-butterfly-float-2 { animation: butterfly-float-2 18s ease-in-out infinite 3s; }
          .animate-butterfly-float-3 { animation: butterfly-float-3 16s ease-in-out infinite 6s; }
          .animate-butterfly-float-4 { animation: butterfly-float-4 17s ease-in-out infinite 2s; }
          .animate-butterfly-float-5 { animation: butterfly-float-5 19s ease-in-out infinite 8s; }
          
          .animate-leaf-shimmer-1 { animation: leaf-shimmer-1 9s linear infinite; }
          .animate-leaf-shimmer-2 { animation: leaf-shimmer-2 10s linear infinite 2s; }
          .animate-leaf-shimmer-3 { animation: leaf-shimmer-3 8.5s linear infinite 4s; }
          .animate-leaf-shimmer-4 { animation: leaf-shimmer-4 9.5s linear infinite 6s; }
          
          .animate-water-ripple-1 { animation: water-ripple-1 16s ease-in-out infinite; }
          .animate-water-ripple-2 { animation: water-ripple-2 18s ease-in-out infinite 5s; }
          .animate-water-ripple-3 { animation: water-ripple-3 17s ease-in-out infinite 3s; }
        `}</style>
      </div>
    </Card>
  );
}

export default JungleModule2Image;
