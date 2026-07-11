import { createFileRoute } from "@tanstack/react-router";
import { fetchArticles } from "@/lib/content";
import { ArticlesList } from "@/components/articles-list";

export const Route = createFileRoute("/articles/")({
  loader: () => fetchArticles(),
  component: ArticlesPage,
});

function ArticlesPage() {
  const allArticles = Route.useLoaderData();

  return <ArticlesList articles={allArticles} />;
}
