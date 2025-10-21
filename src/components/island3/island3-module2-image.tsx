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
        
        {/* EPIC Animated overlay effects */}
        <div className="absolute inset-0 animate-effects">
          {/* Fortress Tower Window Lights */}
          <div className="absolute inset-0">
            {/* Left tower section windows */}
            <div className="absolute top-[28%] left-[22%] w-[4px] h-[5px] bg-orange-400/70 rounded window-glow animate-tower-window-1"></div>
            <div className="absolute top-[32%] left-[20%] w-[3px] h-[4px] bg-yellow-400/65 rounded window-glow animate-tower-window-2"></div>
            <div className="absolute top-[35%] left-[23%] w-[4px] h-[5px] bg-orange-400/72 rounded window-glow animate-tower-window-3"></div>
            <div className="absolute top-[40%] left-[18%] w-[3px] h-[4px] bg-yellow-300/68 rounded window-glow animate-tower-window-4"></div>
            <div className="absolute top-[45%] left-[21%] w-[4px] h-[5px] bg-orange-400/70 rounded window-glow animate-tower-window-5"></div>
            
            {/* Center fortress windows */}
            <div className="absolute top-[30%] left-[32%] w-[4px] h-[5px] bg-orange-400/75 rounded window-glow animate-tower-window-6"></div>
            <div className="absolute top-[33%] left-[35%] w-[3px] h-[4px] bg-yellow-400/70 rounded window-glow animate-tower-window-7"></div>
            <div className="absolute top-[36%] left-[38%] w-[4px] h-[5px] bg-orange-400/73 rounded window-glow animate-tower-window-8"></div>
            <div className="absolute top-[40%] left-[33%] w-[3px] h-[4px] bg-yellow-300/68 rounded window-glow animate-tower-window-9"></div>
            <div className="absolute top-[42%] left-[40%] w-[4px] h-[5px] bg-orange-400/72 rounded window-glow animate-tower-window-10"></div>
            <div className="absolute top-[48%] left-[35%] w-[3px] h-[4px] bg-yellow-400/70 rounded window-glow animate-tower-window-11"></div>
            
            {/* Right tower section windows */}
            <div className="absolute top-[32%] left-[45%] w-[4px] h-[5px] bg-orange-400/70 rounded window-glow animate-tower-window-12"></div>
            <div className="absolute top-[38%] left-[48%] w-[3px] h-[4px] bg-yellow-400/68 rounded window-glow animate-tower-window-13"></div>
            <div className="absolute top-[44%] left-[46%] w-[4px] h-[5px] bg-orange-400/72 rounded window-glow animate-tower-window-14"></div>
            <div className="absolute top-[35%] left-[43%] w-[3px] h-[4px] bg-yellow-300/65 rounded window-glow animate-tower-window-15"></div>
          </div>

          {/* Main Gate Torches/Glow */}
          <div className="absolute inset-0">
            {/* Gate entrance glow */}
            <div className="absolute top-[58%] left-[35%] w-[60px] h-[50px] bg-orange-400/35 rounded-full gate-glow animate-gate-glow-1"></div>
            <div className="absolute top-[60%] left-[36%] w-[45px] h-[38px] bg-yellow-400/30 rounded-full gate-glow animate-gate-glow-2"></div>
            
            {/* Gate torches */}
            <div className="absolute top-[56%] left-[33%] w-[8px] h-[10px] bg-orange-400/80 rounded-full torch-flame animate-torch-flicker-1"></div>
            <div className="absolute top-[56%] left-[40%] w-[8px] h-[10px] bg-orange-400/80 rounded-full torch-flame animate-torch-flicker-2"></div>
          </div>

          {/* Fortress Mystical Energy Aura */}
          <div className="absolute inset-0">
            {/* Epic fortress power glow */}
            <div className="absolute top-[35%] left-[28%] w-[200px] h-[150px] bg-orange-300/20 rounded-full fortress-aura animate-fortress-aura-1"></div>
            <div className="absolute top-[38%] left-[30%] w-[160px] h-[120px] bg-yellow-300/18 rounded-full fortress-aura animate-fortress-aura-2"></div>
            <div className="absolute top-[40%] left-[32%] w-[120px] h-[90px] bg-orange-400/16 rounded-full fortress-aura animate-fortress-aura-3"></div>
          </div>

          {/* Tower Top Beacon Lights */}
          <div className="absolute inset-0">
            {/* Left tower beacon */}
            <div className="absolute top-[18%] left-[22%] w-[20px] h-[20px] bg-orange-400/40 rounded-full beacon animate-beacon-pulse-1"></div>
            <div className="absolute top-[19%] left-[22.5%] w-[12px] h-[12px] bg-yellow-400/50 rounded-full beacon animate-beacon-pulse-2"></div>
            
            {/* Center tower beacon */}
            <div className="absolute top-[16%] left-[35%] w-[22px] h-[22px] bg-orange-400/42 rounded-full beacon animate-beacon-pulse-3"></div>
            <div className="absolute top-[17%] left-[35.5%] w-[14px] h-[14px] bg-yellow-400/52 rounded-full beacon animate-beacon-pulse-4"></div>
            
            {/* Right tower beacon */}
            <div className="absolute top-[20%] left-[46%] w-[18px] h-[18px] bg-orange-400/38 rounded-full beacon animate-beacon-pulse-5"></div>
            <div className="absolute top-[21%] left-[46.5%] w-[11px] h-[11px] bg-yellow-400/48 rounded-full beacon animate-beacon-pulse-6"></div>
          </div>

          {/* Pyramid Background Glints */}
          <div className="absolute inset-0">
            <div className="absolute top-[28%] left-[52%] w-[4px] h-[4px] bg-yellow-200/90 rounded-full pyramid-sparkle animate-pyramid-sparkle-1"></div>
            <div className="absolute top-[32%] left-[55%] w-[3px] h-[3px] bg-white/85 rounded-full pyramid-sparkle animate-pyramid-sparkle-2"></div>
            <div className="absolute top-[35%] left-[58%] w-[4px] h-[4px] bg-yellow-200/88 rounded-full pyramid-sparkle animate-pyramid-sparkle-3"></div>
            <div className="absolute top-[40%] right-[22%] w-[3px] h-[3px] bg-white/82 rounded-full pyramid-sparkle animate-pyramid-sparkle-4"></div>
          </div>

          {/* Oasis Water Shimmer */}
          <div className="absolute inset-0">
            <div className="absolute top-[58%] right-[18%] w-[100px] h-[50px] bg-cyan-300/25 rounded-full water-shimmer animate-oasis-water-1"></div>
            <div className="absolute top-[60%] right-[19%] w-[80px] h-[40px] bg-blue-300/22 rounded-full water-shimmer animate-oasis-water-2"></div>
            <div className="absolute top-[62%] right-[20%] w-[60px] h-[30px] bg-cyan-400/20 rounded-full water-shimmer animate-oasis-water-3"></div>
            
            {/* Water sparkles */}
            <div className="absolute top-[59%] right-[18%] w-[3px] h-[3px] bg-white/85 rounded-full water-sparkle animate-water-sparkle-1"></div>
            <div className="absolute top-[61%] right-[22%] w-[3px] h-[3px] bg-cyan-200/90 rounded-full water-sparkle animate-water-sparkle-2"></div>
          </div>

          {/* INTENSE Heat Shimmer/Mirages */}
          <div className="absolute inset-0">
            {/* Massive foreground heat waves */}
            <div className="absolute top-[70%] left-[10%] w-[150px] h-[120px] bg-orange-200/18 rounded-full heat-wave animate-heat-wave-epic-1"></div>
            <div className="absolute top-[72%] left-[35%] w-[180px] h-[140px] bg-yellow-200/16 rounded-full heat-wave animate-heat-wave-epic-2"></div>
            <div className="absolute top-[68%] right-[15%] w-[160px] h-[130px] bg-orange-200/20 rounded-full heat-wave animate-heat-wave-epic-3"></div>
            
            {/* Mid-ground intense shimmer */}
            <div className="absolute top-[55%] left-[15%] w-[140px] h-[100px] bg-orange-100/14 rounded-full heat-wave animate-heat-wave-epic-4"></div>
            <div className="absolute top-[58%] left-[45%] w-[130px] h-[95px] bg-yellow-100/12 rounded-full heat-wave animate-heat-wave-epic-5"></div>
            <div className="absolute top-[52%] right-[20%] w-[120px] h-[90px] bg-orange-100/15 rounded-full heat-wave animate-heat-wave-epic-6"></div>
            
            {/* Background shimmer */}
            <div className="absolute top-[40%] left-[10%] w-[200px] h-[80px] bg-orange-100/10 rounded-full heat-wave animate-heat-wave-epic-7"></div>
            <div className="absolute top-[42%] right-[10%] w-[180px] h-[75px] bg-yellow-100/9 rounded-full heat-wave animate-heat-wave-epic-8"></div>
          </div>

          {/* Sand Storm Particles */}
          <div className="absolute inset-0">
            {/* Large sand particles */}
            <div className="absolute top-[65%] left-[15%] w-[3px] h-[3px] bg-orange-200/60 rounded-full sand-storm animate-sand-storm-1"></div>
            <div className="absolute top-[70%] left-[30%] w-[4px] h-[4px] bg-yellow-200/65 rounded-full sand-storm animate-sand-storm-2"></div>
            <div className="absolute top-[68%] left-[50%] w-[3px] h-[3px] bg-orange-200/62 rounded-full sand-storm animate-sand-storm-3"></div>
            <div className="absolute top-[72%] left-[70%] w-[4px] h-[4px] bg-yellow-200/58 rounded-full sand-storm animate-sand-storm-4"></div>
            <div className="absolute top-[75%] left-[85%] w-[3px] h-[3px] bg-orange-200/60 rounded-full sand-storm animate-sand-storm-5"></div>
            
            {/* Medium sand particles */}
            <div className="absolute top-[60%] left-[20%] w-[2px] h-[2px] bg-orange-200/50 rounded-full sand-storm animate-sand-storm-6"></div>
            <div className="absolute top-[62%] left-[55%] w-[2px] h-[2px] bg-yellow-200/52 rounded-full sand-storm animate-sand-storm-7"></div>
            <div className="absolute top-[58%] right-[25%] w-[2px] h-[2px] bg-orange-200/55 rounded-full sand-storm animate-sand-storm-8"></div>
          </div>

          {/* Ancient Magic Sparkles on Walls */}
          <div className="absolute inset-0">
            <div className="absolute top-[30%] left-[25%] w-[3px] h-[3px] bg-orange-300/85 rounded-full magic-sparkle animate-magic-sparkle-1"></div>
            <div className="absolute top-[38%] left-[32%] w-[4px] h-[4px] bg-yellow-300/90 rounded-full magic-sparkle animate-magic-sparkle-2"></div>
            <div className="absolute top-[42%] left-[40%] w-[3px] h-[3px] bg-orange-300/82 rounded-full magic-sparkle animate-magic-sparkle-3"></div>
            <div className="absolute top-[35%] left-[45%] w-[4px] h-[4px] bg-yellow-300/88 rounded-full magic-sparkle animate-magic-sparkle-4"></div>
            <div className="absolute top-[48%] left-[28%] w-[3px] h-[3px] bg-orange-300/85 rounded-full magic-sparkle animate-magic-sparkle-5"></div>
          </div>

          {/* Epic Sun Rays */}
          <div className="absolute inset-0">
            <div className="absolute top-[0%] left-[0%] w-full h-[50%] bg-gradient-to-b from-yellow-200/12 via-orange-100/8 to-transparent sun-ray animate-epic-sun-ray-1"></div>
            <div className="absolute top-[5%] left-[0%] w-full h-[45%] bg-gradient-to-b from-orange-200/10 via-yellow-100/6 to-transparent sun-ray animate-epic-sun-ray-2"></div>
          </div>

          {/* Intense Desert Atmosphere */}
          <div className="absolute inset-0 bg-gradient-to-b from-orange-100/8 via-yellow-50/5 to-orange-200/10 animate-intense-desert-atmosphere"></div>
          
          {/* Epic Desert Floor Heat */}
          <div className="absolute inset-0 bg-gradient-to-t from-orange-200/15 via-yellow-100/8 to-transparent animate-epic-desert-floor-heat"></div>
        </div>
        
        <style jsx>{`
          .window-glow {
            filter: blur(3px);
            box-shadow: 0 0 15px currentColor, 0 0 30px currentColor, 0 0 45px currentColor;
          }
          
          .gate-glow {
            filter: blur(25px);
          }
          
          .torch-flame {
            filter: blur(5px);
            box-shadow: 0 0 25px currentColor, 0 0 50px currentColor;
          }
          
          .fortress-aura {
            filter: blur(35px);
          }
          
          .beacon {
            filter: blur(15px);
            box-shadow: 0 0 30px currentColor, 0 0 60px currentColor, 0 0 90px currentColor;
          }
          
          .pyramid-sparkle {
            box-shadow: 0 0 15px currentColor, 0 0 30px currentColor, 0 0 45px currentColor;
            filter: blur(0.3px);
          }
          
          .water-shimmer {
            filter: blur(20px);
          }
          
          .water-sparkle {
            box-shadow: 0 0 12px currentColor, 0 0 24px currentColor, 0 0 36px currentColor;
            filter: blur(0.3px);
          }
          
          .heat-wave {
            filter: blur(30px);
            opacity: 0;
          }
          
          .sand-storm {
            box-shadow: 0 0 8px currentColor, 0 0 16px currentColor;
            filter: blur(0.6px);
          }
          
          .magic-sparkle {
            box-shadow: 0 0 18px currentColor, 0 0 36px currentColor, 0 0 54px currentColor;
            filter: blur(0.2px);
          }
          
          .sun-ray {
            filter: blur(40px);
            opacity: 0;
          }
          
          .animate-effects .window-glow {
            animation-play-state: running;
          }
          
          .animate-effects .gate-glow {
            animation-play-state: running;
          }
          
          .animate-effects .torch-flame {
            animation-play-state: running;
          }
          
          .animate-effects .fortress-aura {
            animation-play-state: running;
          }
          
          .animate-effects .beacon {
            animation-play-state: running;
          }
          
          .animate-effects .pyramid-sparkle {
            animation-play-state: running;
          }
          
          .animate-effects .water-shimmer {
            animation-play-state: running;
          }
          
          .animate-effects .water-sparkle {
            animation-play-state: running;
          }
          
          .animate-effects .heat-wave {
            animation-play-state: running;
          }
          
          .animate-effects .sand-storm {
            animation-play-state: running;
          }
          
          .animate-effects .magic-sparkle {
            animation-play-state: running;
          }
          
          .animate-effects .sun-ray {
            animation-play-state: running;
          }
          
          @keyframes tower-window-1 {
            0%, 100% { opacity: 0.7; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes tower-window-2 {
            0%, 100% { opacity: 0.65; transform: scale(1); }
            60% { opacity: 0.95; transform: scale(1.35); }
          }
          
          @keyframes tower-window-3 {
            0%, 100% { opacity: 0.72; transform: scale(1); }
            55% { opacity: 1; transform: scale(1.45); }
          }
          
          @keyframes tower-window-4 {
            0%, 100% { opacity: 0.68; transform: scale(1); }
            48% { opacity: 0.98; transform: scale(1.38); }
          }
          
          @keyframes tower-window-5 {
            0%, 100% { opacity: 0.7; transform: scale(1); }
            52% { opacity: 1; transform: scale(1.42); }
          }
          
          @keyframes tower-window-6 {
            0%, 100% { opacity: 0.75; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.5); }
          }
          
          @keyframes tower-window-7 {
            0%, 100% { opacity: 0.7; transform: scale(1); }
            58% { opacity: 0.98; transform: scale(1.4); }
          }
          
          @keyframes tower-window-8 {
            0%, 100% { opacity: 0.73; transform: scale(1); }
            54% { opacity: 1; transform: scale(1.48); }
          }
          
          @keyframes tower-window-9 {
            0%, 100% { opacity: 0.68; transform: scale(1); }
            56% { opacity: 0.96; transform: scale(1.36); }
          }
          
          @keyframes tower-window-10 {
            0%, 100% { opacity: 0.72; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.44); }
          }
          
          @keyframes tower-window-11 {
            0%, 100% { opacity: 0.7; transform: scale(1); }
            62% { opacity: 0.98; transform: scale(1.4); }
          }
          
          @keyframes tower-window-12 {
            0%, 100% { opacity: 0.7; transform: scale(1); }
            52% { opacity: 1; transform: scale(1.42); }
          }
          
          @keyframes tower-window-13 {
            0%, 100% { opacity: 0.68; transform: scale(1); }
            58% { opacity: 0.96; transform: scale(1.38); }
          }
          
          @keyframes tower-window-14 {
            0%, 100% { opacity: 0.72; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.44); }
          }
          
          @keyframes tower-window-15 {
            0%, 100% { opacity: 0.65; transform: scale(1); }
            54% { opacity: 0.95; transform: scale(1.35); }
          }
          
          @keyframes gate-glow-1 {
            0%, 100% { opacity: 0.35; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.25); }
          }
          
          @keyframes gate-glow-2 {
            0%, 100% { opacity: 0.3; transform: scale(1) rotate(0deg); }
            60% { opacity: 0.55; transform: scale(1.3) rotate(10deg); }
          }
          
          @keyframes torch-flicker-1 {
            0%, 100% { opacity: 0.8; transform: scale(1); }
            25% { opacity: 1; transform: scale(1.4); }
            50% { opacity: 0.6; transform: scale(0.9); }
            75% { opacity: 0.95; transform: scale(1.3); }
          }
          
          @keyframes torch-flicker-2 {
            0%, 100% { opacity: 0.8; transform: scale(1) rotate(0deg); }
            30% { opacity: 1; transform: scale(1.5) rotate(8deg); }
            60% { opacity: 0.5; transform: scale(0.85) rotate(-5deg); }
            85% { opacity: 0.95; transform: scale(1.35) rotate(4deg); }
          }
          
          @keyframes fortress-aura-1 {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(1.2); }
          }
          
          @keyframes fortress-aura-2 {
            0%, 100% { opacity: 0.18; transform: scale(1) rotate(0deg); }
            60% { opacity: 0.38; transform: scale(1.25) rotate(15deg); }
          }
          
          @keyframes fortress-aura-3 {
            0%, 100% { opacity: 0.16; transform: scale(1); }
            55% { opacity: 0.35; transform: scale(1.3); }
          }
          
          @keyframes beacon-pulse-1 {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.6); }
          }
          
          @keyframes beacon-pulse-2 {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 0.95; transform: scale(1.8); }
          }
          
          @keyframes beacon-pulse-3 {
            0%, 100% { opacity: 0.42; transform: scale(1); }
            50% { opacity: 0.85; transform: scale(1.65); }
          }
          
          @keyframes beacon-pulse-4 {
            0%, 100% { opacity: 0.52; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.85); }
          }
          
          @keyframes beacon-pulse-5 {
            0%, 100% { opacity: 0.38; transform: scale(1); }
            50% { opacity: 0.75; transform: scale(1.55); }
          }
          
          @keyframes beacon-pulse-6 {
            0%, 100% { opacity: 0.48; transform: scale(1); }
            50% { opacity: 0.9; transform: scale(1.75); }
          }
          
          @keyframes pyramid-sparkle-1 {
            0%, 65%, 100% { opacity: 0; transform: scale(1); }
            70%, 80% { opacity: 0.9; transform: scale(2); }
            75% { opacity: 0.5; transform: scale(1.6); }
          }
          
          @keyframes pyramid-sparkle-2 {
            0%, 70%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            75%, 85% { opacity: 0.85; transform: scale(1.9) rotate(360deg); }
            80% { opacity: 0.48; transform: scale(1.5) rotate(180deg); }
          }
          
          @keyframes pyramid-sparkle-3 {
            0%, 75%, 100% { opacity: 0; transform: scale(1); }
            80%, 90% { opacity: 0.88; transform: scale(1.95); }
            85% { opacity: 0.52; transform: scale(1.58); }
          }
          
          @keyframes pyramid-sparkle-4 {
            0%, 68%, 100% { opacity: 0; transform: scale(1); }
            73%, 83% { opacity: 0.82; transform: scale(1.85); }
            78% { opacity: 0.45; transform: scale(1.48); }
          }
          
          @keyframes oasis-water-1 {
            0%, 100% { opacity: 0.25; transform: scale(1); }
            50% { opacity: 0.45; transform: scale(1.2); }
          }
          
          @keyframes oasis-water-2 {
            0%, 100% { opacity: 0.22; transform: scale(1) rotate(0deg); }
            60% { opacity: 0.42; transform: scale(1.18) rotate(8deg); }
          }
          
          @keyframes oasis-water-3 {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            55% { opacity: 0.38; transform: scale(1.15); }
          }
          
          @keyframes water-sparkle-1 {
            0%, 78%, 100% { opacity: 0; transform: scale(1); }
            83%, 93% { opacity: 0.85; transform: scale(1.8); }
            88% { opacity: 0.45; transform: scale(1.4); }
          }
          
          @keyframes water-sparkle-2 {
            0%, 72%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            77%, 87% { opacity: 0.9; transform: scale(1.9) rotate(360deg); }
            82% { opacity: 0.5; transform: scale(1.5) rotate(180deg); }
          }
          
          @keyframes heat-wave-epic-1 {
            0% { opacity: 0; transform: translateY(0px) scaleY(1); }
            50% { opacity: 0.25; transform: translateY(-80px) scaleY(1.6); }
            100% { opacity: 0; transform: translateY(-160px) scaleY(2.2); }
          }
          
          @keyframes heat-wave-epic-2 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) scaleY(1); }
            50% { opacity: 0.22; transform: translateY(-75px) translateX(25px) scaleY(1.5); }
            100% { opacity: 0; transform: translateY(-150px) translateX(50px) scaleY(2); }
          }
          
          @keyframes heat-wave-epic-3 {
            0% { opacity: 0; transform: translateY(0px) scaleY(1); }
            50% { opacity: 0.28; transform: translateY(-85px) scaleY(1.7); }
            100% { opacity: 0; transform: translateY(-170px) scaleY(2.4); }
          }
          
          @keyframes heat-wave-epic-4 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) scaleY(1); }
            50% { opacity: 0.18; transform: translateY(-70px) translateX(-20px) scaleY(1.55); }
            100% { opacity: 0; transform: translateY(-140px) translateX(-40px) scaleY(2.1); }
          }
          
          @keyframes heat-wave-epic-5 {
            0% { opacity: 0; transform: translateY(0px) scaleY(1); }
            50% { opacity: 0.16; transform: translateY(-78px) scaleY(1.58); }
            100% { opacity: 0; transform: translateY(-156px) scaleY(2.15); }
          }
          
          @keyframes heat-wave-epic-6 {
            0% { opacity: 0; transform: translateY(0px) scaleY(1); }
            50% { opacity: 0.2; transform: translateY(-65px) scaleY(1.48); }
            100% { opacity: 0; transform: translateY(-130px) scaleY(1.95); }
          }
          
          @keyframes heat-wave-epic-7 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) scaleY(1); }
            50% { opacity: 0.14; transform: translateY(-60px) translateX(30px) scaleY(1.42); }
            100% { opacity: 0; transform: translateY(-120px) translateX(60px) scaleY(1.85); }
          }
          
          @keyframes heat-wave-epic-8 {
            0% { opacity: 0; transform: translateY(0px) scaleY(1); }
            50% { opacity: 0.12; transform: translateY(-68px) scaleY(1.52); }
            100% { opacity: 0; transform: translateY(-136px) scaleY(2.05); }
          }
          
          @keyframes sand-storm-1 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px) rotate(0deg); }
            50% { opacity: 0.6; transform: translateX(160px) translateY(-25px) rotate(180deg); }
            100% { opacity: 0; transform: translateX(320px) translateY(-45px) rotate(360deg); }
          }
          
          @keyframes sand-storm-2 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px) rotate(0deg); }
            50% { opacity: 0.65; transform: translateX(140px) translateY(-20px) rotate(200deg); }
            100% { opacity: 0; transform: translateX(280px) translateY(-35px) rotate(400deg); }
          }
          
          @keyframes sand-storm-3 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px) rotate(0deg); }
            50% { opacity: 0.62; transform: translateX(150px) translateY(-28px) rotate(190deg); }
            100% { opacity: 0; transform: translateX(300px) translateY(-50px) rotate(380deg); }
          }
          
          @keyframes sand-storm-4 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px) rotate(0deg); }
            50% { opacity: 0.58; transform: translateX(-130px) translateY(-18px) rotate(170deg); }
            100% { opacity: 0; transform: translateX(-260px) translateY(-32px) rotate(340deg); }
          }
          
          @keyframes sand-storm-5 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px) rotate(0deg); }
            50% { opacity: 0.6; transform: translateX(-145px) translateY(-22px) rotate(185deg); }
            100% { opacity: 0; transform: translateX(-290px) translateY(-40px) rotate(370deg); }
          }
          
          @keyframes sand-storm-6 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px); }
            50% { opacity: 0.5; transform: translateX(120px) translateY(-15px); }
            100% { opacity: 0; transform: translateX(240px) translateY(-28px); }
          }
          
          @keyframes sand-storm-7 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px); }
            50% { opacity: 0.52; transform: translateX(-110px) translateY(-16px); }
            100% { opacity: 0; transform: translateX(-220px) translateY(-30px); }
          }
          
          @keyframes sand-storm-8 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px); }
            50% { opacity: 0.55; transform: translateX(135px) translateY(-19px); }
            100% { opacity: 0; transform: translateX(270px) translateY(-36px); }
          }
          
          @keyframes magic-sparkle-1 {
            0%, 60%, 100% { opacity: 0; transform: scale(1); }
            65%, 75% { opacity: 0.85; transform: scale(2.2); }
            70% { opacity: 0.5; transform: scale(1.7); }
          }
          
          @keyframes magic-sparkle-2 {
            0%, 68%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            73%, 83% { opacity: 0.9; transform: scale(2.4) rotate(360deg); }
            78% { opacity: 0.55; transform: scale(1.9) rotate(180deg); }
          }
          
          @keyframes magic-sparkle-3 {
            0%, 64%, 100% { opacity: 0; transform: scale(1); }
            69%, 79% { opacity: 0.82; transform: scale(2.1); }
            74% { opacity: 0.48; transform: scale(1.65); }
          }
          
          @keyframes magic-sparkle-4 {
            0%, 72%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            77%, 87% { opacity: 0.88; transform: scale(2.3) rotate(360deg); }
            82% { opacity: 0.52; transform: scale(1.85) rotate(180deg); }
          }
          
          @keyframes magic-sparkle-5 {
            0%, 66%, 100% { opacity: 0; transform: scale(1); }
            71%, 81% { opacity: 0.85; transform: scale(2.2); }
            76% { opacity: 0.5; transform: scale(1.75); }
          }
          
          @keyframes epic-sun-ray-1 {
            0%, 100% { opacity: 0; }
            50% { opacity: 0.25; }
          }
          
          @keyframes epic-sun-ray-2 {
            0%, 100% { opacity: 0; }
            60% { opacity: 0.2; }
          }
          
          @keyframes intense-desert-atmosphere {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; }
          }
          
          @keyframes epic-desert-floor-heat {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.85; }
          }
          
          .animate-tower-window-1 { animation: tower-window-1 4s ease-in-out infinite; }
          .animate-tower-window-2 { animation: tower-window-2 4.5s ease-in-out infinite 0.5s; }
          .animate-tower-window-3 { animation: tower-window-3 4.2s ease-in-out infinite 1s; }
          .animate-tower-window-4 { animation: tower-window-4 4.8s ease-in-out infinite 1.5s; }
          .animate-tower-window-5 { animation: tower-window-5 4.3s ease-in-out infinite 2s; }
          .animate-tower-window-6 { animation: tower-window-6 4.6s ease-in-out infinite 2.5s; }
          .animate-tower-window-7 { animation: tower-window-7 4.4s ease-in-out infinite 3s; }
          .animate-tower-window-8 { animation: tower-window-8 4.7s ease-in-out infinite 3.5s; }
          .animate-tower-window-9 { animation: tower-window-9 4.1s ease-in-out infinite 4s; }
          .animate-tower-window-10 { animation: tower-window-10 4.5s ease-in-out infinite 0.8s; }
          .animate-tower-window-11 { animation: tower-window-11 4.9s ease-in-out infinite 1.3s; }
          .animate-tower-window-12 { animation: tower-window-12 4.3s ease-in-out infinite 1.8s; }
          .animate-tower-window-13 { animation: tower-window-13 4.6s ease-in-out infinite 2.3s; }
          .animate-tower-window-14 { animation: tower-window-14 4.4s ease-in-out infinite 2.8s; }
          .animate-tower-window-15 { animation: tower-window-15 4.7s ease-in-out infinite 3.3s; }
          
          .animate-gate-glow-1 { animation: gate-glow-1 5s ease-in-out infinite; }
          .animate-gate-glow-2 { animation: gate-glow-2 6s ease-in-out infinite 1s; }
          
          .animate-torch-flicker-1 { animation: torch-flicker-1 2.5s ease-in-out infinite; }
          .animate-torch-flicker-2 { animation: torch-flicker-2 2.8s ease-in-out infinite 0.5s; }
          
          .animate-fortress-aura-1 { animation: fortress-aura-1 8s ease-in-out infinite; }
          .animate-fortress-aura-2 { animation: fortress-aura-2 9s ease-in-out infinite 2s; }
          .animate-fortress-aura-3 { animation: fortress-aura-3 10s ease-in-out infinite 4s; }
          
          .animate-beacon-pulse-1 { animation: beacon-pulse-1 3s ease-in-out infinite; }
          .animate-beacon-pulse-2 { animation: beacon-pulse-2 3s ease-in-out infinite 0.2s; }
          .animate-beacon-pulse-3 { animation: beacon-pulse-3 3.2s ease-in-out infinite; }
          .animate-beacon-pulse-4 { animation: beacon-pulse-4 3.2s ease-in-out infinite 0.2s; }
          .animate-beacon-pulse-5 { animation: beacon-pulse-5 2.8s ease-in-out infinite; }
          .animate-beacon-pulse-6 { animation: beacon-pulse-6 2.8s ease-in-out infinite 0.2s; }
          
          .animate-pyramid-sparkle-1 { animation: pyramid-sparkle-1 9s linear infinite; }
          .animate-pyramid-sparkle-2 { animation: pyramid-sparkle-2 10s linear infinite 2s; }
          .animate-pyramid-sparkle-3 { animation: pyramid-sparkle-3 8.5s linear infinite 4s; }
          .animate-pyramid-sparkle-4 { animation: pyramid-sparkle-4 11s linear infinite 1.5s; }
          
          .animate-oasis-water-1 { animation: oasis-water-1 6s ease-in-out infinite; }
          .animate-oasis-water-2 { animation: oasis-water-2 7s ease-in-out infinite 1.5s; }
          .animate-oasis-water-3 { animation: oasis-water-3 8s ease-in-out infinite 3s; }
          
          .animate-water-sparkle-1 { animation: water-sparkle-1 7s linear infinite; }
          .animate-water-sparkle-2 { animation: water-sparkle-2 8s linear infinite 2s; }
          
          .animate-heat-wave-epic-1 { animation: heat-wave-epic-1 7s ease-in-out infinite; }
          .animate-heat-wave-epic-2 { animation: heat-wave-epic-2 8s ease-in-out infinite 1.5s; }
          .animate-heat-wave-epic-3 { animation: heat-wave-epic-3 6.5s ease-in-out infinite 3s; }
          .animate-heat-wave-epic-4 { animation: heat-wave-epic-4 9s ease-in-out infinite 0.8s; }
          .animate-heat-wave-epic-5 { animation: heat-wave-epic-5 7.5s ease-in-out infinite 4s; }
          .animate-heat-wave-epic-6 { animation: heat-wave-epic-6 10s ease-in-out infinite 2.5s; }
          .animate-heat-wave-epic-7 { animation: heat-wave-epic-7 8.5s ease-in-out infinite 5s; }
          .animate-heat-wave-epic-8 { animation: heat-wave-epic-8 9.5s ease-in-out infinite 3.5s; }
          
          .animate-sand-storm-1 { animation: sand-storm-1 14s linear infinite; }
          .animate-sand-storm-2 { animation: sand-storm-2 16s linear infinite 2s; }
          .animate-sand-storm-3 { animation: sand-storm-3 15s linear infinite 4s; }
          .animate-sand-storm-4 { animation: sand-storm-4 17s linear infinite 1.5s; }
          .animate-sand-storm-5 { animation: sand-storm-5 13s linear infinite 6s; }
          .animate-sand-storm-6 { animation: sand-storm-6 18s linear infinite 3s; }
          .animate-sand-storm-7 { animation: sand-storm-7 16.5s linear infinite 5s; }
          .animate-sand-storm-8 { animation: sand-storm-8 14.5s linear infinite 8s; }
          
          .animate-magic-sparkle-1 { animation: magic-sparkle-1 6s linear infinite; }
          .animate-magic-sparkle-2 { animation: magic-sparkle-2 7s linear infinite 1.5s; }
          .animate-magic-sparkle-3 { animation: magic-sparkle-3 6.5s linear infinite 3s; }
          .animate-magic-sparkle-4 { animation: magic-sparkle-4 7.5s linear infinite 4.5s; }
          .animate-magic-sparkle-5 { animation: magic-sparkle-5 8s linear infinite 2s; }
          
          .animate-epic-sun-ray-1 { animation: epic-sun-ray-1 18s ease-in-out infinite; }
          .animate-epic-sun-ray-2 { animation: epic-sun-ray-2 22s ease-in-out infinite 6s; }
          
          .animate-intense-desert-atmosphere { animation: intense-desert-atmosphere 14s ease-in-out infinite; }
          .animate-epic-desert-floor-heat { animation: epic-desert-floor-heat 12s ease-in-out infinite; }
        `}</style>
      </div>
    </Card>
  );
}

