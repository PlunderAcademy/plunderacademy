"use client";

import { useCallback, useState } from "react";
import type { ModuleMeta } from "@/lib/mdx";
import { NeonAnimatedMap, NEON_MODULES } from "./animated-map";
import { NeonModuleProgressList } from "./module-progress-list";

interface FutureExperienceProps {
  modules: ModuleMeta[];
}

export function FutureExperience({ modules }: FutureExperienceProps) {
  const [highlightedSlug, setHighlightedSlug] = useState<string | null>(null);

  const handleHover = useCallback((slug: string) => {
    if (NEON_MODULES.includes(slug)) {
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
      <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-100/40 via-cyan-100/10 to-transparent p-6 shadow-sm dark:from-cyan-950/40 dark:via-cyan-950/20">
        <NeonAnimatedMap
          mode="real"
          modules={modules}
          highlightedModuleSlug={highlightedSlug}
        />
      </div>
      <NeonModuleProgressList
        modules={modules}
        onModuleHover={handleHover}
        onModuleLeave={handleLeave}
      />
    </div>
  );
}


