"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Island4Module3Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        <Image
          src="/islands/island4/island4-module3-image.webp"
          alt="Random Number Generator Practical - Gilded Bastion Adventure"
          fill
          className="object-cover"
          priority
        />
      </div>
    </Card>
  );
}

