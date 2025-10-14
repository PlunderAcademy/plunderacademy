"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Island5Module3Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        <Image
          src="/islands/island5/island5-module3-image.webp"
          alt="dApp Interface Practical - Neon Haven Adventure"
          fill
          className="object-cover"
          priority
        />
      </div>
    </Card>
  );
}

