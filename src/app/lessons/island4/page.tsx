import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { getModules } from "@/lib/mdx";

export default async function MushroomPage() {
  const allModules = await getModules();
  const mushroomModules = allModules.filter(m => m.island === 'mushroom');
  
  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <ChevronLeft className="size-4 rotate-180" />
        <Link href="/lessons" className="hover:text-foreground">
          Lessons
        </Link>
        <ChevronLeft className="size-4 rotate-180" />
        <span className="text-foreground flex items-center gap-1">
          🍄 Mushroom Island
        </span>
      </div>

      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight mb-4 flex items-center justify-center gap-3">
          🍄 Mushroom Island
        </h1>
        <p className="text-lg text-muted-foreground">
          Explore DeFi protocols and advanced blockchain systems with {mushroomModules.length} comprehensive modules
        </p>
        <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-700 dark:text-purple-300">
          Coming Soon in Milestone 2
        </div>
      </div>
      
      {/* Placeholder Map */}
      <div className="w-full max-w-4xl mx-auto">
        <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-950/50 dark:to-pink-950/50 rounded-xl border-2 border-dashed border-purple-300 dark:border-purple-700 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="text-6xl opacity-60">🍄</div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-200">
                On-Chain Systems Map Coming Soon
              </h3>
              <p className="text-purple-600 dark:text-purple-400 max-w-md">
                Interactive map with {mushroomModules.length} modules covering DeFi, oracles, upgradeability, and advanced patterns
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Module Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mushroomModules.map((module, index) => (
          <Link key={module.slug} href={`/lessons/island4/${module.slug}`}>
            <div className="p-6 bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-950/50 transition-all duration-200 hover:scale-[1.02] cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-purple-200 dark:bg-purple-800 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-purple-800 dark:text-purple-200">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-purple-900 dark:text-purple-100">{module.title}</h3>
              </div>
              <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">{module.description}</p>
              <div className="text-xs text-purple-600 dark:text-purple-400 font-medium">
                Click to preview module →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
