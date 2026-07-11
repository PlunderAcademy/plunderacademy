import { JungleExperience } from "@/components/island1/jungle-experience";
import { TreePine, ChevronLeft } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { fetchModules } from "@/lib/content";

function JunglePage() {
  const allModules = Route.useLoaderData();
  const jungleModules = allModules.filter(m => m.island === 'jungle');
  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground">
          Home
        </Link>
        <ChevronLeft className="size-4 rotate-180" />
        <Link to="/lessons" className="hover:text-foreground">
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
          Navigate through {jungleModules.length} modules to master blockchain development
        </p>
      </div>

      <JungleExperience modules={jungleModules} />
    </div>
  );
}

export const Route = createFileRoute("/lessons/island1/")({
  loader: () => fetchModules(),
  component: JunglePage,
});
