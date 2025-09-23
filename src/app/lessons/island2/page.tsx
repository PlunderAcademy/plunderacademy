import { ChevronLeft, Snowflake } from "lucide-react";
import Link from "next/link";
import { getModules } from "@/lib/mdx";
import { FrostAnimatedMap } from "@/components/island2/animated-map";

export default async function FrostPeakPage() {
  const allModules = await getModules();
  const frostModules = allModules.filter(m => m.island === 'desert');
  
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
          <Snowflake className="size-3" />
          Frost Peak
        </span>
      </div>

      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight mb-4 flex items-center justify-center gap-3">
          ❄️ Frost Peak
        </h1>
        <p className="text-lg text-muted-foreground">
          Scale the heights of advanced Solidity development with {frostModules.length} comprehensive modules
        </p>
        <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-700 dark:text-blue-300">
          Coming Soon in Milestone 2
        </div>
      </div>
      
      {/* Interactive Frost Peak Map */}
      <FrostAnimatedMap mode="real" modules={frostModules} />

      {/* Module Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {frostModules.map((module, index) => (
          <Link key={module.slug} href={`/lessons/island2/${module.slug}`}>
            <div className="p-6 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-950/50 transition-all duration-200 hover:scale-[1.02] cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-200 dark:bg-blue-800 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-blue-800 dark:text-blue-200">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-blue-900 dark:text-blue-100">{module.title}</h3>
              </div>
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">{module.description}</p>
              <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                Click to preview module →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
