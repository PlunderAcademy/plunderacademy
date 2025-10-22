"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Island2Module4Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        {/* Base image */}
        <Image
          src="/islands/island2/island2-module4-image.webp"
          alt="Staking Concepts & Time Logic - Frost Peak Adventure"
          fill
          className="object-cover"
          priority
        />
        
        {/* Animated overlay effects */}
        <div className="absolute inset-0 animate-effects">
          {/* Central Glowing Water Channel - BOLD */}
          <div className="absolute inset-0">
            {/* Main water glow - positioned along the cyan channel */}
            <div className="absolute top-[55%] left-[42%] w-[140px] h-[280px] bg-gradient-to-b from-cyan-400/65 via-teal-400/55 to-cyan-500/60 water-channel-glow animate-water-pulse-1"></div>
            <div className="absolute top-[58%] left-[44%] w-[120px] h-[260px] bg-gradient-to-b from-teal-300/60 via-cyan-300/50 to-teal-400/55 water-channel-glow animate-water-pulse-2"></div>
            <div className="absolute top-[60%] left-[46%] w-[100px] h-[240px] bg-gradient-to-b from-cyan-300/70 via-teal-300/60 to-cyan-400/65 water-channel-glow animate-water-pulse-3"></div>
            
            {/* Water surface ripples */}
            <div className="absolute top-[52%] left-[45%] w-[110px] h-[70px] bg-cyan-300/45 rounded-full water-ripple animate-ripple-1"></div>
            <div className="absolute top-[60%] left-[47%] w-[90px] h-[60px] bg-teal-300/40 rounded-full water-ripple animate-ripple-2"></div>
            <div className="absolute top-[68%] left-[48%] w-[80px] h-[50px] bg-cyan-400/50 rounded-full water-ripple animate-ripple-3"></div>
            
            {/* Bright water sparkles on surface */}
            <div className="absolute top-[54%] left-[47%] w-[6px] h-[6px] bg-white rounded-full water-sparkle animate-water-sparkle-1"></div>
            <div className="absolute top-[58%] left-[49%] w-[5px] h-[5px] bg-cyan-100 rounded-full water-sparkle animate-water-sparkle-2"></div>
            <div className="absolute top-[63%] left-[48%] w-[7px] h-[7px] bg-white rounded-full water-sparkle animate-water-sparkle-3"></div>
            <div className="absolute top-[70%] left-[50%] w-[5px] h-[5px] bg-teal-100 rounded-full water-sparkle animate-water-sparkle-4"></div>
          </div>

          {/* Ice Cliff Edge Sparkles - BOLD */}
          <div className="absolute inset-0">
            {/* Left cliff edges */}
            <div className="absolute top-[52%] left-[12%] w-[5px] h-[5px] bg-cyan-100 rounded-full cliff-sparkle animate-cliff-sparkle-1"></div>
            <div className="absolute top-[58%] left-[18%] w-[6px] h-[6px] bg-white rounded-full cliff-sparkle animate-cliff-sparkle-2"></div>
            <div className="absolute top-[64%] left-[22%] w-[5px] h-[5px] bg-blue-100 rounded-full cliff-sparkle animate-cliff-sparkle-3"></div>
            <div className="absolute top-[70%] left-[28%] w-[4px] h-[4px] bg-cyan-200 rounded-full cliff-sparkle animate-cliff-sparkle-4"></div>
            <div className="absolute top-[76%] left-[32%] w-[5px] h-[5px] bg-white rounded-full cliff-sparkle animate-cliff-sparkle-5"></div>
            
            {/* Right cliff edges */}
            <div className="absolute top-[54%] right-[10%] w-[5px] h-[5px] bg-cyan-100 rounded-full cliff-sparkle animate-cliff-sparkle-6"></div>
            <div className="absolute top-[60%] right-[16%] w-[6px] h-[6px] bg-white rounded-full cliff-sparkle animate-cliff-sparkle-7"></div>
            <div className="absolute top-[66%] right-[20%] w-[5px] h-[5px] bg-blue-100 rounded-full cliff-sparkle animate-cliff-sparkle-8"></div>
            <div className="absolute top-[72%] right-[26%] w-[4px] h-[4px] bg-cyan-200 rounded-full cliff-sparkle animate-cliff-sparkle-9"></div>
            <div className="absolute top-[78%] right-[30%] w-[5px] h-[5px] bg-white rounded-full cliff-sparkle animate-cliff-sparkle-10"></div>
            
            {/* Middle section cliff sparkles */}
            <div className="absolute top-[50%] left-[35%] w-[5px] h-[5px] bg-white rounded-full cliff-sparkle animate-cliff-sparkle-11"></div>
            <div className="absolute top-[48%] right-[35%] w-[5px] h-[5px] bg-cyan-100 rounded-full cliff-sparkle animate-cliff-sparkle-12"></div>
          </div>

          {/* Mountain Peak Ice Crystals - BOLD */}
          <div className="absolute inset-0">
            {/* Center mountain peak */}
            <div className="absolute top-[8%] left-[47%] w-[8px] h-[8px] bg-white rounded-full peak-crystal animate-peak-shine-1"></div>
            <div className="absolute top-[12%] left-[49%] w-[6px] h-[6px] bg-cyan-100 rounded-full peak-crystal animate-peak-shine-2"></div>
            <div className="absolute top-[18%] left-[51%] w-[7px] h-[7px] bg-white rounded-full peak-crystal animate-peak-shine-3"></div>
            <div className="absolute top-[24%] left-[48%] w-[5px] h-[5px] bg-blue-100 rounded-full peak-crystal animate-peak-shine-4"></div>
            
            {/* Left peaks */}
            <div className="absolute top-[16%] left-[20%] w-[6px] h-[6px] bg-white rounded-full peak-crystal animate-peak-shine-5"></div>
            <div className="absolute top-[22%] left-[25%] w-[5px] h-[5px] bg-cyan-100 rounded-full peak-crystal animate-peak-shine-6"></div>
            <div className="absolute top-[28%] left-[18%] w-[5px] h-[5px] bg-white rounded-full peak-crystal animate-peak-shine-7"></div>
            
            {/* Right peaks */}
            <div className="absolute top-[14%] right-[18%] w-[6px] h-[6px] bg-white rounded-full peak-crystal animate-peak-shine-8"></div>
            <div className="absolute top-[20%] right-[22%] w-[5px] h-[5px] bg-cyan-100 rounded-full peak-crystal animate-peak-shine-9"></div>
            <div className="absolute top-[26%] right-[16%] w-[5px] h-[5px] bg-white rounded-full peak-crystal animate-peak-shine-10"></div>
          </div>

          {/* Floating Ice Fragments - BOLD */}
          <div className="absolute inset-0">
            {/* In the water channel */}
            <div className="absolute top-[56%] left-[47%] w-[18px] h-[18px] bg-cyan-200/60 ice-fragment animate-ice-float-1"></div>
            <div className="absolute top-[62%] left-[49%] w-[14px] h-[14px] bg-white/50 ice-fragment animate-ice-float-2"></div>
            <div className="absolute top-[68%] left-[48%] w-[16px] h-[16px] bg-cyan-100/55 ice-fragment animate-ice-float-3"></div>
            <div className="absolute top-[74%] left-[50%] w-[12px] h-[12px] bg-teal-200/50 ice-fragment animate-ice-float-4"></div>
          </div>

          {/* Dramatic Snow Flurries - BOLD */}
          <div className="absolute inset-0">
            {/* Large prominent flakes */}
            <div className="absolute top-[5%] left-[15%] w-[7px] h-[7px] bg-white/85 rounded-full snow-bold animate-snow-drift-1"></div>
            <div className="absolute top-[8%] left-[35%] w-[6px] h-[6px] bg-white/80 rounded-full snow-bold animate-snow-drift-2"></div>
            <div className="absolute top-[6%] left-[55%] w-[7px] h-[7px] bg-white/85 rounded-full snow-bold animate-snow-drift-3"></div>
            <div className="absolute top-[10%] left-[75%] w-[6px] h-[6px] bg-white/80 rounded-full snow-bold animate-snow-drift-4"></div>
            <div className="absolute top-[12%] left-[85%] w-[5px] h-[5px] bg-white/75 rounded-full snow-bold animate-snow-drift-5"></div>
            
            {/* Medium flakes */}
            <div className="absolute top-[14%] left-[25%] w-[4px] h-[4px] bg-white/70 rounded-full snow-bold animate-snow-drift-6"></div>
            <div className="absolute top-[16%] left-[45%] w-[4px] h-[4px] bg-white/72 rounded-full snow-bold animate-snow-drift-7"></div>
            <div className="absolute top-[13%] left-[65%] w-[4px] h-[4px] bg-white/68 rounded-full snow-bold animate-snow-drift-8"></div>
            <div className="absolute top-[18%] left-[82%] w-[3px] h-[3px] bg-white/70 rounded-full snow-bold animate-snow-drift-9"></div>
          </div>

          {/* Ice Cave Side Glows - BOLD */}
          <div className="absolute inset-0">
            {/* Left cave walls */}
            <div className="absolute top-[50%] left-[0%] w-[120px] h-[200px] bg-gradient-to-r from-blue-500/35 via-cyan-400/25 to-transparent cave-glow animate-cave-pulse-1"></div>
            <div className="absolute top-[55%] left-[5%] w-[100px] h-[180px] bg-gradient-to-r from-cyan-500/30 via-teal-400/20 to-transparent cave-glow animate-cave-pulse-2"></div>
            
            {/* Right cave walls */}
            <div className="absolute top-[52%] right-[0%] w-[120px] h-[200px] bg-gradient-to-l from-blue-500/35 via-cyan-400/25 to-transparent cave-glow animate-cave-pulse-3"></div>
            <div className="absolute top-[57%] right-[5%] w-[100px] h-[180px] bg-gradient-to-l from-cyan-500/30 via-teal-400/20 to-transparent cave-glow animate-cave-pulse-4"></div>
          </div>

          {/* Magical Light Rays from Sky - BOLD */}
          <div className="absolute inset-0">
            <div className="absolute top-[0%] left-[35%] w-[60px] h-[220px] bg-gradient-to-b from-cyan-300/40 via-cyan-200/20 to-transparent light-ray animate-light-ray-1"></div>
            <div className="absolute top-[0%] left-[55%] w-[50px] h-[200px] bg-gradient-to-b from-blue-200/35 via-cyan-100/15 to-transparent light-ray animate-light-ray-2"></div>
          </div>
        </div>
        
        <style jsx>{`
          /* Water channel effects */
          .water-channel-glow {
            filter: blur(32px);
          }
          
          .water-ripple {
            filter: blur(20px);
          }
          
          .water-sparkle {
            box-shadow: 0 0 30px currentColor, 0 0 60px currentColor, 0 0 90px currentColor;
            filter: blur(0.5px);
          }
          
          /* Cliff and ice sparkles */
          .cliff-sparkle {
            box-shadow: 0 0 35px currentColor, 0 0 70px currentColor, 0 0 105px currentColor;
            filter: blur(0.4px);
          }
          
          /* Mountain peak crystals */
          .peak-crystal {
            box-shadow: 0 0 40px currentColor, 0 0 80px currentColor, 0 0 120px currentColor;
            filter: blur(0.6px);
          }
          
          /* Ice fragments */
          .ice-fragment {
            filter: blur(8px);
            border-radius: 30%;
          }
          
          /* Snow effects */
          .snow-bold {
            box-shadow: 0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor;
            filter: blur(1px);
          }
          
          /* Cave wall glows */
          .cave-glow {
            filter: blur(35px);
          }
          
          /* Light rays */
          .light-ray {
            filter: blur(25px);
            transform: skewX(-2deg);
          }
          
          .animate-effects .water-channel-glow,
          .animate-effects .water-ripple,
          .animate-effects .water-sparkle,
          .animate-effects .cliff-sparkle,
          .animate-effects .peak-crystal,
          .animate-effects .ice-fragment,
          .animate-effects .snow-bold,
          .animate-effects .cave-glow,
          .animate-effects .light-ray {
            animation-play-state: running;
          }
          
          /* Water channel animations - BOLD pulsing */
          @keyframes water-pulse-1 {
            0%, 100% { opacity: 0.65; transform: scale(1) translateY(0); }
            50% { opacity: 0.9; transform: scale(1.15) translateY(-8px); }
          }
          
          @keyframes water-pulse-2 {
            0%, 100% { opacity: 0.60; transform: scale(1) translateY(0); }
            50% { opacity: 0.85; transform: scale(1.12) translateY(-6px); }
          }
          
          @keyframes water-pulse-3 {
            0%, 100% { opacity: 0.70; transform: scale(1) translateY(0); }
            50% { opacity: 0.95; transform: scale(1.18) translateY(-10px); }
          }
          
          /* Water ripple animations */
          @keyframes ripple-1 {
            0%, 100% { opacity: 0.45; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.3); }
          }
          
          @keyframes ripple-2 {
            0%, 100% { opacity: 0.40; transform: scale(1); }
            50% { opacity: 0.65; transform: scale(1.25); }
          }
          
          @keyframes ripple-3 {
            0%, 100% { opacity: 0.50; transform: scale(1); }
            50% { opacity: 0.75; transform: scale(1.35); }
          }
          
          /* Water sparkle animations - dramatic flashing */
          @keyframes water-sparkle-1 {
            0%, 60%, 100% { opacity: 0; transform: scale(0.5); }
            70%, 80% { opacity: 1; transform: scale(2.5); }
            75% { opacity: 0.5; transform: scale(1.8); }
          }
          
          @keyframes water-sparkle-2 {
            0%, 55%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            65%, 75% { opacity: 1; transform: scale(2.3) rotate(180deg); }
            70% { opacity: 0.5; transform: scale(1.6) rotate(90deg); }
          }
          
          @keyframes water-sparkle-3 {
            0%, 65%, 100% { opacity: 0; transform: scale(0.5); }
            75%, 85% { opacity: 1; transform: scale(2.7); }
            80% { opacity: 0.5; transform: scale(2); }
          }
          
          @keyframes water-sparkle-4 {
            0%, 50%, 100% { opacity: 0; transform: scale(0.5); }
            60%, 70% { opacity: 1; transform: scale(2.4); }
            65% { opacity: 0.5; transform: scale(1.7); }
          }
          
          /* Cliff sparkle animations - bright flashes */
          @keyframes cliff-sparkle-1 {
            0%, 70%, 100% { opacity: 0; transform: scale(0.8); }
            75%, 85% { opacity: 1; transform: scale(2.8); }
            80% { opacity: 0.6; transform: scale(2); }
          }
          
          @keyframes cliff-sparkle-2 {
            0%, 65%, 100% { opacity: 0; transform: scale(0.8) rotate(0deg); }
            70%, 80% { opacity: 1; transform: scale(3) rotate(360deg); }
            75% { opacity: 0.6; transform: scale(2.2) rotate(180deg); }
          }
          
          @keyframes cliff-sparkle-3 {
            0%, 72%, 100% { opacity: 0; transform: scale(0.8); }
            77%, 87% { opacity: 1; transform: scale(2.7); }
            82% { opacity: 0.6; transform: scale(1.9); }
          }
          
          @keyframes cliff-sparkle-4 {
            0%, 68%, 100% { opacity: 0; transform: scale(0.8); }
            73%, 83% { opacity: 1; transform: scale(2.6); }
            78% { opacity: 0.6; transform: scale(1.8); }
          }
          
          @keyframes cliff-sparkle-5 {
            0%, 75%, 100% { opacity: 0; transform: scale(0.8); }
            80%, 90% { opacity: 1; transform: scale(2.9); }
            85% { opacity: 0.6; transform: scale(2.1); }
          }
          
          @keyframes cliff-sparkle-6 {
            0%, 62%, 100% { opacity: 0; transform: scale(0.8); }
            67%, 77% { opacity: 1; transform: scale(2.7); }
            72% { opacity: 0.6; transform: scale(1.9); }
          }
          
          @keyframes cliff-sparkle-7 {
            0%, 77%, 100% { opacity: 0; transform: scale(0.8) rotate(0deg); }
            82%, 92% { opacity: 1; transform: scale(3.1) rotate(360deg); }
            87% { opacity: 0.6; transform: scale(2.3) rotate(180deg); }
          }
          
          @keyframes cliff-sparkle-8 {
            0%, 80%, 100% { opacity: 0; transform: scale(0.8); }
            85%, 95% { opacity: 1; transform: scale(2.5); }
            90% { opacity: 0.6; transform: scale(1.7); }
          }
          
          @keyframes cliff-sparkle-9 {
            0%, 73%, 100% { opacity: 0; transform: scale(0.8); }
            78%, 88% { opacity: 1; transform: scale(2.8); }
            83% { opacity: 0.6; transform: scale(2); }
          }
          
          @keyframes cliff-sparkle-10 {
            0%, 78%, 100% { opacity: 0; transform: scale(0.8); }
            83%, 93% { opacity: 1; transform: scale(2.9); }
            88% { opacity: 0.6; transform: scale(2.1); }
          }
          
          @keyframes cliff-sparkle-11 {
            0%, 55%, 100% { opacity: 0; transform: scale(0.8); }
            60%, 70% { opacity: 1; transform: scale(2.6); }
            65% { opacity: 0.6; transform: scale(1.8); }
          }
          
          @keyframes cliff-sparkle-12 {
            0%, 58%, 100% { opacity: 0; transform: scale(0.8); }
            63%, 73% { opacity: 1; transform: scale(2.7); }
            68% { opacity: 0.6; transform: scale(1.9); }
          }
          
          /* Peak crystal animations - bright twinkling */
          @keyframes peak-shine-1 {
            0%, 80%, 100% { opacity: 0; transform: scale(0.5); }
            85%, 95% { opacity: 1; transform: scale(3.2); }
            90% { opacity: 0.7; transform: scale(2.4); }
          }
          
          @keyframes peak-shine-2 {
            0%, 75%, 100% { opacity: 0; transform: scale(0.5); }
            80%, 90% { opacity: 1; transform: scale(3); }
            85% { opacity: 0.7; transform: scale(2.2); }
          }
          
          @keyframes peak-shine-3 {
            0%, 82%, 100% { opacity: 0; transform: scale(0.5); }
            87%, 97% { opacity: 1; transform: scale(3.3); }
            92% { opacity: 0.7; transform: scale(2.5); }
          }
          
          @keyframes peak-shine-4 {
            0%, 78%, 100% { opacity: 0; transform: scale(0.5); }
            83%, 93% { opacity: 1; transform: scale(2.9); }
            88% { opacity: 0.7; transform: scale(2.1); }
          }
          
          @keyframes peak-shine-5 {
            0%, 72%, 100% { opacity: 0; transform: scale(0.5); }
            77%, 87% { opacity: 1; transform: scale(3.1); }
            82% { opacity: 0.7; transform: scale(2.3); }
          }
          
          @keyframes peak-shine-6 {
            0%, 85%, 100% { opacity: 0; transform: scale(0.5); }
            90%, 100% { opacity: 1; transform: scale(2.8); }
            95% { opacity: 0.7; transform: scale(2); }
          }
          
          @keyframes peak-shine-7 {
            0%, 68%, 100% { opacity: 0; transform: scale(0.5); }
            73%, 83% { opacity: 1; transform: scale(3); }
            78% { opacity: 0.7; transform: scale(2.2); }
          }
          
          @keyframes peak-shine-8 {
            0%, 88%, 100% { opacity: 0; transform: scale(0.5); }
            93%, 103% { opacity: 1; transform: scale(3.1); }
            98% { opacity: 0.7; transform: scale(2.3); }
          }
          
          @keyframes peak-shine-9 {
            0%, 76%, 100% { opacity: 0; transform: scale(0.5); }
            81%, 91% { opacity: 1; transform: scale(2.9); }
            86% { opacity: 0.7; transform: scale(2.1); }
          }
          
          @keyframes peak-shine-10 {
            0%, 70%, 100% { opacity: 0; transform: scale(0.5); }
            75%, 85% { opacity: 1; transform: scale(3.2); }
            80% { opacity: 0.7; transform: scale(2.4); }
          }
          
          /* Ice fragment floating animations */
          @keyframes ice-float-1 {
            0%, 100% { opacity: 0.60; transform: translateY(0) rotate(0deg); }
            50% { opacity: 0.8; transform: translateY(-12px) rotate(15deg); }
          }
          
          @keyframes ice-float-2 {
            0%, 100% { opacity: 0.50; transform: translateY(0) rotate(0deg); }
            50% { opacity: 0.7; transform: translateY(-10px) rotate(-12deg); }
          }
          
          @keyframes ice-float-3 {
            0%, 100% { opacity: 0.55; transform: translateY(0) rotate(0deg); }
            50% { opacity: 0.75; transform: translateY(-14px) rotate(18deg); }
          }
          
          @keyframes ice-float-4 {
            0%, 100% { opacity: 0.50; transform: translateY(0) rotate(0deg); }
            50% { opacity: 0.7; transform: translateY(-8px) rotate(-10deg); }
          }
          
          /* Snow drift animations - bold falling */
          @keyframes snow-drift-1 {
            0% { opacity: 0; transform: translateY(0) translateX(0) rotate(0deg); }
            50% { opacity: 0.85; transform: translateY(500px) translateX(40px) rotate(250deg); }
            100% { opacity: 0; transform: translateY(1000px) translateX(75px) rotate(500deg); }
          }
          
          @keyframes snow-drift-2 {
            0% { opacity: 0; transform: translateY(0) translateX(0) rotate(0deg); }
            50% { opacity: 0.8; transform: translateY(480px) translateX(-35px) rotate(280deg); }
            100% { opacity: 0; transform: translateY(960px) translateX(-65px) rotate(560deg); }
          }
          
          @keyframes snow-drift-3 {
            0% { opacity: 0; transform: translateY(0) translateX(0) rotate(0deg); }
            50% { opacity: 0.85; transform: translateY(520px) translateX(38px) rotate(220deg); }
            100% { opacity: 0; transform: translateY(1040px) translateX(70px) rotate(440deg); }
          }
          
          @keyframes snow-drift-4 {
            0% { opacity: 0; transform: translateY(0) translateX(0) rotate(0deg); }
            50% { opacity: 0.8; transform: translateY(490px) translateX(-32px) rotate(260deg); }
            100% { opacity: 0; transform: translateY(980px) translateX(-60px) rotate(520deg); }
          }
          
          @keyframes snow-drift-5 {
            0% { opacity: 0; transform: translateY(0) translateX(0) rotate(0deg); }
            50% { opacity: 0.75; transform: translateY(470px) translateX(42px) rotate(240deg); }
            100% { opacity: 0; transform: translateY(940px) translateX(78px) rotate(480deg); }
          }
          
          @keyframes snow-drift-6 {
            0% { opacity: 0; transform: translateY(0) translateX(0) rotate(0deg); }
            50% { opacity: 0.7; transform: translateY(510px) translateX(-30px) rotate(270deg); }
            100% { opacity: 0; transform: translateY(1020px) translateX(-55px) rotate(540deg); }
          }
          
          @keyframes snow-drift-7 {
            0% { opacity: 0; transform: translateY(0) translateX(0) rotate(0deg); }
            50% { opacity: 0.72; transform: translateY(495px) translateX(36px) rotate(255deg); }
            100% { opacity: 0; transform: translateY(990px) translateX(68px) rotate(510deg); }
          }
          
          @keyframes snow-drift-8 {
            0% { opacity: 0; transform: translateY(0) translateX(0) rotate(0deg); }
            50% { opacity: 0.68; transform: translateY(505px) translateX(-28px) rotate(245deg); }
            100% { opacity: 0; transform: translateY(1010px) translateX(-52px) rotate(490deg); }
          }
          
          @keyframes snow-drift-9 {
            0% { opacity: 0; transform: translateY(0) translateX(0) rotate(0deg); }
            50% { opacity: 0.7; transform: translateY(485px) translateX(34px) rotate(235deg); }
            100% { opacity: 0; transform: translateY(970px) translateX(64px) rotate(470deg); }
          }
          
          /* Cave glow pulse animations */
          @keyframes cave-pulse-1 {
            0%, 100% { opacity: 0.35; }
            50% { opacity: 0.55; }
          }
          
          @keyframes cave-pulse-2 {
            0%, 100% { opacity: 0.30; }
            50% { opacity: 0.50; }
          }
          
          @keyframes cave-pulse-3 {
            0%, 100% { opacity: 0.35; }
            50% { opacity: 0.55; }
          }
          
          @keyframes cave-pulse-4 {
            0%, 100% { opacity: 0.30; }
            50% { opacity: 0.50; }
          }
          
          /* Light ray animations */
          @keyframes light-ray-1 {
            0%, 100% { opacity: 0.40; transform: skewX(-2deg) scaleY(1); }
            50% { opacity: 0.60; transform: skewX(-3deg) scaleY(1.08); }
          }
          
          @keyframes light-ray-2 {
            0%, 100% { opacity: 0.35; transform: skewX(-2deg) scaleY(1); }
            50% { opacity: 0.55; transform: skewX(-3.5deg) scaleY(1.05); }
          }
          
          /* Animation class assignments */
          .animate-water-pulse-1 { animation: water-pulse-1 5s ease-in-out infinite; }
          .animate-water-pulse-2 { animation: water-pulse-2 6s ease-in-out infinite 1s; }
          .animate-water-pulse-3 { animation: water-pulse-3 5.5s ease-in-out infinite 2s; }
          
          .animate-ripple-1 { animation: ripple-1 4s ease-in-out infinite; }
          .animate-ripple-2 { animation: ripple-2 5s ease-in-out infinite 1s; }
          .animate-ripple-3 { animation: ripple-3 4.5s ease-in-out infinite 2s; }
          
          .animate-water-sparkle-1 { animation: water-sparkle-1 6s linear infinite; }
          .animate-water-sparkle-2 { animation: water-sparkle-2 7s linear infinite 1.5s; }
          .animate-water-sparkle-3 { animation: water-sparkle-3 6.5s linear infinite 3s; }
          .animate-water-sparkle-4 { animation: water-sparkle-4 8s linear infinite 4.5s; }
          
          .animate-cliff-sparkle-1 { animation: cliff-sparkle-1 5s linear infinite; }
          .animate-cliff-sparkle-2 { animation: cliff-sparkle-2 6s linear infinite 1s; }
          .animate-cliff-sparkle-3 { animation: cliff-sparkle-3 5.5s linear infinite 2s; }
          .animate-cliff-sparkle-4 { animation: cliff-sparkle-4 6.5s linear infinite 3s; }
          .animate-cliff-sparkle-5 { animation: cliff-sparkle-5 5.8s linear infinite 4s; }
          .animate-cliff-sparkle-6 { animation: cliff-sparkle-6 7s linear infinite 0.5s; }
          .animate-cliff-sparkle-7 { animation: cliff-sparkle-7 6.2s linear infinite 1.5s; }
          .animate-cliff-sparkle-8 { animation: cliff-sparkle-8 5.3s linear infinite 2.5s; }
          .animate-cliff-sparkle-9 { animation: cliff-sparkle-9 6.8s linear infinite 3.5s; }
          .animate-cliff-sparkle-10 { animation: cliff-sparkle-10 5.7s linear infinite 4.5s; }
          .animate-cliff-sparkle-11 { animation: cliff-sparkle-11 7.2s linear infinite 0.8s; }
          .animate-cliff-sparkle-12 { animation: cliff-sparkle-12 6.4s linear infinite 2.2s; }
          
          .animate-peak-shine-1 { animation: peak-shine-1 8s linear infinite; }
          .animate-peak-shine-2 { animation: peak-shine-2 9s linear infinite 1s; }
          .animate-peak-shine-3 { animation: peak-shine-3 8.5s linear infinite 2s; }
          .animate-peak-shine-4 { animation: peak-shine-4 7.5s linear infinite 3s; }
          .animate-peak-shine-5 { animation: peak-shine-5 9.5s linear infinite 0.5s; }
          .animate-peak-shine-6 { animation: peak-shine-6 8.2s linear infinite 4s; }
          .animate-peak-shine-7 { animation: peak-shine-7 7.8s linear infinite 1.5s; }
          .animate-peak-shine-8 { animation: peak-shine-8 9.2s linear infinite 2.5s; }
          .animate-peak-shine-9 { animation: peak-shine-9 8.8s linear infinite 3.5s; }
          .animate-peak-shine-10 { animation: peak-shine-10 7.3s linear infinite 4.5s; }
          
          .animate-ice-float-1 { animation: ice-float-1 7s ease-in-out infinite; }
          .animate-ice-float-2 { animation: ice-float-2 8s ease-in-out infinite 2s; }
          .animate-ice-float-3 { animation: ice-float-3 7.5s ease-in-out infinite 4s; }
          .animate-ice-float-4 { animation: ice-float-4 8.5s ease-in-out infinite 6s; }
          
          .animate-snow-drift-1 { animation: snow-drift-1 12s linear infinite; }
          .animate-snow-drift-2 { animation: snow-drift-2 13s linear infinite 2s; }
          .animate-snow-drift-3 { animation: snow-drift-3 12.5s linear infinite 4s; }
          .animate-snow-drift-4 { animation: snow-drift-4 13.5s linear infinite 6s; }
          .animate-snow-drift-5 { animation: snow-drift-5 11.5s linear infinite 1s; }
          .animate-snow-drift-6 { animation: snow-drift-6 14s linear infinite 3s; }
          .animate-snow-drift-7 { animation: snow-drift-7 12.8s linear infinite 5s; }
          .animate-snow-drift-8 { animation: snow-drift-8 13.2s linear infinite 7s; }
          .animate-snow-drift-9 { animation: snow-drift-9 11.8s linear infinite 8s; }
          
          .animate-cave-pulse-1 { animation: cave-pulse-1 6s ease-in-out infinite; }
          .animate-cave-pulse-2 { animation: cave-pulse-2 7s ease-in-out infinite 2s; }
          .animate-cave-pulse-3 { animation: cave-pulse-3 6.5s ease-in-out infinite 1s; }
          .animate-cave-pulse-4 { animation: cave-pulse-4 7.5s ease-in-out infinite 3s; }
          
          .animate-light-ray-1 { animation: light-ray-1 8s ease-in-out infinite; }
          .animate-light-ray-2 { animation: light-ray-2 9s ease-in-out infinite 2s; }
        `}</style>
      </div>
    </Card>
  );
}

