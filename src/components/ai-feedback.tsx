"use client";

import * as React from "react";
import { ThumbsUp, ThumbsDown, MessageSquare, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Actions, Action } from "@/components/ai-elements/actions";
import { useSession } from "@/lib/session-context";
import {
  submitAIFeedback,
  hasFeedback,
  markFeedbackProvided,
} from "@/lib/feedback-api";
import { cn } from "@/lib/utils";

interface AIFeedbackProps {
  interactionId: string;
  toolType: "auditor" | "chat";
}

/**
 * Feedback component for AI responses with thumbs up/down, rating, and text feedback.
 * Includes debouncing and local caching to prevent excessive API calls.
 */
export function AIFeedback({ interactionId, toolType }: AIFeedbackProps) {
  const { address } = useSession();
  const [feedback, setFeedback] = React.useState<"up" | "down" | null>(null);
  const [showDetailedFeedback, setShowDetailedFeedback] = React.useState(false);
  const [qualityRating, setQualityRating] = React.useState<number>(0);
  const [textFeedback, setTextFeedback] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [hasProvidedDetailedFeedback, setHasProvidedDetailedFeedback] = React.useState(false);
  const [hasClickedThumbs, setHasClickedThumbs] = React.useState(false);

  // Check if detailed feedback already provided on mount
  React.useEffect(() => {
    if (interactionId && hasFeedback(interactionId)) {
      setHasProvidedDetailedFeedback(true);
    }
  }, [interactionId]);

  // Debounced feedback submission
  const submitFeedbackDebounced = React.useCallback(
    async (
      type: "thumbs_up" | "thumbs_down" | "rating" | "text",
      value: string | number
    ) => {
      if (!address || !interactionId || isSubmitting) return;

      setIsSubmitting(true);
      try {
        await submitAIFeedback({
          interactionId,
          walletAddress: address,
          toolType,
          feedbackType: type,
          feedbackValue: value.toString(),
          qualityRating: qualityRating || undefined,
        });
      } catch (error) {
        console.error("Failed to submit feedback:", error);
      } finally {
        // Debounce: prevent rapid re-submission
        setTimeout(() => {
          setIsSubmitting(false);
        }, 1000);
      }
    },
    [address, interactionId, toolType, qualityRating, isSubmitting]
  );

  const handleThumbsFeedback = (type: "up" | "down") => {
    if (hasClickedThumbs) return;
    setFeedback(type);
    setHasClickedThumbs(true);
    submitFeedbackDebounced(type === "up" ? "thumbs_up" : "thumbs_down", type);
    // Don't mark as "provided" - allow them to still give detailed feedback
  };

  const handleDetailedFeedback = () => {
    if (qualityRating > 0) {
      submitFeedbackDebounced("rating", qualityRating);
    }

    if (textFeedback.trim()) {
      submitFeedbackDebounced("text", textFeedback);
    }

    // Now mark as fully provided and cache it
    markFeedbackProvided(interactionId);
    setHasProvidedDetailedFeedback(true);
    setShowDetailedFeedback(false);
    setTextFeedback("");
    setQualityRating(0);
  };

  if (!address || !interactionId) {
    return null;
  }

  return (
    <div className="mt-3 pt-2 border-t border-border">
      <Actions>
        <Action
          tooltip={
            hasClickedThumbs
              ? "Already rated"
              : "Helpful response"
          }
          onClick={() => handleThumbsFeedback("up")}
          disabled={isSubmitting || hasClickedThumbs}
          className={cn(
            feedback === "up" && "text-green-600 bg-green-100 dark:bg-green-950"
          )}
        >
          <ThumbsUp className="size-4" />
        </Action>

        <Action
          tooltip={
            hasClickedThumbs ? "Already rated" : "Not helpful"
          }
          onClick={() => handleThumbsFeedback("down")}
          disabled={isSubmitting || hasClickedThumbs}
          className={cn(
            feedback === "down" && "text-red-600 bg-red-100 dark:bg-red-950"
          )}
        >
          <ThumbsDown className="size-4" />
        </Action>

        <Action
          tooltip={hasProvidedDetailedFeedback ? "Detailed feedback already provided" : "Add detailed feedback"}
          onClick={() => setShowDetailedFeedback(!showDetailedFeedback)}
          disabled={hasProvidedDetailedFeedback}
          className={cn(showDetailedFeedback && "bg-blue-100 dark:bg-blue-950")}
        >
          <MessageSquare className="size-4" />
        </Action>
      </Actions>

      {/* Detailed Feedback Section */}
      {showDetailedFeedback && !hasProvidedDetailedFeedback && (
        <div className="mt-3 p-3 bg-muted rounded-lg space-y-3">
          {/* Quality Rating */}
          <div>
            <label className="text-sm font-medium mb-2 block">
              Rate the response quality:
            </label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  type="button"
                  onClick={() => setQualityRating(rating)}
                  className={cn(
                    "p-1 transition-colors",
                    rating <= qualityRating
                      ? "text-yellow-500"
                      : "text-gray-300 dark:text-gray-600"
                  )}
                >
                  <Star className="size-4 fill-current" />
                </button>
              ))}
            </div>
          </div>

          {/* Text Feedback */}
          <div>
            <label className="text-sm font-medium mb-2 block">
              How can we improve? (optional)
            </label>
            <Textarea
              placeholder="Tell us what would make this response more helpful..."
              value={textFeedback}
              onChange={(e) => setTextFeedback(e.target.value)}
              className="min-h-[60px]"
            />
          </div>

          <div className="flex gap-2">
            <Button
              size="sm"
              onClick={handleDetailedFeedback}
              disabled={
                (qualityRating === 0 && !textFeedback.trim()) || isSubmitting
              }
            >
              {isSubmitting ? "Submitting..." : "Submit Feedback"}
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setShowDetailedFeedback(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}

      {hasProvidedDetailedFeedback && (
        <p className="text-xs text-muted-foreground mt-2">
          Thank you for your detailed feedback!
        </p>
      )}
      
      {hasClickedThumbs && !hasProvidedDetailedFeedback && !showDetailedFeedback && (
        <p className="text-xs text-muted-foreground mt-2">
          Thanks! Want to add more? Click the message icon for detailed feedback.
        </p>
      )}
    </div>
  );
}

