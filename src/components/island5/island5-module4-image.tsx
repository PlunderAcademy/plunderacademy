"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Island5Module4Image() {
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
          poster="/islands/island5/island5-module4-image.webp"
          onError={() => setVideoError(true)}
        >
          <source src="/islands/island5/island5-module4-video.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback image shown only if video fails */}
        {videoError && (
          <Image
            src="/islands/island5/island5-module4-image.webp"
            alt="Neon Haven Module 4 - Epic Mech Battle Arena"
            fill
            className="object-cover"
            priority
          />
        )}
        
        {/* OVER-THE-TOP MECH BATTLE ANIMATIONS - Only shown if video fails */}
        {videoError && (
          <div className="absolute inset-0 animate-effects">
          {/* MASSIVE Central Energy Clash - THE MAIN EVENT */}
          <div className="absolute inset-0">
            {/* Core explosion burst - INSANE */}
            <div className="absolute top-[46%] left-[50%] w-[200px] h-[200px] bg-yellow-300/75 rounded-full energy-clash animate-clash-core-1"></div>
            <div className="absolute top-[47%] left-[50.5%] w-[160px] h-[160px] bg-white/85 rounded-full energy-clash animate-clash-core-2"></div>
            <div className="absolute top-[48%] left-[51%] w-[120px] h-[120px] bg-orange-400/80 rounded-full energy-clash animate-clash-core-3"></div>
            
            {/* Explosive energy rings radiating */}
            <div className="absolute top-[45%] left-[49%] w-[220px] h-[220px] border-4 border-yellow-400/70 rounded-full clash-ring animate-clash-ring-1"></div>
            <div className="absolute top-[44%] left-[48%] w-[260px] h-[260px] border-3 border-orange-400/60 rounded-full clash-ring animate-clash-ring-2"></div>
            <div className="absolute top-[43%] left-[47%] w-[300px] h-[300px] border-2 border-red-400/50 rounded-full clash-ring animate-clash-ring-3"></div>
            
            {/* Energy sparks flying everywhere */}
            <div className="absolute top-[46%] left-[48%] w-[8px] h-[8px] bg-white rounded-full energy-spark animate-spark-1"></div>
            <div className="absolute top-[48%] left-[52%] w-[8px] h-[8px] bg-yellow-200 rounded-full energy-spark animate-spark-2"></div>
            <div className="absolute top-[44%] left-[50%] w-[8px] h-[8px] bg-orange-300 rounded-full energy-spark animate-spark-3"></div>
            <div className="absolute top-[46%] left-[54%] w-[8px] h-[8px] bg-white rounded-full energy-spark animate-spark-4"></div>
            <div className="absolute top-[50%] left-[49%] w-[8px] h-[8px] bg-yellow-200 rounded-full energy-spark animate-spark-5"></div>
            <div className="absolute top-[48%] left-[46%] w-[8px] h-[8px] bg-orange-300 rounded-full energy-spark animate-spark-6"></div>
          </div>

          {/* MECH IMPACT BURSTS - Left Mech (Blue) */}
          <div className="absolute inset-0">
            {/* Left foot impact */}
            <div className="absolute top-[68%] left-[28%] w-[90px] h-[90px] bg-yellow-400/75 rounded-full impact-burst animate-impact-left-1"></div>
            <div className="absolute top-[69%] left-[28.5%] w-[70px] h-[70px] bg-white/85 rounded-full impact-burst animate-impact-left-2"></div>
            <div className="absolute top-[70%] left-[29%] w-[50px] h-[50px] bg-orange-400/80 rounded-full impact-burst animate-impact-left-3"></div>
            
            {/* Impact shockwave lines */}
            <div className="absolute top-[70%] left-[20%] w-[80px] h-[3px] bg-gradient-to-r from-transparent via-yellow-400/70 to-transparent shockwave animate-shockwave-left-1"></div>
            <div className="absolute top-[72%] left-[22%] w-[70px] h-[2px] bg-gradient-to-r from-transparent via-orange-400/60 to-transparent shockwave animate-shockwave-left-2"></div>
          </div>

          {/* MECH IMPACT BURSTS - Right Mech (Red) */}
          <div className="absolute inset-0">
            {/* Right foot impact */}
            <div className="absolute top-[70%] left-[72%] w-[90px] h-[90px] bg-yellow-400/75 rounded-full impact-burst animate-impact-right-1"></div>
            <div className="absolute top-[71%] left-[72.5%] w-[70px] h-[70px] bg-white/85 rounded-full impact-burst animate-impact-right-2"></div>
            <div className="absolute top-[72%] left-[73%] w-[50px] h-[50px] bg-orange-400/80 rounded-full impact-burst animate-impact-right-3"></div>
            
            {/* Impact shockwave lines */}
            <div className="absolute top-[72%] left-[74%] w-[80px] h-[3px] bg-gradient-to-l from-transparent via-yellow-400/70 to-transparent shockwave animate-shockwave-right-1"></div>
            <div className="absolute top-[74%] left-[76%] w-[70px] h-[2px] bg-gradient-to-l from-transparent via-orange-400/60 to-transparent shockwave animate-shockwave-right-2"></div>
          </div>

          {/* Mech Eye Glows - INTENSE */}
          <div className="absolute inset-0">
            {/* Blue mech eyes */}
            <div className="absolute top-[37%] left-[34%] w-[10px] h-[10px] bg-cyan-400 rounded-full mech-eye animate-mech-eye-blue-1"></div>
            <div className="absolute top-[37%] left-[36%] w-[10px] h-[10px] bg-cyan-400 rounded-full mech-eye animate-mech-eye-blue-2"></div>
            
            {/* Red mech eyes */}
            <div className="absolute top-[36%] left-[64%] w-[10px] h-[10px] bg-red-500 rounded-full mech-eye animate-mech-eye-red-1"></div>
            <div className="absolute top-[36%] left-[66%] w-[10px] h-[10px] bg-red-500 rounded-full mech-eye animate-mech-eye-red-2"></div>
          </div>

          {/* Blue Mech Energy Sword/Weapon Glow */}
          <div className="absolute inset-0">
            {/* Sword blade glow */}
            <div className="absolute top-[42%] left-[38%] w-[4px] h-[80px] bg-cyan-400/80 rounded-full weapon-glow rotate-[-25deg] animate-sword-glow-1"></div>
            <div className="absolute top-[43%] left-[38.5%] w-[3px] h-[75px] bg-white/90 rounded-full weapon-glow rotate-[-25deg] animate-sword-glow-2"></div>
            
            {/* Sword tip sparkle */}
            <div className="absolute top-[38%] left-[40%] w-[12px] h-[12px] bg-cyan-300 rounded-full sword-tip animate-sword-tip-1"></div>
          </div>

          {/* Red Mech Weapon Glow */}
          <div className="absolute inset-0">
            {/* Weapon energy */}
            <div className="absolute top-[44%] left-[70%] w-[50px] h-[35px] bg-red-400/75 rounded-full weapon-glow animate-gun-glow-1"></div>
            <div className="absolute top-[45%] left-[71%] w-[40px] h-[28px] bg-orange-400/80 rounded-full weapon-glow animate-gun-glow-2"></div>
            
            {/* Muzzle flash */}
            <div className="absolute top-[45.5%] left-[68%] w-[15px] h-[15px] bg-yellow-300 rounded-full muzzle-flash animate-muzzle-flash"></div>
          </div>

          {/* Flying Drones/Vehicles - ZOOMING AROUND */}
          <div className="absolute inset-0">
            {/* Top left drone */}
            <div className="absolute top-[20%] left-[35%] w-[18px] h-[14px] bg-cyan-400/90 rounded-full drone-light animate-drone-1"></div>
            <div className="absolute top-[20.5%] left-[35.5%] w-[12px] h-[9px] bg-white/95 rounded-full drone-light animate-drone-1"></div>
            
            {/* Center drone */}
            <div className="absolute top-[22%] left-[52%] w-[16px] h-[12px] bg-purple-400/90 rounded-full drone-light animate-drone-2"></div>
            <div className="absolute top-[22.5%] left-[52.5%] w-[10px] h-[7px] bg-white/95 rounded-full drone-light animate-drone-2"></div>
            
            {/* Top right drone */}
            <div className="absolute top-[21%] left-[70%] w-[18px] h-[14px] bg-red-400/90 rounded-full drone-light animate-drone-3"></div>
            <div className="absolute top-[21.5%] left-[70.5%] w-[12px] h-[9px] bg-white/95 rounded-full drone-light animate-drone-3"></div>
            
            {/* Additional flying drones */}
            <div className="absolute top-[24%] left-[45%] w-[14px] h-[10px] bg-orange-400/85 rounded-full drone-light animate-drone-4"></div>
            <div className="absolute top-[23%] left-[68%] w-[15px] h-[11px] bg-cyan-400/85 rounded-full drone-light animate-drone-5"></div>
          </div>

          {/* Holographic Displays - TOP SCREENS */}
          <div className="absolute inset-0">
            {/* Top left holo display */}
            <div className="absolute top-[8%] left-[10%] w-[80px] h-[60px] bg-cyan-400/60 rounded holo-screen animate-holo-screen-1"></div>
            <div className="absolute top-[9%] left-[11%] w-[70px] h-[50px] bg-white/45 rounded holo-screen animate-holo-screen-2"></div>
            
            {/* Top right holo display */}
            <div className="absolute top-[8%] right-[8%] w-[85px] h-[65px] bg-cyan-400/60 rounded holo-screen animate-holo-screen-3"></div>
            <div className="absolute top-[9%] right-[9%] w-[75px] h-[55px] bg-white/45 rounded holo-screen animate-holo-screen-4"></div>
            
            {/* Center floating displays */}
            <div className="absolute top-[32%] left-[46%] w-[40px] h-[30px] bg-cyan-400/55 rounded holo-screen animate-holo-screen-5"></div>
            <div className="absolute top-[35%] left-[68%] w-[38px] h-[28px] bg-purple-400/55 rounded holo-screen animate-holo-screen-6"></div>
          </div>

          {/* Arena Platform Edge Lights - PULSING */}
          <div className="absolute inset-0">
            {/* Left platform lights */}
            <div className="absolute top-[70%] left-[15%] w-[10px] h-[10px] bg-cyan-400 rounded platform-light animate-platform-light-1"></div>
            <div className="absolute top-[71%] left-[18%] w-[10px] h-[10px] bg-cyan-400 rounded platform-light animate-platform-light-2"></div>
            <div className="absolute top-[72%] left-[21%] w-[10px] h-[10px] bg-cyan-400 rounded platform-light animate-platform-light-3"></div>
            <div className="absolute top-[73%] left-[24%] w-[10px] h-[10px] bg-cyan-400 rounded platform-light animate-platform-light-4"></div>
            
            {/* Right platform lights */}
            <div className="absolute top-[72%] left-[76%] w-[10px] h-[10px] bg-cyan-400 rounded platform-light animate-platform-light-5"></div>
            <div className="absolute top-[73%] left-[79%] w-[10px] h-[10px] bg-cyan-400 rounded platform-light animate-platform-light-6"></div>
            <div className="absolute top-[74%] left-[82%] w-[10px] h-[10px] bg-cyan-400 rounded platform-light animate-platform-light-7"></div>
            <div className="absolute top-[75%] left-[85%] w-[10px] h-[10px] bg-cyan-400 rounded platform-light animate-platform-light-8"></div>
            
            {/* Bottom platform edge glow */}
            <div className="absolute top-[76%] left-[30%] w-[40%] h-[4px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent platform-edge animate-platform-edge"></div>
          </div>

          {/* City Building Window Lights - TWINKLING */}
          <div className="absolute inset-0">
            {/* Left city windows */}
            <div className="absolute top-[50%] left-[8%] w-[6px] h-[6px] bg-cyan-300 rounded window-light animate-window-1"></div>
            <div className="absolute top-[53%] left-[10%] w-[6px] h-[6px] bg-yellow-300 rounded window-light animate-window-2"></div>
            <div className="absolute top-[56%] left-[9%] w-[6px] h-[6px] bg-orange-300 rounded window-light animate-window-3"></div>
            <div className="absolute top-[52%] left-[12%] w-[6px] h-[6px] bg-cyan-300 rounded window-light animate-window-4"></div>
            <div className="absolute top-[55%] left-[14%] w-[6px] h-[6px] bg-yellow-300 rounded window-light animate-window-5"></div>
            
            {/* Right city windows */}
            <div className="absolute top-[51%] right-[8%] w-[6px] h-[6px] bg-cyan-300 rounded window-light animate-window-6"></div>
            <div className="absolute top-[54%] right-[10%] w-[6px] h-[6px] bg-yellow-300 rounded window-light animate-window-7"></div>
            <div className="absolute top-[57%] right-[9%] w-[6px] h-[6px] bg-orange-300 rounded window-light animate-window-8"></div>
            <div className="absolute top-[53%] right-[12%] w-[6px] h-[6px] bg-cyan-300 rounded window-light animate-window-9"></div>
            <div className="absolute top-[56%] right-[14%] w-[6px] h-[6px] bg-yellow-300 rounded window-light animate-window-10"></div>
            
            {/* Background city tower lights */}
            <div className="absolute top-[32%] left-[48%] w-[5px] h-[5px] bg-cyan-400 rounded window-light animate-window-11"></div>
            <div className="absolute top-[28%] left-[50%] w-[5px] h-[5px] bg-purple-400 rounded window-light animate-window-12"></div>
            <div className="absolute top-[35%] left-[52%] w-[5px] h-[5px] bg-cyan-400 rounded window-light animate-window-13"></div>
          </div>

          {/* Stadium Crowd Lights - CHEERING */}
          <div className="absolute inset-0">
            {/* Left stadium */}
            <div className="absolute top-[40%] left-[18%] w-[30px] h-[20px] bg-orange-400/50 rounded-full crowd-glow animate-crowd-glow-1"></div>
            <div className="absolute top-[43%] left-[16%] w-[35px] h-[22px] bg-yellow-400/48 rounded-full crowd-glow animate-crowd-glow-2"></div>
            <div className="absolute top-[46%] left-[17%] w-[32px] h-[21px] bg-red-400/45 rounded-full crowd-glow animate-crowd-glow-3"></div>
            
            {/* Right stadium */}
            <div className="absolute top-[41%] right-[18%] w-[30px] h-[20px] bg-orange-400/50 rounded-full crowd-glow animate-crowd-glow-4"></div>
            <div className="absolute top-[44%] right-[16%] w-[35px] h-[22px] bg-yellow-400/48 rounded-full crowd-glow animate-crowd-glow-5"></div>
            <div className="absolute top-[47%] right-[17%] w-[32px] h-[21px] bg-red-400/45 rounded-full crowd-glow animate-crowd-glow-6"></div>
          </div>

          {/* Energy Beam Traces - LASER FIRE */}
          <div className="absolute inset-0">
            {/* Beam from blue mech */}
            <div className="absolute top-[44%] left-[40%] w-[100px] h-[3px] bg-gradient-to-r from-cyan-400/80 via-white/90 to-yellow-400/70 energy-beam animate-energy-beam-1"></div>
            
            {/* Beam from red mech */}
            <div className="absolute top-[46%] left-[52%] w-[100px] h-[3px] bg-gradient-to-l from-red-400/80 via-orange-400/90 to-yellow-400/70 energy-beam animate-energy-beam-2"></div>
            
            {/* Diagonal beams */}
            <div className="absolute top-[40%] left-[42%] w-[2px] h-[60px] bg-gradient-to-b from-cyan-400/70 to-transparent energy-beam rotate-[20deg] animate-energy-beam-3"></div>
            <div className="absolute top-[42%] left-[58%] w-[2px] h-[60px] bg-gradient-to-b from-red-400/70 to-transparent energy-beam rotate-[-20deg] animate-energy-beam-4"></div>
          </div>

          {/* Atmospheric Battle Particles - FLYING DEBRIS */}
          <div className="absolute inset-0">
            {/* Large debris particles */}
            <div className="absolute top-[35%] left-[25%] w-[8px] h-[8px] bg-gray-400/70 rounded debris-particle animate-debris-1"></div>
            <div className="absolute top-[40%] left-[75%] w-[9px] h-[9px] bg-gray-500/75 rounded debris-particle animate-debris-2"></div>
            <div className="absolute top-[38%] left-[60%] w-[7px] h-[7px] bg-gray-400/68 rounded debris-particle animate-debris-3"></div>
            <div className="absolute top-[42%] left-[32%] w-[8px] h-[8px] bg-gray-500/72 rounded debris-particle animate-debris-4"></div>
            
            {/* Energy particles */}
            <div className="absolute top-[44%] left-[44%] w-[5px] h-[5px] bg-yellow-400/85 rounded-full energy-particle animate-energy-particle-1"></div>
            <div className="absolute top-[48%] left-[56%] w-[5px] h-[5px] bg-orange-400/85 rounded-full energy-particle animate-energy-particle-2"></div>
            <div className="absolute top-[46%] left-[50%] w-[6px] h-[6px] bg-white/90 rounded-full energy-particle animate-energy-particle-3"></div>
            <div className="absolute top-[50%] left-[48%] w-[5px] h-[5px] bg-yellow-400/85 rounded-full energy-particle animate-energy-particle-4"></div>
          </div>

          {/* Mech Core Reactor Glows */}
          <div className="absolute inset-0">
            {/* Blue mech chest reactor */}
            <div className="absolute top-[48%] left-[35%] w-[25px] h-[25px] bg-cyan-400/75 rounded-full reactor-glow animate-reactor-blue"></div>
            
            {/* Red mech chest reactor */}
            <div className="absolute top-[49%] left-[66%] w-[25px] h-[25px] bg-red-500/75 rounded-full reactor-glow animate-reactor-red"></div>
          </div>

          {/* Mech Thruster Effects */}
          <div className="absolute inset-0">
            {/* Blue mech thrusters */}
            <div className="absolute top-[55%] left-[32%] w-[18px] h-[12px] bg-cyan-400/60 rounded-full thruster-glow animate-thruster-blue-1"></div>
            <div className="absolute top-[56%] left-[37%] w-[18px] h-[12px] bg-cyan-400/60 rounded-full thruster-glow animate-thruster-blue-2"></div>
            
            {/* Red mech thrusters */}
            <div className="absolute top-[56%] left-[64%] w-[18px] h-[12px] bg-orange-500/60 rounded-full thruster-glow animate-thruster-red-1"></div>
            <div className="absolute top-[57%] left-[69%] w-[18px] h-[12px] bg-orange-500/60 rounded-full thruster-glow animate-thruster-red-2"></div>
          </div>

          {/* Sky Energy Crackles - ATMOSPHERIC */}
          <div className="absolute inset-0">
            <div className="absolute top-[18%] left-[30%] w-[60px] h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent sky-crackle animate-sky-crackle-1"></div>
            <div className="absolute top-[15%] left-[55%] w-[70px] h-[2px] bg-gradient-to-r from-transparent via-purple-400/45 to-transparent sky-crackle animate-sky-crackle-2"></div>
            <div className="absolute top-[20%] left-[70%] w-[55px] h-[2px] bg-gradient-to-r from-transparent via-cyan-400/48 to-transparent sky-crackle animate-sky-crackle-3"></div>
          </div>
          
          <style jsx>{`
          /* OVER-THE-TOP Effect Styles */
          .energy-clash {
            filter: blur(50px);
          }
          
          .clash-ring {
            filter: blur(4px);
          }
          
          .energy-spark {
            box-shadow: 0 0 50px currentColor, 0 0 100px currentColor, 0 0 150px currentColor;
            filter: blur(1px);
          }
          
          .impact-burst {
            filter: blur(45px);
          }
          
          .shockwave {
            filter: blur(10px);
          }
          
          .mech-eye {
            box-shadow: 0 0 60px currentColor, 0 0 120px currentColor, 0 0 180px currentColor;
            filter: blur(1px);
          }
          
          .weapon-glow {
            filter: blur(30px);
          }
          
          .sword-tip {
            box-shadow: 0 0 70px currentColor, 0 0 140px currentColor, 0 0 210px currentColor;
            filter: blur(2px);
          }
          
          .muzzle-flash {
            box-shadow: 0 0 80px currentColor, 0 0 160px currentColor, 0 0 240px currentColor;
            filter: blur(2px);
          }
          
          .drone-light {
            box-shadow: 0 0 55px currentColor, 0 0 110px currentColor, 0 0 165px currentColor;
            filter: blur(2px);
          }
          
          .holo-screen {
            filter: blur(35px);
          }
          
          .platform-light {
            box-shadow: 0 0 45px currentColor, 0 0 90px currentColor, 0 0 135px currentColor;
            filter: blur(2px);
          }
          
          .platform-edge {
            filter: blur(15px);
          }
          
          .window-light {
            box-shadow: 0 0 40px currentColor, 0 0 80px currentColor, 0 0 120px currentColor;
            filter: blur(1.5px);
          }
          
          .crowd-glow {
            filter: blur(38px);
          }
          
          .energy-beam {
            filter: blur(10px);
            box-shadow: 0 0 35px currentColor;
          }
          
          .debris-particle {
            box-shadow: 0 0 20px currentColor, 0 0 40px currentColor;
            filter: blur(1px);
          }
          
          .energy-particle {
            box-shadow: 0 0 45px currentColor, 0 0 90px currentColor;
            filter: blur(1px);
          }
          
          .reactor-glow {
            filter: blur(40px);
          }
          
          .thruster-glow {
            filter: blur(35px);
          }
          
          .sky-crackle {
            filter: blur(8px);
          }
          
          .animate-effects .energy-clash,
          .animate-effects .clash-ring,
          .animate-effects .energy-spark,
          .animate-effects .impact-burst,
          .animate-effects .shockwave,
          .animate-effects .mech-eye,
          .animate-effects .weapon-glow,
          .animate-effects .sword-tip,
          .animate-effects .muzzle-flash,
          .animate-effects .drone-light,
          .animate-effects .holo-screen,
          .animate-effects .platform-light,
          .animate-effects .platform-edge,
          .animate-effects .window-light,
          .animate-effects .crowd-glow,
          .animate-effects .energy-beam,
          .animate-effects .debris-particle,
          .animate-effects .energy-particle,
          .animate-effects .reactor-glow,
          .animate-effects .thruster-glow,
          .animate-effects .sky-crackle {
            animation-play-state: running;
          }
          
          /* Energy Clash Core Animations - EXPLOSIVE */
          @keyframes clash-core-1 {
            0%, 100% { opacity: 0.75; transform: translate(-50%, -50%) scale(1) rotate(0deg); }
            50% { opacity: 1; transform: translate(-50%, -50%) scale(1.4) rotate(180deg); }
          }
          
          @keyframes clash-core-2 {
            0%, 100% { opacity: 0.85; transform: translate(-50%, -50%) scale(1) rotate(0deg); }
            60% { opacity: 1; transform: translate(-50%, -50%) scale(1.5) rotate(-200deg); }
          }
          
          @keyframes clash-core-3 {
            0%, 100% { opacity: 0.8; transform: translate(-50%, -50%) scale(1) rotate(0deg); }
            55% { opacity: 1; transform: translate(-50%, -50%) scale(1.6) rotate(220deg); }
          }
          
          @keyframes clash-ring-1 {
            0%, 100% { opacity: 0.7; transform: translate(-50%, -50%) scale(1) rotate(0deg); }
            50% { opacity: 0; transform: translate(-50%, -50%) scale(2.5) rotate(360deg); }
          }
          
          @keyframes clash-ring-2 {
            0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1) rotate(0deg); }
            50% { opacity: 0; transform: translate(-50%, -50%) scale(2.3) rotate(-360deg); }
          }
          
          @keyframes clash-ring-3 {
            0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1) rotate(0deg); }
            50% { opacity: 0; transform: translate(-50%, -50%) scale(2.7) rotate(360deg); }
          }
          
          /* Energy Spark Animations - EXPLOSIVE */
          @keyframes spark-1 {
            0% { opacity: 0; transform: translate(0, 0) scale(0.5); }
            20% { opacity: 1; transform: translate(-30px, -40px) scale(2.5); }
            100% { opacity: 0; transform: translate(-70px, -90px) scale(0.3); }
          }
          
          @keyframes spark-2 {
            0% { opacity: 0; transform: translate(0, 0) scale(0.5); }
            20% { opacity: 1; transform: translate(35px, -35px) scale(2.8); }
            100% { opacity: 0; transform: translate(80px, -80px) scale(0.3); }
          }
          
          @keyframes spark-3 {
            0% { opacity: 0; transform: translate(0, 0) scale(0.5); }
            20% { opacity: 1; transform: translate(0px, -50px) scale(2.6); }
            100% { opacity: 0; transform: translate(0px, -110px) scale(0.3); }
          }
          
          @keyframes spark-4 {
            0% { opacity: 0; transform: translate(0, 0) scale(0.5); }
            20% { opacity: 1; transform: translate(40px, 30px) scale(2.5); }
            100% { opacity: 0; transform: translate(90px, 70px) scale(0.3); }
          }
          
          @keyframes spark-5 {
            0% { opacity: 0; transform: translate(0, 0) scale(0.5); }
            20% { opacity: 1; transform: translate(-25px, 45px) scale(2.7); }
            100% { opacity: 0; transform: translate(-60px, 100px) scale(0.3); }
          }
          
          @keyframes spark-6 {
            0% { opacity: 0; transform: translate(0, 0) scale(0.5); }
            20% { opacity: 1; transform: translate(-40px, -30px) scale(2.9); }
            100% { opacity: 0; transform: translate(-90px, -70px) scale(0.3); }
          }
          
          /* Impact Burst Animations - LEFT MECH */
          @keyframes impact-left-1 {
            0%, 100% { opacity: 0.75; transform: translate(-50%, -50%) scale(1); }
            50% { opacity: 1; transform: translate(-50%, -50%) scale(1.5); }
          }
          
          @keyframes impact-left-2 {
            0%, 100% { opacity: 0.85; transform: translate(-50%, -50%) scale(1) rotate(0deg); }
            50% { opacity: 1; transform: translate(-50%, -50%) scale(1.6) rotate(360deg); }
          }
          
          @keyframes impact-left-3 {
            0%, 100% { opacity: 0.8; transform: translate(-50%, -50%) scale(1); }
            50% { opacity: 1; transform: translate(-50%, -50%) scale(1.7); }
          }
          
          @keyframes shockwave-left-1 {
            0%, 100% { opacity: 0.7; transform: scaleX(1); }
            50% { opacity: 0; transform: scaleX(2); }
          }
          
          @keyframes shockwave-left-2 {
            0%, 100% { opacity: 0.6; transform: scaleX(1); }
            50% { opacity: 0; transform: scaleX(2.2); }
          }
          
          /* Impact Burst Animations - RIGHT MECH */
          @keyframes impact-right-1 {
            0%, 100% { opacity: 0.75; transform: translate(-50%, -50%) scale(1); }
            60% { opacity: 1; transform: translate(-50%, -50%) scale(1.5); }
          }
          
          @keyframes impact-right-2 {
            0%, 100% { opacity: 0.85; transform: translate(-50%, -50%) scale(1) rotate(0deg); }
            60% { opacity: 1; transform: translate(-50%, -50%) scale(1.6) rotate(-360deg); }
          }
          
          @keyframes impact-right-3 {
            0%, 100% { opacity: 0.8; transform: translate(-50%, -50%) scale(1); }
            60% { opacity: 1; transform: translate(-50%, -50%) scale(1.7); }
          }
          
          @keyframes shockwave-right-1 {
            0%, 100% { opacity: 0.7; transform: scaleX(1); }
            60% { opacity: 0; transform: scaleX(2); }
          }
          
          @keyframes shockwave-right-2 {
            0%, 100% { opacity: 0.6; transform: scaleX(1); }
            60% { opacity: 0; transform: scaleX(2.2); }
          }
          
          /* Mech Eye Glow Animations */
          @keyframes mech-eye-blue-1 {
            0%, 60%, 100% { opacity: 0; transform: scale(0.5); }
            65%, 80% { opacity: 1; transform: scale(5); }
            72% { opacity: 0.6; transform: scale(4); }
          }
          
          @keyframes mech-eye-blue-2 {
            0%, 62%, 100% { opacity: 0; transform: scale(0.5); }
            67%, 82% { opacity: 1; transform: scale(5.2); }
            74% { opacity: 0.6; transform: scale(4.2); }
          }
          
          @keyframes mech-eye-red-1 {
            0%, 64%, 100% { opacity: 0; transform: scale(0.5); }
            69%, 84% { opacity: 1; transform: scale(5.5); }
            76% { opacity: 0.6; transform: scale(4.5); }
          }
          
          @keyframes mech-eye-red-2 {
            0%, 66%, 100% { opacity: 0; transform: scale(0.5); }
            71%, 86% { opacity: 1; transform: scale(5.3); }
            78% { opacity: 0.6; transform: scale(4.3); }
          }
          
          /* Weapon Glow Animations */
          @keyframes sword-glow-1 {
            0%, 100% { opacity: 0.8; transform: scale(1) rotate(-25deg); }
            50% { opacity: 1; transform: scale(1.15) rotate(-25deg); }
          }
          
          @keyframes sword-glow-2 {
            0%, 100% { opacity: 0.9; transform: scale(1) rotate(-25deg); }
            60% { opacity: 1; transform: scale(1.2) rotate(-25deg); }
          }
          
          @keyframes sword-tip-1 {
            0%, 70%, 100% { opacity: 0; transform: scale(0.5); }
            75%, 90% { opacity: 1; transform: scale(6); }
            82% { opacity: 0.5; transform: scale(5); }
          }
          
          @keyframes gun-glow-1 {
            0%, 100% { opacity: 0.75; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.25); }
          }
          
          @keyframes gun-glow-2 {
            0%, 100% { opacity: 0.8; transform: scale(1) rotate(0deg); }
            50% { opacity: 1; transform: scale(1.3) rotate(5deg); }
          }
          
          @keyframes muzzle-flash {
            0%, 40%, 100% { opacity: 0; transform: scale(0.5); }
            45%, 65% { opacity: 1; transform: scale(7); }
            55% { opacity: 0.5; transform: scale(5.5); }
          }
          
          /* Drone/Vehicle Animations */
          @keyframes drone-1 {
            0% { opacity: 1; transform: translate(0, 0) scale(1); }
            100% { opacity: 0.3; transform: translate(-180px, 50px) scale(0.7); }
          }
          
          @keyframes drone-2 {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.85; transform: scale(1.15); }
          }
          
          @keyframes drone-3 {
            0% { opacity: 0; transform: translate(0, 0) scale(0.6); }
            20% { opacity: 1; transform: translate(-40px, 30px) scale(1); }
            100% { opacity: 0; transform: translate(-200px, 120px) scale(0.7); }
          }
          
          @keyframes drone-4 {
            0% { opacity: 1; transform: translate(0, 0) scale(1); }
            100% { opacity: 0; transform: translate(250px, -40px) scale(0.6); }
          }
          
          @keyframes drone-5 {
            0% { opacity: 0.8; transform: translate(0, 0) scale(1); }
            100% { opacity: 0; transform: translate(180px, 60px) scale(0.7); }
          }
          
          /* Holographic Display Animations */
          @keyframes holo-screen-1 {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 0.9; transform: scale(1.12); }
          }
          
          @keyframes holo-screen-2 {
            0%, 100% { opacity: 0.45; transform: scale(1); }
            50% { opacity: 0.75; transform: scale(1.15); }
          }
          
          @keyframes holo-screen-3 {
            0%, 100% { opacity: 0.6; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.9; transform: scale(1.1) rotate(2deg); }
          }
          
          @keyframes holo-screen-4 {
            0%, 100% { opacity: 0.45; transform: scale(1); }
            50% { opacity: 0.75; transform: scale(1.13); }
          }
          
          @keyframes holo-screen-5 {
            0%, 100% { opacity: 0.55; transform: scale(1); }
            50% { opacity: 0.85; transform: scale(1.18); }
          }
          
          @keyframes holo-screen-6 {
            0%, 100% { opacity: 0.55; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.85; transform: scale(1.16) rotate(-3deg); }
          }
          
          /* Platform Light Animations */
          @keyframes platform-light-1 {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.8); }
          }
          
          @keyframes platform-light-2 {
            0%, 100% { opacity: 1; transform: scale(1); }
            55% { opacity: 0.5; transform: scale(1.9); }
          }
          
          @keyframes platform-light-3 {
            0%, 100% { opacity: 1; transform: scale(1); }
            60% { opacity: 0.5; transform: scale(2); }
          }
          
          @keyframes platform-light-4 {
            0%, 100% { opacity: 1; transform: scale(1); }
            52% { opacity: 0.5; transform: scale(1.85); }
          }
          
          @keyframes platform-light-5 {
            0%, 100% { opacity: 1; transform: scale(1); }
            58% { opacity: 0.5; transform: scale(1.95); }
          }
          
          @keyframes platform-light-6 {
            0%, 100% { opacity: 1; transform: scale(1); }
            54% { opacity: 0.5; transform: scale(1.88); }
          }
          
          @keyframes platform-light-7 {
            0%, 100% { opacity: 1; transform: scale(1); }
            56% { opacity: 0.5; transform: scale(1.92); }
          }
          
          @keyframes platform-light-8 {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.8); }
          }
          
          @keyframes platform-edge {
            0%, 100% { opacity: 0.6; transform: scaleX(1); }
            50% { opacity: 0.9; transform: scaleX(1.08); }
          }
          
          /* Window Light Animations */
          @keyframes window-1 {
            0%, 65%, 100% { opacity: 0; transform: scale(0.5); }
            70%, 85% { opacity: 1; transform: scale(5); }
            77% { opacity: 0.6; transform: scale(4); }
          }
          
          @keyframes window-2 {
            0%, 68%, 100% { opacity: 0; transform: scale(0.5); }
            73%, 88% { opacity: 1; transform: scale(5.2); }
            80% { opacity: 0.6; transform: scale(4.2); }
          }
          
          @keyframes window-3 {
            0%, 70%, 100% { opacity: 0; transform: scale(0.5); }
            75%, 90% { opacity: 1; transform: scale(5.5); }
            82% { opacity: 0.6; transform: scale(4.5); }
          }
          
          @keyframes window-4 {
            0%, 62%, 100% { opacity: 0; transform: scale(0.5); }
            67%, 82% { opacity: 1; transform: scale(4.8); }
            74% { opacity: 0.6; transform: scale(3.8); }
          }
          
          @keyframes window-5 {
            0%, 72%, 100% { opacity: 0; transform: scale(0.5); }
            77%, 92% { opacity: 1; transform: scale(5.3); }
            84% { opacity: 0.6; transform: scale(4.3); }
          }
          
          @keyframes window-6 {
            0%, 64%, 100% { opacity: 0; transform: scale(0.5); }
            69%, 84% { opacity: 1; transform: scale(5.1); }
            76% { opacity: 0.6; transform: scale(4.1); }
          }
          
          @keyframes window-7 {
            0%, 74%, 100% { opacity: 0; transform: scale(0.5); }
            79%, 94% { opacity: 1; transform: scale(5.4); }
            86% { opacity: 0.6; transform: scale(4.4); }
          }
          
          @keyframes window-8 {
            0%, 66%, 100% { opacity: 0; transform: scale(0.5); }
            71%, 86% { opacity: 1; transform: scale(4.9); }
            78% { opacity: 0.6; transform: scale(3.9); }
          }
          
          @keyframes window-9 {
            0%, 76%, 100% { opacity: 0; transform: scale(0.5); }
            81%, 96% { opacity: 1; transform: scale(5.6); }
            88% { opacity: 0.6; transform: scale(4.6); }
          }
          
          @keyframes window-10 {
            0%, 60%, 100% { opacity: 0; transform: scale(0.5); }
            65%, 80% { opacity: 1; transform: scale(4.7); }
            72% { opacity: 0.6; transform: scale(3.7); }
          }
          
          @keyframes window-11 {
            0%, 78%, 100% { opacity: 0; transform: scale(0.5); }
            83%, 98% { opacity: 1; transform: scale(5.2); }
            90% { opacity: 0.6; transform: scale(4.2); }
          }
          
          @keyframes window-12 {
            0%, 63%, 100% { opacity: 0; transform: scale(0.5); }
            68%, 83% { opacity: 1; transform: scale(5); }
            75% { opacity: 0.6; transform: scale(4); }
          }
          
          @keyframes window-13 {
            0%, 69%, 100% { opacity: 0; transform: scale(0.5); }
            74%, 89% { opacity: 1; transform: scale(5.3); }
            81% { opacity: 0.6; transform: scale(4.3); }
          }
          
          /* Crowd Glow Animations */
          @keyframes crowd-glow-1 {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.3); }
          }
          
          @keyframes crowd-glow-2 {
            0%, 100% { opacity: 0.48; transform: scale(1) rotate(0deg); }
            55% { opacity: 0.78; transform: scale(1.32) rotate(5deg); }
          }
          
          @keyframes crowd-glow-3 {
            0%, 100% { opacity: 0.45; transform: scale(1); }
            60% { opacity: 0.75; transform: scale(1.28); }
          }
          
          @keyframes crowd-glow-4 {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            52% { opacity: 0.8; transform: scale(1.35); }
          }
          
          @keyframes crowd-glow-5 {
            0%, 100% { opacity: 0.48; transform: scale(1) rotate(0deg); }
            58% { opacity: 0.78; transform: scale(1.3) rotate(-5deg); }
          }
          
          @keyframes crowd-glow-6 {
            0%, 100% { opacity: 0.45; transform: scale(1); }
            54% { opacity: 0.75; transform: scale(1.33); }
          }
          
          /* Energy Beam Animations */
          @keyframes energy-beam-1 {
            0%, 100% { opacity: 0.8; transform: scaleX(1); }
            50% { opacity: 1; transform: scaleX(1.15); }
          }
          
          @keyframes energy-beam-2 {
            0%, 100% { opacity: 0.8; transform: scaleX(1); }
            60% { opacity: 1; transform: scaleX(1.18); }
          }
          
          @keyframes energy-beam-3 {
            0%, 100% { opacity: 0.7; transform: rotate(20deg) scaleY(1); }
            50% { opacity: 1; transform: rotate(20deg) scaleY(1.2); }
          }
          
          @keyframes energy-beam-4 {
            0%, 100% { opacity: 0.7; transform: rotate(-20deg) scaleY(1); }
            50% { opacity: 1; transform: rotate(-20deg) scaleY(1.2); }
          }
          
          /* Debris Particle Animations */
          @keyframes debris-1 {
            0% { opacity: 0; transform: translate(0, 0) rotate(0deg) scale(1); }
            30% { opacity: 0.7; transform: translate(-30px, 40px) rotate(180deg) scale(1.2); }
            100% { opacity: 0; transform: translate(-80px, 120px) rotate(360deg) scale(0.6); }
          }
          
          @keyframes debris-2 {
            0% { opacity: 0; transform: translate(0, 0) rotate(0deg) scale(1); }
            30% { opacity: 0.75; transform: translate(35px, 45px) rotate(-180deg) scale(1.3); }
            100% { opacity: 0; transform: translate(90px, 130px) rotate(-360deg) scale(0.5); }
          }
          
          @keyframes debris-3 {
            0% { opacity: 0; transform: translate(0, 0) rotate(0deg) scale(1); }
            30% { opacity: 0.68; transform: translate(-25px, 35px) rotate(200deg) scale(1.15); }
            100% { opacity: 0; transform: translate(-70px, 100px) rotate(400deg) scale(0.7); }
          }
          
          @keyframes debris-4 {
            0% { opacity: 0; transform: translate(0, 0) rotate(0deg) scale(1); }
            30% { opacity: 0.72; transform: translate(28px, 38px) rotate(-200deg) scale(1.25); }
            100% { opacity: 0; transform: translate(75px, 110px) rotate(-400deg) scale(0.6); }
          }
          
          /* Energy Particle Animations */
          @keyframes energy-particle-1 {
            0% { opacity: 0; transform: translate(0, 0) scale(0.5); }
            30% { opacity: 0.85; transform: translate(-20px, -30px) scale(2); }
            100% { opacity: 0; transform: translate(-50px, -70px) scale(0.3); }
          }
          
          @keyframes energy-particle-2 {
            0% { opacity: 0; transform: translate(0, 0) scale(0.5); }
            30% { opacity: 0.85; transform: translate(25px, -28px) scale(2.2); }
            100% { opacity: 0; transform: translate(60px, -65px) scale(0.3); }
          }
          
          @keyframes energy-particle-3 {
            0% { opacity: 0; transform: translate(0, 0) scale(0.5); }
            30% { opacity: 0.9; transform: translate(0px, -35px) scale(2.5); }
            100% { opacity: 0; transform: translate(0px, -80px) scale(0.3); }
          }
          
          @keyframes energy-particle-4 {
            0% { opacity: 0; transform: translate(0, 0) scale(0.5); }
            30% { opacity: 0.85; transform: translate(-18px, 25px) scale(2.1); }
            100% { opacity: 0; transform: translate(-45px, 60px) scale(0.3); }
          }
          
          /* Reactor Glow Animations */
          @keyframes reactor-blue {
            0%, 100% { opacity: 0.75; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.5); }
          }
          
          @keyframes reactor-red {
            0%, 100% { opacity: 0.75; transform: scale(1); }
            60% { opacity: 1; transform: scale(1.55); }
          }
          
          /* Thruster Glow Animations */
          @keyframes thruster-blue-1 {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 0.9; transform: scale(1.4); }
          }
          
          @keyframes thruster-blue-2 {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            55% { opacity: 0.9; transform: scale(1.45); }
          }
          
          @keyframes thruster-red-1 {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            60% { opacity: 0.9; transform: scale(1.42); }
          }
          
          @keyframes thruster-red-2 {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            58% { opacity: 0.9; transform: scale(1.48); }
          }
          
          /* Sky Crackle Animations */
          @keyframes sky-crackle-1 {
            0%, 80%, 100% { opacity: 0; transform: scaleX(1); }
            85%, 95% { opacity: 0.5; transform: scaleX(1.3); }
            90% { opacity: 0.3; transform: scaleX(1.15); }
          }
          
          @keyframes sky-crackle-2 {
            0%, 75%, 100% { opacity: 0; transform: scaleX(1); }
            80%, 90% { opacity: 0.45; transform: scaleX(1.25); }
            85% { opacity: 0.25; transform: scaleX(1.12); }
          }
          
          @keyframes sky-crackle-3 {
            0%, 82%, 100% { opacity: 0; transform: scaleX(1); }
            87%, 97% { opacity: 0.48; transform: scaleX(1.28); }
            92% { opacity: 0.28; transform: scaleX(1.14); }
          }
          
          /* Animation Class Assignments */
          .animate-clash-core-1 { animation: clash-core-1 3s ease-in-out infinite; }
          .animate-clash-core-2 { animation: clash-core-2 3.5s ease-in-out infinite 0.5s; }
          .animate-clash-core-3 { animation: clash-core-3 3.2s ease-in-out infinite 1s; }
          
          .animate-clash-ring-1 { animation: clash-ring-1 2s ease-out infinite; }
          .animate-clash-ring-2 { animation: clash-ring-2 2.5s ease-out infinite 0.3s; }
          .animate-clash-ring-3 { animation: clash-ring-3 3s ease-out infinite 0.6s; }
          
          .animate-spark-1 { animation: spark-1 1.5s ease-out infinite; }
          .animate-spark-2 { animation: spark-2 1.6s ease-out infinite 0.3s; }
          .animate-spark-3 { animation: spark-3 1.7s ease-out infinite 0.6s; }
          .animate-spark-4 { animation: spark-4 1.8s ease-out infinite 0.9s; }
          .animate-spark-5 { animation: spark-5 1.55s ease-out infinite 1.2s; }
          .animate-spark-6 { animation: spark-6 1.65s ease-out infinite 0.2s; }
          
          .animate-impact-left-1 { animation: impact-left-1 4s ease-in-out infinite; }
          .animate-impact-left-2 { animation: impact-left-2 4.5s ease-in-out infinite 0.5s; }
          .animate-impact-left-3 { animation: impact-left-3 4.2s ease-in-out infinite 1s; }
          
          .animate-shockwave-left-1 { animation: shockwave-left-1 3s ease-out infinite; }
          .animate-shockwave-left-2 { animation: shockwave-left-2 3.5s ease-out infinite 0.5s; }
          
          .animate-impact-right-1 { animation: impact-right-1 4.2s ease-in-out infinite 0.3s; }
          .animate-impact-right-2 { animation: impact-right-2 4.7s ease-in-out infinite 0.8s; }
          .animate-impact-right-3 { animation: impact-right-3 4.4s ease-in-out infinite 1.3s; }
          
          .animate-shockwave-right-1 { animation: shockwave-right-1 3.2s ease-out infinite 0.3s; }
          .animate-shockwave-right-2 { animation: shockwave-right-2 3.7s ease-out infinite 0.8s; }
          
          .animate-mech-eye-blue-1 { animation: mech-eye-blue-1 6s linear infinite; }
          .animate-mech-eye-blue-2 { animation: mech-eye-blue-2 6.2s linear infinite 0.5s; }
          
          .animate-mech-eye-red-1 { animation: mech-eye-red-1 6.5s linear infinite 1s; }
          .animate-mech-eye-red-2 { animation: mech-eye-red-2 6.3s linear infinite 1.5s; }
          
          .animate-sword-glow-1 { animation: sword-glow-1 3s ease-in-out infinite; }
          .animate-sword-glow-2 { animation: sword-glow-2 3.5s ease-in-out infinite 0.5s; }
          .animate-sword-tip-1 { animation: sword-tip-1 5s linear infinite; }
          
          .animate-gun-glow-1 { animation: gun-glow-1 3.5s ease-in-out infinite; }
          .animate-gun-glow-2 { animation: gun-glow-2 4s ease-in-out infinite 0.5s; }
          .animate-muzzle-flash { animation: muzzle-flash 4s linear infinite; }
          
          .animate-drone-1 { animation: drone-1 12s linear infinite; }
          .animate-drone-2 { animation: drone-2 4s ease-in-out infinite; }
          .animate-drone-3 { animation: drone-3 14s linear infinite 3s; }
          .animate-drone-4 { animation: drone-4 16s linear infinite 5s; }
          .animate-drone-5 { animation: drone-5 15s linear infinite 2s; }
          
          .animate-holo-screen-1 { animation: holo-screen-1 7s ease-in-out infinite; }
          .animate-holo-screen-2 { animation: holo-screen-2 7s ease-in-out infinite 0.5s; }
          .animate-holo-screen-3 { animation: holo-screen-3 7.5s ease-in-out infinite 1.5s; }
          .animate-holo-screen-4 { animation: holo-screen-4 7.5s ease-in-out infinite 2s; }
          .animate-holo-screen-5 { animation: holo-screen-5 6.5s ease-in-out infinite 1s; }
          .animate-holo-screen-6 { animation: holo-screen-6 6.8s ease-in-out infinite 2s; }
          
          .animate-platform-light-1 { animation: platform-light-1 3s ease-in-out infinite; }
          .animate-platform-light-2 { animation: platform-light-2 3.2s ease-in-out infinite 0.3s; }
          .animate-platform-light-3 { animation: platform-light-3 3.5s ease-in-out infinite 0.6s; }
          .animate-platform-light-4 { animation: platform-light-4 3.3s ease-in-out infinite 0.9s; }
          .animate-platform-light-5 { animation: platform-light-5 3.6s ease-in-out infinite 1.2s; }
          .animate-platform-light-6 { animation: platform-light-6 3.4s ease-in-out infinite 1.5s; }
          .animate-platform-light-7 { animation: platform-light-7 3.7s ease-in-out infinite 1.8s; }
          .animate-platform-light-8 { animation: platform-light-8 3.8s ease-in-out infinite 2.1s; }
          
          .animate-platform-edge { animation: platform-edge 8s ease-in-out infinite; }
          
          .animate-window-1 { animation: window-1 7s linear infinite; }
          .animate-window-2 { animation: window-2 7.5s linear infinite 1s; }
          .animate-window-3 { animation: window-3 7.2s linear infinite 2s; }
          .animate-window-4 { animation: window-4 7.8s linear infinite 3s; }
          .animate-window-5 { animation: window-5 7.3s linear infinite 4s; }
          .animate-window-6 { animation: window-6 7.6s linear infinite 0.5s; }
          .animate-window-7 { animation: window-7 7.4s linear infinite 1.5s; }
          .animate-window-8 { animation: window-8 7.7s linear infinite 2.5s; }
          .animate-window-9 { animation: window-9 7.1s linear infinite 3.5s; }
          .animate-window-10 { animation: window-10 7.9s linear infinite 4.5s; }
          .animate-window-11 { animation: window-11 8s linear infinite 5s; }
          .animate-window-12 { animation: window-12 8.2s linear infinite 2s; }
          .animate-window-13 { animation: window-13 8.1s linear infinite 4s; }
          
          .animate-crowd-glow-1 { animation: crowd-glow-1 5s ease-in-out infinite; }
          .animate-crowd-glow-2 { animation: crowd-glow-2 5.5s ease-in-out infinite 1s; }
          .animate-crowd-glow-3 { animation: crowd-glow-3 5.2s ease-in-out infinite 2s; }
          .animate-crowd-glow-4 { animation: crowd-glow-4 5.3s ease-in-out infinite 0.5s; }
          .animate-crowd-glow-5 { animation: crowd-glow-5 5.7s ease-in-out infinite 1.5s; }
          .animate-crowd-glow-6 { animation: crowd-glow-6 5.4s ease-in-out infinite 2.5s; }
          
          .animate-energy-beam-1 { animation: energy-beam-1 3s ease-in-out infinite; }
          .animate-energy-beam-2 { animation: energy-beam-2 3.5s ease-in-out infinite 0.5s; }
          .animate-energy-beam-3 { animation: energy-beam-3 4s ease-in-out infinite 1s; }
          .animate-energy-beam-4 { animation: energy-beam-4 4.5s ease-in-out infinite 1.5s; }
          
          .animate-debris-1 { animation: debris-1 6s ease-out infinite; }
          .animate-debris-2 { animation: debris-2 6.5s ease-out infinite 1.5s; }
          .animate-debris-3 { animation: debris-3 6.2s ease-out infinite 3s; }
          .animate-debris-4 { animation: debris-4 6.8s ease-out infinite 4.5s; }
          
          .animate-energy-particle-1 { animation: energy-particle-1 3s ease-out infinite; }
          .animate-energy-particle-2 { animation: energy-particle-2 3.5s ease-out infinite 0.8s; }
          .animate-energy-particle-3 { animation: energy-particle-3 3.2s ease-out infinite 1.6s; }
          .animate-energy-particle-4 { animation: energy-particle-4 3.8s ease-out infinite 2.4s; }
          
          .animate-reactor-blue { animation: reactor-blue 5s ease-in-out infinite; }
          .animate-reactor-red { animation: reactor-red 5.5s ease-in-out infinite 0.5s; }
          
          .animate-thruster-blue-1 { animation: thruster-blue-1 4s ease-in-out infinite; }
          .animate-thruster-blue-2 { animation: thruster-blue-2 4.5s ease-in-out infinite 0.5s; }
          .animate-thruster-red-1 { animation: thruster-red-1 4.2s ease-in-out infinite 0.3s; }
          .animate-thruster-red-2 { animation: thruster-red-2 4.7s ease-in-out infinite 0.8s; }
          
          .animate-sky-crackle-1 { animation: sky-crackle-1 8s linear infinite; }
          .animate-sky-crackle-2 { animation: sky-crackle-2 9s linear infinite 3s; }
          .animate-sky-crackle-3 { animation: sky-crackle-3 8.5s linear infinite 6s; }
          `}</style>
        </div>
        )}
      </div>
    </Card>
  );
}

