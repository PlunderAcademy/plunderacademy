"use client";

import {
  MDXProvider,
  useMDXComponents as useMDXComponentsImpl,
} from "@mdx-js/react";
import {
  Copy,
  Check,
  Link2,
  Info,
  AlertTriangle,
  CheckCircle,
  Lightbulb,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import solidity from 'react-syntax-highlighter/dist/esm/languages/prism/solidity';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json';
import markdown from 'react-syntax-highlighter/dist/esm/languages/prism/markdown';
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css';
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python';
import golang from 'react-syntax-highlighter/dist/esm/languages/prism/go';
import { vs, vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from "next-themes";
import {
  WordJumble,
  ConceptMatching,
  TimelineBuilder,
  TrueFalse,
  DragDropPuzzle,
  BlockchainExplainer,
  ConsensusVisualizer,
  ThroughputComparison,
  EcosystemIntegration,
  BlockExplorerMockup,
  HashGenerator,
  GasFeeCalculator,
  StackVisualizer,
  ContractLifecycleTimeline,
  GasCostComparison,
  MemoryLayoutVisualizer,
  ModifierExecutionFlow,
  EventFlowAnimator,
  MappingLookupVisualizer,
  FunctionVisibilityDiagram,
  StateMutabilityComparator,
  MappingStructVisualizer,
  StoragePackingVisualizer,
  InheritanceVisualizer,
  TimeLogicVisualizer,
  InteractionVisualizer,
  RevertVisualizer,
  NFTConceptVisualizer,
  ERC721TransferVisualizer,
  GasEfficiencyVisualizer,
  AccessControlVisualizer,
  DeploymentVisualizer,
  IPFSMetadataVisualizer,
  ContractStructureVisualizer,
  RevealMechanicsVisualizer,
  SwapFlowAnimation,
  OracleDataFlow,
  DelegateCallVisualizer,
  CommitRevealVisualizer,
  StorageCollisionVisualizer,
  ReentrancyAttackVisualizer,
  TransactionLifecycleVisualizer,
  Web3ArchitectureVisualizer,
  WalletConnectionVisualizer,
  AIArchitectureFlow,
  InferenceSpeedVisualizer,
  RPCCallVisualizer,
} from "@/components/interactive-elements/mdx-components";

import { Bip39SeedPhraseGenerator } from "@/components/interactive-elements/bip39-seed-phrase-generator";
import { LLMProcessAnimation } from "@/components/interactive-elements/llm-process-animation";
import { Glossary, GlossaryTerm } from "@/components/glossary-components";
import { cn } from "@/lib/utils";

// Import remark-gfm if available, otherwise skip it
// Since we're doing client-side compilation, handling plugins is trickier
// We'll focus on configuring the compiler to be more lenient

// Register languages for syntax highlighting
SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('solidity', solidity);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('markdown', markdown);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('go', golang);

// Hook for intersection observer (scroll-based animations)
function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Once in view, stop observing
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.1, ...options }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, isInView] as const;
}

// Animated wrapper for scroll-in effects
function AnimatedSection({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "transition-all duration-700 ease-out",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// Enhanced heading with hover anchor
function HeadingWithAnchor({
  level,
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"h1" | "h2" | "h3" | "h4"> & {
  level: 1 | 2 | 3 | 4;
}) {
  const [showLink, setShowLink] = useState(false);
  const text = typeof children === "string" ? children : "";
  const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  const Component = `h${level}` as "h1" | "h2" | "h3" | "h4";

  const handleCopyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
  };

  return (
    <AnimatedSection>
      <Component
        id={id}
        className={cn("group relative scroll-mt-24", className)}
        onMouseEnter={() => setShowLink(true)}
        onMouseLeave={() => setShowLink(false)}
        {...props}
      >
        {children}
        <button
          type="button"
          onClick={handleCopyLink}
          className={cn(
            "absolute -left-6 top-1/2 -translate-y-1/2 p-1 rounded opacity-0 transition-opacity",
            "hover:bg-muted group-hover:opacity-100",
            showLink && "opacity-100"
          )}
          aria-label="Copy link to heading"
        >
          <Link2 className="size-4 text-muted-foreground" />
        </button>
      </Component>
    </AnimatedSection>
  );
}

// Enhanced callout/alert component
type CalloutType = "info" | "warning" | "success" | "tip";

function Callout({
  type = "info",
  children,
}: {
  type?: CalloutType;
  children: React.ReactNode;
}) {
  const config = {
    info: {
      icon: Info,
      className: "border-blue-500/50 bg-blue-50/50 dark:bg-blue-950/20",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    warning: {
      icon: AlertTriangle,
      className: "border-yellow-500/50 bg-yellow-50/50 dark:bg-yellow-950/20",
      iconColor: "text-yellow-600 dark:text-yellow-400",
    },
    success: {
      icon: CheckCircle,
      className: "border-green-500/50 bg-green-50/50 dark:bg-green-950/20",
      iconColor: "text-green-600 dark:text-green-400",
    },
    tip: {
      icon: Lightbulb,
      className: "border-purple-500/50 bg-purple-50/50 dark:bg-purple-950/20",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
  };

  const { icon: Icon, className, iconColor } = config[type];

  return (
    <AnimatedSection>
      <div className={cn("my-6 rounded-lg border-l-4 p-4", className)}>
        <div className="flex gap-3 items-center">
          <Icon className={cn("size-5 shrink-0", iconColor)} />
          <div className="flex-1 [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 [&>p]:leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

// Reading progress indicator
function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-16 left-0 right-0 z-30 h-1 bg-muted/30">
      <div
        className="h-full bg-primary transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function CopyButton({
  onCopy,
  copied,
}: {
  onCopy: () => void;
  copied: boolean;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            onClick={onCopy}
            aria-label={copied ? "Copied" : "Copy to clipboard"}
            className="absolute right-2 top-2 z-10 flex h-7 w-7 items-center justify-center rounded-md border border-border bg-muted/70 p-1.5 text-foreground shadow-sm transition hover:bg-muted"
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
            <span className="sr-only">
              {copied ? "Copied" : "Copy to clipboard"}
            </span>
          </button>
        </TooltipTrigger>
        <TooltipContent side="left" align="center" className="text-xs">
          {copied ? "Copied!" : "Copy"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

function PreWithCopy({ children, ...props }: React.ComponentPropsWithoutRef<"pre">) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);
  const { resolvedTheme } = useTheme();

  const handleCopy = async (text?: string) => {
    try {
      const content = text ?? preRef.current?.textContent ?? "";
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // no-op
    }
  };

  // Check if it's a code block with language definition
  const childProps = (children as React.ReactElement<{ className?: string; children?: React.ReactNode }>)?.props;
  const className = childProps?.className || "";
  const isCodeBlock = className.includes("language-");

  if (isCodeBlock) {
    const language = className.replace("language-", "");
    const codeContent = String(childProps?.children || "").replace(/\n$/, '');
    
    return (
      <div className="mdx-pre-wrapper group relative mb-4 rounded-lg overflow-hidden border border-border bg-muted/30">
        <CopyButton onCopy={() => handleCopy(codeContent)} copied={copied} />
        <SyntaxHighlighter
          language={language}
          style={resolvedTheme === 'dark' ? vscDarkPlus : vs}
          customStyle={{ 
            margin: 0, 
            padding: '1rem', 
            fontSize: '0.875rem', 
            lineHeight: '1.5',
            background: 'transparent',
            backgroundColor: undefined
          }}
          wrapLongLines={true}
          PreTag="div"
        >
          {codeContent}
        </SyntaxHighlighter>
      </div>
    );
  }

  return (
    <div className="mdx-pre-wrapper group relative mb-4">
      <CopyButton onCopy={() => handleCopy()} copied={copied} />
      <pre ref={preRef} {...props}>{children}</pre>
    </div>
  );
}

const components = {
  h1: (props: React.ComponentPropsWithoutRef<"h1">) => (
    <HeadingWithAnchor
      level={1}
      className="text-4xl font-bold mb-6"
      {...props}
    />
  ),
  h2: (props: React.ComponentPropsWithoutRef<"h2">) => (
    <HeadingWithAnchor
      level={2}
      className="text-3xl font-bold mt-8 mb-4"
      {...props}
    />
  ),
  h3: (props: React.ComponentPropsWithoutRef<"h3">) => (
    <HeadingWithAnchor
      level={3}
      className="text-2xl font-semibold mt-6 mb-3"
      {...props}
    />
  ),
  h4: (props: React.ComponentPropsWithoutRef<"h4">) => (
    <HeadingWithAnchor
      level={4}
      className="text-xl font-semibold mt-4 mb-2"
      {...props}
    />
  ),
  p: (props: React.ComponentPropsWithoutRef<"p">) => (
    <AnimatedSection>
      <p className="mb-4 leading-relaxed" {...props} />
    </AnimatedSection>
  ),
  ul: (props: React.ComponentPropsWithoutRef<"ul">) => (
    <AnimatedSection>
      <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />
    </AnimatedSection>
  ),
  ol: (props: React.ComponentPropsWithoutRef<"ol">) => (
    <AnimatedSection>
      <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />
    </AnimatedSection>
  ),
  li: (props: React.ComponentPropsWithoutRef<"li">) => (
    <li className="leading-relaxed" {...props} />
  ),
  pre: (props: React.ComponentPropsWithoutRef<"pre">) => (
    <PreWithCopy {...props} />
  ),
  code: (props: React.ComponentPropsWithoutRef<"code">) => {
    // Check if it's inline code or code block
    if (props.className) {
      return <code className="text-sm" {...props} />;
    }
    return (
      <code
        className="bg-muted/60 dark:bg-muted/40 px-1.5 py-0.5 rounded text-sm font-mono border border-border/40"
        {...props}
      />
    );
  },
  blockquote: (props: React.ComponentPropsWithoutRef<"blockquote">) => (
    <AnimatedSection>
      <blockquote
        className="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground"
        {...props}
      />
    </AnimatedSection>
  ),
  strong: (props: React.ComponentPropsWithoutRef<"strong">) => (
    <strong
      className="font-semibold text-foreground relative inline-block group"
      {...props}
    >
      <span className="relative z-10">{props.children}</span>
      <span className="absolute inset-x-0 bottom-0 h-2 bg-primary/20 z-0 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
    </strong>
  ),
  img: (props: React.ComponentPropsWithoutRef<"img">) => (
    <AnimatedSection>
      <img
        className="rounded-lg my-6 max-w-full shadow-lg transition-transform duration-300 hover:scale-[1.02]"
        alt=""
        {...props}
      />
    </AnimatedSection>
  ),
  // Table components for proper styling
  table: (props: React.ComponentPropsWithoutRef<"table">) => (
    <div className="my-6 overflow-x-auto">
      <table
        className="w-full border-collapse border border-border"
        {...props}
      />
    </div>
  ),
  thead: (props: React.ComponentPropsWithoutRef<"thead">) => (
    <thead className="bg-muted" {...props} />
  ),
  tbody: (props: React.ComponentPropsWithoutRef<"tbody">) => (
    <tbody {...props} />
  ),
  tr: (props: React.ComponentPropsWithoutRef<"tr">) => (
    <tr className="border-b border-border" {...props} />
  ),
  th: (props: React.ComponentPropsWithoutRef<"th">) => (
    <th className="px-4 py-2 text-left font-semibold" {...props} />
  ),
  td: (props: React.ComponentPropsWithoutRef<"td">) => (
    <td className="px-4 py-2" {...props} />
  ),
  // Interactive learning components
  WordJumble,
  ConceptMatching,
  TimelineBuilder,
  TrueFalse,
  DragDropPuzzle,
  BlockchainExplainer,
  ConsensusVisualizer,
  ThroughputComparison,
  EcosystemIntegration,
  BlockExplorerMockup,
  HashGenerator,
  GasFeeCalculator,
  StackVisualizer,
  ContractLifecycleTimeline,
  GasCostComparison,
  MemoryLayoutVisualizer,
  ModifierExecutionFlow,
  EventFlowAnimator,
  MappingLookupVisualizer,
  FunctionVisibilityDiagram,
  StateMutabilityComparator,
  MappingStructVisualizer,
  StoragePackingVisualizer,
  InheritanceVisualizer,
  TimeLogicVisualizer,
  InteractionVisualizer,
  RevertVisualizer,
  NFTConceptVisualizer,
  ERC721TransferVisualizer,
  GasEfficiencyVisualizer,
  AccessControlVisualizer,
  DeploymentVisualizer,
  IPFSMetadataVisualizer,
  ContractStructureVisualizer,
  RevealMechanicsVisualizer,
  SwapFlowAnimation,
  OracleDataFlow,
  DelegateCallVisualizer,
  CommitRevealVisualizer,
  StorageCollisionVisualizer,
  ReentrancyAttackVisualizer,
  TransactionLifecycleVisualizer,
  Web3ArchitectureVisualizer,
  WalletConnectionVisualizer,
  AIArchitectureFlow,
  InferenceSpeedVisualizer,
  RPCCallVisualizer,
  InteractiveBip39Generator: Bip39SeedPhraseGenerator,

  LLMProcessAnimation,
  // Enhanced callout component for special content blocks
  Callout,
  // Glossary components
  Glossary,
  GlossaryTerm,
};

interface MDXContentProps {
  content: string;
}

export default function MDXContent({ content }: MDXContentProps) {
  const [mdxModule, setMdxModule] = useState<React.ComponentType | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const processMDX = async () => {
      try {
        // Compile the MDX content
        const compiled = await compile(content, {
          outputFormat: "function-body",
          development: false,
          providerImportSource: "@mdx-js/react",
          // Note: We could add remarkGfm here if needed, but it would need to be imported.
          // For now, sticking to basic configuration to ensure compatibility.
        });

        // Run the compiled code
        const { default: MDXContent } = await run(compiled, {
          ...runtime,
          baseUrl: import.meta.url,
          useMDXComponents: useMDXComponentsImpl,
        });

        setMdxModule(() => MDXContent);
      } catch (error) {
        console.error("Error processing MDX:", error);

        // Fallback error view
        const ErrorFallback = () => (
          <div className="p-4 border border-red-500/20 bg-red-500/10 rounded-lg">
            <h3 className="text-red-600 font-bold mb-2">
              Content Loading Error
            </h3>
            <p className="text-sm text-red-500/80">
              There was an error loading this content. Please try refreshing or
              contact support if the issue persists.
            </p>
            <pre className="mt-2 text-xs bg-black/10 p-2 rounded overflow-auto max-h-40">
              {String(error)}
            </pre>
          </div>
        );
        ErrorFallback.displayName = "MDXErrorFallback";

        setMdxModule(() => ErrorFallback);
      }
    };

    processMDX();
  }, [content]);

  // No fallback injection: MDX component mapping handles copy buttons to avoid duplicates

  if (!mdxModule) {
    return <div>Loading content...</div>;
  }

  const Component = mdxModule;

  return (
    <>
      <ReadingProgress />
      <MDXProvider components={components}>
        <div
          ref={containerRef}
          className="prose prose-gray dark:prose-invert max-w-none"
        >
          <Component />
        </div>
      </MDXProvider>
    </>
  );
}
