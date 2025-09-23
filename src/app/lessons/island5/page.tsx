import { ChevronLeft, Zap } from "lucide-react";
import Link from "next/link";
import { getModules } from "@/lib/mdx";

export default async function NeonHavenPage() {
  const allModules = await getModules();
  const neonModules = allModules.filter(m => m.island === 'volcano');
  
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
          <Zap className="size-3" />
          Neon Haven
        </span>
      </div>

      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight mb-4 flex items-center justify-center gap-3">
          🌃 Neon Haven
        </h1>
        <p className="text-lg text-muted-foreground">
          Enter the digital metropolis and connect smart contracts to web applications with {neonModules.length} essential modules
        </p>
        <div className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-700 dark:text-cyan-300">
          Coming Soon in Milestone 2
        </div>
      </div>
      
      {/* Placeholder Map */}
      <div className="w-full max-w-4xl mx-auto">
        <div className="aspect-video bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-950/50 dark:to-blue-950/50 rounded-xl border-2 border-dashed border-cyan-300 dark:border-cyan-700 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="text-6xl opacity-60">🌃</div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-cyan-800 dark:text-cyan-200">
                Digital Interface Map Coming Soon
              </h3>
              <p className="text-cyan-600 dark:text-cyan-400 max-w-md">
                Interactive map with {neonModules.length} modules covering Web3 libraries, wallet connections, and dApp interfaces
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Module Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {neonModules.map((module, index) => (
          <Link key={module.slug} href={`/lessons/island5/${module.slug}`}>
            <div className="p-6 bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800 rounded-lg hover:bg-cyan-100 dark:hover:bg-cyan-950/50 transition-all duration-200 hover:scale-[1.02] cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-cyan-200 dark:bg-cyan-800 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-cyan-800 dark:text-cyan-200">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-cyan-900 dark:text-cyan-100">{module.title}</h3>
              </div>
              <p className="text-sm text-cyan-700 dark:text-cyan-300 mb-3">{module.description}</p>
              <div className="text-xs text-cyan-600 dark:text-cyan-400 font-medium">
                Click to preview module →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
