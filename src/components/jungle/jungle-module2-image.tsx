"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function JungleModule2Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        <Image
          src="/islands/jungle/jungle-module2-image.webp"
          alt="EVM Fundamentals Adventure Scene"
          fill
          className="object-cover"
        />
      </div>
    </Card>
  );
}
