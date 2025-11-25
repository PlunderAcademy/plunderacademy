import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticleBySlug, getArticles } from "@/lib/mdx";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import MDXContent from "@/components/mdx-content";

type Params = Promise<{ slug: string }>; // satisfy RSC async params in Next 15

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await props.params;
  try {
    const { meta } = await getArticleBySlug(slug);
    return { title: meta.title };
  } catch {
    return { title: "Article" };
  }
}

export default async function ArticlePage(props: { params: Params }) {
  const { slug } = await props.params;
  
  try {
    const { meta, content } = await getArticleBySlug(slug);
    
    return (
      <article className="prose dark:prose-invert max-w-none">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <Badge variant="secondary" className="capitalize">
            {meta.level}
          </Badge>
          {meta.tags.map((t: string) => (
            <Link key={t} href={`/articles?tags=${encodeURIComponent(t)}`}>
              <Badge variant="outline" className="text-xs cursor-pointer hover:bg-accent transition-colors">
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
  } catch (error) {
    console.error('Error loading article:', error);
    return notFound();
  }
}
