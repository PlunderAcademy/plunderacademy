import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  Target, 
  Lightbulb,
  Home
} from "lucide-react";
import { getModules, getLessonByIds } from "@/lib/mdx";
import MDXContent from "@/components/mdx-content";

interface LessonPageProps {
  params: Promise<{
    moduleId: string;
    lessonId: string;
  }>;
}

export async function generateStaticParams() {
  const modules = await getModules();
  const params = [];
  
  for (const mod of modules) {
    for (const lesson of mod.lessons) {
      params.push({
        moduleId: mod.slug,
        lessonId: lesson.slug,
      });
    }
  }
  
  return params;
}

export default async function LessonPage({ params }: LessonPageProps) {
  const resolvedParams = await params;
  const modules = await getModules();
  
  const currentModule = modules.find(m => m.slug === resolvedParams.moduleId);
  if (!currentModule) notFound();
  
  const lessonIndex = currentModule.lessons.findIndex(l => l.slug === resolvedParams.lessonId);
  const lessonMeta = currentModule.lessons[lessonIndex];
  if (!lessonMeta) notFound();
  
  // Get the full lesson content
  let lesson;
  try {
    lesson = await getLessonByIds(resolvedParams.moduleId, resolvedParams.lessonId);
  } catch (error) {
    console.error('Error loading lesson:', error);
    notFound();
  }
  
  const prevLesson = lessonIndex > 0 ? currentModule.lessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < currentModule.lessons.length - 1 ? currentModule.lessons[lessonIndex + 1] : null;
  
  // Find next module's first lesson if at end of current module
  const moduleIndex = modules.findIndex(m => m.id === resolvedParams.moduleId);
  const nextModule = !nextLesson && moduleIndex < modules.length - 1 ? modules[moduleIndex + 1] : null;
  const nextModuleFirstLesson = nextModule ? nextModule.lessons[0] : null;

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/lessons" className="hover:text-foreground">
          Lessons
        </Link>
        <ChevronRight className="size-4" />
        <Link href="/lessons" className="hover:text-foreground">
          {currentModule.title}
        </Link>
        <ChevronRight className="size-4" />
        <span className="text-foreground">{lesson.meta.title}</span>
      </div>

      {/* Lesson Header */}
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="font-mono">
                Lesson {lesson.meta.number}
              </Badge>
              <Badge variant="secondary">
                {currentModule.title.replace("Module ", "").split(":")[0]}
              </Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tight">
              {lesson.meta.title}
            </h1>
          </div>
        </div>
        
        {/* Objective Card */}
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Target className="size-5" />
              Learning Objective
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed">
              {lesson.meta.objective}
            </p>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Lesson Content */}
      <MDXContent content={lesson.content} />

      {/* Practical Takeaway */}
      {lesson.meta.practicalTakeaway && (
        <>
          <Separator />
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="size-5 text-yellow-500" />
                Practical Takeaway
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                {lesson.meta.practicalTakeaway}
              </p>
            </CardContent>
          </Card>
        </>
      )}

      <Separator />

      {/* Navigation */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {prevLesson ? (
          <Button asChild variant="outline">
            <Link href={`/lessons/${currentModule.slug}/${prevLesson.slug}`}>
              <ChevronLeft className="mr-2 size-4" />
              Previous: {prevLesson.title}
            </Link>
          </Button>
        ) : (
          <Button asChild variant="outline">
            <Link href="/lessons">
              <Home className="mr-2 size-4" />
              Back to Lessons
            </Link>
          </Button>
        )}
        
        {nextLesson ? (
          <Button asChild>
            <Link href={`/lessons/${currentModule.slug}/${nextLesson.slug}`}>
              Next: {nextLesson.title}
              <ChevronRight className="ml-2 size-4" />
            </Link>
          </Button>
        ) : nextModuleFirstLesson && nextModule ? (
          <Button asChild>
            <Link href={`/lessons/${nextModule.slug}/${nextModuleFirstLesson.slug}`}>
              Next Module: {nextModuleFirstLesson.title}
              <ChevronRight className="ml-2 size-4" />
            </Link>
          </Button>
        ) : (
          <Button asChild variant="outline">
            <Link href="/lessons">
              <BookOpen className="mr-2 size-4" />
              View All Lessons
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}