"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Play, RotateCcw, Pause, CheckCircle2, Wallet, BookOpen, Shield, Gauge, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

// Coordinates for the path points (as percentages of the map dimensions)
// Updated to match the image layout with 5 numbered locations
// progress: exact percentage of path line to draw to reach this location
const pathPoints = [
  { x: 35, y: 85, label: "Location 1", progress: 0 },   // Right of the boat
  { x: 35, y: 34, label: "Location 2", progress: 35 },   // In front of wood house
  { x: 70, y: 27, label: "Location 3", progress: 60 },   // Castle door
  { x: 55, y: 50, label: "Location 4", progress: 80 },   // Base of right side of temple
  { x: 71, y: 76, label: "Location 5", progress: 100 },  // Center of monument
];

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

interface NFTMetadata {
  name: string;
  description: string;
  image: string;
  attributes: Array<{
    trait_type: string;
    value: string | number;
  }>;
}

interface Achievement {
  taskCode: number;
  title: string;
  description: string;
  category: "security" | "gas" | "fundamentals" | "advanced";
}

// Achievement definitions matching the demo
const achievements: Achievement[] = [
  {
    taskCode: 1,
    title: "Training Quiz Master",
    description: "Complete the comprehensive training quiz with perfect scores",
    category: "fundamentals"
  },
  {
    taskCode: 2,
    title: "On-Chain Pioneer", 
    description: "Successfully create and submit a transaction on the blockchain",
    category: "advanced"
  },
  {
    taskCode: 3,
    title: "Security Sentinel",
    description: "Master smart contract security best practices",
    category: "security"
  },
  {
    taskCode: 4,
    title: "Gas Optimization Expert",
    description: "Optimize contract gas usage to professional standards",
    category: "gas"
  },
  {
    taskCode: 5,
    title: "Advanced Developer",
    description: "Complete advanced blockchain development challenges",
    category: "advanced"
  }
];

// Lesson information for uncompleted locations
const lessonInfo: Record<number, string> = {
  1: "Solidity Basics",
  2: "Transaction On Chain", 
  3: "PLACEHOLDER - info doesn't exist",
  4: "PLACEHOLDER - info doesn't exist",
  5: "PLACEHOLDER - info doesn't exist"
};

interface AnimatedMapProps {
  autoStart?: boolean;
  showControls?: boolean;
  mode?: "demo" | "real"; // New prop to switch between demo and real data
}

export function AnimatedMap({ autoStart = false, showControls = true, mode = "demo" }: AnimatedMapProps) {
  const router = useRouter();
  const { address } = useAccount();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  
  // Achievement data
  const [walletAchievements, setWalletAchievements] = useState<WalletAchievement[]>([]);
  const [isLoadingAchievements, setIsLoadingAchievements] = useState(false);
  const [completedLocations, setCompletedLocations] = useState<Set<number>>(new Set());
  const [maxCompletedLocation, setMaxCompletedLocation] = useState(0);
  
  // Achievement metadata
  const [achievementMetadata, setAchievementMetadata] = useState<Record<string, NFTMetadata>>({});
  const [loadingMetadata, setLoadingMetadata] = useState<Set<string>>(new Set());
  
  // No modal needed - info shown on image hover

  // Animation timing
  const animationDuration = 8000; // 8 seconds total

  // Fetch NFT metadata
  const fetchNFTMetadata = useCallback(async (metadataUri: string, achievementNumber: string) => {
    if (achievementMetadata[achievementNumber] || loadingMetadata.has(achievementNumber)) {
      return;
    }

    setLoadingMetadata(prev => new Set(prev).add(achievementNumber));
    
    try {
      const response = await fetch(metadataUri);
      
      if (!response.ok) {
        throw new Error(`Metadata fetch error: ${response.status}`);
      }

      const metadata: NFTMetadata = await response.json();
      setAchievementMetadata(prev => ({
        ...prev,
        [achievementNumber]: metadata
      }));
    } catch (error) {
      console.error(`Error fetching metadata for ${achievementNumber}:`, error);
    } finally {
      setLoadingMetadata(prev => {
        const newSet = new Set(prev);
        newSet.delete(achievementNumber);
        return newSet;
      });
    }
  }, [achievementMetadata, loadingMetadata]);

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
      
      // Fetch metadata for each achievement
      data.achievements.forEach(achievement => {
        if (achievement.isClaimed && achievement.metadataUri) {
          fetchNFTMetadata(achievement.metadataUri, achievement.achievementNumber);
        }
      });
      
      // Map achievements to locations (taskCode 1-5 corresponds to locations 0-4 in our array)
      const completed = new Set<number>();
      let maxLocation = 0;
      
      data.achievements.forEach(achievement => {
        if (achievement.isClaimed && achievement.tokenId >= 1 && achievement.tokenId <= 5) {
          // taskCode/tokenId 1-5 maps to array indices 0-4 (no start position)
          completed.add(achievement.tokenId - 1);
          maxLocation = Math.max(maxLocation, achievement.tokenId - 1);
        }
      });
      
      setCompletedLocations(completed);
      setMaxCompletedLocation(maxLocation);
      
      // Automatically show progress line to current achievement level
      if (maxLocation >= 0 && completedLocations.size > 0) {
        const targetProgress = pathPoints[maxLocation]?.progress || 0;
        setProgress(targetProgress);
        setCurrentStep(maxLocation);
      }
      
    } catch (error) {
      console.error("Error fetching wallet achievements:", error);
    } finally {
      setIsLoadingAchievements(false);
    }
  }, [address, mode, fetchNFTMetadata, completedLocations.size]);

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

  // Only fetch metadata for claimed achievements to avoid 404s
  // useEffect(() => {
  //   achievements.forEach(achievement => {
  //     const achievementNumber = achievement.taskCode.toString().padStart(4, "0");
  //     const metadataUri = `https://static.plunderswap.com/training/${achievementNumber}.json`;
  //     fetchNFTMetadata(metadataUri, achievementNumber);
  //   });
  // }, [fetchNFTMetadata]);

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
    if (mode === "real" && maxCompletedLocation >= 0 && completedLocations.size > 0) {
      setIsPlaying(false);
      
      // Animate from start to current progress
      setProgress(0);
      setCurrentStep(0);
      
      setTimeout(() => {
        const targetProgress = pathPoints[maxCompletedLocation]?.progress || 0;
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
      return completedLocations.has(locationIndex) ? "completed" : "pending";
    }
  };

  const pathString = createPathString(pathPoints);

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
              
              {mode === "real" && address && maxCompletedLocation >= 0 && completedLocations.size > 0 && (
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
                    Location: {Math.min(currentStep + 1, pathPoints.length)} of {pathPoints.length}
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
      <Card className="relative overflow-hidden mx-auto w-full">
        <div className="relative w-full h-[90vh]">
          {/* Map Image */}
          <img
            src="/map.webp"
            alt="Training Progress Map"
            className="w-full h-full object-contain"
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

              const isCompleted = locationStatus === "completed";
              
              const markerContent = (
                <g key={index}>
                  {/* Location dot */}
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="1.8"
                    className={cn(
                      "transition-all duration-500",
                      isCompleted
                        ? "fill-green-500 stroke-green-700" 
                        : "fill-gray-400 stroke-gray-600",
                      isActive && "animate-pulse",
                      isCompleted && "cursor-pointer"
                    )}
                    strokeWidth="0.8"
                  />
                  
                  {/* Location number or checkmark */}
                  <text
                    x={point.x}
                    y={point.y + 1}
                    className={cn(
                      "fill-white text-center",
                      isCompleted && "cursor-pointer"
                    )}
                    textAnchor="middle"
                    fontSize="2.5"
                    fontWeight="bold"
                  >
                    {mode === "real" && isCompleted ? "✓" : index + 1}
                  </text>
                </g>
              );

              return markerContent;
            })}
          </svg>
          
          {/* Hover cards for all locations */}
          {pathPoints.map((point, index) => {
            const locationStatus = getLocationStatus(index);
            const achievementNumber = (index + 1).toString().padStart(4, "0");
            const achievement = achievements.find(a => a.taskCode === index + 1);
            const walletAchievement = walletAchievements.find(wa => wa.tokenId === index + 1 && wa.isClaimed);
            const metadata = achievementMetadata[achievementNumber];
            const isCompleted = locationStatus === "completed";
            const lessonTitle = lessonInfo[index + 1];
            
            return (
              <HoverCard key={`hover-${index}`}>
                <HoverCardTrigger asChild>
                  <div 
                    className="absolute cursor-pointer"
                    style={{
                      left: `${point.x}%`,
                      top: `${point.y}%`,
                      transform: 'translate(-50%, -50%)',
                      width: '20px',
                      height: '20px',
                      zIndex: 10
                    }}
                    onClick={() => router.push('/lessons')}
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
                    // Uncompleted lesson - show lesson info
                    <div className="space-y-3">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="bg-muted">
                          <BookOpen className="size-4 mr-1" />
                          Lesson {index + 1}
                        </Badge>
                        <div className="text-sm text-muted-foreground">Click to start</div>
                      </div>
                      
                      {/* Lesson Info */}
                      <div className="text-center p-8 bg-muted/30 rounded-lg">
                        <div className="text-6xl mb-4">{index + 1}</div>
                        <h4 className="font-semibold text-lg mb-2">{lessonTitle}</h4>
                        <p className="text-sm text-muted-foreground">
                          {isCompleted ? "Achievement completed!" : "Click to start this lesson"}
                        </p>
                      </div>
                    </div>
                  )}
                </HoverCardContent>
              </HoverCard>
            );
          })}
        </div>
        
        {/* Current location info */}
        <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur rounded-lg p-3 border">
          {mode === "real" && address ? (
            <>
              <p className="text-sm font-medium">
                Your Progress: {completedLocations.size}/5 Achievements
              </p>
              {maxCompletedLocation >= 0 && completedLocations.size > 0 && (
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                  Latest: Location {maxCompletedLocation + 1} Complete! ✓
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
