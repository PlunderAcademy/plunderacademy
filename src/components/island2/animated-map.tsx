"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ModuleMeta } from "@/lib/mdx";

interface FrostAnimatedMapProps {
  mode?: "preview" | "real";
  modules: ModuleMeta[];
}

export function FrostAnimatedMap({ mode = "real", modules }: FrostAnimatedMapProps) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950/50 dark:to-cyan-950/50 border-2 border-dashed border-blue-300 dark:border-blue-700">
        <div className="h-full flex items-center justify-center p-8">
          <div className="text-center space-y-6">
            <div className="text-8xl opacity-40">❄️</div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200">
                Frost Peak Interactive Map
              </h3>
              <p className="text-blue-600 dark:text-blue-400 max-w-md">
                Animated mountain expedition featuring {modules.length} advanced Solidity modules with interactive waypoints and progress tracking.
              </p>
              <div className="pt-4">
                <Button disabled variant="outline" className="border-blue-400 text-blue-700 dark:text-blue-300">
                  Map Coming in Milestone 2
                </Button>
              </div>
            </div>
            
            {/* Module Preview */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
              {modules.map((module, index) => (
                <div 
                  key={module.slug}
                  className="p-3 bg-blue-200/50 dark:bg-blue-800/30 rounded-lg border border-blue-300 dark:border-blue-700"
                >
                  <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xs font-bold text-white">{index + 1}</span>
                  </div>
                  <p className="text-xs text-blue-800 dark:text-blue-200 font-medium truncate">
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

// Keep the old export for backwards compatibility
export const DesertAnimatedMap = FrostAnimatedMap;
