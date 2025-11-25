"use client";

import { useCallback, useState } from "react";
import type { ModuleMeta } from "@/lib/mdx";
import { CastleAnimatedMap, CASTLE_MODULES } from "./animated-map";
import { CastleModuleProgressList } from "./module-progress-list";

interface CastleExperienceProps {
  modules: ModuleMeta[];
}

export function CastleExperience({ modules }: CastleExperienceProps) {
  const [highlightedSlug, setHighlightedSlug] = useState<string | null>(null);

  const handleHover = useCallback((slug: string) => {
    if (CASTLE_MODULES.includes(slug)) {
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
      <div className="rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-yellow-100/40 via-yellow-100/10 to-transparent p-6 shadow-sm dark:from-yellow-950/40 dark:via-yellow-950/20">
        <CastleAnimatedMap
          mode="real"
          modules={modules}
          highlightedModuleSlug={highlightedSlug}
        />
      </div>
      <CastleModuleProgressList
        modules={modules}
        onModuleHover={handleHover}
        onModuleLeave={handleLeave}
      />
    </div>
  );
}


