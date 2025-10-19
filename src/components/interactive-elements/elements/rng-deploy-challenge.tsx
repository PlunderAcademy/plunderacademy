"use client";

import { useState, useCallback } from "react";
import { useAccount } from "wagmi";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, AlertCircle } from "lucide-react";
import { AchievementCelebration } from "@/components/achievement-celebration";
import { ModuleCompletionFeedback } from "@/components/module-completion-feedback";
import { AchievementClaimSection } from "../shared/achievement-claim-section";
import { useAchievementClaiming } from "../shared/use-achievement-claiming";
import { 
  DeployElementProps, 
  QuizResult, 
  ApiResultData
} from "../shared/types";
import { 
  submitToAPI, 
  getAchievementNumber 
} from "../shared/utils";

export function RngDeployChallenge({ moduleSlug, missionData }: DeployElementProps) {
  const { address } = useAccount();
  
  // Deploy challenge specific states
  const [transactionId, setTransactionId] = useState('');
  const [transactionError, setTransactionError] = useState<string | null>(null);
  const [selectedChain, setSelectedChain] = useState<'testnet' | 'mainnet'>('testnet');
  const [isStarted, setIsStarted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [apiResults, setApiResults] = useState<ApiResultData | null>(null);
  const [showManualFeedback, setShowManualFeedback] = useState(false);

  // Achievement claiming functionality
  const achievementClaiming = useAchievementClaiming({ moduleSlug, missionData });
  
  // Manual feedback handler
  const handleShowFeedback = () => {
    const achievementNumber = getAchievementNumber(moduleSlug);
    if (achievementNumber) {
      setShowManualFeedback(true);
    }
  };

  // Handle transaction submission
  const handleSubmit = useCallback(async () => {
    if (!address) {
      setSubmitError('Please connect your wallet to submit');
      return;
    }
    
    // Validate transaction ID
    if (!transactionId.trim()) {
      setTransactionError('Please enter a transaction ID');
      return;
    }
    if (!/^0x[a-fA-F0-9]+$/.test(transactionId.trim()) || transactionId.trim().length < 10) {
      setTransactionError('Please enter a valid transaction hash (0x followed by hex characters)');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError(null);
    setTransactionError(null);
    
    const achievementNumber = getAchievementNumber(moduleSlug);
    
    if (!achievementNumber) {
      setSubmitError('Unknown module configuration');
      setIsSubmitting(false);
      return;
    }
    
    const submissionData = {
      transactionHash: transactionId.trim(),
      chainId: selectedChain === 'testnet' ? 33101 : 32769,
      claimantAddress: address,
      method: 'deployment' as const
    };
    
    const requestPayload = {
      walletAddress: address,
      achievementNumber,
      submissionType: 'transaction' as const,
      submissionData,
      metadata: {
        timestamp: new Date().toISOString()
      }
    };
    
    try {
      const apiResult = await submitToAPI(requestPayload);
      
      if (apiResult.results) {
        const deployResult: QuizResult = {
          score: apiResult.results?.score || 0,
          totalPoints: apiResult.results?.maxScore || 100,
          passed: apiResult.results?.passed || false,
          timeSpent: 0 // Not applicable for transaction submission
        };
        
        setResult(deployResult);
        
        // If passed and voucher received, set up for claiming
        if (deployResult.passed && apiResult.voucher && apiResult.signature && apiResult.contractAddress && apiResult.chainId) {
          setApiResults(apiResult.results);
          achievementClaiming.setVoucher({
            voucher: apiResult.voucher,
            signature: apiResult.signature,
            contractAddress: apiResult.contractAddress,
            chainId: apiResult.chainId
          });
          achievementClaiming.setStep("claim");
        } else {
          // For failed submissions, show the specific error message
          if (!deployResult.passed && apiResult.results?.error) {
            setTransactionError(apiResult.results.error);
          }
        }
      } else {
        throw new Error(apiResult.error || 'Unexpected API response format');
      }
    } catch (error) {
      console.error('Error submitting transaction:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit transaction');
    } finally {
      setIsSubmitting(false);
    }
  }, [address, moduleSlug, transactionId, selectedChain, achievementClaiming]);

  const handleRetake = () => {
    setTransactionId('');
    setTransactionError(null);
    setSelectedChain('testnet');
    setIsStarted(false);
    setIsSubmitting(false);
    setSubmitError(null);
    setResult(null);
    setApiResults(null);
    achievementClaiming.setVoucher(null);
    achievementClaiming.setStep("initial");
  };

  // If already claimed, skip to completed view
  if (achievementClaiming.alreadyClaimed) {
    const hasFeedbackCompleted = achievementClaiming.feedbackPrompt.hasFeedbackBeenCompleted(moduleSlug);
    
    return (
      <>
        <AchievementClaimSection
          moduleSlug={moduleSlug}
          missionData={missionData}
          result={result}
          apiResults={apiResults}
          alreadyClaimed={achievementClaiming.alreadyClaimed}
          justClaimed={achievementClaiming.justClaimed}
          nftImageUrl={achievementClaiming.nftImageUrl}
          hash={achievementClaiming.hash}
          isClaimPending={achievementClaiming.isClaimPending}
          isConfirming={achievementClaiming.isConfirming}
          claimError={achievementClaiming.claimError}
          onClaimAchievement={achievementClaiming.handleClaimAchievement}
          onRetake={handleRetake}
          onShowFeedback={handleShowFeedback}
          hasFeedbackCompleted={hasFeedbackCompleted}
        />
        
        {/* Module Completion Feedback Modal */}
        {showManualFeedback && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="w-full max-w-lg max-h-[90vh] overflow-y-auto overflow-x-hidden px-2 py-4">
              <ModuleCompletionFeedback
                moduleSlug={moduleSlug}
                achievementCodes={[getAchievementNumber(moduleSlug) || "0050"]}
                onComplete={() => {
                  achievementClaiming.feedbackPrompt.markFeedbackCompleted(moduleSlug);
                  setShowManualFeedback(false);
                }}
              />
            </div>
          </div>
        )}
      </>
    );
  }

  // Results & Claiming Flow
  if (achievementClaiming.step === "claim" || achievementClaiming.step === "completed" || result) {
    const hasFeedbackCompleted = achievementClaiming.feedbackPrompt.hasFeedbackBeenCompleted(moduleSlug);
    
    return (
      <>
        <AchievementClaimSection
          moduleSlug={moduleSlug}
          missionData={missionData}
          result={result}
          apiResults={apiResults}
          alreadyClaimed={achievementClaiming.alreadyClaimed}
          justClaimed={achievementClaiming.justClaimed}
          nftImageUrl={achievementClaiming.nftImageUrl}
          hash={achievementClaiming.hash}
          isClaimPending={achievementClaiming.isClaimPending}
          isConfirming={achievementClaiming.isConfirming}
          claimError={achievementClaiming.claimError}
          onClaimAchievement={achievementClaiming.handleClaimAchievement}
          onRetake={handleRetake}
          onShowFeedback={handleShowFeedback}
          hasFeedbackCompleted={hasFeedbackCompleted}
        />
        
        {/* Achievement Celebration */}
        <AchievementCelebration
          isVisible={achievementClaiming.showCelebration}
          onClose={achievementClaiming.handleCelebrationClose}
          achievementData={achievementClaiming.celebrationData ?? undefined}
        />
        
        {/* Module Completion Feedback - Shows when manually triggered via button */}
        {showManualFeedback && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="w-full max-w-lg max-h-[90vh] overflow-y-auto overflow-x-hidden px-2 py-4">
              <ModuleCompletionFeedback
                moduleSlug={moduleSlug}
                achievementCodes={[getAchievementNumber(moduleSlug) || "0050"]}
                onComplete={() => {
                  achievementClaiming.feedbackPrompt.markFeedbackCompleted(moduleSlug);
                  setShowManualFeedback(false);
                }}
              />
            </div>
          </div>
        )}
      </>
    );
  }

  // Initial state - show intro
  if (!isStarted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="size-5" />
            Submit Your Random Number Generator Deployment
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            Deploy your Random Number Generator contract using the Hardhat environment from the lesson, then submit your deployment transaction ID to earn your achievement.
          </p>

          {/* Connected Wallet Display */}
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">🔗 Connected Wallet (Claimant Address):</h4>
            <p className="text-sm text-green-700 dark:text-green-300 font-mono break-all">
              {address}
            </p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">
              Use this address as the claimant parameter when deploying your RNG contract.
            </p>
          </div>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg">
            <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">📝 Deployment Requirements:</h4>
            <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-2 list-disc list-inside">
              <li>Deploy the ZilliqaRandomNumber2 contract from the lesson</li>
              <li>Use Hardhat 3 with the provided deployment script</li>
              <li>Include the claimant address (shown above) in your deployment</li>
              <li>Deploy to Zilliqa testnet or mainnet</li>
              <li>Submit the deployment transaction hash below</li>
            </ul>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">✨ What You&apos;ll Learn:</h4>
            <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1 list-disc list-inside">
              <li>Commit-reveal pattern for secure randomness</li>
              <li>Block-level entropy sources (prevrandao, blockhash)</li>
              <li>Range-constrained random number generation</li>
              <li>Manipulation-resistant RNG design</li>
              <li>Production-ready random number generator deployment</li>
            </ul>
          </div>

          <Button onClick={() => setIsStarted(true)} className="w-full">
            Submit Transaction ID
          </Button>
        </CardContent>
      </Card>
    );
  }

  // Transaction submission form
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="size-5" />
          Submit Your Random Number Generator Deployment
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {/* Connected Wallet Display */}
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-3 rounded-lg">
            <p className="text-sm font-medium text-green-800 dark:text-green-200">🔗 Claimant Wallet:</p>
            <p className="text-xs text-green-700 dark:text-green-300 font-mono break-all mt-1">
              {address}
            </p>
          </div>

          {/* Chain Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Network</label>
            <div className="flex gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="chain"
                  value="testnet"
                  checked={selectedChain === 'testnet'}
                  onChange={(e) => setSelectedChain(e.target.value as 'testnet')}
                  className="w-4 h-4 text-primary"
                />
                <span className="text-sm">Testnet (Recommended)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="chain"
                  value="mainnet"
                  checked={selectedChain === 'mainnet'}
                  onChange={(e) => setSelectedChain(e.target.value as 'mainnet')}
                  className="w-4 h-4 text-primary"
                />
                <span className="text-sm">Mainnet</span>
              </label>
            </div>
            
            {selectedChain === 'mainnet' && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-3 rounded-lg">
                <p className="text-sm font-medium text-red-800 dark:text-red-200 mb-1">⚠️ Mainnet Deployment Warning</p>
                <ul className="text-xs text-red-700 dark:text-red-300 space-y-1 list-disc list-inside">
                  <li>Real ZIL will be spent on gas fees</li>
                  <li>Your RNG contract will be permanently deployed to mainnet</li>
                  <li>Consider testing on testnet first</li>
                  <li>Only proceed if you intend to deploy a production RNG contract</li>
                </ul>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="transactionId" className="text-sm font-medium">
              Transaction ID
            </label>
            <input
              id="transactionId"
              type="text"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              placeholder="0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
              className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground font-mono text-sm"
            />
            {transactionError && (
              <p className="text-sm text-red-600 dark:text-red-400">{transactionError}</p>
            )}
          </div>

          {/* Deployment instructions */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-3 rounded-lg">
            <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200 mb-1">🛠️ Deployment Instructions:</p>
            <ul className="text-xs text-yellow-700 dark:text-yellow-300 space-y-1 list-disc list-inside">
              <li>Use the Hardhat setup from the lesson content above</li>
              <li>Run the deployment script to deploy to Zilliqa Testnet</li>
              <li>Make sure to set your training portal wallet address as claimant</li>
              <li>Copy the deployment transaction hash from the console output</li>
              <li>The output will show: &quot;🎯 Transaction ID to submit for your Achievement!&quot;</li>
            </ul>
          </div>

          <div className="text-xs text-muted-foreground bg-muted/30 p-3 rounded-lg">
            <p className="font-medium mb-1">📋 Verification Process:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>We&apos;ll verify this transaction deployed a valid RNG contract</li>
              <li>The contract must implement the ZilliqaRandomNumber2 pattern</li>
              <li>Transaction must be successful (not reverted)</li>
              <li>Transaction must be on the selected network</li>
              <li>Contract must include the claimant tracking functionality</li>
            </ul>
          </div>
        </div>

        {submitError && (
          <div className="p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg">
            <div className="flex items-center gap-2 text-red-700 dark:text-red-300">
              <AlertCircle className="size-4" />
              <span className="font-medium">Submission Error</span>
            </div>
            <p className="text-sm text-red-600 dark:text-red-400 mt-1">{submitError}</p>
          </div>
        )}

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => setIsStarted(false)}
          >
            Back
          </Button>
          <Button 
            onClick={handleSubmit} 
            disabled={isSubmitting || !transactionId.trim()}
            className={!transactionId.trim() ? "opacity-50" : ""}
          >
            {isSubmitting ? "Verifying..." : "Submit Transaction"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

