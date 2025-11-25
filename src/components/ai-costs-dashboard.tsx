"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  DollarSign,
  TrendingUp,
  Zap,
  Clock,
  Activity,
  Shield,
  MessageSquare,
  BarChart3,
} from "lucide-react";
import {
  getAICosts,
  type AICostsAnalytics,
} from "@/lib/ai-costs-api";

/**
 * AI costs dashboard for platform administrators.
 * Shows token usage and cost analytics for AI tools.
 */
export function AICostsDashboard() {
  const [analytics, setAnalytics] = React.useState<AICostsAnalytics | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [timeframe, setTimeframe] = React.useState("7d");

  React.useEffect(() => {
    let mounted = true;

    getAICosts(timeframe).then((data) => {
      if (mounted) {
        setAnalytics(data);
        setIsLoading(false);
      }
    });

    return () => {
      mounted = false;
    };
  }, [timeframe]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading AI costs data...</p>
        </div>
      </div>
    );
  }

  if (!analytics) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>AI Costs Analytics</CardTitle>
          <CardDescription>
            Unable to load AI costs data. Please ensure the backend API is configured.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const { overall, byToolType, pricing, period } = analytics;

  const StatCard = ({
    icon: Icon,
    title,
    value,
    description,
    trend,
    color = "primary",
  }: {
    icon: React.ElementType;
    title: string;
    value: string | number;
    description?: string;
    trend?: string;
    color?: string;
  }) => (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center gap-4">
          <div className={`p-3 bg-${color}/10 rounded-lg`}>
            <Icon className={`size-6 text-${color}`} />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-bold">{value}</p>
              {trend && (
                <span className="text-xs text-green-600 font-medium">
                  {trend}
                </span>
              )}
            </div>
            {description && (
              <p className="text-xs text-muted-foreground mt-1">{description}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const formatCost = (cost: number) => `$${cost.toFixed(4)}`;
  const formatTokens = (tokens: number) => {
    if (tokens >= 1000000) {
      return `${(tokens / 1000000).toFixed(2)}M`;
    }
    if (tokens >= 1000) {
      return `${(tokens / 1000).toFixed(1)}K`;
    }
    return tokens.toLocaleString();
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI Costs Analytics</h1>
          <p className="text-muted-foreground">
            Token usage and cost breakdowns for AI tools
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {new Date(period.startDate).toLocaleDateString()} -{" "}
            {new Date(period.endDate).toLocaleDateString()}
          </p>
        </div>
        <div className="flex gap-2">
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="px-3 py-2 border rounded-md bg-background"
          >
            <option value="1d">Last 24 hours</option>
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
        </div>
      </div>

      {/* Pricing Model Info */}
      <Card className="border-blue-200 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-950/20">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600/10 rounded-lg">
              <Zap className="size-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                Pricing Model: {pricing.model}
              </p>
              <div className="flex gap-4 mt-1 text-xs text-blue-700 dark:text-blue-300">
                <span>Input: ${pricing.inputPer1M}/1M tokens</span>
                <span>•</span>
                <span>Output: ${pricing.outputPer1M}/1M tokens</span>
                <span>•</span>
                <span>Currency: {pricing.currency}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Overall Cost Overview */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Overall Costs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            icon={DollarSign}
            title="Total Cost"
            value={formatCost(overall.totalCost)}
            description={`${formatCost(overall.avgCostPerInteraction)} per interaction`}
          />
          <StatCard
            icon={Activity}
            title="Total Interactions"
            value={overall.totalInteractions.toLocaleString()}
            description={`${(overall.avgDurationMs / 1000).toFixed(1)}s avg duration`}
          />
          <StatCard
            icon={Zap}
            title="Total Tokens"
            value={formatTokens(overall.totalTokens)}
            description={`${formatTokens(overall.avgTotalTokens)} per interaction`}
          />
          <StatCard
            icon={TrendingUp}
            title="Token Efficiency"
            value={`${((overall.avgOutputTokens / overall.avgInputTokens) * 100).toFixed(0)}%`}
            description="Output vs Input ratio"
          />
        </div>
      </div>

      {/* Cost Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="size-5" />
            Cost Breakdown
          </CardTitle>
          <CardDescription>Input vs Output costs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Visual breakdown */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Input Tokens</span>
                <span className="text-muted-foreground">
                  {formatTokens(overall.totalInputTokens)} • {formatCost(overall.totalInputCost)}
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full transition-all"
                  style={{
                    width: `${(overall.totalInputCost / overall.totalCost) * 100}%`,
                  }}
                />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Output Tokens</span>
                <span className="text-muted-foreground">
                  {formatTokens(overall.totalOutputTokens)} • {formatCost(overall.totalOutputCost)}
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-3">
                <div
                  className="bg-purple-600 h-3 rounded-full transition-all"
                  style={{
                    width: `${(overall.totalOutputCost / overall.totalCost) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Average stats */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              <div>
                <p className="text-sm text-muted-foreground">Avg Input Tokens</p>
                <p className="text-xl font-bold">{formatTokens(overall.avgInputTokens)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Avg Output Tokens</p>
                <p className="text-xl font-bold">{formatTokens(overall.avgOutputTokens)}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* By Tool Type */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Costs by Tool Type</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {byToolType.map((tool) => {
            const icon = tool.toolType === "auditor" ? Shield : MessageSquare;
            const Icon = icon;
            
            return (
              <Card key={tool.toolType}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon className="size-5" />
                    {tool.toolType === "auditor" ? "Code Reviewer" : "Chat Assistant"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Total cost and interactions */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Cost</p>
                      <p className="text-2xl font-bold">{formatCost(tool.totalCost)}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {formatCost(tool.avgTotalCost)} per interaction
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Interactions</p>
                      <p className="text-2xl font-bold">{tool.totalInteractions.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {(tool.avgDurationMs / 1000).toFixed(1)}s avg duration
                      </p>
                    </div>
                  </div>

                  {/* Token usage */}
                  <div className="pt-4 border-t space-y-3">
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-muted-foreground">Input</span>
                        <span className="font-medium">
                          {formatTokens(tool.avgInputTokens)} avg • {formatCost(tool.totalInputCost)}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all"
                          style={{
                            width: `${(tool.totalInputCost / tool.totalCost) * 100}%`,
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-muted-foreground">Output</span>
                        <span className="font-medium">
                          {formatTokens(tool.avgOutputTokens)} avg • {formatCost(tool.totalOutputCost)}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                        <div
                          className="bg-purple-600 h-2 rounded-full transition-all"
                          style={{
                            width: `${(tool.totalOutputCost / tool.totalCost) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Cost per interaction breakdown */}
                  <div className="pt-4 border-t">
                    <p className="text-xs text-muted-foreground mb-2">Cost per Interaction</p>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2 bg-blue-50 dark:bg-blue-950/30 rounded">
                        <p className="text-xs text-muted-foreground">Input</p>
                        <p className="text-sm font-semibold">{formatCost(tool.avgInputCost)}</p>
                      </div>
                      <div className="p-2 bg-purple-50 dark:bg-purple-950/30 rounded">
                        <p className="text-xs text-muted-foreground">Output</p>
                        <p className="text-sm font-semibold">{formatCost(tool.avgOutputCost)}</p>
                      </div>
                      <div className="p-2 bg-green-50 dark:bg-green-950/30 rounded">
                        <p className="text-xs text-muted-foreground">Total</p>
                        <p className="text-sm font-semibold">{formatCost(tool.avgTotalCost)}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="size-5" />
            Tool Comparison
          </CardTitle>
          <CardDescription>Side-by-side metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-sm">Tool</th>
                  <th className="text-right py-3 px-4 font-medium text-sm">Interactions</th>
                  <th className="text-right py-3 px-4 font-medium text-sm">Avg Tokens</th>
                  <th className="text-right py-3 px-4 font-medium text-sm">Avg Cost</th>
                  <th className="text-right py-3 px-4 font-medium text-sm">Total Cost</th>
                  <th className="text-right py-3 px-4 font-medium text-sm">% of Total</th>
                </tr>
              </thead>
              <tbody>
                {byToolType.map((tool) => (
                  <tr key={tool.toolType} className="border-b last:border-0 hover:bg-muted/50">
                    <td className="py-3 px-4 flex items-center gap-2">
                      {tool.toolType === "auditor" ? (
                        <Shield className="size-4 text-muted-foreground" />
                      ) : (
                        <MessageSquare className="size-4 text-muted-foreground" />
                      )}
                      <span className="font-medium capitalize">{tool.toolType}</span>
                    </td>
                    <td className="text-right py-3 px-4">{tool.totalInteractions.toLocaleString()}</td>
                    <td className="text-right py-3 px-4">
                      {formatTokens(tool.avgInputTokens + tool.avgOutputTokens)}
                    </td>
                    <td className="text-right py-3 px-4">{formatCost(tool.avgTotalCost)}</td>
                    <td className="text-right py-3 px-4 font-semibold">{formatCost(tool.totalCost)}</td>
                    <td className="text-right py-3 px-4">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm font-medium">
                        {((tool.totalCost / overall.totalCost) * 100).toFixed(1)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="inline-flex p-3 bg-green-100 dark:bg-green-950/30 rounded-full mb-3">
                <DollarSign className="size-6 text-green-600 dark:text-green-400" />
              </div>
              <p className="text-sm text-muted-foreground">Cost per 1K Tokens</p>
              <p className="text-2xl font-bold mt-1">
                {formatCost((overall.totalCost / overall.totalTokens) * 1000)}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="inline-flex p-3 bg-blue-100 dark:bg-blue-950/30 rounded-full mb-3">
                <Zap className="size-6 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="text-sm text-muted-foreground">Tokens per Interaction</p>
              <p className="text-2xl font-bold mt-1">
                {formatTokens(overall.avgTotalTokens)}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="inline-flex p-3 bg-purple-100 dark:bg-purple-950/30 rounded-full mb-3">
                <Activity className="size-6 text-purple-600 dark:text-purple-400" />
              </div>
              <p className="text-sm text-muted-foreground">Interactions per Day</p>
              <p className="text-2xl font-bold mt-1">
                {(overall.totalInteractions / parseInt(timeframe.replace("d", ""))).toFixed(0)}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

