"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function JungleModule5Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        <Image
          src="/islands/jungle/jungle-module5-image.webp"
          alt="Creating ERC20 Tokens Adventure Scene"
          fill
          className="object-cover"
        />
      </div>
    </Card>
  );
}
