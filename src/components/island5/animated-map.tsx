"use client";

import Image from "next/image";
import { ModuleMeta } from "@/lib/mdx";

// Neon Haven module slugs in order
export const NEON_MODULES = [
  'web3-frontend-basics',
  'contract-interactions-error-handling',
  'dapp-interface-practical'
];

// Simple vertical path for now - adjust coordinates later
const pathPoints = [
  { x: 50, y: 75, label: "Location 1", progress: 0 },
  { x: 50, y: 50, label: "Location 2", progress: 50 },
  { x: 50, y: 25, label: "Location 3", progress: 100 },
];

interface NeonAnimatedMapProps {
  mode?: "preview" | "real";
  modules: ModuleMeta[];
  highlightedModuleSlug?: string | null;
}

export function NeonAnimatedMap({ mode = "real", modules, highlightedModuleSlug = null }: NeonAnimatedMapProps) {
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
            src="/islands/island5/island5-map.webp"
            alt="Neon Haven Map"
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
              y1="75"
              x2="50"
              y2="25"
              stroke="#06b6d4"
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
                  fill="#06b6d4"
                  stroke="#164e63"
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
export const VolcanoAnimatedMap = NeonAnimatedMap;
