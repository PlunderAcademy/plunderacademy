"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Island2Module2Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        <Image
          src="/islands/island2/island2-module2-image.webp"
          alt="Advanced Data Structures & Error Handling - Frost Peak Adventure"
          fill
          className="object-cover"
          priority
        />
      </div>
    </Card>
  );
}

