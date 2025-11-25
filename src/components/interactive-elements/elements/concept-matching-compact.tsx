"use client";

import { useState, useRef, DragEvent, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, RotateCcw, ArrowRight, Hand } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ConceptPair {
  conceptId: string;
  definitionId: string;
  concept: string;
  definition: string;
  category?: string;
}

export interface ConceptItem {
  id: string;
  text: string;
  category?: string;
}

export interface DefinitionItem {
  id: string;
  text: string;
}

export interface ConceptMatchingData {
  pairs?: ConceptPair[];  // For learning mode (with correct answers)
  concepts?: ConceptItem[];  // For assessment mode (no correct answers)
  definitions?: DefinitionItem[];  // For assessment mode
}

interface MatchingItem {
  id: string;
  pairId: string;
  content: string;
  type: 'concept' | 'definition';
  category?: string;
  isMatched: boolean;
}

interface ConceptMatchingCompactProps {
  data: ConceptMatchingData;
  mode?: 'learning' | 'assessment';
  onComplete?: (answer: { pairs: Array<{ conceptId: string; definitionId: string }> }) => void;
  showFeedback?: boolean;
}

export function ConceptMatchingCompact({
  data,
  mode = 'learning',
  onComplete,
  showFeedback = true
}: ConceptMatchingCompactProps) {
  // Initialize concepts - support both formats
  const [concepts, setConcepts] = useState<MatchingItem[]>(() => {
    if (data.concepts && data.definitions) {
      // Assessment mode: separate concepts/definitions (no correct answers)
      return [...data.concepts].sort(() => Math.random() - 0.5).map(item => ({
        id: `${item.id}-concept`,
        pairId: item.id,
        content: item.text,
        type: 'concept' as const,
        category: item.category,
        isMatched: false
      }));
    } else if (data.pairs) {
      // Learning mode: paired data (with correct answers)
      return [...data.pairs].sort(() => Math.random() - 0.5).map(pair => ({
        id: `${pair.conceptId}-concept`,
        pairId: pair.conceptId,
        content: pair.concept,
        type: 'concept' as const,
        category: pair.category,
        isMatched: false
      }));
    }
    return [];
  });

  const [definitions, setDefinitions] = useState<MatchingItem[]>(() => {
    if (data.concepts && data.definitions) {
      // Assessment mode: separate concepts/definitions (no correct answers)
      return [...data.definitions].sort(() => Math.random() - 0.5).map(item => ({
        id: `${item.id}-definition`,
        pairId: item.id,
        content: item.text,
        type: 'definition' as const,
        isMatched: false
      }));
    } else if (data.pairs) {
      // Learning mode: paired data (with correct answers)
      return [...data.pairs].sort(() => Math.random() - 0.5).map(pair => ({
        id: `${pair.definitionId}-definition`,
        pairId: pair.definitionId,
        content: pair.definition,
        type: 'definition' as const,
        category: pair.category,
        isMatched: false
      }));
    }
    return [];
  });

  const [matches, setMatches] = useState<{[key: string]: string}>({});
  const [draggedItem, setDraggedItem] = useState<MatchingItem | null>(null);
  const [selectedConcept, setSelectedConcept] = useState<MatchingItem | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const dragOverRef = useRef<string | null>(null);

  // Detect touch device
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleDragStart = (e: DragEvent<HTMLDivElement>, item: MatchingItem) => {
    if (isSubmitted) return;
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
    if (!draggedItem || draggedItem.type !== 'concept' || isSubmitted) return;

    const newMatches = { ...matches };
    Object.keys(newMatches).forEach(conceptId => {
      if (conceptId === draggedItem.id) delete newMatches[conceptId];
      if (newMatches[conceptId] === targetDefinition.id) delete newMatches[conceptId];
    });

    newMatches[draggedItem.id] = targetDefinition.id;
    setMatches(newMatches);

    if (mode === 'learning' && showFeedback && data.pairs) {
      // Find the original pair to check if this is a correct match (only in learning mode with pairs)
      const originalPair = data.pairs.find(pair => 
        pair.conceptId === draggedItem.pairId && pair.definitionId === targetDefinition.pairId
      );
      const isCorrectMatch = !!originalPair;
      
      setConcepts(prev => prev.map(item => 
        item.id === draggedItem.id ? { ...item, isMatched: isCorrectMatch } : item
      ));
      setDefinitions(prev => prev.map(item => 
        item.id === targetDefinition.id ? { ...item, isMatched: isCorrectMatch } : item
      ));
    }

    setDraggedItem(null);
    dragOverRef.current = null;
  };

  const handleRemoveMatch = (conceptId: string) => {
    if (isSubmitted) return;
    const newMatches = { ...matches };
    const definitionId = newMatches[conceptId];
    delete newMatches[conceptId];
    setMatches(newMatches);

    setConcepts(prev => prev.map(item => 
      item.id === conceptId ? { ...item, isMatched: false } : item
    ));
    setDefinitions(prev => prev.map(item => 
      item.id === definitionId ? { ...item, isMatched: false } : item
    ));
  };

  // Touch/Click handlers for mobile-friendly interaction
  const handleConceptClick = (concept: MatchingItem) => {
    if (isSubmitted) return;
    
    // If already matched, unselect it
    if (matches[concept.id]) {
      handleRemoveMatch(concept.id);
      setSelectedConcept(null);
      return;
    }
    
    // Toggle selection
    if (selectedConcept?.id === concept.id) {
      setSelectedConcept(null);
    } else {
      setSelectedConcept(concept);
    }
  };

  const handleDefinitionClick = (definition: MatchingItem) => {
    if (isSubmitted || !selectedConcept) return;
    
    // Match the selected concept with this definition
    const newMatches = { ...matches };
    
    // Remove any existing matches for this concept or definition
    Object.keys(newMatches).forEach(conceptId => {
      if (conceptId === selectedConcept.id) delete newMatches[conceptId];
      if (newMatches[conceptId] === definition.id) delete newMatches[conceptId];
    });

    newMatches[selectedConcept.id] = definition.id;
    setMatches(newMatches);

    if (mode === 'learning' && showFeedback && data.pairs) {
      const originalPair = data.pairs.find(pair => 
        pair.conceptId === selectedConcept.pairId && pair.definitionId === definition.pairId
      );
      const isCorrectMatch = !!originalPair;
      
      setConcepts(prev => prev.map(item => 
        item.id === selectedConcept.id ? { ...item, isMatched: isCorrectMatch } : item
      ));
      setDefinitions(prev => prev.map(item => 
        item.id === definition.id ? { ...item, isMatched: isCorrectMatch } : item
      ));
    }

    setSelectedConcept(null);
  };

  const handleSubmit = () => {
    const requiredCount = data.pairs?.length || data.concepts?.length || 0;
    if (Object.keys(matches).length < requiredCount) return;

    setIsSubmitted(true);

    if (onComplete) {
      const pairAnswers = Object.entries(matches).map(([conceptId, definitionId]) => ({
        conceptId: conceptId.replace('-concept', ''),
        definitionId: definitionId.replace('-definition', '')
      }));
      onComplete({ pairs: pairAnswers });
    }
  };

  const getMatchStatus = (item: MatchingItem) => {
    if (!showFeedback || mode === 'assessment' || !data.pairs) return null;
    
    if (item.type === 'concept') {
      const matchedDefId = matches[item.id];
      if (!matchedDefId) return null;
      const matchedDef = definitions.find(d => d.id === matchedDefId);
      if (!matchedDef) return null;
      
      // Check if this concept-definition pair exists in original data (learning mode only)
      const originalPair = data.pairs.find(pair => 
        pair.conceptId === item.pairId && pair.definitionId === matchedDef.pairId
      );
      return originalPair ? 'correct' : 'incorrect';
    } else {
      const matchedConceptId = Object.keys(matches).find(cId => matches[cId] === item.id);
      if (!matchedConceptId) return null;
      const matchedConcept = concepts.find(c => c.id === matchedConceptId);
      if (!matchedConcept) return null;
      
      // Check if this concept-definition pair exists in original data (learning mode only)
      const originalPair = data.pairs.find(pair => 
        pair.conceptId === matchedConcept.pairId && pair.definitionId === item.pairId
      );
      return originalPair ? 'correct' : 'incorrect';
    }
  };

  const allMatched = Object.keys(matches).length === (data.pairs?.length || data.concepts?.length || 0);

  return (
    <div className="space-y-4" data-interactive="true">
      {/* Instructions for touch devices */}
      {isTouchDevice && !isSubmitted && (
        <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/30 p-2 rounded border border-border">
          <Hand className="size-4 flex-shrink-0" />
          <span>Tap a concept, then tap a definition to match them</span>
        </div>
      )}

      <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4">
        {/* Concepts */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-2">
            Concepts {isTouchDevice ? '(tap to select)' : '(drag →)'}
          </p>
          <div className="space-y-2">
            {concepts.map((concept) => {
              const matchStatus = getMatchStatus(concept);
              const isMatched = matches[concept.id];
              const isSelected = selectedConcept?.id === concept.id;
              
              return (
                <div
                  key={concept.id}
                  draggable={!isMatched && !isSubmitted && !isTouchDevice}
                  onDragStart={(e) => !isTouchDevice && handleDragStart(e, concept)}
                  onClick={() => handleConceptClick(concept)}
                  className={cn(
                    "p-2 rounded border-2 transition-all text-sm cursor-pointer",
                    isMatched 
                      ? mode === 'assessment'
                        ? "border-blue-400 bg-blue-50 dark:bg-blue-900/20"
                        : matchStatus === 'correct'
                          ? "border-green-400 bg-green-50 dark:bg-green-900/20"
                          : "border-red-400 bg-red-50 dark:bg-red-900/20"
                      : isSelected
                        ? "border-primary bg-primary/10 ring-2 ring-primary/50"
                        : "border-border hover:shadow-md hover:border-primary/50",
                    !isMatched && !isSubmitted && !isTouchDevice && "cursor-move",
                    !isMatched && !isSubmitted && "hover:scale-[1.02]"
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium">{concept.content}</span>
                    <div className="flex items-center gap-1">
                      {isSelected && !isMatched && (
                        <Badge variant="outline" className="text-[10px] px-1 py-0 h-4">
                          Selected
                        </Badge>
                      )}
                      {isMatched && showFeedback && mode === 'learning' && (
                        matchStatus === 'correct' ? (
                          <CheckCircle className="size-3 text-green-600 flex-shrink-0" />
                        ) : (
                          <XCircle className="size-3 text-red-600 flex-shrink-0" />
                        )
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center justify-center">
          <ArrowRight className="size-5 text-muted-foreground" />
        </div>

        {/* Definitions */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-2">
            Definitions {isTouchDevice ? '(tap to match)' : '(drop here)'}
          </p>
          <div className="space-y-2">
            {definitions.map((definition) => {
              const matchStatus = getMatchStatus(definition);
              const isMatched = Object.values(matches).includes(definition.id);
              const canAcceptClick = isTouchDevice && selectedConcept && !isMatched && !isSubmitted;
              
              return (
                <div
                  key={definition.id}
                  onDragOver={(e) => !isTouchDevice && handleDragOver(e, definition.id)}
                  onDrop={(e) => !isTouchDevice && handleDrop(e, definition)}
                  onClick={() => isTouchDevice && handleDefinitionClick(definition)}
                  className={cn(
                    "p-2 rounded border-2 transition-all text-sm min-h-[44px] flex items-center",
                    isMatched
                      ? mode === 'assessment'
                        ? "border-blue-400 bg-blue-50 dark:bg-blue-900/20"
                        : matchStatus === 'correct'
                          ? "border-green-400 bg-green-50 dark:bg-green-900/20"
                          : "border-red-400 bg-red-50 dark:bg-red-900/20"
                      : canAcceptClick
                        ? "border-primary/50 border-dashed bg-primary/5 cursor-pointer hover:border-primary hover:bg-primary/10"
                        : "border-dashed border-muted-foreground/30 hover:border-primary/50",
                    !isTouchDevice && dragOverRef.current === definition.id && "border-blue-400 bg-blue-50 dark:bg-blue-900/10",
                    isTouchDevice && !isMatched && "cursor-pointer"
                  )}
                >
                  <div className="flex items-center justify-between gap-2 w-full">
                    <span className={isMatched ? "font-medium" : canAcceptClick ? "text-foreground font-medium" : "text-muted-foreground"}>
                      {definition.content}
                    </span>
                    {isMatched && showFeedback && mode === 'learning' && (
                      matchStatus === 'correct' ? (
                        <CheckCircle className="size-3 text-green-600 flex-shrink-0" />
                      ) : (
                        <XCircle className="size-3 text-red-600 flex-shrink-0" />
                      )
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Submit Button */}
      {!isSubmitted && (
        <Button
          onClick={handleSubmit}
          disabled={!allMatched}
          className="w-full"
        >
          <CheckCircle className="size-4 mr-1" />
          {mode === 'assessment' ? 'Submit Matches' : 'Check Matches'}
        </Button>
      )}

      {/* Status */}
      <div className="text-center text-sm text-muted-foreground">
        {Object.keys(matches).length}/{data.pairs?.length || data.concepts?.length || 0} matched
        {isSubmitted && mode === 'assessment' && (
          <span className="block text-blue-600 dark:text-blue-400 mt-1">
            Answers submitted!
          </span>
        )}
      </div>
    </div>
  );
}

