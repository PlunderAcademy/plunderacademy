"use client";

import { useState, useRef, DragEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, RotateCcw, Trophy, Target, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ConceptPair {
  id: string;
  concept: string;
  definition: string;
  category: 'types' | 'keywords' | 'patterns' | 'defi';
  icon: string;
}

interface MatchingItem {
  id: string;
  pairId: string;
  content: string;
  type: 'concept' | 'definition';
  category: string;
  icon: string;
  isMatched: boolean;
}

// Blockchain concept pairs for matching
const CONCEPT_PAIRS: ConceptPair[] = [
  {
    id: "pair-1",
    concept: "uint256",
    definition: "Unsigned 256-bit integer",
    category: "types",
    icon: "🔢"
  },
  {
    id: "pair-2",
    concept: "mapping",
    definition: "Key-value storage structure",
    category: "types", 
    icon: "🗺️"
  },
  {
    id: "pair-3",
    concept: "modifier",
    definition: "Function access control guard",
    category: "keywords",
    icon: "🛡️"
  },
  {
    id: "pair-4",
    concept: "payable",
    definition: "Function can receive Ether",
    category: "keywords",
    icon: "💰"
  },
  {
    id: "pair-5",
    concept: "reentrancy",
    definition: "Recursive call vulnerability",
    category: "patterns",
    icon: "🔄"
  },
  {
    id: "pair-6",
    concept: "oracle",
    definition: "External data provider",
    category: "defi",
    icon: "🔮"
  },
  {
    id: "pair-7",
    concept: "liquidity",
    definition: "Available trading capital",
    category: "defi",
    icon: "💧"
  },
  {
    id: "pair-8",
    concept: "proxy",
    definition: "Upgradeable contract pattern",
    category: "patterns",
    icon: "🔗"
  }
];

export function ConceptMatching() {
  const [concepts, setConcepts] = useState<MatchingItem[]>([]);
  const [definitions, setDefinitions] = useState<MatchingItem[]>([]);
  const [matches, setMatches] = useState<{[key: string]: string}>({});
  const [draggedItem, setDraggedItem] = useState<MatchingItem | null>(null);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [showHints, setShowHints] = useState(false);

  const dragOverRef = useRef<string | null>(null);

  const initializeGame = () => {
    // Create shuffled concepts and definitions
    const shuffledPairs = [...CONCEPT_PAIRS].sort(() => Math.random() - 0.5);
    
    const conceptItems: MatchingItem[] = shuffledPairs.map(pair => ({
      id: `${pair.id}-concept`,
      pairId: pair.id,
      content: pair.concept,
      type: 'concept',
      category: pair.category,
      icon: pair.icon,
      isMatched: false
    }));

    const definitionItems: MatchingItem[] = [...CONCEPT_PAIRS]
      .sort(() => Math.random() - 0.5)
      .map(pair => ({
        id: `${pair.id}-definition`,
        pairId: pair.id,
        content: pair.definition,
        type: 'definition',
        category: pair.category,
        icon: pair.icon,
        isMatched: false
      }));

    setConcepts(conceptItems);
    setDefinitions(definitionItems);
    setMatches({});
    setGameCompleted(false);
    setShowHints(false);
  };

  // Initialize game on mount
  useState(() => {
    initializeGame();
  });

  const handleDragStart = (e: DragEvent<HTMLDivElement>, item: MatchingItem) => {
    setDraggedItem(item);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>, targetId: string) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    dragOverRef.current = targetId;
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>, targetDefinition: MatchingItem) => {
    e.preventDefault();
    
    if (!draggedItem || draggedItem.type !== 'concept') return;

    // Create new match
    const newMatches = { ...matches };
    
    // Remove any existing match for this concept
    Object.keys(newMatches).forEach(conceptId => {
      if (conceptId === draggedItem.id) {
        delete newMatches[conceptId];
      }
    });
    
    // Remove any existing match for this definition
    Object.keys(newMatches).forEach(conceptId => {
      if (newMatches[conceptId] === targetDefinition.id) {
        delete newMatches[conceptId];
      }
    });
    
    // Add new match
    newMatches[draggedItem.id] = targetDefinition.id;
    setMatches(newMatches);
    
    // Update matched status
    const isCorrectMatch = draggedItem.pairId === targetDefinition.pairId;
    
    setConcepts(prev => prev.map(item => 
      item.id === draggedItem.id 
        ? { ...item, isMatched: isCorrectMatch }
        : item
    ));
    
    setDefinitions(prev => prev.map(item => 
      item.id === targetDefinition.id 
        ? { ...item, isMatched: isCorrectMatch }
        : item
    ));

    setDraggedItem(null);
    dragOverRef.current = null;

    // Check completion
    checkCompletion(newMatches);
  };

  const handleRemoveMatch = (conceptId: string) => {
    const newMatches = { ...matches };
    const definitionId = newMatches[conceptId];
    delete newMatches[conceptId];
    setMatches(newMatches);

    // Update matched status
    setConcepts(prev => prev.map(item => 
      item.id === conceptId ? { ...item, isMatched: false } : item
    ));
    
    setDefinitions(prev => prev.map(item => 
      item.id === definitionId ? { ...item, isMatched: false } : item
    ));

    setGameCompleted(false);
  };

  const checkCompletion = (currentMatches: {[key: string]: string}) => {
    const allMatched = Object.keys(currentMatches).length === CONCEPT_PAIRS.length;
    const allCorrect = Object.keys(currentMatches).every(conceptId => {
      const definitionId = currentMatches[conceptId];
      const concept = concepts.find(c => c.id === conceptId);
      const definition = definitions.find(d => d.id === definitionId);
      return concept && definition && concept.pairId === definition.pairId;
    });

    setGameCompleted(allMatched && allCorrect);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      types: 'bg-blue-100 border-blue-300 text-blue-800 dark:bg-blue-900/20 dark:border-blue-700 dark:text-blue-300',
      keywords: 'bg-purple-100 border-purple-300 text-purple-800 dark:bg-purple-900/20 dark:border-purple-700 dark:text-purple-300',
      patterns: 'bg-orange-100 border-orange-300 text-orange-800 dark:bg-orange-900/20 dark:border-orange-700 dark:text-orange-300',
      defi: 'bg-green-100 border-green-300 text-green-800 dark:bg-green-900/20 dark:border-green-700 dark:text-green-300'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 border-gray-300 text-gray-800';
  };

  const getMatchStatus = (item: MatchingItem) => {
    if (item.type === 'concept') {
      const matchedDefinitionId = matches[item.id];
      if (!matchedDefinitionId) return null;
      
      const matchedDefinition = definitions.find(d => d.id === matchedDefinitionId);
      return item.pairId === matchedDefinition?.pairId ? 'correct' : 'incorrect';
    } else {
      const matchedConceptId = Object.keys(matches).find(conceptId => matches[conceptId] === item.id);
      if (!matchedConceptId) return null;
      
      const matchedConcept = concepts.find(c => c.id === matchedConceptId);
      return item.pairId === matchedConcept?.pairId ? 'correct' : 'incorrect';
    }
  };

  return (
    <div className="space-y-6">
      {/* Instructions */}
      <div className="bg-muted/30 rounded-lg p-4">
        <h3 className="font-semibold mb-2 flex items-center gap-2">
          <Target className="size-5" />
          🎯 Concept Matching Challenge
        </h3>
        <p className="text-sm text-muted-foreground mb-2">
          Drag concepts from the left column and drop them on their matching definitions on the right.
        </p>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="outline" className="text-xs">
            <div className="w-2 h-2 rounded-full bg-blue-500 mr-1"></div>
            Data Types
          </Badge>
          <Badge variant="outline" className="text-xs">
            <div className="w-2 h-2 rounded-full bg-purple-500 mr-1"></div>
            Keywords
          </Badge>
          <Badge variant="outline" className="text-xs">
            <div className="w-2 h-2 rounded-full bg-orange-500 mr-1"></div>
            Patterns
          </Badge>
          <Badge variant="outline" className="text-xs">
            <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
            DeFi
          </Badge>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <Button onClick={initializeGame} variant="outline" size="sm">
            <RotateCcw className="size-4 mr-1" />
            Reset
          </Button>
          <Button 
            onClick={() => setShowHints(!showHints)} 
            variant="outline" 
            size="sm"
          >
            {showHints ? 'Hide' : 'Show'} Hints
          </Button>
          {gameCompleted && (
            <Badge variant="default" className="bg-green-600">
              <Trophy className="size-3 mr-1" />
              Completed!
            </Badge>
          )}
        </div>

        <div className="text-sm text-muted-foreground">
          {Object.keys(matches).length}/{CONCEPT_PAIRS.length} matched
        </div>
      </div>

      {/* Matching Interface */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Concepts Column */}
        <div>
          <h4 className="font-medium mb-3 flex items-center gap-2">
            <span>Concepts</span>
            <Badge variant="outline" className="text-xs">Drag these →</Badge>
          </h4>
          <div className="space-y-3">
            {concepts.map((concept) => {
              const matchStatus = getMatchStatus(concept);
              const isMatched = matches[concept.id];
              
              return (
                <div
                  key={concept.id}
                  draggable={!isMatched}
                  onDragStart={(e) => handleDragStart(e, concept)}
                  className={cn(
                    "p-3 rounded border-2 transition-all",
                    getCategoryColor(concept.category),
                    isMatched 
                      ? matchStatus === 'correct'
                        ? "border-green-400 cursor-pointer"
                        : "border-red-400 cursor-pointer"
                      : "cursor-move hover:shadow-md",
                    !isMatched && "hover:scale-105"
                  )}
                  onClick={() => isMatched && handleRemoveMatch(concept.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{concept.icon}</span>
                      <div>
                        <div className="font-medium text-sm">{concept.content}</div>
                        <Badge variant="secondary" className="text-xs">
                          {concept.category}
                        </Badge>
                        {showHints && !isMatched && (
                          <div className="text-xs opacity-70 mt-1">
                            Matches: &quot;{CONCEPT_PAIRS.find(p => p.id === concept.pairId)?.definition}&quot;
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {isMatched && (
                      <div className="flex items-center gap-1">
                        {matchStatus === 'correct' ? (
                          <CheckCircle className="size-4 text-green-600" />
                        ) : (
                          <XCircle className="size-4 text-red-600" />
                        )}
                        <span className="text-xs opacity-70">Click to remove</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Arrow Column */}
        <div className="flex items-center justify-center">
          <div className="text-center">
            <ArrowRight className="size-8 text-muted-foreground mx-auto mb-2" />
            <div className="text-xs text-muted-foreground">Drag & Drop</div>
          </div>
        </div>

        {/* Definitions Column */}
        <div>
          <h4 className="font-medium mb-3 flex items-center gap-2">
            <span>Definitions</span>
            <Badge variant="outline" className="text-xs">Drop here ←</Badge>
          </h4>
          <div className="space-y-3">
            {definitions.map((definition) => {
              const matchStatus = getMatchStatus(definition);
              const isMatched = Object.values(matches).includes(definition.id);
              
              return (
                <div
                  key={definition.id}
                  onDragOver={(e) => handleDragOver(e, definition.id)}
                  onDrop={(e) => handleDrop(e, definition)}
                  className={cn(
                    "p-3 rounded border-2 transition-all min-h-[60px]",
                    isMatched
                      ? matchStatus === 'correct'
                        ? getCategoryColor(definition.category) + " border-green-400"
                        : getCategoryColor(definition.category) + " border-red-400"
                      : "border-dashed border-muted-foreground/20 hover:border-muted-foreground/40 bg-muted/5",
                    dragOverRef.current === definition.id && "border-blue-400 bg-blue-50 dark:bg-blue-900/10"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{definition.icon}</span>
                      <div>
                        <div className="font-medium text-sm">{definition.content}</div>
                        <Badge variant="secondary" className="text-xs">
                          {definition.category}
                        </Badge>
                      </div>
                    </div>
                    
                    {isMatched && (
                      <div className="flex items-center gap-1">
                        {matchStatus === 'correct' ? (
                          <CheckCircle className="size-4 text-green-600" />
                        ) : (
                          <XCircle className="size-4 text-red-600" />
                        )}
                      </div>
                    )}
                    
                    {!isMatched && (
                      <div className="text-xs text-muted-foreground opacity-60">
                        Drop zone
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Success Message */}
      {gameCompleted && (
        <Card className="border-green-200 bg-green-50 dark:bg-green-900/10">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Trophy className="size-5 text-green-600" />
              <div>
                <h4 className="font-semibold text-green-800 dark:text-green-200">
                  All Concepts Matched! 🎉
                </h4>
                <p className="text-sm text-green-700 dark:text-green-300">
                  You&apos;ve successfully matched all {CONCEPT_PAIRS.length} blockchain concepts with their definitions. 
                  Ready to claim your achievement!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
