"use client";

import { useCallback, useState } from "react";
import type { ModuleMeta } from "@/lib/mdx";
import { AnimatedMap, JUNGLE_MODULES } from "./animated-map";
import { JungleModuleProgressList } from "./module-progress-list";

interface JungleExperienceProps {
  modules: ModuleMeta[];
}

export function JungleExperience({ modules }: JungleExperienceProps) {
  const [highlightedSlug, setHighlightedSlug] = useState<string | null>(null);

  const handleHover = useCallback((slug: string) => {
    if (JUNGLE_MODULES.includes(slug)) {
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
      <div className="rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-100/40 via-green-100/10 to-transparent p-6 shadow-sm dark:from-green-950/40 dark:via-green-950/20">
        <AnimatedMap
          mode="real"
          modules={modules}
          highlightedModuleSlug={highlightedSlug}
        />
      </div>
      <JungleModuleProgressList
        modules={modules}
        onModuleHover={handleHover}
        onModuleLeave={handleLeave}
      />
    </div>
  );
}
