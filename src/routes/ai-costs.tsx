import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ai-costs")({
  component: AICostsPage,
});

import { AICostsDashboard } from "@/components/ai-costs-dashboard";

function AICostsPage() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl">
      <AICostsDashboard />
    </div>
  );
}

