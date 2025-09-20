import { AnimatedMap } from "@/components/island1/animated-map";
import { TreePine, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { getModules } from "@/lib/mdx";

export default async function JunglePage() {
  const allModules = await getModules();
  const jungleModules = allModules.filter(m => m.island === 'jungle');
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
          <TreePine className="size-3" />
          Jungle Island
        </span>
      </div>

      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight mb-4 flex items-center justify-center gap-3">
          <TreePine className="w-10 h-10 text-green-600" />
          Jungle Island
        </h1>
        <p className="text-lg text-muted-foreground">
          Navigate through 5 modules to master blockchain development
        </p>
      </div>
      
      {/* Interactive jungle map - numbers will link to modules */}
      <AnimatedMap mode="real" modules={jungleModules} />
    </div>
  );
}
