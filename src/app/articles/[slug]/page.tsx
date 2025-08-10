import type { Metadata } from "next";
import { notFound } from "next/navigation";

const articles: Record<string, { title: string; content: string }> = {
  "evm-storage-layout": {
    title: "EVM Storage Layout Explained",
    content:
      "Storage slots, packing, and how mappings/arrays are laid out. Replace with MDX later.",
  },
  "gas-optimizations": {
    title: "Practical Gas Optimizations",
    content: "Tactics and tradeoffs. Replace with MDX later.",
  },
  "foundry-testing": {
    title: "Testing Smart Contracts with Foundry",
    content: "Fuzzing, invariants, and helpful patterns. Replace with MDX later.
    ",
  },
};

type Params = Promise<{ slug: string }>; // satisfy RSC async params in Next 15

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
  const { slug } = await props.params;
  const article = articles[slug];
  if (!article) return { title: "Article" };
  return { title: article.title };
}

export default async function ArticlePage(props: { params: Params }) {
  const { slug } = await props.params;
  const article = articles[slug];
  if (!article) return notFound();
  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </article>
  );
}


