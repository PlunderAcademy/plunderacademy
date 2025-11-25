import { Suspense } from "react";
import { getGlossaries } from "@/lib/mdx";
import { GlossariesList } from "@/components/glossaries-list";

export const metadata = {
  title: "Glossary",
  description: "Comprehensive glossaries covering blockchain, EVM, Solidity, and Web3 development terminology organized by learning island.",
};

export default async function GlossaryPage() {
  const allGlossaries = await getGlossaries();

  return (
    <Suspense fallback={<div className="flex items-center justify-center h-64">Loading glossaries...</div>}>
      <GlossariesList glossaries={allGlossaries} />
    </Suspense>
  );
}

