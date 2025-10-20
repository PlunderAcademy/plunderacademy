import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ChevronLeft, 
  Snowflake,
  BookOpen
} from "lucide-react";
import { getModules, getMissionByModule, getLessonByIds, getQuizByModule } from "@/lib/mdx";
import { WalletAuthGuard } from "@/components/wallet-auth-guard";
import { LessonTabsWithNavigation } from "@/components/lesson-tabs-with-navigation";

// Import island2 module components
import { Island2Module1Image } from "@/components/island2/island2-module1-image";
import { Island2Module2Image } from "@/components/island2/island2-module2-image";
import { Island2Module3Image } from "@/components/island2/island2-module3-image";
import { Island2Module4Image } from "@/components/island2/island2-module4-image";
import { Island2Module5Image } from "@/components/island2/island2-module5-image";
import { Island2Story } from "@/components/island2/story";

interface FrostModulePageProps {
  params: Promise<{
    module: string;
  }>;
}

// Frost Peak modules
const FROST_MODULES = [
  'advanced-solidity-foundations',
  'advanced-data-structures-error-handling',
  'testing-fundamentals',
  'staking-concepts-time-logic',
  'staking-contract-practical'
];

const MODULE_TITLES = {
  'advanced-solidity-foundations': 'Advanced Solidity Foundations',
  'advanced-data-structures-error-handling': 'Advanced Data Structures & Error Handling',
  'testing-fundamentals': 'Testing Fundamentals',
  'staking-concepts-time-logic': 'Staking Concepts & Time-Based Logic',
  'staking-contract-practical': 'Staking Contract Practical'
};

// Component mappings for each module
const MODULE_IMAGE_COMPONENTS = {
  'advanced-solidity-foundations': Island2Module1Image,
  'advanced-data-structures-error-handling': Island2Module2Image,
  'testing-fundamentals': Island2Module3Image,
  'staking-concepts-time-logic': Island2Module4Image,
  'staking-contract-practical': Island2Module5Image
};

export async function generateStaticParams() {
  return FROST_MODULES.map(module => ({
    module
  }));
}

export default async function FrostModulePage({ params }: FrostModulePageProps) {
  const resolvedParams = await params;
  
  // Check if this is a valid Frost Peak module
  if (!FROST_MODULES.includes(resolvedParams.module)) {
    notFound();
  }
  
  const modules = await getModules();
  const currentModule = modules.find(m => m.slug === resolvedParams.module);
  
  if (!currentModule) {
    notFound();
  }

  // Load mission data from MDX
  const missionData = await getMissionByModule(resolvedParams.module);
  
  // Load quiz data from MDX
  const quizData = await getQuizByModule(resolvedParams.module);

  // Load lesson content for tabs
  const lessonContents = await Promise.all(
    currentModule.lessons.map(async (lesson) => {
      try {
        const lessonData = await getLessonByIds(resolvedParams.module, lesson.slug);
        return {
          ...lesson,
          content: lessonData.content
        };
      } catch (error) {
        console.error(`Error loading lesson ${lesson.slug}:`, error);
        return {
          ...lesson,
          content: null
        };
      }
    })
  );

  const moduleIndex = FROST_MODULES.indexOf(resolvedParams.module);

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
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <ChevronLeft className="size-4 rotate-180" />
          <Link href="/lessons" className="hover:text-foreground">
            Lessons
          </Link>
          <ChevronLeft className="size-4 rotate-180" />
          <Link href="/lessons/island2" className="hover:text-foreground flex items-center gap-1">
            <Snowflake className="size-3" />
            Frost Peak
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
                  ❄️ Frost Peak
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
              <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-12 border-2 border-dashed border-blue-300 dark:border-blue-700">
                <p className="text-lg text-blue-700 dark:text-blue-300">IMAGE TBA</p>
                <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">
                  Animated adventure scene for Module {moduleIndex + 1}
                </p>
              </div>
            </Card>
          )}
        </div>

        {/* Mission Story Section */}
        <div>
          {missionData ? (
            <Island2Story missionData={missionData} />
          ) : (
            <Card className="p-8 text-center">
              <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-12 border-2 border-dashed border-blue-300 dark:border-blue-700">
                <p className="text-lg text-blue-700 dark:text-blue-300 font-semibold">MISSION TEXT TBA</p>
                <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">
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
                badge: "bg-blue-500/20",
                bgColor: "bg-blue-50 dark:bg-blue-950/30",
                borderColor: "border-blue-200 dark:border-blue-800",
                textColor: "text-blue-700 dark:text-blue-300",
                textColorSecondary: "text-blue-600 dark:text-blue-400"
              }}
            />
          </CardContent>
        </Card>

        <Separator />

        {/* Navigation */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button asChild variant="outline">
          <Link href="/lessons/island2">
            <Snowflake className="mr-2 size-4" />
            Back to Frost Peak
          </Link>
        </Button>
        </div>
      </div>
    </WalletAuthGuard>
  );
}
