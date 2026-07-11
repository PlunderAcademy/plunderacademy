import { ChevronLeft, Zap } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { fetchModules } from "@/lib/content";
import { FutureExperience } from "@/components/island5/future-experience";

function NeonHavenPage() {
  const allModules = Route.useLoaderData();
  const neonModules = allModules.filter(m => m.island === 'neon');
  
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
          <Zap className="size-3" />
          Neon Haven
        </span>
      </div>

      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight mb-4 flex items-center justify-center gap-3">
          <Zap className="w-10 h-10 text-cyan-600" />
          Neon Haven
        </h1>
        <p className="text-lg text-muted-foreground">
          Enter the digital metropolis and connect smart contracts to web applications with {neonModules.length} essential modules
        </p>
      </div>

      <FutureExperience modules={neonModules} />
    </div>
  );
}

export const Route = createFileRoute("/lessons/island5/")({
  loader: () => fetchModules(),
  component: NeonHavenPage,
});
