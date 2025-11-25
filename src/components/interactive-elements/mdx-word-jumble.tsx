"use client";

import { WordJumbleCompact, WordJumbleData } from "./elements/word-jumble-compact";

interface MDXWordJumbleProps {
  word: string;
  hint: string;
  scrambled?: string;
}

/**
 * MDX-friendly Word Jumble component for use in lesson content
 * Shows feedback and allows unlimited retries (learning mode)
 */
export function MDXWordJumble({ word, hint, scrambled }: MDXWordJumbleProps) {
  const data: WordJumbleData = {
    word,
    hint,
    scrambled
  };

  return (
    <div className="my-6 p-4 border-2 border-primary/20 rounded-lg bg-muted/20">
      <div className="mb-3">
        <h4 className="font-semibold text-primary flex items-center gap-2">
          🎮 Interactive Practice: Word Jumble
        </h4>
        <p className="text-sm text-muted-foreground mt-1">
          Test your knowledge by unscrambling this term
        </p>
      </div>
      <WordJumbleCompact
        data={data}
        mode="learning"
        showFeedback={true}
      />
    </div>
  );
}

