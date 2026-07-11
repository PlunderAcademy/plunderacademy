import { ChevronLeft, Mountain } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { fetchModules } from "@/lib/content";
import { DesertExperience } from "@/components/island3/desert-experience";

function DesertBluffPage() {
  const allModules = Route.useLoaderData();
  const desertModules = allModules.filter(m => m.island === 'desert');
  
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
          <Mountain className="size-3" />
          Desert Bluff
        </span>
      </div>

      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight mb-4 flex items-center justify-center gap-3">
          <Mountain className="w-10 h-10 text-orange-600" />
          Desert Bluff
        </h1>
        <p className="text-lg text-muted-foreground">
          Navigate the vast dunes of NFT creation and token launches with {desertModules.length} focused modules
        </p>
      </div>

      <DesertExperience modules={desertModules} />
    </div>
  );
}

export const Route = createFileRoute("/lessons/island3/")({
  loader: () => fetchModules(),
  component: DesertBluffPage,
});
