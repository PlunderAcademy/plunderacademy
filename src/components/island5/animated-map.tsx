"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ModuleMeta } from "@/lib/mdx";

interface VolcanoAnimatedMapProps {
  mode?: "preview" | "real";
  modules: ModuleMeta[];
}

export function VolcanoAnimatedMap({ mode = "real", modules }: VolcanoAnimatedMapProps) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="aspect-video bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-950/50 dark:to-orange-950/50 border-2 border-dashed border-red-300 dark:border-red-700">
        <div className="h-full flex items-center justify-center p-8">
          <div className="text-center space-y-6">
            <div className="text-8xl opacity-40">🌋</div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-red-800 dark:text-red-200">
                Volcano Island Interactive Map
              </h3>
              <p className="text-red-600 dark:text-red-400 max-w-md">
                Animated frontend integration journey with {modules.length} essential modules for Web3 application development.
              </p>
              <div className="pt-4">
                <Button disabled variant="outline" className="border-red-400 text-red-700 dark:text-red-300">
                  Map Coming in Milestone 2
                </Button>
              </div>
            </div>
            
            {/* Module Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
              {modules.map((module, index) => (
                <div 
                  key={module.slug}
                  className="p-3 bg-red-200/50 dark:bg-red-800/30 rounded-lg border border-red-300 dark:border-red-700"
                >
                  <div className="w-6 h-6 bg-red-400 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-xs font-bold text-white">{index + 1}</span>
                  </div>
                  <p className="text-xs text-red-800 dark:text-red-200 font-medium truncate">
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
