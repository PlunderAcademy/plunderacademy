"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AnimatedAchievementCardProps {
  achievementNumber: string; // "0001", "0002", etc.
  animation?: "none" | "wobble" | "pulse" | "float" | "spin" | "glow" | "shake" | "swing" | "heartbeat" | "elastic" | "tada" | "flip" | "breathe";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  children?: React.ReactNode; // For hover overlays
  onClick?: () => void;
  alt?: string;
}

export function AnimatedAchievementCard({
  achievementNumber,
  animation, // Remove default - will be auto-assigned
  size = "md",
  className,
  children,
  onClick,
  alt = "Achievement Card"
}: AnimatedAchievementCardProps) {
  // Available animation options: none, wobble, pulse, float, spin, glow, shake, swing, heartbeat, elastic, tada, flip, breathe
  // Achievement-specific animation mapping
  const getDefaultAnimation = (number: string): AnimatedAchievementCardProps["animation"] => {
    switch (number) {
      case "0001": return "wobble"; 
      case "0002": return "pulse";  
      case "0003": return "elastic";
      case "0004": return "flip";
      case "0005": return "tada";
      default: return "wobble";
    }
  };

  // Use provided animation or auto-assign based on achievement number
  const effectiveAnimation = animation ?? getDefaultAnimation(achievementNumber);

  // Size configurations
  const sizeConfig = {
    sm: { width: 160, height: 212, container: "w-40 h-53" },
    md: { width: 240, height: 318, container: "w-60 h-80" },
    lg: { width: 320, height: 425, container: "w-80 h-[425px]" },
    xl: { width: 400, height: 531, container: "w-[400px] h-[531px]" }
  };

  const config = sizeConfig[size];

  // Animation class mappings - all animations applied only to trinket layer
  const getAnimationClass = (layer: "trinket" | "polygon") => {
    if (effectiveAnimation === "none" || layer !== "trinket") return "";
    
    switch (effectiveAnimation) {
      case "wobble":
        return "animate-drunk-wobble group-hover:animate-drunk-wobble-intense";
      case "pulse":
        return "animate-pulse group-hover:animate-pulse-fast";
      case "float":
        return "animate-bounce group-hover:animate-bounce-fast";
      case "spin":
        return "animate-spin-slow group-hover:animate-spin";
      case "glow":
        return "animate-pulse group-hover:animate-ping";
      case "shake":
        return "animate-shake group-hover:animate-shake-intense";
      case "swing":
        return "animate-swing group-hover:animate-swing-fast";
      case "heartbeat":
        return "animate-heartbeat group-hover:animate-heartbeat-fast";
      case "elastic":
        return "animate-elastic group-hover:animate-elastic-intense";
      case "tada":
        return "animate-tada group-hover:animate-tada-repeat";
      case "flip":
        return "animate-flip group-hover:animate-flip-fast";
      case "breathe":
        return "animate-breathe group-hover:animate-breathe-deep";
      default:
        return "";
    }
  };

  // Image URLs
  const baseUrl = "https://static.plunderswap.com/training/images";
  const cardBackUrl = `${baseUrl}/${achievementNumber}-plain-card.webp`;
  const polygonCardUrl = `${baseUrl}/${achievementNumber}-poly-card.webp`;
  const trinketUrl = `${baseUrl}/${achievementNumber}-trinket.webp`;
  const fallbackUrl = `${baseUrl}/${achievementNumber}.webp`; // Original static image

  // Check if className contains w-full (responsive mode)
  const isResponsive = className?.includes("w-full");
  
  return (
    <div 
      className={cn(
        "relative group cursor-pointer transition-transform hover:scale-105",
        isResponsive ? "" : config.container, // Skip fixed sizing if w-full is used
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {/* Base Card Layer */}
      <div className="absolute inset-0">
        <Image
          src={cardBackUrl}
          alt={`${alt} - Base Card`}
          {...(isResponsive 
            ? { fill: true, className: "object-contain" }
            : { width: config.width, height: config.height, className: "w-full h-full object-contain" }
          )}
          onError={(e) => {
            // Fallback to original static image if layered assets fail
            const target = e.target as HTMLImageElement;
            target.src = fallbackUrl;
          }}
          unoptimized
          priority
        />
      </div>

      {/* Polygon/Glow Layer */}
      <div className="absolute inset-0">
        <Image
          src={polygonCardUrl}
          alt={`${alt} - Glow Effect`}
          {...(isResponsive 
            ? { fill: true }
            : { width: config.width, height: config.height }
          )}
          className={cn(
            isResponsive ? "object-contain" : "w-full h-full object-contain",
            "opacity-70 group-hover:opacity-90 transition-opacity duration-300",
            getAnimationClass("polygon")
          )}
          onError={(e) => {
            // Hide this layer if it fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
          unoptimized
        />
      </div>

      {/* Trinket/Center Animation Layer */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={cn("relative", isResponsive ? "w-full h-full" : config.container)}>
          <Image
            src={trinketUrl}
            alt={`${alt} - Trinket`}
            {...(isResponsive 
              ? { fill: true }
              : { width: config.width, height: config.height }
            )}
            className={cn(
              isResponsive ? "absolute inset-0 object-contain" : "absolute inset-0 w-full h-full object-contain",
              getAnimationClass("trinket")
            )}
            onError={(e) => {
              // Hide this layer if it fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
            unoptimized
          />
        </div>
      </div>

      {/* Interactive Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent group-hover:from-primary/10 group-hover:via-transparent group-hover:to-primary/10 transition-all duration-300 rounded-lg" />

      {/* Custom overlay content (like hover cards) */}
      {children}
    </div>
  );
}

// Export animation options for external use
export const ANIMATION_OPTIONS = [
  { value: "none", label: "Static" },
  { value: "wobble", label: "Drunk Wobble" },
  { value: "pulse", label: "Pulse" },
  { value: "float", label: "Float" },
  { value: "spin", label: "Spin" },
  { value: "glow", label: "Glow" },
  { value: "shake", label: "Shake" },
  { value: "swing", label: "Swing" },
  { value: "heartbeat", label: "Heartbeat" },
  { value: "elastic", label: "Elastic" },
  { value: "tada", label: "Celebration" },
  { value: "flip", label: "Flip" },
  { value: "breathe", label: "Breathe" }
] as const;

export type AnimationType = typeof ANIMATION_OPTIONS[number]["value"];
