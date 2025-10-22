"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function JungleModule3Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        {/* Base image */}
        <Image
          src="/islands/island1/island1-module3-image.webp"
          alt="Tropical Pirate Castle Paradise Scene"
          fill
          className="object-cover"
        />
        
        {/* Animated overlay effects */}
        <div className="absolute inset-0 animate-effects">
          {/* Gentle Cloud Movement */}
          <div className="absolute inset-0">
            {/* Floating clouds */}
            <div className="absolute top-[8%] left-[15%] w-[80px] h-[25px] bg-white/20 rounded-full cloud animate-cloud-drift-1"></div>
            <div className="absolute top-[12%] right-[20%] w-[100px] h-[30px] bg-white/15 rounded-full cloud animate-cloud-drift-2"></div>
            <div className="absolute top-[18%] left-[60%] w-[70px] h-[22px] bg-white/18 rounded-full cloud animate-cloud-drift-3"></div>
            <div className="absolute top-[5%] left-[40%] w-[60px] h-[20px] bg-white/12 rounded-full cloud animate-cloud-drift-4"></div>
          </div>

          {/* Tropical Sunlight Particles */}
          <div className="absolute inset-0">
            {/* Floating light particles - dust motes in sunlight */}
            <div className="absolute top-[25%] left-[20%] w-[3px] h-[3px] bg-yellow-200/60 rounded-full light-particle animate-light-drift-1"></div>
            <div className="absolute top-[35%] left-[75%] w-[2px] h-[2px] bg-yellow-100/50 rounded-full light-particle animate-light-drift-2"></div>
            <div className="absolute top-[45%] left-[30%] w-[3px] h-[3px] bg-white/40 rounded-full light-particle animate-light-drift-3"></div>
            <div className="absolute top-[28%] right-[25%] w-[2px] h-[2px] bg-yellow-200/45 rounded-full light-particle animate-light-drift-4"></div>
            <div className="absolute top-[55%] left-[65%] w-[2px] h-[2px] bg-white/35 rounded-full light-particle animate-light-drift-5"></div>
            <div className="absolute top-[40%] left-[85%] w-[3px] h-[3px] bg-yellow-100/55 rounded-full light-particle animate-light-drift-6"></div>
          </div>

          {/* Water Sparkles */}
          <div className="absolute inset-0">
            {/* Sparkles on the water surface */}
            <div className="absolute bottom-[35%] left-[25%] w-[4px] h-[4px] bg-cyan-200/80 rounded-full water-sparkle animate-sparkle-1"></div>
            <div className="absolute bottom-[38%] left-[45%] w-[3px] h-[3px] bg-blue-200/70 rounded-full water-sparkle animate-sparkle-2"></div>
            <div className="absolute bottom-[32%] right-[35%] w-[3px] h-[3px] bg-white/75 rounded-full water-sparkle animate-sparkle-3"></div>
            <div className="absolute bottom-[40%] left-[60%] w-[2px] h-[2px] bg-cyan-100/60 rounded-full water-sparkle animate-sparkle-4"></div>
            <div className="absolute bottom-[36%] left-[70%] w-[3px] h-[3px] bg-blue-100/65 rounded-full water-sparkle animate-sparkle-5"></div>
          </div>

          {/* Pirate Flag Animation */}
          <div className="absolute inset-0">
            {/* Main flag on tall tower */}
            <div className="absolute top-[20%] left-[49.5%] w-[10px] h-[8px] bg-black/50 flag animate-flag-wave"></div>
            {/* Left ship flag */}
            <div className="absolute top-[38%] left-[18%] w-[6px] h-[5px] bg-black/40 flag animate-flag-wave-2"></div>
            {/* Right ship flag */}
            <div className="absolute top-[40%] right-[18%] w-[6px] h-[5px] bg-black/40 flag animate-flag-wave-3"></div>
          </div>

          {/* Gentle Foliage Sway */}
          <div className="absolute inset-0">
            {/* Palm fronds subtle movement */}
            <div className="absolute top-[10%] left-[2%] w-[15%] h-[30%] foliage animate-foliage-sway-1"></div>
            <div className="absolute top-[8%] right-[1%] w-[18%] h-[35%] foliage animate-foliage-sway-2"></div>
          </div>

          {/* Sunlight Rays */}
          <div className="absolute inset-0">
            {/* God rays filtering through clouds */}
            <div className="absolute top-[0%] left-[25%] w-[60px] h-[35%] bg-gradient-to-b from-yellow-100/15 via-yellow-200/8 to-transparent sunray animate-sunray-1"></div>
            <div className="absolute top-[0%] right-[30%] w-[50px] h-[40%] bg-gradient-to-b from-yellow-50/12 via-white/6 to-transparent sunray animate-sunray-2"></div>
          </div>

          {/* Tropical Atmosphere */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-200/5 via-transparent to-green-100/8 animate-tropical-atmosphere"></div>
          
          {/* Warm Sunny Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-100/8 via-transparent to-blue-100/10 animate-sunny-glow"></div>
        </div>
        
        <style jsx>{`
          .cloud {
            filter: blur(8px);
            opacity: 0.8;
          }
          
          .light-particle {
            filter: blur(0.5px);
            box-shadow: 0 0 6px currentColor, 0 0 12px currentColor;
          }
          
          .water-sparkle {
            box-shadow: 0 0 8px currentColor, 0 0 16px currentColor;
            filter: blur(0.5px);
          }
          
          .flag {
            filter: blur(0.5px);
          }
          
          .foliage {
            opacity: 0;
            transform-origin: bottom center;
          }
          
          .sunray {
            filter: blur(10px);
            opacity: 0.6;
          }
          
          .animate-effects .cloud {
            animation-play-state: running;
          }
          
          .animate-effects .light-particle {
            animation-play-state: running;
          }
          
          .animate-effects .water-sparkle {
            animation-play-state: running;
          }
          
          .animate-effects .flag {
            animation-play-state: running;
          }
          
          .animate-effects .foliage {
            animation-play-state: running;
          }
          
          .animate-effects .sunray {
            animation-play-state: running;
          }
          
          @keyframes cloud-drift-1 {
            0%, 100% { transform: translateX(0px) scale(1); opacity: 0.8; }
            50% { transform: translateX(30px) scale(1.1); opacity: 0.6; }
          }
          
          @keyframes cloud-drift-2 {
            0%, 100% { transform: translateX(0px) translateY(0px) scale(1); opacity: 0.7; }
            50% { transform: translateX(-25px) translateY(-5px) scale(1.15); opacity: 0.5; }
          }
          
          @keyframes cloud-drift-3 {
            0%, 100% { transform: translateX(0px) scale(1); opacity: 0.75; }
            50% { transform: translateX(20px) scale(1.05); opacity: 0.55; }
          }
          
          @keyframes cloud-drift-4 {
            0%, 100% { transform: translateX(0px) translateY(0px) scale(1); opacity: 0.65; }
            50% { transform: translateX(35px) translateY(3px) scale(1.2); opacity: 0.45; }
          }
          
          @keyframes light-drift-1 {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.6; }
            33% { transform: translateY(20px) translateX(15px); opacity: 0.9; }
            66% { transform: translateY(10px) translateX(-8px); opacity: 0.3; }
          }
          
          @keyframes light-drift-2 {
            0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.5; }
            50% { transform: translateY(25px) translateX(-12px) scale(1.3); opacity: 0.8; }
          }
          
          @keyframes light-drift-3 {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.4; }
            40% { transform: translateY(18px) translateX(20px); opacity: 0.7; }
            80% { transform: translateY(5px) translateX(-5px); opacity: 0.2; }
          }
          
          @keyframes light-drift-4 {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.45; }
            60% { transform: translateY(22px) translateX(-18px); opacity: 0.75; }
          }
          
          @keyframes light-drift-5 {
            0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.35; }
            45% { transform: translateY(15px) translateX(10px) scale(1.5); opacity: 0.65; }
          }
          
          @keyframes light-drift-6 {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.55; }
            35% { transform: translateY(28px) translateX(-22px); opacity: 0.85; }
            70% { transform: translateY(12px) translateX(8px); opacity: 0.25; }
          }
          
          @keyframes sparkle-1 {
            0%, 100% { opacity: 0.2; transform: scale(0.5); }
            50% { opacity: 1; transform: scale(1.5); }
          }
          
          @keyframes sparkle-2 {
            0%, 100% { opacity: 0.3; transform: scale(0.6) rotate(0deg); }
            50% { opacity: 0.9; transform: scale(1.3) rotate(180deg); }
          }
          
          @keyframes sparkle-3 {
            0%, 100% { opacity: 0.25; transform: scale(0.7); }
            60% { opacity: 0.85; transform: scale(1.4); }
          }
          
          @keyframes sparkle-4 {
            0%, 100% { opacity: 0.15; transform: scale(0.4); }
            40% { opacity: 0.7; transform: scale(1.2); }
          }
          
          @keyframes sparkle-5 {
            0%, 100% { opacity: 0.2; transform: scale(0.5) rotate(0deg); }
            50% { opacity: 0.8; transform: scale(1.6) rotate(360deg); }
          }
          
          @keyframes flag-wave {
            0%, 100% { transform: skewX(0deg) scaleX(1); }
            25% { transform: skewX(5deg) scaleX(1.1); }
            50% { transform: skewX(-3deg) scaleX(0.9); }
            75% { transform: skewX(4deg) scaleX(1.05); }
          }
          
          @keyframes flag-wave-2 {
            0%, 100% { transform: skewX(0deg) scaleX(1) rotate(-2deg); }
            25% { transform: skewX(4deg) scaleX(1.08) rotate(1deg); }
            50% { transform: skewX(-2deg) scaleX(0.92) rotate(-1deg); }
            75% { transform: skewX(3deg) scaleX(1.03) rotate(0deg); }
          }
          
          @keyframes flag-wave-3 {
            0%, 100% { transform: skewX(0deg) scaleX(1) rotate(2deg); }
            25% { transform: skewX(-4deg) scaleX(1.06) rotate(-1deg); }
            50% { transform: skewX(3deg) scaleX(0.94) rotate(1deg); }
            75% { transform: skewX(-2deg) scaleX(1.02) rotate(0deg); }
          }
          
          @keyframes foliage-sway-1 {
            0%, 100% { transform: rotate(0deg) scaleX(1); opacity: 0; }
            50% { transform: rotate(2deg) scaleX(1.02); opacity: 0; }
          }
          
          @keyframes foliage-sway-2 {
            0%, 100% { transform: rotate(0deg) scaleX(1); opacity: 0; }
            50% { transform: rotate(-2deg) scaleX(1.02); opacity: 0; }
          }
          
          @keyframes sunray-1 {
            0%, 100% { opacity: 0.5; transform: scaleY(1) scaleX(1); }
            50% { opacity: 0.8; transform: scaleY(1.1) scaleX(1.05); }
          }
          
          @keyframes sunray-2 {
            0%, 100% { opacity: 0.4; transform: scaleY(1) scaleX(1); }
            50% { opacity: 0.7; transform: scaleY(1.15) scaleX(1.08); }
          }
          
          @keyframes tropical-atmosphere {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; }
          }
          
          @keyframes sunny-glow {
            0%, 100% { opacity: 0.9; }
            50% { opacity: 1; }
          }
          
          .animate-cloud-drift-1 {
            animation: cloud-drift-1 40s ease-in-out infinite;
          }
          
          .animate-cloud-drift-2 {
            animation: cloud-drift-2 50s ease-in-out infinite 10s;
          }
          
          .animate-cloud-drift-3 {
            animation: cloud-drift-3 45s ease-in-out infinite 20s;
          }
          
          .animate-cloud-drift-4 {
            animation: cloud-drift-4 55s ease-in-out infinite 15s;
          }
          
          .animate-light-drift-1 {
            animation: light-drift-1 8s ease-in-out infinite;
          }
          
          .animate-light-drift-2 {
            animation: light-drift-2 10s ease-in-out infinite 2s;
          }
          
          .animate-light-drift-3 {
            animation: light-drift-3 9s ease-in-out infinite 4s;
          }
          
          .animate-light-drift-4 {
            animation: light-drift-4 11s ease-in-out infinite 1s;
          }
          
          .animate-light-drift-5 {
            animation: light-drift-5 12s ease-in-out infinite 5s;
          }
          
          .animate-light-drift-6 {
            animation: light-drift-6 7s ease-in-out infinite 3s;
          }
          
          .animate-sparkle-1 {
            animation: sparkle-1 3s ease-in-out infinite;
          }
          
          .animate-sparkle-2 {
            animation: sparkle-2 4s ease-in-out infinite 1s;
          }
          
          .animate-sparkle-3 {
            animation: sparkle-3 3.5s ease-in-out infinite 2s;
          }
          
          .animate-sparkle-4 {
            animation: sparkle-4 4.5s ease-in-out infinite 0.5s;
          }
          
          .animate-sparkle-5 {
            animation: sparkle-5 3.8s ease-in-out infinite 1.5s;
          }
          
          .animate-flag-wave {
            animation: flag-wave 4s ease-in-out infinite;
          }
          
          .animate-flag-wave-2 {
            animation: flag-wave-2 4.5s ease-in-out infinite 1s;
          }
          
          .animate-flag-wave-3 {
            animation: flag-wave-3 4.2s ease-in-out infinite 2s;
          }
          
          .animate-foliage-sway-1 {
            animation: foliage-sway-1 6s ease-in-out infinite;
          }
          
          .animate-foliage-sway-2 {
            animation: foliage-sway-2 7s ease-in-out infinite 1s;
          }
          
          .animate-sunray-1 {
            animation: sunray-1 12s ease-in-out infinite;
          }
          
          .animate-sunray-2 {
            animation: sunray-2 15s ease-in-out infinite 5s;
          }
          
          .animate-tropical-atmosphere {
            animation: tropical-atmosphere 20s ease-in-out infinite;
          }
          
          .animate-sunny-glow {
            animation: sunny-glow 25s ease-in-out infinite;
          }
        `}</style>
      </div>
    </Card>
  );
}
