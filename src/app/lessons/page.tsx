import Link from "next/link";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Clock, 
  ChevronRight,
  GraduationCap,
  Target
} from "lucide-react";
import { getModules } from "@/lib/mdx";

export default async function LessonsPage() {
  const modules = await getModules();
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Structured Learning Path
        </h1>
        <p className="text-lg text-muted-foreground">
          Follow our comprehensive curriculum from blockchain basics to advanced smart contract development on Zilliqa EVM.
        </p>
      </div>

      {/* Progress Overview */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="size-5" />
            Your Learning Journey
          </CardTitle>
          <CardDescription>
            5 modules • {modules.reduce((acc, m) => acc + m.lessons.length, 0)} lessons • Interactive quizzes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="size-4 text-muted-foreground" />
              <span>Estimated: 15-20 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="size-4 text-muted-foreground" />
              <span>Beginner to Advanced</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Modules List */}
      <div className="space-y-6">
        {modules.map((module) => (
          <Card key={module.id} className="overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="text-2xl">
                    {module.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {module.description}
                  </CardDescription>
                </div>
                <Badge variant="outline" className="ml-4">
                  {module.lessons.length} lessons
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Lessons Grid */}
              <div className="grid gap-3">
                {module.lessons.map((lesson) => (
                  <Link 
                    key={lesson.slug}
                    href={`/lessons/${module.slug}/${lesson.slug}`}
                    className="group"
                  >
                    <div className="flex items-center justify-between rounded-lg border p-4 transition-all hover:bg-secondary/50 hover:shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold">
                          {lesson.number}
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-semibold leading-tight">
                            {lesson.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {lesson.objective}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>

            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <Card className="border-2 bg-gradient-to-r from-primary/5 to-primary/10">
        <CardHeader>
          <CardTitle>Ready to start your blockchain journey?</CardTitle>
          <CardDescription>
            Begin with Module 1 to build a solid foundation in blockchain technology and Zilliqa EVM development.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild size="lg">
            <Link href="/lessons/blockchain-fundamentals/blockchain-basics">
              <BookOpen className="mr-2 size-4" />
              Start Learning
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}