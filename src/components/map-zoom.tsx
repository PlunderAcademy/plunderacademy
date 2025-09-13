"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TreePine } from "lucide-react";

export function MapZoom() {
  const router = useRouter();
  const [isZooming, setIsZooming] = useState(false);

  const handleClick = () => {
    if (isZooming) return;
    setIsZooming(true);
    setTimeout(() => {
      router.push("/lessons/jungle");
    }, 500);
  };

  return (
    <div className="relative mx-auto max-w-4xl mb-12">
      <div
        onClick={handleClick}
        className={`relative group cursor-pointer transition-opacity duration-500 ${
          isZooming ? "opacity-0" : "opacity-100"
        }`}
        style={{
          transition: isZooming ? "opacity 500ms ease-in" : "opacity 200ms ease-out",
        }}
        aria-label="Open Jungle Island"
      >
        <Image
          src="/overall_map.webp"
          alt="Adventure Islands Map"
          width={1000}
          height={600}
          className="w-full h-auto rounded-xl border-2 border-amber-500/30 shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
          priority
        />

        {/* Interactive Overlay - visual only, does not block clicks */}
        <div className="absolute inset-0 rounded-xl pointer-events-none">
          {/* Jungle Island - Center */}
          <div className="absolute top-[44%] left-[55%] transform -translate-x-1/2 -translate-y-1/2 group/jungle">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/30 rounded-full animate-ping scale-150"></div>
              <div className="relative bg-green-600/80 backdrop-blur-sm rounded-full p-4 border-2 border-white/50 shadow-xl transition-all duration-300 group-hover/jungle:scale-110">
                <TreePine className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 border border-white/50 shadow-lg opacity-0 group-hover/jungle:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-semibold text-green-800 whitespace-nowrap">🌴 Jungle Island</span>
              </div>
            </div>
          </div>

          {/* Desert Island - Top Right */}
          {/* <div className="absolute top-[20%] left-[75%] group/desert">
            <div className="relative">
              <div className="relative bg-orange-600/60 backdrop-blur-sm rounded-full p-3 border-2 border-white/30 shadow-lg">
                <div className="w-6 h-6 rounded-full bg-orange-300"></div>
              </div>
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 border border-white/50 shadow-lg opacity-0 group-hover/desert:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-medium text-orange-800">🏜️ Desert Island</span>
                <div className="text-xs text-orange-600">Coming Soon</div>
              </div>
            </div>
          </div> */}

          {/* Ice Island - Top Left */}
          {/* <div className="absolute top-[20%] left-[25%] group/ice">
            <div className="relative">
              <div className="relative bg-blue-600/60 backdrop-blur-sm rounded-full p-3 border-2 border-white/30 shadow-lg">
                <div className="w-6 h-6 rounded-full bg-blue-300"></div>
              </div>
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 border border-white/50 shadow-lg opacity-0 group-hover/ice:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-medium text-blue-800">🧊 Ice Island</span>
                <div className="text-xs text-blue-600">Coming Soon</div>
              </div>
            </div>
          </div> */}

          {/* Mushroom Island - Bottom Right */}
          {/* <div className="absolute bottom-[20%] left-[70%] group/mushroom">
            <div className="relative">
              <div className="relative bg-purple-600/60 backdrop-blur-sm rounded-full p-3 border-2 border-white/30 shadow-lg">
                <div className="w-6 h-6 rounded-full bg-purple-300"></div>
              </div>
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 border border-white/50 shadow-lg opacity-0 group-hover/mushroom:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-medium text-purple-800">🍄 Mushroom Island</span>
                <div className="text-xs text-purple-600">Coming Soon</div>
              </div>
            </div>
          </div> */}

          {/* Volcano Island - Bottom Left */}
          {/* <div className="absolute bottom-[20%] left-[25%] group/volcano">
            <div className="relative">
              <div className="relative bg-red-600/60 backdrop-blur-sm rounded-full p-3 border-2 border-white/30 shadow-lg">
                <div className="w-6 h-6 rounded-full bg-red-300"></div>
              </div>
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 border border-white/50 shadow-lg opacity-0 group-hover/volcano:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-medium text-red-800">🌋 Volcano Island</span>
                <div className="text-xs text-red-600">Coming Soon</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Soft overlay during zoom */}
      {isZooming && (
        <div className="fixed inset-0 z-50 bg-black/30" />
      )}
    </div>
  );
}


