"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { CheckCircle, XCircle, RotateCcw, Trophy, Shuffle, Lightbulb, Timer } from "lucide-react";
import { cn } from "@/lib/utils";

interface JumbleWord {
  id: string;
  word: string;
  hint: string;
  category: 'solidity' | 'defi' | 'blockchain' | 'types';
  difficulty: 'easy' | 'medium' | 'hard';
}

// Blockchain terminology for word jumble
const JUMBLE_WORDS: JumbleWord[] = [
  {
    id: "word-1",
    word: "SOLIDITY",
    hint: "Smart contract programming language",
    category: "solidity",
    difficulty: "medium"
  },
  {
    id: "word-2",
    word: "MAPPING",
    hint: "Key-value storage structure",
    category: "solidity",
    difficulty: "easy"
  },
  {
    id: "word-3",
    word: "ETHEREUM",
    hint: "Leading smart contract blockchain",
    category: "blockchain",
    difficulty: "medium"
  },
  {
    id: "word-4",
    word: "MODIFIER",
    hint: "Function access control guard",
    category: "solidity",
    difficulty: "medium"
  },
  {
    id: "word-5",
    word: "ORACLE",
    hint: "External data provider",
    category: "defi",
    difficulty: "easy"
  },
  {
    id: "word-6",
    word: "LIQUIDITY",
    hint: "Available trading capital",
    category: "defi",
    difficulty: "hard"
  },
  {
    id: "word-7",
    word: "PAYABLE",
    hint: "Function can receive Ether",
    category: "solidity",
    difficulty: "easy"
  },
  {
    id: "word-8",
    word: "UINT",
    hint: "Unsigned integer type",
    category: "types",
    difficulty: "easy"
  },
  {
    id: "word-9",
    word: "REENTRANCY",
    hint: "Recursive call vulnerability",
    category: "solidity",
    difficulty: "hard"
  },
  {
    id: "word-10",
    word: "PROXY",
    hint: "Upgradeable contract pattern",
    category: "solidity",
    difficulty: "easy"
  }
];

export function WordJumble() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [userGuess, setUserGuess] = useState("");
  const [solvedWords, setSolvedWords] = useState<string[]>([]);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [gameTime, setGameTime] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [shuffledWords, setShuffledWords] = useState<JumbleWord[]>([]);
  const [scrambledLetters, setScrambledLetters] = useState("");

  const currentWord = shuffledWords[currentWordIndex];

  // Function to scramble letters randomly
  const scrambleWord = (word: string): string => {
    const letters = word.split('');
    for (let i = letters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    // Make sure it's actually scrambled (not the same as original)
    const scrambled = letters.join('');
    return scrambled === word && word.length > 1 ? scrambleWord(word) : scrambled;
  };

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameActive && !gameCompleted) {
      interval = setInterval(() => {
        setGameTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameActive, gameCompleted]);

  const initializeGame = () => {
    const shuffled = [...JUMBLE_WORDS].sort(() => Math.random() - 0.5);
    setShuffledWords(shuffled);
    setCurrentWordIndex(0);
    setUserGuess("");
    setSolvedWords([]);
    setGameCompleted(false);
    setShowHint(false);
    setGameTime(0);
    setGameActive(false);
    
    if (shuffled[0]) {
      setScrambledLetters(scrambleWord(shuffled[0].word));
    }
  };

  // Initialize game on mount
  useEffect(() => {
    initializeGame();
  }, []);

  // Update scrambled letters when word changes
  useEffect(() => {
    if (currentWord) {
      setScrambledLetters(scrambleWord(currentWord.word));
    }
  }, [currentWord]);

  const scrambleAgain = () => {
    if (currentWord) {
      setScrambledLetters(scrambleWord(currentWord.word));
    }
  };

  const checkGuess = () => {
    if (!gameActive) {
      setGameActive(true);
    }

    if (userGuess.toUpperCase() === currentWord.word) {
      // Correct guess
      setSolvedWords(prev => [...prev, currentWord.id]);
      
      if (currentWordIndex + 1 >= shuffledWords.length) {
        // Game completed
        setGameCompleted(true);
        setGameActive(false);
      } else {
        // Move to next word
        setCurrentWordIndex(prev => prev + 1);
        setUserGuess("");
        setShowHint(false);
      }
    }
  };

  const skipWord = () => {
    if (currentWordIndex + 1 >= shuffledWords.length) {
      setGameCompleted(true);
      setGameActive(false);
    } else {
      setCurrentWordIndex(prev => prev + 1);
      setUserGuess("");
      setShowHint(false);
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      solidity: 'bg-blue-500',
      defi: 'bg-green-500',
      blockchain: 'bg-purple-500',
      types: 'bg-orange-500'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500';
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      easy: 'text-green-600',
      medium: 'text-yellow-600',
      hard: 'text-red-600'
    };
    return colors[difficulty as keyof typeof colors] || 'text-gray-600';
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      checkGuess();
    }
  };

  if (!currentWord) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Instructions */}
      <div className="bg-muted/30 rounded-lg p-4">
        <h3 className="font-semibold mb-2 flex items-center gap-2">
          <Shuffle className="size-5" />
          🔤 Blockchain Word Jumble
        </h3>
        <p className="text-sm text-muted-foreground mb-2">
          Unscramble the letters to form blockchain and Solidity terminology.
        </p>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="outline" className="text-xs">
            <div className="w-2 h-2 rounded-full bg-blue-500 mr-1"></div>
            Solidity
          </Badge>
          <Badge variant="outline" className="text-xs">
            <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
            DeFi
          </Badge>
          <Badge variant="outline" className="text-xs">
            <div className="w-2 h-2 rounded-full bg-purple-500 mr-1"></div>
            Blockchain
          </Badge>
          <Badge variant="outline" className="text-xs">
            <div className="w-2 h-2 rounded-full bg-orange-500 mr-1"></div>
            Types
          </Badge>
        </div>
      </div>

      {/* Game Stats & Controls */}
      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <Button onClick={initializeGame} variant="outline" size="sm">
            <RotateCcw className="size-4 mr-1" />
            New Game
          </Button>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Timer className="size-4" />
            {formatTime(gameTime)}
          </div>
          
          <div className="text-sm text-muted-foreground">
            Word {currentWordIndex + 1} of {shuffledWords.length}
          </div>
          
          <div className="text-sm text-muted-foreground">
            {solvedWords.length} solved
          </div>
        </div>

        {gameCompleted && (
          <Badge variant="default" className="bg-green-600">
            <Trophy className="size-3 mr-1" />
            Completed!
          </Badge>
        )}
      </div>

      {!gameCompleted ? (
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6 text-center">
            {/* Word Info */}
            <div className="mb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Badge variant="outline" className="text-xs">
                  <div className={cn("w-2 h-2 rounded-full mr-1", getCategoryColor(currentWord.category))}></div>
                  {currentWord.category}
                </Badge>
                <Badge variant="outline" className={cn("text-xs", getDifficultyColor(currentWord.difficulty))}>
                  {currentWord.difficulty}
                </Badge>
              </div>
            </div>

            {/* Clue */}
            <div className="mb-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-2 mb-1">
                  <Lightbulb className="size-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800 dark:text-blue-200">Clue:</span>
                </div>
                <p className="text-blue-700 dark:text-blue-300">{currentWord.hint}</p>
              </div>
            </div>

            {/* Scrambled Letters */}
            <div className="mb-6">
              <h4 className="text-sm text-muted-foreground mb-2">Unscramble these letters:</h4>
              <div className="text-4xl font-bold tracking-wider font-mono">
                {scrambledLetters.split('').map((letter, index) => (
                  <span
                    key={index}
                    className="inline-block mx-1 p-2 bg-muted/50 rounded border-2 border-muted-foreground/20"
                  >
                    {letter}
                  </span>
                ))}
              </div>
              <Button
                onClick={scrambleAgain}
                variant="ghost"
                size="sm"
                className="mt-2"
              >
                <Shuffle className="size-4 mr-1" />
                Scramble Again
              </Button>
            </div>

            {/* Input */}
            <div className="mb-4">
              <Input
                type="text"
                placeholder="Enter your guess..."
                value={userGuess}
                onChange={(e) => setUserGuess(e.target.value)}
                onKeyPress={handleKeyPress}
                className="text-center text-lg font-semibold uppercase"
                autoFocus
              />
            </div>

            {/* Additional Hint (if needed) */}
            <div className="mb-4">
              {showHint && (
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200 dark:border-yellow-800">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    💡 The word has {currentWord.word.length} letters and is in the {currentWord.category} category.
                  </p>
                </div>
              )}
              {!showHint && (
                <Button
                  onClick={() => setShowHint(true)}
                  variant="outline"
                  size="sm"
                >
                  <Lightbulb className="size-4 mr-1" />
                  Need Another Hint?
                </Button>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 justify-center">
              <Button
                onClick={checkGuess}
                disabled={!userGuess.trim()}
                className="min-w-24"
              >
                <CheckCircle className="size-4 mr-1" />
                Check
              </Button>
              <Button
                onClick={skipWord}
                variant="outline"
              >
                <XCircle className="size-4 mr-1" />
                Skip
              </Button>
            </div>

            {/* Wrong guess feedback */}
            {userGuess && userGuess.toUpperCase() !== currentWord.word && (
              <div className="mt-4 text-sm text-muted-foreground">
                Keep trying! The word has {currentWord.word.length} letters.
              </div>
            )}
          </CardContent>
        </Card>
      ) : (
        /* Game Completed */
        <Card className="border-green-200 bg-green-50 dark:bg-green-900/10 max-w-2xl mx-auto">
          <CardContent className="p-6 text-center">
            <div className="flex flex-col items-center gap-4">
              <Trophy className="size-12 text-green-600" />
              <div>
                <h4 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-2">
                  Word Jumble Completed! 🎉
                </h4>
                <p className="text-sm text-green-700 dark:text-green-300 mb-4">
                  You solved {solvedWords.length} out of {shuffledWords.length} words in {formatTime(gameTime)}!
                </p>
                
                {/* Summary */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-medium">Words Solved</div>
                    <div className="text-2xl font-bold text-green-600">{solvedWords.length}</div>
                  </div>
                  <div>
                    <div className="font-medium">Time Taken</div>
                    <div className="text-2xl font-bold text-green-600">{formatTime(gameTime)}</div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Ready to claim your achievement!
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
