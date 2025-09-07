"use client";

import * as React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  };
}

export function AchievementCelebration({ 
  isVisible, 
  onClose, 
  achievementData 
}: AchievementCelebrationProps) {
  const [showCard, setShowCard] = React.useState(false);
  const [showFireworks, setShowFireworks] = React.useState(false);

  React.useEffect(() => {
    if (isVisible) {
      // Start fireworks immediately
      setShowFireworks(true);
      
      // Show card after slight delay
      const cardTimer = setTimeout(() => {
        setShowCard(true);
      }, 300);

      // Auto close after 4 seconds
      const closeTimer = setTimeout(() => {
        handleClose();
      }, 4000);

      return () => {
        clearTimeout(cardTimer);
        clearTimeout(closeTimer);
      };
    } else {
      setShowCard(false);
      setShowFireworks(false);
    }
  }, [isVisible]);

  const handleClose = () => {
    setShowCard(false);
    setShowFireworks(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const getCategoryColor = (category?: string) => {
    switch (category) {
      case "security": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "gas": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "fundamentals": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "advanced": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      default: return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    }
  };

  const getCategoryIcon = (category?: string) => {
    switch (category) {
      case "security": return "🛡️";
      case "gas": return "⚡";
      case "fundamentals": return "📚";
      case "advanced": return "🏆";
      default: return "🎯";
    }
  };

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
      <div className={`relative transition-all duration-500 ${
        showCard 
          ? 'scale-100 opacity-100 translate-y-0' 
          : 'scale-50 opacity-0 translate-y-10'
      }`}>
        <Card className="w-80 overflow-hidden shadow-2xl border-2 border-yellow-400 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
          {/* Header with celebration message */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-white font-bold text-lg">
              <Trophy className="size-6" />
              <span>Achievement Unlocked!</span>
              <Trophy className="size-6" />
            </div>
          </div>

          {/* Achievement Image */}
          <div className="aspect-[320/425] bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center relative">
            {achievementData?.image ? (
              <Image 
                src={achievementData.image} 
                alt={achievementData.name || "Achievement Badge"}
                width={320}
                height={425}
                className="w-full h-full object-contain"
                unoptimized
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
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              {achievementData?.category && (
                <Badge className={getCategoryColor(achievementData.category)}>
                  <span className="mr-1">{getCategoryIcon(achievementData.category)}</span>
                  <span className="capitalize">{achievementData.category}</span>
                </Badge>
              )}
              <div className="text-sm text-muted-foreground">
                #{achievementData?.achievementNumber}
              </div>
            </div>
            
            <div className="text-center space-y-2">
              <h3 className="text-xl font-bold text-foreground">
                {achievementData?.name || "New Achievement"}
              </h3>
              <p className="text-muted-foreground">
                {achievementData?.description || "Congratulations on your achievement!"}
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold">
                <CheckCircle className="size-5" />
                <span>Successfully claimed on blockchain!</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
