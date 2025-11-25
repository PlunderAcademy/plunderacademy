"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAchievements } from "@/hooks/use-achievements";
import { AnimatedAchievementCard } from "@/components/animated-achievement-card";
import { ALL_ACHIEVEMENTS, type Achievement, isTimeLimitedAchievement } from "@/lib/achievements-config";
import { 
  Award, 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  ExternalLink,
  Trophy,
  Shield,
  Gauge,
  RefreshCw
} from "lucide-react";

interface AchievementsModalProps {
  isOpen: boolean;
  onClose: () => void;
  useAnimatedCards?: boolean; // New prop to toggle animated cards
}

export function AchievementsModal({ isOpen, onClose, useAnimatedCards = false }: AchievementsModalProps) {
  const {
    unclaimedVouchers,
    walletAchievements,
    achievementMetadata,
    loadingMetadata,
    claimingVouchers,
    isLoadingUnclaimed,
    isLoadingAchievements,
    isUnclaimedClaimPending,
    isUnclaimedConfirming,
    isUnclaimedConfirmed,
    unclaimedClaimError,
    unclaimedHash,
    fetchUnclaimedVouchers,
    fetchWalletAchievements,
    claimUnclaimedVoucher
  } = useAchievements();

  // Refresh data when modal opens
  React.useEffect(() => {
    if (isOpen) {
      fetchWalletAchievements();
      fetchUnclaimedVouchers();
    }
  }, [isOpen, fetchWalletAchievements, fetchUnclaimedVouchers]);

  // Inline celebration state for voucher claims
  const [showInlineCelebration, setShowInlineCelebration] = React.useState(false);
  const [inlineCelebrationData, setInlineCelebrationData] = React.useState<{
    name?: string;
    description?: string;
    image?: string;
    achievementNumber: string;
    category?: Achievement["category"];
  } | null>(null);

  // Track the currently claiming voucher for celebration
  const [currentlyClaimingVoucher, setCurrentlyClaimingVoucher] = React.useState<{
    achievementNumber: string;
    taskCode: number;
    createdAt: string;
    voucherSignature: string;
  } | null>(null);

  // No longer loading metadata for placeholders since we only show achievement number and ???


  // Track unclaimed voucher claims for inline celebration
  const lastUnclaimedConfirmedRef = React.useRef(false);
  
  React.useEffect(() => {
    if (isUnclaimedConfirmed && !lastUnclaimedConfirmedRef.current && currentlyClaimingVoucher) {
      // An unclaimed voucher was just successfully claimed
      // Use the tracked voucher data for inline celebration
      const metadata = achievementMetadata[currentlyClaimingVoucher.achievementNumber];
      const achievement = ALL_ACHIEVEMENTS.find(a => a.taskCode === currentlyClaimingVoucher.taskCode);
      
      setInlineCelebrationData({
        name: metadata?.name || achievement?.title || "Secret Explorer",
        description: metadata?.description || achievement?.description || "Achievement unlocked!",
        image: metadata?.image,
        achievementNumber: currentlyClaimingVoucher.achievementNumber,
        category: achievement?.category || "advanced"
      });
      
      setShowInlineCelebration(true);
      
      // Immediately trigger header refresh event
      window.dispatchEvent(new CustomEvent('achievementClaimed', { 
        detail: { timestamp: Date.now() } 
      }));
      
      // Auto-hide celebration after 5 seconds
      setTimeout(() => {
        setShowInlineCelebration(false);
        setInlineCelebrationData(null);
        setCurrentlyClaimingVoucher(null);
      }, 5000);
      
      // Refresh data immediately and then again after delay
      fetchWalletAchievements();
      fetchUnclaimedVouchers();
      
      setTimeout(() => {
        fetchWalletAchievements();
        fetchUnclaimedVouchers();
        // Trigger another header refresh event after data refresh
        window.dispatchEvent(new CustomEvent('achievementClaimed', { 
          detail: { timestamp: Date.now() } 
        }));
      }, 2000);
    }
    lastUnclaimedConfirmedRef.current = isUnclaimedConfirmed;
  }, [isUnclaimedConfirmed, currentlyClaimingVoucher, achievementMetadata, fetchWalletAchievements, fetchUnclaimedVouchers]);

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
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-none sm:max-w-none w-[60vw] max-h-[90vh] h-[90vh] overflow-hidden flex flex-col pb-4">
          <DialogHeader className="flex-shrink-0">
            <DialogTitle className="flex items-center gap-2">
              <Trophy className="size-5" />
              Your Achievements
            </DialogTitle>
            <DialogDescription>
              Track your progress and claim earned achievements
            </DialogDescription>
          </DialogHeader>

          {/* Inline Achievement Celebration */}
          {showInlineCelebration && inlineCelebrationData && (
            <div className="mx-6 mb-4">
              <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-xl p-1 animate-pulse">
                <div className="bg-background rounded-lg p-6 space-y-4">
                  {/* Fireworks emojis */}
                  <div className="text-center space-y-2">
                    <div className="text-4xl animate-bounce">🎉✨🏆✨🎉</div>
                    <h3 className="text-2xl font-bold text-primary">Achievement Unlocked!</h3>
                  </div>
                  
                  {/* Achievement details */}
                  <div className="flex items-center justify-center gap-4">
                    {inlineCelebrationData.image && (
                      <div className="w-20 h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                        <Image 
                          src={inlineCelebrationData.image}
                          alt={inlineCelebrationData.name || "Achievement"}
                          width={80}
                          height={80}
                          className="w-full h-full object-contain"
                          unoptimized
                        />
                      </div>
                    )}
                    
                    <div className="flex-1 text-center space-y-2">
                      <h4 className="text-xl font-semibold">{inlineCelebrationData.name}</h4>
                      <p className="text-sm text-muted-foreground">{inlineCelebrationData.description}</p>
                      <div className="flex items-center justify-center gap-2">
                        <Badge className={getCategoryColor(inlineCelebrationData.category || "advanced")}>
                          {getCategoryIcon(inlineCelebrationData.category || "advanced")}
                          <span className="ml-1 capitalize">{inlineCelebrationData.category}</span>
                        </Badge>
                        <Badge variant="outline">#{inlineCelebrationData.achievementNumber}</Badge>
                      </div>
                    </div>
                  </div>
                  
                  {/* Success message */}
                  <div className="text-center p-3 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-green-700 dark:text-green-300 font-medium text-sm">
                      🎊 NFT successfully claimed to your wallet!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <Tabs defaultValue="achievements" className="flex-1 flex flex-col overflow-hidden">
            <TabsList className="grid w-full grid-cols-2 flex-shrink-0 mb-4">
              <TabsTrigger value="achievements" className="flex items-center gap-2">
                <Award className="size-4" />
                Your Achievements ({walletAchievements.filter(a => a.isClaimed).length})
              </TabsTrigger>
              <TabsTrigger value="unclaimed" className="flex items-center gap-2">
                <Clock className="size-4" />
                Unclaimed Vouchers ({unclaimedVouchers.length})
              </TabsTrigger>
            </TabsList>

            {/* Your Achievements Tab */}
            <TabsContent value="achievements" className="flex-1 overflow-y-auto">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Award className="size-5" />
                        Your Achievements
                      </CardTitle>
                      <CardDescription>
                        NFT badges you&apos;ve earned by completing training modules
                      </CardDescription>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={fetchWalletAchievements}
                      disabled={isLoadingAchievements}
                    >
                      <RefreshCw className={`size-4 mr-2 ${isLoadingAchievements ? 'animate-spin' : ''}`} />
                      {isLoadingAchievements ? "Loading..." : "Refresh"}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {isLoadingAchievements ? (
                    <div className="text-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                      <p className="text-muted-foreground">Loading your achievements...</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {/* Show all possible achievements - earned ones with images, unearned ones with placeholders */}
                      {/* Time-limited achievements (1100+) only show if claimed, no placeholder */}
                      {ALL_ACHIEVEMENTS.map((demoAchievement) => {
                        const walletAchievement = walletAchievements.find(
                          wa => wa.isClaimed && wa.tokenId === demoAchievement.taskCode
                        );
                        
                        // Skip time-limited achievements if not claimed (don't show placeholder)
                        if (isTimeLimitedAchievement(demoAchievement.taskCode) && !walletAchievement) {
                          return null;
                        }
                        
                        if (walletAchievement) {
                          // Show earned achievement with full styling
                          const metadata = achievementMetadata[walletAchievement.achievementNumber];
                          const isLoadingMeta = loadingMetadata.has(walletAchievement.achievementNumber);
                          
                          if (useAnimatedCards) {
                            // Use AnimatedAchievementCard with auto-assigned animation per achievement
                            return (
                              <AnimatedAchievementCard
                                key={walletAchievement.achievementNumber}
                                achievementNumber={walletAchievement.achievementNumber}
                                // No animation prop - will auto-assign based on achievement number
                                size="sm"
                                className="w-full aspect-[320/425] border rounded-lg overflow-hidden"
                                alt={metadata?.name || demoAchievement.title}
                              >
                                {/* Hover Overlay with same styling as before */}
                                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-4 text-white">
                                  {/* Top Section */}
                                  <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-1">
                                        <Badge className="bg-white/20 text-white border-white/20 hover:bg-white/20">
                                          {getCategoryIcon(demoAchievement.category)}
                                          <span className="ml-1 capitalize">{demoAchievement.category}</span>
                                        </Badge>
                                        {isTimeLimitedAchievement(demoAchievement.taskCode) && (
                                          <Badge className="bg-amber-500/90 text-white border-0">
                                            <Clock className="size-3 mr-1" />
                                            Limited
                                          </Badge>
                                        )}
                                      </div>
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
                              </AnimatedAchievementCard>
                            );
                          } else {
                            // Use original static card rendering
                            return (
                              <div 
                                key={walletAchievement.achievementNumber} 
                                className="relative group border rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 aspect-[320/425]"
                              >
                                {/* NFT Image */}
                                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center relative">
                                  {isLoadingMeta ? (
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                                  ) : metadata?.image ? (
                                    <Image 
                                      src={metadata.image} 
                                      alt={metadata.name || "Achievement Badge"}
                                      fill
                                      className="object-contain"
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
                                      <div className="flex items-center gap-1">
                                        <Badge className="bg-white/20 text-white border-white/20 hover:bg-white/20">
                                          {getCategoryIcon(demoAchievement.category)}
                                          <span className="ml-1 capitalize">{demoAchievement.category}</span>
                                        </Badge>
                                        {isTimeLimitedAchievement(demoAchievement.taskCode) && (
                                          <Badge className="bg-amber-500/90 text-white border-0">
                                            <Clock className="size-3 mr-1" />
                                            Limited
                                          </Badge>
                                        )}
                                      </div>
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
                          }
                        } else {
                          // Show placeholder for unearned achievement
                          const achievementNumber = demoAchievement.taskCode.toString().padStart(4, "0");
                          
                          return (
                            <div 
                              key={`placeholder-${achievementNumber}`} 
                              className="relative border-2 border-dashed border-muted-foreground/30 rounded-lg aspect-[320/425] flex flex-col items-center justify-center text-muted-foreground/60 bg-muted/10 p-4"
                            >
                              <Award className="size-16 mb-4 opacity-40" />
                              <div className="text-center space-y-2">
                                <div className="font-semibold text-sm">Achievement #{achievementNumber}</div>
                                <div className="text-lg font-bold opacity-50">???</div>
                              </div>
                            </div>
                          );
                        }
                      })}
                    </div>
                  )}
                  
                  {/* Show empty state message only when no achievements at all */}
                  {walletAchievements.length === 0 && !isLoadingAchievements && (
                    <div className="text-center py-8 text-muted-foreground">
                      <Award className="size-12 mx-auto mb-4 opacity-50" />
                      <p>Complete training modules to earn your first achievement!</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Unclaimed Vouchers Tab */}
            <TabsContent value="unclaimed" className="flex-1 overflow-y-auto">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Clock className="size-5" />
                        Unclaimed Vouchers
                      </CardTitle>
                      <CardDescription>
                        Vouchers you&apos;ve earned but haven&apos;t claimed on-chain yet
                      </CardDescription>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={fetchUnclaimedVouchers}
                      disabled={isLoadingUnclaimed}
                    >
                      <RefreshCw className={`size-4 mr-2 ${isLoadingUnclaimed ? 'animate-spin' : ''}`} />
                      {isLoadingUnclaimed ? "Loading..." : "Refresh"}
                    </Button>
                  </div>
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
                        const achievement = ALL_ACHIEVEMENTS.find(a => a.taskCode === unclaimedVoucher.taskCode);
                        const metadata = achievementMetadata[unclaimedVoucher.achievementNumber];
                        const voucherId = `${unclaimedVoucher.taskCode}-${unclaimedVoucher.createdAt}`;
                        const isClaiming = claimingVouchers.has(voucherId);
                        
                        return (
                          <div key={voucherId} className="border rounded-lg p-4 space-y-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1">
                                {achievement && (
                                  <Badge className={getCategoryColor(achievement.category)}>
                                    {getCategoryIcon(achievement.category)}
                                    <span className="ml-1 capitalize">{achievement.category}</span>
                                  </Badge>
                                )}
                                {isTimeLimitedAchievement(unclaimedVoucher.taskCode) && (
                                  <Badge className="bg-amber-500 text-white border-0">
                                    <Clock className="size-3 mr-1" />
                                    Limited
                                  </Badge>
                                )}
                              </div>
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
                              onClick={() => {
                                setCurrentlyClaimingVoucher(unclaimedVoucher);
                                claimUnclaimedVoucher(unclaimedVoucher);
                              }}
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
                      <p>No unclaimed vouchers found. Complete training modules to earn vouchers!</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

    </>
  );
}
