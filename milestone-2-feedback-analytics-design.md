# Feedback & Analytics System Design

This document outlines the comprehensive feedback collection and analytics system for Plunder Academy, leveraging our existing D1 database and on-chain achievement infrastructure.

## 🎯 Objectives

- **Track AI tool effectiveness** with user identity linking
- **Collect user feedback** on AI responses and learning modules
- **Measure learning outcomes** through on-chain achievement correlation
- **Enable data-driven improvements** to curriculum and AI tools
- **Demonstrate Milestone 2 compliance** with comprehensive metrics

## 🏗️ System Architecture

### Current Infrastructure

- ✅ Cloudflare D1 database with achievements system
- ✅ Wallet-based authentication via RainbowKit
- ✅ AI tools (auditor & chat) with Vercel AI SDK
- ✅ On-chain achievement/certification tracking

### New Components to Build

- 🔨 Feedback collection UI components
- 🔨 Wallet identity linking in AI routes
- 🔨 Analytics database schema extensions
- 🔨 Reporting dashboard components

## 📊 Database Schema (D1 Extensions)

### 1. AI Interactions Tracking

```sql
-- Track all AI tool usage with user identity
CREATE TABLE ai_interactions (
  id TEXT PRIMARY KEY,
  wallet_address TEXT NOT NULL,
  tool_type TEXT NOT NULL, -- 'auditor' or 'chat'
  input_length INTEGER,
  output_length INTEGER,
  model_used TEXT,
  duration_ms INTEGER,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  
  -- Tool-specific metrics
  vulnerabilities_found INTEGER, -- For auditor
  query_category TEXT, -- For chat ('setup', 'debugging', 'concepts', etc.)
  
  -- Learning context
  current_module TEXT,
  user_achievements TEXT, -- JSON array of current achievement codes
  session_id TEXT,
  
  -- Quality indicators
  had_followup_questions BOOLEAN DEFAULT FALSE,
  user_applied_suggestions BOOLEAN DEFAULT NULL
);
```

### 2. User Feedback Collection

```sql
-- Collect explicit feedback on AI responses
CREATE TABLE ai_feedback (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  interaction_id TEXT NOT NULL, -- Links to ai_interactions.id
  wallet_address TEXT NOT NULL,
  tool_type TEXT NOT NULL,
  feedback_type TEXT NOT NULL, -- 'thumbs_up', 'thumbs_down', 'rating', 'text'
  feedback_value TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  
  -- Additional context
  response_quality_rating INTEGER, -- 1-5 scale
  suggestion_helpfulness INTEGER, -- 1-5 scale
  would_recommend BOOLEAN,
  
  FOREIGN KEY (interaction_id) REFERENCES ai_interactions(id)
);
```

### 3. Module Completion Feedback

```sql
-- Collect feedback at end of learning modules
CREATE TABLE module_feedback (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  wallet_address TEXT NOT NULL,
  module_slug TEXT NOT NULL,
  achievement_codes TEXT, -- JSON array of achievements earned
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  
  -- Learning experience ratings (1-5 scale)
  content_difficulty INTEGER,
  content_clarity INTEGER,
  practical_value INTEGER,
  pace_appropriateness INTEGER,
  
  -- Text feedback
  what_worked_well TEXT,
  suggestions_for_improvement TEXT,
  additional_topics_wanted TEXT,
  
  -- Engagement indicators
  time_spent_minutes INTEGER,
  external_resources_used BOOLEAN,
  ai_tools_helpful BOOLEAN
);
```

### 4. Learning Analytics Views

```sql
-- Comprehensive user learning analytics
CREATE VIEW user_learning_analytics AS
SELECT 
  u.wallet_address,
  
  -- AI tool usage
  COUNT(ai.id) as total_ai_interactions,
  COUNT(CASE WHEN ai.tool_type = 'auditor' THEN 1 END) as auditor_usage,
  COUNT(CASE WHEN ai.tool_type = 'chat' THEN 1 END) as chat_usage,
  AVG(ai.vulnerabilities_found) as avg_vulnerabilities_per_scan,
  AVG(ai.duration_ms) as avg_interaction_duration,
  
  -- Feedback sentiment
  COUNT(CASE WHEN af.feedback_type = 'thumbs_up' THEN 1 END) as positive_feedback,
  COUNT(CASE WHEN af.feedback_type = 'thumbs_down' THEN 1 END) as negative_feedback,
  AVG(af.response_quality_rating) as avg_quality_rating,
  
  -- Learning progress
  ac.achievement_count,
  ac.latest_achievement_date,
  mc.modules_completed,
  AVG(mf.content_difficulty) as perceived_difficulty,
  AVG(mf.practical_value) as perceived_value
  
FROM (SELECT DISTINCT wallet_address FROM ai_interactions) u
LEFT JOIN ai_interactions ai ON u.wallet_address = ai.wallet_address
LEFT JOIN ai_feedback af ON ai.id = af.interaction_id
LEFT JOIN (
  SELECT 
    wallet_address,
    COUNT(*) as achievement_count,
    MAX(earned_at) as latest_achievement_date
  FROM user_achievements 
  GROUP BY wallet_address
) ac ON u.wallet_address = ac.wallet_address
LEFT JOIN (
  SELECT 
    wallet_address,
    COUNT(DISTINCT module_slug) as modules_completed
  FROM module_feedback
  GROUP BY wallet_address
) mc ON u.wallet_address = mc.wallet_address
LEFT JOIN module_feedback mf ON u.wallet_address = mf.wallet_address
GROUP BY u.wallet_address;
```

## 🔧 Implementation Components

### 1. Enhanced AI Routes with Wallet Tracking

#### AI Auditor Route Enhancement

```typescript
// src/app/api/reviewer/route.ts
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const startTime = Date.now();
  const interactionId = crypto.randomUUID();
  
  // Extract wallet address from request headers
  const walletAddress = req.headers.get('x-wallet-address');
  const sessionId = req.headers.get('x-session-id') || crypto.randomUUID();
  
  if (!walletAddress) {
    return new Response("Wallet address required", { status: 401 });
  }

  const body = await req.json();
  const { prompt } = body;

  // Get user's current achievements for context
  const userAchievements = await getUserAchievements(walletAddress);
  const currentModule = await getCurrentModule(walletAddress);

  // Your existing AI logic...
  const result = await streamText({
    model: modelName,
    system: getSystemPrompt(),
    prompt,
    temperature: 0.2,
  });

  // Store interaction with comprehensive tracking
  result.text.then(async (fullResponse) => {
    const analysis = analyzeAuditorResponse(fullResponse);
    
    await storeAIInteraction({
      id: interactionId,
      walletAddress,
      toolType: 'auditor',
      inputLength: prompt.length,
      outputLength: fullResponse.length,
      modelUsed: modelName,
      durationMs: Date.now() - startTime,
      vulnerabilitiesFound: analysis.vulnerabilityCount,
      currentModule,
      userAchievements: JSON.stringify(userAchievements),
      sessionId
    });
  });

  // Add interaction ID to response for frontend feedback linking
  const response = result.toTextStreamResponse();
  response.headers.set('X-Interaction-ID', interactionId);
  response.headers.set('X-Session-ID', sessionId);
  
  return response;
}

async function storeAIInteraction(data: AIInteractionData) {
  // Store in D1 database
  await env.DB.prepare(`
    INSERT INTO ai_interactions (
      id, wallet_address, tool_type, input_length, output_length, 
      model_used, duration_ms, vulnerabilities_found, current_module, 
      user_achievements, session_id, created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(
    data.id, data.walletAddress, data.toolType, data.inputLength, 
    data.outputLength, data.modelUsed, data.durationMs, 
    data.vulnerabilitiesFound, data.currentModule, 
    data.userAchievements, data.sessionId, new Date().toISOString()
  ).run();
}

function analyzeAuditorResponse(response: string) {
  // Parse AI response to extract metrics
  const vulnerabilityCount = (response.match(/### \d+\./g) || []).length;
  const hasCriticalFindings = response.includes('Critical');
  const hasRecommendations = response.includes('## Recommendations');
  
  return {
    vulnerabilityCount,
    hasCriticalFindings,
    hasRecommendations,
    hasAllSections: response.includes('## Executive Summary') && 
                   response.includes('## Critical Findings') &&
                   response.includes('## Detailed Analysis')
  };
}
```

#### Chat Route Enhancement

```typescript
// src/app/api/chat/route.ts
export async function POST(req: NextRequest) {
  const walletAddress = req.headers.get('x-wallet-address');
  const sessionId = req.headers.get('x-session-id') || crypto.randomUUID();
  
  if (!walletAddress) {
    return new Response("Wallet address required", { status: 401 });
  }

  const body = await req.json();
  const { messages } = body;
  const latestMessage = messages[messages.length - 1];
  
  const interactionId = crypto.randomUUID();
  const startTime = Date.now();

  // Categorize the query type
  const queryCategory = categorizeQuery(latestMessage.content);
  
  const result = await streamText({
    model: modelName,
    system: getSystemPrompt(),
    messages: convertToModelMessages(messages),
  });

  // Track chat interaction
  result.text.then(async (fullResponse) => {
    await storeAIInteraction({
      id: interactionId,
      walletAddress,
      toolType: 'chat',
      inputLength: latestMessage.content.length,
      outputLength: fullResponse.length,
      modelUsed: modelName,
      durationMs: Date.now() - startTime,
      queryCategory,
      sessionId
    });
  });

  const response = result.toUIMessageStreamResponse();
  response.headers.set('X-Interaction-ID', interactionId);
  
  return response;
}

function categorizeQuery(query: string): string {
  const lowerQuery = query.toLowerCase();
  
  if (lowerQuery.includes('setup') || lowerQuery.includes('install') || lowerQuery.includes('configure')) {
    return 'setup';
  } else if (lowerQuery.includes('error') || lowerQuery.includes('debug') || lowerQuery.includes('fix')) {
    return 'debugging';
  } else if (lowerQuery.includes('how') || lowerQuery.includes('what') || lowerQuery.includes('explain')) {
    return 'concepts';
  } else if (lowerQuery.includes('deploy') || lowerQuery.includes('mainnet') || lowerQuery.includes('production')) {
    return 'deployment';
  } else {
    return 'general';
  }
}
```

### 2. Frontend Wallet Identity Integration

#### Enhanced Wallet Context

```typescript
// src/lib/wallet-context.ts
"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

interface WalletContextType {
  address?: string;
  isConnected: boolean;
  sessionId: string;
}

export const WalletAuthContext = createContext<WalletContextType | null>(null);

export function WalletAuthProvider({ children }: { children: React.ReactNode }) {
  const { address, isConnected } = useAccount();
  const [sessionId] = useState(() => crypto.randomUUID());

  return (
    <WalletAuthContext.Provider value={{ address, isConnected, sessionId }}>
      {children}
    </WalletAuthContext.Provider>
  );
}

export function useWalletAuth() {
  const context = useContext(WalletAuthContext);
  if (!context) {
    throw new Error('useWalletAuth must be used within WalletAuthProvider');
  }
  return context;
}
```

#### Enhanced AI Components with Feedback

```typescript
// src/components/ai-elements/message-with-feedback.tsx
'use client';

import { useState } from 'react';
import { ThumbsUp, ThumbsDown, MessageSquare, Star } from 'lucide-react';
import { Message, MessageContent, MessageAvatar } from './message';
import { Actions, Action } from './actions';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useWalletAuth } from '@/lib/wallet-context';

export type MessageWithFeedbackProps = {
  messageId: string;
  interactionId?: string;
  toolType: 'auditor' | 'chat';
  from: 'user' | 'assistant';
  children: React.ReactNode;
  avatarSrc?: string;
  avatarName?: string;
};

export function MessageWithFeedback({ 
  messageId, 
  interactionId,
  toolType, 
  from, 
  children,
  avatarSrc,
  avatarName 
}: MessageWithFeedbackProps) {
  const { address } = useWalletAuth();
  const [feedback, setFeedback] = useState<'up' | 'down' | null>(null);
  const [showDetailedFeedback, setShowDetailedFeedback] = useState(false);
  const [qualityRating, setQualityRating] = useState<number>(0);
  const [textFeedback, setTextFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitFeedback = async (
    type: 'thumbs_up' | 'thumbs_down' | 'rating' | 'text', 
    value: string | number
  ) => {
    if (!address || !interactionId) return;
    
    setIsSubmitting(true);
    try {
      await fetch('/api/feedback', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-wallet-address': address
        },
        body: JSON.stringify({
          interactionId,
          toolType,
          feedbackType: type,
          feedbackValue: value.toString(),
          qualityRating: qualityRating || undefined,
        }),
      });
    } catch (error) {
      console.error('Failed to submit feedback:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleThumbsFeedback = (type: 'up' | 'down') => {
    setFeedback(type);
    submitFeedback(type === 'up' ? 'thumbs_up' : 'thumbs_down', type);
  };

  const handleDetailedFeedback = () => {
    const feedbackData = {
      rating: qualityRating,
      text: textFeedback.trim()
    };
    
    if (qualityRating > 0) {
      submitFeedback('rating', qualityRating);
    }
    
    if (textFeedback.trim()) {
      submitFeedback('text', textFeedback);
    }
    
    setShowDetailedFeedback(false);
    setTextFeedback('');
  };

  return (
    <Message from={from}>
      {avatarSrc && (
        <MessageAvatar src={avatarSrc} name={avatarName} />
      )}
      
      <MessageContent>
        {children}
        
        {/* Feedback Actions - Only show for assistant messages */}
        {from === 'assistant' && interactionId && (
          <div className="mt-3 pt-2 border-t border-border">
            <Actions>
              <Action
                tooltip="Helpful response"
                onClick={() => handleThumbsFeedback('up')}
                disabled={isSubmitting}
                className={feedback === 'up' ? 'text-green-600 bg-green-100' : ''}
              >
                <ThumbsUp className="size-4" />
              </Action>
              
              <Action
                tooltip="Not helpful"
                onClick={() => handleThumbsFeedback('down')}
                disabled={isSubmitting}
                className={feedback === 'down' ? 'text-red-600 bg-red-100' : ''}
              >
                <ThumbsDown className="size-4" />
              </Action>
              
              <Action
                tooltip="Detailed feedback"
                onClick={() => setShowDetailedFeedback(!showDetailedFeedback)}
                className={showDetailedFeedback ? 'bg-blue-100' : ''}
              >
                <MessageSquare className="size-4" />
              </Action>
            </Actions>

            {/* Detailed Feedback Section */}
            {showDetailedFeedback && (
              <div className="mt-3 p-3 bg-muted rounded-lg space-y-3">
                {/* Quality Rating */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Rate the response quality:
                  </label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        onClick={() => setQualityRating(rating)}
                        className={`p-1 ${
                          rating <= qualityRating 
                            ? 'text-yellow-500' 
                            : 'text-gray-300'
                        }`}
                      >
                        <Star className="size-4 fill-current" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Text Feedback */}
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    How can we improve? (optional)
                  </label>
                  <Textarea
                    placeholder="Tell us what would make this response more helpful..."
                    value={textFeedback}
                    onChange={(e) => setTextFeedback(e.target.value)}
                    className="min-h-[60px]"
                  />
                </div>

                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    onClick={handleDetailedFeedback}
                    disabled={qualityRating === 0 && !textFeedback.trim() || isSubmitting}
                  >
                    Submit Feedback
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => setShowDetailedFeedback(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </MessageContent>
    </Message>
  );
}
```

### 3. Frontend Implementation Updates

#### Enhanced Reviewer Page

```typescript
// src/app/reviewer/page.tsx
"use client";

import { useWalletAuth } from "@/lib/wallet-context";
import { MessageWithFeedback } from "@/components/ai-elements/message-with-feedback";

export default function ReviewerPage() {
  const { address, sessionId } = useWalletAuth();
  const [interactionId, setInteractionId] = useState<string>();
  
  const { completion, complete, isLoading, error } = useCompletion({
    api: "/api/reviewer",
    streamProtocol: "text",
    headers: {
      'x-wallet-address': address || '',
      'x-session-id': sessionId,
    },
    onResponse(response) {
      // Capture interaction ID for feedback linking
      const id = response.headers.get('X-Interaction-ID');
      if (id) setInteractionId(id);
    },
  });

  // Rest of component with MessageWithFeedback integration...
  return (
    <WalletAuthGuard>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Input section */}
        <div className="space-y-4">
          {/* Your existing input UI */}
        </div>
        
        {/* Results with feedback */}
        <div className="space-y-4">
          <h2 className="font-semibold">Findings</h2>
          {completion && (
            <MessageWithFeedback
              messageId={`reviewer-${Date.now()}`}
              interactionId={interactionId}
              toolType="auditor"
              from="assistant"
              avatarSrc="/ai-avatar.svg"
              avatarName="AI Auditor"
            >
              <Response>{completion}</Response>
            </MessageWithFeedback>
          )}
        </div>
      </div>
    </WalletAuthGuard>
  );
}
```

#### Enhanced Chat Page

```typescript
// src/app/chat/page.tsx
export default function ChatPage() {
  const { address, sessionId } = useWalletAuth();
  const [interactionIds, setInteractionIds] = useState<Record<string, string>>({});
  
  const { messages, sendMessage, status } = useChat({
    headers: {
      'x-wallet-address': address || '',
      'x-session-id': sessionId,
    },
    onResponse(response) {
      const id = response.headers.get('X-Interaction-ID');
      if (id) {
        // Store interaction ID for the latest message
        setInteractionIds(prev => ({
          ...prev,
          [messages.length]: id
        }));
      }
    },
  });

  return (
    <WalletAuthGuard>
      <Conversation>
        <ConversationContent>
          {messages.map((message, index) => (
            <MessageWithFeedback
              key={message.id}
              messageId={message.id}
              interactionId={interactionIds[index]}
              toolType="chat"
              from={message.role}
              avatarSrc={message.role === 'assistant' ? '/ai-avatar.svg' : '/user-avatar.svg'}
              avatarName={message.role === 'assistant' ? 'AI' : 'You'}
            >
              <Response>{message.content}</Response>
            </MessageWithFeedback>
          ))}
        </ConversationContent>
      </Conversation>
    </WalletAuthGuard>
  );
}
```

### 4. Feedback API Routes

#### Main Feedback Collection Route

```typescript
// src/app/api/feedback/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const walletAddress = request.headers.get('x-wallet-address');
    if (!walletAddress) {
      return NextResponse.json({ error: 'Wallet address required' }, { status: 401 });
    }

    const { 
      interactionId, 
      toolType, 
      feedbackType, 
      feedbackValue,
      qualityRating 
    } = await request.json();

    // Store feedback in D1
    const result = await env.DB.prepare(`
      INSERT INTO ai_feedback (
        interaction_id, wallet_address, tool_type, feedback_type, 
        feedback_value, response_quality_rating, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?)
    `).bind(
      interactionId, 
      walletAddress, 
      toolType, 
      feedbackType, 
      feedbackValue,
      qualityRating || null,
      new Date().toISOString()
    ).run();

    return NextResponse.json({ 
      success: true, 
      feedbackId: result.meta.last_row_id 
    });
  } catch (error) {
    console.error('Feedback submission error:', error);
    return NextResponse.json({ 
      error: 'Failed to submit feedback' 
    }, { status: 500 });
  }
}

// Get feedback analytics
export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const walletAddress = url.searchParams.get('wallet');
    const toolType = url.searchParams.get('tool');
    
    let query = `
      SELECT 
        tool_type,
        COUNT(*) as total_feedback,
        COUNT(CASE WHEN feedback_type = 'thumbs_up' THEN 1 END) as positive,
        COUNT(CASE WHEN feedback_type = 'thumbs_down' THEN 1 END) as negative,
        AVG(response_quality_rating) as avg_rating
      FROM ai_feedback 
      WHERE 1=1
    `;
    
    const params = [];
    if (walletAddress) {
      query += ` AND wallet_address = ?`;
      params.push(walletAddress);
    }
    if (toolType) {
      query += ` AND tool_type = ?`;
      params.push(toolType);
    }
    
    query += ` GROUP BY tool_type`;
    
    const result = await env.DB.prepare(query).bind(...params).all();
    
    return NextResponse.json({ success: true, data: result.results });
  } catch (error) {
    console.error('Analytics fetch error:', error);
    return NextResponse.json({ 
      error: 'Failed to fetch analytics' 
    }, { status: 500 });
  }
}
```

#### Module Feedback Collection

```typescript
// src/app/api/module-feedback/route.ts
export async function POST(request: NextRequest) {
  try {
    const walletAddress = request.headers.get('x-wallet-address');
    if (!walletAddress) {
      return NextResponse.json({ error: 'Wallet address required' }, { status: 401 });
    }

    const {
      moduleSlug,
      achievementCodes,
      contentDifficulty,
      contentClarity,
      practicalValue,
      paceAppropriateness,
      whatWorkedWell,
      suggestionsForImprovement,
      additionalTopicsWanted,
      timeSpentMinutes,
      externalResourcesUsed,
      aiToolsHelpful
    } = await request.json();

    const result = await env.DB.prepare(`
      INSERT INTO module_feedback (
        wallet_address, module_slug, achievement_codes, content_difficulty,
        content_clarity, practical_value, pace_appropriateness,
        what_worked_well, suggestions_for_improvement, additional_topics_wanted,
        time_spent_minutes, external_resources_used, ai_tools_helpful, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      walletAddress, moduleSlug, JSON.stringify(achievementCodes),
      contentDifficulty, contentClarity, practicalValue, paceAppropriateness,
      whatWorkedWell, suggestionsForImprovement, additionalTopicsWanted,
      timeSpentMinutes, externalResourcesUsed, aiToolsHelpful,
      new Date().toISOString()
    ).run();

    return NextResponse.json({ 
      success: true, 
      feedbackId: result.meta.last_row_id 
    });
  } catch (error) {
    console.error('Module feedback error:', error);
    return NextResponse.json({ 
      error: 'Failed to submit module feedback' 
    }, { status: 500 });
  }
}
```

### 5. Module Completion Feedback Component

```typescript
// src/components/module-completion-feedback.tsx
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Star } from 'lucide-react';
import { useWalletAuth } from '@/lib/wallet-context';

interface ModuleCompletionFeedbackProps {
  moduleSlug: string;
  achievementCodes: string[];
  onComplete?: () => void;
}

export function ModuleCompletionFeedback({
  moduleSlug,
  achievementCodes,
  onComplete
}: ModuleCompletionFeedbackProps) {
  const { address } = useWalletAuth();
  const [ratings, setRatings] = useState({
    contentDifficulty: 0,
    contentClarity: 0,
    practicalValue: 0,
    paceAppropriateness: 0
  });
  const [feedback, setFeedback] = useState({
    whatWorkedWell: '',
    suggestionsForImprovement: '',
    additionalTopicsWanted: ''
  });
  const [timeSpent, setTimeSpent] = useState<number>();
  const [externalResources, setExternalResources] = useState<boolean>();
  const [aiToolsHelpful, setAiToolsHelpful] = useState<boolean>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRatingChange = (category: keyof typeof ratings, rating: number) => {
    setRatings(prev => ({ ...prev, [category]: rating }));
  };

  const handleSubmit = async () => {
    if (!address) return;
    
    setIsSubmitting(true);
    try {
      await fetch('/api/module-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-wallet-address': address
        },
        body: JSON.stringify({
          moduleSlug,
          achievementCodes,
          ...ratings,
          ...feedback,
          timeSpentMinutes: timeSpent,
          externalResourcesUsed: externalResources,
          aiToolsHelpful
        })
      });
      
      onComplete?.();
    } catch (error) {
      console.error('Failed to submit feedback:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const RatingInput = ({ 
    label, 
    category 
  }: { 
    label: string; 
    category: keyof typeof ratings 
  }) => (
    <div className="space-y-2">
      <label className="text-sm font-medium">{label}</label>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            onClick={() => handleRatingChange(category, rating)}
            className={`p-1 ${
              rating <= ratings[category] 
                ? 'text-yellow-500' 
                : 'text-gray-300'
            }`}
          >
            <Star className="size-4 fill-current" />
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Module Feedback</CardTitle>
        <p className="text-sm text-muted-foreground">
          Help us improve the learning experience for future students
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Rating Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RatingInput label="Content Difficulty" category="contentDifficulty" />
          <RatingInput label="Content Clarity" category="contentClarity" />
          <RatingInput label="Practical Value" category="practicalValue" />
          <RatingInput label="Learning Pace" category="paceAppropriateness" />
        </div>

        {/* Text Feedback */}
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">
              What worked well in this module?
            </label>
            <Textarea
              value={feedback.whatWorkedWell}
              onChange={(e) => setFeedback(prev => ({ 
                ...prev, 
                whatWorkedWell: e.target.value 
              }))}
              placeholder="Share what you found most valuable..."
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">
              Suggestions for improvement
            </label>
            <Textarea
              value={feedback.suggestionsForImprovement}
              onChange={(e) => setFeedback(prev => ({ 
                ...prev, 
                suggestionsForImprovement: e.target.value 
              }))}
              placeholder="How can we make this module better?"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">
              Additional topics you'd like to see
            </label>
            <Textarea
              value={feedback.additionalTopicsWanted}
              onChange={(e) => setFeedback(prev => ({ 
                ...prev, 
                additionalTopicsWanted: e.target.value 
              }))}
              placeholder="What else would you like to learn about?"
            />
          </div>
        </div>

        {/* Additional Questions */}
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">
              Approximately how long did this module take? (minutes)
            </label>
            <input
              type="number"
              value={timeSpent || ''}
              onChange={(e) => setTimeSpent(Number(e.target.value))}
              className="w-full p-2 border rounded-md"
              placeholder="e.g., 90"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Did you use external resources to complete this module?
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={externalResources === true}
                  onChange={() => setExternalResources(true)}
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={externalResources === false}
                  onChange={() => setExternalResources(false)}
                />
                No
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Were the AI tools (chat assistant, code reviewer) helpful?
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={aiToolsHelpful === true}
                  onChange={() => setAiToolsHelpful(true)}
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={aiToolsHelpful === false}
                  onChange={() => setAiToolsHelpful(false)}
                />
                No
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={aiToolsHelpful === null}
                  onChange={() => setAiToolsHelpful(null)}
                />
                Didn't use them
              </label>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <Button 
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="flex-1"
          >
            Submit Feedback
          </Button>
          <Button 
            variant="outline" 
            onClick={onComplete}
            className="flex-1"
          >
            Skip Feedback
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
```

## 📈 Analytics Queries & Reports

### Key Metrics for Milestone 2 Reporting

#### 1. AI Tool Effectiveness Metrics

```sql
-- AI Auditor satisfaction and usage patterns
SELECT 
  COUNT(*) as total_audits,
  AVG(vulnerabilities_found) as avg_vulnerabilities_per_scan,
  COUNT(CASE WHEN af.feedback_type = 'thumbs_up' THEN 1 END) * 100.0 / 
    COUNT(af.feedback_type) as satisfaction_rate,
  AVG(af.response_quality_rating) as avg_quality_rating,
  AVG(ai.duration_ms) as avg_response_time_ms
FROM ai_interactions ai
LEFT JOIN ai_feedback af ON ai.id = af.interaction_id
WHERE ai.tool_type = 'auditor'
  AND ai.created_at >= date('now', '-30 days');

-- Chat assistant effectiveness
SELECT 
  query_category,
  COUNT(*) as total_queries,
  COUNT(CASE WHEN af.feedback_type = 'thumbs_up' THEN 1 END) * 100.0 / 
    COUNT(af.feedback_type) as satisfaction_rate,
  AVG(ai.duration_ms) as avg_response_time_ms,
  COUNT(CASE WHEN ai.had_followup_questions = 1 THEN 1 END) * 100.0 / 
    COUNT(*) as followup_rate
FROM ai_interactions ai
LEFT JOIN ai_feedback af ON ai.id = af.interaction_id
WHERE ai.tool_type = 'chat'
  AND ai.created_at >= date('now', '-30 days')
GROUP BY query_category;
```

#### 2. Learning Outcome Correlation

```sql
-- Correlation between AI usage and achievement completion
SELECT 
  CASE 
    WHEN ai_usage.total_interactions > 10 THEN 'Heavy AI User'
    WHEN ai_usage.total_interactions > 3 THEN 'Moderate AI User'
    ELSE 'Light AI User'
  END as ai_usage_category,
  COUNT(DISTINCT ai_usage.wallet_address) as user_count,
  AVG(achievements.achievement_count) as avg_achievements,
  AVG(CASE WHEN achievements.has_security_achievements THEN 1.0 ELSE 0.0 END) as security_completion_rate
FROM (
  SELECT 
    wallet_address,
    COUNT(*) as total_interactions,
    COUNT(CASE WHEN tool_type = 'auditor' THEN 1 END) as auditor_usage
  FROM ai_interactions
  GROUP BY wallet_address
) ai_usage
LEFT JOIN (
  SELECT 
    wallet_address,
    COUNT(*) as achievement_count,
    MAX(CASE WHEN achievement_code LIKE '%security%' THEN 1 ELSE 0 END) as has_security_achievements
  FROM user_achievements
  GROUP BY wallet_address
) achievements ON ai_usage.wallet_address = achievements.wallet_address
GROUP BY ai_usage_category;
```

#### 3. Module Completion & Feedback Analysis

```sql
-- Module completion rates and satisfaction
SELECT 
  mf.module_slug,
  COUNT(*) as completions,
  AVG(mf.content_difficulty) as avg_difficulty_rating,
  AVG(mf.content_clarity) as avg_clarity_rating,
  AVG(mf.practical_value) as avg_practical_value,
  AVG(mf.time_spent_minutes) as avg_completion_time_minutes,
  COUNT(CASE WHEN mf.ai_tools_helpful = 1 THEN 1 END) * 100.0 / 
    COUNT(*) as ai_tools_helpfulness_rate
FROM module_feedback mf
WHERE mf.created_at >= date('now', '-30 days')
GROUP BY mf.module_slug
ORDER BY completions DESC;
```

#### 4. User Journey Analysis

```sql
-- Track user progression through the learning path
WITH user_journey AS (
  SELECT 
    ua.wallet_address,
    ua.achievement_code,
    ua.earned_at,
    ai_usage.first_ai_interaction,
    ai_usage.total_ai_interactions,
    mf.completion_feedback_given
  FROM user_achievements ua
  LEFT JOIN (
    SELECT 
      wallet_address,
      MIN(created_at) as first_ai_interaction,
      COUNT(*) as total_ai_interactions
    FROM ai_interactions
    GROUP BY wallet_address
  ) ai_usage ON ua.wallet_address = ai_usage.wallet_address
  LEFT JOIN (
    SELECT 
      wallet_address,
      COUNT(*) > 0 as completion_feedback_given
    FROM module_feedback
    GROUP BY wallet_address
  ) mf ON ua.wallet_address = mf.wallet_address
)
SELECT 
  COUNT(DISTINCT wallet_address) as total_learners,
  AVG(total_ai_interactions) as avg_ai_tool_usage,
  COUNT(CASE WHEN first_ai_interaction IS NOT NULL THEN 1 END) * 100.0 / 
    COUNT(*) as ai_adoption_rate,
  COUNT(CASE WHEN completion_feedback_given THEN 1 END) * 100.0 / 
    COUNT(*) as feedback_participation_rate
FROM user_journey;
```

## 🎯 Implementation Roadmap

### Phase 1: Basic Analytics

1. ✅ Extend D1 schema with tracking tables
2. ✅ Add wallet identity to AI routes
3. ✅ Implement basic feedback collection (thumbs up/down)
4. ✅ Create simple analytics dashboard

### Phase 2: Enhanced Feedback

1. ✅ Add detailed feedback forms with ratings
2. ✅ Implement module completion feedback
3. ✅ Create feedback API routes
4. ✅ Add feedback components to UI

### Phase 3: Advanced Analytics

1. ✅ Build comprehensive reporting queries
2. ✅ Create admin dashboard for analytics
3. ✅ Implement correlation analysis
4. ✅ Generate Milestone 2 compliance reports

### Phase 4: Optimization

1. ✅ A/B testing framework for AI prompts
2. ✅ Real-time feedback integration
3. ✅ Predictive analytics for learning outcomes
4. ✅ Automated quality scoring

## 🔒 Security & Privacy Considerations

### Data Protection

- **Wallet addresses only**: No PII collection, just blockchain addresses
- **Voluntary feedback**: All feedback collection is opt-in
- **Data minimization**: Collect only necessary metrics for improvement
- **Retention policies**: Auto-delete old interaction data after analysis

### Access Controls

- **Wallet-based authentication**: Only connected users can provide feedback
- **Rate limiting**: Prevent spam feedback submissions
- **Admin dashboards**: Restricted access to aggregate analytics only
- **Data anonymization**: Individual responses not exposed in reports

## 🚀 Expected Outcomes

### Milestone 2 Compliance

This system will provide comprehensive data for all Milestone 2 requirements:

✅ **AI Auditor Beta**: Enhanced detection with user feedback integration
✅ **AI Chatbot Enhancement**: 100+ query coverage with quality metrics  
✅ **Curriculum completion statistics**: Module progression and satisfaction data
✅ **User engagement data**: AI tool usage patterns and learning correlation
✅ **Feedback analysis**: Continuous improvement cycle with user input

### Competitive Advantages

- **Blockchain-native analytics**: Immutable learning progress verification
- **Real skill validation**: On-chain deployment success tracking
- **Economic impact measurement**: Actual developer output and success rates
- **Community building metrics**: Peer assistance and knowledge sharing

This comprehensive feedback and analytics system positions Plunder Academy as a data-driven, continuously improving platform that demonstrates real learning outcomes through blockchain-verified achievements and measurable skill application.
