import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles as allArticles } from "@/data/articles";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

type Params = Promise<{ slug: string }>; // satisfy RSC async params in Next 15

export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const article = allArticles.find((a) => a.slug === slug);
  if (!article) return { title: "Article" };
  return { title: article.title };
}

export default async function ArticlePage(props: { params: Params }) {
  const { slug } = await props.params;
  const article = allArticles.find((a) => a.slug === slug);
  if (!article) return notFound();
  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Badge variant="secondary" className="capitalize">
          {article.level}
        </Badge>
        {article.tags.map((t) => (
          <Badge key={t} variant="outline" className="text-xs">
            {t}
          </Badge>
        ))}
      </div>
      <h1>{article.title}</h1>
      {article.hero ? (
        <Image
          src={article.hero}
          alt="Article illustration"
          width={1200}
          height={800}
          className="rounded-lg border"
        />
      ) : null}
      <div dangerouslySetInnerHTML={{ __html: article.contentHtml }} />
    </article>
  );
}
