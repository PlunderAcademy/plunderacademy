"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Island2Module4Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        <Image
          src="/islands/island2/island2-module4-image.webp"
          alt="Staking Concepts & Time Logic - Frost Peak Adventure"
          fill
          className="object-cover"
          priority
        />
      </div>
    </Card>
  );
}

