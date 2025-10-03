"use client";

import { useState, useEffect, useCallback } from "react";
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { trainingRegistryABI } from "@/lib/training-registry-abi";
import { useAchievements } from "@/hooks/use-achievements";
import { 
  VoucherResponse, 
  CelebrationData, 
  ClaimedAchievement, 
  InteractiveStep 
} from "./types";
import { 
  checkClaimedStatus, 
  getAchievementNumber, 
  loadNFTMetadata, 
  getNFTImageUrl 
} from "./utils";
import { MissionMeta } from "@/lib/mdx";

interface UseAchievementClaimingProps {
  moduleSlug: string;
  missionData?: MissionMeta | null;
}

export function useAchievementClaiming({ moduleSlug, missionData }: UseAchievementClaimingProps) {
  const { address } = useAccount();
  const { fetchWalletAchievements, fetchUnclaimedVouchers } = useAchievements();
  
  // States
  const [step, setStep] = useState<InteractiveStep>("initial");
  const [voucher, setVoucher] = useState<VoucherResponse | null>(null);
  const [alreadyClaimed, setAlreadyClaimed] = useState(false);
  const [nftImageUrl, setNftImageUrl] = useState<string | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const [celebrationData, setCelebrationData] = useState<CelebrationData | null>(null);

  // Contract interactions
  const { 
    writeContract, 
    data: hash, 
    isPending: isClaimPending,
    error: claimError 
  } = useWriteContract();

  const { 
    isLoading: isConfirming, 
    isSuccess: isConfirmed 
  } = useWaitForTransactionReceipt({
    hash,
  });

  // Check claimed status on mount
  useEffect(() => {
    const checkClaimed = async () => {
      if (!address) return;

      const claimedAchievement = await checkClaimedStatus(address, moduleSlug);
      
      if (claimedAchievement && claimedAchievement.hasAchievement) {
        setAlreadyClaimed(true);
        setStep("completed");
        
        // Load NFT image from metadata
        if (claimedAchievement.metadataUri) {
          try {
            const metadataResponse = await fetch(claimedAchievement.metadataUri);
            if (metadataResponse.ok) {
              const metadata = await metadataResponse.json();
              if (metadata.image) {
                // Convert .png to .webp if needed
                const imageUrl = metadata.image.replace(/\.png$/, '.webp');
                setNftImageUrl(imageUrl);
              }
            }
          } catch (error) {
            console.error('Error loading NFT metadata:', error);
          }
        }
      }
    };

    checkClaimed();
  }, [address, moduleSlug]);

  // Handle successful contract confirmation
  useEffect(() => {
    if (isConfirmed && hash && voucher && missionData) {
      const setupCelebration = async () => {
        const achievementNumber = getAchievementNumber(moduleSlug);
        if (!achievementNumber) return;

        const imageUrl = getNFTImageUrl(achievementNumber);

        // Load NFT metadata for complete attributes
        try {
          const metadata = await loadNFTMetadata(achievementNumber);
          
          if (metadata) {
            setCelebrationData({
              name: metadata.name || missionData.achievementReward?.name || "Achievement Unlocked",
              description: metadata.description || missionData.achievementReward?.description || "Congratulations!",
              achievementNumber,
              category: "fundamentals", // Could be mapped from module
              image: metadata.image || imageUrl,
              attributes: metadata.attributes || []
            });
          } else {
            // Fallback to mission data if metadata fails
            setCelebrationData({
              name: missionData.achievementReward?.name || "Achievement Unlocked",
              description: missionData.achievementReward?.description || "Congratulations!",
              achievementNumber,
              category: "fundamentals",
              image: imageUrl
            });
          }
        } catch (error) {
          console.error('Error loading NFT metadata for celebration:', error);
          // Fallback to mission data
          setCelebrationData({
            name: missionData.achievementReward?.name || "Achievement Unlocked",
            description: missionData.achievementReward?.description || "Congratulations!",
            achievementNumber,
            category: "fundamentals",
            image: imageUrl
          });
        } finally {
          // Ensure celebration shows even if metadata loading fails
          setShowCelebration(true);
        }
      };

      setupCelebration();
      
      // Set NFT image for display in completed section
      setNftImageUrl(getNFTImageUrl(getAchievementNumber(moduleSlug) || "0001"));
      
      // Mark as claimed and set step to completed
      setAlreadyClaimed(true);
      setStep("completed");
    }
  }, [isConfirmed, hash, voucher, missionData, moduleSlug]);

  // Claim achievement function
  const handleClaimAchievement = useCallback(async () => {
    if (!voucher) return;

    try {
      await writeContract({
        address: voucher.contractAddress as `0x${string}`,
        abi: trainingRegistryABI,
        functionName: "submitVoucher",
        args: [BigInt(voucher.voucher.taskCode), voucher.signature as `0x${string}`]
      });
    } catch (error) {
      console.error("Error claiming achievement:", error);
    }
  }, [voucher, writeContract]);

  // Handle celebration close
  const handleCelebrationClose = useCallback(() => {
    setShowCelebration(false);
    // Refresh when celebration closes (after 8 seconds - perfect timing for backend processing)
    fetchWalletAchievements();
    fetchUnclaimedVouchers();
    
    // Trigger a custom event for the header to listen to
    window.dispatchEvent(new CustomEvent('achievementClaimed', { 
      detail: { timestamp: Date.now() } 
    }));
    
    // Additional refresh 3 seconds later to ensure header updates
    setTimeout(() => {
      fetchWalletAchievements();
      fetchUnclaimedVouchers();
      
      // Trigger another event after delayed refresh
      window.dispatchEvent(new CustomEvent('achievementClaimed', { 
        detail: { timestamp: Date.now() } 
      }));
    }, 3000);
  }, [fetchWalletAchievements, fetchUnclaimedVouchers]);

  return {
    // States
    step,
    setStep,
    voucher,
    setVoucher,
    alreadyClaimed,
    nftImageUrl,
    setNftImageUrl,
    showCelebration,
    celebrationData,
    
    // Contract states
    hash,
    isClaimPending,
    isConfirming,
    isConfirmed,
    claimError,
    
    // Functions
    handleClaimAchievement,
    handleCelebrationClose
  };
}
