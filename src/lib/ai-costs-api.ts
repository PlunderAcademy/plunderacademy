/**
 * AI costs analytics API client for platform administrators.
 * Provides token usage and cost breakdowns by tool type.
 */

import { config } from "./config";

const API_BASE = config.apiBaseUrl;

export interface PricingModel {
  model: string;
  inputPer1M: number;
  outputPer1M: number;
  currency: string;
}

export interface OverallCosts {
  totalInteractions: number;
  totalInputTokens: number;
  totalOutputTokens: number;
  totalTokens: number;
  avgInputTokens: number;
  avgOutputTokens: number;
  avgTotalTokens: number;
  avgDurationMs: number;
  totalInputCost: number;
  totalOutputCost: number;
  totalCost: number;
  avgCostPerInteraction: number;
}

export interface ToolTypeCosts {
  toolType: string;
  totalInteractions: number;
  avgInputTokens: number;
  avgOutputTokens: number;
  avgDurationMs: number;
  avgInputCost: number;
  avgOutputCost: number;
  avgTotalCost: number;
  totalInputCost: number;
  totalOutputCost: number;
  totalCost: number;
}

export interface AICostsAnalytics {
  timeframe: string;
  period: {
    startDate: string;
    endDate: string;
  };
  pricing: PricingModel;
  overall: OverallCosts;
  byToolType: ToolTypeCosts[];
}

/**
 * Fetch AI costs analytics
 */
export async function getAICosts(
  timeframe: string = "7d"
): Promise<AICostsAnalytics | null> {
  try {
    const response = await fetch(
      `${API_BASE}/api/v1/analytics/ai-costs?timeframe=${timeframe}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch AI costs: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching AI costs:", error);
    return null;
  }
}

