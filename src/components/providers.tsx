"use client";

import { ThemeProvider } from "next-themes";
import * as React from "react";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { wagmiConfig } from "@/lib/wagmi";
import { SessionProvider } from "@/lib/session-context";
import { GeneralFeedback } from "@/components/general-feedback";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <RainbowKitProvider>
              {children}
              <GeneralFeedback />
            </RainbowKitProvider>
          </ThemeProvider>
        </SessionProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
