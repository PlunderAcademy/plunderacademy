"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Island4Module1Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        {/* Base image */}
        <Image
          src="/islands/island4/island4-module1-image.webp"
          alt="DeFi Fundamentals & Simple Swaps - Gilded Bastion Adventure"
          fill
          className="object-cover"
          priority
        />
        
        {/* BOLD Animated overlay effects */}
        <div className="absolute inset-0 animate-effects">
          {/* CROCODILE GLOWING EYES - Super menacing! */}
          <div className="absolute inset-0">
            {/* Left eye - INTENSE glow */}
            <div className="absolute top-[86%] left-[43%] w-[8px] h-[8px] bg-yellow-400 rounded-full croc-eye animate-croc-eye-left"></div>
            <div className="absolute top-[86%] left-[43%] w-[16px] h-[16px] bg-yellow-300/60 rounded-full croc-glow animate-croc-glow-left"></div>
            <div className="absolute top-[86%] left-[43%] w-[24px] h-[24px] bg-amber-400/40 rounded-full croc-glow-outer animate-croc-glow-outer-left"></div>
          </div>

          {/* MOAT WATER RIPPLES - Bold and visible */}
          <div className="absolute inset-0">
            {/* Large ripples from crocodile */}
            <div className="absolute top-[86%] left-[39%] w-[80px] h-[40px] border-4 border-cyan-300/70 rounded-full ripple animate-ripple-1"></div>
            <div className="absolute top-[86%] left-[39%] w-[120px] h-[60px] border-3 border-cyan-300/50 rounded-full ripple animate-ripple-2"></div>
            <div className="absolute top-[86%] left-[39%] w-[160px] h-[80px] border-2 border-cyan-300/30 rounded-full ripple animate-ripple-3"></div>
            
            {/* Water surface glimmers */}
            <div className="absolute top-[70%] left-[15%] w-[40px] h-[20px] bg-cyan-200/60 rounded-full water-shimmer animate-water-shimmer-1"></div>
            <div className="absolute top-[75%] left-[40%] w-[35px] h-[18px] bg-blue-200/55 rounded-full water-shimmer animate-water-shimmer-2"></div>
            <div className="absolute top-[72%] left-[60%] w-[45px] h-[22px] bg-cyan-200/65 rounded-full water-shimmer animate-water-shimmer-3"></div>
            <div className="absolute top-[78%] left-[50%] w-[38px] h-[19px] bg-blue-200/58 rounded-full water-shimmer animate-water-shimmer-4"></div>
            <div className="absolute top-[76%] left-[80%] w-[42px] h-[21px] bg-cyan-200/62 rounded-full water-shimmer animate-water-shimmer-5"></div>
          </div>

          {/* DRAWBRIDGE CHAINS - Dramatic sway */}
          <div className="absolute inset-0">
            {/* Left chain glow */}
            <div className="absolute top-[45%] left-[58%] w-[3px] h-[140px] bg-gradient-to-b from-gray-600/80 via-gray-500/70 to-amber-600/60 chain animate-chain-sway-left"></div>
            <div className="absolute top-[45%] left-[58%] w-[8px] h-[140px] bg-gradient-to-b from-gray-400/30 via-gray-300/25 to-amber-400/30 chain-glow animate-chain-sway-left"></div>
            
            {/* Right chain glow */}
            <div className="absolute top-[44%] left-[68%] w-[3px] h-[140px] bg-gradient-to-b from-gray-600/80 via-gray-500/70 to-amber-600/60 chain animate-chain-sway-right"></div>
            <div className="absolute top-[44%] left-[68%] w-[8px] h-[140px] bg-gradient-to-b from-gray-400/30 via-gray-300/25 to-amber-400/30 chain-glow animate-chain-sway-right"></div>
          </div>

          {/* TOWER TORCHES - Dramatic flickering */}
          <div className="absolute inset-0">
            {/* Left tower */}
            <div className="absolute top-[32%] left-[17%] w-[12px] h-[12px] bg-orange-400 rounded-full torch-flame animate-torch-flicker-1"></div>
            <div className="absolute top-[32%] left-[17%] w-[24px] h-[24px] bg-orange-300/60 rounded-full torch-glow animate-torch-glow-1"></div>
            <div className="absolute top-[32%] left-[17%] w-[36px] h-[36px] bg-amber-400/35 rounded-full torch-glow-outer animate-torch-glow-outer-1"></div>
            
            <div className="absolute top-[37%] left-[19%] w-[10px] h-[10px] bg-orange-400 rounded-full torch-flame animate-torch-flicker-2"></div>
            <div className="absolute top-[37%] left-[19%] w-[20px] h-[20px] bg-orange-300/55 rounded-full torch-glow animate-torch-glow-2"></div>
            
            {/* Center left tower */}
            <div className="absolute top-[28%] left-[32%] w-[10px] h-[10px] bg-orange-400 rounded-full torch-flame animate-torch-flicker-3"></div>
            <div className="absolute top-[28%] left-[32%] w-[22px] h-[22px] bg-orange-300/58 rounded-full torch-glow animate-torch-glow-3"></div>
            
            {/* Gatehouse */}
            <div className="absolute top-[34%] left-[48%] w-[12px] h-[12px] bg-orange-400 rounded-full torch-flame animate-torch-flicker-4"></div>
            <div className="absolute top-[34%] left-[48%] w-[26px] h-[26px] bg-orange-300/65 rounded-full torch-glow animate-torch-glow-4"></div>
            <div className="absolute top-[34%] left-[48%] w-[38px] h-[38px] bg-amber-400/38 rounded-full torch-glow-outer animate-torch-glow-outer-2"></div>
            
            <div className="absolute top-[34%] left-[52%] w-[12px] h-[12px] bg-orange-400 rounded-full torch-flame animate-torch-flicker-5"></div>
            <div className="absolute top-[34%] left-[52%] w-[26px] h-[26px] bg-orange-300/65 rounded-full torch-glow animate-torch-glow-5"></div>
            
            {/* Center right tower */}
            <div className="absolute top-[28%] left-[68%] w-[10px] h-[10px] bg-orange-400 rounded-full torch-flame animate-torch-flicker-6"></div>
            <div className="absolute top-[28%] left-[68%] w-[22px] h-[22px] bg-orange-300/58 rounded-full torch-glow animate-torch-glow-6"></div>
            
            {/* Right tower */}
            <div className="absolute top-[37%] left-[81%] w-[10px] h-[10px] bg-orange-400 rounded-full torch-flame animate-torch-flicker-7"></div>
            <div className="absolute top-[37%] left-[81%] w-[20px] h-[20px] bg-orange-300/55 rounded-full torch-glow animate-torch-glow-7"></div>
            
            <div className="absolute top-[32%] left-[83%] w-[12px] h-[12px] bg-orange-400 rounded-full torch-flame animate-torch-flicker-8"></div>
            <div className="absolute top-[32%] left-[83%] w-[24px] h-[24px] bg-orange-300/60 rounded-full torch-glow animate-torch-glow-8"></div>
            <div className="absolute top-[32%] left-[83%] w-[36px] h-[36px] bg-amber-400/35 rounded-full torch-glow-outer animate-torch-glow-outer-3"></div>
          </div>

          {/* CASTLE GUARDS - Dramatic movement */}
          <div className="absolute inset-0">
            {/* Left guards - weapon glints */}
            <div className="absolute top-[31%] left-[12%] w-[6px] h-[6px] bg-white/90 rounded-full guard-glint animate-guard-glint-1"></div>
            <div className="absolute top-[32%] left-[23%] w-[5px] h-[5px] bg-white/85 rounded-full guard-glint animate-guard-glint-2"></div>
            <div className="absolute top-[31%] left-[36%] w-[6px] h-[6px] bg-white/88 rounded-full guard-glint animate-guard-glint-3"></div>
            
            {/* Right guards - weapon glints */}
            <div className="absolute top-[31%] left-[64%] w-[6px] h-[6px] bg-white/88 rounded-full guard-glint animate-guard-glint-4"></div>
            <div className="absolute top-[32%] left-[77%] w-[5px] h-[5px] bg-white/85 rounded-full guard-glint animate-guard-glint-5"></div>
            <div className="absolute top-[31%] left-[88%] w-[6px] h-[6px] bg-white/90 rounded-full guard-glint animate-guard-glint-6"></div>
          </div>

          {/* DRAWBRIDGE WOBBLE EFFECT */}
          <div className="absolute inset-0">
            <div className="absolute top-[58%] left-[45%] w-[10%] h-[1px] bg-amber-600/40 bridge-wobble animate-bridge-wobble-1"></div>
            <div className="absolute top-[62%] left-[46%] w-[8%] h-[1px] bg-amber-600/35 bridge-wobble animate-bridge-wobble-2"></div>
            <div className="absolute top-[66%] left-[47%] w-[6%] h-[1px] bg-amber-600/30 bridge-wobble animate-bridge-wobble-3"></div>
          </div>

          {/* DRAMATIC SKY CLOUDS - Bold movement */}
          <div className="absolute inset-0">
            {/* Large cloud shadows moving */}
            <div className="absolute top-[8%] left-[10%] w-[140px] h-[60px] bg-white/25 rounded-full cloud animate-cloud-drift-1"></div>
            <div className="absolute top-[12%] left-[70%] w-[120px] h-[55px] bg-white/22 rounded-full cloud animate-cloud-drift-2"></div>
            <div className="absolute top-[5%] left-[40%] w-[100px] h-[50px] bg-white/20 rounded-full cloud animate-cloud-drift-3"></div>
          </div>

          {/* SUNLIGHT RAYS - Dramatic but not full screen */}
          <div className="absolute inset-0">
            <div className="absolute top-[0%] left-[20%] w-[80px] h-[35%] bg-gradient-to-b from-yellow-200/35 via-amber-100/20 to-transparent sun-ray animate-sun-ray-1"></div>
            <div className="absolute top-[0%] left-[55%] w-[90px] h-[38%] bg-gradient-to-b from-amber-200/38 via-yellow-100/22 to-transparent sun-ray animate-sun-ray-2"></div>
            <div className="absolute top-[0%] left-[75%] w-[75px] h-[33%] bg-gradient-to-b from-yellow-100/32 via-amber-100/18 to-transparent sun-ray animate-sun-ray-3"></div>
          </div>

          {/* GRASS SWAY - Foreground */}
          <div className="absolute inset-0">
            <div className="absolute bottom-[15%] left-[5%] w-[30px] h-[8px] bg-green-400/40 grass-tuft animate-grass-sway-1"></div>
            <div className="absolute bottom-[16%] left-[15%] w-[25px] h-[7px] bg-green-400/35 grass-tuft animate-grass-sway-2"></div>
            <div className="absolute bottom-[14%] right-[10%] w-[28px] h-[8px] bg-green-400/38 grass-tuft animate-grass-sway-3"></div>
            <div className="absolute bottom-[17%] right-[20%] w-[26px] h-[7px] bg-green-400/36 grass-tuft animate-grass-sway-4"></div>
          </div>
        </div>
        
        <style jsx>{`
          /* Crocodile eyes */
          .croc-eye {
            box-shadow: 0 0 20px currentColor, 0 0 40px currentColor;
            filter: blur(0.5px);
          }
          
          .croc-glow {
            filter: blur(8px);
          }
          
          .croc-glow-outer {
            filter: blur(15px);
          }
          
          /* Water effects */
          .ripple {
            filter: blur(2px);
          }
          
          .water-shimmer {
            filter: blur(12px);
          }
          
          /* Chain effects */
          .chain {
            filter: blur(1px);
          }
          
          .chain-glow {
            filter: blur(6px);
          }
          
          /* Torch effects */
          .torch-flame {
            box-shadow: 0 0 25px currentColor, 0 0 50px currentColor;
            filter: blur(1px);
          }
          
          .torch-glow {
            filter: blur(10px);
          }
          
          .torch-glow-outer {
            filter: blur(18px);
          }
          
          /* Guard weapon glints */
          .guard-glint {
            box-shadow: 0 0 20px white, 0 0 40px white, 0 0 60px white;
            filter: blur(0.5px);
          }
          
          /* Bridge wobble */
          .bridge-wobble {
            filter: blur(8px);
          }
          
          /* Cloud effects */
          .cloud {
            filter: blur(25px);
          }
          
          /* Sun rays */
          .sun-ray {
            filter: blur(20px);
          }
          
          /* Grass */
          .grass-tuft {
            filter: blur(8px);
          }
          
          /* Animation states */
          .animate-effects .croc-eye,
          .animate-effects .croc-glow,
          .animate-effects .croc-glow-outer,
          .animate-effects .ripple,
          .animate-effects .water-shimmer,
          .animate-effects .chain,
          .animate-effects .chain-glow,
          .animate-effects .torch-flame,
          .animate-effects .torch-glow,
          .animate-effects .torch-glow-outer,
          .animate-effects .guard-glint,
          .animate-effects .bridge-wobble,
          .animate-effects .cloud,
          .animate-effects .sun-ray,
          .animate-effects .grass-tuft {
            animation-play-state: running;
          }
          
          /* CROCODILE EYE ANIMATIONS */
          @keyframes croc-eye-left {
            0%, 30%, 35%, 100% { opacity: 1; transform: scale(1); }
            32%, 33% { opacity: 0.3; transform: scale(0.3); }
            70%, 73% { opacity: 0.4; transform: scale(0.4); }
            71%, 72% { opacity: 1; transform: scale(1); }
          }
          
          @keyframes croc-eye-right {
            0%, 32%, 37%, 100% { opacity: 1; transform: scale(1); }
            34%, 35% { opacity: 0.3; transform: scale(0.3); }
            72%, 75% { opacity: 0.4; transform: scale(0.4); }
            73%, 74% { opacity: 1; transform: scale(1); }
          }
          
          @keyframes croc-glow-left {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 0.95; transform: scale(1.4); }
          }
          
          @keyframes croc-glow-right {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 0.95; transform: scale(1.4); }
          }
          
          @keyframes croc-glow-outer-left {
            0%, 100% { opacity: 0.4; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.75; transform: scale(1.6) rotate(180deg); }
          }
          
          @keyframes croc-glow-outer-right {
            0%, 100% { opacity: 0.4; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.75; transform: scale(1.6) rotate(-180deg); }
          }
          
          /* WATER RIPPLE ANIMATIONS */
          @keyframes ripple-1 {
            0% { opacity: 0; transform: scale(0.5); }
            20% { opacity: 0.7; }
            100% { opacity: 0; transform: scale(2.5); }
          }
          
          @keyframes ripple-2 {
            0% { opacity: 0; transform: scale(0.5); }
            20% { opacity: 0.5; }
            100% { opacity: 0; transform: scale(2.8); }
          }
          
          @keyframes ripple-3 {
            0% { opacity: 0; transform: scale(0.5); }
            20% { opacity: 0.3; }
            100% { opacity: 0; transform: scale(3); }
          }
          
          @keyframes water-shimmer-1 {
            0%, 100% { opacity: 0.4; transform: scale(1) translateX(0); }
            50% { opacity: 0.85; transform: scale(1.3) translateX(10px); }
          }
          
          @keyframes water-shimmer-2 {
            0%, 100% { opacity: 0.35; transform: scale(1) translateX(0); }
            50% { opacity: 0.8; transform: scale(1.25) translateX(-8px); }
          }
          
          @keyframes water-shimmer-3 {
            0%, 100% { opacity: 0.45; transform: scale(1) translateX(0); }
            50% { opacity: 0.9; transform: scale(1.35) translateX(12px); }
          }
          
          @keyframes water-shimmer-4 {
            0%, 100% { opacity: 0.38; transform: scale(1) translateX(0); }
            50% { opacity: 0.82; transform: scale(1.28) translateX(-10px); }
          }
          
          @keyframes water-shimmer-5 {
            0%, 100% { opacity: 0.42; transform: scale(1) translateX(0); }
            50% { opacity: 0.88; transform: scale(1.32) translateX(15px); }
          }
          
          /* CHAIN SWAY ANIMATIONS */
          @keyframes chain-sway-left {
            0%, 100% { transform: translateX(0) rotate(0deg); }
            25% { transform: translateX(-8px) rotate(-4deg); }
            75% { transform: translateX(8px) rotate(4deg); }
          }
          
          @keyframes chain-sway-right {
            0%, 100% { transform: translateX(0) rotate(0deg); }
            25% { transform: translateX(8px) rotate(4deg); }
            75% { transform: translateX(-8px) rotate(-4deg); }
          }
          
          /* TORCH FLICKER ANIMATIONS */
          @keyframes torch-flicker-1 {
            0%, 100% { opacity: 1; transform: scale(1) translateY(0); }
            20% { opacity: 0.85; transform: scale(0.95) translateY(-3px); }
            40% { opacity: 1; transform: scale(1.08) translateY(2px); }
            60% { opacity: 0.9; transform: scale(0.98) translateY(-2px); }
            80% { opacity: 1; transform: scale(1.05) translateY(1px); }
          }
          
          @keyframes torch-flicker-2 {
            0%, 100% { opacity: 1; transform: scale(1) translateY(0); }
            15% { opacity: 0.9; transform: scale(1.05) translateY(2px); }
            35% { opacity: 0.88; transform: scale(0.96) translateY(-2px); }
            55% { opacity: 1; transform: scale(1.06) translateY(1px); }
            75% { opacity: 0.92; transform: scale(0.97) translateY(-3px); }
          }
          
          @keyframes torch-flicker-3 {
            0%, 100% { opacity: 1; transform: scale(1) translateY(0); }
            25% { opacity: 0.87; transform: scale(0.94) translateY(-2px); }
            50% { opacity: 1; transform: scale(1.07) translateY(2px); }
            75% { opacity: 0.93; transform: scale(0.99) translateY(-1px); }
          }
          
          @keyframes torch-flicker-4 {
            0%, 100% { opacity: 1; transform: scale(1) translateY(0); }
            18% { opacity: 0.9; transform: scale(1.04) translateY(3px); }
            38% { opacity: 0.86; transform: scale(0.95) translateY(-3px); }
            58% { opacity: 1; transform: scale(1.08) translateY(2px); }
            78% { opacity: 0.89; transform: scale(0.96) translateY(-2px); }
          }
          
          @keyframes torch-flicker-5 {
            0%, 100% { opacity: 1; transform: scale(1) translateY(0); }
            22% { opacity: 0.88; transform: scale(0.97) translateY(-3px); }
            44% { opacity: 1; transform: scale(1.06) translateY(2px); }
            66% { opacity: 0.91; transform: scale(0.98) translateY(-2px); }
            88% { opacity: 1; transform: scale(1.05) translateY(1px); }
          }
          
          @keyframes torch-flicker-6 {
            0%, 100% { opacity: 1; transform: scale(1) translateY(0); }
            16% { opacity: 0.92; transform: scale(1.03) translateY(2px); }
            36% { opacity: 0.87; transform: scale(0.94) translateY(-3px); }
            56% { opacity: 1; transform: scale(1.07) translateY(1px); }
            76% { opacity: 0.9; transform: scale(0.96) translateY(-2px); }
          }
          
          @keyframes torch-flicker-7 {
            0%, 100% { opacity: 1; transform: scale(1) translateY(0); }
            24% { opacity: 0.86; transform: scale(0.93) translateY(-2px); }
            48% { opacity: 1; transform: scale(1.08) translateY(3px); }
            72% { opacity: 0.89; transform: scale(0.97) translateY(-1px); }
          }
          
          @keyframes torch-flicker-8 {
            0%, 100% { opacity: 1; transform: scale(1) translateY(0); }
            19% { opacity: 0.91; transform: scale(1.05) translateY(2px); }
            39% { opacity: 0.85; transform: scale(0.92) translateY(-3px); }
            59% { opacity: 1; transform: scale(1.09) translateY(2px); }
            79% { opacity: 0.88; transform: scale(0.95) translateY(-2px); }
          }
          
          @keyframes torch-glow-1 {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 0.95; transform: scale(1.4); }
          }
          
          @keyframes torch-glow-2 {
            0%, 100% { opacity: 0.55; transform: scale(1); }
            50% { opacity: 0.9; transform: scale(1.35); }
          }
          
          @keyframes torch-glow-3 {
            0%, 100% { opacity: 0.58; transform: scale(1); }
            50% { opacity: 0.92; transform: scale(1.38); }
          }
          
          @keyframes torch-glow-4 {
            0%, 100% { opacity: 0.65; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.45); }
          }
          
          @keyframes torch-glow-5 {
            0%, 100% { opacity: 0.65; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.45); }
          }
          
          @keyframes torch-glow-6 {
            0%, 100% { opacity: 0.58; transform: scale(1); }
            50% { opacity: 0.92; transform: scale(1.38); }
          }
          
          @keyframes torch-glow-7 {
            0%, 100% { opacity: 0.55; transform: scale(1); }
            50% { opacity: 0.9; transform: scale(1.35); }
          }
          
          @keyframes torch-glow-8 {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 0.95; transform: scale(1.4); }
          }
          
          @keyframes torch-glow-outer-1 {
            0%, 100% { opacity: 0.35; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.7; transform: scale(1.5) rotate(180deg); }
          }
          
          @keyframes torch-glow-outer-2 {
            0%, 100% { opacity: 0.38; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.75; transform: scale(1.55) rotate(-180deg); }
          }
          
          @keyframes torch-glow-outer-3 {
            0%, 100% { opacity: 0.35; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.7; transform: scale(1.5) rotate(180deg); }
          }
          
          /* GUARD GLINT ANIMATIONS */
          @keyframes guard-glint-1 {
            0%, 70%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            75%, 85% { opacity: 1; transform: scale(2.5) rotate(360deg); }
            80% { opacity: 0.6; transform: scale(2) rotate(180deg); }
          }
          
          @keyframes guard-glint-2 {
            0%, 65%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            70%, 80% { opacity: 1; transform: scale(2.3) rotate(360deg); }
            75% { opacity: 0.55; transform: scale(1.9) rotate(180deg); }
          }
          
          @keyframes guard-glint-3 {
            0%, 75%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            80%, 90% { opacity: 1; transform: scale(2.6) rotate(360deg); }
            85% { opacity: 0.65; transform: scale(2.1) rotate(180deg); }
          }
          
          @keyframes guard-glint-4 {
            0%, 72%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            77%, 87% { opacity: 1; transform: scale(2.4) rotate(360deg); }
            82% { opacity: 0.6; transform: scale(2) rotate(180deg); }
          }
          
          @keyframes guard-glint-5 {
            0%, 68%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            73%, 83% { opacity: 1; transform: scale(2.5) rotate(360deg); }
            78% { opacity: 0.58; transform: scale(2.05) rotate(180deg); }
          }
          
          @keyframes guard-glint-6 {
            0%, 62%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            67%, 77% { opacity: 1; transform: scale(2.7) rotate(360deg); }
            72% { opacity: 0.62; transform: scale(2.2) rotate(180deg); }
          }
          
          /* BRIDGE WOBBLE ANIMATIONS */
          @keyframes bridge-wobble-1 {
            0%, 100% { opacity: 0.4; transform: scaleX(1) translateY(0); }
            50% { opacity: 0.7; transform: scaleX(1.05) translateY(-2px); }
          }
          
          @keyframes bridge-wobble-2 {
            0%, 100% { opacity: 0.35; transform: scaleX(1) translateY(0); }
            50% { opacity: 0.65; transform: scaleX(1.03) translateY(-1px); }
          }
          
          @keyframes bridge-wobble-3 {
            0%, 100% { opacity: 0.3; transform: scaleX(1) translateY(0); }
            50% { opacity: 0.6; transform: scaleX(1.02) translateY(-1px); }
          }
          
          /* CLOUD DRIFT ANIMATIONS */
          @keyframes cloud-drift-1 {
            0% { transform: translateX(0); }
            100% { transform: translateX(150px); }
          }
          
          @keyframes cloud-drift-2 {
            0% { transform: translateX(0); }
            100% { transform: translateX(-180px); }
          }
          
          @keyframes cloud-drift-3 {
            0% { transform: translateX(0); }
            100% { transform: translateX(120px); }
          }
          
          /* SUN RAY ANIMATIONS */
          @keyframes sun-ray-1 {
            0%, 100% { opacity: 0.35; transform: scaleY(1) rotate(2deg); }
            50% { opacity: 0.65; transform: scaleY(1.15) rotate(-2deg); }
          }
          
          @keyframes sun-ray-2 {
            0%, 100% { opacity: 0.38; transform: scaleY(1) rotate(-2deg); }
            50% { opacity: 0.7; transform: scaleY(1.2) rotate(2deg); }
          }
          
          @keyframes sun-ray-3 {
            0%, 100% { opacity: 0.32; transform: scaleY(1) rotate(1deg); }
            50% { opacity: 0.6; transform: scaleY(1.12) rotate(-1deg); }
          }
          
          /* GRASS SWAY ANIMATIONS */
          @keyframes grass-sway-1 {
            0%, 100% { opacity: 0.4; transform: rotate(0deg) scaleX(1); }
            25% { opacity: 0.6; transform: rotate(-8deg) scaleX(1.1); }
            75% { opacity: 0.5; transform: rotate(8deg) scaleX(0.95); }
          }
          
          @keyframes grass-sway-2 {
            0%, 100% { opacity: 0.35; transform: rotate(0deg) scaleX(1); }
            30% { opacity: 0.55; transform: rotate(10deg) scaleX(1.08); }
            70% { opacity: 0.48; transform: rotate(-10deg) scaleX(0.96); }
          }
          
          @keyframes grass-sway-3 {
            0%, 100% { opacity: 0.38; transform: rotate(0deg) scaleX(1); }
            35% { opacity: 0.58; transform: rotate(-9deg) scaleX(1.12); }
            65% { opacity: 0.5; transform: rotate(9deg) scaleX(0.94); }
          }
          
          @keyframes grass-sway-4 {
            0%, 100% { opacity: 0.36; transform: rotate(0deg) scaleX(1); }
            28% { opacity: 0.56; transform: rotate(11deg) scaleX(1.1); }
            72% { opacity: 0.49; transform: rotate(-11deg) scaleX(0.95); }
          }
          
          /* CROCODILE EYE ANIMATION ASSIGNMENTS */
          .animate-croc-eye-left { animation: croc-eye-left 6s linear infinite; }
          .animate-croc-eye-right { animation: croc-eye-right 6s linear infinite 0.2s; }
          .animate-croc-glow-left { animation: croc-glow-left 4s ease-in-out infinite; }
          .animate-croc-glow-right { animation: croc-glow-right 4s ease-in-out infinite 0.2s; }
          .animate-croc-glow-outer-left { animation: croc-glow-outer-left 5s ease-in-out infinite; }
          .animate-croc-glow-outer-right { animation: croc-glow-outer-right 5s ease-in-out infinite 0.2s; }
          
          /* WATER RIPPLE ANIMATION ASSIGNMENTS */
          .animate-ripple-1 { animation: ripple-1 4s ease-out infinite; }
          .animate-ripple-2 { animation: ripple-2 4s ease-out infinite 0.3s; }
          .animate-ripple-3 { animation: ripple-3 4s ease-out infinite 0.6s; }
          
          .animate-water-shimmer-1 { animation: water-shimmer-1 3s ease-in-out infinite; }
          .animate-water-shimmer-2 { animation: water-shimmer-2 3.5s ease-in-out infinite 0.5s; }
          .animate-water-shimmer-3 { animation: water-shimmer-3 3.2s ease-in-out infinite 1s; }
          .animate-water-shimmer-4 { animation: water-shimmer-4 3.7s ease-in-out infinite 1.5s; }
          .animate-water-shimmer-5 { animation: water-shimmer-5 3.3s ease-in-out infinite 2s; }
          
          /* CHAIN SWAY ANIMATION ASSIGNMENTS */
          .animate-chain-sway-left { animation: chain-sway-left 5s ease-in-out infinite; }
          .animate-chain-sway-right { animation: chain-sway-right 5s ease-in-out infinite 0.3s; }
          
          /* TORCH FLICKER ANIMATION ASSIGNMENTS */
          .animate-torch-flicker-1 { animation: torch-flicker-1 2s ease-in-out infinite; }
          .animate-torch-flicker-2 { animation: torch-flicker-2 2.2s ease-in-out infinite 0.3s; }
          .animate-torch-flicker-3 { animation: torch-flicker-3 2.1s ease-in-out infinite 0.6s; }
          .animate-torch-flicker-4 { animation: torch-flicker-4 2.3s ease-in-out infinite 0.9s; }
          .animate-torch-flicker-5 { animation: torch-flicker-5 2.15s ease-in-out infinite 1.2s; }
          .animate-torch-flicker-6 { animation: torch-flicker-6 2.25s ease-in-out infinite 0.4s; }
          .animate-torch-flicker-7 { animation: torch-flicker-7 2.05s ease-in-out infinite 0.7s; }
          .animate-torch-flicker-8 { animation: torch-flicker-8 2.35s ease-in-out infinite 1s; }
          
          .animate-torch-glow-1 { animation: torch-glow-1 2.5s ease-in-out infinite; }
          .animate-torch-glow-2 { animation: torch-glow-2 2.7s ease-in-out infinite 0.3s; }
          .animate-torch-glow-3 { animation: torch-glow-3 2.6s ease-in-out infinite 0.6s; }
          .animate-torch-glow-4 { animation: torch-glow-4 2.8s ease-in-out infinite 0.9s; }
          .animate-torch-glow-5 { animation: torch-glow-5 2.8s ease-in-out infinite 1.2s; }
          .animate-torch-glow-6 { animation: torch-glow-6 2.6s ease-in-out infinite 0.4s; }
          .animate-torch-glow-7 { animation: torch-glow-7 2.7s ease-in-out infinite 0.7s; }
          .animate-torch-glow-8 { animation: torch-glow-8 2.5s ease-in-out infinite 1s; }
          
          .animate-torch-glow-outer-1 { animation: torch-glow-outer-1 3s ease-in-out infinite; }
          .animate-torch-glow-outer-2 { animation: torch-glow-outer-2 3.2s ease-in-out infinite 0.5s; }
          .animate-torch-glow-outer-3 { animation: torch-glow-outer-3 3.1s ease-in-out infinite 1s; }
          
          /* GUARD GLINT ANIMATION ASSIGNMENTS */
          .animate-guard-glint-1 { animation: guard-glint-1 8s linear infinite; }
          .animate-guard-glint-2 { animation: guard-glint-2 9s linear infinite 1.5s; }
          .animate-guard-glint-3 { animation: guard-glint-3 8.5s linear infinite 3s; }
          .animate-guard-glint-4 { animation: guard-glint-4 9.5s linear infinite 2s; }
          .animate-guard-glint-5 { animation: guard-glint-5 8.2s linear infinite 4s; }
          .animate-guard-glint-6 { animation: guard-glint-6 8.8s linear infinite 5s; }
          
          /* BRIDGE WOBBLE ANIMATION ASSIGNMENTS */
          .animate-bridge-wobble-1 { animation: bridge-wobble-1 4s ease-in-out infinite; }
          .animate-bridge-wobble-2 { animation: bridge-wobble-2 4.2s ease-in-out infinite 0.3s; }
          .animate-bridge-wobble-3 { animation: bridge-wobble-3 4.5s ease-in-out infinite 0.6s; }
          
          /* CLOUD DRIFT ANIMATION ASSIGNMENTS */
          .animate-cloud-drift-1 { animation: cloud-drift-1 60s linear infinite; }
          .animate-cloud-drift-2 { animation: cloud-drift-2 70s linear infinite; }
          .animate-cloud-drift-3 { animation: cloud-drift-3 55s linear infinite; }
          
          /* SUN RAY ANIMATION ASSIGNMENTS */
          .animate-sun-ray-1 { animation: sun-ray-1 12s ease-in-out infinite; }
          .animate-sun-ray-2 { animation: sun-ray-2 14s ease-in-out infinite 4s; }
          .animate-sun-ray-3 { animation: sun-ray-3 13s ease-in-out infinite 8s; }
          
          /* GRASS SWAY ANIMATION ASSIGNMENTS */
          .animate-grass-sway-1 { animation: grass-sway-1 4s ease-in-out infinite; }
          .animate-grass-sway-2 { animation: grass-sway-2 4.5s ease-in-out infinite 0.5s; }
          .animate-grass-sway-3 { animation: grass-sway-3 4.2s ease-in-out infinite 1s; }
          .animate-grass-sway-4 { animation: grass-sway-4 4.7s ease-in-out infinite 1.5s; }
        `}</style>
      </div>
    </Card>
  );
}

