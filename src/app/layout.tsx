import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "@/components/providers";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CookieConsentBanner } from "@/components/cookie-consent";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : 'http://localhost:3000'
  ),
  title: {
    default: "Plunder Academy - Learn EVM Fast",
    template: "%s • Plunder Academy",
  },
  description: "Interactive EVM developer training hub. Master Solidity, smart contracts, and blockchain development through hands-on lessons and challenges.",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Plunder Academy',
    title: "Plunder Academy - Learn EVM Fast",
    description: "Interactive EVM developer training hub. Master Solidity, smart contracts, and blockchain development through hands-on lessons and challenges.",
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'Plunder Academy - Learn EVM Fast',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Plunder Academy - Learn EVM Fast",
    description: "Interactive EVM developer training hub. Master Solidity, smart contracts, and blockchain development through hands-on lessons and challenges.",
    images: ['/hero.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="min-h-screen flex flex-col">
            <SiteHeader />
            <main className="flex-1 container mx-auto px-4 py-10">
              {children}
            </main>
            <SiteFooter />
          </div>
          <CookieConsentBanner />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
