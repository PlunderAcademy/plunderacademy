"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import { ModuleMeta } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { CheckCircle2, BookOpen, Shield, Gauge, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAchievements } from "@/hooks/use-achievements";
import { ALL_ACHIEVEMENTS, type Achievement } from "@/lib/achievements-config";
import { config } from "@/lib/config";

// Coordinates for the path points (as percentages of the map dimensions)
// Updated to match the image layout with 5 numbered locations
// progress: exact percentage of path line to draw to reach this location
const pathPoints = [
  { x: 30, y: 75, label: "Location 1", progress: 0 },   // Right of the boat
  { x: 28, y: 30, label: "Location 2", progress: 30 },   // In front of wood house
  { x: 73, y: 25, label: "Location 3", progress: 63 },   // Castle door
  { x: 57, y: 45, label: "Location 4", progress: 80 },   // Base of right side of temple
  { x: 72, y: 70, label: "Location 5", progress: 100 },  // Center of monument
];

// Treasure chest coordinates (over the existing chest in the image, slightly down and left from location 4)
const treasureChestPosition = { x: 55, y: 59 };

// Create curved path string for SVG
const createPathString = (points: typeof pathPoints) => {
  if (points.length === 0) return '';
  
  let path = `M ${points[0].x} ${points[0].y}`;
  
  for (let i = 1; i < points.length; i++) {
    const current = points[i];
    const previous = points[i - 1];
    
    // Calculate control points for smooth curves
    const midX = (previous.x + current.x) / 2;
    const midY = (previous.y + current.y) / 2;
    
    // Add some curve offset for more natural path
    let offsetX = (current.y - previous.y) * 0.2;
    let offsetY = (previous.x - current.x) * 0.2;
    
    // Invert curve between points 1 and 2 (array indices 0 and 1)
    if (i === 1) {
      offsetX = -offsetX;
      offsetY = -offsetY;
    }
    
    // Use quadratic curve with calculated control point
    path += ` Q ${midX + offsetX} ${midY + offsetY} ${current.x} ${current.y}`;
  }
  
  return path;
};

// These interfaces are now imported from the shared config

// Module slugs mapping to jungle modules in order
export const JUNGLE_MODULES = [
  'blockchain-fundamentals',
  'evm-fundamentals', 
  'intro-to-solidity',
  'zilliqa-evm-setup',
  'creating-erc20-tokens'
];

type MarkerState = "completed" | "next" | "available" | "locked";

const getMarkerVisual = (state: MarkerState) => {
  switch (state) {
    case "completed":
      return {
        fill: "#16a34a",
        stroke: "#065f46",
        text: "#f8fafc",
        halo: "rgba(74, 222, 128, 0.35)",
        shadow: "0 0 12px rgba(74, 222, 128, 0.55)",
      };
    case "next":
      return {
        fill: "#f97316",
        stroke: "#9a3412",
        text: "#fff7ed",
        halo: "rgba(251, 146, 60, 0.4)",
        shadow: "0 0 14px rgba(251, 146, 60, 0.6)",
      };
    case "available":
      return {
        fill: "#2563eb",
        stroke: "#1e3a8a",
        text: "#eff6ff",
        halo: "rgba(37, 99, 235, 0.35)",
        shadow: "0 0 10px rgba(59, 130, 246, 0.45)",
      };
    case "locked":
    default:
      return {
        fill: "#1f2937",
        stroke: "#0f172a",
        text: "#cbd5f5",
        halo: "rgba(148, 163, 184, 0.25)",
        shadow: "0 0 8px rgba(148, 163, 184, 0.25)",
        opacity: 0.75,
      };
  }
};

interface AnimatedMapProps {
  autoStart?: boolean;
  mode?: "demo" | "real"; // New prop to switch between demo and real data
  modules?: ModuleMeta[]; // Module data passed from server component
  highlightedModuleSlug?: string | null;
}

export function AnimatedMap({
  autoStart = false,
  mode = "demo",
  modules = [],
  highlightedModuleSlug = null,
}: AnimatedMapProps) {
  const router = useRouter();
  const { address, isConnected } = useAccount();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  
  // Use shared achievement hook
  const { walletAchievements, achievementMetadata } = useAchievements();
  
  // Local state for map-specific logic
  const [completedLocations, setCompletedLocations] = useState<Set<number>>(new Set());
  
  // Treasure hunt state
  const [treasureClicks, setTreasureClicks] = useState(0);
  const [treasureFound, setTreasureFound] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmittingSecret, setIsSubmittingSecret] = useState(false);
  const [secretError, setSecretError] = useState<string | null>(null);
  const [showDirtParticles, setShowDirtParticles] = useState(false);
  
  // No modal needed - info shown on image hover

  // Animation timing
  const animationDuration = 8000; // 8 seconds total

  // Secret achievement submission function
  const submitSecretAchievement = async () => {
    if (!address) {
      setSecretError('Please connect your wallet to claim this secret');
      return;
    }
    
    setIsSubmittingSecret(true);
    setSecretError(null);
    
    const requestPayload = {
      walletAddress: address,
      achievementNumber: "1001",
      submissionType: "secret",
      submissionData: {
        secretAnswer: "FIRSTSECRET"
      },
      metadata: {
        timestamp: new Date().toISOString(),
        discoveryMethod: "treasure_hunt"
      }
    };
    
    try {
      const response = await fetch(`${config.apiBaseUrl}/api/v1/vouchers/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestPayload),
      });
      
      const responseText = await response.text();
      let apiResult;
      
      try {
        apiResult = JSON.parse(responseText);
      } catch {
        throw new Error(`API returned invalid JSON. Status: ${response.status}`);
      }
      
      if (response.ok && apiResult.success) {
        // Success! Fresh treasure discovery
        setTreasureFound(true);
        setShowSuccessModal(true);
        // Refresh achievement data to pick up the new voucher
        window.dispatchEvent(new CustomEvent('achievementClaimed', { 
          detail: { timestamp: Date.now() } 
        }));
      } else {
        // Check if this is an "already completed" error - treat as success
        const errorMessage = apiResult.error || 'Failed to claim secret achievement';
        if (errorMessage.toLowerCase().includes('already completed') || 
            errorMessage.toLowerCase().includes('already claimed') ||
            errorMessage.toLowerCase().includes('already exists')) {
          // This is actually a success case - they already found the treasure
          // Just show sparkles, no modal since they've seen the success before
          setTreasureFound(true);
          setShowSuccessModal(false);
          return;
        }
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error('Error submitting secret achievement:', error);
      setSecretError(error instanceof Error ? error.message : 'Failed to claim secret achievement');
    } finally {
      setIsSubmittingSecret(false);
    }
  };

  // Play digging sound effect
  const playDigSound = () => {
    try {
      // Create a simple digging sound using Web Audio API
      const AudioContextClass = window.AudioContext || (window as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;
      
      const audioContext = new AudioContextClass();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Create a "thud" sound
      oscillator.frequency.setValueAtTime(100, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(50, audioContext.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.2);
    } catch {
      // Fallback - no sound if Web Audio API not available
      console.log('Audio not available');
    }
  };

  // Handle treasure chest clicks
  const handleTreasureClick = async () => {
    if (!address || treasureFound || isSubmittingSecret) return;
    
    const newClickCount = treasureClicks + 1;
    setTreasureClicks(newClickCount);
    
    // Play digging sound
    playDigSound();
    
    // Show quick dirt particle animation
    setShowDirtParticles(true);
    
    // Reset animations quickly
    setTimeout(() => {
      setShowDirtParticles(false);
    }, 600);
    
    // On 4th click, submit the secret achievement
    if (newClickCount >= 4) {
      await submitSecretAchievement();
    }
  };

  // Helper functions for category styling
  const getCategoryIcon = (category: Achievement["category"]) => {
    switch (category) {
      case "security": return <Shield className="size-4" />;
      case "gas": return <Gauge className="size-4" />;
      case "fundamentals": return <BookOpen className="size-4" />;
      case "advanced": return <Trophy className="size-4" />;
    }
  };

  const getCategoryColor = (category: Achievement["category"]) => {
    switch (category) {
      case "security": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "gas": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "fundamentals": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "advanced": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
    }
  };


  // Update map progress based on shared achievement data
  useEffect(() => {
    if (address && isConnected && mode === "real" && walletAchievements.length >= 0) {
      // Map achievements to locations (taskCode 1-5 corresponds to locations 0-4 in our array)
      const completed = new Set<number>();
      let maxLocation = 0;
      
      // Check for secret achievement (taskCode 1001)
      const hasSecretAchievement = walletAchievements.some(achievement => 
        achievement.isClaimed && achievement.tokenId === 1001
      );
      
      if (hasSecretAchievement) {
        setTreasureFound(true);
      }
      
      walletAchievements.forEach(achievement => {
        if (achievement.isClaimed && achievement.tokenId >= 1 && achievement.tokenId <= 5) {
          // taskCode/tokenId 1-5 maps to array indices 0-4 (no start position)
          completed.add(achievement.tokenId - 1);
          maxLocation = Math.max(maxLocation, achievement.tokenId - 1);
        }
      });
      
      setCompletedLocations(completed);
      // Show progress line to the NEXT module after the last completed one
      if (maxLocation >= 0 && completed.size > 0) {
        // If we've completed modules, show path to the next one
        const nextModuleIndex = maxLocation + 1;
        if (nextModuleIndex < pathPoints.length) {
          // Show path to next module
          const targetProgress = pathPoints[nextModuleIndex]?.progress || 0;
          setProgress(targetProgress);
          setCurrentStep(nextModuleIndex);
        } else {
          // All modules completed, show full path
          setProgress(100);
          setCurrentStep(pathPoints.length - 1);
        }
      } else {
        // No modules completed yet, start at the beginning
        setProgress(0);
        setCurrentStep(0);
      }
    } else {
      // Reset progress when wallet disconnects or in demo mode
      setProgress(0);
      setCurrentStep(0);
      setCompletedLocations(new Set());
      setTreasureFound(false); // Reset treasure when disconnecting
      setShowSuccessModal(false); // Reset modal
    }
  }, [address, isConnected, mode, walletAchievements]);


  // Handle autoStart prop
  useEffect(() => {
    if (autoStart && progress === 0) {
      setIsPlaying(true);
    }
  }, [autoStart, progress]);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + (100 / animationDuration) * 50; // Update every 50ms
        
        if (newProgress >= 100) {
          setIsPlaying(false);
          setCurrentStep(pathPoints.length - 1);
          return 100;
        }
        
        // Find which step we should be on based on progress values
        let newStep = 0;
        for (let i = 0; i < pathPoints.length; i++) {
          if (newProgress >= pathPoints[i].progress) {
            newStep = i;
          } else {
            break;
          }
        }
        setCurrentStep(newStep);
        
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isPlaying]);


  const getLocationStatus = (locationIndex: number) => {
    if (mode === "demo") {
      return locationIndex <= currentStep ? "completed" : "pending";
    } else {
      // For real mode: check if this achievement is claimed
      return completedLocations.has(locationIndex) ? "completed" : "pending";
    }
  };

  // Helper function to determine if a module is available (sequential access)
  const isModuleAvailable = (locationIndex: number) => {
    if (mode === "demo") return true;
    
    // Module 1 is always available
    if (locationIndex === 0) return true;
    
    // For subsequent modules, check if previous module is completed
    return completedLocations.has(locationIndex - 1);
  };

  // Helper function to get the next available module for CTA styling
  const getNextAvailableModule = () => {
    if (mode === "demo") return 0;
    
    for (let i = 0; i < 5; i++) {
      if (!completedLocations.has(i) && isModuleAvailable(i)) {
        return i;
      }
    }
    return -1; // All completed
  };

  // Helper function to get module background image
  const getModuleImage = (moduleIndex: number) => {
    return `/islands/island1/island1-module${moduleIndex + 1}-image.webp`;
  };

  const pathString = createPathString(pathPoints);

  const nextAvailableModule = getNextAvailableModule();
  const MARKER_RADIUS = 2.4;
  const HALO_RADIUS = 3.2;

  return (
    <div className="w-full space-y-6">
      {/* Map Container */}
      <div className="relative mx-auto w-full overflow-hidden rounded-xl">
        <div
          className="relative mx-auto w-full"
          style={{ aspectRatio: "800 / 1328", maxHeight: "80vh" }}
        >
          {/* Map Image */}
          <Image
            src="/islands/island1/island1-map.webp"
            alt="Jungle Island Map"
            fill
            className="object-contain"
            priority
          />
          
          {/* SVG Overlay for path and markers */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Define the animated dashed line */}
            <defs>
              <style>
                {`
                  @keyframes dash-flow {
                    from {
                      stroke-dashoffset: 6;
                    }
                    to {
                      stroke-dashoffset: 0;
                    }
                  }
                  
                  @keyframes fly-up {
                    0% {
                      opacity: 1;
                      r: 0.3;
                    }
                    50% {
                      opacity: 0.8;
                      r: 0.2;
                    }
                    100% {
                      opacity: 0;
                      r: 0.1;
                    }
                  }
                  
                  .animated-path {
                    stroke: #ef4444;
                    stroke-width: 1.2;
                    stroke-dasharray: 3 3;
                    stroke-linecap: round;
                    fill: none;
                    animation: dash-flow 1s linear infinite;
                  }
                  
                  .progress-mask {
                    stroke: none;
                    fill: white;
                  }
                `}
              </style>
              <mask id="progress-mask">
                <rect width="100" height="100" fill="black" />
                <path
                  d={pathString}
                  stroke="white"
                  strokeWidth="3"
                  fill="none"
                  pathLength="100"
                  strokeDasharray={`${progress} ${100 - progress}`}
                  strokeDashoffset="0"
                />
              </mask>
            </defs>
            
            {/* Background path (full route, barely visible) */}
            <path
              d={pathString}
              stroke="#ef444420"
              strokeWidth="0.5"
              strokeDasharray="1 1"
              fill="none"
            />
            
            {/* Animated dotted path showing progress */}
            <path
              d={pathString}
              className="animated-path"
              mask="url(#progress-mask)"
            />
            
            {/* Location markers */}
            {pathPoints.map((point, index) => {
              const moduleSlug = JUNGLE_MODULES[index] ?? modules[index]?.slug ?? null;
              const locationStatus = getLocationStatus(index);
              const isActive = index === currentStep && isPlaying;
              const isCompleted = locationStatus === "completed";
              const isAvailable = isModuleAvailable(index);
              const isNextModule = nextAvailableModule === index;
              const isHighlighted = moduleSlug ? highlightedModuleSlug === moduleSlug : false;
              const markerState: MarkerState = isCompleted
                ? "completed"
                : isNextModule && isAvailable
                ? "next"
                : isAvailable
                ? "available"
                : "locked";
              const markerVisual = getMarkerVisual(markerState);
              const circleRadius = isHighlighted ? MARKER_RADIUS + 0.5 : MARKER_RADIUS;
              const haloRadius = isHighlighted ? HALO_RADIUS + 0.8 : HALO_RADIUS;
              const haloOpacityBase = markerState === "locked" ? 0.25 : 0.5;
              const haloOpacity = Math.min(1, haloOpacityBase + (isHighlighted ? 0.2 : 0));
              
              const markerContent = (
                <g key={index}>
                  {/* Halo */}
                  {markerVisual.halo && (
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r={haloRadius}
                      fill={markerVisual.halo}
                      opacity={haloOpacity}
                      style={{ transition: "all 200ms ease" }}
                      pointerEvents="none"
                    />
                  )}
                  {isHighlighted && (
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r={circleRadius + 1}
                      fill="none"
                      stroke={markerVisual.stroke}
                      strokeWidth="0.7"
                      strokeOpacity={0.65}
                      style={{ transition: "all 200ms ease" }}
                      pointerEvents="none"
                    />
                  )}
                  
                  {/* Location dot */}
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r={circleRadius}
                    className={cn(
                      "transition-all duration-500",
                      isActive && "animate-pulse",
                      isAvailable && "cursor-pointer"
                    )}
                    strokeWidth="0.7"
                    style={{
                      fill: markerVisual.fill,
                      stroke: markerVisual.stroke,
                      filter: `drop-shadow(${markerVisual.shadow})`,
                      opacity: markerVisual.opacity ?? 1,
                      transition: "all 200ms ease",
                    }}
                  />
                  
                  {/* Location number or checkmark */}
                  <text
                    x={point.x}
                    y={point.y}
                    className="select-none text-center font-bold"
                    textAnchor="middle"
                    fontSize={isHighlighted ? 2.7 : 2.4}
                    dominantBaseline="central"
                    style={{
                      fill: markerVisual.text,
                      pointerEvents: "none",
                    }}
                  >
                    {mode === "real" && isCompleted ? "✓" : index + 1}
                  </text>
                </g>
              );

              return markerContent;
            })}
            
            {/* Hidden Treasure Area (Secret Achievement) */}
            {address && !treasureFound && (
              <g>
                {/* Dirt particles animation */}
                {showDirtParticles && (
                  <>
                    {/* Main dirt chunks */}
                    <circle
                      cx={treasureChestPosition.x - 0.3}
                      cy={treasureChestPosition.y - 0.5}
                      r="0.3"
                      className="fill-amber-700"
                      style={{
                        animation: 'fly-up 0.6s ease-out forwards',
                        animationDelay: '0s'
                      }}
                    />
                    <circle
                      cx={treasureChestPosition.x + 0.4}
                      cy={treasureChestPosition.y - 0.8}
                      r="0.25"
                      className="fill-amber-600"
                      style={{
                        animation: 'fly-up 0.6s ease-out forwards',
                        animationDelay: '0.1s'
                      }}
                    />
                    <circle
                      cx={treasureChestPosition.x + 0.1}
                      cy={treasureChestPosition.y - 0.3}
                      r="0.25"
                      className="fill-amber-800"
                      style={{
                        animation: 'fly-up 0.6s ease-out forwards',
                        animationDelay: '0.2s'
                      }}
                    />
                    <circle
                      cx={treasureChestPosition.x - 0.2}
                      cy={treasureChestPosition.y - 0.6}
                      r="0.2"
                      className="fill-amber-900"
                      style={{
                        animation: 'fly-up 0.6s ease-out forwards',
                        animationDelay: '0.15s'
                      }}
                    />
                    
                    {/* Additional smaller particles */}
                    <circle
                      cx={treasureChestPosition.x + 0.6}
                      cy={treasureChestPosition.y - 0.4}
                      r="0.15"
                      className="fill-amber-500"
                      style={{
                        animation: 'fly-up 0.5s ease-out forwards',
                        animationDelay: '0.05s'
                      }}
                    />
                    <circle
                      cx={treasureChestPosition.x - 0.5}
                      cy={treasureChestPosition.y - 0.2}
                      r="0.18"
                      className="fill-amber-800"
                      style={{
                        animation: 'fly-up 0.55s ease-out forwards',
                        animationDelay: '0.08s'
                      }}
                    />
                    <circle
                      cx={treasureChestPosition.x + 0.2}
                      cy={treasureChestPosition.y - 0.9}
                      r="0.12"
                      className="fill-amber-700"
                      style={{
                        animation: 'fly-up 0.45s ease-out forwards',
                        animationDelay: '0.25s'
                      }}
                    />
                    <circle
                      cx={treasureChestPosition.x - 0.6}
                      cy={treasureChestPosition.y - 0.7}
                      r="0.14"
                      className="fill-amber-600"
                      style={{
                        animation: 'fly-up 0.5s ease-out forwards',
                        animationDelay: '0.18s'
                      }}
                    />
                    <circle
                      cx={treasureChestPosition.x + 0.3}
                      cy={treasureChestPosition.y - 0.1}
                      r="0.16"
                      className="fill-amber-900"
                      style={{
                        animation: 'fly-up 0.6s ease-out forwards',
                        animationDelay: '0.12s'
                      }}
                    />
                  </>
                )}
                
                {/* Success sparkles after treasure found */}
                {treasureFound && (
                  <>
                    <text
                      x={treasureChestPosition.x}
                      y={treasureChestPosition.y - 2}
                      className="fill-yellow-300 animate-pulse"
                      textAnchor="middle"
                      fontSize="2"
                    >
                      ✨
                    </text>
                    <text
                      x={treasureChestPosition.x - 1.5}
                      y={treasureChestPosition.y - 1}
                      className="fill-yellow-400 animate-pulse"
                      textAnchor="middle"
                      fontSize="1.5"
                      style={{ animationDelay: '0.3s' }}
                    >
                      ✨
                    </text>
                    <text
                      x={treasureChestPosition.x + 1.5}
                      y={treasureChestPosition.y - 0.5}
                      className="fill-yellow-300 animate-pulse"
                      textAnchor="middle"
                      fontSize="1.5"
                      style={{ animationDelay: '0.6s' }}
                    >
                      ✨
                    </text>
                  </>
                )}
              </g>
            )}

            {/* Invisible clickable area for treasure */}
            {address && !treasureFound && !isSubmittingSecret && (
              <circle
                cx={treasureChestPosition.x}
                cy={treasureChestPosition.y}
                r="2"
                className="fill-transparent cursor-pointer hover:fill-yellow-400/10 transition-colors"
                onClick={handleTreasureClick}
              />
            )}
          </svg>
          
          {/* Hover cards for all locations */}
          {pathPoints.map((point, index) => {
            const locationStatus = getLocationStatus(index);
            const achievementNumber = (index + 1).toString().padStart(4, "0");
            const achievement = ALL_ACHIEVEMENTS.find(a => a.taskCode === index + 1);
            const walletAchievement = walletAchievements.find(wa => wa.tokenId === index + 1 && wa.isClaimed);
            const metadata = achievementMetadata[achievementNumber];
            const isCompleted = locationStatus === "completed";
            const isAvailable = isModuleAvailable(index);
            const moduleSlug = JUNGLE_MODULES[index] ?? modules[index]?.slug ?? "";
            const moduleData = modules.find(m => m.slug === moduleSlug);
            
            return (
              <HoverCard key={`hover-${index}`}>
                <HoverCardTrigger asChild>
                  <div 
                    className={cn(
                      "absolute",
                      isAvailable && isConnected ? "cursor-pointer" : "cursor-not-allowed"
                    )}
                    style={{
                      left: `${point.x}%`,
                      top: `${point.y}%`,
                      transform: 'translate(-50%, -50%)',
                      width: '20px',
                      height: '20px',
                      zIndex: 10
                    }}
                    onClick={() => {
                      if (isAvailable && isConnected && moduleSlug) {
                        router.push(`/lessons/island1/${moduleSlug}`);
                      }
                    }}
                  />
                </HoverCardTrigger>
                <HoverCardContent className="w-96">
                  {isCompleted && mode === "real" && metadata?.image ? (
                    // Completed achievement - show NFT image with metadata
                    <div className="space-y-3">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <Badge className={getCategoryColor(achievement!.category)}>
                          {getCategoryIcon(achievement!.category)}
                          <span className="ml-1 capitalize">{achievement!.category}</span>
                        </Badge>
                        <CheckCircle2 className="size-5 text-green-500" />
                      </div>
                      
                      {/* Full-size NFT Image with Hover Metadata */}
                      <div className="flex justify-center">
                        <div className="relative w-80 h-80 rounded-lg overflow-hidden bg-muted group">
                          <Image
                            src={metadata.image}
                            alt={metadata.name || achievement!.title}
                            fill
                            className="object-contain"
                            unoptimized
                          />
                          
                          {/* Hover Overlay with Metadata */}
                          <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-4 text-white">
                            {/* Top Section */}
                            <div className="space-y-2">
                              <div>
                                <h4 className="font-semibold text-lg">{metadata?.name || achievement!.title}</h4>
                                <p className="text-sm text-gray-200 mt-1">
                                  {metadata?.description || achievement!.description}
                                </p>
                              </div>

                              {/* Attributes */}
                              {metadata?.attributes && metadata.attributes.length > 0 && (
                                <div className="space-y-1">
                                  <div className="text-xs font-medium text-gray-300">Attributes:</div>
                                  <div className="flex flex-wrap gap-1">
                                    {metadata.attributes.slice(0, 4).map((attr, attrIndex) => (
                                      <span
                                        key={attrIndex}
                                        className="text-xs bg-white/20 px-2 py-1 rounded"
                                      >
                                        {attr.trait_type}: {attr.value}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Bottom Section */}
                            <div className="space-y-1 text-xs text-gray-300">
                              <div>Achievement #{achievementNumber}</div>
                              {walletAchievement && (
                                <>
                                  <div>Claimed: {new Date(walletAchievement.createdAt).toLocaleDateString()}</div>
                                  <div>Token ID: #{walletAchievement.tokenId}</div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Title */}
                      <div className="text-center">
                        <h4 className="font-semibold text-lg">
                          {metadata?.name || achievement!.title}
                        </h4>
                      </div>
                    </div>
                  ) : (
                    // Module info - show from mdx data
                    <div className="space-y-3">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className={cn("bg-muted", !isAvailable && "opacity-50")}>
                          <BookOpen className="size-4 mr-1" />
                          Module {index + 1}
                        </Badge>
                        <div className="text-sm text-muted-foreground">
                          {!isConnected 
                            ? "Connect wallet to start" 
                            : isAvailable 
                            ? "Click to start" 
                            : "Complete previous modules first"
                          }
                        </div>
                      </div>
                      
                      {/* Module Info with Background Image */}
                      <div className="relative rounded-lg overflow-hidden">
                        {/* Background Image */}
                        <div className="relative w-full h-64">
                          <Image
                            src={getModuleImage(index)}
                            alt={`Module ${index + 1} Preview`}
                            fill
                            className="object-cover"
                            onError={(e) => {
                              // Fallback to .png if .webp fails
                              const target = e.target as HTMLImageElement;
                              if (target.src.includes('.webp')) {
                                target.src = target.src.replace('.webp', '.png');
                              }
                            }}
                          />
                          
                          {/* Overlay for better text readability */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                          
                          {/* Content Overlay */}
                          <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                            {/* Top Section - Module Number */}
                            <div className="flex justify-between items-start">
                              <div className="bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center">
                                <span className="text-xl font-bold">{index + 1}</span>
                              </div>
                              <div className={cn(
                                "px-2 py-1 rounded text-xs font-medium",
                                isAvailable ? "bg-green-500/80" : "bg-orange-500/80"
                              )}>
                                {!isConnected 
                                  ? "Connect Wallet" 
                                  : isAvailable 
                                  ? "Available" 
                                  : "Locked"
                                }
                              </div>
                            </div>
                            
                            {/* Bottom Section - Module Details */}
                            <div className="text-center space-y-2">
                              <h4 className="font-semibold text-lg">
                                {moduleData?.title || 'Loading...'}
                              </h4>
                              <p className="text-sm text-gray-200 opacity-90">
                                {moduleData?.description || 'Module description loading...'}
                              </p>
                              
                              {/* Status Messages */}
                              {!isConnected && (
                                <div className="bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded px-3 py-2 mt-3">
                                  <p className="text-xs text-orange-200">
                                    🔒 Connect wallet to access modules
                                  </p>
                                </div>
                              )}
                              {isConnected && !isAvailable && (
                                <div className="bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded px-3 py-2 mt-3">
                                  <p className="text-xs text-orange-200">
                                    🔒 Complete Module {index} to unlock
                                  </p>
                                </div>
                              )}
                              {isConnected && isAvailable && (
                                <div className="bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded px-3 py-2 mt-3">
                                  <p className="text-xs text-green-200">
                                    ✨ Click to start this module
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </HoverCardContent>
              </HoverCard>
            );
          })}
        </div>
        
        {/* Secret Achievement Success Message */}
        {showSuccessModal && (
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-gradient-to-br from-yellow-400 to-amber-600 p-8 rounded-xl shadow-2xl text-center max-w-md mx-4 border-4 border-yellow-300 animate-pulse">
              <div className="text-6xl mb-4">🏆</div>
              <h2 className="text-2xl font-bold text-white mb-2">Secret Achievement Discovered!</h2>
              <h3 className="text-lg font-semibold text-yellow-100 mb-4">Secret Explorer</h3>
              <p className="text-yellow-100 mb-6">
                You&apos;ve found the hidden treasure! 🎉
              </p>
              <div className="space-y-3">
                <p className="text-sm text-yellow-200 bg-black/20 p-3 rounded-lg">
                  📜 Check your achievements and unclaimed vouchers to claim your NFT!
                </p>
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg transition-colors border border-white/30"
                >
                  Continue Exploring
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Error Message */}
        {secretError && (
          <div className="absolute top-4 right-4 bg-red-500/90 backdrop-blur text-white p-4 rounded-lg shadow-lg max-w-md z-40">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">⚠️</span>
              <span className="font-semibold">Secret Quest Failed</span>
            </div>
            <p className="text-sm">{secretError}</p>
            <button
              onClick={() => setSecretError(null)}
              className="mt-2 text-xs bg-white/20 hover:bg-white/30 px-3 py-1 rounded transition-colors"
            >
              Dismiss
            </button>
          </div>
        )}
        
      </div>
    </div>
  );
}
