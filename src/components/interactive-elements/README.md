# Interactive Elements

This folder contains the modular dual-mode interactive element system for Plunder Academy. The system supports multiple types of interactive learning elements, each capable of operating in both learning mode (with immediate feedback) and assessment mode (for quiz validation).

## Structure

```
interactive-elements/
├── index.ts                          # Main exports and backwards compatibility
├── interactive-element.tsx           # Main orchestrator component
├── mdx-components.tsx                # MDX wrapper components for lesson integration
├── README.md                         # This file
├── shared/                           # Shared utilities and components
│   ├── types.ts                     # Common TypeScript interfaces
│   ├── utils.ts                     # Utility functions
│   ├── use-achievement-claiming.ts   # Hook for achievement claiming
│   └── achievement-claim-section.tsx # Shared claim/results UI
├── quiz/                            # Traditional quiz implementation
│   └── traditional-quiz.tsx         # Supports mixed question types
├── elements/                        # All interactive element components
│   ├── word-jumble-compact.tsx      # Unscramble terminology
│   ├── concept-matching-compact.tsx # Match concepts with definitions
│   ├── timeline-builder-compact.tsx # Arrange events chronologically
│   ├── true-false-compact.tsx       # Classify true/false statements
│   ├── drag-drop-puzzle-compact.tsx # Arrange code blocks in order
│   └── token-deploy-challenge.tsx # Guided token deployment
└── prototypes/                      # Development prototypes (unused in production)
```

## Interactive Element Types

### 1. Traditional Quiz
- **File**: `quiz/traditional-quiz.tsx`
- **Description**: Multiple choice and multiple select questions with automated scoring
- **Usage**: All module quizzes (Modules 1-5), now supports mixed question types
- **Features**: Timer, anti-cheat measures (selective for interactive elements), progress tracking, achievement claiming
- **Mixed Questions**: Can include Word Jumble, Concept Matching, Timeline Builder, True/False, and Drag-Drop puzzles within quizzes

### 2. Word Jumble
- **File**: `elements/word-jumble-compact.tsx`
- **Description**: Unscramble letters to form blockchain and Solidity terminology
- **Usage**: Vocabulary reinforcement, terminology learning
- **Modes**: Learning (shows answer on completion) | Assessment (captures answer for API)
- **Features**: Auto-scrambling, hints, time tracking, visual feedback (learning mode only)

### 3. Concept Matching
- **File**: `elements/concept-matching-compact.tsx`
- **Description**: Drag concepts from left column to match definitions on right
- **Usage**: Terminology, blockchain concepts, security patterns, DeFi terms
- **Modes**: Learning (validates matches) | Assessment (captures pairs for API)
- **Features**: Category badges, immediate feedback (learning mode), partial credit support
- **Data Formats**: 
  - Learning: Full `pairs` with correct answers
  - Assessment: Separate `concepts` and `definitions` arrays (no answers exposed)

### 4. Timeline Builder
- **File**: `elements/timeline-builder-compact.tsx`
- **Description**: Drag events into chronological order
- **Usage**: Transaction lifecycle, deployment steps, protocol flows, consensus mechanisms
- **Modes**: Learning (shows correct positions) | Assessment (captures sequence for API)
- **Features**: Visual feedback (learning mode), partial credit for correctly positioned events

### 5. True/False Statements
- **File**: `elements/true-false-compact.tsx`
- **Description**: Drag statements into "True" or "False" columns (3-column layout with "Unclassified")
- **Usage**: Syntax validation, security concepts, knowledge verification
- **Modes**: Learning (shows correct classifications) | Assessment (captures answers for API)
- **Features**: Category badges, difficulty indicators, explanations, partial credit per correct classification

### 6. Drag & Drop Code Puzzle
- **File**: `elements/drag-drop-puzzle-compact.tsx`
- **Description**: Arrange code blocks in correct order
- **Usage**: Contract structure, function ordering, import sequences, inheritance patterns
- **Modes**: Learning (shows correct order) | Assessment (captures sequence for API)
- **Features**: Syntax highlighting, visual feedback (learning mode), partial credit support

### 7. Deploy Challenge
- **File**: `elements/deploy-challenge/token-deploy-challenge.tsx`
- **Description**: Guided deployment exercises with transaction verification
- **Usage**: Module 5 (creating-erc20-tokens)
- **Features**: Transaction submission, multiple deployment methods, result verification

## Dual-Mode Architecture

**CRITICAL DESIGN**: All interactive elements support two distinct operational modes with different behaviors.

### Mode 1: Learning (Standalone in Lessons)
- **Purpose**: Educational practice with immediate feedback
- **Feedback**: ✅ Show correct/incorrect answers immediately
- **Visual Cues**: Green/red indicators, success/error states, hints, explanations
- **API**: ❌ No submission
- **Retry**: ✅ Unlimited attempts
- **Data Format**: Includes correct answers for validation

### Mode 2: Assessment (Within Quizzes)
- **Purpose**: Knowledge validation for achievement claiming
- **Feedback**: ❌ NO answers or correctness shown
- **Visual Cues**: Blue/neutral colors only, no validation indicators
- **API**: ✅ Captures structured data for backend submission
- **Retry**: ❌ Single submission with quiz
- **Data Format**: No correct answers exposed in source code (security)

## Assessment Rules for Quizzes

- Interactive usage cap: keep interactive questions ≤ 20% of each quiz; the rest must be traditional (Multiple Choice/Multiple Select).
- Quiz size: choose 10–15 questions per quiz based on module content depth; right-size to adequately assess key learning outcomes (no fixed count).
- Mode: render interactive elements in quizzes strictly with `mode="assessment"` and `showFeedback={false}` (handled by `TraditionalQuiz`).
- Answer distribution (anti-pattern rules) for traditional items:
  - Balance A/B/C/D roughly equally per quiz (±1 of uniform), max run length per letter ≤ 2, avoid patterns (AAA…, ABAB…, staircases). Use "All/None of the above" sparingly.
- Multiple-select formatting: correct answers as uppercase letters, comma-separated, alphabetical (e.g., `"A,C,D"`).
- Placement: vary interactive question positions within a quiz (not fixed to the same indices across modules).
- Security: keep correct answers for interactive items only in HTML comments; never include them in the visible `Interactive Data` JSON.

### Component Props

```typescript
interface InteractiveElementProps {
  data: ElementSpecificData;
  mode?: 'learning' | 'assessment';  // Default: 'learning'
  onComplete?: (answer: InteractiveAnswer) => void;  // Required for assessment
  showFeedback?: boolean;  // Default: true for learning, false for assessment
}
```

## Usage

### In Lesson Content (Learning Mode)

Interactive elements are available as MDX components:

```mdx
<!-- Word Jumble -->
<WordJumble 
  word="BLOCKCHAIN" 
  hint="Distributed ledger technology" 
/>

<!-- Concept Matching -->
<ConceptMatching pairs={[
  {
    "conceptId": "evm",
    "definitionId": "def-evm",
    "concept": "EVM",
    "definition": "Virtual machine that executes smart contract bytecode",
    "category": "core"
  },
  {
    "conceptId": "gas",
    "definitionId": "def-gas",
    "concept": "Gas",
    "definition": "Unit measuring computational work on EVM",
    "category": "resources"
  }
]} />

<!-- Timeline Builder -->
<TimelineBuilder events={[
  {"id": "evt-1", "text": "Transaction created", "correctPosition": 0},
  {"id": "evt-2", "text": "Transaction signed", "correctPosition": 1},
  {"id": "evt-3", "text": "Transaction broadcast", "correctPosition": 2}
]} />

<!-- True/False -->
<TrueFalse statements={[
  {
    "id": "s1",
    "text": "Solidity is compiled to bytecode",
    "correctAnswer": true,
    "explanation": "Solidity compiles to EVM bytecode for execution"
  }
]} />

<!-- Drag & Drop Puzzle -->
<DragDropPuzzle codeBlocks={[
  {"id": "b1", "content": "pragma solidity ^0.8.0;", "correctPosition": 0},
  {"id": "b2", "content": "contract MyToken {", "correctPosition": 1},
  {"id": "b3", "content": "  string public name;", "correctPosition": 2}
]} />
```

### In Quiz Content (Assessment Mode)

Quiz MDX files use a different format that **does not expose correct answers**:

```mdx
### Question 3
**Type:** Word Jumble
**Points:** 6
**Lesson:** 1.1 Introduction to Blockchain

Unscramble this blockchain term:

**Interactive Data:**
```json
{
  "hint": "Distributed ledger technology",
  "scrambled": "LKCOHBCANI"
}
```

<!--
API ANSWER FORMAT for backend validation:
{
  "type": "word-jumble",
  "userResponse": {
    "word": "BLOCKCHAIN",
    "timeSpent": 45
  }
}
CORRECT ANSWER: "BLOCKCHAIN"
-->
```

**Security Note**: Correct answers are ONLY in HTML comments, never in the Interactive Data JSON. The frontend cannot validate quiz answers.

### Quiz Orchestrator Usage

```tsx
import { InteractiveElement } from "@/components/interactive-elements";

<InteractiveElement 
  quiz={quizData} 
  missionData={missionData} 
  moduleSlug={moduleSlug} 
/>
```

The `TraditionalQuiz` component automatically:
1. Detects interactive question types
2. Renders appropriate compact component
3. Passes `mode="assessment"` and `showFeedback={false}`
4. Captures user responses as JSON strings
5. Submits all answers (traditional + interactive) to API

## API Answer Formats

All interactive elements submit structured JSON data to the backend for grading:

### Word Jumble
```json
{
  "type": "word-jumble",
  "userResponse": {
    "word": "BLOCKCHAIN",
    "timeSpent": 45
  }
}
```
**Grading**: Binary (correct/incorrect), optional time bonus

### Concept Matching
```json
{
  "type": "concept-matching",
  "userResponse": {
    "pairs": [
      {"conceptId": "gas", "definitionId": "def-gas"},
      {"conceptId": "wei", "definitionId": "def-wei"}
    ]
  }
}
```
**Grading**: Partial credit per correct pair

### Timeline Builder
```json
{
  "type": "timeline-builder",
  "userResponse": {
    "sequence": ["evt-1", "evt-2", "evt-3", "evt-4"]
  }
}
```
**Grading**: Partial credit for correctly positioned events

### True/False Statements
```json
{
  "type": "true-false-statements",
  "userResponse": {
    "classifications": [
      {"id": "stmt-1", "answer": true},
      {"id": "stmt-2", "answer": false}
    ]
  }
}
```
**Grading**: Partial credit per correct classification

### Drag & Drop Puzzle
```json
{
  "type": "drag-drop-puzzle",
  "userResponse": {
    "sequence": ["block-1", "block-2", "block-3", "block-4"]
  }
}
```
**Grading**: Partial credit for correctly positioned blocks

### Backend Grading Pseudocode

```python
def grade_quiz_answer(question_id, user_answer, correct_answer_data, max_points):
    # Detect interactive element by checking if answer is JSON
    if is_json_string(user_answer):
        interactive = json.loads(user_answer)
        element_type = interactive['type']
        user_response = interactive['userResponse']
        
        if element_type == 'concept-matching':
            correct_pairs = correct_answer_data['pairs']
            correct_count = count_matching_pairs(user_response['pairs'], correct_pairs)
            return (correct_count / len(correct_pairs)) * max_points
            
        elif element_type == 'timeline-builder':
            correct_sequence = correct_answer_data['sequence']
            correct_positions = count_correct_positions(user_response['sequence'], correct_sequence)
            return (correct_positions / len(correct_sequence)) * max_points
            
        elif element_type == 'word-jumble':
            return max_points if user_response['word'].upper() == correct_answer_data['word'].upper() else 0
            
        elif element_type == 'true-false-statements':
            correct_classifications = correct_answer_data['classifications']
            correct_count = count_correct_classifications(user_response['classifications'], correct_classifications)
            return (correct_count / len(correct_classifications)) * max_points
            
        elif element_type == 'drag-drop-puzzle':
            correct_sequence = correct_answer_data['sequence']
            correct_positions = count_correct_positions(user_response['sequence'], correct_sequence)
            return (correct_positions / len(correct_sequence)) * max_points
    else:
        # Traditional multiple choice/select
        return grade_traditional_answer(user_answer, correct_answer_data, max_points)
```

## Adding New Interactive Element Types

### Step 1: Create Component in elements/
Create a new file under `interactive-elements/elements/` for your element type:
```
interactive-elements/
└── elements/
    └── your-element-compact.tsx
```

### Step 2: Define Types
Add any new types to `shared/types.ts`:
```typescript
export interface YourElementProps extends BaseInteractiveElementProps {
  // Add your specific props
  yourData?: YourDataType | null;
}
```

### Step 3: Implement Dual-Mode Component
Create your component following the pattern of existing elements:
```tsx
interface YourElementCompactProps {
  data: YourElementData;
  mode?: 'learning' | 'assessment';
  onComplete?: (answer: YourElementAnswer) => void;
  showFeedback?: boolean;
}

export function YourElementCompact({
  data,
  mode = 'learning',
  onComplete,
  showFeedback = true
}: YourElementCompactProps) {
  const [userResponse, setUserResponse] = useState<YourResponseType>(initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = () => {
    setIsSubmitted(true);
    
    if (onComplete) {
      onComplete({
        type: 'your-element-type',
        userResponse: userResponse
      });
    }
  };
  
  const getValidationStatus = (item: YourItemType) => {
    // Only validate in learning mode with correct answer data
    if (!showFeedback || mode === 'assessment' || !data.correctAnswers) return null;
    
    // Your validation logic
    return isCorrect ? 'correct' : 'incorrect';
  };
  
  return (
    <div className="space-y-4" data-interactive="true">
      {/* Your interactive UI */}
      
      {/* Conditional styling based on mode */}
      <div className={cn(
        "p-2 border-2",
        mode === 'assessment'
          ? "border-blue-400 bg-blue-50"  // Neutral assessment colors
          : status === 'correct'
            ? "border-green-400 bg-green-50"  // Learning feedback
            : "border-red-400 bg-red-50"
      )}>
        {/* Item content */}
      </div>
      
      {/* Submit button */}
      <Button onClick={handleSubmit} disabled={!isComplete}>
        {mode === 'assessment' ? 'Submit Answer' : 'Check Answer'}
      </Button>
    </div>
  );
}
```

**Key Requirements:**
- Support both learning and assessment modes
- Use `data-interactive="true"` on root element (for quiz anti-cheat)
- Blue/neutral colors in assessment mode
- Green/red feedback only in learning mode
- Call `onComplete` callback with structured answer

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
