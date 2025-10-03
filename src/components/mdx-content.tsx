'use client';

import { MDXProvider, useMDXComponents as useMDXComponentsImpl } from '@mdx-js/react';
import { Copy, Check } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { compile, run } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';
import { useEffect, useRef, useState } from 'react';
import { WordJumble, ConceptMatching, TimelineBuilder, TrueFalse, DragDropPuzzle } from '@/components/interactive-elements/mdx-components';

type MDXComponent = React.ComponentPropsWithoutRef<'div'>;

function CopyButton({ onCopy, copied }: { onCopy: () => void; copied: boolean }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            onClick={onCopy}
            aria-label={copied ? 'Copied' : 'Copy to clipboard'}
            className="absolute right-2 top-2 z-10 flex h-7 w-7 items-center justify-center rounded-md border border-border bg-muted/70 p-1.5 text-foreground shadow-sm transition hover:bg-muted"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            <span className="sr-only">{copied ? 'Copied' : 'Copy to clipboard'}</span>
          </button>
        </TooltipTrigger>
        <TooltipContent side="left" align="center" className="text-xs">
          {copied ? 'Copied!' : 'Copy'}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

function PreWithCopy(props: React.ComponentPropsWithoutRef<'pre'>) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const text = preRef.current?.textContent ?? '';
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      // no-op
    }
  };

  return (
    <div className="mdx-pre-wrapper group relative mb-4">
      <CopyButton onCopy={handleCopy} copied={copied} />
      <pre ref={preRef} {...props} />
    </div>
  );
}

const components = {
  h1: (props: React.ComponentPropsWithoutRef<'h1'>) => <h1 className="text-4xl font-bold mb-6" {...props} />,
  h2: (props: React.ComponentPropsWithoutRef<'h2'>) => <h2 className="text-3xl font-bold mt-8 mb-4" {...props} />,
  h3: (props: React.ComponentPropsWithoutRef<'h3'>) => <h3 className="text-2xl font-semibold mt-6 mb-3" {...props} />,
  h4: (props: React.ComponentPropsWithoutRef<'h4'>) => <h4 className="text-xl font-semibold mt-4 mb-2" {...props} />,
  p: (props: React.ComponentPropsWithoutRef<'p'>) => <p className="mb-4 leading-relaxed" {...props} />,
  ul: (props: React.ComponentPropsWithoutRef<'ul'>) => <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />,
  ol: (props: React.ComponentPropsWithoutRef<'ol'>) => <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />,
  li: (props: React.ComponentPropsWithoutRef<'li'>) => <li className="leading-relaxed" {...props} />,
  pre: (props: React.ComponentPropsWithoutRef<'pre'>) => (
    <PreWithCopy {...props} />
  ),
  code: (props: React.ComponentPropsWithoutRef<'code'>) => {
    // Check if it's inline code or code block
    if (props.className) {
      return <code {...props} />;
    }
    return <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm" {...props} />;
  },
  blockquote: (props: React.ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote className="border-l-4 border-primary pl-4 italic my-4" {...props} />
  ),
  strong: (props: React.ComponentPropsWithoutRef<'strong'>) => <strong className="font-semibold" {...props} />,
  img: (props: React.ComponentPropsWithoutRef<'img'>) => (
    <img className="rounded-lg my-6 max-w-full" alt="" {...props} />
  ),
  // Interactive learning components
  WordJumble,
  ConceptMatching,
  TimelineBuilder,
  TrueFalse,
  DragDropPuzzle,
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
          outputFormat: 'function-body',
          development: false,
          providerImportSource: '@mdx-js/react',
        });
        
        // Run the compiled code
        const { default: MDXContent } = await run(compiled, {
          ...runtime,
          baseUrl: import.meta.url,
          useMDXComponents: useMDXComponentsImpl,
        });
        
        setMdxModule(() => MDXContent);
      } catch (error) {
        console.error('Error processing MDX:', error);
      }
    };

    processMDX();
  }, [content]);

  // No fallback injection: MDX component mapping handles copy buttons to avoid duplicates

  if (!mdxModule) {
    return <div>Loading...</div>;
  }

  const Component = mdxModule;

  return (
    <MDXProvider components={components}>
      <div ref={containerRef} className="prose prose-gray dark:prose-invert max-w-none">
        <Component />
      </div>
    </MDXProvider>
  );
}