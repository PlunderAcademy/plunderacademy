"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  ExternalLink, 
  Share2, 
  Copy,
  MessageSquare
} from "lucide-react";
import { MissionMeta } from "@/lib/mdx";
import { ApiResultData, QuizResult } from "./types";
import { generateTwitterShare, isTransactionSubmissionModule } from "./utils";

interface AchievementClaimSectionProps {
  moduleSlug: string;
  missionData?: MissionMeta | null;
  result?: QuizResult | null;
  apiResults?: ApiResultData | null;
  alreadyClaimed: boolean;
  justClaimed?: boolean;
  nftImageUrl?: string | null;
  hash?: string;
  isClaimPending?: boolean;
  isConfirming?: boolean;
  claimError?: Error | null;
  onClaimAchievement: () => void;
  onRetake?: () => void;
  onShowFeedback?: () => void;
  hasFeedbackCompleted?: boolean;
}

export function AchievementClaimSection({
  moduleSlug,
  missionData,
  result,
  apiResults,
  alreadyClaimed,
  justClaimed = false,
  nftImageUrl,
  hash,
  isClaimPending,
  isConfirming,
  claimError,
  onClaimAchievement,
  onRetake,
  onShowFeedback,
  hasFeedbackCompleted
}: AchievementClaimSectionProps) {
  
  const isTransactionModule = isTransactionSubmissionModule(moduleSlug);
  
  // Get deployment type specific messaging
  const getDeploymentTitle = () => {
    if (moduleSlug === 'creating-erc20-tokens') return 'Token Creation Results';
    if (moduleSlug === 'staking-contract-practical') return 'Staking Contract Deployment Results';
    if (moduleSlug === 'nft-collection-practical') return 'NFT Collection Deployment Results';
    if (moduleSlug === 'random-number-generator-practical') return 'RNG Contract Deployment Results';
    if (moduleSlug === 'upgradable-contract-practical') return 'Upgradeable Contract Deployment Results';
    if (moduleSlug === 'dapp-interface-practical') return 'dApp Interface Deployment Results';
    return 'Deployment Results';
  };
  
  const getSuccessMessage = () => {
    if (moduleSlug === 'creating-erc20-tokens') return '🎉 Token Successfully Created!';
    if (moduleSlug === 'staking-contract-practical') return '🎉 Staking Contract Successfully Deployed!';
    if (moduleSlug === 'nft-collection-practical') return '🎉 NFT Collection Successfully Deployed!';
    if (moduleSlug === 'random-number-generator-practical') return '🎉 RNG Contract Successfully Deployed!';
    if (moduleSlug === 'upgradable-contract-practical') return '🎉 Upgradeable Contract Successfully Deployed!';
    if (moduleSlug === 'dapp-interface-practical') return '🎉 dApp Interface Successfully Deployed!';
    return '🎉 Contract Successfully Deployed!';
  };
  
  const getDetailsHeader = () => {
    if (moduleSlug === 'creating-erc20-tokens') return '🪙 Your Token Details:';
    if (moduleSlug === 'staking-contract-practical') return '📊 Your Staking Contract Details:';
    if (moduleSlug === 'nft-collection-practical') return '🖼️ Your NFT Collection Details:';
    if (moduleSlug === 'random-number-generator-practical') return '🎲 Your RNG Contract Details:';
    if (moduleSlug === 'upgradable-contract-practical') return '⬆️ Your Upgradeable Contract Details:';
    if (moduleSlug === 'dapp-interface-practical') return '🌐 Your dApp Interface Details:';
    return '📋 Your Deployment Details:';
  };

  // Already claimed view
  if (alreadyClaimed) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="size-5 text-green-500" />
            {justClaimed ? 'Achievement Claimed!' : 'Achievement Already Claimed'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold text-green-600">
              ✅ Completed
            </div>
            <Badge variant="default">CLAIMED</Badge>
          </div>

          {/* Achievement Reward Details */}
          {missionData?.achievementReward && (
            <div className="border rounded-lg p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
              <h4 className="font-semibold text-lg mb-2">🏆 {missionData.achievementReward.name}</h4>
              <p className="text-sm text-muted-foreground">{missionData.achievementReward.description}</p>
            </div>
          )}

          {/* NFT Image Display */}
          {nftImageUrl && (
            <div className="text-center">
              <p className="text-sm font-medium text-muted-foreground mb-3">Your Achievement NFT:</p>
              <div className="inline-block border-2 border-yellow-400 rounded-lg p-2 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
                <Image 
                  src={nftImageUrl} 
                  alt={missionData?.achievementReward?.name || "Achievement NFT"} 
                  width={192}
                  height={256}
                  className="w-48 h-64 object-contain rounded"
                  unoptimized
                />
              </div>
            </div>
          )}

          <div className="text-center p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg">
            <p className="text-green-700 dark:text-green-300 font-semibold">
              {justClaimed ? '🎉 Your achievement has been successfully claimed!' : '🎉 You have already claimed this achievement!'}
            </p>
            <p className="text-sm text-green-600 dark:text-green-400 mt-1">
              Your NFT achievement is safely stored in your wallet.
            </p>
          </div>

          {/* Share to Twitter and Feedback Buttons */}
          <div className="text-center pt-4 space-y-3">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={() => window.open(generateTwitterShare(moduleSlug), '_blank')}
                className="bg-blue-500 hover:bg-blue-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2"
              >
                <Share2 className="size-4" />
                Share Achievement on X
              </Button>
              
              {onShowFeedback && (
                <Button
                  onClick={onShowFeedback}
                  variant="outline"
                  className="flex items-center gap-2 border-2 hover:bg-accent"
                >
                  <MessageSquare className="size-4" />
                  Give Feedback
                </Button>
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              🏴‍☠️ Share your achievement & help us improve!
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Claim state - ready to claim voucher
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {result?.passed ? (
            <CheckCircle className="size-5 text-green-500" />
          ) : (
            <XCircle className="size-5 text-red-500" />
          )}
          {isTransactionModule ? getDeploymentTitle() : 'Quiz Results'}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center space-y-2">
          {!isTransactionModule && result && (
            <>
              <div className="text-3xl font-bold">
                {result.score}/{result.totalPoints}
              </div>
              <div className="text-muted-foreground">
                {Math.round((result.score / result.totalPoints) * 100)}% Score
              </div>
            </>
          )}
          {isTransactionModule && result?.passed && (
            <div className="text-3xl font-bold text-green-600">
              {getSuccessMessage()}
            </div>
          )}
          <Badge variant={result?.passed ? "default" : "destructive"}>
            {result?.passed ? "PASSED" : "FAILED"}
          </Badge>
        </div>

        {/* Error display for failed transaction modules */}
        {isTransactionModule && !result?.passed && apiResults?.error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-red-800 dark:text-red-200 mb-2">
              <AlertCircle className="size-4" />
              <h4 className="font-semibold">Deployment Failed</h4>
            </div>
            <p className="text-sm text-red-700 dark:text-red-300">
              {apiResults.error}
            </p>
          </div>
        )}

        {/* Deployment details for transaction submission modules */}
        {isTransactionModule && apiResults && result?.passed && (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">{getDetailsHeader()}</h4>
            <div className="space-y-2 text-sm">
              {apiResults.tokenName && (
                <div className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300">Name:</span>
                  <span className="font-medium">{apiResults.tokenName}</span>
                </div>
              )}
              {apiResults.tokenSymbol && (
                <div className="flex justify-between">
                  <span className="text-green-700 dark:text-green-300">Symbol:</span>
                  <span className="font-medium">{apiResults.tokenSymbol}</span>
                </div>
              )}
              {apiResults.tokenAddress && (
                <div className="flex justify-between items-center">
                  <span className="text-green-700 dark:text-green-300">Address:</span>
                  <div className="flex items-center gap-2">
                    <code className="text-xs bg-green-100 dark:bg-green-800/30 px-2 py-1 rounded font-mono break-all">
                      {apiResults.tokenAddress}
                    </code>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      onClick={() => apiResults.tokenAddress && navigator.clipboard.writeText(apiResults.tokenAddress)}
                      className="h-6 w-6 p-0"
                    >
                      <Copy className="size-3" />
                    </Button>
                  </div>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-green-700 dark:text-green-300">Method:</span>
                <Badge variant="outline">{apiResults.method === 'factory' ? '🚀 Factory' : '🛠️ Deployment'}</Badge>
              </div>
            </div>
            {apiResults.feedback && (
              <p className="text-sm text-green-700 dark:text-green-300 mt-3 p-2 bg-green-100 dark:bg-green-800/30 rounded">
                ✅ {apiResults.feedback}
              </p>
            )}
          </div>
        )}

        {/* Quiz stats for non-transaction modules */}
        {!isTransactionModule && result && (
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="font-semibold">{Math.floor((result.timeSpent || 0) / 60)}:{((result.timeSpent || 0) % 60).toString().padStart(2, '0')}</div>
              <div className="text-sm text-muted-foreground">Time Spent</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="font-semibold">80%</div>
              <div className="text-sm text-muted-foreground">Required</div>
            </div>
          </div>
        )}

        {result?.passed ? (
          <div className="space-y-4">
            <div className="text-center p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg">
              <p className="text-green-700 dark:text-green-300 font-semibold">
                🎉 Congratulations! You passed!
              </p>
              <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                Your achievement has been recorded.
              </p>
            </div>

            {/* Achievement Reward Details */}
            {missionData?.achievementReward && (
              <div className="border rounded-lg p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
                <h4 className="font-semibold text-lg mb-2">🏆 {missionData.achievementReward.name}</h4>
                <p className="text-sm text-muted-foreground">{missionData.achievementReward.description}</p>
              </div>
            )}

            {/* NFT Image Display */}
            {nftImageUrl && (
              <div className="text-center">
                <p className="text-sm font-medium text-muted-foreground mb-3">Your Achievement NFT:</p>
                <div className="inline-block border-2 border-yellow-400 rounded-lg p-2 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
                  <Image 
                    src={nftImageUrl}
                    alt={missionData?.achievementReward?.name || "Achievement NFT"} 
                    width={192}
                    height={256}
                    className="w-48 h-64 object-contain rounded"
                    unoptimized
                  />
                </div>
              </div>
            )}

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-blue-800 dark:text-blue-200 mb-2">
                <AlertCircle className="size-4" />
                <span className="font-medium">Ready to Claim</span>
              </div>
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                Your voucher is ready! Click below to claim your NFT achievement on the blockchain.
              </p>
              <div className="text-xs text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-800/30 p-3 rounded border">
                <p className="font-medium mb-1">📝 Important Notes:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>If you can&apos;t claim now, don&apos;t worry - you can claim all unclaimed vouchers from your achievements screen under wallet details</li>
                  <li>You will need ZIL in your wallet to pay for gas fees</li>
                  <li>Currently on Testnet - get free ZIL from the <a href="https://faucet.testnet.zilliqa.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500">Zilliqa Testnet Faucet</a></li>
                </ul>
              </div>
            </div>

            {claimError && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-red-800 dark:text-red-200">
                  <AlertCircle className="size-4" />
                  <span className="font-medium">Claim Error</span>
                </div>
                <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                  {claimError.message}
                </p>
              </div>
            )}

            {hash && (
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-blue-800 dark:text-blue-200 mb-2">
                  <ExternalLink className="size-4" />
                  <span className="font-medium">Transaction Submitted</span>
                </div>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Hash: <span className="font-mono text-xs">{hash}</span>
                </p>
                {isConfirming && (
                  <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                    Waiting for confirmation...
                  </p>
                )}
              </div>
            )}

            <Button 
              onClick={onClaimAchievement} 
              disabled={isClaimPending || isConfirming}
              className="w-full"
            >
              {isClaimPending || isConfirming ? "Claiming..." : "Claim Achievement"}
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-center p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-red-700 dark:text-red-300 font-semibold">
                Keep studying and try again!
              </p>
              <p className="text-sm text-red-600 dark:text-red-400 mt-1">
                Review the module content and retake when ready.
              </p>
            </div>

            {onRetake && (
              <Button onClick={onRetake} variant="outline" className="w-full">
                Retake
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
