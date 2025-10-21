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
          {/* Igloo Window Glows - Left Side */}
          <div className="absolute inset-0">
            <div className="absolute top-[42%] left-[8%] w-[4px] h-[6px] bg-orange-300/60 rounded igloo-window animate-window-glow-1"></div>
            <div className="absolute top-[48%] left-[6%] w-[3px] h-[5px] bg-yellow-300/55 rounded igloo-window animate-window-glow-2"></div>
            <div className="absolute top-[52%] left-[12%] w-[4px] h-[6px] bg-orange-300/58 rounded igloo-window animate-window-glow-3"></div>
            <div className="absolute top-[58%] left-[5%] w-[3px] h-[5px] bg-yellow-200/50 rounded igloo-window animate-window-glow-4"></div>
            <div className="absolute top-[65%] left-[10%] w-[4px] h-[6px] bg-orange-300/62 rounded igloo-window animate-window-glow-5"></div>
          </div>

          {/* Igloo Window Glows - Center */}
          <div className="absolute inset-0">
            <div className="absolute top-[35%] left-[40%] w-[4px] h-[6px] bg-yellow-300/65 rounded igloo-window animate-window-glow-6"></div>
            <div className="absolute top-[38%] left-[48%] w-[5px] h-[7px] bg-orange-300/68 rounded igloo-window animate-window-glow-7"></div>
            <div className="absolute top-[42%] left-[55%] w-[4px] h-[6px] bg-yellow-300/60 rounded igloo-window animate-window-glow-8"></div>
            <div className="absolute top-[48%] left-[45%] w-[3px] h-[5px] bg-orange-200/55 rounded igloo-window animate-window-glow-9"></div>
            <div className="absolute top-[52%] left-[52%] w-[4px] h-[6px] bg-yellow-300/63 rounded igloo-window animate-window-glow-10"></div>
          </div>

          {/* Igloo Window Glows - Right Side */}
          <div className="absolute inset-0">
            <div className="absolute top-[40%] right-[8%] w-[4px] h-[6px] bg-orange-300/60 rounded igloo-window animate-window-glow-11"></div>
            <div className="absolute top-[45%] right-[15%] w-[3px] h-[5px] bg-yellow-300/57 rounded igloo-window animate-window-glow-12"></div>
            <div className="absolute top-[50%] right-[10%] w-[4px] h-[6px] bg-orange-300/62 rounded igloo-window animate-window-glow-13"></div>
            <div className="absolute top-[56%] right-[18%] w-[3px] h-[5px] bg-yellow-200/54 rounded igloo-window animate-window-glow-14"></div>
            <div className="absolute top-[62%] right-[12%] w-[4px] h-[6px] bg-orange-300/59 rounded igloo-window animate-window-glow-15"></div>
          </div>

          {/* Central Hall Large Windows */}
          <div className="absolute inset-0">
            <div className="absolute top-[42%] left-[30%] w-[5px] h-[7px] bg-orange-300/70 rounded hall-window animate-hall-glow-1"></div>
            <div className="absolute top-[42%] left-[35%] w-[5px] h-[7px] bg-yellow-300/68 rounded hall-window animate-hall-glow-2"></div>
            <div className="absolute top-[45%] left-[32%] w-[4px] h-[6px] bg-orange-300/65 rounded hall-window animate-hall-glow-3"></div>
          </div>

          {/* Campfire Spots */}
          <div className="absolute inset-0">
            {/* Center campfire */}
            <div className="absolute top-[72%] left-[50%] w-[12px] h-[8px] bg-orange-400/75 rounded-full campfire animate-campfire-flicker-1"></div>
            <div className="absolute top-[73%] left-[50.5%] w-[8px] h-[6px] bg-yellow-300/85 rounded-full campfire animate-campfire-flicker-2"></div>
            <div className="absolute top-[74%] left-[51%] w-[4px] h-[3px] bg-yellow-100/90 rounded-full campfire animate-campfire-core-1"></div>
            
            {/* Left side campfire */}
            <div className="absolute top-[78%] left-[25%] w-[10px] h-[7px] bg-orange-400/70 rounded-full campfire animate-campfire-flicker-3"></div>
            <div className="absolute top-[79%] left-[25.5%] w-[6px] h-[5px] bg-yellow-300/80 rounded-full campfire animate-campfire-core-2"></div>
            
            {/* Right side campfire */}
            <div className="absolute top-[76%] right-[20%] w-[10px] h-[7px] bg-orange-400/72 rounded-full campfire animate-campfire-flicker-4"></div>
            <div className="absolute top-[77%] right-[19.5%] w-[6px] h-[5px] bg-yellow-300/82 rounded-full campfire animate-campfire-core-3"></div>
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

          {/* Falling Snow Particles */}
          <div className="absolute inset-0">
            {/* Large snowflakes */}
            <div className="absolute top-[10%] left-[15%] w-[3px] h-[3px] bg-white/60 rounded-full snowflake animate-snow-fall-1"></div>
            <div className="absolute top-[5%] left-[35%] w-[4px] h-[4px] bg-white/65 rounded-full snowflake animate-snow-fall-2"></div>
            <div className="absolute top-[8%] left-[55%] w-[3px] h-[3px] bg-white/58 rounded-full snowflake animate-snow-fall-3"></div>
            <div className="absolute top-[12%] left-[75%] w-[4px] h-[4px] bg-white/62 rounded-full snowflake animate-snow-fall-4"></div>
            <div className="absolute top-[6%] left-[85%] w-[3px] h-[3px] bg-white/60 rounded-full snowflake animate-snow-fall-5"></div>
            
            {/* Medium snowflakes */}
            <div className="absolute top-[15%] left-[20%] w-[2px] h-[2px] bg-white/50 rounded-full snowflake animate-snow-fall-6"></div>
            <div className="absolute top-[10%] left-[45%] w-[2px] h-[2px] bg-white/52 rounded-full snowflake animate-snow-fall-7"></div>
            <div className="absolute top-[18%] left-[65%] w-[2px] h-[2px] bg-white/48 rounded-full snowflake animate-snow-fall-8"></div>
            <div className="absolute top-[12%] left-[80%] w-[2px] h-[2px] bg-white/55 rounded-full snowflake animate-snow-fall-9"></div>
            
            {/* Small snowflakes */}
            <div className="absolute top-[8%] left-[25%] w-[1px] h-[1px] bg-white/45 rounded-full snowflake animate-snow-fall-10"></div>
            <div className="absolute top-[14%] left-[50%] w-[1px] h-[1px] bg-white/42 rounded-full snowflake animate-snow-fall-11"></div>
            <div className="absolute top-[11%] left-[70%] w-[1px] h-[1px] bg-white/48 rounded-full snowflake animate-snow-fall-12"></div>
          </div>

          {/* Ice/Snow Sparkles on Mountains */}
          <div className="absolute inset-0">
            <div className="absolute top-[18%] left-[30%] w-[2px] h-[2px] bg-cyan-200/85 rounded-full ice-sparkle animate-mountain-sparkle-1"></div>
            <div className="absolute top-[22%] left-[50%] w-[3px] h-[3px] bg-white/90 rounded-full ice-sparkle animate-mountain-sparkle-2"></div>
            <div className="absolute top-[20%] left-[65%] w-[2px] h-[2px] bg-blue-100/80 rounded-full ice-sparkle animate-mountain-sparkle-3"></div>
            <div className="absolute top-[25%] left-[40%] w-[2px] h-[2px] bg-cyan-100/85 rounded-full ice-sparkle animate-mountain-sparkle-4"></div>
            <div className="absolute top-[24%] left-[75%] w-[2px] h-[2px] bg-white/88 rounded-full ice-sparkle animate-mountain-sparkle-5"></div>
          </div>

          {/* Village Activity Warmth Glow */}
          <div className="absolute inset-0">
            <div className="absolute top-[65%] left-[35%] w-[40px] h-[25px] bg-orange-200/12 rounded-full activity-glow animate-activity-warmth-1"></div>
            <div className="absolute top-[70%] left-[55%] w-[35px] h-[20px] bg-yellow-200/10 rounded-full activity-glow animate-activity-warmth-2"></div>
            <div className="absolute top-[68%] left-[20%] w-[30px] h-[18px] bg-orange-200/11 rounded-full activity-glow animate-activity-warmth-3"></div>
          </div>

          {/* Cold Wind Effect */}
          <div className="absolute inset-0">
            <div className="absolute top-[40%] left-[0%] w-[80px] h-[20px] bg-white/8 rounded-full wind-effect animate-wind-drift-1"></div>
            <div className="absolute top-[35%] right-[0%] w-[70px] h-[18px] bg-cyan-100/7 rounded-full wind-effect animate-wind-drift-2"></div>
            <div className="absolute top-[50%] left-[0%] w-[60px] h-[15px] bg-white/6 rounded-full wind-effect animate-wind-drift-3"></div>
          </div>

          {/* Arctic Atmospheric Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-200/4 via-blue-100/3 to-transparent animate-arctic-atmosphere"></div>
          
          {/* Village Warmth Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-orange-100/8 via-transparent to-transparent animate-village-warmth"></div>
        </div>
        
        <style jsx>{`
          .igloo-window {
            filter: blur(4px);
            box-shadow: 0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor;
          }
          
          .hall-window {
            filter: blur(5px);
            box-shadow: 0 0 25px currentColor, 0 0 50px currentColor, 0 0 75px currentColor;
          }
          
          .campfire {
            filter: blur(6px);
            box-shadow: 0 0 30px currentColor, 0 0 60px currentColor, 0 0 90px currentColor;
          }
          
          .chimney-smoke {
            filter: blur(12px);
            opacity: 0;
          }
          
          .snowflake {
            box-shadow: 0 0 10px currentColor, 0 0 20px currentColor;
            filter: blur(0.7px);
          }
          
          .ice-sparkle {
            box-shadow: 0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor;
            filter: blur(0.3px);
          }
          
          .activity-glow {
            filter: blur(22px);
          }
          
          .wind-effect {
            filter: blur(18px);
            opacity: 0;
          }
          
          .animate-effects .igloo-window {
            animation-play-state: running;
          }
          
          .animate-effects .hall-window {
            animation-play-state: running;
          }
          
          .animate-effects .campfire {
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
          
          .animate-effects .activity-glow {
            animation-play-state: running;
          }
          
          .animate-effects .wind-effect {
            animation-play-state: running;
          }
          
          @keyframes window-glow-1 {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; }
          }
          
          @keyframes window-glow-2 {
            0%, 100% { opacity: 0.75; }
            60% { opacity: 1; }
          }
          
          @keyframes window-glow-3 {
            0%, 100% { opacity: 0.78; }
            40% { opacity: 1; }
          }
          
          @keyframes window-glow-4 {
            0%, 100% { opacity: 0.7; }
            70% { opacity: 0.98; }
          }
          
          @keyframes window-glow-5 {
            0%, 100% { opacity: 0.82; }
            45% { opacity: 1; }
          }
          
          @keyframes window-glow-6 {
            0%, 100% { opacity: 0.85; }
            55% { opacity: 1; }
          }
          
          @keyframes window-glow-7 {
            0%, 100% { opacity: 0.88; }
            50% { opacity: 1; }
          }
          
          @keyframes window-glow-8 {
            0%, 100% { opacity: 0.8; }
            65% { opacity: 1; }
          }
          
          @keyframes window-glow-9 {
            0%, 100% { opacity: 0.75; }
            48% { opacity: 1; }
          }
          
          @keyframes window-glow-10 {
            0%, 100% { opacity: 0.83; }
            58% { opacity: 1; }
          }
          
          @keyframes window-glow-11 {
            0%, 100% { opacity: 0.8; }
            52% { opacity: 1; }
          }
          
          @keyframes window-glow-12 {
            0%, 100% { opacity: 0.77; }
            62% { opacity: 1; }
          }
          
          @keyframes window-glow-13 {
            0%, 100% { opacity: 0.82; }
            47% { opacity: 1; }
          }
          
          @keyframes window-glow-14 {
            0%, 100% { opacity: 0.74; }
            68% { opacity: 0.99; }
          }
          
          @keyframes window-glow-15 {
            0%, 100% { opacity: 0.79; }
            54% { opacity: 1; }
          }
          
          @keyframes hall-glow-1 {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 0.95; }
          }
          
          @keyframes hall-glow-2 {
            0%, 100% { opacity: 0.68; }
            60% { opacity: 0.92; }
          }
          
          @keyframes hall-glow-3 {
            0%, 100% { opacity: 0.65; }
            55% { opacity: 0.9; }
          }
          
          @keyframes campfire-flicker-1 {
            0%, 100% { opacity: 0.75; transform: scale(1); }
            25% { opacity: 0.95; transform: scale(1.2); }
            50% { opacity: 0.55; transform: scale(0.9); }
            75% { opacity: 0.85; transform: scale(1.1); }
          }
          
          @keyframes campfire-flicker-2 {
            0%, 100% { opacity: 0.85; transform: scale(1) rotate(0deg); }
            30% { opacity: 1; transform: scale(1.3) rotate(5deg); }
            60% { opacity: 0.5; transform: scale(0.8) rotate(-3deg); }
            90% { opacity: 0.9; transform: scale(1.15) rotate(2deg); }
          }
          
          @keyframes campfire-flicker-3 {
            0%, 100% { opacity: 0.7; transform: scale(1); }
            40% { opacity: 0.9; transform: scale(1.25); }
            70% { opacity: 0.5; transform: scale(0.85); }
          }
          
          @keyframes campfire-flicker-4 {
            0%, 100% { opacity: 0.72; transform: scale(1); }
            35% { opacity: 0.92; transform: scale(1.22); }
            65% { opacity: 0.52; transform: scale(0.88); }
          }
          
          @keyframes campfire-core-1 {
            0%, 100% { opacity: 0.9; transform: scale(1); }
            40% { opacity: 1; transform: scale(1.5); }
            70% { opacity: 0.6; transform: scale(0.7); }
          }
          
          @keyframes campfire-core-2 {
            0%, 100% { opacity: 0.8; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.4); }
            75% { opacity: 0.5; transform: scale(0.8); }
          }
          
          @keyframes campfire-core-3 {
            0%, 100% { opacity: 0.82; transform: scale(1); }
            45% { opacity: 1; transform: scale(1.45); }
            72% { opacity: 0.55; transform: scale(0.75); }
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
            50% { opacity: 0.48; transform: translateY(308px) translateX(-11px); }
            100% { opacity: 0; transform: translateY(616px) translateX(-20px); }
          }
          
          @keyframes mountain-sparkle-1 {
            0%, 75%, 100% { opacity: 0; transform: scale(1); }
            80%, 90% { opacity: 0.85; transform: scale(1.5); }
            85% { opacity: 0.4; transform: scale(1.2); }
          }
          
          @keyframes mountain-sparkle-2 {
            0%, 68%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            73%, 83% { opacity: 0.9; transform: scale(1.6) rotate(360deg); }
            78% { opacity: 0.3; transform: scale(1.3) rotate(180deg); }
          }
          
          @keyframes mountain-sparkle-3 {
            0%, 82%, 100% { opacity: 0; transform: scale(1); }
            87%, 95% { opacity: 0.8; transform: scale(1.4); }
            91% { opacity: 0.35; transform: scale(1.1); }
          }
          
          @keyframes mountain-sparkle-4 {
            0%, 70%, 100% { opacity: 0; transform: scale(1); }
            75%, 85% { opacity: 0.85; transform: scale(1.5); }
            80% { opacity: 0.38; transform: scale(1.25); }
          }
          
          @keyframes mountain-sparkle-5 {
            0%, 78%, 100% { opacity: 0; transform: scale(1); }
            83%, 93% { opacity: 0.88; transform: scale(1.55); }
            88% { opacity: 0.4; transform: scale(1.28); }
          }
          
          @keyframes activity-warmth-1 {
            0%, 100% { opacity: 0.12; transform: scale(1); }
            50% { opacity: 0.2; transform: scale(1.15); }
          }
          
          @keyframes activity-warmth-2 {
            0%, 100% { opacity: 0.10; transform: scale(1); }
            60% { opacity: 0.18; transform: scale(1.12); }
          }
          
          @keyframes activity-warmth-3 {
            0%, 100% { opacity: 0.11; transform: scale(1); }
            55% { opacity: 0.19; transform: scale(1.13); }
          }
          
          @keyframes wind-drift-1 {
            0% { opacity: 0; transform: translateX(-50px); }
            50% { opacity: 0.12; transform: translateX(400px); }
            100% { opacity: 0; transform: translateX(850px); }
          }
          
          @keyframes wind-drift-2 {
            0% { opacity: 0; transform: translateX(50px); }
            50% { opacity: 0.10; transform: translateX(-380px); }
            100% { opacity: 0; transform: translateX(-810px); }
          }
          
          @keyframes wind-drift-3 {
            0% { opacity: 0; transform: translateX(-40px); }
            50% { opacity: 0.08; transform: translateX(360px); }
            100% { opacity: 0; transform: translateX(760px); }
          }
          
          @keyframes arctic-atmosphere {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.6; }
          }
          
          @keyframes village-warmth {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; }
          }
          
          .animate-window-glow-1 { animation: window-glow-1 6s ease-in-out infinite; }
          .animate-window-glow-2 { animation: window-glow-2 7s ease-in-out infinite 0.5s; }
          .animate-window-glow-3 { animation: window-glow-3 5.5s ease-in-out infinite 1s; }
          .animate-window-glow-4 { animation: window-glow-4 6.5s ease-in-out infinite 1.5s; }
          .animate-window-glow-5 { animation: window-glow-5 7.5s ease-in-out infinite 2s; }
          .animate-window-glow-6 { animation: window-glow-6 6.2s ease-in-out infinite 2.5s; }
          .animate-window-glow-7 { animation: window-glow-7 6.8s ease-in-out infinite 3s; }
          .animate-window-glow-8 { animation: window-glow-8 7.2s ease-in-out infinite 3.5s; }
          .animate-window-glow-9 { animation: window-glow-9 5.8s ease-in-out infinite 4s; }
          .animate-window-glow-10 { animation: window-glow-10 6.4s ease-in-out infinite 4.5s; }
          .animate-window-glow-11 { animation: window-glow-11 7s ease-in-out infinite 5s; }
          .animate-window-glow-12 { animation: window-glow-12 6.6s ease-in-out infinite 5.5s; }
          .animate-window-glow-13 { animation: window-glow-13 7.4s ease-in-out infinite 6s; }
          .animate-window-glow-14 { animation: window-glow-14 5.6s ease-in-out infinite 0.8s; }
          .animate-window-glow-15 { animation: window-glow-15 6.9s ease-in-out infinite 1.2s; }
          
          .animate-hall-glow-1 { animation: hall-glow-1 5s ease-in-out infinite; }
          .animate-hall-glow-2 { animation: hall-glow-2 5.5s ease-in-out infinite 1s; }
          .animate-hall-glow-3 { animation: hall-glow-3 6s ease-in-out infinite 2s; }
          
          .animate-campfire-flicker-1 { animation: campfire-flicker-1 3s ease-in-out infinite; }
          .animate-campfire-flicker-2 { animation: campfire-flicker-2 2.5s ease-in-out infinite 0.5s; }
          .animate-campfire-flicker-3 { animation: campfire-flicker-3 3.2s ease-in-out infinite 1s; }
          .animate-campfire-flicker-4 { animation: campfire-flicker-4 2.8s ease-in-out infinite 1.5s; }
          
          .animate-campfire-core-1 { animation: campfire-core-1 2s ease-in-out infinite; }
          .animate-campfire-core-2 { animation: campfire-core-2 2.2s ease-in-out infinite 0.8s; }
          .animate-campfire-core-3 { animation: campfire-core-3 2.4s ease-in-out infinite 1.2s; }
          
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
          
          .animate-mountain-sparkle-1 { animation: mountain-sparkle-1 8s linear infinite; }
          .animate-mountain-sparkle-2 { animation: mountain-sparkle-2 9s linear infinite 2s; }
          .animate-mountain-sparkle-3 { animation: mountain-sparkle-3 7.5s linear infinite 4s; }
          .animate-mountain-sparkle-4 { animation: mountain-sparkle-4 8.5s linear infinite 6s; }
          .animate-mountain-sparkle-5 { animation: mountain-sparkle-5 9.5s linear infinite 3s; }
          
          .animate-activity-warmth-1 { animation: activity-warmth-1 10s ease-in-out infinite; }
          .animate-activity-warmth-2 { animation: activity-warmth-2 12s ease-in-out infinite 3s; }
          .animate-activity-warmth-3 { animation: activity-warmth-3 11s ease-in-out infinite 6s; }
          
          .animate-wind-drift-1 { animation: wind-drift-1 20s linear infinite; }
          .animate-wind-drift-2 { animation: wind-drift-2 24s linear infinite 8s; }
          .animate-wind-drift-3 { animation: wind-drift-3 22s linear infinite 4s; }
          
          .animate-arctic-atmosphere { animation: arctic-atmosphere 18s ease-in-out infinite; }
          .animate-village-warmth { animation: village-warmth 15s ease-in-out infinite; }
        `}</style>
      </div>
    </Card>
  );
}

