"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ArticleMeta } from "@/lib/mdx";

interface GlossariesListProps {
  glossaries: ArticleMeta[];
}

export function GlossariesList({ glossaries }: GlossariesListProps) {
  const renderList = (list: ArticleMeta[]) =>
    list.length > 0 ? (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((glossary) => (
          <Link key={glossary.slug} href={`/glossary/${glossary.slug}`}>
            <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <CardTitle className="text-xl line-clamp-2">
                    {glossary.title}
                  </CardTitle>
                  <Badge variant="secondary" className="capitalize shrink-0">
                    {glossary.level}
                  </Badge>
                </div>
                <CardDescription className="line-clamp-3">
                  {glossary.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {glossary.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {glossary.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{glossary.tags.length - 3} more
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    ) : (
      <p className="text-center text-muted-foreground py-8">
        No glossaries found.
      </p>
    );

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Glossary</h1>
        <p className="text-muted-foreground">
          Comprehensive terminology references for each island. Learn the vocabulary of blockchain, EVM, Solidity, NFTs, DeFi, and Web3 development.
        </p>
      </div>

      <div className="space-y-4">
        {renderList(glossaries)}
      </div>
    </div>
  );
}

