"use client";

import * as React from "react";
import Image from "next/image";
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { trainingRegistryABI } from "@/lib/training-registry-abi";
import { 
  Award, 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  ExternalLink,
  Trophy,
  Shield,
  Gauge
} from "lucide-react";

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


interface Achievement {
  taskCode: number;
  title: string;
  description: string;
  category: "security" | "gas" | "fundamentals" | "advanced";
}

const demoAchievements: Achievement[] = [
  {
    taskCode: 1,
    title: "Training Quiz Master",
    description: "Complete the comprehensive training quiz with perfect scores",
    category: "fundamentals"
  },
  {
    taskCode: 2,
    title: "On-Chain Pioneer",
    description: "Successfully create and submit a transaction on the blockchain",
    category: "advanced"
  }
];


export function AchievementsDemo() {
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
  

  // Separate contract write for unclaimed vouchers
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

  const claimUnclaimedVoucher = async (unclaimedVoucher: UnclaimedVoucher) => {
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
  };

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

  React.useEffect(() => {
    if (address) {
      fetchWalletAchievements();
      fetchUnclaimedVouchers();
    }
    
    // Always fetch metadata for demo achievements to show in placeholders
    demoAchievements.forEach(achievement => {
      const achievementNumber = achievement.taskCode.toString().padStart(4, "0");
      const metadataUri = `https://static.plunderswap.com/training/${achievementNumber}.json`;
      fetchNFTMetadata(metadataUri, achievementNumber);
    });
  }, [address, fetchWalletAchievements, fetchUnclaimedVouchers, fetchNFTMetadata]);

  const getCategoryIcon = (category: Achievement["category"]) => {
    switch (category) {
      case "security": return <Shield className="size-4" />;
      case "gas": return <Gauge className="size-4" />;
      case "fundamentals": return <Award className="size-4" />;
      case "advanced": return <Trophy className="size-4" />;
    }
  };

  const getCategoryColor = (category: Achievement["category"]) => {
    switch (category) {
      case "security": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "gas": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "fundamentals": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "advanced": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
    }
  };


  return (
    <div className="space-y-6">
      {/* Animated Achievement Preview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="size-5" />
            Animated Achievement Preview
          </CardTitle>
          <CardDescription>
            Interactive preview showing the layered achievement card components with animations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center items-center gap-6 py-8 flex-wrap">
            {/* First Card - Completely Static */}
            <div className="relative w-80 h-[425px] group cursor-pointer">
              {/* Card Back - Base Layer */}
              <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/achievement-card-parts/Achievement card transparent.png"
                  alt="Achievement Card Back"
                  width={320}
                  height={425}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>

              {/* Sun/Burst Effect - Middle Layer - Completely Static */}
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2">
                  <Image
                    src="/achievement-card-parts/polygon .png"
                    alt="Sun Burst Effect"
                    width={320}
                    height={320}
                    className="w-full h-full object-contain opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                  />
                </div>
              </div>

              {/* Rum Bottle - Top Layer - Static */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-[425px]">
                  <Image
                    src="/achievement-card-parts/Achievement card bottle of rum.png"
                    alt="Static Rum Bottle"
                    width={320}
                    height={425}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Interactive Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent group-hover:from-blue-400/10 group-hover:via-transparent group-hover:to-blue-400/10 transition-all duration-300 rounded-lg"></div>
            </div>

            {/* Fourth Card - "Drunk Wobble" with Pulsing Sun */}
            <div className="relative w-80 h-[425px] group cursor-pointer">
              {/* Card Back - Base Layer */}
              <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/achievement-card-parts/Achievement card transparent.png"
                  alt="Achievement Card Back"
                  width={320}
                  height={425}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Sun/Burst Effect - Middle Layer - Pulsing */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-80">
                  <Image
                    src="/achievement-card-parts/polygon .png"
                    alt="Pulsing Sun Effect"
                    width={320}
                    height={320}
                    className="w-full h-full object-contain opacity-40 group-hover:opacity-70 transition-opacity duration-300 animate-pulse-slow"
                  />
                </div>
              </div>

              {/* Rum Bottle - Top Layer - Drunk Wobble */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-[425px]">
                  <Image
                    src="/achievement-card-parts/Achievement card bottle of rum.png"
                    alt="Wobbling Rum Bottle"
                    width={320}
                    height={425}
                    className="absolute inset-0 w-full h-full object-contain animate-drunk-wobble group-hover:animate-drunk-wobble-intense"
                  />
                </div>
              </div>

              {/* Interactive Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent group-hover:from-purple-400/10 group-hover:via-transparent group-hover:to-purple-400/10 transition-all duration-300 rounded-lg"></div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Current Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="size-5" />
            Your Achievements
            <Button
              variant="outline"
              size="sm"
              onClick={fetchWalletAchievements}
              disabled={isLoadingAchievements}
              className="ml-auto"
            >
              {isLoadingAchievements ? "Loading..." : "Refresh"}
            </Button>
          </CardTitle>
          <CardDescription>
            NFT badges you&apos;ve earned by completing training modules
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoadingAchievements ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading your achievements...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Show all possible achievements - earned ones with images, unearned ones with placeholders */}
              {demoAchievements.map((demoAchievement) => {
                const walletAchievement = walletAchievements.find(
                  wa => wa.isClaimed && wa.tokenId === demoAchievement.taskCode
                );
                
                if (walletAchievement) {
                  // Show earned achievement with full styling
                  const metadata = achievementMetadata[walletAchievement.achievementNumber];
                  const isLoadingMeta = loadingMetadata.has(walletAchievement.achievementNumber);
                  
                  return (
                    <div 
                      key={walletAchievement.achievementNumber} 
                      className="relative group border rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 aspect-[320/425]"
                    >
                      {/* NFT Image */}
                      <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                        {isLoadingMeta ? (
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                        ) : metadata?.image ? (
                          <Image 
                            src={metadata.image} 
                            alt={metadata.name || "Achievement Badge"}
                            width={320}
                            height={425}
                            className="w-full h-full object-contain"
                                      onError={(e) => {
            e.currentTarget.style.display = 'none';
            const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
            if (nextElement) nextElement.style.display = 'flex';
          }}
                            unoptimized
                          />
                        ) : null}
                        {/* Fallback icon */}
                        <div className="flex-col items-center justify-center text-muted-foreground" style={{ display: metadata?.image ? 'none' : 'flex' }}>
                          <Award className="size-12 mb-2" />
                          <span className="text-sm">Achievement Badge</span>
                        </div>
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-4 text-white">
                        {/* Top Section */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Badge className="bg-white/20 text-white border-white/20 hover:bg-white/20">
                              {getCategoryIcon(demoAchievement.category)}
                              <span className="ml-1 capitalize">{demoAchievement.category}</span>
                            </Badge>
                            <CheckCircle className="size-5 text-green-400" />
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-lg">{metadata?.name || demoAchievement.title}</h4>
                            <p className="text-sm text-gray-200 mt-1">
                              {metadata?.description || demoAchievement.description}
                            </p>
                          </div>

                          {/* Attributes */}
                          {metadata?.attributes && metadata.attributes.length > 0 && (
                            <div className="space-y-1">
                              <div className="text-xs font-medium text-gray-300">Attributes:</div>
                              <div className="flex flex-wrap gap-1">
                                {metadata.attributes.slice(0, 3).map((attr, index) => (
                                  <span
                                    key={index}
                                    className="text-xs bg-white/20 px-2 py-1 rounded"
                                  >
                                    {attr.trait_type}: {attr.value}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Bottom Section */}
                        <div className="space-y-1 text-xs text-gray-300">
                          <div>Achievement #{walletAchievement.achievementNumber}</div>
                          <div>Claimed: {new Date(walletAchievement.createdAt).toLocaleDateString()}</div>
                          <div>Token ID: #{walletAchievement.tokenId}</div>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  // Show placeholder for unearned achievement
                  const achievementNumber = demoAchievement.taskCode.toString().padStart(4, "0");
                  const metadata = achievementMetadata[achievementNumber];
                  const isLoadingMeta = loadingMetadata.has(achievementNumber);
                  
                  return (
                    <div 
                      key={`placeholder-${achievementNumber}`} 
                      className="relative border-2 border-dashed border-muted-foreground/30 rounded-lg aspect-[320/425] flex flex-col items-center justify-center text-muted-foreground/60 bg-muted/10 p-4"
                    >
                      <Award className="size-16 mb-4 opacity-40" />
                      <div className="text-center space-y-2">
                        <div className="font-semibold text-sm">Achievement #{achievementNumber}</div>
                        
                        {isLoadingMeta ? (
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary mx-auto"></div>
                        ) : metadata ? (
                          <>
                            <div className="text-xs font-medium">{metadata.name}</div>
                            <div className="text-xs opacity-75">{metadata.description}</div>
                            
                            {/* Attributes */}
                            {metadata.attributes && metadata.attributes.length > 0 && (
                              <div className="space-y-1 mt-2">
                                <div className="text-xs font-medium opacity-60">Attributes:</div>
                                <div className="flex flex-wrap gap-1 justify-center">
                                  {metadata.attributes.slice(0, 2).map((attr, index) => (
                                    <span
                                      key={index}
                                      className="text-xs bg-muted-foreground/20 px-2 py-1 rounded opacity-60"
                                    >
                                      {attr.trait_type}: {attr.value}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </>
                        ) : (
                          <>
                            <div className="text-xs">{demoAchievement.title}</div>
                            <div className="text-xs opacity-75">{demoAchievement.description}</div>
                          </>
                        )}
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          )}
          
          {/* Show empty state message only when no achievements at all */}
          {walletAchievements.length === 0 && (
            <div className="text-center py-4 text-muted-foreground">
              <p>Complete the demo below to earn your first badge!</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Unclaimed Vouchers */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="size-5" />
            Unclaimed Vouchers
            <Button
              variant="outline"
              size="sm"
              onClick={fetchUnclaimedVouchers}
              disabled={isLoadingUnclaimed}
              className="ml-auto"
            >
              {isLoadingUnclaimed ? "Loading..." : "Refresh"}
            </Button>
          </CardTitle>
          <CardDescription>
            Vouchers you&apos;ve earned but haven&apos;t claimed on-chain yet
          </CardDescription>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-3 rounded-lg mt-4">
            <div className="flex items-center gap-2 text-blue-800 dark:text-blue-200 text-sm">
              <AlertCircle className="size-4" />
              <span className="font-medium">Note:</span>
              <span>You will need ZIL in your wallet to pay for gas fees when claiming.</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {isLoadingUnclaimed ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading unclaimed vouchers...</p>
            </div>
          ) : unclaimedVouchers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {unclaimedVouchers.map((unclaimedVoucher) => {
                const achievement = demoAchievements.find(a => a.taskCode === unclaimedVoucher.taskCode);
                const metadata = achievementMetadata[unclaimedVoucher.achievementNumber];
                const voucherId = `${unclaimedVoucher.taskCode}-${unclaimedVoucher.createdAt}`;
                const isClaiming = claimingVouchers.has(voucherId);
                
                return (
                  <div key={voucherId} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      {achievement && (
                        <Badge className={getCategoryColor(achievement.category)}>
                          {getCategoryIcon(achievement.category)}
                          <span className="ml-1 capitalize">{achievement.category}</span>
                        </Badge>
                      )}
                      <div className="text-xs text-muted-foreground">
                        #{unclaimedVoucher.achievementNumber}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold">{metadata?.name || achievement?.title || "Achievement"}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {metadata?.description || achievement?.description || "Unclaimed achievement"}
                      </p>
                    </div>

                    {/* Attributes */}
                    {metadata?.attributes && metadata.attributes.length > 0 && (
                      <div className="space-y-1">
                        <div className="text-xs font-medium text-muted-foreground">Attributes:</div>
                        <div className="flex flex-wrap gap-1">
                          {metadata.attributes.slice(0, 3).map((attr, index) => (
                            <span
                              key={index}
                              className="text-xs bg-muted px-2 py-1 rounded"
                            >
                              {attr.trait_type}: {attr.value}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <div>Earned: {new Date(unclaimedVoucher.createdAt).toLocaleDateString()}</div>
                      <div className="break-all">Signature: {unclaimedVoucher.voucherSignature.slice(0, 20)}...</div>
                    </div>
                    
                    <Button
                      onClick={() => claimUnclaimedVoucher(unclaimedVoucher)}
                      disabled={isClaiming || isUnclaimedClaimPending || isUnclaimedConfirming}
                      className="w-full"
                      size="sm"
                    >
                      {isUnclaimedClaimPending && isClaiming ? "Confirming..." : 
                       isUnclaimedConfirming && isClaiming ? "Processing..." :
                       isClaiming ? "Claiming..." : "Claim on Blockchain"}
                    </Button>
                    
                    {/* Transaction Status for this voucher */}
                    {isClaiming && unclaimedHash && (
                      <div className="text-xs space-y-1">
                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                          <ExternalLink className="size-3" />
                          <span>Transaction submitted</span>
                        </div>
                        <div className="font-mono text-xs break-all">
                          {unclaimedHash.slice(0, 20)}...
                        </div>
                        {isUnclaimedConfirming && (
                          <div className="text-blue-600 dark:text-blue-400">
                            ⏳ Waiting for confirmation...
                          </div>
                        )}
                        {isUnclaimedConfirmed && (
                          <div className="text-green-600 dark:text-green-400">
                            ✅ Achievement claimed successfully!
                          </div>
                        )}
                      </div>
                    )}
                    
                    {/* Error State */}
                    {unclaimedClaimError && isClaiming && (
                      <div className="text-xs text-red-600 dark:text-red-400">
                        ❌ {unclaimedClaimError.message}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <Clock className="size-12 mx-auto mb-4 opacity-50" />
              <p>No unclaimed vouchers found. Complete achievements above to earn vouchers!</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
