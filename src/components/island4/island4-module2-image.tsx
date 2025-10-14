"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Island4Module2Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        <Image
          src="/islands/island4/island4-module2-image.webp"
          alt="Oracles, Randomness & Airdrop Patterns - Gilded Bastion Adventure"
          fill
          className="object-cover"
          priority
        />
      </div>
    </Card>
  );
}

