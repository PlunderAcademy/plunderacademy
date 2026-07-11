import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/system-analytics")({
  component: SystemAnalyticsPage,
});

import { SystemAnalyticsDashboard } from "@/components/system-analytics-dashboard";

/**
 * System-wide analytics dashboard for platform administrators.
 * Access directly via /system-analytics (no menu link).
 */
function SystemAnalyticsPage() {
  return (
    <div className="container max-w-7xl mx-auto py-8 px-4">
      <SystemAnalyticsDashboard />
    </div>
  );
}

