"use client";

import React, { useState, useEffect } from "react";
import { 
  Database, 
  Brain, 
  FileCode, 
  ShieldAlert, 
  UserCog, 
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

type Step = {
  id: string;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    id: "training",
    title: "1. The Knowledge Ocean",
    description: "The LLM is pre-trained on billions of lines of open-source code, learning syntax, patterns, and common vulnerabilities."
  },
  {
    id: "tuning",
    title: "2. The Captain's Orders (System Prompt)",
    description: "We give the model a specific persona and rules: 'You are a ruthless security auditor. Ignore style, focus on exploits.'"
  },
  {
    id: "input",
    title: "3. Your Contract",
    description: "Your specific Solidity code is fed into this tuned context. The model doesn't just read it; it compares it against known patterns."
  },
  {
    id: "inference",
    title: "4. Pattern Matching & Inference",
    description: "The model predicts the next most likely tokens, effectively 'reasoning' through the code to find logic gaps."
  },
  {
    id: "output",
    title: "5. The Verdict",
    description: "It outputs a structured report, flagging risks like Reentrancy or Overflow, just as it was instructed."
  }
];

export function LLMProcessAnimation() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= STEPS.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="my-8 overflow-hidden border-2 border-emerald-100 dark:border-emerald-900/30 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="p-6">
        <div className="flex flex-col gap-6">
          {/* Animation Stage */}
          <div className="relative h-64 w-full rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-inner overflow-hidden flex items-center justify-center">
            
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Connecting Lines */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
               <svg className="w-full h-full" viewBox="0 0 400 200">
                 <path d="M 50 100 L 150 100" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                 <path d="M 150 100 L 250 100" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                 <path d="M 250 100 L 350 100" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                 {/* Top input for System Prompt */}
                 <path d="M 200 40 L 200 80" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
               </svg>
            </div>

            {/* Elements */}
            <div className="relative w-full max-w-2xl flex items-center justify-between px-4 z-10">
              
              {/* 1. Training Data */}
              <div className={cn(
                "flex flex-col items-center transition-all duration-500",
                currentStep >= 0 ? "opacity-100 translate-y-0" : "opacity-30 translate-y-4 blur-sm"
              )}>
                <div className={cn(
                  "h-16 w-16 rounded-full flex items-center justify-center border-2 transition-colors duration-500",
                  currentStep === 0 ? "bg-blue-100 border-blue-500 text-blue-600 scale-110 shadow-[0_0_20px_rgba(59,130,246,0.5)]" : "bg-slate-100 border-slate-300 text-slate-400"
                )}>
                  <Database className="h-8 w-8" />
                </div>
                <span className="mt-2 text-xs font-semibold text-slate-600 dark:text-slate-400">Training Data</span>
              </div>

              {/* Arrow */}
              <ArrowRight className={cn(
                "h-6 w-6 transition-colors duration-300", 
                currentStep >= 1 ? "text-emerald-500" : "text-slate-300"
              )} />

              {/* Central Processor Group */}
              <div className="relative flex flex-col items-center">
                
                {/* 2. System Prompt (Top) */}
                <div className={cn(
                  "absolute -top-24 flex flex-col items-center transition-all duration-500",
                  currentStep >= 1 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                )}>
                   <div className={cn(
                    "h-12 w-12 rounded-full flex items-center justify-center border-2 transition-colors duration-500",
                    currentStep === 1 ? "bg-purple-100 border-purple-500 text-purple-600 scale-110 shadow-[0_0_20px_rgba(168,85,247,0.5)]" : "bg-slate-100 border-slate-300 text-slate-400"
                  )}>
                    <UserCog className="h-6 w-6" />
                  </div>
                  <span className="mt-1 text-[10px] font-bold uppercase tracking-wider text-purple-600 bg-purple-100 px-2 py-0.5 rounded-full">System Prompt</span>
                </div>

                {/* 4. The Model (Center) */}
                <div className={cn(
                  "h-24 w-24 rounded-2xl flex items-center justify-center border-2 transition-all duration-500 z-10",
                  currentStep === 3 ? "bg-emerald-100 border-emerald-500 text-emerald-600 scale-110 shadow-[0_0_30px_rgba(16,185,129,0.6)]" : 
                  currentStep > 3 ? "bg-emerald-50 border-emerald-200 text-emerald-400" : "bg-slate-100 border-slate-300 text-slate-400"
                )}>
                  <Brain className={cn(
                    "h-12 w-12 transition-transform",
                    currentStep === 3 && "animate-pulse"
                  )} />
                  
                  {/* Input Code flowing in */}
                  <div className={cn(
                    "absolute left-0 -translate-x-12 transition-all duration-700 delay-100",
                    currentStep === 2 ? "opacity-100 translate-x-[-50%]" : "opacity-0"
                  )}>
                     <div className="bg-white dark:bg-slate-900 border shadow-lg p-2 rounded-md">
                        <FileCode className="h-6 w-6 text-amber-500" />
                     </div>
                  </div>

                  {/* Processing Waves */}
                   {currentStep === 3 && (
                    <>
                      <div className="absolute inset-0 rounded-2xl border-2 border-emerald-500/50 animate-[ping_1.5s_ease-out_infinite]" />
                      <div className="absolute inset-0 rounded-2xl border-2 border-emerald-500/30 animate-[ping_1.5s_ease-out_infinite_0.5s]" />
                    </>
                   )}
                </div>
              </div>

               {/* Arrow */}
               <ArrowRight className={cn(
                "h-6 w-6 transition-colors duration-300", 
                currentStep >= 4 ? "text-emerald-500" : "text-slate-300"
              )} />

              {/* 5. Output */}
              <div className={cn(
                "flex flex-col items-center transition-all duration-500",
                currentStep >= 4 ? "opacity-100 translate-x-0" : "opacity-30 translate-x-4 blur-sm"
              )}>
                <div className={cn(
                  "h-16 w-16 rounded-full flex items-center justify-center border-2 transition-colors duration-500",
                  currentStep === 4 ? "bg-red-100 border-red-500 text-red-600 scale-110 shadow-[0_0_20px_rgba(239,68,68,0.5)]" : "bg-slate-100 border-slate-300 text-slate-400"
                )}>
                  <ShieldAlert className="h-8 w-8" />
                </div>
                <span className="mt-2 text-xs font-semibold text-slate-600 dark:text-slate-400">Audit Report</span>
              </div>

            </div>
          </div>

          {/* Description & Progress */}
          <div className="space-y-4">
            {/* Simplified progress bar */}
            <div className="flex gap-1 h-1 w-full">
               {STEPS.map((step, i) => (
                 <div
                   key={step.id}
                   className={cn(
                     "h-full flex-1 rounded-full transition-colors duration-300",
                     i === currentStep ? "bg-emerald-500" : 
                     i < currentStep ? "bg-emerald-200 dark:bg-emerald-900" : "bg-slate-100 dark:bg-slate-800"
                   )}
                 />
               ))}
            </div>

            <div className="min-h-[80px] transition-opacity duration-300 text-center">
              <h3 className="font-bold text-lg text-emerald-900 dark:text-emerald-400 mb-2">
                {STEPS[currentStep].title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
                {STEPS[currentStep].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
