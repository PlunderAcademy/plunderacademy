// Main Interactive Element Components
export { InteractiveElement } from "./interactive-element";
export type { InteractiveElementProps, ModuleQuizProps } from "./interactive-element";

// Individual Interactive Element Types
export { TraditionalQuiz } from "./quiz/traditional-quiz";
export { TokenDeployChallenge } from "./deploy-challenge/token-deploy-challenge";

// Prototype Interactive Elements
export { DragDropCodePuzzle } from "./prototypes/drag-drop-puzzle";
export { TimelineBuilder } from "./prototypes/timeline-builder";
export { ConceptMatching } from "./prototypes/concept-matching";
export { WordJumble } from "./prototypes/word-jumble";

// Shared Components
export { AchievementClaimSection } from "./shared/achievement-claim-section";

// Shared Types
export type {
  QuizAnswer,
  QuizResult,
  ApiResultData,
  VoucherResponse,
  CelebrationData,
  ClaimedAchievement,
  BaseInteractiveElementProps,
  QuizElementProps,
  DeployElementProps,
  InteractiveStep,
  ApiResponse,
  ApiSubmissionPayload,
  NFTMetadata
} from "./shared/types";

// Shared Utilities
export {
  MODULE_TO_ACHIEVEMENT_MAP,
  getAchievementNumber,
  isTransactionSubmissionModule,
  formatTime,
  submitToAPI,
  checkClaimedStatus,
  generateTwitterShare,
  loadNFTMetadata,
  getNFTImageUrl
} from "./shared/utils";

// Shared Hooks
export { useAchievementClaiming } from "./shared/use-achievement-claiming";

// Backwards compatibility - provide ModuleQuiz as alias for InteractiveElement
export { InteractiveElement as ModuleQuiz } from "./interactive-element";
