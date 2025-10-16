// Main Interactive Element Components
export { InteractiveElement } from "./interactive-element";
export type { InteractiveElementProps, ModuleQuizProps } from "./interactive-element";

// Individual Interactive Element Types
export { TraditionalQuiz } from "./quiz/traditional-quiz";
export { TokenDeployChallenge } from "./elements/token-deploy-challenge";
export { StakingDeployChallenge } from "./elements/staking-deploy-challenge";
export { NftDeployChallenge } from "./elements/nft-deploy-challenge";

// Interactive Elements (Compact Production Versions)
export { WordJumbleCompact } from "./elements/word-jumble-compact";
export { ConceptMatchingCompact } from "./elements/concept-matching-compact";
export { TimelineBuilderCompact } from "./elements/timeline-builder-compact";
export { TrueFalseCompact } from "./elements/true-false-compact";
export { DragDropPuzzleCompact } from "./elements/drag-drop-puzzle-compact";

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
