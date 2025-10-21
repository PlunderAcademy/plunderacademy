"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Island2Module1Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        {/* Base image */}
        <Image
          src="/islands/island2/island2-module1-image.webp"
          alt="Advanced Solidity Foundations - Frost Peak Adventure"
          fill
          className="object-cover"
          priority
        />
        
        {/* Animated overlay effects */}
        <div className="absolute inset-0 animate-effects">
          {/* Campfire Flames & Glow */}
          <div className="absolute inset-0">
            {/* Main campfire glow */}
            <div className="absolute top-[93%] left-[73%] w-[15px] h-[10px] bg-orange-400/70 rounded-full campfire-glow animate-campfire-flicker-1"></div>
            <div className="absolute top-[94%] left-[73.5%] w-[10px] h-[8px] bg-yellow-300/80 rounded-full campfire-glow animate-campfire-flicker-2"></div>
            <div className="absolute top-[95%] left-[74%] w-[6px] h-[5px] bg-yellow-100/90 rounded-full campfire-core animate-campfire-core"></div>
            
            {/* Fire embers rising */}
            <div className="absolute top-[91%] left-[72%] w-[2px] h-[2px] bg-orange-400/80 rounded-full fire-ember animate-ember-rise-1"></div>
            <div className="absolute top-[92%] left-[74%] w-[2px] h-[2px] bg-yellow-400/70 rounded-full fire-ember animate-ember-rise-2"></div>
            <div className="absolute top-[90%] left-[73.5%] w-[1px] h-[1px] bg-red-400/60 rounded-full fire-ember animate-ember-rise-3"></div>
          </div>

          {/* Ice Glacier Sparkles */}
          <div className="absolute inset-0">
            {/* Central glacier sparkles */}
            <div className="absolute top-[48%] left-[50%] w-[3px] h-[3px] bg-cyan-200/90 rounded-full ice-sparkle animate-ice-sparkle-1"></div>
            <div className="absolute top-[45%] left-[48%] w-[2px] h-[2px] bg-blue-100/80 rounded-full ice-sparkle animate-ice-sparkle-2"></div>
            <div className="absolute top-[52%] left-[55%] w-[3px] h-[3px] bg-white/85 rounded-full ice-sparkle animate-ice-sparkle-3"></div>
            <div className="absolute top-[46%] left-[52%] w-[2px] h-[2px] bg-cyan-100/75 rounded-full ice-sparkle animate-ice-sparkle-4"></div>
            <div className="absolute top-[50%] left-[45%] w-[2px] h-[2px] bg-blue-200/70 rounded-full ice-sparkle animate-ice-sparkle-5"></div>
            
            {/* Left iceberg sparkles */}
            <div className="absolute top-[58%] left-[20%] w-[2px] h-[2px] bg-cyan-200/85 rounded-full ice-sparkle animate-ice-sparkle-6"></div>
            <div className="absolute top-[60%] left-[18%] w-[2px] h-[2px] bg-white/75 rounded-full ice-sparkle animate-ice-sparkle-7"></div>
            
            {/* Mountain snow sparkles */}
            <div className="absolute top-[25%] left-[50%] w-[2px] h-[2px] bg-white/90 rounded-full ice-sparkle animate-ice-sparkle-8"></div>
            <div className="absolute top-[30%] left-[35%] w-[1px] h-[1px] bg-cyan-100/80 rounded-full ice-sparkle animate-ice-sparkle-9"></div>
            <div className="absolute top-[28%] left-[65%] w-[2px] h-[2px] bg-blue-100/85 rounded-full ice-sparkle animate-ice-sparkle-10"></div>
          </div>

          {/* Floating Icebergs Motion */}
          <div className="absolute inset-0">
            {/* Subtle iceberg shimmer overlay */}
            <div className="absolute top-[56%] left-[15%] w-[120px] h-[80px] bg-cyan-200/8 rounded-full iceberg-shimmer animate-iceberg-float-1"></div>
            <div className="absolute top-[70%] left-[85%] w-[80px] h-[50px] bg-blue-100/6 rounded-full iceberg-shimmer animate-iceberg-float-2"></div>
          </div>

          {/* Arctic Wind & Snow Drift */}
          <div className="absolute inset-0">
            {/* Blowing snow particles */}
            <div className="absolute top-[35%] left-[10%] w-[3px] h-[3px] bg-white/50 rounded-full snow-particle animate-snow-drift-1"></div>
            <div className="absolute top-[40%] left-[25%] w-[2px] h-[2px] bg-white/40 rounded-full snow-particle animate-snow-drift-2"></div>
            <div className="absolute top-[32%] left-[70%] w-[3px] h-[3px] bg-white/45 rounded-full snow-particle animate-snow-drift-3"></div>
            <div className="absolute top-[38%] left-[80%] w-[2px] h-[2px] bg-white/35 rounded-full snow-particle animate-snow-drift-4"></div>
            <div className="absolute top-[45%] left-[60%] w-[2px] h-[2px] bg-cyan-100/40 rounded-full snow-particle animate-snow-drift-5"></div>
            
            {/* Snow mist wisps */}
            <div className="absolute top-[40%] left-[5%] w-[60px] h-[15px] bg-white/12 rounded-full snow-mist animate-snow-mist-1"></div>
            <div className="absolute top-[35%] right-[10%] w-[80px] h-[20px] bg-cyan-100/10 rounded-full snow-mist animate-snow-mist-2"></div>
            <div className="absolute top-[42%] left-[40%] w-[50px] h-[12px] bg-white/8 rounded-full snow-mist animate-snow-mist-3"></div>
          </div>

          {/* Cold Atmospheric Fog */}
          <div className="absolute inset-0">
            {/* Ground fog layer */}
            <div className="absolute bottom-[0%] left-[0%] w-full h-[20%] bg-gradient-to-t from-blue-100/15 via-cyan-50/8 to-transparent arctic-fog animate-arctic-fog-base"></div>
            
            {/* Floating fog wisps */}
            <div className="absolute bottom-[8%] left-[20%] w-[70px] h-[20px] bg-cyan-100/18 rounded-full fog-wisp animate-fog-drift-1"></div>
            <div className="absolute bottom-[12%] right-[25%] w-[55px] h-[16px] bg-blue-100/16 rounded-full fog-wisp animate-fog-drift-2"></div>
            <div className="absolute bottom-[5%] left-[65%] w-[65px] h-[18px] bg-cyan-50/20 rounded-full fog-wisp animate-fog-drift-3"></div>
            <div className="absolute bottom-[15%] left-[40%] w-[45px] h-[14px] bg-blue-50/14 rounded-full fog-wisp animate-fog-drift-4"></div>
          </div>

          {/* Igloo Warmth Glow */}
          <div className="absolute inset-0">
            <div className="absolute top-[68%] right-[14%] w-[12px] h-[8px] bg-orange-200/30 rounded-full igloo-glow animate-igloo-warmth"></div>
            <div className="absolute top-[69%] right-[14.5%] w-[6px] h-[4px] bg-yellow-200/25 rounded-full igloo-glow animate-igloo-warmth-core"></div>
          </div>

          {/* Northern Lights Atmospheric Effect */}
          <div className="absolute inset-0">
            {/* Subtle aurora borealis shimmer */}
            <div className="absolute top-[10%] left-[20%] w-[200px] h-[80px] bg-gradient-to-r from-cyan-300/5 via-blue-300/8 to-transparent aurora animate-aurora-1"></div>
            <div className="absolute top-[5%] right-[15%] w-[180px] h-[70px] bg-gradient-to-l from-blue-200/6 via-cyan-200/7 to-transparent aurora animate-aurora-2"></div>
          </div>

          {/* Arctic Atmospheric Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-200/3 via-blue-100/2 to-transparent animate-arctic-atmosphere"></div>
          
          {/* Cold Mountain Depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-200/5 via-transparent to-cyan-100/3 animate-mountain-depth"></div>
        </div>
        
        <style jsx>{`
          .campfire-glow {
            filter: blur(6px);
            box-shadow: 0 0 30px currentColor, 0 0 60px currentColor, 0 0 90px currentColor;
          }
          
          .campfire-core {
            filter: blur(3px);
            box-shadow: 0 0 25px currentColor, 0 0 50px currentColor, 0 0 75px currentColor;
          }
          
          .fire-ember {
            box-shadow: 0 0 15px currentColor, 0 0 30px currentColor, 0 0 45px currentColor;
            filter: blur(0.6px);
          }
          
          .ice-sparkle {
            box-shadow: 0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor;
            filter: blur(0.3px);
          }
          
          .iceberg-shimmer {
            filter: blur(25px);
          }
          
          .snow-particle {
            filter: blur(1px);
            box-shadow: 0 0 10px currentColor, 0 0 20px currentColor;
          }
          
          .snow-mist {
            filter: blur(12px);
            opacity: 0;
          }
          
          .arctic-fog {
            filter: blur(10px);
            opacity: 0;
          }
          
          .fog-wisp {
            filter: blur(15px);
            opacity: 0;
          }
          
          .igloo-glow {
            filter: blur(10px);
            box-shadow: 0 0 25px currentColor, 0 0 50px currentColor;
          }
          
          .aurora {
            filter: blur(35px);
            opacity: 0;
          }
          
          .animate-effects .campfire-glow {
            animation-play-state: running;
          }
          
          .animate-effects .campfire-core {
            animation-play-state: running;
          }
          
          .animate-effects .fire-ember {
            animation-play-state: running;
          }
          
          .animate-effects .ice-sparkle {
            animation-play-state: running;
          }
          
          .animate-effects .iceberg-shimmer {
            animation-play-state: running;
          }
          
          .animate-effects .snow-particle {
            animation-play-state: running;
          }
          
          .animate-effects .snow-mist {
            animation-play-state: running;
          }
          
          .animate-effects .arctic-fog {
            animation-play-state: running;
          }
          
          .animate-effects .fog-wisp {
            animation-play-state: running;
          }
          
          .animate-effects .igloo-glow {
            animation-play-state: running;
          }
          
          .animate-effects .aurora {
            animation-play-state: running;
          }
          
          @keyframes campfire-flicker-1 {
            0%, 100% { opacity: 0.85; transform: scale(1); }
            25% { opacity: 1; transform: scale(1.4); }
            50% { opacity: 0.7; transform: scale(0.95); }
            75% { opacity: 0.95; transform: scale(1.25); }
          }
          
          @keyframes campfire-flicker-2 {
            0%, 100% { opacity: 0.9; transform: scale(1) rotate(0deg); }
            30% { opacity: 1; transform: scale(1.5) rotate(8deg); }
            60% { opacity: 0.6; transform: scale(0.85) rotate(-5deg); }
            90% { opacity: 1; transform: scale(1.3) rotate(4deg); }
          }
          
          @keyframes campfire-core {
            0%, 100% { opacity: 1; transform: scale(1); }
            40% { opacity: 1; transform: scale(1.8); }
            70% { opacity: 0.8; transform: scale(0.8); }
          }
          
          @keyframes ember-rise-1 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.8; transform: translateY(-25px) translateX(5px); }
            100% { opacity: 0; transform: translateY(-50px) translateX(8px); }
          }
          
          @keyframes ember-rise-2 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.7; transform: translateY(-20px) translateX(-3px); }
            100% { opacity: 0; transform: translateY(-40px) translateX(-5px); }
          }
          
          @keyframes ember-rise-3 {
            0% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.6; transform: translateY(-18px) translateX(4px); }
            100% { opacity: 0; transform: translateY(-35px) translateX(6px); }
          }
          
          @keyframes ice-sparkle-1 {
            0%, 80%, 100% { opacity: 0; transform: scale(1); }
            85%, 95% { opacity: 1; transform: scale(2.2); }
            90% { opacity: 0.7; transform: scale(1.7); }
          }
          
          @keyframes ice-sparkle-2 {
            0%, 75%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            80%, 90% { opacity: 1; transform: scale(2.1) rotate(360deg); }
            85% { opacity: 0.65; transform: scale(1.6) rotate(180deg); }
          }
          
          @keyframes ice-sparkle-3 {
            0%, 70%, 100% { opacity: 0; transform: scale(1); }
            75%, 85% { opacity: 1; transform: scale(2.4); }
            80% { opacity: 0.6; transform: scale(1.9); }
          }
          
          @keyframes ice-sparkle-4 {
            0%, 85%, 100% { opacity: 0; transform: scale(1); }
            90%, 96% { opacity: 1; transform: scale(2); }
            93% { opacity: 0.68; transform: scale(1.55); }
          }
          
          @keyframes ice-sparkle-5 {
            0%, 65%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            70%, 80% { opacity: 1; transform: scale(2.3) rotate(360deg); }
            75% { opacity: 0.62; transform: scale(1.8) rotate(180deg); }
          }
          
          @keyframes ice-sparkle-6 {
            0%, 88%, 100% { opacity: 0; transform: scale(1); }
            92%, 98% { opacity: 1; transform: scale(2.1); }
            95% { opacity: 0.7; transform: scale(1.65); }
          }
          
          @keyframes ice-sparkle-7 {
            0%, 78%, 100% { opacity: 0; transform: scale(1); }
            82%, 92% { opacity: 1; transform: scale(2); }
            87% { opacity: 0.65; transform: scale(1.6); }
          }
          
          @keyframes ice-sparkle-8 {
            0%, 60%, 100% { opacity: 0; transform: scale(1); }
            65%, 75% { opacity: 1; transform: scale(2.5); }
            70% { opacity: 0.72; transform: scale(2); }
          }
          
          @keyframes ice-sparkle-9 {
            0%, 82%, 100% { opacity: 0; transform: scale(1); }
            86%, 94% { opacity: 1; transform: scale(2.3); }
            90% { opacity: 0.6; transform: scale(1.8); }
          }
          
          @keyframes ice-sparkle-10 {
            0%, 72%, 100% { opacity: 0; transform: scale(1); }
            77%, 87% { opacity: 1; transform: scale(2.4); }
            82% { opacity: 0.7; transform: scale(1.9); }
          }
          
          @keyframes iceberg-float-1 {
            0%, 100% { opacity: 0.08; transform: translateY(0px); }
            50% { opacity: 0.15; transform: translateY(-3px); }
          }
          
          @keyframes iceberg-float-2 {
            0%, 100% { opacity: 0.06; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.12; transform: translateY(-2px) translateX(2px); }
          }
          
          @keyframes snow-drift-1 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px); }
            50% { opacity: 0.5; transform: translateX(150px) translateY(20px); }
            100% { opacity: 0; transform: translateX(300px) translateY(35px); }
          }
          
          @keyframes snow-drift-2 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px); }
            50% { opacity: 0.4; transform: translateX(120px) translateY(15px); }
            100% { opacity: 0; transform: translateX(240px) translateY(28px); }
          }
          
          @keyframes snow-drift-3 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px); }
            50% { opacity: 0.45; transform: translateX(-140px) translateY(18px); }
            100% { opacity: 0; transform: translateX(-280px) translateY(32px); }
          }
          
          @keyframes snow-drift-4 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px); }
            50% { opacity: 0.35; transform: translateX(-100px) translateY(12px); }
            100% { opacity: 0; transform: translateX(-200px) translateY(25px); }
          }
          
          @keyframes snow-drift-5 {
            0% { opacity: 0; transform: translateX(0px) translateY(0px); }
            50% { opacity: 0.4; transform: translateX(110px) translateY(22px); }
            100% { opacity: 0; transform: translateX(220px) translateY(40px); }
          }
          
          @keyframes snow-mist-1 {
            0% { opacity: 0; transform: translateX(0px) scaleX(1); }
            50% { opacity: 0.2; transform: translateX(80px) scaleX(1.3); }
            100% { opacity: 0; transform: translateX(160px) scaleX(1); }
          }
          
          @keyframes snow-mist-2 {
            0% { opacity: 0; transform: translateX(0px) scaleX(1); }
            50% { opacity: 0.15; transform: translateX(-100px) scaleX(1.2); }
            100% { opacity: 0; transform: translateX(-200px) scaleX(1); }
          }
          
          @keyframes snow-mist-3 {
            0% { opacity: 0; transform: translateX(0px) scaleX(1); }
            50% { opacity: 0.12; transform: translateX(60px) scaleX(1.4); }
            100% { opacity: 0; transform: translateX(120px) scaleX(1); }
          }
          
          @keyframes arctic-fog-base {
            0%, 100% { opacity: 0.15; }
            50% { opacity: 0.25; }
          }
          
          @keyframes fog-drift-1 {
            0%, 100% { opacity: 0; transform: translateX(0px) scale(1); }
            50% { opacity: 0.22; transform: translateX(35px) scale(1.15); }
          }
          
          @keyframes fog-drift-2 {
            0%, 100% { opacity: 0; transform: translateX(0px) translateY(0px) scale(1); }
            50% { opacity: 0.18; transform: translateX(-30px) translateY(-3px) scale(1.1); }
          }
          
          @keyframes fog-drift-3 {
            0%, 100% { opacity: 0; transform: translateX(0px) scale(1); }
            50% { opacity: 0.25; transform: translateX(25px) scale(1.2); }
          }
          
          @keyframes fog-drift-4 {
            0%, 100% { opacity: 0; transform: translateX(0px) translateY(0px) scale(1); }
            50% { opacity: 0.16; transform: translateX(-20px) translateY(2px) scale(1.12); }
          }
          
          @keyframes igloo-warmth {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.2); }
          }
          
          @keyframes igloo-warmth-core {
            0%, 100% { opacity: 0.25; transform: scale(1); }
            60% { opacity: 0.45; transform: scale(1.4); }
          }
          
          @keyframes aurora-1 {
            0%, 100% { opacity: 0; transform: translateY(0px) scaleY(1); }
            50% { opacity: 0.35; transform: translateY(-15px) scaleY(1.4); }
          }
          
          @keyframes aurora-2 {
            0%, 100% { opacity: 0; transform: translateY(0px) scaleY(1); }
            60% { opacity: 0.28; transform: translateY(-12px) scaleY(1.3); }
          }
          
          @keyframes arctic-atmosphere {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 0.75; }
          }
          
          @keyframes mountain-depth {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 0.9; }
          }
          
          .animate-campfire-flicker-1 {
            animation: campfire-flicker-1 3s ease-in-out infinite;
          }
          
          .animate-campfire-flicker-2 {
            animation: campfire-flicker-2 2.5s ease-in-out infinite 0.5s;
          }
          
          .animate-campfire-core {
            animation: campfire-core 2s ease-in-out infinite 1s;
          }
          
          .animate-ember-rise-1 {
            animation: ember-rise-1 4s ease-out infinite;
          }
          
          .animate-ember-rise-2 {
            animation: ember-rise-2 5s ease-out infinite 1.5s;
          }
          
          .animate-ember-rise-3 {
            animation: ember-rise-3 4.5s ease-out infinite 3s;
          }
          
          .animate-ice-sparkle-1 {
            animation: ice-sparkle-1 6s linear infinite;
          }
          
          .animate-ice-sparkle-2 {
            animation: ice-sparkle-2 7s linear infinite 1s;
          }
          
          .animate-ice-sparkle-3 {
            animation: ice-sparkle-3 8s linear infinite 2s;
          }
          
          .animate-ice-sparkle-4 {
            animation: ice-sparkle-4 6.5s linear infinite 3s;
          }
          
          .animate-ice-sparkle-5 {
            animation: ice-sparkle-5 9s linear infinite 4s;
          }
          
          .animate-ice-sparkle-6 {
            animation: ice-sparkle-6 7.5s linear infinite 5s;
          }
          
          .animate-ice-sparkle-7 {
            animation: ice-sparkle-7 8.5s linear infinite 1.5s;
          }
          
          .animate-ice-sparkle-8 {
            animation: ice-sparkle-8 10s linear infinite 2.5s;
          }
          
          .animate-ice-sparkle-9 {
            animation: ice-sparkle-9 7s linear infinite 3.5s;
          }
          
          .animate-ice-sparkle-10 {
            animation: ice-sparkle-10 9.5s linear infinite 4.5s;
          }
          
          .animate-iceberg-float-1 {
            animation: iceberg-float-1 8s ease-in-out infinite;
          }
          
          .animate-iceberg-float-2 {
            animation: iceberg-float-2 10s ease-in-out infinite 3s;
          }
          
          .animate-snow-drift-1 {
            animation: snow-drift-1 15s linear infinite;
          }
          
          .animate-snow-drift-2 {
            animation: snow-drift-2 18s linear infinite 4s;
          }
          
          .animate-snow-drift-3 {
            animation: snow-drift-3 16s linear infinite 8s;
          }
          
          .animate-snow-drift-4 {
            animation: snow-drift-4 20s linear infinite 12s;
          }
          
          .animate-snow-drift-5 {
            animation: snow-drift-5 17s linear infinite 6s;
          }
          
          .animate-snow-mist-1 {
            animation: snow-mist-1 22s ease-in-out infinite;
          }
          
          .animate-snow-mist-2 {
            animation: snow-mist-2 25s ease-in-out infinite 8s;
          }
          
          .animate-snow-mist-3 {
            animation: snow-mist-3 20s ease-in-out infinite 15s;
          }
          
          .animate-arctic-fog-base {
            animation: arctic-fog-base 18s ease-in-out infinite;
          }
          
          .animate-fog-drift-1 {
            animation: fog-drift-1 24s ease-in-out infinite;
          }
          
          .animate-fog-drift-2 {
            animation: fog-drift-2 28s ease-in-out infinite 6s;
          }
          
          .animate-fog-drift-3 {
            animation: fog-drift-3 22s ease-in-out infinite 12s;
          }
          
          .animate-fog-drift-4 {
            animation: fog-drift-4 26s ease-in-out infinite 4s;
          }
          
          .animate-igloo-warmth {
            animation: igloo-warmth 5s ease-in-out infinite;
          }
          
          .animate-igloo-warmth-core {
            animation: igloo-warmth-core 6s ease-in-out infinite 1s;
          }
          
          .animate-aurora-1 {
            animation: aurora-1 20s ease-in-out infinite;
          }
          
          .animate-aurora-2 {
            animation: aurora-2 24s ease-in-out infinite 8s;
          }
          
          .animate-arctic-atmosphere {
            animation: arctic-atmosphere 16s ease-in-out infinite;
          }
          
          .animate-mountain-depth {
            animation: mountain-depth 20s ease-in-out infinite 5s;
          }
        `}</style>
      </div>
    </Card>
  );
}

