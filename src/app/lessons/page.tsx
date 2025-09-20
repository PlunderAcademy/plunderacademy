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
              Navigate through five legendary modules and discover the treasures of blockchain development.
              Each island holds valuable knowledge to make you a true EVM pirate.
            </p>
            <p className="mx-auto max-w-3xl text-xl text-slate-300">
              NOTE: The map is a work in progress and will be updated as we build out content in Milestone Two.  The other islands are placeholders and may be different than the ones shown here.
            </p>
          </div>
          
          {/* Overall Adventure Map (click anywhere to zoom + navigate) */}
          <MapZoom />
          
          {/* Islands Preview */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
            {islands.map((island, index) => (
              <div key={island.slug} className="text-center space-y-2">
                <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-${island.color}-500/${island.status === 'available' ? '20' : '10'} to-${island.color}-600/${island.status === 'available' ? '20' : '10'} border-2 border-${island.color}-500/${island.status === 'available' ? '30' : '20'} flex items-center justify-center ${island.status === 'coming-soon' ? 'opacity-60' : ''}`}>
                  {island.slug === 'jungle' ? (
                    <TreePine className="size-8 text-white" />
                  ) : (
                    <span className="text-2xl">{island.icon}</span>
                  )}
                </div>
                <div className={`text-xs font-medium ${island.status === 'available' ? 'text-slate-400' : 'text-slate-500'}`}>
                  Island {index + 1}
                </div>
                <div className={`text-sm leading-tight ${island.status === 'available' ? 'text-slate-300' : 'text-slate-500'}`}>
                  {island.status === 'available' ? island.title : 'Coming Soon'}
                </div>
              </div>
            ))}
          </div>
          
          {/* Journey Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-center gap-2 text-2xl font-bold text-white mb-1">
                <Ship className="size-6 text-blue-400" />
                {islands.filter(island => island.status === 'available').length} Island{islands.filter(island => island.status === 'available').length !== 1 ? 's' : ''}
              </div>
              <div className="text-sm text-slate-400">Available Now</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-center gap-2 text-2xl font-bold text-white mb-1">
                <Trophy className="size-6 text-amber-400" />
                {islands.find(island => island.status === 'available')?.modules.reduce((acc, module) => acc + module.lessons.length, 0) || 0}+ Lessons
              </div>
              <div className="text-sm text-slate-400">In Available Islands</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-center gap-2 text-2xl font-bold text-white mb-1">
                <Clock className="size-6 text-green-400" />
                {islands.find(island => island.status === 'available')?.estimatedHours || 'TBA'}
              </div>
              <div className="text-sm text-slate-400">{islands.find(island => island.status === 'available')?.name || 'Adventure'}</div>
            </div>
          </div>
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
              Each island holds ancient secrets of blockchain mastery. Start your journey and collect treasures of knowledge along the way.
            </p>
          </div>
          
          {/* Island Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {islands.map((island, index) => (
              <Card key={island.slug} className={`group relative overflow-hidden border-2 transition-all duration-300 ${island.status === 'available' ? 'hover:scale-[1.02] hover:shadow-2xl' : 'opacity-60'} bg-white dark:bg-slate-900`}>
                {/* Island Header */}
                <div className={`relative h-48 overflow-hidden ${island.status === 'available' ? '' : 'bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900'}`}>
                  {island.status === 'available' && island.slug === 'jungle' && (
                    <Image
                      src="/islands/island1/island1-map.webp"
                      alt={island.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                  
                  {/* Island Number Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className={`w-10 h-10 rounded-full ${island.status === 'available' ? 'bg-white/90' : 'bg-white/60'} backdrop-blur-sm border-2 ${island.status === 'available' ? 'border-white/50' : 'border-white/30'} flex items-center justify-center shadow-xl`}>
                      <span className={`text-lg font-bold ${island.status === 'available' ? 'text-slate-800' : 'text-slate-600'}`}>{index + 1}</span>
                    </div>
                    {island.status === 'available' ? (
                      <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 shadow-lg animate-pulse">
                        <Flag className="size-3 mr-1" />
                        Start Here
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="bg-white/60 text-slate-600 border-slate-400">
                        Coming Soon
                      </Badge>
                    )}
                  </div>
                  
                  {/* Difficulty & Stats for available islands */}
                  {island.status === 'available' && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-white/50">
                        <div className="text-xs font-medium text-slate-600 text-center">Beginner</div>
                        <div className="text-sm font-bold text-slate-800 text-center">{island.modules.length} modules</div>
                      </div>
                    </div>
                  )}
                  
                  {/* Floating Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-${island.color}-500/20 to-${island.color}-600/20 border-${island.color}-500/30 border-2 border-white/50 flex items-center justify-center shadow-xl backdrop-blur-sm`}>
                      {island.slug === 'jungle' ? (
                        <TreePine className="size-6 text-white drop-shadow-sm" />
                      ) : (
                        <span className="text-2xl">{island.icon}</span>
                      )}
                    </div>
                  </div>
                  
                  {/* Adventure Time */}
                  {island.status === 'available' && (
                    <div className="absolute bottom-4 right-4">
                      <div className="bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1 text-white text-xs font-medium">
                        ~{island.estimatedHours} adventure
                      </div>
                    </div>
                  )}
                  
                  {/* Coming Soon Icon for inactive islands */}
                  {island.status === 'coming-soon' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl opacity-60">{island.icon}</span>
                    </div>
                  )}
                </div>
                
                {/* Card Content */}
                <div className="p-6 space-y-4">
                  {/* Island Title & Description */}
                  <div className="space-y-2">
                    <h3 className={`text-xl font-bold leading-tight ${island.status === 'available' ? 'group-hover:text-primary transition-colors' : 'text-muted-foreground'}`}>
                      {island.status === 'available' ? island.title : island.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {island.description}
                    </p>
                  </div>
                  
                  {/* Progress & Quick Stats for available islands */}
                  {island.status === 'available' && (
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
                  )}
                  
                  {/* Explore Button */}
                  {island.status === 'available' ? (
                    <Button 
                      asChild 
                      className="w-full bg-gradient-to-r from-primary via-primary to-primary/80 hover:from-primary/90 hover:via-primary hover:to-primary text-white shadow-lg group-hover:shadow-xl transition-all duration-300 text-base font-semibold"
                      size="lg"
                    >
                      <Link href={`/lessons/${island.slug}`}>
                        <Compass className="mr-2 size-4" />
                        Explore Island
                        <ChevronRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  ) : (
                    <Button disabled className="w-full" size="lg">
                      <Compass className="mr-2 size-4" />
                      Coming Soon
                    </Button>
                  )}
                </div>
                
                {/* Hover Glow */}
                {island.status === 'available' && (
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-${island.color}-500/20 to-${island.color}-600/20 opacity-10`} />
                  </div>
                )}
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
                <Link href={`/lessons/${islands.find(island => island.status === 'available')?.slug || 'jungle'}`}>
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