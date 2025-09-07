import Link from "next/link";
import Image from "next/image";
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
  Target,
  MapPin,
  Compass,
  Ship,
  Anchor,
  Crown,
  Zap,
  Code2,
  Wrench,
  Coins,
  Trophy,
  Flag,
  LucideIcon
} from "lucide-react";
import { getModules } from "@/lib/mdx";

export default async function LessonsPage() {
  const modules = await getModules();
  
  // Module icons mapping
  const moduleIcons: Record<string, LucideIcon> = {
    'blockchain-fundamentals': Anchor,
    'evm-fundamentals': Zap, 
    'intro-to-solidity': Code2,
    'zilliqa-evm-setup': Wrench,
    'creating-erc20-tokens': Coins
  };
  
  // Module colors for theming
  const moduleColors: Record<string, string> = {
    'blockchain-fundamentals': 'from-blue-500/20 to-blue-600/20 border-blue-500/30',
    'evm-fundamentals': 'from-purple-500/20 to-purple-600/20 border-purple-500/30', 
    'intro-to-solidity': 'from-green-500/20 to-green-600/20 border-green-500/30',
    'zilliqa-evm-setup': 'from-orange-500/20 to-orange-600/20 border-orange-500/30',
    'creating-erc20-tokens': 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/30'
  };
  
  return (
    <div className="space-y-0">
      {/* Pirate Map Hero Section */}
      <div className="relative w-screen max-w-[100vw] mx-[calc(50%-50vw)] -mt-10 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        {/* Map Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.8)_100%)]" />
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 25%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 25% 75%, rgba(34, 197, 94, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(249, 115, 22, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(234, 179, 8, 0.3) 0%, transparent 50%)
            `
          }} />
        </div>
        
        {/* Content */}
        <div className="relative mx-auto max-w-6xl px-4 py-16">
          <div className="text-center space-y-8 mb-16">
            <div className="inline-flex items-center rounded-full border border-amber-500/50 bg-amber-500/10 px-4 py-2 text-sm text-amber-300">
              <Compass className="mr-2 size-4" />
              Chart Your Course to Mastery
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent">
                Treasure Map
              </span>
              <br />
              <span className="text-3xl md:text-5xl text-slate-300">
                to EVM Mastery
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-slate-300">
              Navigate through 5 legendary modules and discover the treasures of blockchain development.
              Each island holds valuable knowledge to make you a true EVM pirate.
            </p>
          </div>
          
          {/* Treasure Map Image */}
          <div className="relative mx-auto max-w-4xl mb-12">
            <Image
              src="/treasuremap.png"
              alt="Treasure Map - Learning Journey"
              width={800}
              height={500}
              className="w-full h-auto rounded-xl border-2 border-amber-500/30 shadow-2xl"
              priority
            />
          </div>
          
          {/* Map Islands Preview */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
            {modules.map((module, index) => {
              const IconComponent = moduleIcons[module.slug] || MapPin;
              return (
                <div key={module.slug} className="text-center space-y-2">
                  <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-br ${moduleColors[module.slug]} border-2 flex items-center justify-center`}>
                    <IconComponent className="size-8 text-white" />
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    Island {index + 1}
                  </div>
                  <div className="text-sm text-slate-300 leading-tight">
                    {module.title.replace('Module ' + (index + 1) + ': ', '')}
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Journey Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-center gap-2 text-2xl font-bold text-white mb-1">
                <Ship className="size-6 text-blue-400" />
                5 Islands
              </div>
              <div className="text-sm text-slate-400">Modules to Explore</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-center gap-2 text-2xl font-bold text-white mb-1">
                <Trophy className="size-6 text-amber-400" />
                {modules.reduce((acc, m) => acc + m.lessons.length, 0)} Treasures
              </div>
              <div className="text-sm text-slate-400">Lessons to Discover</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-center gap-2 text-2xl font-bold text-white mb-1">
                <Clock className="size-6 text-green-400" />
                15-20 Hours
              </div>
              <div className="text-sm text-slate-400">Epic Adventure</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-4 space-y-12 pt-16">

        {/* Module Islands */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">
              Explore the Islands
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each island contains valuable lessons and treasures. Complete them in order to unlock your path to EVM mastery.
            </p>
          </div>
          
          {modules.map((module, index) => {
            const IconComponent = moduleIcons[module.slug] || MapPin;
            const isFirstModule = index === 0;
            
            return (
              <Card key={module.id} className={`overflow-hidden border-2 bg-gradient-to-br ${moduleColors[module.slug]} relative`}>
                {/* Module Header */}
                <CardHeader className="pb-6 relative">
                  <div className="flex items-start gap-6">
                    {/* Module Icon */}
                    <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${moduleColors[module.slug]} border-2 flex items-center justify-center shadow-lg`}>
                      <IconComponent className="size-8 text-primary" />
                    </div>
                    
                    {/* Module Info */}
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3">
                        <CardTitle className="text-2xl md:text-3xl">
                          {module.title}
                        </CardTitle>
                        <Badge variant="secondary" className="text-xs">
                          {module.lessons.length} lessons
                        </Badge>
                        {isFirstModule && (
                          <Badge className="bg-amber-500 hover:bg-amber-600 text-amber-50">
                            <Flag className="size-3 mr-1" />
                            Start Here
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {module.description}
                      </CardDescription>
                      
                      {/* Quick Stats */}
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Clock className="size-4" />
                          <span>{Math.ceil(module.lessons.length * 1.5)}-{Math.ceil(module.lessons.length * 2)} hours</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Target className="size-4" />
                          <span>{index === 0 ? 'Beginner' : index < 3 ? 'Intermediate' : 'Advanced'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Lessons Treasure Map */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg flex items-center gap-2">
                      <BookOpen className="size-5" />
                      Treasures to Discover
                    </h4>
                    
                    <div className="grid gap-3">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <Link 
                          key={lesson.slug}
                          href={`/lessons/${module.slug}/${lesson.slug}`}
                          className="group"
                        >
                          <div className="flex items-center justify-between rounded-xl border bg-background/50 backdrop-blur-sm p-4 transition-all hover:bg-background/80 hover:shadow-md hover:border-primary/50">
                            <div className="flex items-start gap-4">
                              {/* Lesson Number */}
                              <div className="flex-shrink-0 size-12 flex items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-sm font-bold text-primary">
                                {lesson.number}
                              </div>
                              
                              {/* Lesson Content */}
                              <div className="space-y-2">
                                <h3 className="font-semibold leading-tight group-hover:text-primary transition-colors">
                                  {lesson.title}
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                  {lesson.objective}
                                </p>
                                {lesson.practicalTakeaway && (
                                  <p className="text-xs text-muted-foreground bg-muted/50 rounded px-2 py-1 inline-block">
                                    💎 {lesson.practicalTakeaway}
                                  </p>
                                )}
                              </div>
                            </div>
                            
                            {/* Action */}
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="text-xs">
                                ~{Math.ceil(1.5 + lessonIndex * 0.3)}h
                              </Badge>
                              <ChevronRight className="size-5 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Final Call to Action */}
        <Card className="border-2 bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-red-500/10 border-amber-500/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.1)_0%,transparent_50%)]" />
          
          <CardHeader className="text-center space-y-4 relative">
            <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-2">
              <Crown className="size-8 text-white" />
            </div>
            <CardTitle className="text-3xl">
              Ready to Claim Your Treasure?
            </CardTitle>
            <CardDescription className="text-lg">
              Embark on your legendary journey from blockchain basics to advanced EVM development.
              Your adventure to becoming an EVM master starts here!
            </CardDescription>
          </CardHeader>
          
          <CardContent className="text-center space-y-6 relative">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white">
                <Link href="/lessons/blockchain-fundamentals/blockchain-basics">
                  <Ship className="mr-2 size-4" />
                  Begin the Adventure
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <Link href="/articles">
                  <BookOpen className="mr-2 size-4" />
                  Explore Articles
                </Link>
              </Button>
            </div>
            
            <div className="text-sm text-muted-foreground">
              <p>Join thousands of developers mastering EVM development 🏴‍☠️</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}