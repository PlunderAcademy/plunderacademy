"use client";

import { WordJumbleCompact, WordJumbleData } from "./elements/word-jumble-compact";
import { ConceptMatchingCompact, ConceptMatchingData } from "./elements/concept-matching-compact";
import { TimelineBuilderCompact, TimelineBuilderData } from "./elements/timeline-builder-compact";
import { TrueFalseCompact, TrueFalseData } from "./elements/true-false-compact";
import { DragDropPuzzleCompact, DragDropPuzzleData } from "./elements/drag-drop-puzzle-compact";
export { BlockchainExplainer } from "./blockchain-explainer";
export { ConsensusVisualizer } from "./consensus-visualizer";
export { ThroughputComparison } from "./throughput-comparison";
export { EcosystemIntegration } from "./ecosystem-integration";
export { BlockExplorerMockup } from "./block-explorer-mockup";
export { HashGenerator } from "./hash-generator";
export { GasFeeCalculator } from "./gas-fee-calculator";
export { StackVisualizer } from "./stack-visualizer";
export { ContractLifecycleTimeline } from "./contract-lifecycle-timeline";
export { GasCostComparison } from "./gas-cost-comparison";
export { MemoryLayoutVisualizer } from "./memory-layout-visualizer";
export { ModifierExecutionFlow } from "./modifier-execution-flow";
export { EventFlowAnimator } from "./event-flow-animator";
export { MappingLookupVisualizer } from "./mapping-lookup-visualizer";
export { FunctionVisibilityDiagram } from "./function-visibility-diagram";
export { StateMutabilityComparator } from "./state-mutability-comparator";
export { default as MappingStructVisualizer } from "./mapping-struct-visualizer";
export { default as StoragePackingVisualizer } from "./storage-packing-visualizer";
export { default as InheritanceVisualizer } from "./inheritance-visualizer";
export { default as TimeLogicVisualizer } from "./time-logic-visualizer";
export { default as InteractionVisualizer } from "./interaction-visualizer";
export { default as RevertVisualizer } from "./revert-visualizer";
export { default as NFTConceptVisualizer } from "./island3/nft-concept-visualizer";
export { default as ERC721TransferVisualizer } from "./island3/erc721-transfer-visualizer";
export { default as GasEfficiencyVisualizer } from "./island3/gas-efficiency-visualizer";
export { default as AccessControlVisualizer } from "./island3/access-control-visualizer";
export { default as DeploymentVisualizer } from "./island3/deployment-visualizer";
export { default as IPFSMetadataVisualizer } from "./island3/ipfs-metadata-visualizer";
export { default as ContractStructureVisualizer } from "./island3/contract-structure-visualizer";
export { default as RevealMechanicsVisualizer } from "./island3/reveal-mechanics-visualizer";
export { Bip39SeedPhraseGenerator as InteractiveBip39Generator } from "./bip39-seed-phrase-generator";

// Island 4 Visualizers
export { default as SwapFlowAnimation } from "./island4/swap-flow-animation";
export { default as OracleDataFlow } from "./island4/oracle-data-flow";
export { default as DelegateCallVisualizer } from "./island4/delegate-call-visualizer";
export { default as CommitRevealVisualizer } from "./island4/commit-reveal-visualizer";
export { default as StorageCollisionVisualizer } from "./island4/storage-collision-visualizer";

// Island 5 Visualizers
export { default as ReentrancyAttackVisualizer } from "./island5/reentrancy-attack-visualizer";
export { default as TransactionLifecycleVisualizer } from "./island5/transaction-lifecycle-visualizer";
export { default as Web3ArchitectureVisualizer } from "./island5/web3-architecture-visualizer";
export { default as WalletConnectionVisualizer } from "./island5/wallet-connection-visualizer";

// Technical Article Visualizers
export { default as AIArchitectureFlow } from "./ai-architecture-flow";
export { default as InferenceSpeedVisualizer } from "./inference-speed-visualizer";

// Word Jumble MDX Component
export function WordJumble({ word, hint, scrambled }: { word: string; hint: string; scrambled?: string }) {
  const data: WordJumbleData = { word, hint, scrambled };
  
  return (
    <div className="my-6 p-4 border-2 border-primary/20 rounded-lg bg-muted/20">
      <div className="mb-3">
        <h4 className="font-semibold text-primary flex items-center gap-2">
          🎮 Interactive Practice: Word Jumble
        </h4>
        <p className="text-sm text-muted-foreground mt-1">Test your knowledge by unscrambling this term</p>
      </div>
      <WordJumbleCompact data={data} mode="learning" showFeedback={true} />
    </div>
  );
}

// Concept Matching MDX Component
export function ConceptMatching({ pairs }: { pairs: ConceptMatchingData['pairs'] }) {
  return (
    <div className="my-6 p-4 border-2 border-primary/20 rounded-lg bg-muted/20">
      <div className="mb-3">
        <h4 className="font-semibold text-primary flex items-center gap-2">
          🎮 Interactive Practice: Concept Matching
        </h4>
        <p className="text-sm text-muted-foreground mt-1">Match concepts with their definitions</p>
      </div>
      <ConceptMatchingCompact data={{ pairs }} mode="learning" showFeedback={true} />
    </div>
  );
}

// Timeline Builder MDX Component
export function TimelineBuilder({ events }: { events: TimelineBuilderData['events'] }) {
  return (
    <div className="my-6 p-4 border-2 border-primary/20 rounded-lg bg-muted/20">
      <div className="mb-3">
        <h4 className="font-semibold text-primary flex items-center gap-2">
          🎮 Interactive Practice: Timeline Builder
        </h4>
        <p className="text-sm text-muted-foreground mt-1">Arrange events in the correct chronological order</p>
      </div>
      <TimelineBuilderCompact data={{ events }} mode="learning" showFeedback={true} />
    </div>
  );
}

// True/False MDX Component
export function TrueFalse({ statements }: { statements: TrueFalseData['statements'] }) {
  return (
    <div className="my-6 p-4 border-2 border-primary/20 rounded-lg bg-muted/20">
      <div className="mb-3">
        <h4 className="font-semibold text-primary flex items-center gap-2">
          🎮 Interactive Practice: True or False
        </h4>
        <p className="text-sm text-muted-foreground mt-1">Classify each statement as true or false</p>
      </div>
      <TrueFalseCompact data={{ statements }} mode="learning" showFeedback={true} />
    </div>
  );
}

// Drag & Drop Puzzle MDX Component
export function DragDropPuzzle({ codeBlocks }: { codeBlocks: DragDropPuzzleData['codeBlocks'] }) {
  return (
    <div className="my-6 p-4 border-2 border-primary/20 rounded-lg bg-muted/20">
      <div className="mb-3">
        <h4 className="font-semibold text-primary flex items-center gap-2">
          🎮 Interactive Practice: Code Puzzle
        </h4>
        <p className="text-sm text-muted-foreground mt-1">Arrange code blocks in the correct order</p>
      </div>
      <DragDropPuzzleCompact data={{ codeBlocks }} mode="learning" showFeedback={true} />
    </div>
  );
}

