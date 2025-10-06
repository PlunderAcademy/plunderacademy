"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useAccount } from "wagmi";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Clock, Trophy, CheckCircle, AlertCircle, MessageSquare } from "lucide-react";
import { AchievementCelebration } from "@/components/achievement-celebration";
import { ModuleCompletionFeedback } from "@/components/module-completion-feedback";
import { AchievementClaimSection } from "../shared/achievement-claim-section";
import { useAchievementClaiming } from "../shared/use-achievement-claiming";
import { 
  QuizElementProps, 
  QuizAnswer, 
  QuizResult, 
  ApiResultData, 
  InteractiveStep 
} from "../shared/types";
import { 
  submitToAPI, 
  getAchievementNumber, 
  formatTime 
} from "../shared/utils";
import { WordJumbleCompact } from "../elements/word-jumble-compact";
import { ConceptMatchingCompact } from "../elements/concept-matching-compact";
import { TimelineBuilderCompact } from "../elements/timeline-builder-compact";
import { TrueFalseCompact } from "../elements/true-false-compact";
import { DragDropPuzzleCompact } from "../elements/drag-drop-puzzle-compact";

export function TraditionalQuiz({ quiz, missionData, moduleSlug }: QuizElementProps) {
  const { address } = useAccount();
  
  // Quiz-specific states
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [timeLeft, setTimeLeft] = useState((quiz?.timeLimit || 15) * 60);
  const [isStarted, setIsStarted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [apiResults, setApiResults] = useState<ApiResultData | null>(null);
  const [showManualFeedback, setShowManualFeedback] = useState(false);
  
  // Anti-cheat measures
  const quizContainerRef = useRef<HTMLDivElement>(null);

  // Achievement claiming functionality
  const achievementClaiming = useAchievementClaiming({ moduleSlug, missionData });
  
  // Manual feedback handler
  const handleShowFeedback = () => {
    const achievementNumber = getAchievementNumber(moduleSlug);
    if (achievementNumber) {
      // If feedback already completed, still allow them to view/resubmit
      setShowManualFeedback(true);
    }
  };

  // Timer effect
  useEffect(() => {
    if (isStarted && !isCompleted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isStarted, isCompleted, timeLeft]);

  // Handle quiz submission
  const handleSubmit = useCallback(async () => {
    if (!address) {
      setSubmitError('Please connect your wallet to submit');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    const timeSpent = ((quiz?.timeLimit || 15) * 60) - timeLeft;
    const achievementNumber = getAchievementNumber(moduleSlug);
    
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
    
    const requestPayload = {
      walletAddress: address,
      achievementNumber,
      submissionType: 'quiz' as const,
      submissionData: { answers: formattedAnswers },
      metadata: {
        timestamp: new Date().toISOString(),
        timeSpent
      }
    };
    
    try {
      const apiResult = await submitToAPI(requestPayload);
      
      if (apiResult.results) {
        const quizResult: QuizResult = {
          score: apiResult.results?.score || 0,
          totalPoints: apiResult.results?.maxScore || 100,
          passed: apiResult.results?.passed || false,
          timeSpent: apiResult.results?.timeSpent || timeSpent
        };
        
        setResult(quizResult);
        
        // If passed and voucher received, set up for claiming
        if (quizResult.passed && apiResult.voucher && apiResult.signature && apiResult.contractAddress && apiResult.chainId) {
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
          if (!quizResult.passed && apiResult.results?.error) {
            setSubmitError(apiResult.results.error);
          }
          setIsCompleted(true);
        }
      } else {
        throw new Error(apiResult.error || 'Unexpected API response format');
      }
    } catch (error) {
      console.error('Error submitting quiz:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit quiz');
    } finally {
      setIsSubmitting(false);
    }
  }, [address, moduleSlug, quiz?.timeLimit, answers, timeLeft, achievementClaiming]);

  // Anti-cheat protection effects
  useEffect(() => {
    if (!isStarted) return;

    // Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Block common keyboard shortcuts (but allow F12 for devtools)
    const handleKeyDown = (e: KeyboardEvent) => {
      // Block Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S, Ctrl+A, Ctrl+C, Ctrl+V
      if (
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
        (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S' || 
                      e.key === 'a' || e.key === 'A' || e.key === 'c' || e.key === 'C' || 
                      e.key === 'v' || e.key === 'V'))
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Disable text selection
    const handleSelectStart = (e: Event) => {
      e.preventDefault();
      return false;
    };

    // Disable drag (but allow for interactive elements)
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      // Allow dragging if the element or any parent has data-interactive attribute
      if (target.closest('[data-interactive="true"]')) {
        return; // Allow drag for interactive elements
      }
      e.preventDefault();
      return false;
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('dragstart', handleDragStart);

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, [isStarted]);

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
    return answer?.answer || (quiz?.questions[currentQuestion]?.type === 'multiple-select' ? [] : '');
  };

  const isQuestionAnswered = (questionId: number): boolean => {
    const answer = getCurrentAnswer(questionId);
    if (Array.isArray(answer)) {
      return answer.length > 0;
    }
    // Check if it's a JSON string (interactive element)
    if (typeof answer === 'string' && answer.startsWith('{')) {
      try {
        JSON.parse(answer);
        return true;
      } catch {
        return false;
      }
    }
    return answer !== '';
  };

  const isCurrentQuestionAnswered = (): boolean => {
    return quiz?.questions[currentQuestion]?.id ? isQuestionAnswered(quiz.questions[currentQuestion].id) : false;
  };

  const handleNext = () => {
    if (quiz && currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setTimeLeft((quiz?.timeLimit || 15) * 60);
    setIsStarted(false);
    setIsCompleted(false);
    setResult(null);
    setIsSubmitting(false);
    setSubmitError(null);
    achievementClaiming.setVoucher(null);
    achievementClaiming.setStep("initial");
    setApiResults(null);
  };

  const progress = quiz ? ((currentQuestion + 1) / quiz.questions.length) * 100 : 0;
  const answeredQuestions = answers.length;

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
          onRetake={handleRetakeQuiz}
          onShowFeedback={handleShowFeedback}
          hasFeedbackCompleted={hasFeedbackCompleted}
        />
        
        {/* Module Completion Feedback - Shows when manually triggered */}
        {showManualFeedback && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="w-full max-w-lg max-h-[90vh] overflow-y-auto overflow-x-hidden px-2 py-4">
              <ModuleCompletionFeedback
                moduleSlug={moduleSlug}
                achievementCodes={[getAchievementNumber(moduleSlug) || "0001"]}
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

  // Quiz Results & Claiming Flow
  if (achievementClaiming.step === "claim" || achievementClaiming.step === "completed" || (isCompleted && result)) {
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
          onRetake={handleRetakeQuiz}
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
                achievementCodes={[getAchievementNumber(moduleSlug) || "0001"]}
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

  // Initial state - show quiz intro
  if (!isStarted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="size-5" />
            {quiz?.title || 'Module Quiz'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">{quiz?.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="font-semibold">{quiz?.totalQuestions || 0}</div>
              <div className="text-sm text-muted-foreground">Questions</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="font-semibold">{quiz?.timeLimit || 15} min</div>
              <div className="text-sm text-muted-foreground">Time Limit</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="font-semibold">{quiz?.passingScore || 80}%</div>
              <div className="text-sm text-muted-foreground">Passing Score</div>
            </div>
          </div>

          {quiz && (
            <div className="space-y-2">
              <h4 className="font-semibold">Instructions:</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Answer all questions to complete the quiz</li>
                <li>You can navigate between questions</li>
                <li>Quiz will auto-submit when time runs out</li>
                <li>You need {quiz.passingScore}% to pass</li>
              </ul>
            </div>
          )}

          <Button onClick={handleStartQuiz} className="w-full" disabled={!quiz}>
            {quiz ? 'Start Quiz' : 'Quiz Not Available'}
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (!quiz) return null;
  
  const question = quiz.questions[currentQuestion];
  const currentAnswer = getCurrentAnswer(question.id);

  return (
    <Card 
      ref={quizContainerRef}
      className="quiz-protected"
    >
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
            <span>{(quiz?.questions.length || 0) - answeredQuestions} remaining</span>
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
          
          <h3 className="text-lg font-semibold select-none">{question.question}</h3>
          
          {/* Interactive Question Types */}
          {question.type === 'word-jumble' && question.interactiveData?.scrambled && (
            <WordJumbleCompact
              data={{
                word: question.interactiveData.word || '',
                hint: question.interactiveData.hint || '',
                scrambled: question.interactiveData.scrambled
              }}
              mode="assessment"
              showFeedback={false}
              onComplete={(answer) => {
                handleAnswerChange(question.id, JSON.stringify({
                  type: 'word-jumble',
                  userResponse: { word: answer.word, timeSpent: answer.timeSpent }
                }));
              }}
            />
          )}

          {question.type === 'concept-matching' && (question.interactiveData?.pairs || (question.interactiveData?.concepts && question.interactiveData?.definitions)) && (
            <ConceptMatchingCompact
              data={{
                pairs: question.interactiveData.pairs,
                concepts: question.interactiveData.concepts,
                definitions: question.interactiveData.definitions
              }}
              mode="assessment"
              showFeedback={false}
              onComplete={(answer) => {
                handleAnswerChange(question.id, JSON.stringify({
                  type: 'concept-matching',
                  userResponse: answer
                }));
              }}
            />
          )}

          {question.type === 'timeline-builder' && question.interactiveData?.events && (
            <TimelineBuilderCompact
              data={{ events: question.interactiveData.events }}
              mode="assessment"
              showFeedback={false}
              onComplete={(answer) => {
                handleAnswerChange(question.id, JSON.stringify({
                  type: 'timeline-builder',
                  userResponse: answer
                }));
              }}
            />
          )}

          {question.type === 'true-false-statements' && question.interactiveData?.statements && (
            <TrueFalseCompact
              data={{ statements: question.interactiveData.statements }}
              mode="assessment"
              showFeedback={false}
              onComplete={(answer) => {
                handleAnswerChange(question.id, JSON.stringify({
                  type: 'true-false-statements',
                  userResponse: answer
                }));
              }}
            />
          )}

          {question.type === 'drag-drop-puzzle' && question.interactiveData?.codeBlocks && (
            <DragDropPuzzleCompact
              data={{ codeBlocks: question.interactiveData.codeBlocks }}
              mode="assessment"
              showFeedback={false}
              onComplete={(answer) => {
                handleAnswerChange(question.id, JSON.stringify({
                  type: 'drag-drop-puzzle',
                  userResponse: answer
                }));
              }}
            />
          )}

          {/* Traditional Multiple Choice/Select */}
          {(question.type === 'multiple-choice' || question.type === 'multiple-select') && (
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
                    <div className="flex-1 select-none">
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
                    <div className="flex-1 select-none">
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
          )}
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
            {currentQuestion === (quiz?.questions.length || 1) - 1 ? (
              <Button 
                onClick={handleSubmit} 
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
}
