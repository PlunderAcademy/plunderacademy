"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Sparkles, Crown } from "lucide-react";
import { getLeaderboard } from "@/lib/system-analytics-api";

interface LeaderboardEntry {
  walletAddress: string;
  achievementCount: number;
  aiInteractions: number;
  avgFeedbackRating: number;
  rank: number;
}

interface LeaderboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LeaderboardModal({ isOpen, onClose }: LeaderboardModalProps) {
  const [leaderboard, setLeaderboard] = React.useState<LeaderboardEntry[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      getLeaderboard(50, "all") // Get top 50, all time
        .then((data) => {
          setLeaderboard(data?.topLearners || []);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching leaderboard:", error);
          setIsLoading(false);
        });
    }
  }, [isOpen]);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="size-6 text-yellow-500" />;
      case 2:
        return <Medal className="size-6 text-gray-400" />;
      case 3:
        return <Medal className="size-6 text-amber-600" />;
      default:
        return <Trophy className="size-5 text-muted-foreground" />;
    }
  };

  const getRankBadgeColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white border-0";
      case 2:
        return "bg-gradient-to-r from-gray-300 to-gray-500 text-white border-0";
      case 3:
        return "bg-gradient-to-r from-amber-500 to-amber-700 text-white border-0";
      default:
        return "bg-muted";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Sparkles className="size-6 text-amber-500" />
            Top Learners - All Time
          </DialogTitle>
          <DialogDescription>
            The most dedicated pirates on their journey to EVM mastery
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto pr-2">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading leaderboard...</p>
              </div>
            </div>
          ) : leaderboard.length === 0 ? (
            <div className="text-center py-12">
              <Trophy className="size-16 mx-auto mb-4 text-muted-foreground opacity-50" />
              <p className="text-lg font-medium text-muted-foreground">No leaderboard data yet</p>
              <p className="text-sm text-muted-foreground mt-2">
                Be the first to claim achievements and climb the ranks!
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {/* Top 3 - Special Cards */}
              {leaderboard.slice(0, 3).map((learner) => (
                <Card
                  key={learner.walletAddress}
                  className={`relative overflow-hidden ${
                    learner.rank === 1
                      ? "border-2 border-yellow-500/50 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20"
                      : learner.rank === 2
                      ? "border-2 border-gray-400/50 bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/20"
                      : "border-2 border-amber-600/50 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20"
                  }`}
                >
                  {/* Decorative corner for top 3 */}
                  {learner.rank <= 3 && (
                    <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                      <div
                        className={`absolute transform rotate-45 translate-x-6 -translate-y-6 ${
                          learner.rank === 1
                            ? "bg-yellow-500"
                            : learner.rank === 2
                            ? "bg-gray-400"
                            : "bg-amber-600"
                        } w-20 h-20`}
                      />
                    </div>
                  )}
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      {/* Rank Icon */}
                      <div className="flex-shrink-0">
                        {getRankIcon(learner.rank)}
                      </div>

                      {/* Rank Badge */}
                      <Badge className={`${getRankBadgeColor(learner.rank)} px-3 py-1 text-lg font-bold`}>
                        #{learner.rank}
                      </Badge>

                      {/* User Info */}
                      <div className="flex-1 min-w-0">
                        <p className="font-mono text-lg font-semibold truncate">
                          {learner.walletAddress.slice(0, 10)}...{learner.walletAddress.slice(-8)}
                        </p>
                        <div className="flex items-center gap-4 mt-2 flex-wrap">
                          <div className="flex items-center gap-2">
                            <Award className="size-4 text-amber-600 dark:text-amber-400" />
                            <span className="text-sm font-medium">
                              {learner.achievementCount} {learner.achievementCount === 1 ? "Achievement" : "Achievements"}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Sparkles className="size-4 text-blue-600 dark:text-blue-400" />
                            <span className="text-sm text-muted-foreground">
                              {learner.aiInteractions.toLocaleString()} AI Interactions
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Rest of the leaderboard */}
              {leaderboard.slice(3).map((learner) => (
                <Card key={learner.walletAddress} className="hover:bg-muted/50 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      {/* Rank Badge */}
                      <Badge variant="outline" className="px-3 py-1 font-semibold min-w-[3rem] justify-center">
                        #{learner.rank}
                      </Badge>

                      {/* User Info */}
                      <div className="flex-1 min-w-0">
                        <p className="font-mono text-sm font-medium truncate">
                          {learner.walletAddress.slice(0, 10)}...{learner.walletAddress.slice(-8)}
                        </p>
                        <div className="flex items-center gap-4 mt-1 flex-wrap text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Award className="size-3" />
                            {learner.achievementCount} {learner.achievementCount === 1 ? "Achievement" : "Achievements"}
                          </span>
                          <span className="flex items-center gap-1">
                            <Sparkles className="size-3" />
                            {learner.aiInteractions.toLocaleString()} Interactions
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Footer with fun message */}
        {leaderboard.length > 0 && (
          <div className="flex-shrink-0 mt-4 p-4 bg-muted/50 rounded-lg text-center border-t">
            <p className="text-sm text-muted-foreground">
              🏴‍☠️ Complete modules and earn achievements to climb the ranks! ⚓
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

