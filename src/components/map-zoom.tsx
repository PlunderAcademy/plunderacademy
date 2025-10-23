"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import { useAchievements } from "@/hooks/use-achievements";

const ISLAND_LABELS = ["JUNGLE", "ARCTIC", "DESERT", "CASTLE", "FUTURE"];

const ISLANDS = [
  {
    id: "jungle",
    slug: "jungle",
    name: "Jungle Island",
    title: "Jungle Island - Fundamentals",
  },
  {
    id: "frost",
    slug: "frost",
    name: "Frost Peak",
    title: "Frost Peak - Advanced Solidity",
  },
  {
    id: "desert",
    slug: "desert",
    name: "Desert Bluff",
    title: "Desert Bluff - Token & NFT Launchpad",
  },
  {
    id: "castle",
    slug: "castle",
    name: "Gilded Bastion",
    title: "Gilded Bastion - On-Chain Systems",
  },
  {
    id: "neon",
    slug: "neon",
    name: "Neon Haven",
    title: "Neon Haven - Frontend Integration",
  },
];

export function MapZoom() {
  const router = useRouter();
  const [isZooming, setIsZooming] = useState(false);
  const [hoveredIsland, setHoveredIsland] = useState<number | null>(null);
  const [mobileCurrentIndex, setMobileCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const { isConnected } = useAccount();
  const { walletAchievements } = useAchievements();

  // Calculate user progress
  const { currentIsland, completedIslands } = useMemo(() => {
    if (!isConnected || walletAchievements.length === 0) {
      return { currentIsland: 0, completedIslands: new Set<number>() };
    }

    const completed = new Set<number>();

    const island1Achievements = walletAchievements.filter(
      (achievement) =>
        achievement.isClaimed &&
        achievement.tokenId >= 1 &&
        achievement.tokenId <= 5
    ).length;

    if (island1Achievements === 5) {
      completed.add(0);
    }

    let current = 0;
    if (!completed.has(0)) {
      current = 0;
    } else {
      current = ISLANDS.findIndex(
        (_, index) => index > 0 && !completed.has(index)
      );
      if (current === -1) current = ISLANDS.length - 1;
    }

    return {
      currentIsland: current,
      completedIslands: completed,
    };
  }, [isConnected, walletAchievements]);

  const handleIslandClick = (index: number) => {
    if (isZooming) return;
    setIsZooming(true);
    setTimeout(() => {
      router.push(`/lessons/island${index + 1}`);
    }, 500);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance && mobileCurrentIndex < ISLANDS.length - 1) {
      setMobileCurrentIndex(mobileCurrentIndex + 1);
    }

    if (distance < -minSwipeDistance && mobileCurrentIndex > 0) {
      setMobileCurrentIndex(mobileCurrentIndex - 1);
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const goToIsland = (index: number) => {
    setMobileCurrentIndex(index);
  };

  return (
    <div className="relative mx-auto max-w-7xl mb-8">
      <div
        className={`relative transition-opacity duration-500 ${
          isZooming ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Mobile Carousel */}
        <div className="block md:hidden">
          <div
            className="relative h-[500px] rounded-2xl overflow-hidden border-4 border-amber-900/30 shadow-2xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {ISLANDS.map((island, index) => {
              const isCurrent = index === currentIsland;
              const isCompleted = completedIslands.has(index);
              const isActive = index === mobileCurrentIndex;
              const label = ISLAND_LABELS[index];

              return (
                <div
                  key={island.slug}
                  onClick={() => handleIslandClick(index)}
                  className={`absolute inset-0 transition-all duration-500 ${
                    isActive
                      ? "opacity-100 translate-x-0"
                      : index < mobileCurrentIndex
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                  }`}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={`/Islands/map/island${index + 1}.webp`}
                      alt={island.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
                  </div>

                  {/* Current Badge */}
                  {isCurrent && isConnected && (
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full blur-md opacity-60"></div>
                        <div className="relative bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-white rounded-full px-4 py-1.5 text-xs font-extrabold tracking-wider shadow-xl border border-amber-300/50 backdrop-blur-sm">
                          CURRENT
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Completed Badge */}
                  {isCompleted && (
                    <div className="absolute top-4 right-4 z-20">
                      <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shadow-lg border-2 border-white">
                        ✓
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6">
                    <h2 className="text-6xl font-black mb-4" style={{ color: "rgba(253, 224, 71, 0.95)" }}>
                      {label}
                    </h2>
                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                      {island.name}
                    </h3>
                    <p className="text-sm text-white/90 mb-6 max-w-xs text-center leading-relaxed drop-shadow-md">
                      {island.title.split(" - ")[1] || island.title}
                    </p>
                    <div className="flex items-center gap-2 text-amber-400 font-bold text-sm bg-black/50 px-5 py-3 rounded-full backdrop-blur-sm">
                      <span>Tap to Explore</span>
                      <span className="text-lg">→</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Island Indicators */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {ISLANDS.map((island, index) => (
              <button
                key={island.slug}
                onClick={() => goToIsland(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === mobileCurrentIndex
                    ? "w-8 h-2 bg-amber-500"
                    : "w-2 h-2 bg-amber-500/30"
                }`}
                aria-label={`Go to ${island.name}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:flex gap-1 h-[680px] rounded-2xl overflow-hidden border-4 border-amber-900/30 shadow-2xl">
          {ISLANDS.map((island, index) => {
            const isHovered = hoveredIsland === index;
            const isCurrent = index === currentIsland;
            const isCompleted = completedIslands.has(index);
            const label = ISLAND_LABELS[index];

            return (
              <div
                key={island.slug}
                onClick={() => handleIslandClick(index)}
                onMouseEnter={() => setHoveredIsland(index)}
                onMouseLeave={() => setHoveredIsland(null)}
                className="relative flex-1 cursor-pointer group overflow-hidden transition-all duration-300"
                style={{
                  flex: isHovered ? "1.15" : "1",
                }}
                aria-label={`${island.name} - ${
                  isCompleted ? "Completed" : "Available"
                }`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={`/Islands/map/island${index + 1}.webp`}
                    alt={island.name}
                    fill
                    className={`object-cover transition-all duration-300 ${
                      isHovered
                        ? "scale-110 brightness-110"
                        : "scale-100 brightness-100"
                    }`}
                  />
                  {/* Overlay with blur on hover */}
                  <div
                    className={`absolute inset-0 transition-all duration-300 ${
                      isHovered
                        ? "backdrop-blur-[3px] bg-black/30"
                        : "backdrop-blur-0"
                    }`}
                  />
                </div>

                {/* Current Badge */}
                {isCurrent && isConnected && (
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full blur-md opacity-60"></div>
                      <div className="relative bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-white rounded-full px-4 py-1.5 text-xs font-extrabold tracking-wider shadow-xl border border-amber-300/50 backdrop-blur-sm">
                        CURRENT
                      </div>
                    </div>
                  </div>
                )}

                {/* Completed Badge */}
                {isCompleted && (
                  <div className="absolute top-6 right-6 z-20">
                    <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-lg border-2 border-white">
                      ✓
                    </div>
                  </div>
                )}

                {/* Content Container */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  {/* Vertical Text - moves up on hover */}
                  <div
                    className={`flex flex-col items-center transition-all duration-300 ${
                      isHovered
                        ? "opacity-0 -translate-y-12"
                        : "opacity-100 translate-y-0"
                    }`}
                    style={{
                      gap: "0.5rem",
                    }}
                  >
                    {label.split("").map((letter, letterIndex) => (
                      <span
                        key={letterIndex}
                        className="font-black transition-all duration-300 text-7xl"
                        style={{
                          color: "rgba(253, 224, 71, 0.95)",
                          fontWeight: 900,
                          letterSpacing: "0.02em",
                        }}
                      >
                        {letter}
                      </span>
                    ))}
                  </div>

                  {/* Hover Info - fades in */}
                  <div
                    className={`absolute inset-0 flex flex-col items-center justify-center px-6 text-center transition-all duration-300 ${
                      isHovered
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-12 pointer-events-none"
                    }`}
                  >
                    <h3 className="text-3xl font-black text-white mb-3 drop-shadow-lg">
                      {island.name}
                    </h3>
                    <p className="text-sm text-white/90 mb-4 max-w-[200px] leading-relaxed drop-shadow-md">
                      {island.title.split(" - ")[1] || island.title}
                    </p>
                    <div className="flex items-center gap-2 text-amber-400 font-bold text-sm bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
                      <span>Click to Explore</span>
                      <span className="text-lg">→</span>
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                {isHovered && (
                  <div className="absolute inset-0 z-5 pointer-events-none">
                    <div
                      className="absolute inset-0 opacity-40"
                      style={{
                        background:
                          "radial-gradient(circle at center, rgba(251, 146, 60, 0.3) 0%, transparent 70%)",
                      }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Zoom overlay */}
      {isZooming && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
      )}
    </div>
  );
}
