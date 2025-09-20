# Interactive Elements

This folder contains the modular interactive element system for Plunder Academy. The system supports multiple types of interactive learning elements and is designed to be easily extensible.

## Structure

```
interactive-elements/
├── index.ts                          # Main exports and backwards compatibility
├── interactive-element.tsx           # Main orchestrator component
├── README.md                         # This file
├── shared/                           # Shared utilities and components
│   ├── types.ts                     # Common TypeScript interfaces
│   ├── utils.ts                     # Utility functions
│   ├── use-achievement-claiming.ts   # Hook for achievement claiming
│   └── achievement-claim-section.tsx # Shared claim/results UI
├── quiz/                            # Traditional quiz implementation
│   └── traditional-quiz.tsx
└── deploy-challenge/                # Deploy challenge implementation
    └── token-deploy-challenge.tsx
```

## Current Interactive Element Types

### 1. Traditional Quiz
- **File**: `quiz/traditional-quiz.tsx`
- **Description**: Multiple choice questions with automated scoring
- **Usage**: Modules 1-4 (blockchain-fundamentals, evm-fundamentals, intro-to-solidity, zilliqa-evm-setup)
- **Features**: Timer, anti-cheat measures, progress tracking, achievement claiming

### 2. Deploy Challenge
- **File**: `deploy-challenge/token-deploy-challenge.tsx`
- **Description**: Guided deployment exercises with transaction verification
- **Usage**: Module 5 (creating-erc20-tokens)
- **Features**: Transaction submission, multiple deployment methods, result verification

## Future Interactive Element Types (Milestone 2)

### 3. Code Completion
- **Planned File**: `code-completion/code-completion.tsx`
- **Description**: Fill-in-the-blank style coding exercises
- **Usage**: Advanced modules for hands-on coding practice

### 4. Configuration Builder
- **Planned File**: `configuration-builder/configuration-builder.tsx`
- **Description**: Parameter setting with sliders and interactive inputs
- **Usage**: Modules involving contract configuration and parameter tuning

## How It Works

The `InteractiveElement` component acts as the main orchestrator:

1. **Input**: Receives quiz data, mission data, and module slug
2. **Decision**: Determines which interactive element type to render based on:
   - Module configuration (e.g., module 5 uses deploy challenge)
   - Available data (quiz data available = traditional quiz)
   - Future: Explicit interactive element type specification
3. **Rendering**: Renders the appropriate interactive element component

## Usage

### Basic Usage (Current)
```tsx
import { InteractiveElement } from "@/components/interactive-elements";

<InteractiveElement 
  quiz={quizData} 
  missionData={missionData} 
  moduleSlug={moduleSlug} 
/>
```

### Backwards Compatibility
```tsx
import { ModuleQuiz } from "@/components/interactive-elements";

// Still works - ModuleQuiz is an alias for InteractiveElement
<ModuleQuiz quiz={quizData} missionData={missionData} moduleSlug={moduleSlug} />
```

## Adding New Interactive Element Types

### Step 1: Create Component Folder
Create a new folder under `interactive-elements/` for your element type:
```
interactive-elements/
└── your-element-type/
    └── your-element.tsx
```

### Step 2: Define Types
Add any new types to `shared/types.ts`:
```typescript
export interface YourElementProps extends BaseInteractiveElementProps {
  // Add your specific props
  yourData?: YourDataType | null;
}
```

### Step 3: Implement Component
Create your component following the pattern of existing elements:
```tsx
export function YourElement({ missionData, moduleSlug, yourData }: YourElementProps) {
  // Use the achievement claiming hook
  const achievementClaiming = useAchievementClaiming({ moduleSlug, missionData });
  
  // Your component logic here
  
  // Use shared components for results/claiming
  return (
    <AchievementClaimSection ... />
  );
}
```

### Step 4: Update Orchestrator
Add your element type to `interactive-element.tsx`:
```tsx
// Add to the decision logic
const getInteractiveElementType = (): 'quiz' | 'deploy' | 'your-type' | 'none' => {
  // Your detection logic
  if (yourCondition) return 'your-type';
  
  // ... existing logic
};

// Add to the switch statement
switch (elementType) {
  case 'your-type':
    return (
      <YourElement 
        yourData={yourData}
        missionData={missionData} 
        moduleSlug={moduleSlug} 
      />
    );
  // ... existing cases
}
```

### Step 5: Update Exports
Add exports to `index.ts`:
```tsx
export { YourElement } from "./your-element-type/your-element";
export type { YourElementProps } from "./shared/types";
```

## Shared Functionality

### Achievement Claiming
All interactive elements should use the `useAchievementClaiming` hook for consistent achievement claiming behavior:

```tsx
const achievementClaiming = useAchievementClaiming({ moduleSlug, missionData });

// Use achievementClaiming.setVoucher() when successful
// Use achievementClaiming.setStep() to control flow
// Use AchievementClaimSection for consistent UI
```

### API Submission
Use the shared `submitToAPI` utility for consistent API interactions:

```tsx
import { submitToAPI } from "../shared/utils";

const apiResult = await submitToAPI({
  walletAddress: address,
  achievementNumber,
  submissionType: 'your-type',
  submissionData: yourData,
  metadata: { timestamp: new Date().toISOString() }
});
```

### Result Display
Use the shared `AchievementClaimSection` component for consistent results and claiming UI:

```tsx
<AchievementClaimSection
  moduleSlug={moduleSlug}
  missionData={missionData}
  result={result}
  apiResults={apiResults}
  alreadyClaimed={achievementClaiming.alreadyClaimed}
  nftImageUrl={achievementClaiming.nftImageUrl}
  hash={achievementClaiming.hash}
  isClaimPending={achievementClaiming.isClaimPending}
  isConfirming={achievementClaiming.isConfirming}
  claimError={achievementClaiming.claimError}
  onClaimAchievement={achievementClaiming.handleClaimAchievement}
  onRetake={handleRetake}
/>
```

## Benefits of This Architecture

1. **Modularity**: Each interactive element type is self-contained
2. **Reusability**: Shared components and utilities reduce code duplication
3. **Extensibility**: Easy to add new interactive element types
4. **Maintainability**: Clear separation of concerns
5. **Consistency**: Shared UI and behavior patterns
6. **Backwards Compatibility**: Existing code continues to work

## Testing

Each interactive element should be tested independently. The orchestrator ensures the right element is rendered based on configuration.

## Migration Notes

The original `module-quiz.tsx` has been completely refactored into this modular system. All functionality has been preserved while making the codebase more maintainable and extensible for future interactive element types.
