"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Island4Module3Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        {/* Base image */}
        <Image
          src="/islands/island4/island4-module3-image.webp"
          alt="Random Number Generator Practical - Gilded Bastion Adventure"
          fill
          className="object-cover"
          priority
        />
        
        {/* EPIC Animated overlay effects */}
        <div className="absolute inset-0 animate-effects">
          {/* LEGENDARY Golden Dome Glow */}
          <div className="absolute inset-0">
            {/* Epic dome divine glow */}
            <div className="absolute top-[38%] left-[47%] w-[120px] h-[100px] bg-yellow-300/35 rounded-full dome-glow animate-dome-divine-1"></div>
            <div className="absolute top-[40%] left-[48%] w-[90px] h-[75px] bg-amber-300/40 rounded-full dome-glow animate-dome-divine-2"></div>
            <div className="absolute top-[41%] left-[48.5%] w-[60px] h-[50px] bg-yellow-200/45 rounded-full dome-glow animate-dome-divine-3"></div>
            
            {/* Dome top sparkle */}
            <div className="absolute top-[39%] left-[50%] w-[5px] h-[5px] bg-white/95 rounded-full dome-sparkle animate-dome-sparkle-1"></div>
            <div className="absolute top-[40%] left-[49%] w-[4px] h-[4px] bg-yellow-200/90 rounded-full dome-sparkle animate-dome-sparkle-2"></div>
            <div className="absolute top-[40%] left-[51%] w-[4px] h-[4px] bg-amber-200/92 rounded-full dome-sparkle animate-dome-sparkle-3"></div>
          </div>

          {/* Central Building Column Sparkles */}
          <div className="absolute inset-0">
            {/* White columns glints */}
            <div className="absolute top-[56%] left-[45%] w-[3px] h-[3px] bg-white/88 rounded-full column-sparkle animate-column-sparkle-1"></div>
            <div className="absolute top-[58%] left-[47%] w-[3px] h-[3px] bg-cyan-100/85 rounded-full column-sparkle animate-column-sparkle-2"></div>
            <div className="absolute top-[60%] left-[49%] w-[4px] h-[4px] bg-white/90 rounded-full column-sparkle animate-column-sparkle-3"></div>
            <div className="absolute top-[58%] left-[51%] w-[3px] h-[3px] bg-cyan-100/87 rounded-full column-sparkle animate-column-sparkle-4"></div>
            <div className="absolute top-[56%] left-[53%] w-[3px] h-[3px] bg-white/88 rounded-full column-sparkle animate-column-sparkle-5"></div>
            <div className="absolute top-[60%] left-[55%] w-[3px] h-[3px] bg-cyan-100/86 rounded-full column-sparkle animate-column-sparkle-6"></div>
          </div>

          {/* Building Window Lights - LEFT SIDE TOP */}
          <div className="absolute inset-0">
            {/* Far left upper buildings */}
            <div className="absolute top-[32%] left-[8%] w-[3px] h-[4px] bg-orange-300/85 rounded window-light animate-window-light-1"></div>
            <div className="absolute top-[35%] left-[6%] w-[3px] h-[4px] bg-yellow-300/82 rounded window-light animate-window-light-2"></div>
            <div className="absolute top-[38%] left-[10%] w-[3px] h-[4px] bg-orange-300/88 rounded window-light animate-window-light-3"></div>
            <div className="absolute top-[42%] left-[7%] w-[3px] h-[4px] bg-yellow-300/84 rounded window-light animate-window-light-4"></div>
            
            {/* Left mid-upper buildings */}
            <div className="absolute top-[28%] left-[15%] w-[3px] h-[4px] bg-orange-300/86 rounded window-light animate-window-light-5"></div>
            <div className="absolute top-[32%] left-[18%] w-[3px] h-[4px] bg-yellow-300/85 rounded window-light animate-window-light-6"></div>
            <div className="absolute top-[36%] left-[14%] w-[3px] h-[4px] bg-orange-300/87 rounded window-light animate-window-light-7"></div>
            <div className="absolute top-[40%] left-[20%] w-[3px] h-[4px] bg-yellow-300/83 rounded window-light animate-window-light-8"></div>
          </div>

          {/* Building Window Lights - LEFT SIDE BOTTOM */}
          <div className="absolute inset-0">
            {/* Far left lower buildings */}
            <div className="absolute top-[52%] left-[8%] w-[3px] h-[4px] bg-yellow-300/86 rounded window-light animate-window-light-9"></div>
            <div className="absolute top-[56%] left-[6%] w-[3px] h-[4px] bg-orange-300/84 rounded window-light animate-window-light-10"></div>
            <div className="absolute top-[60%] left-[10%] w-[3px] h-[4px] bg-yellow-300/88 rounded window-light animate-window-light-11"></div>
            
            {/* Left-center lower buildings */}
            <div className="absolute top-[50%] left-[16%] w-[3px] h-[4px] bg-orange-300/85 rounded window-light animate-window-light-12"></div>
            <div className="absolute top-[54%] left-[20%] w-[3px] h-[4px] bg-yellow-300/87 rounded window-light animate-window-light-13"></div>
            <div className="absolute top-[58%] left-[25%] w-[3px] h-[4px] bg-orange-300/83 rounded window-light animate-window-light-14"></div>
            <div className="absolute top-[62%] left-[28%] w-[3px] h-[4px] bg-yellow-300/86 rounded window-light animate-window-light-15"></div>
          </div>

          {/* Building Window Lights - RIGHT SIDE TOP */}
          <div className="absolute inset-0">
            {/* Right mid-upper buildings */}
            <div className="absolute top-[28%] left-[82%] w-[3px] h-[4px] bg-yellow-300/85 rounded window-light animate-window-light-16"></div>
            <div className="absolute top-[32%] left-[85%] w-[3px] h-[4px] bg-orange-300/86 rounded window-light animate-window-light-17"></div>
            <div className="absolute top-[36%] left-[88%] w-[3px] h-[4px] bg-yellow-300/84 rounded window-light animate-window-light-18"></div>
            <div className="absolute top-[40%] left-[90%] w-[3px] h-[4px] bg-orange-300/87 rounded window-light animate-window-light-19"></div>
            
            {/* Far right upper buildings */}
            <div className="absolute top-[32%] left-[92%] w-[3px] h-[4px] bg-yellow-300/83 rounded window-light animate-window-light-20"></div>
            <div className="absolute top-[35%] left-[94%] w-[3px] h-[4px] bg-orange-300/85 rounded window-light animate-window-light-21"></div>
            <div className="absolute top-[38%] left-[90%] w-[3px] h-[4px] bg-yellow-300/88 rounded window-light animate-window-light-22"></div>
          </div>

          {/* Building Window Lights - RIGHT SIDE BOTTOM */}
          <div className="absolute inset-0">
            {/* Right-center lower buildings */}
            <div className="absolute top-[50%] left-[70%] w-[3px] h-[4px] bg-orange-300/86 rounded window-light animate-window-light-23"></div>
            <div className="absolute top-[54%] left-[75%] w-[3px] h-[4px] bg-yellow-300/84 rounded window-light animate-window-light-24"></div>
            <div className="absolute top-[58%] left-[72%] w-[3px] h-[4px] bg-orange-300/88 rounded window-light animate-window-light-25"></div>
            
            {/* Far right lower buildings */}
            <div className="absolute top-[52%] left-[82%] w-[3px] h-[4px] bg-yellow-300/85 rounded window-light animate-window-light-26"></div>
            <div className="absolute top-[56%] left-[88%] w-[3px] h-[4px] bg-orange-300/87 rounded window-light animate-window-light-27"></div>
            <div className="absolute top-[60%] left-[85%] w-[3px] h-[4px] bg-yellow-300/83 rounded window-light animate-window-light-28"></div>
            <div className="absolute top-[64%] left-[92%] w-[3px] h-[4px] bg-orange-300/86 rounded window-light animate-window-light-29"></div>
            <div className="absolute top-[68%] left-[94%] w-[3px] h-[4px] bg-yellow-300/84 rounded window-light animate-window-light-30"></div>
          </div>

          {/* Street Lamp Glows */}
          <div className="absolute inset-0">
            {/* Left side lamps */}
            <div className="absolute top-[64%] left-[38%] w-[8px] h-[10px] bg-yellow-300/70 rounded-full lamp-glow animate-lamp-glow-1"></div>
            <div className="absolute top-[64%] left-[42%] w-[8px] h-[10px] bg-amber-300/68 rounded-full lamp-glow animate-lamp-glow-2"></div>
            
            {/* Right side lamps */}
            <div className="absolute top-[64%] left-[58%] w-[8px] h-[10px] bg-yellow-300/72 rounded-full lamp-glow animate-lamp-glow-3"></div>
            <div className="absolute top-[64%] left-[62%] w-[8px] h-[10px] bg-amber-300/70 rounded-full lamp-glow animate-lamp-glow-4"></div>
          </div>

          {/* Foreground Building Window Lights - Left */}
          <div className="absolute inset-0">
            <div className="absolute top-[58%] left-[12%] w-[4px] h-[5px] bg-yellow-300/90 rounded window-light animate-window-light-fg-1"></div>
            <div className="absolute top-[62%] left-[10%] w-[4px] h-[5px] bg-orange-300/88 rounded window-light animate-window-light-fg-2"></div>
            <div className="absolute top-[66%] left-[14%] w-[4px] h-[5px] bg-yellow-300/92 rounded window-light animate-window-light-fg-3"></div>
            <div className="absolute top-[70%] left-[11%] w-[4px] h-[5px] bg-orange-300/90 rounded window-light animate-window-light-fg-4"></div>
          </div>

          {/* Foreground Building Window Lights - Right */}
          <div className="absolute inset-0">
            <div className="absolute top-[58%] left-[82%] w-[4px] h-[5px] bg-orange-300/90 rounded window-light animate-window-light-fg-5"></div>
            <div className="absolute top-[62%] left-[85%] w-[4px] h-[5px] bg-yellow-300/88 rounded window-light animate-window-light-fg-6"></div>
            <div className="absolute top-[66%] left-[88%] w-[4px] h-[5px] bg-orange-300/92 rounded window-light animate-window-light-fg-7"></div>
            <div className="absolute top-[70%] left-[86%] w-[4px] h-[5px] bg-yellow-300/90 rounded window-light animate-window-light-fg-8"></div>
          </div>

          {/* Chimney Smoke Plumes */}
          <div className="absolute inset-0">
            {/* Left side chimneys */}
            <div className="absolute top-[26%] left-[8%] w-[20px] h-[26px] bg-gray-300/18 rounded-full smoke animate-smoke-rise-1"></div>
            <div className="absolute top-[28%] left-[14%] w-[22px] h-[28px] bg-gray-400/16 rounded-full smoke animate-smoke-rise-2"></div>
            <div className="absolute top-[24%] left-[20%] w-[20px] h-[25px] bg-gray-300/19 rounded-full smoke animate-smoke-rise-3"></div>
            
            {/* Right side chimneys */}
            <div className="absolute top-[26%] left-[78%] w-[21px] h-[27px] bg-gray-300/17 rounded-full smoke animate-smoke-rise-4"></div>
            <div className="absolute top-[28%] left-[85%] w-[22px] h-[28px] bg-gray-400/18 rounded-full smoke animate-smoke-rise-5"></div>
            <div className="absolute top-[24%] left-[92%] w-[20px] h-[26px] bg-gray-300/19 rounded-full smoke animate-smoke-rise-6"></div>
          </div>

          {/* Foliage Shimmer */}
          <div className="absolute inset-0">
            {/* Foreground tree foliage - left */}
            <div className="absolute top-[8%] left-[2%] w-[60px] h-[55px] bg-green-300/14 rounded-full foliage-glow animate-foliage-glow-1"></div>
            <div className="absolute top-[15%] left-[5%] w-[55px] h-[50px] bg-emerald-300/12 rounded-full foliage-glow animate-foliage-glow-2"></div>
            
            {/* Foreground tree foliage - right */}
            <div className="absolute top-[8%] right-[2%] w-[65px] h-[58px] bg-green-300/15 rounded-full foliage-glow animate-foliage-glow-3"></div>
            <div className="absolute top-[15%] right-[5%] w-[58px] h-[52px] bg-emerald-300/13 rounded-full foliage-glow animate-foliage-glow-4"></div>
            
            {/* Background trees */}
            <div className="absolute top-[18%] left-[25%] w-[40px] h-[38px] bg-green-300/10 rounded-full foliage-glow animate-foliage-glow-5"></div>
            <div className="absolute top-[20%] left-[65%] w-[42px] h-[40px] bg-emerald-300/11 rounded-full foliage-glow animate-foliage-glow-6"></div>
          </div>

          {/* Floating Golden Particles */}
          <div className="absolute inset-0">
            {/* Around dome area */}
            <div className="absolute top-[42%] left-[42%] w-[3px] h-[3px] bg-yellow-300/75 rounded-full dust-particle animate-golden-dust-1"></div>
            <div className="absolute top-[45%] left-[46%] w-[3px] h-[3px] bg-amber-300/70 rounded-full dust-particle animate-golden-dust-2"></div>
            <div className="absolute top-[48%] left-[50%] w-[4px] h-[4px] bg-yellow-300/80 rounded-full dust-particle animate-golden-dust-3"></div>
            <div className="absolute top-[45%] left-[54%] w-[3px] h-[3px] bg-amber-300/72 rounded-full dust-particle animate-golden-dust-4"></div>
            <div className="absolute top-[42%] left-[58%] w-[3px] h-[3px] bg-yellow-300/75 rounded-full dust-particle animate-golden-dust-5"></div>
            
            {/* Lower area particles */}
            <div className="absolute top-[65%] left-[30%] w-[2px] h-[2px] bg-amber-300/60 rounded-full dust-particle animate-golden-dust-6"></div>
            <div className="absolute top-[68%] left-[50%] w-[2px] h-[2px] bg-yellow-300/65 rounded-full dust-particle animate-golden-dust-7"></div>
            <div className="absolute top-[66%] left-[70%] w-[2px] h-[2px] bg-amber-300/62 rounded-full dust-particle animate-golden-dust-8"></div>
          </div>

          {/* Localized Sun Rays */}
          <div className="absolute inset-0">
            {/* Focused beams on dome */}
            <div className="absolute top-[0%] left-[42%] w-[80px] h-[45%] bg-gradient-to-b from-yellow-200/18 via-amber-100/10 to-transparent sun-ray animate-sun-ray-1"></div>
            <div className="absolute top-[0%] left-[52%] w-[90px] h-[48%] bg-gradient-to-b from-amber-200/20 via-yellow-100/12 to-transparent sun-ray animate-sun-ray-2"></div>
          </div>
        </div>
        
        <style jsx>{`
          .dome-glow {
            filter: blur(38px);
          }
          
          .dome-sparkle {
            box-shadow: 0 0 35px currentColor, 0 0 70px currentColor, 0 0 105px currentColor;
            filter: blur(0.3px);
          }
          
          .column-sparkle {
            box-shadow: 0 0 25px currentColor, 0 0 50px currentColor, 0 0 75px currentColor;
            filter: blur(0.3px);
          }
          
          .window-light {
            filter: blur(4px);
            box-shadow: 0 0 18px currentColor, 0 0 36px currentColor, 0 0 54px currentColor;
          }
          
          .lamp-glow {
            filter: blur(8px);
            box-shadow: 0 0 25px currentColor, 0 0 50px currentColor;
          }
          
          .smoke {
            filter: blur(15px);
            opacity: 0;
          }
          
          .foliage-glow {
            filter: blur(25px);
          }
          
          .dust-particle {
            box-shadow: 0 0 12px currentColor, 0 0 24px currentColor;
            filter: blur(0.5px);
          }
          
          .sun-ray {
            filter: blur(35px);
            opacity: 0;
          }
          
          .animate-effects .dome-glow {
            animation-play-state: running;
          }
          
          .animate-effects .dome-sparkle {
            animation-play-state: running;
          }
          
          .animate-effects .column-sparkle {
            animation-play-state: running;
          }
          
          .animate-effects .window-light {
            animation-play-state: running;
          }
          
          .animate-effects .lamp-glow {
            animation-play-state: running;
          }
          
          .animate-effects .smoke {
            animation-play-state: running;
          }
          
          .animate-effects .foliage-glow {
            animation-play-state: running;
          }
          
          .animate-effects .dust-particle {
            animation-play-state: running;
          }
          
          .animate-effects .sun-ray {
            animation-play-state: running;
          }
          
          @keyframes dome-divine-1 {
            0%, 100% { opacity: 0.35; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.25); }
          }
          
          @keyframes dome-divine-2 {
            0%, 100% { opacity: 0.4; transform: scale(1) rotate(0deg); }
            60% { opacity: 0.65; transform: scale(1.3) rotate(180deg); }
          }
          
          @keyframes dome-divine-3 {
            0%, 100% { opacity: 0.45; transform: scale(1); }
            55% { opacity: 0.7; transform: scale(1.35); }
          }
          
          @keyframes dome-sparkle-1 {
            0%, 60%, 100% { opacity: 0; transform: scale(1); }
            65%, 75% { opacity: 1; transform: scale(2.8); }
            70% { opacity: 0.65; transform: scale(2.3); }
          }
          
          @keyframes dome-sparkle-2 {
            0%, 65%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            70%, 80% { opacity: 0.95; transform: scale(2.6) rotate(360deg); }
            75% { opacity: 0.6; transform: scale(2.1) rotate(180deg); }
          }
          
          @keyframes dome-sparkle-3 {
            0%, 68%, 100% { opacity: 0; transform: scale(1); }
            73%, 83% { opacity: 0.98; transform: scale(2.7); }
            78% { opacity: 0.62; transform: scale(2.2); }
          }
          
          @keyframes column-sparkle-1 {
            0%, 70%, 100% { opacity: 0; transform: scale(1); }
            75%, 85% { opacity: 0.88; transform: scale(2.2); }
            80% { opacity: 0.52; transform: scale(1.8); }
          }
          
          @keyframes column-sparkle-2 {
            0%, 72%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            77%, 87% { opacity: 0.85; transform: scale(2.1) rotate(360deg); }
            82% { opacity: 0.5; transform: scale(1.7) rotate(180deg); }
          }
          
          @keyframes column-sparkle-3 {
            0%, 65%, 100% { opacity: 0; transform: scale(1); }
            70%, 80% { opacity: 0.9; transform: scale(2.3); }
            75% { opacity: 0.55; transform: scale(1.9); }
          }
          
          @keyframes column-sparkle-4 {
            0%, 74%, 100% { opacity: 0; transform: scale(1); }
            79%, 89% { opacity: 0.87; transform: scale(2.15); }
            84% { opacity: 0.52; transform: scale(1.75); }
          }
          
          @keyframes column-sparkle-5 {
            0%, 68%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            73%, 83% { opacity: 0.88; transform: scale(2.2) rotate(360deg); }
            78% { opacity: 0.53; transform: scale(1.8) rotate(180deg); }
          }
          
          @keyframes column-sparkle-6 {
            0%, 76%, 100% { opacity: 0; transform: scale(1); }
            81%, 91% { opacity: 0.86; transform: scale(2.18); }
            86% { opacity: 0.51; transform: scale(1.78); }
          }
          
          @keyframes window-light-1 {
            0%, 100% { opacity: 0.85; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes window-light-2 {
            0%, 100% { opacity: 0.82; transform: scale(1); }
            60% { opacity: 1; transform: scale(1.38); }
          }
          
          @keyframes window-light-3 {
            0%, 100% { opacity: 0.88; transform: scale(1); }
            55% { opacity: 1; transform: scale(1.42); }
          }
          
          @keyframes window-light-4 {
            0%, 100% { opacity: 0.84; transform: scale(1); }
            52% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes window-light-5 {
            0%, 100% { opacity: 0.86; transform: scale(1); }
            58% { opacity: 1; transform: scale(1.38); }
          }
          
          @keyframes window-light-6 {
            0%, 100% { opacity: 0.85; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.42); }
          }
          
          @keyframes window-light-7 {
            0%, 100% { opacity: 0.87; transform: scale(1); }
            54% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes window-light-8 {
            0%, 100% { opacity: 0.83; transform: scale(1); }
            56% { opacity: 1; transform: scale(1.38); }
          }
          
          @keyframes window-light-9 {
            0%, 100% { opacity: 0.86; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes window-light-10 {
            0%, 100% { opacity: 0.84; transform: scale(1); }
            62% { opacity: 1; transform: scale(1.38); }
          }
          
          @keyframes window-light-11 {
            0%, 100% { opacity: 0.88; transform: scale(1); }
            56% { opacity: 1; transform: scale(1.42); }
          }
          
          @keyframes window-light-12 {
            0%, 100% { opacity: 0.85; transform: scale(1); }
            52% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes window-light-13 {
            0%, 100% { opacity: 0.87; transform: scale(1); }
            58% { opacity: 1; transform: scale(1.38); }
          }
          
          @keyframes window-light-14 {
            0%, 100% { opacity: 0.83; transform: scale(1); }
            54% { opacity: 1; transform: scale(1.42); }
          }
          
          @keyframes window-light-15 {
            0%, 100% { opacity: 0.86; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes window-light-16 {
            0%, 100% { opacity: 0.85; transform: scale(1); }
            57% { opacity: 1; transform: scale(1.38); }
          }
          
          @keyframes window-light-17 {
            0%, 100% { opacity: 0.86; transform: scale(1); }
            52% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes window-light-18 {
            0%, 100% { opacity: 0.84; transform: scale(1); }
            56% { opacity: 1; transform: scale(1.38); }
          }
          
          @keyframes window-light-19 {
            0%, 100% { opacity: 0.87; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.42); }
          }
          
          @keyframes window-light-20 {
            0%, 100% { opacity: 0.83; transform: scale(1); }
            54% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes window-light-21 {
            0%, 100% { opacity: 0.85; transform: scale(1); }
            58% { opacity: 1; transform: scale(1.38); }
          }
          
          @keyframes window-light-22 {
            0%, 100% { opacity: 0.88; transform: scale(1); }
            52% { opacity: 1; transform: scale(1.42); }
          }
          
          @keyframes window-light-23 {
            0%, 100% { opacity: 0.86; transform: scale(1); }
            56% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes window-light-24 {
            0%, 100% { opacity: 0.84; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.38); }
          }
          
          @keyframes window-light-25 {
            0%, 100% { opacity: 0.88; transform: scale(1); }
            54% { opacity: 1; transform: scale(1.42); }
          }
          
          @keyframes window-light-26 {
            0%, 100% { opacity: 0.85; transform: scale(1); }
            58% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes window-light-27 {
            0%, 100% { opacity: 0.87; transform: scale(1); }
            52% { opacity: 1; transform: scale(1.38); }
          }
          
          @keyframes window-light-28 {
            0%, 100% { opacity: 0.83; transform: scale(1); }
            56% { opacity: 1; transform: scale(1.42); }
          }
          
          @keyframes window-light-29 {
            0%, 100% { opacity: 0.86; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes window-light-30 {
            0%, 100% { opacity: 0.84; transform: scale(1); }
            54% { opacity: 1; transform: scale(1.38); }
          }
          
          @keyframes window-light-fg-1 {
            0%, 100% { opacity: 0.9; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.45); }
          }
          
          @keyframes window-light-fg-2 {
            0%, 100% { opacity: 0.88; transform: scale(1); }
            60% { opacity: 1; transform: scale(1.42); }
          }
          
          @keyframes window-light-fg-3 {
            0%, 100% { opacity: 0.92; transform: scale(1); }
            55% { opacity: 1; transform: scale(1.48); }
          }
          
          @keyframes window-light-fg-4 {
            0%, 100% { opacity: 0.9; transform: scale(1); }
            58% { opacity: 1; transform: scale(1.44); }
          }
          
          @keyframes window-light-fg-5 {
            0%, 100% { opacity: 0.9; transform: scale(1); }
            52% { opacity: 1; transform: scale(1.46); }
          }
          
          @keyframes window-light-fg-6 {
            0%, 100% { opacity: 0.88; transform: scale(1); }
            56% { opacity: 1; transform: scale(1.43); }
          }
          
          @keyframes window-light-fg-7 {
            0%, 100% { opacity: 0.92; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.48); }
          }
          
          @keyframes window-light-fg-8 {
            0%, 100% { opacity: 0.9; transform: scale(1); }
            54% { opacity: 1; transform: scale(1.45); }
          }
          
          @keyframes lamp-glow-1 {
            0%, 100% { opacity: 0.7; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.35); }
          }
          
          @keyframes lamp-glow-2 {
            0%, 100% { opacity: 0.68; transform: scale(1); }
            60% { opacity: 1; transform: scale(1.32); }
          }
          
          @keyframes lamp-glow-3 {
            0%, 100% { opacity: 0.72; transform: scale(1); }
            55% { opacity: 1; transform: scale(1.38); }
          }
          
          @keyframes lamp-glow-4 {
            0%, 100% { opacity: 0.7; transform: scale(1); }
            58% { opacity: 1; transform: scale(1.34); }
          }
          
          @keyframes smoke-rise-1 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) scale(0.8); }
            30% { opacity: 0.28; transform: translateY(-32px) translateX(6px) scale(1.15); }
            60% { opacity: 0.14; transform: translateY(-64px) translateX(12px) scale(1.48); }
            100% { opacity: 0; transform: translateY(-96px) translateX(18px) scale(1.88); }
          }
          
          @keyframes smoke-rise-2 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) scale(0.8); }
            30% { opacity: 0.3; transform: translateY(-35px) translateX(-5px) scale(1.18); }
            60% { opacity: 0.15; transform: translateY(-70px) translateX(-10px) scale(1.52); }
            100% { opacity: 0; transform: translateY(-105px) translateX(-15px) scale(1.92); }
          }
          
          @keyframes smoke-rise-3 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) scale(0.8); }
            30% { opacity: 0.27; transform: translateY(-30px) translateX(7px) scale(1.12); }
            60% { opacity: 0.14; transform: translateY(-60px) translateX(13px) scale(1.45); }
            100% { opacity: 0; transform: translateY(-90px) translateX(19px) scale(1.85); }
          }
          
          @keyframes smoke-rise-4 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) scale(0.8); }
            30% { opacity: 0.27; transform: translateY(-33px) translateX(-6px) scale(1.16); }
            60% { opacity: 0.14; transform: translateY(-66px) translateX(-11px) scale(1.5); }
            100% { opacity: 0; transform: translateY(-99px) translateX(-16px) scale(1.9); }
          }
          
          @keyframes smoke-rise-5 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) scale(0.8); }
            30% { opacity: 0.29; transform: translateY(-36px) translateX(8px) scale(1.19); }
            60% { opacity: 0.15; transform: translateY(-72px) translateX(14px) scale(1.53); }
            100% { opacity: 0; transform: translateY(-108px) translateX(20px) scale(1.93); }
          }
          
          @keyframes smoke-rise-6 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) scale(0.8); }
            30% { opacity: 0.28; transform: translateY(-31px) translateX(-7px) scale(1.14); }
            60% { opacity: 0.14; transform: translateY(-62px) translateX(-13px) scale(1.47); }
            100% { opacity: 0; transform: translateY(-93px) translateX(-19px) scale(1.87); }
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
            0%, 100% { opacity: 0.15; transform: scale(1); }
            55% { opacity: 0.3; transform: scale(1.2); }
          }
          
          @keyframes foliage-glow-4 {
            0%, 100% { opacity: 0.13; transform: scale(1); }
            58% { opacity: 0.28; transform: scale(1.17); }
          }
          
          @keyframes foliage-glow-5 {
            0%, 100% { opacity: 0.1; transform: scale(1); }
            52% { opacity: 0.22; transform: scale(1.14); }
          }
          
          @keyframes foliage-glow-6 {
            0%, 100% { opacity: 0.11; transform: scale(1); }
            56% { opacity: 0.24; transform: scale(1.16); }
          }
          
          @keyframes golden-dust-1 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.75; transform: translateY(-60px) translateX(25px) rotate(180deg); }
          }
          
          @keyframes golden-dust-2 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.7; transform: translateY(-55px) translateX(-22px) rotate(200deg); }
          }
          
          @keyframes golden-dust-3 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.8; transform: translateY(-65px) translateX(28px) rotate(190deg); }
          }
          
          @keyframes golden-dust-4 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.72; transform: translateY(-58px) translateX(-24px) rotate(210deg); }
          }
          
          @keyframes golden-dust-5 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.75; transform: translateY(-62px) translateX(26px) rotate(195deg); }
          }
          
          @keyframes golden-dust-6 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.6; transform: translateY(-48px) translateX(18px); }
          }
          
          @keyframes golden-dust-7 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.65; transform: translateY(-50px) translateX(-16px); }
          }
          
          @keyframes golden-dust-8 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.62; transform: translateY(-52px) translateX(20px); }
          }
          
          @keyframes sun-ray-1 {
            0%, 100% { opacity: 0; transform: translateY(0px); }
            50% { opacity: 0.28; transform: translateY(-15px); }
          }
          
          @keyframes sun-ray-2 {
            0%, 100% { opacity: 0; transform: translateY(0px); }
            60% { opacity: 0.32; transform: translateY(-18px); }
          }
          
          .animate-dome-divine-1 { animation: dome-divine-1 5s ease-in-out infinite; }
          .animate-dome-divine-2 { animation: dome-divine-2 6s ease-in-out infinite 1s; }
          .animate-dome-divine-3 { animation: dome-divine-3 7s ease-in-out infinite 2s; }
          
          .animate-dome-sparkle-1 { animation: dome-sparkle-1 9s linear infinite; }
          .animate-dome-sparkle-2 { animation: dome-sparkle-2 10s linear infinite 2s; }
          .animate-dome-sparkle-3 { animation: dome-sparkle-3 9.5s linear infinite 4s; }
          
          .animate-column-sparkle-1 { animation: column-sparkle-1 8s linear infinite; }
          .animate-column-sparkle-2 { animation: column-sparkle-2 9s linear infinite 1.5s; }
          .animate-column-sparkle-3 { animation: column-sparkle-3 7.5s linear infinite 3s; }
          .animate-column-sparkle-4 { animation: column-sparkle-4 8.5s linear infinite 4.5s; }
          .animate-column-sparkle-5 { animation: column-sparkle-5 10s linear infinite 2s; }
          .animate-column-sparkle-6 { animation: column-sparkle-6 8.8s linear infinite 5.5s; }
          
          .animate-window-light-1 { animation: window-light-1 5s ease-in-out infinite; }
          .animate-window-light-2 { animation: window-light-2 5.5s ease-in-out infinite 0.5s; }
          .animate-window-light-3 { animation: window-light-3 5.2s ease-in-out infinite 1s; }
          .animate-window-light-4 { animation: window-light-4 5.8s ease-in-out infinite 1.5s; }
          .animate-window-light-5 { animation: window-light-5 5.3s ease-in-out infinite 2s; }
          .animate-window-light-6 { animation: window-light-6 5.6s ease-in-out infinite 2.5s; }
          .animate-window-light-7 { animation: window-light-7 5.4s ease-in-out infinite 3s; }
          .animate-window-light-8 { animation: window-light-8 5.7s ease-in-out infinite 3.5s; }
          .animate-window-light-9 { animation: window-light-9 5.1s ease-in-out infinite 4s; }
          .animate-window-light-10 { animation: window-light-10 5.9s ease-in-out infinite 0.8s; }
          .animate-window-light-11 { animation: window-light-11 5.5s ease-in-out infinite 1.3s; }
          .animate-window-light-12 { animation: window-light-12 5.3s ease-in-out infinite 1.8s; }
          .animate-window-light-13 { animation: window-light-13 5.8s ease-in-out infinite 2.3s; }
          .animate-window-light-14 { animation: window-light-14 5.2s ease-in-out infinite 2.8s; }
          .animate-window-light-15 { animation: window-light-15 5.6s ease-in-out infinite 3.3s; }
          .animate-window-light-16 { animation: window-light-16 5.4s ease-in-out infinite 3.8s; }
          .animate-window-light-17 { animation: window-light-17 5.7s ease-in-out infinite 0.6s; }
          .animate-window-light-18 { animation: window-light-18 5.1s ease-in-out infinite 1.2s; }
          .animate-window-light-19 { animation: window-light-19 5.9s ease-in-out infinite 1.7s; }
          .animate-window-light-20 { animation: window-light-20 5.3s ease-in-out infinite 2.2s; }
          .animate-window-light-21 { animation: window-light-21 5.5s ease-in-out infinite 2.7s; }
          .animate-window-light-22 { animation: window-light-22 5.8s ease-in-out infinite 3.2s; }
          .animate-window-light-23 { animation: window-light-23 5.2s ease-in-out infinite 3.7s; }
          .animate-window-light-24 { animation: window-light-24 5.6s ease-in-out infinite 4.2s; }
          .animate-window-light-25 { animation: window-light-25 5.4s ease-in-out infinite 0.9s; }
          .animate-window-light-26 { animation: window-light-26 5.7s ease-in-out infinite 1.4s; }
          .animate-window-light-27 { animation: window-light-27 5.1s ease-in-out infinite 1.9s; }
          .animate-window-light-28 { animation: window-light-28 5.9s ease-in-out infinite 2.4s; }
          .animate-window-light-29 { animation: window-light-29 5.3s ease-in-out infinite 2.9s; }
          .animate-window-light-30 { animation: window-light-30 5.5s ease-in-out infinite 3.4s; }
          
          .animate-window-light-fg-1 { animation: window-light-fg-1 4.8s ease-in-out infinite; }
          .animate-window-light-fg-2 { animation: window-light-fg-2 5.2s ease-in-out infinite 0.8s; }
          .animate-window-light-fg-3 { animation: window-light-fg-3 4.9s ease-in-out infinite 1.6s; }
          .animate-window-light-fg-4 { animation: window-light-fg-4 5.3s ease-in-out infinite 2.4s; }
          .animate-window-light-fg-5 { animation: window-light-fg-5 5s ease-in-out infinite 3.2s; }
          .animate-window-light-fg-6 { animation: window-light-fg-6 5.1s ease-in-out infinite 4s; }
          .animate-window-light-fg-7 { animation: window-light-fg-7 4.8s ease-in-out infinite 0.4s; }
          .animate-window-light-fg-8 { animation: window-light-fg-8 5.2s ease-in-out infinite 1.2s; }
          
          .animate-lamp-glow-1 { animation: lamp-glow-1 4s ease-in-out infinite; }
          .animate-lamp-glow-2 { animation: lamp-glow-2 4.5s ease-in-out infinite 1s; }
          .animate-lamp-glow-3 { animation: lamp-glow-3 4.2s ease-in-out infinite 2s; }
          .animate-lamp-glow-4 { animation: lamp-glow-4 4.7s ease-in-out infinite 0.5s; }
          
          .animate-smoke-rise-1 { animation: smoke-rise-1 7s ease-out infinite; }
          .animate-smoke-rise-2 { animation: smoke-rise-2 8s ease-out infinite 1.5s; }
          .animate-smoke-rise-3 { animation: smoke-rise-3 7.5s ease-out infinite 3s; }
          .animate-smoke-rise-4 { animation: smoke-rise-4 8.5s ease-out infinite 0.8s; }
          .animate-smoke-rise-5 { animation: smoke-rise-5 7.8s ease-out infinite 4s; }
          .animate-smoke-rise-6 { animation: smoke-rise-6 8.2s ease-out infinite 2s; }
          
          .animate-foliage-glow-1 { animation: foliage-glow-1 10s ease-in-out infinite; }
          .animate-foliage-glow-2 { animation: foliage-glow-2 11s ease-in-out infinite 2s; }
          .animate-foliage-glow-3 { animation: foliage-glow-3 10.5s ease-in-out infinite 4s; }
          .animate-foliage-glow-4 { animation: foliage-glow-4 11.5s ease-in-out infinite 1s; }
          .animate-foliage-glow-5 { animation: foliage-glow-5 9.5s ease-in-out infinite 3s; }
          .animate-foliage-glow-6 { animation: foliage-glow-6 12s ease-in-out infinite 5s; }
          
          .animate-golden-dust-1 { animation: golden-dust-1 15s ease-in-out infinite; }
          .animate-golden-dust-2 { animation: golden-dust-2 17s ease-in-out infinite 3s; }
          .animate-golden-dust-3 { animation: golden-dust-3 16s ease-in-out infinite 6s; }
          .animate-golden-dust-4 { animation: golden-dust-4 18s ease-in-out infinite 2s; }
          .animate-golden-dust-5 { animation: golden-dust-5 15.5s ease-in-out infinite 8s; }
          .animate-golden-dust-6 { animation: golden-dust-6 19s ease-in-out infinite 4s; }
          .animate-golden-dust-7 { animation: golden-dust-7 17.5s ease-in-out infinite 7s; }
          .animate-golden-dust-8 { animation: golden-dust-8 16.5s ease-in-out infinite 9s; }
          
          .animate-sun-ray-1 { animation: sun-ray-1 16s ease-in-out infinite; }
          .animate-sun-ray-2 { animation: sun-ray-2 18s ease-in-out infinite 5s; }
        `}</style>
      </div>
    </Card>
  );
}

