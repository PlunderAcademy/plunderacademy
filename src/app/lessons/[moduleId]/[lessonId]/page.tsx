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
import { modules } from "@/data/lessons";

interface LessonPageProps {
  params: {
    moduleId: string;
    lessonId: string;
  };
}

export default function LessonPage({ params }: LessonPageProps) {
  const module = modules.find(m => m.id === params.moduleId);
  if (!module) notFound();
  
  const lessonIndex = module.lessons.findIndex(l => l.id === params.lessonId);
  const lesson = module.lessons[lessonIndex];
  if (!lesson) notFound();
  
  const prevLesson = lessonIndex > 0 ? module.lessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < module.lessons.length - 1 ? module.lessons[lessonIndex + 1] : null;
  
  // Find next module's first lesson if at end of current module
  const moduleIndex = modules.findIndex(m => m.id === params.moduleId);
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
          {module.title}
        </Link>
        <ChevronRight className="size-4" />
        <span className="text-foreground">{lesson.title}</span>
      </div>

      {/* Lesson Header */}
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="font-mono">
                Lesson {lesson.number}
              </Badge>
              <Badge variant="secondary">
                {module.title.replace("Module ", "").split(":")[0]}
              </Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tight">
              {lesson.title}
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
              {lesson.objective}
            </p>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Lesson Content */}
      <div 
        className="prose prose-gray max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: lesson.content }}
      />

      {/* Practical Takeaway */}
      {lesson.practicalTakeaway && (
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
                {lesson.practicalTakeaway}
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
            <Link href={`/lessons/${module.id}/${prevLesson.id}`}>
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
            <Link href={`/lessons/${module.id}/${nextLesson.id}`}>
              Next: {nextLesson.title}
              <ChevronRight className="ml-2 size-4" />
            </Link>
          </Button>
        ) : nextModuleFirstLesson ? (
          <Button asChild>
            <Link href={`/lessons/${nextModule.id}/${nextModuleFirstLesson.id}`}>
              Next Module: {nextModuleFirstLesson.title}
              <ChevronRight className="ml-2 size-4" />
            </Link>
          </Button>
        ) : module.quiz ? (
          <Button asChild variant="default">
            <Link href={`/lessons/${module.id}/quiz`}>
              Take Module Quiz
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