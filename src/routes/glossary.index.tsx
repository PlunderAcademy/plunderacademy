import { createFileRoute } from "@tanstack/react-router";
import { fetchGlossaries } from "@/lib/content";
import { GlossariesList } from "@/components/glossaries-list";

export const Route = createFileRoute("/glossary/")({
  loader: () => fetchGlossaries(),
  component: GlossaryPage,
  head: () => ({
    meta: [
      { title: "Glossary • Plunder Academy" },
      {
        name: "description",
        content:
          "Comprehensive glossaries covering blockchain, EVM, Solidity, and Web3 development terminology organized by learning island.",
      },
    ],
  }),
});

function GlossaryPage() {
  const allGlossaries = Route.useLoaderData();

  return <GlossariesList glossaries={allGlossaries} />;
}
