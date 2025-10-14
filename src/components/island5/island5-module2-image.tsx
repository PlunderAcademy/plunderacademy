"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Island5Module2Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        <Image
          src="/islands/island5/island5-module2-image.webp"
          alt="Contract Interactions & Error Handling - Neon Haven Adventure"
          fill
          className="object-cover"
          priority
        />
      </div>
    </Card>
  );
}

