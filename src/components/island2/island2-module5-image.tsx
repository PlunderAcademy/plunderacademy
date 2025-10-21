"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Island2Module5Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        {/* Base image */}
        <Image
          src="/islands/island2/island2-module5-image.webp"
          alt="Staking Contract Practical - Frost Peak Adventure"
          fill
          className="object-cover"
          priority
        />
        
        {/* EPIC Animated overlay effects */}
        <div className="absolute inset-0 animate-effects">
          {/* EPIC Northern Lights - Maximum Drama */}
          <div className="absolute inset-0">
            {/* Massive aurora waves */}
            <div className="absolute top-[2%] left-[5%] w-[400px] h-[250px] bg-gradient-to-b from-emerald-300/40 via-cyan-300/32 to-transparent aurora-epic animate-aurora-epic-1"></div>
            <div className="absolute top-[0%] left-[35%] w-[450px] h-[280px] bg-gradient-to-b from-cyan-300/38 via-teal-300/30 to-transparent aurora-epic animate-aurora-epic-2"></div>
            <div className="absolute top-[5%] right-[5%] w-[420px] h-[260px] bg-gradient-to-b from-teal-300/42 via-emerald-400/34 to-transparent aurora-epic animate-aurora-epic-3"></div>
            
            {/* Aurora curtain rays */}
            <div className="absolute top-[8%] left-[15%] w-[200px] h-[250px] bg-gradient-to-b from-emerald-300/35 via-cyan-400/25 to-transparent aurora-ray animate-aurora-ray-1"></div>
            <div className="absolute top-[5%] left-[50%] w-[220px] h-[270px] bg-gradient-to-b from-cyan-300/33 via-teal-300/23 to-transparent aurora-ray animate-aurora-ray-2"></div>
            <div className="absolute top-[10%] right-[20%] w-[210px] h-[260px] bg-gradient-to-b from-teal-300/36 via-emerald-300/26 to-transparent aurora-ray animate-aurora-ray-3"></div>
            
            {/* Full-screen aurora shimmer */}
            <div className="absolute top-[0%] left-[0%] w-full h-[55%] bg-gradient-to-b from-cyan-300/15 via-emerald-300/10 to-transparent aurora-glow animate-aurora-massive-1"></div>
            <div className="absolute top-[3%] left-[0%] w-full h-[50%] bg-gradient-to-b from-emerald-300/12 via-teal-300/8 to-transparent aurora-glow animate-aurora-massive-2"></div>
          </div>

          {/* Mammoth Power Aura */}
          <div className="absolute inset-0">
            {/* Epic glow around mammoth */}
            <div className="absolute top-[35%] left-[42%] w-[180px] h-[180px] bg-orange-400/20 rounded-full mammoth-aura animate-mammoth-power-1"></div>
            <div className="absolute top-[38%] left-[44%] w-[140px] h-[140px] bg-yellow-300/18 rounded-full mammoth-aura animate-mammoth-power-2"></div>
            <div className="absolute top-[40%] left-[46%] w-[100px] h-[100px] bg-white/15 rounded-full mammoth-aura animate-mammoth-power-3"></div>
            
            {/* Power radiating rings */}
            <div className="absolute top-[32%] left-[40%] w-[220px] h-[220px] border-4 border-cyan-300/25 rounded-full power-ring animate-power-ring-1"></div>
            <div className="absolute top-[30%] left-[38%] w-[260px] h-[260px] border-3 border-emerald-300/20 rounded-full power-ring animate-power-ring-2"></div>
            <div className="absolute top-[28%] left-[36%] w-[300px] h-[300px] border-2 border-teal-300/15 rounded-full power-ring animate-power-ring-3"></div>
          </div>

          {/* Epic Tusk Sparkles */}
          <div className="absolute inset-0">
            {/* Left tusk sparkles */}
            <div className="absolute top-[48%] left-[38%] w-[4px] h-[4px] bg-white/95 rounded-full tusk-sparkle animate-tusk-sparkle-1"></div>
            <div className="absolute top-[52%] left-[36%] w-[3px] h-[3px] bg-cyan-200/90 rounded-full tusk-sparkle animate-tusk-sparkle-2"></div>
            <div className="absolute top-[56%] left-[34%] w-[4px] h-[4px] bg-white/92 rounded-full tusk-sparkle animate-tusk-sparkle-3"></div>
            
            {/* Right tusk sparkles */}
            <div className="absolute top-[48%] right-[38%] w-[4px] h-[4px] bg-white/95 rounded-full tusk-sparkle animate-tusk-sparkle-4"></div>
            <div className="absolute top-[52%] right-[36%] w-[3px] h-[3px] bg-cyan-200/90 rounded-full tusk-sparkle animate-tusk-sparkle-5"></div>
            <div className="absolute top-[56%] right-[34%] w-[4px] h-[4px] bg-white/92 rounded-full tusk-sparkle animate-tusk-sparkle-6"></div>
          </div>

          {/* Epic Breath Steam */}
          <div className="absolute inset-0">
            {/* Mammoth breathing steam */}
            <div className="absolute top-[45%] left-[48%] w-[60px] h-[40px] bg-white/30 rounded-full breath-steam animate-breath-steam-1"></div>
            <div className="absolute top-[44%] left-[49%] w-[50px] h-[35px] bg-cyan-100/25 rounded-full breath-steam animate-breath-steam-2"></div>
            <div className="absolute top-[43%] left-[50%] w-[40px] h-[30px] bg-white/20 rounded-full breath-steam animate-breath-steam-3"></div>
          </div>

          {/* Blizzard/Snow Storm */}
          <div className="absolute inset-0">
            {/* Heavy snowfall - Large flakes */}
            <div className="absolute top-[5%] left-[12%] w-[5px] h-[5px] bg-white/80 rounded-full snow-heavy animate-blizzard-1"></div>
            <div className="absolute top-[8%] left-[28%] w-[6px] h-[6px] bg-white/85 rounded-full snow-heavy animate-blizzard-2"></div>
            <div className="absolute top-[3%] left-[45%] w-[5px] h-[5px] bg-white/78 rounded-full snow-heavy animate-blizzard-3"></div>
            <div className="absolute top-[10%] left-[62%] w-[6px] h-[6px] bg-white/82 rounded-full snow-heavy animate-blizzard-4"></div>
            <div className="absolute top-[6%] left-[78%] w-[5px] h-[5px] bg-white/75 rounded-full snow-heavy animate-blizzard-5"></div>
            <div className="absolute top-[12%] left-[88%] w-[6px] h-[6px] bg-white/88 rounded-full snow-heavy animate-blizzard-6"></div>
            
            {/* Medium storm flakes */}
            <div className="absolute top-[15%] left-[20%] w-[4px] h-[4px] bg-white/70 rounded-full snow-medium animate-blizzard-7"></div>
            <div className="absolute top-[8%] left-[38%] w-[4px] h-[4px] bg-white/68 rounded-full snow-medium animate-blizzard-8"></div>
            <div className="absolute top-[18%] left-[55%] w-[4px] h-[4px] bg-white/72 rounded-full snow-medium animate-blizzard-9"></div>
            <div className="absolute top-[10%] left-[72%] w-[4px] h-[4px] bg-white/65 rounded-full snow-medium animate-blizzard-10"></div>
            <div className="absolute top-[14%] left-[85%] w-[4px] h-[4px] bg-white/74 rounded-full snow-medium animate-blizzard-11"></div>
            
            {/* Small storm particles */}
            <div className="absolute top-[7%] left-[25%] w-[2px] h-[2px] bg-white/60 rounded-full snow-small animate-blizzard-12"></div>
            <div className="absolute top-[16%] left-[42%] w-[2px] h-[2px] bg-white/58 rounded-full snow-small animate-blizzard-13"></div>
            <div className="absolute top-[11%] left-[58%] w-[2px] h-[2px] bg-white/62 rounded-full snow-small animate-blizzard-14"></div>
            <div className="absolute top-[9%] left-[68%] w-[2px] h-[2px] bg-white/55 rounded-full snow-small animate-blizzard-15"></div>
            <div className="absolute top-[13%] left-[82%] w-[2px] h-[2px] bg-white/64 rounded-full snow-small animate-blizzard-16"></div>
          </div>

          {/* Epic Mountain Ice Sparkles */}
          <div className="absolute inset-0">
            {/* Left mountains */}
            <div className="absolute top-[18%] left-[12%] w-[3px] h-[3px] bg-cyan-200/92 rounded-full mountain-epic animate-mountain-epic-1"></div>
            <div className="absolute top-[22%] left-[18%] w-[4px] h-[4px] bg-white/95 rounded-full mountain-epic animate-mountain-epic-2"></div>
            <div className="absolute top-[28%] left-[15%] w-[3px] h-[3px] bg-blue-100/88 rounded-full mountain-epic animate-mountain-epic-3"></div>
            
            {/* Center peak - most dramatic */}
            <div className="absolute top-[8%] left-[48%] w-[5px] h-[5px] bg-white/98 rounded-full mountain-epic animate-mountain-epic-4"></div>
            <div className="absolute top-[12%] left-[52%] w-[4px] h-[4px] bg-cyan-200/95 rounded-full mountain-epic animate-mountain-epic-5"></div>
            <div className="absolute top-[15%] left-[50%] w-[3px] h-[3px] bg-blue-100/90 rounded-full mountain-epic animate-mountain-epic-6"></div>
            
            {/* Right mountains */}
            <div className="absolute top-[20%] right-[12%] w-[3px] h-[3px] bg-cyan-200/93 rounded-full mountain-epic animate-mountain-epic-7"></div>
            <div className="absolute top-[25%] right-[18%] w-[4px] h-[4px] bg-white/96 rounded-full mountain-epic animate-mountain-epic-8"></div>
            <div className="absolute top-[30%] right-[15%] w-[3px] h-[3px] bg-blue-100/89 rounded-full mountain-epic animate-mountain-epic-9"></div>
          </div>

          {/* Ground Snow Explosion */}
          <div className="absolute inset-0">
            {/* Snow kicked up around mammoth */}
            <div className="absolute top-[65%] left-[30%] w-[80px] h-[50px] bg-white/25 rounded-full snow-explosion animate-snow-kick-1"></div>
            <div className="absolute top-[70%] left-[35%] w-[60px] h-[40px] bg-cyan-100/20 rounded-full snow-explosion animate-snow-kick-2"></div>
            <div className="absolute top-[68%] right-[30%] w-[85px] h-[55px] bg-white/28 rounded-full snow-explosion animate-snow-kick-3"></div>
            <div className="absolute top-[72%] right-[35%] w-[65px] h-[42px] bg-cyan-100/22 rounded-full snow-explosion animate-snow-kick-4"></div>
          </div>

          {/* Magical Ice Ground Sparkles */}
          <div className="absolute inset-0">
            <div className="absolute top-[78%] left-[15%] w-[3px] h-[3px] bg-cyan-200/85 rounded-full ground-magic animate-ground-magic-1"></div>
            <div className="absolute top-[82%] left-[28%] w-[4px] h-[4px] bg-white/90 rounded-full ground-magic animate-ground-magic-2"></div>
            <div className="absolute top-[80%] left-[45%] w-[3px] h-[3px] bg-blue-100/82 rounded-full ground-magic animate-ground-magic-3"></div>
            <div className="absolute top-[84%] left-[62%] w-[4px] h-[4px] bg-cyan-200/88 rounded-full ground-magic animate-ground-magic-4"></div>
            <div className="absolute top-[81%] left-[78%] w-[3px] h-[3px] bg-white/86 rounded-full ground-magic animate-ground-magic-5"></div>
          </div>

          {/* Final Epic Glow Layer */}
          <div className="absolute inset-0 bg-radial-gradient from-white/5 via-cyan-200/3 to-transparent animate-final-epic-glow"></div>
        </div>
        
        <style jsx>{`
          .aurora-epic {
            filter: blur(45px);
            opacity: 0;
          }
          
          .aurora-ray {
            filter: blur(38px);
            opacity: 0;
          }
          
          .aurora-glow {
            filter: blur(60px);
            opacity: 0;
          }
          
          .mammoth-aura {
            filter: blur(40px);
          }
          
          .power-ring {
            filter: blur(12px);
            opacity: 0;
          }
          
          .tusk-sparkle {
            box-shadow: 0 0 30px currentColor, 0 0 60px currentColor, 0 0 90px currentColor;
            filter: blur(0.2px);
          }
          
          .breath-steam {
            filter: blur(22px);
            opacity: 0;
          }
          
          .snow-heavy {
            box-shadow: 0 0 16px currentColor, 0 0 32px currentColor, 0 0 48px currentColor;
            filter: blur(0.8px);
          }
          
          .snow-medium {
            box-shadow: 0 0 12px currentColor, 0 0 24px currentColor;
            filter: blur(0.7px);
          }
          
          .snow-small {
            box-shadow: 0 0 8px currentColor, 0 0 16px currentColor;
            filter: blur(0.6px);
          }
          
          .mountain-epic {
            box-shadow: 0 0 25px currentColor, 0 0 50px currentColor, 0 0 75px currentColor;
            filter: blur(0.3px);
          }
          
          .snow-explosion {
            filter: blur(28px);
            opacity: 0;
          }
          
          .ground-magic {
            box-shadow: 0 0 22px currentColor, 0 0 44px currentColor, 0 0 66px currentColor;
            filter: blur(0.3px);
          }
          
          .animate-effects .aurora-epic {
            animation-play-state: running;
          }
          
          .animate-effects .aurora-ray {
            animation-play-state: running;
          }
          
          .animate-effects .aurora-glow {
            animation-play-state: running;
          }
          
          .animate-effects .mammoth-aura {
            animation-play-state: running;
          }
          
          .animate-effects .power-ring {
            animation-play-state: running;
          }
          
          .animate-effects .tusk-sparkle {
            animation-play-state: running;
          }
          
          .animate-effects .breath-steam {
            animation-play-state: running;
          }
          
          .animate-effects .snow-heavy {
            animation-play-state: running;
          }
          
          .animate-effects .snow-medium {
            animation-play-state: running;
          }
          
          .animate-effects .snow-small {
            animation-play-state: running;
          }
          
          .animate-effects .mountain-epic {
            animation-play-state: running;
          }
          
          .animate-effects .snow-explosion {
            animation-play-state: running;
          }
          
          .animate-effects .ground-magic {
            animation-play-state: running;
          }
          
          @keyframes aurora-epic-1 {
            0%, 100% { opacity: 0; transform: translateX(0px) translateY(0px) scaleY(1) skewX(0deg); }
            20% { opacity: 0.75; transform: translateX(-35px) translateY(-25px) scaleY(1.6) skewX(8deg); }
            40% { opacity: 0.6; transform: translateX(-20px) translateY(-15px) scaleY(1.15) skewX(-6deg); }
            60% { opacity: 0.7; transform: translateX(-45px) translateY(-30px) scaleY(1.5) skewX(7deg); }
            80% { opacity: 0.55; transform: translateX(-25px) translateY(-18px) scaleY(1.25) skewX(-5deg); }
          }
          
          @keyframes aurora-epic-2 {
            0%, 100% { opacity: 0; transform: translateX(0px) translateY(0px) scaleY(1) skewX(0deg); }
            25% { opacity: 0.73; transform: translateX(40px) translateY(-28px) scaleY(1.65) skewX(-8deg); }
            45% { opacity: 0.58; transform: translateX(22px) translateY(-16px) scaleY(1.1) skewX(7deg); }
            65% { opacity: 0.68; transform: translateX(48px) translateY(-33px) scaleY(1.55) skewX(-7deg); }
            85% { opacity: 0.52; transform: translateX(28px) translateY(-20px) scaleY(1.22) skewX(6deg); }
          }
          
          @keyframes aurora-epic-3 {
            0%, 100% { opacity: 0; transform: translateX(0px) translateY(0px) scaleY(1) skewX(0deg); }
            30% { opacity: 0.78; transform: translateX(-33px) translateY(-30px) scaleY(1.7) skewX(9deg); }
            50% { opacity: 0.62; transform: translateX(-18px) translateY(-18px) scaleY(1.12) skewX(-7deg); }
            70% { opacity: 0.72; transform: translateX(-43px) translateY(-35px) scaleY(1.58) skewX(8deg); }
            90% { opacity: 0.58; transform: translateX(-23px) translateY(-22px) scaleY(1.28) skewX(-6deg); }
          }
          
          @keyframes aurora-ray-1 {
            0%, 100% { opacity: 0; transform: translateY(0px) scaleY(1) skewX(0deg); }
            35% { opacity: 0.45; transform: translateY(-15px) scaleY(1.3) skewX(4deg); }
            70% { opacity: 0.25; transform: translateY(-8px) scaleY(0.9) skewX(-3deg); }
          }
          
          @keyframes aurora-ray-2 {
            0%, 100% { opacity: 0; transform: translateY(0px) scaleY(1) skewX(0deg); }
            40% { opacity: 0.42; transform: translateY(-18px) scaleY(1.35) skewX(-4deg); }
            75% { opacity: 0.22; transform: translateY(-10px) scaleY(0.88) skewX(3deg); }
          }
          
          @keyframes aurora-ray-3 {
            0%, 100% { opacity: 0; transform: translateY(0px) scaleY(1) skewX(0deg); }
            38% { opacity: 0.48; transform: translateY(-20px) scaleY(1.4) skewX(5deg); }
            72% { opacity: 0.28; transform: translateY(-12px) scaleY(0.85) skewX(-4deg); }
          }
          
          @keyframes aurora-massive-1 {
            0%, 100% { opacity: 0; }
            50% { opacity: 0.35; }
          }
          
          @keyframes aurora-massive-2 {
            0%, 100% { opacity: 0; }
            60% { opacity: 0.28; }
          }
          
          @keyframes mammoth-power-1 {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(1.3); }
          }
          
          @keyframes mammoth-power-2 {
            0%, 100% { opacity: 0.18; transform: scale(1) rotate(0deg); }
            60% { opacity: 0.36; transform: scale(1.4) rotate(180deg); }
          }
          
          @keyframes mammoth-power-3 {
            0%, 100% { opacity: 0.15; transform: scale(1); }
            55% { opacity: 0.32; transform: scale(1.5); }
          }
          
          @keyframes power-ring-1 {
            0% { opacity: 0; transform: scale(0.5); }
            50% { opacity: 0.4; transform: scale(1.2); }
            100% { opacity: 0; transform: scale(2); }
          }
          
          @keyframes power-ring-2 {
            0% { opacity: 0; transform: scale(0.6); }
            50% { opacity: 0.35; transform: scale(1.15); }
            100% { opacity: 0; transform: scale(1.9); }
          }
          
          @keyframes power-ring-3 {
            0% { opacity: 0; transform: scale(0.7); }
            50% { opacity: 0.3; transform: scale(1.1); }
            100% { opacity: 0; transform: scale(1.8); }
          }
          
          @keyframes tusk-sparkle-1 {
            0%, 60%, 100% { opacity: 0; transform: scale(1); }
            65%, 75% { opacity: 1; transform: scale(2); }
            70% { opacity: 0.5; transform: scale(1.6); }
          }
          
          @keyframes tusk-sparkle-2 {
            0%, 65%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            70%, 80% { opacity: 0.95; transform: scale(1.9) rotate(360deg); }
            75% { opacity: 0.45; transform: scale(1.5) rotate(180deg); }
          }
          
          @keyframes tusk-sparkle-3 {
            0%, 70%, 100% { opacity: 0; transform: scale(1); }
            75%, 85% { opacity: 1; transform: scale(2.1); }
            80% { opacity: 0.5; transform: scale(1.7); }
          }
          
          @keyframes tusk-sparkle-4 {
            0%, 62%, 100% { opacity: 0; transform: scale(1); }
            67%, 77% { opacity: 1; transform: scale(2); }
            72% { opacity: 0.5; transform: scale(1.6); }
          }
          
          @keyframes tusk-sparkle-5 {
            0%, 68%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            73%, 83% { opacity: 0.95; transform: scale(1.9) rotate(360deg); }
            78% { opacity: 0.45; transform: scale(1.5) rotate(180deg); }
          }
          
          @keyframes tusk-sparkle-6 {
            0%, 72%, 100% { opacity: 0; transform: scale(1); }
            77%, 87% { opacity: 1; transform: scale(2.1); }
            82% { opacity: 0.5; transform: scale(1.7); }
          }
          
          @keyframes breath-steam-1 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px) scale(0.5); }
            30% { opacity: 0.4; transform: translateX(-30px) translateY(-25px) scale(1.3); }
            60% { opacity: 0.2; transform: translateX(-60px) translateY(-50px) scale(2); }
            100% { opacity: 0; transform: translateX(-90px) translateY(-75px) scale(2.8); }
          }
          
          @keyframes breath-steam-2 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px) scale(0.4); }
            35% { opacity: 0.35; transform: translateX(-25px) translateY(-22px) scale(1.2); }
            65% { opacity: 0.18; transform: translateX(-50px) translateY(-45px) scale(1.8); }
            100% { opacity: 0; transform: translateX(-75px) translateY(-70px) scale(2.5); }
          }
          
          @keyframes breath-steam-3 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px) scale(0.3); }
            40% { opacity: 0.3; transform: translateX(-20px) translateY(-20px) scale(1.1); }
            70% { opacity: 0.15; transform: translateX(-40px) translateY(-40px) scale(1.6); }
            100% { opacity: 0; transform: translateX(-60px) translateY(-60px) scale(2.2); }
          }
          
          @keyframes blizzard-1 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.8; transform: translateY(500px) translateX(50px) rotate(220deg); }
            100% { opacity: 0; transform: translateY(1000px) translateX(90px) rotate(440deg); }
          }
          
          @keyframes blizzard-2 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.85; transform: translateY(520px) translateX(-45px) rotate(250deg); }
            100% { opacity: 0; transform: translateY(1040px) translateX(-80px) rotate(500deg); }
          }
          
          @keyframes blizzard-3 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.78; transform: translateY(510px) translateX(55px) rotate(210deg); }
            100% { opacity: 0; transform: translateY(1020px) translateX(95px) rotate(420deg); }
          }
          
          @keyframes blizzard-4 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.82; transform: translateY(530px) translateX(-40px) rotate(240deg); }
            100% { opacity: 0; transform: translateY(1060px) translateX(-75px) rotate(480deg); }
          }
          
          @keyframes blizzard-5 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.75; transform: translateY(505px) translateX(60px) rotate(200deg); }
            100% { opacity: 0; transform: translateY(1010px) translateX(105px) rotate(400deg); }
          }
          
          @keyframes blizzard-6 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.88; transform: translateY(540px) translateX(-50px) rotate(260deg); }
            100% { opacity: 0; transform: translateY(1080px) translateX(-90px) rotate(520deg); }
          }
          
          @keyframes blizzard-7 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.7; transform: translateY(490px) translateX(42px) rotate(190deg); }
            100% { opacity: 0; transform: translateY(980px) translateX(75px) rotate(380deg); }
          }
          
          @keyframes blizzard-8 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.68; transform: translateY(515px) translateX(-38px) rotate(230deg); }
            100% { opacity: 0; transform: translateY(1030px) translateX(-68px) rotate(460deg); }
          }
          
          @keyframes blizzard-9 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.72; transform: translateY(508px) translateX(48px) rotate(215deg); }
            100% { opacity: 0; transform: translateY(1016px) translateX(85px) rotate(430deg); }
          }
          
          @keyframes blizzard-10 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.65; transform: translateY(495px) translateX(-35px) rotate(205deg); }
            100% { opacity: 0; transform: translateY(990px) translateX(-62px) rotate(410deg); }
          }
          
          @keyframes blizzard-11 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.74; transform: translateY(525px) translateX(52px) rotate(245deg); }
            100% { opacity: 0; transform: translateY(1050px) translateX(92px) rotate(490deg); }
          }
          
          @keyframes blizzard-12 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.6; transform: translateY(480px) translateX(30px); }
            100% { opacity: 0; transform: translateY(960px) translateX(55px); }
          }
          
          @keyframes blizzard-13 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.58; transform: translateY(502px) translateX(-28px); }
            100% { opacity: 0; transform: translateY(1004px) translateX(-52px); }
          }
          
          @keyframes blizzard-14 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.62; transform: translateY(518px) translateX(35px); }
            100% { opacity: 0; transform: translateY(1036px) translateX(62px); }
          }
          
          @keyframes blizzard-15 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.55; transform: translateY(488px) translateX(-32px); }
            100% { opacity: 0; transform: translateY(976px) translateX(-58px); }
          }
          
          @keyframes blizzard-16 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.64; transform: translateY(535px) translateX(38px); }
            100% { opacity: 0; transform: translateY(1070px) translateX(68px); }
          }
          
          @keyframes mountain-epic-1 {
            0%, 65%, 100% { opacity: 0; transform: scale(1); }
            70%, 80% { opacity: 0.92; transform: scale(2.2); }
            75% { opacity: 0.5; transform: scale(1.8); }
          }
          
          @keyframes mountain-epic-2 {
            0%, 70%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            75%, 85% { opacity: 0.95; transform: scale(2.4) rotate(360deg); }
            80% { opacity: 0.52; transform: scale(2) rotate(180deg); }
          }
          
          @keyframes mountain-epic-3 {
            0%, 78%, 100% { opacity: 0; transform: scale(1); }
            83%, 93% { opacity: 0.88; transform: scale(2.1); }
            88% { opacity: 0.48; transform: scale(1.7); }
          }
          
          @keyframes mountain-epic-4 {
            0%, 60%, 100% { opacity: 0; transform: scale(1); }
            65%, 75% { opacity: 0.98; transform: scale(2.6); }
            70% { opacity: 0.55; transform: scale(2.2); }
          }
          
          @keyframes mountain-epic-5 {
            0%, 73%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            78%, 88% { opacity: 0.95; transform: scale(2.3) rotate(360deg); }
            83% { opacity: 0.52; transform: scale(1.9) rotate(180deg); }
          }
          
          @keyframes mountain-epic-6 {
            0%, 68%, 100% { opacity: 0; transform: scale(1); }
            73%, 83% { opacity: 0.9; transform: scale(2); }
            78% { opacity: 0.48; transform: scale(1.6); }
          }
          
          @keyframes mountain-epic-7 {
            0%, 75%, 100% { opacity: 0; transform: scale(1); }
            80%, 90% { opacity: 0.93; transform: scale(2.2); }
            85% { opacity: 0.5; transform: scale(1.8); }
          }
          
          @keyframes mountain-epic-8 {
            0%, 62%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            67%, 77% { opacity: 0.96; transform: scale(2.5) rotate(360deg); }
            72% { opacity: 0.54; transform: scale(2.1) rotate(180deg); }
          }
          
          @keyframes mountain-epic-9 {
            0%, 80%, 100% { opacity: 0; transform: scale(1); }
            85%, 95% { opacity: 0.89; transform: scale(2.1); }
            90% { opacity: 0.47; transform: scale(1.7); }
          }
          
          @keyframes snow-kick-1 {
            0% { opacity: 0; transform: translateY(0px) scale(0.5); }
            30% { opacity: 0.35; transform: translateY(-30px) scale(1.4); }
            60% { opacity: 0.18; transform: translateY(-60px) scale(2.2); }
            100% { opacity: 0; transform: translateY(-90px) scale(3); }
          }
          
          @keyframes snow-kick-2 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) scale(0.4); }
            35% { opacity: 0.3; transform: translateY(-25px) translateX(15px) scale(1.3); }
            65% { opacity: 0.15; transform: translateY(-50px) translateX(30px) scale(2); }
            100% { opacity: 0; transform: translateY(-75px) translateX(45px) scale(2.7); }
          }
          
          @keyframes snow-kick-3 {
            0% { opacity: 0; transform: translateY(0px) scale(0.5); }
            32% { opacity: 0.38; transform: translateY(-32px) scale(1.45); }
            62% { opacity: 0.2; transform: translateY(-64px) scale(2.3); }
            100% { opacity: 0; transform: translateY(-96px) scale(3.1); }
          }
          
          @keyframes snow-kick-4 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) scale(0.4); }
            33% { opacity: 0.32; transform: translateY(-28px) translateX(-18px) scale(1.35); }
            63% { opacity: 0.16; transform: translateY(-56px) translateX(-36px) scale(2.1); }
            100% { opacity: 0; transform: translateY(-84px) translateX(-54px) scale(2.8); }
          }
          
          @keyframes ground-magic-1 {
            0%, 80%, 100% { opacity: 0; transform: scale(1); }
            85%, 95% { opacity: 0.85; transform: scale(1.8); }
            90% { opacity: 0.42; transform: scale(1.5); }
          }
          
          @keyframes ground-magic-2 {
            0%, 75%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            80%, 90% { opacity: 0.9; transform: scale(2) rotate(360deg); }
            85% { opacity: 0.45; transform: scale(1.6) rotate(180deg); }
          }
          
          @keyframes ground-magic-3 {
            0%, 82%, 100% { opacity: 0; transform: scale(1); }
            87%, 97% { opacity: 0.82; transform: scale(1.7); }
            92% { opacity: 0.4; transform: scale(1.4); }
          }
          
          @keyframes ground-magic-4 {
            0%, 78%, 100% { opacity: 0; transform: scale(1); }
            83%, 93% { opacity: 0.88; transform: scale(1.9); }
            88% { opacity: 0.44; transform: scale(1.55); }
          }
          
          @keyframes ground-magic-5 {
            0%, 84%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            89%, 99% { opacity: 0.86; transform: scale(1.85) rotate(360deg); }
            94% { opacity: 0.43; transform: scale(1.52) rotate(180deg); }
          }
          
          @keyframes epic-atmosphere-1 {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.85; }
          }
          
          @keyframes epic-atmosphere-2 {
            0%, 100% { opacity: 1; }
            60% { opacity: 0.8; }
          }
          
          @keyframes legendary-reflection {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.75; }
          }
          
          @keyframes final-epic-glow {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 0.8; }
          }
          
          .animate-aurora-epic-1 { animation: aurora-epic-1 16s ease-in-out infinite; }
          .animate-aurora-epic-2 { animation: aurora-epic-2 18s ease-in-out infinite 4s; }
          .animate-aurora-epic-3 { animation: aurora-epic-3 20s ease-in-out infinite 8s; }
          
          .animate-aurora-ray-1 { animation: aurora-ray-1 12s ease-in-out infinite 2s; }
          .animate-aurora-ray-2 { animation: aurora-ray-2 14s ease-in-out infinite 6s; }
          .animate-aurora-ray-3 { animation: aurora-ray-3 13s ease-in-out infinite 10s; }
          
          .animate-aurora-massive-1 { animation: aurora-massive-1 22s ease-in-out infinite; }
          .animate-aurora-massive-2 { animation: aurora-massive-2 26s ease-in-out infinite 7s; }
          
          .animate-mammoth-power-1 { animation: mammoth-power-1 4s ease-in-out infinite; }
          .animate-mammoth-power-2 { animation: mammoth-power-2 5s ease-in-out infinite 1s; }
          .animate-mammoth-power-3 { animation: mammoth-power-3 6s ease-in-out infinite 2s; }
          
          .animate-power-ring-1 { animation: power-ring-1 4s ease-out infinite; }
          .animate-power-ring-2 { animation: power-ring-2 5s ease-out infinite 1s; }
          .animate-power-ring-3 { animation: power-ring-3 6s ease-out infinite 2s; }
          
          .animate-tusk-sparkle-1 { animation: tusk-sparkle-1 6s linear infinite; }
          .animate-tusk-sparkle-2 { animation: tusk-sparkle-2 7s linear infinite 1.5s; }
          .animate-tusk-sparkle-3 { animation: tusk-sparkle-3 6.5s linear infinite 3s; }
          .animate-tusk-sparkle-4 { animation: tusk-sparkle-4 6.2s linear infinite 4.5s; }
          .animate-tusk-sparkle-5 { animation: tusk-sparkle-5 7.2s linear infinite 2s; }
          .animate-tusk-sparkle-6 { animation: tusk-sparkle-6 6.8s linear infinite 5.5s; }
          
          .animate-breath-steam-1 { animation: breath-steam-1 6s ease-out infinite; }
          .animate-breath-steam-2 { animation: breath-steam-2 7s ease-out infinite 2s; }
          .animate-breath-steam-3 { animation: breath-steam-3 8s ease-out infinite 4s; }
          
          .animate-blizzard-1 { animation: blizzard-1 12s linear infinite; }
          .animate-blizzard-2 { animation: blizzard-2 14s linear infinite 2s; }
          .animate-blizzard-3 { animation: blizzard-3 13s linear infinite 4s; }
          .animate-blizzard-4 { animation: blizzard-4 15s linear infinite 6s; }
          .animate-blizzard-5 { animation: blizzard-5 12.5s linear infinite 8s; }
          .animate-blizzard-6 { animation: blizzard-6 16s linear infinite 10s; }
          .animate-blizzard-7 { animation: blizzard-7 11s linear infinite 1s; }
          .animate-blizzard-8 { animation: blizzard-8 13.5s linear infinite 3s; }
          .animate-blizzard-9 { animation: blizzard-9 14.5s linear infinite 5s; }
          .animate-blizzard-10 { animation: blizzard-10 10.5s linear infinite 7s; }
          .animate-blizzard-11 { animation: blizzard-11 15.5s linear infinite 9s; }
          .animate-blizzard-12 { animation: blizzard-12 10s linear infinite 11s; }
          .animate-blizzard-13 { animation: blizzard-13 11.5s linear infinite 2.5s; }
          .animate-blizzard-14 { animation: blizzard-14 13.2s linear infinite 4.5s; }
          .animate-blizzard-15 { animation: blizzard-15 9.8s linear infinite 6.5s; }
          .animate-blizzard-16 { animation: blizzard-16 14.8s linear infinite 8.5s; }
          
          .animate-mountain-epic-1 { animation: mountain-epic-1 7s linear infinite; }
          .animate-mountain-epic-2 { animation: mountain-epic-2 8s linear infinite 1.5s; }
          .animate-mountain-epic-3 { animation: mountain-epic-3 6.5s linear infinite 3s; }
          .animate-mountain-epic-4 { animation: mountain-epic-4 9s linear infinite 0.5s; }
          .animate-mountain-epic-5 { animation: mountain-epic-5 7.5s linear infinite 4s; }
          .animate-mountain-epic-6 { animation: mountain-epic-6 8.5s linear infinite 2s; }
          .animate-mountain-epic-7 { animation: mountain-epic-7 6.8s linear infinite 5s; }
          .animate-mountain-epic-8 { animation: mountain-epic-8 9.2s linear infinite 2.5s; }
          .animate-mountain-epic-9 { animation: mountain-epic-9 7.8s linear infinite 6s; }
          
          .animate-snow-kick-1 { animation: snow-kick-1 5s ease-out infinite; }
          .animate-snow-kick-2 { animation: snow-kick-2 6s ease-out infinite 1.5s; }
          .animate-snow-kick-3 { animation: snow-kick-3 5.5s ease-out infinite 3s; }
          .animate-snow-kick-4 { animation: snow-kick-4 6.5s ease-out infinite 4.5s; }
          
          .animate-ground-magic-1 { animation: ground-magic-1 7s linear infinite; }
          .animate-ground-magic-2 { animation: ground-magic-2 8s linear infinite 2s; }
          .animate-ground-magic-3 { animation: ground-magic-3 7.5s linear infinite 4s; }
          .animate-ground-magic-4 { animation: ground-magic-4 8.5s linear infinite 1s; }
          .animate-ground-magic-5 { animation: ground-magic-5 9s linear infinite 3s; }
          
          .animate-epic-atmosphere-1 { animation: epic-atmosphere-1 18s ease-in-out infinite; }
          .animate-epic-atmosphere-2 { animation: epic-atmosphere-2 22s ease-in-out infinite 6s; }
          .animate-legendary-reflection { animation: legendary-reflection 16s ease-in-out infinite 4s; }
          .animate-final-epic-glow { animation: final-epic-glow 14s ease-in-out infinite; }
        `}</style>
      </div>
    </Card>
  );
}

