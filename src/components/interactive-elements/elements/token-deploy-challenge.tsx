"use client";

import { useState, useCallback } from "react";
import { useAccount } from "wagmi";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, AlertCircle } from "lucide-react";
import { AchievementCelebration } from "@/components/achievement-celebration";
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

export function TokenDeployChallenge({ moduleSlug, missionData }: DeployElementProps) {
  const { address } = useAccount();
  
  // Deploy challenge specific states
  const [transactionId, setTransactionId] = useState('');
  const [transactionError, setTransactionError] = useState<string | null>(null);
  const [selectedChain, setSelectedChain] = useState<'testnet' | 'mainnet'>('testnet');
  const [submissionMethod, setSubmissionMethod] = useState<'factory' | 'deployment'>('factory');
  const [isStarted, setIsStarted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [apiResults, setApiResults] = useState<ApiResultData | null>(null);

  // Achievement claiming functionality
  const achievementClaiming = useAchievementClaiming({ moduleSlug, missionData });

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
      method: submissionMethod
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
  }, [address, moduleSlug, transactionId, selectedChain, submissionMethod, achievementClaiming]);

  const handleRetake = () => {
    setTransactionId('');
    setTransactionError(null);
    setSelectedChain('testnet');
    setSubmissionMethod('factory');
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
    return (
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
      />
    );
  }

  // Results & Claiming Flow
  if (achievementClaiming.step === "claim" || achievementClaiming.step === "completed" || result) {
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
        />
        
        {/* Achievement Celebration */}
        <AchievementCelebration
          isVisible={achievementClaiming.showCelebration}
          onClose={achievementClaiming.handleCelebrationClose}
          achievementData={achievementClaiming.celebrationData ?? undefined}
        />
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
            Submit Your Token Deployment
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            Deploy your token using the Hardhat environment you set up (or factory method above), then submit your deployment transaction ID to earn your achievement.
          </p>

          {/* Connected Wallet Display */}
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">🔗 Connected Wallet (Claimant Address):</h4>
            <p className="text-sm text-green-700 dark:text-green-300 font-mono break-all">
              {address}
            </p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">
              Use this address as the claimant parameter when deploying your contract.
            </p>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">📝 Two Ways to Create Your Token:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div className="bg-white dark:bg-blue-950/30 p-3 rounded border">
                <h5 className="font-medium text-blue-800 dark:text-blue-200 mb-1">🚀 Factory Method</h5>
                <ul className="text-xs text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
                  <li>Use our pre-deployed token factory</li>
                  <li>No development setup required</li>
                  <li>Works with any wallet</li>
                  <li>Gas efficient</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-blue-950/30 p-3 rounded border">
                <h5 className="font-medium text-blue-800 dark:text-blue-200 mb-1">🛠️ Full Deployment</h5>
                <ul className="text-xs text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
                  <li>Deploy your own contract</li>
                  <li>Requires Hardhat setup</li>
                  <li>Professional development workflow</li>
                  <li>Complete control</li>
                </ul>
              </div>
            </div>
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
          Submit Your Token Deployment Transaction
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

          {/* Method Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Creation Method</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="method"
                  value="factory"
                  checked={submissionMethod === 'factory'}
                  onChange={(e) => setSubmissionMethod(e.target.value as 'factory')}
                  className="w-4 h-4 text-primary"
                />
                <span className="text-sm">🚀 Token Factory</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="method"
                  value="deployment"
                  checked={submissionMethod === 'deployment'}
                  onChange={(e) => setSubmissionMethod(e.target.value as 'deployment')}
                  className="w-4 h-4 text-primary"
                />
                <span className="text-sm">🛠️ Full Deployment</span>
              </label>
            </div>
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
                  <li>Your token will be permanently deployed to mainnet</li>
                  <li>Consider testing on testnet first</li>
                  <li>Only proceed if you intend to create a real token</li>
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

          {/* Method-specific instructions */}
          {submissionMethod === 'factory' && (
            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 p-3 rounded-lg">
              <p className="text-sm font-medium text-purple-800 dark:text-purple-200 mb-1">🏭 Token Factory Instructions:</p>
              <ul className="text-xs text-purple-700 dark:text-purple-300 space-y-1 list-disc list-inside">
                <li>Use the token creation form in the module content above</li>
                <li>Connect your wallet and fill in token details</li>
                <li>Click &quot;Create Token&quot; and approve the transaction</li>
                <li>Copy the transaction hash from your wallet or block explorer</li>
              </ul>
            </div>
          )}

          {submissionMethod === 'deployment' && (
            <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 p-3 rounded-lg">
              <p className="text-sm font-medium text-orange-800 dark:text-orange-200 mb-1">🛠️ Full Deployment Instructions:</p>
              <ul className="text-xs text-orange-700 dark:text-orange-300 space-y-1 list-disc list-inside">
                <li>Complete the Hardhat setup from previous modules</li>
                <li>Deploy it to Zilliqa Testnet</li>
                <li>Remember to set your training portal wallet address as claimant</li>
                <li>Copy the deployment transaction hash from the output</li>
              </ul>
            </div>
          )}

          <div className="text-xs text-muted-foreground bg-muted/30 p-3 rounded-lg">
            <p className="font-medium mb-1">📋 Verification Process:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>We&apos;ll verify this transaction {submissionMethod === 'factory' ? 'called our token factory' : 'deployed a valid ERC-20 contract'}</li>
              <li>The {submissionMethod === 'factory' ? 'creator' : 'contract claimant'} must be your connected wallet</li>
              <li>Transaction must be successful (not reverted)</li>
              <li>Transaction must be on the selected network</li>
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
