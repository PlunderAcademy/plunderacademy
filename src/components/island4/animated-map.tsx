"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import { ModuleMeta } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { CheckCircle2, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAchievements } from "@/hooks/use-achievements";

// Gilded Bastion module slugs in order
export const CASTLE_MODULES = [
  'defi-fundamentals-simple-swaps',
  'oracles-randomness-airdrop-patterns',
  'random-number-generator-practical',
  'proxy-patterns-upgradeability',
  'gas-optimization-security-patterns',
  'upgradable-contract-practical'
];

// Path points positioned at specific map locations
// progress: exact percentage of path line to draw to reach this location
const pathPoints = [
  { x: 25, y: 85, label: "Castle Door (Middle Bottom)", progress: 0 },     // 1: Castle door middle bottom
  { x: 50, y: 68, label: "Markets (Middle)", progress: 20 },               // 2: Markets (stays where it is)
  { x: 62, y: 48, label: "Dome Building (Middle Right)", progress: 40 },   // 3: Dome building to the right of church
  { x: 41, y: 43, label: "Church (Top Middle)", progress: 60 },            // 4: Church top middle
  { x: 22, y: 17, label: "Lighthouse (Top Left)", progress: 80 },          // 5: Lighthouse top left
  { x: 76, y: 11, label: "Ruins (Top Right)", progress: 100 },             // 6: Ruins top right
];

// Create curved path string for SVG
const createPathString = (points: typeof pathPoints) => {
  if (points.length === 0) return '';
  
  let path = `M ${points[0].x} ${points[0].y}`;
  
  for (let i = 1; i < points.length; i++) {
    const current = points[i];
    const previous = points[i - 1];
    
    const midX = (previous.x + current.x) / 2;
    const midY = (previous.y + current.y) / 2;
    
    const offsetX = (current.y - previous.y) * 0.2;
    const offsetY = (previous.x - current.x) * 0.2;
    
    path += ` Q ${midX + offsetX} ${midY + offsetY} ${current.x} ${current.y}`;
  }
  
  return path;
};

type MarkerState = "completed" | "next" | "available" | "locked";

const getMarkerVisual = (state: MarkerState) => {
  switch (state) {
    case "completed":
      return {
        fill: "#eab308",
        stroke: "#854d0e",
        text: "#f8fafc",
        halo: "rgba(234, 179, 8, 0.35)",
        shadow: "0 0 12px rgba(234, 179, 8, 0.55)",
      };
    case "next":
      return {
        fill: "#fbbf24",
        stroke: "#a16207",
        text: "#fff7ed",
        halo: "rgba(251, 191, 36, 0.4)",
        shadow: "0 0 14px rgba(251, 191, 36, 0.6)",
      };
    case "available":
      return {
        fill: "#facc15",
        stroke: "#713f12",
        text: "#eff6ff",
        halo: "rgba(250, 204, 21, 0.35)",
        shadow: "0 0 10px rgba(250, 204, 21, 0.45)",
      };
    case "locked":
    default:
      return {
        fill: "#9ca3af",
        stroke: "#4b5563",
        text: "#e5e7eb",
        halo: "rgba(156, 163, 175, 0.2)",
        shadow: "0 0 6px rgba(107, 114, 128, 0.3)",
      };
  }
};

interface CastleAnimatedMapProps {
  mode?: "preview" | "real";
  modules: ModuleMeta[];
  highlightedModuleSlug?: string | null;
}

export function CastleAnimatedMap({ mode = "real", modules, highlightedModuleSlug = null }: CastleAnimatedMapProps) {
  const router = useRouter();
  const { isConnected } = useAccount();
  const { walletAchievements, achievementMetadata } = useAchievements();
  const [progress, setProgress] = useState(0);
  
  const getLocationStatus = (index: number): MarkerState => {
    if (!isConnected) {
      return "locked";
    }

    const isCompleted = walletAchievements.some(
      wa => wa.tokenId === index + 41 && wa.isClaimed // Gilded Bastion uses IDs 41-46
    );

    if (isCompleted) return "completed";

    if (index === 0) return "next";
    
    const prevCompleted = walletAchievements.some(
      wa => wa.tokenId === index + 40 && wa.isClaimed
    );

    return prevCompleted ? "next" : "locked";
  };

  const isModuleAvailable = (index: number): boolean => {
    if (!isConnected) return false;
    const status = getLocationStatus(index);
    return status === "next" || status === "completed" || status === "available";
  };

  // Update progress line based on completed modules
  useEffect(() => {
    if (!isConnected || mode !== "real") {
      setProgress(0);
      return;
    }

    let maxCompletedIndex = -1;
    walletAchievements.forEach(achievement => {
      if (achievement.isClaimed && achievement.tokenId >= 41 && achievement.tokenId <= 46) {
        const moduleIndex = achievement.tokenId - 41;
        maxCompletedIndex = Math.max(maxCompletedIndex, moduleIndex);
      }
    });

    if (maxCompletedIndex >= 0) {
      const nextModuleIndex = maxCompletedIndex + 1;
      if (nextModuleIndex < pathPoints.length) {
        setProgress(pathPoints[nextModuleIndex].progress);
      } else {
        setProgress(100);
      }
    } else {
      setProgress(0);
    }
  }, [isConnected, mode, walletAchievements]);

  // Helper function to get module background image
  const getModuleImage = (moduleIndex: number) => {
    return `/islands/island4/island4-module${moduleIndex + 1}-image.webp`;
  };

  const pathString = createPathString(pathPoints);

  return (
    <div className="w-full space-y-6">
      <div className="relative mx-auto w-full overflow-hidden rounded-xl">
        <div
          className="relative mx-auto w-full"
          style={{ aspectRatio: "800 / 1328", maxHeight: "80vh" }}
        >
          <Image
            src="/islands/island4/island4-map.webp"
            alt="Gilded Bastion Map"
            fill
            className="object-contain"
            priority
          />
          
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
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
                  
                  .animated-path-castle {
                    stroke: #eab308;
                    stroke-width: 1.2;
                    stroke-dasharray: 3 3;
                    stroke-linecap: round;
                    fill: none;
                    animation: dash-flow 1s linear infinite;
                  }
                `}
              </style>
              <mask id="progress-mask-castle">
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
            
            <path
              d={pathString}
              stroke="#eab30820"
              strokeWidth="0.5"
              strokeDasharray="1 1"
              fill="none"
            />
            
            <path
              d={pathString}
              className="animated-path-castle"
              mask="url(#progress-mask-castle)"
            />
            
            {pathPoints.map((point, index) => {
              const locationStatus = getLocationStatus(index);
              const visual = getMarkerVisual(locationStatus);
              const moduleSlug = CASTLE_MODULES[index] ?? modules[index]?.slug ?? "";
              const isHighlighted = moduleSlug === highlightedModuleSlug;

              return (
                <g key={index}>
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r={isHighlighted ? "3.5" : "3"}
                    fill={visual.halo}
                    className="transition-all duration-300"
                    style={{
                      filter: isHighlighted ? `drop-shadow(${visual.shadow}) brightness(1.3)` : `drop-shadow(${visual.shadow})`,
                      opacity: isHighlighted ? 1 : 0.6
                    }}
                  />
                  
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r={isHighlighted ? "2.2" : "2"}
                    fill={visual.fill}
                    stroke={visual.stroke}
                    strokeWidth={isHighlighted ? "0.6" : "0.5"}
                    className="transition-all duration-300"
                    style={{
                      filter: isHighlighted ? 'brightness(1.2)' : 'none'
                    }}
                  />
                  
                  <text
                    x={point.x}
                    y={point.y}
                    className="select-none text-center font-bold pointer-events-none"
                    textAnchor="middle"
                    fontSize={isHighlighted ? "2.2" : "2"}
                    dominantBaseline="central"
                    fill={visual.text}
                  >
                    {locationStatus === "completed" ? "✓" : index + 1}
                  </text>
                </g>
              );
            })}
          </svg>
          
          {pathPoints.map((point, index) => {
            const locationStatus = getLocationStatus(index);
            const isCompleted = locationStatus === "completed";
            const isAvailable = isModuleAvailable(index);
            const moduleSlug = CASTLE_MODULES[index] ?? modules[index]?.slug ?? "";
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
                        router.push(`/lessons/island4/${moduleSlug}`);
                      }
                    }}
                  />
                </HoverCardTrigger>
                <HoverCardContent className="w-96">
                  {isCompleted && mode === "real" ? (
                    // Completed - show achievement NFT
                    (() => {
                      const achievementNumber = (index + 41).toString().padStart(4, "0");
                      const walletAchievement = walletAchievements.find(wa => wa.tokenId === index + 41 && wa.isClaimed);
                      const metadata = achievementMetadata[achievementNumber];
                      
                      return metadata?.image ? (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <Badge className="bg-yellow-500/20 text-yellow-700 dark:text-yellow-300">
                              <BookOpen className="mr-1 size-3" />
                              <span className="capitalize">Advanced DeFi</span>
                            </Badge>
                            <CheckCircle2 className="size-5 text-yellow-500" />
                          </div>
                          
                          {/* Full-size NFT Image with Hover Metadata */}
                          <div className="flex justify-center">
                            <div className="relative w-80 h-80 rounded-lg overflow-hidden bg-muted group">
                              <Image
                                src={metadata.image}
                                alt={metadata.name || moduleData?.title || "Achievement"}
                                fill
                                className="object-contain"
                                unoptimized
                              />
                              
                              {/* Hover Overlay with Metadata */}
                              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-4 text-white">
                                {/* Top Section */}
                                <div className="space-y-2">
                                  <div>
                                    <h4 className="font-semibold text-lg">{metadata?.name || moduleData?.title}</h4>
                                    <p className="text-sm text-gray-200 mt-1">
                                      {metadata?.description || moduleData?.description}
                                    </p>
                                  </div>

                                  {/* Attributes */}
                                  {metadata?.attributes && metadata.attributes.length > 0 && (
                                    <div className="space-y-1">
                                      <div className="text-xs font-medium text-gray-300">Attributes:</div>
                                      <div className="flex flex-wrap gap-1">
                                        {metadata.attributes.slice(0, 4).map((attr: { trait_type: string; value: string | number }, attrIndex: number) => (
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
                              {metadata?.name || moduleData?.title}
                            </h4>
                          </div>
                        </div>
                      ) : (
                        // Fallback placeholder if image not loaded yet
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <Badge className="bg-yellow-500/20 text-yellow-700 dark:text-yellow-300">
                              <BookOpen className="mr-1 size-3" />
                              <span className="capitalize">Advanced DeFi</span>
                            </Badge>
                            <CheckCircle2 className="size-5 text-yellow-500" />
                          </div>
                          
                          <div className="flex justify-center">
                            <div className="relative w-80 h-80 rounded-lg overflow-hidden bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-950 dark:to-yellow-900 flex items-center justify-center border-2 border-yellow-300 dark:border-yellow-700">
                              <div className="text-center space-y-2">
                                <div className="text-6xl">🏰</div>
                                <p className="text-lg font-semibold text-yellow-700 dark:text-yellow-300">
                                  Loading Achievement...
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="text-center space-y-1">
                            <h4 className="font-semibold text-lg">{moduleData?.title || "Module Completed"}</h4>
                          </div>
                        </div>
                      );
                    })()
                  ) : (
                    <div className="space-y-3">
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
                      
                      <div className="relative rounded-lg overflow-hidden">
                        <div className="relative w-full h-64">
                          <Image
                            src={getModuleImage(index)}
                            alt={`Module ${index + 1} Preview`}
                            fill
                            className="object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              if (target.src.includes('.webp')) {
                                target.src = target.src.replace('.webp', '.png');
                              }
                            }}
                          />
                          
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                          
                          <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                            <div className="flex justify-between items-start">
                              <div className="bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center">
                                <span className="text-xl font-bold">{index + 1}</span>
                              </div>
                              <div className={cn(
                                "px-2 py-1 rounded text-xs font-medium",
                                isAvailable ? "bg-yellow-500/80" : "bg-red-500/80"
                              )}>
                                {!isConnected 
                                  ? "Connect Wallet" 
                                  : isAvailable 
                                  ? "Available" 
                                  : "Locked"
                                }
                              </div>
                            </div>
                            
                            <div className="text-center space-y-2">
                              <h4 className="font-semibold text-lg">
                                {moduleData?.title || 'Loading...'}
                              </h4>
                              <p className="text-sm text-gray-200 opacity-90">
                                {moduleData?.description || 'Module description loading...'}
                              </p>
                              
                              {moduleData && (
                                <div className="flex items-center justify-center gap-4 text-sm mt-2">
                                  <span className="bg-white/20 backdrop-blur-sm rounded px-2 py-1">
                                    📚 {moduleData.lessons.length} lessons
                                  </span>
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
      </div>
    </div>
  );
}
