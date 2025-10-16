"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";
import { QuizMeta, MissionMeta } from "@/lib/mdx";
import { TraditionalQuiz } from "./quiz/traditional-quiz";
import { TokenDeployChallenge } from "./elements/token-deploy-challenge";
import { StakingDeployChallenge } from "./elements/staking-deploy-challenge";
import { NftDeployChallenge } from "./elements/nft-deploy-challenge";
import { isTransactionSubmissionModule } from "./shared/utils";

// TODO: These will be added in future milestones
// import { CodeCompletion } from "./code-completion/code-completion";
// import { ConfigurationBuilder } from "./configuration-builder/configuration-builder";

/**
 * InteractiveElement - Main orchestrator for different interactive element types
 * 
 * This component decides which interactive element to render based on:
 * - Module configuration (moduleSlug)
 * - Available data (quiz, mission, etc.)
 * - Interactive element type
 * 
 * Supported Interactive Element Types:
 * 1. Traditional Quiz - Multiple choice questions with automated scoring
 * 2. Deploy Challenge - Guided deployment exercises (currently: token factory)
 * 
 * Future Interactive Element Types (Milestone 2):
 * 3. Code Completion - Fill-in-the-blank style coding exercises
 * 4. Configuration Builder - Parameter setting with sliders and interactive inputs
 */

export interface InteractiveElementProps {
  quiz?: QuizMeta | null;
  missionData?: MissionMeta | null;
  moduleSlug: string;
  
  // Future props for other interactive element types
  // codeExercise?: CodeExerciseMeta | null;
  // configurationChallenge?: ConfigurationMeta | null;
  // interactiveType?: 'quiz' | 'deploy' | 'code-completion' | 'configuration-builder';
}

export function InteractiveElement({ 
  quiz, 
  missionData, 
  moduleSlug 
}: InteractiveElementProps) {
  
  // Determine which interactive element to show
  const getInteractiveElementType = (): 'quiz' | 'deploy' | 'none' => {
    // Module 5 uses deploy challenge (transaction submission)
    if (isTransactionSubmissionModule(moduleSlug)) {
      return 'deploy';
    }
    
    // If quiz data is available, show traditional quiz
    if (quiz) {
      return 'quiz';
    }
    
    // Future: Check for other interactive element types
    // if (codeExercise) return 'code-completion';
    // if (configurationChallenge) return 'configuration-builder';
    
    return 'none';
  };

  const elementType = getInteractiveElementType();

  // Render appropriate interactive element
  switch (elementType) {
    case 'quiz':
      return (
        <TraditionalQuiz 
          quiz={quiz} 
          missionData={missionData} 
          moduleSlug={moduleSlug} 
        />
      );
      
    case 'deploy':
      // Use different deploy challenge components based on module
      if (moduleSlug === 'staking-contract-practical') {
        return (
          <StakingDeployChallenge 
            missionData={missionData} 
            moduleSlug={moduleSlug} 
          />
        );
      }
      if (moduleSlug === 'nft-collection-practical') {
        return (
          <NftDeployChallenge 
            missionData={missionData} 
            moduleSlug={moduleSlug} 
          />
        );
      }
      // Default to token deploy challenge (for creating-erc20-tokens)
      return (
        <TokenDeployChallenge 
          missionData={missionData} 
          moduleSlug={moduleSlug} 
        />
      );
      
    // Future interactive element types
    // case 'code-completion':
    //   return (
    //     <CodeCompletion 
    //       codeExercise={codeExercise} 
    //       missionData={missionData} 
    //       moduleSlug={moduleSlug} 
    //     />
    //   );
    //   
    // case 'configuration-builder':
    //   return (
    //     <ConfigurationBuilder 
    //       configurationChallenge={configurationChallenge} 
    //       missionData={missionData} 
    //       moduleSlug={moduleSlug} 
    //     />
    //   );
      
    case 'none':
    default:
      return (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="size-5" />
              Interactive Element
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center p-8">
            <div className="bg-muted/30 rounded-lg p-12 border-2 border-dashed border-muted-foreground/20 space-y-4">
              <p className="text-lg text-muted-foreground">Interactive Content TBA</p>
              <p className="text-sm text-muted-foreground">
                Interactive element for this module will be added in future updates
              </p>
              <Button disabled className="mt-4">
                Complete Interactive Element
              </Button>
            </div>
          </CardContent>
        </Card>
      );
  }
}

// Export type for backwards compatibility
export type { InteractiveElementProps as ModuleQuizProps };
