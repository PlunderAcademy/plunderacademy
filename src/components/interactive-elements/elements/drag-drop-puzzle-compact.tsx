"use client";

import { useState, useRef, DragEvent, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Hand } from "lucide-react";
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
  const [selectedBlock, setSelectedBlock] = useState<{ block: CodeBlock; source: 'available' | 'placed'; index?: number } | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const dragOverRef = useRef<number | null>(null);

  // Detect touch device
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

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

  // Touch/Click handlers for mobile-friendly interaction
  const handleAvailableBlockClick = (block: CodeBlock) => {
    if (isSubmitted) return;
    
    // Toggle selection
    if (selectedBlock?.block.id === block.id && selectedBlock.source === 'available') {
      setSelectedBlock(null);
    } else {
      setSelectedBlock({ block, source: 'available' });
    }
  };

  const handlePlacedBlockClick = (block: CodeBlock, index: number) => {
    if (isSubmitted) return;
    
    // Toggle selection
    if (selectedBlock?.block.id === block.id && selectedBlock.source === 'placed') {
      setSelectedBlock(null);
    } else {
      setSelectedBlock({ block, source: 'placed', index });
    }
  };

  const handleDropZoneClick = (index: number) => {
    if (isSubmitted || !selectedBlock) return;

    if (selectedBlock.source === 'available') {
      // Moving from available to drop zone
      setAvailableBlocks(prev => prev.filter(b => b.id !== selectedBlock.block.id));
      
      if (placedBlocks[index]) {
        setAvailableBlocks(prev => [...prev, placedBlocks[index]!]);
      }
      
      const newPlacedBlocks = [...placedBlocks];
      newPlacedBlocks[index] = selectedBlock.block;
      setPlacedBlocks(newPlacedBlocks);
    } else if (selectedBlock.source === 'placed' && selectedBlock.index !== undefined) {
      // Swapping placed blocks or moving to different position
      const newPlacedBlocks = [...placedBlocks];
      const temp = newPlacedBlocks[index];
      newPlacedBlocks[index] = selectedBlock.block;
      newPlacedBlocks[selectedBlock.index] = temp;
      setPlacedBlocks(newPlacedBlocks);
    }
    
    setSelectedBlock(null);
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
      {/* Instructions for touch devices */}
      {isTouchDevice && !isSubmitted && (
        <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/30 p-2 rounded border border-border">
          <Hand className="size-4 flex-shrink-0" />
          <span>Tap a block to select it, then tap a position to place it</span>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-3">
        {/* Available Blocks */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-2">
            Available blocks {isTouchDevice ? '(tap to select)' : '(drag)'}:
          </p>
          <div className="space-y-1 min-h-[200px] p-2 border-2 border-dashed border-muted-foreground/20 rounded-lg">
            {availableBlocks.map((block) => {
              const isSelected = selectedBlock?.block.id === block.id && selectedBlock.source === 'available';
              
              return (
                <div
                  key={block.id}
                  draggable={!isSubmitted && !isTouchDevice}
                  onDragStart={(e) => !isTouchDevice && handleDragStart(e, block)}
                  onClick={() => handleAvailableBlockClick(block)}
                  className={cn(
                    "p-2 rounded border-2 font-mono text-xs transition-all",
                    isSelected
                      ? "border-primary bg-primary/10 ring-2 ring-primary/50"
                      : "border-border",
                    !isSubmitted && !isTouchDevice && "cursor-move hover:shadow-md hover:border-primary/50 hover:scale-[1.01]",
                    !isSubmitted && isTouchDevice && "cursor-pointer hover:border-primary/50"
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span>{block.content}</span>
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
        </div>

        {/* Drop Zone */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-2">
            Arrange in order {isTouchDevice ? '(tap to place)' : ''}:
          </p>
          <div className="space-y-1 min-h-[200px]">
            {placedBlocks.map((block, index) => {
              const status = block ? getBlockStatus(block, index) : null;
              const isBlockSelected = selectedBlock?.block.id === block?.id && selectedBlock?.source === 'placed';
              const canAcceptClick = isTouchDevice && selectedBlock && !isSubmitted;
              
              return (
                <div
                  key={index}
                  onDragOver={(e) => !isTouchDevice && handleDragOver(e, index)}
                  onDrop={(e) => !isTouchDevice && handleDrop(e, index)}
                  onClick={() => {
                    if (isTouchDevice && !isSubmitted) {
                      if (block && !selectedBlock) {
                        handlePlacedBlockClick(block, index);
                      } else if (selectedBlock) {
                        handleDropZoneClick(index);
                      }
                    } else if (!isTouchDevice && block) {
                      handleRemoveBlock(index);
                    }
                  }}
                  className={cn(
                    "min-h-[40px] border-2 rounded transition-all",
                    block 
                      ? status === 'correct'
                        ? "border-green-400 bg-green-50 dark:bg-green-900/20"
                        : status === 'incorrect'
                        ? "border-red-400 bg-red-50 dark:bg-red-900/20"
                        : isBlockSelected
                          ? "border-primary bg-primary/10 ring-2 ring-primary/50"
                          : "border-border bg-background"
                      : canAcceptClick
                        ? "border-primary/50 border-dashed bg-primary/5 cursor-pointer hover:border-primary hover:bg-primary/10"
                        : "border-dashed border-muted-foreground/30",
                    !isTouchDevice && dragOverRef.current === index && "border-blue-400 bg-blue-50 dark:bg-blue-900/10",
                    block && "cursor-pointer",
                    isTouchDevice && !block && canAcceptClick && "cursor-pointer"
                  )}
                >
                  {block ? (
                    <div 
                      className="p-2 font-mono text-xs flex items-center justify-between gap-2"
                    >
                      <span className="flex-1">{block.content}</span>
                      <div className="flex items-center gap-1">
                        {isBlockSelected && (
                          <Badge variant="outline" className="text-[10px] px-1 py-0 h-4">
                            Selected
                          </Badge>
                        )}
                        {showFeedback && mode === 'learning' && (
                          status === 'correct' ? (
                            <CheckCircle className="size-3 text-green-600 flex-shrink-0" />
                          ) : status === 'incorrect' ? (
                            <XCircle className="size-3 text-red-600 flex-shrink-0" />
                          ) : null
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="h-full flex items-center justify-center text-xs text-muted-foreground p-2">
                      {canAcceptClick ? `Tap to place at line ${index + 1}` : `Line ${index + 1}`}
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

