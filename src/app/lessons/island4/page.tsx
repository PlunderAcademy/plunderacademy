import { ChevronLeft, Crown } from "lucide-react";
import Link from "next/link";
import { getModules } from "@/lib/mdx";
import { CastleExperience } from "@/components/island4/castle-experience";

export default async function GildedBastionPage() {
  const allModules = await getModules();
  const castleModules = allModules.filter(m => m.island === 'castle');
  
  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <ChevronLeft className="size-4 rotate-180" />
        <Link href="/lessons" className="hover:text-foreground">
          Lessons
        </Link>
        <ChevronLeft className="size-4 rotate-180" />
        <span className="text-foreground flex items-center gap-1">
          <Crown className="size-3" />
          Gilded Bastion
        </span>
      </div>

      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight mb-4 flex items-center justify-center gap-3">
          <Crown className="w-10 h-10 text-yellow-600" />
          Gilded Bastion
        </h1>
        <p className="text-lg text-muted-foreground">
          Discover the treasures of DeFi protocols and advanced blockchain systems with {castleModules.length} comprehensive modules
        </p>
      </div>

      <CastleExperience modules={castleModules} />
    </div>
  );
}
