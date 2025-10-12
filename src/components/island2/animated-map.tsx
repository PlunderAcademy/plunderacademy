"use client";

import Image from "next/image";
import { ModuleMeta } from "@/lib/mdx";

// Frost Peak module slugs in order
export const FROST_MODULES = [
  'advanced-solidity-foundations',
  'advanced-data-structures-error-handling',
  'testing-fundamentals',
  'staking-concepts-time-logic',
  'staking-contract-practical'
];

// Simple vertical path for now - adjust coordinates later
const pathPoints = [
  { x: 50, y: 80, label: "Location 1", progress: 0 },
  { x: 50, y: 60, label: "Location 2", progress: 25 },
  { x: 50, y: 45, label: "Location 3", progress: 50 },
  { x: 50, y: 30, label: "Location 4", progress: 75 },
  { x: 50, y: 15, label: "Location 5", progress: 100 },
];

interface FrostAnimatedMapProps {
  mode?: "preview" | "real";
  modules: ModuleMeta[];
  highlightedModuleSlug?: string | null;
}

export function FrostAnimatedMap({ mode = "real", modules, highlightedModuleSlug = null }: FrostAnimatedMapProps) {
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
            src="/islands/island2/island2-map.webp"
            alt="Frost Peak Map"
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
              y1="80"
              x2="50"
              y2="15"
              stroke="#3b82f6"
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
                  fill="#3b82f6"
                  stroke="#1e3a8a"
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

// Keep the old export for backwards compatibility
export const DesertAnimatedMap = FrostAnimatedMap;
