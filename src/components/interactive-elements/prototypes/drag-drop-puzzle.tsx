"use client";

import { useState, useRef, DragEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, RotateCcw, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlock {
  id: string;
  content: string;
  type: 'pragma' | 'contract' | 'function' | 'variable' | 'logic' | 'modifier';
  correctPosition: number;
}

// Sample ERC20 token puzzle data
const SAMPLE_CODE_BLOCKS: CodeBlock[] = [
  {
    id: "block-1",
    content: "pragma solidity ^0.8.19;",
    type: "pragma",
    correctPosition: 0
  },
  {
    id: "block-2", 
    content: "contract MyToken {",
    type: "contract",
    correctPosition: 1
  },
  {
    id: "block-3",
    content: "    mapping(address => uint256) private _balances;",
    type: "variable",
    correctPosition: 2
  },
  {
    id: "block-4",
    content: "    uint256 private _totalSupply;",
    type: "variable", 
    correctPosition: 3
  },
  {
    id: "block-5",
    content: "    constructor(uint256 initialSupply) {",
    type: "function",
    correctPosition: 4
  },
  {
    id: "block-6",
    content: "        _totalSupply = initialSupply;",
    type: "logic",
    correctPosition: 5
  },
  {
    id: "block-7",
    content: "        _balances[msg.sender] = initialSupply;",
    type: "logic",
    correctPosition: 6
  },
  {
    id: "block-8",
    content: "    }",
    type: "function",
    correctPosition: 7
  },
  {
    id: "block-9",
    content: "}",
    type: "contract",
    correctPosition: 8
  }
];

export function DragDropCodePuzzle() {
  const [availableBlocks, setAvailableBlocks] = useState<CodeBlock[]>(
    [...SAMPLE_CODE_BLOCKS].sort(() => Math.random() - 0.5) // Shuffle
  );
  const [placedBlocks, setPlacedBlocks] = useState<(CodeBlock | null)[]>(
    new Array(SAMPLE_CODE_BLOCKS.length).fill(null)
  );
  const [draggedBlock, setDraggedBlock] = useState<CodeBlock | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showHints, setShowHints] = useState(false);

  const dragOverRef = useRef<number | null>(null);

  const handleDragStart = (e: DragEvent<HTMLDivElement>, block: CodeBlock) => {
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
    
    if (!draggedBlock) return;

    // Remove from available blocks
    setAvailableBlocks(prev => prev.filter(block => block.id !== draggedBlock.id));
    
    // If there's already a block in this position, move it back to available
    if (placedBlocks[index]) {
      setAvailableBlocks(prev => [...prev, placedBlocks[index]!]);
    }
    
    // Place the dragged block
    const newPlacedBlocks = [...placedBlocks];
    newPlacedBlocks[index] = draggedBlock;
    setPlacedBlocks(newPlacedBlocks);
    
    setDraggedBlock(null);
    dragOverRef.current = null;

    // Check if puzzle is completed correctly
    checkCompletion(newPlacedBlocks);
  };

  const handleRemoveBlock = (index: number) => {
    const block = placedBlocks[index];
    if (block) {
      setAvailableBlocks(prev => [...prev, block]);
      const newPlacedBlocks = [...placedBlocks];
      newPlacedBlocks[index] = null;
      setPlacedBlocks(newPlacedBlocks);
      setIsCompleted(false);
    }
  };

  const checkCompletion = (blocks: (CodeBlock | null)[]) => {
    const isComplete = blocks.every((block, index) => 
      block !== null && block.correctPosition === index
    );
    setIsCompleted(isComplete);
  };

  const resetPuzzle = () => {
    setAvailableBlocks([...SAMPLE_CODE_BLOCKS].sort(() => Math.random() - 0.5));
    setPlacedBlocks(new Array(SAMPLE_CODE_BLOCKS.length).fill(null));
    setIsCompleted(false);
    setShowHints(false);
  };

  const getBlockTypeColor = (type: CodeBlock['type']) => {
    const colors = {
      pragma: 'bg-purple-100 border-purple-300 text-purple-800 dark:bg-purple-900/20 dark:border-purple-700 dark:text-purple-300',
      contract: 'bg-blue-100 border-blue-300 text-blue-800 dark:bg-blue-900/20 dark:border-blue-700 dark:text-blue-300',
      function: 'bg-green-100 border-green-300 text-green-800 dark:bg-green-900/20 dark:border-green-700 dark:text-green-300',
      variable: 'bg-orange-100 border-orange-300 text-orange-800 dark:bg-orange-900/20 dark:border-orange-700 dark:text-orange-300',
      logic: 'bg-yellow-100 border-yellow-300 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-700 dark:text-yellow-300',
      modifier: 'bg-pink-100 border-pink-300 text-pink-800 dark:bg-pink-900/20 dark:border-pink-700 dark:text-pink-300'
    };
    return colors[type];
  };

  return (
    <div className="space-y-6">
      {/* Instructions */}
      <div className="bg-muted/30 rounded-lg p-4">
        <h3 className="font-semibold mb-2">🧩 Drag & Drop Challenge</h3>
        <p className="text-sm text-muted-foreground mb-2">
          Arrange the code blocks below to create a valid ERC20 token contract structure.
        </p>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="outline" className="text-xs">
            <div className="w-2 h-2 rounded-full bg-purple-500 mr-1"></div>
            Pragma
          </Badge>
          <Badge variant="outline" className="text-xs">
            <div className="w-2 h-2 rounded-full bg-blue-500 mr-1"></div>
            Contract
          </Badge>
          <Badge variant="outline" className="text-xs">
            <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
            Function
          </Badge>
          <Badge variant="outline" className="text-xs">
            <div className="w-2 h-2 rounded-full bg-orange-500 mr-1"></div>
            Variable
          </Badge>
          <Badge variant="outline" className="text-xs">
            <div className="w-2 h-2 rounded-full bg-yellow-500 mr-1"></div>
            Logic
          </Badge>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-2 items-center">
        <Button onClick={resetPuzzle} variant="outline" size="sm">
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
        {isCompleted && (
          <Badge variant="default" className="bg-green-600">
            <Trophy className="size-3 mr-1" />
            Completed!
          </Badge>
        )}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Available Blocks */}
        <div>
          <h4 className="font-medium mb-3">Available Blocks</h4>
          <div className="space-y-2 min-h-[300px] border-2 border-dashed border-muted-foreground/20 rounded-lg p-4">
            {availableBlocks.map((block) => (
              <div
                key={block.id}
                draggable
                onDragStart={(e) => handleDragStart(e, block)}
                className={cn(
                  "p-3 rounded border-2 cursor-move transition-all hover:shadow-md",
                  getBlockTypeColor(block.type),
                  "font-mono text-sm"
                )}
              >
                <div className="flex items-center justify-between">
                  <code>{block.content}</code>
                  <Badge variant="secondary" className="text-xs">
                    {block.type}
                  </Badge>
                </div>
                {showHints && (
                  <div className="text-xs opacity-70 mt-1">
                    Position: {block.correctPosition + 1}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Drop Zone */}
        <div>
          <h4 className="font-medium mb-3">Contract Structure</h4>
          <div className="space-y-1 min-h-[300px] border-2 border-muted-foreground/20 rounded-lg p-4">
            {placedBlocks.map((block, index) => (
              <div
                key={index}
                onDragOver={(e) => handleDragOver(e, index)}
                onDrop={(e) => handleDrop(e, index)}
                className={cn(
                  "min-h-[50px] border-2 border-dashed rounded transition-all",
                  block 
                    ? "border-green-300 bg-green-50 dark:bg-green-900/10" 
                    : "border-muted-foreground/20 hover:border-muted-foreground/40",
                  dragOverRef.current === index && "border-blue-400 bg-blue-50 dark:bg-blue-900/10"
                )}
              >
                {block ? (
                  <div 
                    className={cn(
                      "p-3 rounded border-2 font-mono text-sm cursor-pointer group",
                      getBlockTypeColor(block.type),
                      block.correctPosition === index 
                        ? "border-green-400" 
                        : "border-red-400"
                    )}
                    onClick={() => handleRemoveBlock(index)}
                  >
                    <div className="flex items-center justify-between">
                      <code>{block.content}</code>
                      <div className="flex items-center gap-1">
                        {block.correctPosition === index ? (
                          <CheckCircle className="size-4 text-green-600" />
                        ) : (
                          <XCircle className="size-4 text-red-600" />
                        )}
                        <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                          Click to remove
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center text-muted-foreground text-sm">
                    Drop code block here (Position {index + 1})
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Message */}
      {isCompleted && (
        <Card className="border-green-200 bg-green-50 dark:bg-green-900/10">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Trophy className="size-5 text-green-600" />
              <div>
                <h4 className="font-semibold text-green-800 dark:text-green-200">
                  Puzzle Completed! 🎉
                </h4>
                <p className="text-sm text-green-700 dark:text-green-300">
                  You&apos;ve successfully arranged the ERC20 token contract structure. 
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
