import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  ChevronLeft, 
  Crown,
  BookOpen,
  Trophy
} from "lucide-react";
import { getModules, getMissionByModule, getLessonByIds, getQuizByModule } from "@/lib/mdx";
import { WalletAuthGuard } from "@/components/wallet-auth-guard";
import MDXContent from "@/components/mdx-content";
import { InteractiveElement } from "@/components/interactive-elements";

// Import island4 module components
import { Island4Module1Image } from "@/components/island4/island4-module1-image";
import { Island4Module2Image } from "@/components/island4/island4-module2-image";
import { Island4Module3Image } from "@/components/island4/island4-module3-image";
import { Island4Module4Image } from "@/components/island4/island4-module4-image";
import { Island4Module5Image } from "@/components/island4/island4-module5-image";
import { Island4Module6Image } from "@/components/island4/island4-module6-image";
import { Island4Story } from "@/components/island4/story";

interface CastleModulePageProps {
  params: Promise<{
    module: string;
  }>;
}

// Gilded Bastion modules
const CASTLE_MODULES = [
  'defi-fundamentals-simple-swaps',
  'oracles-randomness-airdrop-patterns',
  'random-number-generator-practical',
  'proxy-patterns-upgradeability',
  'gas-optimization-security-patterns',
  'upgradable-contract-practical'
];

const MODULE_TITLES = {
  'defi-fundamentals-simple-swaps': 'DeFi Fundamentals & Simple Swaps',
  'oracles-randomness-airdrop-patterns': 'Oracles, Randomness & Airdrop Patterns',
  'random-number-generator-practical': 'Random Number Generator Practical',
  'proxy-patterns-upgradeability': 'Proxy Patterns & Upgradeability',
  'gas-optimization-security-patterns': 'Gas Optimization & Security Patterns',
  'upgradable-contract-practical': 'Upgradable Contract Practical'
};

// Component mappings for each module
const MODULE_IMAGE_COMPONENTS = {
  'defi-fundamentals-simple-swaps': Island4Module1Image,
  'oracles-randomness-airdrop-patterns': Island4Module2Image,
  'random-number-generator-practical': Island4Module3Image,
  'proxy-patterns-upgradeability': Island4Module4Image,
  'gas-optimization-security-patterns': Island4Module5Image,
  'upgradable-contract-practical': Island4Module6Image
};

export async function generateStaticParams() {
  return CASTLE_MODULES.map(module => ({
    module
  }));
}

export default async function CastleModulePage({ params }: CastleModulePageProps) {
  const resolvedParams = await params;
  
  // Check if this is a valid Gilded Bastion module
  if (!CASTLE_MODULES.includes(resolvedParams.module)) {
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

  const moduleIndex = CASTLE_MODULES.indexOf(resolvedParams.module);

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
          <Link href="/lessons/island4" className="hover:text-foreground flex items-center gap-1">
            <Crown className="size-3" />
            Gilded Bastion
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
                  🏰 Gilded Bastion
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
              <div className="bg-yellow-50 dark:bg-yellow-950/30 rounded-lg p-12 border-2 border-dashed border-yellow-300 dark:border-yellow-700">
                <p className="text-lg text-yellow-700 dark:text-yellow-300">IMAGE TBA</p>
                <p className="text-sm text-yellow-600 dark:text-yellow-400 mt-2">
                  Animated adventure scene for Module {moduleIndex + 1}
                </p>
              </div>
            </Card>
          )}
        </div>

        {/* Mission Story Section */}
        <div>
          {missionData ? (
            <Island4Story missionData={missionData} />
          ) : (
            <Card className="p-8 text-center">
              <div className="bg-yellow-50 dark:bg-yellow-950/30 rounded-lg p-12 border-2 border-dashed border-yellow-300 dark:border-yellow-700">
                <p className="text-lg text-yellow-700 dark:text-yellow-300 font-semibold">MISSION TEXT TBA</p>
                <p className="text-sm text-yellow-600 dark:text-yellow-400 mt-2">
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
            <Tabs defaultValue={lessonContents[0]?.slug} className="space-y-4">
              <TabsList className="flex flex-wrap h-auto w-full justify-start gap-1 p-2">
                {lessonContents.map((lesson, index) => (
                  <TabsTrigger 
                    key={lesson.slug} 
                    value={lesson.slug}
                    className="text-xs md:text-sm px-3 py-2 whitespace-nowrap"
                  >
                    <span className="flex items-center gap-1">
                      <span className="bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </span>
                      <span className="text-foreground">{lesson.title.replace(/^\d+\.\d+\s*/, '')}</span>
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
              {lessonContents.map((lesson) => (
                <TabsContent key={lesson.slug} value={lesson.slug} className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{lesson.title}</h3>
                      <div className="p-3 bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                        <p className="text-sm font-medium text-yellow-700 dark:text-yellow-300">🎯 Learning Objective:</p>
                        <p className="text-sm text-yellow-600 dark:text-yellow-400">{lesson.objective}</p>
                      </div>
                    </div>
                    <Separator />
                    <div className="prose dark:prose-invert max-w-none">
                      {lesson.content ? (
                        <MDXContent content={lesson.content} />
                      ) : (
                        <div className="text-center p-8 bg-yellow-50 dark:bg-yellow-950/30 border-2 border-dashed border-yellow-300 dark:border-yellow-700 rounded-lg">
                          <p className="text-lg text-yellow-700 dark:text-yellow-300">Content Coming in Milestone 2</p>
                          <p className="text-sm text-yellow-600 dark:text-yellow-400 mt-2">
                            Lesson content for &ldquo;{lesson.title}&rdquo; will be added in the next milestone
                          </p>
                        </div>
                      )}
                    </div>
                    {lesson.practicalTakeaway && (
                      <>
                        <Separator />
                        <div className="p-3 bg-yellow-500/5 border border-yellow-500/20 rounded-lg">
                          <p className="text-sm font-medium text-yellow-700 dark:text-yellow-300">💡 Practical Takeaway:</p>
                          <p className="text-sm text-yellow-600 dark:text-yellow-400">{lesson.practicalTakeaway}</p>
                        </div>
                      </>
                    )}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        {/* Interactive Element Section */}
        {(quizData || resolvedParams.module === 'random-number-generator-practical' || resolvedParams.module === 'upgradable-contract-practical') ? (
          <InteractiveElement quiz={quizData} missionData={missionData} moduleSlug={resolvedParams.module} />
        ) : (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="size-5" />
                Interactive Element
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center p-8">
              <div className="bg-yellow-50 dark:bg-yellow-950/30 rounded-lg p-12 border-2 border-dashed border-yellow-300 dark:border-yellow-700 space-y-4">
                <p className="text-lg text-yellow-700 dark:text-yellow-300">Interactive Content TBA</p>
                <p className="text-sm text-yellow-600 dark:text-yellow-400">
                  Interactive element for {MODULE_TITLES[resolvedParams.module as keyof typeof MODULE_TITLES]}
                </p>
                <Button disabled className="mt-4">
                  Complete Interactive Element
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <Separator />

        {/* Navigation */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Button asChild variant="outline">
            <Link href="/lessons/island4">
              <Crown className="mr-2 size-4" />
              Back to Gilded Bastion
            </Link>
          </Button>
        </div>
      </div>
    </WalletAuthGuard>
  );
}