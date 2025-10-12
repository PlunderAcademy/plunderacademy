"use client";

import Image from "next/image";
import { ModuleMeta } from "@/lib/mdx";

// Gilded Bastion module slugs in order
export const CASTLE_MODULES = [
  'defi-fundamentals-simple-swaps',
  'oracles-randomness-airdrop-patterns',
  'random-number-generator-practical',
  'proxy-patterns-upgradeability',
  'gas-optimization-security-patterns',
  'upgradable-contract-practical'
];

// Simple vertical path for now - adjust coordinates later
const pathPoints = [
  { x: 50, y: 82, label: "Location 1", progress: 0 },
  { x: 50, y: 66, label: "Location 2", progress: 20 },
  { x: 50, y: 52, label: "Location 3", progress: 40 },
  { x: 50, y: 38, label: "Location 4", progress: 60 },
  { x: 50, y: 26, label: "Location 5", progress: 80 },
  { x: 50, y: 12, label: "Location 6", progress: 100 },
];

interface CastleAnimatedMapProps {
  mode?: "preview" | "real";
  modules: ModuleMeta[];
  highlightedModuleSlug?: string | null;
}

export function CastleAnimatedMap({ mode = "real", modules, highlightedModuleSlug = null }: CastleAnimatedMapProps) {
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
            src="/islands/island4/island4-map.webp"
            alt="Gilded Bastion Map"
            fill
            className="object-contain"
            priority
          />
          
          {/* SVG Overlay for path and markers - to be implemented */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Simple vertical path */}
            <line
              x1="50"
              y1="82"
              x2="50"
              y2="12"
              stroke="#eab308"
              strokeWidth="0.5"
              strokeDasharray="2 2"
              opacity="0.3"
            />
            
            {/* Location markers - placeholders for now */}
            {pathPoints.map((point, index) => (
              <g key={index}>
                <circle
                  cx={point.x}
                  cy={point.y}
                  r="2"
                  fill="#eab308"
                  stroke="#854d0e"
                  strokeWidth="0.5"
                />
                <text
                  x={point.x}
                  y={point.y}
                  className="select-none text-center font-bold"
                  textAnchor="middle"
                  fontSize="2"
                  dominantBaseline="central"
                  fill="white"
                >
                  {index + 1}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}

// Keep old export name for backwards compatibility
export const MushroomAnimatedMap = CastleAnimatedMap;
