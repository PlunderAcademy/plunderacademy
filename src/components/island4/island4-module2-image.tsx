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
        
        {/* EPIC Animated overlay effects */}
        <div className="absolute inset-0 animate-effects">
          {/* LEGENDARY Lighthouse Beacon */}
          <div className="absolute inset-0">
            {/* Epic lighthouse top glow */}
            <div className="absolute top-[4%] left-[53%] w-[80px] h-[80px] bg-yellow-300/40 rounded-full lighthouse-beacon animate-lighthouse-beacon-1"></div>
            <div className="absolute top-[5%] left-[54%] w-[60px] h-[60px] bg-amber-300/45 rounded-full lighthouse-beacon animate-lighthouse-beacon-2"></div>
            <div className="absolute top-[6%] left-[54.5%] w-[40px] h-[40px] bg-yellow-200/50 rounded-full lighthouse-core animate-lighthouse-core"></div>
            
            {/* Rotating lighthouse beam rays */}
            <div className="absolute top-[6%] left-[55%] w-[300px] h-[4px] bg-gradient-to-r from-transparent via-yellow-300/60 to-transparent lighthouse-beam animate-lighthouse-beam-rotate"></div>
            <div className="absolute top-[6%] left-[55%] w-[280px] h-[3px] bg-gradient-to-r from-transparent via-amber-200/50 to-transparent lighthouse-beam animate-lighthouse-beam-rotate-2"></div>
          </div>

          {/* Lighthouse Window Glows */}
          <div className="absolute inset-0">
            {/* Top windows */}
            <div className="absolute top-[12%] left-[54%] w-[4px] h-[5px] bg-yellow-300/90 rounded window-glow animate-lighthouse-window-1"></div>
            <div className="absolute top-[12%] left-[55%] w-[4px] h-[5px] bg-amber-300/88 rounded window-glow animate-lighthouse-window-2"></div>
            
            {/* Mid lighthouse windows */}
            <div className="absolute top-[22%] left-[49.5%] w-[4px] h-[5px] bg-yellow-300/92 rounded window-glow animate-lighthouse-window-3"></div>
            <div className="absolute top-[22%] left-[50.5%] w-[4px] h-[5px] bg-amber-300/90 rounded window-glow animate-lighthouse-window-4"></div>
            
            {/* Lower lighthouse windows */}
            <div className="absolute top-[28%] left-[49.5%] w-[4px] h-[5px] bg-yellow-300/88 rounded window-glow animate-lighthouse-window-5"></div>
            <div className="absolute top-[28%] left-[50.5%] w-[4px] h-[5px] bg-amber-300/86 rounded window-glow animate-lighthouse-window-6"></div>
          </div>

          {/* Building Window Lights - LEFT SIDE */}
          <div className="absolute inset-0">
            {/* Far left buildings - top */}
            <div className="absolute top-[18%] left-[8%] w-[3px] h-[4px] bg-orange-300/85 rounded window-light animate-window-light-1"></div>
            <div className="absolute top-[20%] left-[6%] w-[3px] h-[4px] bg-yellow-300/82 rounded window-light animate-window-light-2"></div>
            <div className="absolute top-[22%] left-[10%] w-[3px] h-[4px] bg-orange-300/88 rounded window-light animate-window-light-3"></div>
            
            {/* Left mid buildings */}
            <div className="absolute top-[25%] left-[15%] w-[3px] h-[4px] bg-yellow-300/86 rounded window-light animate-window-light-4"></div>
            <div className="absolute top-[28%] left-[18%] w-[3px] h-[4px] bg-orange-300/84 rounded window-light animate-window-light-5"></div>
            <div className="absolute top-[30%] left-[12%] w-[3px] h-[4px] bg-yellow-300/88 rounded window-light animate-window-light-6"></div>
            <div className="absolute top-[33%] left-[16%] w-[3px] h-[4px] bg-orange-300/86 rounded window-light animate-window-light-7"></div>
            
            {/* Center-left near market */}
            <div className="absolute top-[26%] left-[25%] w-[3px] h-[4px] bg-yellow-300/85 rounded window-light animate-window-light-8"></div>
            <div className="absolute top-[30%] left-[28%] w-[3px] h-[4px] bg-orange-300/87 rounded window-light animate-window-light-9"></div>
            <div className="absolute top-[34%] left-[22%] w-[3px] h-[4px] bg-yellow-300/83 rounded window-light animate-window-light-10"></div>
          </div>

          {/* Building Window Lights - RIGHT SIDE */}
          <div className="absolute inset-0">
            {/* Center-right near market */}
            <div className="absolute top-[26%] left-[72%] w-[3px] h-[4px] bg-orange-300/86 rounded window-light animate-window-light-11"></div>
            <div className="absolute top-[30%] left-[75%] w-[3px] h-[4px] bg-yellow-300/84 rounded window-light animate-window-light-12"></div>
            <div className="absolute top-[34%] left-[78%] w-[3px] h-[4px] bg-orange-300/88 rounded window-light animate-window-light-13"></div>
            
            {/* Right mid buildings */}
            <div className="absolute top-[25%] left-[82%] w-[3px] h-[4px] bg-yellow-300/85 rounded window-light animate-window-light-14"></div>
            <div className="absolute top-[28%] left-[85%] w-[3px] h-[4px] bg-orange-300/83 rounded window-light animate-window-light-15"></div>
            <div className="absolute top-[30%] left-[88%] w-[3px] h-[4px] bg-yellow-300/87 rounded window-light animate-window-light-16"></div>
            <div className="absolute top-[33%] left-[90%] w-[3px] h-[4px] bg-orange-300/85 rounded window-light animate-window-light-17"></div>
            
            {/* Far right buildings - top */}
            <div className="absolute top-[18%] left-[92%] w-[3px] h-[4px] bg-yellow-300/82 rounded window-light animate-window-light-18"></div>
            <div className="absolute top-[20%] left-[94%] w-[3px] h-[4px] bg-orange-300/86 rounded window-light animate-window-light-19"></div>
            <div className="absolute top-[22%] left-[90%] w-[3px] h-[4px] bg-yellow-300/84 rounded window-light animate-window-light-20"></div>
          </div>

          {/* Market Stall Canopy Shimmer */}
          <div className="absolute inset-0">
            {/* Left side stalls */}
            <div className="absolute top-[48%] left-[18%] w-[45px] h-[25px] bg-red-300/12 rounded-full canopy-shimmer animate-canopy-shimmer-1"></div>
            <div className="absolute top-[52%] left-[12%] w-[40px] h-[22px] bg-orange-300/10 rounded-full canopy-shimmer animate-canopy-shimmer-2"></div>
            <div className="absolute top-[56%] left-[8%] w-[38px] h-[20px] bg-red-300/11 rounded-full canopy-shimmer animate-canopy-shimmer-3"></div>
            
            {/* Center stalls */}
            <div className="absolute top-[50%] left-[38%] w-[50px] h-[28px] bg-red-300/13 rounded-full canopy-shimmer animate-canopy-shimmer-4"></div>
            <div className="absolute top-[54%] left-[45%] w-[48px] h-[26px] bg-orange-300/12 rounded-full canopy-shimmer animate-canopy-shimmer-5"></div>
            <div className="absolute top-[58%] left-[52%] w-[46px] h-[24px] bg-red-300/11 rounded-full canopy-shimmer animate-canopy-shimmer-6"></div>
            
            {/* Right side stalls */}
            <div className="absolute top-[48%] left-[72%] w-[44px] h-[24px] bg-red-300/12 rounded-full canopy-shimmer animate-canopy-shimmer-7"></div>
            <div className="absolute top-[52%] left-[82%] w-[42px] h-[23px] bg-orange-300/11 rounded-full canopy-shimmer animate-canopy-shimmer-8"></div>
            <div className="absolute top-[56%] left-[88%] w-[40px] h-[21px] bg-red-300/10 rounded-full canopy-shimmer animate-canopy-shimmer-9"></div>
          </div>

          {/* Produce Sparkles - Fresh Goods */}
          <div className="absolute inset-0">
            {/* Fruit/vegetable sparkles */}
            <div className="absolute top-[58%] left-[15%] w-[3px] h-[3px] bg-green-300/85 rounded-full produce-sparkle animate-produce-sparkle-1"></div>
            <div className="absolute top-[60%] left-[20%] w-[3px] h-[3px] bg-red-300/82 rounded-full produce-sparkle animate-produce-sparkle-2"></div>
            <div className="absolute top-[62%] left-[25%] w-[3px] h-[3px] bg-orange-300/88 rounded-full produce-sparkle animate-produce-sparkle-3"></div>
            <div className="absolute top-[64%] left-[30%] w-[3px] h-[3px] bg-yellow-300/85 rounded-full produce-sparkle animate-produce-sparkle-4"></div>
            
            {/* Center market sparkles */}
            <div className="absolute top-[60%] left-[42%] w-[3px] h-[3px] bg-green-300/87 rounded-full produce-sparkle animate-produce-sparkle-5"></div>
            <div className="absolute top-[62%] left-[48%] w-[3px] h-[3px] bg-red-300/84 rounded-full produce-sparkle animate-produce-sparkle-6"></div>
            <div className="absolute top-[64%] left-[55%] w-[3px] h-[3px] bg-orange-300/86 rounded-full produce-sparkle animate-produce-sparkle-7"></div>
            
            {/* Right market sparkles */}
            <div className="absolute top-[58%] left-[72%] w-[3px] h-[3px] bg-yellow-300/83 rounded-full produce-sparkle animate-produce-sparkle-8"></div>
            <div className="absolute top-[60%] left-[78%] w-[3px] h-[3px] bg-green-300/88 rounded-full produce-sparkle animate-produce-sparkle-9"></div>
            <div className="absolute top-[62%] left-[85%] w-[3px] h-[3px] bg-red-300/85 rounded-full produce-sparkle animate-produce-sparkle-10"></div>
          </div>

          {/* Merchant Activity Glows */}
          <div className="absolute inset-0">
            {/* Trading activity sparkles */}
            <div className="absolute top-[68%] left-[32%] w-[25px] h-[25px] bg-yellow-300/20 rounded-full merchant-glow animate-merchant-glow-1"></div>
            <div className="absolute top-[70%] left-[48%] w-[28px] h-[28px] bg-amber-300/18 rounded-full merchant-glow animate-merchant-glow-2"></div>
            <div className="absolute top-[72%] left-[62%] w-[26px] h-[26px] bg-yellow-300/22 rounded-full merchant-glow animate-merchant-glow-3"></div>
            <div className="absolute top-[74%] left-[75%] w-[24px] h-[24px] bg-amber-300/20 rounded-full merchant-glow animate-merchant-glow-4"></div>
          </div>

          {/* Chimney Smoke Plumes */}
          <div className="absolute inset-0">
            {/* Left side chimneys */}
            <div className="absolute top-[12%] left-[4%] w-[22px] h-[28px] bg-gray-300/18 rounded-full smoke animate-smoke-rise-1"></div>
            <div className="absolute top-[14%] left-[12%] w-[20px] h-[26px] bg-gray-400/16 rounded-full smoke animate-smoke-rise-2"></div>
            <div className="absolute top-[16%] left-[20%] w-[23px] h-[30px] bg-gray-300/20 rounded-full smoke animate-smoke-rise-3"></div>
            <div className="absolute top-[18%] left-[28%] w-[21px] h-[27px] bg-gray-400/17 rounded-full smoke animate-smoke-rise-4"></div>
            
            {/* Right side chimneys */}
            <div className="absolute top-[16%] left-[72%] w-[22px] h-[29px] bg-gray-300/19 rounded-full smoke animate-smoke-rise-5"></div>
            <div className="absolute top-[14%] left-[80%] w-[24px] h-[28px] bg-gray-400/18 rounded-full smoke animate-smoke-rise-6"></div>
            <div className="absolute top-[12%] left-[88%] w-[20px] h-[26px] bg-gray-300/17 rounded-full smoke animate-smoke-rise-7"></div>
            <div className="absolute top-[18%] left-[94%] w-[23px] h-[30px] bg-gray-400/19 rounded-full smoke animate-smoke-rise-8"></div>
          </div>

          {/* Floating Market Dust/Activity Particles */}
          <div className="absolute inset-0">
            {/* Large activity particles */}
            <div className="absolute top-[55%] left-[25%] w-[2px] h-[2px] bg-amber-300/60 rounded-full dust-particle animate-market-dust-1"></div>
            <div className="absolute top-[58%] left-[35%] w-[2px] h-[2px] bg-yellow-300/65 rounded-full dust-particle animate-market-dust-2"></div>
            <div className="absolute top-[60%] left-[45%] w-[3px] h-[3px] bg-amber-300/70 rounded-full dust-particle animate-market-dust-3"></div>
            <div className="absolute top-[62%] left-[55%] w-[2px] h-[2px] bg-yellow-300/62 rounded-full dust-particle animate-market-dust-4"></div>
            <div className="absolute top-[64%] left-[65%] w-[2px] h-[2px] bg-amber-300/68 rounded-full dust-particle animate-market-dust-5"></div>
            <div className="absolute top-[66%] left-[75%] w-[3px] h-[3px] bg-yellow-300/65 rounded-full dust-particle animate-market-dust-6"></div>
            
            {/* Small particles */}
            <div className="absolute top-[56%] left-[30%] w-[2px] h-[2px] bg-amber-200/55 rounded-full dust-particle animate-market-dust-7"></div>
            <div className="absolute top-[59%] left-[50%] w-[2px] h-[2px] bg-yellow-200/58 rounded-full dust-particle animate-market-dust-8"></div>
            <div className="absolute top-[63%] left-[70%] w-[2px] h-[2px] bg-amber-200/60 rounded-full dust-particle animate-market-dust-9"></div>
          </div>

          {/* Tree Foliage Shimmer */}
          <div className="absolute inset-0">
            {/* Background trees */}
            <div className="absolute top-[12%] left-[22%] w-[40px] h-[35px] bg-green-300/10 rounded-full foliage-glow animate-foliage-glow-1"></div>
            <div className="absolute top-[14%] left-[38%] w-[38px] h-[33px] bg-emerald-300/9 rounded-full foliage-glow animate-foliage-glow-2"></div>
            <div className="absolute top-[16%] left-[62%] w-[42px] h-[36px] bg-green-300/11 rounded-full foliage-glow animate-foliage-glow-3"></div>
            <div className="absolute top-[18%] right-[8%] w-[40px] h-[34px] bg-emerald-300/10 rounded-full foliage-glow animate-foliage-glow-4"></div>
          </div>

          {/* Localized Sun Rays (no full screen overlay) */}
          <div className="absolute inset-0">
            {/* Focused beams only */}
            <div className="absolute top-[0%] left-[30%] w-[100px] h-[40%] bg-gradient-to-b from-yellow-200/15 via-amber-100/8 to-transparent sun-ray animate-sun-ray-1"></div>
            <div className="absolute top-[0%] left-[60%] w-[110px] h-[42%] bg-gradient-to-b from-amber-200/16 via-yellow-100/9 to-transparent sun-ray animate-sun-ray-2"></div>
          </div>
        </div>
        
        <style jsx>{`
          .lighthouse-beacon {
            filter: blur(40px);
          }
          
          .lighthouse-core {
            filter: blur(15px);
            box-shadow: 0 0 50px currentColor, 0 0 100px currentColor;
          }
          
          .lighthouse-beam {
            filter: blur(8px);
            transform-origin: left center;
            opacity: 0;
          }
          
          .window-glow {
            filter: blur(4px);
            box-shadow: 0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor;
          }
          
          .window-light {
            filter: blur(4px);
            box-shadow: 0 0 18px currentColor, 0 0 36px currentColor, 0 0 54px currentColor;
          }
          
          .canopy-shimmer {
            filter: blur(20px);
          }
          
          .produce-sparkle {
            box-shadow: 0 0 15px currentColor, 0 0 30px currentColor;
            filter: blur(0.4px);
          }
          
          .merchant-glow {
            filter: blur(18px);
          }
          
          .smoke {
            filter: blur(15px);
            opacity: 0;
          }
          
          .dust-particle {
            box-shadow: 0 0 10px currentColor, 0 0 20px currentColor;
            filter: blur(0.5px);
          }
          
          .foliage-glow {
            filter: blur(22px);
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
          
          .animate-effects .window-glow {
            animation-play-state: running;
          }
          
          .animate-effects .window-light {
            animation-play-state: running;
          }
          
          .animate-effects .canopy-shimmer {
            animation-play-state: running;
          }
          
          .animate-effects .produce-sparkle {
            animation-play-state: running;
          }
          
          .animate-effects .merchant-glow {
            animation-play-state: running;
          }
          
          .animate-effects .smoke {
            animation-play-state: running;
          }
          
          .animate-effects .dust-particle {
            animation-play-state: running;
          }
          
          .animate-effects .foliage-glow {
            animation-play-state: running;
          }
          
          .animate-effects .sun-ray {
            animation-play-state: running;
          }
          
          @keyframes lighthouse-beacon-1 {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.3); }
          }
          
          @keyframes lighthouse-beacon-2 {
            0%, 100% { opacity: 0.45; transform: scale(1) rotate(0deg); }
            60% { opacity: 0.75; transform: scale(1.35) rotate(180deg); }
          }
          
          @keyframes lighthouse-core {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 0.9; transform: scale(1.5); }
          }
          
          @keyframes lighthouse-beam-rotate {
            0% { opacity: 0; transform: rotate(0deg); }
            25% { opacity: 0.6; transform: rotate(90deg); }
            50% { opacity: 0; transform: rotate(180deg); }
            75% { opacity: 0.6; transform: rotate(270deg); }
            100% { opacity: 0; transform: rotate(360deg); }
          }
          
          @keyframes lighthouse-beam-rotate-2 {
            0% { opacity: 0; transform: rotate(45deg); }
            25% { opacity: 0.5; transform: rotate(135deg); }
            50% { opacity: 0; transform: rotate(225deg); }
            75% { opacity: 0.5; transform: rotate(315deg); }
            100% { opacity: 0; transform: rotate(405deg); }
          }
          
          @keyframes lighthouse-window-1 {
            0%, 100% { opacity: 0.9; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes lighthouse-window-2 {
            0%, 100% { opacity: 0.88; transform: scale(1); }
            60% { opacity: 1; transform: scale(1.38); }
          }
          
          @keyframes lighthouse-window-3 {
            0%, 100% { opacity: 0.92; transform: scale(1); }
            55% { opacity: 1; transform: scale(1.42); }
          }
          
          @keyframes lighthouse-window-4 {
            0%, 100% { opacity: 0.9; transform: scale(1); }
            58% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes lighthouse-window-5 {
            0%, 100% { opacity: 0.88; transform: scale(1); }
            52% { opacity: 1; transform: scale(1.36); }
          }
          
          @keyframes lighthouse-window-6 {
            0%, 100% { opacity: 0.86; transform: scale(1); }
            56% { opacity: 1; transform: scale(1.38); }
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
          
          @keyframes canopy-shimmer-1 {
            0%, 100% { opacity: 0.12; transform: scale(1); }
            50% { opacity: 0.24; transform: scale(1.15); }
          }
          
          @keyframes canopy-shimmer-2 {
            0%, 100% { opacity: 0.1; transform: scale(1); }
            60% { opacity: 0.22; transform: scale(1.12); }
          }
          
          @keyframes canopy-shimmer-3 {
            0%, 100% { opacity: 0.11; transform: scale(1); }
            55% { opacity: 0.23; transform: scale(1.14); }
          }
          
          @keyframes canopy-shimmer-4 {
            0%, 100% { opacity: 0.13; transform: scale(1); }
            52% { opacity: 0.26; transform: scale(1.16); }
          }
          
          @keyframes canopy-shimmer-5 {
            0%, 100% { opacity: 0.12; transform: scale(1); }
            58% { opacity: 0.24; transform: scale(1.13); }
          }
          
          @keyframes canopy-shimmer-6 {
            0%, 100% { opacity: 0.11; transform: scale(1); }
            54% { opacity: 0.23; transform: scale(1.15); }
          }
          
          @keyframes canopy-shimmer-7 {
            0%, 100% { opacity: 0.12; transform: scale(1); }
            50% { opacity: 0.24; transform: scale(1.14); }
          }
          
          @keyframes canopy-shimmer-8 {
            0%, 100% { opacity: 0.11; transform: scale(1); }
            56% { opacity: 0.22; transform: scale(1.12); }
          }
          
          @keyframes canopy-shimmer-9 {
            0%, 100% { opacity: 0.1; transform: scale(1); }
            52% { opacity: 0.21; transform: scale(1.13); }
          }
          
          @keyframes produce-sparkle-1 {
            0%, 70%, 100% { opacity: 0; transform: scale(1); }
            75%, 85% { opacity: 0.85; transform: scale(2); }
            80% { opacity: 0.5; transform: scale(1.6); }
          }
          
          @keyframes produce-sparkle-2 {
            0%, 65%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            70%, 80% { opacity: 0.82; transform: scale(1.9) rotate(360deg); }
            75% { opacity: 0.48; transform: scale(1.5) rotate(180deg); }
          }
          
          @keyframes produce-sparkle-3 {
            0%, 72%, 100% { opacity: 0; transform: scale(1); }
            77%, 87% { opacity: 0.88; transform: scale(2.1); }
            82% { opacity: 0.52; transform: scale(1.7); }
          }
          
          @keyframes produce-sparkle-4 {
            0%, 68%, 100% { opacity: 0; transform: scale(1); }
            73%, 83% { opacity: 0.85; transform: scale(2); }
            78% { opacity: 0.5; transform: scale(1.6); }
          }
          
          @keyframes produce-sparkle-5 {
            0%, 75%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            80%, 90% { opacity: 0.87; transform: scale(2.05) rotate(360deg); }
            85% { opacity: 0.51; transform: scale(1.65) rotate(180deg); }
          }
          
          @keyframes produce-sparkle-6 {
            0%, 70%, 100% { opacity: 0; transform: scale(1); }
            75%, 85% { opacity: 0.84; transform: scale(1.95); }
            80% { opacity: 0.49; transform: scale(1.58); }
          }
          
          @keyframes produce-sparkle-7 {
            0%, 73%, 100% { opacity: 0; transform: scale(1); }
            78%, 88% { opacity: 0.86; transform: scale(2.02); }
            83% { opacity: 0.51; transform: scale(1.62); }
          }
          
          @keyframes produce-sparkle-8 {
            0%, 67%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            72%, 82% { opacity: 0.83; transform: scale(1.92) rotate(360deg); }
            77% { opacity: 0.48; transform: scale(1.55) rotate(180deg); }
          }
          
          @keyframes produce-sparkle-9 {
            0%, 74%, 100% { opacity: 0; transform: scale(1); }
            79%, 89% { opacity: 0.88; transform: scale(2.08); }
            84% { opacity: 0.52; transform: scale(1.68); }
          }
          
          @keyframes produce-sparkle-10 {
            0%, 71%, 100% { opacity: 0; transform: scale(1); }
            76%, 86% { opacity: 0.85; transform: scale(2); }
            81% { opacity: 0.5; transform: scale(1.6); }
          }
          
          @keyframes merchant-glow-1 {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.38; transform: scale(1.25); }
          }
          
          @keyframes merchant-glow-2 {
            0%, 100% { opacity: 0.18; transform: scale(1) rotate(0deg); }
            60% { opacity: 0.35; transform: scale(1.22) rotate(180deg); }
          }
          
          @keyframes merchant-glow-3 {
            0%, 100% { opacity: 0.22; transform: scale(1); }
            55% { opacity: 0.4; transform: scale(1.28); }
          }
          
          @keyframes merchant-glow-4 {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            58% { opacity: 0.37; transform: scale(1.24); }
          }
          
          @keyframes smoke-rise-1 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) scale(0.8); }
            30% { opacity: 0.28; transform: translateY(-35px) translateX(6px) scale(1.15); }
            60% { opacity: 0.14; transform: translateY(-70px) translateX(12px) scale(1.5); }
            100% { opacity: 0; transform: translateY(-105px) translateX(18px) scale(1.9); }
          }
          
          @keyframes smoke-rise-2 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) scale(0.8); }
            30% { opacity: 0.26; transform: translateY(-32px) translateX(-5px) scale(1.12); }
            60% { opacity: 0.13; transform: translateY(-64px) translateX(-10px) scale(1.45); }
            100% { opacity: 0; transform: translateY(-96px) translateX(-15px) scale(1.85); }
          }
          
          @keyframes smoke-rise-3 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) scale(0.8); }
            30% { opacity: 0.3; transform: translateY(-38px) translateX(8px) scale(1.2); }
            60% { opacity: 0.15; transform: translateY(-76px) translateX(15px) scale(1.55); }
            100% { opacity: 0; transform: translateY(-114px) translateX(22px) scale(1.95); }
          }
          
          @keyframes smoke-rise-4 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) scale(0.8); }
            30% { opacity: 0.27; transform: translateY(-34px) translateX(-6px) scale(1.16); }
            60% { opacity: 0.14; transform: translateY(-68px) translateX(-11px) scale(1.48); }
            100% { opacity: 0; transform: translateY(-102px) translateX(-16px) scale(1.88); }
          }
          
          @keyframes smoke-rise-5 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) scale(0.8); }
            30% { opacity: 0.29; transform: translateY(-36px) translateX(7px) scale(1.18); }
            60% { opacity: 0.15; transform: translateY(-72px) translateX(13px) scale(1.52); }
            100% { opacity: 0; transform: translateY(-108px) translateX(19px) scale(1.92); }
          }
          
          @keyframes smoke-rise-6 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) scale(0.8); }
            30% { opacity: 0.28; transform: translateY(-35px) translateX(-7px) scale(1.17); }
            60% { opacity: 0.14; transform: translateY(-70px) translateX(-13px) scale(1.5); }
            100% { opacity: 0; transform: translateY(-105px) translateX(-19px) scale(1.9); }
          }
          
          @keyframes smoke-rise-7 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) scale(0.8); }
            30% { opacity: 0.27; transform: translateY(-33px) translateX(5px) scale(1.14); }
            60% { opacity: 0.14; transform: translateY(-66px) translateX(10px) scale(1.47); }
            100% { opacity: 0; transform: translateY(-99px) translateX(15px) scale(1.87); }
          }
          
          @keyframes smoke-rise-8 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) scale(0.8); }
            30% { opacity: 0.29; transform: translateY(-37px) translateX(-8px) scale(1.19); }
            60% { opacity: 0.15; transform: translateY(-74px) translateX(-15px) scale(1.53); }
            100% { opacity: 0; transform: translateY(-111px) translateX(-22px) scale(1.93); }
          }
          
          @keyframes market-dust-1 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.6; transform: translateY(-50px) translateX(20px) rotate(180deg); }
          }
          
          @keyframes market-dust-2 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.65; transform: translateY(-45px) translateX(-18px) rotate(200deg); }
          }
          
          @keyframes market-dust-3 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.7; transform: translateY(-55px) translateX(22px) rotate(190deg); }
          }
          
          @keyframes market-dust-4 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.62; transform: translateY(-48px) translateX(-20px) rotate(210deg); }
          }
          
          @keyframes market-dust-5 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.68; transform: translateY(-52px) translateX(19px) rotate(195deg); }
          }
          
          @keyframes market-dust-6 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.65; transform: translateY(-50px) translateX(-21px) rotate(205deg); }
          }
          
          @keyframes market-dust-7 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.55; transform: translateY(-42px) translateX(16px); }
          }
          
          @keyframes market-dust-8 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.58; transform: translateY(-44px) translateX(-17px); }
          }
          
          @keyframes market-dust-9 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.6; transform: translateY(-46px) translateX(18px); }
          }
          
          @keyframes foliage-glow-1 {
            0%, 100% { opacity: 0.1; transform: scale(1); }
            50% { opacity: 0.22; transform: scale(1.14); }
          }
          
          @keyframes foliage-glow-2 {
            0%, 100% { opacity: 0.09; transform: scale(1); }
            60% { opacity: 0.2; transform: scale(1.11); }
          }
          
          @keyframes foliage-glow-3 {
            0%, 100% { opacity: 0.11; transform: scale(1); }
            55% { opacity: 0.23; transform: scale(1.15); }
          }
          
          @keyframes foliage-glow-4 {
            0%, 100% { opacity: 0.1; transform: scale(1); }
            58% { opacity: 0.21; transform: scale(1.13); }
          }
          
          @keyframes sun-ray-1 {
            0%, 100% { opacity: 0; transform: translateY(0px); }
            50% { opacity: 0.25; transform: translateY(-12px); }
          }
          
          @keyframes sun-ray-2 {
            0%, 100% { opacity: 0; transform: translateY(0px); }
            60% { opacity: 0.28; transform: translateY(-15px); }
          }
          
          .animate-lighthouse-beacon-1 { animation: lighthouse-beacon-1 4s ease-in-out infinite; }
          .animate-lighthouse-beacon-2 { animation: lighthouse-beacon-2 5s ease-in-out infinite 1s; }
          .animate-lighthouse-core { animation: lighthouse-core 3s ease-in-out infinite; }
          
          .animate-lighthouse-beam-rotate { animation: lighthouse-beam-rotate 8s linear infinite; }
          .animate-lighthouse-beam-rotate-2 { animation: lighthouse-beam-rotate-2 8s linear infinite; }
          
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
          
          .animate-canopy-shimmer-1 { animation: canopy-shimmer-1 6s ease-in-out infinite; }
          .animate-canopy-shimmer-2 { animation: canopy-shimmer-2 7s ease-in-out infinite 1s; }
          .animate-canopy-shimmer-3 { animation: canopy-shimmer-3 6.5s ease-in-out infinite 2s; }
          .animate-canopy-shimmer-4 { animation: canopy-shimmer-4 7.5s ease-in-out infinite 0.5s; }
          .animate-canopy-shimmer-5 { animation: canopy-shimmer-5 6.8s ease-in-out infinite 1.5s; }
          .animate-canopy-shimmer-6 { animation: canopy-shimmer-6 7.2s ease-in-out infinite 2.5s; }
          .animate-canopy-shimmer-7 { animation: canopy-shimmer-7 6.6s ease-in-out infinite 3s; }
          .animate-canopy-shimmer-8 { animation: canopy-shimmer-8 7.3s ease-in-out infinite 0.8s; }
          .animate-canopy-shimmer-9 { animation: canopy-shimmer-9 6.9s ease-in-out infinite 1.8s; }
          
          .animate-produce-sparkle-1 { animation: produce-sparkle-1 7s linear infinite; }
          .animate-produce-sparkle-2 { animation: produce-sparkle-2 8s linear infinite 1s; }
          .animate-produce-sparkle-3 { animation: produce-sparkle-3 7.5s linear infinite 2s; }
          .animate-produce-sparkle-4 { animation: produce-sparkle-4 8.5s linear infinite 3s; }
          .animate-produce-sparkle-5 { animation: produce-sparkle-5 7.8s linear infinite 4s; }
          .animate-produce-sparkle-6 { animation: produce-sparkle-6 8.2s linear infinite 0.5s; }
          .animate-produce-sparkle-7 { animation: produce-sparkle-7 7.6s linear infinite 1.5s; }
          .animate-produce-sparkle-8 { animation: produce-sparkle-8 8.8s linear infinite 2.5s; }
          .animate-produce-sparkle-9 { animation: produce-sparkle-9 7.3s linear infinite 3.5s; }
          .animate-produce-sparkle-10 { animation: produce-sparkle-10 8.3s linear infinite 4.5s; }
          
          .animate-merchant-glow-1 { animation: merchant-glow-1 5s ease-in-out infinite; }
          .animate-merchant-glow-2 { animation: merchant-glow-2 6s ease-in-out infinite 1.5s; }
          .animate-merchant-glow-3 { animation: merchant-glow-3 5.5s ease-in-out infinite 3s; }
          .animate-merchant-glow-4 { animation: merchant-glow-4 6.5s ease-in-out infinite 0.8s; }
          
          .animate-smoke-rise-1 { animation: smoke-rise-1 7s ease-out infinite; }
          .animate-smoke-rise-2 { animation: smoke-rise-2 8s ease-out infinite 1.5s; }
          .animate-smoke-rise-3 { animation: smoke-rise-3 7.5s ease-out infinite 3s; }
          .animate-smoke-rise-4 { animation: smoke-rise-4 8.5s ease-out infinite 0.8s; }
          .animate-smoke-rise-5 { animation: smoke-rise-5 7.8s ease-out infinite 4s; }
          .animate-smoke-rise-6 { animation: smoke-rise-6 8.2s ease-out infinite 2s; }
          .animate-smoke-rise-7 { animation: smoke-rise-7 7.2s ease-out infinite 5s; }
          .animate-smoke-rise-8 { animation: smoke-rise-8 8.8s ease-out infinite 2.5s; }
          
          .animate-market-dust-1 { animation: market-dust-1 14s ease-in-out infinite; }
          .animate-market-dust-2 { animation: market-dust-2 16s ease-in-out infinite 2s; }
          .animate-market-dust-3 { animation: market-dust-3 15s ease-in-out infinite 4s; }
          .animate-market-dust-4 { animation: market-dust-4 17s ease-in-out infinite 1s; }
          .animate-market-dust-5 { animation: market-dust-5 14.5s ease-in-out infinite 6s; }
          .animate-market-dust-6 { animation: market-dust-6 16.5s ease-in-out infinite 3s; }
          .animate-market-dust-7 { animation: market-dust-7 18s ease-in-out infinite 5s; }
          .animate-market-dust-8 { animation: market-dust-8 15.5s ease-in-out infinite 7s; }
          .animate-market-dust-9 { animation: market-dust-9 17.5s ease-in-out infinite 8s; }
          
          .animate-foliage-glow-1 { animation: foliage-glow-1 9s ease-in-out infinite; }
          .animate-foliage-glow-2 { animation: foliage-glow-2 10s ease-in-out infinite 2s; }
          .animate-foliage-glow-3 { animation: foliage-glow-3 9.5s ease-in-out infinite 4s; }
          .animate-foliage-glow-4 { animation: foliage-glow-4 10.5s ease-in-out infinite 1s; }
          
          .animate-sun-ray-1 { animation: sun-ray-1 16s ease-in-out infinite; }
          .animate-sun-ray-2 { animation: sun-ray-2 18s ease-in-out infinite 5s; }
        `}</style>
      </div>
    </Card>
  );
}

