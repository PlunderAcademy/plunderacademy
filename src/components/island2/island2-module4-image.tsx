"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Island2Module4Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        {/* Base image */}
        <Image
          src="/islands/island2/island2-module4-image.webp"
          alt="Staking Concepts & Time Logic - Frost Peak Adventure"
          fill
          className="object-cover"
          priority
        />
        
        {/* Animated overlay effects */}
        <div className="absolute inset-0 animate-effects">
          {/* Northern Lights Aurora */}
          <div className="absolute inset-0">
            {/* Main aurora waves */}
            <div className="absolute top-[8%] left-[15%] w-[280px] h-[180px] bg-gradient-to-b from-emerald-300/28 via-cyan-300/22 to-transparent aurora-wave animate-aurora-flow-1"></div>
            <div className="absolute top-[5%] left-[40%] w-[320px] h-[200px] bg-gradient-to-b from-cyan-300/25 via-teal-300/20 to-transparent aurora-wave animate-aurora-flow-2"></div>
            <div className="absolute top-[10%] right-[15%] w-[300px] h-[190px] bg-gradient-to-b from-teal-300/26 via-emerald-300/21 to-transparent aurora-wave animate-aurora-flow-3"></div>
            
            {/* Aurora shimmer layers */}
            <div className="absolute top-[0%] left-[0%] w-full h-[45%] bg-gradient-to-b from-cyan-300/10 via-emerald-300/6 to-transparent aurora-shimmer animate-aurora-glow-1"></div>
            <div className="absolute top-[3%] left-[0%] w-full h-[40%] bg-gradient-to-b from-emerald-300/8 via-teal-300/5 to-transparent aurora-shimmer animate-aurora-glow-2"></div>
          </div>

          {/* Glowing Ice Cracks/Water Channels */}
          <div className="absolute inset-0">
            {/* Main central cracks */}
            <div className="absolute top-[58%] left-[45%] w-[100px] h-[60px] bg-cyan-400/25 rounded-full water-glow animate-water-glow-1"></div>
            <div className="absolute top-[65%] left-[48%] w-[80px] h-[50px] bg-teal-300/22 rounded-full water-glow animate-water-glow-2"></div>
            <div className="absolute top-[72%] left-[50%] w-[70px] h-[40px] bg-cyan-300/20 rounded-full water-glow animate-water-glow-3"></div>
            
            {/* Left side cracks */}
            <div className="absolute top-[60%] left-[25%] w-[60px] h-[35px] bg-cyan-400/20 rounded-full water-glow animate-water-glow-4"></div>
            <div className="absolute top-[70%] left-[30%] w-[50px] h-[30px] bg-teal-300/18 rounded-full water-glow animate-water-glow-5"></div>
            
            {/* Right side cracks */}
            <div className="absolute top-[62%] right-[20%] w-[65px] h-[38px] bg-cyan-300/21 rounded-full water-glow animate-water-glow-6"></div>
            <div className="absolute top-[68%] right-[25%] w-[55px] h-[32px] bg-teal-400/19 rounded-full water-glow animate-water-glow-7"></div>
          </div>

          {/* Ice Edge Sparkles */}
          <div className="absolute inset-0">
            {/* Front ice floe edges */}
            <div className="absolute top-[52%] left-[20%] w-[3px] h-[3px] bg-cyan-200/90 rounded-full ice-edge-sparkle animate-edge-sparkle-1"></div>
            <div className="absolute top-[55%] left-[35%] w-[2px] h-[2px] bg-white/85 rounded-full ice-edge-sparkle animate-edge-sparkle-2"></div>
            <div className="absolute top-[58%] left-[50%] w-[3px] h-[3px] bg-blue-100/88 rounded-full ice-edge-sparkle animate-edge-sparkle-3"></div>
            <div className="absolute top-[54%] left-[65%] w-[2px] h-[2px] bg-cyan-200/82 rounded-full ice-edge-sparkle animate-edge-sparkle-4"></div>
            <div className="absolute top-[60%] left-[80%] w-[3px] h-[3px] bg-white/90 rounded-full ice-edge-sparkle animate-edge-sparkle-5"></div>
            
            {/* Mid-field ice edges */}
            <div className="absolute top-[48%] left-[25%] w-[2px] h-[2px] bg-cyan-200/80 rounded-full ice-edge-sparkle animate-edge-sparkle-6"></div>
            <div className="absolute top-[50%] left-[45%] w-[3px] h-[3px] bg-white/83 rounded-full ice-edge-sparkle animate-edge-sparkle-7"></div>
            <div className="absolute top-[52%] right-[30%] w-[2px] h-[2px] bg-blue-100/78 rounded-full ice-edge-sparkle animate-edge-sparkle-8"></div>
            <div className="absolute top-[56%] right-[15%] w-[3px] h-[3px] bg-cyan-200/85 rounded-full ice-edge-sparkle animate-edge-sparkle-9"></div>
          </div>

          {/* Mountain Ice Sparkles */}
          <div className="absolute inset-0">
            {/* Left mountains */}
            <div className="absolute top-[25%] left-[15%] w-[2px] h-[2px] bg-cyan-200/85 rounded-full mountain-sparkle animate-mountain-twinkle-1"></div>
            <div className="absolute top-[30%] left-[20%] w-[2px] h-[2px] bg-white/88 rounded-full mountain-sparkle animate-mountain-twinkle-2"></div>
            <div className="absolute top-[35%] left-[18%] w-[2px] h-[2px] bg-blue-100/82 rounded-full mountain-sparkle animate-mountain-twinkle-3"></div>
            
            {/* Center peak */}
            <div className="absolute top-[15%] left-[48%] w-[3px] h-[3px] bg-white/92 rounded-full mountain-sparkle animate-mountain-twinkle-4"></div>
            <div className="absolute top-[20%] left-[52%] w-[2px] h-[2px] bg-cyan-200/87 rounded-full mountain-sparkle animate-mountain-twinkle-5"></div>
            <div className="absolute top-[28%] left-[50%] w-[2px] h-[2px] bg-blue-100/84 rounded-full mountain-sparkle animate-mountain-twinkle-6"></div>
            
            {/* Right mountains */}
            <div className="absolute top-[22%] right-[18%] w-[2px] h-[2px] bg-cyan-200/86 rounded-full mountain-sparkle animate-mountain-twinkle-7"></div>
            <div className="absolute top-[32%] right-[15%] w-[2px] h-[2px] bg-white/89 rounded-full mountain-sparkle animate-mountain-twinkle-8"></div>
          </div>

          {/* Falling Snow */}
          <div className="absolute inset-0">
            {/* Large snowflakes */}
            <div className="absolute top-[8%] left-[18%] w-[4px] h-[4px] bg-white/72 rounded-full snowflake animate-snow-fall-1"></div>
            <div className="absolute top-[5%] left-[38%] w-[3px] h-[3px] bg-white/68 rounded-full snowflake animate-snow-fall-2"></div>
            <div className="absolute top-[10%] left-[58%] w-[4px] h-[4px] bg-white/70 rounded-full snowflake animate-snow-fall-3"></div>
            <div className="absolute top-[6%] left-[78%] w-[3px] h-[3px] bg-white/65 rounded-full snowflake animate-snow-fall-4"></div>
            
            {/* Medium snowflakes */}
            <div className="absolute top-[12%] left-[25%] w-[2px] h-[2px] bg-white/58 rounded-full snowflake animate-snow-fall-5"></div>
            <div className="absolute top-[9%] left-[48%] w-[2px] h-[2px] bg-white/60 rounded-full snowflake animate-snow-fall-6"></div>
            <div className="absolute top-[15%] left-[68%] w-[2px] h-[2px] bg-white/55 rounded-full snowflake animate-snow-fall-7"></div>
            <div className="absolute top-[7%] left-[85%] w-[2px] h-[2px] bg-white/62 rounded-full snowflake animate-snow-fall-8"></div>
            
            {/* Small snowflakes */}
            <div className="absolute top-[11%] left-[32%] w-[1px] h-[1px] bg-white/50 rounded-full snowflake animate-snow-fall-9"></div>
            <div className="absolute top-[14%] left-[55%] w-[1px] h-[1px] bg-white/48 rounded-full snowflake animate-snow-fall-10"></div>
            <div className="absolute top-[8%] left-[72%] w-[1px] h-[1px] bg-white/52 rounded-full snowflake animate-snow-fall-11"></div>
            <div className="absolute top-[16%] left-[88%] w-[1px] h-[1px] bg-white/47 rounded-full snowflake animate-snow-fall-12"></div>
          </div>

          {/* Ice Surface Shimmer */}
          <div className="absolute inset-0">
            {/* Large ice floe shimmers */}
            <div className="absolute top-[60%] left-[15%] w-[80px] h-[60px] bg-cyan-200/10 rounded-full ice-shimmer animate-ice-shimmer-1"></div>
            <div className="absolute top-[65%] left-[40%] w-[90px] h-[65px] bg-white/8 rounded-full ice-shimmer animate-ice-shimmer-2"></div>
            <div className="absolute top-[70%] right-[20%] w-[75px] h-[55px] bg-blue-100/9 rounded-full ice-shimmer animate-ice-shimmer-3"></div>
            <div className="absolute top-[75%] left-[30%] w-[70px] h-[50px] bg-cyan-200/11 rounded-full ice-shimmer animate-ice-shimmer-4"></div>
          </div>

          {/* Mystical Ice Field Atmosphere */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-300/8 via-emerald-300/5 to-teal-400/4 animate-ice-field-atmosphere"></div>
          
          {/* Aurora Reflection on Ice */}
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/12 via-transparent to-transparent animate-aurora-ice-reflection"></div>
        </div>
        
        <style jsx>{`
          .aurora-wave {
            filter: blur(42px);
            opacity: 0;
          }
          
          .aurora-shimmer {
            filter: blur(55px);
            opacity: 0;
          }
          
          .water-glow {
            filter: blur(28px);
          }
          
          .ice-edge-sparkle {
            box-shadow: 0 0 22px currentColor, 0 0 44px currentColor, 0 0 66px currentColor;
            filter: blur(0.3px);
          }
          
          .mountain-sparkle {
            box-shadow: 0 0 18px currentColor, 0 0 36px currentColor, 0 0 54px currentColor;
            filter: blur(0.4px);
          }
          
          .snowflake {
            box-shadow: 0 0 12px currentColor, 0 0 24px currentColor;
            filter: blur(0.7px);
          }
          
          .ice-shimmer {
            filter: blur(25px);
          }
          
          .animate-effects .aurora-wave {
            animation-play-state: running;
          }
          
          .animate-effects .aurora-shimmer {
            animation-play-state: running;
          }
          
          .animate-effects .water-glow {
            animation-play-state: running;
          }
          
          .animate-effects .ice-edge-sparkle {
            animation-play-state: running;
          }
          
          .animate-effects .mountain-sparkle {
            animation-play-state: running;
          }
          
          .animate-effects .snowflake {
            animation-play-state: running;
          }
          
          .animate-effects .ice-shimmer {
            animation-play-state: running;
          }
          
          @keyframes aurora-flow-1 {
            0%, 100% { opacity: 0; transform: translateX(0px) scaleY(1) skewX(0deg); }
            25% { opacity: 0.65; transform: translateX(-25px) scaleY(1.45) skewX(6deg); }
            50% { opacity: 0.5; transform: translateX(-14px) scaleY(1.15) skewX(-5deg); }
            75% { opacity: 0.6; transform: translateX(-30px) scaleY(1.35) skewX(5deg); }
          }
          
          @keyframes aurora-flow-2 {
            0%, 100% { opacity: 0; transform: translateX(0px) scaleY(1) skewX(0deg); }
            30% { opacity: 0.62; transform: translateX(22px) scaleY(1.42) skewX(-6deg); }
            60% { opacity: 0.48; transform: translateX(12px) scaleY(1.08) skewX(5deg); }
            85% { opacity: 0.58; transform: translateX(28px) scaleY(1.38) skewX(-5deg); }
          }
          
          @keyframes aurora-flow-3 {
            0%, 100% { opacity: 0; transform: translateX(0px) scaleY(1) skewX(0deg); }
            35% { opacity: 0.64; transform: translateX(-20px) scaleY(1.4) skewX(7deg); }
            65% { opacity: 0.5; transform: translateX(-12px) scaleY(1.1) skewX(-6deg); }
            90% { opacity: 0.6; transform: translateX(-24px) scaleY(1.32) skewX(5deg); }
          }
          
          @keyframes aurora-glow-1 {
            0%, 100% { opacity: 0; }
            50% { opacity: 0.25; }
          }
          
          @keyframes aurora-glow-2 {
            0%, 100% { opacity: 0; }
            60% { opacity: 0.18; }
          }
          
          @keyframes water-glow-1 {
            0%, 100% { opacity: 0.25; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(1.18); }
          }
          
          @keyframes water-glow-2 {
            0%, 100% { opacity: 0.22; transform: scale(1); }
            60% { opacity: 0.36; transform: scale(1.15); }
          }
          
          @keyframes water-glow-3 {
            0%, 100% { opacity: 0.20; transform: scale(1); }
            55% { opacity: 0.32; transform: scale(1.12); }
          }
          
          @keyframes water-glow-4 {
            0%, 100% { opacity: 0.20; transform: scale(1); }
            50% { opacity: 0.34; transform: scale(1.14); }
          }
          
          @keyframes water-glow-5 {
            0%, 100% { opacity: 0.18; transform: scale(1); }
            60% { opacity: 0.3; transform: scale(1.1); }
          }
          
          @keyframes water-glow-6 {
            0%, 100% { opacity: 0.21; transform: scale(1); }
            55% { opacity: 0.35; transform: scale(1.16); }
          }
          
          @keyframes water-glow-7 {
            0%, 100% { opacity: 0.19; transform: scale(1); }
            58% { opacity: 0.31; transform: scale(1.13); }
          }
          
          @keyframes edge-sparkle-1 {
            0%, 72%, 100% { opacity: 0; transform: scale(1); }
            77%, 87% { opacity: 0.9; transform: scale(1.7); }
            82% { opacity: 0.4; transform: scale(1.35); }
          }
          
          @keyframes edge-sparkle-2 {
            0%, 68%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            73%, 83% { opacity: 0.85; transform: scale(1.6) rotate(180deg); }
            78% { opacity: 0.35; transform: scale(1.28) rotate(90deg); }
          }
          
          @keyframes edge-sparkle-3 {
            0%, 75%, 100% { opacity: 0; transform: scale(1); }
            80%, 90% { opacity: 0.88; transform: scale(1.65); }
            85% { opacity: 0.38; transform: scale(1.32); }
          }
          
          @keyframes edge-sparkle-4 {
            0%, 70%, 100% { opacity: 0; transform: scale(1); }
            75%, 85% { opacity: 0.82; transform: scale(1.55); }
            80% { opacity: 0.32; transform: scale(1.25); }
          }
          
          @keyframes edge-sparkle-5 {
            0%, 78%, 100% { opacity: 0; transform: scale(1); }
            83%, 93% { opacity: 0.9; transform: scale(1.72); }
            88% { opacity: 0.4; transform: scale(1.38); }
          }
          
          @keyframes edge-sparkle-6 {
            0%, 65%, 100% { opacity: 0; transform: scale(1); }
            70%, 80% { opacity: 0.8; transform: scale(1.5); }
            75% { opacity: 0.3; transform: scale(1.2); }
          }
          
          @keyframes edge-sparkle-7 {
            0%, 73%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            78%, 88% { opacity: 0.83; transform: scale(1.58) rotate(360deg); }
            83% { opacity: 0.33; transform: scale(1.3) rotate(180deg); }
          }
          
          @keyframes edge-sparkle-8 {
            0%, 80%, 100% { opacity: 0; transform: scale(1); }
            85%, 95% { opacity: 0.78; transform: scale(1.48); }
            90% { opacity: 0.28; transform: scale(1.18); }
          }
          
          @keyframes edge-sparkle-9 {
            0%, 76%, 100% { opacity: 0; transform: scale(1); }
            81%, 91% { opacity: 0.85; transform: scale(1.62); }
            86% { opacity: 0.35; transform: scale(1.3); }
          }
          
          @keyframes mountain-twinkle-1 {
            0%, 82%, 100% { opacity: 0; }
            87%, 93% { opacity: 0.85; }
            90% { opacity: 0.4; }
          }
          
          @keyframes mountain-twinkle-2 {
            0%, 76%, 100% { opacity: 0; }
            81%, 87% { opacity: 0.88; }
            84% { opacity: 0.42; }
          }
          
          @keyframes mountain-twinkle-3 {
            0%, 88%, 100% { opacity: 0; }
            93%, 99% { opacity: 0.82; }
            96% { opacity: 0.38; }
          }
          
          @keyframes mountain-twinkle-4 {
            0%, 70%, 100% { opacity: 0; }
            75%, 81% { opacity: 0.92; }
            78% { opacity: 0.45; }
          }
          
          @keyframes mountain-twinkle-5 {
            0%, 84%, 100% { opacity: 0; }
            89%, 95% { opacity: 0.87; }
            92% { opacity: 0.41; }
          }
          
          @keyframes mountain-twinkle-6 {
            0%, 78%, 100% { opacity: 0; }
            83%, 89% { opacity: 0.84; }
            86% { opacity: 0.39; }
          }
          
          @keyframes mountain-twinkle-7 {
            0%, 86%, 100% { opacity: 0; }
            91%, 97% { opacity: 0.86; }
            94% { opacity: 0.40; }
          }
          
          @keyframes mountain-twinkle-8 {
            0%, 74%, 100% { opacity: 0; }
            79%, 85% { opacity: 0.89; }
            82% { opacity: 0.43; }
          }
          
          @keyframes snow-fall-1 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.72; transform: translateY(450px) translateX(35px) rotate(200deg); }
            100% { opacity: 0; transform: translateY(900px) translateX(60px) rotate(400deg); }
          }
          
          @keyframes snow-fall-2 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.68; transform: translateY(440px) translateX(-28px) rotate(230deg); }
            100% { opacity: 0; transform: translateY(880px) translateX(-48px) rotate(460deg); }
          }
          
          @keyframes snow-fall-3 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.7; transform: translateY(460px) translateX(32px) rotate(190deg); }
            100% { opacity: 0; transform: translateY(920px) translateX(55px) rotate(380deg); }
          }
          
          @keyframes snow-fall-4 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.65; transform: translateY(435px) translateX(-25px) rotate(210deg); }
            100% { opacity: 0; transform: translateY(870px) translateX(-45px) rotate(420deg); }
          }
          
          @keyframes snow-fall-5 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.58; transform: translateY(425px) translateX(26px) rotate(170deg); }
            100% { opacity: 0; transform: translateY(850px) translateX(44px) rotate(340deg); }
          }
          
          @keyframes snow-fall-6 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.6; transform: translateY(445px) translateX(-22px) rotate(195deg); }
            100% { opacity: 0; transform: translateY(890px) translateX(-38px) rotate(390deg); }
          }
          
          @keyframes snow-fall-7 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.55; transform: translateY(430px) translateX(30px) rotate(215deg); }
            100% { opacity: 0; transform: translateY(860px) translateX(52px) rotate(430deg); }
          }
          
          @keyframes snow-fall-8 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.62; transform: translateY(455px) translateX(-24px) rotate(180deg); }
            100% { opacity: 0; transform: translateY(910px) translateX(-42px) rotate(360deg); }
          }
          
          @keyframes snow-fall-9 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.5; transform: translateY(420px) translateX(18px); }
            100% { opacity: 0; transform: translateY(840px) translateX(32px); }
          }
          
          @keyframes snow-fall-10 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.48; transform: translateY(438px) translateX(-19px); }
            100% { opacity: 0; transform: translateY(876px) translateX(-34px); }
          }
          
          @keyframes snow-fall-11 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.52; transform: translateY(448px) translateX(21px); }
            100% { opacity: 0; transform: translateY(896px) translateX(38px); }
          }
          
          @keyframes snow-fall-12 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.47; transform: translateY(432px) translateX(-17px); }
            100% { opacity: 0; transform: translateY(864px) translateX(-30px); }
          }
          
          @keyframes ice-shimmer-1 {
            0%, 100% { opacity: 0.1; transform: scale(1); }
            50% { opacity: 0.18; transform: scale(1.1); }
          }
          
          @keyframes ice-shimmer-2 {
            0%, 100% { opacity: 0.08; transform: scale(1); }
            60% { opacity: 0.15; transform: scale(1.08); }
          }
          
          @keyframes ice-shimmer-3 {
            0%, 100% { opacity: 0.09; transform: scale(1); }
            55% { opacity: 0.16; transform: scale(1.09); }
          }
          
          @keyframes ice-shimmer-4 {
            0%, 100% { opacity: 0.11; transform: scale(1); }
            58% { opacity: 0.19; transform: scale(1.11); }
          }
          
          @keyframes ice-field-atmosphere {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; }
          }
          
          @keyframes aurora-ice-reflection {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.85; }
          }
          
          .animate-aurora-flow-1 { animation: aurora-flow-1 20s ease-in-out infinite; }
          .animate-aurora-flow-2 { animation: aurora-flow-2 24s ease-in-out infinite 6s; }
          .animate-aurora-flow-3 { animation: aurora-flow-3 22s ease-in-out infinite 12s; }
          
          .animate-aurora-glow-1 { animation: aurora-glow-1 28s ease-in-out infinite; }
          .animate-aurora-glow-2 { animation: aurora-glow-2 32s ease-in-out infinite 10s; }
          
          .animate-water-glow-1 { animation: water-glow-1 7s ease-in-out infinite; }
          .animate-water-glow-2 { animation: water-glow-2 8s ease-in-out infinite 1.5s; }
          .animate-water-glow-3 { animation: water-glow-3 9s ease-in-out infinite 3s; }
          .animate-water-glow-4 { animation: water-glow-4 7.5s ease-in-out infinite 4.5s; }
          .animate-water-glow-5 { animation: water-glow-5 8.5s ease-in-out infinite 2s; }
          .animate-water-glow-6 { animation: water-glow-6 9.5s ease-in-out infinite 5s; }
          .animate-water-glow-7 { animation: water-glow-7 8.2s ease-in-out infinite 3.5s; }
          
          .animate-edge-sparkle-1 { animation: edge-sparkle-1 8s linear infinite; }
          .animate-edge-sparkle-2 { animation: edge-sparkle-2 9s linear infinite 2s; }
          .animate-edge-sparkle-3 { animation: edge-sparkle-3 7.5s linear infinite 4s; }
          .animate-edge-sparkle-4 { animation: edge-sparkle-4 8.5s linear infinite 1.5s; }
          .animate-edge-sparkle-5 { animation: edge-sparkle-5 9.5s linear infinite 5.5s; }
          .animate-edge-sparkle-6 { animation: edge-sparkle-6 8.2s linear infinite 3s; }
          .animate-edge-sparkle-7 { animation: edge-sparkle-7 7.8s linear infinite 6s; }
          .animate-edge-sparkle-8 { animation: edge-sparkle-8 9.2s linear infinite 2.5s; }
          .animate-edge-sparkle-9 { animation: edge-sparkle-9 8.8s linear infinite 4.5s; }
          
          .animate-mountain-twinkle-1 { animation: mountain-twinkle-1 7s linear infinite; }
          .animate-mountain-twinkle-2 { animation: mountain-twinkle-2 8s linear infinite 2s; }
          .animate-mountain-twinkle-3 { animation: mountain-twinkle-3 6.5s linear infinite 4s; }
          .animate-mountain-twinkle-4 { animation: mountain-twinkle-4 9s linear infinite 1s; }
          .animate-mountain-twinkle-5 { animation: mountain-twinkle-5 7.5s linear infinite 5s; }
          .animate-mountain-twinkle-6 { animation: mountain-twinkle-6 8.5s linear infinite 3s; }
          .animate-mountain-twinkle-7 { animation: mountain-twinkle-7 6.8s linear infinite 6s; }
          .animate-mountain-twinkle-8 { animation: mountain-twinkle-8 9.2s linear infinite 2.5s; }
          
          .animate-snow-fall-1 { animation: snow-fall-1 15s linear infinite; }
          .animate-snow-fall-2 { animation: snow-fall-2 17s linear infinite 4s; }
          .animate-snow-fall-3 { animation: snow-fall-3 16s linear infinite 8s; }
          .animate-snow-fall-4 { animation: snow-fall-4 18s linear infinite 12s; }
          .animate-snow-fall-5 { animation: snow-fall-5 14s linear infinite 2s; }
          .animate-snow-fall-6 { animation: snow-fall-6 16.5s linear infinite 6s; }
          .animate-snow-fall-7 { animation: snow-fall-7 15.5s linear infinite 10s; }
          .animate-snow-fall-8 { animation: snow-fall-8 17.5s linear infinite 3s; }
          .animate-snow-fall-9 { animation: snow-fall-9 13s linear infinite 7s; }
          .animate-snow-fall-10 { animation: snow-fall-10 14.5s linear infinite 11s; }
          .animate-snow-fall-11 { animation: snow-fall-11 16.2s linear infinite 5s; }
          .animate-snow-fall-12 { animation: snow-fall-12 15.2s linear infinite 9s; }
          
          .animate-ice-shimmer-1 { animation: ice-shimmer-1 10s ease-in-out infinite; }
          .animate-ice-shimmer-2 { animation: ice-shimmer-2 12s ease-in-out infinite 3s; }
          .animate-ice-shimmer-3 { animation: ice-shimmer-3 11s ease-in-out infinite 6s; }
          .animate-ice-shimmer-4 { animation: ice-shimmer-4 13s ease-in-out infinite 2s; }
          
          .animate-ice-field-atmosphere { animation: ice-field-atmosphere 22s ease-in-out infinite; }
          .animate-aurora-ice-reflection { animation: aurora-ice-reflection 20s ease-in-out infinite 7s; }
        `}</style>
      </div>
    </Card>
  );
}

