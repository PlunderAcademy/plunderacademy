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
  Users,
  MessageSquare,
  Shield,
  TrendingUp,
  ThumbsUp,
  ThumbsDown,
  Award,
  Clock,
  Activity,
  BarChart3,
  Target,
  Sparkles,
} from "lucide-react";
import {
  getSystemAnalytics,
  getLeaderboard,
  getModuleFeedback,
  getTextFeedback,
  type SystemAnalytics,
  type ModuleFeedbackItem,
  type TextFeedbackItem,
} from "@/lib/system-analytics-api";

interface LeaderboardData {
  timeframe: string;
  topLearners: Array<{
    walletAddress: string;
    achievementCount: number;
    aiInteractions: number;
    avgFeedbackRating: number;
    rank: number;
  }>;
}

/**
 * System-wide analytics dashboard for platform administrators.
 * Shows aggregate metrics across all users and platform health indicators.
 */
export function SystemAnalyticsDashboard() {
  const [analytics, setAnalytics] = React.useState<SystemAnalytics | null>(null);
  const [leaderboard, setLeaderboard] = React.useState<LeaderboardData | null>(null);
  const [moduleFeedback, setModuleFeedback] = React.useState<ModuleFeedbackItem[]>([]);
  const [textFeedback, setTextFeedback] = React.useState<TextFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [timeframe, setTimeframe] = React.useState("30d");

  React.useEffect(() => {
    let mounted = true;

    Promise.all([
      getSystemAnalytics(),
      getLeaderboard(10, timeframe),
      getModuleFeedback(50, timeframe),
      getTextFeedback(50, timeframe),
    ]).then(([analyticsData, leaderboardData, moduleFeedbackData, textFeedbackData]) => {
      if (mounted) {
        setAnalytics(analyticsData);
        setLeaderboard(leaderboardData);
        setModuleFeedback(moduleFeedbackData?.feedback || []);
        setTextFeedback(textFeedbackData?.feedback || []);
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
          <p className="text-muted-foreground">Loading system analytics...</p>
        </div>
      </div>
    );
  }

  if (!analytics) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>System Analytics</CardTitle>
          <CardDescription>
            Unable to load analytics data. Please ensure the backend API is configured.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const { platform, modules, tools, queryCategories, recentActivity } = analytics;

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

  const overallSatisfactionRate = platform.averageSatisfaction
    ? Math.round(platform.averageSatisfaction * 100)
    : 0;

  const auditorSatisfactionRate = tools.auditorPositiveFeedback + tools.auditorNegativeFeedback > 0
    ? Math.round(
        (tools.auditorPositiveFeedback /
          (tools.auditorPositiveFeedback + tools.auditorNegativeFeedback)) *
          100
      )
    : 0;

  const chatSatisfactionRate = tools.chatPositiveFeedback + tools.chatNegativeFeedback > 0
    ? Math.round(
        (tools.chatPositiveFeedback /
          (tools.chatPositiveFeedback + tools.chatNegativeFeedback)) *
          100
      )
    : 0;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">System Analytics</h1>
          <p className="text-muted-foreground">
            Platform-wide metrics and learning outcomes
          </p>
        </div>
        <div className="flex gap-2">
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="px-3 py-2 border rounded-md bg-background"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="all">All time</option>
          </select>
        </div>
      </div>

      {/* Platform Overview */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Platform Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            icon={Users}
            title="Total Users"
            value={platform.totalUsers.toLocaleString()}
            description="Active learners"
          />
          <StatCard
            icon={Activity}
            title="AI Interactions"
            value={platform.totalInteractions.toLocaleString()}
            description={`${platform.avgInteractionsPerUser.toFixed(1)} per user avg`}
          />
          <StatCard
            icon={ThumbsUp}
            title="Overall Satisfaction"
            value={`${overallSatisfactionRate}%`}
            description={`${platform.totalFeedbackSubmissions} feedback submissions`}
          />
          <StatCard
            icon={Award}
            title="Modules Completed"
            value={platform.totalModulesCompleted.toLocaleString()}
            description={`${platform.avgModulesPerUser.toFixed(1)} per user avg`}
          />
        </div>
      </div>

      {/* AI Tools Breakdown */}
      <div>
        <h2 className="text-xl font-semibold mb-4">AI Tools Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="size-5" />
                Code Reviewer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Total Usage</p>
                  <p className="text-2xl font-bold">{tools.auditorUsage.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Avg Duration</p>
                  <p className="text-2xl font-bold">
                    {(tools.auditorAvgDuration / 1000).toFixed(1)}s
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Satisfaction</span>
                  <span className="text-sm font-bold">{auditorSatisfactionRate}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full transition-all"
                    style={{ width: `${auditorSatisfactionRate}%` }}
                  />
                </div>
                <div className="flex items-center justify-between mt-1 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <ThumbsUp className="size-3" />
                    {tools.auditorPositiveFeedback}
                  </span>
                  <span className="flex items-center gap-1">
                    <ThumbsDown className="size-3" />
                    {tools.auditorNegativeFeedback}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="size-5" />
                Chat Assistant
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Total Usage</p>
                  <p className="text-2xl font-bold">{tools.chatUsage.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Avg Duration</p>
                  <p className="text-2xl font-bold">
                    {(tools.chatAvgDuration / 1000).toFixed(1)}s
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Satisfaction</span>
                  <span className="text-sm font-bold">{chatSatisfactionRate}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full transition-all"
                    style={{ width: `${chatSatisfactionRate}%` }}
                  />
                </div>
                <div className="flex items-center justify-between mt-1 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <ThumbsUp className="size-3" />
                    {tools.chatPositiveFeedback}
                  </span>
                  <span className="flex items-center gap-1">
                    <ThumbsDown className="size-3" />
                    {tools.chatNegativeFeedback}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Query Categories */}
      {queryCategories && queryCategories.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="size-5" />
              Query Categories
            </CardTitle>
            <CardDescription>Most common types of questions asked</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {queryCategories.map((category) => (
                <div key={category.category} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium capitalize">{category.category}</span>
                    <span className="text-muted-foreground">
                      {category.count} queries ({category.satisfactionRate.toFixed(0)}% satisfied)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{
                        width: `${Math.min(
                          (category.count / queryCategories[0].count) * 100,
                          100
                        )}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Module Performance */}
      {modules && modules.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="size-5" />
              Module Performance
            </CardTitle>
            <CardDescription>Learning module completion and satisfaction</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {modules.slice(0, 10).map((module) => (
                <div
                  key={module.moduleSlug}
                  className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                >
                  <div className="flex-1">
                    <p className="font-medium">
                      {module.moduleSlug
                        .replace(/-/g, " ")
                        .replace(/\b\w/g, (l) => l.toUpperCase())}
                    </p>
                    <div className="flex gap-4 mt-1 text-xs text-muted-foreground">
                      <span>{module.completions} completions</span>
                      <span>
                        Difficulty: {module.avgDifficulty.toFixed(1)}/5
                      </span>
                      <span>Clarity: {module.avgClarity.toFixed(1)}/5</span>
                      <span>Value: {module.avgValue.toFixed(1)}/5</span>
                      {module.avgTimeSpent > 0 && (
                        <span>
                          <Clock className="size-3 inline mr-1" />
                          {Math.round(module.avgTimeSpent)}min
                        </span>
                      )}
                    </div>
                  </div>
                  {module.aiToolsHelpfulRate > 0 && (
                    <div className="text-right">
                      <p className="text-sm font-medium">
                        {Math.round(module.aiToolsHelpfulRate * 100)}%
                      </p>
                      <p className="text-xs text-muted-foreground">AI helpful</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Module Feedback Comments */}
      {moduleFeedback && moduleFeedback.length > 0 && (() => {
        // Group feedback by module slug
        const feedbackByModule: Record<string, ModuleFeedbackItem[]> = {};
        moduleFeedback.forEach(item => {
          if (!feedbackByModule[item.moduleSlug]) {
            feedbackByModule[item.moduleSlug] = [];
          }
          feedbackByModule[item.moduleSlug].push(item);
        });

        return Object.keys(feedbackByModule).length > 0 ? (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="size-5" />
                Module Feedback Comments
              </CardTitle>
              <CardDescription>
                Detailed text feedback and ratings from learners
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {Object.entries(feedbackByModule).map(([moduleSlug, feedback]) => (
                  <div key={moduleSlug}>
                    <h4 className="font-semibold mb-3 text-sm capitalize">
                      📚 {moduleSlug.replace(/-/g, " ")}
                    </h4>
                    <div className="space-y-3">
                      {feedback.map((item, index) => (
                        <div
                          key={`${moduleSlug}-${item.id}-${index}`}
                          className="p-4 border rounded-lg bg-card hover:bg-muted/50 transition-colors space-y-3"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <p className="text-xs font-mono text-muted-foreground">
                                {item.walletAddress.slice(0, 6)}...{item.walletAddress.slice(-4)}
                              </p>
                              <div className="flex items-center gap-2 text-xs">
                                <span className="text-muted-foreground">Difficulty:</span>
                                <span className="font-medium">{item.contentDifficulty}/5</span>
                                <span className="text-muted-foreground">•</span>
                                <span className="text-muted-foreground">Clarity:</span>
                                <span className="font-medium">{item.contentClarity}/5</span>
                                <span className="text-muted-foreground">•</span>
                                <span className="text-muted-foreground">Value:</span>
                                <span className="font-medium">{item.practicalValue}/5</span>
                              </div>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              {new Date(item.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                          
                          {item.whatWorkedWell && (
                            <div className="space-y-1">
                              <p className="text-xs font-medium text-green-600 dark:text-green-400">
                                ✅ What Worked Well:
                              </p>
                              <p className="text-sm leading-relaxed pl-4">{item.whatWorkedWell}</p>
                            </div>
                          )}
                          
                          {item.suggestionsForImprovement && (
                            <div className="space-y-1">
                              <p className="text-xs font-medium text-orange-600 dark:text-orange-400">
                                💡 Suggestions:
                              </p>
                              <p className="text-sm leading-relaxed pl-4">{item.suggestionsForImprovement}</p>
                            </div>
                          )}
                          
                          {item.additionalTopicsWanted && (
                            <div className="space-y-1">
                              <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
                                📚 Topics Wanted:
                              </p>
                              <p className="text-sm leading-relaxed pl-4">{item.additionalTopicsWanted}</p>
                            </div>
                          )}
                          
                          <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2 border-t">
                            {item.timeSpentMinutes && (
                              <span>⏱️ {item.timeSpentMinutes} min</span>
                            )}
                            {item.aiToolsHelpful !== undefined && (
                              <span>
                                AI Tools: {item.aiToolsHelpful ? "✅ Helpful" : "❌ Not helpful"}
                              </span>
                            )}
                            {item.externalResourcesUsed !== undefined && (
                              <span>
                                External Resources: {item.externalResourcesUsed ? "Yes" : "No"}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ) : null;
      })()}

      {/* Leaderboard */}
      {leaderboard && leaderboard.topLearners && leaderboard.topLearners.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="size-5" />
              Top Learners
            </CardTitle>
            <CardDescription>
              Most active and engaged users in the last {timeframe}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {leaderboard.topLearners.map((learner) => (
                <div
                  key={learner.walletAddress}
                  className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 font-bold text-primary">
                      #{learner.rank}
                    </div>
                    <div>
                      <p className="font-mono text-sm">
                        {learner.walletAddress.slice(0, 6)}...
                        {learner.walletAddress.slice(-4)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {learner.achievementCount} achievements • {learner.aiInteractions}{" "}
                        interactions
                      </p>
                    </div>
                  </div>
                  {learner.avgFeedbackRating > 0 && (
                    <div className="text-right">
                      <p className="text-sm font-medium">
                        ⭐ {learner.avgFeedbackRating.toFixed(1)}
                      </p>
                      <p className="text-xs text-muted-foreground">avg rating</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recent Activity */}
      {recentActivity && recentActivity.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="size-5" />
              Recent Platform Activity
            </CardTitle>
            <CardDescription>Latest interactions across all users</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {recentActivity.slice(0, 10).map((activity, index) => (
                <div
                  key={`${activity.id}-${index}`}
                  className="flex items-center justify-between p-2 hover:bg-muted/50 rounded transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {activity.toolType === "auditor" ? (
                      <Shield className="size-4 text-muted-foreground" />
                    ) : (
                      <MessageSquare className="size-4 text-muted-foreground" />
                    )}
                    <div>
                      <p className="text-sm font-mono">
                        {activity.walletAddress.slice(0, 6)}...
                        {activity.walletAddress.slice(-4)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(activity.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  {activity.feedback && (
                    <span className="text-xs">
                      {activity.feedback === "thumbs_up" ? "👍" : "👎"}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* AI Tool Feedback (Chat & Auditor) */}
      {textFeedback && textFeedback.length > 0 && (() => {
        // Deduplicate by id (temporary fix until backend is updated)
        const uniqueFeedback = Array.from(
          new Map(textFeedback.map(item => [item.id, item])).values()
        );
        
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="size-5" />
                AI Tool Feedback
              </CardTitle>
              <CardDescription>
                Feedback on AI Chat Assistant and Code Auditor
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {uniqueFeedback.map((item, index) => (
                <div
                  key={`text-feedback-${item.id}-${index}`}
                  className="p-4 bg-muted/50 rounded-lg space-y-2"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3 flex-1">
                      {item.toolType === "auditor" ? (
                        <Shield className="size-4 text-muted-foreground flex-shrink-0 mt-1" />
                      ) : (
                        <MessageSquare className="size-4 text-muted-foreground flex-shrink-0 mt-1" />
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="text-sm font-mono">
                            {item.walletAddress.slice(0, 6)}...
                            {item.walletAddress.slice(-4)}
                          </p>
                          <span className="text-xs text-muted-foreground">•</span>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary capitalize">
                            {item.toolType}
                          </span>
                          <span className="text-xs text-muted-foreground">•</span>
                          <p className="text-xs text-muted-foreground">
                            {new Date(item.createdAt).toLocaleString()}
                          </p>
                          {item.qualityRating && (
                            <>
                              <span className="text-xs text-muted-foreground">•</span>
                              <p className="text-xs font-medium">
                                ⭐ {item.qualityRating}/5
                              </p>
                            </>
                          )}
                        </div>
                        <div className="mt-2">
                          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                            {item.feedbackType === "text" ? "Comment" : item.feedbackType}
                          </p>
                          <p className="text-sm">
                            {item.feedbackValue}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );
      })()}

    </div>
  );
}

