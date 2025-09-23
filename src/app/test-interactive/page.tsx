"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Import our prototype components
import { DragDropCodePuzzle } from "@/components/interactive-elements/prototypes/drag-drop-puzzle";
import { TimelineBuilder } from "@/components/interactive-elements/prototypes/timeline-builder";
import { ConceptMatching } from "@/components/interactive-elements/prototypes/concept-matching";
import { WordJumble } from "@/components/interactive-elements/prototypes/word-jumble";

export default function TestInteractivePage() {
  const [activeTab, setActiveTab] = useState("drag-drop");

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Interactive Element Prototypes</h1>
        <p className="text-muted-foreground">
          Testing new interactive element types for Plunder Academy modules
        </p>
        <Badge variant="outline" className="mt-2">🧪 Test Environment</Badge>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="drag-drop">🧩 Drag & Drop</TabsTrigger>
          <TabsTrigger value="timeline">📅 Timeline</TabsTrigger>
          <TabsTrigger value="matching">🎯 Concept Match</TabsTrigger>
          <TabsTrigger value="jumble">🔤 Word Jumble</TabsTrigger>
        </TabsList>

        <TabsContent value="drag-drop" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Drag & Drop Code Puzzle</CardTitle>
              <p className="text-muted-foreground">
                Arrange code blocks in the correct order to create a functioning smart contract
              </p>
            </CardHeader>
            <CardContent>
              <DragDropCodePuzzle />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timeline" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Timeline Builder</CardTitle>
              <p className="text-muted-foreground">
                Arrange transaction lifecycle events in the correct chronological order
              </p>
            </CardHeader>
            <CardContent>
              <TimelineBuilder />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="matching" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Concept Matching</CardTitle>
              <p className="text-muted-foreground">
                Drag concepts from the left and match them with definitions on the right
              </p>
            </CardHeader>
            <CardContent>
              <ConceptMatching />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="jumble" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Word Jumble Challenge</CardTitle>
              <p className="text-muted-foreground">
                Unscramble the letters to form blockchain and Solidity terminology
              </p>
            </CardHeader>
            <CardContent>
              <WordJumble />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 text-sm text-muted-foreground">
        <p><strong>Note:</strong> These are prototypes for testing four new interactive element types:</p>
        <ul className="list-disc ml-4 mt-1">
          <li><strong>Drag & Drop Puzzle:</strong> Code arrangement challenges</li>
          <li><strong>Timeline Builder:</strong> Sequential process understanding</li>
          <li><strong>Concept Matching:</strong> Drag-and-drop concept-definition pairing</li>
          <li><strong>Word Jumble:</strong> Letter unscrambling for terminology learning</li>
        </ul>
        <p className="mt-2">Data structure will be compatible with MDX files like the existing quiz system.</p>
      </div>
    </div>
  );
}
