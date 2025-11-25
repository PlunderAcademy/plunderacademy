"use client";

import { useState, useRef, DragEvent, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, ArrowDown, Hand } from "lucide-react";
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
  const [selectedEvent, setSelectedEvent] = useState<{ event: TimelineEvent; source: 'available' | 'placed'; index?: number } | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const dragOverRef = useRef<number | null>(null);

  // Detect touch device
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

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

  // Touch/Click handlers for mobile-friendly interaction
  const handleAvailableEventClick = (event: TimelineEvent) => {
    if (isSubmitted) return;
    
    // Toggle selection
    if (selectedEvent?.event.id === event.id && selectedEvent.source === 'available') {
      setSelectedEvent(null);
    } else {
      setSelectedEvent({ event, source: 'available' });
    }
  };

  const handlePlacedEventClick = (event: TimelineEvent, index: number) => {
    if (isSubmitted) return;
    
    // Toggle selection
    if (selectedEvent?.event.id === event.id && selectedEvent.source === 'placed') {
      setSelectedEvent(null);
    } else {
      setSelectedEvent({ event, source: 'placed', index });
    }
  };

  const handleTimelineSlotClick = (index: number) => {
    if (isSubmitted || !selectedEvent) return;

    if (selectedEvent.source === 'available') {
      // Moving from available to timeline
      setAvailableEvents(prev => prev.filter(ev => ev.id !== selectedEvent.event.id));
      
      if (placedEvents[index]) {
        setAvailableEvents(prev => [...prev, placedEvents[index]!]);
      }
      
      const newPlacedEvents = [...placedEvents];
      newPlacedEvents[index] = selectedEvent.event;
      setPlacedEvents(newPlacedEvents);
    } else if (selectedEvent.source === 'placed' && selectedEvent.index !== undefined) {
      // Swapping placed events or moving to different position
      const newPlacedEvents = [...placedEvents];
      const temp = newPlacedEvents[index];
      newPlacedEvents[index] = selectedEvent.event;
      newPlacedEvents[selectedEvent.index] = temp;
      setPlacedEvents(newPlacedEvents);
    }
    
    setSelectedEvent(null);
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
      {/* Instructions for touch devices */}
      {isTouchDevice && !isSubmitted && (
        <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/30 p-2 rounded border border-border">
          <Hand className="size-4 flex-shrink-0" />
          <span>Tap an event to select it, then tap a timeline slot to place it</span>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        {/* Available Events */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-2">
            Events to order {isTouchDevice ? '(tap to select)' : ''}:
          </p>
          <div className="space-y-2 min-h-[200px] p-3 border-2 border-dashed border-muted-foreground/20 rounded-lg">
            {availableEvents.map((event) => {
              const isSelected = selectedEvent?.event.id === event.id && selectedEvent.source === 'available';
              
              return (
                <div
                  key={event.id}
                  draggable={!isSubmitted && !isTouchDevice}
                  onDragStart={(e) => !isTouchDevice && handleDragStart(e, event)}
                  onClick={() => handleAvailableEventClick(event)}
                  className={cn(
                    "p-2 rounded border-2 transition-all text-sm",
                    isSelected
                      ? "border-primary bg-primary/10 ring-2 ring-primary/50"
                      : "border-border",
                    !isSubmitted && !isTouchDevice && "cursor-move hover:shadow-md hover:border-primary/50 hover:scale-[1.02]",
                    !isSubmitted && isTouchDevice && "cursor-pointer hover:border-primary/50"
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span>{event.text}</span>
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

        {/* Timeline Slots */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-2">
            Correct order {isTouchDevice ? '(tap to place)' : '(drag here)'}:
          </p>
          <div className="space-y-1">
            {placedEvents.map((event, index) => {
              const status = event ? getEventStatus(event, index) : null;
              const isEventSelected = selectedEvent?.event.id === event?.id && selectedEvent?.source === 'placed';
              const canAcceptClick = isTouchDevice && selectedEvent && !isSubmitted;
              
              return (
                <div key={index}>
                  <div
                    onDragOver={(e) => !isTouchDevice && handleDragOver(e, index)}
                    onDrop={(e) => !isTouchDevice && handleDrop(e, index)}
                    onClick={() => {
                      if (isTouchDevice && !isSubmitted) {
                        if (event && !selectedEvent) {
                          handlePlacedEventClick(event, index);
                        } else if (selectedEvent) {
                          handleTimelineSlotClick(index);
                        }
                      } else if (!isTouchDevice && event) {
                        handleRemoveEvent(index);
                      }
                    }}
                    className={cn(
                      "min-h-[50px] border-2 rounded transition-all",
                      event 
                        ? status === 'correct'
                          ? "border-green-400 bg-green-50 dark:bg-green-900/20"
                          : status === 'incorrect'
                          ? "border-red-400 bg-red-50 dark:bg-red-900/20"
                          : isEventSelected
                            ? "border-primary bg-primary/10 ring-2 ring-primary/50"
                            : "border-border bg-background"
                        : canAcceptClick
                          ? "border-primary/50 border-dashed bg-primary/5 cursor-pointer hover:border-primary hover:bg-primary/10"
                          : "border-dashed border-muted-foreground/30",
                      !isTouchDevice && dragOverRef.current === index && "border-blue-400 bg-blue-50 dark:bg-blue-900/10",
                      event && "cursor-pointer",
                      isTouchDevice && !event && canAcceptClick && "cursor-pointer"
                    )}
                  >
                    {event ? (
                      <div 
                        className="p-2 text-sm flex items-start justify-between gap-2"
                      >
                        <span className="flex-1">{event.text}</span>
                        <div className="flex items-center gap-1 flex-shrink-0">
                          {isEventSelected && (
                            <Badge variant="outline" className="text-[10px] px-1 py-0 h-4">
                              Selected
                            </Badge>
                          )}
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
                        {canAcceptClick ? `Tap to place at step ${index + 1}` : `Step ${index + 1}`}
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

