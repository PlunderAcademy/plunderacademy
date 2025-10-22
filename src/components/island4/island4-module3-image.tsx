"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Island4Module3Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        {/* Base image */}
        <Image
          src="/islands/island4/island4-module3-image.webp"
          alt="Random Number Generator Practical - Gilded Bastion Adventure"
          fill
          className="object-cover"
          priority
        />
        
        {/* BOLD Animated overlay effects */}
        <div className="absolute inset-0 animate-effects">
          {/* CHANDELIER LANTERNS - Main focal point! */}
          <div className="absolute inset-0">
            {/* Top ring of lanterns */}
            <div className="absolute top-[8%] left-[45%] w-[12px] h-[16px] bg-yellow-300/75 lantern animate-lantern-flicker-1"></div>
            <div className="absolute top-[8%] left-[45%] w-[24px] h-[32px] bg-orange-300/45 lantern-glow animate-lantern-glow-1"></div>
            
            <div className="absolute top-[9%] left-[45%] w-[12px] h-[16px] bg-yellow-300/78 lantern animate-lantern-flicker-2"></div>
            <div className="absolute top-[9%] left-[45%] w-[24px] h-[32px] bg-orange-300/48 lantern-glow animate-lantern-glow-2"></div>
            
            <div className="absolute top-[8%] left-[50%] w-[14px] h-[18px] bg-yellow-300/80 lantern animate-lantern-flicker-3"></div>
            <div className="absolute top-[8%] left-[50%] w-[28px] h-[36px] bg-orange-300/50 lantern-glow animate-lantern-glow-3"></div>
            
            <div className="absolute top-[9%] left-[55%] w-[12px] h-[16px] bg-yellow-300/77 lantern animate-lantern-flicker-4"></div>
            <div className="absolute top-[9%] left-[55%] w-[24px] h-[32px] bg-orange-300/47 lantern-glow animate-lantern-glow-4"></div>
            
            <div className="absolute top-[8%] left-[60%] w-[13px] h-[17px] bg-yellow-300/79 lantern animate-lantern-flicker-5"></div>
            <div className="absolute top-[8%] left-[60%] w-[26px] h-[34px] bg-orange-300/49 lantern-glow animate-lantern-glow-5"></div>
            
            <div className="absolute top-[9%] left-[65%] w-[12px] h-[16px] bg-yellow-300/76 lantern animate-lantern-flicker-6"></div>
            <div className="absolute top-[9%] left-[65%] w-[24px] h-[32px] bg-orange-300/46 lantern-glow animate-lantern-glow-6"></div>
            
            <div className="absolute top-[8%] left-[70%] w-[12px] h-[16px] bg-yellow-300/75 lantern animate-lantern-flicker-7"></div>
            <div className="absolute top-[8%] left-[70%] w-[24px] h-[32px] bg-orange-300/45 lantern-glow animate-lantern-glow-7"></div>
          </div>

          {/* CHANDELIER - Bottom ring lanterns */}
          <div className="absolute inset-0">
            <div className="absolute top-[19%] left-[43%] w-[11px] h-[15px] bg-yellow-300/72 lantern animate-lantern-flicker-8"></div>
            <div className="absolute top-[19%] left-[43%] w-[22px] h-[30px] bg-orange-300/42 lantern-glow animate-lantern-glow-8"></div>
            
            <div className="absolute top-[20%] left-[48%] w-[12px] h-[16px] bg-yellow-300/75 lantern animate-lantern-flicker-9"></div>
            <div className="absolute top-[20%] left-[48%] w-[24px] h-[32px] bg-orange-300/45 lantern-glow animate-lantern-glow-9"></div>
            
            <div className="absolute top-[19%] left-[53%] w-[13px] h-[17px] bg-yellow-300/78 lantern animate-lantern-flicker-10"></div>
            <div className="absolute top-[19%] left-[53%] w-[26px] h-[34px] bg-orange-300/48 lantern-glow animate-lantern-glow-10"></div>
            
            <div className="absolute top-[20%] left-[58%] w-[12px] h-[16px] bg-yellow-300/74 lantern animate-lantern-flicker-11"></div>
            <div className="absolute top-[20%] left-[58%] w-[24px] h-[32px] bg-orange-300/44 lantern-glow animate-lantern-glow-11"></div>
            
            <div className="absolute top-[19%] left-[63%] w-[11px] h-[15px] bg-yellow-300/73 lantern animate-lantern-flicker-12"></div>
            <div className="absolute top-[19%] left-[63%] w-[22px] h-[30px] bg-orange-300/43 lantern-glow animate-lantern-glow-12"></div>
          </div>

          {/* WALL LANTERNS - Left side */}
          <div className="absolute inset-0">
            <div className="absolute top-[30%] left-[13%] w-[10px] h-[14px] bg-yellow-300/70 lantern animate-wall-lantern-1"></div>
            <div className="absolute top-[30%] left-[13%] w-[20px] h-[28px] bg-orange-300/40 lantern-glow animate-wall-lantern-glow-1"></div>
            
            <div className="absolute top-[40%] left-[11%] w-[10px] h-[14px] bg-yellow-300/72 lantern animate-wall-lantern-2"></div>
            <div className="absolute top-[40%] left-[11%] w-[20px] h-[28px] bg-orange-300/42 lantern-glow animate-wall-lantern-glow-2"></div>
            
            <div className="absolute top-[50%] left-[13%] w-[10px] h-[14px] bg-yellow-300/71 lantern animate-wall-lantern-3"></div>
            <div className="absolute top-[50%] left-[13%] w-[20px] h-[28px] bg-orange-300/41 lantern-glow animate-wall-lantern-glow-3"></div>
          </div>

          {/* WALL LANTERNS - Right side */}
          <div className="absolute inset-0">
            <div className="absolute top-[30%] right-[3%] w-[10px] h-[14px] bg-yellow-300/70 lantern animate-wall-lantern-4"></div>
            <div className="absolute top-[30%] right-[3%] w-[20px] h-[28px] bg-orange-300/40 lantern-glow animate-wall-lantern-glow-4"></div>
            
            <div className="absolute top-[40%] right-[1%] w-[10px] h-[14px] bg-yellow-300/72 lantern animate-wall-lantern-5"></div>
            <div className="absolute top-[40%] right-[1%] w-[20px] h-[28px] bg-orange-300/42 lantern-glow animate-wall-lantern-glow-5"></div>
            
            <div className="absolute top-[50%] right-[3%] w-[10px] h-[14px] bg-yellow-300/71 lantern animate-wall-lantern-6"></div>
            <div className="absolute top-[50%] right-[3%] w-[20px] h-[28px] bg-orange-300/41 lantern-glow animate-wall-lantern-glow-6"></div>
          </div>

          {/* STAINED GLASS WINDOW GLOW - Right side */}
          <div className="absolute inset-0">
            <div className="absolute top-[33%] right-[7%] w-[35px] h-[55px] bg-green-400/45 stained-glass animate-stained-glass-1"></div>
            <div className="absolute top-[33%] right-[11%] w-[35px] h-[55px] bg-emerald-400/42 stained-glass animate-stained-glass-2"></div>
            <div className="absolute top-[35%] right-[9%] w-[30px] h-[45px] bg-teal-400/40 stained-glass animate-stained-glass-3"></div>
          </div>

          {/* MIHRAB (Prayer niche) CENTER GLOW */}
          <div className="absolute inset-0">
            <div className="absolute top-[53%] left-[47%] w-[80px] h-[120px] bg-yellow-200/30 mihrab-glow animate-mihrab-glow"></div>
            <div className="absolute top-[55%] left-[49%] w-[60px] h-[100px] bg-amber-200/35 mihrab-inner animate-mihrab-inner"></div>
          </div>

          {/* BOOK LECTERNS - Sacred texts glowing */}
          <div className="absolute inset-0">
            {/* Left lectern */}
            <div className="absolute top-[73%] left-[33%] w-[25px] h-[20px] bg-yellow-200/60 book-glow animate-book-glow-1"></div>
            <div className="absolute top-[73%] left-[33%] w-[35px] h-[30px] bg-amber-200/35 book-outer animate-book-outer-1"></div>
            
            {/* Center lectern */}
            <div className="absolute top-[71%] left-[52%] w-[28px] h-[22px] bg-yellow-200/65 book-glow animate-book-glow-2"></div>
            <div className="absolute top-[71%] left-[52%] w-[38px] h-[32px] bg-amber-200/38 book-outer animate-book-outer-2"></div>
            
            {/* Right lectern */}
            <div className="absolute top-[73%] right-[23%] w-[25px] h-[20px] bg-yellow-200/60 book-glow animate-book-glow-3"></div>
            <div className="absolute top-[73%] right-[23%] w-[35px] h-[30px] bg-amber-200/35 book-outer animate-book-outer-3"></div>
          </div>

          {/* ORNATE CALLIGRAPHY GLOW - Wall decorations */}
          <div className="absolute inset-0">
            {/* Top calligraphy bands */}
            <div className="absolute top-[20%] left-[25%] w-[80px] h-[15px] bg-yellow-300/20 calligraphy animate-calligraphy-glow-1"></div>
            <div className="absolute top-[20%] right-[15%] w-[80px] h-[15px] bg-yellow-300/20 calligraphy animate-calligraphy-glow-2"></div>
            
            {/* Side calligraphy */}
            <div className="absolute top-[40%] left-[17%] w-[50px] h-[12px] bg-amber-300/18 calligraphy animate-calligraphy-glow-3"></div>
            <div className="absolute top-[40%] right-[7%] w-[50px] h-[12px] bg-amber-300/18 calligraphy animate-calligraphy-glow-4"></div>
          </div>

          {/* PRAYER CARPET PATTERN SHIMMER */}
          <div className="absolute inset-0">
            {/* Center carpet glow */}
            <div className="absolute bottom-[3%] left-[43%] w-[60px] h-[40px] bg-red-400/15 carpet-shimmer animate-carpet-shimmer-1"></div>
            <div className="absolute bottom-[5%] left-[50%] w-[55px] h-[35px] bg-orange-400/14 carpet-shimmer animate-carpet-shimmer-2"></div>
            <div className="absolute bottom-[7%] left-[57%] w-[50px] h-[38px] bg-red-400/13 carpet-shimmer animate-carpet-shimmer-3"></div>
          </div>

          {/* CANDLELIGHT - Pulpit/Lectern */}
          <div className="absolute inset-0">
            <div className="absolute top-[63%] left-[51%] w-[8px] h-[12px] bg-yellow-200/85 candle-flame animate-candle-flicker-1"></div>
            <div className="absolute top-[63%] left-[51%] w-[16px] h-[24px] bg-orange-200/50 candle-glow animate-candle-glow-1"></div>
            
            <div className="absolute top-[65%] left-[55%] w-[8px] h-[12px] bg-yellow-200/82 candle-flame animate-candle-flicker-2"></div>
            <div className="absolute top-[65%] left-[55%] w-[16px] h-[24px] bg-orange-200/48 candle-glow animate-candle-glow-2"></div>
          </div>

          {/* ARCHITECTURAL GOLD ACCENTS */}
          <div className="absolute inset-0">
            {/* Column capital sparkles */}
            <div className="absolute top-[47%] left-[30%] w-[5px] h-[5px] bg-yellow-300/80 gold-sparkle animate-gold-sparkle-1"></div>
            <div className="absolute top-[49%] left-[35%] w-[5px] h-[5px] bg-amber-300/78 gold-sparkle animate-gold-sparkle-2"></div>
            <div className="absolute top-[47%] right-[20%] w-[5px] h-[5px] bg-yellow-300/80 gold-sparkle animate-gold-sparkle-3"></div>
            <div className="absolute top-[49%] right-[25%] w-[5px] h-[5px] bg-amber-300/78 gold-sparkle animate-gold-sparkle-4"></div>
          </div>

          {/* AMBIENT DUST PARTICLES - Floating in light beams */}
          <div className="absolute inset-0">
            <div className="absolute top-[30%] left-[40%] w-[2px] h-[2px] bg-amber-200/60 dust-mote animate-dust-float-1"></div>
            <div className="absolute top-[35%] left-[50%] w-[2px] h-[2px] bg-yellow-200/65 dust-mote animate-dust-float-2"></div>
            <div className="absolute top-[40%] left-[55%] w-[2px] h-[2px] bg-amber-200/62 dust-mote animate-dust-float-3"></div>
            <div className="absolute top-[33%] left-[60%] w-[2px] h-[2px] bg-yellow-200/63 dust-mote animate-dust-float-4"></div>
            <div className="absolute top-[37%] left-[65%] w-[2px] h-[2px] bg-amber-200/61 dust-mote animate-dust-float-5"></div>
            <div className="absolute top-[45%] left-[45%] w-[2px] h-[2px] bg-yellow-200/64 dust-mote animate-dust-float-6"></div>
          </div>

          {/* MOONLIGHT THROUGH WINDOWS - Subtle beams */}
          <div className="absolute inset-0">
            <div className="absolute top-[25%] right-[5%] w-[60px] h-[180px] bg-gradient-to-b from-cyan-200/15 via-blue-200/8 to-transparent moon-beam animate-moon-beam-1"></div>
            <div className="absolute top-[27%] right-[13%] w-[50px] h-[160px] bg-gradient-to-b from-blue-200/12 via-cyan-200/6 to-transparent moon-beam animate-moon-beam-2"></div>
          </div>
        </div>
        
        <style jsx>{`
          /* LANTERN EFFECTS */
          .lantern {
            filter: blur(3px);
            box-shadow: 0 0 20px currentColor, 0 0 40px currentColor;
          }
          
          .lantern-glow {
            filter: blur(18px);
          }
          
          /* STAINED GLASS */
          .stained-glass {
            filter: blur(15px);
          }
          
          /* MIHRAB GLOW */
          .mihrab-glow {
            filter: blur(35px);
          }
          
          .mihrab-inner {
            filter: blur(25px);
          }
          
          /* BOOK GLOW */
          .book-glow {
            filter: blur(10px);
            box-shadow: 0 0 25px currentColor, 0 0 50px currentColor;
          }
          
          .book-outer {
            filter: blur(20px);
          }
          
          /* CALLIGRAPHY */
          .calligraphy {
            filter: blur(15px);
          }
          
          /* CARPET SHIMMER */
          .carpet-shimmer {
            filter: blur(25px);
          }
          
          /* CANDLE EFFECTS */
          .candle-flame {
            filter: blur(2px);
            box-shadow: 0 0 15px currentColor, 0 0 30px currentColor;
          }
          
          .candle-glow {
            filter: blur(16px);
          }
          
          /* GOLD SPARKLES */
          .gold-sparkle {
            box-shadow: 0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor;
            filter: blur(0.6px);
          }
          
          /* DUST MOTES */
          .dust-mote {
            box-shadow: 0 0 8px currentColor, 0 0 16px currentColor;
            filter: blur(0.5px);
          }
          
          /* MOON BEAMS */
          .moon-beam {
            filter: blur(25px);
          }
          
          /* ANIMATION STATES */
          .animate-effects .lantern,
          .animate-effects .lantern-glow,
          .animate-effects .stained-glass,
          .animate-effects .mihrab-glow,
          .animate-effects .mihrab-inner,
          .animate-effects .book-glow,
          .animate-effects .book-outer,
          .animate-effects .calligraphy,
          .animate-effects .carpet-shimmer,
          .animate-effects .candle-flame,
          .animate-effects .candle-glow,
          .animate-effects .gold-sparkle,
          .animate-effects .dust-mote,
          .animate-effects .moon-beam {
            animation-play-state: running;
          }
          
          /* CHANDELIER LANTERN FLICKER ANIMATIONS */
          @keyframes lantern-flicker-1 {
            0%, 100% { opacity: 0.75; transform: scale(1); }
            25% { opacity: 0.68; transform: scale(0.96); }
            50% { opacity: 0.82; transform: scale(1.04); }
            75% { opacity: 0.72; transform: scale(0.98); }
          }
          
          @keyframes lantern-flicker-2 {
            0%, 100% { opacity: 0.78; transform: scale(1); }
            22% { opacity: 0.7; transform: scale(0.97); }
            48% { opacity: 0.85; transform: scale(1.05); }
            72% { opacity: 0.74; transform: scale(0.99); }
          }
          
          @keyframes lantern-flicker-3 {
            0%, 100% { opacity: 0.8; transform: scale(1); }
            28% { opacity: 0.72; transform: scale(0.95); }
            54% { opacity: 0.88; transform: scale(1.06); }
            78% { opacity: 0.76; transform: scale(0.98); }
          }
          
          @keyframes lantern-flicker-4 {
            0%, 100% { opacity: 0.77; transform: scale(1); }
            24% { opacity: 0.69; transform: scale(0.96); }
            52% { opacity: 0.84; transform: scale(1.04); }
            76% { opacity: 0.73; transform: scale(0.99); }
          }
          
          @keyframes lantern-flicker-5 {
            0%, 100% { opacity: 0.79; transform: scale(1); }
            26% { opacity: 0.71; transform: scale(0.97); }
            50% { opacity: 0.86; transform: scale(1.05); }
            74% { opacity: 0.75; transform: scale(0.98); }
          }
          
          @keyframes lantern-flicker-6 {
            0%, 100% { opacity: 0.76; transform: scale(1); }
            23% { opacity: 0.68; transform: scale(0.96); }
            49% { opacity: 0.83; transform: scale(1.04); }
            71% { opacity: 0.72; transform: scale(0.99); }
          }
          
          @keyframes lantern-flicker-7 {
            0%, 100% { opacity: 0.75; transform: scale(1); }
            27% { opacity: 0.67; transform: scale(0.95); }
            53% { opacity: 0.82; transform: scale(1.06); }
            77% { opacity: 0.71; transform: scale(0.98); }
          }
          
          @keyframes lantern-flicker-8 {
            0%, 100% { opacity: 0.72; transform: scale(1); }
            25% { opacity: 0.65; transform: scale(0.97); }
            51% { opacity: 0.79; transform: scale(1.04); }
            75% { opacity: 0.69; transform: scale(0.99); }
          }
          
          @keyframes lantern-flicker-9 {
            0%, 100% { opacity: 0.75; transform: scale(1); }
            29% { opacity: 0.68; transform: scale(0.96); }
            55% { opacity: 0.82; transform: scale(1.05); }
            79% { opacity: 0.72; transform: scale(0.98); }
          }
          
          @keyframes lantern-flicker-10 {
            0%, 100% { opacity: 0.78; transform: scale(1); }
            24% { opacity: 0.7; transform: scale(0.97); }
            52% { opacity: 0.85; transform: scale(1.04); }
            76% { opacity: 0.74; transform: scale(0.99); }
          }
          
          @keyframes lantern-flicker-11 {
            0%, 100% { opacity: 0.74; transform: scale(1); }
            26% { opacity: 0.67; transform: scale(0.96); }
            50% { opacity: 0.81; transform: scale(1.05); }
            74% { opacity: 0.71; transform: scale(0.98); }
          }
          
          @keyframes lantern-flicker-12 {
            0%, 100% { opacity: 0.73; transform: scale(1); }
            28% { opacity: 0.66; transform: scale(0.97); }
            54% { opacity: 0.8; transform: scale(1.04); }
            78% { opacity: 0.7; transform: scale(0.99); }
          }
          
          /* LANTERN GLOW ANIMATIONS */
          @keyframes lantern-glow-1 {
            0%, 100% { opacity: 0.45; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.2); }
          }
          
          @keyframes lantern-glow-2 {
            0%, 100% { opacity: 0.48; transform: scale(1); }
            50% { opacity: 0.75; transform: scale(1.25); }
          }
          
          @keyframes lantern-glow-3 {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 0.78; transform: scale(1.22); }
          }
          
          @keyframes lantern-glow-4 {
            0%, 100% { opacity: 0.47; transform: scale(1); }
            50% { opacity: 0.72; transform: scale(1.23); }
          }
          
          @keyframes lantern-glow-5 {
            0%, 100% { opacity: 0.49; transform: scale(1); }
            50% { opacity: 0.76; transform: scale(1.24); }
          }
          
          @keyframes lantern-glow-6 {
            0%, 100% { opacity: 0.46; transform: scale(1); }
            50% { opacity: 0.71; transform: scale(1.21); }
          }
          
          @keyframes lantern-glow-7 {
            0%, 100% { opacity: 0.45; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.2); }
          }
          
          @keyframes lantern-glow-8 {
            0%, 100% { opacity: 0.42; transform: scale(1); }
            50% { opacity: 0.68; transform: scale(1.18); }
          }
          
          @keyframes lantern-glow-9 {
            0%, 100% { opacity: 0.45; transform: scale(1); }
            50% { opacity: 0.72; transform: scale(1.22); }
          }
          
          @keyframes lantern-glow-10 {
            0%, 100% { opacity: 0.48; transform: scale(1); }
            50% { opacity: 0.75; transform: scale(1.24); }
          }
          
          @keyframes lantern-glow-11 {
            0%, 100% { opacity: 0.44; transform: scale(1); }
            50% { opacity: 0.69; transform: scale(1.19); }
          }
          
          @keyframes lantern-glow-12 {
            0%, 100% { opacity: 0.43; transform: scale(1); }
            50% { opacity: 0.67; transform: scale(1.18); }
          }
          
          /* WALL LANTERN ANIMATIONS */
          @keyframes wall-lantern-1 {
            0%, 100% { opacity: 0.7; transform: scale(1); }
            50% { opacity: 0.92; transform: scale(1.08); }
          }
          
          @keyframes wall-lantern-2 {
            0%, 100% { opacity: 0.72; transform: scale(1); }
            50% { opacity: 0.95; transform: scale(1.1); }
          }
          
          @keyframes wall-lantern-3 {
            0%, 100% { opacity: 0.71; transform: scale(1); }
            50% { opacity: 0.93; transform: scale(1.09); }
          }
          
          @keyframes wall-lantern-4 {
            0%, 100% { opacity: 0.7; transform: scale(1); }
            50% { opacity: 0.92; transform: scale(1.08); }
          }
          
          @keyframes wall-lantern-5 {
            0%, 100% { opacity: 0.72; transform: scale(1); }
            50% { opacity: 0.95; transform: scale(1.1); }
          }
          
          @keyframes wall-lantern-6 {
            0%, 100% { opacity: 0.71; transform: scale(1); }
            50% { opacity: 0.93; transform: scale(1.09); }
          }
          
          @keyframes wall-lantern-glow-1 {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 0.65; transform: scale(1.3); }
          }
          
          @keyframes wall-lantern-glow-2 {
            0%, 100% { opacity: 0.42; transform: scale(1); }
            50% { opacity: 0.68; transform: scale(1.32); }
          }
          
          @keyframes wall-lantern-glow-3 {
            0%, 100% { opacity: 0.41; transform: scale(1); }
            50% { opacity: 0.66; transform: scale(1.31); }
          }
          
          @keyframes wall-lantern-glow-4 {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 0.65; transform: scale(1.3); }
          }
          
          @keyframes wall-lantern-glow-5 {
            0%, 100% { opacity: 0.42; transform: scale(1); }
            50% { opacity: 0.68; transform: scale(1.32); }
          }
          
          @keyframes wall-lantern-glow-6 {
            0%, 100% { opacity: 0.41; transform: scale(1); }
            50% { opacity: 0.66; transform: scale(1.31); }
          }
          
          /* STAINED GLASS ANIMATIONS */
          @keyframes stained-glass-1 {
            0%, 100% { opacity: 0.45; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.08); }
          }
          
          @keyframes stained-glass-2 {
            0%, 100% { opacity: 0.42; transform: scale(1); }
            50% { opacity: 0.68; transform: scale(1.06); }
          }
          
          @keyframes stained-glass-3 {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 0.65; transform: scale(1.07); }
          }
          
          /* MIHRAB ANIMATIONS */
          @keyframes mihrab-glow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.15); }
          }
          
          @keyframes mihrab-inner {
            0%, 100% { opacity: 0.35; transform: scale(1); }
            50% { opacity: 0.58; transform: scale(1.12); }
          }
          
          /* BOOK GLOW ANIMATIONS */
          @keyframes book-glow-1 {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 0.88; transform: scale(1.12); }
          }
          
          @keyframes book-glow-2 {
            0%, 100% { opacity: 0.65; transform: scale(1); }
            50% { opacity: 0.92; transform: scale(1.15); }
          }
          
          @keyframes book-glow-3 {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 0.88; transform: scale(1.12); }
          }
          
          @keyframes book-outer-1 {
            0%, 100% { opacity: 0.35; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.2); }
          }
          
          @keyframes book-outer-2 {
            0%, 100% { opacity: 0.38; transform: scale(1); }
            50% { opacity: 0.65; transform: scale(1.22); }
          }
          
          @keyframes book-outer-3 {
            0%, 100% { opacity: 0.35; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.2); }
          }
          
          /* CALLIGRAPHY GLOW ANIMATIONS */
          @keyframes calligraphy-glow-1 {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.38; transform: scale(1.08); }
          }
          
          @keyframes calligraphy-glow-2 {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.38; transform: scale(1.08); }
          }
          
          @keyframes calligraphy-glow-3 {
            0%, 100% { opacity: 0.18; transform: scale(1); }
            50% { opacity: 0.35; transform: scale(1.06); }
          }
          
          @keyframes calligraphy-glow-4 {
            0%, 100% { opacity: 0.18; transform: scale(1); }
            50% { opacity: 0.35; transform: scale(1.06); }
          }
          
          /* CARPET SHIMMER ANIMATIONS */
          @keyframes carpet-shimmer-1 {
            0%, 100% { opacity: 0.15; transform: scale(1); }
            50% { opacity: 0.28; transform: scale(1.1); }
          }
          
          @keyframes carpet-shimmer-2 {
            0%, 100% { opacity: 0.14; transform: scale(1); }
            50% { opacity: 0.26; transform: scale(1.08); }
          }
          
          @keyframes carpet-shimmer-3 {
            0%, 100% { opacity: 0.13; transform: scale(1); }
            50% { opacity: 0.25; transform: scale(1.09); }
          }
          
          /* CANDLE FLICKER ANIMATIONS */
          @keyframes candle-flicker-1 {
            0%, 100% { opacity: 0.85; transform: scale(1) translateY(0); }
            15% { opacity: 0.78; transform: scale(0.95) translateY(-2px); }
            30% { opacity: 0.92; transform: scale(1.05) translateY(1px); }
            45% { opacity: 0.82; transform: scale(0.98) translateY(-1px); }
            60% { opacity: 0.88; transform: scale(1.02) translateY(0.5px); }
            75% { opacity: 0.8; transform: scale(0.96) translateY(-1.5px); }
          }
          
          @keyframes candle-flicker-2 {
            0%, 100% { opacity: 0.82; transform: scale(1) translateY(0); }
            18% { opacity: 0.75; transform: scale(0.94) translateY(-2px); }
            33% { opacity: 0.9; transform: scale(1.06) translateY(1px); }
            48% { opacity: 0.79; transform: scale(0.97) translateY(-1px); }
            63% { opacity: 0.86; transform: scale(1.03) translateY(0.5px); }
            78% { opacity: 0.77; transform: scale(0.95) translateY(-1.5px); }
          }
          
          @keyframes candle-glow-1 {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 0.75; transform: scale(1.15); }
          }
          
          @keyframes candle-glow-2 {
            0%, 100% { opacity: 0.48; transform: scale(1); }
            50% { opacity: 0.72; transform: scale(1.12); }
          }
          
          /* GOLD SPARKLE ANIMATIONS */
          @keyframes gold-sparkle-1 {
            0%, 60%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            65%, 75% { opacity: 0.8; transform: scale(2) rotate(360deg); }
            70% { opacity: 0.5; transform: scale(1.6) rotate(180deg); }
          }
          
          @keyframes gold-sparkle-2 {
            0%, 65%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            70%, 80% { opacity: 0.78; transform: scale(1.9) rotate(360deg); }
            75% { opacity: 0.48; transform: scale(1.5) rotate(180deg); }
          }
          
          @keyframes gold-sparkle-3 {
            0%, 62%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            67%, 77% { opacity: 0.8; transform: scale(2) rotate(360deg); }
            72% { opacity: 0.5; transform: scale(1.6) rotate(180deg); }
          }
          
          @keyframes gold-sparkle-4 {
            0%, 68%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
            73%, 83% { opacity: 0.78; transform: scale(1.9) rotate(360deg); }
            78% { opacity: 0.48; transform: scale(1.5) rotate(180deg); }
          }
          
          /* DUST FLOAT ANIMATIONS */
          @keyframes dust-float-1 {
            0%, 100% { opacity: 0; transform: translateY(0) translateX(0); }
            50% { opacity: 0.6; transform: translateY(-50px) translateX(15px); }
          }
          
          @keyframes dust-float-2 {
            0%, 100% { opacity: 0; transform: translateY(0) translateX(0); }
            50% { opacity: 0.65; transform: translateY(-45px) translateX(-12px); }
          }
          
          @keyframes dust-float-3 {
            0%, 100% { opacity: 0; transform: translateY(0) translateX(0); }
            50% { opacity: 0.62; transform: translateY(-55px) translateX(18px); }
          }
          
          @keyframes dust-float-4 {
            0%, 100% { opacity: 0; transform: translateY(0) translateX(0); }
            50% { opacity: 0.63; transform: translateY(-48px) translateX(-14px); }
          }
          
          @keyframes dust-float-5 {
            0%, 100% { opacity: 0; transform: translateY(0) translateX(0); }
            50% { opacity: 0.61; transform: translateY(-52px) translateX(16px); }
          }
          
          @keyframes dust-float-6 {
            0%, 100% { opacity: 0; transform: translateY(0) translateX(0); }
            50% { opacity: 0.64; transform: translateY(-50px) translateX(-13px); }
          }
          
          /* MOON BEAM ANIMATIONS */
          @keyframes moon-beam-1 {
            0%, 100% { opacity: 0.15; transform: scaleY(1); }
            50% { opacity: 0.28; transform: scaleY(1.05); }
          }
          
          @keyframes moon-beam-2 {
            0%, 100% { opacity: 0.12; transform: scaleY(1); }
            50% { opacity: 0.24; transform: scaleY(1.04); }
          }
          
          /* ANIMATION CLASS ASSIGNMENTS */
          .animate-lantern-flicker-1 { animation: lantern-flicker-1 3s ease-in-out infinite; }
          .animate-lantern-flicker-2 { animation: lantern-flicker-2 3.2s ease-in-out infinite 0.2s; }
          .animate-lantern-flicker-3 { animation: lantern-flicker-3 3.5s ease-in-out infinite 0.4s; }
          .animate-lantern-flicker-4 { animation: lantern-flicker-4 3.3s ease-in-out infinite 0.6s; }
          .animate-lantern-flicker-5 { animation: lantern-flicker-5 3.1s ease-in-out infinite 0.8s; }
          .animate-lantern-flicker-6 { animation: lantern-flicker-6 3.4s ease-in-out infinite 1s; }
          .animate-lantern-flicker-7 { animation: lantern-flicker-7 3.6s ease-in-out infinite 0.3s; }
          .animate-lantern-flicker-8 { animation: lantern-flicker-8 3.2s ease-in-out infinite 0.5s; }
          .animate-lantern-flicker-9 { animation: lantern-flicker-9 3.7s ease-in-out infinite 0.7s; }
          .animate-lantern-flicker-10 { animation: lantern-flicker-10 3.3s ease-in-out infinite 0.9s; }
          .animate-lantern-flicker-11 { animation: lantern-flicker-11 3.5s ease-in-out infinite 0.4s; }
          .animate-lantern-flicker-12 { animation: lantern-flicker-12 3.4s ease-in-out infinite 0.6s; }
          
          .animate-lantern-glow-1 { animation: lantern-glow-1 4s ease-in-out infinite; }
          .animate-lantern-glow-2 { animation: lantern-glow-2 4.2s ease-in-out infinite 0.3s; }
          .animate-lantern-glow-3 { animation: lantern-glow-3 4.5s ease-in-out infinite 0.6s; }
          .animate-lantern-glow-4 { animation: lantern-glow-4 4.3s ease-in-out infinite 0.9s; }
          .animate-lantern-glow-5 { animation: lantern-glow-5 4.1s ease-in-out infinite 1.2s; }
          .animate-lantern-glow-6 { animation: lantern-glow-6 4.4s ease-in-out infinite 0.5s; }
          .animate-lantern-glow-7 { animation: lantern-glow-7 4.6s ease-in-out infinite 0.8s; }
          .animate-lantern-glow-8 { animation: lantern-glow-8 4.2s ease-in-out infinite 0.4s; }
          .animate-lantern-glow-9 { animation: lantern-glow-9 4.7s ease-in-out infinite 0.7s; }
          .animate-lantern-glow-10 { animation: lantern-glow-10 4.3s ease-in-out infinite 1s; }
          .animate-lantern-glow-11 { animation: lantern-glow-11 4.5s ease-in-out infinite 0.6s; }
          .animate-lantern-glow-12 { animation: lantern-glow-12 4.4s ease-in-out infinite 0.9s; }
          
          .animate-wall-lantern-1 { animation: wall-lantern-1 3.5s ease-in-out infinite; }
          .animate-wall-lantern-2 { animation: wall-lantern-2 3.8s ease-in-out infinite 0.5s; }
          .animate-wall-lantern-3 { animation: wall-lantern-3 3.6s ease-in-out infinite 1s; }
          .animate-wall-lantern-4 { animation: wall-lantern-4 3.7s ease-in-out infinite 0.3s; }
          .animate-wall-lantern-5 { animation: wall-lantern-5 3.9s ease-in-out infinite 0.8s; }
          .animate-wall-lantern-6 { animation: wall-lantern-6 3.6s ease-in-out infinite 1.2s; }
          
          .animate-wall-lantern-glow-1 { animation: wall-lantern-glow-1 4.5s ease-in-out infinite; }
          .animate-wall-lantern-glow-2 { animation: wall-lantern-glow-2 4.8s ease-in-out infinite 0.5s; }
          .animate-wall-lantern-glow-3 { animation: wall-lantern-glow-3 4.6s ease-in-out infinite 1s; }
          .animate-wall-lantern-glow-4 { animation: wall-lantern-glow-4 4.7s ease-in-out infinite 0.3s; }
          .animate-wall-lantern-glow-5 { animation: wall-lantern-glow-5 4.9s ease-in-out infinite 0.8s; }
          .animate-wall-lantern-glow-6 { animation: wall-lantern-glow-6 4.6s ease-in-out infinite 1.2s; }
          
          .animate-stained-glass-1 { animation: stained-glass-1 6s ease-in-out infinite; }
          .animate-stained-glass-2 { animation: stained-glass-2 6.5s ease-in-out infinite 1s; }
          .animate-stained-glass-3 { animation: stained-glass-3 6.2s ease-in-out infinite 2s; }
          
          .animate-mihrab-glow { animation: mihrab-glow 8s ease-in-out infinite; }
          .animate-mihrab-inner { animation: mihrab-inner 7s ease-in-out infinite 1s; }
          
          .animate-book-glow-1 { animation: book-glow-1 5s ease-in-out infinite; }
          .animate-book-glow-2 { animation: book-glow-2 5.5s ease-in-out infinite 0.5s; }
          .animate-book-glow-3 { animation: book-glow-3 5.2s ease-in-out infinite 1s; }
          
          .animate-book-outer-1 { animation: book-outer-1 6s ease-in-out infinite; }
          .animate-book-outer-2 { animation: book-outer-2 6.5s ease-in-out infinite 0.5s; }
          .animate-book-outer-3 { animation: book-outer-3 6.2s ease-in-out infinite 1s; }
          
          .animate-calligraphy-glow-1 { animation: calligraphy-glow-1 8s ease-in-out infinite; }
          .animate-calligraphy-glow-2 { animation: calligraphy-glow-2 8.5s ease-in-out infinite 1s; }
          .animate-calligraphy-glow-3 { animation: calligraphy-glow-3 8.2s ease-in-out infinite 2s; }
          .animate-calligraphy-glow-4 { animation: calligraphy-glow-4 8.7s ease-in-out infinite 3s; }
          
          .animate-carpet-shimmer-1 { animation: carpet-shimmer-1 10s ease-in-out infinite; }
          .animate-carpet-shimmer-2 { animation: carpet-shimmer-2 11s ease-in-out infinite 2s; }
          .animate-carpet-shimmer-3 { animation: carpet-shimmer-3 10.5s ease-in-out infinite 4s; }
          
          .animate-candle-flicker-1 { animation: candle-flicker-1 2.5s ease-in-out infinite; }
          .animate-candle-flicker-2 { animation: candle-flicker-2 2.8s ease-in-out infinite 0.5s; }
          
          .animate-candle-glow-1 { animation: candle-glow-1 3s ease-in-out infinite; }
          .animate-candle-glow-2 { animation: candle-glow-2 3.3s ease-in-out infinite 0.5s; }
          
          .animate-gold-sparkle-1 { animation: gold-sparkle-1 8s linear infinite; }
          .animate-gold-sparkle-2 { animation: gold-sparkle-2 9s linear infinite 2s; }
          .animate-gold-sparkle-3 { animation: gold-sparkle-3 8.5s linear infinite 4s; }
          .animate-gold-sparkle-4 { animation: gold-sparkle-4 9.5s linear infinite 6s; }
          
          .animate-dust-float-1 { animation: dust-float-1 15s ease-in-out infinite; }
          .animate-dust-float-2 { animation: dust-float-2 17s ease-in-out infinite 2s; }
          .animate-dust-float-3 { animation: dust-float-3 16s ease-in-out infinite 4s; }
          .animate-dust-float-4 { animation: dust-float-4 18s ease-in-out infinite 1s; }
          .animate-dust-float-5 { animation: dust-float-5 15.5s ease-in-out infinite 6s; }
          .animate-dust-float-6 { animation: dust-float-6 17.5s ease-in-out infinite 3s; }
          
          .animate-moon-beam-1 { animation: moon-beam-1 12s ease-in-out infinite; }
          .animate-moon-beam-2 { animation: moon-beam-2 14s ease-in-out infinite 3s; }
        `}</style>
      </div>
    </Card>
  );
}

