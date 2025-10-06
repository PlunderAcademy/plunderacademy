/**
 * Feedback API client for tracking AI interactions and collecting user feedback.
 * Uses the backend API (NEXT_PUBLIC_PLUNDER_ACADEMY_API) for data persistence.
 */

const API_BASE = process.env.NEXT_PUBLIC_PLUNDER_ACADEMY_API;

export interface AIInteractionData {
  id: string;
  walletAddress: string;
  toolType: "auditor" | "chat";
  inputLength: number;
  outputLength: number;
  modelUsed?: string;
  durationMs: number;
  vulnerabilitiesFound?: number;
  queryCategory?: string;
  currentModule?: string;
  sessionId: string;
}

export interface AIFeedbackData {
  interactionId: string;
  walletAddress: string;
  toolType: "auditor" | "chat";
  feedbackType: "thumbs_up" | "thumbs_down" | "rating" | "text";
  feedbackValue: string;
  qualityRating?: number;
}

export interface ModuleFeedbackData {
  walletAddress: string;
  moduleSlug: string;
  achievementCodes: string[];
  contentDifficulty?: number;
  contentClarity?: number;
  practicalValue?: number;
  paceAppropriateness?: number;
  whatWorkedWell?: string;
  suggestionsForImprovement?: string;
  additionalTopicsWanted?: string;
  timeSpentMinutes?: number;
  externalResourcesUsed?: boolean;
  aiToolsHelpful?: boolean;
}

export interface UserAnalytics {
  walletAddress: string;
  stats: {
    totalAIInteractions: number;
    auditorUsage: number;
    chatUsage: number;
    avgVulnerabilitiesPerScan?: number;
    positiveFeedback: number;
    negativeFeedback: number;
    avgQualityRating?: number;
    modulesCompleted: number;
    avgModuleDifficulty?: number;
    avgModuleValue?: number;
    aiToolsHelpfulRate?: number;
  };
  recentInteractions: Array<{
    id: string;
    toolType: string;
    createdAt: string;
    feedback?: string;
  }>;
  moduleProgress: Array<{
    moduleSlug: string;
    completedAt: string;
    avgRating: number;
  }>;
}

/**
 * Track an AI interaction (called after AI response completes)
 */
export async function trackAIInteraction(
  data: AIInteractionData
): Promise<{ success: boolean; interactionId: string }> {
  try {
    const response = await fetch(`${API_BASE}/api/v1/feedback/ai-interaction`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to track interaction: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error tracking AI interaction:", error);
    // Don't throw - tracking failures shouldn't break the UI
    return { success: false, interactionId: data.id };
  }
}

/**
 * Submit feedback on an AI response
 */
export async function submitAIFeedback(
  data: AIFeedbackData
): Promise<{ success: boolean; feedbackId?: number }> {
  try {
    const response = await fetch(`${API_BASE}/api/v1/feedback/ai-response`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to submit feedback: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error submitting AI feedback:", error);
    return { success: false };
  }
}

/**
 * Submit module completion feedback
 */
export async function submitModuleFeedback(
  data: ModuleFeedbackData
): Promise<{ success: boolean; feedbackId?: number }> {
  try {
    const response = await fetch(
      `${API_BASE}/api/v1/feedback/module-completion`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to submit module feedback: ${response.statusText}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error submitting module feedback:", error);
    return { success: false };
  }
}

/**
 * Get analytics for a specific user
 */
export async function getUserAnalytics(
  walletAddress: string
): Promise<UserAnalytics | null> {
  try {
    const response = await fetch(
      `${API_BASE}/api/v1/analytics/user/${walletAddress}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch analytics: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching user analytics:", error);
    return null;
  }
}

/**
 * Local storage key for feedback cache
 */
const FEEDBACK_CACHE_KEY = "plunder-academy-feedback-cache";

/**
 * Check if feedback has already been provided for an interaction
 */
export function hasFeedback(interactionId: string): boolean {
  if (typeof window === "undefined") return false;

  try {
    const cache = localStorage.getItem(FEEDBACK_CACHE_KEY);
    if (!cache) return false;

    const feedbackCache = JSON.parse(cache) as Record<string, boolean>;
    return !!feedbackCache[interactionId];
  } catch {
    return false;
  }
}

/**
 * Mark an interaction as having feedback
 */
export function markFeedbackProvided(interactionId: string): void {
  if (typeof window === "undefined") return;

  try {
    const cache = localStorage.getItem(FEEDBACK_CACHE_KEY);
    const feedbackCache = cache ? JSON.parse(cache) : {};

    feedbackCache[interactionId] = true;

    // Keep only last 100 interactions to prevent unbounded growth
    const entries = Object.entries(feedbackCache);
    if (entries.length > 100) {
      const recent = entries.slice(-100);
      localStorage.setItem(
        FEEDBACK_CACHE_KEY,
        JSON.stringify(Object.fromEntries(recent))
      );
    } else {
      localStorage.setItem(FEEDBACK_CACHE_KEY, JSON.stringify(feedbackCache));
    }
  } catch (error) {
    console.error("Error caching feedback:", error);
  }
}

