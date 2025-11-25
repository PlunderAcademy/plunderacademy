"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Island4Module6Image() {
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
          poster="/islands/island4/island4-module6-image.webp"
          onError={() => setVideoError(true)}
        >
          <source src="/islands/island4/island4-module6-video.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback image shown only if video fails */}
        {videoError && (
          <Image
            src="/islands/island4/island4-module6-image.webp"
            alt="Upgradable Contract Practical - Gilded Bastion Adventure"
            fill
            className="object-cover"
            priority
          />
        )}
        
        {/* EPIC Animated overlay effects - NATURE WONDERLAND - Only shown if video fails */}
        {videoError && (
          <div className="absolute inset-0 animate-effects">
          {/* LEGENDARY Waterfall Shimmer - FLOWING */}
          <div className="absolute inset-0">
            {/* Main central waterfall glow */}
            <div className="absolute top-[15%] left-[48%] w-[80px] h-[450px] bg-cyan-200/25 rounded-full waterfall-glow animate-waterfall-flow-1"></div>
            <div className="absolute top-[18%] left-[48.5%] w-[60px] h-[420px] bg-blue-200/22 rounded-full waterfall-glow animate-waterfall-flow-2"></div>
            <div className="absolute top-[20%] left-[49%] w-[40px] h-[400px] bg-cyan-100/28 rounded-full waterfall-core animate-waterfall-flow-3"></div>
            
            {/* Waterfall mist sparkles */}
            <div className="absolute top-[25%] left-[47%] w-[4px] h-[4px] bg-cyan-200/90 rounded-full water-sparkle animate-water-sparkle-1"></div>
            <div className="absolute top-[35%] left-[49%] w-[4px] h-[4px] bg-white/88 rounded-full water-sparkle animate-water-sparkle-2"></div>
            <div className="absolute top-[45%] left-[48%] w-[5px] h-[5px] bg-blue-200/92 rounded-full water-sparkle animate-water-sparkle-3"></div>
            <div className="absolute top-[55%] left-[50%] w-[4px] h-[4px] bg-cyan-200/85 rounded-full water-sparkle animate-water-sparkle-4"></div>
            
            {/* Side waterfall flows */}
            <div className="absolute top-[30%] left-[42%] w-[50px] h-[250px] bg-cyan-200/18 rounded-full waterfall-side animate-waterfall-side-1"></div>
            <div className="absolute top-[35%] left-[54%] w-[45px] h-[220px] bg-blue-200/16 rounded-full waterfall-side animate-waterfall-side-2"></div>
          </div>

          {/* MAGICAL Fireflies - GLOWING BUGS */}
          <div className="absolute inset-0">
            {/* Upper garden fireflies */}
            <div className="absolute top-[12%] left-[45%] w-[3px] h-[3px] bg-lime-300/95 rounded-full firefly animate-firefly-float-1"></div>
            <div className="absolute top-[15%] left-[52%] w-[3px] h-[3px] bg-yellow-300/92 rounded-full firefly animate-firefly-float-2"></div>
            <div className="absolute top-[18%] left-[48%] w-[4px] h-[4px] bg-lime-200/98 rounded-full firefly animate-firefly-float-3"></div>
            <div className="absolute top-[22%] left-[55%] w-[3px] h-[3px] bg-green-300/90 rounded-full firefly animate-firefly-float-4"></div>
            
            {/* Mid-level garden fireflies */}
            <div className="absolute top-[35%] left-[42%] w-[3px] h-[3px] bg-lime-300/93 rounded-full firefly animate-firefly-float-5"></div>
            <div className="absolute top-[38%] left-[50%] w-[4px] h-[4px] bg-yellow-300/95 rounded-full firefly animate-firefly-float-6"></div>
            <div className="absolute top-[42%] left-[56%] w-[3px] h-[3px] bg-lime-200/90 rounded-full firefly animate-firefly-float-7"></div>
            <div className="absolute top-[45%] left-[46%] w-[3px] h-[3px] bg-green-300/88 rounded-full firefly animate-firefly-float-8"></div>
            
            {/* Lower garden fireflies */}
            <div className="absolute top-[58%] left-[44%] w-[3px] h-[3px] bg-lime-300/92 rounded-full firefly animate-firefly-float-9"></div>
            <div className="absolute top-[62%] left-[51%] w-[4px] h-[4px] bg-yellow-300/94 rounded-full firefly animate-firefly-float-10"></div>
            <div className="absolute top-[65%] left-[48%] w-[3px] h-[3px] bg-lime-200/88 rounded-full firefly animate-firefly-float-11"></div>
            <div className="absolute top-[68%] left-[54%] w-[3px] h-[3px] bg-green-300/90 rounded-full firefly animate-firefly-float-12"></div>
          </div>

          {/* LUSH Foliage Glow - MASSIVE */}
          <div className="absolute inset-0">
            {/* Top temple foliage */}
            <div className="absolute top-[8%] left-[46%] w-[90px] h-[80px] bg-green-400/28 rounded-full foliage-massive animate-foliage-massive-1"></div>
            <div className="absolute top-[10%] left-[52%] w-[85px] h-[75px] bg-emerald-400/25 rounded-full foliage-massive animate-foliage-massive-2"></div>
            <div className="absolute top-[12%] left-[42%] w-[80px] h-[70px] bg-lime-400/22 rounded-full foliage-massive animate-foliage-massive-3"></div>
            
            {/* Upper tier foliage */}
            <div className="absolute top-[22%] left-[44%] w-[75px] h-[65px] bg-green-400/26 rounded-full foliage-massive animate-foliage-massive-4"></div>
            <div className="absolute top-[25%] left-[50%] w-[80px] h-[70px] bg-emerald-400/28 rounded-full foliage-massive animate-foliage-massive-5"></div>
            <div className="absolute top-[28%] left-[56%] w-[70px] h-[60px] bg-lime-400/24 rounded-full foliage-massive animate-foliage-massive-6"></div>
            
            {/* Mid tier foliage */}
            <div className="absolute top-[38%] left-[42%] w-[85px] h-[75px] bg-green-400/30 rounded-full foliage-massive animate-foliage-massive-7"></div>
            <div className="absolute top-[40%] left-[48%] w-[90px] h-[80px] bg-emerald-400/32 rounded-full foliage-massive animate-foliage-massive-8"></div>
            <div className="absolute top-[42%] left-[54%] w-[80px] h-[70px] bg-lime-400/28 rounded-full foliage-massive animate-foliage-massive-9"></div>
            
            {/* Lower tier foliage */}
            <div className="absolute top-[52%] left-[45%] w-[75px] h-[65px] bg-green-400/28 rounded-full foliage-massive animate-foliage-massive-10"></div>
            <div className="absolute top-[55%] left-[51%] w-[85px] h-[75px] bg-emerald-400/30 rounded-full foliage-massive animate-foliage-massive-11"></div>
            <div className="absolute top-[58%] left-[47%] w-[70px] h-[60px] bg-lime-400/26 rounded-full foliage-massive animate-foliage-massive-12"></div>
          </div>

          {/* GLOWING Plants & Vines */}
          <div className="absolute inset-0">
            {/* Magical glowing plant sparkles - scattered across garden */}
            <div className="absolute top-[15%] left-[44%] w-[4px] h-[4px] bg-lime-300/95 rounded-full plant-sparkle animate-plant-sparkle-1"></div>
            <div className="absolute top-[18%] left-[50%] w-[4px] h-[4px] bg-green-300/92 rounded-full plant-sparkle animate-plant-sparkle-2"></div>
            <div className="absolute top-[20%] left-[54%] w-[5px] h-[5px] bg-emerald-300/98 rounded-full plant-sparkle animate-plant-sparkle-3"></div>
            
            <div className="absolute top-[30%] left-[43%] w-[4px] h-[4px] bg-lime-300/93 rounded-full plant-sparkle animate-plant-sparkle-4"></div>
            <div className="absolute top-[33%] left-[49%] w-[5px] h-[5px] bg-green-300/96 rounded-full plant-sparkle animate-plant-sparkle-5"></div>
            <div className="absolute top-[36%] left-[55%] w-[4px] h-[4px] bg-emerald-300/90 rounded-full plant-sparkle animate-plant-sparkle-6"></div>
            
            <div className="absolute top-[48%] left-[45%] w-[4px] h-[4px] bg-lime-300/94 rounded-full plant-sparkle animate-plant-sparkle-7"></div>
            <div className="absolute top-[50%] left-[52%] w-[5px] h-[5px] bg-green-300/98 rounded-full plant-sparkle animate-plant-sparkle-8"></div>
            <div className="absolute top-[53%] left-[48%] w-[4px] h-[4px] bg-emerald-300/92 rounded-full plant-sparkle animate-plant-sparkle-9"></div>
            
            <div className="absolute top-[62%] left-[46%] w-[4px] h-[4px] bg-lime-300/90 rounded-full plant-sparkle animate-plant-sparkle-10"></div>
            <div className="absolute top-[65%] left-[50%] w-[5px] h-[5px] bg-green-300/95 rounded-full plant-sparkle animate-plant-sparkle-11"></div>
            <div className="absolute top-[68%] left-[53%] w-[4px] h-[4px] bg-emerald-300/88 rounded-full plant-sparkle animate-plant-sparkle-12"></div>
          </div>

          {/* Temple Stone Edge Sparkles */}
          <div className="absolute inset-0">
            {/* Top temple archway */}
            <div className="absolute top-[10%] left-[48%] w-[3px] h-[3px] bg-white/88 rounded-full stone-sparkle animate-stone-sparkle-1"></div>
            <div className="absolute top-[12%] left-[52%] w-[3px] h-[3px] bg-cyan-100/86 rounded-full stone-sparkle animate-stone-sparkle-2"></div>
            <div className="absolute top-[14%] left-[50%] w-[4px] h-[4px] bg-white/90 rounded-full stone-sparkle animate-stone-sparkle-3"></div>
            
            {/* Temple tier edges */}
            <div className="absolute top-[28%] left-[46%] w-[3px] h-[3px] bg-cyan-100/85 rounded-full stone-sparkle animate-stone-sparkle-4"></div>
            <div className="absolute top-[30%] left-[54%] w-[3px] h-[3px] bg-white/87 rounded-full stone-sparkle animate-stone-sparkle-5"></div>
            <div className="absolute top-[45%] left-[48%] w-[3px] h-[3px] bg-cyan-100/88 rounded-full stone-sparkle animate-stone-sparkle-6"></div>
          </div>

          {/* Building Window Lights - LEFT SIDE */}
          <div className="absolute inset-0">
            <div className="absolute top-[42%] left-[8%] w-[3px] h-[4px] bg-yellow-300/88 rounded window-light animate-window-light-1"></div>
            <div className="absolute top-[46%] left-[6%] w-[3px] h-[4px] bg-orange-300/85 rounded window-light animate-window-light-2"></div>
            <div className="absolute top-[50%] left-[10%] w-[3px] h-[4px] bg-yellow-300/90 rounded window-light animate-window-light-3"></div>
            <div className="absolute top-[54%] left-[12%] w-[3px] h-[4px] bg-orange-300/87 rounded window-light animate-window-light-4"></div>
            
            <div className="absolute top-[48%] left-[18%] w-[3px] h-[4px] bg-yellow-300/86 rounded window-light animate-window-light-5"></div>
            <div className="absolute top-[52%] left-[15%] w-[3px] h-[4px] bg-orange-300/88 rounded window-light animate-window-light-6"></div>
            <div className="absolute top-[56%] left-[20%] w-[3px] h-[4px] bg-yellow-300/84 rounded window-light animate-window-light-7"></div>
          </div>

          {/* Building Window Lights - RIGHT SIDE */}
          <div className="absolute inset-0">
            <div className="absolute top-[42%] left-[88%] w-[3px] h-[4px] bg-orange-300/88 rounded window-light animate-window-light-8"></div>
            <div className="absolute top-[46%] left-[92%] w-[3px] h-[4px] bg-yellow-300/85 rounded window-light animate-window-light-9"></div>
            <div className="absolute top-[50%] left-[90%] w-[3px] h-[4px] bg-orange-300/90 rounded window-light animate-window-light-10"></div>
            
            <div className="absolute top-[48%] left-[78%] w-[3px] h-[4px] bg-yellow-300/86 rounded window-light animate-window-light-11"></div>
            <div className="absolute top-[52%] left-[82%] w-[3px] h-[4px] bg-orange-300/88 rounded window-light animate-window-light-12"></div>
            <div className="absolute top-[56%] left-[85%] w-[3px] h-[4px] bg-yellow-300/84 rounded window-light animate-window-light-13"></div>
            <div className="absolute top-[60%] left-[80%] w-[3px] h-[4px] bg-orange-300/86 rounded window-light animate-window-light-14"></div>
          </div>

          {/* Red Roof Sparkles */}
          <div className="absolute inset-0">
            {/* Left roofs */}
            <div className="absolute top-[38%] left-[10%] w-[3px] h-[3px] bg-red-300/86 rounded-full roof-sparkle animate-roof-sparkle-1"></div>
            <div className="absolute top-[42%] left-[15%] w-[3px] h-[3px] bg-orange-300/84 rounded-full roof-sparkle animate-roof-sparkle-2"></div>
            <div className="absolute top-[46%] left-[8%] w-[3px] h-[3px] bg-red-300/88 rounded-full roof-sparkle animate-roof-sparkle-3"></div>
            
            {/* Right roofs */}
            <div className="absolute top-[38%] left-[85%] w-[3px] h-[3px] bg-red-300/87 rounded-full roof-sparkle animate-roof-sparkle-4"></div>
            <div className="absolute top-[42%] left-[90%] w-[3px] h-[3px] bg-orange-300/85 rounded-full roof-sparkle animate-roof-sparkle-5"></div>
            <div className="absolute top-[46%] left-[88%] w-[3px] h-[3px] bg-red-300/86 rounded-full roof-sparkle animate-roof-sparkle-6"></div>
            
            {/* Foreground roofs */}
            <div className="absolute top-[62%] left-[6%] w-[4px] h-[4px] bg-red-300/90 rounded-full roof-sparkle animate-roof-sparkle-7"></div>
            <div className="absolute top-[58%] left-[12%] w-[4px] h-[4px] bg-orange-300/88 rounded-full roof-sparkle animate-roof-sparkle-8"></div>
            <div className="absolute top-[62%] left-[80%] w-[4px] h-[4px] bg-red-300/92 rounded-full roof-sparkle animate-roof-sparkle-9"></div>
            <div className="absolute top-[58%] left-[88%] w-[4px] h-[4px] bg-orange-300/90 rounded-full roof-sparkle animate-roof-sparkle-10"></div>
          </div>

          {/* Foreground Tree Foliage - MASSIVE */}
          <div className="absolute inset-0">
            {/* Left foreground trees */}
            <div className="absolute top-[8%] left-[2%] w-[100px] h-[90px] bg-green-300/20 rounded-full tree-glow animate-tree-glow-1"></div>
            <div className="absolute top-[15%] left-[5%] w-[95px] h-[85px] bg-emerald-300/18 rounded-full tree-glow animate-tree-glow-2"></div>
            
            {/* Right foreground trees */}
            <div className="absolute top-[8%] right-[2%] w-[105px] h-[95px] bg-green-300/22 rounded-full tree-glow animate-tree-glow-3"></div>
            <div className="absolute top-[15%] right-[5%] w-[98px] h-[88px] bg-emerald-300/20 rounded-full tree-glow animate-tree-glow-4"></div>
          </div>

          {/* Floating Water Mist Particles */}
          <div className="absolute inset-0">
            {/* Around waterfall area */}
            <div className="absolute top-[30%] left-[46%] w-[2px] h-[2px] bg-cyan-200/70 rounded-full mist-particle animate-mist-float-1"></div>
            <div className="absolute top-[35%] left-[50%] w-[2px] h-[2px] bg-blue-200/68 rounded-full mist-particle animate-mist-float-2"></div>
            <div className="absolute top-[40%] left-[48%] w-[3px] h-[3px] bg-cyan-100/75 rounded-full mist-particle animate-mist-float-3"></div>
            <div className="absolute top-[45%] left-[52%] w-[2px] h-[2px] bg-white/72 rounded-full mist-particle animate-mist-float-4"></div>
            <div className="absolute top-[50%] left-[47%] w-[2px] h-[2px] bg-cyan-200/68 rounded-full mist-particle animate-mist-float-5"></div>
            <div className="absolute top-[55%] left-[51%] w-[3px] h-[3px] bg-blue-200/70 rounded-full mist-particle animate-mist-float-6"></div>
          </div>

          {/* Water Pool Shimmer at Bottom */}
          <div className="absolute inset-0">
            <div className="absolute top-[70%] left-[40%] w-[50px] h-[25px] bg-cyan-200/20 rounded-full water-shimmer animate-water-shimmer-1"></div>
            <div className="absolute top-[72%] left-[48%] w-[55px] h-[28px] bg-blue-200/18 rounded-full water-shimmer animate-water-shimmer-2"></div>
            <div className="absolute top-[74%] left-[52%] w-[52px] h-[26px] bg-cyan-100/22 rounded-full water-shimmer animate-water-shimmer-3"></div>
          </div>

          {/* Localized Sun Rays */}
          <div className="absolute inset-0">
            <div className="absolute top-[0%] left-[35%] w-[90px] h-[42%] bg-gradient-to-b from-yellow-200/14 via-amber-100/8 to-transparent sun-ray animate-sun-ray-1"></div>
            <div className="absolute top-[0%] left-[55%] w-[100px] h-[45%] bg-gradient-to-b from-amber-200/16 via-yellow-100/9 to-transparent sun-ray animate-sun-ray-2"></div>
          </div>
          
          <style jsx>{`
          .waterfall-glow {
            filter: blur(35px);
            opacity: 0;
          }
          
          .waterfall-core {
            filter: blur(25px);
            opacity: 0;
          }
          
          .waterfall-side {
            filter: blur(30px);
            opacity: 0;
          }
          
          .water-sparkle {
            box-shadow: 0 0 25px currentColor, 0 0 50px currentColor, 0 0 75px currentColor;
            filter: blur(0.4px);
          }
          
          .firefly {
            box-shadow: 0 0 40px currentColor, 0 0 80px currentColor, 0 0 120px currentColor;
            filter: blur(0.5px);
          }
          
          .foliage-massive {
            filter: blur(30px);
          }
          
          .plant-sparkle {
            box-shadow: 0 0 30px currentColor, 0 0 60px currentColor, 0 0 90px currentColor;
            filter: blur(0.4px);
          }
          
          .stone-sparkle {
            box-shadow: 0 0 22px currentColor, 0 0 44px currentColor, 0 0 66px currentColor;
            filter: blur(0.3px);
          }
          
          .window-light {
            filter: blur(4px);
            box-shadow: 0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor;
          }
          
          .roof-sparkle {
            box-shadow: 0 0 20px currentColor, 0 0 40px currentColor;
            filter: blur(0.4px);
          }
          
          .tree-glow {
            filter: blur(28px);
          }
          
          .mist-particle {
            box-shadow: 0 0 10px currentColor, 0 0 20px currentColor;
            filter: blur(0.6px);
          }
          
          .water-shimmer {
            filter: blur(20px);
          }
          
          .sun-ray {
            filter: blur(35px);
            opacity: 0;
          }
          
          .animate-effects .waterfall-glow {
            animation-play-state: running;
          }
          
          .animate-effects .waterfall-core {
            animation-play-state: running;
          }
          
          .animate-effects .waterfall-side {
            animation-play-state: running;
          }
          
          .animate-effects .water-sparkle {
            animation-play-state: running;
          }
          
          .animate-effects .firefly {
            animation-play-state: running;
          }
          
          .animate-effects .foliage-massive {
            animation-play-state: running;
          }
          
          .animate-effects .plant-sparkle {
            animation-play-state: running;
          }
          
          .animate-effects .stone-sparkle {
            animation-play-state: running;
          }
          
          .animate-effects .window-light {
            animation-play-state: running;
          }
          
          .animate-effects .roof-sparkle {
            animation-play-state: running;
          }
          
          .animate-effects .tree-glow {
            animation-play-state: running;
          }
          
          .animate-effects .mist-particle {
            animation-play-state: running;
          }
          
          .animate-effects .water-shimmer {
            animation-play-state: running;
          }
          
          .animate-effects .sun-ray {
            animation-play-state: running;
          }
          
          @keyframes waterfall-flow-1 {
            0% { opacity: 0; transform: translateY(0px); }
            50% { opacity: 0.35; transform: translateY(30px); }
            100% { opacity: 0; transform: translateY(60px); }
          }
          
          @keyframes waterfall-flow-2 {
            0% { opacity: 0; transform: translateY(0px); }
            50% { opacity: 0.3; transform: translateY(25px); }
            100% { opacity: 0; transform: translateY(50px); }
          }
          
          @keyframes waterfall-flow-3 {
            0% { opacity: 0; transform: translateY(0px) scaleY(1); }
            50% { opacity: 0.4; transform: translateY(35px) scaleY(1.1); }
            100% { opacity: 0; transform: translateY(70px) scaleY(1.2); }
          }
          
          @keyframes waterfall-side-1 {
            0% { opacity: 0; transform: translateY(0px); }
            50% { opacity: 0.25; transform: translateY(20px); }
            100% { opacity: 0; transform: translateY(40px); }
          }
          
          @keyframes waterfall-side-2 {
            0% { opacity: 0; transform: translateY(0px); }
            50% { opacity: 0.22; transform: translateY(18px); }
            100% { opacity: 0; transform: translateY(36px); }
          }
          
          @keyframes water-sparkle-1 {
            0%, 60%, 100% { opacity: 0; transform: scale(1); }
            65%, 75% { opacity: 0.9; transform: scale(2.5); }
            70% { opacity: 0.6; transform: scale(2); }
          }
          
          @keyframes water-sparkle-2 {
            0%, 65%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            70%, 80% { opacity: 0.88; transform: scale(2.3) rotate(360deg); }
            75% { opacity: 0.58; transform: scale(1.9) rotate(180deg); }
          }
          
          @keyframes water-sparkle-3 {
            0%, 62%, 100% { opacity: 0; transform: scale(1); }
            67%, 77% { opacity: 0.92; transform: scale(2.6); }
            72% { opacity: 0.62; transform: scale(2.1); }
          }
          
          @keyframes water-sparkle-4 {
            0%, 68%, 100% { opacity: 0; transform: scale(1); }
            73%, 83% { opacity: 0.85; transform: scale(2.4); }
            78% { opacity: 0.55; transform: scale(2); }
          }
          
          @keyframes firefly-float-1 {
            0%, 100% { opacity: 0; transform: translate(0px, 0px) rotate(0deg); }
            25% { opacity: 0.95; transform: translate(-15px, -20px) rotate(90deg); }
            50% { opacity: 0; transform: translate(-8px, -40px) rotate(180deg); }
            75% { opacity: 0.95; transform: translate(8px, -25px) rotate(270deg); }
          }
          
          @keyframes firefly-float-2 {
            0%, 100% { opacity: 0; transform: translate(0px, 0px) rotate(0deg); }
            25% { opacity: 0; transform: translate(12px, -15px) rotate(80deg); }
            50% { opacity: 0.92; transform: translate(20px, -35px) rotate(160deg); }
            75% { opacity: 0; transform: translate(10px, -20px) rotate(240deg); }
          }
          
          @keyframes firefly-float-3 {
            0%, 100% { opacity: 0; transform: translate(0px, 0px) rotate(0deg); }
            30% { opacity: 0.98; transform: translate(-18px, -18px) rotate(100deg); }
            60% { opacity: 0; transform: translate(-10px, -38px) rotate(200deg); }
            90% { opacity: 0.98; transform: translate(6px, -22px) rotate(300deg); }
          }
          
          @keyframes firefly-float-4 {
            0%, 100% { opacity: 0; transform: translate(0px, 0px) rotate(0deg); }
            20% { opacity: 0; transform: translate(10px, -12px) rotate(70deg); }
            50% { opacity: 0.9; transform: translate(18px, -30px) rotate(150deg); }
            80% { opacity: 0; transform: translate(8px, -18px) rotate(230deg); }
          }
          
          @keyframes firefly-float-5 {
            0%, 100% { opacity: 0; transform: translate(0px, 0px); }
            25% { opacity: 0.93; transform: translate(-12px, -22px); }
            50% { opacity: 0; transform: translate(-6px, -42px); }
            75% { opacity: 0.93; transform: translate(10px, -28px); }
          }
          
          @keyframes firefly-float-6 {
            0%, 100% { opacity: 0; transform: translate(0px, 0px); }
            30% { opacity: 0.95; transform: translate(15px, -25px); }
            60% { opacity: 0; transform: translate(8px, -45px); }
            90% { opacity: 0.95; transform: translate(-8px, -30px); }
          }
          
          @keyframes firefly-float-7 {
            0%, 100% { opacity: 0; transform: translate(0px, 0px); }
            25% { opacity: 0; transform: translate(-10px, -18px); }
            50% { opacity: 0.9; transform: translate(-18px, -35px); }
            75% { opacity: 0; transform: translate(-12px, -24px); }
          }
          
          @keyframes firefly-float-8 {
            0%, 100% { opacity: 0; transform: translate(0px, 0px); }
            20% { opacity: 0.88; transform: translate(12px, -16px); }
            50% { opacity: 0; transform: translate(22px, -38px); }
            80% { opacity: 0.88; transform: translate(14px, -22px); }
          }
          
          @keyframes firefly-float-9 {
            0%, 100% { opacity: 0; transform: translate(0px, 0px); }
            25% { opacity: 0.92; transform: translate(-14px, -20px); }
            50% { opacity: 0; transform: translate(-8px, -40px); }
            75% { opacity: 0.92; transform: translate(8px, -26px); }
          }
          
          @keyframes firefly-float-10 {
            0%, 100% { opacity: 0; transform: translate(0px, 0px); }
            30% { opacity: 0.94; transform: translate(16px, -24px); }
            60% { opacity: 0; transform: translate(10px, -44px); }
            90% { opacity: 0.94; transform: translate(-6px, -28px); }
          }
          
          @keyframes firefly-float-11 {
            0%, 100% { opacity: 0; transform: translate(0px, 0px); }
            25% { opacity: 0; transform: translate(-11px, -17px); }
            50% { opacity: 0.88; transform: translate(-20px, -36px); }
            75% { opacity: 0; transform: translate(-13px, -23px); }
          }
          
          @keyframes firefly-float-12 {
            0%, 100% { opacity: 0; transform: translate(0px, 0px); }
            20% { opacity: 0.9; transform: translate(13px, -19px); }
            50% { opacity: 0; transform: translate(24px, -39px); }
            80% { opacity: 0.9; transform: translate(15px, -25px); }
          }
          
          @keyframes foliage-massive-1 {
            0%, 100% { opacity: 0.28; transform: scale(1); }
            50% { opacity: 0.45; transform: scale(1.15); }
          }
          
          @keyframes foliage-massive-2 {
            0%, 100% { opacity: 0.25; transform: scale(1); }
            60% { opacity: 0.42; transform: scale(1.12); }
          }
          
          @keyframes foliage-massive-3 {
            0%, 100% { opacity: 0.22; transform: scale(1); }
            55% { opacity: 0.38; transform: scale(1.14); }
          }
          
          @keyframes foliage-massive-4 {
            0%, 100% { opacity: 0.26; transform: scale(1); }
            52% { opacity: 0.43; transform: scale(1.13); }
          }
          
          @keyframes foliage-massive-5 {
            0%, 100% { opacity: 0.28; transform: scale(1); }
            58% { opacity: 0.46; transform: scale(1.16); }
          }
          
          @keyframes foliage-massive-6 {
            0%, 100% { opacity: 0.24; transform: scale(1); }
            54% { opacity: 0.4; transform: scale(1.12); }
          }
          
          @keyframes foliage-massive-7 {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.48; transform: scale(1.17); }
          }
          
          @keyframes foliage-massive-8 {
            0%, 100% { opacity: 0.32; transform: scale(1); }
            56% { opacity: 0.5; transform: scale(1.18); }
          }
          
          @keyframes foliage-massive-9 {
            0%, 100% { opacity: 0.28; transform: scale(1); }
            52% { opacity: 0.45; transform: scale(1.15); }
          }
          
          @keyframes foliage-massive-10 {
            0%, 100% { opacity: 0.28; transform: scale(1); }
            58% { opacity: 0.44; transform: scale(1.14); }
          }
          
          @keyframes foliage-massive-11 {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            54% { opacity: 0.47; transform: scale(1.16); }
          }
          
          @keyframes foliage-massive-12 {
            0%, 100% { opacity: 0.26; transform: scale(1); }
            50% { opacity: 0.42; transform: scale(1.13); }
          }
          
          @keyframes plant-sparkle-1 {
            0%, 65%, 100% { opacity: 0; transform: scale(1); }
            70%, 80% { opacity: 0.95; transform: scale(2.8); }
            75% { opacity: 0.65; transform: scale(2.3); }
          }
          
          @keyframes plant-sparkle-2 {
            0%, 68%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            73%, 83% { opacity: 0.92; transform: scale(2.6) rotate(360deg); }
            78% { opacity: 0.62; transform: scale(2.1) rotate(180deg); }
          }
          
          @keyframes plant-sparkle-3 {
            0%, 60%, 100% { opacity: 0; transform: scale(1); }
            65%, 75% { opacity: 0.98; transform: scale(3); }
            70% { opacity: 0.7; transform: scale(2.5); }
          }
          
          @keyframes plant-sparkle-4 {
            0%, 70%, 100% { opacity: 0; transform: scale(1); }
            75%, 85% { opacity: 0.93; transform: scale(2.7); }
            80% { opacity: 0.63; transform: scale(2.2); }
          }
          
          @keyframes plant-sparkle-5 {
            0%, 62%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            67%, 77% { opacity: 0.96; transform: scale(2.9) rotate(360deg); }
            72% { opacity: 0.68; transform: scale(2.4) rotate(180deg); }
          }
          
          @keyframes plant-sparkle-6 {
            0%, 72%, 100% { opacity: 0; transform: scale(1); }
            77%, 87% { opacity: 0.9; transform: scale(2.5); }
            82% { opacity: 0.6; transform: scale(2); }
          }
          
          @keyframes plant-sparkle-7 {
            0%, 66%, 100% { opacity: 0; transform: scale(1); }
            71%, 81% { opacity: 0.94; transform: scale(2.75); }
            76% { opacity: 0.64; transform: scale(2.25); }
          }
          
          @keyframes plant-sparkle-8 {
            0%, 58%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            63%, 73% { opacity: 0.98; transform: scale(3) rotate(360deg); }
            68% { opacity: 0.7; transform: scale(2.5) rotate(180deg); }
          }
          
          @keyframes plant-sparkle-9 {
            0%, 74%, 100% { opacity: 0; transform: scale(1); }
            79%, 89% { opacity: 0.92; transform: scale(2.65); }
            84% { opacity: 0.62; transform: scale(2.15); }
          }
          
          @keyframes plant-sparkle-10 {
            0%, 64%, 100% { opacity: 0; transform: scale(1); }
            69%, 79% { opacity: 0.9; transform: scale(2.6); }
            74% { opacity: 0.58; transform: scale(2.1); }
          }
          
          @keyframes plant-sparkle-11 {
            0%, 60%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            65%, 75% { opacity: 0.95; transform: scale(2.85) rotate(360deg); }
            70% { opacity: 0.66; transform: scale(2.35) rotate(180deg); }
          }
          
          @keyframes plant-sparkle-12 {
            0%, 76%, 100% { opacity: 0; transform: scale(1); }
            81%, 91% { opacity: 0.88; transform: scale(2.55); }
            86% { opacity: 0.56; transform: scale(2.05); }
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
            73%, 83% { opacity: 0.9; transform: scale(2.3); }
            78% { opacity: 0.56; transform: scale(1.9); }
          }
          
          @keyframes stone-sparkle-4 {
            0%, 74%, 100% { opacity: 0; transform: scale(1); }
            79%, 89% { opacity: 0.85; transform: scale(2.15); }
            84% { opacity: 0.51; transform: scale(1.75); }
          }
          
          @keyframes stone-sparkle-5 {
            0%, 66%, 100% { opacity: 0; transform: scale(1); }
            71%, 81% { opacity: 0.87; transform: scale(2.2); }
            76% { opacity: 0.53; transform: scale(1.8); }
          }
          
          @keyframes stone-sparkle-6 {
            0%, 76%, 100% { opacity: 0; transform: scale(1); }
            81%, 91% { opacity: 0.88; transform: scale(2.25); }
            86% { opacity: 0.54; transform: scale(1.85); }
          }
          
          @keyframes window-light-1 {
            0%, 100% { opacity: 0.88; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes window-light-2 {
            0%, 100% { opacity: 0.85; transform: scale(1); }
            60% { opacity: 1; transform: scale(1.38); }
          }
          
          @keyframes window-light-3 {
            0%, 100% { opacity: 0.9; transform: scale(1); }
            55% { opacity: 1; transform: scale(1.42); }
          }
          
          @keyframes window-light-4 {
            0%, 100% { opacity: 0.87; transform: scale(1); }
            52% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes window-light-5 {
            0%, 100% { opacity: 0.86; transform: scale(1); }
            58% { opacity: 1; transform: scale(1.38); }
          }
          
          @keyframes window-light-6 {
            0%, 100% { opacity: 0.88; transform: scale(1); }
            54% { opacity: 1; transform: scale(1.42); }
          }
          
          @keyframes window-light-7 {
            0%, 100% { opacity: 0.84; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.36); }
          }
          
          @keyframes window-light-8 {
            0%, 100% { opacity: 0.88; transform: scale(1); }
            56% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes window-light-9 {
            0%, 100% { opacity: 0.85; transform: scale(1); }
            52% { opacity: 1; transform: scale(1.38); }
          }
          
          @keyframes window-light-10 {
            0%, 100% { opacity: 0.9; transform: scale(1); }
            58% { opacity: 1; transform: scale(1.42); }
          }
          
          @keyframes window-light-11 {
            0%, 100% { opacity: 0.86; transform: scale(1); }
            54% { opacity: 1; transform: scale(1.38); }
          }
          
          @keyframes window-light-12 {
            0%, 100% { opacity: 0.88; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes window-light-13 {
            0%, 100% { opacity: 0.84; transform: scale(1); }
            56% { opacity: 1; transform: scale(1.36); }
          }
          
          @keyframes window-light-14 {
            0%, 100% { opacity: 0.86; transform: scale(1); }
            52% { opacity: 1; transform: scale(1.38); }
          }
          
          @keyframes roof-sparkle-1 {
            0%, 70%, 100% { opacity: 0; transform: scale(1); }
            75%, 85% { opacity: 0.86; transform: scale(2.2); }
            80% { opacity: 0.52; transform: scale(1.8); }
          }
          
          @keyframes roof-sparkle-2 {
            0%, 72%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            77%, 87% { opacity: 0.84; transform: scale(2.1) rotate(360deg); }
            82% { opacity: 0.5; transform: scale(1.7) rotate(180deg); }
          }
          
          @keyframes roof-sparkle-3 {
            0%, 68%, 100% { opacity: 0; transform: scale(1); }
            73%, 83% { opacity: 0.88; transform: scale(2.3); }
            78% { opacity: 0.54; transform: scale(1.9); }
          }
          
          @keyframes roof-sparkle-4 {
            0%, 74%, 100% { opacity: 0; transform: scale(1); }
            79%, 89% { opacity: 0.87; transform: scale(2.25); }
            84% { opacity: 0.53; transform: scale(1.85); }
          }
          
          @keyframes roof-sparkle-5 {
            0%, 66%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            71%, 81% { opacity: 0.85; transform: scale(2.15) rotate(360deg); }
            76% { opacity: 0.51; transform: scale(1.75) rotate(180deg); }
          }
          
          @keyframes roof-sparkle-6 {
            0%, 76%, 100% { opacity: 0; transform: scale(1); }
            81%, 91% { opacity: 0.86; transform: scale(2.2); }
            86% { opacity: 0.52; transform: scale(1.8); }
          }
          
          @keyframes roof-sparkle-7 {
            0%, 62%, 100% { opacity: 0; transform: scale(1); }
            67%, 77% { opacity: 0.9; transform: scale(2.4); }
            72% { opacity: 0.56; transform: scale(2); }
          }
          
          @keyframes roof-sparkle-8 {
            0%, 65%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            70%, 80% { opacity: 0.88; transform: scale(2.35) rotate(360deg); }
            75% { opacity: 0.54; transform: scale(1.95) rotate(180deg); }
          }
          
          @keyframes roof-sparkle-9 {
            0%, 64%, 100% { opacity: 0; transform: scale(1); }
            69%, 79% { opacity: 0.92; transform: scale(2.45); }
            74% { opacity: 0.58; transform: scale(2.05); }
          }
          
          @keyframes roof-sparkle-10 {
            0%, 68%, 100% { opacity: 0; transform: scale(1); }
            73%, 83% { opacity: 0.9; transform: scale(2.4); }
            78% { opacity: 0.56; transform: scale(2); }
          }
          
          @keyframes tree-glow-1 {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.35; transform: scale(1.12); }
          }
          
          @keyframes tree-glow-2 {
            0%, 100% { opacity: 0.18; transform: scale(1); }
            60% { opacity: 0.32; transform: scale(1.1); }
          }
          
          @keyframes tree-glow-3 {
            0%, 100% { opacity: 0.22; transform: scale(1); }
            55% { opacity: 0.38; transform: scale(1.14); }
          }
          
          @keyframes tree-glow-4 {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            58% { opacity: 0.35; transform: scale(1.12); }
          }
          
          @keyframes mist-float-1 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.7; transform: translateY(-45px) translateX(12px); }
          }
          
          @keyframes mist-float-2 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.68; transform: translateY(-40px) translateX(-10px); }
          }
          
          @keyframes mist-float-3 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.75; transform: translateY(-50px) translateX(15px); }
          }
          
          @keyframes mist-float-4 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.72; transform: translateY(-42px) translateX(-12px); }
          }
          
          @keyframes mist-float-5 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.68; transform: translateY(-38px) translateX(8px); }
          }
          
          @keyframes mist-float-6 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.7; transform: translateY(-48px) translateX(-14px); }
          }
          
          @keyframes water-shimmer-1 {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.35; transform: scale(1.15); }
          }
          
          @keyframes water-shimmer-2 {
            0%, 100% { opacity: 0.18; transform: scale(1) rotate(0deg); }
            60% { opacity: 0.32; transform: scale(1.12) rotate(8deg); }
          }
          
          @keyframes water-shimmer-3 {
            0%, 100% { opacity: 0.22; transform: scale(1); }
            55% { opacity: 0.38; transform: scale(1.18); }
          }
          
          @keyframes sun-ray-1 {
            0%, 100% { opacity: 0; transform: translateY(0px); }
            50% { opacity: 0.22; transform: translateY(-10px); }
          }
          
          @keyframes sun-ray-2 {
            0%, 100% { opacity: 0; transform: translateY(0px); }
            60% { opacity: 0.26; transform: translateY(-12px); }
          }
          
          .animate-waterfall-flow-1 { animation: waterfall-flow-1 3s ease-in-out infinite; }
          .animate-waterfall-flow-2 { animation: waterfall-flow-2 3.5s ease-in-out infinite 0.5s; }
          .animate-waterfall-flow-3 { animation: waterfall-flow-3 3.2s ease-in-out infinite 1s; }
          
          .animate-waterfall-side-1 { animation: waterfall-side-1 4s ease-in-out infinite; }
          .animate-waterfall-side-2 { animation: waterfall-side-2 4.5s ease-in-out infinite 1s; }
          
          .animate-water-sparkle-1 { animation: water-sparkle-1 8s linear infinite; }
          .animate-water-sparkle-2 { animation: water-sparkle-2 9s linear infinite 2s; }
          .animate-water-sparkle-3 { animation: water-sparkle-3 8.5s linear infinite 4s; }
          .animate-water-sparkle-4 { animation: water-sparkle-4 9.5s linear infinite 1s; }
          
          .animate-firefly-float-1 { animation: firefly-float-1 8s ease-in-out infinite; }
          .animate-firefly-float-2 { animation: firefly-float-2 9s ease-in-out infinite 1.5s; }
          .animate-firefly-float-3 { animation: firefly-float-3 8.5s ease-in-out infinite 3s; }
          .animate-firefly-float-4 { animation: firefly-float-4 9.5s ease-in-out infinite 0.8s; }
          .animate-firefly-float-5 { animation: firefly-float-5 8.2s ease-in-out infinite 4.5s; }
          .animate-firefly-float-6 { animation: firefly-float-6 9.2s ease-in-out infinite 2.2s; }
          .animate-firefly-float-7 { animation: firefly-float-7 8.8s ease-in-out infinite 5.5s; }
          .animate-firefly-float-8 { animation: firefly-float-8 9.8s ease-in-out infinite 3.8s; }
          .animate-firefly-float-9 { animation: firefly-float-9 8.3s ease-in-out infinite 6.5s; }
          .animate-firefly-float-10 { animation: firefly-float-10 9.3s ease-in-out infinite 1.2s; }
          .animate-firefly-float-11 { animation: firefly-float-11 8.6s ease-in-out infinite 7s; }
          .animate-firefly-float-12 { animation: firefly-float-12 9.6s ease-in-out infinite 2.8s; }
          
          .animate-foliage-massive-1 { animation: foliage-massive-1 7s ease-in-out infinite; }
          .animate-foliage-massive-2 { animation: foliage-massive-2 8s ease-in-out infinite 1.5s; }
          .animate-foliage-massive-3 { animation: foliage-massive-3 7.5s ease-in-out infinite 3s; }
          .animate-foliage-massive-4 { animation: foliage-massive-4 8.5s ease-in-out infinite 0.8s; }
          .animate-foliage-massive-5 { animation: foliage-massive-5 7.2s ease-in-out infinite 4s; }
          .animate-foliage-massive-6 { animation: foliage-massive-6 8.2s ease-in-out infinite 2s; }
          .animate-foliage-massive-7 { animation: foliage-massive-7 7.8s ease-in-out infinite 5s; }
          .animate-foliage-massive-8 { animation: foliage-massive-8 8.8s ease-in-out infinite 1.2s; }
          .animate-foliage-massive-9 { animation: foliage-massive-9 7.3s ease-in-out infinite 6s; }
          .animate-foliage-massive-10 { animation: foliage-massive-10 8.3s ease-in-out infinite 2.5s; }
          .animate-foliage-massive-11 { animation: foliage-massive-11 7.6s ease-in-out infinite 4.5s; }
          .animate-foliage-massive-12 { animation: foliage-massive-12 8.6s ease-in-out infinite 3.5s; }
          
          .animate-plant-sparkle-1 { animation: plant-sparkle-1 10s linear infinite; }
          .animate-plant-sparkle-2 { animation: plant-sparkle-2 11s linear infinite 2s; }
          .animate-plant-sparkle-3 { animation: plant-sparkle-3 9.5s linear infinite 4s; }
          .animate-plant-sparkle-4 { animation: plant-sparkle-4 10.5s linear infinite 1s; }
          .animate-plant-sparkle-5 { animation: plant-sparkle-5 11.5s linear infinite 5s; }
          .animate-plant-sparkle-6 { animation: plant-sparkle-6 9.8s linear infinite 3s; }
          .animate-plant-sparkle-7 { animation: plant-sparkle-7 10.2s linear infinite 6s; }
          .animate-plant-sparkle-8 { animation: plant-sparkle-8 11.2s linear infinite 1.5s; }
          .animate-plant-sparkle-9 { animation: plant-sparkle-9 9.3s linear infinite 7s; }
          .animate-plant-sparkle-10 { animation: plant-sparkle-10 10.8s linear infinite 2.5s; }
          .animate-plant-sparkle-11 { animation: plant-sparkle-11 11.8s linear infinite 4.5s; }
          .animate-plant-sparkle-12 { animation: plant-sparkle-12 9.6s linear infinite 3.5s; }
          
          .animate-stone-sparkle-1 { animation: stone-sparkle-1 8s linear infinite; }
          .animate-stone-sparkle-2 { animation: stone-sparkle-2 9s linear infinite 1.5s; }
          .animate-stone-sparkle-3 { animation: stone-sparkle-3 8.5s linear infinite 3s; }
          .animate-stone-sparkle-4 { animation: stone-sparkle-4 9.5s linear infinite 4.5s; }
          .animate-stone-sparkle-5 { animation: stone-sparkle-5 8.2s linear infinite 2s; }
          .animate-stone-sparkle-6 { animation: stone-sparkle-6 9.2s linear infinite 6s; }
          
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
          
          .animate-tree-glow-1 { animation: tree-glow-1 12s ease-in-out infinite; }
          .animate-tree-glow-2 { animation: tree-glow-2 13s ease-in-out infinite 3s; }
          .animate-tree-glow-3 { animation: tree-glow-3 12.5s ease-in-out infinite 6s; }
          .animate-tree-glow-4 { animation: tree-glow-4 13.5s ease-in-out infinite 2s; }
          
          .animate-mist-float-1 { animation: mist-float-1 12s ease-in-out infinite; }
          .animate-mist-float-2 { animation: mist-float-2 14s ease-in-out infinite 2s; }
          .animate-mist-float-3 { animation: mist-float-3 13s ease-in-out infinite 4s; }
          .animate-mist-float-4 { animation: mist-float-4 15s ease-in-out infinite 1s; }
          .animate-mist-float-5 { animation: mist-float-5 13.5s ease-in-out infinite 5s; }
          .animate-mist-float-6 { animation: mist-float-6 14.5s ease-in-out infinite 3s; }
          
          .animate-water-shimmer-1 { animation: water-shimmer-1 6s ease-in-out infinite; }
          .animate-water-shimmer-2 { animation: water-shimmer-2 7s ease-in-out infinite 1.5s; }
          .animate-water-shimmer-3 { animation: water-shimmer-3 6.5s ease-in-out infinite 3s; }
          
          .animate-sun-ray-1 { animation: sun-ray-1 16s ease-in-out infinite; }
          .animate-sun-ray-2 { animation: sun-ray-2 18s ease-in-out infinite 5s; }
          `}</style>
          </div>
        )}
      </div>
    </Card>
  );
}

