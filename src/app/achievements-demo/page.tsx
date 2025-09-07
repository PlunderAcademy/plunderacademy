"use client";

import { WalletAuthGuard } from "@/components/wallet-auth-guard";
import { AchievementsDemo } from "@/components/achievements-demo";

export default function AchievementsDemoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="space-y-3 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Training Achievements Demo
          </h1>
          <p className="text-muted-foreground text-lg">
            Experience how our training achievement system works. Submit quiz answers,
            receive signed vouchers, and claim them on-chain as NFT badges.
          </p>
        </div>
        
        <WalletAuthGuard 
          title="Connect Your Wallet"
          description="Connect your wallet to demo the achievements system and claim training badges."
        >
          <AchievementsDemo />
        </WalletAuthGuard>
      </div>
    </div>
  );
}
