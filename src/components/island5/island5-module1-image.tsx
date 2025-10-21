"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Island5Module1Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        {/* Base image */}
        <Image
          src="/islands/island5/island5-module1-image.webp"
          alt="Web3 Frontend Basics - Neon Haven Adventure"
          fill
          className="object-cover"
          priority
        />
        
        {/* EPIC Animated overlay effects - TOXIC FUTURE WONDERLAND */}
        <div className="absolute inset-0 animate-effects">
          {/* LEGENDARY Nuclear Tower Toxic Energy - INTENSE */}
          <div className="absolute inset-0">
            {/* Epic toxic energy explosion from crack */}
            <div className="absolute top-[6%] left-[58%] w-[100px] h-[120px] bg-green-400/50 rounded-full toxic-energy animate-toxic-explosion-1"></div>
            <div className="absolute top-[8%] left-[59%] w-[75px] h-[90px] bg-lime-400/55 rounded-full toxic-energy animate-toxic-explosion-2"></div>
            <div className="absolute top-[9%] left-[59.5%] w-[50px] h-[60px] bg-green-300/60 rounded-full toxic-core animate-toxic-explosion-3"></div>
            
            {/* Toxic energy beams shooting out */}
            <div className="absolute top-[10%] left-[64%] w-[6px] h-[80px] bg-gradient-to-b from-green-400/70 via-lime-400/50 to-transparent energy-beam animate-energy-beam-1"></div>
            <div className="absolute top-[8%] left-[62%] w-[5px] h-[70px] bg-gradient-to-b from-lime-400/65 via-green-300/45 to-transparent energy-beam animate-energy-beam-2"></div>
            <div className="absolute top-[9%] left-[66%] w-[5px] h-[75px] bg-gradient-to-b from-green-300/68 via-lime-300/48 to-transparent energy-beam animate-energy-beam-3"></div>
          </div>

          {/* Electric Crackles Around Tower Crack - LIGHTNING */}
          <div className="absolute inset-0">
            {/* Lightning bolts around crack */}
            <div className="absolute top-[12%] left-[61%] w-[2px] h-[25px] bg-cyan-300/95 electric-bolt animate-lightning-1"></div>
            <div className="absolute top-[10%] left-[64%] w-[2px] h-[30px] bg-green-400/98 electric-bolt animate-lightning-2"></div>
            <div className="absolute top-[14%] left-[62%] w-[2px] h-[22px] bg-lime-300/93 electric-bolt animate-lightning-3"></div>
            <div className="absolute top-[11%] left-[66%] w-[2px] h-[28px] bg-cyan-400/96 electric-bolt animate-lightning-4"></div>
            <div className="absolute top-[13%] left-[66%] w-[2px] h-[24px] bg-green-300/94 electric-bolt animate-lightning-5"></div>
            
            {/* Electric sparkles */}
            <div className="absolute top-[11%] left-[59%] w-[4px] h-[4px] bg-cyan-300/98 rounded-full electric-spark animate-spark-1"></div>
            <div className="absolute top-[13%] left-[60%] w-[5px] h-[5px] bg-green-400/95 rounded-full electric-spark animate-spark-2"></div>
            <div className="absolute top-[12%] left-[61%] w-[4px] h-[4px] bg-lime-300/97 rounded-full electric-spark animate-spark-3"></div>
            <div className="absolute top-[14%] left-[59.5%] w-[5px] h-[5px] bg-cyan-400/96 rounded-full electric-spark animate-spark-4"></div>
          </div>

          {/* Tower Surface Crackle Effects */}
          <div className="absolute inset-0">
            {/* Crack edge glows */}
            <div className="absolute top-[16%] left-[57%] w-[3px] h-[3px] bg-green-400/90 rounded-full crack-glow animate-crack-glow-1"></div>
            <div className="absolute top-[18%] left-[58%] w-[3px] h-[3px] bg-lime-400/88 rounded-full crack-glow animate-crack-glow-2"></div>
            <div className="absolute top-[20%] left-[59%] w-[4px] h-[4px] bg-green-300/92 rounded-full crack-glow animate-crack-glow-3"></div>
            <div className="absolute top-[22%] left-[58.5%] w-[3px] h-[3px] bg-cyan-300/90 rounded-full crack-glow animate-crack-glow-4"></div>
            <div className="absolute top-[24%] left-[59.5%] w-[3px] h-[3px] bg-green-400/89 rounded-full crack-glow animate-crack-glow-5"></div>
            <div className="absolute top-[26%] left-[60%] w-[4px] h-[4px] bg-lime-300/91 rounded-full crack-glow animate-crack-glow-6"></div>
          </div>

          {/* Building Window Lights - LEFT SIDE */}
          <div className="absolute inset-0">
            {/* Far left building windows */}
            <div className="absolute top-[26%] left-[14%] w-[3px] h-[4px] bg-cyan-300/88 rounded window-light animate-window-light-1"></div>
            <div className="absolute top-[30%] left-[12%] w-[3px] h-[4px] bg-blue-300/85 rounded window-light animate-window-light-2"></div>
            <div className="absolute top-[34%] left-[16%] w-[3px] h-[4px] bg-cyan-300/90 rounded window-light animate-window-light-3"></div>
            <div className="absolute top-[38%] left-[13%] w-[3px] h-[4px] bg-blue-300/87 rounded window-light animate-window-light-4"></div>
            
            {/* Left center building */}
            <div className="absolute top-[28%] left-[21%] w-[3px] h-[4px] bg-cyan-300/86 rounded window-light animate-window-light-5"></div>
            <div className="absolute top-[32%] left-[24%] w-[3px] h-[4px] bg-blue-300/88 rounded window-light animate-window-light-6"></div>
            <div className="absolute top-[36%] left-[20%] w-[3px] h-[4px] bg-cyan-300/85 rounded window-light animate-window-light-7"></div>
            <div className="absolute top-[40%] left-[26%] w-[3px] h-[4px] bg-blue-300/89 rounded window-light animate-window-light-8"></div>
          </div>

          {/* Building Window Lights - CENTER "PLUNDER LAGOON" */}
          <div className="absolute inset-0">
            {/* Main center building facade */}
            <div className="absolute top-[33%] left-[34%] w-[3px] h-[4px] bg-orange-300/88 rounded window-light animate-window-light-9"></div>
            <div className="absolute top-[36%] left-[32%] w-[3px] h-[4px] bg-yellow-300/86 rounded window-light animate-window-light-10"></div>
            <div className="absolute top-[40%] left-[36%] w-[3px] h-[4px] bg-orange-300/90 rounded window-light animate-window-light-11"></div>
            <div className="absolute top-[43%] left-[33%] w-[3px] h-[4px] bg-yellow-300/87 rounded window-light animate-window-light-12"></div>
            
            {/* Plunder Lagoon sign glow */}
            <div className="absolute top-[44%] left-[35%] w-[35px] h-[15px] bg-orange-300/25 rounded-full sign-glow animate-sign-glow"></div>
          </div>

          {/* Building Window Lights - RIGHT SIDE */}
          <div className="absolute inset-0">
            {/* Right center building */}
            <div className="absolute top-[34%] left-[66%] w-[3px] h-[4px] bg-cyan-300/87 rounded window-light animate-window-light-13"></div>
            <div className="absolute top-[38%] left-[64%] w-[3px] h-[4px] bg-blue-300/85 rounded window-light animate-window-light-14"></div>
            <div className="absolute top-[42%] left-[68%] w-[3px] h-[4px] bg-cyan-300/89 rounded window-light animate-window-light-15"></div>
            
            {/* Far right dark buildings (subtle) */}
            <div className="absolute top-[36%] left-[81%] w-[2px] h-[3px] bg-red-400/60 rounded window-light animate-window-light-16"></div>
            <div className="absolute top-[40%] left-[84%] w-[2px] h-[3px] bg-red-400/58 rounded window-light animate-window-light-17"></div>
            <div className="absolute top-[44%] left-[86%] w-[2px] h-[3px] bg-red-400/62 rounded window-light animate-window-light-18"></div>
          </div>

          {/* Toxic Water Bubbles - RADIOACTIVE */}
          <div className="absolute inset-0">
            {/* Large toxic bubbles */}
            <div className="absolute top-[66%] left-[61%] w-[20px] h-[20px] bg-green-400/35 rounded-full toxic-bubble animate-bubble-rise-1"></div>
            <div className="absolute top-[70%] left-[68%] w-[25px] h-[25px] bg-lime-400/30 rounded-full toxic-bubble animate-bubble-rise-2"></div>
            <div className="absolute top-[73%] left-[54%] w-[22px] h-[22px] bg-green-300/33 rounded-full toxic-bubble animate-bubble-rise-3"></div>
            <div className="absolute top-[68%] left-[76%] w-[18px] h-[18px] bg-lime-300/32 rounded-full toxic-bubble animate-bubble-rise-4"></div>
            
            {/* Medium bubbles */}
            <div className="absolute top-[63%] left-[64%] w-[15px] h-[15px] bg-green-400/30 rounded-full toxic-bubble animate-bubble-rise-5"></div>
            <div className="absolute top-[66%] left-[71%] w-[16px] h-[16px] bg-lime-400/28 rounded-full toxic-bubble animate-bubble-rise-6"></div>
            <div className="absolute top-[72%] left-[58%] w-[14px] h-[14px] bg-green-300/31 rounded-full toxic-bubble animate-bubble-rise-7"></div>
            
            {/* Small bubbles */}
            <div className="absolute top-[64%] left-[66%] w-[10px] h-[10px] bg-green-400/28 rounded-full toxic-bubble animate-bubble-rise-8"></div>
            <div className="absolute top-[69%] left-[73%] w-[11px] h-[11px] bg-lime-300/26 rounded-full toxic-bubble animate-bubble-rise-9"></div>
            <div className="absolute top-[74%] left-[62%] w-[9px] h-[9px] bg-green-300/29 rounded-full toxic-bubble animate-bubble-rise-10"></div>
          </div>

          {/* Toxic Water Surface Glows */}
          <div className="absolute inset-0">
            {/* Glowing toxic patches */}
            <div className="absolute top-[70%] left-[91%] w-[40px] h-[30px] bg-green-400/20 rounded-full water-glow animate-water-glow-1"></div>
            <div className="absolute top-[76%] left-[96%] w-[35px] h-[28px] bg-lime-400/18 rounded-full water-glow animate-water-glow-2"></div>
            <div className="absolute top-[73%] left-[94%] w-[38px] h-[32px] bg-green-300/22 rounded-full water-glow animate-water-glow-3"></div>
          </div>

          {/* Radioactive Particles Floating - EVERYWHERE */}
          <div className="absolute inset-0">
            {/* Large radioactive particles */}
            <div className="absolute top-[23%] left-[41%] w-[4px] h-[4px] bg-green-400/80 rounded-full rad-particle animate-rad-float-1"></div>
            <div className="absolute top-[28%] left-[51%] w-[4px] h-[4px] bg-lime-400/75 rounded-full rad-particle animate-rad-float-2"></div>
            <div className="absolute top-[33%] left-[61%] w-[5px] h-[5px] bg-green-300/85 rounded-full rad-particle animate-rad-float-3"></div>
            <div className="absolute top-[38%] left-[71%] w-[4px] h-[4px] bg-cyan-300/78 rounded-full rad-particle animate-rad-float-4"></div>
            <div className="absolute top-[43%] left-[46%] w-[5px] h-[5px] bg-green-400/82 rounded-full rad-particle animate-rad-float-5"></div>
            <div className="absolute top-[48%] left-[56%] w-[4px] h-[4px] bg-lime-300/76 rounded-full rad-particle animate-rad-float-6"></div>
            
            {/* Medium particles */}
            <div className="absolute top-[26%] left-[44%] w-[3px] h-[3px] bg-green-400/70 rounded-full rad-particle animate-rad-float-7"></div>
            <div className="absolute top-[31%] left-[54%] w-[3px] h-[3px] bg-lime-400/68 rounded-full rad-particle animate-rad-float-8"></div>
            <div className="absolute top-[36%] left-[64%] w-[3px] h-[3px] bg-green-300/72 rounded-full rad-particle animate-rad-float-9"></div>
            <div className="absolute top-[41%] left-[49%] w-[3px] h-[3px] bg-cyan-300/69 rounded-full rad-particle animate-rad-float-10"></div>
            <div className="absolute top-[46%] left-[59%] w-[3px] h-[3px] bg-green-400/71 rounded-full rad-particle animate-rad-float-11"></div>
            
            {/* Small particles */}
            <div className="absolute top-[24%] left-[48%] w-[2px] h-[2px] bg-green-400/65 rounded-full rad-particle animate-rad-float-12"></div>
            <div className="absolute top-[29%] left-[58%] w-[2px] h-[2px] bg-lime-400/63 rounded-full rad-particle animate-rad-float-13"></div>
            <div className="absolute top-[34%] left-[68%] w-[2px] h-[2px] bg-green-300/67 rounded-full rad-particle animate-rad-float-14"></div>
            <div className="absolute top-[39%] left-[53%] w-[2px] h-[2px] bg-cyan-300/64 rounded-full rad-particle animate-rad-float-15"></div>
          </div>

          {/* Toxic Mist Rising from Water */}
          <div className="absolute inset-0">
            {/* Mist plumes */}
            <div className="absolute top-[60%] left-[56%] w-[40px] h-[35px] bg-green-400/15 rounded-full toxic-mist animate-mist-rise-1"></div>
            <div className="absolute top-[62%] left-[66%] w-[45px] h-[38px] bg-lime-400/12 rounded-full toxic-mist animate-mist-rise-2"></div>
            <div className="absolute top-[64%] left-[76%] w-[42px] h-[36px] bg-green-300/14 rounded-full toxic-mist animate-mist-rise-3"></div>
            <div className="absolute top-[66%] left-[61%] w-[38px] h-[33px] bg-lime-300/13 rounded-full toxic-mist animate-mist-rise-4"></div>
            <div className="absolute top-[63%] left-[71%] w-[40px] h-[35px] bg-green-400/16 rounded-full toxic-mist animate-mist-rise-5"></div>
          </div>

          {/* Palm Tree Foliage Shimmer */}
          <div className="absolute inset-0">
            {/* Left foreground palms */}
            <div className="absolute top-[18%] left-[14%] w-[50px] h-[45px] bg-green-500/15 rounded-full foliage-glow animate-foliage-glow-1"></div>
            <div className="absolute top-[26%] left-[18%] w-[48px] h-[43px] bg-emerald-500/13 rounded-full foliage-glow animate-foliage-glow-2"></div>
            
            {/* Center area palms */}
            <div className="absolute top-[20%] left-[30%] w-[45px] h-[40px] bg-green-500/14 rounded-full foliage-glow animate-foliage-glow-3"></div>
            <div className="absolute top-[24%] left-[38%] w-[42px] h-[38px] bg-emerald-500/12 rounded-full foliage-glow animate-foliage-glow-4"></div>
            
            {/* Right side vegetation */}
            <div className="absolute top-[22%] left-[64%] w-[40px] h-[36px] bg-green-500/13 rounded-full foliage-glow animate-foliage-glow-5"></div>
          </div>
        </div>
        
        <style jsx>{`
          .toxic-energy {
            filter: blur(45px);
          }
          
          .toxic-core {
            filter: blur(20px);
            box-shadow: 0 0 60px currentColor, 0 0 120px currentColor, 0 0 180px currentColor;
          }
          
          .energy-beam {
            filter: blur(4px);
            box-shadow: 0 0 15px currentColor, 0 0 30px currentColor;
          }
          
          .electric-bolt {
            box-shadow: 0 0 8px currentColor, 0 0 16px currentColor, 0 0 24px currentColor;
            filter: blur(0.5px);
          }
          
          .electric-spark {
            box-shadow: 0 0 30px currentColor, 0 0 60px currentColor, 0 0 90px currentColor;
            filter: blur(0.3px);
          }
          
          .crack-glow {
            box-shadow: 0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor;
            filter: blur(0.4px);
          }
          
          .window-light {
            filter: blur(3px);
            box-shadow: 0 0 15px currentColor, 0 0 30px currentColor, 0 0 45px currentColor;
          }
          
          .sign-glow {
            filter: blur(15px);
          }
          
          .toxic-bubble {
            filter: blur(12px);
            box-shadow: 0 0 20px currentColor, 0 0 40px currentColor;
          }
          
          .water-glow {
            filter: blur(25px);
          }
          
          .rad-particle {
            box-shadow: 0 0 15px currentColor, 0 0 30px currentColor;
            filter: blur(0.5px);
          }
          
          .toxic-mist {
            filter: blur(20px);
            opacity: 0;
          }
          
          .foliage-glow {
            filter: blur(22px);
          }
          
          .animate-effects .toxic-energy {
            animation-play-state: running;
          }
          
          .animate-effects .toxic-core {
            animation-play-state: running;
          }
          
          .animate-effects .energy-beam {
            animation-play-state: running;
          }
          
          .animate-effects .electric-bolt {
            animation-play-state: running;
          }
          
          .animate-effects .electric-spark {
            animation-play-state: running;
          }
          
          .animate-effects .crack-glow {
            animation-play-state: running;
          }
          
          .animate-effects .window-light {
            animation-play-state: running;
          }
          
          .animate-effects .sign-glow {
            animation-play-state: running;
          }
          
          .animate-effects .toxic-bubble {
            animation-play-state: running;
          }
          
          .animate-effects .water-glow {
            animation-play-state: running;
          }
          
          .animate-effects .rad-particle {
            animation-play-state: running;
          }
          
          .animate-effects .toxic-mist {
            animation-play-state: running;
          }
          
          .animate-effects .foliage-glow {
            animation-play-state: running;
          }
          
          @keyframes toxic-explosion-1 {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.4); }
          }
          
          @keyframes toxic-explosion-2 {
            0%, 100% { opacity: 0.55; transform: scale(1) rotate(0deg); }
            60% { opacity: 0.85; transform: scale(1.45) rotate(180deg); }
          }
          
          @keyframes toxic-explosion-3 {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            55% { opacity: 0.95; transform: scale(1.5); }
          }
          
          @keyframes energy-beam-1 {
            0%, 100% { opacity: 0.7; transform: scaleY(1) translateY(0px); }
            50% { opacity: 1; transform: scaleY(1.3) translateY(-10px); }
          }
          
          @keyframes energy-beam-2 {
            0%, 100% { opacity: 0.65; transform: scaleY(1) translateY(0px) translateX(0px); }
            60% { opacity: 0.95; transform: scaleY(1.25) translateY(-8px) translateX(-5px); }
          }
          
          @keyframes energy-beam-3 {
            0%, 100% { opacity: 0.68; transform: scaleY(1) translateY(0px) translateX(0px); }
            55% { opacity: 0.98; transform: scaleY(1.28) translateY(-12px) translateX(5px); }
          }
          
          @keyframes lightning-1 {
            0%, 60%, 100% { opacity: 0; transform: scaleY(1); }
            65%, 75% { opacity: 1; transform: scaleY(1.5); }
            70% { opacity: 0.6; transform: scaleY(1.2); }
          }
          
          @keyframes lightning-2 {
            0%, 55%, 100% { opacity: 0; transform: scaleY(1) scaleX(1); }
            60%, 70% { opacity: 0.98; transform: scaleY(1.6) scaleX(1.3); }
            65% { opacity: 0.55; transform: scaleY(1.3) scaleX(1.1); }
          }
          
          @keyframes lightning-3 {
            0%, 65%, 100% { opacity: 0; transform: scaleY(1); }
            70%, 80% { opacity: 0.93; transform: scaleY(1.4); }
            75% { opacity: 0.5; transform: scaleY(1.15); }
          }
          
          @keyframes lightning-4 {
            0%, 58%, 100% { opacity: 0; transform: scaleY(1); }
            63%, 73% { opacity: 0.96; transform: scaleY(1.55); }
            68% { opacity: 0.58; transform: scaleY(1.25); }
          }
          
          @keyframes lightning-5 {
            0%, 62%, 100% { opacity: 0; transform: scaleY(1) scaleX(1); }
            67%, 77% { opacity: 0.94; transform: scaleY(1.45) scaleX(1.2); }
            72% { opacity: 0.52; transform: scaleY(1.18) scaleX(1.05); }
          }
          
          @keyframes spark-1 {
            0%, 58%, 100% { opacity: 0; transform: scale(1); }
            63%, 73% { opacity: 1; transform: scale(3.2); }
            68% { opacity: 0.65; transform: scale(2.5); }
          }
          
          @keyframes spark-2 {
            0%, 62%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            67%, 77% { opacity: 0.95; transform: scale(3) rotate(360deg); }
            72% { opacity: 0.6; transform: scale(2.3) rotate(180deg); }
          }
          
          @keyframes spark-3 {
            0%, 65%, 100% { opacity: 0; transform: scale(1); }
            70%, 80% { opacity: 0.97; transform: scale(3.1); }
            75% { opacity: 0.62; transform: scale(2.4); }
          }
          
          @keyframes spark-4 {
            0%, 60%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            65%, 75% { opacity: 0.96; transform: scale(2.9) rotate(360deg); }
            70% { opacity: 0.58; transform: scale(2.2) rotate(180deg); }
          }
          
          @keyframes crack-glow-1 {
            0%, 70%, 100% { opacity: 0; transform: scale(1); }
            75%, 85% { opacity: 0.9; transform: scale(2.5); }
            80% { opacity: 0.55; transform: scale(2); }
          }
          
          @keyframes crack-glow-2 {
            0%, 72%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            77%, 87% { opacity: 0.88; transform: scale(2.4) rotate(360deg); }
            82% { opacity: 0.52; transform: scale(1.9) rotate(180deg); }
          }
          
          @keyframes crack-glow-3 {
            0%, 68%, 100% { opacity: 0; transform: scale(1); }
            73%, 83% { opacity: 0.92; transform: scale(2.6); }
            78% { opacity: 0.58; transform: scale(2.1); }
          }
          
          @keyframes crack-glow-4 {
            0%, 74%, 100% { opacity: 0; transform: scale(1); }
            79%, 89% { opacity: 0.9; transform: scale(2.5); }
            84% { opacity: 0.56; transform: scale(2); }
          }
          
          @keyframes crack-glow-5 {
            0%, 66%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            71%, 81% { opacity: 0.89; transform: scale(2.45) rotate(360deg); }
            76% { opacity: 0.54; transform: scale(1.95) rotate(180deg); }
          }
          
          @keyframes crack-glow-6 {
            0%, 76%, 100% { opacity: 0; transform: scale(1); }
            81%, 91% { opacity: 0.91; transform: scale(2.55); }
            86% { opacity: 0.57; transform: scale(2.05); }
          }
          
          @keyframes window-light-1 {
            0%, 100% { opacity: 0.88; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.45); }
          }
          
          @keyframes window-light-2 {
            0%, 100% { opacity: 0.85; transform: scale(1); }
            60% { opacity: 1; transform: scale(1.42); }
          }
          
          @keyframes window-light-3 {
            0%, 100% { opacity: 0.9; transform: scale(1); }
            55% { opacity: 1; transform: scale(1.48); }
          }
          
          @keyframes window-light-4 {
            0%, 100% { opacity: 0.87; transform: scale(1); }
            58% { opacity: 1; transform: scale(1.44); }
          }
          
          @keyframes window-light-5 {
            0%, 100% { opacity: 0.86; transform: scale(1); }
            52% { opacity: 1; transform: scale(1.43); }
          }
          
          @keyframes window-light-6 {
            0%, 100% { opacity: 0.88; transform: scale(1); }
            56% { opacity: 1; transform: scale(1.46); }
          }
          
          @keyframes window-light-7 {
            0%, 100% { opacity: 0.85; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes window-light-8 {
            0%, 100% { opacity: 0.89; transform: scale(1); }
            54% { opacity: 1; transform: scale(1.47); }
          }
          
          @keyframes window-light-9 {
            0%, 100% { opacity: 0.88; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.45); }
          }
          
          @keyframes window-light-10 {
            0%, 100% { opacity: 0.86; transform: scale(1); }
            60% { opacity: 1; transform: scale(1.42); }
          }
          
          @keyframes window-light-11 {
            0%, 100% { opacity: 0.9; transform: scale(1); }
            55% { opacity: 1; transform: scale(1.48); }
          }
          
          @keyframes window-light-12 {
            0%, 100% { opacity: 0.87; transform: scale(1); }
            58% { opacity: 1; transform: scale(1.44); }
          }
          
          @keyframes window-light-13 {
            0%, 100% { opacity: 0.87; transform: scale(1); }
            52% { opacity: 1; transform: scale(1.44); }
          }
          
          @keyframes window-light-14 {
            0%, 100% { opacity: 0.85; transform: scale(1); }
            56% { opacity: 1; transform: scale(1.4); }
          }
          
          @keyframes window-light-15 {
            0%, 100% { opacity: 0.89; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.46); }
          }
          
          @keyframes window-light-16 {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 0.85; transform: scale(1.3); }
          }
          
          @keyframes window-light-17 {
            0%, 100% { opacity: 0.58; transform: scale(1); }
            60% { opacity: 0.82; transform: scale(1.28); }
          }
          
          @keyframes window-light-18 {
            0%, 100% { opacity: 0.62; transform: scale(1); }
            55% { opacity: 0.88; transform: scale(1.32); }
          }
          
          @keyframes sign-glow {
            0%, 100% { opacity: 0.25; transform: scale(1); }
            50% { opacity: 0.45; transform: scale(1.2); }
          }
          
          @keyframes bubble-rise-1 {
            0% { opacity: 0; transform: translateY(0px) scale(0.5); }
            20% { opacity: 0.35; transform: translateY(-50px) scale(0.8); }
            40% { opacity: 0.25; transform: translateY(-100px) scale(1.1); }
            60% { opacity: 0.15; transform: translateY(-150px) scale(1.3); }
            80% { opacity: 0.05; transform: translateY(-200px) scale(1.5); }
            100% { opacity: 0; transform: translateY(-250px) scale(1.7); }
          }
          
          @keyframes bubble-rise-2 {
            0% { opacity: 0; transform: translateY(0px) scale(0.5); }
            20% { opacity: 0.3; transform: translateY(-45px) scale(0.85); }
            40% { opacity: 0.22; transform: translateY(-90px) scale(1.15); }
            60% { opacity: 0.14; transform: translateY(-135px) scale(1.35); }
            80% { opacity: 0.06; transform: translateY(-180px) scale(1.55); }
            100% { opacity: 0; transform: translateY(-225px) scale(1.75); }
          }
          
          @keyframes bubble-rise-3 {
            0% { opacity: 0; transform: translateY(0px) scale(0.5); }
            20% { opacity: 0.33; transform: translateY(-48px) scale(0.82); }
            40% { opacity: 0.24; transform: translateY(-96px) scale(1.12); }
            60% { opacity: 0.16; transform: translateY(-144px) scale(1.32); }
            80% { opacity: 0.07; transform: translateY(-192px) scale(1.52); }
            100% { opacity: 0; transform: translateY(-240px) scale(1.72); }
          }
          
          @keyframes bubble-rise-4 {
            0% { opacity: 0; transform: translateY(0px) scale(0.5); }
            20% { opacity: 0.32; transform: translateY(-42px) scale(0.78); }
            40% { opacity: 0.23; transform: translateY(-84px) scale(1.08); }
            60% { opacity: 0.15; transform: translateY(-126px) scale(1.28); }
            80% { opacity: 0.06; transform: translateY(-168px) scale(1.48); }
            100% { opacity: 0; transform: translateY(-210px) scale(1.68); }
          }
          
          @keyframes bubble-rise-5 {
            0% { opacity: 0; transform: translateY(0px) scale(0.5); }
            20% { opacity: 0.3; transform: translateY(-40px) scale(0.8); }
            40% { opacity: 0.22; transform: translateY(-80px) scale(1.1); }
            60% { opacity: 0.14; transform: translateY(-120px) scale(1.3); }
            80% { opacity: 0.05; transform: translateY(-160px) scale(1.5); }
            100% { opacity: 0; transform: translateY(-200px) scale(1.7); }
          }
          
          @keyframes bubble-rise-6 {
            0% { opacity: 0; transform: translateY(0px) scale(0.5); }
            20% { opacity: 0.28; transform: translateY(-38px) scale(0.82); }
            40% { opacity: 0.2; transform: translateY(-76px) scale(1.12); }
            60% { opacity: 0.13; transform: translateY(-114px) scale(1.32); }
            80% { opacity: 0.05; transform: translateY(-152px) scale(1.52); }
            100% { opacity: 0; transform: translateY(-190px) scale(1.72); }
          }
          
          @keyframes bubble-rise-7 {
            0% { opacity: 0; transform: translateY(0px) scale(0.5); }
            20% { opacity: 0.31; transform: translateY(-44px) scale(0.76); }
            40% { opacity: 0.23; transform: translateY(-88px) scale(1.06); }
            60% { opacity: 0.15; transform: translateY(-132px) scale(1.26); }
            80% { opacity: 0.06; transform: translateY(-176px) scale(1.46); }
            100% { opacity: 0; transform: translateY(-220px) scale(1.66); }
          }
          
          @keyframes bubble-rise-8 {
            0% { opacity: 0; transform: translateY(0px) scale(0.5); }
            20% { opacity: 0.28; transform: translateY(-35px) scale(0.75); }
            40% { opacity: 0.2; transform: translateY(-70px) scale(1.05); }
            60% { opacity: 0.13; transform: translateY(-105px) scale(1.25); }
            80% { opacity: 0.05; transform: translateY(-140px) scale(1.45); }
            100% { opacity: 0; transform: translateY(-175px) scale(1.65); }
          }
          
          @keyframes bubble-rise-9 {
            0% { opacity: 0; transform: translateY(0px) scale(0.5); }
            20% { opacity: 0.26; transform: translateY(-37px) scale(0.77); }
            40% { opacity: 0.19; transform: translateY(-74px) scale(1.07); }
            60% { opacity: 0.12; transform: translateY(-111px) scale(1.27); }
            80% { opacity: 0.05; transform: translateY(-148px) scale(1.47); }
            100% { opacity: 0; transform: translateY(-185px) scale(1.67); }
          }
          
          @keyframes bubble-rise-10 {
            0% { opacity: 0; transform: translateY(0px) scale(0.5); }
            20% { opacity: 0.29; transform: translateY(-41px) scale(0.74); }
            40% { opacity: 0.21; transform: translateY(-82px) scale(1.04); }
            60% { opacity: 0.14; transform: translateY(-123px) scale(1.24); }
            80% { opacity: 0.06; transform: translateY(-164px) scale(1.44); }
            100% { opacity: 0; transform: translateY(-205px) scale(1.64); }
          }
          
          @keyframes water-glow-1 {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.35; transform: scale(1.25); }
          }
          
          @keyframes water-glow-2 {
            0%, 100% { opacity: 0.18; transform: scale(1) rotate(0deg); }
            60% { opacity: 0.32; transform: scale(1.22) rotate(180deg); }
          }
          
          @keyframes water-glow-3 {
            0%, 100% { opacity: 0.22; transform: scale(1); }
            55% { opacity: 0.38; transform: scale(1.28); }
          }
          
          @keyframes rad-float-1 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.8; transform: translateY(-90px) translateX(35px) rotate(180deg); }
          }
          
          @keyframes rad-float-2 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.75; transform: translateY(-85px) translateX(-32px) rotate(200deg); }
          }
          
          @keyframes rad-float-3 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.85; transform: translateY(-95px) translateX(38px) rotate(190deg); }
          }
          
          @keyframes rad-float-4 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.78; transform: translateY(-88px) translateX(-35px) rotate(210deg); }
          }
          
          @keyframes rad-float-5 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.82; transform: translateY(-92px) translateX(36px) rotate(195deg); }
          }
          
          @keyframes rad-float-6 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { opacity: 0.76; transform: translateY(-86px) translateX(-33px) rotate(205deg); }
          }
          
          @keyframes rad-float-7 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.7; transform: translateY(-70px) translateX(28px); }
          }
          
          @keyframes rad-float-8 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.68; transform: translateY(-75px) translateX(-26px); }
          }
          
          @keyframes rad-float-9 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.72; transform: translateY(-78px) translateX(30px); }
          }
          
          @keyframes rad-float-10 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.69; transform: translateY(-72px) translateX(-27px); }
          }
          
          @keyframes rad-float-11 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.71; transform: translateY(-74px) translateX(29px); }
          }
          
          @keyframes rad-float-12 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.65; transform: translateY(-60px) translateX(22px); }
          }
          
          @keyframes rad-float-13 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.63; transform: translateY(-65px) translateX(-20px); }
          }
          
          @keyframes rad-float-14 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.67; transform: translateY(-68px) translateX(24px); }
          }
          
          @keyframes rad-float-15 {
            0%, 100% { opacity: 0; transform: translateY(0px) translateX(0px); }
            50% { opacity: 0.64; transform: translateY(-62px) translateX(-21px); }
          }
          
          @keyframes mist-rise-1 {
            0% { opacity: 0; transform: translateY(0px) scale(0.8); }
            30% { opacity: 0.15; transform: translateY(-50px) scale(1.2); }
            60% { opacity: 0.08; transform: translateY(-100px) scale(1.6); }
            100% { opacity: 0; transform: translateY(-150px) scale(2); }
          }
          
          @keyframes mist-rise-2 {
            0% { opacity: 0; transform: translateY(0px) scale(0.8); }
            30% { opacity: 0.12; transform: translateY(-45px) scale(1.15); }
            60% { opacity: 0.06; transform: translateY(-90px) scale(1.5); }
            100% { opacity: 0; transform: translateY(-135px) scale(1.9); }
          }
          
          @keyframes mist-rise-3 {
            0% { opacity: 0; transform: translateY(0px) scale(0.8); }
            30% { opacity: 0.14; transform: translateY(-48px) scale(1.18); }
            60% { opacity: 0.07; transform: translateY(-96px) scale(1.55); }
            100% { opacity: 0; transform: translateY(-144px) scale(1.95); }
          }
          
          @keyframes mist-rise-4 {
            0% { opacity: 0; transform: translateY(0px) scale(0.8); }
            30% { opacity: 0.13; transform: translateY(-42px) scale(1.16); }
            60% { opacity: 0.065; transform: translateY(-84px) scale(1.52); }
            100% { opacity: 0; transform: translateY(-126px) scale(1.92); }
          }
          
          @keyframes mist-rise-5 {
            0% { opacity: 0; transform: translateY(0px) scale(0.8); }
            30% { opacity: 0.16; transform: translateY(-52px) scale(1.22); }
            60% { opacity: 0.08; transform: translateY(-104px) scale(1.62); }
            100% { opacity: 0; transform: translateY(-156px) scale(2.02); }
          }
          
          @keyframes foliage-glow-1 {
            0%, 100% { opacity: 0.15; transform: scale(1); }
            50% { opacity: 0.3; transform: scale(1.2); }
          }
          
          @keyframes foliage-glow-2 {
            0%, 100% { opacity: 0.13; transform: scale(1); }
            60% { opacity: 0.28; transform: scale(1.18); }
          }
          
          @keyframes foliage-glow-3 {
            0%, 100% { opacity: 0.14; transform: scale(1); }
            55% { opacity: 0.29; transform: scale(1.19); }
          }
          
          @keyframes foliage-glow-4 {
            0%, 100% { opacity: 0.12; transform: scale(1); }
            58% { opacity: 0.27; transform: scale(1.17); }
          }
          
          @keyframes foliage-glow-5 {
            0%, 100% { opacity: 0.13; transform: scale(1); }
            52% { opacity: 0.28; transform: scale(1.18); }
          }
          
          .animate-toxic-explosion-1 { animation: toxic-explosion-1 4s ease-in-out infinite; }
          .animate-toxic-explosion-2 { animation: toxic-explosion-2 5s ease-in-out infinite 1s; }
          .animate-toxic-explosion-3 { animation: toxic-explosion-3 3.5s ease-in-out infinite 0.5s; }
          
          .animate-energy-beam-1 { animation: energy-beam-1 3s ease-in-out infinite; }
          .animate-energy-beam-2 { animation: energy-beam-2 3.5s ease-in-out infinite 0.8s; }
          .animate-energy-beam-3 { animation: energy-beam-3 3.2s ease-in-out infinite 1.5s; }
          
          .animate-lightning-1 { animation: lightning-1 6s linear infinite; }
          .animate-lightning-2 { animation: lightning-2 7s linear infinite 1.2s; }
          .animate-lightning-3 { animation: lightning-3 6.5s linear infinite 2.4s; }
          .animate-lightning-4 { animation: lightning-4 7.5s linear infinite 0.8s; }
          .animate-lightning-5 { animation: lightning-5 6.8s linear infinite 3.6s; }
          
          .animate-spark-1 { animation: spark-1 8s linear infinite; }
          .animate-spark-2 { animation: spark-2 9s linear infinite 2s; }
          .animate-spark-3 { animation: spark-3 8.5s linear infinite 4s; }
          .animate-spark-4 { animation: spark-4 9.5s linear infinite 1s; }
          
          .animate-crack-glow-1 { animation: crack-glow-1 7s linear infinite; }
          .animate-crack-glow-2 { animation: crack-glow-2 8s linear infinite 1.5s; }
          .animate-crack-glow-3 { animation: crack-glow-3 7.5s linear infinite 3s; }
          .animate-crack-glow-4 { animation: crack-glow-4 8.5s linear infinite 0.8s; }
          .animate-crack-glow-5 { animation: crack-glow-5 7.2s linear infinite 4.5s; }
          .animate-crack-glow-6 { animation: crack-glow-6 8.8s linear infinite 2.2s; }
          
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
          .animate-window-light-13 { animation: window-light-13 5.6s ease-in-out infinite 2.3s; }
          .animate-window-light-14 { animation: window-light-14 5.2s ease-in-out infinite 2.8s; }
          .animate-window-light-15 { animation: window-light-15 5.4s ease-in-out infinite 3.3s; }
          .animate-window-light-16 { animation: window-light-16 6s ease-in-out infinite; }
          .animate-window-light-17 { animation: window-light-17 6.5s ease-in-out infinite 1.2s; }
          .animate-window-light-18 { animation: window-light-18 6.2s ease-in-out infinite 2.4s; }
          
          .animate-sign-glow { animation: sign-glow 4s ease-in-out infinite; }
          
          .animate-bubble-rise-1 { animation: bubble-rise-1 10s ease-out infinite; }
          .animate-bubble-rise-2 { animation: bubble-rise-2 12s ease-out infinite 2s; }
          .animate-bubble-rise-3 { animation: bubble-rise-3 11s ease-out infinite 4s; }
          .animate-bubble-rise-4 { animation: bubble-rise-4 13s ease-out infinite 1s; }
          .animate-bubble-rise-5 { animation: bubble-rise-5 10.5s ease-out infinite 6s; }
          .animate-bubble-rise-6 { animation: bubble-rise-6 11.5s ease-out infinite 3s; }
          .animate-bubble-rise-7 { animation: bubble-rise-7 12.5s ease-out infinite 5s; }
          .animate-bubble-rise-8 { animation: bubble-rise-8 9.5s ease-out infinite 7s; }
          .animate-bubble-rise-9 { animation: bubble-rise-9 10.8s ease-out infinite 8s; }
          .animate-bubble-rise-10 { animation: bubble-rise-10 11.2s ease-out infinite 9s; }
          
          .animate-water-glow-1 { animation: water-glow-1 6s ease-in-out infinite; }
          .animate-water-glow-2 { animation: water-glow-2 7s ease-in-out infinite 2s; }
          .animate-water-glow-3 { animation: water-glow-3 6.5s ease-in-out infinite 4s; }
          
          .animate-rad-float-1 { animation: rad-float-1 14s ease-in-out infinite; }
          .animate-rad-float-2 { animation: rad-float-2 16s ease-in-out infinite 2s; }
          .animate-rad-float-3 { animation: rad-float-3 15s ease-in-out infinite 4s; }
          .animate-rad-float-4 { animation: rad-float-4 17s ease-in-out infinite 1s; }
          .animate-rad-float-5 { animation: rad-float-5 14.5s ease-in-out infinite 6s; }
          .animate-rad-float-6 { animation: rad-float-6 16.5s ease-in-out infinite 3s; }
          .animate-rad-float-7 { animation: rad-float-7 18s ease-in-out infinite 5s; }
          .animate-rad-float-8 { animation: rad-float-8 15.5s ease-in-out infinite 7s; }
          .animate-rad-float-9 { animation: rad-float-9 17.5s ease-in-out infinite 8s; }
          .animate-rad-float-10 { animation: rad-float-10 16.2s ease-in-out infinite 9s; }
          .animate-rad-float-11 { animation: rad-float-11 14.8s ease-in-out infinite 10s; }
          .animate-rad-float-12 { animation: rad-float-12 19s ease-in-out infinite 4s; }
          .animate-rad-float-13 { animation: rad-float-13 17.8s ease-in-out infinite 11s; }
          .animate-rad-float-14 { animation: rad-float-14 15.2s ease-in-out infinite 12s; }
          .animate-rad-float-15 { animation: rad-float-15 18.5s ease-in-out infinite 2.5s; }
          
          .animate-mist-rise-1 { animation: mist-rise-1 9s ease-out infinite; }
          .animate-mist-rise-2 { animation: mist-rise-2 10s ease-out infinite 2s; }
          .animate-mist-rise-3 { animation: mist-rise-3 9.5s ease-out infinite 4s; }
          .animate-mist-rise-4 { animation: mist-rise-4 10.5s ease-out infinite 1s; }
          .animate-mist-rise-5 { animation: mist-rise-5 9.2s ease-out infinite 6s; }
          
          .animate-foliage-glow-1 { animation: foliage-glow-1 10s ease-in-out infinite; }
          .animate-foliage-glow-2 { animation: foliage-glow-2 11s ease-in-out infinite 2s; }
          .animate-foliage-glow-3 { animation: foliage-glow-3 10.5s ease-in-out infinite 4s; }
          .animate-foliage-glow-4 { animation: foliage-glow-4 11.5s ease-in-out infinite 1s; }
          .animate-foliage-glow-5 { animation: foliage-glow-5 10.2s ease-in-out infinite 5s; }
        `}</style>
      </div>
    </Card>
  );
}

