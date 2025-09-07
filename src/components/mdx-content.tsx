'use client';

import { MDXProvider } from '@mdx-js/react';
import { compile, run } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';
import { useEffect, useState } from 'react';

type MDXComponent = React.ComponentPropsWithoutRef<'div'>;

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
    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4" {...props} />
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
};

interface MDXContentProps {
  content: string;
}

export default function MDXContent({ content }: MDXContentProps) {
  const [mdxModule, setMdxModule] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    const processMDX = async () => {
      try {
        // Compile the MDX content
        const compiled = await compile(content, {
          outputFormat: 'function-body',
          development: false,
        });
        
        // Run the compiled code
        const { default: MDXContent } = await run(compiled, {
          ...runtime,
          baseUrl: import.meta.url,
        });
        
        setMdxModule(() => MDXContent);
      } catch (error) {
        console.error('Error processing MDX:', error);
      }
    };

    processMDX();
  }, [content]);

  if (!mdxModule) {
    return <div>Loading...</div>;
  }

  const Component = mdxModule;

  return (
    <MDXProvider components={components}>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <Component />
      </div>
    </MDXProvider>
  );
}