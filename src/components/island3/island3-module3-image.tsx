"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Island3Module3Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        {/* Base image */}
        <Image
          src="/islands/island3/island3-module3-image.webp"
          alt="NFT Collection Practical - Desert Bluff Adventure"
          fill
          className="object-cover"
          priority
        />
        
        {/* EPIC Animated overlay effects */}
        <div className="absolute inset-0 animate-effects">
          {/* Central Campfire - BLAZING */}
          <div className="absolute inset-0">
            {/* Main fire glow */}
            <div className="absolute top-[68%] left-[50%] w-[50px] h-[50px] bg-orange-400/50 rounded-full campfire-blaze animate-campfire-blaze-1"></div>
            <div className="absolute top-[69%] left-[50.5%] w-[35px] h-[35px] bg-yellow-400/60 rounded-full campfire-blaze animate-campfire-blaze-2"></div>
            <div className="absolute top-[70%] left-[51%] w-[20px] h-[20px] bg-yellow-100/70 rounded-full campfire-core animate-campfire-blaze-core"></div>
            
            {/* Fire flames dancing */}
            <div className="absolute top-[66%] left-[49%] w-[12px] h-[15px] bg-orange-500/80 rounded-full flame animate-flame-dance-1"></div>
            <div className="absolute top-[65%] left-[51%] w-[10px] h-[13px] bg-yellow-400/85 rounded-full flame animate-flame-dance-2"></div>
            <div className="absolute top-[66%] left-[50.5%] w-[11px] h-[14px] bg-orange-400/82 rounded-full flame animate-flame-dance-3"></div>
            
            {/* Embers rising */}
            <div className="absolute top-[63%] left-[49%] w-[3px] h-[3px] bg-orange-400/90 rounded-full ember animate-ember-float-1"></div>
            <div className="absolute top-[64%] left-[51%] w-[3px] h-[3px] bg-yellow-400/85 rounded-full ember animate-ember-float-2"></div>
            <div className="absolute top-[65%] left-[50%] w-[2px] h-[2px] bg-red-400/80 rounded-full ember animate-ember-float-3"></div>
            <div className="absolute top-[66%] left-[52%] w-[3px] h-[3px] bg-orange-300/88 rounded-full ember animate-ember-float-4"></div>
          </div>

          {/* Tent Interior Glows */}
          <div className="absolute inset-0">
            {/* Left tent glows */}
            <div className="absolute top-[54%] left-[20%] w-[8px] h-[10px] bg-orange-400/75 rounded tent-glow animate-tent-glow-1"></div>
            <div className="absolute top-[56%] left-[15%] w-[7px] h-[9px] bg-yellow-400/70 rounded tent-glow animate-tent-glow-2"></div>
            
            {/* Center-left tents */}
            <div className="absolute top-[52%] left-[35%] w-[8px] h-[10px] bg-orange-400/78 rounded tent-glow animate-tent-glow-3"></div>
            <div className="absolute top-[55%] left-[38%] w-[7px] h-[9px] bg-yellow-400/72 rounded tent-glow animate-tent-glow-4"></div>
            
            {/* Center-right tents */}
            <div className="absolute top-[52%] left-[62%] w-[8px] h-[10px] bg-orange-400/76 rounded tent-glow animate-tent-glow-5"></div>
            <div className="absolute top-[55%] left-[65%] w-[7px] h-[9px] bg-yellow-400/74 rounded tent-glow animate-tent-glow-6"></div>
            
            {/* Right tents */}
            <div className="absolute top-[54%] left-[80%] w-[8px] h-[10px] bg-orange-400/73 rounded tent-glow animate-tent-glow-7"></div>
            <div className="absolute top-[56%] left-[85%] w-[7px] h-[9px] bg-yellow-400/68 rounded tent-glow animate-tent-glow-8"></div>
          </div>

          {/* Tent Fabric Shimmer */}
          <div className="absolute inset-0">
            {/* Left side tent shimmer */}
            <div className="absolute top-[48%] left-[18%] w-[60px] h-[40px] bg-orange-200/15 rounded-full tent-shimmer animate-tent-fabric-1"></div>
            <div className="absolute top-[50%] left-[33%] w-[55px] h-[38px] bg-orange-200/13 rounded-full tent-shimmer animate-tent-fabric-2"></div>
            
            {/* Right side tent shimmer */}
            <div className="absolute top-[48%] left-[60%] w-[58px] h-[39px] bg-orange-200/14 rounded-full tent-shimmer animate-tent-fabric-3"></div>
            <div className="absolute top-[50%] left-[78%] w-[56px] h-[37px] bg-orange-200/12 rounded-full tent-shimmer animate-tent-fabric-4"></div>
          </div>

          {/* Pyramid Background Sparkles */}
          <div className="absolute inset-0">
            {/* Left pyramid */}
            <div className="absolute top-[28%] left-[35%] w-[4px] h-[4px] bg-yellow-200/95 rounded-full pyramid-shine animate-pyramid-shine-1"></div>
            <div className="absolute top-[32%] left-[32%] w-[3px] h-[3px] bg-white/90 rounded-full pyramid-shine animate-pyramid-shine-2"></div>
            <div className="absolute top-[38%] left-[38%] w-[4px] h-[4px] bg-yellow-200/92 rounded-full pyramid-shine animate-pyramid-shine-3"></div>
            
            {/* Center pyramid */}
            <div className="absolute top-[22%] left-[52%] w-[5px] h-[5px] bg-white/98 rounded-full pyramid-shine animate-pyramid-shine-4"></div>
            <div className="absolute top-[26%] left-[50%] w-[4px] h-[4px] bg-yellow-200/95 rounded-full pyramid-shine animate-pyramid-shine-5"></div>
            <div className="absolute top-[30%] left-[55%] w-[4px] h-[4px] bg-white/93 rounded-full pyramid-shine animate-pyramid-shine-6"></div>
            
            {/* Right pyramid */}
            <div className="absolute top-[32%] left-[68%] w-[3px] h-[3px] bg-yellow-200/90 rounded-full pyramid-shine animate-pyramid-shine-7"></div>
            <div className="absolute top-[36%] left-[65%] w-[4px] h-[4px] bg-white/88 rounded-full pyramid-shine animate-pyramid-shine-8"></div>
          </div>

          {/* MASSIVE Heat Shimmer Waves */}
          <div className="absolute inset-0">
            {/* Intense foreground heat */}
            <div className="absolute top-[72%] left-[10%] w-[180px] h-[140px] bg-orange-200/22 rounded-full heat-massive animate-heat-massive-1"></div>
            <div className="absolute top-[74%] left-[40%] w-[200px] h-[150px] bg-yellow-200/20 rounded-full heat-massive animate-heat-massive-2"></div>
            <div className="absolute top-[70%] right-[12%] w-[190px] h-[145px] bg-orange-200/24 rounded-full heat-massive animate-heat-massive-3"></div>
            
            {/* Mid-ground shimmer */}
            <div className="absolute top-[58%] left-[15%] w-[160px] h-[110px] bg-orange-100/18 rounded-full heat-massive animate-heat-massive-4"></div>
            <div className="absolute top-[60%] left-[50%] w-[170px] h-[115px] bg-yellow-100/16 rounded-full heat-massive animate-heat-massive-5"></div>
            <div className="absolute top-[56%] right-[18%] w-[165px] h-[112px] bg-orange-100/19 rounded-full heat-massive animate-heat-massive-6"></div>
            
            {/* Background pyramid shimmer */}
            <div className="absolute top-[42%] left-[20%] w-[220px] h-[90px] bg-orange-100/14 rounded-full heat-massive animate-heat-massive-7"></div>
            <div className="absolute top-[40%] right-[20%] w-[210px] h-[85px] bg-yellow-100/12 rounded-full heat-massive animate-heat-massive-8"></div>
          </div>

          {/* Swirling Sand Storm */}
          <div className="absolute inset-0">
            {/* Heavy sand particles */}
            <div className="absolute top-[68%] left-[12%] w-[4px] h-[4px] bg-orange-200/70 rounded-full sand-heavy animate-sand-swirl-1"></div>
            <div className="absolute top-[72%] left-[28%] w-[5px] h-[5px] bg-yellow-200/75 rounded-full sand-heavy animate-sand-swirl-2"></div>
            <div className="absolute top-[70%] left-[48%] w-[4px] h-[4px] bg-orange-200/72 rounded-full sand-heavy animate-sand-swirl-3"></div>
            <div className="absolute top-[74%] left-[68%] w-[5px] h-[5px] bg-yellow-200/68 rounded-full sand-heavy animate-sand-swirl-4"></div>
            <div className="absolute top-[76%] left-[82%] w-[4px] h-[4px] bg-orange-200/70 rounded-full sand-heavy animate-sand-swirl-5"></div>
            
            {/* Medium sand particles */}
            <div className="absolute top-[62%] left-[18%] w-[3px] h-[3px] bg-orange-200/60 rounded-full sand-medium animate-sand-swirl-6"></div>
            <div className="absolute top-[64%] left-[42%] w-[3px] h-[3px] bg-yellow-200/62 rounded-full sand-medium animate-sand-swirl-7"></div>
            <div className="absolute top-[60%] left-[58%] w-[3px] h-[3px] bg-orange-200/65 rounded-full sand-medium animate-sand-swirl-8"></div>
            <div className="absolute top-[66%] left-[78%] w-[3px] h-[3px] bg-yellow-200/58 rounded-full sand-medium animate-sand-swirl-9"></div>
            
            {/* Fine sand mist */}
            <div className="absolute top-[55%] left-[25%] w-[2px] h-[2px] bg-orange-200/50 rounded-full sand-fine animate-sand-swirl-10"></div>
            <div className="absolute top-[58%] left-[52%] w-[2px] h-[2px] bg-yellow-200/52 rounded-full sand-fine animate-sand-swirl-11"></div>
            <div className="absolute top-[54%] left-[72%] w-[2px] h-[2px] bg-orange-200/48 rounded-full sand-fine animate-sand-swirl-12"></div>
          </div>

          {/* Camel & Object Dust Clouds */}
          <div className="absolute inset-0">
            {/* Around camels */}
            <div className="absolute top-[62%] left-[46%] w-[40px] h-[25px] bg-orange-200/20 rounded-full dust-cloud animate-dust-cloud-1"></div>
            <div className="absolute top-[64%] left-[54%] w-[35px] h-[22px] bg-yellow-200/18 rounded-full dust-cloud animate-dust-cloud-2"></div>
            
            {/* Around tents */}
            <div className="absolute top-[66%] left-[22%] w-[30px] h-[18px] bg-orange-200/16 rounded-full dust-cloud animate-dust-cloud-3"></div>
            <div className="absolute top-[68%] left-[78%] w-[32px] h-[20px] bg-yellow-200/17 rounded-full dust-cloud animate-dust-cloud-4"></div>
          </div>

          {/* Distant Object Shimmer */}
          <div className="absolute inset-0">
            {/* Barrels/crates shimmer */}
            <div className="absolute top-[64%] left-[16%] w-[15px] h-[15px] bg-orange-300/15 rounded-full object-shimmer animate-object-shimmer-1"></div>
            <div className="absolute top-[66%] left-[84%] w-[14px] h-[14px] bg-orange-300/14 rounded-full object-shimmer animate-object-shimmer-2"></div>
          </div>

          {/* Epic Sun Rays from Sky */}
          <div className="absolute inset-0">
            <div className="absolute top-[0%] left-[0%] w-full h-[55%] bg-gradient-to-b from-yellow-200/18 via-orange-100/12 to-transparent sun-beam animate-sun-beam-epic-1"></div>
            <div className="absolute top-[5%] left-[0%] w-full h-[50%] bg-gradient-to-b from-orange-200/15 via-yellow-100/10 to-transparent sun-beam animate-sun-beam-epic-2"></div>
          </div>

          {/* Intense Desert Atmosphere */}
          <div className="absolute inset-0 bg-gradient-to-b from-orange-100/12 via-yellow-50/8 to-orange-200/15 animate-intense-desert-atmosphere"></div>
          
          {/* Epic Ground Heat */}
          <div className="absolute inset-0 bg-gradient-to-t from-orange-200/20 via-yellow-100/12 to-transparent animate-epic-ground-heat"></div>
        </div>
        
        <style jsx>{`
          .campfire-blaze {
            filter: blur(20px);
          }
          
          .campfire-core {
            filter: blur(10px);
            box-shadow: 0 0 40px currentColor, 0 0 80px currentColor, 0 0 120px currentColor;
          }
          
          .flame {
            filter: blur(5px);
            box-shadow: 0 0 25px currentColor, 0 0 50px currentColor;
          }
          
          .ember {
            box-shadow: 0 0 15px currentColor, 0 0 30px currentColor;
            filter: blur(0.6px);
          }
          
          .tent-glow {
            filter: blur(5px);
            box-shadow: 0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor;
          }
          
          .tent-shimmer {
            filter: blur(20px);
          }
          
          .pyramid-shine {
            box-shadow: 0 0 25px currentColor, 0 0 50px currentColor, 0 0 75px currentColor;
            filter: blur(0.3px);
          }
          
          .heat-massive {
            filter: blur(35px);
            opacity: 0;
          }
          
          .sand-heavy {
            box-shadow: 0 0 12px currentColor, 0 0 24px currentColor;
            filter: blur(0.8px);
          }
          
          .sand-medium {
            box-shadow: 0 0 10px currentColor, 0 0 20px currentColor;
            filter: blur(0.7px);
          }
          
          .sand-fine {
            box-shadow: 0 0 8px currentColor, 0 0 16px currentColor;
            filter: blur(0.6px);
          }
          
          .dust-cloud {
            filter: blur(18px);
          }
          
          .object-shimmer {
            filter: blur(12px);
          }
          
          .sun-beam {
            filter: blur(45px);
            opacity: 0;
          }
          
          .animate-effects .campfire-blaze {
            animation-play-state: running;
          }
          
          .animate-effects .campfire-core {
            animation-play-state: running;
          }
          
          .animate-effects .flame {
            animation-play-state: running;
          }
          
          .animate-effects .ember {
            animation-play-state: running;
          }
          
          .animate-effects .tent-glow {
            animation-play-state: running;
          }
          
          .animate-effects .tent-shimmer {
            animation-play-state: running;
          }
          
          .animate-effects .pyramid-shine {
            animation-play-state: running;
          }
          
          .animate-effects .heat-massive {
            animation-play-state: running;
          }
          
          .animate-effects .sand-heavy {
            animation-play-state: running;
          }
          
          .animate-effects .sand-medium {
            animation-play-state: running;
          }
          
          .animate-effects .sand-fine {
            animation-play-state: running;
          }
          
          .animate-effects .dust-cloud {
            animation-play-state: running;
          }
          
          .animate-effects .object-shimmer {
            animation-play-state: running;
          }
          
          .animate-effects .sun-beam {
            animation-play-state: running;
          }
          
          @keyframes campfire-blaze-1 {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.3); }
          }
          
          @keyframes campfire-blaze-2 {
            0%, 100% { opacity: 0.6; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.9; transform: scale(1.4) rotate(10deg); }
          }
          
          @keyframes campfire-blaze-core {
            0%, 100% { opacity: 0.7; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.5); }
          }
          
          @keyframes flame-dance-1 {
            0%, 100% { opacity: 0.8; transform: scale(1) translateY(0px); }
            25% { opacity: 1; transform: scale(1.3) translateY(-8px); }
            50% { opacity: 0.6; transform: scale(0.9) translateY(-4px); }
            75% { opacity: 0.95; transform: scale(1.2) translateY(-10px); }
          }
          
          @keyframes flame-dance-2 {
            0%, 100% { opacity: 0.85; transform: scale(1) translateY(0px) rotate(0deg); }
            30% { opacity: 1; transform: scale(1.4) translateY(-10px) rotate(8deg); }
            60% { opacity: 0.5; transform: scale(0.85) translateY(-5px) rotate(-5deg); }
            85% { opacity: 0.95; transform: scale(1.25) translateY(-12px) rotate(4deg); }
          }
          
          @keyframes flame-dance-3 {
            0%, 100% { opacity: 0.82; transform: scale(1) translateY(0px); }
            35% { opacity: 1; transform: scale(1.35) translateY(-9px); }
            65% { opacity: 0.55; transform: scale(0.88) translateY(-6px); }
            90% { opacity: 0.98; transform: scale(1.28) translateY(-11px); }
          }
          
          @keyframes ember-float-1 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.9; transform: translateY(-40px) translateX(8px) rotate(180deg); }
            100% { opacity: 0; transform: translateY(-80px) translateX(15px) rotate(360deg); }
          }
          
          @keyframes ember-float-2 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.85; transform: translateY(-35px) translateX(-6px) rotate(200deg); }
            100% { opacity: 0; transform: translateY(-70px) translateX(-12px) rotate(400deg); }
          }
          
          @keyframes ember-float-3 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.8; transform: translateY(-45px) translateX(10px) rotate(190deg); }
            100% { opacity: 0; transform: translateY(-90px) translateX(18px) rotate(380deg); }
          }
          
          @keyframes ember-float-4 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.88; transform: translateY(-38px) translateX(-7px) rotate(210deg); }
            100% { opacity: 0; transform: translateY(-76px) translateX(-14px) rotate(420deg); }
          }
          
          @keyframes tent-glow-1 {
            0%, 100% { opacity: 0.75; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.3); }
          }
          
          @keyframes tent-glow-2 {
            0%, 100% { opacity: 0.7; transform: scale(1); }
            60% { opacity: 1; transform: scale(1.28); }
          }
          
          @keyframes tent-glow-3 {
            0%, 100% { opacity: 0.78; transform: scale(1); }
            55% { opacity: 1; transform: scale(1.32); }
          }
          
          @keyframes tent-glow-4 {
            0%, 100% { opacity: 0.72; transform: scale(1); }
            48% { opacity: 1; transform: scale(1.26); }
          }
          
          @keyframes tent-glow-5 {
            0%, 100% { opacity: 0.76; transform: scale(1); }
            52% { opacity: 1; transform: scale(1.3); }
          }
          
          @keyframes tent-glow-6 {
            0%, 100% { opacity: 0.74; transform: scale(1); }
            58% { opacity: 1; transform: scale(1.29); }
          }
          
          @keyframes tent-glow-7 {
            0%, 100% { opacity: 0.73; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.27); }
          }
          
          @keyframes tent-glow-8 {
            0%, 100% { opacity: 0.68; transform: scale(1); }
            54% { opacity: 0.98; transform: scale(1.25); }
          }
          
          @keyframes tent-fabric-1 {
            0%, 100% { opacity: 0.15; transform: scale(1); }
            50% { opacity: 0.28; transform: scale(1.15); }
          }
          
          @keyframes tent-fabric-2 {
            0%, 100% { opacity: 0.13; transform: scale(1) rotate(0deg); }
            60% { opacity: 0.25; transform: scale(1.12) rotate(5deg); }
          }
          
          @keyframes tent-fabric-3 {
            0%, 100% { opacity: 0.14; transform: scale(1); }
            55% { opacity: 0.27; transform: scale(1.14); }
          }
          
          @keyframes tent-fabric-4 {
            0%, 100% { opacity: 0.12; transform: scale(1) rotate(0deg); }
            58% { opacity: 0.24; transform: scale(1.11) rotate(-5deg); }
          }
          
          @keyframes pyramid-shine-1 {
            0%, 68%, 100% { opacity: 0; transform: scale(1); }
            73%, 83% { opacity: 0.95; transform: scale(2.6); }
            78% { opacity: 0.6; transform: scale(2.1); }
          }
          
          @keyframes pyramid-shine-2 {
            0%, 72%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            77%, 87% { opacity: 0.9; transform: scale(2.4) rotate(360deg); }
            82% { opacity: 0.58; transform: scale(1.95) rotate(180deg); }
          }
          
          @keyframes pyramid-shine-3 {
            0%, 75%, 100% { opacity: 0; transform: scale(1); }
            80%, 90% { opacity: 0.92; transform: scale(2.5); }
            85% { opacity: 0.62; transform: scale(2.05); }
          }
          
          @keyframes pyramid-shine-4 {
            0%, 60%, 100% { opacity: 0; transform: scale(1); }
            65%, 75% { opacity: 0.98; transform: scale(2.8); }
            70% { opacity: 0.65; transform: scale(2.3); }
          }
          
          @keyframes pyramid-shine-5 {
            0%, 70%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            75%, 85% { opacity: 0.95; transform: scale(2.6) rotate(360deg); }
            80% { opacity: 0.6; transform: scale(2.1) rotate(180deg); }
          }
          
          @keyframes pyramid-shine-6 {
            0%, 78%, 100% { opacity: 0; transform: scale(1); }
            83%, 93% { opacity: 0.93; transform: scale(2.5); }
            88% { opacity: 0.6; transform: scale(2); }
          }
          
          @keyframes pyramid-shine-7 {
            0%, 65%, 100% { opacity: 0; transform: scale(1); }
            70%, 80% { opacity: 0.9; transform: scale(2.3); }
            75% { opacity: 0.58; transform: scale(1.9); }
          }
          
          @keyframes pyramid-shine-8 {
            0%, 73%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            78%, 88% { opacity: 0.88; transform: scale(2.4) rotate(360deg); }
            83% { opacity: 0.56; transform: scale(1.95) rotate(180deg); }
          }
          
          @keyframes heat-massive-1 {
            0% { opacity: 0; transform: translateY(0px) scaleY(1); }
            50% { opacity: 0.3; transform: translateY(-90px) scaleY(1.8); }
            100% { opacity: 0; transform: translateY(-180px) scaleY(2.6); }
          }
          
          @keyframes heat-massive-2 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) scaleY(1); }
            50% { opacity: 0.28; transform: translateY(-85px) translateX(30px) scaleY(1.7); }
            100% { opacity: 0; transform: translateY(-170px) translateX(60px) scaleY(2.4); }
          }
          
          @keyframes heat-massive-3 {
            0% { opacity: 0; transform: translateY(0px) scaleY(1); }
            50% { opacity: 0.32; transform: translateY(-95px) scaleY(1.9); }
            100% { opacity: 0; transform: translateY(-190px) scaleY(2.7); }
          }
          
          @keyframes heat-massive-4 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) scaleY(1); }
            50% { opacity: 0.24; transform: translateY(-75px) translateX(-25px) scaleY(1.65); }
            100% { opacity: 0; transform: translateY(-150px) translateX(-50px) scaleY(2.3); }
          }
          
          @keyframes heat-massive-5 {
            0% { opacity: 0; transform: translateY(0px) scaleY(1); }
            50% { opacity: 0.22; transform: translateY(-82px) scaleY(1.72); }
            100% { opacity: 0; transform: translateY(-164px) scaleY(2.45); }
          }
          
          @keyframes heat-massive-6 {
            0% { opacity: 0; transform: translateY(0px) scaleY(1); }
            50% { opacity: 0.26; transform: translateY(-70px) scaleY(1.6); }
            100% { opacity: 0; transform: translateY(-140px) scaleY(2.2); }
          }
          
          @keyframes heat-massive-7 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) scaleY(1); }
            50% { opacity: 0.18; transform: translateY(-65px) translateX(35px) scaleY(1.55); }
            100% { opacity: 0; transform: translateY(-130px) translateX(70px) scaleY(2.15); }
          }
          
          @keyframes heat-massive-8 {
            0% { opacity: 0; transform: translateY(0px) scaleY(1); }
            50% { opacity: 0.16; transform: translateY(-72px) scaleY(1.62); }
            100% { opacity: 0; transform: translateY(-144px) scaleY(2.25); }
          }
          
          @keyframes sand-swirl-1 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px) rotate(0deg); }
            50% { opacity: 0.7; transform: translateX(180px) translateY(-30px) rotate(200deg); }
            100% { opacity: 0; transform: translateX(360px) translateY(-55px) rotate(400deg); }
          }
          
          @keyframes sand-swirl-2 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px) rotate(0deg); }
            50% { opacity: 0.75; transform: translateX(160px) translateY(-25px) rotate(220deg); }
            100% { opacity: 0; transform: translateX(320px) translateY(-45px) rotate(440deg); }
          }
          
          @keyframes sand-swirl-3 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px) rotate(0deg); }
            50% { opacity: 0.72; transform: translateX(170px) translateY(-32px) rotate(210deg); }
            100% { opacity: 0; transform: translateX(340px) translateY(-60px) rotate(420deg); }
          }
          
          @keyframes sand-swirl-4 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px) rotate(0deg); }
            50% { opacity: 0.68; transform: translateX(-150px) translateY(-22px) rotate(190deg); }
            100% { opacity: 0; transform: translateX(-300px) translateY(-40px) rotate(380deg); }
          }
          
          @keyframes sand-swirl-5 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px) rotate(0deg); }
            50% { opacity: 0.7; transform: translateX(-165px) translateY(-28px) rotate(205deg); }
            100% { opacity: 0; transform: translateX(-330px) translateY(-50px) rotate(410deg); }
          }
          
          @keyframes sand-swirl-6 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px) rotate(0deg); }
            50% { opacity: 0.6; transform: translateX(140px) translateY(-20px) rotate(180deg); }
            100% { opacity: 0; transform: translateX(280px) translateY(-35px) rotate(360deg); }
          }
          
          @keyframes sand-swirl-7 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px) rotate(0deg); }
            50% { opacity: 0.62; transform: translateX(-130px) translateY(-18px) rotate(195deg); }
            100% { opacity: 0; transform: translateX(-260px) translateY(-32px) rotate(390deg); }
          }
          
          @keyframes sand-swirl-8 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px) rotate(0deg); }
            50% { opacity: 0.65; transform: translateX(155px) translateY(-24px) rotate(215deg); }
            100% { opacity: 0; transform: translateX(310px) translateY(-42px) rotate(430deg); }
          }
          
          @keyframes sand-swirl-9 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px) rotate(0deg); }
            50% { opacity: 0.58; transform: translateX(-145px) translateY(-21px) rotate(185deg); }
            100% { opacity: 0; transform: translateX(-290px) translateY(-38px) rotate(370deg); }
          }
          
          @keyframes sand-swirl-10 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px); }
            50% { opacity: 0.5; transform: translateX(125px) translateY(-16px); }
            100% { opacity: 0; transform: translateX(250px) translateY(-30px); }
          }
          
          @keyframes sand-swirl-11 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px); }
            50% { opacity: 0.52; transform: translateX(-120px) translateY(-17px); }
            100% { opacity: 0; transform: translateX(-240px) translateY(-32px); }
          }
          
          @keyframes sand-swirl-12 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px); }
            50% { opacity: 0.48; transform: translateX(135px) translateY(-19px); }
            100% { opacity: 0; transform: translateX(270px) translateY(-36px); }
          }
          
          @keyframes dust-cloud-1 {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.35; transform: scale(1.2); }
          }
          
          @keyframes dust-cloud-2 {
            0%, 100% { opacity: 0.18; transform: scale(1) rotate(0deg); }
            60% { opacity: 0.32; transform: scale(1.18) rotate(8deg); }
          }
          
          @keyframes dust-cloud-3 {
            0%, 100% { opacity: 0.16; transform: scale(1); }
            55% { opacity: 0.3; transform: scale(1.15); }
          }
          
          @keyframes dust-cloud-4 {
            0%, 100% { opacity: 0.17; transform: scale(1) rotate(0deg); }
            58% { opacity: 0.31; transform: scale(1.16) rotate(-8deg); }
          }
          
          @keyframes object-shimmer-1 {
            0%, 100% { opacity: 0.15; }
            50% { opacity: 0.28; }
          }
          
          @keyframes object-shimmer-2 {
            0%, 100% { opacity: 0.14; }
            60% { opacity: 0.26; }
          }
          
          @keyframes sun-beam-epic-1 {
            0%, 100% { opacity: 0; }
            50% { opacity: 0.35; }
          }
          
          @keyframes sun-beam-epic-2 {
            0%, 100% { opacity: 0; }
            60% { opacity: 0.28; }
          }
          
          @keyframes intense-desert-atmosphere {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.85; }
          }
          
          @keyframes epic-ground-heat {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
          }
          
          .animate-campfire-blaze-1 { animation: campfire-blaze-1 4s ease-in-out infinite; }
          .animate-campfire-blaze-2 { animation: campfire-blaze-2 4.5s ease-in-out infinite 0.5s; }
          .animate-campfire-blaze-core { animation: campfire-blaze-core 3s ease-in-out infinite; }
          
          .animate-flame-dance-1 { animation: flame-dance-1 2s ease-in-out infinite; }
          .animate-flame-dance-2 { animation: flame-dance-2 2.3s ease-in-out infinite 0.3s; }
          .animate-flame-dance-3 { animation: flame-dance-3 2.1s ease-in-out infinite 0.6s; }
          
          .animate-ember-float-1 { animation: ember-float-1 4s ease-out infinite; }
          .animate-ember-float-2 { animation: ember-float-2 4.5s ease-out infinite 1s; }
          .animate-ember-float-3 { animation: ember-float-3 5s ease-out infinite 2s; }
          .animate-ember-float-4 { animation: ember-float-4 4.2s ease-out infinite 3s; }
          
          .animate-tent-glow-1 { animation: tent-glow-1 5s ease-in-out infinite; }
          .animate-tent-glow-2 { animation: tent-glow-2 5.5s ease-in-out infinite 0.5s; }
          .animate-tent-glow-3 { animation: tent-glow-3 5.2s ease-in-out infinite 1s; }
          .animate-tent-glow-4 { animation: tent-glow-4 5.8s ease-in-out infinite 1.5s; }
          .animate-tent-glow-5 { animation: tent-glow-5 5.3s ease-in-out infinite 2s; }
          .animate-tent-glow-6 { animation: tent-glow-6 5.6s ease-in-out infinite 2.5s; }
          .animate-tent-glow-7 { animation: tent-glow-7 5.4s ease-in-out infinite 3s; }
          .animate-tent-glow-8 { animation: tent-glow-8 5.7s ease-in-out infinite 3.5s; }
          
          .animate-tent-fabric-1 { animation: tent-fabric-1 8s ease-in-out infinite; }
          .animate-tent-fabric-2 { animation: tent-fabric-2 9s ease-in-out infinite 2s; }
          .animate-tent-fabric-3 { animation: tent-fabric-3 8.5s ease-in-out infinite 4s; }
          .animate-tent-fabric-4 { animation: tent-fabric-4 9.5s ease-in-out infinite 6s; }
          
          .animate-pyramid-shine-1 { animation: pyramid-shine-1 10s linear infinite; }
          .animate-pyramid-shine-2 { animation: pyramid-shine-2 11s linear infinite 2s; }
          .animate-pyramid-shine-3 { animation: pyramid-shine-3 9.5s linear infinite 4s; }
          .animate-pyramid-shine-4 { animation: pyramid-shine-4 12s linear infinite 1s; }
          .animate-pyramid-shine-5 { animation: pyramid-shine-5 10.5s linear infinite 5s; }
          .animate-pyramid-shine-6 { animation: pyramid-shine-6 11.5s linear infinite 3s; }
          .animate-pyramid-shine-7 { animation: pyramid-shine-7 9s linear infinite 6s; }
          .animate-pyramid-shine-8 { animation: pyramid-shine-8 10.8s linear infinite 7s; }
          
          .animate-heat-massive-1 { animation: heat-massive-1 6.5s ease-in-out infinite; }
          .animate-heat-massive-2 { animation: heat-massive-2 7s ease-in-out infinite 1.5s; }
          .animate-heat-massive-3 { animation: heat-massive-3 6s ease-in-out infinite 3s; }
          .animate-heat-massive-4 { animation: heat-massive-4 8s ease-in-out infinite 0.8s; }
          .animate-heat-massive-5 { animation: heat-massive-5 7.2s ease-in-out infinite 4s; }
          .animate-heat-massive-6 { animation: heat-massive-6 9s ease-in-out infinite 2.5s; }
          .animate-heat-massive-7 { animation: heat-massive-7 8.5s ease-in-out infinite 5s; }
          .animate-heat-massive-8 { animation: heat-massive-8 9.2s ease-in-out infinite 3.5s; }
          
          .animate-sand-swirl-1 { animation: sand-swirl-1 13s linear infinite; }
          .animate-sand-swirl-2 { animation: sand-swirl-2 15s linear infinite 2s; }
          .animate-sand-swirl-3 { animation: sand-swirl-3 14s linear infinite 4s; }
          .animate-sand-swirl-4 { animation: sand-swirl-4 16s linear infinite 1.5s; }
          .animate-sand-swirl-5 { animation: sand-swirl-5 12s linear infinite 6s; }
          .animate-sand-swirl-6 { animation: sand-swirl-6 17s linear infinite 3s; }
          .animate-sand-swirl-7 { animation: sand-swirl-7 15.5s linear infinite 5s; }
          .animate-sand-swirl-8 { animation: sand-swirl-8 13.5s linear infinite 8s; }
          .animate-sand-swirl-9 { animation: sand-swirl-9 16.5s linear infinite 2.5s; }
          .animate-sand-swirl-10 { animation: sand-swirl-10 18s linear infinite 4.5s; }
          .animate-sand-swirl-11 { animation: sand-swirl-11 17.5s linear infinite 7s; }
          .animate-sand-swirl-12 { animation: sand-swirl-12 14.5s linear infinite 9s; }
          
          .animate-dust-cloud-1 { animation: dust-cloud-1 6s ease-in-out infinite; }
          .animate-dust-cloud-2 { animation: dust-cloud-2 7s ease-in-out infinite 1.5s; }
          .animate-dust-cloud-3 { animation: dust-cloud-3 6.5s ease-in-out infinite 3s; }
          .animate-dust-cloud-4 { animation: dust-cloud-4 7.5s ease-in-out infinite 4.5s; }
          
          .animate-object-shimmer-1 { animation: object-shimmer-1 8s ease-in-out infinite; }
          .animate-object-shimmer-2 { animation: object-shimmer-2 9s ease-in-out infinite 3s; }
          
          .animate-sun-beam-epic-1 { animation: sun-beam-epic-1 20s ease-in-out infinite; }
          .animate-sun-beam-epic-2 { animation: sun-beam-epic-2 24s ease-in-out infinite 8s; }
          
          .animate-intense-desert-atmosphere { animation: intense-desert-atmosphere 16s ease-in-out infinite; }
          .animate-epic-ground-heat { animation: epic-ground-heat 14s ease-in-out infinite; }
        `}</style>
      </div>
    </Card>
  );
}

