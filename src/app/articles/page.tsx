import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { articles as allArticles } from "@/data/articles";

export default function ArticlesPage() {
  const byLevel = {
    beginner: allArticles.filter((a) => a.level === "beginner"),
    intermediate: allArticles.filter((a) => a.level === "intermediate"),
    advanced: allArticles.filter((a) => a.level === "advanced"),
  } as const;

  const renderList = (list: typeof allArticles) => (
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

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Articles</h1>
        <p className="text-muted-foreground">
          Deep dives and concise guides for Zilliqa and the broader EVM.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="beginner">Beginner</TabsTrigger>
          <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>
        <TabsContent value="all">{renderList(allArticles)}</TabsContent>
        <TabsContent value="beginner">
          {renderList(byLevel.beginner)}
        </TabsContent>
        <TabsContent value="intermediate">
          {renderList(byLevel.intermediate)}
        </TabsContent>
        <TabsContent value="advanced">
          {renderList(byLevel.advanced)}
        </TabsContent>
      </Tabs>
    </div>
  );
}
