"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Shuffle, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

export interface WordJumbleData {
  word: string;
  hint: string;
  scrambled?: string; // Optional pre-scrambled version
}

interface WordJumbleCompactProps {
  data: WordJumbleData;
  mode?: 'learning' | 'assessment';
  onComplete?: (answer: { word: string; timeSpent: number }) => void;
  showFeedback?: boolean;
}

export function WordJumbleCompact({ 
  data, 
  mode = 'learning',
  onComplete,
  showFeedback = true 
}: WordJumbleCompactProps) {
  const [userGuess, setUserGuess] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [scrambledWord, setScrambledWord] = useState("");
  const [startTime] = useState(Date.now());
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Scramble function
  const scrambleWord = (word: string): string => {
    const letters = word.split('');
    for (let i = letters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    const scrambled = letters.join('');
    return scrambled === word && word.length > 1 ? scrambleWord(word) : scrambled;
  };

  // Initialize scrambled word
  useEffect(() => {
    if (data.scrambled) {
      setScrambledWord(data.scrambled);
    } else {
      setScrambledWord(scrambleWord(data.word));
    }
  }, [data]);

  const handleCheck = () => {
    // Trim whitespace and compare case-insensitively
    const trimmedGuess = userGuess.trim().toUpperCase();
    const trimmedWord = data.word.trim().toUpperCase();
    const correct = trimmedGuess === trimmedWord;
    
    if (mode === 'learning' && showFeedback) {
      setIsCorrect(correct);
    }
    
    setIsSubmitted(true);

    if (onComplete) {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      onComplete({ word: trimmedGuess, timeSpent });
    }
  };

  const handleRescramble = () => {
    setScrambledWord(scrambleWord(data.word));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && userGuess.trim() && !isSubmitted) {
      handleCheck();
    }
  };

  return (
    <div className="space-y-4" data-interactive="true">
      {/* Hint */}
      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <div className="flex items-center gap-2 mb-1">
          <Lightbulb className="size-4 text-blue-600" />
          <span className="text-sm font-medium text-blue-800 dark:text-blue-200">Hint:</span>
        </div>
        <p className="text-sm text-blue-700 dark:text-blue-300">{data.hint}</p>
      </div>

      {/* Scrambled Letters */}
      <div className="text-center">
        <p className="text-sm text-muted-foreground mb-2">Unscramble these letters:</p>
        <div className="flex justify-center gap-1 mb-2">
          {scrambledWord.split('').map((letter, index) => (
            <div
              key={index}
              className="w-10 h-10 flex items-center justify-center text-xl font-bold font-mono bg-muted/50 rounded border-2 border-muted-foreground/20"
            >
              {letter}
            </div>
          ))}
        </div>
        <Button
          onClick={handleRescramble}
          variant="ghost"
          size="sm"
          className="text-xs"
          disabled={isSubmitted}
        >
          <Shuffle className="size-3 mr-1" />
          Scramble Again
        </Button>
      </div>

      {/* Input */}
      <div className="space-y-2">
        <Input
          type="text"
          placeholder="Enter your answer..."
          value={userGuess}
          onChange={(e) => {
            // Trim leading spaces on change for better UX (allow trailing for user to see)
            const value = e.target.value.trimStart();
            setUserGuess(value);
          }}
          onKeyPress={handleKeyPress}
          className="text-center text-lg font-semibold uppercase"
          disabled={isSubmitted}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />

        {/* Additional Hint */}
        {mode === 'learning' && !showHint && !isSubmitted && (
          <Button
            onClick={() => setShowHint(true)}
            variant="outline"
            size="sm"
            className="w-full text-xs"
          >
            <Lightbulb className="size-3 mr-1" />
            Need Another Hint?
          </Button>
        )}

        {showHint && !isSubmitted && (
          <div className="p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200 dark:border-yellow-800">
            <p className="text-xs text-yellow-800 dark:text-yellow-200">
              💡 The word has {data.word.length} letters
            </p>
          </div>
        )}
      </div>

      {/* Feedback (Learning Mode Only) */}
      {mode === 'learning' && showFeedback && isCorrect !== null && (
        <div className={cn(
          "p-3 rounded-lg border",
          isCorrect 
            ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
            : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"
        )}>
          <div className="flex items-center gap-2">
            {isCorrect ? (
              <>
                <CheckCircle className="size-4 text-green-600" />
                <span className="text-sm font-medium text-green-800 dark:text-green-200">
                  Correct! The answer is {data.word}
                </span>
              </>
            ) : (
              <>
                <XCircle className="size-4 text-red-600" />
                <span className="text-sm font-medium text-red-800 dark:text-red-200">
                  Not quite. The correct answer is {data.word}
                </span>
              </>
            )}
          </div>
        </div>
      )}

      {/* Submit Button */}
      {!isSubmitted && (
        <Button
          onClick={handleCheck}
          disabled={!userGuess.trim()}
          className="w-full"
        >
          <CheckCircle className="size-4 mr-1" />
          {mode === 'assessment' ? 'Submit Answer' : 'Check Answer'}
        </Button>
      )}

      {/* Assessment Mode Confirmation */}
      {mode === 'assessment' && isSubmitted && (
        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 text-center">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            Answer submitted: <span className="font-mono font-bold">{userGuess.toUpperCase()}</span>
          </p>
        </div>
      )}
    </div>
  );
}

