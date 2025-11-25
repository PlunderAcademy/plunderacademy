import { WalletAuthGuard } from "@/components/wallet-auth-guard";
import { UserAnalyticsDashboard } from "@/components/user-analytics-dashboard";

export default function AnalyticsPage() {
  return (
    <WalletAuthGuard
      title="Wallet Required for Analytics"
      description="Connect your wallet to view your learning progress and AI tool usage statistics."
    >
      <div className="container max-w-7xl mx-auto py-8 px-4">
        <UserAnalyticsDashboard />
      </div>
    </WalletAuthGuard>
  );
}

