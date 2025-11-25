import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { getGlossaryBySlug, getGlossaries } from "@/lib/mdx";
import MDXContent from "@/components/mdx-content";
import type { Metadata } from "next";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const glossaries = await getGlossaries();
  return glossaries.map((glossary) => ({
    slug: glossary.slug,
  }));
}

export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await props.params;
  try {
    const { meta } = await getGlossaryBySlug(slug);
    return { title: meta.title };
  } catch {
    return { title: "Glossary" };
  }
}

export default async function GlossaryDetailPage(props: { params: Params }) {
  const { slug } = await props.params;
  
  try {
    const { meta, content } = await getGlossaryBySlug(slug);
    
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
            href="/glossary"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to all glossaries
          </Link>
        </div>
      </article>
    );
  } catch (error) {
    console.error('Error loading glossary:', error);
    return notFound();
  }
}

