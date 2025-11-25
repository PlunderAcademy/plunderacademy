"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export function JungleModule3Image() {
  const [videoError, setVideoError] = useState(false);

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
          poster="/islands/island1/island1-module3-image.webp"
          onError={() => setVideoError(true)}
        >
          <source src="/islands/island1/island1-module3-video.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback image shown only if video fails */}
        {videoError && (
          <Image
            src="/islands/island1/island1-module3-image.webp"
            alt="Tropical Pirate Castle Paradise Scene"
            fill
            className="object-cover"
          />
        )}
        
        {/* Animated overlay effects - Only shown if video fails */}
        {videoError && (
          <div className="absolute inset-0 animate-effects">
          {/* Castle Window Glows */}
          <div className="absolute inset-0">
            {/* Main castle tower windows */}
            <div className="absolute top-[45%] left-[48%] w-[6px] h-[8px] bg-orange-300/95 rounded window-glow animate-window-glow-1"></div>
            <div className="absolute top-[48%] left-[46%] w-[5px] h-[7px] bg-yellow-300/90 rounded window-glow animate-window-glow-2"></div>
            <div className="absolute top-[48%] left-[52%] w-[5px] h-[7px] bg-amber-300/92 rounded window-glow animate-window-glow-3"></div>
            
            {/* Side tower windows */}
            <div className="absolute top-[46%] left-[40%] w-[5px] h-[7px] bg-orange-300/88 rounded window-glow animate-window-glow-4"></div>
            <div className="absolute top-[48%] left-[42%] w-[4px] h-[6px] bg-yellow-300/85 rounded window-glow animate-window-glow-5"></div>
            <div className="absolute top-[46%] left-[58%] w-[5px] h-[7px] bg-orange-300/90 rounded window-glow animate-window-glow-6"></div>
            <div className="absolute top-[48%] left-[60%] w-[4px] h-[6px] bg-amber-300/87 rounded window-glow animate-window-glow-7"></div>
            
            {/* Lower windows */}
            <div className="absolute top-[52%] left-[48%] w-[7px] h-[9px] bg-yellow-200/95 rounded window-glow animate-window-glow-8"></div>
            <div className="absolute top-[54%] left-[50%] w-[6px] h-[8px] bg-orange-200/90 rounded window-glow animate-window-glow-9"></div>
          </div>

          {/* Bold Water Sparkles */}
          <div className="absolute inset-0">
            {/* Foreground water sparkles */}
            <div className="absolute top-[76%] left-[20%] w-[5px] h-[5px] bg-cyan-200/100 rounded-full water-sparkle animate-water-sparkle-1"></div>
            <div className="absolute top-[78%] left-[30%] w-[6px] h-[6px] bg-white/100 rounded-full water-sparkle animate-water-sparkle-2"></div>
            <div className="absolute top-[74%] left-[40%] w-[5px] h-[5px] bg-blue-100/100 rounded-full water-sparkle animate-water-sparkle-3"></div>
            <div className="absolute top-[80%] left-[50%] w-[6px] h-[6px] bg-cyan-100/100 rounded-full water-sparkle animate-water-sparkle-4"></div>
            <div className="absolute top-[77%] left-[60%] w-[5px] h-[5px] bg-white/100 rounded-full water-sparkle animate-water-sparkle-5"></div>
            <div className="absolute top-[79%] left-[70%] w-[6px] h-[6px] bg-cyan-200/100 rounded-full water-sparkle animate-water-sparkle-6"></div>
            <div className="absolute top-[75%] left-[80%] w-[5px] h-[5px] bg-blue-100/100 rounded-full water-sparkle animate-water-sparkle-7"></div>
            
            {/* Mid-water sparkles */}
            <div className="absolute top-[72%] left-[25%] w-[4px] h-[4px] bg-cyan-300/100 rounded-full water-sparkle animate-water-sparkle-8"></div>
            <div className="absolute top-[81%] left-[55%] w-[4px] h-[4px] bg-white/100 rounded-full water-sparkle animate-water-sparkle-9"></div>
            <div className="absolute top-[73%] left-[75%] w-[4px] h-[4px] bg-cyan-200/100 rounded-full water-sparkle animate-water-sparkle-10"></div>
          </div>

          {/* Pirate Flag Animation - Enhanced */}
          <div className="absolute inset-0">
            {/* Main flag on tall tower with glow */}
            <div className="absolute top-[20%] left-[49.5%] w-[10px] h-[8px] bg-gray-800/80 flag animate-flag-wave"></div>
            <div className="absolute top-[20.5%] left-[50%] w-[4px] h-[4px] bg-white/70 rounded-full skull-glow animate-skull-glow"></div>
            
            {/* Left ship flag */}
            <div className="absolute top-[38%] left-[18%] w-[7px] h-[6px] bg-gray-800/75 flag animate-flag-wave-2"></div>
            <div className="absolute top-[38.5%] left-[18.5%] w-[3px] h-[3px] bg-white/65 rounded-full skull-glow animate-skull-glow-2"></div>
            
            {/* Right ship flag */}
            <div className="absolute top-[40%] right-[18%] w-[7px] h-[6px] bg-gray-800/75 flag animate-flag-wave-3"></div>
            <div className="absolute top-[40.5%] right-[18.5%] w-[3px] h-[3px] bg-white/65 rounded-full skull-glow animate-skull-glow-3"></div>
          </div>

          {/* Ship Lantern Glows */}
          <div className="absolute inset-0">
            {/* Left ship lanterns */}
            <div className="absolute top-[42%] left-[16%] w-[4px] h-[7px] bg-amber-400/95 rounded lantern-glow animate-lantern-glow-1"></div>
            <div className="absolute top-[44%] left-[19%] w-[4px] h-[6px] bg-yellow-300/90 rounded lantern-glow animate-lantern-glow-2"></div>
            
            {/* Right ship lanterns */}
            <div className="absolute top-[44%] right-[16%] w-[4px] h-[7px] bg-amber-400/93 rounded lantern-glow animate-lantern-glow-3"></div>
            <div className="absolute top-[46%] right-[19%] w-[4px] h-[6px] bg-yellow-300/88 rounded lantern-glow animate-lantern-glow-4"></div>
          </div>

          {/* Sunbeams - Selective */}
          <div className="absolute inset-0">
            {/* God rays from sky */}
            <div className="absolute top-[0%] left-[35%] w-[6px] h-[55%] bg-gradient-to-b from-white/50 via-yellow-100/35 to-transparent sunbeam animate-sunbeam-2"></div>
            <div className="absolute top-[0%] left-[65%] w-[6px] h-[55%] bg-gradient-to-b from-white/48 via-yellow-100/32 to-transparent sunbeam animate-sunbeam-4"></div>
          </div>

          {/* Tropical Birds */}
          <div className="absolute inset-0">
            <div className="absolute top-[18%] left-[15%] w-[4px] h-[4px] bg-red-400/90 rounded-full bird animate-bird-fly-1"></div>
            <div className="absolute top-[22%] right-[20%] w-[4px] h-[4px] bg-blue-400/85 rounded-full bird animate-bird-fly-2"></div>
            <div className="absolute top-[15%] left-[70%] w-[4px] h-[4px] bg-green-400/88 rounded-full bird animate-bird-fly-3"></div>
          </div>

          {/* Leaf Shimmer on Foreground Foliage */}
          <div className="absolute inset-0">
            {/* Left foliage glints */}
            <div className="absolute top-[45%] left-[3%] w-[3px] h-[3px] bg-green-200/85 rounded-full leaf-shimmer animate-leaf-shimmer-1"></div>
            <div className="absolute top-[52%] left-[5%] w-[3px] h-[3px] bg-emerald-200/80 rounded-full leaf-shimmer animate-leaf-shimmer-2"></div>
            <div className="absolute top-[38%] left-[7%] w-[3px] h-[3px] bg-green-100/85 rounded-full leaf-shimmer animate-leaf-shimmer-3"></div>
            
            {/* Right foliage glints */}
            <div className="absolute top-[42%] right-[3%] w-[3px] h-[3px] bg-green-200/82 rounded-full leaf-shimmer animate-leaf-shimmer-4"></div>
            <div className="absolute top-[50%] right-[6%] w-[3px] h-[3px] bg-emerald-100/78 rounded-full leaf-shimmer animate-leaf-shimmer-5"></div>
            <div className="absolute top-[35%] right-[8%] w-[3px] h-[3px] bg-green-100/80 rounded-full leaf-shimmer animate-leaf-shimmer-6"></div>
          </div>

          {/* Castle Torch Flickers */}
          <div className="absolute inset-0">
            {/* Castle entrance torches */}
            <div className="absolute top-[54%] left-[47%] w-[3px] h-[6px] bg-orange-400/95 rounded torch-glow animate-torch-flicker-1"></div>
            <div className="absolute top-[54%] left-[53%] w-[3px] h-[6px] bg-orange-400/95 rounded torch-glow animate-torch-flicker-2"></div>
          </div>
        
        <style jsx>{`
          .window-glow {
            filter: blur(10px);
            box-shadow: 0 0 50px currentColor, 0 0 100px currentColor, 0 0 150px currentColor;
          }
          
          .water-sparkle {
            box-shadow: 0 0 40px currentColor, 0 0 80px currentColor, 0 0 120px currentColor, 0 0 160px currentColor;
            filter: blur(0.5px);
          }
          
          .flag {
            filter: blur(0.8px);
          }
          
          .skull-glow {
            box-shadow: 0 0 25px currentColor, 0 0 50px currentColor, 0 0 75px currentColor;
            filter: blur(1px);
          }
          
          .lantern-glow {
            filter: blur(8px);
            box-shadow: 0 0 40px currentColor, 0 0 80px currentColor, 0 0 120px currentColor, 0 0 160px currentColor;
          }
          
          .sunbeam {
            filter: blur(2px);
            opacity: 0;
          }
          
          .bird {
            box-shadow: 0 0 30px currentColor, 0 0 60px currentColor, 0 0 90px currentColor;
            filter: blur(0.8px);
          }
          
          .leaf-shimmer {
            box-shadow: 0 0 20px currentColor, 0 0 40px currentColor;
            filter: blur(0.6px);
          }
          
          .torch-glow {
            filter: blur(8px);
            box-shadow: 0 0 45px currentColor, 0 0 90px currentColor, 0 0 135px currentColor;
          }
          
          .animate-effects .window-glow {
            animation-play-state: running;
          }
          
          .animate-effects .water-sparkle {
            animation-play-state: running;
          }
          
          .animate-effects .flag {
            animation-play-state: running;
          }
          
          .animate-effects .skull-glow {
            animation-play-state: running;
          }
          
          .animate-effects .lantern-glow {
            animation-play-state: running;
          }
          
          .animate-effects .sunbeam {
            animation-play-state: running;
          }
          
          .animate-effects .bird {
            animation-play-state: running;
          }
          
          .animate-effects .leaf-shimmer {
            animation-play-state: running;
          }
          
          .animate-effects .torch-glow {
            animation-play-state: running;
          }
          
          @keyframes window-glow-1 {
            0%, 100% { opacity: 0.95; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.05); }
          }
          
          @keyframes window-glow-2 {
            0%, 100% { opacity: 0.9; transform: scale(1); }
            55% { opacity: 1; transform: scale(1.06); }
          }
          
          @keyframes window-glow-3 {
            0%, 100% { opacity: 0.92; transform: scale(1); }
            48% { opacity: 1; transform: scale(1.04); }
          }
          
          @keyframes window-glow-4 {
            0%, 100% { opacity: 0.88; transform: scale(1); }
            52% { opacity: 1; transform: scale(1.05); }
          }
          
          @keyframes window-glow-5 {
            0%, 100% { opacity: 0.85; transform: scale(1); }
            60% { opacity: 1; transform: scale(1.06); }
          }
          
          @keyframes window-glow-6 {
            0%, 100% { opacity: 0.9; transform: scale(1); }
            45% { opacity: 1; transform: scale(1.04); }
          }
          
          @keyframes window-glow-7 {
            0%, 100% { opacity: 0.87; transform: scale(1); }
            58% { opacity: 1; transform: scale(1.05); }
          }
          
          @keyframes window-glow-8 {
            0%, 100% { opacity: 0.95; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.07); }
          }
          
          @keyframes window-glow-9 {
            0%, 100% { opacity: 0.9; transform: scale(1); }
            54% { opacity: 1; transform: scale(1.06); }
          }
          
          @keyframes water-sparkle-1 {
            0%, 75%, 100% { opacity: 0; transform: scale(1); }
            80%, 90% { opacity: 1; transform: scale(2.5); }
            85% { opacity: 0.8; transform: scale(2); }
          }
          
          @keyframes water-sparkle-2 {
            0%, 68%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            73%, 83% { opacity: 1; transform: scale(2.8) rotate(360deg); }
            78% { opacity: 0.75; transform: scale(2.2) rotate(180deg); }
          }
          
          @keyframes water-sparkle-3 {
            0%, 82%, 100% { opacity: 0; transform: scale(1); }
            87%, 95% { opacity: 1; transform: scale(2.6); }
            91% { opacity: 0.85; transform: scale(2.1); }
          }
          
          @keyframes water-sparkle-4 {
            0%, 70%, 100% { opacity: 0; transform: scale(1); }
            75%, 85% { opacity: 1; transform: scale(2.7); }
            80% { opacity: 0.8; transform: scale(2.2); }
          }
          
          @keyframes water-sparkle-5 {
            0%, 78%, 100% { opacity: 0; transform: scale(1); }
            83%, 93% { opacity: 1; transform: scale(2.5); }
            88% { opacity: 0.82; transform: scale(2); }
          }
          
          @keyframes water-sparkle-6 {
            0%, 65%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            70%, 80% { opacity: 1; transform: scale(2.9) rotate(360deg); }
            75% { opacity: 0.78; transform: scale(2.3) rotate(180deg); }
          }
          
          @keyframes water-sparkle-7 {
            0%, 88%, 100% { opacity: 0; transform: scale(1); }
            92%, 98% { opacity: 1; transform: scale(2.6); }
            95% { opacity: 0.8; transform: scale(2.1); }
          }
          
          @keyframes water-sparkle-8 {
            0%, 72%, 100% { opacity: 0; transform: scale(1); }
            77%, 87% { opacity: 1; transform: scale(2.4); }
            82% { opacity: 0.88; transform: scale(1.9); }
          }
          
          @keyframes water-sparkle-9 {
            0%, 80%, 100% { opacity: 0; transform: scale(1); }
            85%, 95% { opacity: 1; transform: scale(2.7); }
            90% { opacity: 0.76; transform: scale(2.2); }
          }
          
          @keyframes water-sparkle-10 {
            0%, 60%, 100% { opacity: 0; transform: scale(1); }
            65%, 75% { opacity: 1; transform: scale(2.5); }
            70% { opacity: 0.85; transform: scale(2); }
          }
          
          @keyframes flag-wave {
            0%, 100% { transform: skewX(0deg) scaleX(1); }
            25% { transform: skewX(6deg) scaleX(1.15); }
            50% { transform: skewX(-4deg) scaleX(0.88); }
            75% { transform: skewX(5deg) scaleX(1.08); }
          }
          
          @keyframes flag-wave-2 {
            0%, 100% { transform: skewX(0deg) scaleX(1) rotate(-2deg); }
            25% { transform: skewX(5deg) scaleX(1.12) rotate(2deg); }
            50% { transform: skewX(-3deg) scaleX(0.9) rotate(-2deg); }
            75% { transform: skewX(4deg) scaleX(1.06) rotate(1deg); }
          }
          
          @keyframes flag-wave-3 {
            0%, 100% { transform: skewX(0deg) scaleX(1) rotate(2deg); }
            25% { transform: skewX(-5deg) scaleX(1.1) rotate(-2deg); }
            50% { transform: skewX(4deg) scaleX(0.92) rotate(2deg); }
            75% { transform: skewX(-3deg) scaleX(1.04) rotate(-1deg); }
          }
          
          @keyframes skull-glow {
            0%, 100% { opacity: 0.7; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.3); }
          }
          
          @keyframes skull-glow-2 {
            0%, 100% { opacity: 0.65; transform: scale(1); }
            55% { opacity: 1; transform: scale(1.25); }
          }
          
          @keyframes skull-glow-3 {
            0%, 100% { opacity: 0.65; transform: scale(1); }
            48% { opacity: 1; transform: scale(1.28); }
          }
          
          @keyframes lantern-glow-1 { 0%, 100% { opacity: 0.95; } 50% { opacity: 1; } }
          @keyframes lantern-glow-2 { 0%, 100% { opacity: 0.9; } 55% { opacity: 1; } }
          @keyframes lantern-glow-3 { 0%, 100% { opacity: 0.93; } 48% { opacity: 1; } }
          @keyframes lantern-glow-4 { 0%, 100% { opacity: 0.88; } 52% { opacity: 1; } }
          
          @keyframes sunbeam-1 {
            0%, 100% { opacity: 0.55; transform: scaleY(1) skewX(1deg); }
            50% { opacity: 0.85; transform: scaleY(1.08) skewX(2deg); }
          }
          
          @keyframes sunbeam-2 {
            0%, 100% { opacity: 0.5; transform: scaleY(1) skewX(-1deg); }
            60% { opacity: 0.8; transform: scaleY(1.1) skewX(-2deg); }
          }
          
          @keyframes sunbeam-3 {
            0%, 100% { opacity: 0.6; transform: scaleY(1) skewX(0deg); }
            55% { opacity: 0.9; transform: scaleY(1.12) skewX(1deg); }
          }
          
          @keyframes sunbeam-4 {
            0%, 100% { opacity: 0.48; transform: scaleY(1) skewX(-2deg); }
            65% { opacity: 0.78; transform: scaleY(1.09) skewX(-1deg); }
          }
          
          @keyframes sunbeam-5 {
            0%, 100% { opacity: 0.52; transform: scaleY(1) skewX(2deg); }
            50% { opacity: 0.82; transform: scaleY(1.1) skewX(3deg); }
          }
          
          @keyframes bird-fly-1 {
            0%, 100% { transform: translateX(0px) translateY(0px) rotate(0deg); opacity: 0.9; }
            25% { transform: translateX(80px) translateY(-30px) rotate(-8deg); opacity: 0.7; }
            50% { transform: translateX(160px) translateY(-20px) rotate(5deg); opacity: 0.85; }
            75% { transform: translateX(240px) translateY(-35px) rotate(-6deg); opacity: 0.75; }
            100% { transform: translateX(320px) translateY(-15px) rotate(0deg); opacity: 0; }
          }
          
          @keyframes bird-fly-2 {
            0%, 100% { transform: translateX(0px) translateY(0px) rotate(0deg); opacity: 0.85; }
            30% { transform: translateX(-70px) translateY(-25px) rotate(10deg); opacity: 0.65; }
            60% { transform: translateX(-140px) translateY(-40px) rotate(-7deg); opacity: 0.8; }
            90% { transform: translateX(-210px) translateY(-20px) rotate(8deg); opacity: 0.7; }
            100% { transform: translateX(-280px) translateY(-30px) rotate(0deg); opacity: 0; }
          }
          
          @keyframes bird-fly-3 {
            0%, 100% { transform: translateX(0px) translateY(0px) rotate(0deg); opacity: 0.88; }
            20% { transform: translateX(60px) translateY(20px) rotate(-5deg); opacity: 0.68; }
            40% { transform: translateX(120px) translateY(10px) rotate(4deg); opacity: 0.78; }
            60% { transform: translateX(180px) translateY(25px) rotate(-6deg); opacity: 0.72; }
            80% { transform: translateX(240px) translateY(15px) rotate(3deg); opacity: 0.65; }
            100% { transform: translateX(300px) translateY(20px) rotate(0deg); opacity: 0; }
          }
          
          @keyframes leaf-shimmer-1 {
            0%, 70%, 100% { opacity: 0; transform: scale(1); }
            75%, 85% { opacity: 0.85; transform: scale(2.1); }
            80% { opacity: 0.65; transform: scale(1.7); }
          }
          
          @keyframes leaf-shimmer-2 {
            0%, 65%, 100% { opacity: 0; transform: scale(1); }
            70%, 80% { opacity: 0.8; transform: scale(2); }
            75% { opacity: 0.6; transform: scale(1.6); }
          }
          
          @keyframes leaf-shimmer-3 {
            0%, 75%, 100% { opacity: 0; transform: scale(1); }
            80%, 90% { opacity: 0.85; transform: scale(2.2); }
            85% { opacity: 0.65; transform: scale(1.8); }
          }
          
          @keyframes leaf-shimmer-4 {
            0%, 68%, 100% { opacity: 0; transform: scale(1); }
            73%, 83% { opacity: 0.82; transform: scale(2.05); }
            78% { opacity: 0.62; transform: scale(1.65); }
          }
          
          @keyframes leaf-shimmer-5 {
            0%, 72%, 100% { opacity: 0; transform: scale(1); }
            77%, 87% { opacity: 0.78; transform: scale(1.95); }
            82% { opacity: 0.58; transform: scale(1.55); }
          }
          
          @keyframes leaf-shimmer-6 {
            0%, 80%, 100% { opacity: 0; transform: scale(1); }
            85%, 95% { opacity: 0.8; transform: scale(2.1); }
            90% { opacity: 0.6; transform: scale(1.7); }
          }
          
          @keyframes torch-flicker-1 {
            0%, 100% { opacity: 0.95; transform: scale(1); }
            20% { opacity: 0.85; transform: scale(1.08); }
            40% { opacity: 1; transform: scale(0.95); }
            60% { opacity: 0.9; transform: scale(1.05); }
            80% { opacity: 0.88; transform: scale(1.02); }
          }
          
          @keyframes torch-flicker-2 {
            0%, 100% { opacity: 0.95; transform: scale(1); }
            25% { opacity: 0.88; transform: scale(1.06); }
            45% { opacity: 1; transform: scale(0.93); }
            65% { opacity: 0.92; transform: scale(1.04); }
            85% { opacity: 0.86; transform: scale(1.01); }
          }
          
          .animate-window-glow-1 { animation: window-glow-1 4.5s ease-in-out infinite; }
          .animate-window-glow-2 { animation: window-glow-2 5s ease-in-out infinite 0.5s; }
          .animate-window-glow-3 { animation: window-glow-3 4.8s ease-in-out infinite 1s; }
          .animate-window-glow-4 { animation: window-glow-4 5.2s ease-in-out infinite 1.5s; }
          .animate-window-glow-5 { animation: window-glow-5 5.5s ease-in-out infinite 2s; }
          .animate-window-glow-6 { animation: window-glow-6 4.6s ease-in-out infinite 0.8s; }
          .animate-window-glow-7 { animation: window-glow-7 5.3s ease-in-out infinite 2.2s; }
          .animate-window-glow-8 { animation: window-glow-8 4.9s ease-in-out infinite 1.3s; }
          .animate-window-glow-9 { animation: window-glow-9 5.1s ease-in-out infinite 2.5s; }
          
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
          
          .animate-flag-wave { animation: flag-wave 3s ease-in-out infinite; }
          .animate-flag-wave-2 { animation: flag-wave-2 3.2s ease-in-out infinite 0.8s; }
          .animate-flag-wave-3 { animation: flag-wave-3 3.5s ease-in-out infinite 1.5s; }
          
          .animate-skull-glow { animation: skull-glow 4s ease-in-out infinite; }
          .animate-skull-glow-2 { animation: skull-glow-2 4.5s ease-in-out infinite 1s; }
          .animate-skull-glow-3 { animation: skull-glow-3 4.2s ease-in-out infinite 2s; }
          
          .animate-lantern-glow-1 { animation: lantern-glow-1 5s ease-in-out infinite; }
          .animate-lantern-glow-2 { animation: lantern-glow-2 5.5s ease-in-out infinite 0.5s; }
          .animate-lantern-glow-3 { animation: lantern-glow-3 4.8s ease-in-out infinite 1s; }
          .animate-lantern-glow-4 { animation: lantern-glow-4 5.2s ease-in-out infinite 1.5s; }
          
          .animate-sunbeam-1 { animation: sunbeam-1 10s ease-in-out infinite; }
          .animate-sunbeam-2 { animation: sunbeam-2 12s ease-in-out infinite 2s; }
          .animate-sunbeam-3 { animation: sunbeam-3 11s ease-in-out infinite 4s; }
          .animate-sunbeam-4 { animation: sunbeam-4 13s ease-in-out infinite 1s; }
          .animate-sunbeam-5 { animation: sunbeam-5 10.5s ease-in-out infinite 3s; }
          
          .animate-bird-fly-1 { animation: bird-fly-1 20s linear infinite; }
          .animate-bird-fly-2 { animation: bird-fly-2 22s linear infinite 6s; }
          .animate-bird-fly-3 { animation: bird-fly-3 18s linear infinite 12s; }
          
          .animate-leaf-shimmer-1 { animation: leaf-shimmer-1 9s linear infinite; }
          .animate-leaf-shimmer-2 { animation: leaf-shimmer-2 10s linear infinite 2s; }
          .animate-leaf-shimmer-3 { animation: leaf-shimmer-3 8.5s linear infinite 4s; }
          .animate-leaf-shimmer-4 { animation: leaf-shimmer-4 9.5s linear infinite 6s; }
          .animate-leaf-shimmer-5 { animation: leaf-shimmer-5 10.5s linear infinite 3s; }
          .animate-leaf-shimmer-6 { animation: leaf-shimmer-6 8.8s linear infinite 7s; }
          
          .animate-torch-flicker-1 { animation: torch-flicker-1 4s ease-in-out infinite; }
          .animate-torch-flicker-2 { animation: torch-flicker-2 4.5s ease-in-out infinite 1s; }
        `}</style>
          </div>
        )}
      </div>
    </Card>
  );
}

export default JungleModule3Image;
