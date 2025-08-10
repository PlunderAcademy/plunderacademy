import Link from "next/link";

const articles = [
  {
    slug: "evm-storage-layout",
    title: "EVM Storage Layout Explained",
    excerpt: "How Solidity maps state variables to storage slots, with diagrams and examples.",
  },
  {
    slug: "gas-optimizations",
    title: "Practical Gas Optimizations",
    excerpt: "Real-world micro-optimizations that actually matter in 2025.",
  },
  {
    slug: "foundry-testing",
    title: "Testing Smart Contracts with Foundry",
    excerpt: "Patterns for unit, fuzz, and invariant tests that catch critical bugs.",
  },
];

export default function ArticlesPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Articles</h1>
        <p className="text-muted-foreground">Deep dives and concise guides for EVM developers.</p>
      </div>
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {articles.map((a) => (
          <li key={a.slug} className="rounded-xl border p-6">
            <Link href={`/articles/${a.slug}`} className="block space-y-2">
              <h3 className="font-semibold tracking-tight">{a.title}</h3>
              <p className="text-sm text-muted-foreground">{a.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


