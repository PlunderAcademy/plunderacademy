"use client";

import { useState, useRef, DragEvent } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, ThumbsUp, ThumbsDown } from "lucide-react";
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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dragOverRef = useRef<'true' | 'false' | 'unclassified' | null>(null);

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
      <div className="grid md:grid-cols-3 gap-3">
        {/* True Column */}
        <div>
          <div className="flex items-center gap-1 mb-2">
            <ThumbsUp className="size-4 text-green-600" />
            <p className="text-xs font-medium">True</p>
          </div>
          <div
            onDragOver={(e) => handleDragOver(e, 'true')}
            onDrop={(e) => handleDropInZone(e, 'true')}
            className={cn(
              "min-h-[200px] border-2 border-dashed rounded-lg p-2 transition-all",
              dragOverRef.current === 'true' 
                ? "border-green-400 bg-green-50 dark:bg-green-900/10" 
                : "border-muted-foreground/30",
              trueStatements.length === 0 && "flex items-center justify-center"
            )}
          >
            {trueStatements.length === 0 ? (
              <p className="text-xs text-muted-foreground">Drop here</p>
            ) : (
              <div className="space-y-1">
                {trueStatements.map((statement) => {
                  const status = getStatementStatus(statement);
                  return (
                    <div
                      key={statement.id}
                      draggable={!isSubmitted}
                      onDragStart={(e) => handleDragStart(e, statement)}
                      className={cn(
                        "p-2 rounded border text-xs transition-all",
                        !isSubmitted && "cursor-move",
                        status === 'correct' && "border-green-400 bg-green-50 dark:bg-green-900/20",
                        status === 'incorrect' && "border-red-400 bg-red-50 dark:bg-red-900/20",
                        !status && "border-border"
                      )}
                    >
                      <div className="flex items-start justify-between gap-1">
                        <span className="flex-1">{statement.text}</span>
                        {status && (
                          status === 'correct' ? (
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
            )}
          </div>
        </div>

        {/* Unclassified Column */}
        <div>
          <p className="text-xs font-medium mb-2">To Classify</p>
          <div
            onDragOver={(e) => handleDragOver(e, 'unclassified')}
            onDrop={handleDropInUnclassified}
            className={cn(
              "min-h-[200px] border-2 border-dashed rounded-lg p-2 transition-all",
              dragOverRef.current === 'unclassified' 
                ? "border-blue-400 bg-blue-50 dark:bg-blue-900/10" 
                : "border-muted-foreground/30",
              unclassified.length === 0 && "flex items-center justify-center"
            )}
          >
            {unclassified.length === 0 ? (
              <p className="text-xs text-muted-foreground">All classified</p>
            ) : (
              <div className="space-y-1">
                {unclassified.map((statement) => (
                  <div
                    key={statement.id}
                    draggable={!isSubmitted}
                    onDragStart={(e) => handleDragStart(e, statement)}
                    className={cn(
                      "p-2 rounded border-2 border-border text-xs transition-all",
                      !isSubmitted && "cursor-move hover:shadow-md hover:border-primary/50"
                    )}
                  >
                    {statement.text}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* False Column */}
        <div>
          <div className="flex items-center gap-1 mb-2">
            <ThumbsDown className="size-4 text-red-600" />
            <p className="text-xs font-medium">False</p>
          </div>
          <div
            onDragOver={(e) => handleDragOver(e, 'false')}
            onDrop={(e) => handleDropInZone(e, 'false')}
            className={cn(
              "min-h-[200px] border-2 border-dashed rounded-lg p-2 transition-all",
              dragOverRef.current === 'false' 
                ? "border-red-400 bg-red-50 dark:bg-red-900/10" 
                : "border-muted-foreground/30",
              falseStatements.length === 0 && "flex items-center justify-center"
            )}
          >
            {falseStatements.length === 0 ? (
              <p className="text-xs text-muted-foreground">Drop here</p>
            ) : (
              <div className="space-y-1">
                {falseStatements.map((statement) => {
                  const status = getStatementStatus(statement);
                  return (
                    <div
                      key={statement.id}
                      draggable={!isSubmitted}
                      onDragStart={(e) => handleDragStart(e, statement)}
                      className={cn(
                        "p-2 rounded border text-xs transition-all",
                        !isSubmitted && "cursor-move",
                        status === 'correct' && "border-green-400 bg-green-50 dark:bg-green-900/20",
                        status === 'incorrect' && "border-red-400 bg-red-50 dark:bg-red-900/20",
                        !status && "border-border"
                      )}
                    >
                      <div className="flex items-start justify-between gap-1">
                        <span className="flex-1">{statement.text}</span>
                        {status && (
                          status === 'correct' ? (
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

