"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle, Award, Sparkles, Star, Trophy } from "lucide-react";

interface AchievementCelebrationProps {
  isVisible: boolean;
  onClose: () => void;
  achievementData?: {
    name?: string;
    description?: string;
    image?: string;
    achievementNumber: string;
    category?: "fundamentals" | "advanced" | "security" | "gas";
    attributes?: Array<{
      trait_type: string;
      value: string | number;
    }>;
  };
}

export function AchievementCelebration({ 
  isVisible, 
  onClose, 
  achievementData 
}: AchievementCelebrationProps) {
  const [showCard, setShowCard] = React.useState(false);
  const [showFireworks, setShowFireworks] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  
  // Use ref to store timer so it doesn't get cleared by re-renders
  const closeTimerRef = React.useRef<NodeJS.Timeout | null>(null);
  const cardTimerRef = React.useRef<NodeJS.Timeout | null>(null);
  
  // Track if we've already started the celebration to prevent multiple timers
  const celebrationStartedRef = React.useRef(false);
  
  // Store onClose in a ref to avoid stale closures and dependency issues
  const onCloseRef = React.useRef(onClose);
  
  // Keep the ref updated
  React.useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  const handleClose = React.useCallback(() => {
    setIsClosing(true);
    setShowCard(false);
    setShowFireworks(false);
    
    // Clear any active timers
    if (cardTimerRef.current) {
      clearTimeout(cardTimerRef.current);
      cardTimerRef.current = null;
    }
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    
    setTimeout(() => {
      setIsClosing(false);
      celebrationStartedRef.current = false; // Reset flag
      onCloseRef.current();
    }, 800); // Longer timeout for the scale-out animation
  }, []);

  React.useEffect(() => {
    if (isVisible && !celebrationStartedRef.current) {
      console.log('🎉 Achievement celebration started - will auto-close in 8 seconds');
      celebrationStartedRef.current = true;
      
      // Clear any existing timers
      if (cardTimerRef.current) {
        clearTimeout(cardTimerRef.current);
      }
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
      
      // Start fireworks immediately
      setShowFireworks(true);
      
      // Show card after slight delay
      cardTimerRef.current = setTimeout(() => {
        setShowCard(true);
      }, 300);

      // Auto close after 8 seconds (double the time)
      closeTimerRef.current = setTimeout(() => {
        console.log('🕐 8 seconds elapsed - auto-closing celebration');
        setIsClosing(true);
        setShowCard(false);
        setShowFireworks(false);
        setTimeout(() => {
          setIsClosing(false);
          celebrationStartedRef.current = false; // Reset flag
          onCloseRef.current();
        }, 800);
      }, 8000);
    } else if (!isVisible) {
      // Reset everything when becoming invisible
      celebrationStartedRef.current = false;
      setShowCard(false);
      setShowFireworks(false);
      setIsClosing(false);
      
      // Clear timers when becoming invisible
      if (cardTimerRef.current) {
        clearTimeout(cardTimerRef.current);
        cardTimerRef.current = null;
      }
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
    }
  }, [isVisible]);

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      console.log('🧹 Cleaning up celebration timers');
      if (cardTimerRef.current) {
        clearTimeout(cardTimerRef.current);
        cardTimerRef.current = null;
      }
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
      celebrationStartedRef.current = false;
    };
  }, []);


  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Fireworks/Confetti Effect */}
      {showFireworks && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Animated stars/sparkles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            >
              <Star 
                className="text-yellow-400 size-4 animate-spin" 
                style={{
                  animationDuration: `${0.5 + Math.random() * 1}s`,
                }}
              />
            </div>
          ))}
          
          {/* Sparkles */}
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={`sparkle-${i}`}
              className="absolute animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            >
              <Sparkles className="text-blue-400 size-3" />
            </div>
          ))}

          {/* Floating circles */}
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={`circle-${i}`}
              className={`absolute w-2 h-2 rounded-full animate-pulse ${
                i % 3 === 0 ? 'bg-yellow-400' : 
                i % 3 === 1 ? 'bg-blue-400' : 'bg-green-400'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 1}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Achievement Card */}
      <div className={`relative transition-all duration-700 ${
        isClosing
          ? 'scale-[0.2] opacity-0 translate-x-[50vw] -translate-y-[50vh]' // Scale out to top-right (wallet area)
          : showCard 
            ? 'scale-100 opacity-100 translate-y-0' 
            : 'scale-50 opacity-0 translate-y-10'
      }`}>
        <Card className="w-64 overflow-hidden shadow-2xl border-2 border-yellow-400 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
          {/* Header with celebration message */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-3 text-center">
            <div className="flex items-center justify-center gap-2 text-white font-bold text-base">
              <Trophy className="size-5" />
              <span>Achievement Unlocked!</span>
              <Trophy className="size-5" />
            </div>
          </div>

          {/* Achievement Image */}
          <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center relative">
            {achievementData?.image ? (
              <img 
                src={achievementData.image} 
                alt={achievementData.name || "Achievement Badge"}
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback to .png if .webp fails
                  const target = e.target as HTMLImageElement;
                  if (target.src.includes('.webp')) {
                    target.src = target.src.replace('.webp', '.png');
                  }
                }}
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-muted-foreground">
                <Award className="size-20 mb-4 text-yellow-500" />
                <span className="text-lg font-semibold">Achievement Badge</span>
              </div>
            )}
            
            {/* Floating success icon */}
            <div className="absolute top-4 right-4 animate-bounce">
              <div className="bg-green-500 rounded-full p-2">
                <CheckCircle className="size-6 text-white" />
              </div>
            </div>
          </div>

          {/* Achievement Details */}
          <div className="p-4 space-y-3">
            <div className="text-center space-y-2">
              <h3 className="text-xl font-bold text-foreground">
                {achievementData?.name || "New Achievement"}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {achievementData?.description || "Congratulations on your achievement!"}
              </p>
            </div>

            {/* Key Achievement Info */}
            <div className="bg-gradient-to-r from-yellow-100/50 to-orange-100/50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg p-2 space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Achievement</span>
                <span className="font-medium">#{achievementData?.achievementNumber}</span>
              </div>
              
              {/* Display key attributes from JSON */}
              {achievementData?.attributes?.map((attr) => {
                // Only show specific key attributes for cleaner display
                if (['Module', 'Location', 'Type', 'Rarity'].includes(attr.trait_type)) {
                  return (
                    <div key={attr.trait_type} className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">{attr.trait_type}</span>
                      <span className="font-medium">{attr.value}</span>
                    </div>
                  );
                }
                return null;
              })}
              
              {/* Fallback if no attributes */}
              {(!achievementData?.attributes || achievementData.attributes.length === 0) && (
                <>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Type</span>
                    <span className="font-medium capitalize">{achievementData?.category || 'Fundamentals'}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Rarity</span>
                    <span className="font-medium">Common</span>
                  </div>
                </>
              )}
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-1 text-green-600 dark:text-green-400 font-medium text-xs">
                <CheckCircle className="size-4" />
                <span>Successfully claimed!</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
