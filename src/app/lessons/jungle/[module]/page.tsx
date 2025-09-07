import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  ChevronLeft, 
  Home, 
  TreePine,
  BookOpen,
  Trophy
} from "lucide-react";
import { getModules, getMissionByModule, getLessonByIds } from "@/lib/mdx";
import { WalletAuthGuard } from "@/components/wallet-auth-guard";
import MDXContent from "@/components/mdx-content";

// Import jungle module components
import { JungleModule1Image } from "@/components/jungle/jungle-module1-image";
import { JungleModule2Image } from "@/components/jungle/jungle-module2-image";
import { JungleModule3Image } from "@/components/jungle/jungle-module3-image";
import { JungleModule4Image } from "@/components/jungle/jungle-module4-image";
import { JungleModule5Image } from "@/components/jungle/jungle-module5-image";
import { JungleStory } from "@/components/jungle/story";

interface JungleModulePageProps {
  params: Promise<{
    module: string;
  }>;
}

// Define the jungle modules in order
const JUNGLE_MODULES = [
  'blockchain-fundamentals',
  'evm-fundamentals', 
  'intro-to-solidity',
  'zilliqa-evm-setup',
  'creating-erc20-tokens'
];

const MODULE_TITLES = {
  'blockchain-fundamentals': 'Blockchain Fundamentals',
  'evm-fundamentals': 'EVM Fundamentals',
  'intro-to-solidity': 'Intro to Solidity',
  'zilliqa-evm-setup': 'Setting Up Zilliqa EVM Development Environment',
  'creating-erc20-tokens': 'Creating Your Own Token on Zilliqa EVM'
};

// Component mappings for each module
const MODULE_IMAGE_COMPONENTS = {
  'blockchain-fundamentals': JungleModule1Image,
  'evm-fundamentals': JungleModule2Image,
  'intro-to-solidity': JungleModule3Image,
  'zilliqa-evm-setup': JungleModule4Image,
  'creating-erc20-tokens': JungleModule5Image
};


export async function generateStaticParams() {
  return JUNGLE_MODULES.map(module => ({
    module
  }));
}

export default async function JungleModulePage({ params }: JungleModulePageProps) {
  const resolvedParams = await params;
  
  // Check if this is a valid jungle module
  if (!JUNGLE_MODULES.includes(resolvedParams.module)) {
    notFound();
  }
  
  const modules = await getModules();
  const currentModule = modules.find(m => m.slug === resolvedParams.module);
  
  if (!currentModule) {
    notFound();
  }

  // Load mission data from MDX
  const missionData = await getMissionByModule(resolvedParams.module);

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

  const moduleIndex = JUNGLE_MODULES.indexOf(resolvedParams.module);
  const prevModule = moduleIndex > 0 ? JUNGLE_MODULES[moduleIndex - 1] : null;

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
        <Link href="/lessons/jungle" className="hover:text-foreground flex items-center gap-1">
          <TreePine className="size-3" />
          Jungle Island
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
                <TreePine className="size-3" />
                Jungle Island
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
            <div className="bg-muted/30 rounded-lg p-12 border-2 border-dashed border-muted-foreground/20">
              <p className="text-lg text-muted-foreground">IMAGE TBA</p>
              <p className="text-sm text-muted-foreground mt-2">
                Animated adventure scene for Module {moduleIndex + 1}
              </p>
            </div>
          </Card>
        )}
      </div>

      {/* Mission Story Section */}
      <div>
        {missionData ? (
          <JungleStory missionData={missionData} />
        ) : (
          <Card className="p-8 text-center">
            <div className="bg-muted/30 rounded-lg p-12 border-2 border-dashed border-muted-foreground/20">
              <p className="text-lg text-muted-foreground">MISSION TEXT TBA</p>
              <p className="text-sm text-muted-foreground mt-2">
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
                    <span className="bg-primary/20 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </span>
                    {lesson.title.replace(/^\d+\.\d+\s*/, '')} {/* Remove lesson numbers */}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
            {lessonContents.map((lesson) => (
              <TabsContent key={lesson.slug} value={lesson.slug} className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{lesson.title}</h3>
                    <div className="p-3 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg">
                      <p className="text-sm font-medium text-blue-700 dark:text-blue-300">🎯 Learning Objective:</p>
                      <p className="text-sm text-blue-600 dark:text-blue-400">{lesson.objective}</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="prose dark:prose-invert max-w-none">
                    {lesson.content ? (
                      <MDXContent content={lesson.content} />
                    ) : (
                      <div className="text-center p-8 bg-muted/30 border-2 border-dashed border-muted-foreground/20 rounded-lg">
                        <p className="text-lg text-muted-foreground">Content Coming Soon</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Lesson content for &ldquo;{lesson.title}&rdquo; will be added in future updates
                        </p>
                      </div>
                    )}
                  </div>
                  {lesson.practicalTakeaway && (
                    <>
                      <Separator />
                      <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
                        <p className="text-sm font-medium text-primary">💡 Practical Takeaway:</p>
                        <p className="text-sm">{lesson.practicalTakeaway}</p>
                      </div>
                    </>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      {/* Quiz Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="size-5" />
            Module Quiz
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center p-8">
          <div className="bg-muted/30 rounded-lg p-12 border-2 border-dashed border-muted-foreground/20 space-y-4">
            <p className="text-lg text-muted-foreground">Quiz Content TBA</p>
            <p className="text-sm text-muted-foreground">
              Interactive quiz for {MODULE_TITLES[resolvedParams.module as keyof typeof MODULE_TITLES]}
            </p>
            <Button disabled className="mt-4">
              Submit Quiz for Achievement
            </Button>
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* Navigation */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {prevModule ? (
          <Button asChild variant="outline">
            <Link href={`/lessons/jungle/${prevModule}`}>
              <ChevronLeft className="mr-2 size-4" />
              Previous: {MODULE_TITLES[prevModule as keyof typeof MODULE_TITLES]}
            </Link>
          </Button>
        ) : (
          <Button asChild variant="outline">
            <Link href="/lessons/jungle">
              <TreePine className="mr-2 size-4" />
              Back to Jungle Map
            </Link>
          </Button>
        )}
        
      </div>
    </div>
    </WalletAuthGuard>
  );
}
