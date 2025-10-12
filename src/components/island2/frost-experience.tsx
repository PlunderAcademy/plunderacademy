"use client";

import { useCallback, useState } from "react";
import type { ModuleMeta } from "@/lib/mdx";
import { FrostAnimatedMap, FROST_MODULES } from "./animated-map";
import { FrostModuleProgressList } from "./module-progress-list";

interface FrostExperienceProps {
  modules: ModuleMeta[];
}

export function FrostExperience({ modules }: FrostExperienceProps) {
  const [highlightedSlug, setHighlightedSlug] = useState<string | null>(null);

  const handleHover = useCallback((slug: string) => {
    if (FROST_MODULES.includes(slug)) {
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
      <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-100/40 via-blue-100/10 to-transparent p-6 shadow-sm dark:from-blue-950/40 dark:via-blue-950/20">
        <FrostAnimatedMap
          mode="real"
          modules={modules}
          highlightedModuleSlug={highlightedSlug}
        />
      </div>
      <FrostModuleProgressList
        modules={modules}
        onModuleHover={handleHover}
        onModuleLeave={handleLeave}
      />
    </div>
  );
}


