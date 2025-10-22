"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Island2Module3Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        {/* Base image */}
        <Image
          src="/islands/island2/island2-module3-image.webp"
          alt="Testing Fundamentals - Frost Peak Adventure"
          fill
          className="object-cover"
          priority
        />
        
        {/* Animated overlay effects */}
        <div className="absolute inset-0 animate-effects">
          {/* Central Campfire */}
          <div className="absolute inset-0">
            <div className="absolute top-[67%] left-[55%] w-[10px] h-[8px] bg-orange-400/95 rounded-full campfire animate-campfire-flicker-1"></div>
            <div className="absolute top-[68%] left-[55.5%] w-[7px] h-[6px] bg-yellow-300/100 rounded-full campfire animate-campfire-flicker-2"></div>
            <div className="absolute top-[69%] left-[56%] w-[4px] h-[3px] bg-yellow-100/100 rounded-full campfire-core animate-campfire-core"></div>
            
            {/* Fire glow spread */}
            <div className="absolute top-[62%] left-[49.5%] w-[20px] h-[15px] bg-orange-300/40 rounded-full fire-glow animate-fire-glow"></div>
          </div>

          {/* Frozen River Ice Glow */}
          <div className="absolute inset-0">
            {/* Left pool */}
            <div className="absolute top-[68%] left-[20%] w-[90px] h-[60px] bg-cyan-300/35 rounded-full river-glow animate-river-glow-1"></div>
            <div className="absolute top-[70%] left-[22%] w-[70px] h-[45px] bg-teal-300/32 rounded-full river-glow animate-river-glow-2"></div>
            
            {/* Center river flow */}
            <div className="absolute top-[72%] left-[42%] w-[80px] h-[50px] bg-cyan-400/30 rounded-full river-glow animate-river-glow-3"></div>
            <div className="absolute top-[74%] left-[44%] w-[65px] h-[40px] bg-teal-400/28 rounded-full river-glow animate-river-glow-4"></div>
            
            {/* Right pool */}
            <div className="absolute top-[68%] right-[18%] w-[85px] h-[55px] bg-cyan-300/33 rounded-full river-glow animate-river-glow-5"></div>
            <div className="absolute top-[70%] right-[20%] w-[68px] h-[42px] bg-teal-300/30 rounded-full river-glow animate-river-glow-6"></div>
          </div>

          {/* Snow & Ice Sparkles on Cliffs - Bold & Visible */}
          <div className="absolute inset-0">
            {/* Left cliff snow sparkles */}
            <div className="absolute top-[32%] left-[8%] w-[4px] h-[4px] bg-cyan-300/100 rounded-full ice-sparkle animate-ice-sparkle-1"></div>
            <div className="absolute top-[38%] left-[12%] w-[4px] h-[4px] bg-white/100 rounded-full ice-sparkle animate-ice-sparkle-2"></div>
            <div className="absolute top-[45%] left-[6%] w-[5px] h-[5px] bg-blue-200/100 rounded-full ice-sparkle animate-ice-sparkle-3"></div>
            <div className="absolute top-[50%] left-[10%] w-[4px] h-[4px] bg-cyan-200/100 rounded-full ice-sparkle animate-ice-sparkle-4"></div>
            <div className="absolute top-[55%] left-[7%] w-[4px] h-[4px] bg-white/100 rounded-full ice-sparkle animate-ice-sparkle-5"></div>
            <div className="absolute top-[42%] left-[15%] w-[3px] h-[3px] bg-cyan-100/100 rounded-full ice-sparkle animate-ice-sparkle-6"></div>
            
            {/* Right cliff snow sparkles */}
            <div className="absolute top-[30%] right-[8%] w-[4px] h-[4px] bg-cyan-300/100 rounded-full ice-sparkle animate-ice-sparkle-7"></div>
            <div className="absolute top-[36%] right-[12%] w-[4px] h-[4px] bg-white/100 rounded-full ice-sparkle animate-ice-sparkle-8"></div>
            <div className="absolute top-[43%] right-[6%] w-[5px] h-[5px] bg-blue-200/100 rounded-full ice-sparkle animate-ice-sparkle-9"></div>
            <div className="absolute top-[48%] right-[10%] w-[4px] h-[4px] bg-cyan-200/100 rounded-full ice-sparkle animate-ice-sparkle-10"></div>
            <div className="absolute top-[53%] right-[7%] w-[4px] h-[4px] bg-white/100 rounded-full ice-sparkle animate-ice-sparkle-11"></div>
            <div className="absolute top-[40%] right-[15%] w-[3px] h-[3px] bg-cyan-100/100 rounded-full ice-sparkle animate-ice-sparkle-12"></div>
          </div>

          {/* Falling Snow - Bold & Visible */}
          <div className="absolute inset-0">
            {/* Large snowflakes */}
            <div className="absolute top-[10%] left-[20%] w-[6px] h-[6px] bg-white/98 rounded-full snowflake animate-snow-fall-1"></div>
            <div className="absolute top-[5%] left-[40%] w-[5px] h-[5px] bg-white/95 rounded-full snowflake animate-snow-fall-2"></div>
            <div className="absolute top-[8%] left-[60%] w-[6px] h-[6px] bg-white/100 rounded-full snowflake animate-snow-fall-3"></div>
            <div className="absolute top-[12%] left-[80%] w-[5px] h-[5px] bg-white/92 rounded-full snowflake animate-snow-fall-4"></div>
            
            {/* Medium snowflakes */}
            <div className="absolute top-[15%] left-[25%] w-[4px] h-[4px] bg-white/88 rounded-full snowflake animate-snow-fall-5"></div>
            <div className="absolute top-[8%] left-[50%] w-[4px] h-[4px] bg-white/90 rounded-full snowflake animate-snow-fall-6"></div>
            <div className="absolute top-[18%] left-[70%] w-[4px] h-[4px] bg-white/86 rounded-full snowflake animate-snow-fall-7"></div>
            <div className="absolute top-[10%] left-[85%] w-[4px] h-[4px] bg-white/92 rounded-full snowflake animate-snow-fall-8"></div>
            
            {/* Small snowflakes */}
            <div className="absolute top-[7%] left-[30%] w-[3px] h-[3px] bg-white/82 rounded-full snowflake animate-snow-fall-9"></div>
            <div className="absolute top-[14%] left-[55%] w-[3px] h-[3px] bg-white/80 rounded-full snowflake animate-snow-fall-10"></div>
            <div className="absolute top-[9%] left-[75%] w-[3px] h-[3px] bg-white/85 rounded-full snowflake animate-snow-fall-11"></div>
            <div className="absolute top-[16%] left-[90%] w-[3px] h-[3px] bg-white/83 rounded-full snowflake animate-snow-fall-12"></div>
            
            {/* Additional snow layer */}
            <div className="absolute top-[6%] left-[10%] w-[5px] h-[5px] bg-white/94 rounded-full snowflake animate-snow-fall-13"></div>
            <div className="absolute top-[13%] left-[65%] w-[4px] h-[4px] bg-white/88 rounded-full snowflake animate-snow-fall-14"></div>
            <div className="absolute top-[11%] left-[35%] w-[5px] h-[5px] bg-white/96 rounded-full snowflake animate-snow-fall-15"></div>
          </div>

          {/* Mountain Peak Snow Sparkles */}
          <div className="absolute inset-0">
            <div className="absolute top-[18%] left-[25%] w-[3px] h-[3px] bg-cyan-200/100 rounded-full peak-sparkle animate-peak-sparkle-1"></div>
            <div className="absolute top-[15%] left-[42%] w-[3px] h-[3px] bg-white/100 rounded-full peak-sparkle animate-peak-sparkle-2"></div>
            <div className="absolute top-[20%] left-[58%] w-[3px] h-[3px] bg-blue-100/100 rounded-full peak-sparkle animate-peak-sparkle-3"></div>
            <div className="absolute top-[16%] left-[72%] w-[3px] h-[3px] bg-cyan-100/100 rounded-full peak-sparkle animate-peak-sparkle-4"></div>
          </div>

          {/* Ground Snow Sparkles - Enhanced */}
          <div className="absolute inset-0">
            <div className="absolute top-[78%] left-[15%] w-[3px] h-[3px] bg-cyan-200/100 rounded-full ground-sparkle animate-ground-sparkle-1"></div>
            <div className="absolute top-[80%] left-[30%] w-[3px] h-[3px] bg-white/100 rounded-full ground-sparkle animate-ground-sparkle-2"></div>
            <div className="absolute top-[82%] left-[48%] w-[3px] h-[3px] bg-blue-100/100 rounded-full ground-sparkle animate-ground-sparkle-3"></div>
            <div className="absolute top-[79%] left-[62%] w-[3px] h-[3px] bg-cyan-200/100 rounded-full ground-sparkle animate-ground-sparkle-4"></div>
            <div className="absolute top-[81%] left-[78%] w-[3px] h-[3px] bg-white/100 rounded-full ground-sparkle animate-ground-sparkle-5"></div>
            <div className="absolute top-[83%] left-[88%] w-[3px] h-[3px] bg-cyan-100/100 rounded-full ground-sparkle animate-ground-sparkle-6"></div>
          </div>

          {/* Mountain Atmospheric Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-200/8 via-blue-100/4 to-transparent animate-mountain-atmosphere"></div>
        </div>
        
        <style jsx>{`
          .campfire {
            filter: blur(8px);
            box-shadow: 0 0 40px currentColor, 0 0 80px currentColor, 0 0 120px currentColor;
          }
          
          .campfire-core {
            filter: blur(5px);
            box-shadow: 0 0 35px currentColor, 0 0 70px currentColor, 0 0 105px currentColor;
          }
          
          .fire-glow {
            filter: blur(20px);
          }
          
          .river-glow {
            filter: blur(35px);
          }
          
          .ice-sparkle {
            box-shadow: 0 0 40px currentColor, 0 0 80px currentColor, 0 0 120px currentColor, 0 0 160px currentColor;
            filter: blur(0.5px);
          }
          
          .snowflake {
            box-shadow: 0 0 25px currentColor, 0 0 50px currentColor, 0 0 75px currentColor;
            filter: blur(1px);
          }
          
          .peak-sparkle {
            box-shadow: 0 0 35px currentColor, 0 0 70px currentColor, 0 0 105px currentColor, 0 0 140px currentColor;
            filter: blur(0.5px);
          }
          
          .ground-sparkle {
            box-shadow: 0 0 30px currentColor, 0 0 60px currentColor, 0 0 90px currentColor, 0 0 120px currentColor;
            filter: blur(0.5px);
          }
          
          .animate-effects .campfire {
            animation-play-state: running;
          }
          
          .animate-effects .campfire-core {
            animation-play-state: running;
          }
          
          .animate-effects .fire-glow {
            animation-play-state: running;
          }
          
          .animate-effects .river-glow {
            animation-play-state: running;
          }
          
          .animate-effects .ice-sparkle {
            animation-play-state: running;
          }
          
          .animate-effects .snowflake {
            animation-play-state: running;
          }
          
          .animate-effects .peak-sparkle {
            animation-play-state: running;
          }
          
          .animate-effects .ground-sparkle {
            animation-play-state: running;
          }
          
          @keyframes campfire-flicker-1 {
            0%, 100% { opacity: 0.95; transform: scale(1); }
            25% { opacity: 1; transform: scale(1.3); }
            50% { opacity: 0.8; transform: scale(0.95); }
            75% { opacity: 1; transform: scale(1.2); }
          }
          
          @keyframes campfire-flicker-2 {
            0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
            30% { opacity: 1; transform: scale(1.4) rotate(8deg); }
            60% { opacity: 0.75; transform: scale(0.9) rotate(-5deg); }
            90% { opacity: 1; transform: scale(1.25) rotate(4deg); }
          }
          
          @keyframes campfire-core {
            0%, 100% { opacity: 1; transform: scale(1); }
            40% { opacity: 1; transform: scale(1.7); }
            70% { opacity: 0.85; transform: scale(0.85); }
          }
          
          @keyframes fire-glow {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 0.65; transform: scale(1.25); }
          }
          
          @keyframes river-glow-1 {
            0%, 100% { opacity: 0.35; transform: scale(1); }
            50% { opacity: 0.50; transform: scale(1.12); }
          }
          
          @keyframes river-glow-2 {
            0%, 100% { opacity: 0.32; transform: scale(1); }
            60% { opacity: 0.48; transform: scale(1.10); }
          }
          
          @keyframes river-glow-3 {
            0%, 100% { opacity: 0.30; transform: scale(1); }
            55% { opacity: 0.45; transform: scale(1.08); }
          }
          
          @keyframes river-glow-4 {
            0%, 100% { opacity: 0.28; transform: scale(1); }
            58% { opacity: 0.43; transform: scale(1.06); }
          }
          
          @keyframes river-glow-5 {
            0%, 100% { opacity: 0.33; transform: scale(1); }
            52% { opacity: 0.47; transform: scale(1.11); }
          }
          
          @keyframes river-glow-6 {
            0%, 100% { opacity: 0.30; transform: scale(1); }
            57% { opacity: 0.44; transform: scale(1.09); }
          }
          
          @keyframes ice-sparkle-1 {
            0%, 70%, 100% { opacity: 0; transform: scale(1); }
            75%, 85% { opacity: 1; transform: scale(3); }
            80% { opacity: 0.85; transform: scale(2.5); }
          }
          
          @keyframes ice-sparkle-2 {
            0%, 65%, 100% { opacity: 0; transform: scale(1); }
            70%, 80% { opacity: 1; transform: scale(3.2); }
            75% { opacity: 0.8; transform: scale(2.6); }
          }
          
          @keyframes ice-sparkle-3 {
            0%, 78%, 100% { opacity: 0; transform: scale(1); }
            83%, 93% { opacity: 1; transform: scale(3.4); }
            88% { opacity: 0.88; transform: scale(2.8); }
          }
          
          @keyframes ice-sparkle-4 {
            0%, 72%, 100% { opacity: 0; transform: scale(1); }
            77%, 87% { opacity: 1; transform: scale(2.8); }
            82% { opacity: 0.82; transform: scale(2.3); }
          }
          
          @keyframes ice-sparkle-5 {
            0%, 68%, 100% { opacity: 0; transform: scale(1); }
            73%, 83% { opacity: 1; transform: scale(3.3); }
            78% { opacity: 0.85; transform: scale(2.7); }
          }
          
          @keyframes ice-sparkle-6 {
            0%, 75%, 100% { opacity: 0; transform: scale(1); }
            80%, 90% { opacity: 1; transform: scale(2.9); }
            85% { opacity: 0.8; transform: scale(2.4); }
          }
          
          @keyframes ice-sparkle-7 {
            0%, 80%, 100% { opacity: 0; transform: scale(1); }
            85%, 95% { opacity: 1; transform: scale(3.1); }
            90% { opacity: 0.83; transform: scale(2.6); }
          }
          
          @keyframes ice-sparkle-8 {
            0%, 62%, 100% { opacity: 0; transform: scale(1); }
            67%, 77% { opacity: 1; transform: scale(3); }
            72% { opacity: 0.78; transform: scale(2.5); }
          }
          
          @keyframes ice-sparkle-9 {
            0%, 76%, 100% { opacity: 0; transform: scale(1); }
            81%, 91% { opacity: 1; transform: scale(3.5); }
            86% { opacity: 0.87; transform: scale(2.9); }
          }
          
          @keyframes ice-sparkle-10 {
            0%, 69%, 100% { opacity: 0; transform: scale(1); }
            74%, 84% { opacity: 1; transform: scale(3.2); }
            79% { opacity: 0.84; transform: scale(2.7); }
          }
          
          @keyframes ice-sparkle-11 {
            0%, 64%, 100% { opacity: 0; transform: scale(1); }
            69%, 79% { opacity: 1; transform: scale(2.8); }
            74% { opacity: 0.75; transform: scale(2.3); }
          }
          
          @keyframes ice-sparkle-12 {
            0%, 82%, 100% { opacity: 0; transform: scale(1); }
            87%, 95% { opacity: 1; transform: scale(3); }
            91% { opacity: 0.8; transform: scale(2.5); }
          }
          
          @keyframes snow-fall-1 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.98; transform: translateY(350px) translateX(25px); }
            100% { opacity: 0; transform: translateY(700px) translateX(45px); }
          }
          
          @keyframes snow-fall-2 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.95; transform: translateY(360px) translateX(-20px); }
            100% { opacity: 0; transform: translateY(720px) translateX(-38px); }
          }
          
          @keyframes snow-fall-3 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 1; transform: translateY(370px) translateX(28px); }
            100% { opacity: 0; transform: translateY(740px) translateX(50px); }
          }
          
          @keyframes snow-fall-4 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.92; transform: translateY(355px) translateX(-18px); }
            100% { opacity: 0; transform: translateY(710px) translateX(-32px); }
          }
          
          @keyframes snow-fall-5 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.88; transform: translateY(340px) translateX(22px); }
            100% { opacity: 0; transform: translateY(680px) translateX(40px); }
          }
          
          @keyframes snow-fall-6 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.90; transform: translateY(365px) translateX(-15px); }
            100% { opacity: 0; transform: translateY(730px) translateX(-28px); }
          }
          
          @keyframes snow-fall-7 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.86; transform: translateY(345px) translateX(20px); }
            100% { opacity: 0; transform: translateY(690px) translateX(36px); }
          }
          
          @keyframes snow-fall-8 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.92; transform: translateY(375px) translateX(-22px); }
            100% { opacity: 0; transform: translateY(750px) translateX(-40px); }
          }
          
          @keyframes snow-fall-9 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.82; transform: translateY(335px) translateX(16px); }
            100% { opacity: 0; transform: translateY(670px) translateX(30px); }
          }
          
          @keyframes snow-fall-10 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.80; transform: translateY(350px) translateX(-14px); }
            100% { opacity: 0; transform: translateY(700px) translateX(-26px); }
          }
          
          @keyframes snow-fall-11 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.85; transform: translateY(360px) translateX(18px); }
            100% { opacity: 0; transform: translateY(720px) translateX(32px); }
          }
          
          @keyframes snow-fall-12 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.83; transform: translateY(355px) translateX(-12px); }
            100% { opacity: 0; transform: translateY(710px) translateX(-22px); }
          }
          
          @keyframes snow-fall-13 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.94; transform: translateY(348px) translateX(24px); }
            100% { opacity: 0; transform: translateY(696px) translateX(42px); }
          }
          
          @keyframes snow-fall-14 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.88; transform: translateY(362px) translateX(-16px); }
            100% { opacity: 0; transform: translateY(724px) translateX(-30px); }
          }
          
          @keyframes snow-fall-15 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.96; transform: translateY(358px) translateX(26px); }
            100% { opacity: 0; transform: translateY(716px) translateX(46px); }
          }
          
          @keyframes peak-sparkle-1 {
            0%, 88%, 100% { opacity: 0; transform: scale(1); }
            92%, 98% { opacity: 1; transform: scale(2.8); }
            95% { opacity: 0.8; transform: scale(2.3); }
          }
          
          @keyframes peak-sparkle-2 {
            0%, 82%, 100% { opacity: 0; transform: scale(1); }
            86%, 92% { opacity: 1; transform: scale(3); }
            89% { opacity: 0.82; transform: scale(2.5); }
          }
          
          @keyframes peak-sparkle-3 {
            0%, 90%, 100% { opacity: 0; transform: scale(1); }
            94%, 99% { opacity: 1; transform: scale(2.7); }
            96% { opacity: 0.78; transform: scale(2.2); }
          }
          
          @keyframes peak-sparkle-4 {
            0%, 85%, 100% { opacity: 0; transform: scale(1); }
            89%, 95% { opacity: 1; transform: scale(2.9); }
            92% { opacity: 0.8; transform: scale(2.4); }
          }
          
          @keyframes ground-sparkle-1 {
            0%, 88%, 100% { opacity: 0; transform: scale(1); }
            92%, 98% { opacity: 1; transform: scale(2.6); }
            95% { opacity: 0.85; transform: scale(2.2); }
          }
          
          @keyframes ground-sparkle-2 {
            0%, 82%, 100% { opacity: 0; transform: scale(1); }
            86%, 92% { opacity: 1; transform: scale(2.8); }
            89% { opacity: 0.82; transform: scale(2.3); }
          }
          
          @keyframes ground-sparkle-3 {
            0%, 90%, 100% { opacity: 0; transform: scale(1); }
            94%, 99% { opacity: 1; transform: scale(2.5); }
            96% { opacity: 0.78; transform: scale(2.1); }
          }
          
          @keyframes ground-sparkle-4 {
            0%, 85%, 100% { opacity: 0; transform: scale(1); }
            89%, 95% { opacity: 1; transform: scale(2.7); }
            92% { opacity: 0.8; transform: scale(2.2); }
          }
          
          @keyframes ground-sparkle-5 {
            0%, 87%, 100% { opacity: 0; transform: scale(1); }
            91%, 97% { opacity: 1; transform: scale(2.6); }
            94% { opacity: 0.84; transform: scale(2.2); }
          }
          
          @keyframes ground-sparkle-6 {
            0%, 92%, 100% { opacity: 0; transform: scale(1); }
            95%, 99% { opacity: 1; transform: scale(2.5); }
            97% { opacity: 0.76; transform: scale(2.1); }
          }
          
          @keyframes mountain-atmosphere {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; }
          }
          
          .animate-campfire-flicker-1 { animation: campfire-flicker-1 3s ease-in-out infinite; }
          .animate-campfire-flicker-2 { animation: campfire-flicker-2 2.5s ease-in-out infinite 0.5s; }
          .animate-campfire-core { animation: campfire-core 2s ease-in-out infinite 1s; }
          .animate-fire-glow { animation: fire-glow 4s ease-in-out infinite; }
          
          .animate-river-glow-1 { animation: river-glow-1 9s ease-in-out infinite; }
          .animate-river-glow-2 { animation: river-glow-2 10s ease-in-out infinite 2s; }
          .animate-river-glow-3 { animation: river-glow-3 11s ease-in-out infinite 4s; }
          .animate-river-glow-4 { animation: river-glow-4 9.5s ease-in-out infinite 1s; }
          .animate-river-glow-5 { animation: river-glow-5 10.5s ease-in-out infinite 3s; }
          .animate-river-glow-6 { animation: river-glow-6 11.5s ease-in-out infinite 5s; }
          
          .animate-ice-sparkle-1 { animation: ice-sparkle-1 8s linear infinite; }
          .animate-ice-sparkle-2 { animation: ice-sparkle-2 9s linear infinite 1.5s; }
          .animate-ice-sparkle-3 { animation: ice-sparkle-3 7.5s linear infinite 3s; }
          .animate-ice-sparkle-4 { animation: ice-sparkle-4 8.5s linear infinite 4.5s; }
          .animate-ice-sparkle-5 { animation: ice-sparkle-5 9.5s linear infinite 2s; }
          .animate-ice-sparkle-6 { animation: ice-sparkle-6 8.2s linear infinite 6s; }
          .animate-ice-sparkle-7 { animation: ice-sparkle-7 7.8s linear infinite 2.5s; }
          .animate-ice-sparkle-8 { animation: ice-sparkle-8 9.2s linear infinite 5s; }
          .animate-ice-sparkle-9 { animation: ice-sparkle-9 8.8s linear infinite 3.5s; }
          .animate-ice-sparkle-10 { animation: ice-sparkle-10 9.8s linear infinite 7s; }
          .animate-ice-sparkle-11 { animation: ice-sparkle-11 8.5s linear infinite 1.8s; }
          .animate-ice-sparkle-12 { animation: ice-sparkle-12 9.3s linear infinite 4.2s; }
          
          .animate-snow-fall-1 { animation: snow-fall-1 13s linear infinite; }
          .animate-snow-fall-2 { animation: snow-fall-2 15s linear infinite 2s; }
          .animate-snow-fall-3 { animation: snow-fall-3 14s linear infinite 4s; }
          .animate-snow-fall-4 { animation: snow-fall-4 16s linear infinite 6s; }
          .animate-snow-fall-5 { animation: snow-fall-5 12s linear infinite 8s; }
          .animate-snow-fall-6 { animation: snow-fall-6 14.5s linear infinite 1s; }
          .animate-snow-fall-7 { animation: snow-fall-7 13.5s linear infinite 3s; }
          .animate-snow-fall-8 { animation: snow-fall-8 15.5s linear infinite 5s; }
          .animate-snow-fall-9 { animation: snow-fall-9 11.5s linear infinite 7s; }
          .animate-snow-fall-10 { animation: snow-fall-10 13.2s linear infinite 9s; }
          .animate-snow-fall-11 { animation: snow-fall-11 14.8s linear infinite 2.5s; }
          .animate-snow-fall-12 { animation: snow-fall-12 13.8s linear infinite 4.5s; }
          .animate-snow-fall-13 { animation: snow-fall-13 12.5s linear infinite 6.5s; }
          .animate-snow-fall-14 { animation: snow-fall-14 15.2s linear infinite 8.5s; }
          .animate-snow-fall-15 { animation: snow-fall-15 14.5s linear infinite 1.5s; }
          
          .animate-peak-sparkle-1 { animation: peak-sparkle-1 7s linear infinite; }
          .animate-peak-sparkle-2 { animation: peak-sparkle-2 8s linear infinite 2s; }
          .animate-peak-sparkle-3 { animation: peak-sparkle-3 7.5s linear infinite 4s; }
          .animate-peak-sparkle-4 { animation: peak-sparkle-4 8.5s linear infinite 1s; }
          
          .animate-ground-sparkle-1 { animation: ground-sparkle-1 7s linear infinite; }
          .animate-ground-sparkle-2 { animation: ground-sparkle-2 8s linear infinite 2s; }
          .animate-ground-sparkle-3 { animation: ground-sparkle-3 7.5s linear infinite 4s; }
          .animate-ground-sparkle-4 { animation: ground-sparkle-4 8.5s linear infinite 1s; }
          .animate-ground-sparkle-5 { animation: ground-sparkle-5 9s linear infinite 3s; }
          .animate-ground-sparkle-6 { animation: ground-sparkle-6 7.8s linear infinite 5s; }
          
          .animate-mountain-atmosphere { animation: mountain-atmosphere 18s ease-in-out infinite; }
        `}</style>
      </div>
    </Card>
  );
}

