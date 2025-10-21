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
          {/* Epic Northern Lights Aurora Borealis */}
          <div className="absolute inset-0">
            {/* Main aurora bands */}
            <div className="absolute top-[5%] left-[10%] w-[300px] h-[200px] bg-gradient-to-b from-emerald-300/25 via-cyan-300/20 to-transparent aurora-band animate-aurora-wave-1"></div>
            <div className="absolute top-[8%] left-[30%] w-[350px] h-[220px] bg-gradient-to-b from-cyan-300/22 via-teal-300/18 to-transparent aurora-band animate-aurora-wave-2"></div>
            <div className="absolute top-[3%] right-[10%] w-[320px] h-[210px] bg-gradient-to-b from-emerald-300/23 via-cyan-400/19 to-transparent aurora-band animate-aurora-wave-3"></div>
            
            {/* Aurora curtains */}
            <div className="absolute top-[10%] left-[20%] w-[150px] h-[180px] bg-gradient-to-b from-teal-300/20 via-emerald-300/15 to-transparent aurora-curtain animate-aurora-curtain-1"></div>
            <div className="absolute top-[8%] left-[55%] w-[180px] h-[200px] bg-gradient-to-b from-cyan-300/18 via-teal-400/14 to-transparent aurora-curtain animate-aurora-curtain-2"></div>
            <div className="absolute top-[12%] right-[25%] w-[160px] h-[190px] bg-gradient-to-b from-emerald-300/19 via-cyan-300/13 to-transparent aurora-curtain animate-aurora-curtain-3"></div>
            
            {/* Aurora shimmer layers */}
            <div className="absolute top-[0%] left-[0%] w-full h-[50%] bg-gradient-to-b from-cyan-300/8 via-emerald-300/5 to-transparent aurora-shimmer animate-aurora-shimmer-1"></div>
            <div className="absolute top-[5%] left-[0%] w-full h-[45%] bg-gradient-to-b from-teal-300/6 via-cyan-400/4 to-transparent aurora-shimmer animate-aurora-shimmer-2"></div>
          </div>

          {/* Frozen River Glow */}
          <div className="absolute inset-0">
            {/* Main river glow */}
            <div className="absolute top-[70%] left-[35%] w-[120px] h-[80px] bg-cyan-300/20 rounded-full river-glow animate-river-glow-1"></div>
            <div className="absolute top-[75%] left-[40%] w-[100px] h-[60px] bg-teal-300/18 rounded-full river-glow animate-river-glow-2"></div>
            <div className="absolute top-[80%] left-[43%] w-[90px] h-[50px] bg-cyan-400/16 rounded-full river-glow animate-river-glow-3"></div>
            
            {/* River path highlights */}
            <div className="absolute top-[68%] left-[38%] w-[80px] h-[40px] bg-emerald-300/15 rounded-full river-shimmer animate-river-shimmer-1"></div>
            <div className="absolute top-[73%] left-[42%] w-[70px] h-[35px] bg-cyan-300/14 rounded-full river-shimmer animate-river-shimmer-2"></div>
            <div className="absolute top-[78%] left-[45%] w-[65px] h-[30px] bg-teal-300/13 rounded-full river-shimmer animate-river-shimmer-3"></div>
          </div>

          {/* Icicle Sparkles */}
          <div className="absolute inset-0">
            {/* Left cliff icicles */}
            <div className="absolute top-[42%] left-[8%] w-[3px] h-[3px] bg-cyan-200/90 rounded-full icicle-sparkle animate-icicle-sparkle-1"></div>
            <div className="absolute top-[38%] left-[12%] w-[2px] h-[2px] bg-white/85 rounded-full icicle-sparkle animate-icicle-sparkle-2"></div>
            <div className="absolute top-[45%] left-[6%] w-[3px] h-[3px] bg-blue-100/88 rounded-full icicle-sparkle animate-icicle-sparkle-3"></div>
            <div className="absolute top-[50%] left-[10%] w-[2px] h-[2px] bg-cyan-200/82 rounded-full icicle-sparkle animate-icicle-sparkle-4"></div>
            <div className="absolute top-[55%] left-[7%] w-[3px] h-[3px] bg-white/90 rounded-full icicle-sparkle animate-icicle-sparkle-5"></div>
            
            {/* Right cliff icicles */}
            <div className="absolute top-[40%] right-[8%] w-[3px] h-[3px] bg-cyan-200/88 rounded-full icicle-sparkle animate-icicle-sparkle-6"></div>
            <div className="absolute top-[44%] right-[12%] w-[2px] h-[2px] bg-white/86 rounded-full icicle-sparkle animate-icicle-sparkle-7"></div>
            <div className="absolute top-[48%] right-[6%] w-[3px] h-[3px] bg-blue-100/85 rounded-full icicle-sparkle animate-icicle-sparkle-8"></div>
            <div className="absolute top-[52%] right-[10%] w-[2px] h-[2px] bg-cyan-200/83 rounded-full icicle-sparkle animate-icicle-sparkle-9"></div>
            <div className="absolute top-[58%] right-[7%] w-[3px] h-[3px] bg-white/87 rounded-full icicle-sparkle animate-icicle-sparkle-10"></div>
          </div>

          {/* Ice Crystal Sparkles on Cliffs */}
          <div className="absolute inset-0">
            {/* Left cliff crystals */}
            <div className="absolute top-[35%] left-[15%] w-[2px] h-[2px] bg-cyan-300/85 rounded-full ice-crystal animate-crystal-twinkle-1"></div>
            <div className="absolute top-[48%] left-[18%] w-[2px] h-[2px] bg-white/88 rounded-full ice-crystal animate-crystal-twinkle-2"></div>
            <div className="absolute top-[60%] left-[14%] w-[2px] h-[2px] bg-blue-200/82 rounded-full ice-crystal animate-crystal-twinkle-3"></div>
            
            {/* Right cliff crystals */}
            <div className="absolute top-[38%] right-[15%] w-[2px] h-[2px] bg-cyan-300/83 rounded-full ice-crystal animate-crystal-twinkle-4"></div>
            <div className="absolute top-[46%] right-[18%] w-[2px] h-[2px] bg-white/86 rounded-full ice-crystal animate-crystal-twinkle-5"></div>
            <div className="absolute top-[62%] right-[14%] w-[2px] h-[2px] bg-blue-200/80 rounded-full ice-crystal animate-crystal-twinkle-6"></div>
          </div>

          {/* Falling Snow - Magical Particles */}
          <div className="absolute inset-0">
            {/* Large snowflakes */}
            <div className="absolute top-[10%] left-[20%] w-[4px] h-[4px] bg-white/70 rounded-full snowflake animate-snow-magic-fall-1"></div>
            <div className="absolute top-[5%] left-[40%] w-[3px] h-[3px] bg-white/65 rounded-full snowflake animate-snow-magic-fall-2"></div>
            <div className="absolute top-[8%] left-[60%] w-[4px] h-[4px] bg-white/68 rounded-full snowflake animate-snow-magic-fall-3"></div>
            <div className="absolute top-[12%] left-[80%] w-[3px] h-[3px] bg-white/62 rounded-full snowflake animate-snow-magic-fall-4"></div>
            
            {/* Medium snowflakes */}
            <div className="absolute top-[15%] left-[25%] w-[2px] h-[2px] bg-white/55 rounded-full snowflake animate-snow-magic-fall-5"></div>
            <div className="absolute top-[8%] left-[50%] w-[2px] h-[2px] bg-white/58 rounded-full snowflake animate-snow-magic-fall-6"></div>
            <div className="absolute top-[18%] left-[70%] w-[2px] h-[2px] bg-white/52 rounded-full snowflake animate-snow-magic-fall-7"></div>
            <div className="absolute top-[10%] left-[85%] w-[2px] h-[2px] bg-white/60 rounded-full snowflake animate-snow-magic-fall-8"></div>
            
            {/* Small snowflakes */}
            <div className="absolute top-[7%] left-[30%] w-[1px] h-[1px] bg-white/48 rounded-full snowflake animate-snow-magic-fall-9"></div>
            <div className="absolute top-[14%] left-[55%] w-[1px] h-[1px] bg-white/45 rounded-full snowflake animate-snow-magic-fall-10"></div>
            <div className="absolute top-[9%] left-[75%] w-[1px] h-[1px] bg-white/50 rounded-full snowflake animate-snow-magic-fall-11"></div>
            <div className="absolute top-[16%] left-[90%] w-[1px] h-[1px] bg-white/46 rounded-full snowflake animate-snow-magic-fall-12"></div>
          </div>

          {/* Snow-Covered Trees Shimmer */}
          <div className="absolute inset-0">
            {/* Left trees */}
            <div className="absolute top-[68%] left-[8%] w-[15px] h-[15px] bg-cyan-200/15 rounded-full tree-shimmer animate-tree-shimmer-1"></div>
            <div className="absolute top-[72%] left-[12%] w-[12px] h-[12px] bg-white/12 rounded-full tree-shimmer animate-tree-shimmer-2"></div>
            
            {/* Right trees */}
            <div className="absolute top-[70%] right-[8%] w-[14px] h-[14px] bg-cyan-200/14 rounded-full tree-shimmer animate-tree-shimmer-3"></div>
            <div className="absolute top-[74%] right-[12%] w-[13px] h-[13px] bg-white/13 rounded-full tree-shimmer animate-tree-shimmer-4"></div>
          </div>

          {/* Ground Snow Sparkles */}
          <div className="absolute inset-0">
            <div className="absolute top-[82%] left-[20%] w-[2px] h-[2px] bg-cyan-200/75 rounded-full ground-sparkle animate-ground-sparkle-1"></div>
            <div className="absolute top-[85%] left-[35%] w-[2px] h-[2px] bg-white/80 rounded-full ground-sparkle animate-ground-sparkle-2"></div>
            <div className="absolute top-[83%] left-[50%] w-[2px] h-[2px] bg-blue-100/72 rounded-full ground-sparkle animate-ground-sparkle-3"></div>
            <div className="absolute top-[86%] left-[65%] w-[2px] h-[2px] bg-cyan-200/78 rounded-full ground-sparkle animate-ground-sparkle-4"></div>
            <div className="absolute top-[84%] left-[80%] w-[2px] h-[2px] bg-white/76 rounded-full ground-sparkle animate-ground-sparkle-5"></div>
          </div>

          {/* Mystical Atmospheric Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-300/6 via-emerald-300/4 to-teal-400/3 animate-mystical-atmosphere"></div>
          
          {/* Aurora Reflection Enhancement */}
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/8 via-transparent to-transparent animate-aurora-reflection"></div>
        </div>
        
        <style jsx>{`
          .aurora-band {
            filter: blur(40px);
            opacity: 0;
          }
          
          .aurora-curtain {
            filter: blur(35px);
            opacity: 0;
          }
          
          .aurora-shimmer {
            filter: blur(50px);
            opacity: 0;
          }
          
          .river-glow {
            filter: blur(30px);
          }
          
          .river-shimmer {
            filter: blur(25px);
          }
          
          .icicle-sparkle {
            box-shadow: 0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor;
            filter: blur(0.3px);
          }
          
          .ice-crystal {
            box-shadow: 0 0 16px currentColor, 0 0 32px currentColor, 0 0 48px currentColor;
            filter: blur(0.4px);
          }
          
          .snowflake {
            box-shadow: 0 0 12px currentColor, 0 0 24px currentColor;
            filter: blur(0.7px);
          }
          
          .tree-shimmer {
            filter: blur(15px);
          }
          
          .ground-sparkle {
            box-shadow: 0 0 18px currentColor, 0 0 36px currentColor, 0 0 54px currentColor;
            filter: blur(0.3px);
          }
          
          .animate-effects .aurora-band {
            animation-play-state: running;
          }
          
          .animate-effects .aurora-curtain {
            animation-play-state: running;
          }
          
          .animate-effects .aurora-shimmer {
            animation-play-state: running;
          }
          
          .animate-effects .river-glow {
            animation-play-state: running;
          }
          
          .animate-effects .river-shimmer {
            animation-play-state: running;
          }
          
          .animate-effects .icicle-sparkle {
            animation-play-state: running;
          }
          
          .animate-effects .ice-crystal {
            animation-play-state: running;
          }
          
          .animate-effects .snowflake {
            animation-play-state: running;
          }
          
          .animate-effects .tree-shimmer {
            animation-play-state: running;
          }
          
          .animate-effects .ground-sparkle {
            animation-play-state: running;
          }
          
          @keyframes aurora-wave-1 {
            0%, 100% { opacity: 0; transform: translateY(0px) scaleY(1) skewX(0deg); }
            25% { opacity: 0.6; transform: translateY(-20px) scaleY(1.4) skewX(5deg); }
            50% { opacity: 0.45; transform: translateY(-12px) scaleY(1.1) skewX(-3deg); }
            75% { opacity: 0.55; transform: translateY(-25px) scaleY(1.3) skewX(4deg); }
          }
          
          @keyframes aurora-wave-2 {
            0%, 100% { opacity: 0; transform: translateY(0px) scaleY(1) skewX(0deg); }
            30% { opacity: 0.58; transform: translateY(-22px) scaleY(1.45) skewX(-5deg); }
            60% { opacity: 0.42; transform: translateY(-14px) scaleY(1.12) skewX(3deg); }
            85% { opacity: 0.52; transform: translateY(-28px) scaleY(1.35) skewX(-4deg); }
          }
          
          @keyframes aurora-wave-3 {
            0%, 100% { opacity: 0; transform: translateY(0px) scaleY(1) skewX(0deg); }
            35% { opacity: 0.62; transform: translateY(-25px) scaleY(1.42) skewX(6deg); }
            65% { opacity: 0.48; transform: translateY(-16px) scaleY(1.08) skewX(-5deg); }
            90% { opacity: 0.56; transform: translateY(-30px) scaleY(1.38) skewX(4deg); }
          }
          
          @keyframes aurora-curtain-1 {
            0%, 100% { opacity: 0; transform: translateY(0px) scaleY(1); }
            40% { opacity: 0.28; transform: translateY(-10px) scaleY(1.15); }
            80% { opacity: 0.18; transform: translateY(-5px) scaleY(0.9); }
          }
          
          @keyframes aurora-curtain-2 {
            0%, 100% { opacity: 0; transform: translateY(0px) scaleY(1); }
            45% { opacity: 0.26; transform: translateY(-12px) scaleY(1.18); }
            85% { opacity: 0.16; transform: translateY(-6px) scaleY(0.88); }
          }
          
          @keyframes aurora-curtain-3 {
            0%, 100% { opacity: 0; transform: translateY(0px) scaleY(1); }
            50% { opacity: 0.27; transform: translateY(-14px) scaleY(1.2); }
            90% { opacity: 0.17; transform: translateY(-7px) scaleY(0.85); }
          }
          
          @keyframes aurora-shimmer-1 {
            0%, 100% { opacity: 0; }
            50% { opacity: 0.2; }
          }
          
          @keyframes aurora-shimmer-2 {
            0%, 100% { opacity: 0; }
            60% { opacity: 0.15; }
          }
          
          @keyframes river-glow-1 {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.35; transform: scale(1.15); }
          }
          
          @keyframes river-glow-2 {
            0%, 100% { opacity: 0.18; transform: scale(1); }
            60% { opacity: 0.32; transform: scale(1.12); }
          }
          
          @keyframes river-glow-3 {
            0%, 100% { opacity: 0.16; transform: scale(1); }
            55% { opacity: 0.28; transform: scale(1.1); }
          }
          
          @keyframes river-shimmer-1 {
            0%, 100% { opacity: 0.15; transform: scale(1) translateX(0px); }
            50% { opacity: 0.25; transform: scale(1.08) translateX(3px); }
          }
          
          @keyframes river-shimmer-2 {
            0%, 100% { opacity: 0.14; transform: scale(1) translateX(0px); }
            60% { opacity: 0.22; transform: scale(1.06) translateX(-2px); }
          }
          
          @keyframes river-shimmer-3 {
            0%, 100% { opacity: 0.13; transform: scale(1) translateX(0px); }
            55% { opacity: 0.2; transform: scale(1.05) translateX(2px); }
          }
          
          @keyframes icicle-sparkle-1 {
            0%, 70%, 100% { opacity: 0; transform: scale(1); }
            75%, 85% { opacity: 0.9; transform: scale(1.6); }
            80% { opacity: 0.4; transform: scale(1.3); }
          }
          
          @keyframes icicle-sparkle-2 {
            0%, 65%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            70%, 80% { opacity: 0.85; transform: scale(1.5) rotate(180deg); }
            75% { opacity: 0.35; transform: scale(1.2) rotate(90deg); }
          }
          
          @keyframes icicle-sparkle-3 {
            0%, 78%, 100% { opacity: 0; transform: scale(1); }
            83%, 93% { opacity: 0.88; transform: scale(1.7); }
            88% { opacity: 0.38; transform: scale(1.35); }
          }
          
          @keyframes icicle-sparkle-4 {
            0%, 72%, 100% { opacity: 0; transform: scale(1); }
            77%, 87% { opacity: 0.82; transform: scale(1.4); }
            82% { opacity: 0.32; transform: scale(1.15); }
          }
          
          @keyframes icicle-sparkle-5 {
            0%, 68%, 100% { opacity: 0; transform: scale(1); }
            73%, 83% { opacity: 0.9; transform: scale(1.65); }
            78% { opacity: 0.4; transform: scale(1.32); }
          }
          
          @keyframes icicle-sparkle-6 {
            0%, 75%, 100% { opacity: 0; transform: scale(1); }
            80%, 90% { opacity: 0.88; transform: scale(1.55); }
            85% { opacity: 0.38; transform: scale(1.28); }
          }
          
          @keyframes icicle-sparkle-7 {
            0%, 80%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            85%, 95% { opacity: 0.86; transform: scale(1.52) rotate(360deg); }
            90% { opacity: 0.36; transform: scale(1.25) rotate(180deg); }
          }
          
          @keyframes icicle-sparkle-8 {
            0%, 62%, 100% { opacity: 0; transform: scale(1); }
            67%, 77% { opacity: 0.85; transform: scale(1.48); }
            72% { opacity: 0.35; transform: scale(1.2); }
          }
          
          @keyframes icicle-sparkle-9 {
            0%, 76%, 100% { opacity: 0; transform: scale(1); }
            81%, 91% { opacity: 0.83; transform: scale(1.45); }
            86% { opacity: 0.33; transform: scale(1.18); }
          }
          
          @keyframes icicle-sparkle-10 {
            0%, 69%, 100% { opacity: 0; transform: scale(1); }
            74%, 84% { opacity: 0.87; transform: scale(1.58); }
            79% { opacity: 0.37; transform: scale(1.3); }
          }
          
          @keyframes crystal-twinkle-1 {
            0%, 85%, 100% { opacity: 0; }
            90%, 96% { opacity: 0.85; }
            93% { opacity: 0.4; }
          }
          
          @keyframes crystal-twinkle-2 {
            0%, 78%, 100% { opacity: 0; }
            83%, 89% { opacity: 0.88; }
            86% { opacity: 0.42; }
          }
          
          @keyframes crystal-twinkle-3 {
            0%, 82%, 100% { opacity: 0; }
            87%, 93% { opacity: 0.82; }
            90% { opacity: 0.38; }
          }
          
          @keyframes crystal-twinkle-4 {
            0%, 88%, 100% { opacity: 0; }
            93%, 99% { opacity: 0.83; }
            96% { opacity: 0.39; }
          }
          
          @keyframes crystal-twinkle-5 {
            0%, 75%, 100% { opacity: 0; }
            80%, 86% { opacity: 0.86; }
            83% { opacity: 0.41; }
          }
          
          @keyframes crystal-twinkle-6 {
            0%, 80%, 100% { opacity: 0; }
            85%, 91% { opacity: 0.80; }
            88% { opacity: 0.37; }
          }
          
          @keyframes snow-magic-fall-1 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.7; transform: translateY(400px) translateX(30px) rotate(180deg); }
            100% { opacity: 0; transform: translateY(800px) translateX(50px) rotate(360deg); }
          }
          
          @keyframes snow-magic-fall-2 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.65; transform: translateY(420px) translateX(-25px) rotate(240deg); }
            100% { opacity: 0; transform: translateY(840px) translateX(-42px) rotate(480deg); }
          }
          
          @keyframes snow-magic-fall-3 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.68; transform: translateY(410px) translateX(28px) rotate(200deg); }
            100% { opacity: 0; transform: translateY(820px) translateX(48px) rotate(400deg); }
          }
          
          @keyframes snow-magic-fall-4 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.62; transform: translateY(430px) translateX(-20px) rotate(220deg); }
            100% { opacity: 0; transform: translateY(860px) translateX(-35px) rotate(440deg); }
          }
          
          @keyframes snow-magic-fall-5 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.55; transform: translateY(390px) translateX(22px) rotate(160deg); }
            100% { opacity: 0; transform: translateY(780px) translateX(38px) rotate(320deg); }
          }
          
          @keyframes snow-magic-fall-6 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.58; transform: translateY(405px) translateX(-18px) rotate(190deg); }
            100% { opacity: 0; transform: translateY(810px) translateX(-32px) rotate(380deg); }
          }
          
          @keyframes snow-magic-fall-7 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.52; transform: translateY(395px) translateX(26px) rotate(210deg); }
            100% { opacity: 0; transform: translateY(790px) translateX(44px) rotate(420deg); }
          }
          
          @keyframes snow-magic-fall-8 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.6; transform: translateY(415px) translateX(-22px) rotate(170deg); }
            100% { opacity: 0; transform: translateY(830px) translateX(-38px) rotate(340deg); }
          }
          
          @keyframes snow-magic-fall-9 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.48; transform: translateY(380px) translateX(15px); }
            100% { opacity: 0; transform: translateY(760px) translateX(28px); }
          }
          
          @keyframes snow-magic-fall-10 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.45; transform: translateY(402px) translateX(-16px); }
            100% { opacity: 0; transform: translateY(804px) translateX(-30px); }
          }
          
          @keyframes snow-magic-fall-11 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.5; transform: translateY(412px) translateX(19px); }
            100% { opacity: 0; transform: translateY(824px) translateX(34px); }
          }
          
          @keyframes snow-magic-fall-12 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.46; transform: translateY(398px) translateX(-14px); }
            100% { opacity: 0; transform: translateY(796px) translateX(-26px); }
          }
          
          @keyframes tree-shimmer-1 {
            0%, 100% { opacity: 0.15; }
            50% { opacity: 0.25; }
          }
          
          @keyframes tree-shimmer-2 {
            0%, 100% { opacity: 0.12; }
            60% { opacity: 0.22; }
          }
          
          @keyframes tree-shimmer-3 {
            0%, 100% { opacity: 0.14; }
            55% { opacity: 0.24; }
          }
          
          @keyframes tree-shimmer-4 {
            0%, 100% { opacity: 0.13; }
            65% { opacity: 0.23; }
          }
          
          @keyframes ground-sparkle-1 {
            0%, 88%, 100% { opacity: 0; transform: scale(1); }
            92%, 98% { opacity: 0.75; transform: scale(1.4); }
            95% { opacity: 0.35; transform: scale(1.2); }
          }
          
          @keyframes ground-sparkle-2 {
            0%, 82%, 100% { opacity: 0; transform: scale(1); }
            86%, 92% { opacity: 0.8; transform: scale(1.5); }
            89% { opacity: 0.38; transform: scale(1.25); }
          }
          
          @keyframes ground-sparkle-3 {
            0%, 90%, 100% { opacity: 0; transform: scale(1); }
            94%, 99% { opacity: 0.72; transform: scale(1.35); }
            96% { opacity: 0.32; transform: scale(1.15); }
          }
          
          @keyframes ground-sparkle-4 {
            0%, 85%, 100% { opacity: 0; transform: scale(1); }
            89%, 95% { opacity: 0.78; transform: scale(1.45); }
            92% { opacity: 0.36; transform: scale(1.22); }
          }
          
          @keyframes ground-sparkle-5 {
            0%, 87%, 100% { opacity: 0; transform: scale(1); }
            91%, 97% { opacity: 0.76; transform: scale(1.42); }
            94% { opacity: 0.34; transform: scale(1.18); }
          }
          
          @keyframes mystical-atmosphere {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 0.8; }
          }
          
          @keyframes aurora-reflection {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; }
          }
          
          .animate-aurora-wave-1 { animation: aurora-wave-1 18s ease-in-out infinite; }
          .animate-aurora-wave-2 { animation: aurora-wave-2 22s ease-in-out infinite 5s; }
          .animate-aurora-wave-3 { animation: aurora-wave-3 20s ease-in-out infinite 10s; }
          
          .animate-aurora-curtain-1 { animation: aurora-curtain-1 15s ease-in-out infinite 3s; }
          .animate-aurora-curtain-2 { animation: aurora-curtain-2 17s ease-in-out infinite 7s; }
          .animate-aurora-curtain-3 { animation: aurora-curtain-3 16s ease-in-out infinite 11s; }
          
          .animate-aurora-shimmer-1 { animation: aurora-shimmer-1 25s ease-in-out infinite; }
          .animate-aurora-shimmer-2 { animation: aurora-shimmer-2 28s ease-in-out infinite 8s; }
          
          .animate-river-glow-1 { animation: river-glow-1 8s ease-in-out infinite; }
          .animate-river-glow-2 { animation: river-glow-2 9s ease-in-out infinite 2s; }
          .animate-river-glow-3 { animation: river-glow-3 10s ease-in-out infinite 4s; }
          
          .animate-river-shimmer-1 { animation: river-shimmer-1 7s ease-in-out infinite 1s; }
          .animate-river-shimmer-2 { animation: river-shimmer-2 8s ease-in-out infinite 3s; }
          .animate-river-shimmer-3 { animation: river-shimmer-3 7.5s ease-in-out infinite 5s; }
          
          .animate-icicle-sparkle-1 { animation: icicle-sparkle-1 8s linear infinite; }
          .animate-icicle-sparkle-2 { animation: icicle-sparkle-2 9s linear infinite 1.5s; }
          .animate-icicle-sparkle-3 { animation: icicle-sparkle-3 7.5s linear infinite 3s; }
          .animate-icicle-sparkle-4 { animation: icicle-sparkle-4 8.5s linear infinite 4.5s; }
          .animate-icicle-sparkle-5 { animation: icicle-sparkle-5 9.5s linear infinite 2s; }
          .animate-icicle-sparkle-6 { animation: icicle-sparkle-6 8.2s linear infinite 6s; }
          .animate-icicle-sparkle-7 { animation: icicle-sparkle-7 7.8s linear infinite 2.5s; }
          .animate-icicle-sparkle-8 { animation: icicle-sparkle-8 9.2s linear infinite 5s; }
          .animate-icicle-sparkle-9 { animation: icicle-sparkle-9 8.8s linear infinite 3.5s; }
          .animate-icicle-sparkle-10 { animation: icicle-sparkle-10 9.8s linear infinite 7s; }
          
          .animate-crystal-twinkle-1 { animation: crystal-twinkle-1 6s linear infinite; }
          .animate-crystal-twinkle-2 { animation: crystal-twinkle-2 7s linear infinite 2s; }
          .animate-crystal-twinkle-3 { animation: crystal-twinkle-3 6.5s linear infinite 4s; }
          .animate-crystal-twinkle-4 { animation: crystal-twinkle-4 7.5s linear infinite 1s; }
          .animate-crystal-twinkle-5 { animation: crystal-twinkle-5 8s linear infinite 3s; }
          .animate-crystal-twinkle-6 { animation: crystal-twinkle-6 6.8s linear infinite 5s; }
          
          .animate-snow-magic-fall-1 { animation: snow-magic-fall-1 14s linear infinite; }
          .animate-snow-magic-fall-2 { animation: snow-magic-fall-2 16s linear infinite 3s; }
          .animate-snow-magic-fall-3 { animation: snow-magic-fall-3 15s linear infinite 6s; }
          .animate-snow-magic-fall-4 { animation: snow-magic-fall-4 17s linear infinite 9s; }
          .animate-snow-magic-fall-5 { animation: snow-magic-fall-5 13s linear infinite 2s; }
          .animate-snow-magic-fall-6 { animation: snow-magic-fall-6 15.5s linear infinite 5s; }
          .animate-snow-magic-fall-7 { animation: snow-magic-fall-7 14.5s linear infinite 8s; }
          .animate-snow-magic-fall-8 { animation: snow-magic-fall-8 16.5s linear infinite 11s; }
          .animate-snow-magic-fall-9 { animation: snow-magic-fall-9 12s linear infinite 4s; }
          .animate-snow-magic-fall-10 { animation: snow-magic-fall-10 13.5s linear infinite 7s; }
          .animate-snow-magic-fall-11 { animation: snow-magic-fall-11 15.2s linear infinite 10s; }
          .animate-snow-magic-fall-12 { animation: snow-magic-fall-12 14.2s linear infinite 1s; }
          
          .animate-tree-shimmer-1 { animation: tree-shimmer-1 8s ease-in-out infinite; }
          .animate-tree-shimmer-2 { animation: tree-shimmer-2 9s ease-in-out infinite 2s; }
          .animate-tree-shimmer-3 { animation: tree-shimmer-3 8.5s ease-in-out infinite 4s; }
          .animate-tree-shimmer-4 { animation: tree-shimmer-4 9.5s ease-in-out infinite 6s; }
          
          .animate-ground-sparkle-1 { animation: ground-sparkle-1 7s linear infinite; }
          .animate-ground-sparkle-2 { animation: ground-sparkle-2 8s linear infinite 2s; }
          .animate-ground-sparkle-3 { animation: ground-sparkle-3 7.5s linear infinite 4s; }
          .animate-ground-sparkle-4 { animation: ground-sparkle-4 8.5s linear infinite 1s; }
          .animate-ground-sparkle-5 { animation: ground-sparkle-5 9s linear infinite 3s; }
          
          .animate-mystical-atmosphere { animation: mystical-atmosphere 20s ease-in-out infinite; }
          .animate-aurora-reflection { animation: aurora-reflection 18s ease-in-out infinite 5s; }
        `}</style>
      </div>
    </Card>
  );
}

