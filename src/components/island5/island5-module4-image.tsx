"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Island5Module4Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        <Image
          src="/islands/island5/island5-module4-image.webp"
          alt="Neon Haven Module 4 - Adventure Scene"
          fill
          className="object-cover"
          priority
        />
      </div>
    </Card>
  );
}

