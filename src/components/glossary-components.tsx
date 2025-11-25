'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface GlossaryTermProps {
  term: string;
  children: React.ReactNode;
}

export function GlossaryTerm({ term, children }: GlossaryTermProps) {
  return (
    <div className="glossary-term mb-6 scroll-mt-24" id={`term-${term.toLowerCase().replace(/\s+/g, '-')}`}>
      <dt className="text-lg font-semibold mb-2 text-foreground">{term}</dt>
      <dd className="text-muted-foreground leading-relaxed ml-0">{children}</dd>
    </div>
  );
}

interface GlossaryProps {
  children: React.ReactNode;
}

export function Glossary({ children }: GlossaryProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState<string>('');
  const contentRef = useRef<HTMLDivElement>(null);

  // Extract terms from children
  const terms = useMemo(() => {
    const extractedTerms: Array<{ letter: string; term: string; definition: React.ReactNode; element: React.ReactElement }> = [];
    
    const processChild = (child: React.ReactNode) => {
      if (
        child && 
        typeof child === 'object' && 
        'type' in child && 
        child.type === GlossaryTerm &&
        'props' in child
      ) {
        const term = (child.props as GlossaryTermProps).term;
        const firstLetter = term[0].toUpperCase();
        extractedTerms.push({
          letter: firstLetter,
          term,
          definition: (child.props as GlossaryTermProps).children,
          element: child as React.ReactElement,
        });
      }
    };

    if (Array.isArray(children)) {
      children.forEach(processChild);
    } else {
      processChild(children);
    }

    return extractedTerms;
  }, [children]);

  // Filter terms based on search
  const filteredTerms = useMemo(() => {
    if (!searchTerm) return terms;
    
    const lowerSearch = searchTerm.toLowerCase();
    return terms.filter(({ term, definition }) => {
      const termMatch = term.toLowerCase().includes(lowerSearch);
      const defMatch = typeof definition === 'string' 
        ? definition.toLowerCase().includes(lowerSearch)
        : false;
      return termMatch || defMatch;
    });
  }, [terms, searchTerm]);

  // Group filtered terms by letter
  const groupedTerms = useMemo(() => {
    const groups: Record<string, typeof filteredTerms> = {};
    filteredTerms.forEach(item => {
      if (!groups[item.letter]) {
        groups[item.letter] = [];
      }
      groups[item.letter].push(item);
    });
    return groups;
  }, [filteredTerms]);

  const availableLetters = Object.keys(groupedTerms).sort();
  const allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const scrollToLetter = (letter: string) => {
    const element = document.getElementById(`section-${letter.toLowerCase()}`);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
      setActiveSection(letter);
    }
  };

  // Intersection observer to track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const letter = entry.target.getAttribute('data-letter');
            if (letter) {
              setActiveSection(letter);
            }
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    const sections = contentRef.current?.querySelectorAll('[data-letter]');
    sections?.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [groupedTerms]);

  return (
    <div className="glossary-container">
      {/* Search Input */}
      <div className="mb-8 sticky top-16 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4 -mx-4 px-4 border-b">
        <div className="relative max-w-xl">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search terms or definitions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        {searchTerm && (
          <p className="mt-2 text-sm text-muted-foreground">
            Found {filteredTerms.length} term{filteredTerms.length !== 1 ? 's' : ''}
          </p>
        )}
      </div>

      {/* Quick Jump Navigation */}
      {!searchTerm && (
        <nav className="mb-8 pb-6 border-b" aria-label="Quick navigation">
          <p className="text-sm font-medium mb-3 text-muted-foreground">Quick Jump:</p>
          <div className="flex flex-wrap gap-2">
            {allLetters.map((letter) => {
              const isAvailable = availableLetters.includes(letter);
              const isActive = activeSection === letter;
              return (
                <button
                  key={letter}
                  onClick={() => isAvailable && scrollToLetter(letter)}
                  disabled={!isAvailable}
                  className={`
                    w-8 h-8 rounded text-sm font-medium transition-all
                    ${isAvailable 
                      ? isActive
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'bg-muted hover:bg-muted/80 text-foreground hover:shadow-sm'
                      : 'bg-transparent text-muted-foreground/30 cursor-not-allowed'
                    }
                  `}
                  aria-label={isAvailable ? `Jump to ${letter}` : `No terms starting with ${letter}`}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </nav>
      )}

      {/* Terms List */}
      <div ref={contentRef}>
        {availableLetters.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            No terms found matching &quot;{searchTerm}&quot;
          </div>
        ) : (
          <dl className="space-y-8">
            {availableLetters.map((letter) => (
              <section 
                key={letter} 
                id={`section-${letter.toLowerCase()}`}
                data-letter={letter}
                className="scroll-mt-32"
              >
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b sticky top-32 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-[5]">
                  {letter}
                </h2>
                <div className="space-y-6">
                  {groupedTerms[letter].map((item, idx) => (
                    <div key={`${letter}-${idx}`}>
                      {item.element}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </dl>
        )}
      </div>
    </div>
  );
}

