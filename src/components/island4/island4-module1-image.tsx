"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Island4Module1Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        {/* Base image */}
        <Image
          src="/islands/island4/island4-module1-image.webp"
          alt="DeFi Fundamentals & Simple Swaps - Gilded Bastion Adventure"
          fill
          className="object-cover"
          priority
        />
        
        {/* EPIC Animated overlay effects */}
        <div className="absolute inset-0 animate-effects">
          {/* LEGENDARY Knight Statue Divine Aura */}
          <div className="absolute inset-0">
            {/* Epic statue power glow */}
            <div className="absolute top-[30%] left-[46%] w-[140px] h-[200px] bg-yellow-200/25 rounded-full statue-aura animate-statue-divine-1"></div>
            <div className="absolute top-[32%] left-[47%] w-[110px] h-[160px] bg-amber-300/22 rounded-full statue-aura animate-statue-divine-2"></div>
            <div className="absolute top-[34%] left-[48%] w-[80px] h-[120px] bg-yellow-100/20 rounded-full statue-aura animate-statue-divine-3"></div>
            
            {/* Divine light beams from statue */}
            <div className="absolute top-[28%] left-[49%] w-[30px] h-[180px] bg-gradient-to-b from-yellow-200/30 via-amber-200/20 to-transparent statue-beam animate-statue-beam-1"></div>
            <div className="absolute top-[30%] left-[50%] w-[20px] h-[160px] bg-gradient-to-b from-white/35 via-yellow-100/25 to-transparent statue-beam animate-statue-beam-2"></div>
          </div>

          {/* Statue Armor Sparkles - INTENSE */}
          <div className="absolute inset-0">
            {/* Helmet sparkles */}
            <div className="absolute top-[32%] left-[49%] w-[4px] h-[4px] bg-white/95 rounded-full armor-sparkle animate-armor-sparkle-1"></div>
            <div className="absolute top-[33%] left-[50.5%] w-[3px] h-[3px] bg-yellow-200/90 rounded-full armor-sparkle animate-armor-sparkle-2"></div>
            
            {/* Chest/sword sparkles */}
            <div className="absolute top-[42%] left-[49.5%] w-[5px] h-[5px] bg-white/98 rounded-full armor-sparkle animate-armor-sparkle-3"></div>
            <div className="absolute top-[45%] left-[50%] w-[4px] h-[4px] bg-amber-200/92 rounded-full armor-sparkle animate-armor-sparkle-4"></div>
            <div className="absolute top-[48%] left-[49%] w-[4px] h-[4px] bg-white/95 rounded-full armor-sparkle animate-armor-sparkle-5"></div>
            
            {/* Shield/arm sparkles */}
            <div className="absolute top-[40%] left-[47%] w-[3px] h-[3px] bg-yellow-200/90 rounded-full armor-sparkle animate-armor-sparkle-6"></div>
            <div className="absolute top-[44%] left-[51.5%] w-[4px] h-[4px] bg-white/93 rounded-full armor-sparkle animate-armor-sparkle-7"></div>
          </div>

          {/* House Window Lights - LEFT SIDE */}
          <div className="absolute inset-0">
            {/* Far left house */}
            <div className="absolute top-[42%] left-[10%] w-[3px] h-[4px] bg-orange-300/85 rounded window-light animate-window-light-1"></div>
            <div className="absolute top-[44%] left-[12%] w-[3px] h-[4px] bg-yellow-300/80 rounded window-light animate-window-light-2"></div>
            <div className="absolute top-[48%] left-[11%] w-[3px] h-[4px] bg-orange-300/82 rounded window-light animate-window-light-3"></div>
            
            {/* Left center buildings */}
            <div className="absolute top-[46%] left-[22%] w-[3px] h-[4px] bg-yellow-300/88 rounded window-light animate-window-light-4"></div>
            <div className="absolute top-[48%] left-[20%] w-[3px] h-[4px] bg-orange-300/85 rounded window-light animate-window-light-5"></div>
            <div className="absolute top-[50%] left-[23%] w-[3px] h-[4px] bg-yellow-300/80 rounded window-light animate-window-light-6"></div>
            <div className="absolute top-[52%] left-[21%] w-[3px] h-[4px] bg-orange-300/83 rounded window-light animate-window-light-7"></div>
            
            {/* Center-left near statue */}
            <div className="absolute top-[44%] left-[32%] w-[3px] h-[4px] bg-yellow-300/85 rounded window-light animate-window-light-8"></div>
            <div className="absolute top-[46%] left-[34%] w-[3px] h-[4px] bg-orange-300/87 rounded window-light animate-window-light-9"></div>
            <div className="absolute top-[50%] left-[33%] w-[3px] h-[4px] bg-yellow-300/82 rounded window-light animate-window-light-10"></div>
          </div>

          {/* House Window Lights - RIGHT SIDE */}
          <div className="absolute inset-0">
            {/* Center-right near statue */}
            <div className="absolute top-[44%] left-[66%] w-[3px] h-[4px] bg-orange-300/86 rounded window-light animate-window-light-11"></div>
            <div className="absolute top-[46%] left-[68%] w-[3px] h-[4px] bg-yellow-300/84 rounded window-light animate-window-light-12"></div>
            <div className="absolute top-[50%] left-[67%] w-[3px] h-[4px] bg-orange-300/88 rounded window-light animate-window-light-13"></div>
            
            {/* Right center buildings */}
            <div className="absolute top-[46%] left-[77%] w-[3px] h-[4px] bg-yellow-300/85 rounded window-light animate-window-light-14"></div>
            <div className="absolute top-[48%] left-[79%] w-[3px] h-[4px] bg-orange-300/82 rounded window-light animate-window-light-15"></div>
            <div className="absolute top-[50%] left-[78%] w-[3px] h-[4px] bg-yellow-300/87 rounded window-light animate-window-light-16"></div>
            <div className="absolute top-[52%] left-[80%] w-[3px] h-[4px] bg-orange-300/80 rounded window-light animate-window-light-17"></div>
            
            {/* Far right house */}
            <div className="absolute top-[42%] left-[88%] w-[3px] h-[4px] bg-yellow-300/83 rounded window-light animate-window-light-18"></div>
            <div className="absolute top-[44%] left-[90%] w-[3px] h-[4px] bg-orange-300/85 rounded window-light animate-window-light-19"></div>
            <div className="absolute top-[48%] left-[89%] w-[3px] h-[4px] bg-yellow-300/81 rounded window-light animate-window-light-20"></div>
          </div>

          {/* Chimney Smoke Plumes */}
          <div className="absolute inset-0">
            {/* Left side chimneys */}
            <div className="absolute top-[34%] left-[8%] w-[25px] h-[30px] bg-gray-300/20 rounded-full smoke animate-smoke-rise-1"></div>
            <div className="absolute top-[36%] left-[18%] w-[22px] h-[28px] bg-gray-400/18 rounded-full smoke animate-smoke-rise-2"></div>
            <div className="absolute top-[38%] left-[28%] w-[24px] h-[32px] bg-gray-300/22 rounded-full smoke animate-smoke-rise-3"></div>
            
            {/* Right side chimneys */}
            <div className="absolute top-[38%] left-[72%] w-[23px] h-[30px] bg-gray-300/20 rounded-full smoke animate-smoke-rise-4"></div>
            <div className="absolute top-[36%] left-[82%] w-[25px] h-[28px] bg-gray-400/19 rounded-full smoke animate-smoke-rise-5"></div>
            <div className="absolute top-[34%] left-[92%] w-[22px] h-[32px] bg-gray-300/21 rounded-full smoke animate-smoke-rise-6"></div>
          </div>

          {/* Divine Sun Rays from Sky */}
          <div className="absolute inset-0">
            {/* Major sun beams */}
            <div className="absolute top-[0%] left-[25%] w-[120px] h-[50%] bg-gradient-to-b from-yellow-200/20 via-amber-100/12 to-transparent sun-ray animate-sun-ray-epic-1"></div>
            <div className="absolute top-[0%] left-[45%] w-[150px] h-[55%] bg-gradient-to-b from-amber-200/22 via-yellow-100/14 to-transparent sun-ray animate-sun-ray-epic-2"></div>
            <div className="absolute top-[0%] left-[65%] w-[130px] h-[52%] bg-gradient-to-b from-yellow-100/18 via-amber-100/10 to-transparent sun-ray animate-sun-ray-epic-3"></div>
            
            {/* Full sky glow */}
            <div className="absolute top-[0%] left-[0%] w-full h-[45%] bg-gradient-to-b from-yellow-200/8 via-amber-100/5 to-transparent sky-glow animate-sky-glow"></div>
          </div>

          {/* Floating Golden Dust Particles */}
          <div className="absolute inset-0">
            {/* Large golden particles */}
            <div className="absolute top-[25%] left-[35%] w-[3px] h-[3px] bg-yellow-300/75 rounded-full dust-particle animate-dust-float-1"></div>
            <div className="absolute top-[30%] left-[55%] w-[3px] h-[3px] bg-amber-300/70 rounded-full dust-particle animate-dust-float-2"></div>
            <div className="absolute top-[40%] left-[25%] w-[4px] h-[4px] bg-yellow-200/80 rounded-full dust-particle animate-dust-float-3"></div>
            <div className="absolute top-[35%] left-[70%] w-[3px] h-[3px] bg-amber-200/72 rounded-full dust-particle animate-dust-float-4"></div>
            <div className="absolute top-[45%] left-[45%] w-[4px] h-[4px] bg-yellow-300/78 rounded-full dust-particle animate-dust-float-5"></div>
            
            {/* Medium particles */}
            <div className="absolute top-[28%] left-[42%] w-[2px] h-[2px] bg-yellow-300/65 rounded-full dust-particle animate-dust-float-6"></div>
            <div className="absolute top-[38%] left-[58%] w-[2px] h-[2px] bg-amber-300/68 rounded-full dust-particle animate-dust-float-7"></div>
            <div className="absolute top-[32%] left-[62%] w-[2px] h-[2px] bg-yellow-200/70 rounded-full dust-particle animate-dust-float-8"></div>
            <div className="absolute top-[42%] left-[38%] w-[2px] h-[2px] bg-amber-200/66 rounded-full dust-particle animate-dust-float-9"></div>
            
            {/* Small particles */}
            <div className="absolute top-[22%] left-[48%] w-[2px] h-[2px] bg-yellow-300/60 rounded-full dust-particle animate-dust-float-10"></div>
            <div className="absolute top-[48%] left-[52%] w-[2px] h-[2px] bg-amber-300/62 rounded-full dust-particle animate-dust-float-11"></div>
            <div className="absolute top-[26%] left-[68%] w-[2px] h-[2px] bg-yellow-200/58 rounded-full dust-particle animate-dust-float-12"></div>
          </div>

          {/* Cobblestone Path Shimmer */}
          <div className="absolute inset-0">
            {/* Path light reflections */}
            <div className="absolute top-[68%] left-[42%] w-[30px] h-[15px] bg-yellow-200/18 rounded-full path-shimmer animate-path-shimmer-1"></div>
            <div className="absolute top-[72%] left-[48%] w-[35px] h-[18px] bg-amber-200/15 rounded-full path-shimmer animate-path-shimmer-2"></div>
            <div className="absolute top-[75%] left-[52%] w-[32px] h-[16px] bg-yellow-100/20 rounded-full path-shimmer animate-path-shimmer-3"></div>
            <div className="absolute top-[80%] left-[46%] w-[28px] h-[14px] bg-amber-100/17 rounded-full path-shimmer animate-path-shimmer-4"></div>
          </div>

          {/* Foliage Shimmer - Trees Glowing */}
          <div className="absolute inset-0">
            {/* Left tree foliage */}
            <div className="absolute top-[15%] left-[8%] w-[60px] h-[50px] bg-green-300/12 rounded-full foliage-glow animate-foliage-glow-1"></div>
            <div className="absolute top-[25%] left-[12%] w-[50px] h-[45px] bg-emerald-300/10 rounded-full foliage-glow animate-foliage-glow-2"></div>
            
            {/* Right tree foliage */}
            <div className="absolute top-[15%] right-[8%] w-[55px] h-[48px] bg-green-300/11 rounded-full foliage-glow animate-foliage-glow-3"></div>
            <div className="absolute top-[25%] right-[12%] w-[52px] h-[46px] bg-emerald-300/13 rounded-full foliage-glow animate-foliage-glow-4"></div>
            
            {/* Background trees */}
            <div className="absolute top-[20%] left-[35%] w-[45px] h-[40px] bg-green-300/9 rounded-full foliage-glow animate-foliage-glow-5"></div>
            <div className="absolute top-[22%] right-[35%] w-[48px] h-[42px] bg-emerald-300/10 rounded-full foliage-glow animate-foliage-glow-6"></div>
          </div>
        </div>
        
        <style jsx>{`
          .statue-aura {
            filter: blur(35px);
          }
          
          .statue-beam {
            filter: blur(25px);
            opacity: 0;
          }
          
          .armor-sparkle {
            box-shadow: 0 0 30px currentColor, 0 0 60px currentColor, 0 0 90px currentColor;
            filter: blur(0.3px);
          }
          
          .window-light {
            filter: blur(4px);
            box-shadow: 0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor;
          }
          
          .smoke {
            filter: blur(15px);
            opacity: 0;
          }
          
          .sun-ray {
            filter: blur(40px);
            opacity: 0;
          }
          
          .sky-glow {
            filter: blur(50px);
          }
          
          .dust-particle {
            box-shadow: 0 0 12px currentColor, 0 0 24px currentColor;
            filter: blur(0.5px);
          }
          
          .path-shimmer {
            filter: blur(18px);
          }
          
          .foliage-glow {
            filter: blur(25px);
          }
          
          .animate-effects .statue-aura {
            animation-play-state: running;
          }
          
          .animate-effects .statue-beam {
            animation-play-state: running;
          }
          
          .animate-effects .armor-sparkle {
            animation-play-state: running;
          }
          
          .animate-effects .window-light {
            animation-play-state: running;
          }
          
          .animate-effects .smoke {
            animation-play-state: running;
          }
          
          .animate-effects .sun-ray {
            animation-play-state: running;
          }
          
          .animate-effects .sky-glow {
            animation-play-state: running;
          }
          
          .animate-effects .dust-particle {
            animation-play-state: running;
          }
          
          .animate-effects .path-shimmer {
            animation-play-state: running;
          }
          
          .animate-effects .foliage-glow {
            animation-play-state: running;
          }
          
          @keyframes statue-divine-1 {
            0%, 100% { opacity: 0.25; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.25); }
          }
          
          @keyframes statue-divine-2 {
            0%, 100% { opacity: 0.22; transform: scale(1) rotate(0deg); }
            60% { opacity: 0.45; transform: scale(1.3) rotate(180deg); }
          }
          
          @keyframes statue-divine-3 {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            55% { opacity: 0.4; transform: scale(1.35); }
          }
          
          @keyframes statue-beam-1 {
            0%, 100% { opacity: 0; transform: scaleY(1) scaleX(1); }
            50% { opacity: 0.4; transform: scaleY(1.15) scaleX(1.3); }
          }
          
          @keyframes statue-beam-2 {
            0%, 100% { opacity: 0; transform: scaleY(1) scaleX(1); }
            60% { opacity: 0.5; transform: scaleY(1.2) scaleX(1.4); }
          }
          
          @keyframes armor-sparkle-1 {
            0%, 65%, 100% { opacity: 0; transform: scale(1); }
            70%, 80% { opacity: 1; transform: scale(2.4); }
            75% { opacity: 0.6; transform: scale(2); }
          }
          
          @keyframes armor-sparkle-2 {
            0%, 70%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            75%, 85% { opacity: 0.95; transform: scale(2.2) rotate(360deg); }
            80% { opacity: 0.55; transform: scale(1.8) rotate(180deg); }
          }
          
          @keyframes armor-sparkle-3 {
            0%, 60%, 100% { opacity: 0; transform: scale(1); }
            65%, 75% { opacity: 1; transform: scale(2.6); }
            70% { opacity: 0.65; transform: scale(2.2); }
          }
          
          @keyframes armor-sparkle-4 {
            0%, 72%, 100% { opacity: 0; transform: scale(1); }
            77%, 87% { opacity: 0.95; transform: scale(2.3); }
            82% { opacity: 0.58; transform: scale(1.9); }
          }
          
          @keyframes armor-sparkle-5 {
            0%, 68%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            73%, 83% { opacity: 1; transform: scale(2.5) rotate(360deg); }
            78% { opacity: 0.62; transform: scale(2.1) rotate(180deg); }
          }
          
          @keyframes armor-sparkle-6 {
            0%, 75%, 100% { opacity: 0; transform: scale(1); }
            80%, 90% { opacity: 0.92; transform: scale(2.2); }
            85% { opacity: 0.56; transform: scale(1.8); }
          }
          
          @keyframes armor-sparkle-7 {
            0%, 62%, 100% { opacity: 0; transform: scale(1); }
            67%, 77% { opacity: 1; transform: scale(2.4); }
            72% { opacity: 0.6; transform: scale(2); }
          }
          
          @keyframes window-light-1 {
            0%, 100% { opacity: 0.85; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes window-light-2 {
            0%, 100% { opacity: 0.8; transform: scale(1); }
            60% { opacity: 1; transform: scale(1.38); }
          }
          
          @keyframes window-light-3 {
            0%, 100% { opacity: 0.82; transform: scale(1); }
            55% { opacity: 1; transform: scale(1.42); }
          }
          
          @keyframes window-light-4 {
            0%, 100% { opacity: 0.88; transform: scale(1); }
            52% { opacity: 1; transform: scale(1.45); }
          }
          
          @keyframes window-light-5 {
            0%, 100% { opacity: 0.85; transform: scale(1); }
            58% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes window-light-6 {
            0%, 100% { opacity: 0.8; transform: scale(1); }
            48% { opacity: 0.98; transform: scale(1.35); }
          }
          
          @keyframes window-light-7 {
            0%, 100% { opacity: 0.83; transform: scale(1); }
            54% { opacity: 1; transform: scale(1.43); }
          }
          
          @keyframes window-light-8 {
            0%, 100% { opacity: 0.85; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.46); }
          }
          
          @keyframes window-light-9 {
            0%, 100% { opacity: 0.87; transform: scale(1); }
            62% { opacity: 1; transform: scale(1.48); }
          }
          
          @keyframes window-light-10 {
            0%, 100% { opacity: 0.82; transform: scale(1); }
            56% { opacity: 0.98; transform: scale(1.4); }
          }
          
          @keyframes window-light-11 {
            0%, 100% { opacity: 0.86; transform: scale(1); }
            51% { opacity: 1; transform: scale(1.44); }
          }
          
          @keyframes window-light-12 {
            0%, 100% { opacity: 0.84; transform: scale(1); }
            59% { opacity: 1; transform: scale(1.42); }
          }
          
          @keyframes window-light-13 {
            0%, 100% { opacity: 0.88; transform: scale(1); }
            53% { opacity: 1; transform: scale(1.47); }
          }
          
          @keyframes window-light-14 {
            0%, 100% { opacity: 0.85; transform: scale(1); }
            57% { opacity: 1; transform: scale(1.45); }
          }
          
          @keyframes window-light-15 {
            0%, 100% { opacity: 0.82; transform: scale(1); }
            50% { opacity: 0.98; transform: scale(1.38); }
          }
          
          @keyframes window-light-16 {
            0%, 100% { opacity: 0.87; transform: scale(1); }
            54% { opacity: 1; transform: scale(1.46); }
          }
          
          @keyframes window-light-17 {
            0%, 100% { opacity: 0.8; transform: scale(1); }
            60% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes window-light-18 {
            0%, 100% { opacity: 0.83; transform: scale(1); }
            52% { opacity: 1; transform: scale(1.43); }
          }
          
          @keyframes window-light-19 {
            0%, 100% { opacity: 0.85; transform: scale(1); }
            58% { opacity: 1; transform: scale(1.44); }
          }
          
          @keyframes window-light-20 {
            0%, 100% { opacity: 0.81; transform: scale(1); }
            56% { opacity: 0.98; transform: scale(1.41); }
          }
          
          @keyframes smoke-rise-1 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) scale(0.8); }
            30% { opacity: 0.3; transform: translateY(-40px) translateX(8px) scale(1.2); }
            60% { opacity: 0.15; transform: translateY(-80px) translateX(15px) scale(1.6); }
            100% { opacity: 0; transform: translateY(-120px) translateX(22px) scale(2); }
          }
          
          @keyframes smoke-rise-2 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) scale(0.8); }
            30% { opacity: 0.28; transform: translateY(-35px) translateX(-6px) scale(1.15); }
            60% { opacity: 0.14; transform: translateY(-70px) translateX(-12px) scale(1.5); }
            100% { opacity: 0; transform: translateY(-105px) translateX(-18px) scale(1.9); }
          }
          
          @keyframes smoke-rise-3 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) scale(0.8); }
            30% { opacity: 0.32; transform: translateY(-42px) translateX(10px) scale(1.25); }
            60% { opacity: 0.16; transform: translateY(-84px) translateX(18px) scale(1.65); }
            100% { opacity: 0; transform: translateY(-126px) translateX(25px) scale(2.1); }
          }
          
          @keyframes smoke-rise-4 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) scale(0.8); }
            30% { opacity: 0.3; transform: translateY(-38px) translateX(-7px) scale(1.2); }
            60% { opacity: 0.15; transform: translateY(-76px) translateX(-14px) scale(1.6); }
            100% { opacity: 0; transform: translateY(-114px) translateX(-20px) scale(2); }
          }
          
          @keyframes smoke-rise-5 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) scale(0.8); }
            30% { opacity: 0.29; transform: translateY(-36px) translateX(9px) scale(1.18); }
            60% { opacity: 0.14; transform: translateY(-72px) translateX(16px) scale(1.55); }
            100% { opacity: 0; transform: translateY(-108px) translateX(23px) scale(1.95); }
          }
          
          @keyframes smoke-rise-6 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) scale(0.8); }
            30% { opacity: 0.31; transform: translateY(-40px) translateX(-8px) scale(1.22); }
            60% { opacity: 0.16; transform: translateY(-80px) translateX(-15px) scale(1.62); }
            100% { opacity: 0; transform: translateY(-120px) translateX(-22px) scale(2.05); }
          }
          
          @keyframes sun-ray-epic-1 {
            0%, 100% { opacity: 0; transform: translateY(0px); }
            50% { opacity: 0.35; transform: translateY(-15px); }
          }
          
          @keyframes sun-ray-epic-2 {
            0%, 100% { opacity: 0; transform: translateY(0px) scaleX(1); }
            60% { opacity: 0.4; transform: translateY(-20px) scaleX(1.15); }
          }
          
          @keyframes sun-ray-epic-3 {
            0%, 100% { opacity: 0; transform: translateY(0px); }
            55% { opacity: 0.32; transform: translateY(-18px); }
          }
          
          @keyframes sky-glow {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; }
          }
          
          @keyframes dust-float-1 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.75; transform: translateY(-80px) translateX(30px) rotate(180deg); }
          }
          
          @keyframes dust-float-2 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.7; transform: translateY(-70px) translateX(-25px) rotate(200deg); }
          }
          
          @keyframes dust-float-3 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.8; transform: translateY(-90px) translateX(35px) rotate(190deg); }
          }
          
          @keyframes dust-float-4 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.72; transform: translateY(-75px) translateX(-30px) rotate(210deg); }
          }
          
          @keyframes dust-float-5 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.78; transform: translateY(-85px) translateX(28px) rotate(195deg); }
          }
          
          @keyframes dust-float-6 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.65; transform: translateY(-60px) translateX(20px); }
          }
          
          @keyframes dust-float-7 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.68; transform: translateY(-65px) translateX(-18px); }
          }
          
          @keyframes dust-float-8 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.7; transform: translateY(-68px) translateX(22px); }
          }
          
          @keyframes dust-float-9 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.66; transform: translateY(-62px) translateX(-20px); }
          }
          
          @keyframes dust-float-10 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.6; transform: translateY(-50px) translateX(15px); }
          }
          
          @keyframes dust-float-11 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.62; transform: translateY(-52px) translateX(-16px); }
          }
          
          @keyframes dust-float-12 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.58; transform: translateY(-48px) translateX(18px); }
          }
          
          @keyframes path-shimmer-1 {
            0%, 100% { opacity: 0.18; transform: scale(1); }
            50% { opacity: 0.35; transform: scale(1.2); }
          }
          
          @keyframes path-shimmer-2 {
            0%, 100% { opacity: 0.15; transform: scale(1) rotate(0deg); }
            60% { opacity: 0.32; transform: scale(1.18) rotate(10deg); }
          }
          
          @keyframes path-shimmer-3 {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            55% { opacity: 0.38; transform: scale(1.22); }
          }
          
          @keyframes path-shimmer-4 {
            0%, 100% { opacity: 0.17; transform: scale(1) rotate(0deg); }
            58% { opacity: 0.34; transform: scale(1.15) rotate(-10deg); }
          }
          
          @keyframes foliage-glow-1 {
            0%, 100% { opacity: 0.12; transform: scale(1); }
            50% { opacity: 0.24; transform: scale(1.15); }
          }
          
          @keyframes foliage-glow-2 {
            0%, 100% { opacity: 0.1; transform: scale(1); }
            60% { opacity: 0.22; transform: scale(1.12); }
          }
          
          @keyframes foliage-glow-3 {
            0%, 100% { opacity: 0.11; transform: scale(1); }
            55% { opacity: 0.23; transform: scale(1.14); }
          }
          
          @keyframes foliage-glow-4 {
            0%, 100% { opacity: 0.13; transform: scale(1); }
            58% { opacity: 0.26; transform: scale(1.16); }
          }
          
          @keyframes foliage-glow-5 {
            0%, 100% { opacity: 0.09; transform: scale(1); }
            52% { opacity: 0.2; transform: scale(1.1); }
          }
          
          @keyframes foliage-glow-6 {
            0%, 100% { opacity: 0.1; transform: scale(1); }
            56% { opacity: 0.22; transform: scale(1.12); }
          }
          
          .animate-statue-divine-1 { animation: statue-divine-1 6s ease-in-out infinite; }
          .animate-statue-divine-2 { animation: statue-divine-2 7s ease-in-out infinite 1.5s; }
          .animate-statue-divine-3 { animation: statue-divine-3 8s ease-in-out infinite 3s; }
          
          .animate-statue-beam-1 { animation: statue-beam-1 8s ease-in-out infinite; }
          .animate-statue-beam-2 { animation: statue-beam-2 9s ease-in-out infinite 2s; }
          
          .animate-armor-sparkle-1 { animation: armor-sparkle-1 8s linear infinite; }
          .animate-armor-sparkle-2 { animation: armor-sparkle-2 9s linear infinite 1.5s; }
          .animate-armor-sparkle-3 { animation: armor-sparkle-3 7.5s linear infinite 3s; }
          .animate-armor-sparkle-4 { animation: armor-sparkle-4 8.5s linear infinite 4.5s; }
          .animate-armor-sparkle-5 { animation: armor-sparkle-5 10s linear infinite 2s; }
          .animate-armor-sparkle-6 { animation: armor-sparkle-6 7s linear infinite 6s; }
          .animate-armor-sparkle-7 { animation: armor-sparkle-7 9.5s linear infinite 5s; }
          
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
          .animate-window-light-17 { animation: window-light-17 5.7s ease-in-out infinite 4.3s; }
          .animate-window-light-18 { animation: window-light-18 5.1s ease-in-out infinite 0.6s; }
          .animate-window-light-19 { animation: window-light-19 5.9s ease-in-out infinite 1.2s; }
          .animate-window-light-20 { animation: window-light-20 5.3s ease-in-out infinite 1.7s; }
          
          .animate-smoke-rise-1 { animation: smoke-rise-1 8s ease-out infinite; }
          .animate-smoke-rise-2 { animation: smoke-rise-2 9s ease-out infinite 2s; }
          .animate-smoke-rise-3 { animation: smoke-rise-3 8.5s ease-out infinite 4s; }
          .animate-smoke-rise-4 { animation: smoke-rise-4 9.5s ease-out infinite 1s; }
          .animate-smoke-rise-5 { animation: smoke-rise-5 8.2s ease-out infinite 5s; }
          .animate-smoke-rise-6 { animation: smoke-rise-6 9.2s ease-out infinite 3s; }
          
          .animate-sun-ray-epic-1 { animation: sun-ray-epic-1 18s ease-in-out infinite; }
          .animate-sun-ray-epic-2 { animation: sun-ray-epic-2 22s ease-in-out infinite 6s; }
          .animate-sun-ray-epic-3 { animation: sun-ray-epic-3 20s ease-in-out infinite 12s; }
          
          .animate-sky-glow { animation: sky-glow 16s ease-in-out infinite; }
          
          .animate-dust-float-1 { animation: dust-float-1 16s ease-in-out infinite; }
          .animate-dust-float-2 { animation: dust-float-2 18s ease-in-out infinite 3s; }
          .animate-dust-float-3 { animation: dust-float-3 15s ease-in-out infinite 6s; }
          .animate-dust-float-4 { animation: dust-float-4 19s ease-in-out infinite 2s; }
          .animate-dust-float-5 { animation: dust-float-5 17s ease-in-out infinite 8s; }
          .animate-dust-float-6 { animation: dust-float-6 20s ease-in-out infinite 4s; }
          .animate-dust-float-7 { animation: dust-float-7 18.5s ease-in-out infinite 7s; }
          .animate-dust-float-8 { animation: dust-float-8 16.5s ease-in-out infinite 10s; }
          .animate-dust-float-9 { animation: dust-float-9 19.5s ease-in-out infinite 5s; }
          .animate-dust-float-10 { animation: dust-float-10 21s ease-in-out infinite 9s; }
          .animate-dust-float-11 { animation: dust-float-11 17.5s ease-in-out infinite 11s; }
          .animate-dust-float-12 { animation: dust-float-12 20.5s ease-in-out infinite 1s; }
          
          .animate-path-shimmer-1 { animation: path-shimmer-1 7s ease-in-out infinite; }
          .animate-path-shimmer-2 { animation: path-shimmer-2 8s ease-in-out infinite 2s; }
          .animate-path-shimmer-3 { animation: path-shimmer-3 7.5s ease-in-out infinite 4s; }
          .animate-path-shimmer-4 { animation: path-shimmer-4 8.5s ease-in-out infinite 1s; }
          
          .animate-foliage-glow-1 { animation: foliage-glow-1 10s ease-in-out infinite; }
          .animate-foliage-glow-2 { animation: foliage-glow-2 11s ease-in-out infinite 2s; }
          .animate-foliage-glow-3 { animation: foliage-glow-3 10.5s ease-in-out infinite 4s; }
          .animate-foliage-glow-4 { animation: foliage-glow-4 11.5s ease-in-out infinite 1s; }
          .animate-foliage-glow-5 { animation: foliage-glow-5 9.5s ease-in-out infinite 5s; }
          .animate-foliage-glow-6 { animation: foliage-glow-6 12s ease-in-out infinite 3s; }
        `}</style>
      </div>
    </Card>
  );
}

