"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Island2Module2Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        {/* Base image */}
        <Image
          src="/islands/island2/island2-module2-image.webp"
          alt="Advanced Data Structures & Error Handling - Frost Peak Adventure"
          fill
          className="object-cover"
          priority
        />
        
        {/* Animated overlay effects */}
        <div className="absolute inset-0 animate-effects">
          {/* Igloo Doorway Glows - Left Side */}
          <div className="absolute inset-0">
            <div className="absolute top-[60%] left-[8%] w-[6px] h-[10px] bg-orange-400/90 rounded igloo-door animate-door-glow-1"></div>
            <div className="absolute top-[52%] left-[18%] w-[5px] h-[9px] bg-amber-400/85 rounded igloo-door animate-door-glow-2"></div>
            <div className="absolute top-[65%] left-[2%] w-[5px] h-[9px] bg-yellow-400/88 rounded igloo-door animate-door-glow-3"></div>
          </div>

          {/* Igloo Doorway Glows - Center Background */}
          <div className="absolute inset-0">
            <div className="absolute top-[48%] left-[28%] w-[4px] h-[7px] bg-orange-300/80 rounded igloo-door animate-door-glow-4"></div>
            <div className="absolute top-[50%] left-[38%] w-[4px] h-[7px] bg-amber-300/75 rounded igloo-door animate-door-glow-5"></div>
            <div className="absolute top-[48%] left-[62%] w-[4px] h-[7px] bg-yellow-300/78 rounded igloo-door animate-door-glow-6"></div>
            <div className="absolute top-[50%] left-[72%] w-[4px] h-[7px] bg-orange-300/76 rounded igloo-door animate-door-glow-7"></div>
          </div>

          {/* Igloo Doorway Glows - Right Side */}
          <div className="absolute inset-0">
            <div className="absolute top-[58%] right-[6%] w-[6px] h-[10px] bg-orange-400/92 rounded igloo-door animate-door-glow-8"></div>
            <div className="absolute top-[52%] right-[16%] w-[5px] h-[9px] bg-amber-400/87 rounded igloo-door animate-door-glow-9"></div>
            <div className="absolute top-[62%] right-[12%] w-[5px] h-[9px] bg-yellow-400/85 rounded igloo-door animate-door-glow-10"></div>
          </div>

          {/* Central Palace Arched Windows */}
          <div className="absolute inset-0">
            {/* Main large arched windows */}
            <div className="absolute top-[48%] left-[46%] w-[7px] h-[12px] bg-yellow-300/95 rounded-t-full palace-window animate-palace-glow-1"></div>
            <div className="absolute top-[48%] left-[50%] w-[8px] h-[13px] bg-orange-300/100 rounded-t-full palace-window animate-palace-glow-2"></div>
            <div className="absolute top-[48%] left-[54%] w-[7px] h-[12px] bg-yellow-300/95 rounded-t-full palace-window animate-palace-glow-3"></div>
            
            {/* Side windows */}
            <div className="absolute top-[50%] left-[43%] w-[5px] h-[9px] bg-amber-300/85 rounded-t-full palace-window animate-palace-glow-4"></div>
            <div className="absolute top-[50%] left-[57%] w-[5px] h-[9px] bg-amber-300/85 rounded-t-full palace-window animate-palace-glow-5"></div>
          </div>

          {/* Path Lanterns */}
          <div className="absolute inset-0">
            {/* Front path lanterns */}
            <div className="absolute top-[72%] left-[48%] w-[4px] h-[8px] bg-cyan-200/95 rounded lantern-light animate-lantern-glow-1"></div>
            <div className="absolute top-[72%] left-[52%] w-[4px] h-[8px] bg-cyan-200/95 rounded lantern-light animate-lantern-glow-2"></div>
            <div className="absolute top-[68%] left-[47%] w-[3px] h-[7px] bg-cyan-100/90 rounded lantern-light animate-lantern-glow-3"></div>
            <div className="absolute top-[68%] left-[53%] w-[3px] h-[7px] bg-cyan-100/90 rounded lantern-light animate-lantern-glow-4"></div>
            
            {/* Cabin doorway - bottom left */}
            <div className="absolute top-[82%] left-[6%] w-[8px] h-[12px] bg-orange-400/100 rounded cabin-door animate-cabin-glow"></div>
          </div>

          {/* Chimney Smoke Plumes */}
          <div className="absolute inset-0">
            {/* Left chimneys */}
            <div className="absolute top-[28%] left-[8%] w-[15px] h-[15px] bg-gray-300/25 rounded-full chimney-smoke animate-smoke-rise-1"></div>
            <div className="absolute top-[32%] left-[15%] w-[12px] h-[12px] bg-gray-400/22 rounded-full chimney-smoke animate-smoke-rise-2"></div>
            
            {/* Center chimneys */}
            <div className="absolute top-[25%] left-[38%] w-[18px] h-[18px] bg-gray-300/28 rounded-full chimney-smoke animate-smoke-rise-3"></div>
            <div className="absolute top-[28%] left-[48%] w-[16px] h-[16px] bg-gray-400/26 rounded-full chimney-smoke animate-smoke-rise-4"></div>
            <div className="absolute top-[30%] left-[58%] w-[14px] h-[14px] bg-gray-300/24 rounded-full chimney-smoke animate-smoke-rise-5"></div>
            
            {/* Right chimneys */}
            <div className="absolute top-[28%] right-[10%] w-[15px] h-[15px] bg-gray-300/25 rounded-full chimney-smoke animate-smoke-rise-6"></div>
            <div className="absolute top-[32%] right-[18%] w-[13px] h-[13px] bg-gray-400/23 rounded-full chimney-smoke animate-smoke-rise-7"></div>
          </div>

          {/* Falling Snow Particles - Bold & Visible */}
          <div className="absolute inset-0">
            {/* Large snowflakes */}
            <div className="absolute top-[10%] left-[15%] w-[5px] h-[5px] bg-white/95 rounded-full snowflake animate-snow-fall-1"></div>
            <div className="absolute top-[5%] left-[35%] w-[6px] h-[6px] bg-white/100 rounded-full snowflake animate-snow-fall-2"></div>
            <div className="absolute top-[8%] left-[55%] w-[5px] h-[5px] bg-white/92 rounded-full snowflake animate-snow-fall-3"></div>
            <div className="absolute top-[12%] left-[75%] w-[6px] h-[6px] bg-white/98 rounded-full snowflake animate-snow-fall-4"></div>
            <div className="absolute top-[6%] left-[85%] w-[5px] h-[5px] bg-white/95 rounded-full snowflake animate-snow-fall-5"></div>
            
            {/* Medium snowflakes */}
            <div className="absolute top-[15%] left-[20%] w-[4px] h-[4px] bg-white/88 rounded-full snowflake animate-snow-fall-6"></div>
            <div className="absolute top-[10%] left-[45%] w-[4px] h-[4px] bg-white/90 rounded-full snowflake animate-snow-fall-7"></div>
            <div className="absolute top-[18%] left-[65%] w-[4px] h-[4px] bg-white/86 rounded-full snowflake animate-snow-fall-8"></div>
            <div className="absolute top-[12%] left-[80%] w-[4px] h-[4px] bg-white/92 rounded-full snowflake animate-snow-fall-9"></div>
            
            {/* Small snowflakes */}
            <div className="absolute top-[8%] left-[25%] w-[3px] h-[3px] bg-white/82 rounded-full snowflake animate-snow-fall-10"></div>
            <div className="absolute top-[14%] left-[50%] w-[3px] h-[3px] bg-white/80 rounded-full snowflake animate-snow-fall-11"></div>
            <div className="absolute top-[11%] left-[70%] w-[3px] h-[3px] bg-white/85 rounded-full snowflake animate-snow-fall-12"></div>
            
            {/* Additional snow layers */}
            <div className="absolute top-[7%] left-[10%] w-[4px] h-[4px] bg-white/88 rounded-full snowflake animate-snow-fall-13"></div>
            <div className="absolute top-[16%] left-[60%] w-[5px] h-[5px] bg-white/93 rounded-full snowflake animate-snow-fall-14"></div>
            <div className="absolute top-[9%] left-[90%] w-[4px] h-[4px] bg-white/90 rounded-full snowflake animate-snow-fall-15"></div>
          </div>

          {/* Ice/Snow Sparkles on Mountains - More Visible */}
          <div className="absolute inset-0">
            <div className="absolute top-[28%] left-[15%] w-[4px] h-[4px] bg-cyan-300/100 rounded-full ice-sparkle animate-mountain-sparkle-1"></div>
            <div className="absolute top-[26%] left-[30%] w-[4px] h-[4px] bg-white/100 rounded-full ice-sparkle animate-mountain-sparkle-2"></div>
            <div className="absolute top-[24%] left-[50%] w-[5px] h-[5px] bg-blue-200/100 rounded-full ice-sparkle animate-mountain-sparkle-3"></div>
            <div className="absolute top-[27%] left-[68%] w-[4px] h-[4px] bg-cyan-200/100 rounded-full ice-sparkle animate-mountain-sparkle-4"></div>
            <div className="absolute top-[25%] left-[82%] w-[4px] h-[4px] bg-white/100 rounded-full ice-sparkle animate-mountain-sparkle-5"></div>
            <div className="absolute top-[29%] left-[40%] w-[3px] h-[3px] bg-cyan-100/100 rounded-full ice-sparkle animate-mountain-sparkle-6"></div>
          </div>
          
          {/* Northern Lights / Aurora Borealis */}
          <div className="absolute inset-0">
            {/* Aurora waves */}
            <div className="absolute top-[8%] left-[10%] w-[280px] h-[90px] bg-gradient-to-r from-emerald-400/35 via-cyan-400/45 to-blue-400/28 aurora animate-aurora-1"></div>
            <div className="absolute top-[12%] right-[8%] w-[260px] h-[85px] bg-gradient-to-l from-cyan-400/38 via-emerald-300/42 to-transparent aurora animate-aurora-2"></div>
            <div className="absolute top-[6%] left-[35%] w-[240px] h-[75px] bg-gradient-to-r from-transparent via-emerald-400/40 to-cyan-300/32 aurora animate-aurora-3"></div>
            
            {/* Aurora sparkles */}
            <div className="absolute top-[10%] left-[18%] w-[5px] h-[5px] bg-emerald-300/100 rounded-full aurora-sparkle animate-aurora-sparkle-1"></div>
            <div className="absolute top-[14%] left-[45%] w-[5px] h-[5px] bg-cyan-200/100 rounded-full aurora-sparkle animate-aurora-sparkle-2"></div>
            <div className="absolute top-[8%] left-[72%] w-[5px] h-[5px] bg-emerald-400/100 rounded-full aurora-sparkle animate-aurora-sparkle-3"></div>
            <div className="absolute top-[16%] right-[20%] w-[5px] h-[5px] bg-cyan-300/100 rounded-full aurora-sparkle animate-aurora-sparkle-4"></div>
            <div className="absolute top-[12%] left-[55%] w-[4px] h-[4px] bg-emerald-200/100 rounded-full aurora-sparkle animate-aurora-sparkle-5"></div>
          </div>

          {/* Arctic Atmospheric Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-200/5 via-blue-100/3 to-transparent animate-arctic-atmosphere"></div>
          
          {/* Village Warmth Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-orange-100/12 via-transparent to-transparent animate-village-warmth"></div>
        </div>
        
        <style jsx>{`
          .igloo-door {
            filter: blur(10px);
            box-shadow: 0 0 40px currentColor, 0 0 80px currentColor, 0 0 120px currentColor, 0 0 160px currentColor;
          }
          
          .palace-window {
            filter: blur(12px);
            box-shadow: 0 0 50px currentColor, 0 0 100px currentColor, 0 0 150px currentColor, 0 0 200px currentColor;
          }
          
          .lantern-light {
            filter: blur(8px);
            box-shadow: 0 0 35px currentColor, 0 0 70px currentColor, 0 0 105px currentColor, 0 0 140px currentColor;
          }
          
          .cabin-door {
            filter: blur(11px);
            box-shadow: 0 0 45px currentColor, 0 0 90px currentColor, 0 0 135px currentColor, 0 0 180px currentColor;
          }
          
          .chimney-smoke {
            filter: blur(12px);
            opacity: 0;
          }
          
          .snowflake {
            box-shadow: 0 0 25px currentColor, 0 0 50px currentColor, 0 0 75px currentColor;
            filter: blur(1px);
          }
          
          .ice-sparkle {
            box-shadow: 0 0 40px currentColor, 0 0 80px currentColor, 0 0 120px currentColor, 0 0 160px currentColor;
            filter: blur(0.5px);
          }
          
          .aurora {
            filter: blur(45px);
            opacity: 0.35;
          }
          
          .aurora-sparkle {
            box-shadow: 0 0 50px currentColor, 0 0 100px currentColor, 0 0 150px currentColor, 0 0 200px currentColor;
            filter: blur(0.6px);
          }
          
          .animate-effects .igloo-door {
            animation-play-state: running;
          }
          
          .animate-effects .palace-window {
            animation-play-state: running;
          }
          
          .animate-effects .lantern-light {
            animation-play-state: running;
          }
          
          .animate-effects .cabin-door {
            animation-play-state: running;
          }
          
          .animate-effects .chimney-smoke {
            animation-play-state: running;
          }
          
          .animate-effects .snowflake {
            animation-play-state: running;
          }
          
          .animate-effects .ice-sparkle {
            animation-play-state: running;
          }
          
          .animate-effects .aurora {
            animation-play-state: running;
          }
          
          .animate-effects .aurora-sparkle {
            animation-play-state: running;
          }
          
          @keyframes door-glow-1 { 0%, 100% { opacity: 0.9; } 50% { opacity: 1; } }
          @keyframes door-glow-2 { 0%, 100% { opacity: 0.85; } 55% { opacity: 1; } }
          @keyframes door-glow-3 { 0%, 100% { opacity: 0.88; } 48% { opacity: 1; } }
          @keyframes door-glow-4 { 0%, 100% { opacity: 0.8; } 52% { opacity: 1; } }
          @keyframes door-glow-5 { 0%, 100% { opacity: 0.75; } 60% { opacity: 1; } }
          @keyframes door-glow-6 { 0%, 100% { opacity: 0.78; } 45% { opacity: 1; } }
          @keyframes door-glow-7 { 0%, 100% { opacity: 0.76; } 58% { opacity: 1; } }
          @keyframes door-glow-8 { 0%, 100% { opacity: 0.92; } 50% { opacity: 1; } }
          @keyframes door-glow-9 { 0%, 100% { opacity: 0.87; } 54% { opacity: 1; } }
          @keyframes door-glow-10 { 0%, 100% { opacity: 0.85; } 47% { opacity: 1; } }
          
          @keyframes palace-glow-1 {
            0%, 100% { opacity: 0.95; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.05); }
          }
          
          @keyframes palace-glow-2 {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.08); }
          }
          
          @keyframes palace-glow-3 {
            0%, 100% { opacity: 0.95; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.05); }
          }
          
          @keyframes palace-glow-4 {
            0%, 100% { opacity: 0.85; transform: scale(1); }
            55% { opacity: 1; transform: scale(1.04); }
          }
          
          @keyframes palace-glow-5 {
            0%, 100% { opacity: 0.85; transform: scale(1); }
            55% { opacity: 1; transform: scale(1.04); }
          }
          
          @keyframes lantern-glow-1 { 0%, 100% { opacity: 0.95; } 50% { opacity: 1; } }
          @keyframes lantern-glow-2 { 0%, 100% { opacity: 0.95; } 55% { opacity: 1; } }
          @keyframes lantern-glow-3 { 0%, 100% { opacity: 0.9; } 48% { opacity: 1; } }
          @keyframes lantern-glow-4 { 0%, 100% { opacity: 0.9; } 52% { opacity: 1; } }
          
          @keyframes cabin-glow {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.06); }
          }
          
          @keyframes aurora-1 {
            0%, 100% { opacity: 0.35; transform: translateY(0px) scaleY(1) scaleX(1); }
            50% { opacity: 0.75; transform: translateY(-8px) scaleY(1.3) scaleX(1.1); }
          }
          
          @keyframes aurora-2 {
            0%, 100% { opacity: 0.38; transform: translateY(0px) scaleY(1) scaleX(1); }
            60% { opacity: 0.72; transform: translateY(-6px) scaleY(1.25) scaleX(1.08); }
          }
          
          @keyframes aurora-3 {
            0%, 100% { opacity: 0.4; transform: translateY(0px) scaleY(1) scaleX(1); }
            55% { opacity: 0.78; transform: translateY(-10px) scaleY(1.35) scaleX(1.12); }
          }
          
          @keyframes aurora-sparkle-1 {
            0%, 70%, 100% { opacity: 0; transform: scale(1); }
            75%, 85% { opacity: 1; transform: scale(3.5); }
            80% { opacity: 0.9; transform: scale(3); }
          }
          
          @keyframes aurora-sparkle-2 {
            0%, 65%, 100% { opacity: 0; transform: scale(1); }
            70%, 80% { opacity: 1; transform: scale(3.6); }
            75% { opacity: 0.95; transform: scale(3.1); }
          }
          
          @keyframes aurora-sparkle-3 {
            0%, 75%, 100% { opacity: 0; transform: scale(1); }
            80%, 90% { opacity: 1; transform: scale(3.4); }
            85% { opacity: 0.9; transform: scale(2.9); }
          }
          
          @keyframes aurora-sparkle-4 {
            0%, 80%, 100% { opacity: 0; transform: scale(1); }
            85%, 95% { opacity: 1; transform: scale(3.5); }
            90% { opacity: 0.9; transform: scale(3); }
          }
          
          @keyframes aurora-sparkle-5 {
            0%, 60%, 100% { opacity: 0; transform: scale(1); }
            65%, 75% { opacity: 1; transform: scale(3.3); }
            70% { opacity: 0.85; transform: scale(2.8); }
          }
          
          @keyframes smoke-rise-1 {
            0% { opacity: 0; transform: translateY(0px) scale(0.5); }
            50% { opacity: 0.35; transform: translateY(-60px) scale(1.5); }
            100% { opacity: 0; transform: translateY(-120px) scale(2.5); }
          }
          
          @keyframes smoke-rise-2 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) scale(0.4); }
            50% { opacity: 0.3; transform: translateY(-50px) translateX(15px) scale(1.3); }
            100% { opacity: 0; transform: translateY(-100px) translateX(25px) scale(2.2); }
          }
          
          @keyframes smoke-rise-3 {
            0% { opacity: 0; transform: translateY(0px) scale(0.6); }
            50% { opacity: 0.38; transform: translateY(-70px) scale(1.6); }
            100% { opacity: 0; transform: translateY(-140px) scale(2.8); }
          }
          
          @keyframes smoke-rise-4 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) scale(0.5); }
            50% { opacity: 0.36; transform: translateY(-65px) translateX(-12px) scale(1.5); }
            100% { opacity: 0; transform: translateY(-130px) translateX(-20px) scale(2.6); }
          }
          
          @keyframes smoke-rise-5 {
            0% { opacity: 0; transform: translateY(0px) scale(0.45); }
            50% { opacity: 0.32; transform: translateY(-55px) scale(1.4); }
            100% { opacity: 0; transform: translateY(-110px) scale(2.4); }
          }
          
          @keyframes smoke-rise-6 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) scale(0.5); }
            50% { opacity: 0.35; transform: translateY(-60px) translateX(18px) scale(1.5); }
            100% { opacity: 0; transform: translateY(-120px) translateX(30px) scale(2.5); }
          }
          
          @keyframes smoke-rise-7 {
            0% { opacity: 0; transform: translateY(0px) scale(0.42); }
            50% { opacity: 0.31; transform: translateY(-52px) scale(1.35); }
            100% { opacity: 0; transform: translateY(-105px) scale(2.3); }
          }
          
          @keyframes snow-fall-1 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.6; transform: translateY(300px) translateX(20px); }
            100% { opacity: 0; transform: translateY(600px) translateX(35px); }
          }
          
          @keyframes snow-fall-2 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.65; transform: translateY(320px) translateX(-15px); }
            100% { opacity: 0; transform: translateY(640px) translateX(-25px); }
          }
          
          @keyframes snow-fall-3 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.58; transform: translateY(310px) translateX(18px); }
            100% { opacity: 0; transform: translateY(620px) translateX(30px); }
          }
          
          @keyframes snow-fall-4 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.62; transform: translateY(325px) translateX(-12px); }
            100% { opacity: 0; transform: translateY(650px) translateX(-22px); }
          }
          
          @keyframes snow-fall-5 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.6; transform: translateY(315px) translateX(22px); }
            100% { opacity: 0; transform: translateY(630px) translateX(38px); }
          }
          
          @keyframes snow-fall-6 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.5; transform: translateY(290px) translateX(-10px); }
            100% { opacity: 0; transform: translateY(580px) translateX(-18px); }
          }
          
          @keyframes snow-fall-7 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.52; transform: translateY(305px) translateX(14px); }
            100% { opacity: 0; transform: translateY(610px) translateX(25px); }
          }
          
          @keyframes snow-fall-8 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.48; transform: translateY(295px) translateX(-16px); }
            100% { opacity: 0; transform: translateY(590px) translateX(-28px); }
          }
          
          @keyframes snow-fall-9 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.55; transform: translateY(312px) translateX(11px); }
            100% { opacity: 0; transform: translateY(624px) translateX(20px); }
          }
          
          @keyframes snow-fall-10 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.45; transform: translateY(285px) translateX(-8px); }
            100% { opacity: 0; transform: translateY(570px) translateX(-15px); }
          }
          
          @keyframes snow-fall-11 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.42; transform: translateY(298px) translateX(13px); }
            100% { opacity: 0; transform: translateY(596px) translateX(23px); }
          }
          
          @keyframes snow-fall-12 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.85; transform: translateY(308px) translateX(-11px); }
            100% { opacity: 0; transform: translateY(616px) translateX(-20px); }
          }
          
          @keyframes snow-fall-13 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.88; transform: translateY(295px) translateX(16px); }
            100% { opacity: 0; transform: translateY(590px) translateX(28px); }
          }
          
          @keyframes snow-fall-14 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.93; transform: translateY(318px) translateX(-14px); }
            100% { opacity: 0; transform: translateY(636px) translateX(-24px); }
          }
          
          @keyframes snow-fall-15 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.9; transform: translateY(302px) translateX(19px); }
            100% { opacity: 0; transform: translateY(604px) translateX(32px); }
          }
          
          @keyframes mountain-sparkle-1 {
            0%, 75%, 100% { opacity: 0; transform: scale(1); }
            80%, 90% { opacity: 1; transform: scale(3); }
            85% { opacity: 0.8; transform: scale(2.5); }
          }
          
          @keyframes mountain-sparkle-2 {
            0%, 68%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            73%, 83% { opacity: 1; transform: scale(3.2) rotate(360deg); }
            78% { opacity: 0.75; transform: scale(2.6) rotate(180deg); }
          }
          
          @keyframes mountain-sparkle-3 {
            0%, 82%, 100% { opacity: 0; transform: scale(1); }
            87%, 95% { opacity: 1; transform: scale(3.4); }
            91% { opacity: 0.85; transform: scale(2.8); }
          }
          
          @keyframes mountain-sparkle-4 {
            0%, 70%, 100% { opacity: 0; transform: scale(1); }
            75%, 85% { opacity: 1; transform: scale(3); }
            80% { opacity: 0.8; transform: scale(2.5); }
          }
          
          @keyframes mountain-sparkle-5 {
            0%, 78%, 100% { opacity: 0; transform: scale(1); }
            83%, 93% { opacity: 1; transform: scale(3.1); }
            88% { opacity: 0.82; transform: scale(2.6); }
          }
          
          @keyframes mountain-sparkle-6 {
            0%, 65%, 100% { opacity: 0; transform: scale(1); }
            70%, 80% { opacity: 1; transform: scale(2.8); }
            75% { opacity: 0.78; transform: scale(2.3); }
          }
          
          @keyframes arctic-atmosphere {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 0.75; }
          }
          
          @keyframes village-warmth {
            0%, 100% { opacity: 1; }
            50% { opacity: 1; }
          }
          
          .animate-door-glow-1 { animation: door-glow-1 6s ease-in-out infinite; }
          .animate-door-glow-2 { animation: door-glow-2 7s ease-in-out infinite 0.5s; }
          .animate-door-glow-3 { animation: door-glow-3 5.5s ease-in-out infinite 1s; }
          .animate-door-glow-4 { animation: door-glow-4 6.5s ease-in-out infinite 1.5s; }
          .animate-door-glow-5 { animation: door-glow-5 7.5s ease-in-out infinite 2s; }
          .animate-door-glow-6 { animation: door-glow-6 6.2s ease-in-out infinite 2.5s; }
          .animate-door-glow-7 { animation: door-glow-7 6.8s ease-in-out infinite 3s; }
          .animate-door-glow-8 { animation: door-glow-8 7.2s ease-in-out infinite 3.5s; }
          .animate-door-glow-9 { animation: door-glow-9 5.8s ease-in-out infinite 4s; }
          .animate-door-glow-10 { animation: door-glow-10 6.4s ease-in-out infinite 4.5s; }
          
          .animate-palace-glow-1 { animation: palace-glow-1 5s ease-in-out infinite; }
          .animate-palace-glow-2 { animation: palace-glow-2 5.5s ease-in-out infinite 1s; }
          .animate-palace-glow-3 { animation: palace-glow-3 6s ease-in-out infinite 2s; }
          .animate-palace-glow-4 { animation: palace-glow-4 5.2s ease-in-out infinite 0.5s; }
          .animate-palace-glow-5 { animation: palace-glow-5 5.8s ease-in-out infinite 1.5s; }
          
          .animate-lantern-glow-1 { animation: lantern-glow-1 4s ease-in-out infinite; }
          .animate-lantern-glow-2 { animation: lantern-glow-2 4.5s ease-in-out infinite 0.5s; }
          .animate-lantern-glow-3 { animation: lantern-glow-3 4.2s ease-in-out infinite 1s; }
          .animate-lantern-glow-4 { animation: lantern-glow-4 4.8s ease-in-out infinite 1.5s; }
          
          .animate-cabin-glow { animation: cabin-glow 5.5s ease-in-out infinite; }
          
          .animate-smoke-rise-1 { animation: smoke-rise-1 8s ease-out infinite; }
          .animate-smoke-rise-2 { animation: smoke-rise-2 9s ease-out infinite 2s; }
          .animate-smoke-rise-3 { animation: smoke-rise-3 7.5s ease-out infinite 4s; }
          .animate-smoke-rise-4 { animation: smoke-rise-4 8.5s ease-out infinite 1s; }
          .animate-smoke-rise-5 { animation: smoke-rise-5 9.5s ease-out infinite 3s; }
          .animate-smoke-rise-6 { animation: smoke-rise-6 8.2s ease-out infinite 5s; }
          .animate-smoke-rise-7 { animation: smoke-rise-7 8.8s ease-out infinite 6s; }
          
          .animate-snow-fall-1 { animation: snow-fall-1 12s linear infinite; }
          .animate-snow-fall-2 { animation: snow-fall-2 14s linear infinite 2s; }
          .animate-snow-fall-3 { animation: snow-fall-3 13s linear infinite 4s; }
          .animate-snow-fall-4 { animation: snow-fall-4 15s linear infinite 6s; }
          .animate-snow-fall-5 { animation: snow-fall-5 13.5s linear infinite 8s; }
          .animate-snow-fall-6 { animation: snow-fall-6 11s linear infinite 1s; }
          .animate-snow-fall-7 { animation: snow-fall-7 12.5s linear infinite 3s; }
          .animate-snow-fall-8 { animation: snow-fall-8 14.5s linear infinite 5s; }
          .animate-snow-fall-9 { animation: snow-fall-9 13.2s linear infinite 7s; }
          .animate-snow-fall-10 { animation: snow-fall-10 10.5s linear infinite 9s; }
          .animate-snow-fall-11 { animation: snow-fall-11 11.8s linear infinite 2.5s; }
          .animate-snow-fall-12 { animation: snow-fall-12 13.8s linear infinite 4.5s; }
          .animate-snow-fall-13 { animation: snow-fall-13 12.2s linear infinite 1.5s; }
          .animate-snow-fall-14 { animation: snow-fall-14 14.2s linear infinite 6.5s; }
          .animate-snow-fall-15 { animation: snow-fall-15 13.5s linear infinite 8.5s; }
          
          .animate-mountain-sparkle-1 { animation: mountain-sparkle-1 8s linear infinite; }
          .animate-mountain-sparkle-2 { animation: mountain-sparkle-2 9s linear infinite 2s; }
          .animate-mountain-sparkle-3 { animation: mountain-sparkle-3 7.5s linear infinite 4s; }
          .animate-mountain-sparkle-4 { animation: mountain-sparkle-4 8.5s linear infinite 6s; }
          .animate-mountain-sparkle-5 { animation: mountain-sparkle-5 9.5s linear infinite 3s; }
          .animate-mountain-sparkle-6 { animation: mountain-sparkle-6 8.2s linear infinite 5s; }
          
          .animate-aurora-1 { animation: aurora-1 18s ease-in-out infinite; }
          .animate-aurora-2 { animation: aurora-2 22s ease-in-out infinite 6s; }
          .animate-aurora-3 { animation: aurora-3 20s ease-in-out infinite 3s; }
          
          .animate-aurora-sparkle-1 { animation: aurora-sparkle-1 8s linear infinite; }
          .animate-aurora-sparkle-2 { animation: aurora-sparkle-2 9s linear infinite 2s; }
          .animate-aurora-sparkle-3 { animation: aurora-sparkle-3 7.5s linear infinite 4s; }
          .animate-aurora-sparkle-4 { animation: aurora-sparkle-4 8.5s linear infinite 1.5s; }
          .animate-aurora-sparkle-5 { animation: aurora-sparkle-5 10s linear infinite 3s; }
          
          .animate-arctic-atmosphere { animation: arctic-atmosphere 18s ease-in-out infinite; }
          .animate-village-warmth { animation: village-warmth 15s ease-in-out infinite; }
        `}</style>
      </div>
    </Card>
  );
}

