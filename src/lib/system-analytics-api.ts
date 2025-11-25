/**
 * System-wide analytics API client for platform administrators.
 * Provides aggregate metrics across all users.
 */

import { config } from "./config";

const API_BASE = config.apiBaseUrl;

export interface PlatformStats {
  totalUsers: number;
  totalInteractions: number;
  totalFeedbackSubmissions: number;
  averageSatisfaction: number;
  auditorSatisfaction: number;
  chatSatisfaction: number;
  totalModulesCompleted: number;
  avgInteractionsPerUser: number;
  avgModulesPerUser: number;
}

export interface ModuleStats {
  moduleSlug: string;
  completions: number;
  avgDifficulty: number;
  avgClarity: number;
  avgValue: number;
  avgPace: number;
  avgTimeSpent: number;
  aiToolsHelpfulRate: number;
}

export interface ToolBreakdown {
  auditorUsage: number;
  chatUsage: number;
  auditorAvgDuration: number;
  chatAvgDuration: number;
  auditorPositiveFeedback: number;
  auditorNegativeFeedback: number;
  chatPositiveFeedback: number;
  chatNegativeFeedback: number;
}

export interface QueryCategoryStats {
  category: string;
  count: number;
  avgDuration: number;
  satisfactionRate: number;
}

export interface TimeSeriesDataPoint {
  date: string;
  interactions: number;
  positiveFeedback: number;
  negativeFeedback: number;
}

export interface ModuleFeedbackItem {
  id: number;
  walletAddress: string;
  moduleSlug: string;
  contentDifficulty: number;
  contentClarity: number;
  practicalValue: number;
  paceAppropriateness: number;
  whatWorkedWell?: string;
  suggestionsForImprovement?: string;
  additionalTopicsWanted?: string;
  timeSpentMinutes?: number;
  externalResourcesUsed?: boolean;
  aiToolsHelpful?: boolean;
  createdAt: string;
}

export interface TextFeedbackItem {
  id: number;
  interactionId: string;
  walletAddress: string;
  toolType: string;
  feedbackType: string;
  feedbackValue: string;
  qualityRating?: number;
  moduleSlug?: string | null;
  createdAt: string;
}

export interface SystemAnalytics {
  platform: PlatformStats;
  modules: ModuleStats[];
  tools: ToolBreakdown;
  queryCategories: QueryCategoryStats[];
  timeSeries: TimeSeriesDataPoint[];
  recentActivity: {
    id: string;
    walletAddress: string;
    toolType: string;
    createdAt: string;
    feedback?: string;
  }[];
}

/**
 * Fetch platform-wide analytics summary
 */
export async function getSystemAnalytics(): Promise<SystemAnalytics | null> {
  try {
    const response = await fetch(`${API_BASE}/api/v1/analytics/summary`);

    if (!response.ok) {
      throw new Error(`Failed to fetch system analytics: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching system analytics:", error);
    return null;
  }
}

/**
 * Fetch leaderboard data
 */
export async function getLeaderboard(
  limit: number = 10,
  timeframe: string = "30d"
): Promise<{
  timeframe: string;
  topLearners: Array<{
    walletAddress: string;
    achievementCount: number;
    aiInteractions: number;
    avgFeedbackRating: number;
    rank: number;
  }>;
} | null> {
  try {
    const response = await fetch(
      `${API_BASE}/api/v1/analytics/leaderboard?limit=${limit}&timeframe=${timeframe}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch leaderboard: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    return null;
  }
}

/**
 * Fetch module completion feedback
 */
export async function getModuleFeedback(
  limit: number = 50,
  timeframe: string = "30d"
): Promise<{
  timeframe: string;
  feedback: ModuleFeedbackItem[];
} | null> {
  try {
    const response = await fetch(
      `${API_BASE}/api/v1/analytics/module-feedback?limit=${limit}&timeframe=${timeframe}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch module feedback: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching module feedback:", error);
    return null;
  }
}

/**
 * Fetch detailed text feedback
 */
export async function getTextFeedback(
  limit: number = 50,
  timeframe: string = "30d"
): Promise<{
  timeframe: string;
  feedback: TextFeedbackItem[];
} | null> {
  try {
    const response = await fetch(
      `${API_BASE}/api/v1/analytics/text-feedback?limit=${limit}&timeframe=${timeframe}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch text feedback: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching text feedback:", error);
    return null;
  }
}

