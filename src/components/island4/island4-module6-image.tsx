"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Island4Module6Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        <Image
          src="/islands/island4/island5-module6-image.webp"
          alt="Upgradable Contract Practical - Gilded Bastion Adventure"
          fill
          className="object-cover"
          priority
        />
      </div>
    </Card>
  );
}

