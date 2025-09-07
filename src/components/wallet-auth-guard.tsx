"use client";

import * as React from "react";
import { useAccount } from "wagmi";
import { WalletButton } from "@/components/wallet-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface WalletAuthGuardProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export function WalletAuthGuard({ 
  children, 
  title = "Wallet Required",
  description = "Please connect your wallet to access this feature."
}: WalletAuthGuardProps) {
  const { isConnected, isConnecting } = useAccount();

  if (isConnecting) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Checking wallet connection...</p>
        </div>
      </div>
    );
  }

  if (!isConnected) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <WalletButton />
          </CardContent>
        </Card>
      </div>
    );
  }

  return <>{children}</>;
}
