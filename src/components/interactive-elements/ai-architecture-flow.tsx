"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Server, Cloud, Cpu, MessageSquare, Database } from "lucide-react";

export default function AIArchitectureFlow() {
  const [step, setStep] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 5);
    }, 2000); // 2 seconds per step

    return () => clearInterval(timer);
  }, []);

  const steps = [
    { id: 0, label: "User Request", icon: User, description: "User sends prompt" },
    { id: 1, label: "Next.js API", icon: Server, description: "API route handles request" },
    { id: 2, label: "AI Gateway", icon: Cloud, description: "Routing & Auth" },
    { id: 3, label: "Inference", icon: Cpu, description: "Model processes prompt" },
    { id: 4, label: "Streaming", icon: MessageSquare, description: "Response streams back" },
  ];

  return (
    <div className="my-8 w-full rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-6 border-b border-border pb-4">
          <Database className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">Request Lifecycle</h3>
        </div>

        {/* Diagram Container */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 min-h-[200px] md:min-h-[120px] px-4 py-8 bg-muted/20 rounded-xl border border-border/50">
          
          {/* Connection Lines (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-border -z-10" />
          
          {/* Connection Lines (Mobile) */}
          <div className="md:hidden absolute top-10 bottom-10 left-1/2 w-0.5 bg-border -z-10" />

          {steps.map((s, index) => {
            const Icon = s.icon;
            const isActive = step === index;
            const isPast = step > index;
            
            return (
              <div key={s.id} className="relative flex flex-col items-center gap-3 z-10">
                <motion.div
                  animate={{
                    scale: isActive ? 1.1 : 1,
                    borderColor: isActive || isPast ? "var(--primary)" : "var(--border)",
                    backgroundColor: isActive ? "var(--background)" : "var(--card)",
                  }}
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center shadow-sm transition-colors duration-300 ${
                    isActive ? "border-primary text-primary" : "text-muted-foreground"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </motion.div>
                
                <div className="text-center w-24">
                  <div className={`text-xs font-semibold transition-colors duration-300 ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                    {s.label}
                  </div>
                </div>

                {/* Animated Packet moving to next step */}
                <AnimatePresence>
                  {isActive && index < steps.length - 1 && (
                    <motion.div
                      initial={{ 
                        opacity: 0, 
                        x: 0, 
                        y: 0
                      }}
                      animate={{ 
                        opacity: [0, 1, 1, 0],
                        x: isMobile ? 0 : 80, // Desktop move right
                        y: isMobile ? 60 : 0  // Mobile move down
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      className="absolute top-3 left-3 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center pointer-events-none"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Return Stream Animation */}
                <AnimatePresence>
                  {step === 4 && index < 4 && (
                    <motion.div
                       initial={{ opacity: 0, x: 0 }}
                       animate={{ 
                         opacity: [0, 1, 0],
                         x: isMobile ? 0 : -20, // Move left
                         y: isMobile ? -20 : 0  // Move up
                       }}
                       transition={{ duration: 1, delay: (3 - index) * 0.2, repeat: Infinity }}
                       className="absolute top-3 left-3 w-2 h-2 bg-emerald-500 rounded-full"
                    />
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Active Step Description */}
        <div className="mt-6 h-12 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {steps[step].description}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

