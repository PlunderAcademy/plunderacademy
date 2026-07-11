/// <reference types="vite/client" />

import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Providers } from "@/components/providers";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CookieConsentBanner } from "@/components/cookie-consent";
import appCss from "@/app/globals.css?url";
import rainbowKitCss from "@rainbow-me/rainbowkit/styles.css?url";

const title = "Plunder Academy - Learn EVM Fast";
const description =
  "Interactive EVM developer training hub. Master Solidity, smart contracts, and blockchain development through hands-on lessons and challenges.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title },
      { name: "description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:site_name", content: "Plunder Academy" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: "/hero.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "/hero.png" },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: appCss },
      { rel: "stylesheet", href: rainbowKitCss },
    ],
  }),
  component: RootLayout,
  ssr: false,
  shellComponent: RootDocument,
});

function RootLayout() {
  return (
    <Providers>
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1 container mx-auto px-4 py-10">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
      <CookieConsentBanner />
    </Providers>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}
