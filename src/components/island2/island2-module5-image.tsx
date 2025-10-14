"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Island2Module5Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        <Image
          src="/islands/island2/island2-module5-image.webp"
          alt="Staking Contract Practical - Frost Peak Adventure"
          fill
          className="object-cover"
          priority
        />
      </div>
    </Card>
  );
}

