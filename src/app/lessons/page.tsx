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
  ChevronRight,
  MapPin,
  Compass,
  Ship,
  Trophy,
  Flag,
  TreePine,
  Crown
} from "lucide-react";
import { getIslands } from "@/lib/mdx";
import { MapZoom } from "@/components/map-zoom";

export default async function LessonsPage() {
  const islands = await getIslands();
  
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
        <div className="relative mx-auto max-w-6xl px-4 py-10">
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent">
                Treasure Map
              </span>
              <br />
              <span className="text-2xl md:text-4xl text-slate-300">
                to EVM Mastery
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-base md:text-lg text-slate-300">
              Navigate through five legendary islands and discover the treasures of blockchain development.
            </p>
          </div>
          
          {/* Overall Adventure Map (click anywhere to zoom + navigate) */}
          <MapZoom islands={islands} />
        </div>
      </div>
      
      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-4 space-y-12 pt-16">

        {/* Module Islands - Redesigned */}
        <div className="space-y-16">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm text-amber-700 dark:text-amber-300">
              <MapPin className="mr-2 size-4" />
              Adventure Islands Await
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent dark:from-white dark:via-slate-200 dark:to-white">
              Choose Your Next Adventure
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Each location holds ancient secrets of blockchain mastery. Start your journey and collect treasures of knowledge along the way.
            </p>
          </div>
          
          {/* Island Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {islands.map((island, index) => (
              <Card key={island.slug} className={`group relative overflow-hidden border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl bg-white dark:bg-slate-900`}>
                {/* Island Header */}
                <div className={`relative h-48 overflow-hidden`}>
                  <Image
                    src={`/islands/island${index + 1}/island${index + 1}-map.webp`}
                    alt={island.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                  
                  {/* Island Number Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className={`w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center shadow-xl`}>
                      <span className={`text-lg font-bold text-slate-800`}>{index + 1}</span>
                    </div>
                    {index === 0 && (
                      <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 shadow-lg animate-pulse">
                        <Flag className="size-3 mr-1" />
                        Start Here
                      </Badge>
                    )}
                  </div>
                  
                  {/* Difficulty & Stats */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-white/50">
                      <div className="text-xs font-medium text-slate-600 text-center">
                        {index === 0 ? 'Beginner' : index === 1 ? 'Intermediate' : index === 2 ? 'Advanced' : index === 3 ? 'Expert' : 'Master'}
                      </div>
                      <div className="text-sm font-bold text-slate-800 text-center">{island.modules.length} modules</div>
                    </div>
                  </div>
                  
                  {/* Floating Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-white/20 to-white/10 border-2 border-white/50 flex items-center justify-center shadow-xl backdrop-blur-sm`}>
                      <span className="text-2xl">{island.icon}</span>
                    </div>
                  </div>
                  
                  {/* Adventure Time */}
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1 text-white text-xs font-medium">
                      ~{island.estimatedHours} adventure
                    </div>
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="p-6 space-y-4">
                  {/* Island Title & Description */}
                  <div className="space-y-2">
                    <h3 className={`text-xl font-bold leading-tight group-hover:text-primary transition-colors`}>
                      {island.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {island.description}
                    </p>
                  </div>
                  
                  {/* Progress & Quick Stats */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Trophy className="size-4 text-amber-500" />
                        <span>{island.modules.reduce((acc, module) => acc + module.lessons.length, 0)}+ lessons</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Ship className="size-4 text-blue-500" />
                        <span>Ready to sail</span>
                      </div>
                    </div>
                    
                    {/* Animated Progress Bar */}
                    <div className="space-y-2">
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                        <div className={`bg-gradient-to-r from-${island.color}-400 to-${island.color}-500 h-2 rounded-full w-0 group-hover:w-full transition-all duration-1000 delay-300`} />
                      </div>
                      <div className="text-xs text-muted-foreground">Ready to begin your journey</div>
                    </div>
                  </div>
                  
                  {/* Explore Button */}
                  <Button 
                    asChild 
                    className={`w-full bg-gradient-to-r from-primary via-primary to-primary/80 hover:from-primary/90 hover:via-primary hover:to-primary text-white shadow-lg group-hover:shadow-xl transition-all duration-300 text-base font-semibold`}
                    size="lg"
                  >
                    <Link href={`/lessons/island${index + 1}`}>
                      <Compass className="mr-2 size-4" />
                      Explore Location
                      <ChevronRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
                
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-${island.color}-500/20 to-${island.color}-600/20 opacity-10`} />
                </div>
              </Card>
            ))}
          </div>
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
                <Link href="/lessons/island1">
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