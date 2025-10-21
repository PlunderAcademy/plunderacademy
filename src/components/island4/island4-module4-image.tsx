"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Island4Module4Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        {/* Base image */}
        <Image
          src="/islands/island4/island4-module4-image.webp"
          alt="Proxy Patterns & Upgradeability - Gilded Bastion Adventure"
          fill
          className="object-cover"
          priority
        />
        
        {/* EPIC Animated overlay effects */}
        <div className="absolute inset-0 animate-effects">
          {/* LEGENDARY Rose Window Divine Light */}
          <div className="absolute inset-0">
            {/* Epic rose window glow */}
            <div className="absolute top-[40%] left-[42.5%] w-[60px] h-[60px] bg-yellow-200/35 rounded-full rose-window-glow animate-rose-glow-1"></div>
            <div className="absolute top-[41%] left-[43%] w-[45px] h-[45px] bg-amber-200/40 rounded-full rose-window-glow animate-rose-glow-2"></div>
            <div className="absolute top-[41.5%] left-[43.5%] w-[30px] h-[30px] bg-yellow-100/45 rounded-full rose-window-core animate-rose-glow-3"></div>
            
            {/* Rose window stained glass sparkles */}
            <div className="absolute top-[40%] left-[43%] w-[5px] h-[5px] bg-white/98 rounded-full glass-sparkle animate-glass-sparkle-1"></div>
            <div className="absolute top-[41%] left-[42%] w-[4px] h-[4px] bg-blue-300/95 rounded-full glass-sparkle animate-glass-sparkle-2"></div>
            <div className="absolute top-[41%] left-[45%] w-[4px] h-[4px] bg-red-300/93 rounded-full glass-sparkle animate-glass-sparkle-3"></div>
            <div className="absolute top-[42%] left-[42%] w-[4px] h-[4px] bg-yellow-300/95 rounded-full glass-sparkle animate-glass-sparkle-4"></div>
            <div className="absolute top-[42%] left-[44%] w-[4px] h-[4px] bg-purple-300/92 rounded-full glass-sparkle animate-glass-sparkle-5"></div>
          </div>

          {/* Cathedral Spire Cross Sparkles - DIVINE */}
          <div className="absolute inset-0">
            {/* Main center cross top */}
            <div className="absolute top-[10%] left-[46%] w-[6px] h-[6px] bg-white/98 rounded-full cross-sparkle animate-cross-sparkle-1"></div>
            <div className="absolute top-[11%] left-[46.5%] w-[5px] h-[5px] bg-yellow-200/95 rounded-full cross-sparkle animate-cross-sparkle-2"></div>
            
            {/* Left spire crosses */}
            <div className="absolute top-[12%] left-[40%] w-[4px] h-[4px] bg-white/95 rounded-full cross-sparkle animate-cross-sparkle-3"></div>
            <div className="absolute top-[14%] left-[36%] w-[4px] h-[4px] bg-yellow-200/92 rounded-full cross-sparkle animate-cross-sparkle-4"></div>
            
            {/* Right spire crosses */}
            <div className="absolute top-[12%] left-[52%] w-[4px] h-[4px] bg-white/93 rounded-full cross-sparkle animate-cross-sparkle-5"></div>
            <div className="absolute top-[14%] left-[56%] w-[4px] h-[4px] bg-yellow-200/90 rounded-full cross-sparkle animate-cross-sparkle-6"></div>
          </div>

          {/* Cathedral Stone Edge Sparkles - INTENSE */}
          <div className="absolute inset-0">
            {/* Main facade edges */}
            <div className="absolute top-[36%] left-[40%] w-[3px] h-[3px] bg-white/90 rounded-full stone-sparkle animate-stone-sparkle-1"></div>
            <div className="absolute top-[38%] left-[52%] w-[3px] h-[3px] bg-cyan-100/88 rounded-full stone-sparkle animate-stone-sparkle-2"></div>
            <div className="absolute top-[46%] left-[38%] w-[3px] h-[3px] bg-white/92 rounded-full stone-sparkle animate-stone-sparkle-3"></div>
            <div className="absolute top-[48%] left-[54%] w-[3px] h-[3px] bg-cyan-100/90 rounded-full stone-sparkle animate-stone-sparkle-4"></div>
            
            {/* Spire edges */}
            <div className="absolute top-[22%] left-[42%] w-[3px] h-[3px] bg-white/88 rounded-full stone-sparkle animate-stone-sparkle-5"></div>
            <div className="absolute top-[24%] left-[50%] w-[3px] h-[3px] bg-cyan-100/86 rounded-full stone-sparkle animate-stone-sparkle-6"></div>
            <div className="absolute top-[26%] left-[46%] w-[3px] h-[3px] bg-white/90 rounded-full stone-sparkle animate-stone-sparkle-7"></div>
            
            {/* Buttress edges */}
            <div className="absolute top-[53%] left-[36%] w-[3px] h-[3px] bg-cyan-100/88 rounded-full stone-sparkle animate-stone-sparkle-8"></div>
            <div className="absolute top-[56%] left-[56%] w-[3px] h-[3px] bg-white/89 rounded-full stone-sparkle animate-stone-sparkle-9"></div>
          </div>

          {/* Gothic Window Lights */}
          <div className="absolute inset-0">
            {/* Upper cathedral windows */}
            <div className="absolute top-[28%] left-[44%] w-[3px] h-[4px] bg-yellow-300/88 rounded window-light animate-window-light-1"></div>
            <div className="absolute top-[28%] left-[48%] w-[3px] h-[4px] bg-amber-300/86 rounded window-light animate-window-light-2"></div>
            <div className="absolute top-[32%] left-[42%] w-[3px] h-[4px] bg-yellow-300/90 rounded window-light animate-window-light-3"></div>
            <div className="absolute top-[32%] left-[50%] w-[3px] h-[4px] bg-amber-300/88 rounded window-light animate-window-light-4"></div>
            
            {/* Mid-level windows */}
            <div className="absolute top-[46%] left-[40%] w-[3px] h-[5px] bg-yellow-300/92 rounded window-light animate-window-light-5"></div>
            <div className="absolute top-[46%] left-[46%] w-[3px] h-[5px] bg-amber-300/90 rounded window-light animate-window-light-6"></div>
            <div className="absolute top-[46%] left-[52%] w-[3px] h-[5px] bg-yellow-300/88 rounded window-light animate-window-light-7"></div>
            
            {/* Lower side windows */}
            <div className="absolute top-[56%] left-[38%] w-[3px] h-[4px] bg-amber-300/85 rounded window-light animate-window-light-8"></div>
            <div className="absolute top-[56%] left-[54%] w-[3px] h-[4px] bg-yellow-300/87 rounded window-light animate-window-light-9"></div>
          </div>

          {/* Street Lamp Glows - WARM */}
          <div className="absolute inset-0">
            {/* Left lamps */}
            <div className="absolute top-[50%] left-[18%] w-[12px] h-[14px] bg-yellow-300/75 rounded-full lamp-glow animate-lamp-glow-1"></div>
            <div className="absolute top-[58%] left-[22%] w-[12px] h-[14px] bg-amber-300/72 rounded-full lamp-glow animate-lamp-glow-2"></div>
            
            {/* Right lamps */}
            <div className="absolute top-[50%] left-[82%] w-[12px] h-[14px] bg-yellow-300/73 rounded-full lamp-glow animate-lamp-glow-3"></div>
            <div className="absolute top-[58%] left-[78%] w-[12px] h-[14px] bg-amber-300/70 rounded-full lamp-glow animate-lamp-glow-4"></div>
          </div>

          {/* Background Tower Window Lights */}
          <div className="absolute inset-0">
            {/* Left tower */}
            <div className="absolute top-[32%] left-[8%] w-[3px] h-[4px] bg-yellow-300/85 rounded window-light animate-tower-light-1"></div>
            <div className="absolute top-[36%] left-[6%] w-[3px] h-[4px] bg-orange-300/82 rounded window-light animate-tower-light-2"></div>
            <div className="absolute top-[40%] left-[10%] w-[3px] h-[4px] bg-yellow-300/88 rounded window-light animate-tower-light-3"></div>
            
            {/* Right tower */}
            <div className="absolute top-[32%] left-[92%] w-[3px] h-[4px] bg-orange-300/86 rounded window-light animate-tower-light-4"></div>
            <div className="absolute top-[36%] left-[94%] w-[3px] h-[4px] bg-yellow-300/84 rounded window-light animate-tower-light-5"></div>
            <div className="absolute top-[40%] left-[90%] w-[3px] h-[4px] bg-orange-300/88 rounded window-light animate-tower-light-6"></div>
          </div>

          {/* Foliage Shimmer - Trees & Bushes */}
          <div className="absolute inset-0">
            {/* Left tree foliage */}
            <div className="absolute top-[52%] left-[8%] w-[55px] h-[48px] bg-green-300/14 rounded-full foliage-glow animate-foliage-glow-1"></div>
            <div className="absolute top-[60%] left-[12%] w-[50px] h-[45px] bg-emerald-300/12 rounded-full foliage-glow animate-foliage-glow-2"></div>
            <div className="absolute top-[68%] left-[6%] w-[48px] h-[42px] bg-green-300/13 rounded-full foliage-glow animate-foliage-glow-3"></div>
            
            {/* Right tree foliage */}
            <div className="absolute top-[52%] right-[8%] w-[58px] h-[50px] bg-green-300/15 rounded-full foliage-glow animate-foliage-glow-4"></div>
            <div className="absolute top-[60%] right-[12%] w-[52px] h-[46px] bg-emerald-300/13 rounded-full foliage-glow animate-foliage-glow-5"></div>
            <div className="absolute top-[68%] right-[6%] w-[50px] h-[44px] bg-green-300/14 rounded-full foliage-glow animate-foliage-glow-6"></div>
            
            {/* Foreground bushes */}
            <div className="absolute top-[78%] left-[25%] w-[45px] h-[38px] bg-green-300/16 rounded-full foliage-glow animate-foliage-glow-7"></div>
            <div className="absolute top-[78%] right-[25%] w-[46px] h-[40px] bg-emerald-300/15 rounded-full foliage-glow animate-foliage-glow-8"></div>
          </div>

          {/* Floating Divine Particles */}
          <div className="absolute inset-0">
            {/* Around cathedral area */}
            <div className="absolute top-[33%] left-[34%] w-[3px] h-[3px] bg-yellow-200/70 rounded-full dust-particle animate-divine-dust-1"></div>
            <div className="absolute top-[36%] left-[41%] w-[3px] h-[3px] bg-cyan-200/68 rounded-full dust-particle animate-divine-dust-2"></div>
            <div className="absolute top-[38%] left-[48%] w-[4px] h-[4px] bg-yellow-200/75 rounded-full dust-particle animate-divine-dust-3"></div>
            <div className="absolute top-[40%] left-[54%] w-[3px] h-[3px] bg-cyan-200/70 rounded-full dust-particle animate-divine-dust-4"></div>
            <div className="absolute top-[43%] left-[58%] w-[3px] h-[3px] bg-yellow-200/72 rounded-full dust-particle animate-divine-dust-5"></div>
            
            {/* Mid-air particles */}
            <div className="absolute top-[50%] left-[31%] w-[2px] h-[2px] bg-cyan-200/65 rounded-full dust-particle animate-divine-dust-6"></div>
            <div className="absolute top-[53%] left-[46%] w-[2px] h-[2px] bg-yellow-200/68 rounded-full dust-particle animate-divine-dust-7"></div>
            <div className="absolute top-[56%] left-[61%] w-[2px] h-[2px] bg-cyan-200/62 rounded-full dust-particle animate-divine-dust-8"></div>
          </div>

          {/* Cobblestone Path Shimmer */}
          <div className="absolute inset-0">
            <div className="absolute top-[80%] left-[38%] w-[35px] h-[18px] bg-yellow-200/16 rounded-full path-shimmer animate-path-shimmer-1"></div>
            <div className="absolute top-[84%] left-[44%] w-[38px] h-[20px] bg-amber-200/14 rounded-full path-shimmer animate-path-shimmer-2"></div>
            <div className="absolute top-[88%] left-[48%] w-[36px] h-[19px] bg-yellow-200/18 rounded-full path-shimmer animate-path-shimmer-3"></div>
            <div className="absolute top-[92%] left-[42%] w-[32px] h-[16px] bg-amber-200/15 rounded-full path-shimmer animate-path-shimmer-4"></div>
          </div>

          {/* Localized Sun Rays through Clouds */}
          <div className="absolute inset-0">
            <div className="absolute top-[0%] left-[31%] w-[100px] h-[45%] bg-gradient-to-b from-yellow-200/16 via-amber-100/9 to-transparent sun-ray animate-sun-ray-1"></div>
            <div className="absolute top-[0%] left-[51%] w-[110px] h-[48%] bg-gradient-to-b from-amber-200/18 via-yellow-100/10 to-transparent sun-ray animate-sun-ray-2"></div>
          </div>
        </div>
        
        <style jsx>{`
          .rose-window-glow {
            filter: blur(25px);
          }
          
          .rose-window-core {
            filter: blur(12px);
            box-shadow: 0 0 50px currentColor, 0 0 100px currentColor;
          }
          
          .glass-sparkle {
            box-shadow: 0 0 30px currentColor, 0 0 60px currentColor, 0 0 90px currentColor;
            filter: blur(0.3px);
          }
          
          .cross-sparkle {
            box-shadow: 0 0 35px currentColor, 0 0 70px currentColor, 0 0 105px currentColor;
            filter: blur(0.3px);
          }
          
          .stone-sparkle {
            box-shadow: 0 0 22px currentColor, 0 0 44px currentColor, 0 0 66px currentColor;
            filter: blur(0.3px);
          }
          
          .window-light {
            filter: blur(4px);
            box-shadow: 0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor;
          }
          
          .lamp-glow {
            filter: blur(10px);
            box-shadow: 0 0 30px currentColor, 0 0 60px currentColor;
          }
          
          .foliage-glow {
            filter: blur(25px);
          }
          
          .dust-particle {
            box-shadow: 0 0 12px currentColor, 0 0 24px currentColor;
            filter: blur(0.5px);
          }
          
          .path-shimmer {
            filter: blur(16px);
          }
          
          .sun-ray {
            filter: blur(35px);
            opacity: 0;
          }
          
          .animate-effects .rose-window-glow {
            animation-play-state: running;
          }
          
          .animate-effects .rose-window-core {
            animation-play-state: running;
          }
          
          .animate-effects .glass-sparkle {
            animation-play-state: running;
          }
          
          .animate-effects .cross-sparkle {
            animation-play-state: running;
          }
          
          .animate-effects .stone-sparkle {
            animation-play-state: running;
          }
          
          .animate-effects .window-light {
            animation-play-state: running;
          }
          
          .animate-effects .lamp-glow {
            animation-play-state: running;
          }
          
          .animate-effects .foliage-glow {
            animation-play-state: running;
          }
          
          .animate-effects .dust-particle {
            animation-play-state: running;
          }
          
          .animate-effects .path-shimmer {
            animation-play-state: running;
          }
          
          .animate-effects .sun-ray {
            animation-play-state: running;
          }
          
          @keyframes rose-glow-1 {
            0%, 100% { opacity: 0.35; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.3); }
          }
          
          @keyframes rose-glow-2 {
            0%, 100% { opacity: 0.4; transform: scale(1) rotate(0deg); }
            60% { opacity: 0.65; transform: scale(1.35) rotate(180deg); }
          }
          
          @keyframes rose-glow-3 {
            0%, 100% { opacity: 0.45; transform: scale(1); }
            55% { opacity: 0.75; transform: scale(1.4); }
          }
          
          @keyframes glass-sparkle-1 {
            0%, 58%, 100% { opacity: 0; transform: scale(1); }
            63%, 73% { opacity: 1; transform: scale(2.8); }
            68% { opacity: 0.65; transform: scale(2.3); }
          }
          
          @keyframes glass-sparkle-2 {
            0%, 62%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            67%, 77% { opacity: 0.95; transform: scale(2.6) rotate(360deg); }
            72% { opacity: 0.6; transform: scale(2.1) rotate(180deg); }
          }
          
          @keyframes glass-sparkle-3 {
            0%, 65%, 100% { opacity: 0; transform: scale(1); }
            70%, 80% { opacity: 0.93; transform: scale(2.7); }
            75% { opacity: 0.62; transform: scale(2.2); }
          }
          
          @keyframes glass-sparkle-4 {
            0%, 68%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            73%, 83% { opacity: 0.95; transform: scale(2.65) rotate(360deg); }
            78% { opacity: 0.64; transform: scale(2.15) rotate(180deg); }
          }
          
          @keyframes glass-sparkle-5 {
            0%, 60%, 100% { opacity: 0; transform: scale(1); }
            65%, 75% { opacity: 0.92; transform: scale(2.5); }
            70% { opacity: 0.58; transform: scale(2.05); }
          }
          
          @keyframes cross-sparkle-1 {
            0%, 55%, 100% { opacity: 0; transform: scale(1); }
            60%, 70% { opacity: 1; transform: scale(3); }
            65% { opacity: 0.7; transform: scale(2.5); }
          }
          
          @keyframes cross-sparkle-2 {
            0%, 58%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            63%, 73% { opacity: 0.95; transform: scale(2.8) rotate(360deg); }
            68% { opacity: 0.65; transform: scale(2.3) rotate(180deg); }
          }
          
          @keyframes cross-sparkle-3 {
            0%, 62%, 100% { opacity: 0; transform: scale(1); }
            67%, 77% { opacity: 0.95; transform: scale(2.6); }
            72% { opacity: 0.62; transform: scale(2.1); }
          }
          
          @keyframes cross-sparkle-4 {
            0%, 65%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            70%, 80% { opacity: 0.92; transform: scale(2.7) rotate(360deg); }
            75% { opacity: 0.6; transform: scale(2.2) rotate(180deg); }
          }
          
          @keyframes cross-sparkle-5 {
            0%, 60%, 100% { opacity: 0; transform: scale(1); }
            65%, 75% { opacity: 0.93; transform: scale(2.5); }
            70% { opacity: 0.58; transform: scale(2); }
          }
          
          @keyframes cross-sparkle-6 {
            0%, 68%, 100% { opacity: 0; transform: scale(1); }
            73%, 83% { opacity: 0.9; transform: scale(2.4); }
            78% { opacity: 0.56; transform: scale(1.95); }
          }
          
          @keyframes stone-sparkle-1 {
            0%, 70%, 100% { opacity: 0; transform: scale(1); }
            75%, 85% { opacity: 0.9; transform: scale(2.2); }
            80% { opacity: 0.55; transform: scale(1.8); }
          }
          
          @keyframes stone-sparkle-2 {
            0%, 72%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            77%, 87% { opacity: 0.88; transform: scale(2.1) rotate(360deg); }
            82% { opacity: 0.52; transform: scale(1.7) rotate(180deg); }
          }
          
          @keyframes stone-sparkle-3 {
            0%, 68%, 100% { opacity: 0; transform: scale(1); }
            73%, 83% { opacity: 0.92; transform: scale(2.3); }
            78% { opacity: 0.58; transform: scale(1.9); }
          }
          
          @keyframes stone-sparkle-4 {
            0%, 74%, 100% { opacity: 0; transform: scale(1); }
            79%, 89% { opacity: 0.9; transform: scale(2.2); }
            84% { opacity: 0.56; transform: scale(1.8); }
          }
          
          @keyframes stone-sparkle-5 {
            0%, 66%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            71%, 81% { opacity: 0.88; transform: scale(2.15) rotate(360deg); }
            76% { opacity: 0.54; transform: scale(1.75) rotate(180deg); }
          }
          
          @keyframes stone-sparkle-6 {
            0%, 76%, 100% { opacity: 0; transform: scale(1); }
            81%, 91% { opacity: 0.86; transform: scale(2.1); }
            86% { opacity: 0.52; transform: scale(1.7); }
          }
          
          @keyframes stone-sparkle-7 {
            0%, 64%, 100% { opacity: 0; transform: scale(1); }
            69%, 79% { opacity: 0.9; transform: scale(2.25); }
            74% { opacity: 0.58; transform: scale(1.85); }
          }
          
          @keyframes stone-sparkle-8 {
            0%, 78%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            83%, 93% { opacity: 0.88; transform: scale(2.12) rotate(360deg); }
            88% { opacity: 0.54; transform: scale(1.72) rotate(180deg); }
          }
          
          @keyframes stone-sparkle-9 {
            0%, 70%, 100% { opacity: 0; transform: scale(1); }
            75%, 85% { opacity: 0.89; transform: scale(2.18); }
            80% { opacity: 0.56; transform: scale(1.78); }
          }
          
          @keyframes window-light-1 {
            0%, 100% { opacity: 0.88; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.45); }
          }
          
          @keyframes window-light-2 {
            0%, 100% { opacity: 0.86; transform: scale(1); }
            60% { opacity: 1; transform: scale(1.42); }
          }
          
          @keyframes window-light-3 {
            0%, 100% { opacity: 0.9; transform: scale(1); }
            55% { opacity: 1; transform: scale(1.48); }
          }
          
          @keyframes window-light-4 {
            0%, 100% { opacity: 0.88; transform: scale(1); }
            58% { opacity: 1; transform: scale(1.44); }
          }
          
          @keyframes window-light-5 {
            0%, 100% { opacity: 0.92; transform: scale(1); }
            52% { opacity: 1; transform: scale(1.5); }
          }
          
          @keyframes window-light-6 {
            0%, 100% { opacity: 0.9; transform: scale(1); }
            56% { opacity: 1; transform: scale(1.46); }
          }
          
          @keyframes window-light-7 {
            0%, 100% { opacity: 0.88; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.42); }
          }
          
          @keyframes window-light-8 {
            0%, 100% { opacity: 0.85; transform: scale(1); }
            54% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes window-light-9 {
            0%, 100% { opacity: 0.87; transform: scale(1); }
            58% { opacity: 1; transform: scale(1.43); }
          }
          
          @keyframes tower-light-1 {
            0%, 100% { opacity: 0.85; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes tower-light-2 {
            0%, 100% { opacity: 0.82; transform: scale(1); }
            60% { opacity: 1; transform: scale(1.38); }
          }
          
          @keyframes tower-light-3 {
            0%, 100% { opacity: 0.88; transform: scale(1); }
            55% { opacity: 1; transform: scale(1.42); }
          }
          
          @keyframes tower-light-4 {
            0%, 100% { opacity: 0.86; transform: scale(1); }
            52% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes tower-light-5 {
            0%, 100% { opacity: 0.84; transform: scale(1); }
            58% { opacity: 1; transform: scale(1.38); }
          }
          
          @keyframes tower-light-6 {
            0%, 100% { opacity: 0.88; transform: scale(1); }
            54% { opacity: 1; transform: scale(1.42); }
          }
          
          @keyframes lamp-glow-1 {
            0%, 100% { opacity: 0.75; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes lamp-glow-2 {
            0%, 100% { opacity: 0.72; transform: scale(1); }
            60% { opacity: 1; transform: scale(1.38); }
          }
          
          @keyframes lamp-glow-3 {
            0%, 100% { opacity: 0.73; transform: scale(1); }
            55% { opacity: 1; transform: scale(1.42); }
          }
          
          @keyframes lamp-glow-4 {
            0%, 100% { opacity: 0.7; transform: scale(1); }
            58% { opacity: 0.98; transform: scale(1.36); }
          }
          
          @keyframes foliage-glow-1 {
            0%, 100% { opacity: 0.14; transform: scale(1); }
            50% { opacity: 0.28; transform: scale(1.18); }
          }
          
          @keyframes foliage-glow-2 {
            0%, 100% { opacity: 0.12; transform: scale(1); }
            60% { opacity: 0.26; transform: scale(1.15); }
          }
          
          @keyframes foliage-glow-3 {
            0%, 100% { opacity: 0.13; transform: scale(1); }
            55% { opacity: 0.27; transform: scale(1.17); }
          }
          
          @keyframes foliage-glow-4 {
            0%, 100% { opacity: 0.15; transform: scale(1); }
            58% { opacity: 0.3; transform: scale(1.2); }
          }
          
          @keyframes foliage-glow-5 {
            0%, 100% { opacity: 0.13; transform: scale(1); }
            52% { opacity: 0.28; transform: scale(1.17); }
          }
          
          @keyframes foliage-glow-6 {
            0%, 100% { opacity: 0.14; transform: scale(1); }
            56% { opacity: 0.29; transform: scale(1.19); }
          }
          
          @keyframes foliage-glow-7 {
            0%, 100% { opacity: 0.16; transform: scale(1); }
            50% { opacity: 0.32; transform: scale(1.22); }
          }
          
          @keyframes foliage-glow-8 {
            0%, 100% { opacity: 0.15; transform: scale(1); }
            54% { opacity: 0.31; transform: scale(1.2); }
          }
          
          @keyframes divine-dust-1 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.7; transform: translateY(-65px) translateX(28px) rotate(180deg); }
          }
          
          @keyframes divine-dust-2 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.68; transform: translateY(-60px) translateX(-25px) rotate(200deg); }
          }
          
          @keyframes divine-dust-3 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.75; transform: translateY(-70px) translateX(30px) rotate(190deg); }
          }
          
          @keyframes divine-dust-4 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.7; transform: translateY(-62px) translateX(-27px) rotate(210deg); }
          }
          
          @keyframes divine-dust-5 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.72; transform: translateY(-68px) translateX(26px) rotate(195deg); }
          }
          
          @keyframes divine-dust-6 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.65; transform: translateY(-52px) translateX(20px); }
          }
          
          @keyframes divine-dust-7 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.68; transform: translateY(-55px) translateX(-18px); }
          }
          
          @keyframes divine-dust-8 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.62; transform: translateY(-58px) translateX(22px); }
          }
          
          @keyframes path-shimmer-1 {
            0%, 100% { opacity: 0.16; transform: scale(1); }
            50% { opacity: 0.32; transform: scale(1.2); }
          }
          
          @keyframes path-shimmer-2 {
            0%, 100% { opacity: 0.14; transform: scale(1) rotate(0deg); }
            60% { opacity: 0.3; transform: scale(1.18) rotate(10deg); }
          }
          
          @keyframes path-shimmer-3 {
            0%, 100% { opacity: 0.18; transform: scale(1); }
            55% { opacity: 0.35; transform: scale(1.22); }
          }
          
          @keyframes path-shimmer-4 {
            0%, 100% { opacity: 0.15; transform: scale(1) rotate(0deg); }
            58% { opacity: 0.31; transform: scale(1.15) rotate(-10deg); }
          }
          
          @keyframes sun-ray-1 {
            0%, 100% { opacity: 0; transform: translateY(0px); }
            50% { opacity: 0.26; transform: translateY(-12px); }
          }
          
          @keyframes sun-ray-2 {
            0%, 100% { opacity: 0; transform: translateY(0px); }
            60% { opacity: 0.3; transform: translateY(-15px); }
          }
          
          .animate-rose-glow-1 { animation: rose-glow-1 5s ease-in-out infinite; }
          .animate-rose-glow-2 { animation: rose-glow-2 6s ease-in-out infinite 1s; }
          .animate-rose-glow-3 { animation: rose-glow-3 4.5s ease-in-out infinite 0.5s; }
          
          .animate-glass-sparkle-1 { animation: glass-sparkle-1 9s linear infinite; }
          .animate-glass-sparkle-2 { animation: glass-sparkle-2 10s linear infinite 2s; }
          .animate-glass-sparkle-3 { animation: glass-sparkle-3 9.5s linear infinite 4s; }
          .animate-glass-sparkle-4 { animation: glass-sparkle-4 10.5s linear infinite 1s; }
          .animate-glass-sparkle-5 { animation: glass-sparkle-5 9.2s linear infinite 6s; }
          
          .animate-cross-sparkle-1 { animation: cross-sparkle-1 10s linear infinite; }
          .animate-cross-sparkle-2 { animation: cross-sparkle-2 11s linear infinite 2.5s; }
          .animate-cross-sparkle-3 { animation: cross-sparkle-3 10.5s linear infinite 5s; }
          .animate-cross-sparkle-4 { animation: cross-sparkle-4 11.5s linear infinite 1.5s; }
          .animate-cross-sparkle-5 { animation: cross-sparkle-5 10.2s linear infinite 7s; }
          .animate-cross-sparkle-6 { animation: cross-sparkle-6 10.8s linear infinite 3.5s; }
          
          .animate-stone-sparkle-1 { animation: stone-sparkle-1 8s linear infinite; }
          .animate-stone-sparkle-2 { animation: stone-sparkle-2 9s linear infinite 1.5s; }
          .animate-stone-sparkle-3 { animation: stone-sparkle-3 8.5s linear infinite 3s; }
          .animate-stone-sparkle-4 { animation: stone-sparkle-4 9.5s linear infinite 4.5s; }
          .animate-stone-sparkle-5 { animation: stone-sparkle-5 8.2s linear infinite 2s; }
          .animate-stone-sparkle-6 { animation: stone-sparkle-6 9.2s linear infinite 6s; }
          .animate-stone-sparkle-7 { animation: stone-sparkle-7 8.8s linear infinite 1s; }
          .animate-stone-sparkle-8 { animation: stone-sparkle-8 9.8s linear infinite 5s; }
          .animate-stone-sparkle-9 { animation: stone-sparkle-9 8.3s linear infinite 7s; }
          
          .animate-window-light-1 { animation: window-light-1 5s ease-in-out infinite; }
          .animate-window-light-2 { animation: window-light-2 5.5s ease-in-out infinite 0.5s; }
          .animate-window-light-3 { animation: window-light-3 5.2s ease-in-out infinite 1s; }
          .animate-window-light-4 { animation: window-light-4 5.8s ease-in-out infinite 1.5s; }
          .animate-window-light-5 { animation: window-light-5 5.3s ease-in-out infinite 2s; }
          .animate-window-light-6 { animation: window-light-6 5.6s ease-in-out infinite 2.5s; }
          .animate-window-light-7 { animation: window-light-7 5.4s ease-in-out infinite 3s; }
          .animate-window-light-8 { animation: window-light-8 5.7s ease-in-out infinite 3.5s; }
          .animate-window-light-9 { animation: window-light-9 5.1s ease-in-out infinite 4s; }
          
          .animate-tower-light-1 { animation: tower-light-1 5.5s ease-in-out infinite; }
          .animate-tower-light-2 { animation: tower-light-2 5.8s ease-in-out infinite 0.8s; }
          .animate-tower-light-3 { animation: tower-light-3 5.3s ease-in-out infinite 1.6s; }
          .animate-tower-light-4 { animation: tower-light-4 5.6s ease-in-out infinite 2.4s; }
          .animate-tower-light-5 { animation: tower-light-5 5.9s ease-in-out infinite 3.2s; }
          .animate-tower-light-6 { animation: tower-light-6 5.2s ease-in-out infinite 4s; }
          
          .animate-lamp-glow-1 { animation: lamp-glow-1 4s ease-in-out infinite; }
          .animate-lamp-glow-2 { animation: lamp-glow-2 4.5s ease-in-out infinite 1s; }
          .animate-lamp-glow-3 { animation: lamp-glow-3 4.2s ease-in-out infinite 2s; }
          .animate-lamp-glow-4 { animation: lamp-glow-4 4.7s ease-in-out infinite 0.5s; }
          
          .animate-foliage-glow-1 { animation: foliage-glow-1 10s ease-in-out infinite; }
          .animate-foliage-glow-2 { animation: foliage-glow-2 11s ease-in-out infinite 2s; }
          .animate-foliage-glow-3 { animation: foliage-glow-3 10.5s ease-in-out infinite 4s; }
          .animate-foliage-glow-4 { animation: foliage-glow-4 11.5s ease-in-out infinite 1s; }
          .animate-foliage-glow-5 { animation: foliage-glow-5 10.2s ease-in-out infinite 5s; }
          .animate-foliage-glow-6 { animation: foliage-glow-6 11.2s ease-in-out infinite 3s; }
          .animate-foliage-glow-7 { animation: foliage-glow-7 9.8s ease-in-out infinite 6s; }
          .animate-foliage-glow-8 { animation: foliage-glow-8 10.8s ease-in-out infinite 7s; }
          
          .animate-divine-dust-1 { animation: divine-dust-1 16s ease-in-out infinite; }
          .animate-divine-dust-2 { animation: divine-dust-2 18s ease-in-out infinite 3s; }
          .animate-divine-dust-3 { animation: divine-dust-3 17s ease-in-out infinite 6s; }
          .animate-divine-dust-4 { animation: divine-dust-4 19s ease-in-out infinite 2s; }
          .animate-divine-dust-5 { animation: divine-dust-5 16.5s ease-in-out infinite 8s; }
          .animate-divine-dust-6 { animation: divine-dust-6 20s ease-in-out infinite 4s; }
          .animate-divine-dust-7 { animation: divine-dust-7 18.5s ease-in-out infinite 7s; }
          .animate-divine-dust-8 { animation: divine-dust-8 17.5s ease-in-out infinite 9s; }
          
          .animate-path-shimmer-1 { animation: path-shimmer-1 7s ease-in-out infinite; }
          .animate-path-shimmer-2 { animation: path-shimmer-2 8s ease-in-out infinite 2s; }
          .animate-path-shimmer-3 { animation: path-shimmer-3 7.5s ease-in-out infinite 4s; }
          .animate-path-shimmer-4 { animation: path-shimmer-4 8.5s ease-in-out infinite 1s; }
          
          .animate-sun-ray-1 { animation: sun-ray-1 16s ease-in-out infinite; }
          .animate-sun-ray-2 { animation: sun-ray-2 18s ease-in-out infinite 5s; }
        `}</style>
      </div>
    </Card>
  );
}

