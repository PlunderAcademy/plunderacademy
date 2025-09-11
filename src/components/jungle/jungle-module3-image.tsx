"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function JungleModule3Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        {/* Base image */}
        <Image
          src="/islands/jungle/jungle-module3-image.webp"
          alt="Volcanic Pirate Castle Adventure Scene"
          fill
          className="object-cover"
        />
        
        {/* Animated overlay effects */}
        <div className="absolute inset-0 animate-effects">
          {/* Volcanic Eruption Effects */}
          <div className="absolute inset-0">
            {/* Main volcanic glow */}
            <div className="absolute top-[25%] left-[40%] w-[60px] h-[40px] bg-orange-500/60 rounded-full volcanic-glow animate-volcanic-pulse"></div>
            <div className="absolute top-[28%] left-[43%] w-[40px] h-[25px] bg-red-400/70 rounded-full volcanic-glow animate-volcanic-flicker"></div>
            <div className="absolute top-[22%] left-[45%] w-[30px] h-[20px] bg-yellow-400/50 rounded-full volcanic-glow animate-volcanic-core"></div>
            
            {/* Lava flow effects */}
            <div className="absolute top-[25%] left-[42%] w-[8px] h-[30px] bg-gradient-to-b from-orange-400/60 to-red-600/40 lava-flow animate-lava-flow-1"></div>
            <div className="absolute top-[25%] left-[55%] w-[6px] h-[25px] bg-gradient-to-b from-red-500/50 to-orange-700/30 lava-flow animate-lava-flow-2"></div>
            <div className="absolute top-[22%] left-[60%] w-[4px] h-[20px] bg-gradient-to-b from-yellow-500/40 to-red-500/20 lava-flow animate-lava-flow-3"></div>
          </div>

          {/* Volcanic Ember Particles */}
          <div className="absolute inset-0">
            {/* Large floating embers */}
            <div className="absolute top-[20%] left-[35%] w-[4px] h-[4px] bg-orange-400/80 rounded-full ember animate-ember-float-1"></div>
            <div className="absolute top-[25%] left-[65%] w-[3px] h-[3px] bg-red-400/70 rounded-full ember animate-ember-float-2"></div>
            <div className="absolute top-[18%] left-[50%] w-[5px] h-[5px] bg-yellow-400/75 rounded-full ember animate-ember-float-3"></div>
            <div className="absolute top-[30%] left-[40%] w-[3px] h-[3px] bg-orange-500/65 rounded-full ember animate-ember-float-4"></div>
            <div className="absolute top-[15%] right-[30%] w-[4px] h-[4px] bg-red-300/60 rounded-full ember animate-ember-float-5"></div>
            
            {/* Medium ember particles */}
            <div className="absolute top-[22%] left-[58%] w-[2px] h-[2px] bg-orange-300/50 rounded-full ember animate-ember-float-6"></div>
            <div className="absolute top-[28%] right-[35%] w-[2px] h-[2px] bg-yellow-300/45 rounded-full ember animate-ember-float-7"></div>
            <div className="absolute top-[16%] left-[45%] w-[3px] h-[3px] bg-red-200/40 rounded-full ember animate-ember-float-8"></div>
          </div>

          {/* Castle Window Glows */}
          <div className="absolute inset-0">
            {/* Main tower windows */}
            <div className="absolute top-[35%] left-[48%] w-[3px] h-[4px] bg-yellow-200/60 rounded castle-window animate-window-flicker-1"></div>
            <div className="absolute top-[45%] left-[46%] w-[2px] h-[3px] bg-orange-200/50 rounded castle-window animate-window-flicker-2"></div>
            <div className="absolute top-[40%] left-[52%] w-[2px] h-[3px] bg-yellow-300/55 rounded castle-window animate-window-flicker-3"></div>
            
            {/* Side tower windows */}
            <div className="absolute top-[42%] left-[42%] w-[2px] h-[2px] bg-orange-100/40 rounded castle-window animate-window-flicker-4"></div>
            <div className="absolute top-[38%] right-[45%] w-[2px] h-[3px] bg-yellow-200/45 rounded castle-window animate-window-flicker-5"></div>
          </div>

          {/* Pirate Flag Animation */}
          <div className="absolute inset-0">
            <div className="absolute top-[25%] left-[50%] w-[8px] h-[6px] bg-black/40 flag animate-flag-wave"></div>
          </div>

          {/* Dramatic Sky Lightning */}
          <div className="absolute inset-0">
            <div className="absolute top-[5%] left-[20%] w-[2px] h-[25%] bg-white/70 lightning animate-lightning-flash-1"></div>
            <div className="absolute top-[8%] right-[25%] w-[1px] h-[20%] bg-blue-100/60 lightning animate-lightning-flash-2"></div>
            <div className="absolute top-[3%] left-[70%] w-[2px] h-[18%] bg-white/50 lightning animate-lightning-flash-3"></div>
            
            {/* Lightning flash overlay */}
            <div className="absolute inset-0 bg-white/15 lightning-flash animate-sky-flash"></div>
          </div>

          {/* Mysterious Bottom Fog */}
          <div className="absolute inset-0">
            {/* Dense fog base */}
            <div className="absolute bottom-[0%] left-[0%] w-full h-[10%] bg-gradient-to-t from-gray-300/25 via-gray-400/15 to-transparent fog-base animate-fog-drift-base"></div>
            
            {/* Floating fog wisps */}
            <div className="absolute bottom-[2%] left-[10%] w-[80px] h-[25px] bg-gray-200/20 rounded-full fog-wisp animate-fog-drift-1"></div>
            <div className="absolute bottom-[4%] right-[15%] w-[60px] h-[20px] bg-gray-300/18 rounded-full fog-wisp animate-fog-drift-2"></div>
            <div className="absolute bottom-[1%] left-[60%] w-[70px] h-[22px] bg-gray-100/22 rounded-full fog-wisp animate-fog-drift-3"></div>
            <div className="absolute bottom-[6%] left-[30%] w-[50px] h-[18px] bg-gray-400/16 rounded-full fog-wisp animate-fog-drift-4"></div>
            
            {/* Thin fog tendrils */}
            <div className="absolute bottom-[3%] right-[40%] w-[40px] h-[15px] bg-gray-200/14 rounded-full fog-tendril animate-fog-tendril-1"></div>
            <div className="absolute bottom-[7%] left-[20%] w-[35px] h-[12px] bg-gray-300/12 rounded-full fog-tendril animate-fog-tendril-2"></div>
          </div>

          {/* Volcanic Atmospheric Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-red-600/8 via-orange-500/5 to-yellow-400/3 animate-volcanic-atmosphere"></div>
          
          {/* Dramatic Sky Depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/6 via-transparent to-red-900/8 animate-dramatic-sky"></div>
        </div>
        
        <style jsx>{`
          .volcanic-glow {
            filter: blur(8px);
            box-shadow: 0 0 30px currentColor, 0 0 60px currentColor, 0 0 90px currentColor;
          }
          
          .lava-flow {
            filter: blur(2px);
            box-shadow: 0 0 15px currentColor;
          }
          
          .ember {
            box-shadow: 0 0 10px currentColor, 0 0 20px currentColor;
            filter: blur(0.5px);
          }
          
          .castle-window {
            filter: blur(1px);
            box-shadow: 0 0 8px currentColor, 0 0 16px currentColor;
          }
          
          .flag {
            filter: blur(0.5px);
          }
          
          .lightning {
            filter: blur(1px);
            box-shadow: 0 0 20px currentColor, 0 0 40px currentColor;
            opacity: 0;
          }
          
          .lightning-flash {
            opacity: 0;
          }
          
          .fog-base {
            filter: blur(4px);
            opacity: 0;
          }
          
          .fog-wisp {
            filter: blur(6px);
            opacity: 0;
          }
          
          .fog-tendril {
            filter: blur(3px);
            opacity: 0;
          }
          
          .animate-effects .volcanic-glow {
            animation-play-state: running;
          }
          
          .animate-effects .lava-flow {
            animation-play-state: running;
          }
          
          .animate-effects .ember {
            animation-play-state: running;
          }
          
          .animate-effects .castle-window {
            animation-play-state: running;
          }
          
          .animate-effects .flag {
            animation-play-state: running;
          }
          
          .animate-effects .lightning {
            animation-play-state: running;
          }
          
          .animate-effects .lightning-flash {
            animation-play-state: running;
          }
          
          .animate-effects .fog-base {
            animation-play-state: running;
          }
          
          .animate-effects .fog-wisp {
            animation-play-state: running;
          }
          
          .animate-effects .fog-tendril {
            animation-play-state: running;
          }
          
          @keyframes volcanic-pulse {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 0.9; transform: scale(1.2); }
          }
          
          @keyframes volcanic-flicker {
            0%, 100% { opacity: 0.7; transform: scale(1) rotate(-2deg); }
            25% { opacity: 0.9; transform: scale(1.3) rotate(1deg); }
            50% { opacity: 0.4; transform: scale(0.8) rotate(-1deg); }
            75% { opacity: 0.8; transform: scale(1.1) rotate(2deg); }
          }
          
          @keyframes volcanic-core {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            33% { opacity: 0.8; transform: scale(1.4); }
            66% { opacity: 0.3; transform: scale(0.7); }
          }
          
          @keyframes lava-flow-1 {
            0%, 100% { opacity: 0.6; transform: scaleY(1) skewX(2deg); }
            50% { opacity: 0.9; transform: scaleY(1.2) skewX(-1deg); }
          }
          
          @keyframes lava-flow-2 {
            0%, 100% { opacity: 0.5; transform: scaleY(1) skewX(-1deg); }
            60% { opacity: 0.8; transform: scaleY(1.3) skewX(2deg); }
          }
          
          @keyframes lava-flow-3 {
            0%, 100% { opacity: 0.4; transform: scaleY(1); }
            40% { opacity: 0.7; transform: scaleY(1.4); }
          }
          
          @keyframes ember-float-1 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.8; }
            33% { transform: translateY(-30px) translateX(20px) rotate(120deg); opacity: 0.4; }
            66% { transform: translateY(-15px) translateX(-10px) rotate(240deg); opacity: 1; }
          }
          
          @keyframes ember-float-2 {
            0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.7; }
            50% { transform: translateY(-40px) translateX(-15px) scale(1.5); opacity: 0.3; }
          }
          
          @keyframes ember-float-3 {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.75; }
            25% { transform: translateY(-25px) translateX(15px); opacity: 0.9; }
            75% { transform: translateY(-35px) translateX(-8px); opacity: 0.2; }
          }
          
          @keyframes ember-float-4 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.65; }
            40% { transform: translateY(-20px) translateX(25px) rotate(180deg); opacity: 0.9; }
            80% { transform: translateY(-45px) translateX(-12px) rotate(360deg); opacity: 0.1; }
          }
          
          @keyframes ember-float-5 {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.6; }
            60% { transform: translateY(-50px) translateX(-20px); opacity: 0.4; }
          }
          
          @keyframes ember-float-6 {
            0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.5; }
            45% { transform: translateY(-18px) translateX(12px) scale(1.8); opacity: 0.8; }
            85% { transform: translateY(-38px) translateX(-6px) scale(0.5); opacity: 0.2; }
          }
          
          @keyframes ember-float-7 {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.45; }
            35% { transform: translateY(-28px) translateX(-18px); opacity: 0.7; }
            70% { transform: translateY(-12px) translateX(8px); opacity: 0.9; }
          }
          
          @keyframes ember-float-8 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.4; }
            55% { transform: translateY(-32px) translateX(22px) rotate(270deg); opacity: 0.6; }
          }
          
          @keyframes window-flicker-1 {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 0.9; }
          }
          
          @keyframes window-flicker-2 {
            0%, 100% { opacity: 0.5; }
            60% { opacity: 0.8; }
          }
          
          @keyframes window-flicker-3 {
            0%, 100% { opacity: 0.55; }
            40% { opacity: 0.85; }
          }
          
          @keyframes window-flicker-4 {
            0%, 100% { opacity: 0.4; }
            70% { opacity: 0.7; }
          }
          
          @keyframes window-flicker-5 {
            0%, 100% { opacity: 0.45; }
            30% { opacity: 0.75; }
          }
          
          @keyframes flag-wave {
            0%, 100% { transform: skewX(0deg) scaleX(1); }
            25% { transform: skewX(5deg) scaleX(1.1); }
            50% { transform: skewX(-3deg) scaleX(0.9); }
            75% { transform: skewX(4deg) scaleX(1.05); }
          }
          
          @keyframes lightning-flash-1 {
            0%, 95%, 100% { opacity: 0; transform: scaleY(0); }
            96%, 98% { opacity: 1; transform: scaleY(1); }
            97% { opacity: 0.5; transform: scaleY(0.8); }
          }
          
          @keyframes lightning-flash-2 {
            0%, 90%, 100% { opacity: 0; transform: scaleY(0) skewX(3deg); }
            91%, 93% { opacity: 0.8; transform: scaleY(1) skewX(3deg); }
            92% { opacity: 0.3; transform: scaleY(0.6) skewX(3deg); }
          }
          
          @keyframes lightning-flash-3 {
            0%, 88%, 100% { opacity: 0; transform: scaleY(0); }
            89%, 91% { opacity: 0.6; transform: scaleY(1); }
            90% { opacity: 0.2; transform: scaleY(0.7); }
          }
          
          @keyframes sky-flash {
            0%, 88%, 100% { opacity: 0; }
            89%, 91% { opacity: 0.2; }
          }
          
          @keyframes volcanic-atmosphere {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; }
          }
          
          @keyframes dramatic-sky {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 0.9; }
          }
          
          @keyframes fog-drift-base {
            0%, 100% { opacity: 0.25; }
            50% { opacity: 0.4; }
          }
          
          @keyframes fog-drift-1 {
            0%, 100% { opacity: 0; transform: translateX(0px) scale(1); }
            50% { opacity: 0.3; transform: translateX(30px) scale(1.2); }
          }
          
          @keyframes fog-drift-2 {
            0%, 100% { opacity: 0; transform: translateX(0px) translateY(0px) scale(1); }
            50% { opacity: 0.25; transform: translateX(-25px) translateY(-3px) scale(1.1); }
          }
          
          @keyframes fog-drift-3 {
            0%, 100% { opacity: 0; transform: translateX(0px) scale(1); }
            50% { opacity: 0.35; transform: translateX(20px) scale(1.3); }
          }
          
          @keyframes fog-drift-4 {
            0%, 100% { opacity: 0; transform: translateX(0px) translateY(0px) scale(1); }
            50% { opacity: 0.22; transform: translateX(-15px) translateY(2px) scale(1.1); }
          }
          
          @keyframes fog-tendril-1 {
            0%, 100% { opacity: 0; transform: translateX(0px) scaleX(1); }
            33% { opacity: 0.2; transform: translateX(15px) scaleX(1.4); }
            66% { opacity: 0.15; transform: translateX(8px) scaleX(0.8); }
          }
          
          @keyframes fog-tendril-2 {
            0%, 100% { opacity: 0; transform: translateX(0px) translateY(0px) scaleX(1); }
            40% { opacity: 0.18; transform: translateX(-12px) translateY(-2px) scaleX(1.3); }
            80% { opacity: 0.12; transform: translateX(-5px) translateY(-1px) scaleX(0.9); }
          }
          
          .animate-volcanic-pulse {
            animation: volcanic-pulse 4s ease-in-out infinite;
          }
          
          .animate-volcanic-flicker {
            animation: volcanic-flicker 3s ease-in-out infinite 0.5s;
          }
          
          .animate-volcanic-core {
            animation: volcanic-core 2.5s ease-in-out infinite 1s;
          }
          
          .animate-lava-flow-1 {
            animation: lava-flow-1 5s ease-in-out infinite;
          }
          
          .animate-lava-flow-2 {
            animation: lava-flow-2 6s ease-in-out infinite 2s;
          }
          
          .animate-lava-flow-3 {
            animation: lava-flow-3 4.5s ease-in-out infinite 3s;
          }
          
          .animate-ember-float-1 {
            animation: ember-float-1 12s ease-in-out infinite;
          }
          
          .animate-ember-float-2 {
            animation: ember-float-2 14s ease-in-out infinite 3s;
          }
          
          .animate-ember-float-3 {
            animation: ember-float-3 10s ease-in-out infinite 6s;
          }
          
          .animate-ember-float-4 {
            animation: ember-float-4 16s ease-in-out infinite 2s;
          }
          
          .animate-ember-float-5 {
            animation: ember-float-5 13s ease-in-out infinite 8s;
          }
          
          .animate-ember-float-6 {
            animation: ember-float-6 11s ease-in-out infinite 4s;
          }
          
          .animate-ember-float-7 {
            animation: ember-float-7 15s ease-in-out infinite 7s;
          }
          
          .animate-ember-float-8 {
            animation: ember-float-8 9s ease-in-out infinite 5s;
          }
          
          .animate-window-flicker-1 {
            animation: window-flicker-1 6s ease-in-out infinite;
          }
          
          .animate-window-flicker-2 {
            animation: window-flicker-2 7s ease-in-out infinite 2s;
          }
          
          .animate-window-flicker-3 {
            animation: window-flicker-3 5.5s ease-in-out infinite 4s;
          }
          
          .animate-window-flicker-4 {
            animation: window-flicker-4 8s ease-in-out infinite 1s;
          }
          
          .animate-window-flicker-5 {
            animation: window-flicker-5 6.5s ease-in-out infinite 3s;
          }
          
          .animate-flag-wave {
            animation: flag-wave 4s ease-in-out infinite;
          }
          
          .animate-lightning-flash-1 {
            animation: lightning-flash-1 15s linear infinite;
          }
          
          .animate-lightning-flash-2 {
            animation: lightning-flash-2 18s linear infinite 5s;
          }
          
          .animate-lightning-flash-3 {
            animation: lightning-flash-3 20s linear infinite 10s;
          }
          
          .animate-sky-flash {
            animation: sky-flash 18s linear infinite 5s;
          }
          
          .animate-volcanic-atmosphere {
            animation: volcanic-atmosphere 10s ease-in-out infinite;
          }
          
          .animate-dramatic-sky {
            animation: dramatic-sky 15s ease-in-out infinite;
          }
          
          .animate-fog-drift-base {
            animation: fog-drift-base 12s ease-in-out infinite;
          }
          
          .animate-fog-drift-1 {
            animation: fog-drift-1 20s ease-in-out infinite;
          }
          
          .animate-fog-drift-2 {
            animation: fog-drift-2 25s ease-in-out infinite 5s;
          }
          
          .animate-fog-drift-3 {
            animation: fog-drift-3 18s ease-in-out infinite 8s;
          }
          
          .animate-fog-drift-4 {
            animation: fog-drift-4 22s ease-in-out infinite 3s;
          }
          
          .animate-fog-tendril-1 {
            animation: fog-tendril-1 15s ease-in-out infinite 2s;
          }
          
          .animate-fog-tendril-2 {
            animation: fog-tendril-2 17s ease-in-out infinite 6s;
          }
        `}</style>
      </div>
    </Card>
  );
}
