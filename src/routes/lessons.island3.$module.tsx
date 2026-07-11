import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ChevronLeft, 
  Mountain,
  BookOpen
} from "lucide-react";
import { fetchModuleContent } from "@/lib/content";
import { WalletAuthGuard } from "@/components/wallet-auth-guard";
import { LessonTabsWithNavigation } from "@/components/lesson-tabs-with-navigation";

// Import island3 module components
import { Island3Module1Image } from "@/components/island3/island3-module1-image";
import { Island3Module2Image } from "@/components/island3/island3-module2-image";
import { Island3Module3Image } from "@/components/island3/island3-module3-image";
import { Island3Story } from "@/components/island3/story";

// Desert Bluff modules
const DESERT_MODULES = [
  'erc721-standards-implementation',
  'advanced-nft-features',
  'nft-collection-practical'
];

const MODULE_TITLES = {
  'erc721-standards-implementation': 'ERC721 Standards & Implementation',
  'advanced-nft-features': 'Advanced NFT Features',
  'nft-collection-practical': 'NFT Collection Practical'
};

// Component mappings for each module
const MODULE_IMAGE_COMPONENTS = {
  'erc721-standards-implementation': Island3Module1Image,
  'advanced-nft-features': Island3Module2Image,
  'nft-collection-practical': Island3Module3Image
};

function DesertModulePage() {
  const resolvedParams = Route.useParams();
  const {
    mission: missionData,
    quiz: quizData,
    lessonContents,
  } = Route.useLoaderData();

  const moduleIndex = DESERT_MODULES.indexOf(resolvedParams.module);

  // Get the appropriate components for this module
  const ImageComponent = MODULE_IMAGE_COMPONENTS[resolvedParams.module as keyof typeof MODULE_IMAGE_COMPONENTS];

  return (
    <WalletAuthGuard 
      title="Wallet Required for Module Access"
      description="Please connect your wallet to access learning modules and track your progress."
    >
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">
            Home
          </Link>
          <ChevronLeft className="size-4 rotate-180" />
          <Link to="/lessons" className="hover:text-foreground">
            Lessons
          </Link>
          <ChevronLeft className="size-4 rotate-180" />
          <Link to="/lessons/island3" className="hover:text-foreground flex items-center gap-1">
            <Mountain className="size-3" />
            Desert Bluff
          </Link>
          <ChevronLeft className="size-4 rotate-180" />
          <span className="text-foreground">{MODULE_TITLES[resolvedParams.module as keyof typeof MODULE_TITLES]}</span>
        </div>

        {/* Module Header */}
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="font-mono">
                  Module {moduleIndex + 1}
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  🏜️ Desert Bluff
                </Badge>
              </div>
              <h1 className="text-4xl font-bold tracking-tight">
                {MODULE_TITLES[resolvedParams.module as keyof typeof MODULE_TITLES]}
              </h1>
            </div>
          </div>
        </div>

        {/* Animated Image Section */}
        <div>
          {ImageComponent ? <ImageComponent /> : (
            <Card className="p-8 text-center">
              <div className="bg-orange-50 dark:bg-orange-950/30 rounded-lg p-12 border-2 border-dashed border-orange-300 dark:border-orange-700">
                <p className="text-lg text-orange-700 dark:text-orange-300">IMAGE TBA</p>
                <p className="text-sm text-orange-600 dark:text-orange-400 mt-2">
                  Animated adventure scene for Module {moduleIndex + 1}
                </p>
              </div>
            </Card>
          )}
        </div>

        {/* Mission Story Section */}
        <div>
          {missionData ? (
            <Island3Story missionData={missionData} />
          ) : (
            <Card className="p-8 text-center">
              <div className="bg-orange-50 dark:bg-orange-950/30 rounded-lg p-12 border-2 border-dashed border-orange-300 dark:border-orange-700">
                <p className="text-lg text-orange-700 dark:text-orange-300 font-semibold">MISSION TEXT TBA</p>
                <p className="text-sm text-orange-600 dark:text-orange-400 mt-2">
                  Typewriter story for {MODULE_TITLES[resolvedParams.module as keyof typeof MODULE_TITLES]}
                </p>
              </div>
            </Card>
          )}
        </div>

        {/* Module Content Tabs */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="size-5" />
              Module Content
            </CardTitle>
          </CardHeader>
          <CardContent>
            <LessonTabsWithNavigation
              lessonContents={lessonContents}
              quizData={quizData}
              missionData={missionData}
              moduleSlug={resolvedParams.module}
              islandTheme={{
                badge: "bg-orange-500/20",
                bgColor: "bg-orange-50 dark:bg-orange-950/30",
                borderColor: "border-orange-200 dark:border-orange-800",
                textColor: "text-orange-700 dark:text-orange-300",
                textColorSecondary: "text-orange-600 dark:text-orange-400"
              }}
            />
          </CardContent>
        </Card>

        <Separator />

        {/* Navigation */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button asChild variant="outline">
          <Link to="/lessons/island3">
            <Mountain className="mr-2 size-4" />
            Back to Desert Bluff
          </Link>
        </Button>
        </div>
      </div>
    </WalletAuthGuard>
  );
}

export const Route = createFileRoute("/lessons/island3/$module")({
  loader: async ({ params }) => {
    if (!DESERT_MODULES.includes(params.module)) {
      throw notFound();
    }
    const data = await fetchModuleContent({ data: params.module });
    if (!data) {
      throw notFound();
    }
    return data;
  },
  component: DesertModulePage,
});
