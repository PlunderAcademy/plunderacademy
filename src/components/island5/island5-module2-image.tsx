"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Island5Module2Image() {
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
          poster="/islands/island5/island5-module2-image.webp"
          onError={() => setVideoError(true)}
        >
          <source src="/islands/island5/island5-module2-video.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback image shown only if video fails */}
        {videoError && (
          <Image
            src="/islands/island5/island5-module2-image.webp"
            alt="Contract Interactions & Error Handling - Neon Haven Adventure"
            fill
            className="object-cover"
            priority
          />
        )}
        
        {/* BOLD Animated overlay effects - Only shown if video fails */}
        {videoError && (
          <div className="absolute inset-0 animate-effects">
          {/* Ceiling Neon Tube Lights - BOLD */}
          <div className="absolute inset-0">
            {/* Left ceiling light */}
            <div className="absolute top-[3%] left-[12%] w-[140px] h-[12px] bg-cyan-300/65 rounded-full ceiling-light animate-ceiling-light-1"></div>
            <div className="absolute top-[3.5%] left-[13%] w-[120px] h-[8px] bg-white/75 rounded-full ceiling-light animate-ceiling-light-2"></div>
            
            {/* Center ceiling lights */}
            <div className="absolute top-[3%] left-[42%] w-[160px] h-[14px] bg-cyan-400/70 rounded-full ceiling-light animate-ceiling-light-3"></div>
            <div className="absolute top-[3.5%] left-[43%] w-[140px] h-[10px] bg-white/80 rounded-full ceiling-light animate-ceiling-light-4"></div>
            
            {/* Right ceiling light */}
            <div className="absolute top-[3%] right-[8%] w-[150px] h-[13px] bg-cyan-300/68 rounded-full ceiling-light animate-ceiling-light-5"></div>
            <div className="absolute top-[3.5%] right-[9%] w-[130px] h-[9px] bg-white/78 rounded-full ceiling-light animate-ceiling-light-6"></div>
          </div>

          {/* Sushi Conveyor Belt Glow - BOLD */}
          <div className="absolute inset-0">
            {/* Conveyor belt cyan underglow */}
            <div className="absolute top-[64%] left-[8%] w-[350px] h-[8px] bg-cyan-400/55 rounded-full conveyor-glow animate-conveyor-glow"></div>
            
            {/* Individual sushi plate glows - scattered across belt */}
            <div className="absolute top-[63%] left-[10%] w-[25px] h-[25px] bg-orange-400/60 rounded-full sushi-glow animate-sushi-glow-1"></div>
            <div className="absolute top-[63%] left-[18%] w-[28px] h-[28px] bg-red-400/65 rounded-full sushi-glow animate-sushi-glow-2"></div>
            <div className="absolute top-[63%] left-[28%] w-[26px] h-[26px] bg-pink-400/62 rounded-full sushi-glow animate-sushi-glow-3"></div>
            <div className="absolute top-[63%] left-[38%] w-[27px] h-[27px] bg-orange-300/58 rounded-full sushi-glow animate-sushi-glow-4"></div>
            <div className="absolute top-[63%] left-[48%] w-[29px] h-[29px] bg-red-300/67 rounded-full sushi-glow animate-sushi-glow-5"></div>
            <div className="absolute top-[63%] left-[58%] w-[26px] h-[26px] bg-pink-300/60 rounded-full sushi-glow animate-sushi-glow-6"></div>
          </div>

          {/* Digital Menu Screens - BOLD Pulsing */}
          <div className="absolute inset-0">
            {/* Left digital menu */}
            <div className="absolute top-[62%] left-[26%] w-[45px] h-[55px] bg-cyan-400/58 rounded menu-screen animate-menu-screen-1"></div>
            <div className="absolute top-[63%] left-[27%] w-[40px] h-[50px] bg-white/45 rounded menu-screen animate-menu-screen-2"></div>
            
            {/* Center digital menu */}
            <div className="absolute top-[62%] left-[48%] w-[50px] h-[60px] bg-cyan-300/60 rounded menu-screen animate-menu-screen-3"></div>
            <div className="absolute top-[63%] left-[49%] w-[45px] h-[55px] bg-white/48 rounded menu-screen animate-menu-screen-4"></div>
            
            {/* Right digital menu */}
            <div className="absolute top-[62%] right-[28%] w-[48px] h-[58px] bg-cyan-400/55 rounded menu-screen animate-menu-screen-5"></div>
            <div className="absolute top-[63%] right-[29%] w-[43px] h-[53px] bg-white/42 rounded menu-screen animate-menu-screen-6"></div>
          </div>

          {/* Neon City Signs Through Window - BOLD */}
          <div className="absolute inset-0">
            {/* Large pink/magenta signs */}
            <div className="absolute top-[28%] left-[38%] w-[55px] h-[35px] bg-pink-400/70 rounded-full city-sign animate-city-sign-1"></div>
            <div className="absolute top-[18%] left-[48%] w-[45px] h-[50px] bg-magenta-400/65 rounded-full city-sign animate-city-sign-2"></div>
            
            {/* Orange/red signs */}
            <div className="absolute top-[32%] left-[68%] w-[48px] h-[32px] bg-orange-400/68 rounded-full city-sign animate-city-sign-3"></div>
            <div className="absolute top-[38%] left-[78%] w-[40px] h-[28px] bg-red-400/62 rounded-full city-sign animate-city-sign-4"></div>
            
            {/* Cyan/blue signs */}
            <div className="absolute top-[25%] left-[58%] w-[35px] h-[40px] bg-cyan-400/72 rounded-full city-sign animate-city-sign-5"></div>
            <div className="absolute top-[15%] left-[72%] w-[42px] h-[38px] bg-blue-400/68 rounded-full city-sign animate-city-sign-6"></div>
          </div>

          {/* City Building Windows - BOLD Twinkling */}
          <div className="absolute inset-0">
            {/* Left building cluster */}
            <div className="absolute top-[22%] left-[32%] w-[6px] h-[7px] bg-cyan-300 rounded window-light animate-window-twinkle-1"></div>
            <div className="absolute top-[26%] left-[34%] w-[6px] h-[7px] bg-yellow-300 rounded window-light animate-window-twinkle-2"></div>
            <div className="absolute top-[30%] left-[33%] w-[6px] h-[7px] bg-orange-300 rounded window-light animate-window-twinkle-3"></div>
            
            {/* Center building cluster */}
            <div className="absolute top-[18%] left-[50%] w-[7px] h-[8px] bg-pink-300 rounded window-light animate-window-twinkle-4"></div>
            <div className="absolute top-[22%] left-[52%] w-[6px] h-[7px] bg-cyan-300 rounded window-light animate-window-twinkle-5"></div>
            <div className="absolute top-[26%] left-[54%] w-[6px] h-[7px] bg-yellow-300 rounded window-light animate-window-twinkle-6"></div>
            <div className="absolute top-[30%] left-[51%] w-[7px] h-[8px] bg-orange-300 rounded window-light animate-window-twinkle-7"></div>
            
            {/* Right building cluster */}
            <div className="absolute top-[24%] left-[70%] w-[6px] h-[7px] bg-cyan-300 rounded window-light animate-window-twinkle-8"></div>
            <div className="absolute top-[28%] left-[72%] w-[6px] h-[7px] bg-pink-300 rounded window-light animate-window-twinkle-9"></div>
            <div className="absolute top-[32%] left-[74%] w-[7px] h-[8px] bg-yellow-300 rounded window-light animate-window-twinkle-10"></div>
            <div className="absolute top-[36%] left-[76%] w-[6px] h-[7px] bg-orange-300 rounded window-light animate-window-twinkle-11"></div>
            <div className="absolute top-[40%] left-[78%] w-[6px] h-[7px] bg-cyan-300 rounded window-light animate-window-twinkle-12"></div>
          </div>

          {/* Flying Vehicle Lights - BOLD */}
          <div className="absolute inset-0">
            {/* Top left vehicle */}
            <div className="absolute top-[15%] left-[35%] w-[12px] h-[10px] bg-red-400 rounded-full vehicle-light animate-vehicle-fly-1"></div>
            <div className="absolute top-[15.5%] left-[36%] w-[8px] h-[6px] bg-white rounded-full vehicle-light animate-vehicle-fly-1"></div>
            
            {/* Center vehicle */}
            <div className="absolute top-[20%] left-[62%] w-[14px] h-[11px] bg-cyan-400 rounded-full vehicle-light animate-vehicle-fly-2"></div>
            <div className="absolute top-[20.5%] left-[63%] w-[10px] h-[7px] bg-white rounded-full vehicle-light animate-vehicle-fly-2"></div>
            
            {/* Right vehicle */}
            <div className="absolute top-[28%] left-[82%] w-[11px] h-[9px] bg-purple-400 rounded-full vehicle-light animate-vehicle-fly-3"></div>
            <div className="absolute top-[28.5%] left-[82.5%] w-[7px] h-[5px] bg-white rounded-full vehicle-light animate-vehicle-fly-3"></div>
          </div>

          {/* Holographic Rain/Particles - BOLD */}
          <div className="absolute inset-0">
            {/* Cyan holo particles */}
            <div className="absolute top-[25%] left-[42%] w-[5px] h-[5px] bg-cyan-300 rounded-full holo-particle animate-holo-rain-1"></div>
            <div className="absolute top-[30%] left-[55%] w-[6px] h-[6px] bg-cyan-400 rounded-full holo-particle animate-holo-rain-2"></div>
            <div className="absolute top-[35%] left-[48%] w-[5px] h-[5px] bg-pink-300 rounded-full holo-particle animate-holo-rain-3"></div>
            <div className="absolute top-[40%] left-[65%] w-[6px] h-[6px] bg-purple-300 rounded-full holo-particle animate-holo-rain-4"></div>
            <div className="absolute top-[32%] left-[72%] w-[5px] h-[5px] bg-cyan-400 rounded-full holo-particle animate-holo-rain-5"></div>
            <div className="absolute top-[38%] left-[60%] w-[6px] h-[6px] bg-pink-400 rounded-full holo-particle animate-holo-rain-6"></div>
          </div>

          {/* Restaurant Table Lights - BOLD */}
          <div className="absolute inset-0">
            {/* Under-table cyan glow */}
            <div className="absolute top-[68%] left-[8%] w-[80px] h-[35px] bg-cyan-400/45 rounded-full table-glow animate-table-glow-1"></div>
            <div className="absolute top-[68%] left-[28%] w-[85px] h-[38px] bg-cyan-300/48 rounded-full table-glow animate-table-glow-2"></div>
            <div className="absolute top-[68%] left-[48%] w-[82px] h-[36px] bg-cyan-400/50 rounded-full table-glow animate-table-glow-3"></div>
          </div>

          {/* Purple Edge Lighting - LEFT SIDE BOLD */}
          <div className="absolute inset-0">
            {/* Left wall purple neon strips */}
            <div className="absolute top-[35%] left-[2%] w-[12px] h-[85px] bg-purple-400/68 rounded-full edge-light animate-edge-light-1"></div>
            <div className="absolute top-[48%] left-[8%] w-[15px] h-[70px] bg-magenta-400/72 rounded-full edge-light animate-edge-light-2"></div>
          </div>

          {/* Purple Edge Lighting - RIGHT SIDE BOLD */}
          <div className="absolute inset-0">
            {/* Right edge purple neon */}
            <div className="absolute top-[32%] right-[2%] w-[14px] h-[90px] bg-purple-400/70 rounded-full edge-light animate-edge-light-3"></div>
            <div className="absolute top-[45%] right-[8%] w-[16px] h-[75px] bg-magenta-400/75 rounded-full edge-light animate-edge-light-4"></div>
          </div>

          {/* Plant Bioluminescence - FOREGROUND BOLD */}
          <div className="absolute inset-0">
            {/* Left foreground plants */}
            <div className="absolute top-[55%] left-[8%] w-[50px] h-[55px] bg-green-400/38 rounded-full plant-glow animate-plant-glow-1"></div>
            <div className="absolute top-[62%] left-[12%] w-[45px] h-[50px] bg-cyan-400/35 rounded-full plant-glow animate-plant-glow-2"></div>
            
            {/* Right foreground plants */}
            <div className="absolute top-[58%] right-[8%] w-[52px] h-[58px] bg-green-400/40 rounded-full plant-glow animate-plant-glow-3"></div>
            <div className="absolute top-[65%] right-[12%] w-[48px] h-[53px] bg-cyan-400/37 rounded-full plant-glow animate-plant-glow-4"></div>
          </div>

          {/* Reflection Shimmer on Glass/Table - BOLD */}
          <div className="absolute inset-0">
            {/* Window reflection glints */}
            <div className="absolute top-[45%] left-[40%] w-[8px] h-[8px] bg-white/85 rounded-full reflection-glint animate-reflection-1"></div>
            <div className="absolute top-[50%] left-[55%] w-[9px] h-[9px] bg-cyan-200/90 rounded-full reflection-glint animate-reflection-2"></div>
            <div className="absolute top-[48%] left-[70%] w-[8px] h-[8px] bg-white/88 rounded-full reflection-glint animate-reflection-3"></div>
          </div>

          {/* Steam Rising from Food - BOLD */}
          <div className="absolute inset-0">
            {/* Steam wisps */}
            <div className="absolute top-[62%] left-[15%] w-[22px] h-[30px] bg-white/35 rounded-full steam animate-steam-rise-1"></div>
            <div className="absolute top-[62%] left-[35%] w-[20px] h-[28px] bg-cyan-100/32 rounded-full steam animate-steam-rise-2"></div>
            <div className="absolute top-[62%] left-[52%] w-[24px] h-[32px] bg-white/38 rounded-full steam animate-steam-rise-3"></div>
          </div>
          
          <style jsx>{`
          /* BOLD Effect Styles */
          .ceiling-light {
            filter: blur(35px);
          }
          
          .conveyor-glow {
            filter: blur(30px);
          }
          
          .sushi-glow {
            filter: blur(28px);
            box-shadow: 0 0 40px currentColor, 0 0 80px currentColor;
          }
          
          .menu-screen {
            filter: blur(32px);
          }
          
          .city-sign {
            filter: blur(38px);
          }
          
          .window-light {
            box-shadow: 0 0 45px currentColor, 0 0 90px currentColor, 0 0 135px currentColor;
            filter: blur(1.5px);
          }
          
          .vehicle-light {
            box-shadow: 0 0 50px currentColor, 0 0 100px currentColor, 0 0 150px currentColor;
            filter: blur(2px);
          }
          
          .holo-particle {
            box-shadow: 0 0 55px currentColor, 0 0 110px currentColor, 0 0 165px currentColor;
            filter: blur(1px);
          }
          
          .table-glow {
            filter: blur(42px);
          }
          
          .edge-light {
            filter: blur(45px);
          }
          
          .plant-glow {
            filter: blur(40px);
          }
          
          .reflection-glint {
            box-shadow: 0 0 60px currentColor, 0 0 120px currentColor, 0 0 180px currentColor;
            filter: blur(0.8px);
          }
          
          .steam {
            filter: blur(35px);
          }
          
          .animate-effects .ceiling-light,
          .animate-effects .conveyor-glow,
          .animate-effects .sushi-glow,
          .animate-effects .menu-screen,
          .animate-effects .city-sign,
          .animate-effects .window-light,
          .animate-effects .vehicle-light,
          .animate-effects .holo-particle,
          .animate-effects .table-glow,
          .animate-effects .edge-light,
          .animate-effects .plant-glow,
          .animate-effects .reflection-glint,
          .animate-effects .steam {
            animation-play-state: running;
          }
          
          /* Ceiling Light Animations - BOLD */
          @keyframes ceiling-light-1 {
            0%, 100% { opacity: 0.65; transform: scaleX(1); }
            50% { opacity: 0.88; transform: scaleX(1.08); }
          }
          
          @keyframes ceiling-light-2 {
            0%, 100% { opacity: 0.75; transform: scaleX(1); }
            50% { opacity: 0.95; transform: scaleX(1.10); }
          }
          
          @keyframes ceiling-light-3 {
            0%, 100% { opacity: 0.70; transform: scaleX(1); }
            50% { opacity: 0.92; transform: scaleX(1.12); }
          }
          
          @keyframes ceiling-light-4 {
            0%, 100% { opacity: 0.80; transform: scaleX(1); }
            50% { opacity: 1; transform: scaleX(1.14); }
          }
          
          @keyframes ceiling-light-5 {
            0%, 100% { opacity: 0.68; transform: scaleX(1); }
            50% { opacity: 0.90; transform: scaleX(1.09); }
          }
          
          @keyframes ceiling-light-6 {
            0%, 100% { opacity: 0.78; transform: scaleX(1); }
            50% { opacity: 0.98; transform: scaleX(1.11); }
          }
          
          /* Conveyor Belt Glow - BOLD Pulse */
          @keyframes conveyor-glow {
            0%, 100% { opacity: 0.55; transform: scaleX(1) scaleY(1); }
            50% { opacity: 0.80; transform: scaleX(1.05) scaleY(1.15); }
          }
          
          /* Sushi Plate Glows - BOLD Pulsing */
          @keyframes sushi-glow-1 {
            0%, 100% { opacity: 0.60; transform: scale(1); }
            50% { opacity: 0.90; transform: scale(1.35); }
          }
          
          @keyframes sushi-glow-2 {
            0%, 100% { opacity: 0.65; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.95; transform: scale(1.40) rotate(180deg); }
          }
          
          @keyframes sushi-glow-3 {
            0%, 100% { opacity: 0.62; transform: scale(1); }
            50% { opacity: 0.92; transform: scale(1.37); }
          }
          
          @keyframes sushi-glow-4 {
            0%, 100% { opacity: 0.58; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.88; transform: scale(1.33) rotate(-180deg); }
          }
          
          @keyframes sushi-glow-5 {
            0%, 100% { opacity: 0.67; transform: scale(1); }
            50% { opacity: 0.97; transform: scale(1.42); }
          }
          
          @keyframes sushi-glow-6 {
            0%, 100% { opacity: 0.60; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.90; transform: scale(1.36) rotate(180deg); }
          }
          
          /* Menu Screen Animations - BOLD */
          @keyframes menu-screen-1 {
            0%, 100% { opacity: 0.58; transform: scale(1); }
            50% { opacity: 0.85; transform: scale(1.08); }
          }
          
          @keyframes menu-screen-2 {
            0%, 100% { opacity: 0.45; transform: scale(1); }
            50% { opacity: 0.72; transform: scale(1.10); }
          }
          
          @keyframes menu-screen-3 {
            0%, 100% { opacity: 0.60; transform: scale(1); }
            50% { opacity: 0.88; transform: scale(1.12); }
          }
          
          @keyframes menu-screen-4 {
            0%, 100% { opacity: 0.48; transform: scale(1); }
            50% { opacity: 0.75; transform: scale(1.14); }
          }
          
          @keyframes menu-screen-5 {
            0%, 100% { opacity: 0.55; transform: scale(1); }
            50% { opacity: 0.82; transform: scale(1.09); }
          }
          
          @keyframes menu-screen-6 {
            0%, 100% { opacity: 0.42; transform: scale(1); }
            50% { opacity: 0.68; transform: scale(1.11); }
          }
          
          /* City Sign Animations - BOLD */
          @keyframes city-sign-1 {
            0%, 100% { opacity: 0.70; transform: scale(1); }
            50% { opacity: 0.95; transform: scale(1.22); }
          }
          
          @keyframes city-sign-2 {
            0%, 100% { opacity: 0.65; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.90; transform: scale(1.20) rotate(5deg); }
          }
          
          @keyframes city-sign-3 {
            0%, 100% { opacity: 0.68; transform: scale(1); }
            50% { opacity: 0.93; transform: scale(1.24); }
          }
          
          @keyframes city-sign-4 {
            0%, 100% { opacity: 0.62; transform: scale(1); }
            50% { opacity: 0.87; transform: scale(1.18); }
          }
          
          @keyframes city-sign-5 {
            0%, 100% { opacity: 0.72; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.97; transform: scale(1.26) rotate(-5deg); }
          }
          
          @keyframes city-sign-6 {
            0%, 100% { opacity: 0.68; transform: scale(1); }
            50% { opacity: 0.93; transform: scale(1.21); }
          }
          
          /* Window Twinkle Animations - BOLD */
          @keyframes window-twinkle-1 {
            0%, 60%, 100% { opacity: 0; transform: scale(0.5); }
            65%, 75% { opacity: 1; transform: scale(5); }
            70% { opacity: 0.6; transform: scale(4); }
          }
          
          @keyframes window-twinkle-2 {
            0%, 65%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            70%, 80% { opacity: 1; transform: scale(4.8) rotate(360deg); }
            75% { opacity: 0.6; transform: scale(3.8) rotate(180deg); }
          }
          
          @keyframes window-twinkle-3 {
            0%, 68%, 100% { opacity: 0; transform: scale(0.5); }
            73%, 83% { opacity: 1; transform: scale(5.2); }
            78% { opacity: 0.6; transform: scale(4.2); }
          }
          
          @keyframes window-twinkle-4 {
            0%, 62%, 100% { opacity: 0; transform: scale(0.5); }
            67%, 77% { opacity: 1; transform: scale(5.5); }
            72% { opacity: 0.6; transform: scale(4.5); }
          }
          
          @keyframes window-twinkle-5 {
            0%, 70%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            75%, 85% { opacity: 1; transform: scale(4.9) rotate(360deg); }
            80% { opacity: 0.6; transform: scale(3.9) rotate(180deg); }
          }
          
          @keyframes window-twinkle-6 {
            0%, 64%, 100% { opacity: 0; transform: scale(0.5); }
            69%, 79% { opacity: 1; transform: scale(5.1); }
            74% { opacity: 0.6; transform: scale(4.1); }
          }
          
          @keyframes window-twinkle-7 {
            0%, 72%, 100% { opacity: 0; transform: scale(0.5); }
            77%, 87% { opacity: 1; transform: scale(5.3); }
            82% { opacity: 0.6; transform: scale(4.3); }
          }
          
          @keyframes window-twinkle-8 {
            0%, 66%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            71%, 81% { opacity: 1; transform: scale(4.7) rotate(360deg); }
            76% { opacity: 0.6; transform: scale(3.7) rotate(180deg); }
          }
          
          @keyframes window-twinkle-9 {
            0%, 74%, 100% { opacity: 0; transform: scale(0.5); }
            79%, 89% { opacity: 1; transform: scale(5.4); }
            84% { opacity: 0.6; transform: scale(4.4); }
          }
          
          @keyframes window-twinkle-10 {
            0%, 58%, 100% { opacity: 0; transform: scale(0.5); }
            63%, 73% { opacity: 1; transform: scale(5.6); }
            68% { opacity: 0.6; transform: scale(4.6); }
          }
          
          @keyframes window-twinkle-11 {
            0%, 76%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            81%, 91% { opacity: 1; transform: scale(4.8) rotate(360deg); }
            86% { opacity: 0.6; transform: scale(3.8) rotate(180deg); }
          }
          
          @keyframes window-twinkle-12 {
            0%, 69%, 100% { opacity: 0; transform: scale(0.5); }
            74%, 84% { opacity: 1; transform: scale(5); }
            79% { opacity: 0.6; transform: scale(4); }
          }
          
          /* Vehicle Flying Animations - BOLD */
          @keyframes vehicle-fly-1 {
            0% { opacity: 0; transform: translateX(0) translateY(0) scale(0.8); }
            20% { opacity: 1; transform: translateX(-50px) translateY(15px) scale(1); }
            100% { opacity: 0; transform: translateX(-250px) translateY(45px) scale(0.7); }
          }
          
          @keyframes vehicle-fly-2 {
            0% { opacity: 1; transform: translateX(0) translateY(0) scale(1); }
            100% { opacity: 0; transform: translateX(280px) translateY(-30px) scale(0.6); }
          }
          
          @keyframes vehicle-fly-3 {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.85; transform: scale(1.15); }
          }
          
          /* Holo Rain Particle Animations - BOLD */
          @keyframes holo-rain-1 {
            0% { opacity: 0; transform: translateY(0) scale(1); }
            50% { opacity: 1; transform: translateY(80px) scale(1.3); }
            100% { opacity: 0; transform: translateY(160px) scale(0.8); }
          }
          
          @keyframes holo-rain-2 {
            0% { opacity: 0; transform: translateY(0) scale(1) rotate(0deg); }
            50% { opacity: 1; transform: translateY(90px) scale(1.4) rotate(180deg); }
            100% { opacity: 0; transform: translateY(180px) scale(0.7) rotate(360deg); }
          }
          
          @keyframes holo-rain-3 {
            0% { opacity: 0; transform: translateY(0) scale(1); }
            50% { opacity: 1; transform: translateY(75px) scale(1.2); }
            100% { opacity: 0; transform: translateY(150px) scale(0.9); }
          }
          
          @keyframes holo-rain-4 {
            0% { opacity: 0; transform: translateY(0) scale(1) rotate(0deg); }
            50% { opacity: 1; transform: translateY(95px) scale(1.5) rotate(180deg); }
            100% { opacity: 0; transform: translateY(190px) scale(0.6) rotate(360deg); }
          }
          
          @keyframes holo-rain-5 {
            0% { opacity: 0; transform: translateY(0) scale(1); }
            50% { opacity: 1; transform: translateY(85px) scale(1.35); }
            100% { opacity: 0; transform: translateY(170px) scale(0.75); }
          }
          
          @keyframes holo-rain-6 {
            0% { opacity: 0; transform: translateY(0) scale(1) rotate(0deg); }
            50% { opacity: 1; transform: translateY(78px) scale(1.25) rotate(180deg); }
            100% { opacity: 0; transform: translateY(156px) scale(0.85) rotate(360deg); }
          }
          
          /* Table Glow Animations - BOLD */
          @keyframes table-glow-1 {
            0%, 100% { opacity: 0.45; transform: scale(1); }
            50% { opacity: 0.72; transform: scale(1.18); }
          }
          
          @keyframes table-glow-2 {
            0%, 100% { opacity: 0.48; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.75; transform: scale(1.20) rotate(10deg); }
          }
          
          @keyframes table-glow-3 {
            0%, 100% { opacity: 0.50; transform: scale(1); }
            50% { opacity: 0.78; transform: scale(1.22); }
          }
          
          /* Edge Light Animations - BOLD */
          @keyframes edge-light-1 {
            0%, 100% { opacity: 0.68; transform: scaleY(1); }
            50% { opacity: 0.92; transform: scaleY(1.12); }
          }
          
          @keyframes edge-light-2 {
            0%, 100% { opacity: 0.72; transform: scaleY(1); }
            50% { opacity: 0.96; transform: scaleY(1.15); }
          }
          
          @keyframes edge-light-3 {
            0%, 100% { opacity: 0.70; transform: scaleY(1); }
            50% { opacity: 0.94; transform: scaleY(1.14); }
          }
          
          @keyframes edge-light-4 {
            0%, 100% { opacity: 0.75; transform: scaleY(1); }
            50% { opacity: 0.98; transform: scaleY(1.18); }
          }
          
          /* Plant Glow Animations - BOLD */
          @keyframes plant-glow-1 {
            0%, 100% { opacity: 0.38; transform: scale(1); }
            50% { opacity: 0.62; transform: scale(1.20); }
          }
          
          @keyframes plant-glow-2 {
            0%, 100% { opacity: 0.35; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.58; transform: scale(1.18) rotate(8deg); }
          }
          
          @keyframes plant-glow-3 {
            0%, 100% { opacity: 0.40; transform: scale(1); }
            50% { opacity: 0.65; transform: scale(1.22); }
          }
          
          @keyframes plant-glow-4 {
            0%, 100% { opacity: 0.37; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.60; transform: scale(1.19) rotate(-8deg); }
          }
          
          /* Reflection Glint Animations - BOLD */
          @keyframes reflection-1 {
            0%, 70%, 100% { opacity: 0; transform: scale(0.5); }
            75%, 90% { opacity: 1; transform: scale(6); }
            82% { opacity: 0.5; transform: scale(5); }
          }
          
          @keyframes reflection-2 {
            0%, 65%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            70%, 85% { opacity: 1; transform: scale(6.5) rotate(360deg); }
            77% { opacity: 0.5; transform: scale(5.5) rotate(180deg); }
          }
          
          @keyframes reflection-3 {
            0%, 72%, 100% { opacity: 0; transform: scale(0.5); }
            77%, 92% { opacity: 1; transform: scale(5.8); }
            84% { opacity: 0.5; transform: scale(4.8); }
          }
          
          /* Steam Rising Animations - BOLD */
          @keyframes steam-rise-1 {
            0% { opacity: 0; transform: translateY(0) scale(0.8); }
            30% { opacity: 0.40; transform: translateY(-30px) scale(1.2); }
            70% { opacity: 0.20; transform: translateY(-70px) scale(1.5); }
            100% { opacity: 0; transform: translateY(-110px) scale(1.8); }
          }
          
          @keyframes steam-rise-2 {
            0% { opacity: 0; transform: translateY(0) scale(0.7) rotate(0deg); }
            30% { opacity: 0.38; transform: translateY(-28px) scale(1.15) rotate(20deg); }
            70% { opacity: 0.18; transform: translateY(-68px) scale(1.45) rotate(40deg); }
            100% { opacity: 0; transform: translateY(-108px) scale(1.75) rotate(60deg); }
          }
          
          @keyframes steam-rise-3 {
            0% { opacity: 0; transform: translateY(0) scale(0.9); }
            30% { opacity: 0.42; transform: translateY(-32px) scale(1.25); }
            70% { opacity: 0.22; transform: translateY(-72px) scale(1.55); }
            100% { opacity: 0; transform: translateY(-112px) scale(1.85); }
          }
          
          /* Animation Class Assignments */
          .animate-ceiling-light-1 { animation: ceiling-light-1 6s ease-in-out infinite; }
          .animate-ceiling-light-2 { animation: ceiling-light-2 6s ease-in-out infinite 0.3s; }
          .animate-ceiling-light-3 { animation: ceiling-light-3 6.5s ease-in-out infinite 1s; }
          .animate-ceiling-light-4 { animation: ceiling-light-4 6.5s ease-in-out infinite 1.3s; }
          .animate-ceiling-light-5 { animation: ceiling-light-5 6.2s ease-in-out infinite 2s; }
          .animate-ceiling-light-6 { animation: ceiling-light-6 6.2s ease-in-out infinite 2.3s; }
          
          .animate-conveyor-glow { animation: conveyor-glow 5s ease-in-out infinite; }
          
          .animate-sushi-glow-1 { animation: sushi-glow-1 4s ease-in-out infinite; }
          .animate-sushi-glow-2 { animation: sushi-glow-2 4.5s ease-in-out infinite 0.5s; }
          .animate-sushi-glow-3 { animation: sushi-glow-3 4.2s ease-in-out infinite 1s; }
          .animate-sushi-glow-4 { animation: sushi-glow-4 4.8s ease-in-out infinite 1.5s; }
          .animate-sushi-glow-5 { animation: sushi-glow-5 4.3s ease-in-out infinite 2s; }
          .animate-sushi-glow-6 { animation: sushi-glow-6 4.6s ease-in-out infinite 2.5s; }
          
          .animate-menu-screen-1 { animation: menu-screen-1 7s ease-in-out infinite; }
          .animate-menu-screen-2 { animation: menu-screen-2 7s ease-in-out infinite 0.5s; }
          .animate-menu-screen-3 { animation: menu-screen-3 7.5s ease-in-out infinite 1.5s; }
          .animate-menu-screen-4 { animation: menu-screen-4 7.5s ease-in-out infinite 2s; }
          .animate-menu-screen-5 { animation: menu-screen-5 7.2s ease-in-out infinite 3s; }
          .animate-menu-screen-6 { animation: menu-screen-6 7.2s ease-in-out infinite 3.5s; }
          
          .animate-city-sign-1 { animation: city-sign-1 5s ease-in-out infinite; }
          .animate-city-sign-2 { animation: city-sign-2 5.5s ease-in-out infinite 1s; }
          .animate-city-sign-3 { animation: city-sign-3 5.2s ease-in-out infinite 2s; }
          .animate-city-sign-4 { animation: city-sign-4 5.8s ease-in-out infinite 0.5s; }
          .animate-city-sign-5 { animation: city-sign-5 5.4s ease-in-out infinite 1.5s; }
          .animate-city-sign-6 { animation: city-sign-6 5.6s ease-in-out infinite 2.5s; }
          
          .animate-window-twinkle-1 { animation: window-twinkle-1 8s linear infinite; }
          .animate-window-twinkle-2 { animation: window-twinkle-2 8.5s linear infinite 1.5s; }
          .animate-window-twinkle-3 { animation: window-twinkle-3 8.2s linear infinite 3s; }
          .animate-window-twinkle-4 { animation: window-twinkle-4 8.8s linear infinite 4.5s; }
          .animate-window-twinkle-5 { animation: window-twinkle-5 8.3s linear infinite 2s; }
          .animate-window-twinkle-6 { animation: window-twinkle-6 8.6s linear infinite 6s; }
          .animate-window-twinkle-7 { animation: window-twinkle-7 8.4s linear infinite 1s; }
          .animate-window-twinkle-8 { animation: window-twinkle-8 8.7s linear infinite 5s; }
          .animate-window-twinkle-9 { animation: window-twinkle-9 8.1s linear infinite 3.5s; }
          .animate-window-twinkle-10 { animation: window-twinkle-10 9s linear infinite 7s; }
          .animate-window-twinkle-11 { animation: window-twinkle-11 8.9s linear infinite 2.5s; }
          .animate-window-twinkle-12 { animation: window-twinkle-12 8.5s linear infinite 4s; }
          
          .animate-vehicle-fly-1 { animation: vehicle-fly-1 14s linear infinite; }
          .animate-vehicle-fly-2 { animation: vehicle-fly-2 16s linear infinite 4s; }
          .animate-vehicle-fly-3 { animation: vehicle-fly-3 4s ease-in-out infinite; }
          
          .animate-holo-rain-1 { animation: holo-rain-1 10s linear infinite; }
          .animate-holo-rain-2 { animation: holo-rain-2 11s linear infinite 2s; }
          .animate-holo-rain-3 { animation: holo-rain-3 10.5s linear infinite 4s; }
          .animate-holo-rain-4 { animation: holo-rain-4 12s linear infinite 1s; }
          .animate-holo-rain-5 { animation: holo-rain-5 11.5s linear infinite 6s; }
          .animate-holo-rain-6 { animation: holo-rain-6 10.8s linear infinite 3s; }
          
          .animate-table-glow-1 { animation: table-glow-1 8s ease-in-out infinite; }
          .animate-table-glow-2 { animation: table-glow-2 8.5s ease-in-out infinite 2s; }
          .animate-table-glow-3 { animation: table-glow-3 8.2s ease-in-out infinite 4s; }
          
          .animate-edge-light-1 { animation: edge-light-1 7s ease-in-out infinite; }
          .animate-edge-light-2 { animation: edge-light-2 7.5s ease-in-out infinite 1.5s; }
          .animate-edge-light-3 { animation: edge-light-3 7.2s ease-in-out infinite 3s; }
          .animate-edge-light-4 { animation: edge-light-4 7.8s ease-in-out infinite 0.8s; }
          
          .animate-plant-glow-1 { animation: plant-glow-1 12s ease-in-out infinite; }
          .animate-plant-glow-2 { animation: plant-glow-2 13s ease-in-out infinite 3s; }
          .animate-plant-glow-3 { animation: plant-glow-3 12.5s ease-in-out infinite 6s; }
          .animate-plant-glow-4 { animation: plant-glow-4 13.5s ease-in-out infinite 2s; }
          
          .animate-reflection-1 { animation: reflection-1 10s linear infinite; }
          .animate-reflection-2 { animation: reflection-2 11s linear infinite 3s; }
          .animate-reflection-3 { animation: reflection-3 10.5s linear infinite 6s; }
          
          .animate-steam-rise-1 { animation: steam-rise-1 8s ease-out infinite; }
          .animate-steam-rise-2 { animation: steam-rise-2 8.5s ease-out infinite 2.5s; }
          .animate-steam-rise-3 { animation: steam-rise-3 9s ease-out infinite 5s; }
          `}</style>
        </div>
        )}
      </div>
    </Card>
  );
}

