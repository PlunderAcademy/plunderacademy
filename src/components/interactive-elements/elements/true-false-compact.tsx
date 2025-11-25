"use client";

import { useState, useRef, DragEvent, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, ThumbsUp, ThumbsDown, Hand } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TrueFalseStatement {
  id: string;
  text: string;
  correctAnswer?: boolean;  // Optional for assessment mode
  explanation?: string;
}

export interface TrueFalseData {
  statements: TrueFalseStatement[];
}

interface ClassifiedStatement extends TrueFalseStatement {
  userAnswer: boolean | null;
}

interface TrueFalseCompactProps {
  data: TrueFalseData;
  mode?: 'learning' | 'assessment';
  onComplete?: (answer: { classifications: Array<{ id: string; answer: boolean }> }) => void;
  showFeedback?: boolean;
}

export function TrueFalseCompact({
  data,
  mode = 'learning',
  onComplete,
  showFeedback = true
}: TrueFalseCompactProps) {
  const [unclassified, setUnclassified] = useState<TrueFalseStatement[]>(() =>
    [...data.statements].sort(() => Math.random() - 0.5)
  );
  const [trueStatements, setTrueStatements] = useState<ClassifiedStatement[]>([]);
  const [falseStatements, setFalseStatements] = useState<ClassifiedStatement[]>([]);
  const [draggedStatement, setDraggedStatement] = useState<TrueFalseStatement | ClassifiedStatement | null>(null);
  const [selectedStatement, setSelectedStatement] = useState<TrueFalseStatement | ClassifiedStatement | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const dragOverRef = useRef<'true' | 'false' | 'unclassified' | null>(null);

  // Detect touch device
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleDragStart = (e: DragEvent<HTMLDivElement>, statement: TrueFalseStatement | ClassifiedStatement) => {
    if (isSubmitted) return;
    setDraggedStatement(statement);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>, zone: 'true' | 'false' | 'unclassified') => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    dragOverRef.current = zone;
  };

  const handleDropInZone = (e: DragEvent<HTMLDivElement>, zone: 'true' | 'false') => {
    e.preventDefault();
    if (!draggedStatement || isSubmitted) return;

    const userAnswer = zone === 'true';

    // Remove from all zones
    setUnclassified(prev => prev.filter(s => s.id !== draggedStatement.id));
    setTrueStatements(prev => prev.filter(s => s.id !== draggedStatement.id));
    setFalseStatements(prev => prev.filter(s => s.id !== draggedStatement.id));

    const classified: ClassifiedStatement = { ...draggedStatement, userAnswer };

    if (zone === 'true') {
      setTrueStatements(prev => [...prev, classified]);
    } else {
      setFalseStatements(prev => [...prev, classified]);
    }

    setDraggedStatement(null);
    dragOverRef.current = null;
  };

  const handleDropInUnclassified = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!draggedStatement || isSubmitted) return;

    setTrueStatements(prev => prev.filter(s => s.id !== draggedStatement.id));
    setFalseStatements(prev => prev.filter(s => s.id !== draggedStatement.id));
    setUnclassified(prev => [...prev, draggedStatement]);

    setDraggedStatement(null);
    dragOverRef.current = null;
  };

  // Touch/Click handlers for mobile-friendly interaction
  const handleStatementClick = (statement: TrueFalseStatement | ClassifiedStatement) => {
    if (isSubmitted) return;
    
    // Toggle selection
    if (selectedStatement?.id === statement.id) {
      setSelectedStatement(null);
    } else {
      setSelectedStatement(statement);
    }
  };

  const handleZoneClick = (zone: 'true' | 'false') => {
    if (isSubmitted || !selectedStatement) return;
    
    const userAnswer = zone === 'true';

    // Remove from all zones
    setUnclassified(prev => prev.filter(s => s.id !== selectedStatement.id));
    setTrueStatements(prev => prev.filter(s => s.id !== selectedStatement.id));
    setFalseStatements(prev => prev.filter(s => s.id !== selectedStatement.id));

    const classified: ClassifiedStatement = { ...selectedStatement, userAnswer };

    if (zone === 'true') {
      setTrueStatements(prev => [...prev, classified]);
    } else {
      setFalseStatements(prev => [...prev, classified]);
    }

    setSelectedStatement(null);
  };

  const handleSubmit = () => {
    const totalClassified = trueStatements.length + falseStatements.length;
    if (totalClassified < data.statements.length) return;

    setIsSubmitted(true);

    if (onComplete) {
      const answers = [
        ...trueStatements.map(s => ({ id: s.id, answer: true })),
        ...falseStatements.map(s => ({ id: s.id, answer: false }))
      ];
      onComplete({ classifications: answers });
    }
  };

  const getStatementStatus = (statement: ClassifiedStatement) => {
    if (!showFeedback || mode === 'assessment' || !isSubmitted || statement.correctAnswer === undefined) return null;
    return statement.userAnswer === statement.correctAnswer ? 'correct' : 'incorrect';
  };

  const allClassified = unclassified.length === 0;

  return (
    <div className="space-y-3" data-interactive="true">
      {/* Instructions for touch devices */}
      {isTouchDevice && !isSubmitted && (
        <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/30 p-2 rounded border border-border">
          <Hand className="size-4 flex-shrink-0" />
          <span>Tap a statement to select it, then tap True or False to classify it</span>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-3">
        {/* True Column */}
        <div>
          <div className="flex items-center gap-1 mb-2">
            <ThumbsUp className="size-4 text-green-600" />
            <p className="text-xs font-medium">True {isTouchDevice ? '(tap to place)' : ''}</p>
          </div>
          <div
            onDragOver={(e) => !isTouchDevice && handleDragOver(e, 'true')}
            onDrop={(e) => !isTouchDevice && handleDropInZone(e, 'true')}
            onClick={() => isTouchDevice && handleZoneClick('true')}
            className={cn(
              "min-h-[200px] border-2 border-dashed rounded-lg p-2 transition-all",
              !isTouchDevice && dragOverRef.current === 'true' 
                ? "border-green-400 bg-green-50 dark:bg-green-900/10" 
                : isTouchDevice && selectedStatement && !isSubmitted
                  ? "border-green-400 bg-green-50/50 dark:bg-green-900/10 cursor-pointer hover:bg-green-50 dark:hover:bg-green-900/20"
                  : "border-muted-foreground/30",
              trueStatements.length === 0 && "flex items-center justify-center"
            )}
          >
            {trueStatements.length === 0 ? (
              <p className="text-xs text-muted-foreground">{isTouchDevice && selectedStatement ? 'Tap to classify as True' : 'Drop here'}</p>
            ) : (
              <div className="space-y-1">
                {trueStatements.map((statement) => {
                  const status = getStatementStatus(statement);
                  const isSelected = selectedStatement?.id === statement.id;
                  return (
                    <div
                      key={statement.id}
                      draggable={!isSubmitted && !isTouchDevice}
                      onDragStart={(e) => !isTouchDevice && handleDragStart(e, statement)}
                      onClick={(e) => {
                        if (isTouchDevice) {
                          e.stopPropagation();
                          handleStatementClick(statement);
                        }
                      }}
                      className={cn(
                        "p-2 rounded border text-xs transition-all",
                        isSelected && "ring-2 ring-primary/50",
                        !isSubmitted && !isTouchDevice && "cursor-move",
                        !isSubmitted && isTouchDevice && "cursor-pointer",
                        status === 'correct' && "border-green-400 bg-green-50 dark:bg-green-900/20",
                        status === 'incorrect' && "border-red-400 bg-red-50 dark:bg-red-900/20",
                        !status && "border-border"
                      )}
                    >
                      <div className="flex items-start justify-between gap-1">
                        <span className="flex-1">{statement.text}</span>
                        <div className="flex items-center gap-1">
                          {isSelected && (
                            <Badge variant="outline" className="text-[10px] px-1 py-0 h-4">
                              Selected
                            </Badge>
                          )}
                          {status && (
                            status === 'correct' ? (
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
            )}
          </div>
        </div>

        {/* Unclassified Column */}
        <div>
          <p className="text-xs font-medium mb-2">To Classify {isTouchDevice ? '(tap to select)' : ''}</p>
          <div
            onDragOver={(e) => !isTouchDevice && handleDragOver(e, 'unclassified')}
            onDrop={!isTouchDevice ? handleDropInUnclassified : undefined}
            className={cn(
              "min-h-[200px] border-2 border-dashed rounded-lg p-2 transition-all",
              !isTouchDevice && dragOverRef.current === 'unclassified' 
                ? "border-blue-400 bg-blue-50 dark:bg-blue-900/10" 
                : "border-muted-foreground/30",
              unclassified.length === 0 && "flex items-center justify-center"
            )}
          >
            {unclassified.length === 0 ? (
              <p className="text-xs text-muted-foreground">All classified</p>
            ) : (
              <div className="space-y-1">
                {unclassified.map((statement) => {
                  const isSelected = selectedStatement?.id === statement.id;
                  return (
                    <div
                      key={statement.id}
                      draggable={!isSubmitted && !isTouchDevice}
                      onDragStart={(e) => !isTouchDevice && handleDragStart(e, statement)}
                      onClick={() => handleStatementClick(statement)}
                      className={cn(
                        "p-2 rounded border-2 text-xs transition-all",
                        isSelected 
                          ? "border-primary bg-primary/10 ring-2 ring-primary/50"
                          : "border-border",
                        !isSubmitted && !isTouchDevice && "cursor-move hover:shadow-md hover:border-primary/50",
                        !isSubmitted && isTouchDevice && "cursor-pointer hover:border-primary/50"
                      )}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span>{statement.text}</span>
                        {isSelected && (
                          <Badge variant="outline" className="text-[10px] px-1 py-0 h-4 flex-shrink-0">
                            Selected
                          </Badge>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* False Column */}
        <div>
          <div className="flex items-center gap-1 mb-2">
            <ThumbsDown className="size-4 text-red-600" />
            <p className="text-xs font-medium">False {isTouchDevice ? '(tap to place)' : ''}</p>
          </div>
          <div
            onDragOver={(e) => !isTouchDevice && handleDragOver(e, 'false')}
            onDrop={(e) => !isTouchDevice && handleDropInZone(e, 'false')}
            onClick={() => isTouchDevice && handleZoneClick('false')}
            className={cn(
              "min-h-[200px] border-2 border-dashed rounded-lg p-2 transition-all",
              !isTouchDevice && dragOverRef.current === 'false' 
                ? "border-red-400 bg-red-50 dark:bg-red-900/10" 
                : isTouchDevice && selectedStatement && !isSubmitted
                  ? "border-red-400 bg-red-50/50 dark:bg-red-900/10 cursor-pointer hover:bg-red-50 dark:hover:bg-red-900/20"
                  : "border-muted-foreground/30",
              falseStatements.length === 0 && "flex items-center justify-center"
            )}
          >
            {falseStatements.length === 0 ? (
              <p className="text-xs text-muted-foreground">{isTouchDevice && selectedStatement ? 'Tap to classify as False' : 'Drop here'}</p>
            ) : (
              <div className="space-y-1">
                {falseStatements.map((statement) => {
                  const status = getStatementStatus(statement);
                  const isSelected = selectedStatement?.id === statement.id;
                  return (
                    <div
                      key={statement.id}
                      draggable={!isSubmitted && !isTouchDevice}
                      onDragStart={(e) => !isTouchDevice && handleDragStart(e, statement)}
                      onClick={(e) => {
                        if (isTouchDevice) {
                          e.stopPropagation();
                          handleStatementClick(statement);
                        }
                      }}
                      className={cn(
                        "p-2 rounded border text-xs transition-all",
                        isSelected && "ring-2 ring-primary/50",
                        !isSubmitted && !isTouchDevice && "cursor-move",
                        !isSubmitted && isTouchDevice && "cursor-pointer",
                        status === 'correct' && "border-green-400 bg-green-50 dark:bg-green-900/20",
                        status === 'incorrect' && "border-red-400 bg-red-50 dark:bg-red-900/20",
                        !status && "border-border"
                      )}
                    >
                      <div className="flex items-start justify-between gap-1">
                        <span className="flex-1">{statement.text}</span>
                        <div className="flex items-center gap-1">
                          {isSelected && (
                            <Badge variant="outline" className="text-[10px] px-1 py-0 h-4">
                              Selected
                            </Badge>
                          )}
                          {status && (
                            status === 'correct' ? (
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
            )}
          </div>
        </div>
      </div>

      {/* Submit Button */}
      {!isSubmitted && (
        <Button
          onClick={handleSubmit}
          disabled={!allClassified}
          className="w-full"
        >
          <CheckCircle className="size-4 mr-1" />
          {mode === 'assessment' ? 'Submit Classifications' : 'Check Classifications'}
        </Button>
      )}

      {/* Status */}
      <div className="text-center text-sm text-muted-foreground">
        {trueStatements.length + falseStatements.length}/{data.statements.length} classified
        {isSubmitted && mode === 'assessment' && (
          <span className="block text-blue-600 dark:text-blue-400 mt-1">
            Classifications submitted!
          </span>
        )}
      </div>
    </div>
  );
}

