"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ModuleMeta } from "@/lib/mdx";

interface MushroomAnimatedMapProps {
  mode?: "preview" | "real";
  modules: ModuleMeta[];
}

export function MushroomAnimatedMap({ mode = "real", modules }: MushroomAnimatedMapProps) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-950/50 dark:to-pink-950/50 border-2 border-dashed border-purple-300 dark:border-purple-700">
        <div className="h-full flex items-center justify-center p-8">
          <div className="text-center space-y-6">
            <div className="text-8xl opacity-40">🍄</div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-200">
                Mushroom Island Interactive Map
              </h3>
              <p className="text-purple-600 dark:text-purple-400 max-w-md">
                Animated on-chain systems map with {modules.length} advanced modules covering DeFi, oracles, and upgradeability patterns.
              </p>
              <div className="pt-4">
                <Button disabled variant="outline" className="border-purple-400 text-purple-700 dark:text-purple-300">
                  Map Coming in Milestone 2
                </Button>
              </div>
            </div>
            
            {/* Module Preview */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
              {modules.map((module, index) => (
                <div 
                  key={module.slug}
                  className="p-3 bg-purple-200/50 dark:bg-purple-800/30 rounded-lg border border-purple-300 dark:border-purple-700"
                >
                  <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xs font-bold text-white">{index + 1}</span>
                  </div>
                  <p className="text-xs text-purple-800 dark:text-purple-200 font-medium truncate">
                    {module.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
