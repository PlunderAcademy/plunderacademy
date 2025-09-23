import { ChevronLeft, Crown } from "lucide-react";
import Link from "next/link";
import { getModules } from "@/lib/mdx";

export default async function GildedBastionPage() {
  const allModules = await getModules();
  const bastionModules = allModules.filter(m => m.island === 'mushroom');
  
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
          <Crown className="size-3" />
          Gilded Bastion
        </span>
      </div>

      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight mb-4 flex items-center justify-center gap-3">
          🏰 Gilded Bastion
        </h1>
        <p className="text-lg text-muted-foreground">
          Discover the treasures of DeFi protocols and advanced blockchain systems with {bastionModules.length} comprehensive modules
        </p>
        <div className="inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-700 dark:text-yellow-300">
          Coming Soon in Milestone 2
        </div>
      </div>
      
      {/* Placeholder Map */}
      <div className="w-full max-w-4xl mx-auto">
        <div className="aspect-video bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-yellow-950/50 dark:to-amber-950/50 rounded-xl border-2 border-dashed border-yellow-300 dark:border-yellow-700 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="text-6xl opacity-60">🏰</div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-yellow-800 dark:text-yellow-200">
                Treasure Vault Map Coming Soon
              </h3>
              <p className="text-yellow-600 dark:text-yellow-400 max-w-md">
                Interactive map with {bastionModules.length} modules covering DeFi treasures, oracles, upgradeability, and advanced patterns
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Module Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bastionModules.map((module, index) => (
          <Link key={module.slug} href={`/lessons/island4/${module.slug}`}>
            <div className="p-6 bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg hover:bg-yellow-100 dark:hover:bg-yellow-950/50 transition-all duration-200 hover:scale-[1.02] cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-yellow-200 dark:bg-yellow-800 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-yellow-800 dark:text-yellow-200">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-yellow-900 dark:text-yellow-100">{module.title}</h3>
              </div>
              <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-3">{module.description}</p>
              <div className="text-xs text-yellow-600 dark:text-yellow-400 font-medium">
                Click to preview module →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
