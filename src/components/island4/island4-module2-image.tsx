"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Island4Module2Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        {/* Base image */}
        <Image
          src="/islands/island4/island4-module2-image.webp"
          alt="Oracles, Randomness & Airdrop Patterns - Gilded Bastion Adventure"
          fill
          className="object-cover"
          priority
        />
        
        {/* BOLD Animated overlay effects */}
        <div className="absolute inset-0 animate-effects">
          {/* GOLDEN DOME - Intense Shimmer! */}
          <div className="absolute inset-0">
            {/* Main dome glow layers */}
            <div className="absolute top-[2%] left-[65%] w-[130px] h-[130px] bg-yellow-300/25 rounded-full dome-glow animate-dome-glow-1"></div>
            <div className="absolute top-[3%] left-[66%] w-[110px] h-[110px] bg-amber-200/28 rounded-full dome-glow animate-dome-glow-2"></div>
            <div className="absolute top-[4%] left-[67%] w-[90px] h-[90px] bg-yellow-200/30 rounded-full dome-core animate-dome-core"></div>
            
            {/* Dome gleam streaks */}
            <div className="absolute top-[4%] left-[58%] w-[40px] h-[80px] bg-gradient-to-br from-white/35 via-yellow-200/25 to-transparent dome-gleam animate-dome-gleam-1"></div>
            <div className="absolute top-[5%] left-[62%] w-[35px] h-[70px] bg-gradient-to-bl from-white/32 via-amber-200/22 to-transparent dome-gleam animate-dome-gleam-2"></div>
            <div className="absolute top-[6%] left-[60%] w-[30px] h-[60px] bg-gradient-to-b from-white/30 via-yellow-100/20 to-transparent dome-gleam animate-dome-gleam-3"></div>
            
            {/* Crescent moon ornament glow */}
            <div className="absolute top-[2%] left-[63%] w-[20px] h-[20px] bg-yellow-200/50 rounded-full crescent-glow animate-crescent-glow"></div>
            <div className="absolute top-[2%] left-[63%] w-[35px] h-[35px] bg-amber-300/25 rounded-full crescent-outer animate-crescent-outer"></div>
          </div>

          {/* CATHEDRAL STAINED GLASS - Glowing Colors */}
          <div className="absolute inset-0">
            {/* Main stained glass window */}
            <div className="absolute top-[27%] left-[24%] w-[25px] h-[40px] bg-blue-400/60 rounded-lg stained-glass animate-stained-glass-blue"></div>
            <div className="absolute top-[27%] left-[23%] w-[25px] h-[40px] bg-red-400/58 rounded-lg stained-glass animate-stained-glass-red"></div>
            <div className="absolute top-[27%] left-[22%] w-[25px] h-[40px] bg-yellow-400/62 rounded-lg stained-glass animate-stained-glass-yellow"></div>
            <div className="absolute top-[29%] left-[25%] w-[20px] h-[30px] bg-green-400/55 rounded-lg stained-glass animate-stained-glass-green"></div>
            <div className="absolute top-[29%] left-[26%] w-[20px] h-[30px] bg-purple-400/57 rounded-lg stained-glass animate-stained-glass-purple"></div>
          </div>

          {/* CATHEDRAL CROSS - Divine Glow */}
          <div className="absolute inset-0">
            <div className="absolute top-[6%] left-[23.5%] w-[12px] h-[12px] bg-white/85 rounded-full cross-glow animate-cross-glow"></div>
            <div className="absolute top-[6%] left-[23.5%] w-[24px] h-[24px] bg-yellow-200/60 rounded-full cross-glow-outer animate-cross-glow-outer"></div>
            <div className="absolute top-[6%] left-[23.5%] w-[40px] h-[40px] bg-amber-300/35 rounded-full cross-glow-far animate-cross-glow-far"></div>
          </div>

          {/* CASTLE FLAGS - Bold Waving */}
          <div className="absolute inset-0">
            {/* Left side flags */}
            <div className="absolute top-[26%] left-[4%] w-[30px] h-[25px] bg-red-500/45 flag animate-flag-wave-1"></div>
            <div className="absolute top-[30%] left-[10%] w-[28px] h-[23px] bg-orange-500/42 flag animate-flag-wave-2"></div>
            
            {/* Center flags on battlements */}
            <div className="absolute top-[32%] left-[35%] w-[25px] h-[22px] bg-blue-500/48 flag animate-flag-wave-3"></div>
            <div className="absolute top-[30%] left-[40%] w-[27px] h-[24px] bg-red-500/46 flag animate-flag-wave-4"></div>
            
            {/* Right side flags */}
            <div className="absolute top-[28%] left-[82%] w-[26px] h-[23px] bg-blue-500/44 flag animate-flag-wave-5"></div>
            <div className="absolute top-[26%] left-[90%] w-[30px] h-[26px] bg-red-500/47 flag animate-flag-wave-6"></div>
            <div className="absolute top-[30%] left-[95%] w-[28px] h-[24px] bg-orange-500/43 flag animate-flag-wave-7"></div>
          </div>

          {/* KNIGHT ARMOR - Metallic Glints */}
          <div className="absolute inset-0">
            {/* Knight on horseback - center */}
            <div className="absolute top-[55%] left-[50%] w-[8px] h-[8px] bg-white/95 rounded-full armor-glint animate-armor-glint-1"></div>
            <div className="absolute top-[57%] left-[51%] w-[7px] h-[7px] bg-cyan-200/90 rounded-full armor-glint animate-armor-glint-2"></div>
            <div className="absolute top-[59%] left-[49%] w-[6px] h-[6px] bg-white/92 rounded-full armor-glint animate-armor-glint-3"></div>
            
            {/* Knight weapon glints */}
            <div className="absolute top-[53%] left-[48%] w-[9px] h-[9px] bg-white/98 rounded-full weapon-glint animate-weapon-glint"></div>
          </div>

          {/* MARKET CANOPY - Bold Flapping */}
          <div className="absolute inset-0">
            {/* Left side stalls - vibrant */}
            <div className="absolute top-[48%] left-[10%] w-[55px] h-[35px] bg-red-400/35 canopy animate-canopy-flap-1"></div>
            <div className="absolute top-[52%] left-[5%] w-[50px] h-[32px] bg-orange-400/32 canopy animate-canopy-flap-2"></div>
            
            {/* Center stalls - bold */}
            <div className="absolute top-[50%] left-[30%] w-[60px] h-[38px] bg-blue-400/38 canopy animate-canopy-flap-3"></div>
            <div className="absolute top-[52%] left-[40%] w-[58px] h-[36px] bg-red-400/36 canopy animate-canopy-flap-4"></div>
            <div className="absolute top-[50%] left-[55%] w-[56px] h-[35px] bg-orange-400/34 canopy animate-canopy-flap-5"></div>
            <div className="absolute top-[52%] left-[68%] w-[62px] h-[38px] bg-red-400/37 canopy animate-canopy-flap-6"></div>
            
            {/* Right side stalls */}
            <div className="absolute top-[48%] left-[82%] w-[54px] h-[34px] bg-red-400/35 canopy animate-canopy-flap-7"></div>
            <div className="absolute top-[52%] left-[90%] w-[52px] h-[33px] bg-orange-400/33 canopy animate-canopy-flap-8"></div>
          </div>

          {/* PRODUCE SPARKLES - Bold & Colorful */}
          <div className="absolute inset-0">
            {/* Left produce - oranges and goods */}
            <div className="absolute top-[58%] left-[8%] w-[6px] h-[6px] bg-orange-400/90 rounded-full produce-sparkle animate-produce-sparkle-1"></div>
            <div className="absolute top-[60%] left-[12%] w-[5px] h-[5px] bg-yellow-400/88 rounded-full produce-sparkle animate-produce-sparkle-2"></div>
            <div className="absolute top-[62%] left-[15%] w-[6px] h-[6px] bg-red-400/92 rounded-full produce-sparkle animate-produce-sparkle-3"></div>
            
            {/* Center produce displays */}
            <div className="absolute top-[59%] left-[32%] w-[6px] h-[6px] bg-green-400/90 rounded-full produce-sparkle animate-produce-sparkle-4"></div>
            <div className="absolute top-[61%] left-[42%] w-[7px] h-[7px] bg-orange-400/92 rounded-full produce-sparkle animate-produce-sparkle-5"></div>
            <div className="absolute top-[63%] left-[48%] w-[6px] h-[6px] bg-yellow-400/88 rounded-full produce-sparkle animate-produce-sparkle-6"></div>
            <div className="absolute top-[60%] left-[58%] w-[6px] h-[6px] bg-red-400/90 rounded-full produce-sparkle animate-produce-sparkle-7"></div>
            <div className="absolute top-[62%] left-[68%] w-[5px] h-[5px] bg-green-400/87 rounded-full produce-sparkle animate-produce-sparkle-8"></div>
            
            {/* Right produce */}
            <div className="absolute top-[58%] left-[82%] w-[6px] h-[6px] bg-orange-400/91 rounded-full produce-sparkle animate-produce-sparkle-9"></div>
            <div className="absolute top-[60%] left-[88%] w-[6px] h-[6px] bg-yellow-400/89 rounded-full produce-sparkle animate-produce-sparkle-10"></div>
          </div>

          {/* COIN EXCHANGE - Merchant Trading Glows */}
          <div className="absolute inset-0">
            {/* Gold coin sparkles */}
            <div className="absolute top-[65%] left-[28%] w-[8px] h-[8px] bg-yellow-300/85 rounded-full coin-sparkle animate-coin-sparkle-1"></div>
            <div className="absolute top-[67%] left-[35%] w-[7px] h-[7px] bg-amber-300/82 rounded-full coin-sparkle animate-coin-sparkle-2"></div>
            <div className="absolute top-[66%] left-[45%] w-[9px] h-[9px] bg-yellow-400/88 rounded-full coin-sparkle animate-coin-sparkle-3"></div>
            <div className="absolute top-[68%] left-[60%] w-[8px] h-[8px] bg-amber-300/85 rounded-full coin-sparkle animate-coin-sparkle-4"></div>
            <div className="absolute top-[67%] left-[72%] w-[7px] h-[7px] bg-yellow-300/83 rounded-full coin-sparkle animate-coin-sparkle-5"></div>
            
            {/* Trading activity halos */}
            <div className="absolute top-[64%] left-[30%] w-[35px] h-[35px] bg-yellow-300/28 rounded-full merchant-halo animate-merchant-halo-1"></div>
            <div className="absolute top-[66%] left-[50%] w-[38px] h-[38px] bg-amber-300/30 rounded-full merchant-halo animate-merchant-halo-2"></div>
            <div className="absolute top-[65%] left-[70%] w-[36px] h-[36px] bg-yellow-300/29 rounded-full merchant-halo animate-merchant-halo-3"></div>
          </div>

          {/* FOUNTAIN WATER - Sparkling Center */}
          <div className="absolute inset-0">
            {/* Fountain rim sparkles */}
            <div className="absolute top-[66%] left-[48%] w-[6px] h-[6px] bg-cyan-300/85 rounded-full water-sparkle animate-water-sparkle-1"></div>
            <div className="absolute top-[67%] left-[51%] w-[5px] h-[5px] bg-blue-300/82 rounded-full water-sparkle animate-water-sparkle-2"></div>
            <div className="absolute top-[68%] left-[49%] w-[6px] h-[6px] bg-cyan-300/88 rounded-full water-sparkle animate-water-sparkle-3"></div>
            <div className="absolute top-[69%] left-[50%] w-[5px] h-[5px] bg-blue-300/85 rounded-full water-sparkle animate-water-sparkle-4"></div>
            
            {/* Water droplet glimmers */}
            <div className="absolute top-[65%] left-[49.5%] w-[25px] h-[25px] bg-cyan-200/35 rounded-full water-glow animate-water-glow"></div>
          </div>

          {/* BUSTLING MARKET DUST */}
          <div className="absolute inset-0">
            {/* Activity dust clouds */}
            <div className="absolute top-[55%] left-[20%] w-[3px] h-[3px] bg-amber-300/70 rounded-full market-dust animate-market-dust-1"></div>
            <div className="absolute top-[58%] left-[35%] w-[3px] h-[3px] bg-yellow-300/72 rounded-full market-dust animate-market-dust-2"></div>
            <div className="absolute top-[60%] left-[45%] w-[4px] h-[4px] bg-amber-300/75 rounded-full market-dust animate-market-dust-3"></div>
            <div className="absolute top-[62%] left-[55%] w-[3px] h-[3px] bg-yellow-300/70 rounded-full market-dust animate-market-dust-4"></div>
            <div className="absolute top-[64%] left-[65%] w-[3px] h-[3px] bg-amber-300/73 rounded-full market-dust animate-market-dust-5"></div>
            <div className="absolute top-[66%] left-[80%] w-[4px] h-[4px] bg-yellow-300/72 rounded-full market-dust animate-market-dust-6"></div>
          </div>

          {/* DRAMATIC SKY CLOUDS */}
          <div className="absolute inset-0">
            <div className="absolute top-[8%] left-[25%] w-[100px] h-[50px] bg-white/22 rounded-full cloud animate-cloud-drift-1"></div>
            <div className="absolute top-[12%] left-[70%] w-[90px] h-[45px] bg-white/20 rounded-full cloud animate-cloud-drift-2"></div>
            <div className="absolute top-[6%] left-[50%] w-[80px] h-[40px] bg-white/18 rounded-full cloud animate-cloud-drift-3"></div>
          </div>

          {/* SUN RAYS - Dramatic but localized */}
          <div className="absolute inset-0">
            <div className="absolute top-[0%] left-[15%] w-[90px] h-[35%] bg-gradient-to-b from-yellow-200/32 via-amber-100/18 to-transparent sun-ray animate-sun-ray-1"></div>
            <div className="absolute top-[0%] left-[45%] w-[100px] h-[38%] bg-gradient-to-b from-amber-200/35 via-yellow-100/20 to-transparent sun-ray animate-sun-ray-2"></div>
            <div className="absolute top-[0%] left-[75%] w-[85px] h-[33%] bg-gradient-to-b from-yellow-100/30 via-amber-100/16 to-transparent sun-ray animate-sun-ray-3"></div>
          </div>
        </div>
        
        <style jsx>{`
          /* GOLDEN DOME EFFECTS */
          .dome-glow {
            filter: blur(30px);
          }
          
          .dome-core {
            filter: blur(20px);
            box-shadow: 0 0 40px currentColor, 0 0 80px currentColor;
          }
          
          .dome-gleam {
            filter: blur(15px);
          }
          
          .crescent-glow {
            box-shadow: 0 0 20px currentColor, 0 0 40px currentColor;
            filter: blur(2px);
          }
          
          .crescent-outer {
            filter: blur(18px);
          }
          
          /* STAINED GLASS EFFECTS */
          .stained-glass {
            filter: blur(8px);
            box-shadow: 0 0 25px currentColor, 0 0 50px currentColor;
          }
          
          /* CATHEDRAL CROSS EFFECTS */
          .cross-glow {
            box-shadow: 0 0 35px currentColor, 0 0 70px currentColor;
            filter: blur(1px);
          }
          
          .cross-glow-outer {
            filter: blur(15px);
          }
          
          .cross-glow-far {
            filter: blur(25px);
          }
          
          /* FLAG EFFECTS */
          .flag {
            filter: blur(10px);
          }
          
          /* ARMOR & WEAPON EFFECTS */
          .armor-glint {
            box-shadow: 0 0 25px white, 0 0 50px white, 0 0 75px white;
            filter: blur(0.5px);
          }
          
          .weapon-glint {
            box-shadow: 0 0 30px white, 0 0 60px white, 0 0 90px white;
            filter: blur(0.5px);
          }
          
          /* CANOPY EFFECTS */
          .canopy {
            filter: blur(12px);
          }
          
          /* PRODUCE SPARKLES */
          .produce-sparkle {
            box-shadow: 0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor;
            filter: blur(0.8px);
          }
          
          /* COIN & MERCHANT EFFECTS */
          .coin-sparkle {
            box-shadow: 0 0 25px currentColor, 0 0 50px currentColor, 0 0 75px currentColor;
            filter: blur(1px);
          }
          
          .merchant-halo {
            filter: blur(20px);
          }
          
          /* WATER EFFECTS */
          .water-sparkle {
            box-shadow: 0 0 18px currentColor, 0 0 36px currentColor;
            filter: blur(0.6px);
          }
          
          .water-glow {
            filter: blur(16px);
          }
          
          /* MARKET DUST */
          .market-dust {
            box-shadow: 0 0 12px currentColor, 0 0 24px currentColor;
            filter: blur(0.6px);
          }
          
          /* CLOUD EFFECTS */
          .cloud {
            filter: blur(25px);
          }
          
          /* SUN RAYS */
          .sun-ray {
            filter: blur(22px);
          }
          
          /* ANIMATION STATES */
          .animate-effects .dome-glow,
          .animate-effects .dome-core,
          .animate-effects .dome-gleam,
          .animate-effects .crescent-glow,
          .animate-effects .crescent-outer,
          .animate-effects .stained-glass,
          .animate-effects .cross-glow,
          .animate-effects .cross-glow-outer,
          .animate-effects .cross-glow-far,
          .animate-effects .flag,
          .animate-effects .armor-glint,
          .animate-effects .weapon-glint,
          .animate-effects .canopy,
          .animate-effects .produce-sparkle,
          .animate-effects .coin-sparkle,
          .animate-effects .merchant-halo,
          .animate-effects .water-sparkle,
          .animate-effects .water-glow,
          .animate-effects .market-dust,
          .animate-effects .cloud,
          .animate-effects .sun-ray {
            animation-play-state: running;
          }
          
          /* GOLDEN DOME ANIMATIONS */
          @keyframes dome-glow-1 {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 0.85; transform: scale(1.3); }
          }
          
          @keyframes dome-glow-2 {
            0%, 100% { opacity: 0.55; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.9; transform: scale(1.35) rotate(180deg); }
          }
          
          @keyframes dome-core {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes dome-gleam-1 {
            0%, 100% { opacity: 0.7; transform: translateY(0) scaleY(1); }
            50% { opacity: 0.95; transform: translateY(-10px) scaleY(1.15); }
          }
          
          @keyframes dome-gleam-2 {
            0%, 100% { opacity: 0.65; transform: translateY(0) scaleY(1); }
            50% { opacity: 0.9; transform: translateY(-8px) scaleY(1.12); }
          }
          
          @keyframes dome-gleam-3 {
            0%, 100% { opacity: 0.6; transform: translateY(0) scaleY(1); }
            50% { opacity: 0.88; transform: translateY(-12px) scaleY(1.18); }
          }
          
          @keyframes crescent-glow {
            0%, 100% { opacity: 0.8; transform: scale(1) rotate(0deg); }
            50% { opacity: 1; transform: scale(1.5) rotate(180deg); }
          }
          
          @keyframes crescent-outer {
            0%, 100% { opacity: 0.45; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.75; transform: scale(1.6) rotate(-180deg); }
          }
          
          /* STAINED GLASS ANIMATIONS */
          @keyframes stained-glass-blue {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 0.95; transform: scale(1.15); }
          }
          
          @keyframes stained-glass-red {
            0%, 100% { opacity: 0.58; transform: scale(1); }
            50% { opacity: 0.92; transform: scale(1.12); }
          }
          
          @keyframes stained-glass-yellow {
            0%, 100% { opacity: 0.62; transform: scale(1); }
            50% { opacity: 0.98; transform: scale(1.18); }
          }
          
          @keyframes stained-glass-green {
            0%, 100% { opacity: 0.55; transform: scale(1); }
            50% { opacity: 0.9; transform: scale(1.1); }
          }
          
          @keyframes stained-glass-purple {
            0%, 100% { opacity: 0.57; transform: scale(1); }
            50% { opacity: 0.93; transform: scale(1.14); }
          }
          
          /* CATHEDRAL CROSS ANIMATIONS */
          @keyframes cross-glow {
            0%, 100% { opacity: 0.85; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.6); }
          }
          
          @keyframes cross-glow-outer {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 0.95; transform: scale(1.5); }
          }
          
          @keyframes cross-glow-far {
            0%, 100% { opacity: 0.35; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.7; transform: scale(1.8) rotate(180deg); }
          }
          
          /* FLAG WAVE ANIMATIONS */
          @keyframes flag-wave-1 {
            0%, 100% { opacity: 0.45; transform: scaleX(1) skewX(0deg); }
            25% { opacity: 0.6; transform: scaleX(0.95) skewX(-8deg); }
            75% { opacity: 0.55; transform: scaleX(1.05) skewX(8deg); }
          }
          
          @keyframes flag-wave-2 {
            0%, 100% { opacity: 0.42; transform: scaleX(1) skewX(0deg); }
            30% { opacity: 0.58; transform: scaleX(0.92) skewX(10deg); }
            70% { opacity: 0.52; transform: scaleX(1.08) skewX(-10deg); }
          }
          
          @keyframes flag-wave-3 {
            0%, 100% { opacity: 0.48; transform: scaleX(1) skewX(0deg); }
            28% { opacity: 0.62; transform: scaleX(0.94) skewX(-9deg); }
            72% { opacity: 0.56; transform: scaleX(1.06) skewX(9deg); }
          }
          
          @keyframes flag-wave-4 {
            0%, 100% { opacity: 0.46; transform: scaleX(1) skewX(0deg); }
            26% { opacity: 0.6; transform: scaleX(0.93) skewX(11deg); }
            74% { opacity: 0.54; transform: scaleX(1.07) skewX(-11deg); }
          }
          
          @keyframes flag-wave-5 {
            0%, 100% { opacity: 0.44; transform: scaleX(1) skewX(0deg); }
            32% { opacity: 0.59; transform: scaleX(0.96) skewX(-7deg); }
            68% { opacity: 0.53; transform: scaleX(1.04) skewX(7deg); }
          }
          
          @keyframes flag-wave-6 {
            0%, 100% { opacity: 0.47; transform: scaleX(1) skewX(0deg); }
            24% { opacity: 0.61; transform: scaleX(0.91) skewX(12deg); }
            76% { opacity: 0.57; transform: scaleX(1.09) skewX(-12deg); }
          }
          
          @keyframes flag-wave-7 {
            0%, 100% { opacity: 0.43; transform: scaleX(1) skewX(0deg); }
            27% { opacity: 0.58; transform: scaleX(0.94) skewX(-10deg); }
            73% { opacity: 0.52; transform: scaleX(1.06) skewX(10deg); }
          }
          
          /* ARMOR & WEAPON GLINT ANIMATIONS */
          @keyframes armor-glint-1 {
            0%, 65%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            70%, 80% { opacity: 1; transform: scale(2.8) rotate(360deg); }
            75% { opacity: 0.6; transform: scale(2.2) rotate(180deg); }
          }
          
          @keyframes armor-glint-2 {
            0%, 70%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            75%, 85% { opacity: 0.95; transform: scale(2.6) rotate(360deg); }
            80% { opacity: 0.58; transform: scale(2) rotate(180deg); }
          }
          
          @keyframes armor-glint-3 {
            0%, 68%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            73%, 83% { opacity: 1; transform: scale(2.7) rotate(360deg); }
            78% { opacity: 0.62; transform: scale(2.1) rotate(180deg); }
          }
          
          @keyframes weapon-glint {
            0%, 60%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            65%, 75% { opacity: 1; transform: scale(3) rotate(360deg); }
            70% { opacity: 0.65; transform: scale(2.5) rotate(180deg); }
          }
          
          /* CANOPY FLAP ANIMATIONS */
          @keyframes canopy-flap-1 {
            0%, 100% { opacity: 0.35; transform: scaleY(1) translateY(0); }
            50% { opacity: 0.55; transform: scaleY(1.08) translateY(-3px); }
          }
          
          @keyframes canopy-flap-2 {
            0%, 100% { opacity: 0.32; transform: scaleY(1) translateY(0); }
            50% { opacity: 0.52; transform: scaleY(1.06) translateY(-2px); }
          }
          
          @keyframes canopy-flap-3 {
            0%, 100% { opacity: 0.38; transform: scaleY(1) translateY(0); }
            50% { opacity: 0.58; transform: scaleY(1.1) translateY(-4px); }
          }
          
          @keyframes canopy-flap-4 {
            0%, 100% { opacity: 0.36; transform: scaleY(1) translateY(0); }
            50% { opacity: 0.56; transform: scaleY(1.09) translateY(-3px); }
          }
          
          @keyframes canopy-flap-5 {
            0%, 100% { opacity: 0.34; transform: scaleY(1) translateY(0); }
            50% { opacity: 0.54; transform: scaleY(1.07) translateY(-2px); }
          }
          
          @keyframes canopy-flap-6 {
            0%, 100% { opacity: 0.37; transform: scaleY(1) translateY(0); }
            50% { opacity: 0.57; transform: scaleY(1.11) translateY(-4px); }
          }
          
          @keyframes canopy-flap-7 {
            0%, 100% { opacity: 0.35; transform: scaleY(1) translateY(0); }
            50% { opacity: 0.55; transform: scaleY(1.08) translateY(-3px); }
          }
          
          @keyframes canopy-flap-8 {
            0%, 100% { opacity: 0.33; transform: scaleY(1) translateY(0); }
            50% { opacity: 0.53; transform: scaleY(1.06) translateY(-2px); }
          }
          
          /* PRODUCE SPARKLE ANIMATIONS */
          @keyframes produce-sparkle-1 {
            0%, 65%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            70%, 80% { opacity: 0.9; transform: scale(2.5) rotate(360deg); }
            75% { opacity: 0.55; transform: scale(2) rotate(180deg); }
          }
          
          @keyframes produce-sparkle-2 {
            0%, 68%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            73%, 83% { opacity: 0.88; transform: scale(2.3) rotate(360deg); }
            78% { opacity: 0.52; transform: scale(1.9) rotate(180deg); }
          }
          
          @keyframes produce-sparkle-3 {
            0%, 70%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            75%, 85% { opacity: 0.92; transform: scale(2.6) rotate(360deg); }
            80% { opacity: 0.58; transform: scale(2.1) rotate(180deg); }
          }
          
          @keyframes produce-sparkle-4 {
            0%, 67%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            72%, 82% { opacity: 0.9; transform: scale(2.4) rotate(360deg); }
            77% { opacity: 0.54; transform: scale(2) rotate(180deg); }
          }
          
          @keyframes produce-sparkle-5 {
            0%, 72%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            77%, 87% { opacity: 0.92; transform: scale(2.7) rotate(360deg); }
            82% { opacity: 0.56; transform: scale(2.2) rotate(180deg); }
          }
          
          @keyframes produce-sparkle-6 {
            0%, 69%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            74%, 84% { opacity: 0.88; transform: scale(2.3) rotate(360deg); }
            79% { opacity: 0.53; transform: scale(1.9) rotate(180deg); }
          }
          
          @keyframes produce-sparkle-7 {
            0%, 71%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            76%, 86% { opacity: 0.9; transform: scale(2.5) rotate(360deg); }
            81% { opacity: 0.55; transform: scale(2.05) rotate(180deg); }
          }
          
          @keyframes produce-sparkle-8 {
            0%, 66%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            71%, 81% { opacity: 0.87; transform: scale(2.2) rotate(360deg); }
            76% { opacity: 0.52; transform: scale(1.85) rotate(180deg); }
          }
          
          @keyframes produce-sparkle-9 {
            0%, 73%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            78%, 88% { opacity: 0.91; transform: scale(2.6) rotate(360deg); }
            83% { opacity: 0.57; transform: scale(2.1) rotate(180deg); }
          }
          
          @keyframes produce-sparkle-10 {
            0%, 68%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            73%, 83% { opacity: 0.89; transform: scale(2.4) rotate(360deg); }
            78% { opacity: 0.54; transform: scale(2) rotate(180deg); }
          }
          
          /* COIN SPARKLE ANIMATIONS */
          @keyframes coin-sparkle-1 {
            0%, 60%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            65%, 75% { opacity: 0.85; transform: scale(2.8) rotate(720deg); }
            70% { opacity: 0.5; transform: scale(2.2) rotate(360deg); }
          }
          
          @keyframes coin-sparkle-2 {
            0%, 63%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            68%, 78% { opacity: 0.82; transform: scale(2.6) rotate(720deg); }
            73% { opacity: 0.48; transform: scale(2) rotate(360deg); }
          }
          
          @keyframes coin-sparkle-3 {
            0%, 66%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            71%, 81% { opacity: 0.88; transform: scale(3) rotate(720deg); }
            76% { opacity: 0.52; transform: scale(2.4) rotate(360deg); }
          }
          
          @keyframes coin-sparkle-4 {
            0%, 62%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            67%, 77% { opacity: 0.85; transform: scale(2.7) rotate(720deg); }
            72% { opacity: 0.5; transform: scale(2.1) rotate(360deg); }
          }
          
          @keyframes coin-sparkle-5 {
            0%, 64%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            69%, 79% { opacity: 0.83; transform: scale(2.5) rotate(720deg); }
            74% { opacity: 0.49; transform: scale(1.95) rotate(360deg); }
          }
          
          /* MERCHANT HALO ANIMATIONS */
          @keyframes merchant-halo-1 {
            0%, 100% { opacity: 0.28; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.4); }
          }
          
          @keyframes merchant-halo-2 {
            0%, 100% { opacity: 0.3; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.55; transform: scale(1.45) rotate(180deg); }
          }
          
          @keyframes merchant-halo-3 {
            0%, 100% { opacity: 0.29; transform: scale(1); }
            50% { opacity: 0.52; transform: scale(1.42); }
          }
          
          /* WATER SPARKLE ANIMATIONS */
          @keyframes water-sparkle-1 {
            0%, 65%, 100% { opacity: 0; transform: scale(0.5); }
            70%, 80% { opacity: 0.85; transform: scale(2.2); }
            75% { opacity: 0.5; transform: scale(1.8); }
          }
          
          @keyframes water-sparkle-2 {
            0%, 68%, 100% { opacity: 0; transform: scale(0.5); }
            73%, 83% { opacity: 0.82; transform: scale(2); }
            78% { opacity: 0.48; transform: scale(1.6); }
          }
          
          @keyframes water-sparkle-3 {
            0%, 70%, 100% { opacity: 0; transform: scale(0.5); }
            75%, 85% { opacity: 0.88; transform: scale(2.4); }
            80% { opacity: 0.52; transform: scale(2); }
          }
          
          @keyframes water-sparkle-4 {
            0%, 67%, 100% { opacity: 0; transform: scale(0.5); }
            72%, 82% { opacity: 0.85; transform: scale(2.1); }
            77% { opacity: 0.5; transform: scale(1.7); }
          }
          
          @keyframes water-glow {
            0%, 100% { opacity: 0.35; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.25); }
          }
          
          /* MARKET DUST ANIMATIONS */
          @keyframes market-dust-1 {
            0%, 100% { opacity: 0; transform: translateY(0) translateX(0) rotate(0deg); }
            50% { opacity: 0.7; transform: translateY(-40px) translateX(15px) rotate(180deg); }
          }
          
          @keyframes market-dust-2 {
            0%, 100% { opacity: 0; transform: translateY(0) translateX(0) rotate(0deg); }
            50% { opacity: 0.72; transform: translateY(-35px) translateX(-12px) rotate(200deg); }
          }
          
          @keyframes market-dust-3 {
            0%, 100% { opacity: 0; transform: translateY(0) translateX(0) rotate(0deg); }
            50% { opacity: 0.75; transform: translateY(-45px) translateX(18px) rotate(190deg); }
          }
          
          @keyframes market-dust-4 {
            0%, 100% { opacity: 0; transform: translateY(0) translateX(0) rotate(0deg); }
            50% { opacity: 0.7; transform: translateY(-38px) translateX(-14px) rotate(210deg); }
          }
          
          @keyframes market-dust-5 {
            0%, 100% { opacity: 0; transform: translateY(0) translateX(0) rotate(0deg); }
            50% { opacity: 0.73; transform: translateY(-42px) translateX(16px) rotate(195deg); }
          }
          
          @keyframes market-dust-6 {
            0%, 100% { opacity: 0; transform: translateY(0) translateX(0) rotate(0deg); }
            50% { opacity: 0.72; transform: translateY(-40px) translateX(-15px) rotate(205deg); }
          }
          
          /* CLOUD DRIFT ANIMATIONS */
          @keyframes cloud-drift-1 {
            0% { transform: translateX(0); }
            100% { transform: translateX(120px); }
          }
          
          @keyframes cloud-drift-2 {
            0% { transform: translateX(0); }
            100% { transform: translateX(-150px); }
          }
          
          @keyframes cloud-drift-3 {
            0% { transform: translateX(0); }
            100% { transform: translateX(100px); }
          }
          
          /* SUN RAY ANIMATIONS */
          @keyframes sun-ray-1 {
            0%, 100% { opacity: 0.32; transform: scaleY(1) rotate(1deg); }
            50% { opacity: 0.6; transform: scaleY(1.12) rotate(-1deg); }
          }
          
          @keyframes sun-ray-2 {
            0%, 100% { opacity: 0.35; transform: scaleY(1) rotate(-1deg); }
            50% { opacity: 0.65; transform: scaleY(1.15) rotate(1deg); }
          }
          
          @keyframes sun-ray-3 {
            0%, 100% { opacity: 0.3; transform: scaleY(1) rotate(0deg); }
            50% { opacity: 0.58; transform: scaleY(1.1) rotate(0deg); }
          }
          
          /* ANIMATION CLASS ASSIGNMENTS */
          .animate-dome-glow-1 { animation: dome-glow-1 5s ease-in-out infinite; }
          .animate-dome-glow-2 { animation: dome-glow-2 6s ease-in-out infinite 1s; }
          .animate-dome-core { animation: dome-core 4s ease-in-out infinite; }
          .animate-dome-gleam-1 { animation: dome-gleam-1 3.5s ease-in-out infinite; }
          .animate-dome-gleam-2 { animation: dome-gleam-2 4s ease-in-out infinite 0.5s; }
          .animate-dome-gleam-3 { animation: dome-gleam-3 3.8s ease-in-out infinite 1s; }
          .animate-crescent-glow { animation: crescent-glow 4s ease-in-out infinite; }
          .animate-crescent-outer { animation: crescent-outer 5s ease-in-out infinite 0.5s; }
          
          .animate-stained-glass-blue { animation: stained-glass-blue 5s ease-in-out infinite; }
          .animate-stained-glass-red { animation: stained-glass-red 5.5s ease-in-out infinite 0.5s; }
          .animate-stained-glass-yellow { animation: stained-glass-yellow 5.2s ease-in-out infinite 1s; }
          .animate-stained-glass-green { animation: stained-glass-green 5.8s ease-in-out infinite 1.5s; }
          .animate-stained-glass-purple { animation: stained-glass-purple 5.3s ease-in-out infinite 2s; }
          
          .animate-cross-glow { animation: cross-glow 4s ease-in-out infinite; }
          .animate-cross-glow-outer { animation: cross-glow-outer 5s ease-in-out infinite 0.5s; }
          .animate-cross-glow-far { animation: cross-glow-far 6s ease-in-out infinite 1s; }
          
          .animate-flag-wave-1 { animation: flag-wave-1 3s ease-in-out infinite; }
          .animate-flag-wave-2 { animation: flag-wave-2 3.2s ease-in-out infinite 0.3s; }
          .animate-flag-wave-3 { animation: flag-wave-3 3.5s ease-in-out infinite 0.6s; }
          .animate-flag-wave-4 { animation: flag-wave-4 3.3s ease-in-out infinite 0.9s; }
          .animate-flag-wave-5 { animation: flag-wave-5 3.1s ease-in-out infinite 1.2s; }
          .animate-flag-wave-6 { animation: flag-wave-6 3.4s ease-in-out infinite 0.4s; }
          .animate-flag-wave-7 { animation: flag-wave-7 3.6s ease-in-out infinite 0.8s; }
          
          .animate-armor-glint-1 { animation: armor-glint-1 8s linear infinite; }
          .animate-armor-glint-2 { animation: armor-glint-2 9s linear infinite 1.5s; }
          .animate-armor-glint-3 { animation: armor-glint-3 8.5s linear infinite 3s; }
          .animate-weapon-glint { animation: weapon-glint 7s linear infinite 2s; }
          
          .animate-canopy-flap-1 { animation: canopy-flap-1 4s ease-in-out infinite; }
          .animate-canopy-flap-2 { animation: canopy-flap-2 4.5s ease-in-out infinite 0.5s; }
          .animate-canopy-flap-3 { animation: canopy-flap-3 4.2s ease-in-out infinite 1s; }
          .animate-canopy-flap-4 { animation: canopy-flap-4 4.7s ease-in-out infinite 1.5s; }
          .animate-canopy-flap-5 { animation: canopy-flap-5 4.3s ease-in-out infinite 2s; }
          .animate-canopy-flap-6 { animation: canopy-flap-6 4.8s ease-in-out infinite 0.8s; }
          .animate-canopy-flap-7 { animation: canopy-flap-7 4.4s ease-in-out infinite 1.3s; }
          .animate-canopy-flap-8 { animation: canopy-flap-8 4.6s ease-in-out infinite 1.8s; }
          
          .animate-produce-sparkle-1 { animation: produce-sparkle-1 7s linear infinite; }
          .animate-produce-sparkle-2 { animation: produce-sparkle-2 7.5s linear infinite 1s; }
          .animate-produce-sparkle-3 { animation: produce-sparkle-3 8s linear infinite 2s; }
          .animate-produce-sparkle-4 { animation: produce-sparkle-4 7.8s linear infinite 3s; }
          .animate-produce-sparkle-5 { animation: produce-sparkle-5 8.2s linear infinite 4s; }
          .animate-produce-sparkle-6 { animation: produce-sparkle-6 7.6s linear infinite 0.5s; }
          .animate-produce-sparkle-7 { animation: produce-sparkle-7 8.3s linear infinite 1.5s; }
          .animate-produce-sparkle-8 { animation: produce-sparkle-8 7.2s linear infinite 2.5s; }
          .animate-produce-sparkle-9 { animation: produce-sparkle-9 8.5s linear infinite 3.5s; }
          .animate-produce-sparkle-10 { animation: produce-sparkle-10 7.9s linear infinite 4.5s; }
          
          .animate-coin-sparkle-1 { animation: coin-sparkle-1 6s linear infinite; }
          .animate-coin-sparkle-2 { animation: coin-sparkle-2 6.5s linear infinite 1s; }
          .animate-coin-sparkle-3 { animation: coin-sparkle-3 7s linear infinite 2s; }
          .animate-coin-sparkle-4 { animation: coin-sparkle-4 6.8s linear infinite 3s; }
          .animate-coin-sparkle-5 { animation: coin-sparkle-5 6.3s linear infinite 4s; }
          
          .animate-merchant-halo-1 { animation: merchant-halo-1 5s ease-in-out infinite; }
          .animate-merchant-halo-2 { animation: merchant-halo-2 5.5s ease-in-out infinite 1s; }
          .animate-merchant-halo-3 { animation: merchant-halo-3 5.2s ease-in-out infinite 2s; }
          
          .animate-water-sparkle-1 { animation: water-sparkle-1 6s linear infinite; }
          .animate-water-sparkle-2 { animation: water-sparkle-2 6.5s linear infinite 1s; }
          .animate-water-sparkle-3 { animation: water-sparkle-3 7s linear infinite 2s; }
          .animate-water-sparkle-4 { animation: water-sparkle-4 6.3s linear infinite 3s; }
          .animate-water-glow { animation: water-glow 4s ease-in-out infinite; }
          
          .animate-market-dust-1 { animation: market-dust-1 12s ease-in-out infinite; }
          .animate-market-dust-2 { animation: market-dust-2 13s ease-in-out infinite 2s; }
          .animate-market-dust-3 { animation: market-dust-3 14s ease-in-out infinite 4s; }
          .animate-market-dust-4 { animation: market-dust-4 12.5s ease-in-out infinite 1s; }
          .animate-market-dust-5 { animation: market-dust-5 13.5s ease-in-out infinite 5s; }
          .animate-market-dust-6 { animation: market-dust-6 14.5s ease-in-out infinite 3s; }
          
          .animate-cloud-drift-1 { animation: cloud-drift-1 50s linear infinite; }
          .animate-cloud-drift-2 { animation: cloud-drift-2 60s linear infinite; }
          .animate-cloud-drift-3 { animation: cloud-drift-3 45s linear infinite; }
          
          .animate-sun-ray-1 { animation: sun-ray-1 10s ease-in-out infinite; }
          .animate-sun-ray-2 { animation: sun-ray-2 12s ease-in-out infinite 3s; }
          .animate-sun-ray-3 { animation: sun-ray-3 11s ease-in-out infinite 6s; }
        `}</style>
      </div>
    </Card>
  );
}

