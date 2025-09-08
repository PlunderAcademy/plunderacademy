"use client";

import { useState, useEffect, useCallback } from "react";
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Clock, Trophy, CheckCircle, XCircle, AlertCircle, ExternalLink } from "lucide-react";
import { QuizMeta, MissionMeta } from "@/lib/mdx";
import { trainingRegistryABI } from "@/lib/training-registry-abi";
import { AchievementCelebration } from "@/components/achievement-celebration";

/**
 * ModuleQuiz Component - Interactive Quiz with Achievement Flow
 * 
 * API Integration Notes:
 * - Submits to POST /api/v1/vouchers/submit
 * - Request includes walletAddress, achievementNumber, submissionType, submissionData, metadata
 * - Success response includes voucher + signature for on-chain claiming
 * - Failure response includes detailed results for retry
 * 
 * Future Implementation Notes:
 * - Module 5 (creating-erc20-tokens) may transition from quiz to transaction verification
 * - Instead of quiz questions, users would deploy a contract and submit transaction ID
 * - Same API flow: submissionType: "transaction", submissionData: { transactionId: "0x..." }
 * - Verification would check contract deployment transaction validity
 * 
 * Supported Submission Types:
 * - "quiz": Multiple choice questions with automated scoring (current: 0001-0005)
 * - "transaction": Blockchain transaction verification (future: potentially 0005)
 * - "contract": Smart contract deployment validation (future use)
 * - "custom": Custom validation logic (future use)
 */

interface ModuleQuizProps {
  quiz: QuizMeta;
  missionData?: MissionMeta | null;
}

interface QuizAnswer {
  questionId: number;
  answer: string | string[];
}

interface QuizResult {
  score: number;
  totalPoints: number;
  passed: boolean;
  timeSpent: number;
}

interface VoucherResponse {
  voucher: {
    taskCode: string;
    wallet: string;
  };
  signature: string;
  contractAddress: string;
  chainId: number;
}

interface CelebrationData {
  name?: string;
  description?: string;
  image?: string;
  achievementNumber: string;
  category?: "fundamentals" | "advanced" | "security" | "gas";
  attributes?: Array<{
    trait_type: string;
    value: string | number;
  }>;
}

interface ClaimedAchievement {
  achievementNumber: string;
  hasAchievement: boolean;
  metadataUri?: string;
}

export function ModuleQuiz({ quiz, missionData }: ModuleQuizProps) {
  const { address } = useAccount();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [timeLeft, setTimeLeft] = useState(quiz.timeLimit * 60); // Convert minutes to seconds
  const [isStarted, setIsStarted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  // Voucher and contract claiming states
  const [voucher, setVoucher] = useState<VoucherResponse | null>(null);
  const [step, setStep] = useState<"quiz" | "claim" | "completed">("quiz");
  const [alreadyClaimed, setAlreadyClaimed] = useState(false);
  const [nftImageUrl, setNftImageUrl] = useState<string | null>(null);
  
  // Achievement celebration
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

  // Define handleSubmitQuiz before the timer effect that uses it
  const handleSubmitQuiz = useCallback(async () => {
    if (!address) {
      setSubmitError('Please connect your wallet to submit the quiz');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    const timeSpent = (quiz.timeLimit * 60) - timeLeft;
    
    // Map module slug to achievement number
    const moduleToAchievementMap: Record<string, string> = {
      'blockchain-fundamentals': '0001',
      'evm-fundamentals': '0002', 
      'intro-to-solidity': '0003',
      'zilliqa-evm-setup': '0004',
      'creating-erc20-tokens': '0005'
    };
    
    const achievementNumber = moduleToAchievementMap[quiz.module];
    
    if (!achievementNumber) {
      setSubmitError('Unknown module configuration');
      setIsSubmitting(false);
      return;
    }
    
    // Convert answers to the expected format: {"q1": "B", "q2": "A", ...}
    const formattedAnswers: Record<string, string> = {};
    answers.forEach((answer, index) => {
      formattedAnswers[`q${index + 1}`] = Array.isArray(answer.answer) 
        ? answer.answer.join(',') 
        : answer.answer;
    });
    
    /**
     * API Request Format (matches /api/v1/vouchers/submit specification):
     * {
     *   "walletAddress": "0x...",
     *   "achievementNumber": "0001",
     *   "submissionType": "quiz",
     *   "submissionData": { "answers": { "q1": "B", "q2": "A,C" } },
     *   "metadata": { "timestamp": "2024-01-15T10:30:00Z", "timeSpent": 120 }
     * }
     * 
     * Future Module 5 (creating-erc20-tokens) format:
     * {
     *   "submissionType": "transaction",
     *   "submissionData": { "transactionId": "0x..." }
     * }
     */
    const requestPayload = {
      walletAddress: address,
      achievementNumber,
      submissionType: 'quiz', // TODO: Make this dynamic for module 5 transaction verification
      submissionData: {
        answers: formattedAnswers
      },
      metadata: {
        timestamp: new Date().toISOString(),
        timeSpent
      }
    };
    
    console.log('Submitting quiz with payload:', requestPayload);
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_PLUNDER_ACADEMY_API}/api/v1/vouchers/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestPayload),
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
      
      /**
       * Expected API Response Format:
       * 
       * Success (Passed):
       * {
       *   "success": true,
       *   "voucher": { "taskCode": 1, "wallet": "0x..." },
       *   "signature": "0x...",
       *   "contractAddress": "0x...",
       *   "chainId": 33101,
       *   "results": { "passed": true, "score": 48, "maxScore": 96, ... }
       * }
       * 
       * Failure (Failed):
       * {
       *   "success": false,
       *   "results": { "passed": false, "score": 36, "retryAllowed": true, ... },
       *   "error": "Quiz score below passing threshold"
       * }
       */
      if (response.ok || apiResult.results) {
        // Handle both successful passes and failed attempts with results
        const quizResult: QuizResult = {
          score: apiResult.results?.score || 0,
          totalPoints: apiResult.results?.maxScore || 100,
          passed: apiResult.results?.passed || false,
          timeSpent: apiResult.results?.timeSpent || timeSpent
        };
        
        setResult(quizResult);
        
        // If passed and voucher received, set up for claiming
        if (quizResult.passed && apiResult.voucher && apiResult.signature) {
          setVoucher({
            voucher: apiResult.voucher,
            signature: apiResult.signature,
            contractAddress: apiResult.contractAddress,
            chainId: apiResult.chainId
          });
          setStep("claim");
        } else {
          setIsCompleted(true);
        }
      } else {
        throw new Error(apiResult.error || `API Error: ${response.status}`);
      }
    } catch (error) {
      console.error('Error submitting quiz:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit quiz');
    } finally {
      setIsSubmitting(false);
    }
  }, [address, quiz.module, quiz.timeLimit, answers]);

  // Timer effect
  useEffect(() => {
    if (isStarted && !isCompleted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleSubmitQuiz();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isStarted, isCompleted, timeLeft, handleSubmitQuiz]);

  // Handle successful contract confirmation
  useEffect(() => {
    if (isConfirmed && hash && voucher && missionData) {
      // Show achievement celebration
      const moduleToAchievementMap = {
        'blockchain-fundamentals': '0001',
        'evm-fundamentals': '0002', 
        'intro-to-solidity': '0003',
        'zilliqa-evm-setup': '0004',
        'creating-erc20-tokens': '0005'
      };
      const achievementNumber = moduleToAchievementMap[quiz.module as keyof typeof moduleToAchievementMap];

      const imageUrl = `https://static.plunderswap.com/training/images/${achievementNumber || "0001"}.webp`;

      // Load NFT metadata for complete attributes
      const loadNFTMetadata = async () => {
        try {
          const metadataUrl = `https://static.plunderswap.com/training/${achievementNumber || "0001"}.json`;
          const response = await fetch(metadataUrl);
          if (response.ok) {
            const metadata = await response.json();
            setCelebrationData({
              name: metadata.name || missionData.achievementReward?.name || "Achievement Unlocked",
              description: metadata.description || missionData.achievementReward?.description || "Congratulations!",
              achievementNumber: achievementNumber || "0001",
              category: "fundamentals", // Could be mapped from module
              image: metadata.image || imageUrl,
              attributes: metadata.attributes || []
            });
          } else {
            // Fallback to mission data if metadata fails
            setCelebrationData({
              name: missionData.achievementReward?.name || "Achievement Unlocked",
              description: missionData.achievementReward?.description || "Congratulations!",
              achievementNumber: achievementNumber || "0001",
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
            achievementNumber: achievementNumber || "0001",
            category: "fundamentals",
            image: imageUrl
          });
        } finally {
          // Ensure celebration shows even if metadata loading fails
          setShowCelebration(true);
        }
      };

      loadNFTMetadata();
      
      // Set NFT image for display in completed section
      setNftImageUrl(imageUrl);
      
      setStep("completed");
    }
  }, [isConfirmed, hash, voucher, missionData, quiz.module]);

  // Check if achievement is already claimed on component mount
  useEffect(() => {
    const checkClaimedStatus = async () => {
      if (!address) return;

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_PLUNDER_ACADEMY_API}/api/v1/vouchers/claimed/${address}`);
        if (response.ok) {
          const data = await response.json();
          const achievementNumber = {
            'blockchain-fundamentals': '0001',
            'evm-fundamentals': '0002', 
            'intro-to-solidity': '0003',
            'zilliqa-evm-setup': '0004',
            'creating-erc20-tokens': '0005'
          }[quiz.module];

          const claimedAchievement = data.claimedAchievements?.find(
            (achievement: ClaimedAchievement) => achievement.achievementNumber === achievementNumber
          );

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
        }
      } catch (error) {
        console.error('Error checking claimed status:', error);
      }
    };

    checkClaimedStatus();
  }, [address, quiz.module]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleStartQuiz = () => {
    setIsStarted(true);
  };

  const handleAnswerChange = (questionId: number, answer: string | string[]) => {
    setAnswers(prev => {
      const existingIndex = prev.findIndex(a => a.questionId === questionId);
      const newAnswer = { questionId, answer };
      
      if (existingIndex >= 0) {
        return prev.map((a, i) => i === existingIndex ? newAnswer : a);
      } else {
        return [...prev, newAnswer];
      }
    });
  };

  const getCurrentAnswer = (questionId: number): string | string[] => {
    const answer = answers.find(a => a.questionId === questionId);
    return answer?.answer || (quiz.questions[currentQuestion]?.type === 'multiple-select' ? [] : '');
  };

  const isQuestionAnswered = (questionId: number): boolean => {
    const answer = getCurrentAnswer(questionId);
    if (Array.isArray(answer)) {
      return answer.length > 0;
    }
    return answer !== '';
  };

  const isCurrentQuestionAnswered = (): boolean => {
    return isQuestionAnswered(quiz.questions[currentQuestion]?.id);
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleClaimAchievement = async () => {
    if (!voucher) return;

    try {
      /**
       * Contract Interaction Notes:
       * - Uses contract address from API response (voucher.contractAddress)
       * - Calls submitVoucher(taskCode, signature) on the training registry contract
       * - TaskCode maps to achievement numbers (1=0001, 2=0002, etc.)
       * - Signature is EIP-712 signed voucher from API for verification
       * 
       * TODO: Consider fallback to NEXT_PUBLIC_PLUNDER_ACADEMY_CONTRACT_ADDRESS
       * if voucher.contractAddress is not provided in API response
       */
      await writeContract({
        address: voucher.contractAddress as `0x${string}`,
        abi: trainingRegistryABI,
        functionName: "submitVoucher",
        args: [BigInt(voucher.voucher.taskCode), voucher.signature as `0x${string}`]
      });
    } catch (error) {
      console.error("Error claiming achievement:", error);
    }
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setTimeLeft(quiz.timeLimit * 60);
    setIsStarted(false);
    setIsCompleted(false);
    setResult(null);
    setIsSubmitting(false);
    setSubmitError(null);
    setVoucher(null);
    setStep("quiz");
    setShowCelebration(false);
    setCelebrationData(null);
  };

  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;
  const answeredQuestions = answers.length;

  // Main component render with achievement celebration overlay
  const renderMainComponent = () => {
    // If already claimed, skip to completed view
    if (alreadyClaimed && step === "completed") {
      return (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="size-5 text-green-500" />
              Achievement Already Claimed
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
                    onError={(e) => {
                      // Fallback to .png if .webp fails
                      const target = e.target as HTMLImageElement;
                      if (target.src.includes('.webp')) {
                        target.src = target.src.replace('.webp', '.png');
                      }
                    }}
                    unoptimized
                  />
                </div>
              </div>
            )}

            <div className="text-center p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg">
              <p className="text-green-700 dark:text-green-300 font-semibold">
                🎉 You have already claimed this achievement!
              </p>
              <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                Your NFT achievement is safely stored in your wallet.
              </p>
            </div>
          </CardContent>
        </Card>
      );
    }

    if (!isStarted) {
      return (
        <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="size-5" />
            {quiz.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">{quiz.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="font-semibold">{quiz.totalQuestions}</div>
              <div className="text-sm text-muted-foreground">Questions</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="font-semibold">{quiz.timeLimit} min</div>
              <div className="text-sm text-muted-foreground">Time Limit</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="font-semibold">{quiz.passingScore}%</div>
              <div className="text-sm text-muted-foreground">Passing Score</div>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold">Instructions:</h4>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Answer all questions to complete the quiz</li>
              <li>You can navigate between questions</li>
              <li>Quiz will auto-submit when time runs out</li>
              <li>You need {quiz.passingScore}% to pass</li>
            </ul>
          </div>

          <Button onClick={handleStartQuiz} className="w-full">
            Start Quiz
          </Button>
        </CardContent>
      </Card>
      );
    }

    // Quiz Results & Claiming Flow
    if (step === "claim" && result && voucher) {
      return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="size-5 text-yellow-500" />
            Claim Your Achievement
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-green-600">
              🎉 Quiz Passed!
            </div>
            <div className="text-lg font-semibold">
              {result.score}/{result.totalPoints} ({Math.round((result.score / result.totalPoints) * 100)}%)
            </div>
            <Badge variant="default">PASSED</Badge>
          </div>

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
            onClick={handleClaimAchievement} 
            disabled={isClaimPending || isConfirming}
            className="w-full"
          >
            {isClaimPending || isConfirming ? "Claiming..." : "Claim Achievement"}
          </Button>
        </CardContent>
      </Card>
      );
    }

    if ((isCompleted && result) || step === "completed") {
      return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {result?.passed ? (
              <CheckCircle className="size-5 text-green-500" />
            ) : (
              <XCircle className="size-5 text-red-500" />
            )}
            Quiz Results
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold">
              {result?.score}/{result?.totalPoints}
            </div>
            <div className="text-muted-foreground">
              {Math.round(((result?.score || 0) / (result?.totalPoints || 1)) * 100)}% Score
            </div>
            <Badge variant={result?.passed ? "default" : "destructive"}>
              {result?.passed ? "PASSED" : "FAILED"}
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="font-semibold">{formatTime(result?.timeSpent || 0)}</div>
              <div className="text-sm text-muted-foreground">Time Spent</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="font-semibold">{quiz.passingScore}%</div>
              <div className="text-sm text-muted-foreground">Required</div>
            </div>
          </div>

          {step === "completed" ? (
            <div className="space-y-4">
              <div className="text-center p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg">
                <p className="text-green-700 dark:text-green-300 font-semibold">
                  🎉 Achievement Claimed Successfully!
                </p>
                <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                  Your NFT achievement has been minted to your wallet.
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
                      onError={(e) => {
                        // Fallback to .png if .webp fails
                        const target = e.target as HTMLImageElement;
                        if (target.src.includes('.webp')) {
                          target.src = target.src.replace('.webp', '.png');
                        }
                      }}
                      unoptimized
                    />
                  </div>
                </div>
              )}
            </div>
          ) : result?.passed ? (
            <div className="text-center p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg">
              <p className="text-green-700 dark:text-green-300 font-semibold">
                🎉 Congratulations! You passed the quiz!
              </p>
              <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                Your achievement has been recorded.
              </p>
            </div>
          ) : (
            <div className="text-center p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-red-700 dark:text-red-300 font-semibold">
                Keep studying and try again!
              </p>
              <p className="text-sm text-red-600 dark:text-red-400 mt-1">
                Review the module content and retake when ready.
              </p>
            </div>
          )}

          {!alreadyClaimed && step !== "completed" && (
            <Button onClick={handleRetakeQuiz} variant="outline" className="w-full">
              Retake Quiz
            </Button>
          )}
        </CardContent>
      </Card>
      );
    }

    const question = quiz.questions[currentQuestion];
    const currentAnswer = getCurrentAnswer(question.id);

    return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Trophy className="size-5" />
            Question {currentQuestion + 1} of {quiz.questions.length}
          </CardTitle>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="size-4" />
            <span className={timeLeft < 300 ? "text-red-500 font-semibold" : ""}>
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>
        <div className="space-y-2">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{answeredQuestions} answered</span>
            <span>{quiz.questions.length - answeredQuestions} remaining</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-start gap-2">
            <Badge variant="outline" className="text-xs">
              {question.points} pts
            </Badge>
            <Badge variant="secondary" className="text-xs">
              {question.lesson}
            </Badge>
          </div>
          
          <h3 className="text-lg font-semibold">{question.question}</h3>
          
          <div className="space-y-3">
            {question.options.map((option, index) => {
              const optionKey = option.split(')')[0].replace('-', '').trim();
              const optionText = option.split(')').slice(1).join(')').trim();
              
              if (question.type === 'multiple-select') {
                const isSelected = Array.isArray(currentAnswer) && currentAnswer.includes(optionKey);
                
                return (
                  <label 
                    key={index} 
                    className={`flex items-start gap-3 p-3 border-2 rounded-lg cursor-pointer transition-all ${
                      isSelected 
                        ? 'border-primary bg-primary/10 shadow-sm' 
                        : 'border-border hover:border-primary/50 hover:bg-muted/30'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={(e) => {
                        const current = Array.isArray(currentAnswer) ? currentAnswer : [];
                        const newAnswer = e.target.checked
                          ? [...current, optionKey]
                          : current.filter(a => a !== optionKey);
                        handleAnswerChange(question.id, newAnswer);
                      }}
                      className="mt-1 w-4 h-4 text-primary"
                    />
                    <div className="flex-1">
                      <span className={`text-sm ${isSelected ? 'font-medium text-primary' : ''}`}>
                        {optionText}
                      </span>
                      {isSelected && (
                        <CheckCircle className="inline-block ml-2 size-4 text-primary" />
                      )}
                    </div>
                  </label>
                );
              } else {
                const isSelected = currentAnswer === optionKey;
                
                return (
                  <label 
                    key={index} 
                    className={`flex items-start gap-3 p-3 border-2 rounded-lg cursor-pointer transition-all ${
                      isSelected 
                        ? 'border-primary bg-primary/10 shadow-sm' 
                        : 'border-border hover:border-primary/50 hover:bg-muted/30'
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      checked={isSelected}
                      onChange={() => handleAnswerChange(question.id, optionKey)}
                      className="mt-1 w-4 h-4 text-primary"
                    />
                    <div className="flex-1">
                      <span className={`text-sm ${isSelected ? 'font-medium text-primary' : ''}`}>
                        {optionText}
                      </span>
                      {isSelected && (
                        <CheckCircle className="inline-block ml-2 size-4 text-primary" />
                      )}
                    </div>
                  </label>
                );
              }
            })}
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

        {/* Validation warning for unanswered question */}
        {!isCurrentQuestionAnswered() && currentQuestion < quiz.questions.length - 1 && (
          <div className="p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg">
            <div className="flex items-center gap-2 text-amber-700 dark:text-amber-300">
              <AlertCircle className="size-4" />
              <span className="font-medium">Please Select an Answer</span>
            </div>
            <p className="text-sm text-amber-600 dark:text-amber-400 mt-1">
              You must select an answer to continue to the next question.
            </p>
          </div>
        )}

        <Separator />

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            Previous
          </Button>
          
          <div className="flex gap-2">
            {currentQuestion === quiz.questions.length - 1 ? (
              <Button 
                onClick={handleSubmitQuiz} 
                disabled={isSubmitting || !isCurrentQuestionAnswered()}
                className={!isCurrentQuestionAnswered() ? "opacity-50" : ""}
                title={!isCurrentQuestionAnswered() ? "Please answer this question to submit the quiz" : ""}
              >
                {isSubmitting 
                  ? "Submitting..." 
                  : !isCurrentQuestionAnswered() 
                    ? "Answer Required to Submit" 
                    : "Submit Quiz"}
              </Button>
            ) : (
              <Button 
                onClick={handleNext} 
                disabled={!isCurrentQuestionAnswered()}
                variant={!isCurrentQuestionAnswered() ? "outline" : "default"}
                className={!isCurrentQuestionAnswered() ? "opacity-50" : ""}
                title={!isCurrentQuestionAnswered() ? "Please select an answer to continue" : ""}
              >
                {!isCurrentQuestionAnswered() ? "Select Answer First" : "Next"}
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
    );
  };

  return (
    <>
      {renderMainComponent()}
      
      {/* Achievement Celebration */}
      <AchievementCelebration
        isVisible={showCelebration}
        onClose={() => setShowCelebration(false)}
        achievementData={celebrationData}
      />
    </>
  );
}
