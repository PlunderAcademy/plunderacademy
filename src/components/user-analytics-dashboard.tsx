"use client";

import * as React from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { 
  BarChart3, 
  TrendingUp, 
  MessageSquare, 
  Shield, 
  Award,
  Clock,
  ThumbsUp,
  Star
} from "lucide-react";
import { useSession } from "@/lib/session-context";
import { getUserAnalytics, type UserAnalytics } from "@/lib/feedback-api";

/**
 * User-facing analytics dashboard showing AI tool usage stats and learning progress.
 */
export function UserAnalyticsDashboard() {
  const { address } = useSession();
  const [analytics, setAnalytics] = React.useState<UserAnalytics | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (!address) {
      setIsLoading(false);
      return;
    }

    let mounted = true;

    getUserAnalytics(address).then((data) => {
      if (mounted) {
        setAnalytics(data);
        setIsLoading(false);
      }
    });

    return () => {
      mounted = false;
    };
  }, [address]);

  if (!address) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Your Learning Analytics</CardTitle>
          <CardDescription>
            Connect your wallet to view your progress and stats
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Your Learning Analytics</CardTitle>
          <CardDescription>Loading your stats...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-40">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!analytics) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Your Learning Analytics</CardTitle>
          <CardDescription>
            Start using our AI tools to see your stats here!
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const { stats, recentInteractions, moduleProgress } = analytics;

  const StatCard = ({
    icon: Icon,
    title,
    value,
    description,
  }: {
    icon: React.ElementType;
    title: string;
    value: string | number;
    description?: string;
  }) => (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon className="size-6 text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            {description && (
              <p className="text-xs text-muted-foreground mt-1">{description}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const satisfactionRate = stats.totalAIInteractions > 0
    ? Math.round(
        (stats.positiveFeedback /
          (stats.positiveFeedback + stats.negativeFeedback)) *
          100
      )
    : 0;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Your Learning Analytics</h2>
        <p className="text-muted-foreground">
          Track your progress and AI tool usage
        </p>
      </div>

      {/* AI Tool Usage Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={BarChart3}
          title="Total AI Interactions"
          value={stats.totalAIInteractions}
          description="Questions asked and code reviewed"
        />
        <StatCard
          icon={Shield}
          title="Code Reviews"
          value={stats.auditorUsage}
          description={
            stats.avgVulnerabilitiesPerScan
              ? `Avg ${stats.avgVulnerabilitiesPerScan.toFixed(1)} vulnerabilities found`
              : undefined
          }
        />
        <StatCard
          icon={MessageSquare}
          title="Chat Sessions"
          value={stats.chatUsage}
          description="Questions answered by AI assistant"
        />
        <StatCard
          icon={Award}
          title="Modules Completed"
          value={stats.modulesCompleted}
          description="Learning modules finished"
        />
      </div>

      {/* Feedback & Quality Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          icon={ThumbsUp}
          title="Satisfaction Rate"
          value={`${satisfactionRate}%`}
          description={`${stats.positiveFeedback} positive, ${stats.negativeFeedback} negative`}
        />
        {stats.avgQualityRating && (
          <StatCard
            icon={Star}
            title="Avg Quality Rating"
            value={`${stats.avgQualityRating.toFixed(1)}/5`}
            description="Your average rating of AI responses"
          />
        )}
        {stats.aiToolsHelpfulRate !== undefined && (
          <StatCard
            icon={TrendingUp}
            title="AI Tools Helpfulness"
            value={`${Math.round(stats.aiToolsHelpfulRate * 100)}%`}
            description="How often AI tools helped you learn"
          />
        )}
      </div>

      {/* Recent Activity */}
      {recentInteractions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Your latest AI tool interactions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentInteractions.slice(0, 5).map((interaction) => (
                <div
                  key={interaction.id}
                  className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    {interaction.toolType === "auditor" ? (
                      <Shield className="size-4 text-muted-foreground" />
                    ) : (
                      <MessageSquare className="size-4 text-muted-foreground" />
                    )}
                    <div>
                      <p className="text-sm font-medium">
                        {interaction.toolType === "auditor"
                          ? "Code Review"
                          : "Chat Session"}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(interaction.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  {interaction.feedback && (
                    <div className="text-xs text-muted-foreground">
                      {interaction.feedback === "thumbs_up" ? "👍" : "👎"}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Module Progress */}
      {moduleProgress.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Module Progress</CardTitle>
            <CardDescription>
              Your completed learning modules
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {moduleProgress.map((module) => (
                <div
                  key={module.moduleSlug}
                  className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <Award className="size-4 text-primary" />
                    <div>
                      <p className="text-sm font-medium">
                        {module.moduleSlug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Completed {new Date(module.completedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="size-3 fill-yellow-500 text-yellow-500" />
                    <span className="text-sm font-medium">
                      {module.avgRating.toFixed(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Learning Insights */}
      {stats.totalAIInteractions > 10 && (
        <Card>
          <CardHeader>
            <CardTitle>Learning Insights</CardTitle>
            <CardDescription>
              Personalized insights based on your activity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.avgVulnerabilitiesPerScan && stats.avgVulnerabilitiesPerScan > 2 && (
                <div className="flex items-start gap-3 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg">
                  <Clock className="size-5 text-amber-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-amber-900 dark:text-amber-100">
                      Security Focus Opportunity
                    </p>
                    <p className="text-xs text-amber-700 dark:text-amber-200 mt-1">
                      Your code reviews are finding an average of{" "}
                      {stats.avgVulnerabilitiesPerScan.toFixed(1)} vulnerabilities.
                      Consider reviewing our security modules to strengthen your skills.
                    </p>
                  </div>
                </div>
              )}
              
              {satisfactionRate > 80 && stats.totalAIInteractions > 20 && (
                <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                  <TrendingUp className="size-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-green-900 dark:text-green-100">
                      Great Progress!
                    </p>
                    <p className="text-xs text-green-700 dark:text-green-200 mt-1">
                      You have a {satisfactionRate}% satisfaction rate with our AI tools.
                      Keep up the excellent work!
                    </p>
                  </div>
                </div>
              )}

              {stats.modulesCompleted > 0 && stats.aiToolsHelpfulRate && stats.aiToolsHelpfulRate > 0.7 && (
                <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <Award className="size-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                      AI-Powered Learner
                    </p>
                    <p className="text-xs text-blue-700 dark:text-blue-200 mt-1">
                      The AI tools have been helpful in {Math.round(stats.aiToolsHelpfulRate * 100)}% 
                      of your learning sessions. You&apos;re making great use of our platform!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

