"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Island4Module5Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        {/* Base image */}
        <Image
          src="/islands/island4/island4-module5-image.webp"
          alt="Gas Optimization & Security Patterns - Gilded Bastion Adventure"
          fill
          className="object-cover"
          priority
        />
        
        {/* EPIC Animated overlay effects */}
        <div className="absolute inset-0 animate-effects">
          {/* LEGENDARY Lighthouse Beacon - ROTATING */}
          <div className="absolute inset-0">
            {/* Epic lighthouse top glow */}
            <div className="absolute top-[18%] left-[49%] w-[90px] h-[90px] bg-yellow-300/45 rounded-full lighthouse-beacon animate-lighthouse-beacon-1"></div>
            <div className="absolute top-[19%] left-[49.5%] w-[70px] h-[70px] bg-amber-300/50 rounded-full lighthouse-beacon animate-lighthouse-beacon-2"></div>
            <div className="absolute top-[20%] left-[50%] w-[50px] h-[50px] bg-yellow-100/55 rounded-full lighthouse-core animate-lighthouse-core"></div>
            
            {/* Rotating lighthouse beam rays - EPIC */}
            <div className="absolute top-[20%] left-[50.5%] w-[350px] h-[5px] bg-gradient-to-r from-transparent via-yellow-300/70 to-transparent lighthouse-beam animate-lighthouse-beam-rotate"></div>
            <div className="absolute top-[20%] left-[50.5%] w-[320px] h-[4px] bg-gradient-to-r from-transparent via-amber-200/60 to-transparent lighthouse-beam animate-lighthouse-beam-rotate-2"></div>
            
            {/* Lighthouse dome sparkles */}
            <div className="absolute top-[18%] left-[50.5%] w-[5px] h-[5px] bg-white/98 rounded-full dome-sparkle animate-dome-sparkle-1"></div>
            <div className="absolute top-[19%] left-[49.5%] w-[4px] h-[4px] bg-yellow-200/95 rounded-full dome-sparkle animate-dome-sparkle-2"></div>
            <div className="absolute top-[19%] left-[51.5%] w-[4px] h-[4px] bg-amber-200/93 rounded-full dome-sparkle animate-dome-sparkle-3"></div>
          </div>

          {/* Lighthouse Tower Windows - GLOWING */}
          <div className="absolute inset-0">
            {/* Top observation windows */}
            <div className="absolute top-[24%] left-[49%] w-[4px] h-[5px] bg-yellow-300/92 rounded window-glow animate-lighthouse-window-1"></div>
            <div className="absolute top-[24%] left-[51%] w-[4px] h-[5px] bg-amber-300/90 rounded window-glow animate-lighthouse-window-2"></div>
            
            {/* Mid-tower windows */}
            <div className="absolute top-[32%] left-[49%] w-[4px] h-[5px] bg-yellow-300/90 rounded window-glow animate-lighthouse-window-3"></div>
            <div className="absolute top-[32%] left-[51%] w-[4px] h-[5px] bg-amber-300/88 rounded window-glow animate-lighthouse-window-4"></div>
            
            {/* Lower tower windows */}
            <div className="absolute top-[40%] left-[49%] w-[4px] h-[5px] bg-yellow-300/88 rounded window-glow animate-lighthouse-window-5"></div>
            <div className="absolute top-[40%] left-[51%] w-[4px] h-[5px] bg-amber-300/86 rounded window-glow animate-lighthouse-window-6"></div>
          </div>

          {/* Building Window Lights - LEFT SIDE */}
          <div className="absolute inset-0">
            {/* Far left upper buildings */}
            <div className="absolute top-[28%] left-[8%] w-[3px] h-[4px] bg-orange-300/85 rounded window-light animate-window-light-1"></div>
            <div className="absolute top-[32%] left-[6%] w-[3px] h-[4px] bg-yellow-300/82 rounded window-light animate-window-light-2"></div>
            <div className="absolute top-[36%] left-[10%] w-[3px] h-[4px] bg-orange-300/88 rounded window-light animate-window-light-3"></div>
            
            {/* Left mid buildings */}
            <div className="absolute top-[30%] left-[18%] w-[3px] h-[4px] bg-yellow-300/86 rounded window-light animate-window-light-4"></div>
            <div className="absolute top-[34%] left-[15%] w-[3px] h-[4px] bg-orange-300/84 rounded window-light animate-window-light-5"></div>
            <div className="absolute top-[38%] left-[20%] w-[3px] h-[4px] bg-yellow-300/88 rounded window-light animate-window-light-6"></div>
            <div className="absolute top-[42%] left-[17%] w-[3px] h-[4px] bg-orange-300/86 rounded window-light animate-window-light-7"></div>
            
            {/* Center-left near lighthouse */}
            <div className="absolute top-[32%] left-[28%] w-[3px] h-[4px] bg-yellow-300/85 rounded window-light animate-window-light-8"></div>
            <div className="absolute top-[36%] left-[32%] w-[3px] h-[4px] bg-orange-300/87 rounded window-light animate-window-light-9"></div>
            <div className="absolute top-[40%] left-[35%] w-[3px] h-[4px] bg-yellow-300/83 rounded window-light animate-window-light-10"></div>
          </div>

          {/* Building Window Lights - RIGHT SIDE */}
          <div className="absolute inset-0">
            {/* Center-right near lighthouse */}
            <div className="absolute top-[32%] left-[65%] w-[3px] h-[4px] bg-orange-300/86 rounded window-light animate-window-light-11"></div>
            <div className="absolute top-[36%] left-[68%] w-[3px] h-[4px] bg-yellow-300/84 rounded window-light animate-window-light-12"></div>
            <div className="absolute top-[40%] left-[70%] w-[3px] h-[4px] bg-orange-300/88 rounded window-light animate-window-light-13"></div>
            
            {/* Right mid buildings */}
            <div className="absolute top-[30%] left-[78%] w-[3px] h-[4px] bg-yellow-300/85 rounded window-light animate-window-light-14"></div>
            <div className="absolute top-[34%] left-[82%] w-[3px] h-[4px] bg-orange-300/83 rounded window-light animate-window-light-15"></div>
            <div className="absolute top-[38%] left-[85%] w-[3px] h-[4px] bg-yellow-300/87 rounded window-light animate-window-light-16"></div>
            <div className="absolute top-[42%] left-[88%] w-[3px] h-[4px] bg-orange-300/85 rounded window-light animate-window-light-17"></div>
            
            {/* Far right upper buildings */}
            <div className="absolute top-[28%] left-[92%] w-[3px] h-[4px] bg-yellow-300/82 rounded window-light animate-window-light-18"></div>
            <div className="absolute top-[32%] left-[94%] w-[3px] h-[4px] bg-orange-300/86 rounded window-light animate-window-light-19"></div>
            <div className="absolute top-[36%] left-[90%] w-[3px] h-[4px] bg-yellow-300/84 rounded window-light animate-window-light-20"></div>
          </div>

          {/* Foreground Building Window Lights - LARGER */}
          <div className="absolute inset-0">
            {/* Left foreground building */}
            <div className="absolute top-[52%] left-[12%] w-[4px] h-[5px] bg-yellow-300/92 rounded window-light animate-window-light-fg-1"></div>
            <div className="absolute top-[56%] left-[10%] w-[4px] h-[5px] bg-orange-300/90 rounded window-light animate-window-light-fg-2"></div>
            <div className="absolute top-[60%] left-[14%] w-[4px] h-[5px] bg-yellow-300/94 rounded window-light animate-window-light-fg-3"></div>
            
            {/* Right foreground building */}
            <div className="absolute top-[52%] left-[85%] w-[4px] h-[5px] bg-orange-300/92 rounded window-light animate-window-light-fg-4"></div>
            <div className="absolute top-[56%] left-[88%] w-[4px] h-[5px] bg-yellow-300/90 rounded window-light animate-window-light-fg-5"></div>
            <div className="absolute top-[60%] left-[86%] w-[4px] h-[5px] bg-orange-300/94 rounded window-light animate-window-light-fg-6"></div>
          </div>

          {/* Street Lamp Glows */}
          <div className="absolute inset-0">
            {/* Left side lamps */}
            <div className="absolute top-[56%] left-[24%] w-[10px] h-[12px] bg-yellow-300/75 rounded-full lamp-glow animate-lamp-glow-1"></div>
            <div className="absolute top-[62%] left-[18%] w-[10px] h-[12px] bg-amber-300/72 rounded-full lamp-glow animate-lamp-glow-2"></div>
            
            {/* Center lamps near lighthouse */}
            <div className="absolute top-[58%] left-[40%] w-[10px] h-[12px] bg-yellow-300/73 rounded-full lamp-glow animate-lamp-glow-3"></div>
            <div className="absolute top-[58%] left-[60%] w-[10px] h-[12px] bg-amber-300/74 rounded-full lamp-glow animate-lamp-glow-4"></div>
            
            {/* Right side lamps */}
            <div className="absolute top-[56%] left-[76%] w-[10px] h-[12px] bg-yellow-300/72 rounded-full lamp-glow animate-lamp-glow-5"></div>
            <div className="absolute top-[62%] left-[82%] w-[10px] h-[12px] bg-amber-300/70 rounded-full lamp-glow animate-lamp-glow-6"></div>
          </div>

          {/* Red Roof Tile Sparkles */}
          <div className="absolute inset-0">
            {/* Left roofs */}
            <div className="absolute top-[24%] left-[12%] w-[3px] h-[3px] bg-red-300/85 rounded-full roof-sparkle animate-roof-sparkle-1"></div>
            <div className="absolute top-[28%] left-[18%] w-[3px] h-[3px] bg-orange-300/82 rounded-full roof-sparkle animate-roof-sparkle-2"></div>
            <div className="absolute top-[32%] left-[22%] w-[3px] h-[3px] bg-red-300/88 rounded-full roof-sparkle animate-roof-sparkle-3"></div>
            
            {/* Center roofs */}
            <div className="absolute top-[26%] left-[38%] w-[3px] h-[3px] bg-orange-300/86 rounded-full roof-sparkle animate-roof-sparkle-4"></div>
            <div className="absolute top-[30%] left-[62%] w-[3px] h-[3px] bg-red-300/84 rounded-full roof-sparkle animate-roof-sparkle-5"></div>
            
            {/* Right roofs */}
            <div className="absolute top-[24%] left-[78%] w-[3px] h-[3px] bg-red-300/86 rounded-full roof-sparkle animate-roof-sparkle-6"></div>
            <div className="absolute top-[28%] left-[85%] w-[3px] h-[3px] bg-orange-300/83 rounded-full roof-sparkle animate-roof-sparkle-7"></div>
            <div className="absolute top-[32%] left-[90%] w-[3px] h-[3px] bg-red-300/87 rounded-full roof-sparkle animate-roof-sparkle-8"></div>
            
            {/* Foreground roofs - larger */}
            <div className="absolute top-[48%] left-[8%] w-[4px] h-[4px] bg-red-300/90 rounded-full roof-sparkle animate-roof-sparkle-9"></div>
            <div className="absolute top-[48%] left-[88%] w-[4px] h-[4px] bg-orange-300/88 rounded-full roof-sparkle animate-roof-sparkle-10"></div>
          </div>

          {/* Lighthouse Stone Edge Sparkles */}
          <div className="absolute inset-0">
            <div className="absolute top-[28%] left-[48%] w-[3px] h-[3px] bg-white/88 rounded-full stone-sparkle animate-stone-sparkle-1"></div>
            <div className="absolute top-[30%] left-[52%] w-[3px] h-[3px] bg-cyan-100/86 rounded-full stone-sparkle animate-stone-sparkle-2"></div>
            <div className="absolute top-[36%] left-[47%] w-[3px] h-[3px] bg-white/90 rounded-full stone-sparkle animate-stone-sparkle-3"></div>
            <div className="absolute top-[38%] left-[53%] w-[3px] h-[3px] bg-cyan-100/88 rounded-full stone-sparkle animate-stone-sparkle-4"></div>
            <div className="absolute top-[44%] left-[48.5%] w-[3px] h-[3px] bg-white/87 rounded-full stone-sparkle animate-stone-sparkle-5"></div>
            <div className="absolute top-[46%] left-[51.5%] w-[3px] h-[3px] bg-cyan-100/85 rounded-full stone-sparkle animate-stone-sparkle-6"></div>
          </div>

          {/* Foliage Shimmer - Trees */}
          <div className="absolute inset-0">
            {/* Left side trees */}
            <div className="absolute top-[15%] left-[5%] w-[55px] h-[48px] bg-green-300/14 rounded-full foliage-glow animate-foliage-glow-1"></div>
            <div className="absolute top-[22%] left-[8%] w-[50px] h-[45px] bg-emerald-300/12 rounded-full foliage-glow animate-foliage-glow-2"></div>
            
            {/* Right side trees */}
            <div className="absolute top-[15%] right-[5%] w-[58px] h-[50px] bg-green-300/15 rounded-full foliage-glow animate-foliage-glow-3"></div>
            <div className="absolute top-[22%] right-[8%] w-[52px] h-[46px] bg-emerald-300/13 rounded-full foliage-glow animate-foliage-glow-4"></div>
            
            {/* Background trees */}
            <div className="absolute top-[18%] left-[28%] w-[45px] h-[40px] bg-green-300/11 rounded-full foliage-glow animate-foliage-glow-5"></div>
            <div className="absolute top-[20%] right-[28%] w-[46px] h-[42px] bg-emerald-300/12 rounded-full foliage-glow animate-foliage-glow-6"></div>
          </div>

          {/* Floating Coastal Particles */}
          <div className="absolute inset-0">
            {/* Upper area particles */}
            <div className="absolute top-[25%] left-[35%] w-[3px] h-[3px] bg-cyan-200/70 rounded-full dust-particle animate-coastal-dust-1"></div>
            <div className="absolute top-[28%] left-[45%] w-[3px] h-[3px] bg-blue-200/68 rounded-full dust-particle animate-coastal-dust-2"></div>
            <div className="absolute top-[30%] left-[55%] w-[4px] h-[4px] bg-cyan-200/75 rounded-full dust-particle animate-coastal-dust-3"></div>
            <div className="absolute top-[32%] left-[65%] w-[3px] h-[3px] bg-blue-200/70 rounded-full dust-particle animate-coastal-dust-4"></div>
            
            {/* Mid-air particles */}
            <div className="absolute top-[42%] left-[25%] w-[2px] h-[2px] bg-cyan-200/65 rounded-full dust-particle animate-coastal-dust-5"></div>
            <div className="absolute top-[45%] left-[50%] w-[2px] h-[2px] bg-blue-200/68 rounded-full dust-particle animate-coastal-dust-6"></div>
            <div className="absolute top-[48%] left-[75%] w-[2px] h-[2px] bg-cyan-200/62 rounded-full dust-particle animate-coastal-dust-7"></div>
          </div>

          {/* Cobblestone Path Shimmer */}
          <div className="absolute inset-0">
            <div className="absolute top-[68%] left-[38%] w-[35px] h-[18px] bg-yellow-200/16 rounded-full path-shimmer animate-path-shimmer-1"></div>
            <div className="absolute top-[72%] left-[45%] w-[38px] h-[20px] bg-amber-200/14 rounded-full path-shimmer animate-path-shimmer-2"></div>
            <div className="absolute top-[76%] left-[50%] w-[36px] h-[19px] bg-yellow-200/18 rounded-full path-shimmer animate-path-shimmer-3"></div>
            <div className="absolute top-[80%] left-[55%] w-[32px] h-[16px] bg-amber-200/15 rounded-full path-shimmer animate-path-shimmer-4"></div>
          </div>

          {/* Localized Sun Rays */}
          <div className="absolute inset-0">
            <div className="absolute top-[0%] left-[25%] w-[100px] h-[45%] bg-gradient-to-b from-yellow-200/16 via-amber-100/9 to-transparent sun-ray animate-sun-ray-1"></div>
            <div className="absolute top-[0%] left-[65%] w-[110px] h-[48%] bg-gradient-to-b from-amber-200/18 via-yellow-100/10 to-transparent sun-ray animate-sun-ray-2"></div>
          </div>
        </div>
        
        <style jsx>{`
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
            filter: blur(5px);
            box-shadow: 0 0 25px currentColor, 0 0 50px currentColor, 0 0 75px currentColor;
          }
          
          .window-light {
            filter: blur(4px);
            box-shadow: 0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor;
          }
          
          .lamp-glow {
            filter: blur(10px);
            box-shadow: 0 0 30px currentColor, 0 0 60px currentColor;
          }
          
          .roof-sparkle {
            box-shadow: 0 0 20px currentColor, 0 0 40px currentColor;
            filter: blur(0.4px);
          }
          
          .stone-sparkle {
            box-shadow: 0 0 22px currentColor, 0 0 44px currentColor, 0 0 66px currentColor;
            filter: blur(0.3px);
          }
          
          .foliage-glow {
            filter: blur(25px);
          }
          
          .dust-particle {
            box-shadow: 0 0 12px currentColor, 0 0 24px currentColor;
            filter: blur(0.5px);
          }
          
          .path-shimmer {
            filter: blur(16px);
          }
          
          .sun-ray {
            filter: blur(35px);
            opacity: 0;
          }
          
          .animate-effects .lighthouse-beacon {
            animation-play-state: running;
          }
          
          .animate-effects .lighthouse-core {
            animation-play-state: running;
          }
          
          .animate-effects .lighthouse-beam {
            animation-play-state: running;
          }
          
          .animate-effects .dome-sparkle {
            animation-play-state: running;
          }
          
          .animate-effects .window-glow {
            animation-play-state: running;
          }
          
          .animate-effects .window-light {
            animation-play-state: running;
          }
          
          .animate-effects .lamp-glow {
            animation-play-state: running;
          }
          
          .animate-effects .roof-sparkle {
            animation-play-state: running;
          }
          
          .animate-effects .stone-sparkle {
            animation-play-state: running;
          }
          
          .animate-effects .foliage-glow {
            animation-play-state: running;
          }
          
          .animate-effects .dust-particle {
            animation-play-state: running;
          }
          
          .animate-effects .path-shimmer {
            animation-play-state: running;
          }
          
          .animate-effects .sun-ray {
            animation-play-state: running;
          }
          
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
            0%, 100% { opacity: 0.92; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.5); }
          }
          
          @keyframes lighthouse-window-2 {
            0%, 100% { opacity: 0.9; transform: scale(1); }
            60% { opacity: 1; transform: scale(1.48); }
          }
          
          @keyframes lighthouse-window-3 {
            0%, 100% { opacity: 0.9; transform: scale(1); }
            55% { opacity: 1; transform: scale(1.46); }
          }
          
          @keyframes lighthouse-window-4 {
            0%, 100% { opacity: 0.88; transform: scale(1); }
            58% { opacity: 1; transform: scale(1.44); }
          }
          
          @keyframes lighthouse-window-5 {
            0%, 100% { opacity: 0.88; transform: scale(1); }
            52% { opacity: 1; transform: scale(1.42); }
          }
          
          @keyframes lighthouse-window-6 {
            0%, 100% { opacity: 0.86; transform: scale(1); }
            56% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes window-light-1 {
            0%, 100% { opacity: 0.85; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes window-light-2 {
            0%, 100% { opacity: 0.82; transform: scale(1); }
            60% { opacity: 1; transform: scale(1.38); }
          }
          
          @keyframes window-light-3 {
            0%, 100% { opacity: 0.88; transform: scale(1); }
            55% { opacity: 1; transform: scale(1.42); }
          }
          
          @keyframes window-light-4 {
            0%, 100% { opacity: 0.86; transform: scale(1); }
            52% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes window-light-5 {
            0%, 100% { opacity: 0.84; transform: scale(1); }
            58% { opacity: 1; transform: scale(1.38); }
          }
          
          @keyframes window-light-6 {
            0%, 100% { opacity: 0.88; transform: scale(1); }
            48% { opacity: 1; transform: scale(1.42); }
          }
          
          @keyframes window-light-7 {
            0%, 100% { opacity: 0.86; transform: scale(1); }
            54% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes window-light-8 {
            0%, 100% { opacity: 0.85; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.38); }
          }
          
          @keyframes window-light-9 {
            0%, 100% { opacity: 0.87; transform: scale(1); }
            62% { opacity: 1; transform: scale(1.44); }
          }
          
          @keyframes window-light-10 {
            0%, 100% { opacity: 0.83; transform: scale(1); }
            56% { opacity: 1; transform: scale(1.36); }
          }
          
          @keyframes window-light-11 {
            0%, 100% { opacity: 0.86; transform: scale(1); }
            51% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes window-light-12 {
            0%, 100% { opacity: 0.84; transform: scale(1); }
            59% { opacity: 1; transform: scale(1.38); }
          }
          
          @keyframes window-light-13 {
            0%, 100% { opacity: 0.88; transform: scale(1); }
            53% { opacity: 1; transform: scale(1.42); }
          }
          
          @keyframes window-light-14 {
            0%, 100% { opacity: 0.85; transform: scale(1); }
            57% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes window-light-15 {
            0%, 100% { opacity: 0.83; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.36); }
          }
          
          @keyframes window-light-16 {
            0%, 100% { opacity: 0.87; transform: scale(1); }
            54% { opacity: 1; transform: scale(1.42); }
          }
          
          @keyframes window-light-17 {
            0%, 100% { opacity: 0.85; transform: scale(1); }
            60% { opacity: 1; transform: scale(1.38); }
          }
          
          @keyframes window-light-18 {
            0%, 100% { opacity: 0.82; transform: scale(1); }
            52% { opacity: 1; transform: scale(1.36); }
          }
          
          @keyframes window-light-19 {
            0%, 100% { opacity: 0.86; transform: scale(1); }
            58% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes window-light-20 {
            0%, 100% { opacity: 0.84; transform: scale(1); }
            56% { opacity: 1; transform: scale(1.38); }
          }
          
          @keyframes window-light-fg-1 {
            0%, 100% { opacity: 0.92; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.48); }
          }
          
          @keyframes window-light-fg-2 {
            0%, 100% { opacity: 0.9; transform: scale(1); }
            60% { opacity: 1; transform: scale(1.46); }
          }
          
          @keyframes window-light-fg-3 {
            0%, 100% { opacity: 0.94; transform: scale(1); }
            55% { opacity: 1; transform: scale(1.5); }
          }
          
          @keyframes window-light-fg-4 {
            0%, 100% { opacity: 0.92; transform: scale(1); }
            52% { opacity: 1; transform: scale(1.48); }
          }
          
          @keyframes window-light-fg-5 {
            0%, 100% { opacity: 0.9; transform: scale(1); }
            56% { opacity: 1; transform: scale(1.46); }
          }
          
          @keyframes window-light-fg-6 {
            0%, 100% { opacity: 0.94; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.5); }
          }
          
          @keyframes lamp-glow-1 {
            0%, 100% { opacity: 0.75; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes lamp-glow-2 {
            0%, 100% { opacity: 0.72; transform: scale(1); }
            60% { opacity: 1; transform: scale(1.38); }
          }
          
          @keyframes lamp-glow-3 {
            0%, 100% { opacity: 0.73; transform: scale(1); }
            55% { opacity: 1; transform: scale(1.42); }
          }
          
          @keyframes lamp-glow-4 {
            0%, 100% { opacity: 0.74; transform: scale(1); }
            58% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes lamp-glow-5 {
            0%, 100% { opacity: 0.72; transform: scale(1); }
            52% { opacity: 1; transform: scale(1.38); }
          }
          
          @keyframes lamp-glow-6 {
            0%, 100% { opacity: 0.7; transform: scale(1); }
            56% { opacity: 0.98; transform: scale(1.36); }
          }
          
          @keyframes roof-sparkle-1 {
            0%, 70%, 100% { opacity: 0; transform: scale(1); }
            75%, 85% { opacity: 0.85; transform: scale(2.2); }
            80% { opacity: 0.5; transform: scale(1.8); }
          }
          
          @keyframes roof-sparkle-2 {
            0%, 72%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            77%, 87% { opacity: 0.82; transform: scale(2.1) rotate(360deg); }
            82% { opacity: 0.48; transform: scale(1.7) rotate(180deg); }
          }
          
          @keyframes roof-sparkle-3 {
            0%, 68%, 100% { opacity: 0; transform: scale(1); }
            73%, 83% { opacity: 0.88; transform: scale(2.3); }
            78% { opacity: 0.52; transform: scale(1.9); }
          }
          
          @keyframes roof-sparkle-4 {
            0%, 74%, 100% { opacity: 0; transform: scale(1); }
            79%, 89% { opacity: 0.86; transform: scale(2.2); }
            84% { opacity: 0.51; transform: scale(1.8); }
          }
          
          @keyframes roof-sparkle-5 {
            0%, 66%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            71%, 81% { opacity: 0.84; transform: scale(2.15) rotate(360deg); }
            76% { opacity: 0.49; transform: scale(1.75) rotate(180deg); }
          }
          
          @keyframes roof-sparkle-6 {
            0%, 76%, 100% { opacity: 0; transform: scale(1); }
            81%, 91% { opacity: 0.86; transform: scale(2.2); }
            86% { opacity: 0.51; transform: scale(1.8); }
          }
          
          @keyframes roof-sparkle-7 {
            0%, 64%, 100% { opacity: 0; transform: scale(1); }
            69%, 79% { opacity: 0.83; transform: scale(2.18); }
            74% { opacity: 0.48; transform: scale(1.78); }
          }
          
          @keyframes roof-sparkle-8 {
            0%, 78%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            83%, 93% { opacity: 0.87; transform: scale(2.25) rotate(360deg); }
            88% { opacity: 0.52; transform: scale(1.85) rotate(180deg); }
          }
          
          @keyframes roof-sparkle-9 {
            0%, 62%, 100% { opacity: 0; transform: scale(1); }
            67%, 77% { opacity: 0.9; transform: scale(2.4); }
            72% { opacity: 0.55; transform: scale(2); }
          }
          
          @keyframes roof-sparkle-10 {
            0%, 65%, 100% { opacity: 0; transform: scale(1); }
            70%, 80% { opacity: 0.88; transform: scale(2.35); }
            75% { opacity: 0.53; transform: scale(1.95); }
          }
          
          @keyframes stone-sparkle-1 {
            0%, 70%, 100% { opacity: 0; transform: scale(1); }
            75%, 85% { opacity: 0.88; transform: scale(2.2); }
            80% { opacity: 0.54; transform: scale(1.8); }
          }
          
          @keyframes stone-sparkle-2 {
            0%, 72%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            77%, 87% { opacity: 0.86; transform: scale(2.1) rotate(360deg); }
            82% { opacity: 0.52; transform: scale(1.7) rotate(180deg); }
          }
          
          @keyframes stone-sparkle-3 {
            0%, 68%, 100% { opacity: 0; transform: scale(1); }
            73%, 83% { opacity: 0.9; transform: scale(2.25); }
            78% { opacity: 0.56; transform: scale(1.85); }
          }
          
          @keyframes stone-sparkle-4 {
            0%, 74%, 100% { opacity: 0; transform: scale(1); }
            79%, 89% { opacity: 0.88; transform: scale(2.2); }
            84% { opacity: 0.54; transform: scale(1.8); }
          }
          
          @keyframes stone-sparkle-5 {
            0%, 66%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            71%, 81% { opacity: 0.87; transform: scale(2.15) rotate(360deg); }
            76% { opacity: 0.53; transform: scale(1.75) rotate(180deg); }
          }
          
          @keyframes stone-sparkle-6 {
            0%, 76%, 100% { opacity: 0; transform: scale(1); }
            81%, 91% { opacity: 0.85; transform: scale(2.12); }
            86% { opacity: 0.51; transform: scale(1.72); }
          }
          
          @keyframes foliage-glow-1 {
            0%, 100% { opacity: 0.14; transform: scale(1); }
            50% { opacity: 0.28; transform: scale(1.18); }
          }
          
          @keyframes foliage-glow-2 {
            0%, 100% { opacity: 0.12; transform: scale(1); }
            60% { opacity: 0.26; transform: scale(1.15); }
          }
          
          @keyframes foliage-glow-3 {
            0%, 100% { opacity: 0.15; transform: scale(1); }
            55% { opacity: 0.3; transform: scale(1.2); }
          }
          
          @keyframes foliage-glow-4 {
            0%, 100% { opacity: 0.13; transform: scale(1); }
            58% { opacity: 0.28; transform: scale(1.17); }
          }
          
          @keyframes foliage-glow-5 {
            0%, 100% { opacity: 0.11; transform: scale(1); }
            52% { opacity: 0.24; transform: scale(1.14); }
          }
          
          @keyframes foliage-glow-6 {
            0%, 100% { opacity: 0.12; transform: scale(1); }
            56% { opacity: 0.26; transform: scale(1.16); }
          }
          
          @keyframes coastal-dust-1 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.7; transform: translateY(-60px) translateX(25px) rotate(180deg); }
          }
          
          @keyframes coastal-dust-2 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.68; transform: translateY(-55px) translateX(-22px) rotate(200deg); }
          }
          
          @keyframes coastal-dust-3 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.75; transform: translateY(-65px) translateX(28px) rotate(190deg); }
          }
          
          @keyframes coastal-dust-4 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.7; transform: translateY(-58px) translateX(-24px) rotate(210deg); }
          }
          
          @keyframes coastal-dust-5 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.65; transform: translateY(-50px) translateX(18px); }
          }
          
          @keyframes coastal-dust-6 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.68; transform: translateY(-52px) translateX(-16px); }
          }
          
          @keyframes coastal-dust-7 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.62; transform: translateY(-55px) translateX(20px); }
          }
          
          @keyframes path-shimmer-1 {
            0%, 100% { opacity: 0.16; transform: scale(1); }
            50% { opacity: 0.32; transform: scale(1.2); }
          }
          
          @keyframes path-shimmer-2 {
            0%, 100% { opacity: 0.14; transform: scale(1) rotate(0deg); }
            60% { opacity: 0.3; transform: scale(1.18) rotate(10deg); }
          }
          
          @keyframes path-shimmer-3 {
            0%, 100% { opacity: 0.18; transform: scale(1); }
            55% { opacity: 0.35; transform: scale(1.22); }
          }
          
          @keyframes path-shimmer-4 {
            0%, 100% { opacity: 0.15; transform: scale(1) rotate(0deg); }
            58% { opacity: 0.31; transform: scale(1.15) rotate(-10deg); }
          }
          
          @keyframes sun-ray-1 {
            0%, 100% { opacity: 0; transform: translateY(0px); }
            50% { opacity: 0.26; transform: translateY(-12px); }
          }
          
          @keyframes sun-ray-2 {
            0%, 100% { opacity: 0; transform: translateY(0px); }
            60% { opacity: 0.3; transform: translateY(-15px); }
          }
          
          .animate-lighthouse-beacon-1 { animation: lighthouse-beacon-1 4s ease-in-out infinite; }
          .animate-lighthouse-beacon-2 { animation: lighthouse-beacon-2 5s ease-in-out infinite 1s; }
          .animate-lighthouse-core { animation: lighthouse-core 3s ease-in-out infinite; }
          
          .animate-lighthouse-beam-rotate { animation: lighthouse-beam-rotate 8s linear infinite; }
          .animate-lighthouse-beam-rotate-2 { animation: lighthouse-beam-rotate-2 8s linear infinite; }
          
          .animate-dome-sparkle-1 { animation: dome-sparkle-1 10s linear infinite; }
          .animate-dome-sparkle-2 { animation: dome-sparkle-2 11s linear infinite 2.5s; }
          .animate-dome-sparkle-3 { animation: dome-sparkle-3 10.5s linear infinite 5s; }
          
          .animate-lighthouse-window-1 { animation: lighthouse-window-1 4s ease-in-out infinite; }
          .animate-lighthouse-window-2 { animation: lighthouse-window-2 4.5s ease-in-out infinite 0.5s; }
          .animate-lighthouse-window-3 { animation: lighthouse-window-3 4.2s ease-in-out infinite 1s; }
          .animate-lighthouse-window-4 { animation: lighthouse-window-4 4.7s ease-in-out infinite 1.5s; }
          .animate-lighthouse-window-5 { animation: lighthouse-window-5 4.4s ease-in-out infinite 2s; }
          .animate-lighthouse-window-6 { animation: lighthouse-window-6 4.6s ease-in-out infinite 2.5s; }
          
          .animate-window-light-1 { animation: window-light-1 5s ease-in-out infinite; }
          .animate-window-light-2 { animation: window-light-2 5.5s ease-in-out infinite 0.5s; }
          .animate-window-light-3 { animation: window-light-3 5.2s ease-in-out infinite 1s; }
          .animate-window-light-4 { animation: window-light-4 5.8s ease-in-out infinite 1.5s; }
          .animate-window-light-5 { animation: window-light-5 5.3s ease-in-out infinite 2s; }
          .animate-window-light-6 { animation: window-light-6 5.6s ease-in-out infinite 2.5s; }
          .animate-window-light-7 { animation: window-light-7 5.4s ease-in-out infinite 3s; }
          .animate-window-light-8 { animation: window-light-8 5.7s ease-in-out infinite 3.5s; }
          .animate-window-light-9 { animation: window-light-9 5.1s ease-in-out infinite 4s; }
          .animate-window-light-10 { animation: window-light-10 5.9s ease-in-out infinite 0.8s; }
          .animate-window-light-11 { animation: window-light-11 5.5s ease-in-out infinite 1.3s; }
          .animate-window-light-12 { animation: window-light-12 5.3s ease-in-out infinite 1.8s; }
          .animate-window-light-13 { animation: window-light-13 5.8s ease-in-out infinite 2.3s; }
          .animate-window-light-14 { animation: window-light-14 5.2s ease-in-out infinite 2.8s; }
          .animate-window-light-15 { animation: window-light-15 5.6s ease-in-out infinite 3.3s; }
          .animate-window-light-16 { animation: window-light-16 5.4s ease-in-out infinite 3.8s; }
          .animate-window-light-17 { animation: window-light-17 5.7s ease-in-out infinite 4.3s; }
          .animate-window-light-18 { animation: window-light-18 5.1s ease-in-out infinite 0.6s; }
          .animate-window-light-19 { animation: window-light-19 5.9s ease-in-out infinite 1.2s; }
          .animate-window-light-20 { animation: window-light-20 5.3s ease-in-out infinite 1.7s; }
          
          .animate-window-light-fg-1 { animation: window-light-fg-1 4.8s ease-in-out infinite; }
          .animate-window-light-fg-2 { animation: window-light-fg-2 5.2s ease-in-out infinite 0.8s; }
          .animate-window-light-fg-3 { animation: window-light-fg-3 4.9s ease-in-out infinite 1.6s; }
          .animate-window-light-fg-4 { animation: window-light-fg-4 5.3s ease-in-out infinite 2.4s; }
          .animate-window-light-fg-5 { animation: window-light-fg-5 5s ease-in-out infinite 3.2s; }
          .animate-window-light-fg-6 { animation: window-light-fg-6 5.1s ease-in-out infinite 4s; }
          
          .animate-lamp-glow-1 { animation: lamp-glow-1 4s ease-in-out infinite; }
          .animate-lamp-glow-2 { animation: lamp-glow-2 4.5s ease-in-out infinite 1s; }
          .animate-lamp-glow-3 { animation: lamp-glow-3 4.2s ease-in-out infinite 2s; }
          .animate-lamp-glow-4 { animation: lamp-glow-4 4.7s ease-in-out infinite 0.5s; }
          .animate-lamp-glow-5 { animation: lamp-glow-5 4.4s ease-in-out infinite 1.5s; }
          .animate-lamp-glow-6 { animation: lamp-glow-6 4.6s ease-in-out infinite 2.5s; }
          
          .animate-roof-sparkle-1 { animation: roof-sparkle-1 8s linear infinite; }
          .animate-roof-sparkle-2 { animation: roof-sparkle-2 9s linear infinite 1.5s; }
          .animate-roof-sparkle-3 { animation: roof-sparkle-3 8.5s linear infinite 3s; }
          .animate-roof-sparkle-4 { animation: roof-sparkle-4 9.5s linear infinite 4.5s; }
          .animate-roof-sparkle-5 { animation: roof-sparkle-5 8.2s linear infinite 2s; }
          .animate-roof-sparkle-6 { animation: roof-sparkle-6 9.2s linear infinite 6s; }
          .animate-roof-sparkle-7 { animation: roof-sparkle-7 8.8s linear infinite 1s; }
          .animate-roof-sparkle-8 { animation: roof-sparkle-8 9.8s linear infinite 5s; }
          .animate-roof-sparkle-9 { animation: roof-sparkle-9 8.3s linear infinite 7s; }
          .animate-roof-sparkle-10 { animation: roof-sparkle-10 9.3s linear infinite 3.5s; }
          
          .animate-stone-sparkle-1 { animation: stone-sparkle-1 8s linear infinite; }
          .animate-stone-sparkle-2 { animation: stone-sparkle-2 9s linear infinite 1.5s; }
          .animate-stone-sparkle-3 { animation: stone-sparkle-3 8.5s linear infinite 3s; }
          .animate-stone-sparkle-4 { animation: stone-sparkle-4 9.5s linear infinite 4.5s; }
          .animate-stone-sparkle-5 { animation: stone-sparkle-5 8.2s linear infinite 2s; }
          .animate-stone-sparkle-6 { animation: stone-sparkle-6 9.2s linear infinite 6s; }
          
          .animate-foliage-glow-1 { animation: foliage-glow-1 10s ease-in-out infinite; }
          .animate-foliage-glow-2 { animation: foliage-glow-2 11s ease-in-out infinite 2s; }
          .animate-foliage-glow-3 { animation: foliage-glow-3 10.5s ease-in-out infinite 4s; }
          .animate-foliage-glow-4 { animation: foliage-glow-4 11.5s ease-in-out infinite 1s; }
          .animate-foliage-glow-5 { animation: foliage-glow-5 9.5s ease-in-out infinite 5s; }
          .animate-foliage-glow-6 { animation: foliage-glow-6 12s ease-in-out infinite 3s; }
          
          .animate-coastal-dust-1 { animation: coastal-dust-1 16s ease-in-out infinite; }
          .animate-coastal-dust-2 { animation: coastal-dust-2 18s ease-in-out infinite 3s; }
          .animate-coastal-dust-3 { animation: coastal-dust-3 17s ease-in-out infinite 6s; }
          .animate-coastal-dust-4 { animation: coastal-dust-4 19s ease-in-out infinite 2s; }
          .animate-coastal-dust-5 { animation: coastal-dust-5 20s ease-in-out infinite 4s; }
          .animate-coastal-dust-6 { animation: coastal-dust-6 18.5s ease-in-out infinite 7s; }
          .animate-coastal-dust-7 { animation: coastal-dust-7 17.5s ease-in-out infinite 9s; }
          
          .animate-path-shimmer-1 { animation: path-shimmer-1 7s ease-in-out infinite; }
          .animate-path-shimmer-2 { animation: path-shimmer-2 8s ease-in-out infinite 2s; }
          .animate-path-shimmer-3 { animation: path-shimmer-3 7.5s ease-in-out infinite 4s; }
          .animate-path-shimmer-4 { animation: path-shimmer-4 8.5s ease-in-out infinite 1s; }
          
          .animate-sun-ray-1 { animation: sun-ray-1 16s ease-in-out infinite; }
          .animate-sun-ray-2 { animation: sun-ray-2 18s ease-in-out infinite 5s; }
        `}</style>
      </div>
    </Card>
  );
}

