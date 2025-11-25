"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Island3Module1Image() {
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
          poster="/islands/island3/island3-module1-image.webp"
          onError={() => setVideoError(true)}
        >
          <source src="/islands/island3/island3-module1-video.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback image shown only if video fails */}
        {videoError && (
          <Image
            src="/islands/island3/island3-module1-image.webp"
            alt="ERC721 Standards & Implementation - Desert Bluff Adventure"
            fill
            className="object-cover"
            priority
          />
        )}
        
        {/* Animated overlay effects - Only shown if video fails */}
        {videoError && (
          <div className="absolute inset-0 animate-effects">
          {/* Oasis Water Ripples */}
          <div className="absolute inset-0">
            {/* Main water shimmer */}
            <div className="absolute top-[53%] left-[33%] w-[140px] h-[60px] bg-cyan-300/20 rounded-full water-ripple animate-water-ripple-1"></div>
            <div className="absolute top-[55%] left-[35%] w-[120px] h-[50px] bg-blue-300/18 rounded-full water-ripple animate-water-ripple-2"></div>
            <div className="absolute top-[57%] left-[36%] w-[100px] h-[40px] bg-cyan-400/16 rounded-full water-ripple animate-water-ripple-3"></div>
            
            {/* Water edge glints */}
            <div className="absolute top-[52%] left-[32%] w-[2px] h-[2px] bg-white/80 rounded-full water-glint animate-water-glint-1"></div>
            <div className="absolute top-[54%] left-[38%] w-[2px] h-[2px] bg-cyan-200/85 rounded-full water-glint animate-water-glint-2"></div>
            <div className="absolute top-[56%] left-[42%] w-[2px] h-[2px] bg-white/78 rounded-full water-glint animate-water-glint-3"></div>
          </div>

          {/* Desert Heat Shimmer/Mirages */}
          <div className="absolute inset-0">
            {/* Rising heat waves - foreground */}
            <div className="absolute top-[75%] left-[15%] w-[100px] h-[80px] bg-orange-200/8 rounded-full heat-shimmer animate-heat-shimmer-1"></div>
            <div className="absolute top-[78%] left-[40%] w-[120px] h-[90px] bg-yellow-200/7 rounded-full heat-shimmer animate-heat-shimmer-2"></div>
            <div className="absolute top-[76%] right-[20%] w-[110px] h-[85px] bg-orange-200/9 rounded-full heat-shimmer animate-heat-shimmer-3"></div>
            
            {/* Mid-ground heat waves */}
            <div className="absolute top-[60%] left-[20%] w-[90px] h-[70px] bg-orange-100/6 rounded-full heat-shimmer animate-heat-shimmer-4"></div>
            <div className="absolute top-[62%] right-[25%] w-[95px] h-[75px] bg-yellow-100/5 rounded-full heat-shimmer animate-heat-shimmer-5"></div>
            
            {/* Background desert shimmer */}
            <div className="absolute top-[50%] left-[10%] w-[150px] h-[60px] bg-orange-100/5 rounded-full heat-shimmer animate-heat-shimmer-6"></div>
            <div className="absolute top-[48%] right-[15%] w-[140px] h-[65px] bg-yellow-100/4 rounded-full heat-shimmer animate-heat-shimmer-7"></div>
          </div>

          {/* Pyramid Sun Glints */}
          <div className="absolute inset-0">
            {/* Main pyramid (center) glints */}
            <div className="absolute top-[22%] left-[52%] w-[3px] h-[3px] bg-yellow-200/90 rounded-full pyramid-glint animate-pyramid-glint-1"></div>
            <div className="absolute top-[28%] left-[50%] w-[2px] h-[2px] bg-white/85 rounded-full pyramid-glint animate-pyramid-glint-2"></div>
            <div className="absolute top-[35%] left-[54%] w-[3px] h-[3px] bg-yellow-200/88 rounded-full pyramid-glint animate-pyramid-glint-3"></div>
            
            {/* Left pyramid glints */}
            <div className="absolute top-[30%] left-[38%] w-[2px] h-[2px] bg-yellow-200/82 rounded-full pyramid-glint animate-pyramid-glint-4"></div>
            <div className="absolute top-[36%] left-[42%] w-[2px] h-[2px] bg-white/80 rounded-full pyramid-glint animate-pyramid-glint-5"></div>
            
            {/* Right pyramid glints */}
            <div className="absolute top-[32%] right-[28%] w-[2px] h-[2px] bg-yellow-200/84 rounded-full pyramid-glint animate-pyramid-glint-6"></div>
            <div className="absolute top-[38%] right-[30%] w-[2px] h-[2px] bg-white/82 rounded-full pyramid-glint animate-pyramid-glint-7"></div>
          </div>

          {/* Ancient Ruins Mystical Glow */}
          <div className="absolute inset-0">
            {/* Building glow */}
            <div className="absolute top-[52%] left-[44%] w-[60px] h-[40px] bg-orange-300/15 rounded-full ruins-glow animate-ruins-glow-1"></div>
            <div className="absolute top-[54%] left-[45%] w-[45px] h-[30px] bg-yellow-300/12 rounded-full ruins-glow animate-ruins-glow-2"></div>
            
            {/* Window/opening glows */}
            <div className="absolute top-[53%] left-[44%] w-[3px] h-[4px] bg-orange-300/50 rounded ruins-window animate-ruins-window-1"></div>
            <div className="absolute top-[53%] left-[47%] w-[3px] h-[4px] bg-yellow-300/48 rounded ruins-window animate-ruins-window-2"></div>
          </div>

          {/* Palm Tree Leaves Sway (subtle shimmer) */}
          <div className="absolute inset-0">
            {/* Left palm cluster shimmer */}
            <div className="absolute top-[38%] left-[25%] w-[40px] h-[35px] bg-green-400/8 rounded-full palm-shimmer animate-palm-sway-1"></div>
            <div className="absolute top-[40%] left-[27%] w-[35px] h-[30px] bg-green-500/7 rounded-full palm-shimmer animate-palm-sway-2"></div>
            
            {/* Center palm shimmer */}
            <div className="absolute top-[36%] left-[33%] w-[30px] h-[28px] bg-green-400/9 rounded-full palm-shimmer animate-palm-sway-3"></div>
          </div>

          {/* Sand Particles Drifting */}
          <div className="absolute inset-0">
            {/* Foreground sand particles */}
            <div className="absolute top-[70%] left-[10%] w-[2px] h-[2px] bg-orange-200/40 rounded-full sand-particle animate-sand-drift-1"></div>
            <div className="absolute top-[75%] left-[30%] w-[2px] h-[2px] bg-yellow-200/38 rounded-full sand-particle animate-sand-drift-2"></div>
            <div className="absolute top-[72%] left-[50%] w-[2px] h-[2px] bg-orange-200/42 rounded-full sand-particle animate-sand-drift-3"></div>
            <div className="absolute top-[78%] left-[70%] w-[2px] h-[2px] bg-yellow-200/36 rounded-full sand-particle animate-sand-drift-4"></div>
            <div className="absolute top-[74%] left-[85%] w-[2px] h-[2px] bg-orange-200/40 rounded-full sand-particle animate-sand-drift-5"></div>
            
            {/* Mid-ground sand particles */}
            <div className="absolute top-[58%] left-[15%] w-[1px] h-[1px] bg-orange-200/35 rounded-full sand-particle animate-sand-drift-6"></div>
            <div className="absolute top-[60%] left-[55%] w-[1px] h-[1px] bg-yellow-200/32 rounded-full sand-particle animate-sand-drift-7"></div>
            <div className="absolute top-[62%] right-[20%] w-[1px] h-[1px] bg-orange-200/38 rounded-full sand-particle animate-sand-drift-8"></div>
          </div>

          {/* Desert Sun Rays */}
          <div className="absolute inset-0">
            {/* Subtle sun ray effects */}
            <div className="absolute top-[0%] left-[0%] w-full h-[40%] bg-gradient-to-b from-yellow-200/5 via-orange-100/3 to-transparent sun-ray animate-sun-ray-1"></div>
            <div className="absolute top-[5%] left-[0%] w-full h-[35%] bg-gradient-to-b from-orange-200/4 via-yellow-100/2 to-transparent sun-ray animate-sun-ray-2"></div>
          </div>

          {/* Atmospheric Desert Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-orange-100/3 via-yellow-50/2 to-orange-200/4 animate-desert-atmosphere"></div>
          
          {/* Desert Floor Heat Distortion */}
          <div className="absolute inset-0 bg-gradient-to-t from-orange-200/8 via-transparent to-transparent animate-desert-floor-heat"></div>
        
        <style jsx>{`
          .water-ripple {
            filter: blur(15px);
          }
          
          .water-glint {
            box-shadow: 0 0 16px currentColor, 0 0 32px currentColor, 0 0 48px currentColor;
            filter: blur(0.3px);
          }
          
          .heat-shimmer {
            filter: blur(30px);
            opacity: 0;
          }
          
          .pyramid-glint {
            box-shadow: 0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor;
            filter: blur(0.2px);
          }
          
          .ruins-glow {
            filter: blur(22px);
          }
          
          .ruins-window {
            filter: blur(4px);
            box-shadow: 0 0 18px currentColor, 0 0 36px currentColor, 0 0 54px currentColor;
          }
          
          .palm-shimmer {
            filter: blur(15px);
          }
          
          .sand-particle {
            box-shadow: 0 0 10px currentColor, 0 0 20px currentColor;
            filter: blur(0.6px);
          }
          
          .sun-ray {
            filter: blur(30px);
            opacity: 0;
          }
          
          .animate-effects .water-ripple {
            animation-play-state: running;
          }
          
          .animate-effects .water-glint {
            animation-play-state: running;
          }
          
          .animate-effects .heat-shimmer {
            animation-play-state: running;
          }
          
          .animate-effects .pyramid-glint {
            animation-play-state: running;
          }
          
          .animate-effects .ruins-glow {
            animation-play-state: running;
          }
          
          .animate-effects .ruins-window {
            animation-play-state: running;
          }
          
          .animate-effects .palm-shimmer {
            animation-play-state: running;
          }
          
          .animate-effects .sand-particle {
            animation-play-state: running;
          }
          
          .animate-effects .sun-ray {
            animation-play-state: running;
          }
          
          @keyframes water-ripple-1 {
            0%, 100% { opacity: 0.35; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.25); }
          }
          
          @keyframes water-ripple-2 {
            0%, 100% { opacity: 0.32; transform: scale(1) rotate(0deg); }
            60% { opacity: 0.55; transform: scale(1.22) rotate(8deg); }
          }
          
          @keyframes water-ripple-3 {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            55% { opacity: 0.5; transform: scale(1.2); }
          }
          
          @keyframes water-glint-1 {
            0%, 75%, 100% { opacity: 0; transform: scale(1); }
            80%, 90% { opacity: 1; transform: scale(2.2); }
            85% { opacity: 0.6; transform: scale(1.7); }
          }
          
          @keyframes water-glint-2 {
            0%, 68%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            73%, 83% { opacity: 1; transform: scale(2.4) rotate(360deg); }
            78% { opacity: 0.65; transform: scale(1.9) rotate(180deg); }
          }
          
          @keyframes water-glint-3 {
            0%, 82%, 100% { opacity: 0; transform: scale(1); }
            87%, 95% { opacity: 0.95; transform: scale(2); }
            91% { opacity: 0.58; transform: scale(1.6); }
          }
          
          @keyframes heat-shimmer-1 {
            0% { opacity: 0; transform: translateY(0px) scaleY(1); }
            50% { opacity: 0.25; transform: translateY(-60px) scaleY(1.6); }
            100% { opacity: 0; transform: translateY(-120px) scaleY(2.2); }
          }
          
          @keyframes heat-shimmer-2 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) scaleY(1); }
            50% { opacity: 0.22; transform: translateY(-55px) translateX(15px) scaleY(1.5); }
            100% { opacity: 0; transform: translateY(-110px) translateX(30px) scaleY(2); }
          }
          
          @keyframes heat-shimmer-3 {
            0% { opacity: 0; transform: translateY(0px) scaleY(1); }
            50% { opacity: 0.28; transform: translateY(-65px) scaleY(1.7); }
            100% { opacity: 0; transform: translateY(-130px) scaleY(2.4); }
          }
          
          @keyframes heat-shimmer-4 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) scaleY(1); }
            50% { opacity: 0.18; transform: translateY(-50px) translateX(-12px) scaleY(1.55); }
            100% { opacity: 0; transform: translateY(-100px) translateX(-25px) scaleY(2.1); }
          }
          
          @keyframes heat-shimmer-5 {
            0% { opacity: 0; transform: translateY(0px) scaleY(1); }
            50% { opacity: 0.16; transform: translateY(-58px) scaleY(1.58); }
            100% { opacity: 0; transform: translateY(-116px) scaleY(2.15); }
          }
          
          @keyframes heat-shimmer-6 {
            0% { opacity: 0; transform: translateY(0px) scaleY(1); }
            50% { opacity: 0.14; transform: translateY(-45px) scaleY(1.48); }
            100% { opacity: 0; transform: translateY(-90px) scaleY(1.95); }
          }
          
          @keyframes heat-shimmer-7 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px) scaleY(1); }
            50% { opacity: 0.12; transform: translateY(-48px) translateX(18px) scaleY(1.52); }
            100% { opacity: 0; transform: translateY(-96px) translateX(35px) scaleY(2.05); }
          }
          
          @keyframes pyramid-glint-1 {
            0%, 70%, 100% { opacity: 0; transform: scale(1); }
            75%, 85% { opacity: 1; transform: scale(2.4); }
            80% { opacity: 0.6; transform: scale(1.9); }
          }
          
          @keyframes pyramid-glint-2 {
            0%, 65%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            70%, 80% { opacity: 1; transform: scale(2.2) rotate(360deg); }
            75% { opacity: 0.65; transform: scale(1.8) rotate(180deg); }
          }
          
          @keyframes pyramid-glint-3 {
            0%, 78%, 100% { opacity: 0; transform: scale(1); }
            83%, 93% { opacity: 1; transform: scale(2.3); }
            88% { opacity: 0.62; transform: scale(1.85); }
          }
          
          @keyframes pyramid-glint-4 {
            0%, 72%, 100% { opacity: 0; transform: scale(1); }
            77%, 87% { opacity: 0.95; transform: scale(2.1); }
            82% { opacity: 0.58; transform: scale(1.7); }
          }
          
          @keyframes pyramid-glint-5 {
            0%, 80%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            85%, 95% { opacity: 0.95; transform: scale(2.2) rotate(360deg); }
            90% { opacity: 0.6; transform: scale(1.75) rotate(180deg); }
          }
          
          @keyframes pyramid-glint-6 {
            0%, 68%, 100% { opacity: 0; transform: scale(1); }
            73%, 83% { opacity: 1; transform: scale(2.3); }
            78% { opacity: 0.63; transform: scale(1.88); }
          }
          
          @keyframes pyramid-glint-7 {
            0%, 76%, 100% { opacity: 0; transform: scale(1); }
            81%, 91% { opacity: 0.98; transform: scale(2.2); }
            86% { opacity: 0.6; transform: scale(1.78); }
          }
          
          @keyframes ruins-glow-1 {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.55; transform: scale(1.25); }
          }
          
          @keyframes ruins-glow-2 {
            0%, 100% { opacity: 0.25; transform: scale(1) rotate(0deg); }
            60% { opacity: 0.5; transform: scale(1.22) rotate(15deg); }
          }
          
          @keyframes ruins-window-1 {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; }
          }
          
          @keyframes ruins-window-2 {
            0%, 100% { opacity: 0.68; }
            60% { opacity: 0.98; }
          }
          
          @keyframes palm-sway-1 {
            0%, 100% { opacity: 0.08; transform: translateX(0px) rotate(0deg); }
            50% { opacity: 0.14; transform: translateX(3px) rotate(2deg); }
          }
          
          @keyframes palm-sway-2 {
            0%, 100% { opacity: 0.07; transform: translateX(0px) rotate(0deg); }
            60% { opacity: 0.13; transform: translateX(-2px) rotate(-2deg); }
          }
          
          @keyframes palm-sway-3 {
            0%, 100% { opacity: 0.09; transform: translateX(0px) rotate(0deg); }
            55% { opacity: 0.15; transform: translateX(2px) rotate(1deg); }
          }
          
          @keyframes sand-drift-1 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px) rotate(0deg); }
            50% { opacity: 0.7; transform: translateX(120px) translateY(-15px) rotate(180deg); }
            100% { opacity: 0; transform: translateX(240px) translateY(-25px) rotate(360deg); }
          }
          
          @keyframes sand-drift-2 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px) rotate(0deg); }
            50% { opacity: 0.65; transform: translateX(100px) translateY(-12px) rotate(200deg); }
            100% { opacity: 0; transform: translateX(200px) translateY(-20px) rotate(400deg); }
          }
          
          @keyframes sand-drift-3 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px) rotate(0deg); }
            50% { opacity: 0.72; transform: translateX(110px) translateY(-18px) rotate(190deg); }
            100% { opacity: 0; transform: translateX(220px) translateY(-30px) rotate(380deg); }
          }
          
          @keyframes sand-drift-4 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px) rotate(0deg); }
            50% { opacity: 0.6; transform: translateX(-95px) translateY(-10px) rotate(170deg); }
            100% { opacity: 0; transform: translateX(-190px) translateY(-18px) rotate(340deg); }
          }
          
          @keyframes sand-drift-5 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px) rotate(0deg); }
            50% { opacity: 0.68; transform: translateX(-105px) translateY(-14px) rotate(185deg); }
            100% { opacity: 0; transform: translateX(-210px) translateY(-22px) rotate(370deg); }
          }
          
          @keyframes sand-drift-6 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px); }
            50% { opacity: 0.58; transform: translateX(85px) translateY(-8px); }
            100% { opacity: 0; transform: translateX(170px) translateY(-15px); }
          }
          
          @keyframes sand-drift-7 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px); }
            50% { opacity: 0.55; transform: translateX(-80px) translateY(-9px); }
            100% { opacity: 0; transform: translateX(-160px) translateY(-16px); }
          }
          
          @keyframes sand-drift-8 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px); }
            50% { opacity: 0.62; transform: translateX(90px) translateY(-11px); }
            100% { opacity: 0; transform: translateX(180px) translateY(-19px); }
          }
          
          @keyframes sun-ray-1 {
            0%, 100% { opacity: 0; }
            50% { opacity: 0.28; }
          }
          
          @keyframes sun-ray-2 {
            0%, 100% { opacity: 0; }
            60% { opacity: 0.22; }
          }
          
          @keyframes desert-atmosphere {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 0.75; }
          }
          
          @keyframes desert-floor-heat {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.85; }
          }
          
          .animate-water-ripple-1 { animation: water-ripple-1 6s ease-in-out infinite; }
          .animate-water-ripple-2 { animation: water-ripple-2 7s ease-in-out infinite 1.5s; }
          .animate-water-ripple-3 { animation: water-ripple-3 8s ease-in-out infinite 3s; }
          
          .animate-water-glint-1 { animation: water-glint-1 8s linear infinite; }
          .animate-water-glint-2 { animation: water-glint-2 9s linear infinite 2s; }
          .animate-water-glint-3 { animation: water-glint-3 7.5s linear infinite 4s; }
          
          .animate-heat-shimmer-1 { animation: heat-shimmer-1 8s ease-in-out infinite; }
          .animate-heat-shimmer-2 { animation: heat-shimmer-2 9s ease-in-out infinite 2s; }
          .animate-heat-shimmer-3 { animation: heat-shimmer-3 7.5s ease-in-out infinite 4s; }
          .animate-heat-shimmer-4 { animation: heat-shimmer-4 10s ease-in-out infinite 1s; }
          .animate-heat-shimmer-5 { animation: heat-shimmer-5 8.5s ease-in-out infinite 5s; }
          .animate-heat-shimmer-6 { animation: heat-shimmer-6 11s ease-in-out infinite 3s; }
          .animate-heat-shimmer-7 { animation: heat-shimmer-7 9.5s ease-in-out infinite 6s; }
          
          .animate-pyramid-glint-1 { animation: pyramid-glint-1 10s linear infinite; }
          .animate-pyramid-glint-2 { animation: pyramid-glint-2 11s linear infinite 2s; }
          .animate-pyramid-glint-3 { animation: pyramid-glint-3 9.5s linear infinite 4s; }
          .animate-pyramid-glint-4 { animation: pyramid-glint-4 10.5s linear infinite 1.5s; }
          .animate-pyramid-glint-5 { animation: pyramid-glint-5 12s linear infinite 5.5s; }
          .animate-pyramid-glint-6 { animation: pyramid-glint-6 9s linear infinite 3s; }
          .animate-pyramid-glint-7 { animation: pyramid-glint-7 11.5s linear infinite 6.5s; }
          
          .animate-ruins-glow-1 { animation: ruins-glow-1 5s ease-in-out infinite; }
          .animate-ruins-glow-2 { animation: ruins-glow-2 6s ease-in-out infinite 1.5s; }
          
          .animate-ruins-window-1 { animation: ruins-window-1 4s ease-in-out infinite; }
          .animate-ruins-window-2 { animation: ruins-window-2 4.5s ease-in-out infinite 1s; }
          
          .animate-palm-sway-1 { animation: palm-sway-1 4s ease-in-out infinite; }
          .animate-palm-sway-2 { animation: palm-sway-2 4.5s ease-in-out infinite 1s; }
          .animate-palm-sway-3 { animation: palm-sway-3 5s ease-in-out infinite 2s; }
          
          .animate-sand-drift-1 { animation: sand-drift-1 16s linear infinite; }
          .animate-sand-drift-2 { animation: sand-drift-2 18s linear infinite 3s; }
          .animate-sand-drift-3 { animation: sand-drift-3 17s linear infinite 6s; }
          .animate-sand-drift-4 { animation: sand-drift-4 19s linear infinite 2s; }
          .animate-sand-drift-5 { animation: sand-drift-5 15s linear infinite 8s; }
          .animate-sand-drift-6 { animation: sand-drift-6 20s linear infinite 4s; }
          .animate-sand-drift-7 { animation: sand-drift-7 18.5s linear infinite 7s; }
          .animate-sand-drift-8 { animation: sand-drift-8 16.5s linear infinite 10s; }
          
          .animate-sun-ray-1 { animation: sun-ray-1 20s ease-in-out infinite; }
          .animate-sun-ray-2 { animation: sun-ray-2 24s ease-in-out infinite 8s; }
          
          .animate-desert-atmosphere { animation: desert-atmosphere 16s ease-in-out infinite; }
          .animate-desert-floor-heat { animation: desert-floor-heat 14s ease-in-out infinite; }
        `}</style>
        </div>
        )}
      </div>
    </Card>
  );
}

