"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useAccount } from "wagmi";
import { CheckCircle2, Lock } from "lucide-react";
import { ModuleMeta } from "@/lib/mdx";
import { useAchievements } from "@/hooks/use-achievements";
import { cn } from "@/lib/utils";
import { FROST_MODULES } from "./animated-map";

type ModuleStatus = "completed" | "current" | "locked";

interface FrostModuleProgressListProps {
  modules: ModuleMeta[];
  onModuleHover?: (slug: string) => void;
  onModuleLeave?: () => void;
}

export function FrostModuleProgressList({
  modules,
  onModuleHover,
  onModuleLeave,
}: FrostModuleProgressListProps) {
  const { isConnected } = useAccount();
  const { walletAchievements, isLoadingAchievements } = useAchievements();

  const orderedModules = useMemo(() => {
    const modulesBySlug = new Map(modules.map(module => [module.slug, module]));
    const fromConfig = FROST_MODULES.map(slug => modulesBySlug.get(slug)).filter(Boolean) as ModuleMeta[];

    if (fromConfig.length === modules.length) {
      return fromConfig;
    }

    const seen = new Set(fromConfig.map(module => module.slug));
    const remaining = modules.filter(module => !seen.has(module.slug));
    return [...fromConfig, ...remaining];
  }, [modules]);

  const progressState = useMemo(() => {
    const completed = new Set<number>();

    walletAchievements.forEach(achievement => {
      // Frost Peak uses achievement IDs 6-10
      if (achievement.isClaimed && achievement.tokenId >= 6 && achievement.tokenId <= 10) {
        completed.add(achievement.tokenId - 6);
      }
    });

    const canAccess = (index: number) => {
      if (!isConnected) {
        return false; // All locked for Frost Peak
      }

      if (index === 0) return true;
      return completed.has(index - 1);
    };

    const currentIndex = orderedModules.findIndex((_, index) => !completed.has(index) && canAccess(index));

    return {
      completed,
      currentIndex,
      canAccess,
    };
  }, [isConnected, orderedModules, walletAchievements]);

  const completedCount = progressState.completed.size;
  const totalCount = orderedModules.length;
  const progressLabel = totalCount > 0
    ? `${completedCount}/${totalCount} modules completed`
    : "Modules coming soon";

  const getStatus = (index: number): ModuleStatus => {
    if (progressState.completed.has(index)) {
      return "completed";
    }

    if (index === progressState.currentIndex) {
      return "current";
    }

    return progressState.canAccess(index) ? "current" : "locked";
  };

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-semibold">Module Path</h2>
          <span className="text-sm font-medium text-muted-foreground">{progressLabel}</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Scale the heights of advanced Solidity development through {orderedModules.length} comprehensive modules. Connect your wallet to start your climb.
        </p>
        {isLoadingAchievements ? (
          <p className="text-xs text-muted-foreground">Loading your progress…</p>
        ) : !isConnected ? (
          <p className="text-xs text-muted-foreground">
            Connect your wallet to access Frost Peak modules.
          </p>
        ) : null}
      </div>

      <div className="space-y-4">
        {orderedModules.map((module, index) => {
          const status = getStatus(index);
          const isLocked = status === "locked";
          const isCompleted = status === "completed";
          const isCurrent = status === "current" && !isLocked;
          const handleEnter = () => {
            if (onModuleHover) {
              onModuleHover(module.slug);
            }
          };
          const handleLeave = () => {
            if (onModuleLeave) {
              onModuleLeave();
            }
          };

          const cardClasses = cn(
            "group rounded-2xl border p-5 transition-all duration-200",
            isCompleted && "border-blue-500/40 bg-blue-500/10 hover:border-blue-500/70 hover:bg-blue-500/15",
            isCurrent && "border-blue-500/60 bg-blue-500/10 shadow-lg hover:border-blue-500/80",
            isLocked && "border-muted/20 bg-muted/10 text-muted-foreground",
            isLocked ? "cursor-not-allowed opacity-60" : "cursor-pointer hover:shadow-lg"
          );

          const content = (
            <div className={cardClasses} aria-disabled={isLocked}>
              <div className="flex items-start gap-4">
                <div
                  className={cn(
                    "flex size-11 shrink-0 items-center justify-center rounded-full border",
                    isCompleted && "border-blue-500/50 bg-blue-500/15",
                    isCurrent && "border-blue-500/50 bg-blue-500/15",
                    isLocked && "border-muted/30 bg-muted/20"
                  )}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="size-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  ) : isCurrent ? (
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {index + 1}
                    </span>
                  ) : (
                    <Lock className="size-5 text-muted-foreground" aria-hidden="true" />
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase">
                      <span>Module {index + 1}</span>
                      {isCompleted && (
                        <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-blue-700 dark:text-blue-300">
                          Completed
                        </span>
                      )}
                      {isCurrent && (
                        <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-blue-600 dark:text-blue-300">
                          Available
                        </span>
                      )}
                      {isLocked && (
                        <span className="rounded-full bg-muted/30 px-2 py-0.5 text-muted-foreground">
                          Locked
                        </span>
                      )}
                    </div>
                    <h3
                      className={cn(
                        "text-lg font-semibold leading-tight transition-colors",
                        isCompleted && "text-blue-700 dark:text-blue-300",
                        isCurrent && "text-blue-700 dark:text-blue-300",
                        isLocked && "text-muted-foreground"
                      )}
                    >
                      {module.title}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {module.description}
                  </p>

                  <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground">
                    <span>{module.lessons.length} lessons</span>
                    {!isLocked && (
                      <>
                        <span aria-hidden="true">•</span>
                        <span className={cn(
                          "transition-colors",
                          isCompleted
                            ? "text-blue-600 dark:text-blue-400"
                            : "text-blue-600 dark:text-blue-400 group-hover:underline"
                        )}>
                          {isCompleted ? "Review module" : "Start exploring →"}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );

          const commonProps = {
            onPointerEnter: handleEnter,
            onPointerLeave: handleLeave,
            onFocus: handleEnter,
            onBlur: handleLeave,
          };

          if (isLocked) {
            return (
              <div
                key={module.slug}
                className="relative"
                {...commonProps}
              >
                {content}
              </div>
            );
          }

          return (
            <Link
              key={module.slug}
              href={`/lessons/island2/${module.slug}`}
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-500 rounded-2xl"
              {...commonProps}
            >
              {content}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

