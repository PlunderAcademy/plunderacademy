"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TreePine, Snowflake, Sun, Castle, Building2 } from "lucide-react";
import type { IslandMeta } from "@/lib/mdx";
import { useAccount } from "wagmi";
import { useAchievements } from "@/hooks/use-achievements";

interface MapZoomProps {
  islands: IslandMeta[];
}

export function MapZoom({ islands }: MapZoomProps) {
  const router = useRouter();
  const [isZooming, setIsZooming] = useState(false);
  const [hoveredIsland, setHoveredIsland] = useState<number | null>(null);
  const { isConnected } = useAccount();
  const { walletAchievements } = useAchievements();

  // Calculate user progress
  const { currentIsland, completedIslands } = useMemo(() => {
    if (!isConnected || walletAchievements.length === 0) {
      return { currentIsland: 0, completedIslands: new Set<number>() };
    }

    const completed = new Set<number>();
    
    // Count claimed achievements per island
    const island1Achievements = walletAchievements.filter(
      achievement => achievement.isClaimed && achievement.tokenId >= 1 && achievement.tokenId <= 5
    ).length;
    
    // Island 1 is only complete when ALL 5 modules are done
    if (island1Achievements === 5) {
      completed.add(0);
    }
    
    // Future islands can be added here
    // Island 2: tokens 6-10 (need all 5), etc.

    // Find first incomplete island
    let current = 0;
    if (!completed.has(0)) {
      // Still working on island 1
      current = 0;
    } else {
      // Island 1 complete, move to next
      current = islands.findIndex((_, index) => index > 0 && !completed.has(index));
      if (current === -1) current = islands.length - 1;
    }
    
    return {
      currentIsland: current,
      completedIslands: completed
    };
  }, [isConnected, walletAchievements, islands]);

  const handleIslandClick = (index: number) => {
    if (isZooming) return;
    setIsZooming(true);
    setTimeout(() => {
      router.push(`/lessons/island${index + 1}`);
    }, 500);
  };

  const getIslandIcon = (index: number) => {
    const icons = [
      <TreePine key="jungle" className="w-6 h-6 text-white" />,
      <Snowflake key="frost" className="w-6 h-6 text-white" />,
      <Sun key="desert" className="w-6 h-6 text-white" />,
      <Castle key="gilded" className="w-6 h-6 text-white" />,
      <Building2 key="neon" className="w-6 h-6 text-white" />
    ];
    return icons[index] || null;
  };

  const getStatusBadge = (index: number) => {
    const island = islands[index];
    if (!island) return null;

    const isCompleted = completedIslands.has(index);
    const isCurrent = index === currentIsland;
    const isAvailable = island.status === 'available';

    if (isCompleted) {
      return (
        <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-lg border-2 border-white">
          ✓
        </div>
      );
    }

    if (isCurrent && isConnected) {
      return (
        <div className="absolute -top-3 -right-3 bg-amber-500 text-white rounded-full px-2 py-1 text-xs font-bold shadow-lg border-2 border-white animate-pulse">
          Current
        </div>
      );
    }

    if (!isAvailable) {
      return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-600/90 text-white rounded-lg px-3 py-1.5 text-xs font-bold shadow-lg">
          Coming Soon
        </div>
      );
    }

    return null;
  };

  // Define clickable regions for each island (20% width each)
  const islandRegions = islands.map((island, index) => ({
    island,
    index,
    left: index * 20,
    width: 20,
  }));

  return (
    <div className="relative mx-auto max-w-5xl mb-8">
      <div
        className={`relative transition-opacity duration-500 ${
          isZooming ? "opacity-0" : "opacity-100"
        }`}
        style={{
          transition: isZooming ? "opacity 500ms ease-in" : "opacity 200ms ease-out",
        }}
      >
        <Image
          src="/overall_map.webp"
          alt="Adventure Islands Map"
          width={1440}
          height={810}
          className="w-full h-auto rounded-xl border-2 border-amber-500/30 shadow-2xl"
          priority
        />

        {/* Clickable regions overlay */}
        <div className="absolute inset-0 rounded-xl">
          {islandRegions.map(({ island, index, left, width }) => (
            <div
              key={island.slug}
              onClick={() => handleIslandClick(index)}
              onMouseEnter={() => setHoveredIsland(index)}
              onMouseLeave={() => setHoveredIsland(null)}
              className="absolute inset-y-0 cursor-pointer group"
              style={{
                left: `${left}%`,
                width: `${width}%`,
              }}
              aria-label={`${island.name} - ${island.status === 'available' ? 'Available' : 'Coming Soon'}`}
            >
              {/* Hover overlay */}
              <div 
                className={`absolute inset-0 transition-all duration-300 ${
                  hoveredIsland === index 
                    ? 'bg-white/20 backdrop-blur-sm' 
                    : 'bg-transparent'
                }`}
              />

              {/* Island info tooltip */}
              {hoveredIsland === index && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 pointer-events-none">
                  <div className="bg-white dark:bg-slate-900 rounded-lg shadow-2xl border-2 border-amber-400/50 p-4 min-w-[200px] max-w-[280px]">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-${island.color}-400 to-${island.color}-600 flex items-center justify-center shadow-lg`}>
                        {getIslandIcon(index)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-sm leading-tight text-foreground">{island.name}</h3>
                        {island.status === 'available' && (
                          <p className="text-xs text-muted-foreground mt-0.5">{island.estimatedHours}</p>
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                      {island.description}
                    </p>
                    {island.status === 'available' ? (
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-amber-500/20 rounded-full px-3 py-1 text-xs font-semibold text-amber-700 dark:text-amber-400">
                          {completedIslands.has(index) ? '✓ Completed' : index === currentIsland && isConnected ? '→ Continue' : '▶ Start'}
                        </div>
                      </div>
                    ) : (
                      <div className="text-xs text-center font-medium text-slate-500 dark:text-slate-400">
                        Coming Soon
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Status badge */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                {getStatusBadge(index)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Soft overlay during zoom */}
      {isZooming && (
        <div className="fixed inset-0 z-50 bg-black/30" />
      )}
    </div>
  );
}


