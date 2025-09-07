"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MissionStory } from "@/components/mission-story";
import { 
  Zap, 
  Play, 
  SkipForward, 
  ChevronDown,
  RefreshCw
} from "lucide-react";

type StoryVariant = "typewriter" | "progressive" | "interactive" | "lineByLine";

interface StoryVariantSelectorProps {
  defaultVariant?: StoryVariant;
}

export function StoryVariantSelector({ defaultVariant = "typewriter" }: StoryVariantSelectorProps) {
  const [selectedVariant, setSelectedVariant] = useState<StoryVariant>(defaultVariant);
  const [key, setKey] = useState(0); // Force re-render when variant changes

  const variants = [
    {
      id: "typewriter" as const,
      name: "Typewriter Effect",
      description: "Text appears letter by letter with typing sound effect",
      icon: Zap,
      color: "text-blue-600"
    },
    {
      id: "progressive" as const,
      name: "Progressive Reveal",
      description: "Sections fade in automatically one after another",
      icon: Play,
      color: "text-green-600"
    },
    {
      id: "interactive" as const,
      name: "Interactive Navigation",
      description: "Navigate through story sections with next/previous buttons",
      icon: SkipForward,
      color: "text-purple-600"
    },
    {
      id: "lineByLine" as const,
      name: "Line by Line",
      description: "Story reveals one sentence at a time with smooth pacing",
      icon: ChevronDown,
      color: "text-orange-600"
    }
  ];

  const handleVariantChange = (variant: StoryVariant) => {
    setSelectedVariant(variant);
    setKey(prev => prev + 1); // Force component re-mount
  };

  const handleRefresh = () => {
    setKey(prev => prev + 1); // Force re-render to restart animations
  };

  const currentVariant = variants.find(v => v.id === selectedVariant);

  return (
    <div className="w-full space-y-6">
      {/* Variant Selector */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Choose Story Delivery Style</h3>
            <p className="text-sm text-muted-foreground">
              Try different ways to present the mission story content
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={handleRefresh}
              size="sm"
              variant="outline"
              className="flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Restart
            </Button>
            <Badge variant="secondary">
              {currentVariant?.name}
            </Badge>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {variants.map((variant) => {
            const Icon = variant.icon;
            const isSelected = selectedVariant === variant.id;
            
            return (
              <button
                key={variant.id}
                onClick={() => handleVariantChange(variant.id)}
                className={`p-4 rounded-lg border-2 text-left transition-all hover:shadow-md ${
                  isSelected 
                    ? "border-primary bg-primary/5 shadow-sm" 
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className="flex items-start gap-3">
                  <Icon className={`w-5 h-5 mt-0.5 ${variant.color}`} />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm mb-1">
                      {variant.name}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {variant.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </Card>

      {/* Story Component */}
      <MissionStory 
        key={key} 
        variant={selectedVariant} 
        autoStart={true} 
      />
    </div>
  );
}
