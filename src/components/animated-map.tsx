"use client";

import { useState, useEffect, useCallback } from "react";
import { useAccount } from "wagmi";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, RotateCcw, Pause, CheckCircle2, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

// Coordinates for the path points (as percentages of the map dimensions)
// Adjusted positions based on user requirements
const pathPoints = [
  { x: 85, y: 85, label: "Start (Boat)" }, // Bottom right - boat position
  { x: 75, y: 75, label: "Location 1" },   // Location 1 - right side
  { x: 35, y: 55, label: "Location 2" },   // Location 2 - moved down to level with old 3
  { x: 65, y: 45, label: "Location 3" },   // Location 3 - moved to level of old 2
  { x: 45, y: 25, label: "Location 4" },   // Location 4 (volcano)
  { x: 75, y: 15, label: "Location 5" },   // Location 5 (castle)
];

// Create path string for SVG
const createPathString = (points: typeof pathPoints) => {
  return points.reduce((path, point, index) => {
    const command = index === 0 ? 'M' : 'L';
    return `${path} ${command} ${point.x} ${point.y}`;
  }, '').trim();
};

// Achievement interfaces (from achievements-demo.tsx)
interface WalletAchievement {
  achievementNumber: string;
  tokenId: number;
  hasVoucher: boolean;
  isClaimed: boolean;
  voucherSignature?: string;
  metadataUri: string;
  createdAt: string;
}

interface WalletAchievementsResponse {
  walletAddress: string;
  contractAddress: string;
  achievements: WalletAchievement[];
}

interface AnimatedMapProps {
  autoStart?: boolean;
  showControls?: boolean;
  mode?: "demo" | "real"; // New prop to switch between demo and real data
}

export function AnimatedMap({ autoStart = false, showControls = true, mode = "demo" }: AnimatedMapProps) {
  const { address } = useAccount();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  
  // Achievement data
  const [walletAchievements, setWalletAchievements] = useState<WalletAchievement[]>([]);
  const [isLoadingAchievements, setIsLoadingAchievements] = useState(false);
  const [completedLocations, setCompletedLocations] = useState<Set<number>>(new Set());
  const [maxCompletedLocation, setMaxCompletedLocation] = useState(0);

  // Animation timing
  const animationDuration = 8000; // 8 seconds total
  const stepDuration = animationDuration / (pathPoints.length - 1);

  // Fetch wallet achievements
  const fetchWalletAchievements = useCallback(async () => {
    if (!address || mode === "demo") return;
    
    setIsLoadingAchievements(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_PLUNDER_ACADEMY_API}/api/v1/vouchers/wallet/${address}`);
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data: WalletAchievementsResponse = await response.json();
      setWalletAchievements(data.achievements);
      
      // Map achievements to locations (taskCode 1-5 corresponds to locations 0-5 in our array)
      const completed = new Set<number>();
      let maxLocation = 0;
      
      data.achievements.forEach(achievement => {
        if (achievement.isClaimed && achievement.tokenId >= 1 && achievement.tokenId <= 5) {
          // taskCode/tokenId 1-5 maps to array indices 1-5 (boat is at index 0)
          completed.add(achievement.tokenId);
          maxLocation = Math.max(maxLocation, achievement.tokenId);
        }
      });
      
      setCompletedLocations(completed);
      setMaxCompletedLocation(maxLocation);
      
      // Automatically show progress line to current achievement level
      if (maxLocation > 0) {
        const targetProgress = (maxLocation / (pathPoints.length - 1)) * 100;
        setProgress(targetProgress);
        setCurrentStep(maxLocation);
      }
      
    } catch (error) {
      console.error("Error fetching wallet achievements:", error);
    } finally {
      setIsLoadingAchievements(false);
    }
  }, [address, mode]);

  // Fetch achievements when component mounts or address changes
  useEffect(() => {
    if (address && mode === "real") {
      fetchWalletAchievements();
    } else if (mode === "demo") {
      // Reset to demo mode
      setProgress(0);
      setCurrentStep(0);
      setCompletedLocations(new Set());
      setMaxCompletedLocation(0);
    }
  }, [address, mode, fetchWalletAchievements]);

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
        
        const newStep = Math.floor((newProgress / 100) * (pathPoints.length - 1));
        setCurrentStep(newStep);
        
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePlay = () => {
    if (progress >= 100) {
      handleReset();
    }
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentStep(0);
  };

  const playToRealProgress = () => {
    if (mode === "real" && maxCompletedLocation > 0) {
      setIsPlaying(false);
      
      // Animate from start to current progress
      setProgress(0);
      setCurrentStep(0);
      
      setTimeout(() => {
        const targetProgress = (maxCompletedLocation / (pathPoints.length - 1)) * 100;
        setProgress(targetProgress);
        setCurrentStep(maxCompletedLocation);
      }, 100);
    }
  };

  const getLocationStatus = (locationIndex: number) => {
    if (mode === "demo") {
      return locationIndex <= currentStep ? "completed" : "pending";
    } else {
      // For real mode: check if this achievement is claimed
      if (locationIndex === 0) return "completed"; // Boat/start is always completed
      return completedLocations.has(locationIndex) ? "completed" : "pending";
    }
  };

  const pathString = createPathString(pathPoints);
  const currentPathLength = progress / 100;

  return (
    <div className="w-full space-y-6">
      {/* Controls */}
      {showControls && (
        <Card className="p-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Button
                onClick={isPlaying ? handlePause : handlePlay}
                size="sm"
                className="flex items-center gap-2"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    {mode === "demo" ? (progress >= 100 ? 'Replay Full Journey' : 'Start Full Journey') : 'Demo Full Path'}
                  </>
                )}
              </Button>
              
              {mode === "real" && address && maxCompletedLocation > 0 && (
                <Button
                  onClick={playToRealProgress}
                  size="sm"
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Wallet className="w-4 h-4" />
                  Replay My Journey
                </Button>
              )}
              
              <Button
                onClick={handleReset}
                size="sm"
                variant="outline"
                className="flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </Button>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              {mode === "real" && address ? (
                <>
                  <span>
                    Completed: {completedLocations.size} of 5
                  </span>
                  {isLoadingAchievements && <span>Loading...</span>}
                </>
              ) : (
                <>
                  <span>
                    Location: {currentStep + 1} of {pathPoints.length}
                  </span>
                  <span>
                    Progress: {Math.round(progress)}%
                  </span>
                </>
              )}
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="mt-4 w-full bg-muted rounded-full h-2">
            <div 
              className="h-2 bg-red-500 rounded-full transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </Card>
      )}

      {/* Map Container */}
      <Card className="relative overflow-hidden max-w-2xl mx-auto">
        <div className="relative w-full aspect-[3/2] bg-gradient-to-b from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900">
          {/* Map Image */}
          <img
            src="/map.png"
            alt="Training Progress Map"
            className="w-full h-full object-cover"
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
              const locationStatus = getLocationStatus(index);
              const isActive = index === currentStep && isPlaying;
              
              return (
                <g key={index}>
                  {/* Location dot */}
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="1.8"
                    className={cn(
                      "transition-all duration-500",
                      locationStatus === "completed"
                        ? "fill-green-500 stroke-green-700" 
                        : "fill-gray-400 stroke-gray-600",
                      isActive && "animate-pulse"
                    )}
                    strokeWidth="0.8"
                  />
                  
                  {/* Checkmark for completed achievements in real mode */}
                  {mode === "real" && locationStatus === "completed" && index > 0 && (
                    <text
                      x={point.x}
                      y={point.y + 1}
                      className="fill-white text-center"
                      textAnchor="middle"
                      fontSize="2.5"
                      fontWeight="bold"
                    >
                      ✓
                    </text>
                  )}
                  
                  {/* Boat symbol for start position */}
                  {index === 0 && (
                    <text
                      x={point.x}
                      y={point.y + 1}
                      className="fill-white text-center"
                      textAnchor="middle"
                      fontSize="2.5"
                    >
                      ⚓
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
        
        {/* Current location info */}
        <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur rounded-lg p-3 border">
          {mode === "real" && address ? (
            <>
              <p className="text-sm font-medium">
                Your Progress: {completedLocations.size}/5 Achievements
              </p>
              {maxCompletedLocation > 0 && (
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                  Latest: Location {maxCompletedLocation} Complete! ✓
                </p>
              )}
              {completedLocations.size === 0 && (
                <p className="text-xs text-muted-foreground mt-1">
                  Complete achievements to unlock locations
                </p>
              )}
            </>
          ) : mode === "real" && !address ? (
            <p className="text-sm font-medium text-muted-foreground">
              Connect wallet to view your progress
            </p>
          ) : (
            <>
              <p className="text-sm font-medium">
                Current Location: {pathPoints[currentStep]?.label}
              </p>
              {currentStep < pathPoints.length - 1 && isPlaying && (
                <p className="text-xs text-muted-foreground mt-1">
                  Moving to: {pathPoints[currentStep + 1]?.label}
                </p>
              )}
              {progress >= 100 && (
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                  Journey Complete! 🎉
                </p>
              )}
            </>
          )}
        </div>
      </Card>
      
      {/* Legend */}
      <Card className="p-4">
        <h3 className="font-semibold mb-3">Map Legend</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
              {mode === "real" && <CheckCircle2 className="w-2 h-2 text-white" />}
            </div>
            <span>{mode === "real" ? "Achievement Earned" : "Completed Location"}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <span>{mode === "real" ? "Not Yet Earned" : "Upcoming Location"}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-0.5 bg-red-500" style={{ backgroundImage: 'repeating-linear-gradient(to right, transparent, transparent 2px, #ef4444 2px, #ef4444 4px)' }}></div>
            <span>Travel Path</span>
          </div>
        </div>
        
        {mode === "real" && (
          <div className="mt-3 pt-3 border-t text-xs text-muted-foreground">
            <p>Complete training achievements to unlock new locations and advance your journey!</p>
          </div>
        )}
      </Card>
    </div>
  );
}
