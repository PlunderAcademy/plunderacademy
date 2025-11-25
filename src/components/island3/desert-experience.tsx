"use client";

import { useCallback, useState } from "react";
import type { ModuleMeta } from "@/lib/mdx";
import { DesertAnimatedMap, DESERT_MODULES } from "./animated-map";
import { DesertModuleProgressList } from "./module-progress-list";

interface DesertExperienceProps {
  modules: ModuleMeta[];
}

export function DesertExperience({ modules }: DesertExperienceProps) {
  const [highlightedSlug, setHighlightedSlug] = useState<string | null>(null);

  const handleHover = useCallback((slug: string) => {
    if (DESERT_MODULES.includes(slug)) {
      setHighlightedSlug(slug);
    } else {
      setHighlightedSlug(null);
    }
  }, []);

  const handleLeave = useCallback(() => {
    setHighlightedSlug(null);
  }, []);

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] items-start">
      <div className="rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-100/40 via-orange-100/10 to-transparent p-6 shadow-sm dark:from-orange-950/40 dark:via-orange-950/20">
        <DesertAnimatedMap
          mode="real"
          modules={modules}
          highlightedModuleSlug={highlightedSlug}
        />
      </div>
      <DesertModuleProgressList
        modules={modules}
        onModuleHover={handleHover}
        onModuleLeave={handleLeave}
      />
    </div>
  );
}


