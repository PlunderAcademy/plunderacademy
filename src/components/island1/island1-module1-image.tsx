"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function JungleModule1Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        {/* Base image */}
        <Image
          src="/islands/island1/island1-module1-image.webp"
          alt="Blockchain Fundamentals Adventure Scene"
          fill
          className="object-cover"
        />
        
        {/* Animated overlay effects */}
        <div className="absolute inset-0 animate-effects">
            {/* BOLD Sun Ray over Temple */}
            <div className="absolute inset-0">
              {/* Single dramatic sun beam over the temple */}
              <div className="absolute top-[0%] left-[65%] w-[6px] h-[72%] bg-gradient-to-b from-white/40 via-yellow-200/28 to-transparent thin-ray animate-thin-ray-2"></div>
            </div>

            {/* Volcano Glow Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-[30%] left-[55%] -translate-x-1/2 w-[100px] h-[50px] bg-red-500/40 rounded-full volcano-glow animate-volcano-pulse-delay"></div>
              <div className="absolute top-[35%] left-[55%] -translate-x-1/2 w-[60px] h-[30px] bg-yellow-300/40 rounded-full volcano-glow animate-volcano-flicker"></div>
            </div>

            {/* BOLD Volcanic Smoke Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-[8%] left-[48%] w-[30px] h-[30px] bg-gray-400/45 rounded-full smoke animate-smoke-rise-1"></div>
              <div className="absolute top-[12%] left-[52%] w-[25px] h-[25px] bg-gray-500/40 rounded-full smoke animate-smoke-rise-2"></div>
              <div className="absolute top-[10%] left-[45%] w-[35px] h-[35px] bg-gray-300/38 rounded-full smoke animate-smoke-rise-3"></div>
              <div className="absolute top-[14%] left-[50%] w-[22px] h-[22px] bg-gray-400/42 rounded-full smoke animate-smoke-rise-4"></div>
              <div className="absolute top-[6%] left-[54%] w-[28px] h-[28px] bg-gray-500/36 rounded-full smoke animate-smoke-rise-5"></div>
              
              {/* Heat smoke wisps */}
              <div className="absolute top-[18%] left-[46%] w-[40px] h-[18px] bg-gray-300/25 rounded-full smoke-wisp animate-smoke-wisp-1"></div>
              <div className="absolute top-[20%] left-[56%] w-[35px] h-[15px] bg-gray-400/22 rounded-full smoke-wisp animate-smoke-wisp-2"></div>
          </div>
          
            {/* BOLD Floating Embers & Heat Particles */}
            <div className="absolute inset-0">
              {/* Large dramatic embers */}
              <div className="absolute top-[35%] left-[30%] w-[5px] h-[5px] bg-orange-400/95 rounded-full ember-bold animate-ember-float-bold-1"></div>
              <div className="absolute top-[45%] left-[68%] w-[6px] h-[6px] bg-red-400/90 rounded-full ember-bold animate-ember-float-bold-2"></div>
              <div className="absolute top-[32%] left-[58%] w-[5px] h-[5px] bg-yellow-400/95 rounded-full ember-bold animate-ember-float-bold-3"></div>
              <div className="absolute top-[55%] left-[42%] w-[4px] h-[4px] bg-orange-500/90 rounded-full ember-bold animate-ember-float-bold-4"></div>
              <div className="absolute top-[40%] right-[22%] w-[5px] h-[5px] bg-red-300/95 rounded-full ember-bold animate-ember-float-bold-5"></div>
              
              {/* Medium embers */}
              <div className="absolute top-[38%] left-[25%] w-[3px] h-[3px] bg-orange-400/80 rounded-full ember animate-ember-float-1"></div>
              <div className="absolute top-[50%] left-[72%] w-[3px] h-[3px] bg-red-400/75 rounded-full ember animate-ember-float-2"></div>
              <div className="absolute top-[42%] left-[65%] w-[3px] h-[3px] bg-yellow-400/80 rounded-full ember animate-ember-float-3"></div>
              <div className="absolute top-[60%] left-[38%] w-[2px] h-[2px] bg-orange-500/75 rounded-full ember animate-ember-float-4"></div>
              <div className="absolute top-[48%] right-[18%] w-[3px] h-[3px] bg-red-300/80 rounded-full ember animate-ember-float-5"></div>
              
              {/* Small heat particles */}
              <div className="absolute top-[33%] left-[35%] w-[2px] h-[2px] bg-orange-300/70 rounded-full heat-particle animate-heat-shimmer-1"></div>
              <div className="absolute top-[52%] left-[75%] w-[2px] h-[2px] bg-yellow-300/65 rounded-full heat-particle animate-heat-shimmer-2"></div>
              <div className="absolute top-[44%] left-[50%] w-[2px] h-[2px] bg-red-300/70 rounded-full heat-particle animate-heat-shimmer-3"></div>
        </div>

            {/* BOLD Temple Coin/Gold Effects */}
            <div className="absolute inset-0">
              {/* Large floating gold coins */}
              <div className="absolute top-[42%] right-[32%] w-[8px] h-[8px] bg-yellow-400/95 rounded-full coin-glow-bold animate-coin-float-bold-1"></div>
              <div className="absolute top-[48%] right-[28%] w-[7px] h-[7px] bg-amber-400/90 rounded-full coin-glow-bold animate-coin-float-bold-2"></div>
              <div className="absolute top-[52%] right-[38%] w-[9px] h-[9px] bg-yellow-300/95 rounded-full coin-glow-bold animate-coin-float-bold-3"></div>
              <div className="absolute top-[38%] right-[24%] w-[6px] h-[6px] bg-yellow-500/90 rounded-full coin-glow-bold animate-coin-float-bold-4"></div>
              
              {/* Medium coins */}
              <div className="absolute top-[45%] right-[35%] w-[5px] h-[5px] bg-yellow-300/85 rounded-full coin-glow animate-coin-float-1"></div>
              <div className="absolute top-[50%] right-[30%] w-[4px] h-[4px] bg-amber-400/80 rounded-full coin-glow animate-coin-float-2"></div>
              <div className="absolute top-[55%] right-[40%] w-[5px] h-[5px] bg-yellow-400/85 rounded-full coin-glow animate-coin-float-3"></div>
              <div className="absolute top-[40%] right-[25%] w-[4px] h-[4px] bg-yellow-200/80 rounded-full coin-glow animate-coin-float-4"></div>
              <div className="absolute top-[60%] right-[32%] w-[4px] h-[4px] bg-yellow-300/85 rounded-full coin-glow animate-coin-float-5"></div>
              <div className="absolute top-[48%] right-[45%] w-[5px] h-[5px] bg-amber-300/85 rounded-full coin-glow animate-coin-float-6"></div>
              <div className="absolute top-[42%] right-[38%] w-[4px] h-[4px] bg-yellow-400/80 rounded-full coin-glow animate-coin-float-7"></div>
              <div className="absolute top-[65%] right-[35%] w-[4px] h-[4px] bg-yellow-300/85 rounded-full coin-glow animate-coin-float-8"></div>
              <div className="absolute top-[38%] right-[42%] w-[5px] h-[5px] bg-amber-400/85 rounded-full coin-glow animate-coin-float-9"></div>
              
              {/* Small coin sparkles */}
              <div className="absolute top-[44%] right-[26%] w-[3px] h-[3px] bg-yellow-400/75 rounded-full coin-sparkle animate-coin-sparkle-1"></div>
              <div className="absolute top-[58%] right-[36%] w-[2px] h-[2px] bg-amber-300/70 rounded-full coin-sparkle animate-coin-sparkle-2"></div>
              <div className="absolute top-[46%] right-[41%] w-[3px] h-[3px] bg-yellow-500/75 rounded-full coin-sparkle animate-coin-sparkle-3"></div>
            </div>

            {/* Tropical Sunlight Particles */}
            <div className="absolute inset-0">
              {/* Floating dust motes in sunlight */}
              <div className="absolute top-[22%] left-[18%] w-[3px] h-[3px] bg-yellow-200/70 rounded-full light-particle animate-light-drift-1"></div>
              <div className="absolute top-[28%] left-[42%] w-[2px] h-[2px] bg-yellow-100/60 rounded-full light-particle animate-light-drift-2"></div>
              <div className="absolute top-[35%] left-[65%] w-[3px] h-[3px] bg-white/50 rounded-full light-particle animate-light-drift-3"></div>
              <div className="absolute top-[25%] right-[28%] w-[2px] h-[2px] bg-yellow-200/55 rounded-full light-particle animate-light-drift-4"></div>
              <div className="absolute top-[32%] left-[52%] w-[3px] h-[3px] bg-yellow-100/65 rounded-full light-particle animate-light-drift-5"></div>
              <div className="absolute top-[38%] left-[78%] w-[2px] h-[2px] bg-white/45 rounded-full light-particle animate-light-drift-6"></div>
            </div>
          </div>
          
          <style jsx>{`
            /* Sun ray over temple */
            .thin-ray {
              filter: blur(3px);
              box-shadow: 0 0 20px currentColor;
              opacity: 0;
            }
            
            /* Volcano effects */
            .volcano-glow {
              filter: blur(8px);
              box-shadow: 0 0 30px currentColor, 0 0 60px currentColor;
            }
            
            /* Smoke effects - BOLD */
            .smoke {
              filter: blur(18px);
              opacity: 0;
            }
            
            .smoke-wisp {
              filter: blur(20px);
              opacity: 0;
            }
            
            /* Ember effects - BOLD */
            .ember-bold {
              box-shadow: 0 0 40px currentColor, 0 0 80px currentColor, 0 0 120px currentColor, 0 0 160px currentColor;
              filter: blur(0.5px);
            }
            
            .ember {
              box-shadow: 0 0 25px currentColor, 0 0 50px currentColor, 0 0 75px currentColor;
              filter: blur(0.5px);
            }
            
            .heat-particle {
              box-shadow: 0 0 15px currentColor, 0 0 30px currentColor;
              filter: blur(0.5px);
            }
            
            /* Coin/gold effects - BOLD */
            .coin-glow-bold {
              box-shadow: 0 0 50px currentColor, 0 0 100px currentColor, 0 0 150px currentColor, 0 0 200px currentColor;
              filter: blur(0.5px);
            }
            
            .coin-glow {
              box-shadow: 0 0 35px currentColor, 0 0 70px currentColor, 0 0 105px currentColor;
              filter: blur(0.5px);
            }
            
            .coin-sparkle {
              box-shadow: 0 0 25px currentColor, 0 0 50px currentColor;
              filter: blur(0.3px);
            }
            
            /* Light particles */
            .light-particle {
              box-shadow: 0 0 20px currentColor, 0 0 40px currentColor;
              filter: blur(0.5px);
            }
            
            .animate-effects .thin-ray {
              animation-play-state: running;
            }
            
            .animate-effects .volcano-glow {
              animation-play-state: running;
            }
            
            .animate-effects .smoke {
              animation-play-state: running;
            }
            
            .animate-effects .smoke-wisp {
              animation-play-state: running;
            }
            
            .animate-effects .ember-bold {
              animation-play-state: running;
            }
            
            .animate-effects .ember {
              animation-play-state: running;
            }
            
            .animate-effects .heat-particle {
              animation-play-state: running;
            }
            
            .animate-effects .coin-glow-bold {
              animation-play-state: running;
            }
            
            .animate-effects .coin-glow {
              animation-play-state: running;
            }
            
            .animate-effects .coin-sparkle {
              animation-play-state: running;
            }
            
            .animate-effects .light-particle {
              animation-play-state: running;
            }
            
            /* Sun Ray Animation - Single beam over temple */
            @keyframes thin-ray-2 {
              0%, 100% { opacity: 0.38; transform: scaleY(1) skewX(-1deg); }
              30% { opacity: 0.70; transform: scaleY(1.25) skewX(-2deg); }
              60% { opacity: 0.30; transform: scaleY(0.90) skewX(0deg); }
              90% { opacity: 0.75; transform: scaleY(1.18) skewX(-1.5deg); }
            }
            
            /* Volcano Animations */
            @keyframes volcano-pulse-delay {
              0%, 100% { transform: translate(-50%, 0) scale(1); opacity: 0.6; }
              50% { transform: translate(-50%, 0) scale(1.1); opacity: 0.9; }
            }
            
            @keyframes volcano-flicker {
              0%, 100% { opacity: 0.4; transform: translate(-50%, 0) scale(1); }
              25% { opacity: 0.8; transform: translate(-50%, 0) scale(1.3); }
              50% { opacity: 0.2; transform: translate(-50%, 0) scale(0.8); }
              75% { opacity: 0.9; transform: translate(-50%, 0) scale(1.1); }
            }
            
            /* Smoke Animations - BOLD */
            @keyframes smoke-rise-1 {
              0% { opacity: 0; transform: translateY(0) scale(0.6); }
              50% { opacity: 0.70; transform: translateY(-80px) scale(1.8); }
              100% { opacity: 0; transform: translateY(-160px) scale(3.2); }
            }
            
            @keyframes smoke-rise-2 {
              0% { opacity: 0; transform: translateY(0) scale(0.5) translateX(0); }
              50% { opacity: 0.65; transform: translateY(-70px) scale(1.6) translateX(20px); }
              100% { opacity: 0; transform: translateY(-140px) scale(2.8) translateX(35px); }
            }
            
            @keyframes smoke-rise-3 {
              0% { opacity: 0; transform: translateY(0) scale(0.7) translateX(0); }
              50% { opacity: 0.75; transform: translateY(-85px) scale(2.0) translateX(-18px); }
              100% { opacity: 0; transform: translateY(-170px) scale(3.5) translateX(-30px); }
            }
            
            @keyframes smoke-rise-4 {
              0% { opacity: 0; transform: translateY(0) scale(0.55) translateX(0); }
              50% { opacity: 0.68; transform: translateY(-75px) scale(1.7) translateX(15px); }
              100% { opacity: 0; transform: translateY(-150px) scale(3.0) translateX(25px); }
            }
            
            @keyframes smoke-rise-5 {
              0% { opacity: 0; transform: translateY(0) scale(0.6) translateX(0); }
              50% { opacity: 0.62; transform: translateY(-90px) scale(1.9) translateX(-22px); }
              100% { opacity: 0; transform: translateY(-180px) scale(3.4) translateX(-38px); }
            }
            
            @keyframes smoke-wisp-1 {
              0% { opacity: 0; transform: translateX(0) translateY(0) scaleX(1); }
              50% { opacity: 0.35; transform: translateX(40px) translateY(-25px) scaleX(1.6); }
              100% { opacity: 0; transform: translateX(80px) translateY(-50px) scaleX(2.2); }
            }
            
            @keyframes smoke-wisp-2 {
              0% { opacity: 0; transform: translateX(0) translateY(0) scaleX(1); }
              50% { opacity: 0.30; transform: translateX(-35px) translateY(-30px) scaleX(1.5); }
              100% { opacity: 0; transform: translateX(-70px) translateY(-60px) scaleX(2.0); }
            }
            
            /* Ember Animations - BOLD */
            @keyframes ember-float-bold-1 {
              0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); opacity: 0.95; }
              33% { transform: translateY(-40px) translateX(28px) rotate(180deg) scale(1.5); opacity: 0.50; }
              66% { transform: translateY(-22px) translateX(-15px) rotate(360deg) scale(0.8); opacity: 1; }
            }
            
            @keyframes ember-float-bold-2 {
              0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); opacity: 0.90; }
              50% { transform: translateY(-50px) translateX(-32px) rotate(240deg) scale(1.4); opacity: 0.45; }
            }
            
            @keyframes ember-float-bold-3 {
              0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); opacity: 0.95; }
              25% { transform: translateY(-35px) translateX(25px) rotate(120deg) scale(1.6); opacity: 0.40; }
              75% { transform: translateY(-45px) translateX(-18px) rotate(300deg) scale(0.9); opacity: 0.85; }
            }
            
            @keyframes ember-float-bold-4 {
              0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.90; }
              40% { transform: translateY(-28px) translateX(35px) scale(1.7); opacity: 0.35; }
              80% { transform: translateY(-60px) translateX(-12px) scale(1.0); opacity: 1; }
            }
            
            @keyframes ember-float-bold-5 {
              0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); opacity: 0.95; }
              60% { transform: translateY(-55px) translateX(42px) rotate(480deg) scale(1.3); opacity: 0.48; }
            }
            
            @keyframes ember-float-1 {
              0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.80; }
              33% { transform: translateY(-25px) translateX(18px); opacity: 0.50; }
              66% { transform: translateY(-15px) translateX(-12px); opacity: 0.95; }
            }
            
            @keyframes ember-float-2 {
              0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.75; }
              50% { transform: translateY(-35px) translateX(-22px) rotate(200deg); opacity: 0.95; }
            }
            
            @keyframes ember-float-3 {
              0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.80; }
              25% { transform: translateY(-22px) translateX(15px); opacity: 0.45; }
              75% { transform: translateY(-32px) translateX(-16px); opacity: 0.85; }
            }
            
            @keyframes ember-float-4 {
              0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.75; }
              40% { transform: translateY(-20px) translateX(24px) scale(1.4); opacity: 0.40; }
              80% { transform: translateY(-38px) translateX(-10px) scale(0.9); opacity: 0.90; }
            }
            
            @keyframes ember-float-5 {
              0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.80; }
              60% { transform: translateY(-40px) translateX(30px) rotate(400deg); opacity: 0.50; }
            }
            
            @keyframes heat-shimmer-1 {
              0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.70; }
              33% { transform: translateY(-15px) translateX(10px) scale(1.5); opacity: 0.95; }
              66% { transform: translateY(-28px) translateX(-8px) scale(0.7); opacity: 0.40; }
            }
            
            @keyframes heat-shimmer-2 {
              0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.65; }
              50% { transform: translateY(-22px) translateX(-15px) scale(1.6); opacity: 0.90; }
            }
            
            @keyframes heat-shimmer-3 {
              0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); opacity: 0.70; }
              40% { transform: translateY(-18px) translateX(20px) rotate(180deg) scale(1.7); opacity: 0.95; }
              80% { transform: translateY(-32px) translateX(-12px) rotate(360deg) scale(0.6); opacity: 0.35; }
            }
            
            /* Coin Animations - BOLD */
            @keyframes coin-float-bold-1 {
              0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); opacity: 0.95; }
              33% { transform: translateY(-30px) translateX(22px) rotate(180deg) scale(1.6); opacity: 0.55; }
              66% { transform: translateY(-18px) translateX(-14px) rotate(360deg) scale(0.9); opacity: 1; }
            }
            
            @keyframes coin-float-bold-2 {
              0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); opacity: 0.90; }
              50% { transform: translateY(-42px) translateX(-28px) rotate(240deg) scale(1.5); opacity: 0.45; }
            }
            
            @keyframes coin-float-bold-3 {
              0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); opacity: 0.95; }
              25% { transform: translateY(-26px) translateX(20px) rotate(120deg) scale(1.7); opacity: 0.60; }
              75% { transform: translateY(-38px) translateX(-16px) rotate(300deg) scale(1.0); opacity: 0.85; }
            }
            
            @keyframes coin-float-bold-4 {
              0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); opacity: 0.90; }
              40% { transform: translateY(-35px) translateX(30px) rotate(200deg) scale(1.4); opacity: 0.50; }
              80% { transform: translateY(-22px) translateX(-12px) rotate(400deg) scale(1.1); opacity: 1; }
            }
            
            @keyframes coin-float-1 {
              0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.85; }
              33% { transform: translateY(-20px) translateX(15px) scale(1.3); opacity: 0.65; }
              66% { transform: translateY(-12px) translateX(-10px) scale(0.9); opacity: 0.95; }
            }
            
            @keyframes coin-float-2 {
              0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.80; }
              50% { transform: translateY(-28px) translateX(18px) rotate(200deg); opacity: 0.95; }
            }
            
            @keyframes coin-float-3 {
              0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.85; }
              25% { transform: translateY(-16px) translateX(14px) scale(1.4); opacity: 0.70; }
              75% { transform: translateY(-24px) translateX(-11px) scale(0.85); opacity: 0.60; }
            }
            
            @keyframes coin-float-4 {
              0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); opacity: 0.80; }
              40% { transform: translateY(-22px) translateX(20px) rotate(140deg) scale(1.3); opacity: 0.50; }
              80% { transform: translateY(-32px) translateX(-14px) rotate(280deg) scale(1.0); opacity: 0.90; }
            }
            
            @keyframes coin-float-5 {
              0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.85; }
              30% { transform: translateY(-25px) translateX(-18px); opacity: 0.45; }
              70% { transform: translateY(-15px) translateX(22px); opacity: 0.95; }
            }
            
            @keyframes coin-float-6 {
              0%, 100% { transform: translateY(0px) translateX(0px) scale(1) rotate(0deg); opacity: 0.85; }
              60% { transform: translateY(-30px) translateX(12px) scale(1.5) rotate(400deg); opacity: 0.60; }
            }
            
            @keyframes coin-float-7 {
              0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.80; }
              45% { transform: translateY(-18px) translateX(-20px) scale(0.9); opacity: 0.95; }
              85% { transform: translateY(-34px) translateX(16px) scale(1.2); opacity: 0.65; }
            }
            
            @keyframes coin-float-8 {
              0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.85; }
              35% { transform: translateY(-24px) translateX(26px) rotate(110deg); opacity: 0.55; }
              65% { transform: translateY(-30px) translateX(-8px) rotate(290deg); opacity: 0.90; }
            }
            
            @keyframes coin-float-9 {
              0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.85; }
              50% { transform: translateY(-36px) translateX(-22px) scale(1.4); opacity: 0.45; }
            }
            
            @keyframes coin-sparkle-1 {
              0%, 85%, 100% { opacity: 0; transform: scale(0.5); }
              88%, 95% { opacity: 1; transform: scale(2.5); }
              92% { opacity: 0.7; transform: scale(1.8); }
            }
            
            @keyframes coin-sparkle-2 {
              0%, 80%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
              83%, 90% { opacity: 1; transform: scale(2.3) rotate(360deg); }
              87% { opacity: 0.7; transform: scale(1.6) rotate(180deg); }
            }
            
            @keyframes coin-sparkle-3 {
              0%, 88%, 100% { opacity: 0; transform: scale(0.5); }
              91%, 98% { opacity: 1; transform: scale(2.7); }
              95% { opacity: 0.7; transform: scale(2.0); }
            }
            
            @keyframes light-drift-1 {
              0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.70; }
              33% { transform: translateY(28px) translateX(20px); opacity: 0.95; }
              66% { transform: translateY(15px) translateX(-12px); opacity: 0.45; }
            }
            
            @keyframes light-drift-2 {
              0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.60; }
              50% { transform: translateY(35px) translateX(-18px) scale(1.5); opacity: 0.90; }
            }
            
            @keyframes light-drift-3 {
              0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.50; }
              40% { transform: translateY(25px) translateX(28px); opacity: 0.85; }
              80% { transform: translateY(10px) translateX(-8px); opacity: 0.35; }
            }
            
            @keyframes light-drift-4 {
              0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.55; }
              60% { transform: translateY(32px) translateX(-24px); opacity: 0.88; }
            }
            
            @keyframes light-drift-5 {
              0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.65; }
              45% { transform: translateY(22px) translateX(16px) scale(1.6); opacity: 0.92; }
            }
            
            @keyframes light-drift-6 {
              0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.45; }
              35% { transform: translateY(38px) translateX(-30px); opacity: 0.95; }
              70% { transform: translateY(18px) translateX(12px); opacity: 0.40; }
            }
            
            /* Animation class assignments - BOLD timings */
            .animate-thin-ray-2 { animation: thin-ray-2 12s ease-in-out infinite 3s; }
            
            .animate-volcano-pulse-delay { animation: volcano-pulse-delay 5s ease-in-out infinite 1.5s; }
            .animate-volcano-flicker { animation: volcano-flicker 4s ease-in-out infinite 1s; }
            
            .animate-smoke-rise-1 { animation: smoke-rise-1 8s ease-out infinite; }
            .animate-smoke-rise-2 { animation: smoke-rise-2 9s ease-out infinite 2s; }
            .animate-smoke-rise-3 { animation: smoke-rise-3 10s ease-out infinite 4s; }
            .animate-smoke-rise-4 { animation: smoke-rise-4 8.5s ease-out infinite 1s; }
            .animate-smoke-rise-5 { animation: smoke-rise-5 9.5s ease-out infinite 6s; }
            
            .animate-smoke-wisp-1 { animation: smoke-wisp-1 14s ease-out infinite; }
            .animate-smoke-wisp-2 { animation: smoke-wisp-2 16s ease-out infinite 5s; }
            
            .animate-ember-float-bold-1 { animation: ember-float-bold-1 12s ease-in-out infinite; }
            .animate-ember-float-bold-2 { animation: ember-float-bold-2 14s ease-in-out infinite 3s; }
            .animate-ember-float-bold-3 { animation: ember-float-bold-3 13s ease-in-out infinite 6s; }
            .animate-ember-float-bold-4 { animation: ember-float-bold-4 11s ease-in-out infinite 2s; }
            .animate-ember-float-bold-5 { animation: ember-float-bold-5 15s ease-in-out infinite 8s; }
            
            .animate-ember-float-1 { animation: ember-float-1 10s ease-in-out infinite; }
            .animate-ember-float-2 { animation: ember-float-2 9s ease-in-out infinite 2s; }
            .animate-ember-float-3 { animation: ember-float-3 11s ease-in-out infinite 4s; }
            .animate-ember-float-4 { animation: ember-float-4 10.5s ease-in-out infinite 6s; }
            .animate-ember-float-5 { animation: ember-float-5 12s ease-in-out infinite 1s; }
            
            .animate-heat-shimmer-1 { animation: heat-shimmer-1 8s ease-in-out infinite; }
            .animate-heat-shimmer-2 { animation: heat-shimmer-2 9s ease-in-out infinite 3s; }
            .animate-heat-shimmer-3 { animation: heat-shimmer-3 7.5s ease-in-out infinite 5s; }
            
            .animate-coin-float-bold-1 { animation: coin-float-bold-1 14s ease-in-out infinite; }
            .animate-coin-float-bold-2 { animation: coin-float-bold-2 16s ease-in-out infinite 4s; }
            .animate-coin-float-bold-3 { animation: coin-float-bold-3 15s ease-in-out infinite 8s; }
            .animate-coin-float-bold-4 { animation: coin-float-bold-4 13s ease-in-out infinite 2s; }
            
            .animate-coin-float-1 { animation: coin-float-1 8s ease-in-out infinite; }
            .animate-coin-float-2 { animation: coin-float-2 9s ease-in-out infinite 1s; }
            .animate-coin-float-3 { animation: coin-float-3 10s ease-in-out infinite 2s; }
            .animate-coin-float-4 { animation: coin-float-4 8.5s ease-in-out infinite 0.5s; }
            .animate-coin-float-5 { animation: coin-float-5 9.5s ease-in-out infinite 3s; }
            .animate-coin-float-6 { animation: coin-float-6 11s ease-in-out infinite 1.5s; }
            .animate-coin-float-7 { animation: coin-float-7 8.8s ease-in-out infinite 2.5s; }
            .animate-coin-float-8 { animation: coin-float-8 9.2s ease-in-out infinite 4s; }
            .animate-coin-float-9 { animation: coin-float-9 10.5s ease-in-out infinite 0.8s; }
            
            .animate-coin-sparkle-1 { animation: coin-sparkle-1 6s linear infinite; }
            .animate-coin-sparkle-2 { animation: coin-sparkle-2 7s linear infinite 2s; }
            .animate-coin-sparkle-3 { animation: coin-sparkle-3 6.5s linear infinite 4s; }
            
            .animate-light-drift-1 { animation: light-drift-1 10s ease-in-out infinite; }
            .animate-light-drift-2 { animation: light-drift-2 12s ease-in-out infinite 3s; }
            .animate-light-drift-3 { animation: light-drift-3 11s ease-in-out infinite 6s; }
            .animate-light-drift-4 { animation: light-drift-4 13s ease-in-out infinite 2s; }
            .animate-light-drift-5 { animation: light-drift-5 14s ease-in-out infinite 8s; }
            .animate-light-drift-6 { animation: light-drift-6 9s ease-in-out infinite 4s; }
          `}</style>
      </div>
    </Card>
  );
}