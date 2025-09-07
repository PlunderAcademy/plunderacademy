"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function JungleModule4Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        <Image
          src="/islands/jungle/jungle-module4-image.webp"
          alt="Zilliqa EVM Setup Adventure Scene"
          fill
          className="object-cover"
        />
      </div>
    </Card>
  );
}
