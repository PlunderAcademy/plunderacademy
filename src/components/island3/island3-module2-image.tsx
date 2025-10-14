"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Island3Module2Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        <Image
          src="/islands/island3/island3-module2-image.webp"
          alt="Advanced NFT Features - Desert Bluff Adventure"
          fill
          className="object-cover"
          priority
        />
      </div>
    </Card>
  );
}

