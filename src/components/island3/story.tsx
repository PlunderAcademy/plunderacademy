"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { MissionMeta } from "@/lib/mdx";

interface Island3StoryProps {
  missionData: MissionMeta;
  autoStart?: boolean;
}

export function Island3Story({ missionData, autoStart = true }: Island3StoryProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(autoStart);
  const [speedLevel, setSpeedLevel] = useState(1); // 0: slow, 1: normal, 2: fast
  const [speedChanged, setSpeedChanged] = useState(false);

  const sections = [
    { type: "title", text: `${missionData.title} — ${missionData.subtitle}` },
    { type: "intro", text: missionData.storyIntro },
    ...missionData.monologue.map(text => ({ type: "monologue", text })),
    { type: "objective", text: missionData.objective }
  ];

  const fullText = sections.map(s => s.text).join("\n\n");

  // Speed configurations: [ms per character, label, icon]
  const speedConfigs = [
    { delay: 60, label: "Slow", icon: "🐌" },
    { delay: 30, label: "Normal", icon: "⚡" },
    { delay: 10, label: "Fast", icon: "🚀" }
  ];

  // Modern script font configuration
  const fontConfig = {
    family: "'Inter', 'Segoe UI', sans-serif",
    weight: "450",
    spacing: "0.03em"
  };

  const currentSpeed = speedConfigs[speedLevel];

  useEffect(() => {
    if (!isTyping) return;

    const interval = setInterval(() => {
      setDisplayedText(prev => {
        if (prev.length < fullText.length) {
          return fullText.slice(0, prev.length + 1);
        } else {
          setIsTyping(false);
          return prev;
        }
      });
    }, currentSpeed.delay);

    return () => clearInterval(interval);
  }, [isTyping, fullText, currentSpeed.delay]);

  const handleSpeedClick = () => {
    setSpeedLevel(prev => (prev + 1) % speedConfigs.length);
    setSpeedChanged(true);
    setTimeout(() => setSpeedChanged(false), 500);
  };

  return (
    <Card 
      className={`p-6 cursor-pointer hover:bg-muted/30 transition-all border-2 ${
        speedChanged 
          ? "border-primary bg-primary/10 shadow-lg scale-[1.02]" 
          : "border-muted hover:border-primary/50"
      }`}
      onClick={handleSpeedClick}
      title={`Click to change speed (Current: ${currentSpeed.label} ${currentSpeed.icon})`}
    >
      <div 
        className={`whitespace-pre-wrap text-base leading-relaxed text-foreground selection:bg-primary/20 transition-all duration-300 ${
          speedChanged ? "scale-[1.01] bg-primary/5 rounded p-2" : ""
        }`}
        style={{ 
          fontFamily: fontConfig.family,
          fontWeight: fontConfig.weight,
          letterSpacing: fontConfig.spacing
        }}
      >
        {displayedText}
        {isTyping && <span className="animate-pulse text-primary font-bold">▋</span>}
      </div>
      
      {speedChanged && (
        <div className="mt-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/20 px-3 py-1 rounded-full text-sm font-medium">
            <span>{currentSpeed.icon}</span>
            <span>Speed: {currentSpeed.label}</span>
          </div>
        </div>
      )}
    </Card>
  );
}

