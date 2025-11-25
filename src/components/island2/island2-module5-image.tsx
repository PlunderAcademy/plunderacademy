"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Island2Module5Image() {
  const [videoError, setVideoError] = useState(false);

  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        {/* Video with image fallback */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/islands/island2/island2-module5-image.webp"
          onError={() => setVideoError(true)}
        >
          <source src="/islands/island2/island2-module5-video.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback image shown only if video fails */}
        {videoError && (
          <Image
            src="/islands/island2/island2-module5-image.webp"
            alt="Staking Contract Practical - Frost Peak Adventure"
            fill
            className="object-cover"
            priority
          />
        )}
        
        {/* BOLD Animated overlay effects - Only shown if video fails */}
        {videoError && (
          <div className="absolute inset-0 animate-effects">
          {/* EPIC Northern Lights/Aurora - BOLD (moved higher) */}
          <div className="absolute inset-0">
            {/* Main aurora waves - dramatic flowing - positioned higher to avoid mammoth */}            
            <div className="absolute top-[0%] left-[8%] w-[320px] h-[240px] bg-gradient-to-b from-emerald-300/55 via-cyan-300/45 to-transparent aurora-bold animate-aurora-flow-1"></div>
            <div className="absolute top-[-2%] left-[38%] w-[380px] h-[250px] bg-gradient-to-b from-cyan-300/60 via-teal-300/50 to-transparent aurora-bold animate-aurora-flow-2"></div>
            <div className="absolute top-[2%] right-[8%] w-[340px] h-[245px] bg-gradient-to-b from-teal-300/58 via-emerald-400/48 to-transparent aurora-bold animate-aurora-flow-3"></div>
            
            {/* Vertical aurora curtains - also moved higher */}
            <div className="absolute top-[0%] left-[15%] w-[140px] h-[280px] bg-gradient-to-b from-emerald-300/50 via-cyan-400/35 to-transparent aurora-curtain animate-aurora-curtain-1"></div>
            <div className="absolute top-[-2%] left-[48%] w-[160px] h-[290px] bg-gradient-to-b from-cyan-300/52 via-teal-300/38 to-transparent aurora-curtain animate-aurora-curtain-2"></div>
            <div className="absolute top-[1%] right-[15%] w-[150px] h-[285px] bg-gradient-to-b from-teal-300/54 via-emerald-300/40 to-transparent aurora-curtain animate-aurora-curtain-3"></div>
          </div>

          {/* Ghost Spirits - BOLD Floating (kept in upper sky area only) */}
          <div className="absolute inset-0">
            {/* Left ghost */}
            <div className="absolute top-[8%] left-[18%] w-[80px] h-[90px] bg-gradient-to-b from-cyan-200/45 via-white/35 to-transparent ghost-spirit animate-ghost-float-1"></div>
            <div className="absolute top-[10%] left-[20%] w-[60px] h-[70px] bg-gradient-to-b from-white/40 via-cyan-100/30 to-transparent ghost-spirit animate-ghost-float-2"></div>
            
            {/* Center-left ghost */}
            <div className="absolute top-[5%] left-[38%] w-[90px] h-[95px] bg-gradient-to-b from-cyan-200/50 via-white/40 to-transparent ghost-spirit animate-ghost-float-3"></div>
            <div className="absolute top-[7%] left-[40%] w-[70px] h-[80px] bg-gradient-to-b from-white/45 via-cyan-100/35 to-transparent ghost-spirit animate-ghost-float-4"></div>
            
            {/* Right ghost */}
            <div className="absolute top-[6%] right-[18%] w-[85px] h-[92px] bg-gradient-to-b from-cyan-200/48 via-white/38 to-transparent ghost-spirit animate-ghost-float-5"></div>
            <div className="absolute top-[8%] right-[20%] w-[65px] h-[75px] bg-gradient-to-b from-white/42 via-cyan-100/32 to-transparent ghost-spirit animate-ghost-float-6"></div>
            
            {/* Center ghost */}
            <div className="absolute top-[10%] left-[58%] w-[75px] h-[85px] bg-gradient-to-b from-cyan-200/46 via-white/36 to-transparent ghost-spirit animate-ghost-float-7"></div>
          </div>

          {/* Tusk Sparkles - BOLD */}
          <div className="absolute inset-0">
            {/* Left tusk */}
            <div className="absolute top-[44%] left-[36%] w-[7px] h-[7px] bg-white rounded-full tusk-sparkle animate-tusk-sparkle-1"></div>
            <div className="absolute top-[49%] left-[34%] w-[6px] h-[6px] bg-cyan-100 rounded-full tusk-sparkle animate-tusk-sparkle-2"></div>
            <div className="absolute top-[54%] left-[32%] w-[7px] h-[7px] bg-white rounded-full tusk-sparkle animate-tusk-sparkle-3"></div>
            
            {/* Right tusk */}
            <div className="absolute top-[44%] right-[36%] w-[7px] h-[7px] bg-white rounded-full tusk-sparkle animate-tusk-sparkle-4"></div>
            <div className="absolute top-[49%] right-[34%] w-[6px] h-[6px] bg-cyan-100 rounded-full tusk-sparkle animate-tusk-sparkle-5"></div>
            <div className="absolute top-[54%] right-[32%] w-[7px] h-[7px] bg-white rounded-full tusk-sparkle animate-tusk-sparkle-6"></div>
          </div>

          {/* Breath/Steam - BOLD */}
          <div className="absolute inset-0">
            <div className="absolute top-[42%] left-[47%] w-[90px] h-[60px] bg-white/40 rounded-full breath-steam animate-breath-1"></div>
            <div className="absolute top-[41%] left-[48%] w-[70px] h-[50px] bg-cyan-100/35 rounded-full breath-steam animate-breath-2"></div>
            <div className="absolute top-[40%] left-[49%] w-[50px] h-[40px] bg-white/30 rounded-full breath-steam animate-breath-3"></div>
          </div>

          {/* Heavy Snowfall - BOLD */}
          <div className="absolute inset-0">
            {/* Large dramatic flakes */}
            <div className="absolute top-[8%] left-[10%] w-[8px] h-[8px] bg-white/90 rounded-full snow-bold animate-snow-fall-1"></div>
            <div className="absolute top-[6%] left-[25%] w-[7px] h-[7px] bg-white/88 rounded-full snow-bold animate-snow-fall-2"></div>
            <div className="absolute top-[10%] left-[42%] w-[8px] h-[8px] bg-white/92 rounded-full snow-bold animate-snow-fall-3"></div>
            <div className="absolute top-[5%] left-[58%] w-[7px] h-[7px] bg-white/87 rounded-full snow-bold animate-snow-fall-4"></div>
            <div className="absolute top-[12%] left-[72%] w-[8px] h-[8px] bg-white/90 rounded-full snow-bold animate-snow-fall-5"></div>
            <div className="absolute top-[7%] left-[88%] w-[7px] h-[7px] bg-white/85 rounded-full snow-bold animate-snow-fall-6"></div>
            
            {/* Medium flakes */}
            <div className="absolute top-[14%] left-[18%] w-[5px] h-[5px] bg-white/80 rounded-full snow-medium animate-snow-fall-7"></div>
            <div className="absolute top-[9%] left-[35%] w-[5px] h-[5px] bg-white/78 rounded-full snow-medium animate-snow-fall-8"></div>
            <div className="absolute top-[16%] left-[52%] w-[5px] h-[5px] bg-white/82 rounded-full snow-medium animate-snow-fall-9"></div>
            <div className="absolute top-[11%] left-[68%] w-[5px] h-[5px] bg-white/77 rounded-full snow-medium animate-snow-fall-10"></div>
            <div className="absolute top-[15%] left-[82%] w-[5px] h-[5px] bg-white/80 rounded-full snow-medium animate-snow-fall-11"></div>
          </div>

          {/* Mountain Sparkles - BOLD */}
          <div className="absolute inset-0">
            {/* Left mountains */}
            <div className="absolute top-[32%] left-[8%] w-[6px] h-[6px] bg-cyan-100 rounded-full mountain-sparkle animate-mountain-twinkle-1"></div>
            <div className="absolute top-[36%] left-[12%] w-[7px] h-[7px] bg-white rounded-full mountain-sparkle animate-mountain-twinkle-2"></div>
            <div className="absolute top-[40%] left-[10%] w-[6px] h-[6px] bg-blue-100 rounded-full mountain-sparkle animate-mountain-twinkle-3"></div>
            
            {/* Right mountains */}
            <div className="absolute top-[34%] right-[8%] w-[6px] h-[6px] bg-cyan-100 rounded-full mountain-sparkle animate-mountain-twinkle-4"></div>
            <div className="absolute top-[38%] right-[12%] w-[7px] h-[7px] bg-white rounded-full mountain-sparkle animate-mountain-twinkle-5"></div>
            <div className="absolute top-[42%] right-[10%] w-[6px] h-[6px] bg-blue-100 rounded-full mountain-sparkle animate-mountain-twinkle-6"></div>
          </div>

          {/* Ice Crystal Formations - BOLD */}
          <div className="absolute inset-0">
            {/* Left side crystals */}
            <div className="absolute top-[52%] left-[10%] w-[100px] h-[120px] bg-gradient-to-t from-cyan-300/40 via-teal-200/30 to-transparent ice-crystal animate-ice-crystal-glow-1"></div>
            <div className="absolute top-[58%] left-[14%] w-[80px] h-[100px] bg-gradient-to-t from-teal-300/38 via-cyan-200/28 to-transparent ice-crystal animate-ice-crystal-glow-2"></div>
            
            {/* Right side crystals */}
            <div className="absolute top-[54%] right-[10%] w-[105px] h-[125px] bg-gradient-to-t from-cyan-300/42 via-teal-200/32 to-transparent ice-crystal animate-ice-crystal-glow-3"></div>
            <div className="absolute top-[60%] right-[14%] w-[85px] h-[105px] bg-gradient-to-t from-teal-300/40 via-cyan-200/30 to-transparent ice-crystal animate-ice-crystal-glow-4"></div>
          </div>

          {/* Magical Rune Circle - BOLD Pulsing */}
          <div className="absolute inset-0">
            <div className="absolute top-[72%] left-[35%] w-[320px] h-[80px] bg-gradient-to-t from-cyan-300/45 via-white/30 to-transparent rune-glow animate-rune-pulse-1"></div>
            <div className="absolute top-[74%] left-[37%] w-[280px] h-[70px] bg-gradient-to-t from-white/40 via-cyan-200/25 to-transparent rune-glow animate-rune-pulse-2"></div>
          </div>

          {/* Ground Snow Mist - BOLD */}
          <div className="absolute inset-0">
            <div className="absolute top-[68%] left-[28%] w-[110px] h-[70px] bg-white/35 rounded-full ground-mist animate-ground-mist-1"></div>
            <div className="absolute top-[70%] left-[35%] w-[90px] h-[60px] bg-cyan-100/30 rounded-full ground-mist animate-ground-mist-2"></div>
            <div className="absolute top-[69%] right-[28%] w-[115px] h-[75px] bg-white/38 rounded-full ground-mist animate-ground-mist-3"></div>
            <div className="absolute top-[71%] right-[35%] w-[95px] h-[65px] bg-cyan-100/32 rounded-full ground-mist animate-ground-mist-4"></div>
          </div>

          {/* Ground Ice Sparkles - BOLD */}
          <div className="absolute inset-0">
            <div className="absolute top-[80%] left-[12%] w-[6px] h-[6px] bg-cyan-100 rounded-full ground-sparkle animate-ground-sparkle-1"></div>
            <div className="absolute top-[84%] left-[25%] w-[7px] h-[7px] bg-white rounded-full ground-sparkle animate-ground-sparkle-2"></div>
            <div className="absolute top-[82%] left-[45%] w-[6px] h-[6px] bg-blue-100 rounded-full ground-sparkle animate-ground-sparkle-3"></div>
            <div className="absolute top-[86%] left-[65%] w-[7px] h-[7px] bg-cyan-100 rounded-full ground-sparkle animate-ground-sparkle-4"></div>
            <div className="absolute top-[83%] left-[82%] w-[6px] h-[6px] bg-white rounded-full ground-sparkle animate-ground-sparkle-5"></div>
          </div>
        
        <style jsx>{`
          /* Aurora effects - BOLD */
          .aurora-bold {
            filter: blur(50px);
          }
          
          .aurora-curtain {
            filter: blur(42px);
          }
          
          /* Ghost spirit effects */
          .ghost-spirit {
            filter: blur(35px);
          }
          
          /* Mammoth aura */
          .mammoth-aura {
            filter: blur(45px);
          }
          
          /* Tusk sparkles - dramatic */
          .tusk-sparkle {
            box-shadow: 0 0 45px currentColor, 0 0 90px currentColor, 0 0 135px currentColor;
            filter: blur(0.5px);
          }
          
          /* Breath steam */
          .breath-steam {
            filter: blur(30px);
          }
          
          /* Snow effects */
          .snow-bold {
            box-shadow: 0 0 25px currentColor, 0 0 50px currentColor, 0 0 75px currentColor;
            filter: blur(1px);
          }
          
          .snow-medium {
            box-shadow: 0 0 18px currentColor, 0 0 36px currentColor;
            filter: blur(0.8px);
          }
          
          /* Mountain sparkles */
          .mountain-sparkle {
            box-shadow: 0 0 40px currentColor, 0 0 80px currentColor, 0 0 120px currentColor;
            filter: blur(0.5px);
          }
          
          /* Ice crystal formations */
          .ice-crystal {
            filter: blur(38px);
          }
          
          /* Rune glow */
          .rune-glow {
            filter: blur(32px);
          }
          
          /* Ground effects */
          .ground-mist {
            filter: blur(35px);
          }
          
          .ground-sparkle {
            box-shadow: 0 0 35px currentColor, 0 0 70px currentColor, 0 0 105px currentColor;
            filter: blur(0.4px);
          }
          
          .animate-effects .aurora-bold,
          .animate-effects .aurora-curtain,
          .animate-effects .ghost-spirit,
          .animate-effects .mammoth-aura,
          .animate-effects .tusk-sparkle,
          .animate-effects .breath-steam,
          .animate-effects .snow-bold,
          .animate-effects .snow-medium,
          .animate-effects .mountain-sparkle,
          .animate-effects .ice-crystal,
          .animate-effects .rune-glow,
          .animate-effects .ground-mist,
          .animate-effects .ground-sparkle {
            animation-play-state: running;
          }
          
          /* Aurora flow animations - BOLD */
          @keyframes aurora-flow-1 {
            0%, 100% { opacity: 0.55; transform: translateX(0) translateY(0) scaleY(1) skewX(0deg); }
            25% { opacity: 0.80; transform: translateX(-40px) translateY(-30px) scaleY(1.5) skewX(8deg); }
            50% { opacity: 0.65; transform: translateX(-25px) translateY(-18px) scaleY(1.2) skewX(-6deg); }
            75% { opacity: 0.75; transform: translateX(-50px) translateY(-35px) scaleY(1.45) skewX(7deg); }
          }
          
          @keyframes aurora-flow-2 {
            0%, 100% { opacity: 0.60; transform: translateX(0) translateY(0) scaleY(1) skewX(0deg); }
            25% { opacity: 0.85; transform: translateX(45px) translateY(-32px) scaleY(1.55) skewX(-8deg); }
            50% { opacity: 0.70; transform: translateX(28px) translateY(-20px) scaleY(1.25) skewX(7deg); }
            75% { opacity: 0.80; transform: translateX(52px) translateY(-38px) scaleY(1.50) skewX(-7deg); }
          }
          
          @keyframes aurora-flow-3 {
            0%, 100% { opacity: 0.58; transform: translateX(0) translateY(0) scaleY(1) skewX(0deg); }
            25% { opacity: 0.82; transform: translateX(-38px) translateY(-28px) scaleY(1.52) skewX(9deg); }
            50% { opacity: 0.68; transform: translateX(-22px) translateY(-16px) scaleY(1.22) skewX(-7deg); }
            75% { opacity: 0.78; transform: translateX(-48px) translateY(-33px) scaleY(1.48) skewX(8deg); }
          }
          
          /* Aurora curtain animations */
          @keyframes aurora-curtain-1 {
            0%, 100% { opacity: 0.50; transform: translateY(0) scaleY(1) skewX(0deg); }
            50% { opacity: 0.75; transform: translateY(-20px) scaleY(1.3) skewX(4deg); }
          }
          
          @keyframes aurora-curtain-2 {
            0%, 100% { opacity: 0.52; transform: translateY(0) scaleY(1) skewX(0deg); }
            50% { opacity: 0.78; transform: translateY(-25px) scaleY(1.35) skewX(-4deg); }
          }
          
          @keyframes aurora-curtain-3 {
            0%, 100% { opacity: 0.54; transform: translateY(0) scaleY(1) skewX(0deg); }
            50% { opacity: 0.80; transform: translateY(-22px) scaleY(1.32) skewX(5deg); }
          }
          
          /* Ghost spirit floating animations - BOLD */
          @keyframes ghost-float-1 {
            0%, 100% { opacity: 0.45; transform: translateY(0) translateX(0) scale(1); }
            50% { opacity: 0.70; transform: translateY(-25px) translateX(-10px) scale(1.15); }
          }
          
          @keyframes ghost-float-2 {
            0%, 100% { opacity: 0.40; transform: translateY(0) translateX(0) scale(1); }
            50% { opacity: 0.65; transform: translateY(-22px) translateX(8px) scale(1.12); }
          }
          
          @keyframes ghost-float-3 {
            0%, 100% { opacity: 0.50; transform: translateY(0) translateX(0) scale(1); }
            50% { opacity: 0.75; transform: translateY(-28px) translateX(-12px) scale(1.18); }
          }
          
          @keyframes ghost-float-4 {
            0%, 100% { opacity: 0.45; transform: translateY(0) translateX(0) scale(1); }
            50% { opacity: 0.70; transform: translateY(-24px) translateX(10px) scale(1.14); }
          }
          
          @keyframes ghost-float-5 {
            0%, 100% { opacity: 0.48; transform: translateY(0) translateX(0) scale(1); }
            50% { opacity: 0.72; transform: translateY(-26px) translateX(-8px) scale(1.16); }
          }
          
          @keyframes ghost-float-6 {
            0%, 100% { opacity: 0.42; transform: translateY(0) translateX(0) scale(1); }
            50% { opacity: 0.68; transform: translateY(-23px) translateX(12px) scale(1.13); }
          }
          
          @keyframes ghost-float-7 {
            0%, 100% { opacity: 0.46; transform: translateY(0) translateX(0) scale(1); }
            50% { opacity: 0.71; transform: translateY(-27px) translateX(-6px) scale(1.17); }
          }
          
          /* Mammoth power aura - BOLD */
          @keyframes mammoth-power-1 {
            0%, 100% { opacity: 0.35; transform: scale(1); }
            50% { opacity: 0.55; transform: scale(1.25); }
          }
          
          @keyframes mammoth-power-2 {
            0%, 100% { opacity: 0.30; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.50; transform: scale(1.30) rotate(180deg); }
          }
          
          @keyframes mammoth-power-3 {
            0%, 100% { opacity: 0.25; transform: scale(1); }
            50% { opacity: 0.45; transform: scale(1.35); }
          }
          
          /* Tusk sparkle animations - BOLD */
          @keyframes tusk-sparkle-1 {
            0%, 65%, 100% { opacity: 0; transform: scale(0.5); }
            70%, 80% { opacity: 1; transform: scale(3.5); }
            75% { opacity: 0.6; transform: scale(2.5); }
          }
          
          @keyframes tusk-sparkle-2 {
            0%, 68%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            73%, 83% { opacity: 1; transform: scale(3.2) rotate(360deg); }
            78% { opacity: 0.6; transform: scale(2.3) rotate(180deg); }
          }
          
          @keyframes tusk-sparkle-3 {
            0%, 70%, 100% { opacity: 0; transform: scale(0.5); }
            75%, 85% { opacity: 1; transform: scale(3.7); }
            80% { opacity: 0.6; transform: scale(2.7); }
          }
          
          @keyframes tusk-sparkle-4 {
            0%, 63%, 100% { opacity: 0; transform: scale(0.5); }
            68%, 78% { opacity: 1; transform: scale(3.5); }
            73% { opacity: 0.6; transform: scale(2.5); }
          }
          
          @keyframes tusk-sparkle-5 {
            0%, 72%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            77%, 87% { opacity: 1; transform: scale(3.3) rotate(360deg); }
            82% { opacity: 0.6; transform: scale(2.4) rotate(180deg); }
          }
          
          @keyframes tusk-sparkle-6 {
            0%, 75%, 100% { opacity: 0; transform: scale(0.5); }
            80%, 90% { opacity: 1; transform: scale(3.8); }
            85% { opacity: 0.6; transform: scale(2.8); }
          }
          
          /* Breath/steam animations - BOLD */
          @keyframes breath-1 {
            0% { opacity: 0; transform: translateX(0) translateY(0) scale(0.5); }
            30% { opacity: 0.50; transform: translateX(-35px) translateY(-30px) scale(1.4); }
            60% { opacity: 0.25; transform: translateX(-70px) translateY(-60px) scale(2.2); }
            100% { opacity: 0; transform: translateX(-105px) translateY(-90px) scale(3); }
          }
          
          @keyframes breath-2 {
            0% { opacity: 0; transform: translateX(0) translateY(0) scale(0.4); }
            35% { opacity: 0.45; transform: translateX(-30px) translateY(-25px) scale(1.3); }
            65% { opacity: 0.22; transform: translateX(-60px) translateY(-50px) scale(2); }
            100% { opacity: 0; transform: translateX(-90px) translateY(-75px) scale(2.7); }
          }
          
          @keyframes breath-3 {
            0% { opacity: 0; transform: translateX(0) translateY(0) scale(0.3); }
            40% { opacity: 0.40; transform: translateX(-25px) translateY(-22px) scale(1.2); }
            70% { opacity: 0.20; transform: translateX(-50px) translateY(-45px) scale(1.8); }
            100% { opacity: 0; transform: translateX(-75px) translateY(-68px) scale(2.5); }
          }
          
          /* Snow fall animations - BOLD */
          @keyframes snow-fall-1 {
            0% { opacity: 0; transform: translateY(0) translateX(0) rotate(0deg); }
            50% { opacity: 0.90; transform: translateY(550px) translateX(55px) rotate(260deg); }
            100% { opacity: 0; transform: translateY(1100px) translateX(100px) rotate(520deg); }
          }
          
          @keyframes snow-fall-2 {
            0% { opacity: 0; transform: translateY(0) translateX(0) rotate(0deg); }
            50% { opacity: 0.88; transform: translateY(540px) translateX(-50px) rotate(270deg); }
            100% { opacity: 0; transform: translateY(1080px) translateX(-95px) rotate(540deg); }
          }
          
          @keyframes snow-fall-3 {
            0% { opacity: 0; transform: translateY(0) translateX(0) rotate(0deg); }
            50% { opacity: 0.92; transform: translateY(560px) translateX(58px) rotate(240deg); }
            100% { opacity: 0; transform: translateY(1120px) translateX(110px) rotate(480deg); }
          }
          
          @keyframes snow-fall-4 {
            0% { opacity: 0; transform: translateY(0) translateX(0) rotate(0deg); }
            50% { opacity: 0.87; transform: translateY(535px) translateX(-48px) rotate(285deg); }
            100% { opacity: 0; transform: translateY(1070px) translateX(-90px) rotate(570deg); }
          }
          
          @keyframes snow-fall-5 {
            0% { opacity: 0; transform: translateY(0) translateX(0) rotate(0deg); }
            50% { opacity: 0.90; transform: translateY(555px) translateX(52px) rotate(250deg); }
            100% { opacity: 0; transform: translateY(1110px) translateX(98px) rotate(500deg); }
          }
          
          @keyframes snow-fall-6 {
            0% { opacity: 0; transform: translateY(0) translateX(0) rotate(0deg); }
            50% { opacity: 0.85; transform: translateY(530px) translateX(-45px) rotate(275deg); }
            100% { opacity: 0; transform: translateY(1060px) translateX(-85px) rotate(550deg); }
          }
          
          @keyframes snow-fall-7 {
            0% { opacity: 0; transform: translateY(0) translateX(0) rotate(0deg); }
            50% { opacity: 0.80; transform: translateY(520px) translateX(48px) rotate(230deg); }
            100% { opacity: 0; transform: translateY(1040px) translateX(88px) rotate(460deg); }
          }
          
          @keyframes snow-fall-8 {
            0% { opacity: 0; transform: translateY(0) translateX(0) rotate(0deg); }
            50% { opacity: 0.78; transform: translateY(515px) translateX(-42px) rotate(265deg); }
            100% { opacity: 0; transform: translateY(1030px) translateX(-78px) rotate(530deg); }
          }
          
          @keyframes snow-fall-9 {
            0% { opacity: 0; transform: translateY(0) translateX(0) rotate(0deg); }
            50% { opacity: 0.82; transform: translateY(525px) translateX(50px) rotate(245deg); }
            100% { opacity: 0; transform: translateY(1050px) translateX(92px) rotate(490deg); }
          }
          
          @keyframes snow-fall-10 {
            0% { opacity: 0; transform: translateY(0) translateX(0) rotate(0deg); }
            50% { opacity: 0.77; transform: translateY(510px) translateX(-40px) rotate(255deg); }
            100% { opacity: 0; transform: translateY(1020px) translateX(-75px) rotate(510deg); }
          }
          
          @keyframes snow-fall-11 {
            0% { opacity: 0; transform: translateY(0) translateX(0) rotate(0deg); }
            50% { opacity: 0.80; transform: translateY(522px) translateX(46px) rotate(235deg); }
            100% { opacity: 0; transform: translateY(1044px) translateX(86px) rotate(470deg); }
          }
          
          /* Mountain twinkle animations - BOLD */
          @keyframes mountain-twinkle-1 {
            0%, 68%, 100% { opacity: 0; transform: scale(0.5); }
            73%, 83% { opacity: 1; transform: scale(3.2); }
            78% { opacity: 0.6; transform: scale(2.4); }
          }
          
          @keyframes mountain-twinkle-2 {
            0%, 72%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            77%, 87% { opacity: 1; transform: scale(3.5) rotate(360deg); }
            82% { opacity: 0.6; transform: scale(2.7) rotate(180deg); }
          }
          
          @keyframes mountain-twinkle-3 {
            0%, 75%, 100% { opacity: 0; transform: scale(0.5); }
            80%, 90% { opacity: 1; transform: scale(3) rotate(0deg); }
            85% { opacity: 0.6; transform: scale(2.2); }
          }
          
          @keyframes mountain-twinkle-4 {
            0%, 65%, 100% { opacity: 0; transform: scale(0.5); }
            70%, 80% { opacity: 1; transform: scale(3.3); }
            75% { opacity: 0.6; transform: scale(2.5); }
          }
          
          @keyframes mountain-twinkle-5 {
            0%, 78%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            83%, 93% { opacity: 1; transform: scale(3.6) rotate(360deg); }
            88% { opacity: 0.6; transform: scale(2.8) rotate(180deg); }
          }
          
          @keyframes mountain-twinkle-6 {
            0%, 70%, 100% { opacity: 0; transform: scale(0.5); }
            75%, 85% { opacity: 1; transform: scale(3.1); }
            80% { opacity: 0.6; transform: scale(2.3); }
          }
          
          /* Ice crystal glow animations - BOLD */
          @keyframes ice-crystal-glow-1 {
            0%, 100% { opacity: 0.40; transform: scale(1); }
            50% { opacity: 0.65; transform: scale(1.12); }
          }
          
          @keyframes ice-crystal-glow-2 {
            0%, 100% { opacity: 0.38; transform: scale(1); }
            50% { opacity: 0.62; transform: scale(1.10); }
          }
          
          @keyframes ice-crystal-glow-3 {
            0%, 100% { opacity: 0.42; transform: scale(1); }
            50% { opacity: 0.67; transform: scale(1.14); }
          }
          
          @keyframes ice-crystal-glow-4 {
            0%, 100% { opacity: 0.40; transform: scale(1); }
            50% { opacity: 0.65; transform: scale(1.12); }
          }
          
          /* Rune pulse animations - BOLD */
          @keyframes rune-pulse-1 {
            0%, 100% { opacity: 0.45; transform: scale(1); }
            50% { opacity: 0.70; transform: scale(1.08); }
          }
          
          @keyframes rune-pulse-2 {
            0%, 100% { opacity: 0.40; transform: scale(1); }
            50% { opacity: 0.65; transform: scale(1.06); }
          }
          
          /* Ground mist animations - BOLD */
          @keyframes ground-mist-1 {
            0%, 100% { opacity: 0.35; transform: translateY(0) scale(1); }
            50% { opacity: 0.55; transform: translateY(-15px) scale(1.2); }
          }
          
          @keyframes ground-mist-2 {
            0%, 100% { opacity: 0.30; transform: translateY(0) scale(1); }
            50% { opacity: 0.50; transform: translateY(-12px) scale(1.18); }
          }
          
          @keyframes ground-mist-3 {
            0%, 100% { opacity: 0.38; transform: translateY(0) scale(1); }
            50% { opacity: 0.58; transform: translateY(-18px) scale(1.22); }
          }
          
          @keyframes ground-mist-4 {
            0%, 100% { opacity: 0.32; transform: translateY(0) scale(1); }
            50% { opacity: 0.52; transform: translateY(-14px) scale(1.20); }
          }
          
          /* Ground sparkle animations - BOLD */
          @keyframes ground-sparkle-1 {
            0%, 82%, 100% { opacity: 0; transform: scale(0.5); }
            87%, 97% { opacity: 1; transform: scale(3); }
            92% { opacity: 0.6; transform: scale(2.2); }
          }
          
          @keyframes ground-sparkle-2 {
            0%, 76%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            81%, 91% { opacity: 1; transform: scale(3.4) rotate(360deg); }
            86% { opacity: 0.6; transform: scale(2.5) rotate(180deg); }
          }
          
          @keyframes ground-sparkle-3 {
            0%, 85%, 100% { opacity: 0; transform: scale(0.5); }
            90%, 100% { opacity: 1; transform: scale(2.8); }
            95% { opacity: 0.6; transform: scale(2); }
          }
          
          @keyframes ground-sparkle-4 {
            0%, 70%, 100% { opacity: 0; transform: scale(0.5); }
            75%, 85% { opacity: 1; transform: scale(3.3); }
            80% { opacity: 0.6; transform: scale(2.4); }
          }
          
          @keyframes ground-sparkle-5 {
            0%, 88%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            93%, 103% { opacity: 1; transform: scale(3.1) rotate(360deg); }
            98% { opacity: 0.6; transform: scale(2.3) rotate(180deg); }
          }
          
          /* Animation class assignments */
          .animate-aurora-flow-1 { animation: aurora-flow-1 18s ease-in-out infinite; }
          .animate-aurora-flow-2 { animation: aurora-flow-2 20s ease-in-out infinite 6s; }
          .animate-aurora-flow-3 { animation: aurora-flow-3 19s ease-in-out infinite 12s; }
          
          .animate-aurora-curtain-1 { animation: aurora-curtain-1 14s ease-in-out infinite 2s; }
          .animate-aurora-curtain-2 { animation: aurora-curtain-2 16s ease-in-out infinite 7s; }
          .animate-aurora-curtain-3 { animation: aurora-curtain-3 15s ease-in-out infinite 11s; }
          
          .animate-ghost-float-1 { animation: ghost-float-1 8s ease-in-out infinite; }
          .animate-ghost-float-2 { animation: ghost-float-2 9s ease-in-out infinite 2s; }
          .animate-ghost-float-3 { animation: ghost-float-3 8.5s ease-in-out infinite 4s; }
          .animate-ghost-float-4 { animation: ghost-float-4 9.5s ease-in-out infinite 1s; }
          .animate-ghost-float-5 { animation: ghost-float-5 8.8s ease-in-out infinite 3s; }
          .animate-ghost-float-6 { animation: ghost-float-6 9.2s ease-in-out infinite 5s; }
          .animate-ghost-float-7 { animation: ghost-float-7 8.3s ease-in-out infinite 6s; }
          
          .animate-mammoth-power-1 { animation: mammoth-power-1 5s ease-in-out infinite; }
          .animate-mammoth-power-2 { animation: mammoth-power-2 6s ease-in-out infinite 1.5s; }
          .animate-mammoth-power-3 { animation: mammoth-power-3 7s ease-in-out infinite 3s; }
          
          .animate-tusk-sparkle-1 { animation: tusk-sparkle-1 7s linear infinite; }
          .animate-tusk-sparkle-2 { animation: tusk-sparkle-2 8s linear infinite 2s; }
          .animate-tusk-sparkle-3 { animation: tusk-sparkle-3 7.5s linear infinite 4s; }
          .animate-tusk-sparkle-4 { animation: tusk-sparkle-4 7.2s linear infinite 1s; }
          .animate-tusk-sparkle-5 { animation: tusk-sparkle-5 8.2s linear infinite 3s; }
          .animate-tusk-sparkle-6 { animation: tusk-sparkle-6 7.8s linear infinite 5s; }
          
          .animate-breath-1 { animation: breath-1 7s ease-out infinite; }
          .animate-breath-2 { animation: breath-2 8s ease-out infinite 2.5s; }
          .animate-breath-3 { animation: breath-3 9s ease-out infinite 5s; }
          
          .animate-snow-fall-1 { animation: snow-fall-1 13s linear infinite; }
          .animate-snow-fall-2 { animation: snow-fall-2 14s linear infinite 2s; }
          .animate-snow-fall-3 { animation: snow-fall-3 13.5s linear infinite 4s; }
          .animate-snow-fall-4 { animation: snow-fall-4 15s linear infinite 6s; }
          .animate-snow-fall-5 { animation: snow-fall-5 13.8s linear infinite 1s; }
          .animate-snow-fall-6 { animation: snow-fall-6 14.5s linear infinite 3s; }
          .animate-snow-fall-7 { animation: snow-fall-7 12.5s linear infinite 5s; }
          .animate-snow-fall-8 { animation: snow-fall-8 15.5s linear infinite 7s; }
          .animate-snow-fall-9 { animation: snow-fall-9 14.2s linear infinite 8s; }
          .animate-snow-fall-10 { animation: snow-fall-10 12.8s linear infinite 9s; }
          .animate-snow-fall-11 { animation: snow-fall-11 13.2s linear infinite 10s; }
          
          .animate-mountain-twinkle-1 { animation: mountain-twinkle-1 8s linear infinite; }
          .animate-mountain-twinkle-2 { animation: mountain-twinkle-2 9s linear infinite 2s; }
          .animate-mountain-twinkle-3 { animation: mountain-twinkle-3 8.5s linear infinite 4s; }
          .animate-mountain-twinkle-4 { animation: mountain-twinkle-4 7.5s linear infinite 1s; }
          .animate-mountain-twinkle-5 { animation: mountain-twinkle-5 9.5s linear infinite 5s; }
          .animate-mountain-twinkle-6 { animation: mountain-twinkle-6 8.8s linear infinite 3s; }
          
          .animate-ice-crystal-glow-1 { animation: ice-crystal-glow-1 9s ease-in-out infinite; }
          .animate-ice-crystal-glow-2 { animation: ice-crystal-glow-2 10s ease-in-out infinite 2.5s; }
          .animate-ice-crystal-glow-3 { animation: ice-crystal-glow-3 9.5s ease-in-out infinite 5s; }
          .animate-ice-crystal-glow-4 { animation: ice-crystal-glow-4 10.5s ease-in-out infinite 1.5s; }
          
          .animate-rune-pulse-1 { animation: rune-pulse-1 6s ease-in-out infinite; }
          .animate-rune-pulse-2 { animation: rune-pulse-2 7s ease-in-out infinite 2s; }
          
          .animate-ground-mist-1 { animation: ground-mist-1 8s ease-in-out infinite; }
          .animate-ground-mist-2 { animation: ground-mist-2 9s ease-in-out infinite 2s; }
          .animate-ground-mist-3 { animation: ground-mist-3 8.5s ease-in-out infinite 4s; }
          .animate-ground-mist-4 { animation: ground-mist-4 9.5s ease-in-out infinite 1s; }
          
          .animate-ground-sparkle-1 { animation: ground-sparkle-1 8s linear infinite; }
          .animate-ground-sparkle-2 { animation: ground-sparkle-2 9s linear infinite 2s; }
          .animate-ground-sparkle-3 { animation: ground-sparkle-3 8.5s linear infinite 4s; }
          .animate-ground-sparkle-4 { animation: ground-sparkle-4 7.5s linear infinite 1s; }
          .animate-ground-sparkle-5 { animation: ground-sparkle-5 9.5s linear infinite 5s; }
        `}</style>
        </div>
        )}
      </div>
    </Card>
  );
}

