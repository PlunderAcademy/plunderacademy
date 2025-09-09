"use client";

import * as React from "react";
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { trainingRegistryABI } from "@/lib/training-registry-abi";

// Demo configuration
const DEMO_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_PLUNDER_ACADEMY_CONTRACT_ADDRESS as `0x${string}`;

interface UnclaimedVoucher {
  achievementNumber: string;
  taskCode: number;
  voucherSignature: string;
  createdAt: string;
}

interface UnclaimedVouchersResponse {
  walletAddress: string;
  contractAddress: string;
  unclaimedVouchers: UnclaimedVoucher[];
}

interface WalletAchievement {
  achievementNumber: string;
  tokenId: number;
  hasVoucher: boolean;
  isClaimed: boolean;
  voucherSignature?: string;
  metadataUri: string;
  createdAt: string;
}

interface NFTMetadata {
  name: string;
  description: string;
  image: string;
  attributes: Array<{
    trait_type: string;
    value: string | number;
  }>;
}

interface WalletAchievementsResponse {
  walletAddress: string;
  contractAddress: string;
  achievements: WalletAchievement[];
}

interface UseAchievementsReturn {
  // State
  unclaimedVouchers: UnclaimedVoucher[];
  walletAchievements: WalletAchievement[];
  achievementMetadata: Record<string, NFTMetadata>;
  loadingMetadata: Set<string>;
  claimingVouchers: Set<string>;
  isLoadingUnclaimed: boolean;
  isLoadingAchievements: boolean;
  
  // Contract state
  unclaimedHash: `0x${string}` | undefined;
  isUnclaimedClaimPending: boolean;
  isUnclaimedConfirming: boolean;
  isUnclaimedConfirmed: boolean;
  unclaimedClaimError: Error | null;
  
  // Functions
  fetchUnclaimedVouchers: () => Promise<void>;
  fetchWalletAchievements: () => Promise<void>;
  fetchNFTMetadata: (metadataUri: string, achievementNumber: string) => Promise<void>;
  claimUnclaimedVoucher: (unclaimedVoucher: UnclaimedVoucher) => Promise<void>;
  
  // Computed values
  totalAchievements: number;
  unclaimedCount: number;
  lastClaimedAchievement: WalletAchievement | null;
}

export function useAchievements(): UseAchievementsReturn {
  const { address } = useAccount();
  const [unclaimedVouchers, setUnclaimedVouchers] = React.useState<UnclaimedVoucher[]>([]);
  const [isLoadingUnclaimed, setIsLoadingUnclaimed] = React.useState(false);
  const [claimingVouchers, setClaimingVouchers] = React.useState<Set<string>>(new Set());
  const [walletAchievements, setWalletAchievements] = React.useState<WalletAchievement[]>([]);
  const [isLoadingAchievements, setIsLoadingAchievements] = React.useState(false);

  const [achievementMetadata, setAchievementMetadata] = React.useState<Record<string, NFTMetadata>>({});
  const [loadingMetadata, setLoadingMetadata] = React.useState<Set<string>>(new Set());
  
  // Refs to prevent infinite loops in useCallback dependencies
  const achievementMetadataRef = React.useRef<Record<string, NFTMetadata>>({});
  const loadingMetadataRef = React.useRef<Set<string>>(new Set());

  // Contract write for unclaimed vouchers
  const { 
    writeContract: writeUnclaimedContract,
    data: unclaimedHash,
    isPending: isUnclaimedClaimPending,
    error: unclaimedClaimError
  } = useWriteContract();

  const { 
    isLoading: isUnclaimedConfirming, 
    isSuccess: isUnclaimedConfirmed 
  } = useWaitForTransactionReceipt({
    hash: unclaimedHash,
  });

  const fetchNFTMetadata = React.useCallback(async (metadataUri: string, achievementNumber: string) => {
    // Use refs to track state without causing re-renders
    const currentMetadata = achievementMetadataRef.current;
    const currentLoading = loadingMetadataRef.current;
    
    if (currentMetadata[achievementNumber] || currentLoading.has(achievementNumber)) {
      return;
    }

    setLoadingMetadata(prev => new Set(prev).add(achievementNumber));
    loadingMetadataRef.current.add(achievementNumber);
    
    try {
      const response = await fetch(metadataUri);
      
      if (!response.ok) {
        throw new Error(`Metadata fetch error: ${response.status}`);
      }

      const metadata: NFTMetadata = await response.json();
      setAchievementMetadata(prev => ({
        ...prev,
        [achievementNumber]: metadata
      }));
      achievementMetadataRef.current[achievementNumber] = metadata;
    } catch (error) {
      console.error(`Error fetching metadata for ${achievementNumber}:`, error);
    } finally {
      setLoadingMetadata(prev => {
        const newSet = new Set(prev);
        newSet.delete(achievementNumber);
        return newSet;
      });
      loadingMetadataRef.current.delete(achievementNumber);
    }
  }, []);

  const fetchWalletAchievements = React.useCallback(async () => {
    if (!address) return;
    
    setIsLoadingAchievements(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_PLUNDER_ACADEMY_API}/api/v1/vouchers/wallet/${address}`);
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data: WalletAchievementsResponse = await response.json();
      setWalletAchievements(data.achievements);
      
      // Fetch metadata for each achievement
      data.achievements.forEach(achievement => {
        if (achievement.isClaimed && achievement.metadataUri) {
          fetchNFTMetadata(achievement.metadataUri, achievement.achievementNumber);
        }
      });
    } catch (error) {
      console.error("Error fetching wallet achievements:", error);
    } finally {
      setIsLoadingAchievements(false);
    }
  }, [address, fetchNFTMetadata]);

  const fetchUnclaimedVouchers = React.useCallback(async () => {
    if (!address) return;
    
    setIsLoadingUnclaimed(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_PLUNDER_ACADEMY_API}/api/v1/vouchers/unclaimed/${address}`);
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data: UnclaimedVouchersResponse = await response.json();
      setUnclaimedVouchers(data.unclaimedVouchers);
      
      // Fetch metadata for each unclaimed voucher
      data.unclaimedVouchers.forEach(voucher => {
        // Construct metadata URI (assuming same pattern as claimed achievements)
        const metadataUri = `https://static.plunderswap.com/training/${voucher.achievementNumber}.json`;
        fetchNFTMetadata(metadataUri, voucher.achievementNumber);
      });
    } catch (error) {
      console.error("Error fetching unclaimed vouchers:", error);
    } finally {
      setIsLoadingUnclaimed(false);
    }
  }, [address, fetchNFTMetadata]);

  const claimUnclaimedVoucher = React.useCallback(async (unclaimedVoucher: UnclaimedVoucher) => {
    const voucherId = `${unclaimedVoucher.taskCode}-${unclaimedVoucher.createdAt}`;
    setClaimingVouchers(prev => new Set(prev).add(voucherId));

    try {
      await writeUnclaimedContract({
        address: DEMO_CONTRACT_ADDRESS,
        abi: trainingRegistryABI,
        functionName: "submitVoucher",
        args: [BigInt(unclaimedVoucher.taskCode), unclaimedVoucher.voucherSignature as `0x${string}`]
      });
    } catch (error) {
      console.error("Error claiming unclaimed voucher:", error);
      setClaimingVouchers(prev => {
        const newSet = new Set(prev);
        newSet.delete(voucherId);
        return newSet;
      });
    }
  }, [writeUnclaimedContract]);

  // Effect to refresh data when transactions confirm
  React.useEffect(() => {
    if (isUnclaimedConfirmed && unclaimedHash) {
      fetchWalletAchievements();
      fetchUnclaimedVouchers();
      setClaimingVouchers(new Set());
    }
  }, [isUnclaimedConfirmed, unclaimedHash, fetchWalletAchievements, fetchUnclaimedVouchers]);

  // Keep refs in sync with state
  React.useEffect(() => {
    achievementMetadataRef.current = achievementMetadata;
  }, [achievementMetadata]);

  React.useEffect(() => {
    loadingMetadataRef.current = loadingMetadata;
  }, [loadingMetadata]);

  // Load data when address changes
  React.useEffect(() => {
    if (address) {
      fetchWalletAchievements();
      fetchUnclaimedVouchers();
    } else {
      // Clear data when wallet disconnects
      setWalletAchievements([]);
      setUnclaimedVouchers([]);
      setAchievementMetadata({});
      setLoadingMetadata(new Set());
      setClaimingVouchers(new Set());
    }
  }, [address, fetchWalletAchievements, fetchUnclaimedVouchers]);

  // Computed values
  const totalAchievements = walletAchievements.filter(a => a.isClaimed).length;
  const unclaimedCount = unclaimedVouchers.length;
  const lastClaimedAchievement = React.useMemo(() => {
    const claimedAchievements = walletAchievements
      .filter(a => a.isClaimed)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return claimedAchievements[0] || null;
  }, [walletAchievements]);



  return {
    // State
    unclaimedVouchers,
    walletAchievements,
    achievementMetadata,
    loadingMetadata,
    claimingVouchers,
    isLoadingUnclaimed,
    isLoadingAchievements,
    
    // Contract state
    unclaimedHash,
    isUnclaimedClaimPending,
    isUnclaimedConfirming,
    isUnclaimedConfirmed,
    unclaimedClaimError,
    
    // Functions
    fetchUnclaimedVouchers,
    fetchWalletAchievements,
    fetchNFTMetadata,
    claimUnclaimedVoucher,
    
    // Computed values
    totalAchievements,
    unclaimedCount,
    lastClaimedAchievement
  };
}

export type { UnclaimedVoucher, WalletAchievement, NFTMetadata };
