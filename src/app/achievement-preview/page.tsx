"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";

export default function AchievementPreviewPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Achievement Card Preview</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Interactive preview showcasing the layered achievement card components with different animation styles
        </p>
      </div>

      {/* Animated Achievement Preview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="size-5" />
            Animated Achievement Preview
          </CardTitle>
          <CardDescription>
            Interactive preview showing the layered achievement card components with animations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center items-center gap-6 py-8 flex-wrap">
            {/* First Card - Completely Static */}
            <div className="relative w-80 h-[425px] group cursor-pointer">
              {/* Card Back - Base Layer */}
              <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/achievement-card-parts/Achievement card transparent.png"
                  alt="Achievement Card Back"
                  width={320}
                  height={425}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>

              {/* Sun/Burst Effect - Middle Layer - Completely Static */}
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2">
                  <Image
                    src="/achievement-card-parts/polygon .png"
                    alt="Sun Burst Effect"
                    width={320}
                    height={320}
                    className="w-full h-full object-contain opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                  />
                </div>
              </div>

              {/* Rum Bottle - Top Layer - Static */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-[425px]">
                  <Image
                    src="/achievement-card-parts/Achievement card bottle of rum.png"
                    alt="Static Rum Bottle"
                    width={320}
                    height={425}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Interactive Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent group-hover:from-blue-400/10 group-hover:via-transparent group-hover:to-blue-400/10 transition-all duration-300 rounded-lg"></div>
              
              {/* Card Label */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-md text-sm font-medium">
                Static Version
              </div>
            </div>

            {/* Second Card - "Drunk Wobble" with Pulsing Sun */}
            <div className="relative w-80 h-[425px] group cursor-pointer">
              {/* Card Back - Base Layer */}
              <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/achievement-card-parts/Achievement card transparent.png"
                  alt="Achievement Card Back"
                  width={320}
                  height={425}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Sun/Burst Effect - Middle Layer - Pulsing */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-80">
                  <Image
                    src="/achievement-card-parts/polygon .png"
                    alt="Pulsing Sun Effect"
                    width={320}
                    height={320}
                    className="w-full h-full object-contain opacity-40 group-hover:opacity-70 transition-opacity duration-300 animate-pulse-slow"
                  />
                </div>
              </div>

              {/* Rum Bottle - Top Layer - Drunk Wobble */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-[425px]">
                  <Image
                    src="/achievement-card-parts/Achievement card bottle of rum.png"
                    alt="Wobbling Rum Bottle"
                    width={320}
                    height={425}
                    className="absolute inset-0 w-full h-full object-contain animate-drunk-wobble group-hover:animate-drunk-wobble-intense"
                  />
                </div>
              </div>

              {/* Interactive Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent group-hover:from-purple-400/10 group-hover:via-transparent group-hover:to-purple-400/10 transition-all duration-300 rounded-lg"></div>
              
              {/* Card Label */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-md text-sm font-medium">
                Animated Version
              </div>
            </div>
          </div>
          
          {/* Instructions */}
          <div className="mt-8 text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              Hover over the cards to see interactive effects
            </p>
            <p className="text-xs text-muted-foreground">
              The animated version features a wobbling rum bottle and pulsing sun burst effect
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
