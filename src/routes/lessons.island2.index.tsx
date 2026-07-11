import { ChevronLeft, Snowflake } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { fetchModules } from "@/lib/content";
import { FrostExperience } from "@/components/island2/frost-experience";

function FrostPeakPage() {
  const allModules = Route.useLoaderData();
  const frostModules = allModules.filter(m => m.island === 'frost');
  
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
          <Snowflake className="size-3" />
          Frost Peak
        </span>
      </div>

      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight mb-4 flex items-center justify-center gap-3">
          <Snowflake className="w-10 h-10 text-blue-600" />
          Frost Peak
        </h1>
        <p className="text-lg text-muted-foreground">
          Scale the heights of advanced Solidity development with {frostModules.length} comprehensive modules
        </p>
      </div>

      <FrostExperience modules={frostModules} />
    </div>
  );
}

export const Route = createFileRoute("/lessons/island2/")({
  loader: () => fetchModules(),
  component: FrostPeakPage,
});
