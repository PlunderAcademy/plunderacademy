"use client";

import * as React from "react";
import { MessageSquarePlus, Star, Bug, Lightbulb, Palette, BookOpen, HelpCircle, CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSession } from "@/lib/session-context";
import {
  submitGeneralFeedback,
  type GeneralFeedbackCategory,
} from "@/lib/feedback-api";
import { cn } from "@/lib/utils";

const CATEGORY_OPTIONS: {
  value: GeneralFeedbackCategory;
  label: string;
  icon: React.ReactNode;
  description: string;
}[] = [
  {
    value: "bug",
    label: "Bug Report",
    icon: <Bug className="size-4" />,
    description: "Something isn't working correctly",
  },
  {
    value: "feature-request",
    label: "Feature Request",
    icon: <Lightbulb className="size-4" />,
    description: "Suggest a new feature or improvement",
  },
  {
    value: "ui",
    label: "UI/Design",
    icon: <Palette className="size-4" />,
    description: "Feedback about the visual design or layout",
  },
  {
    value: "content",
    label: "Content",
    icon: <BookOpen className="size-4" />,
    description: "Feedback about lessons, articles, or documentation",
  },
  {
    value: "other",
    label: "Other",
    icon: <HelpCircle className="size-4" />,
    description: "General feedback or questions",
  },
];

interface GeneralFeedbackProps {
  /**
   * Whether to show the floating button (default: true)
   * Set to false if you want to control the modal externally
   */
  showFloatingButton?: boolean;
  /**
   * External control for modal open state
   */
  isOpen?: boolean;
  /**
   * Callback when modal state changes
   */
  onOpenChange?: (open: boolean) => void;
}

export function GeneralFeedback({
  showFloatingButton = true,
  isOpen: externalIsOpen,
  onOpenChange,
}: GeneralFeedbackProps) {
  const { address } = useSession();
  const [internalIsOpen, setInternalIsOpen] = React.useState(false);
  const [category, setCategory] = React.useState<GeneralFeedbackCategory | "">("");
  const [title, setTitle] = React.useState("");
  const [feedback, setFeedback] = React.useState("");
  const [rating, setRating] = React.useState<number>(0);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  // Use external state if provided, otherwise use internal state
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const setIsOpen = onOpenChange || setInternalIsOpen;

  const resetForm = () => {
    setCategory("");
    setTitle("");
    setFeedback("");
    setRating(0);
    setIsSubmitted(false);
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      // Reset form when closing
      setTimeout(resetForm, 300); // Wait for animation
    }
  };

  const handleSubmit = async () => {
    if (!address || !category || !feedback.trim()) return;

    setIsSubmitting(true);
    try {
      // Collect browser metadata
      const metadata: Record<string, string> = {};
      if (typeof window !== "undefined") {
        metadata.browser = navigator.userAgent;
        metadata.screenSize = `${window.innerWidth}x${window.innerHeight}`;
        metadata.language = navigator.language;
      }

      await submitGeneralFeedback({
        walletAddress: address,
        category,
        feedback: feedback.trim(),
        title: title.trim() || undefined,
        rating: rating > 0 ? rating : undefined,
        pageUrl: typeof window !== "undefined" ? window.location.pathname : undefined,
        metadata,
      });

      setIsSubmitted(true);
      
      // Auto-close after showing success
      setTimeout(() => {
        handleOpenChange(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to submit feedback:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = category && feedback.trim().length > 0;

  // Success state view
  if (isSubmitted) {
    return (
      <>
        {showFloatingButton && (
          <FloatingFeedbackButton onClick={() => handleOpenChange(true)} />
        )}
        <Dialog open={isOpen} onOpenChange={handleOpenChange}>
          <DialogContent className="sm:max-w-md">
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="mb-4 rounded-full bg-green-100 p-3 dark:bg-green-900/30">
                <CheckCircle2 className="size-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold">Thank You!</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Your feedback has been submitted successfully. We appreciate you helping us improve Plunder Academy!
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </>
    );
  }

  return (
    <>
      {showFloatingButton && (
        <FloatingFeedbackButton onClick={() => handleOpenChange(true)} />
      )}

      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <MessageSquarePlus className="size-5" />
              Send Feedback
            </DialogTitle>
            <DialogDescription>
              Help us improve Plunder Academy. Your feedback is valuable!
            </DialogDescription>
          </DialogHeader>

          {!address ? (
            <div className="py-6 text-center text-muted-foreground">
              <p>Please connect your wallet to submit feedback.</p>
            </div>
          ) : (
            <div className="space-y-4 py-2">
              {/* Category Selection */}
              <div className="space-y-2">
                <Label htmlFor="category">
                  Category <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={category}
                  onValueChange={(value) => setCategory(value as GeneralFeedbackCategory)}
                >
                  <SelectTrigger id="category" className="w-full">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORY_OPTIONS.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        <span className="flex items-center gap-2">
                          {option.icon}
                          <span>{option.label}</span>
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {category && (
                  <p className="text-xs text-muted-foreground">
                    {CATEGORY_OPTIONS.find((c) => c.value === category)?.description}
                  </p>
                )}
              </div>

              {/* Title (optional) */}
              <div className="space-y-2">
                <Label htmlFor="title">
                  Title <span className="text-xs text-muted-foreground">(optional)</span>
                </Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value.slice(0, 200))}
                  placeholder="Brief summary of your feedback"
                  maxLength={200}
                />
                <p className="text-xs text-muted-foreground text-right">
                  {title.length}/200
                </p>
              </div>

              {/* Main Feedback */}
              <div className="space-y-2">
                <Label htmlFor="feedback">
                  Feedback <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value.slice(0, 5000))}
                  placeholder={
                    category === "bug"
                      ? "Please describe the issue, what you expected to happen, and steps to reproduce..."
                      : category === "feature-request"
                      ? "Describe the feature you'd like to see and how it would help you..."
                      : "Share your thoughts..."
                  }
                  className="min-h-[120px] resize-none"
                  maxLength={5000}
                />
                <p className="text-xs text-muted-foreground text-right">
                  {feedback.length}/5000
                </p>
              </div>

              {/* Overall Satisfaction Rating */}
              <div className="space-y-2">
                <Label>
                  Overall Satisfaction{" "}
                  <span className="text-xs text-muted-foreground">(optional)</span>
                </Label>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className={cn(
                          "p-1 transition-colors hover:scale-110",
                          star <= rating
                            ? "text-yellow-500"
                            : "text-gray-300 dark:text-gray-600 hover:text-yellow-400"
                        )}
                        aria-label={`Rate ${star} out of 5`}
                      >
                        <Star className="size-5 fill-current" />
                      </button>
                    ))}
                  </div>
                  {rating > 0 && (
                    <button
                      type="button"
                      onClick={() => setRating(0)}
                      className="ml-2 text-xs text-muted-foreground hover:text-foreground"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              type="button"
              variant="outline"
              onClick={() => handleOpenChange(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={handleSubmit}
              disabled={!address || !isFormValid || isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Feedback"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

/**
 * Floating feedback button component (bottom-right corner)
 */
function FloatingFeedbackButton({ onClick }: { onClick: () => void }) {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full",
        "bg-primary text-primary-foreground shadow-lg",
        "transition-all duration-300 ease-out",
        "hover:shadow-xl hover:scale-105",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        isHovered ? "px-4 py-3" : "p-3"
      )}
      aria-label="Send feedback"
    >
      <MessageSquarePlus className="size-5" />
      <span
        className={cn(
          "text-sm font-medium whitespace-nowrap overflow-hidden transition-all duration-300",
          isHovered ? "max-w-[100px] opacity-100" : "max-w-0 opacity-0"
        )}
      >
        Feedback
      </span>
    </button>
  );
}

/**
 * Export just the button for use in other places (e.g., footer link)
 */
export function FeedbackTrigger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={cn("cursor-pointer", className)}
      >
        {children}
      </button>
      <GeneralFeedback
        showFloatingButton={false}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
      />
    </>
  );
}

