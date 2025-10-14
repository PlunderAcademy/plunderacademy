"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export function Island4Module4Image() {
  return (
    <Card className="relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        <Image
          src="/islands/island4/island4-module4-image.webp"
          alt="Proxy Patterns & Upgradeability - Gilded Bastion Adventure"
          fill
          className="object-cover"
          priority
        />
      </div>
    </Card>
  );
}

