import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ChevronLeft, 
  Zap,
  BookOpen
} from "lucide-react";
import { getModules, getMissionByModule, getLessonByIds, getQuizByModule } from "@/lib/mdx";
import { WalletAuthGuard } from "@/components/wallet-auth-guard";
import { LessonTabsWithNavigation } from "@/components/lesson-tabs-with-navigation";

// Import island5 module components
import { Island5Module1Image } from "@/components/island5/island5-module1-image";
import { Island5Module2Image } from "@/components/island5/island5-module2-image";
import { Island5Module3Image } from "@/components/island5/island5-module3-image";
import { Island5Module4Image } from "@/components/island5/island5-module4-image";
import { Island5Story } from "@/components/island5/story";

interface NeonModulePageProps {
  params: Promise<{
    module: string;
  }>;
}

// Neon Haven modules
const NEON_MODULES = [
  'web3-frontend-basics',
  'contract-interactions-error-handling',
  'dapp-interface-practical'
];

const MODULE_TITLES = {
  'web3-frontend-basics': 'Web3 Frontend Basics',
  'contract-interactions-error-handling': 'Contract Interactions & Error Handling',
  'dapp-interface-practical': 'dApp Interface Practical'
};

// Component mappings for each module
const MODULE_IMAGE_COMPONENTS = {
  'web3-frontend-basics': Island5Module1Image,
  'contract-interactions-error-handling': Island5Module2Image,
  'dapp-interface-practical': Island5Module3Image
};

export async function generateStaticParams() {
  return NEON_MODULES.map(module => ({
    module
  }));
}

export default async function NeonModulePage({ params }: NeonModulePageProps) {
  const resolvedParams = await params;
  
  // Check if this is a valid Neon Haven module
  if (!NEON_MODULES.includes(resolvedParams.module)) {
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

  const moduleIndex = NEON_MODULES.indexOf(resolvedParams.module);

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
          <Link href="/lessons/island5" className="hover:text-foreground flex items-center gap-1">
            <Zap className="size-3" />
            Neon Haven
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
                  🌃 Neon Haven
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
              <div className="bg-cyan-50 dark:bg-cyan-950/30 rounded-lg p-12 border-2 border-dashed border-cyan-300 dark:border-cyan-700">
                <p className="text-lg text-cyan-700 dark:text-cyan-300">IMAGE TBA</p>
                <p className="text-sm text-cyan-600 dark:text-cyan-400 mt-2">
                  Animated adventure scene for Module {moduleIndex + 1}
                </p>
              </div>
            </Card>
          )}
        </div>

        {/* Mission Story Section */}
        <div>
          {missionData ? (
            <Island5Story missionData={missionData} />
          ) : (
            <Card className="p-8 text-center">
              <div className="bg-cyan-50 dark:bg-cyan-950/30 rounded-lg p-12 border-2 border-dashed border-cyan-300 dark:border-cyan-700">
                <p className="text-lg text-cyan-700 dark:text-cyan-300 font-semibold">MISSION TEXT TBA</p>
                <p className="text-sm text-cyan-600 dark:text-cyan-400 mt-2">
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
                badge: "bg-cyan-500/20",
                bgColor: "bg-cyan-50 dark:bg-cyan-950/30",
                borderColor: "border-cyan-200 dark:border-cyan-800",
                textColor: "text-cyan-700 dark:text-cyan-300",
                textColorSecondary: "text-cyan-600 dark:text-cyan-400"
              }}
            />
          </CardContent>
        </Card>

        <Separator />

        {/* Navigation */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Button asChild variant="outline">
            <Link href="/lessons/island5">
              <Zap className="mr-2 size-4" />
              Back to Neon Haven
            </Link>
          </Button>
        </div>
      </div>
    </WalletAuthGuard>
  );
}