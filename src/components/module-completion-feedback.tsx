"use client";

import * as React from "react";
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useSession } from "@/lib/session-context";
import { submitModuleFeedback } from "@/lib/feedback-api";
import { cn } from "@/lib/utils";

interface ModuleCompletionFeedbackProps {
  moduleSlug: string;
  achievementCodes: string[];
  onComplete?: () => void;
}

/**
 * Feedback form displayed after completing a module/earning an achievement.
 * Collects ratings and text feedback about the learning experience.
 */
export function ModuleCompletionFeedback({
  moduleSlug,
  achievementCodes,
  onComplete,
}: ModuleCompletionFeedbackProps) {
  const { address } = useSession();
  const [ratings, setRatings] = React.useState({
    contentDifficulty: 0,
    contentClarity: 0,
    practicalValue: 0,
    paceAppropriateness: 0,
  });
  const [feedback, setFeedback] = React.useState({
    whatWorkedWell: "",
    suggestionsForImprovement: "",
    additionalTopicsWanted: "",
  });
  const [timeSpent, setTimeSpent] = React.useState<number>();
  const [externalResources, setExternalResources] = React.useState<
    boolean | undefined
  >();
  const [aiToolsHelpful, setAiToolsHelpful] = React.useState<
    boolean | undefined
  >();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleRatingChange = (
    category: keyof typeof ratings,
    rating: number
  ) => {
    setRatings((prev) => ({ ...prev, [category]: rating }));
  };

  const handleSubmit = async () => {
    if (!address) return;

    setIsSubmitting(true);
    try {
      await submitModuleFeedback({
        walletAddress: address,
        moduleSlug,
        achievementCodes,
        ...ratings,
        ...feedback,
        timeSpentMinutes: timeSpent,
        externalResourcesUsed: externalResources,
        aiToolsHelpful,
      });

      onComplete?.();
    } catch (error) {
      console.error("Failed to submit feedback:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const RatingInput = ({
    label,
    category,
  }: {
    label: string;
    category: keyof typeof ratings;
  }) => (
    <div className="space-y-2">
      <label className="text-sm font-medium">{label}</label>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            type="button"
            onClick={() => handleRatingChange(category, rating)}
            className={cn(
              "p-1 transition-colors",
              rating <= ratings[category]
                ? "text-yellow-500"
                : "text-gray-300 dark:text-gray-600"
            )}
          >
            <Star className="size-4 fill-current" />
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Module Feedback</CardTitle>
        <p className="text-sm text-muted-foreground">
          Help us improve the learning experience for future students
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Rating Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RatingInput label="Content Difficulty" category="contentDifficulty" />
          <RatingInput label="Content Clarity" category="contentClarity" />
          <RatingInput label="Practical Value" category="practicalValue" />
          <RatingInput
            label="Learning Pace"
            category="paceAppropriateness"
          />
        </div>

        {/* Text Feedback */}
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">
              What worked well in this module?
            </label>
            <Textarea
              value={feedback.whatWorkedWell}
              onChange={(e) =>
                setFeedback((prev) => ({
                  ...prev,
                  whatWorkedWell: e.target.value,
                }))
              }
              placeholder="Share what you found most valuable..."
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">
              Suggestions for improvement
            </label>
            <Textarea
              value={feedback.suggestionsForImprovement}
              onChange={(e) =>
                setFeedback((prev) => ({
                  ...prev,
                  suggestionsForImprovement: e.target.value,
                }))
              }
              placeholder="How can we make this module better?"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">
              Additional topics you&apos;d like to see
            </label>
            <Textarea
              value={feedback.additionalTopicsWanted}
              onChange={(e) =>
                setFeedback((prev) => ({
                  ...prev,
                  additionalTopicsWanted: e.target.value,
                }))
              }
              placeholder="What else would you like to learn about?"
            />
          </div>
        </div>

        {/* Additional Questions */}
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">
              Approximately how long did this module take? (minutes)
            </label>
            <input
              type="number"
              value={timeSpent || ""}
              onChange={(e) => setTimeSpent(Number(e.target.value))}
              className="w-full p-2 border rounded-md bg-background"
              placeholder="e.g., 90"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Did you use external resources to complete this module?
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  checked={externalResources === true}
                  onChange={() => setExternalResources(true)}
                  className="cursor-pointer"
                />
                Yes
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  checked={externalResources === false}
                  onChange={() => setExternalResources(false)}
                  className="cursor-pointer"
                />
                No
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Were the AI tools (chat assistant, code reviewer) helpful?
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  checked={aiToolsHelpful === true}
                  onChange={() => setAiToolsHelpful(true)}
                  className="cursor-pointer"
                />
                Yes
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  checked={aiToolsHelpful === false}
                  onChange={() => setAiToolsHelpful(false)}
                  className="cursor-pointer"
                />
                No
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  checked={aiToolsHelpful === undefined}
                  onChange={() => setAiToolsHelpful(undefined)}
                  className="cursor-pointer"
                />
                Didn&apos;t use them
              </label>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="flex-1"
          >
            {isSubmitting ? "Submitting..." : "Submit Feedback"}
          </Button>
          <Button variant="outline" onClick={onComplete} className="flex-1">
            Skip Feedback
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

