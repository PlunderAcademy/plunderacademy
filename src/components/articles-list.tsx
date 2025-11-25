"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import type { ArticleMeta } from "@/lib/mdx";

interface ArticlesListProps {
  articles: ArticleMeta[];
}

export function ArticlesList({ articles }: ArticlesListProps) {
  const searchParams = useSearchParams();
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isTagFiltersExpanded, setIsTagFiltersExpanded] = useState<boolean>(false);

  // Initialize tags from URL params
  useEffect(() => {
    const tagsParam = searchParams.get("tags");
    if (tagsParam) {
      const decodedTags = decodeURIComponent(tagsParam);
      setSelectedTags([decodedTags]);
      setIsTagFiltersExpanded(true); // Auto-expand when coming from a tag link
    }
  }, [searchParams]);

  // Get all unique tags from articles
  const allTags = Array.from(
    new Set(articles.flatMap((article) => article.tags))
  ).sort();

  // Filter articles based on level
  const byLevel = {
    all: articles,
    beginner: articles.filter((a) => a.level === "beginner"),
    intermediate: articles.filter((a) => a.level === "intermediate"),
    advanced: articles.filter((a) => a.level === "advanced"),
  };

  // Get current articles based on level filter
  const currentArticles = byLevel[selectedLevel as keyof typeof byLevel] || byLevel.all;

  // Filter by tags if any are selected
  const filteredArticles = selectedTags.length === 0
    ? currentArticles
    : currentArticles.filter((article) =>
        selectedTags.some((tag) => article.tags.includes(tag))
      );

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearTags = () => {
    setSelectedTags([]);
  };

  const renderList = (list: ArticleMeta[]) => (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {list.map((a) => (
        <li key={a.slug} className="rounded-xl border p-6">
          <Link href={`/articles/${a.slug}`} className="block space-y-3">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="capitalize">
                {a.level}
              </Badge>
              <div className="flex flex-wrap gap-1.5">
                {a.tags.map((t) => (
                  <Badge key={t} variant="outline" className="text-xs">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
            <h3 className="font-semibold tracking-tight">{a.title}</h3>
            <p className="text-sm text-muted-foreground">{a.excerpt}</p>
          </Link>
        </li>
      ))}
    </ul>
  );

  // Shared content for all tabs
  const renderTagFilters = () => (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsTagFiltersExpanded(!isTagFiltersExpanded)}
          className="h-7 px-2 text-xs font-medium"
        >
          Filter by tags
          {isTagFiltersExpanded ? (
            <ChevronUp className="ml-1 h-3 w-3" />
          ) : (
            <ChevronDown className="ml-1 h-3 w-3" />
          )}
        </Button>
        {selectedTags.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearTags}
            className="h-7 px-2 text-xs"
          >
            Clear all
            <X className="ml-1 h-3 w-3" />
          </Button>
        )}
      </div>
      {isTagFiltersExpanded && (
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => {
            const isSelected = selectedTags.includes(tag);
            return (
              <Button
                key={tag}
                variant={isSelected ? "default" : "outline"}
                size="sm"
                onClick={() => toggleTag(tag)}
                className="h-8 text-xs"
              >
                {tag}
              </Button>
            );
          })}
        </div>
      )}
    </div>
  );

  // Render content for a specific tab
  const renderTabContent = (level: string) => {
    const baseArticles = byLevel[level as keyof typeof byLevel];
    const countText = level === "all" 
      ? `${byLevel[level].length} articles`
      : level.charAt(0).toUpperCase() + level.slice(1);

    return (
      <div className="space-y-4">
        {/* Tag filter section */}
        {renderTagFilters()}

        {/* Results count */}
        {filteredArticles.length !== baseArticles.length && (
          <p className="text-sm text-muted-foreground">
            Showing {filteredArticles.length} of {baseArticles.length} {countText}
          </p>
        )}

        {/* Articles list */}
        {filteredArticles.length > 0 ? (
          renderList(filteredArticles)
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            No articles found matching your filters.
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Articles</h1>
        <p className="text-muted-foreground">
          Deep dives and concise guides for Zilliqa and the broader EVM.
        </p>
      </div>

      <Tabs defaultValue="all" value={selectedLevel} onValueChange={setSelectedLevel} className="w-full">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="beginner">Beginner</TabsTrigger>
          <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          {renderTabContent("all")}
        </TabsContent>

        <TabsContent value="beginner" className="mt-6">
          {renderTabContent("beginner")}
        </TabsContent>

        <TabsContent value="intermediate" className="mt-6">
          {renderTabContent("intermediate")}
        </TabsContent>

        <TabsContent value="advanced" className="mt-6">
          {renderTabContent("advanced")}
        </TabsContent>
      </Tabs>
    </div>
  );
}

