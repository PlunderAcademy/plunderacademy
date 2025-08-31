"use client";

import * as React from "react";
import Image from "next/image";
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { trainingRegistryABI } from "@/lib/training-registry-abi";
import { AchievementCelebration } from "@/components/achievement-celebration";
import { 
  Award, 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  ExternalLink,
  Trophy,
  BookOpen,
  Shield,
  Gauge
} from "lucide-react";

// Demo configuration
const DEMO_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_PLUNDER_ACADEMY_CONTRACT_ADDRESS as `0x${string}`;
const DEMO_ACHIEVEMENTS = {
  QUIZ: 1, // Achievement #0001 - Quiz
  TRANSACTION: 2  // Achievement #0002 - Transaction verification
} as const;

interface VoucherResponse {
  voucher: {
    taskCode: string;
    wallet: string;
  };
  signature: string;
  contractAddress: string;
  chainId: number;
}

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

interface SubmissionRequest {
  walletAddress: string;
  achievementNumber: string;
  answer?: string;
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

const demoQuestions = [
  {
    question: "Which programming language is primarily used for Ethereum smart contracts?",
    options: ["A) Solidity", "B) JavaScript", "C) Python", "D) Rust", "E) Go"],
    correct: "A",
    hint: "💡 Think about the most popular language for Ethereum development!"
  },
  {
    question: "What does EVM stand for?",
    options: ["A) Ethereum Validation Method", "B) Ethereum Virtual Machine", "C) Encrypted Virtual Memory", "D) Enhanced Verification Module", "E) Electronic Value Manager"],
    correct: "B", 
    hint: "💡 It's the runtime environment for smart contracts on Ethereum!"
  },
  {
    question: "Which of the following is a key benefit of blockchain technology?",
    options: ["A) Speed", "B) Energy efficiency", "C) Decentralization", "D) Simplicity", "E) Low cost"],
    correct: "C",
    hint: "💡 Think about what makes blockchain different from traditional databases!"
  },
  {
    question: "What is gas in the context of Zilliqa 2.0?",
    options: ["A) A type of cryptocurrency", "B) Storage space", "C) Network bandwidth", "D) Computational fee unit", "E) Mining hardware"],
    correct: "D",
    hint: "💡 It's related to the cost of executing operations on the Zilliqa network!"
  },
  {
    question: "Which consensus mechanism does Zilliqa 2.0 use?",
    options: ["A) Proof of Work", "B) Proof of Authority", "C) Proof of Space", "D) Proof of History", "E) Proof of Stake"],
    correct: "E",
    hint: "💡 Zilliqa 2.0 uses this energy-efficient consensus mechanism!"
  }
];

export function AchievementsDemo() {
  const { address } = useAccount();
  const [selectedAchievement, setSelectedAchievement] = React.useState<number>(DEMO_ACHIEVEMENTS.QUIZ);
  const [currentStep, setCurrentStep] = React.useState<"select" | "quiz" | "transaction" | "submit" | "claim">("select");
  const [answers, setAnswers] = React.useState<string[]>(Array(demoQuestions.length).fill(""));
  const [transactionId, setTransactionId] = React.useState<string>("");
  const [voucher, setVoucher] = React.useState<VoucherResponse | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const [showHints, setShowHints] = React.useState(false);
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
  
  // Track which achievements have already been celebrated
  const celebratedAchievements = React.useRef<Set<string>>(new Set());
  const [showCelebration, setShowCelebration] = React.useState(false);
  const [celebrationData, setCelebrationData] = React.useState<{
    name?: string;
    description?: string;
    image?: string;
    achievementNumber: string;
    category?: "fundamentals" | "advanced" | "security" | "gas";
  } | null>(null);

  // Contract interactions
  const { 
    writeContract, 
    data: hash, 
    isPending: isClaimPending,
    error: claimError 
  } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

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

  // Check if specific achievement is completed (for the current demo flow)
  useReadContract({
    address: DEMO_CONTRACT_ADDRESS,
    abi: trainingRegistryABI,
    functionName: "hasAchievement",
    args: address ? [address, BigInt(selectedAchievement)] : undefined,
    query: { enabled: !!address && !!DEMO_CONTRACT_ADDRESS }
  });

  const handleAnswerChange = (questionIndex: number, answer: string) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answer;
    setAnswers(newAnswers);
  };

  const submitAchievement = async () => {
    if (!address) return;
    
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Validate API URL
      if (!process.env.NEXT_PUBLIC_PLUNDER_ACADEMY_API) {
        throw new Error("NEXT_PUBLIC_PLUNDER_ACADEMY_API environment variable is not set");
      }

      const requestBody: SubmissionRequest = {
        walletAddress: address,
        achievementNumber: selectedAchievement.toString().padStart(4, "0")
      };

      // Add specific data based on achievement type
      if (selectedAchievement === DEMO_ACHIEVEMENTS.QUIZ) {
        // Check if all questions have been answered
        if (answers.some(answer => !answer || answer.trim() === "")) {
          throw new Error("Please answer all quiz questions before submitting");
        }
        const answerString = answers.join(",");
        requestBody.answer = answerString;
        console.log("Quiz answers:", answers, "Joined:", answerString);
      } else if (selectedAchievement === DEMO_ACHIEVEMENTS.TRANSACTION) {
        if (!transactionId.trim()) {
          throw new Error("Please enter a transaction ID before submitting");
        }
        requestBody.answer = transactionId.trim();
        console.log("Transaction ID as answer:", transactionId.trim());
      }

      console.log("Submitting request body:", requestBody);
      console.log("API URL:", `${process.env.NEXT_PUBLIC_PLUNDER_ACADEMY_API}/api/v1/vouchers/submit`);

      const response = await fetch(`${process.env.NEXT_PUBLIC_PLUNDER_ACADEMY_API}/api/v1/vouchers/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        // Try to get detailed error message from API response
        let errorMessage = `API Error: ${response.status}`;
        try {
          const errorData = await response.json();
          console.error("API Error Response:", errorData);
          
          // Extract error message from various possible response formats
          if (errorData.error) {
            errorMessage = errorData.error;
          } else if (errorData.message) {
            errorMessage = errorData.message;
          } else if (errorData.details) {
            errorMessage = errorData.details;
          } else if (typeof errorData === 'string') {
            errorMessage = errorData;
          } else {
            errorMessage = `${response.status}: ${JSON.stringify(errorData)}`;
          }
        } catch {
          // If response is not JSON, try to get text
          try {
            const errorText = await response.text();
            console.error("API Error Text:", errorText);
            if (errorText) {
              errorMessage = `${response.status}: ${errorText}`;
            }
          } catch (textError) {
            console.error("Could not parse error response:", textError);
          }
        }
        throw new Error(errorMessage);
      }

      const voucherData: VoucherResponse = await response.json();
      setVoucher(voucherData);
      setCurrentStep("claim");
    } catch (error) {
      console.error("Error submitting achievement:", error);
      setSubmitError(error instanceof Error ? error.message : "Failed to submit achievement");
    } finally {
      setIsSubmitting(false);
    }
  };

  const claimAchievement = async () => {
    if (!voucher) return;

    try {
      await writeContract({
        address: DEMO_CONTRACT_ADDRESS,
        abi: trainingRegistryABI,
        functionName: "submitVoucher",
        args: [BigInt(voucher.voucher.taskCode), voucher.signature as `0x${string}`]
      });
    } catch (error) {
      console.error("Error claiming achievement:", error);
    }
  };

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
    if (isConfirmed) {
      // Show celebration for the current achievement (only once per achievement)
      const achievement = demoAchievements.find(a => a.taskCode === selectedAchievement);
      const achievementNumber = selectedAchievement.toString().padStart(4, "0");
      const celebrationKey = `main-${achievementNumber}`;
      
      if (!celebratedAchievements.current.has(celebrationKey)) {
        celebratedAchievements.current.add(celebrationKey);
        
        setCelebrationData({
          name: achievement?.title || "Achievement Unlocked",
          description: achievement?.description || "Congratulations!",
          achievementNumber,
          category: achievement?.category,
          image: achievementMetadata[achievementNumber]?.image
        });
        
        setShowCelebration(true);
      }
      
      fetchWalletAchievements();
      fetchUnclaimedVouchers();
      setCurrentStep("select");
      setVoucher(null);
      setAnswers(Array(demoQuestions.length).fill(""));
      setTransactionId("");
    }
  }, [isConfirmed, fetchWalletAchievements, fetchUnclaimedVouchers, selectedAchievement, achievementMetadata]);

  React.useEffect(() => {
    if (isUnclaimedConfirmed) {
      // Find the achievement that was just claimed
      const claimedVoucherId = Array.from(claimingVouchers)[0];
      if (claimedVoucherId) {
        const [taskCodeStr] = claimedVoucherId.split('-');
        const taskCode = parseInt(taskCodeStr);
        const achievement = demoAchievements.find(a => a.taskCode === taskCode);
        const achievementNumber = taskCode.toString().padStart(4, "0");
        const celebrationKey = `unclaimed-${achievementNumber}`;
        
        // Only show celebration if we haven't celebrated this achievement yet
        if (!celebratedAchievements.current.has(celebrationKey)) {
          celebratedAchievements.current.add(celebrationKey);
          
          // Set celebration data
          setCelebrationData({
            name: achievement?.title || "Achievement Unlocked",
            description: achievement?.description || "Congratulations!",
            achievementNumber,
            category: achievement?.category,
            image: achievementMetadata[achievementNumber]?.image
          });
          
          // Show celebration
          setShowCelebration(true);
        }
      }
      
      fetchWalletAchievements();
      fetchUnclaimedVouchers();
      setClaimingVouchers(new Set());
  
    }
  }, [isUnclaimedConfirmed, fetchWalletAchievements, fetchUnclaimedVouchers, claimingVouchers, achievementMetadata]);

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
      case "fundamentals": return <BookOpen className="size-4" />;
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

  const isQuizComplete = answers.every(answer => answer !== "");
  const isTransactionComplete = transactionId.trim() !== "";
  const currentAchievement = demoAchievements.find(a => a.taskCode === selectedAchievement);
  
  const canSubmit = () => {
    if (selectedAchievement === DEMO_ACHIEVEMENTS.QUIZ) {
      return isQuizComplete;
    } else if (selectedAchievement === DEMO_ACHIEVEMENTS.TRANSACTION) {
      return isTransactionComplete;
    }
    return false;
  };

  const isCurrentAchievementClaimed = () => {
    return walletAchievements.some(wa => wa.tokenId === selectedAchievement && wa.isClaimed);
  };

  return (
    <div className="space-y-6">
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

      <Separator />

      {/* Demo Flow */}
      <Tabs value={currentStep} onValueChange={(value) => setCurrentStep(value as typeof currentStep)}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="select" className="flex items-center gap-2">
            <Award className="size-4" />
            Select
          </TabsTrigger>
          <TabsTrigger value="quiz" disabled={selectedAchievement !== DEMO_ACHIEVEMENTS.QUIZ} className="flex items-center gap-2">
            <BookOpen className="size-4" />
            Quiz
          </TabsTrigger>
          <TabsTrigger value="transaction" disabled={selectedAchievement !== DEMO_ACHIEVEMENTS.TRANSACTION} className="flex items-center gap-2">
            <ExternalLink className="size-4" />
            Transaction
          </TabsTrigger>
          <TabsTrigger value="submit" disabled={!canSubmit()}>
            <Clock className="size-4" />
            Submit
          </TabsTrigger>
          <TabsTrigger value="claim" disabled={!voucher}>
            <Trophy className="size-4" />
            Claim
          </TabsTrigger>
        </TabsList>

        <TabsContent value="select" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Choose Achievement to Earn</CardTitle>
              <CardDescription>
                Select which achievement you&apos;d like to demo. Each has different requirements.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {demoAchievements.map((achievement) => (
                  <div
                    key={achievement.taskCode}
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      selectedAchievement === achievement.taskCode
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => setSelectedAchievement(achievement.taskCode)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getCategoryColor(achievement.category)}>
                        {getCategoryIcon(achievement.category)}
                        <span className="ml-1 capitalize">{achievement.category}</span>
                      </Badge>
                      {selectedAchievement === achievement.taskCode && (
                        <CheckCircle className="size-5 text-primary" />
                      )}
                    </div>
                    <h4 className="font-semibold mb-1">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>
                    <div className="text-xs text-muted-foreground">
                      Achievement #{achievement.taskCode.toString().padStart(4, "0")}
                    </div>
                    {achievement.taskCode === DEMO_ACHIEVEMENTS.QUIZ && (
                      <div className="mt-2 text-xs text-blue-600 dark:text-blue-400">
                        📝 Complete a 5-question training quiz
                      </div>
                    )}
                    {achievement.taskCode === DEMO_ACHIEVEMENTS.TRANSACTION && (
                      <div className="mt-2 text-xs text-purple-600 dark:text-purple-400">
                        🔗 Provide a transaction hash you created
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="flex justify-end pt-4">
                <Button 
                  onClick={() => {
                    if (selectedAchievement === DEMO_ACHIEVEMENTS.QUIZ) {
                      setCurrentStep("quiz");
                    } else if (selectedAchievement === DEMO_ACHIEVEMENTS.TRANSACTION) {
                      setCurrentStep("transaction");
                    }
                  }}
                  disabled={!selectedAchievement}
                >
                  Continue to {selectedAchievement === DEMO_ACHIEVEMENTS.QUIZ ? "Quiz" : "Transaction Input"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="quiz" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Demo Training Quiz - Achievement #0001</CardTitle>
              <CardDescription>
                Complete this 5-question quiz to earn your first achievement badge.
                The correct answers are A,B,C,D,E as required by the API.
              </CardDescription>
              <div className="flex items-center gap-2 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowHints(!showHints)}
                >
                  {showHints ? "Hide Hints" : "Show Hints"}
                </Button>
                {showHints && (
                  <span className="text-xs text-muted-foreground">💡 Hints are now visible</span>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {demoQuestions.map((question, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="font-medium">
                    {index + 1}. {question.question}
                  </h4>
                  {showHints && (
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-3 rounded-lg">
                      <p className="text-sm text-blue-700 dark:text-blue-300">{question.hint}</p>
                    </div>
                  )}
                  <div className="grid grid-cols-1 gap-2">
                    {question.options.map((option) => {
                      const optionLetter = option.charAt(0);
                      const isCorrect = showHints && optionLetter === question.correct;
                      return (
                        <label 
                          key={option} 
                          className={`flex items-center space-x-2 cursor-pointer hover:bg-muted/50 p-2 rounded ${
                            isCorrect ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800" : ""
                          }`}
                        >
                          <input
                            type="radio"
                            name={`question-${index}`}
                            value={optionLetter}
                            checked={answers[index] === optionLetter}
                            onChange={(e) => handleAnswerChange(index, e.target.value)}
                            className="text-primary"
                          />
                          <span className={`text-sm ${isCorrect ? "font-medium text-green-700 dark:text-green-300" : ""}`}>
                            {option} {isCorrect && "✓"}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}
              
              <div className="flex gap-3 justify-end pt-4">
                <Button 
                  variant="outline"
                  onClick={() => setCurrentStep("select")}
                >
                  Back to Selection
                </Button>
                <Button 
                  onClick={() => setCurrentStep("submit")} 
                  disabled={!isQuizComplete}
                >
                  Continue to Submit
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transaction" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Transaction Verification - Achievement #0002</CardTitle>
              <CardDescription>
                Provide a transaction hash that you created to verify your on-chain activity.
                The API will verify that your wallet was the creator of this transaction.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <label className="text-sm font-medium">Transaction Hash</label>
                <Input
                  type="text"
                  placeholder="0x1234567890abcdef..."
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  Enter any transaction hash from a transaction you created. This could be a token transfer, 
                  contract deployment, or any other transaction where your connected wallet was the sender.
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-yellow-800 dark:text-yellow-200 mb-2">
                  <AlertCircle className="size-4" />
                  <span className="font-medium">Demo Note</span>
                </div>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  For this demo, you can use any valid transaction hash. In production, 
                  the API would verify that your wallet address matches the transaction sender.
                </p>
              </div>

              <div className="flex gap-3 justify-end pt-4">
                <Button 
                  variant="outline"
                  onClick={() => setCurrentStep("select")}
                >
                  Back to Selection
                </Button>
                <Button 
                  onClick={() => setCurrentStep("submit")} 
                  disabled={!isTransactionComplete}
                >
                  Continue to Submit
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="submit" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Submit Achievement for Voucher</CardTitle>
              <CardDescription>
                Your submission will be sent to the API for verification and voucher generation.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {currentAchievement && (
                <div className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge className={getCategoryColor(currentAchievement.category)}>
                      {getCategoryIcon(currentAchievement.category)}
                      <span className="ml-1 capitalize">{currentAchievement.category}</span>
                    </Badge>
                  </div>
                  <h4 className="font-semibold">{currentAchievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{currentAchievement.description}</p>
                  <div className="text-xs text-muted-foreground">
                    Achievement #{currentAchievement.taskCode.toString().padStart(4, "0")}
                  </div>
                </div>
              )}

              {selectedAchievement === DEMO_ACHIEVEMENTS.QUIZ && (
                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                  <h4 className="font-medium">Quiz Summary:</h4>
                  {demoQuestions.map((question, index) => (
                    <div key={index} className="text-sm flex justify-between">
                      <span>Question {index + 1}:</span>
                      <span className="font-mono">{answers[index]}</span>
                    </div>
                  ))}
                  <div className="text-xs text-muted-foreground mt-2">
                    API submission: &quot;{answers.join(",")}&quot;
                  </div>
                </div>
              )}

              {selectedAchievement === DEMO_ACHIEVEMENTS.TRANSACTION && (
                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                  <h4 className="font-medium">Transaction Summary:</h4>
                  <div className="text-sm">
                    <span className="font-medium">Hash:</span> <span className="font-mono text-xs break-all">{transactionId}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    The API will verify this transaction was created by your wallet
                  </div>
                </div>
              )}

              {submitError && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-red-800 dark:text-red-200">
                    <AlertCircle className="size-4" />
                    <span className="font-medium">Submission Error</span>
                  </div>
                  <p className="text-sm text-red-700 dark:text-red-300 mt-1">{submitError}</p>
                </div>
              )}

              <div className="flex gap-3">
                <Button 
                  variant="outline"
                  onClick={() => {
                    if (selectedAchievement === DEMO_ACHIEVEMENTS.QUIZ) {
                      setCurrentStep("quiz");
                    } else if (selectedAchievement === DEMO_ACHIEVEMENTS.TRANSACTION) {
                      setCurrentStep("transaction");
                    }
                  }}
                >
                  Back
                </Button>
                <Button 
                  onClick={submitAchievement} 
                  disabled={isSubmitting}
                  className="flex-1"
                >
                  {isSubmitting ? "Submitting..." : `Submit ${selectedAchievement === DEMO_ACHIEVEMENTS.QUIZ ? "Quiz" : "Transaction"}`}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="claim" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Claim Your Achievement</CardTitle>
              <CardDescription>
                Use the signed voucher to claim your NFT badge on-chain.
              </CardDescription>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-3 rounded-lg mt-4">
                <div className="flex items-center gap-2 text-blue-800 dark:text-blue-200 text-sm">
                  <AlertCircle className="size-4" />
                  <span className="font-medium">Note:</span>
                  <span>You will need ZIL in your wallet to pay for gas fees.</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {voucher && (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-green-800 dark:text-green-200 mb-2">
                    <CheckCircle className="size-4" />
                    <span className="font-medium">Voucher Received!</span>
                  </div>
                  <div className="text-sm space-y-1">
                    <div>Achievement: <span className="font-mono">#{voucher.voucher.taskCode}</span></div>
                    <div>Wallet: <span className="font-mono text-xs">{voucher.voucher.wallet}</span></div>
                    <div>Signature: <span className="font-mono text-xs">{voucher.signature.slice(0, 20)}...</span></div>
                  </div>
                </div>
              )}

              {currentAchievement && (
                <div className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge className={getCategoryColor(currentAchievement.category)}>
                      {getCategoryIcon(currentAchievement.category)}
                      <span className="ml-1 capitalize">{currentAchievement.category}</span>
                    </Badge>
                  </div>
                  <h4 className="font-semibold">{currentAchievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{currentAchievement.description}</p>
                </div>
              )}

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
                  {isConfirmed && (
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                      Achievement claimed successfully! 🎉
                    </p>
                  )}
                </div>
              )}

              <div className="flex gap-3">
                <Button 
                  onClick={claimAchievement} 
                  disabled={!voucher || isClaimPending || isConfirming || isCurrentAchievementClaimed()}
                  className="flex-1"
                >
                  {isClaimPending || isConfirming ? "Claiming..." : 
                   isCurrentAchievementClaimed() ? "Already Claimed" : "Claim Achievement"}
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setCurrentStep("select");
                    setVoucher(null);
                    setAnswers(Array(demoQuestions.length).fill(""));
                    setTransactionId("");
                    setSelectedAchievement(DEMO_ACHIEVEMENTS.QUIZ);
                    setShowHints(false);
                  }}
                >
                  Start Over
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Integration Info */}
      <Card>
        <CardHeader>
          <CardTitle>Integration Details</CardTitle>
          <CardDescription>
            This demo shows the complete flow from quiz completion to on-chain achievement.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="space-y-2">
              <h4 className="font-medium">1. Quiz Submission</h4>
              <p className="text-muted-foreground">
                POST to <code className="text-xs bg-muted px-1 rounded">/api/v1/vouchers/submit</code> with answers
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">2. Voucher Generation</h4>
              <p className="text-muted-foreground">
                API validates answers and returns EIP-712 signed voucher
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">3. On-chain Claim</h4>
              <p className="text-muted-foreground">
                Call <code className="text-xs bg-muted px-1 rounded">submitVoucher()</code> to mint NFT badge
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievement Celebration */}
      <AchievementCelebration
        isVisible={showCelebration}
        onClose={() => setShowCelebration(false)}
        achievementData={celebrationData || undefined}
      />
    </div>
  );
}
