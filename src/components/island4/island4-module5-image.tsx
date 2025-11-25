"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Island4Module5Image() {
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
          poster="/islands/island4/island4-module5-image.webp"
          onError={() => setVideoError(true)}
        >
          <source src="/islands/island4/island4-module5-video.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback image shown only if video fails */}
        {videoError && (
          <Image
            src="/islands/island4/island4-module5-image.webp"
            alt="Gas Optimization & Security Patterns - Gilded Bastion Adventure"
            fill
            className="object-cover"
            priority
          />
        )}
        
        {/* BOLD Animated overlay effects - Only shown if video fails */}
        {videoError && (
          <div className="absolute inset-0 animate-effects">
          {/* LIGHTHOUSE BEACON - Main focal point! (moved 7% right) */}
          <div className="absolute inset-0">
            {/* Epic lighthouse top glow */}
            <div className="absolute top-[18%] left-[69%] w-[90px] h-[90px] bg-yellow-300/45 rounded-full lighthouse-beacon animate-lighthouse-beacon-1"></div>
            <div className="absolute top-[19%] left-[69.5%] w-[70px] h-[70px] bg-amber-300/50 rounded-full lighthouse-beacon animate-lighthouse-beacon-2"></div>
            <div className="absolute top-[20%] left-[69%] w-[50px] h-[50px] bg-yellow-100/55 rounded-full lighthouse-core animate-lighthouse-core"></div>
            
            {/* Rotating lighthouse beam rays - DRAMATIC */}
            <div className="absolute top-[20%] left-[69.5%] w-[350px] h-[5px] bg-gradient-to-r from-transparent via-yellow-300/70 to-transparent lighthouse-beam animate-lighthouse-beam-rotate"></div>
            <div className="absolute top-[20%] left-[69.5%] w-[320px] h-[4px] bg-gradient-to-r from-transparent via-amber-200/60 to-transparent lighthouse-beam animate-lighthouse-beam-rotate-2"></div>
            
            {/* Lighthouse dome sparkles */}
            <div className="absolute top-[18%] left-[69.5%] w-[5px] h-[5px] bg-white/98 rounded-full dome-sparkle animate-dome-sparkle-1"></div>
            <div className="absolute top-[19%] left-[69.5%] w-[4px] h-[4px] bg-yellow-200/95 rounded-full dome-sparkle animate-dome-sparkle-2"></div>
            <div className="absolute top-[19%] left-[69.5%] w-[4px] h-[4px] bg-amber-200/93 rounded-full dome-sparkle animate-dome-sparkle-3"></div>
          </div>

          {/* LIGHTHOUSE TOWER WINDOW GLOW */}
          <div className="absolute inset-0">
            <div className="absolute top-[24%] left-[72.5%] w-[5px] h-[6px] bg-yellow-300/90 rounded window-glow animate-lighthouse-window-1"></div>
            <div className="absolute top-[24%] left-[72.5%] w-[10px] h-[12px] bg-orange-300/45 window-glow-outer animate-lighthouse-window-glow"></div>
          </div>

          {/* STARS - Twinkling night sky */}
          <div className="absolute inset-0">
            {/* Large bright stars */}
            <div className="absolute top-[8%] left-[28%] w-[4px] h-[4px] bg-white/95 rounded-full star-large animate-star-twinkle-1"></div>
            <div className="absolute top-[12%] left-[35%] w-[4px] h-[4px] bg-yellow-200/92 rounded-full star-large animate-star-twinkle-2"></div>
            <div className="absolute top-[6%] left-[42%] w-[5px] h-[5px] bg-white/98 rounded-full star-large animate-star-twinkle-3"></div>
            <div className="absolute top-[10%] left-[52%] w-[4px] h-[4px] bg-yellow-200/90 rounded-full star-large animate-star-twinkle-4"></div>
            <div className="absolute top-[14%] left-[60%] w-[4px] h-[4px] bg-white/93 rounded-full star-large animate-star-twinkle-5"></div>
            
            {/* Medium stars */}
            <div className="absolute top-[7%] left-[15%] w-[3px] h-[3px] bg-white/85 rounded-full star-medium animate-star-twinkle-6"></div>
            <div className="absolute top-[11%] left-[22%] w-[3px] h-[3px] bg-yellow-200/82 rounded-full star-medium animate-star-twinkle-7"></div>
            <div className="absolute top-[15%] left-[45%] w-[3px] h-[3px] bg-white/88 rounded-full star-medium animate-star-twinkle-8"></div>
            <div className="absolute top-[9%] left-[68%] w-[3px] h-[3px] bg-yellow-200/84 rounded-full star-medium animate-star-twinkle-9"></div>
            <div className="absolute top-[13%] left-[78%] w-[3px] h-[3px] bg-white/86 rounded-full star-medium animate-star-twinkle-10"></div>
            
            {/* Small stars */}
            <div className="absolute top-[6%] left-[10%] w-[2px] h-[2px] bg-white/75 rounded-full star-small animate-star-twinkle-11"></div>
            <div className="absolute top-[8%] left-[20%] w-[2px] h-[2px] bg-yellow-200/72 rounded-full star-small animate-star-twinkle-12"></div>
            <div className="absolute top-[10%] left-[38%] w-[2px] h-[2px] bg-white/78 rounded-full star-small animate-star-twinkle-13"></div>
            <div className="absolute top-[12%] left-[48%] w-[2px] h-[2px] bg-yellow-200/74 rounded-full star-small animate-star-twinkle-14"></div>
            <div className="absolute top-[14%] left-[56%] w-[2px] h-[2px] bg-white/76 rounded-full star-small animate-star-twinkle-15"></div>
            <div className="absolute top-[7%] left-[64%] w-[2px] h-[2px] bg-yellow-200/73 rounded-full star-small animate-star-twinkle-16"></div>
            <div className="absolute top-[9%] left-[82%] w-[2px] h-[2px] bg-white/77 rounded-full star-small animate-star-twinkle-17"></div>
            <div className="absolute top-[11%] left-[92%] w-[2px] h-[2px] bg-yellow-200/75 rounded-full star-small animate-star-twinkle-18"></div>
          </div>

          {/* CLOUDS - Gentle floating */}
          <div className="absolute inset-0">
            {/* Left side clouds */}
            <div className="absolute top-[8%] left-[5%] w-[80px] h-[40px] bg-blue-300/12 rounded-full cloud animate-cloud-float-1"></div>
            <div className="absolute top-[12%] left-[8%] w-[70px] h-[35px] bg-cyan-300/10 rounded-full cloud animate-cloud-float-2"></div>
            
            {/* Center clouds */}
            <div className="absolute top-[15%] left-[25%] w-[90px] h-[45px] bg-blue-300/14 rounded-full cloud animate-cloud-float-3"></div>
            <div className="absolute top-[18%] left-[38%] w-[75px] h-[38px] bg-cyan-300/11 rounded-full cloud animate-cloud-float-4"></div>
            
            {/* Right side clouds */}
            <div className="absolute top-[10%] right-[8%] w-[85px] h-[42px] bg-blue-300/13 rounded-full cloud animate-cloud-float-5"></div>
            <div className="absolute top-[16%] right-[18%] w-[78px] h-[39px] bg-cyan-300/12 rounded-full cloud animate-cloud-float-6"></div>
          </div>

          {/* OCEAN WAVES - Bottom edge shimmer */}
          <div className="absolute inset-0">
            <div className="absolute bottom-[28%] left-[8%] w-[60px] h-[8px] bg-cyan-300/25 wave animate-wave-1"></div>
            <div className="absolute bottom-[26%] left-[15%] w-[55px] h-[7px] bg-blue-300/22 wave animate-wave-2"></div>
            <div className="absolute bottom-[30%] left-[25%] w-[65px] h-[9px] bg-cyan-300/28 wave animate-wave-3"></div>
            <div className="absolute bottom-[27%] left-[35%] w-[58px] h-[8px] bg-blue-300/24 wave animate-wave-4"></div>
            <div className="absolute bottom-[29%] left-[45%] w-[62px] h-[8px] bg-cyan-300/26 wave animate-wave-5"></div>
            <div className="absolute bottom-[28%] left-[55%] w-[60px] h-[8px] bg-blue-300/23 wave animate-wave-6"></div>
            <div className="absolute bottom-[26%] left-[65%] w-[56px] h-[7px] bg-cyan-300/25 wave animate-wave-7"></div>
            <div className="absolute bottom-[30%] left-[75%] w-[64px] h-[9px] bg-blue-300/27 wave animate-wave-8"></div>
          </div>

          {/* SAILBOATS - Gentle bobbing */}
          <div className="absolute inset-0">
            {/* Left sailboat */}
            <div className="absolute top-[62%] left-[8%] w-[15px] h-[20px] bg-white/35 sailboat animate-sailboat-bob-1"></div>
            <div className="absolute top-[62%] left-[8%] w-[25px] h-[30px] bg-cyan-200/15 sailboat-glow animate-sailboat-glow-1"></div>
            
            {/* Center-left sailboat */}
            <div className="absolute top-[60%] left-[28%] w-[14px] h-[18px] bg-white/32 sailboat animate-sailboat-bob-2"></div>
            <div className="absolute top-[60%] left-[28%] w-[24px] h-[28px] bg-cyan-200/13 sailboat-glow animate-sailboat-glow-2"></div>
            
            {/* Center-right sailboat */}
            <div className="absolute top-[61%] left-[42%] w-[13px] h-[17px] bg-white/30 sailboat animate-sailboat-bob-3"></div>
            <div className="absolute top-[61%] left-[42%] w-[23px] h-[27px] bg-cyan-200/12 sailboat-glow animate-sailboat-glow-3"></div>
          </div>

          {/* CLIFF GRASS/VEGETATION - Gentle sway */}
          <div className="absolute inset-0">
            {/* Right cliff vegetation */}
            <div className="absolute bottom-[20%] right-[5%] w-[45px] h-[55px] bg-green-400/18 vegetation animate-vegetation-sway-1"></div>
            <div className="absolute bottom-[18%] right-[8%] w-[40px] h-[50px] bg-emerald-400/16 vegetation animate-vegetation-sway-2"></div>
            <div className="absolute bottom-[22%] right-[12%] w-[42px] h-[52px] bg-green-400/17 vegetation animate-vegetation-sway-3"></div>
            
            {/* Left cliff vegetation */}
            <div className="absolute bottom-[15%] left-[2%] w-[50px] h-[60px] bg-green-400/20 vegetation animate-vegetation-sway-4"></div>
            <div className="absolute bottom-[12%] left-[5%] w-[45px] h-[55px] bg-emerald-400/18 vegetation animate-vegetation-sway-5"></div>
          </div>

          {/* CLIFF EDGE HIGHLIGHTS */}
          <div className="absolute inset-0">
            <div className="absolute top-[52%] right-[15%] w-[4px] h-[4px] bg-yellow-300/75 cliff-sparkle animate-cliff-sparkle-1"></div>
            <div className="absolute top-[56%] right-[18%] w-[4px] h-[4px] bg-cyan-200/70 cliff-sparkle animate-cliff-sparkle-2"></div>
            <div className="absolute top-[60%] right-[22%] w-[4px] h-[4px] bg-yellow-300/72 cliff-sparkle animate-cliff-sparkle-3"></div>
            <div className="absolute top-[48%] right-[12%] w-[4px] h-[4px] bg-cyan-200/68 cliff-sparkle animate-cliff-sparkle-4"></div>
          </div>

          {/* WATER FOAM/SPLASH - At cliff base */}
          <div className="absolute inset-0">
            <div className="absolute bottom-[24%] left-[52%] w-[35px] h-[18px] bg-cyan-200/30 foam animate-foam-splash-1"></div>
            <div className="absolute bottom-[22%] left-[55%] w-[32px] h-[16px] bg-white/25 foam animate-foam-splash-2"></div>
            <div className="absolute bottom-[26%] left-[58%] w-[30px] h-[15px] bg-cyan-200/28 foam animate-foam-splash-3"></div>
          </div>

          {/* LIGHTHOUSE TOWER STONE DETAILS */}
          <div className="absolute inset-0">
            <div className="absolute top-[30%] left-[71%] w-[3px] h-[3px] bg-white/80 stone-detail animate-stone-detail-1"></div>
            <div className="absolute top-[35%] left-[73%] w-[3px] h-[3px] bg-cyan-100/75 stone-detail animate-stone-detail-2"></div>
            <div className="absolute top-[40%] left-[72%] w-[3px] h-[3px] bg-white/78 stone-detail animate-stone-detail-3"></div>
            <div className="absolute top-[45%] left-[74%] w-[3px] h-[3px] bg-cyan-100/73 stone-detail animate-stone-detail-4"></div>
          </div>

          {/* MOONLIGHT GLOW - Soft atmospheric light */}
          <div className="absolute inset-0">
            <div className="absolute top-[5%] left-[35%] w-[180px] h-[180px] bg-yellow-200/8 moonlight animate-moonlight-glow"></div>
          </div>

          {/* ATMOSPHERIC PARTICLES - Floating in air */}
          <div className="absolute inset-0">
            <div className="absolute top-[25%] left-[15%] w-[2px] h-[2px] bg-cyan-200/60 particle animate-particle-float-1"></div>
            <div className="absolute top-[30%] left-[30%] w-[2px] h-[2px] bg-blue-200/58 particle animate-particle-float-2"></div>
            <div className="absolute top-[35%] left-[50%] w-[2px] h-[2px] bg-cyan-200/62 particle animate-particle-float-3"></div>
            <div className="absolute top-[28%] left-[65%] w-[2px] h-[2px] bg-blue-200/56 particle animate-particle-float-4"></div>
            <div className="absolute top-[40%] left-[20%] w-[2px] h-[2px] bg-cyan-200/59 particle animate-particle-float-5"></div>
            <div className="absolute top-[32%] left-[80%] w-[2px] h-[2px] bg-blue-200/57 particle animate-particle-float-6"></div>
          </div>
          
          <style jsx>{`
          /* LIGHTHOUSE EFFECTS */
          .lighthouse-beacon {
            filter: blur(45px);
          }
          
          .lighthouse-core {
            filter: blur(18px);
            box-shadow: 0 0 60px currentColor, 0 0 120px currentColor;
          }
          
          .lighthouse-beam {
            filter: blur(10px);
            transform-origin: left center;
            opacity: 0;
          }
          
          .dome-sparkle {
            box-shadow: 0 0 35px currentColor, 0 0 70px currentColor, 0 0 105px currentColor;
            filter: blur(0.3px);
          }
          
          .window-glow {
            box-shadow: 0 0 25px currentColor, 0 0 50px currentColor;
            filter: blur(3px);
          }
          
          .window-glow-outer {
            filter: blur(15px);
          }
          
          /* STAR EFFECTS */
          .star-large {
            box-shadow: 0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor;
            filter: blur(0.4px);
          }
          
          .star-medium {
            box-shadow: 0 0 15px currentColor, 0 0 30px currentColor;
            filter: blur(0.3px);
          }
          
          .star-small {
            box-shadow: 0 0 10px currentColor, 0 0 20px currentColor;
            filter: blur(0.2px);
          }
          
          /* CLOUD EFFECTS */
          .cloud {
            filter: blur(28px);
          }
          
          /* WAVE EFFECTS */
          .wave {
            filter: blur(12px);
          }
          
          /* SAILBOAT EFFECTS */
          .sailboat {
            filter: blur(8px);
          }
          
          .sailboat-glow {
            filter: blur(20px);
          }
          
          /* VEGETATION EFFECTS */
          .vegetation {
            filter: blur(18px);
          }
          
          /* CLIFF SPARKLES */
          .cliff-sparkle {
            box-shadow: 0 0 18px currentColor, 0 0 36px currentColor;
            filter: blur(0.5px);
          }
          
          /* FOAM EFFECTS */
          .foam {
            filter: blur(14px);
          }
          
          /* STONE DETAILS */
          .stone-detail {
            box-shadow: 0 0 15px currentColor, 0 0 30px currentColor;
            filter: blur(0.4px);
          }
          
          /* MOONLIGHT */
          .moonlight {
            filter: blur(60px);
          }
          
          /* PARTICLES */
          .particle {
            box-shadow: 0 0 8px currentColor, 0 0 16px currentColor;
            filter: blur(0.4px);
          }
          
          /* ANIMATION STATES */
          .animate-effects .lighthouse-beacon,
          .animate-effects .lighthouse-core,
          .animate-effects .lighthouse-beam,
          .animate-effects .dome-sparkle,
          .animate-effects .window-glow,
          .animate-effects .window-glow-outer,
          .animate-effects .star-large,
          .animate-effects .star-medium,
          .animate-effects .star-small,
          .animate-effects .cloud,
          .animate-effects .wave,
          .animate-effects .sailboat,
          .animate-effects .sailboat-glow,
          .animate-effects .vegetation,
          .animate-effects .cliff-sparkle,
          .animate-effects .foam,
          .animate-effects .stone-detail,
          .animate-effects .moonlight,
          .animate-effects .particle {
            animation-play-state: running;
          }
          
          /* LIGHTHOUSE ANIMATIONS */
          @keyframes lighthouse-beacon-1 {
            0%, 100% { opacity: 0.45; transform: scale(1); }
            50% { opacity: 0.75; transform: scale(1.35); }
          }
          
          @keyframes lighthouse-beacon-2 {
            0%, 100% { opacity: 0.5; transform: scale(1) rotate(0deg); }
            60% { opacity: 0.8; transform: scale(1.4) rotate(180deg); }
          }
          
          @keyframes lighthouse-core {
            0%, 100% { opacity: 0.55; transform: scale(1); }
            50% { opacity: 0.95; transform: scale(1.6); }
          }
          
          @keyframes lighthouse-beam-rotate {
            0% { opacity: 0; transform: rotate(0deg); }
            25% { opacity: 0.7; transform: rotate(90deg); }
            50% { opacity: 0; transform: rotate(180deg); }
            75% { opacity: 0.7; transform: rotate(270deg); }
            100% { opacity: 0; transform: rotate(360deg); }
          }
          
          @keyframes lighthouse-beam-rotate-2 {
            0% { opacity: 0; transform: rotate(45deg); }
            25% { opacity: 0.6; transform: rotate(135deg); }
            50% { opacity: 0; transform: rotate(225deg); }
            75% { opacity: 0.6; transform: rotate(315deg); }
            100% { opacity: 0; transform: rotate(405deg); }
          }
          
          @keyframes dome-sparkle-1 {
            0%, 55%, 100% { opacity: 0; transform: scale(1); }
            60%, 70% { opacity: 1; transform: scale(3); }
            65% { opacity: 0.7; transform: scale(2.5); }
          }
          
          @keyframes dome-sparkle-2 {
            0%, 58%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            63%, 73% { opacity: 0.95; transform: scale(2.8) rotate(360deg); }
            68% { opacity: 0.65; transform: scale(2.3) rotate(180deg); }
          }
          
          @keyframes dome-sparkle-3 {
            0%, 60%, 100% { opacity: 0; transform: scale(1); }
            65%, 75% { opacity: 0.93; transform: scale(2.7); }
            70% { opacity: 0.62; transform: scale(2.2); }
          }
          
          @keyframes lighthouse-window-1 {
            0%, 100% { opacity: 0.9; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes lighthouse-window-glow {
            0%, 100% { opacity: 0.45; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.25); }
          }
          
          /* STAR TWINKLE ANIMATIONS */
          @keyframes star-twinkle-1 {
            0%, 100% { opacity: 0.95; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(0.6); }
          }
          
          @keyframes star-twinkle-2 {
            0%, 100% { opacity: 0.92; transform: scale(1); }
            50% { opacity: 0.35; transform: scale(0.58); }
          }
          
          @keyframes star-twinkle-3 {
            0%, 100% { opacity: 0.98; transform: scale(1); }
            50% { opacity: 0.45; transform: scale(0.65); }
          }
          
          @keyframes star-twinkle-4 {
            0%, 100% { opacity: 0.9; transform: scale(1); }
            50% { opacity: 0.38; transform: scale(0.6); }
          }
          
          @keyframes star-twinkle-5 {
            0%, 100% { opacity: 0.93; transform: scale(1); }
            50% { opacity: 0.42; transform: scale(0.62); }
          }
          
          @keyframes star-twinkle-6 {
            0%, 100% { opacity: 0.85; transform: scale(1); }
            50% { opacity: 0.32; transform: scale(0.55); }
          }
          
          @keyframes star-twinkle-7 {
            0%, 100% { opacity: 0.82; transform: scale(1); }
            50% { opacity: 0.3; transform: scale(0.52); }
          }
          
          @keyframes star-twinkle-8 {
            0%, 100% { opacity: 0.88; transform: scale(1); }
            50% { opacity: 0.36; transform: scale(0.58); }
          }
          
          @keyframes star-twinkle-9 {
            0%, 100% { opacity: 0.84; transform: scale(1); }
            50% { opacity: 0.34; transform: scale(0.56); }
          }
          
          @keyframes star-twinkle-10 {
            0%, 100% { opacity: 0.86; transform: scale(1); }
            50% { opacity: 0.35; transform: scale(0.57); }
          }
          
          @keyframes star-twinkle-11 {
            0%, 100% { opacity: 0.75; transform: scale(1); }
            50% { opacity: 0.25; transform: scale(0.5); }
          }
          
          @keyframes star-twinkle-12 {
            0%, 100% { opacity: 0.72; transform: scale(1); }
            50% { opacity: 0.22; transform: scale(0.48); }
          }
          
          @keyframes star-twinkle-13 {
            0%, 100% { opacity: 0.78; transform: scale(1); }
            50% { opacity: 0.28; transform: scale(0.52); }
          }
          
          @keyframes star-twinkle-14 {
            0%, 100% { opacity: 0.74; transform: scale(1); }
            50% { opacity: 0.24; transform: scale(0.5); }
          }
          
          @keyframes star-twinkle-15 {
            0%, 100% { opacity: 0.76; transform: scale(1); }
            50% { opacity: 0.26; transform: scale(0.51); }
          }
          
          @keyframes star-twinkle-16 {
            0%, 100% { opacity: 0.73; transform: scale(1); }
            50% { opacity: 0.23; transform: scale(0.49); }
          }
          
          @keyframes star-twinkle-17 {
            0%, 100% { opacity: 0.77; transform: scale(1); }
            50% { opacity: 0.27; transform: scale(0.52); }
          }
          
          @keyframes star-twinkle-18 {
            0%, 100% { opacity: 0.75; transform: scale(1); }
            50% { opacity: 0.25; transform: scale(0.5); }
          }
          
          /* CLOUD FLOAT ANIMATIONS */
          @keyframes cloud-float-1 {
            0%, 100% { opacity: 0.12; transform: translateX(0px); }
            50% { opacity: 0.22; transform: translateX(15px); }
          }
          
          @keyframes cloud-float-2 {
            0%, 100% { opacity: 0.1; transform: translateX(0px); }
            50% { opacity: 0.2; transform: translateX(-12px); }
          }
          
          @keyframes cloud-float-3 {
            0%, 100% { opacity: 0.14; transform: translateX(0px); }
            50% { opacity: 0.24; transform: translateX(18px); }
          }
          
          @keyframes cloud-float-4 {
            0%, 100% { opacity: 0.11; transform: translateX(0px); }
            50% { opacity: 0.21; transform: translateX(-14px); }
          }
          
          @keyframes cloud-float-5 {
            0%, 100% { opacity: 0.13; transform: translateX(0px); }
            50% { opacity: 0.23; transform: translateX(-16px); }
          }
          
          @keyframes cloud-float-6 {
            0%, 100% { opacity: 0.12; transform: translateX(0px); }
            50% { opacity: 0.22; transform: translateX(13px); }
          }
          
          /* WAVE ANIMATIONS */
          @keyframes wave-1 {
            0%, 100% { opacity: 0.25; transform: scaleX(1); }
            50% { opacity: 0.4; transform: scaleX(1.15); }
          }
          
          @keyframes wave-2 {
            0%, 100% { opacity: 0.22; transform: scaleX(1); }
            50% { opacity: 0.38; transform: scaleX(1.12); }
          }
          
          @keyframes wave-3 {
            0%, 100% { opacity: 0.28; transform: scaleX(1); }
            50% { opacity: 0.42; transform: scaleX(1.18); }
          }
          
          @keyframes wave-4 {
            0%, 100% { opacity: 0.24; transform: scaleX(1); }
            50% { opacity: 0.39; transform: scaleX(1.14); }
          }
          
          @keyframes wave-5 {
            0%, 100% { opacity: 0.26; transform: scaleX(1); }
            50% { opacity: 0.41; transform: scaleX(1.16); }
          }
          
          @keyframes wave-6 {
            0%, 100% { opacity: 0.23; transform: scaleX(1); }
            50% { opacity: 0.37; transform: scaleX(1.13); }
          }
          
          @keyframes wave-7 {
            0%, 100% { opacity: 0.25; transform: scaleX(1); }
            50% { opacity: 0.4; transform: scaleX(1.15); }
          }
          
          @keyframes wave-8 {
            0%, 100% { opacity: 0.27; transform: scaleX(1); }
            50% { opacity: 0.42; transform: scaleX(1.17); }
          }
          
          /* SAILBOAT ANIMATIONS */
          @keyframes sailboat-bob-1 {
            0%, 100% { opacity: 0.35; transform: translateY(0px); }
            50% { opacity: 0.5; transform: translateY(-5px); }
          }
          
          @keyframes sailboat-bob-2 {
            0%, 100% { opacity: 0.32; transform: translateY(0px); }
            50% { opacity: 0.48; transform: translateY(-4px); }
          }
          
          @keyframes sailboat-bob-3 {
            0%, 100% { opacity: 0.3; transform: translateY(0px); }
            50% { opacity: 0.46; transform: translateY(-4.5px); }
          }
          
          @keyframes sailboat-glow-1 {
            0%, 100% { opacity: 0.15; transform: scale(1); }
            50% { opacity: 0.28; transform: scale(1.15); }
          }
          
          @keyframes sailboat-glow-2 {
            0%, 100% { opacity: 0.13; transform: scale(1); }
            50% { opacity: 0.26; transform: scale(1.12); }
          }
          
          @keyframes sailboat-glow-3 {
            0%, 100% { opacity: 0.12; transform: scale(1); }
            50% { opacity: 0.24; transform: scale(1.1); }
          }
          
          /* VEGETATION SWAY ANIMATIONS */
          @keyframes vegetation-sway-1 {
            0%, 100% { opacity: 0.18; transform: rotate(0deg); }
            25% { opacity: 0.28; transform: rotate(2deg); }
            75% { opacity: 0.25; transform: rotate(-2deg); }
          }
          
          @keyframes vegetation-sway-2 {
            0%, 100% { opacity: 0.16; transform: rotate(0deg); }
            30% { opacity: 0.26; transform: rotate(-2.5deg); }
            70% { opacity: 0.23; transform: rotate(2.5deg); }
          }
          
          @keyframes vegetation-sway-3 {
            0%, 100% { opacity: 0.17; transform: rotate(0deg); }
            35% { opacity: 0.27; transform: rotate(2.2deg); }
            65% { opacity: 0.24; transform: rotate(-2.2deg); }
          }
          
          @keyframes vegetation-sway-4 {
            0%, 100% { opacity: 0.2; transform: rotate(0deg); }
            25% { opacity: 0.3; transform: rotate(-2.8deg); }
            75% { opacity: 0.27; transform: rotate(2.8deg); }
          }
          
          @keyframes vegetation-sway-5 {
            0%, 100% { opacity: 0.18; transform: rotate(0deg); }
            30% { opacity: 0.28; transform: rotate(2.5deg); }
            70% { opacity: 0.25; transform: rotate(-2.5deg); }
          }
          
          /* CLIFF SPARKLE ANIMATIONS */
          @keyframes cliff-sparkle-1 {
            0%, 65%, 100% { opacity: 0; transform: scale(1); }
            70%, 80% { opacity: 0.75; transform: scale(2); }
            75% { opacity: 0.45; transform: scale(1.6); }
          }
          
          @keyframes cliff-sparkle-2 {
            0%, 68%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            73%, 83% { opacity: 0.7; transform: scale(1.9) rotate(360deg); }
            78% { opacity: 0.42; transform: scale(1.5) rotate(180deg); }
          }
          
          @keyframes cliff-sparkle-3 {
            0%, 62%, 100% { opacity: 0; transform: scale(1); }
            67%, 77% { opacity: 0.72; transform: scale(1.95); }
            72% { opacity: 0.43; transform: scale(1.55); }
          }
          
          @keyframes cliff-sparkle-4 {
            0%, 70%, 100% { opacity: 0; transform: scale(1); }
            75%, 85% { opacity: 0.68; transform: scale(1.88); }
            80% { opacity: 0.4; transform: scale(1.48); }
          }
          
          /* FOAM SPLASH ANIMATIONS */
          @keyframes foam-splash-1 {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.2); }
          }
          
          @keyframes foam-splash-2 {
            0%, 100% { opacity: 0.25; transform: scale(1); }
            50% { opacity: 0.45; transform: scale(1.18); }
          }
          
          @keyframes foam-splash-3 {
            0%, 100% { opacity: 0.28; transform: scale(1); }
            50% { opacity: 0.48; transform: scale(1.15); }
          }
          
          /* STONE DETAIL ANIMATIONS */
          @keyframes stone-detail-1 {
            0%, 72%, 100% { opacity: 0; transform: scale(1); }
            77%, 87% { opacity: 0.8; transform: scale(1.8); }
            82% { opacity: 0.5; transform: scale(1.4); }
          }
          
          @keyframes stone-detail-2 {
            0%, 68%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            73%, 83% { opacity: 0.75; transform: scale(1.7) rotate(360deg); }
            78% { opacity: 0.45; transform: scale(1.3) rotate(180deg); }
          }
          
          @keyframes stone-detail-3 {
            0%, 75%, 100% { opacity: 0; transform: scale(1); }
            80%, 90% { opacity: 0.78; transform: scale(1.75); }
            85% { opacity: 0.48; transform: scale(1.35); }
          }
          
          @keyframes stone-detail-4 {
            0%, 70%, 100% { opacity: 0; transform: scale(1); }
            75%, 85% { opacity: 0.73; transform: scale(1.72); }
            80% { opacity: 0.43; transform: scale(1.32); }
          }
          
          /* MOONLIGHT GLOW */
          @keyframes moonlight-glow {
            0%, 100% { opacity: 0.08; transform: scale(1); }
            50% { opacity: 0.15; transform: scale(1.1); }
          }
          
          /* PARTICLE FLOAT ANIMATIONS */
          @keyframes particle-float-1 {
            0%, 100% { opacity: 0; transform: translateY(0) translateX(0); }
            50% { opacity: 0.6; transform: translateY(-45px) translateX(12px); }
          }
          
          @keyframes particle-float-2 {
            0%, 100% { opacity: 0; transform: translateY(0) translateX(0); }
            50% { opacity: 0.58; transform: translateY(-42px) translateX(-10px); }
          }
          
          @keyframes particle-float-3 {
            0%, 100% { opacity: 0; transform: translateY(0) translateX(0); }
            50% { opacity: 0.62; transform: translateY(-48px) translateX(14px); }
          }
          
          @keyframes particle-float-4 {
            0%, 100% { opacity: 0; transform: translateY(0) translateX(0); }
            50% { opacity: 0.56; transform: translateY(-40px) translateX(-11px); }
          }
          
          @keyframes particle-float-5 {
            0%, 100% { opacity: 0; transform: translateY(0) translateX(0); }
            50% { opacity: 0.59; transform: translateY(-44px) translateX(13px); }
          }
          
          @keyframes particle-float-6 {
            0%, 100% { opacity: 0; transform: translateY(0) translateX(0); }
            50% { opacity: 0.57; transform: translateY(-43px) translateX(-12px); }
          }
          
          /* ANIMATION CLASS ASSIGNMENTS */
          .animate-lighthouse-beacon-1 { animation: lighthouse-beacon-1 4s ease-in-out infinite; }
          .animate-lighthouse-beacon-2 { animation: lighthouse-beacon-2 5s ease-in-out infinite 1s; }
          .animate-lighthouse-core { animation: lighthouse-core 3s ease-in-out infinite; }
          
          .animate-lighthouse-beam-rotate { animation: lighthouse-beam-rotate 8s linear infinite; }
          .animate-lighthouse-beam-rotate-2 { animation: lighthouse-beam-rotate-2 8s linear infinite; }
          
          .animate-dome-sparkle-1 { animation: dome-sparkle-1 10s linear infinite; }
          .animate-dome-sparkle-2 { animation: dome-sparkle-2 11s linear infinite 2.5s; }
          .animate-dome-sparkle-3 { animation: dome-sparkle-3 10.5s linear infinite 5s; }
          
          .animate-lighthouse-window-1 { animation: lighthouse-window-1 4s ease-in-out infinite; }
          .animate-lighthouse-window-glow { animation: lighthouse-window-glow 4.5s ease-in-out infinite 0.5s; }
          
          .animate-star-twinkle-1 { animation: star-twinkle-1 3s ease-in-out infinite; }
          .animate-star-twinkle-2 { animation: star-twinkle-2 3.5s ease-in-out infinite 0.5s; }
          .animate-star-twinkle-3 { animation: star-twinkle-3 2.8s ease-in-out infinite 1s; }
          .animate-star-twinkle-4 { animation: star-twinkle-4 3.2s ease-in-out infinite 1.5s; }
          .animate-star-twinkle-5 { animation: star-twinkle-5 3.6s ease-in-out infinite 0.8s; }
          .animate-star-twinkle-6 { animation: star-twinkle-6 3.3s ease-in-out infinite 1.2s; }
          .animate-star-twinkle-7 { animation: star-twinkle-7 3.1s ease-in-out infinite 0.3s; }
          .animate-star-twinkle-8 { animation: star-twinkle-8 3.4s ease-in-out infinite 1.8s; }
          .animate-star-twinkle-9 { animation: star-twinkle-9 3.7s ease-in-out infinite 2.2s; }
          .animate-star-twinkle-10 { animation: star-twinkle-10 3.2s ease-in-out infinite 0.6s; }
          .animate-star-twinkle-11 { animation: star-twinkle-11 3.5s ease-in-out infinite 1.4s; }
          .animate-star-twinkle-12 { animation: star-twinkle-12 3.8s ease-in-out infinite 2s; }
          .animate-star-twinkle-13 { animation: star-twinkle-13 3.3s ease-in-out infinite 0.9s; }
          .animate-star-twinkle-14 { animation: star-twinkle-14 3.6s ease-in-out infinite 2.5s; }
          .animate-star-twinkle-15 { animation: star-twinkle-15 3.1s ease-in-out infinite 1.1s; }
          .animate-star-twinkle-16 { animation: star-twinkle-16 3.4s ease-in-out infinite 1.7s; }
          .animate-star-twinkle-17 { animation: star-twinkle-17 3.7s ease-in-out infinite 0.4s; }
          .animate-star-twinkle-18 { animation: star-twinkle-18 3.2s ease-in-out infinite 2.3s; }
          
          .animate-cloud-float-1 { animation: cloud-float-1 20s ease-in-out infinite; }
          .animate-cloud-float-2 { animation: cloud-float-2 22s ease-in-out infinite 3s; }
          .animate-cloud-float-3 { animation: cloud-float-3 24s ease-in-out infinite 6s; }
          .animate-cloud-float-4 { animation: cloud-float-4 21s ease-in-out infinite 2s; }
          .animate-cloud-float-5 { animation: cloud-float-5 23s ease-in-out infinite 8s; }
          .animate-cloud-float-6 { animation: cloud-float-6 25s ease-in-out infinite 4s; }
          
          .animate-wave-1 { animation: wave-1 3s ease-in-out infinite; }
          .animate-wave-2 { animation: wave-2 3.5s ease-in-out infinite 0.5s; }
          .animate-wave-3 { animation: wave-3 3.2s ease-in-out infinite 1s; }
          .animate-wave-4 { animation: wave-4 3.8s ease-in-out infinite 1.5s; }
          .animate-wave-5 { animation: wave-5 3.4s ease-in-out infinite 0.8s; }
          .animate-wave-6 { animation: wave-6 3.6s ease-in-out infinite 1.3s; }
          .animate-wave-7 { animation: wave-7 3.3s ease-in-out infinite 0.3s; }
          .animate-wave-8 { animation: wave-8 3.7s ease-in-out infinite 1.8s; }
          
          .animate-sailboat-bob-1 { animation: sailboat-bob-1 4s ease-in-out infinite; }
          .animate-sailboat-bob-2 { animation: sailboat-bob-2 4.5s ease-in-out infinite 1s; }
          .animate-sailboat-bob-3 { animation: sailboat-bob-3 4.2s ease-in-out infinite 2s; }
          
          .animate-sailboat-glow-1 { animation: sailboat-glow-1 5s ease-in-out infinite; }
          .animate-sailboat-glow-2 { animation: sailboat-glow-2 5.5s ease-in-out infinite 1s; }
          .animate-sailboat-glow-3 { animation: sailboat-glow-3 5.2s ease-in-out infinite 2s; }
          
          .animate-vegetation-sway-1 { animation: vegetation-sway-1 6s ease-in-out infinite; }
          .animate-vegetation-sway-2 { animation: vegetation-sway-2 6.5s ease-in-out infinite 1s; }
          .animate-vegetation-sway-3 { animation: vegetation-sway-3 6.2s ease-in-out infinite 2s; }
          .animate-vegetation-sway-4 { animation: vegetation-sway-4 7s ease-in-out infinite 0.5s; }
          .animate-vegetation-sway-5 { animation: vegetation-sway-5 6.8s ease-in-out infinite 1.5s; }
          
          .animate-cliff-sparkle-1 { animation: cliff-sparkle-1 9s linear infinite; }
          .animate-cliff-sparkle-2 { animation: cliff-sparkle-2 10s linear infinite 2s; }
          .animate-cliff-sparkle-3 { animation: cliff-sparkle-3 9.5s linear infinite 4s; }
          .animate-cliff-sparkle-4 { animation: cliff-sparkle-4 10.5s linear infinite 6s; }
          
          .animate-foam-splash-1 { animation: foam-splash-1 3s ease-in-out infinite; }
          .animate-foam-splash-2 { animation: foam-splash-2 3.5s ease-in-out infinite 0.8s; }
          .animate-foam-splash-3 { animation: foam-splash-3 3.2s ease-in-out infinite 1.5s; }
          
          .animate-stone-detail-1 { animation: stone-detail-1 8s linear infinite; }
          .animate-stone-detail-2 { animation: stone-detail-2 9s linear infinite 2s; }
          .animate-stone-detail-3 { animation: stone-detail-3 8.5s linear infinite 4s; }
          .animate-stone-detail-4 { animation: stone-detail-4 9.5s linear infinite 6s; }
          
          .animate-moonlight-glow { animation: moonlight-glow 12s ease-in-out infinite; }
          
          .animate-particle-float-1 { animation: particle-float-1 14s ease-in-out infinite; }
          .animate-particle-float-2 { animation: particle-float-2 16s ease-in-out infinite 2s; }
          .animate-particle-float-3 { animation: particle-float-3 15s ease-in-out infinite 4s; }
          .animate-particle-float-4 { animation: particle-float-4 17s ease-in-out infinite 1s; }
          .animate-particle-float-5 { animation: particle-float-5 14.5s ease-in-out infinite 6s; }
          .animate-particle-float-6 { animation: particle-float-6 16.5s ease-in-out infinite 3s; }
          `}</style>
          </div>
        )}
      </div>
    </Card>
  );
}

