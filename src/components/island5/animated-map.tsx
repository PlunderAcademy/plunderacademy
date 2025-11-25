"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import { ModuleMeta } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { CheckCircle2, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAchievements } from "@/hooks/use-achievements";
import { MODULE_TO_ACHIEVEMENT_MAP } from "@/components/interactive-elements/shared/utils";

// Neon Haven module slugs in order
export const NEON_MODULES = [
  'web3-frontend-basics',
  'contract-interactions-error-handling',
  'dapp-interface-practical',
  'advanced-security'
];

const NEON_MODULE_ACHIEVEMENTS = NEON_MODULES
  .map(slug => MODULE_TO_ACHIEVEMENT_MAP[slug])
  .filter((value): value is string => Boolean(value));

// Path points positioned at specific map locations
// progress: exact percentage of path line to draw to reach this location
const pathPoints = [
  { x: 62, y: 75, label: "Location 1", progress: 0 },
  { x: 35, y: 50, label: "Location 2", progress: 33 },
  { x: 75, y: 28, label: "Location 3", progress: 66 },
  { x: 48, y: 10, label: "Location 4", progress: 100 },
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
        fill: "#06b6d4",
        stroke: "#164e63",
        text: "#f8fafc",
        halo: "rgba(6, 182, 212, 0.35)",
        shadow: "0 0 12px rgba(6, 182, 212, 0.55)",
      };
    case "next":
      return {
        fill: "#22d3ee",
        stroke: "#155e75",
        text: "#fff7ed",
        halo: "rgba(34, 211, 238, 0.4)",
        shadow: "0 0 14px rgba(34, 211, 238, 0.6)",
      };
    case "available":
      return {
        fill: "#0891b2",
        stroke: "#0e7490",
        text: "#eff6ff",
        halo: "rgba(8, 145, 178, 0.35)",
        shadow: "0 0 10px rgba(8, 145, 178, 0.45)",
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

interface NeonAnimatedMapProps {
  mode?: "preview" | "real";
  modules: ModuleMeta[];
  highlightedModuleSlug?: string | null;
}

export function NeonAnimatedMap({ mode = "real", modules, highlightedModuleSlug = null }: NeonAnimatedMapProps) {
  const router = useRouter();
  const { isConnected } = useAccount();
  const { walletAchievements, achievementMetadata } = useAchievements();
  const [progress, setProgress] = useState(0);

  const completedIndices = useMemo(() => {
    const completed = new Set<number>();

    walletAchievements.forEach(achievement => {
      const index = NEON_MODULE_ACHIEVEMENTS.indexOf(achievement.achievementNumber);
      if (index !== -1 && achievement.isClaimed) {
        completed.add(index);
      }
    });

    return completed;
  }, [walletAchievements]);
  
  const getLocationStatus = (index: number): MarkerState => {
    if (!isConnected) {
      return "locked";
    }

    if (completedIndices.has(index)) {
      return "completed";
    }

    if (index === 0) {
      return "next";
    }

    return completedIndices.has(index - 1) ? "next" : "locked";
  };

  const isModuleAvailable = (index: number): boolean => {
    if (!isConnected) return false;
    const status = getLocationStatus(index);
    return status === "next" || status === "completed";
  };

  // Update progress line based on completed modules
  useEffect(() => {
    if (!isConnected || mode !== "real") {
      setProgress(0);
      return;
    }

    if (completedIndices.size === 0) {
      setProgress(0);
      return;
    }

    const maxCompletedIndex = Math.max(...Array.from(completedIndices));
    const nextModuleIndex = Math.min(maxCompletedIndex + 1, pathPoints.length - 1);
    setProgress(pathPoints[nextModuleIndex].progress);
  }, [completedIndices, isConnected, mode]);

  // Helper function to get module background image
  const getModuleImage = (moduleIndex: number) => {
    return `/islands/island5/island5-module${moduleIndex + 1}-image.webp`;
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
            src="/islands/island5/island5-map.webp"
            alt="Neon Haven Map"
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
                  
                  .animated-path-neon {
                    stroke: #06b6d4;
                    stroke-width: 1.2;
                    stroke-dasharray: 3 3;
                    stroke-linecap: round;
                    fill: none;
                    animation: dash-flow 1s linear infinite;
                  }
                `}
              </style>
              <mask id="progress-mask-neon">
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
              stroke="#06b6d420"
              strokeWidth="0.5"
              strokeDasharray="1 1"
              fill="none"
            />
            
            <path
              d={pathString}
              className="animated-path-neon"
              mask="url(#progress-mask-neon)"
            />
            
            {pathPoints.map((point, index) => {
              const locationStatus = getLocationStatus(index);
              const visual = getMarkerVisual(locationStatus);
              const moduleSlug = NEON_MODULES[index] ?? modules[index]?.slug ?? "";
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
            const moduleSlug = NEON_MODULES[index] ?? modules[index]?.slug ?? "";
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
                        router.push(`/lessons/island5/${moduleSlug}`);
                      }
                    }}
                  />
                </HoverCardTrigger>
                <HoverCardContent className="w-96">
                  {isCompleted && mode === "real" ? (
                    // Completed - show achievement NFT
                    (() => {
                      const achievementNumber = (index + 51).toString().padStart(4, "0");
                      const walletAchievement = walletAchievements.find(wa => wa.tokenId === index + 51 && wa.isClaimed);
                      const metadata = achievementMetadata[achievementNumber];
                      
                      return metadata?.image ? (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <Badge className="bg-cyan-500/20 text-cyan-700 dark:text-cyan-300">
                              <BookOpen className="mr-1 size-3" />
                              <span className="capitalize">Web3 Frontend</span>
                            </Badge>
                            <CheckCircle2 className="size-5 text-cyan-500" />
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
                            <Badge className="bg-cyan-500/20 text-cyan-700 dark:text-cyan-300">
                              <BookOpen className="mr-1 size-3" />
                              <span className="capitalize">Web3 Frontend</span>
                            </Badge>
                            <CheckCircle2 className="size-5 text-cyan-500" />
                          </div>
                          
                          <div className="flex justify-center">
                            <div className="relative w-80 h-80 rounded-lg overflow-hidden bg-gradient-to-br from-cyan-100 to-cyan-200 dark:from-cyan-950 dark:to-cyan-900 flex items-center justify-center border-2 border-cyan-300 dark:border-cyan-700">
                              <div className="text-center space-y-2">
                                <div className="text-6xl">🌃</div>
                                <p className="text-lg font-semibold text-cyan-700 dark:text-cyan-300">
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
                                isAvailable ? "bg-cyan-500/80" : "bg-red-500/80"
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

// Backwards compatibility
export const FutureAnimatedMap = NeonAnimatedMap;
