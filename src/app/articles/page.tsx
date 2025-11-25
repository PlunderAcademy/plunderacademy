import { Suspense } from "react";
import { getArticles } from "@/lib/mdx";
import { ArticlesList } from "@/components/articles-list";

export default async function ArticlesPage() {
  const allArticles = await getArticles();

  return (
    <Suspense fallback={<div className="flex items-center justify-center h-64">Loading articles...</div>}>
      <ArticlesList articles={allArticles} />
    </Suspense>
  );
}
