import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  ChevronLeft, 
  Mountain,
  BookOpen,
  Trophy
} from "lucide-react";
import { getModules, getMissionByModule, getLessonByIds, getQuizByModule } from "@/lib/mdx";
import { WalletAuthGuard } from "@/components/wallet-auth-guard";
import MDXContent from "@/components/mdx-content";

interface DesertModulePageProps {
  params: Promise<{
    module: string;
  }>;
}

// Desert island modules
const DESERT_MODULES = [
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

export async function generateStaticParams() {
  return DESERT_MODULES.map(module => ({
    module
  }));
}

export default async function DesertModulePage({ params }: DesertModulePageProps) {
  const resolvedParams = await params;
  
  // Check if this is a valid desert module
  if (!DESERT_MODULES.includes(resolvedParams.module)) {
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

  const moduleIndex = DESERT_MODULES.indexOf(resolvedParams.module);

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
            <Mountain className="size-3" />
            Desert Island
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
                  🏜️ Desert Island
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
          <Card className="p-8 text-center">
            <div className="bg-orange-50 dark:bg-orange-950/30 rounded-lg p-12 border-2 border-dashed border-orange-300 dark:border-orange-700">
              <div className="text-6xl opacity-60 mb-4">🏜️</div>
              <p className="text-lg text-orange-700 dark:text-orange-300 font-semibold">Desert Adventure Scene</p>
              <p className="text-sm text-orange-600 dark:text-orange-400 mt-2">
                Animated adventure scene for Module {moduleIndex + 1} coming in Milestone 2
              </p>
            </div>
          </Card>
        </div>

        {/* Mission Story Section */}
        <div>
          {missionData ? (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-orange-800 dark:text-orange-200">
                  {missionData.title}
                </CardTitle>
                <p className="text-orange-600 dark:text-orange-400">{missionData.subtitle}</p>
              </CardHeader>
              <CardContent>
                <div className="prose dark:prose-invert max-w-none">
                  <MDXContent content={missionData.content} />
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="p-8 text-center">
              <div className="bg-orange-50 dark:bg-orange-950/30 rounded-lg p-12 border-2 border-dashed border-orange-300 dark:border-orange-700">
                <p className="text-lg text-orange-700 dark:text-orange-300 font-semibold">Mission Story TBA</p>
                <p className="text-sm text-orange-600 dark:text-orange-400 mt-2">
                  Desert adventure story for {MODULE_TITLES[resolvedParams.module as keyof typeof MODULE_TITLES]}
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
                      <span className="bg-orange-500/20 text-orange-700 dark:text-orange-300 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </span>
                      {lesson.title.replace(/^\d+\.\d+\s*/, '')}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
              {lessonContents.map((lesson) => (
                <TabsContent key={lesson.slug} value={lesson.slug} className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{lesson.title}</h3>
                      <div className="p-3 bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800 rounded-lg">
                        <p className="text-sm font-medium text-orange-700 dark:text-orange-300">🎯 Learning Objective:</p>
                        <p className="text-sm text-orange-600 dark:text-orange-400">{lesson.objective}</p>
                      </div>
                    </div>
                    <Separator />
                    <div className="prose dark:prose-invert max-w-none">
                      {lesson.content ? (
                        <MDXContent content={lesson.content} />
                      ) : (
                        <div className="text-center p-8 bg-orange-50 dark:bg-orange-950/30 border-2 border-dashed border-orange-300 dark:border-orange-700 rounded-lg">
                          <p className="text-lg text-orange-700 dark:text-orange-300">Content Coming in Milestone 2</p>
                          <p className="text-sm text-orange-600 dark:text-orange-400 mt-2">
                            Lesson content for &ldquo;{lesson.title}&rdquo; will be added in the next milestone
                          </p>
                        </div>
                      )}
                    </div>
                    {lesson.practicalTakeaway && (
                      <>
                        <Separator />
                        <div className="p-3 bg-orange-500/5 border border-orange-500/20 rounded-lg">
                          <p className="text-sm font-medium text-orange-700 dark:text-orange-300">💡 Practical Takeaway:</p>
                          <p className="text-sm text-orange-600 dark:text-orange-400">{lesson.practicalTakeaway}</p>
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
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="size-5" />
              Interactive Element
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center p-8">
            <div className="bg-orange-50 dark:bg-orange-950/30 rounded-lg p-12 border-2 border-dashed border-orange-300 dark:border-orange-700 space-y-4">
              <div className="text-4xl opacity-60">🎯</div>
              <p className="text-lg text-orange-700 dark:text-orange-300 font-semibold">Interactive Content Coming Soon</p>
              <p className="text-sm text-orange-600 dark:text-orange-400">
                Interactive element for {MODULE_TITLES[resolvedParams.module as keyof typeof MODULE_TITLES]}
              </p>
              <Button disabled className="mt-4">
                Complete Interactive Element
              </Button>
            </div>
          </CardContent>
        </Card>

        <Separator />

        {/* Navigation */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button asChild variant="outline">
          <Link href="/lessons/island2">
            <Mountain className="mr-2 size-4" />
            Back to Desert Island
          </Link>
        </Button>
        </div>
      </div>
    </WalletAuthGuard>
  );
}
