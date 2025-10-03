"use client";

import { useState, useRef, DragEvent } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TimelineEvent {
  id: string;
  text: string;
  correctPosition?: number;  // Optional for assessment mode
}

export interface TimelineBuilderData {
  events: TimelineEvent[];
}

interface TimelineBuilderCompactProps {
  data: TimelineBuilderData;
  mode?: 'learning' | 'assessment';
  onComplete?: (answer: { sequence: string[] }) => void;
  showFeedback?: boolean;
}

export function TimelineBuilderCompact({
  data,
  mode = 'learning',
  onComplete,
  showFeedback = true
}: TimelineBuilderCompactProps) {
  const [availableEvents, setAvailableEvents] = useState<TimelineEvent[]>(() =>
    [...data.events].sort(() => Math.random() - 0.5)
  );
  const [placedEvents, setPlacedEvents] = useState<(TimelineEvent | null)[]>(() =>
    new Array(data.events.length).fill(null)
  );
  const [draggedEvent, setDraggedEvent] = useState<TimelineEvent | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dragOverRef = useRef<number | null>(null);

  const handleDragStart = (e: DragEvent<HTMLDivElement>, event: TimelineEvent) => {
    if (isSubmitted) return;
    setDraggedEvent(event);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    dragOverRef.current = index;
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    if (!draggedEvent || isSubmitted) return;

    setAvailableEvents(prev => prev.filter(ev => ev.id !== draggedEvent.id));
    
    if (placedEvents[index]) {
      setAvailableEvents(prev => [...prev, placedEvents[index]!]);
    }
    
    const newPlacedEvents = [...placedEvents];
    newPlacedEvents[index] = draggedEvent;
    setPlacedEvents(newPlacedEvents);
    
    setDraggedEvent(null);
    dragOverRef.current = null;
  };

  const handleRemoveEvent = (index: number) => {
    if (isSubmitted) return;
    const event = placedEvents[index];
    if (event) {
      setAvailableEvents(prev => [...prev, event]);
      const newPlacedEvents = [...placedEvents];
      newPlacedEvents[index] = null;
      setPlacedEvents(newPlacedEvents);
    }
  };

  const handleSubmit = () => {
    if (placedEvents.some(e => e === null)) return;
    
    setIsSubmitted(true);

    if (onComplete) {
      const sequence = placedEvents.map(e => e!.id);
      onComplete({ sequence });
    }
  };

  const getEventStatus = (event: TimelineEvent, index: number) => {
    if (!showFeedback || mode === 'assessment' || !isSubmitted || event.correctPosition === undefined) return null;
    return event.correctPosition === index ? 'correct' : 'incorrect';
  };

  const allPlaced = placedEvents.every(e => e !== null);

  return (
    <div className="space-y-4" data-interactive="true">
      <div className="grid md:grid-cols-2 gap-4">
        {/* Available Events */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-2">Events to order:</p>
          <div className="space-y-2 min-h-[200px] p-3 border-2 border-dashed border-muted-foreground/20 rounded-lg">
            {availableEvents.map((event) => (
              <div
                key={event.id}
                draggable={!isSubmitted}
                onDragStart={(e) => handleDragStart(e, event)}
                className={cn(
                  "p-2 rounded border-2 border-border cursor-move transition-all text-sm",
                  !isSubmitted && "hover:shadow-md hover:border-primary/50 hover:scale-[1.02]"
                )}
              >
                {event.text}
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Slots */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-2">Correct order (drag here):</p>
          <div className="space-y-1">
            {placedEvents.map((event, index) => {
              const status = event ? getEventStatus(event, index) : null;
              
              return (
                <div key={index}>
                  <div
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDrop={(e) => handleDrop(e, index)}
                    className={cn(
                      "min-h-[50px] border-2 rounded transition-all",
                      event 
                        ? status === 'correct'
                          ? "border-green-400 bg-green-50 dark:bg-green-900/20"
                          : status === 'incorrect'
                          ? "border-red-400 bg-red-50 dark:bg-red-900/20"
                          : "border-border bg-background"
                        : "border-dashed border-muted-foreground/30",
                      dragOverRef.current === index && "border-blue-400 bg-blue-50 dark:bg-blue-900/10"
                    )}
                  >
                    {event ? (
                      <div 
                        className="p-2 cursor-pointer text-sm flex items-start justify-between gap-2"
                        onClick={() => handleRemoveEvent(index)}
                      >
                        <span className="flex-1">{event.text}</span>
                        <div className="flex items-center gap-1 flex-shrink-0">
                          {showFeedback && mode === 'learning' && status === 'correct' && (
                            <CheckCircle className="size-3 text-green-600" />
                          )}
                          {showFeedback && mode === 'learning' && status === 'incorrect' && (
                            <XCircle className="size-3 text-red-600" />
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="h-full flex items-center justify-center text-xs text-muted-foreground p-2">
                        Step {index + 1}
                      </div>
                    )}
                  </div>
                  {index < placedEvents.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowDown className="size-3 text-muted-foreground" />
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
          {mode === 'assessment' ? 'Submit Order' : 'Check Order'}
        </Button>
      )}

      {/* Status */}
      <div className="text-center text-sm text-muted-foreground">
        {placedEvents.filter(e => e !== null).length}/{data.events.length} placed
        {isSubmitted && mode === 'assessment' && (
          <span className="block text-blue-600 dark:text-blue-400 mt-1">
            Timeline submitted!
          </span>
        )}
      </div>
    </div>
  );
}

