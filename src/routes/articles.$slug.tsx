import { Link, createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { fetchArticleBySlug } from "@/lib/content";
import Image from "@/components/image";
import { Badge } from "@/components/ui/badge";
import MDXContent from "@/components/mdx-content";

export const Route = createFileRoute("/articles/$slug")({
  loader: async ({ params }) => {
    // Redirect glossary pages to the /glossary route
    const glossarySlugs = [
      "island1-glossary",
      "island2-glossary",
      "island3-glossary",
      "island4-glossary",
      "island5-glossary",
      "blockchain-glossary",
    ];
    if (glossarySlugs.includes(params.slug)) {
      // Handle legacy blockchain-glossary redirect
      const targetSlug =
        params.slug === "blockchain-glossary" ? "island1-glossary" : params.slug;
      throw redirect({ to: "/glossary/$slug", params: { slug: targetSlug } });
    }

    try {
      return await fetchArticleBySlug({ data: params.slug });
    } catch (error) {
      console.error("Error loading article:", error);
      throw notFound();
    }
  },
  component: ArticlePage,
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.meta.title ?? "Article"} • Plunder Academy` }],
  }),
});

function ArticlePage() {
  const { meta, content } = Route.useLoaderData();

  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Badge variant="secondary" className="capitalize">
          {meta.level}
        </Badge>
        {meta.tags.map((t: string) => (
          <Link key={t} to="/articles" search={{ tags: t }}>
            <Badge
              variant="outline"
              className="text-xs cursor-pointer hover:bg-accent transition-colors"
            >
              {t}
            </Badge>
          </Link>
        ))}
      </div>
      <h1>{meta.title}</h1>
      {meta.hero ? (
        <Image
          src={meta.hero}
          alt="Article illustration"
          width={1200}
          height={800}
          className="rounded-lg border"
        />
      ) : null}
      <MDXContent content={content} />
    </article>
  );
}
