'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight, Trophy } from "lucide-react";
import MDXContent from "@/components/mdx-content";
import { InteractiveElement, isTransactionSubmissionModule } from "@/components/interactive-elements";

interface LessonContent {
  slug: string;
  title: string;
  objective: string;
  practicalTakeaway?: string;
  content: string | null;
}

interface LessonTabsWithNavigationProps {
  lessonContents: LessonContent[];
  quizData: any;
  missionData: any;
  moduleSlug: string;
  islandTheme: {
    badge: string;
    bgColor: string;
    borderColor: string;
    textColor: string;
    textColorSecondary: string;
  };
  interactiveTitle?: string;
  showInteractiveInTabs?: boolean; // Whether to show interactive element in last tab
  beforeInteractive?: React.ReactNode; // Optional content to show before interactive element (e.g. Token Factory)
}

export function LessonTabsWithNavigation({
  lessonContents,
  quizData,
  missionData,
  moduleSlug,
  islandTheme,
  interactiveTitle = "Interactive Element",
  showInteractiveInTabs = true,
  beforeInteractive
}: LessonTabsWithNavigationProps) {
  const [activeTab, setActiveTab] = useState(lessonContents[0]?.slug || "");
  
  const currentIndex = lessonContents.findIndex(lesson => lesson.slug === activeTab);
  const hasNextLesson = currentIndex < lessonContents.length - 1;
  const hasPrevLesson = currentIndex > 0;
  
  const goToNextLesson = () => {
    if (hasNextLesson) {
      setActiveTab(lessonContents[currentIndex + 1].slug);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const goToPrevLesson = () => {
    if (hasPrevLesson) {
      setActiveTab(lessonContents[currentIndex - 1].slug);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
      <TabsList className="flex flex-wrap h-auto w-full justify-start gap-1 p-2">
        {lessonContents.map((lesson, index) => (
          <TabsTrigger 
            key={lesson.slug} 
            value={lesson.slug}
            className="text-xs md:text-sm px-3 py-2 whitespace-nowrap"
          >
            <span className="flex items-center gap-1">
              <span className={`${islandTheme.bgColor} ${islandTheme.textColor} rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold`}>
                {index + 1}
              </span>
              <span className="text-foreground">{lesson.title.replace(/^\d+\.\d+\s*/, '')}</span>
            </span>
          </TabsTrigger>
        ))}
      </TabsList>
      
      {lessonContents.map((lesson, index) => {
        const isLastLesson = index === lessonContents.length - 1;
        return (
          <TabsContent key={lesson.slug} value={lesson.slug} className="space-y-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">{lesson.title}</h3>
                <div className={`p-3 ${islandTheme.bgColor} border ${islandTheme.borderColor} rounded-lg`}>
                  <p className={`text-sm font-medium ${islandTheme.textColor}`}>🎯 Learning Objective:</p>
                  <p className={`text-sm ${islandTheme.textColorSecondary}`}>{lesson.objective}</p>
                </div>
              </div>
              <Separator />
              <div className="prose dark:prose-invert max-w-none">
                {lesson.content ? (
                  <MDXContent content={lesson.content} />
                ) : (
                  <div className={`text-center p-8 ${islandTheme.bgColor} border-2 border-dashed ${islandTheme.borderColor} rounded-lg`}>
                    <p className={`text-lg ${islandTheme.textColor}`}>Content Coming in Milestone 2</p>
                    <p className={`text-sm ${islandTheme.textColorSecondary} mt-2`}>
                      Lesson content for &ldquo;{lesson.title}&rdquo; will be added in the next milestone
                    </p>
                  </div>
                )}
              </div>
              {lesson.practicalTakeaway && (
                <>
                  <Separator />
                  <div className={`p-3 ${islandTheme.bgColor.replace('/30', '/5')} border ${islandTheme.borderColor.replace('border-', 'border-').replace(/\d+/, '20')} rounded-lg`}>
                    <p className={`text-sm font-medium ${islandTheme.textColor}`}>💡 Practical Takeaway:</p>
                    <p className={`text-sm ${islandTheme.textColorSecondary}`}>{lesson.practicalTakeaway}</p>
                  </div>
                </>
              )}
            </div>

            {/* Interactive Element - Only show on last lesson */}
            {isLastLesson && (
              <div key="interactive-section" className="space-y-4">
                {/* Optional content before interactive element (e.g. Token Factory) */}
                {beforeInteractive && (
                  <>
                    <Separator />
                    {beforeInteractive}
                  </>
                )}
                
                <Separator />
                {(quizData || isTransactionSubmissionModule(moduleSlug)) ? (
                  <InteractiveElement quiz={quizData} missionData={missionData} moduleSlug={moduleSlug} />
                ) : (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Trophy className="size-5" />
                        {interactiveTitle}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center p-8">
                      <div className={`${islandTheme.bgColor} rounded-lg p-12 border-2 border-dashed ${islandTheme.borderColor} space-y-4`}>
                        <p className={`text-lg ${islandTheme.textColor}`}>Interactive Content TBA</p>
                        <p className={`text-sm ${islandTheme.textColorSecondary}`}>
                          Interactive element coming soon
                        </p>
                        <Button disabled className="mt-4">
                          Complete Interactive Element
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}

            {/* Lesson Navigation */}
            <div className="flex items-center justify-between pt-4">
              <Button 
                variant="outline" 
                onClick={goToPrevLesson} 
                disabled={!hasPrevLesson}
              >
                <ChevronLeft className="mr-2 size-4" />
                Previous Lesson
              </Button>
              
              <Button 
                variant="outline" 
                onClick={goToNextLesson} 
                disabled={!hasNextLesson}
              >
                Next Lesson
                <ChevronRight className="ml-2 size-4" />
              </Button>
            </div>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}

