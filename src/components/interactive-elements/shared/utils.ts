import { ApiResponse, ClaimedAchievement, ApiSubmissionPayload, NFTMetadata } from "./types";
import { config } from "@/lib/config";

// Module to achievement number mapping
export const MODULE_TO_ACHIEVEMENT_MAP: Record<string, string> = {
  // Island 1 - Jungle Island (0001-0005)
  'blockchain-fundamentals': '0001',
  'evm-fundamentals': '0002', 
  'intro-to-solidity': '0003',
  'zilliqa-evm-setup': '0004',
  'creating-erc20-tokens': '0005',
  
  // Island 2 - Frost Peak (0021-0025)
  'advanced-solidity-foundations': '0021',
  'advanced-data-structures-error-handling': '0022',
  'testing-fundamentals': '0023',
  'staking-concepts-time-logic': '0024',
  'staking-contract-practical': '0025',
  
  // Island 3 - Desert Bluff (0031-0033)
  'erc721-standards-implementation': '0031',
  'desert-alcazaba-kasbah': '0031', // Alias for mission slug
  'advanced-nft-features': '0032',
  'nft-collection-practical': '0033',
  'desert-mound-of-morning': '0033', // Alias for mission slug
  
  // Island 4 - Gilded Bastion (0041-0046)
  'defi-fundamentals-simple-swaps': '0041',
  'fundamentals-simple-swaps': '0041', // Alias for mission slug
  'oracles-randomness-airdrop-patterns': '0042',
  'random-number-generator-practical': '0043',
  'proxy-patterns-upgradeability': '0044',
  'gas-optimization-security-patterns': '0045',
  'upgradable-contract-practical': '0046',
  
  // Island 5 - Neon Haven (0051-0054)
  'web3-frontend-basics': '0051',
  'contract-interactions-error-handling': '0052',
  'dapp-interface-practical': '0053',
  'advanced-security': '0054',
  
  // Secret Achievements (1001-1005)
  'secret-island1': '1001',
  'secret-island2': '1002',
  'secret-island3': '1003',
  'secret-island4': '1004',
  'secret-island5': '1005'
};

// Get achievement number for a module
export function getAchievementNumber(moduleSlug: string): string | undefined {
  return MODULE_TO_ACHIEVEMENT_MAP[moduleSlug];
}

// Check if a module uses transaction submission instead of quiz
export function isTransactionSubmissionModule(moduleSlug: string): boolean {
  const transactionModules = [
    'creating-erc20-tokens',
    'staking-contract-practical',
    'nft-collection-practical',
    'desert-mound-of-morning', // Alias for nft-collection-practical
    'random-number-generator-practical',
    'upgradable-contract-practical'
  ];
  
  return transactionModules.includes(moduleSlug);
}

// Format time in MM:SS format
export function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Submit to API with proper error handling
export async function submitToAPI(payload: ApiSubmissionPayload): Promise<ApiResponse> {
  console.log('Submitting with payload:', payload);
  
  try {
    const endpoint = `${config.apiBaseUrl}/api/v1/vouchers/submit`;

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    
    // Get response text first, then try to parse as JSON
    const responseText = await response.text();
    console.log('Raw API response:', responseText);
    
    let apiResult;
    try {
      apiResult = JSON.parse(responseText);
    } catch (jsonError) {
      console.error('Failed to parse JSON response:', jsonError);
      throw new Error(`API returned invalid JSON. Status: ${response.status}, Response: ${responseText}`);
    }
    
    console.log('API Response:', {
      status: response.status,
      ok: response.ok,
      result: apiResult
    });
    
    return apiResult;
  } catch (error) {
    console.error('Error submitting to API:', error);
    throw error;
  }
}

// Check if achievement is already claimed
export async function checkClaimedStatus(address: string, moduleSlug: string): Promise<ClaimedAchievement | null> {
  if (!address) return null;

  try {
    const response = await fetch(`${config.apiBaseUrl}/api/v1/vouchers/claimed/${address}`);
    if (response.ok) {
      const data = await response.json();
      const achievementNumber = getAchievementNumber(moduleSlug);

      if (achievementNumber) {
        const claimedAchievement = data.claimedAchievements?.find(
          (achievement: ClaimedAchievement) => achievement.achievementNumber === achievementNumber
        );
        return claimedAchievement || null;
      }
    }
  } catch (error) {
    console.error('Error checking claimed status:', error);
  }
  
  return null;
}

// Generate Twitter share URL
export function generateTwitterShare(moduleSlug: string): string {
  const achievementId = getAchievementNumber(moduleSlug) || '0001';
  
  // Use dynamic URLs based on environment
  const baseUrl = typeof window !== 'undefined' 
    ? window.location.origin 
    : process.env.NEXT_PUBLIC_SITE_URL || 
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://plunderacademy.vercel.app');
  
  const sharePageUrl = `${baseUrl}/share/achievement/${achievementId}`;
  
  // Simple share text that will be enhanced by the share page's Open Graph meta tags
  const shareText = `🏴‍☠️ Just unlocked a new achievement at @PlunderAcademy! Check it out:`;
  
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(sharePageUrl)}`;
  
  return twitterUrl;
}

// Load NFT metadata for achievement celebration
export async function loadNFTMetadata(achievementNumber: string): Promise<NFTMetadata | null> {
  try {
    // Try local metadata first, fallback to external CDN
    const localMetadataUrl = `/achievements/metadata/${achievementNumber}.json`;
    const externalMetadataUrl = `https://static.plunderswap.com/training/${achievementNumber}.json`;
    
    // Try local first
    let response = await fetch(localMetadataUrl);
    if (!response.ok) {
      // Fallback to external
      response = await fetch(externalMetadataUrl);
    }
    
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error('Error loading NFT metadata:', error);
  }
  return null;
}

// Get NFT image URL for achievement
export function getNFTImageUrl(achievementNumber: string): string {
  // Use external CDN for achievement images
  return `https://static.plunderswap.com/training/images/${achievementNumber}.webp`;
}
