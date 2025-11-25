"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CONSENT_KEY = "pa_cookie_consent";

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = typeof window !== "undefined" ? localStorage.getItem(CONSENT_KEY) : null;
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(CONSENT_KEY, "accepted");
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 mx-auto max-w-4xl p-4">
      <div className="rounded-lg border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 p-4 shadow-lg">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Plunder Academy uses only necessary cookies to operate the site. By clicking Accept, you
            consent to the use of strictly necessary cookies. See our <Link href="/privacy" className="underline">Privacy Policy</Link>.
          </p>
          <div className="flex items-center gap-2">
            <Button size="sm" onClick={accept}>Accept</Button>
          </div>
        </div>
      </div>
    </div>
  );
}



