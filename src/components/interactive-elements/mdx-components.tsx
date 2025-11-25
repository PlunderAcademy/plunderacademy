"use client";

import { WordJumbleCompact, WordJumbleData } from "./elements/word-jumble-compact";
import { ConceptMatchingCompact, ConceptMatchingData } from "./elements/concept-matching-compact";
import { TimelineBuilderCompact, TimelineBuilderData } from "./elements/timeline-builder-compact";
import { TrueFalseCompact, TrueFalseData } from "./elements/true-false-compact";
import { DragDropPuzzleCompact, DragDropPuzzleData } from "./elements/drag-drop-puzzle-compact";

// Word Jumble MDX Component
export function WordJumble({ word, hint, scrambled }: { word: string; hint: string; scrambled?: string }) {
  const data: WordJumbleData = { word, hint, scrambled };
  
  return (
    <div className="my-6 p-4 border-2 border-primary/20 rounded-lg bg-muted/20">
      <div className="mb-3">
        <h4 className="font-semibold text-primary flex items-center gap-2">
          🎮 Interactive Practice: Word Jumble
        </h4>
        <p className="text-sm text-muted-foreground mt-1">Test your knowledge by unscrambling this term</p>
      </div>
      <WordJumbleCompact data={data} mode="learning" showFeedback={true} />
    </div>
  );
}

// Concept Matching MDX Component
export function ConceptMatching({ pairs }: { pairs: ConceptMatchingData['pairs'] }) {
  return (
    <div className="my-6 p-4 border-2 border-primary/20 rounded-lg bg-muted/20">
      <div className="mb-3">
        <h4 className="font-semibold text-primary flex items-center gap-2">
          🎮 Interactive Practice: Concept Matching
        </h4>
        <p className="text-sm text-muted-foreground mt-1">Match concepts with their definitions</p>
      </div>
      <ConceptMatchingCompact data={{ pairs }} mode="learning" showFeedback={true} />
    </div>
  );
}

// Timeline Builder MDX Component
export function TimelineBuilder({ events }: { events: TimelineBuilderData['events'] }) {
  return (
    <div className="my-6 p-4 border-2 border-primary/20 rounded-lg bg-muted/20">
      <div className="mb-3">
        <h4 className="font-semibold text-primary flex items-center gap-2">
          🎮 Interactive Practice: Timeline Builder
        </h4>
        <p className="text-sm text-muted-foreground mt-1">Arrange events in the correct chronological order</p>
      </div>
      <TimelineBuilderCompact data={{ events }} mode="learning" showFeedback={true} />
    </div>
  );
}

// True/False MDX Component
export function TrueFalse({ statements }: { statements: TrueFalseData['statements'] }) {
  return (
    <div className="my-6 p-4 border-2 border-primary/20 rounded-lg bg-muted/20">
      <div className="mb-3">
        <h4 className="font-semibold text-primary flex items-center gap-2">
          🎮 Interactive Practice: True or False
        </h4>
        <p className="text-sm text-muted-foreground mt-1">Classify each statement as true or false</p>
      </div>
      <TrueFalseCompact data={{ statements }} mode="learning" showFeedback={true} />
    </div>
  );
}

// Drag & Drop Puzzle MDX Component
export function DragDropPuzzle({ codeBlocks }: { codeBlocks: DragDropPuzzleData['codeBlocks'] }) {
  return (
    <div className="my-6 p-4 border-2 border-primary/20 rounded-lg bg-muted/20">
      <div className="mb-3">
        <h4 className="font-semibold text-primary flex items-center gap-2">
          🎮 Interactive Practice: Code Puzzle
        </h4>
        <p className="text-sm text-muted-foreground mt-1">Arrange code blocks in the correct order</p>
      </div>
      <DragDropPuzzleCompact data={{ codeBlocks }} mode="learning" showFeedback={true} />
    </div>
  );
}

