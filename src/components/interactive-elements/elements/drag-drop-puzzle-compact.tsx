"use client";

import { useState, useRef, DragEvent } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CodeBlock {
  id: string;
  content: string;
  correctPosition?: number;  // Optional for assessment mode
}

export interface DragDropPuzzleData {
  codeBlocks: CodeBlock[];
}

interface DragDropPuzzleCompactProps {
  data: DragDropPuzzleData;
  mode?: 'learning' | 'assessment';
  onComplete?: (answer: { sequence: string[] }) => void;
  showFeedback?: boolean;
}

export function DragDropPuzzleCompact({
  data,
  mode = 'learning',
  onComplete,
  showFeedback = true
}: DragDropPuzzleCompactProps) {
  const [availableBlocks, setAvailableBlocks] = useState<CodeBlock[]>(() =>
    [...data.codeBlocks].sort(() => Math.random() - 0.5)
  );
  const [placedBlocks, setPlacedBlocks] = useState<(CodeBlock | null)[]>(() =>
    new Array(data.codeBlocks.length).fill(null)
  );
  const [draggedBlock, setDraggedBlock] = useState<CodeBlock | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dragOverRef = useRef<number | null>(null);

  const handleDragStart = (e: DragEvent<HTMLDivElement>, block: CodeBlock) => {
    if (isSubmitted) return;
    setDraggedBlock(block);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    dragOverRef.current = index;
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    if (!draggedBlock || isSubmitted) return;

    setAvailableBlocks(prev => prev.filter(block => block.id !== draggedBlock.id));
    
    if (placedBlocks[index]) {
      setAvailableBlocks(prev => [...prev, placedBlocks[index]!]);
    }
    
    const newPlacedBlocks = [...placedBlocks];
    newPlacedBlocks[index] = draggedBlock;
    setPlacedBlocks(newPlacedBlocks);
    
    setDraggedBlock(null);
    dragOverRef.current = null;
  };

  const handleRemoveBlock = (index: number) => {
    if (isSubmitted) return;
    const block = placedBlocks[index];
    if (block) {
      setAvailableBlocks(prev => [...prev, block]);
      const newPlacedBlocks = [...placedBlocks];
      newPlacedBlocks[index] = null;
      setPlacedBlocks(newPlacedBlocks);
    }
  };

  const handleSubmit = () => {
    if (placedBlocks.some(b => b === null)) return;
    
    setIsSubmitted(true);

    if (onComplete) {
      const sequence = placedBlocks.map(b => b!.id);
      onComplete({ sequence });
    }
  };

  const getBlockStatus = (block: CodeBlock, index: number) => {
    if (!showFeedback || mode === 'assessment' || !isSubmitted || block.correctPosition === undefined) return null;
    return block.correctPosition === index ? 'correct' : 'incorrect';
  };

  const allPlaced = placedBlocks.every(b => b !== null);

  return (
    <div className="space-y-3" data-interactive="true">
      <div className="grid md:grid-cols-2 gap-3">
        {/* Available Blocks */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-2">Available blocks:</p>
          <div className="space-y-1 min-h-[200px] p-2 border-2 border-dashed border-muted-foreground/20 rounded-lg">
            {availableBlocks.map((block) => (
              <div
                key={block.id}
                draggable={!isSubmitted}
                onDragStart={(e) => handleDragStart(e, block)}
                className={cn(
                  "p-2 rounded border-2 border-border font-mono text-xs transition-all",
                  !isSubmitted && "cursor-move hover:shadow-md hover:border-primary/50 hover:scale-[1.01]"
                )}
              >
                {block.content}
              </div>
            ))}
          </div>
        </div>

        {/* Drop Zone */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-2">Arrange in order:</p>
          <div className="space-y-1 min-h-[200px]">
            {placedBlocks.map((block, index) => {
              const status = block ? getBlockStatus(block, index) : null;
              
              return (
                <div
                  key={index}
                  onDragOver={(e) => handleDragOver(e, index)}
                  onDrop={(e) => handleDrop(e, index)}
                  className={cn(
                    "min-h-[40px] border-2 rounded transition-all",
                    block 
                      ? status === 'correct'
                        ? "border-green-400 bg-green-50 dark:bg-green-900/20"
                        : status === 'incorrect'
                        ? "border-red-400 bg-red-50 dark:bg-red-900/20"
                        : "border-border bg-background"
                      : "border-dashed border-muted-foreground/30",
                    dragOverRef.current === index && "border-blue-400 bg-blue-50 dark:bg-blue-900/10"
                  )}
                >
                  {block ? (
                    <div 
                      className="p-2 cursor-pointer font-mono text-xs flex items-center justify-between gap-2"
                      onClick={() => handleRemoveBlock(index)}
                    >
                      <span className="flex-1">{block.content}</span>
                      {showFeedback && mode === 'learning' && (
                        status === 'correct' ? (
                          <CheckCircle className="size-3 text-green-600 flex-shrink-0" />
                        ) : status === 'incorrect' ? (
                          <XCircle className="size-3 text-red-600 flex-shrink-0" />
                        ) : null
                      )}
                    </div>
                  ) : (
                    <div className="h-full flex items-center justify-center text-xs text-muted-foreground p-2">
                      Line {index + 1}
                    </div>
                  )}
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
          disabled={!allPlaced}
          className="w-full"
        >
          <CheckCircle className="size-4 mr-1" />
          {mode === 'assessment' ? 'Submit Code' : 'Check Code'}
        </Button>
      )}

      {/* Status */}
      <div className="text-center text-sm text-muted-foreground">
        {placedBlocks.filter(b => b !== null).length}/{data.codeBlocks.length} placed
        {isSubmitted && mode === 'assessment' && (
          <span className="block text-blue-600 dark:text-blue-400 mt-1">
            Code submitted!
          </span>
        )}
      </div>
    </div>
  );
}

