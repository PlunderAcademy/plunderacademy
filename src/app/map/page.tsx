"use client";

import { useState } from "react";
import { Metadata } from "next";
import { AnimatedMap } from "@/components/animated-map";
import { AnimatedJungle } from "@/components/animated-jungle";
import { AnimatedModuleImage } from "@/components/animated-module-image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Map, Trophy, Zap, TreePine, Mountain } from "lucide-react";

export default function MapPage() {
  const [mapMode, setMapMode] = useState<"demo" | "real">("real");
  
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Training Progress Map
        </h1>
        <p className="text-lg text-muted-foreground">
          Track your achievement journey across different training locations
        </p>
      </div>
      
      {/* Mode Selector */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Map className="w-5 h-5" />
            Map Mode
          </CardTitle>
          <CardDescription>
            Choose how to view the training map
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3">
            <Button
              variant={mapMode === "real" ? "default" : "outline"}
              onClick={() => setMapMode("real")}
              className="flex items-center gap-2"
            >
              <Trophy className="w-4 h-4" />
              My Progress
              <Badge variant="secondary" className="ml-1">Real Data</Badge>
            </Button>
            <Button
              variant={mapMode === "demo" ? "default" : "outline"}
              onClick={() => setMapMode("demo")}
              className="flex items-center gap-2"
            >
              <Zap className="w-4 h-4" />
              Full Journey Demo
              <Badge variant="secondary" className="ml-1">Preview</Badge>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            {mapMode === "real" 
              ? "Shows your actual achievement progress. Connect your wallet to see earned achievements as green checkmarks."
              : "Demonstrates the complete journey animation from start to finish."
            }
          </p>
        </CardContent>
      </Card>
      
      <AnimatedMap mode={mapMode} />
      
      {/* Separator */}
      <div className="my-12">
        <Separator />
      </div>
      
      {/* Animated Jungle Section */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4 flex items-center justify-center gap-3">
          <TreePine className="w-8 h-8 text-green-600" />
          Magical Forest Demo
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Watch as we bring a static jungle scene to life with CSS animations - 
          shimmering windows, dancing fireflies, swaying lanterns, and magical sparkles
        </p>
      </div>
      
      <AnimatedJungle />
      
      {/* Separator */}
      <div className="my-12">
        <Separator />
      </div>
      
      {/* Animated Module Image Section */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4 flex items-center justify-center gap-3">
          <Mountain className="w-8 h-8 text-red-600" />
          Volcanic Adventure Demo
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Witness the power of nature with lightning strikes illuminating the sky, 
          a glowing volcano with flowing lava, rising smoke, and dancing embers
        </p>
      </div>
      
      <AnimatedModuleImage 
        imageNumber={1}
        title="Volcanic Island Adventure"
      />
    </div>
  );
}
