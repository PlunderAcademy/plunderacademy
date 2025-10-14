"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Island2Module1Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        <Image
          src="/islands/island2/island2-module1-image.webp"
          alt="Advanced Solidity Foundations - Frost Peak Adventure"
          fill
          className="object-cover"
          priority
        />
      </div>
    </Card>
  );
}

