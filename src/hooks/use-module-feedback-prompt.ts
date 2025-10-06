"use client";

import * as React from "react";

/**
 * Hook to manage showing module feedback prompts after achievements are earned.
 * Tracks which modules have had feedback completed (submitted or skipped).
 * Shows feedback prompt only if feedback hasn't been completed for the module.
 */
export function useModuleFeedbackPrompt() {
  const [pendingFeedback, setPendingFeedback] = React.useState<{
    moduleSlug: string;
    achievementCodes: string[];
  } | null>(null);

  const STORAGE_KEY = "plunder-academy-feedback-completed";

  const hasFeedbackBeenCompleted = React.useCallback((moduleSlug: string): boolean => {
    if (typeof window === "undefined") return false;

    try {
      const completed = localStorage.getItem(STORAGE_KEY);
      if (!completed) return false;

      const completedModules = JSON.parse(completed) as string[];
      return completedModules.includes(moduleSlug);
    } catch {
      return false;
    }
  }, []);

  const markFeedbackCompleted = React.useCallback((moduleSlug: string): void => {
    if (typeof window === "undefined") return;

    try {
      const completed = localStorage.getItem(STORAGE_KEY);
      const completedModules = completed ? JSON.parse(completed) : [];

      if (!completedModules.includes(moduleSlug)) {
        completedModules.push(moduleSlug);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(completedModules));
      }
    } catch (error) {
      console.error("Error marking feedback completed:", error);
    }
  }, []);

  const promptForFeedback = React.useCallback(
    (moduleSlug: string, achievementCodes: string[]) => {
      // Only prompt if feedback not already completed for this module
      if (!hasFeedbackBeenCompleted(moduleSlug)) {
        setPendingFeedback({ moduleSlug, achievementCodes });
      }
    },
    [hasFeedbackBeenCompleted]
  );

  const dismissFeedbackPrompt = React.useCallback(() => {
    if (pendingFeedback) {
      markFeedbackCompleted(pendingFeedback.moduleSlug);
    }
    setPendingFeedback(null);
  }, [pendingFeedback, markFeedbackCompleted]);

  return {
    pendingFeedback,
    promptForFeedback,
    dismissFeedbackPrompt,
    hasFeedbackBeenCompleted,
    markFeedbackCompleted,
  };
}

