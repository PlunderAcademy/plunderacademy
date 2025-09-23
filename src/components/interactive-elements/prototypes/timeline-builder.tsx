"use client";

import { useState, useRef, DragEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, RotateCcw, Trophy, Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  correctPosition: number;
  category: 'user' | 'network' | 'contract' | 'blockchain';
  icon: string;
}

// Sample transaction lifecycle events
const TRANSACTION_LIFECYCLE_EVENTS: TimelineEvent[] = [
  {
    id: "event-1",
    title: "User Initiates Transaction",
    description: "User clicks send in their wallet application",
    correctPosition: 0,
    category: "user",
    icon: "👤"
  },
  {
    id: "event-2", 
    title: "Transaction Signed",
    description: "Wallet signs transaction with user's private key",
    correctPosition: 1,
    category: "user",
    icon: "✍️"
  },
  {
    id: "event-3",
    title: "Broadcast to Mempool",
    description: "Signed transaction is sent to network mempool",
    correctPosition: 2,
    category: "network",
    icon: "📡"
  },
  {
    id: "event-4",
    title: "Miner/Validator Selection",
    description: "Miners/validators pick up transaction from mempool",
    correctPosition: 3,
    category: "network",
    icon: "⚡"
  },
  {
    id: "event-5",
    title: "Gas Execution Begins",
    description: "EVM starts executing transaction and consuming gas",
    correctPosition: 4,
    category: "contract",
    icon: "⛽"
  },
  {
    id: "event-6",
    title: "Contract Code Execution",
    description: "Smart contract functions execute with state changes",
    correctPosition: 5,
    category: "contract",
    icon: "🔄"
  },
  {
    id: "event-7",
    title: "Block Inclusion",
    description: "Transaction is included in a new block",
    correctPosition: 6,
    category: "blockchain",
    icon: "🧱"
  },
  {
    id: "event-8",
    title: "Block Confirmation",
    description: "Block is confirmed and added to the blockchain",
    correctPosition: 7,
    category: "blockchain",
    icon: "✅"
  }
];

export function TimelineBuilder() {
  const [availableEvents, setAvailableEvents] = useState<TimelineEvent[]>(
    [...TRANSACTION_LIFECYCLE_EVENTS].sort(() => Math.random() - 0.5) // Shuffle
  );
  const [timelineEvents, setTimelineEvents] = useState<(TimelineEvent | null)[]>(
    new Array(TRANSACTION_LIFECYCLE_EVENTS.length).fill(null)
  );
  const [draggedEvent, setDraggedEvent] = useState<TimelineEvent | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showHints, setShowHints] = useState(false);

  const dragOverRef = useRef<number | null>(null);

  const handleDragStart = (e: DragEvent<HTMLDivElement>, event: TimelineEvent) => {
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
    
    if (!draggedEvent) return;

    // Remove from available events
    setAvailableEvents(prev => prev.filter(event => event.id !== draggedEvent.id));
    
    // If there's already an event in this position, move it back to available
    if (timelineEvents[index]) {
      setAvailableEvents(prev => [...prev, timelineEvents[index]!]);
    }
    
    // Place the dragged event
    const newTimelineEvents = [...timelineEvents];
    newTimelineEvents[index] = draggedEvent;
    setTimelineEvents(newTimelineEvents);
    
    setDraggedEvent(null);
    dragOverRef.current = null;

    // Check if timeline is completed correctly
    checkCompletion(newTimelineEvents);
  };

  const handleRemoveEvent = (index: number) => {
    const event = timelineEvents[index];
    if (event) {
      setAvailableEvents(prev => [...prev, event]);
      const newTimelineEvents = [...timelineEvents];
      newTimelineEvents[index] = null;
      setTimelineEvents(newTimelineEvents);
      setIsCompleted(false);
    }
  };

  const checkCompletion = (events: (TimelineEvent | null)[]) => {
    const isComplete = events.every((event, index) => 
      event !== null && event.correctPosition === index
    );
    setIsCompleted(isComplete);
  };

  const resetTimeline = () => {
    setAvailableEvents([...TRANSACTION_LIFECYCLE_EVENTS].sort(() => Math.random() - 0.5));
    setTimelineEvents(new Array(TRANSACTION_LIFECYCLE_EVENTS.length).fill(null));
    setIsCompleted(false);
    setShowHints(false);
  };

  const getCategoryColor = (category: TimelineEvent['category']) => {
    const colors = {
      user: 'bg-blue-100 border-blue-300 text-blue-800 dark:bg-blue-900/20 dark:border-blue-700 dark:text-blue-300',
      network: 'bg-purple-100 border-purple-300 text-purple-800 dark:bg-purple-900/20 dark:border-purple-700 dark:text-purple-300',
      contract: 'bg-green-100 border-green-300 text-green-800 dark:bg-green-900/20 dark:border-green-700 dark:text-green-300',
      blockchain: 'bg-orange-100 border-orange-300 text-orange-800 dark:bg-orange-900/20 dark:border-orange-700 dark:text-orange-300'
    };
    return colors[category];
  };

  return (
    <div className="space-y-6">
      {/* Instructions */}
      <div className="bg-muted/30 rounded-lg p-4">
        <h3 className="font-semibold mb-2 flex items-center gap-2">
          <Clock className="size-5" />
          📅 Transaction Lifecycle Timeline
        </h3>
        <p className="text-sm text-muted-foreground mb-2">
          Drag the events below into the correct chronological order to show how a transaction moves through the blockchain network.
        </p>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="outline" className="text-xs">
            <div className="w-2 h-2 rounded-full bg-blue-500 mr-1"></div>
            User Actions
          </Badge>
          <Badge variant="outline" className="text-xs">
            <div className="w-2 h-2 rounded-full bg-purple-500 mr-1"></div>
            Network
          </Badge>
          <Badge variant="outline" className="text-xs">
            <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
            Contract
          </Badge>
          <Badge variant="outline" className="text-xs">
            <div className="w-2 h-2 rounded-full bg-orange-500 mr-1"></div>
            Blockchain
          </Badge>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-2 items-center">
        <Button onClick={resetTimeline} variant="outline" size="sm">
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

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Available Events */}
        <div>
          <h4 className="font-medium mb-3">Available Events</h4>
          <div className="space-y-2 min-h-[400px] border-2 border-dashed border-muted-foreground/20 rounded-lg p-4">
            {availableEvents.map((event) => (
              <div
                key={event.id}
                draggable
                onDragStart={(e) => handleDragStart(e, event)}
                className={cn(
                  "p-3 rounded border-2 cursor-move transition-all hover:shadow-md",
                  getCategoryColor(event.category)
                )}
              >
                <div className="flex items-start gap-2">
                  <span className="text-lg">{event.icon}</span>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{event.title}</div>
                    <div className="text-xs opacity-80 mt-1">{event.description}</div>
                    <Badge variant="secondary" className="text-xs mt-1">
                      {event.category}
                    </Badge>
                    {showHints && (
                      <div className="text-xs opacity-70 mt-1">
                        Position: {event.correctPosition + 1}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="lg:col-span-2">
          <h4 className="font-medium mb-3">Transaction Timeline</h4>
          <div className="space-y-2">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex items-center gap-4">
                {/* Step Number */}
                <div className="flex flex-col items-center">
                  <div className={cn(
                    "w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-medium",
                    event 
                      ? "bg-primary text-primary-foreground border-primary" 
                      : "bg-muted border-muted-foreground/20"
                  )}>
                    {index + 1}
                  </div>
                  {index < timelineEvents.length - 1 && (
                    <div className="w-0.5 h-6 bg-muted-foreground/20 mt-1"></div>
                  )}
                </div>

                {/* Drop Zone */}
                <div
                  onDragOver={(e) => handleDragOver(e, index)}
                  onDrop={(e) => handleDrop(e, index)}
                  className={cn(
                    "flex-1 min-h-[80px] border-2 border-dashed rounded transition-all",
                    event 
                      ? "border-green-300 bg-green-50 dark:bg-green-900/10" 
                      : "border-muted-foreground/20 hover:border-muted-foreground/40",
                    dragOverRef.current === index && "border-blue-400 bg-blue-50 dark:bg-blue-900/10"
                  )}
                >
                  {event ? (
                    <div 
                      className={cn(
                        "p-3 rounded border-2 cursor-pointer group h-full",
                        getCategoryColor(event.category),
                        event.correctPosition === index 
                          ? "border-green-400" 
                          : "border-red-400"
                      )}
                      onClick={() => handleRemoveEvent(index)}
                    >
                      <div className="flex items-start gap-2">
                        <span className="text-lg">{event.icon}</span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div className="font-medium text-sm">{event.title}</div>
                            <div className="flex items-center gap-1">
                              {event.correctPosition === index ? (
                                <CheckCircle className="size-4 text-green-600" />
                              ) : (
                                <XCircle className="size-4 text-red-600" />
                              )}
                            </div>
                          </div>
                          <div className="text-xs opacity-80 mt-1">{event.description}</div>
                          <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                            Click to remove
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-muted-foreground text-sm p-4">
                      <div>Drop event here</div>
                      <div className="text-xs opacity-70">Step {index + 1}</div>
                    </div>
                  )}
                </div>
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
                  Timeline Completed! 🎉
                </h4>
                <p className="text-sm text-green-700 dark:text-green-300">
                  You&apos;ve successfully arranged the transaction lifecycle in the correct chronological order. 
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
