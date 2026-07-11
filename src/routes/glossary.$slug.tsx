import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { fetchGlossaryBySlug } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import MDXContent from "@/components/mdx-content";

export const Route = createFileRoute("/glossary/$slug")({
  loader: async ({ params }) => {
    try {
      return await fetchGlossaryBySlug({ data: params.slug });
    } catch (error) {
      console.error("Error loading glossary:", error);
      throw notFound();
    }
  },
  component: GlossaryDetailPage,
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.meta.title ?? "Glossary"} • Plunder Academy` }],
  }),
});

function GlossaryDetailPage() {
  const { meta, content } = Route.useLoaderData();

  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Badge variant="secondary" className="capitalize">
          {meta.level}
        </Badge>
        {meta.tags.map((t: string) => (
          <Badge key={t} variant="outline" className="text-xs">
            {t}
          </Badge>
        ))}
      </div>
      <h1>{meta.title}</h1>
      <MDXContent content={content} />

      <div className="mt-12 pt-6 border-t">
        <Link
          to="/glossary"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to all glossaries
        </Link>
      </div>
    </article>
  );
}
