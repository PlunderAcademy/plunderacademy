import { ChevronLeft, Mountain } from "lucide-react";
import Link from "next/link";
import { getModules } from "@/lib/mdx";
import { DesertAnimatedMap } from "@/components/island2/animated-map";

export default async function DesertPage() {
  const allModules = await getModules();
  const desertModules = allModules.filter(m => m.island === 'desert');
  
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
          <Mountain className="size-3" />
          Desert Island
        </span>
      </div>

      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight mb-4 flex items-center justify-center gap-3">
          🏜️ Desert Island
        </h1>
        <p className="text-lg text-muted-foreground">
          Master advanced Solidity concepts with {desertModules.length} comprehensive modules
        </p>
        <div className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-700 dark:text-orange-300">
          Coming Soon in Milestone 2
        </div>
      </div>
      
      {/* Interactive Desert Map */}
      <DesertAnimatedMap mode="real" modules={desertModules} />

      {/* Module Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {desertModules.map((module, index) => (
          <Link key={module.slug} href={`/lessons/island2/${module.slug}`}>
            <div className="p-6 bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-950/50 transition-all duration-200 hover:scale-[1.02] cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-orange-200 dark:bg-orange-800 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-orange-800 dark:text-orange-200">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-orange-900 dark:text-orange-100">{module.title}</h3>
              </div>
              <p className="text-sm text-orange-700 dark:text-orange-300 mb-3">{module.description}</p>
              <div className="text-xs text-orange-600 dark:text-orange-400 font-medium">
                Click to preview module →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
