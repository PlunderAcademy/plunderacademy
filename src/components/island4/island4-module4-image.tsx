"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Island4Module4Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        {/* Base image */}
        <Image
          src="/islands/island4/island4-module4-image.webp"
          alt="Proxy Patterns & Upgradeability - Gilded Bastion Adventure"
          fill
          className="object-cover"
          priority
        />
        
        {/* BOLD Animated overlay effects */}
        <div className="absolute inset-0 animate-effects">
          {/* ROSE WINDOW - Central focal point with divine glow */}
          <div className="absolute inset-0">
            <div className="absolute top-[18%] left-[48%] w-[90px] h-[90px] bg-yellow-300/35 rounded-full rose-glow animate-rose-glow-1"></div>
            <div className="absolute top-[19%] left-[48.5%] w-[70px] h-[70px] bg-red-300/30 rounded-full rose-glow animate-rose-glow-2"></div>
            <div className="absolute top-[19.5%] left-[49%] w-[55px] h-[55px] bg-green-300/28 rounded-full rose-glow animate-rose-glow-3"></div>
            <div className="absolute top-[20%] left-[49.5%] w-[40px] h-[40px] bg-blue-300/32 rounded-full rose-glow animate-rose-glow-4"></div>
            <div className="absolute top-[20.5%] left-[50%] w-[25px] h-[25px] bg-yellow-200/45 rounded-full rose-core animate-rose-core"></div>
          </div>

          {/* STAINED GLASS WINDOWS - Left side glowing */}
          <div className="absolute inset-0">
            {/* Left tall windows */}
            <div className="absolute top-[20%] left-[2%] w-[50px] h-[90px] bg-blue-400/35 stained-glass animate-stained-left-1"></div>
            <div className="absolute top-[22%] left-[4%] w-[45px] h-[80px] bg-red-400/32 stained-glass animate-stained-left-2"></div>
            <div className="absolute top-[24%] left-[6%] w-[40px] h-[70px] bg-green-400/30 stained-glass animate-stained-left-3"></div>
            <div className="absolute top-[26%] left-[8%] w-[38px] h-[65px] bg-yellow-400/33 stained-glass animate-stained-left-4"></div>
          </div>

          {/* STAINED GLASS WINDOWS - Right side glowing */}
          <div className="absolute inset-0">
            {/* Right tall windows */}
            <div className="absolute top-[20%] right-[2%] w-[50px] h-[90px] bg-red-400/35 stained-glass animate-stained-right-1"></div>
            <div className="absolute top-[22%] right-[4%] w-[45px] h-[80px] bg-blue-400/32 stained-glass animate-stained-right-2"></div>
            <div className="absolute top-[24%] right-[6%] w-[40px] h-[70px] bg-yellow-400/30 stained-glass animate-stained-right-3"></div>
            <div className="absolute top-[26%] right-[8%] w-[38px] h-[65px] bg-green-400/33 stained-glass animate-stained-right-4"></div>
          </div>

          {/* ALTAR WINDOWS - Behind priest */}
          <div className="absolute inset-0">
            {/* Three arched windows behind altar */}
            <div className="absolute top-[35%] left-[44%] w-[35px] h-[55px] bg-green-400/40 altar-window animate-altar-window-1"></div>
            <div className="absolute top-[35%] left-[49%] w-[35px] h-[55px] bg-blue-400/42 altar-window animate-altar-window-2"></div>
            <div className="absolute top-[35%] left-[54%] w-[35px] h-[55px] bg-red-400/38 altar-window animate-altar-window-3"></div>
          </div>

          {/* LIGHT BEAMS - From windows to floor (most dramatic effect!) */}
          <div className="absolute inset-0">
            {/* Left side beams */}
            <div className="absolute top-[20%] left-[5%] w-[80px] h-[400px] bg-gradient-to-b from-blue-300/20 via-blue-200/10 to-transparent light-beam animate-light-beam-1"></div>
            <div className="absolute top-[22%] left-[9%] w-[70px] h-[380px] bg-gradient-to-b from-red-300/18 via-red-200/9 to-transparent light-beam animate-light-beam-2"></div>
            
            {/* Right side beams */}
            <div className="absolute top-[20%] right-[5%] w-[80px] h-[400px] bg-gradient-to-b from-red-300/20 via-red-200/10 to-transparent light-beam animate-light-beam-3"></div>
            <div className="absolute top-[22%] right-[9%] w-[70px] h-[380px] bg-gradient-to-b from-blue-300/18 via-blue-200/9 to-transparent light-beam animate-light-beam-4"></div>
          </div>

          {/* COLORFUL FLOOR TILES - Light reflections */}
          <div className="absolute inset-0">
            {/* Center aisle - colorful reflections */}
            <div className="absolute bottom-[8%] left-[46%] w-[35px] h-[25px] bg-yellow-300/35 floor-glow animate-floor-glow-1"></div>
            <div className="absolute bottom-[10%] left-[48%] w-[32px] h-[23px] bg-red-300/32 floor-glow animate-floor-glow-2"></div>
            <div className="absolute bottom-[12%] left-[50%] w-[35px] h-[26px] bg-blue-300/34 floor-glow animate-floor-glow-3"></div>
            <div className="absolute bottom-[14%] left-[47%] w-[33px] h-[24px] bg-green-300/30 floor-glow animate-floor-glow-4"></div>
            <div className="absolute bottom-[16%] left-[49%] w-[36px] h-[27px] bg-purple-300/33 floor-glow animate-floor-glow-5"></div>
            <div className="absolute bottom-[18%] left-[51%] w-[34px] h-[25px] bg-cyan-300/31 floor-glow animate-floor-glow-6"></div>
          </div>

          {/* PRIEST HALO/GLOW - Divine presence */}
          <div className="absolute inset-0">
            <div className="absolute top-[42%] left-[49%] w-[60px] h-[80px] bg-yellow-200/25 priest-glow animate-priest-glow-1"></div>
            <div className="absolute top-[44%] left-[49.5%] w-[45px] h-[65px] bg-amber-200/30 priest-glow animate-priest-glow-2"></div>
          </div>

          {/* CEILING LIGHTS - Small hanging lights */}
          <div className="absolute inset-0">
            <div className="absolute top-[10%] left-[20%] w-[5px] h-[5px] bg-yellow-300/80 ceiling-light animate-ceiling-light-1"></div>
            <div className="absolute top-[10%] left-[30%] w-[5px] h-[5px] bg-amber-300/78 ceiling-light animate-ceiling-light-2"></div>
            <div className="absolute top-[10%] left-[40%] w-[5px] h-[5px] bg-yellow-300/82 ceiling-light animate-ceiling-light-3"></div>
            <div className="absolute top-[10%] left-[60%] w-[5px] h-[5px] bg-amber-300/80 ceiling-light animate-ceiling-light-4"></div>
            <div className="absolute top-[10%] left-[70%] w-[5px] h-[5px] bg-yellow-300/79 ceiling-light animate-ceiling-light-5"></div>
            <div className="absolute top-[10%] left-[80%] w-[5px] h-[5px] bg-amber-300/81 ceiling-light animate-ceiling-light-6"></div>
          </div>

          {/* ALTAR CANDLES - Warm glow */}
          <div className="absolute inset-0">
            <div className="absolute top-[52%] left-[47%] w-[8px] h-[10px] bg-yellow-200/75 candle-flame animate-candle-flicker-1"></div>
            <div className="absolute top-[52%] left-[47%] w-[16px] h-[20px] bg-orange-200/40 candle-glow animate-candle-glow-1"></div>
            
            <div className="absolute top-[52%] left-[51%] w-[8px] h-[10px] bg-yellow-200/78 candle-flame animate-candle-flicker-2"></div>
            <div className="absolute top-[52%] left-[51%] w-[16px] h-[20px] bg-orange-200/42 candle-glow animate-candle-glow-2"></div>
          </div>

          {/* PEWS WOOD GLEAM - Subtle shine */}
          <div className="absolute inset-0">
            {/* Left pews */}
            <div className="absolute top-[58%] left-[12%] w-[40px] h-[15px] bg-amber-300/12 wood-gleam animate-wood-gleam-1"></div>
            <div className="absolute top-[62%] left-[10%] w-[38px] h-[14px] bg-yellow-300/10 wood-gleam animate-wood-gleam-2"></div>
            <div className="absolute top-[66%] left-[8%] w-[42px] h-[16px] bg-amber-300/11 wood-gleam animate-wood-gleam-3"></div>
            
            {/* Right pews */}
            <div className="absolute top-[58%] right-[12%] w-[40px] h-[15px] bg-amber-300/12 wood-gleam animate-wood-gleam-4"></div>
            <div className="absolute top-[62%] right-[10%] w-[38px] h-[14px] bg-yellow-300/10 wood-gleam animate-wood-gleam-5"></div>
            <div className="absolute top-[66%] right-[8%] w-[42px] h-[16px] bg-amber-300/11 wood-gleam animate-wood-gleam-6"></div>
          </div>

          {/* DUST MOTES - Floating in light beams */}
          <div className="absolute inset-0">
            <div className="absolute top-[35%] left-[8%] w-[2px] h-[2px] bg-white/70 dust-mote animate-dust-float-1"></div>
            <div className="absolute top-[40%] left-[6%] w-[2px] h-[2px] bg-yellow-200/65 dust-mote animate-dust-float-2"></div>
            <div className="absolute top-[45%] left-[10%] w-[2px] h-[2px] bg-white/68 dust-mote animate-dust-float-3"></div>
            <div className="absolute top-[35%] right-[8%] w-[2px] h-[2px] bg-white/70 dust-mote animate-dust-float-4"></div>
            <div className="absolute top-[40%] right-[6%] w-[2px] h-[2px] bg-yellow-200/65 dust-mote animate-dust-float-5"></div>
            <div className="absolute top-[45%] right-[10%] w-[2px] h-[2px] bg-white/68 dust-mote animate-dust-float-6"></div>
            <div className="absolute top-[50%] left-[30%] w-[2px] h-[2px] bg-white/66 dust-mote animate-dust-float-7"></div>
            <div className="absolute top-[50%] right-[30%] w-[2px] h-[2px] bg-yellow-200/64 dust-mote animate-dust-float-8"></div>
          </div>

          {/* COLUMN HIGHLIGHTS - Gothic architecture */}
          <div className="absolute inset-0">
            <div className="absolute top-[30%] left-[18%] w-[4px] h-[4px] bg-white/75 column-sparkle animate-column-sparkle-1"></div>
            <div className="absolute top-[35%] left-[15%] w-[4px] h-[4px] bg-cyan-100/72 column-sparkle animate-column-sparkle-2"></div>
            <div className="absolute top-[30%] right-[18%] w-[4px] h-[4px] bg-white/75 column-sparkle animate-column-sparkle-3"></div>
            <div className="absolute top-[35%] right-[15%] w-[4px] h-[4px] bg-cyan-100/72 column-sparkle animate-column-sparkle-4"></div>
          </div>

          {/* CROSS/ALTAR DIVINE LIGHT */}
          <div className="absolute inset-0">
            <div className="absolute top-[48%] left-[49.5%] w-[15px] h-[15px] bg-white/60 cross-glow animate-cross-glow"></div>
            <div className="absolute top-[48%] left-[49.5%] w-[30px] h-[30px] bg-yellow-200/35 cross-glow-outer animate-cross-glow-outer"></div>
            <div className="absolute top-[48%] left-[49.5%] w-[50px] h-[50px] bg-amber-300/20 cross-glow-far animate-cross-glow-far"></div>
          </div>

          {/* PEOPLE SILHOUETTES SOFT GLOW - Congregation */}
          <div className="absolute inset-0">
            <div className="absolute bottom-[15%] left-[20%] w-[25px] h-[35px] bg-blue-200/8 person-glow animate-person-glow-1"></div>
            <div className="absolute bottom-[15%] left-[25%] w-[25px] h-[35px] bg-red-200/7 person-glow animate-person-glow-2"></div>
            <div className="absolute bottom-[15%] left-[30%] w-[25px] h-[35px] bg-yellow-200/8 person-glow animate-person-glow-3"></div>
            <div className="absolute bottom-[15%] right-[20%] w-[25px] h-[35px] bg-blue-200/8 person-glow animate-person-glow-4"></div>
            <div className="absolute bottom-[15%] right-[25%] w-[25px] h-[35px] bg-red-200/7 person-glow animate-person-glow-5"></div>
            <div className="absolute bottom-[15%] right-[30%] w-[25px] h-[35px] bg-yellow-200/8 person-glow animate-person-glow-6"></div>
          </div>
        </div>
        
        <style jsx>{`
          /* ROSE WINDOW EFFECTS */
          .rose-glow {
            filter: blur(30px);
          }
          
          .rose-core {
            filter: blur(15px);
            box-shadow: 0 0 40px currentColor, 0 0 80px currentColor;
          }
          
          /* STAINED GLASS */
          .stained-glass {
            filter: blur(20px);
          }
          
          .altar-window {
            filter: blur(18px);
          }
          
          /* LIGHT BEAMS */
          .light-beam {
            filter: blur(28px);
          }
          
          /* FLOOR REFLECTIONS */
          .floor-glow {
            filter: blur(16px);
          }
          
          /* PRIEST GLOW */
          .priest-glow {
            filter: blur(25px);
          }
          
          /* CEILING LIGHTS */
          .ceiling-light {
            box-shadow: 0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor;
            filter: blur(0.5px);
          }
          
          /* CANDLE EFFECTS */
          .candle-flame {
            filter: blur(2px);
            box-shadow: 0 0 15px currentColor, 0 0 30px currentColor;
          }
          
          .candle-glow {
            filter: blur(14px);
          }
          
          /* WOOD GLEAM */
          .wood-gleam {
            filter: blur(18px);
          }
          
          /* DUST MOTES */
          .dust-mote {
            box-shadow: 0 0 10px currentColor, 0 0 20px currentColor;
            filter: blur(0.5px);
          }
          
          /* COLUMN SPARKLES */
          .column-sparkle {
            box-shadow: 0 0 18px currentColor, 0 0 36px currentColor, 0 0 54px currentColor;
            filter: blur(0.4px);
          }
          
          /* CROSS GLOW */
          .cross-glow {
            box-shadow: 0 0 30px currentColor, 0 0 60px currentColor;
            filter: blur(1px);
          }
          
          .cross-glow-outer {
            filter: blur(20px);
          }
          
          .cross-glow-far {
            filter: blur(30px);
          }
          
          /* PERSON GLOW */
          .person-glow {
            filter: blur(22px);
          }
          
          /* ANIMATION STATES */
          .animate-effects .rose-glow,
          .animate-effects .rose-core,
          .animate-effects .stained-glass,
          .animate-effects .altar-window,
          .animate-effects .light-beam,
          .animate-effects .floor-glow,
          .animate-effects .priest-glow,
          .animate-effects .ceiling-light,
          .animate-effects .candle-flame,
          .animate-effects .candle-glow,
          .animate-effects .wood-gleam,
          .animate-effects .dust-mote,
          .animate-effects .column-sparkle,
          .animate-effects .cross-glow,
          .animate-effects .cross-glow-outer,
          .animate-effects .cross-glow-far,
          .animate-effects .person-glow {
            animation-play-state: running;
          }
          
          /* ROSE WINDOW ANIMATIONS */
          @keyframes rose-glow-1 {
            0%, 100% { opacity: 0.35; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.15); }
          }
          
          @keyframes rose-glow-2 {
            0%, 100% { opacity: 0.3; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.55; transform: scale(1.12) rotate(180deg); }
          }
          
          @keyframes rose-glow-3 {
            0%, 100% { opacity: 0.28; transform: scale(1) rotate(0deg); }
            50% { opacity: 0.52; transform: scale(1.1) rotate(-180deg); }
          }
          
          @keyframes rose-glow-4 {
            0%, 100% { opacity: 0.32; transform: scale(1); }
            50% { opacity: 0.58; transform: scale(1.14); }
          }
          
          @keyframes rose-core {
            0%, 100% { opacity: 0.45; transform: scale(1); }
            50% { opacity: 0.75; transform: scale(1.2); }
          }
          
          /* STAINED GLASS ANIMATIONS */
          @keyframes stained-left-1 {
            0%, 100% { opacity: 0.35; transform: scaleY(1); }
            50% { opacity: 0.58; transform: scaleY(1.05); }
          }
          
          @keyframes stained-left-2 {
            0%, 100% { opacity: 0.32; transform: scaleY(1); }
            50% { opacity: 0.55; transform: scaleY(1.04); }
          }
          
          @keyframes stained-left-3 {
            0%, 100% { opacity: 0.3; transform: scaleY(1); }
            50% { opacity: 0.52; transform: scaleY(1.03); }
          }
          
          @keyframes stained-left-4 {
            0%, 100% { opacity: 0.33; transform: scaleY(1); }
            50% { opacity: 0.56; transform: scaleY(1.04); }
          }
          
          @keyframes stained-right-1 {
            0%, 100% { opacity: 0.35; transform: scaleY(1); }
            50% { opacity: 0.58; transform: scaleY(1.05); }
          }
          
          @keyframes stained-right-2 {
            0%, 100% { opacity: 0.32; transform: scaleY(1); }
            50% { opacity: 0.55; transform: scaleY(1.04); }
          }
          
          @keyframes stained-right-3 {
            0%, 100% { opacity: 0.3; transform: scaleY(1); }
            50% { opacity: 0.52; transform: scaleY(1.03); }
          }
          
          @keyframes stained-right-4 {
            0%, 100% { opacity: 0.33; transform: scaleY(1); }
            50% { opacity: 0.56; transform: scaleY(1.04); }
          }
          
          @keyframes altar-window-1 {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 0.65; transform: scale(1.08); }
          }
          
          @keyframes altar-window-2 {
            0%, 100% { opacity: 0.42; transform: scale(1); }
            50% { opacity: 0.68; transform: scale(1.1); }
          }
          
          @keyframes altar-window-3 {
            0%, 100% { opacity: 0.38; transform: scale(1); }
            50% { opacity: 0.63; transform: scale(1.07); }
          }
          
          /* LIGHT BEAM ANIMATIONS */
          @keyframes light-beam-1 {
            0%, 100% { opacity: 0.2; transform: scaleX(1); }
            50% { opacity: 0.35; transform: scaleX(1.08); }
          }
          
          @keyframes light-beam-2 {
            0%, 100% { opacity: 0.18; transform: scaleX(1); }
            50% { opacity: 0.32; transform: scaleX(1.06); }
          }
          
          @keyframes light-beam-3 {
            0%, 100% { opacity: 0.2; transform: scaleX(1); }
            50% { opacity: 0.35; transform: scaleX(1.08); }
          }
          
          @keyframes light-beam-4 {
            0%, 100% { opacity: 0.18; transform: scaleX(1); }
            50% { opacity: 0.32; transform: scaleX(1.06); }
          }
          
          /* FLOOR GLOW ANIMATIONS */
          @keyframes floor-glow-1 {
            0%, 100% { opacity: 0.35; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.15); }
          }
          
          @keyframes floor-glow-2 {
            0%, 100% { opacity: 0.32; transform: scale(1); }
            50% { opacity: 0.58; transform: scale(1.12); }
          }
          
          @keyframes floor-glow-3 {
            0%, 100% { opacity: 0.34; transform: scale(1); }
            50% { opacity: 0.62; transform: scale(1.14); }
          }
          
          @keyframes floor-glow-4 {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.55; transform: scale(1.1); }
          }
          
          @keyframes floor-glow-5 {
            0%, 100% { opacity: 0.33; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.13); }
          }
          
          @keyframes floor-glow-6 {
            0%, 100% { opacity: 0.31; transform: scale(1); }
            50% { opacity: 0.57; transform: scale(1.11); }
          }
          
          /* PRIEST GLOW ANIMATIONS */
          @keyframes priest-glow-1 {
            0%, 100% { opacity: 0.25; transform: scale(1); }
            50% { opacity: 0.45; transform: scale(1.12); }
          }
          
          @keyframes priest-glow-2 {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.52; transform: scale(1.1); }
          }
          
          /* CEILING LIGHT ANIMATIONS */
          @keyframes ceiling-light-1 {
            0%, 100% { opacity: 0.8; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.3); }
          }
          
          @keyframes ceiling-light-2 {
            0%, 100% { opacity: 0.78; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.28); }
          }
          
          @keyframes ceiling-light-3 {
            0%, 100% { opacity: 0.82; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.32); }
          }
          
          @keyframes ceiling-light-4 {
            0%, 100% { opacity: 0.8; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.3); }
          }
          
          @keyframes ceiling-light-5 {
            0%, 100% { opacity: 0.79; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.29); }
          }
          
          @keyframes ceiling-light-6 {
            0%, 100% { opacity: 0.81; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.31); }
          }
          
          /* CANDLE ANIMATIONS */
          @keyframes candle-flicker-1 {
            0%, 100% { opacity: 0.75; transform: scale(1) translateY(0); }
            15% { opacity: 0.68; transform: scale(0.94) translateY(-2px); }
            30% { opacity: 0.82; transform: scale(1.06) translateY(1px); }
            45% { opacity: 0.72; transform: scale(0.97) translateY(-1px); }
            60% { opacity: 0.78; transform: scale(1.03) translateY(0.5px); }
            75% { opacity: 0.7; transform: scale(0.95) translateY(-1.5px); }
          }
          
          @keyframes candle-flicker-2 {
            0%, 100% { opacity: 0.78; transform: scale(1) translateY(0); }
            18% { opacity: 0.7; transform: scale(0.95) translateY(-2px); }
            33% { opacity: 0.85; transform: scale(1.05) translateY(1px); }
            48% { opacity: 0.74; transform: scale(0.98) translateY(-1px); }
            63% { opacity: 0.8; transform: scale(1.02) translateY(0.5px); }
            78% { opacity: 0.72; transform: scale(0.96) translateY(-1.5px); }
          }
          
          @keyframes candle-glow-1 {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 0.65; transform: scale(1.2); }
          }
          
          @keyframes candle-glow-2 {
            0%, 100% { opacity: 0.42; transform: scale(1); }
            50% { opacity: 0.68; transform: scale(1.18); }
          }
          
          /* WOOD GLEAM ANIMATIONS */
          @keyframes wood-gleam-1 {
            0%, 100% { opacity: 0.12; transform: scaleX(1); }
            50% { opacity: 0.24; transform: scaleX(1.1); }
          }
          
          @keyframes wood-gleam-2 {
            0%, 100% { opacity: 0.1; transform: scaleX(1); }
            50% { opacity: 0.22; transform: scaleX(1.08); }
          }
          
          @keyframes wood-gleam-3 {
            0%, 100% { opacity: 0.11; transform: scaleX(1); }
            50% { opacity: 0.23; transform: scaleX(1.09); }
          }
          
          @keyframes wood-gleam-4 {
            0%, 100% { opacity: 0.12; transform: scaleX(1); }
            50% { opacity: 0.24; transform: scaleX(1.1); }
          }
          
          @keyframes wood-gleam-5 {
            0%, 100% { opacity: 0.1; transform: scaleX(1); }
            50% { opacity: 0.22; transform: scaleX(1.08); }
          }
          
          @keyframes wood-gleam-6 {
            0%, 100% { opacity: 0.11; transform: scaleX(1); }
            50% { opacity: 0.23; transform: scaleX(1.09); }
          }
          
          /* DUST FLOAT ANIMATIONS */
          @keyframes dust-float-1 {
            0%, 100% { opacity: 0; transform: translateY(0) translateX(0); }
            50% { opacity: 0.7; transform: translateY(-60px) translateX(12px); }
          }
          
          @keyframes dust-float-2 {
            0%, 100% { opacity: 0; transform: translateY(0) translateX(0); }
            50% { opacity: 0.65; transform: translateY(-55px) translateX(-10px); }
          }
          
          @keyframes dust-float-3 {
            0%, 100% { opacity: 0; transform: translateY(0) translateX(0); }
            50% { opacity: 0.68; transform: translateY(-58px) translateX(14px); }
          }
          
          @keyframes dust-float-4 {
            0%, 100% { opacity: 0; transform: translateY(0) translateX(0); }
            50% { opacity: 0.7; transform: translateY(-60px) translateX(-12px); }
          }
          
          @keyframes dust-float-5 {
            0%, 100% { opacity: 0; transform: translateY(0) translateX(0); }
            50% { opacity: 0.65; transform: translateY(-55px) translateX(10px); }
          }
          
          @keyframes dust-float-6 {
            0%, 100% { opacity: 0; transform: translateY(0) translateX(0); }
            50% { opacity: 0.68; transform: translateY(-58px) translateX(-14px); }
          }
          
          @keyframes dust-float-7 {
            0%, 100% { opacity: 0; transform: translateY(0) translateX(0); }
            50% { opacity: 0.66; transform: translateY(-52px) translateX(8px); }
          }
          
          @keyframes dust-float-8 {
            0%, 100% { opacity: 0; transform: translateY(0) translateX(0); }
            50% { opacity: 0.64; transform: translateY(-54px) translateX(-9px); }
          }
          
          /* COLUMN SPARKLE ANIMATIONS */
          @keyframes column-sparkle-1 {
            0%, 65%, 100% { opacity: 0; transform: scale(1); }
            70%, 80% { opacity: 0.75; transform: scale(2.2); }
            75% { opacity: 0.45; transform: scale(1.8); }
          }
          
          @keyframes column-sparkle-2 {
            0%, 68%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            73%, 83% { opacity: 0.72; transform: scale(2.1) rotate(360deg); }
            78% { opacity: 0.42; transform: scale(1.7) rotate(180deg); }
          }
          
          @keyframes column-sparkle-3 {
            0%, 62%, 100% { opacity: 0; transform: scale(1); }
            67%, 77% { opacity: 0.75; transform: scale(2.2); }
            72% { opacity: 0.45; transform: scale(1.8); }
          }
          
          @keyframes column-sparkle-4 {
            0%, 70%, 100% { opacity: 0; transform: scale(1) rotate(0deg); }
            75%, 85% { opacity: 0.72; transform: scale(2.1) rotate(360deg); }
            80% { opacity: 0.42; transform: scale(1.7) rotate(180deg); }
          }
          
          /* CROSS GLOW ANIMATIONS */
          @keyframes cross-glow {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 0.9; transform: scale(1.3); }
          }
          
          @keyframes cross-glow-outer {
            0%, 100% { opacity: 0.35; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.25); }
          }
          
          @keyframes cross-glow-far {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(1.2); }
          }
          
          /* PERSON GLOW ANIMATIONS */
          @keyframes person-glow-1 {
            0%, 100% { opacity: 0.08; transform: scale(1); }
            50% { opacity: 0.15; transform: scale(1.05); }
          }
          
          @keyframes person-glow-2 {
            0%, 100% { opacity: 0.07; transform: scale(1); }
            50% { opacity: 0.14; transform: scale(1.04); }
          }
          
          @keyframes person-glow-3 {
            0%, 100% { opacity: 0.08; transform: scale(1); }
            50% { opacity: 0.15; transform: scale(1.05); }
          }
          
          @keyframes person-glow-4 {
            0%, 100% { opacity: 0.08; transform: scale(1); }
            50% { opacity: 0.15; transform: scale(1.05); }
          }
          
          @keyframes person-glow-5 {
            0%, 100% { opacity: 0.07; transform: scale(1); }
            50% { opacity: 0.14; transform: scale(1.04); }
          }
          
          @keyframes person-glow-6 {
            0%, 100% { opacity: 0.08; transform: scale(1); }
            50% { opacity: 0.15; transform: scale(1.05); }
          }
          
          /* ANIMATION CLASS ASSIGNMENTS */
          .animate-rose-glow-1 { animation: rose-glow-1 8s ease-in-out infinite; }
          .animate-rose-glow-2 { animation: rose-glow-2 9s ease-in-out infinite 1s; }
          .animate-rose-glow-3 { animation: rose-glow-3 10s ease-in-out infinite 2s; }
          .animate-rose-glow-4 { animation: rose-glow-4 7s ease-in-out infinite 0.5s; }
          .animate-rose-core { animation: rose-core 6s ease-in-out infinite 1.5s; }
          
          .animate-stained-left-1 { animation: stained-left-1 7s ease-in-out infinite; }
          .animate-stained-left-2 { animation: stained-left-2 7.5s ease-in-out infinite 1s; }
          .animate-stained-left-3 { animation: stained-left-3 8s ease-in-out infinite 2s; }
          .animate-stained-left-4 { animation: stained-left-4 7.2s ease-in-out infinite 0.5s; }
          
          .animate-stained-right-1 { animation: stained-right-1 7s ease-in-out infinite 0.5s; }
          .animate-stained-right-2 { animation: stained-right-2 7.5s ease-in-out infinite 1.5s; }
          .animate-stained-right-3 { animation: stained-right-3 8s ease-in-out infinite 2.5s; }
          .animate-stained-right-4 { animation: stained-right-4 7.2s ease-in-out infinite 1s; }
          
          .animate-altar-window-1 { animation: altar-window-1 6s ease-in-out infinite; }
          .animate-altar-window-2 { animation: altar-window-2 6.5s ease-in-out infinite 1s; }
          .animate-altar-window-3 { animation: altar-window-3 6.2s ease-in-out infinite 2s; }
          
          .animate-light-beam-1 { animation: light-beam-1 10s ease-in-out infinite; }
          .animate-light-beam-2 { animation: light-beam-2 11s ease-in-out infinite 2s; }
          .animate-light-beam-3 { animation: light-beam-3 10.5s ease-in-out infinite 1s; }
          .animate-light-beam-4 { animation: light-beam-4 11.5s ease-in-out infinite 3s; }
          
          .animate-floor-glow-1 { animation: floor-glow-1 5s ease-in-out infinite; }
          .animate-floor-glow-2 { animation: floor-glow-2 5.5s ease-in-out infinite 0.5s; }
          .animate-floor-glow-3 { animation: floor-glow-3 5.2s ease-in-out infinite 1s; }
          .animate-floor-glow-4 { animation: floor-glow-4 5.8s ease-in-out infinite 1.5s; }
          .animate-floor-glow-5 { animation: floor-glow-5 5.3s ease-in-out infinite 2s; }
          .animate-floor-glow-6 { animation: floor-glow-6 5.6s ease-in-out infinite 2.5s; }
          
          .animate-priest-glow-1 { animation: priest-glow-1 7s ease-in-out infinite; }
          .animate-priest-glow-2 { animation: priest-glow-2 6s ease-in-out infinite 1s; }
          
          .animate-ceiling-light-1 { animation: ceiling-light-1 4s ease-in-out infinite; }
          .animate-ceiling-light-2 { animation: ceiling-light-2 4.3s ease-in-out infinite 0.5s; }
          .animate-ceiling-light-3 { animation: ceiling-light-3 4.6s ease-in-out infinite 1s; }
          .animate-ceiling-light-4 { animation: ceiling-light-4 4.2s ease-in-out infinite 1.5s; }
          .animate-ceiling-light-5 { animation: ceiling-light-5 4.4s ease-in-out infinite 2s; }
          .animate-ceiling-light-6 { animation: ceiling-light-6 4.5s ease-in-out infinite 0.8s; }
          
          .animate-candle-flicker-1 { animation: candle-flicker-1 2.5s ease-in-out infinite; }
          .animate-candle-flicker-2 { animation: candle-flicker-2 2.8s ease-in-out infinite 0.5s; }
          .animate-candle-glow-1 { animation: candle-glow-1 3s ease-in-out infinite; }
          .animate-candle-glow-2 { animation: candle-glow-2 3.3s ease-in-out infinite 0.5s; }
          
          .animate-wood-gleam-1 { animation: wood-gleam-1 8s ease-in-out infinite; }
          .animate-wood-gleam-2 { animation: wood-gleam-2 8.5s ease-in-out infinite 1s; }
          .animate-wood-gleam-3 { animation: wood-gleam-3 9s ease-in-out infinite 2s; }
          .animate-wood-gleam-4 { animation: wood-gleam-4 8.2s ease-in-out infinite 0.5s; }
          .animate-wood-gleam-5 { animation: wood-gleam-5 8.7s ease-in-out infinite 1.5s; }
          .animate-wood-gleam-6 { animation: wood-gleam-6 9.2s ease-in-out infinite 2.5s; }
          
          .animate-dust-float-1 { animation: dust-float-1 16s ease-in-out infinite; }
          .animate-dust-float-2 { animation: dust-float-2 17s ease-in-out infinite 2s; }
          .animate-dust-float-3 { animation: dust-float-3 18s ease-in-out infinite 4s; }
          .animate-dust-float-4 { animation: dust-float-4 16.5s ease-in-out infinite 1s; }
          .animate-dust-float-5 { animation: dust-float-5 17.5s ease-in-out infinite 3s; }
          .animate-dust-float-6 { animation: dust-float-6 18.5s ease-in-out infinite 5s; }
          .animate-dust-float-7 { animation: dust-float-7 19s ease-in-out infinite 6s; }
          .animate-dust-float-8 { animation: dust-float-8 15.5s ease-in-out infinite 7s; }
          
          .animate-column-sparkle-1 { animation: column-sparkle-1 9s linear infinite; }
          .animate-column-sparkle-2 { animation: column-sparkle-2 10s linear infinite 2s; }
          .animate-column-sparkle-3 { animation: column-sparkle-3 9.5s linear infinite 4s; }
          .animate-column-sparkle-4 { animation: column-sparkle-4 10.5s linear infinite 6s; }
          
          .animate-cross-glow { animation: cross-glow 5s ease-in-out infinite; }
          .animate-cross-glow-outer { animation: cross-glow-outer 6s ease-in-out infinite 1s; }
          .animate-cross-glow-far { animation: cross-glow-far 7s ease-in-out infinite 2s; }
          
          .animate-person-glow-1 { animation: person-glow-1 6s ease-in-out infinite; }
          .animate-person-glow-2 { animation: person-glow-2 6.5s ease-in-out infinite 1s; }
          .animate-person-glow-3 { animation: person-glow-3 7s ease-in-out infinite 2s; }
          .animate-person-glow-4 { animation: person-glow-4 6.2s ease-in-out infinite 0.5s; }
          .animate-person-glow-5 { animation: person-glow-5 6.7s ease-in-out infinite 1.5s; }
          .animate-person-glow-6 { animation: person-glow-6 7.2s ease-in-out infinite 2.5s; }
        `}</style>
      </div>
    </Card>
  );
}

