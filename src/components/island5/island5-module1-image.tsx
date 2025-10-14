"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Island5Module1Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        <Image
          src="/islands/island5/island5-module1-image.webp"
          alt="Web3 Frontend Basics - Neon Haven Adventure"
          fill
          className="object-cover"
          priority
        />
      </div>
    </Card>
  );
}

