"use client";

import * as React from "react";
import Image from "next/image";
import { useAccount } from "wagmi";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { Trophy, Award, Clock, Sparkles } from "lucide-react";
import { useAchievements } from "@/hooks/use-achievements";
import { cn } from "@/lib/utils";

interface HeaderAchievementsProps {
  onOpenModal: () => void;
}

export function HeaderAchievements({ onOpenModal }: HeaderAchievementsProps) {
  const { isConnected } = useAccount();
  const {
    totalAchievements,
    unclaimedCount,
    lastClaimedAchievement,
    achievementMetadata,
    isLoadingAchievements,
    isLoadingUnclaimed,
    fetchWalletAchievements,
    fetchUnclaimedVouchers
  } = useAchievements();

  // Force re-render state
  const [, forceUpdate] = React.useReducer(x => x + 1, 0);
  const [lastUpdateTime, setLastUpdateTime] = React.useState(Date.now());

  // Listen for achievement claimed events
  React.useEffect(() => {
    const handleAchievementClaimed = (event: CustomEvent) => {
      // Force refresh the achievement data immediately
      fetchWalletAchievements();
      fetchUnclaimedVouchers();
      // Force component re-render
      setLastUpdateTime(Date.now());
      forceUpdate();
      
      // Schedule additional refreshes to ensure data is up to date
      setTimeout(() => {
        fetchWalletAchievements();
        fetchUnclaimedVouchers();
        setLastUpdateTime(Date.now());
        forceUpdate();
      }, 1000);
      
      setTimeout(() => {
        fetchWalletAchievements();
        fetchUnclaimedVouchers();
        setLastUpdateTime(Date.now());
        forceUpdate();
      }, 3000);
    };

    window.addEventListener('achievementClaimed', handleAchievementClaimed as EventListener);
    
    return () => {
      window.removeEventListener('achievementClaimed', handleAchievementClaimed as EventListener);
    };
  }, [fetchWalletAchievements, fetchUnclaimedVouchers]);

  // Force re-render when values change
  React.useEffect(() => {
    setLastUpdateTime(Date.now());
    forceUpdate();
  }, [totalAchievements, unclaimedCount]);

  // Don't show anything if wallet is not connected
  if (!isConnected) {
    return null;
  }

  const isLoading = isLoadingAchievements || isLoadingUnclaimed;
  const hasUnclaimedVouchers = unclaimedCount > 0;
  const lastAchievementMetadata = lastClaimedAchievement 
    ? achievementMetadata[lastClaimedAchievement.achievementNumber]
    : null;

  // Create a unique key based on achievement data to force re-renders
  const componentKey = `${totalAchievements}-${unclaimedCount}-${lastUpdateTime}`;

  return (
    <div key={componentKey}>
      <HoverCard openDelay={300} closeDelay={150}>
      <HoverCardTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          onClick={onOpenModal}
          className={cn(
            "relative gap-2 transition-all duration-200",
            hasUnclaimedVouchers && "border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 hover:bg-yellow-100 dark:hover:bg-yellow-900/30"
          )}
          disabled={isLoading}
        >
          <Trophy className={cn(
            "size-4 transition-colors",
            hasUnclaimedVouchers && "text-yellow-600 dark:text-yellow-400"
          )} />
          
          <span className="font-medium">
            {isLoading ? "..." : totalAchievements}
          </span>
          
          {hasUnclaimedVouchers && (
            <Badge 
              variant="secondary" 
              className="h-5 px-1.5 bg-yellow-400 text-yellow-900 hover:bg-yellow-400 animate-pulse"
            >
              {unclaimedCount}
            </Badge>
          )}
          
          {hasUnclaimedVouchers && (
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
          )}
        </Button>
      </HoverCardTrigger>
      
      <HoverCardContent side="bottom" align="end" className="w-80 p-0">
        <Card className="border-0 shadow-none">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Trophy className="size-4" />
              Your Progress
            </CardTitle>
            <CardDescription className="text-xs">
              Achievement progress and rewards
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {/* Summary Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center justify-center gap-1 text-lg font-bold text-primary">
                  <Award className="size-4" />
                  {totalAchievements}
                </div>
                <div className="text-xs text-muted-foreground">Achievements</div>
              </div>
              
              <div className="text-center p-3 bg-muted/30 rounded-lg">
                <div className={cn(
                  "flex items-center justify-center gap-1 text-lg font-bold",
                  hasUnclaimedVouchers ? "text-yellow-600 dark:text-yellow-400" : "text-muted-foreground"
                )}>
                  <Clock className="size-4" />
                  {unclaimedCount}
                </div>
                <div className="text-xs text-muted-foreground">Unclaimed</div>
              </div>
            </div>

            {/* Last Achievement Preview */}
            {lastClaimedAchievement && (
              <>
                <Separator />
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Sparkles className="size-3 text-yellow-500" />
                    Latest Achievement
                  </div>
                  
                  <div className="flex gap-3 p-2 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg">
                    {/* Achievement Image */}
                    <div className="relative w-12 h-12 rounded-md overflow-hidden bg-muted/50 flex-shrink-0">
                      {lastAchievementMetadata?.image ? (
                        <Image 
                          src={lastAchievementMetadata.image} 
                          alt={lastAchievementMetadata.name || "Achievement"}
                          fill
                          className="object-contain"
                          unoptimized
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Award className="size-6 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                    
                    {/* Achievement Details */}
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">
                        {lastAchievementMetadata?.name || "Achievement"}
                      </div>
                      <div className="text-xs text-muted-foreground line-clamp-2">
                        {lastAchievementMetadata?.description || "Well done!"}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Claimed {new Date(lastClaimedAchievement.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Unclaimed Notice */}
            {hasUnclaimedVouchers && (
              <>
                <Separator />
                <div className="p-2 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                  <div className="flex items-center gap-2 text-yellow-800 dark:text-yellow-200 text-xs">
                    <Clock className="size-3" />
                    <span className="font-medium">
                      {unclaimedCount} voucher{unclaimedCount !== 1 ? 's' : ''} ready to claim!
                    </span>
                  </div>
                </div>
              </>
            )}

            {/* Call to Action */}
            <div className="pt-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={onOpenModal}
                className="w-full text-xs"
              >
                View All Achievements
              </Button>
            </div>
          </CardContent>
        </Card>
      </HoverCardContent>
    </HoverCard>
    </div>
  );
}
