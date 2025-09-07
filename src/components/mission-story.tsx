"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ChevronDown, 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack,
  Book,
  Target,
  Scroll,
  Zap
} from "lucide-react";

type StoryVariant = "typewriter" | "progressive" | "interactive" | "lineByLine";

interface MissionStoryProps {
  variant?: StoryVariant;
  autoStart?: boolean;
}

const MISSION_DATA = {
  title: "Mission 1: The Marooned Ship",
  subtitle: '"The Last Bottle of Rum"',
  storyIntro: "Shipwrecked and stranded, your vessel lies broken amidst the waves. Hope shimmers in one last legendary bottle of rum aboard, locked away by secrets waiting to be cracked. There's a long road ahead if you ever hope to escape this island, but no pirate can face temples, volcanoes, or mysteries without first reclaiming the last bottle of rum.",
  monologue: [
    "You stir from your restless sleep, the salty breeze carrying the distant cries of gulls and the gentle crash of waves against the shattered hull. The sun's warmth kisses your skin, and as your eyes adjust, you see the remnants of your ship — battered but still holding secrets.",
    "Amidst the scattered crates and broken planks lies a prize: the last bottle of legendary rum, your crew's beacon of hope.",
    "But beware, sailor. This treasure isn't unguarded. It's locked behind codes crafted by clever hands. To claim it, you must learn the language of the blockchain — variables, data types, and functions. These are your tools, your compass through the storm.",
    "Find the bottle. Master the code. Rekindle your crew's spirit. Your journey off this island starts now.",
    "Good luck, Sailor. God knows you won't last five seconds out there without your trusty bottle of sugar cane rum."
  ],
  objective: "Master Solidity's fundamentals—variables, data types, and functions—to unlock the bottle and begin your adventure. In this mission, you will learn how to declare and use variables, understand different data types, and write simple functions to control the flow of your smart contracts."
};

export function MissionStory({ variant = "typewriter", autoStart = true }: MissionStoryProps) {
  return (
    <div className="w-full space-y-6">
      {/* Variant Selector */}
      <VariantSelector currentVariant={variant} />
      
      {/* Story Content based on variant */}
      {variant === "typewriter" && <TypewriterStory autoStart={autoStart} />}
      {variant === "progressive" && <ProgressiveStory autoStart={autoStart} />}
      {variant === "interactive" && <InteractiveStory />}
      {variant === "lineByLine" && <LineByLineStory autoStart={autoStart} />}
    </div>
  );
}

function VariantSelector({ currentVariant }: { currentVariant: StoryVariant }) {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between gap-4 mb-3">
        <h3 className="font-semibold">Story Delivery Style</h3>
        <Badge variant="secondary">{currentVariant}</Badge>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
        <div className="flex items-center gap-2">
          <Zap className="w-3 h-3" />
          <span>Typewriter</span>
        </div>
        <div className="flex items-center gap-2">
          <Play className="w-3 h-3" />
          <span>Progressive</span>
        </div>
        <div className="flex items-center gap-2">
          <SkipForward className="w-3 h-3" />
          <span>Interactive</span>
        </div>
        <div className="flex items-center gap-2">
          <ChevronDown className="w-3 h-3" />
          <span>Line by Line</span>
        </div>
      </div>
    </Card>
  );
}

function TypewriterStory({ autoStart }: { autoStart: boolean }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(autoStart);
  const [isPaused, setIsPaused] = useState(!autoStart);

  const sections = [
    { type: "title", text: `${MISSION_DATA.title} — ${MISSION_DATA.subtitle}` },
    { type: "intro", text: MISSION_DATA.storyIntro },
    ...MISSION_DATA.monologue.map(text => ({ type: "monologue", text })),
    { type: "objective", text: MISSION_DATA.objective }
  ];

  const fullText = sections.map(s => s.text).join("\n\n");

  useEffect(() => {
    if (!isTyping || isPaused) return;

    const interval = setInterval(() => {
      setDisplayedText(prev => {
        if (prev.length < fullText.length) {
          return fullText.slice(0, prev.length + 1);
        } else {
          setIsTyping(false);
          return prev;
        }
      });
    }, 30); // Adjust speed here

    return () => clearInterval(interval);
  }, [isTyping, isPaused, fullText]);

  const handleToggle = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setDisplayedText("");
    setIsTyping(true);
    setIsPaused(false);
  };

  const handleSkip = () => {
    setDisplayedText(fullText);
    setIsTyping(false);
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Book className="w-5 h-5" />
          <h3 className="font-semibold">Typewriter Story</h3>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={handleToggle}
            size="sm"
            variant="outline"
            className="flex items-center gap-2"
          >
            {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            {isPaused ? "Resume" : "Pause"}
          </Button>
          <Button
            onClick={handleReset}
            size="sm"
            variant="outline"
            className="flex items-center gap-2"
          >
            <SkipBack className="w-4 h-4" />
            Reset
          </Button>
          <Button
            onClick={handleSkip}
            size="sm"
            variant="outline"
            className="flex items-center gap-2"
          >
            <SkipForward className="w-4 h-4" />
            Skip
          </Button>
        </div>
      </div>
      
      <div className="prose prose-sm max-w-none dark:prose-invert">
        <div className="whitespace-pre-wrap font-mono text-sm leading-relaxed">
          {displayedText}
          {isTyping && !isPaused && <span className="animate-pulse">|</span>}
        </div>
      </div>
    </Card>
  );
}

function ProgressiveStory({ autoStart }: { autoStart: boolean }) {
  const [visibleSections, setVisibleSections] = useState(autoStart ? 1 : 0);
  const [isPlaying, setIsPlaying] = useState(autoStart);

  const sections = [
    { type: "title", title: "Mission Title", content: `${MISSION_DATA.title} — ${MISSION_DATA.subtitle}`, icon: Scroll },
    { type: "intro", title: "Story Introduction", content: MISSION_DATA.storyIntro, icon: Book },
    { type: "monologue", title: "In-Game Monologue", content: MISSION_DATA.monologue.join("\n\n"), icon: Zap },
    { type: "objective", title: "Mission Objective", content: MISSION_DATA.objective, icon: Target }
  ];

  useEffect(() => {
    if (!isPlaying || visibleSections >= sections.length) return;

    const timer = setTimeout(() => {
      setVisibleSections(prev => prev + 1);
    }, 2000); // 2 second delay between sections

    return () => clearTimeout(timer);
  }, [visibleSections, isPlaying, sections.length]);

  const handleToggle = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setVisibleSections(0);
    setIsPlaying(true);
  };

  const handleShowAll = () => {
    setVisibleSections(sections.length);
    setIsPlaying(false);
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Play className="w-5 h-5" />
          <h3 className="font-semibold">Progressive Reveal</h3>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={handleToggle}
            size="sm"
            variant="outline"
            className="flex items-center gap-2"
          >
            {!isPlaying ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            {!isPlaying ? "Continue" : "Pause"}
          </Button>
          <Button
            onClick={handleReset}
            size="sm"
            variant="outline"
            className="flex items-center gap-2"
          >
            <SkipBack className="w-4 h-4" />
            Reset
          </Button>
          <Button
            onClick={handleShowAll}
            size="sm"
            variant="outline"
            className="flex items-center gap-2"
          >
            <SkipForward className="w-4 h-4" />
            Show All
          </Button>
        </div>
      </div>
      
      <div className="space-y-6">
        {sections.map((section, index) => {
          const Icon = section.icon;
          const isVisible = index < visibleSections;
          
          return (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isVisible 
                  ? "opacity-100 transform translate-y-0" 
                  : "opacity-0 transform translate-y-4"
              }`}
            >
              <div className="flex items-start gap-3">
                <Icon className="w-5 h-5 mt-1 text-primary" />
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">{section.title}</h4>
                  <div className="prose prose-sm dark:prose-invert">
                    <p className="whitespace-pre-wrap">{section.content}</p>
                  </div>
                </div>
              </div>
              {index < sections.length - 1 && isVisible && (
                <Separator className="my-6" />
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
}

function InteractiveStory() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { type: "title", title: "Mission Title", content: `${MISSION_DATA.title} — ${MISSION_DATA.subtitle}`, icon: Scroll },
    { type: "intro", title: "Story Introduction", content: MISSION_DATA.storyIntro, icon: Book },
    { type: "monologue", title: "In-Game Monologue", content: MISSION_DATA.monologue.join("\n\n"), icon: Zap },
    { type: "objective", title: "Mission Objective", content: MISSION_DATA.objective, icon: Target }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentStepData = steps[currentStep];
  const Icon = currentStepData.icon;

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <SkipForward className="w-5 h-5" />
          <h3 className="font-semibold">Interactive Story</h3>
          <Badge variant="outline">{currentStep + 1} of {steps.length}</Badge>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            size="sm"
            variant="outline"
            className="flex items-center gap-2"
          >
            <SkipBack className="w-4 h-4" />
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
            size="sm"
            className="flex items-center gap-2"
          >
            Next
            <SkipForward className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="min-h-[300px]">
        <div className="flex items-start gap-3">
          <Icon className="w-6 h-6 mt-1 text-primary" />
          <div className="flex-1">
            <h4 className="text-lg font-semibold mb-4">{currentStepData.title}</h4>
            <div className="prose dark:prose-invert">
              <p className="whitespace-pre-wrap text-base leading-relaxed">
                {currentStepData.content}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="flex justify-center mt-6">
        <div className="flex space-x-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentStep 
                  ? "bg-primary" 
                  : index < currentStep 
                    ? "bg-primary/60" 
                    : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}

function LineByLineStory({ autoStart }: { autoStart: boolean }) {
  const [visibleLines, setVisibleLines] = useState(autoStart ? 1 : 0);
  const [isPlaying, setIsPlaying] = useState(autoStart);

  // Break down all content into individual sentences/lines
  const allLines = [
    // Title
    `${MISSION_DATA.title} — ${MISSION_DATA.subtitle}`,
    "",
    // Story intro - split by sentences
    ...MISSION_DATA.storyIntro.split('. ').filter(line => line.trim()),
    "",
    // Monologue - split by sentences
    ...MISSION_DATA.monologue.flatMap(paragraph => 
      paragraph.split('. ').filter(line => line.trim())
    ),
    "",
    // Objective - split by sentences
    ...MISSION_DATA.objective.split('. ').filter(line => line.trim())
  ].map(line => line.trim() ? (line.endsWith('.') ? line : line + '.') : line);

  useEffect(() => {
    if (!isPlaying || visibleLines >= allLines.length) return;

    const timer = setTimeout(() => {
      setVisibleLines(prev => prev + 1);
    }, 1500); // 1.5 second delay between lines

    return () => clearTimeout(timer);
  }, [visibleLines, isPlaying, allLines.length]);

  const handleToggle = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setVisibleLines(0);
    setIsPlaying(true);
  };

  const handleShowAll = () => {
    setVisibleLines(allLines.length);
    setIsPlaying(false);
  };

  const handleNext = () => {
    if (visibleLines < allLines.length) {
      setVisibleLines(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (visibleLines > 0) {
      setVisibleLines(prev => prev - 1);
    }
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <ChevronDown className="w-5 h-5" />
          <h3 className="font-semibold">Line by Line Reveal</h3>
          <Badge variant="outline">{visibleLines} of {allLines.length} lines</Badge>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={handlePrevious}
            disabled={visibleLines === 0}
            size="sm"
            variant="outline"
            className="flex items-center gap-2"
          >
            <SkipBack className="w-4 h-4" />
            Back
          </Button>
          <Button
            onClick={handleToggle}
            size="sm"
            variant="outline"
            className="flex items-center gap-2"
          >
            {!isPlaying ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            {!isPlaying ? "Auto" : "Pause"}
          </Button>
          <Button
            onClick={handleNext}
            disabled={visibleLines >= allLines.length}
            size="sm"
            variant="outline"
            className="flex items-center gap-2"
          >
            <SkipForward className="w-4 h-4" />
            Next
          </Button>
          <Button
            onClick={handleReset}
            size="sm"
            variant="outline"
            className="flex items-center gap-2"
          >
            <SkipBack className="w-4 h-4" />
            Reset
          </Button>
          <Button
            onClick={handleShowAll}
            size="sm"
            variant="outline"
            className="flex items-center gap-2"
          >
            <SkipForward className="w-4 h-4" />
            All
          </Button>
        </div>
      </div>
      
      <div className="min-h-[400px] space-y-3">
        {allLines.slice(0, visibleLines).map((line, index) => {
          const isEmptyLine = line === "";
          const isAnimating = index === visibleLines - 1 && isPlaying;
          
          return (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isEmptyLine ? "h-4" : ""
              } ${
                isAnimating 
                  ? "opacity-100 transform translate-x-0 bg-primary/5 rounded px-2 py-1" 
                  : "opacity-90 transform translate-x-0"
              }`}
            >
              {!isEmptyLine && (
                <p className="text-sm leading-relaxed">
                  {line}
                  {isAnimating && <span className="animate-pulse ml-1">▋</span>}
                </p>
              )}
            </div>
          );
        })}
        
        {/* Progress indicator */}
        <div className="mt-6 pt-4 border-t">
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-primary rounded-full h-2 transition-all duration-300"
              style={{ width: `${(visibleLines / allLines.length) * 100}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            {visibleLines === allLines.length 
              ? "Story complete!" 
              : `${Math.round((visibleLines / allLines.length) * 100)}% revealed`
            }
          </p>
        </div>
      </div>
    </Card>
  );
}
