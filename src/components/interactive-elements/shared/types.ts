import { QuizMeta, MissionMeta } from "@/lib/mdx";

// Common result interfaces
export interface QuizResult {
  score: number;
  totalPoints: number;
  passed: boolean;
  timeSpent: number;
}

export interface ApiResultData {
  passed: boolean;
  feedback?: string;
  tokenAddress?: string;
  tokenName?: string;
  tokenSymbol?: string;
  method?: string;
  nextSteps?: string[];
  retryAllowed?: boolean;
  error?: string;
  // Quiz result fields
  score?: number;
  maxScore?: number;
  timeSpent?: number;
}

// Voucher and achievement interfaces
export interface VoucherResponse {
  voucher: {
    taskCode: string;
    wallet: string;
  };
  signature: string;
  contractAddress: string;
  chainId: number;
}

export interface CelebrationData {
  name?: string;
  description?: string;
  image?: string;
  achievementNumber: string;
  category?: "fundamentals" | "advanced" | "security" | "gas";
  attributes?: Array<{
    trait_type: string;
    value: string | number;
  }>;
}

export interface ClaimedAchievement {
  achievementNumber: string;
  hasAchievement: boolean;
  metadataUri?: string;
}

// Interactive element base props
export interface BaseInteractiveElementProps {
  moduleSlug: string;
  missionData?: MissionMeta | null;
}

// Quiz specific interfaces
export interface QuizAnswer {
  questionId: number;
  answer: string | string[];
}

export interface QuizElementProps extends BaseInteractiveElementProps {
  quiz?: QuizMeta | null;
}

// Deploy challenge specific interfaces
export type DeployElementProps = BaseInteractiveElementProps;

// Step management for interactive elements
export type InteractiveStep = "initial" | "active" | "claim" | "completed";

// API submission payload
export interface ApiSubmissionPayload {
  walletAddress: string;
  achievementNumber: string;
  submissionType: 'quiz' | 'transaction' | 'contract' | 'custom';
  submissionData: {
    // Quiz submission
    answers?: Record<string, string>;
    // Transaction submission
    transactionHash?: string;
    chainId?: number;
    claimantAddress?: string;
    method?: 'factory' | 'deployment';
    // Future: other submission types
    [key: string]: unknown;
  };
  metadata: {
    timestamp: string;
    timeSpent?: number;
    [key: string]: unknown;
  };
}

// NFT metadata structure
export interface NFTMetadata {
  name: string;
  description: string;
  image: string;
  attributes?: Array<{
    trait_type: string;
    value: string | number;
  }>;
  external_url?: string;
  background_color?: string;
  animation_url?: string;
}

// Common API response format
export interface ApiResponse {
  success: boolean;
  voucher?: VoucherResponse["voucher"];
  signature?: string;
  contractAddress?: string;
  chainId?: number;
  results?: ApiResultData;
  error?: string;
}
