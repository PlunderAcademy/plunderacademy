"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Menu } from "lucide-react";
import { WalletButton } from "@/components/wallet-button";
import { HeaderAchievements } from "@/components/header-achievements";
import { AchievementsModal } from "@/components/achievements-modal";

const nav = [
  { href: "/", label: "Home" },
  { href: "/lessons", label: "Lessons" },
  { href: "/articles", label: "Articles" },
  { href: "/reviewer", label: "Code Reviewer" },
  { href: "/chat", label: "Chat" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isAchievementsModalOpen, setIsAchievementsModalOpen] =
    React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-semibold tracking-tight">
          Plunder Academy
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-foreground/80 text-foreground/60",
                pathname === item.href && "text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <HeaderAchievements
            onOpenModal={() => setIsAchievementsModalOpen(true)}
          />
          <WalletButton />
          <ThemeToggle />
        </div>
        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-4 p-0">
              <div className="px-6 pb-4 pt-6">
                <Link href="/" className="font-semibold tracking-tight">
                  Plunder Academy
                </Link>
              </div>
              <Separator />
              <nav className="flex flex-col gap-1 px-2 py-2">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-md px-4 py-2 text-base transition-colors hover:bg-accent hover:text-accent-foreground text-foreground/70",
                      pathname === item.href && "text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Separator />
              <div className="mt-auto px-6 py-4">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2">
                    <HeaderAchievements
                      onOpenModal={() => setIsAchievementsModalOpen(true)}
                    />
                    <div className="flex-1" />
                    <ThemeToggle />
                  </div>
                  <WalletButton fullWidth />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Achievements Modal */}
      <AchievementsModal
        isOpen={isAchievementsModalOpen}
        onClose={() => setIsAchievementsModalOpen(false)}
        useAnimatedCards={true} // Enable animated cards in modal
      />
    </header>
  );
}
