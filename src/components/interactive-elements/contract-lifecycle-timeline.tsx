"use client";

import React, { useState } from "react";
import { Code, Cpu, Rocket, MousePointer, RefreshCw, Check } from "lucide-react";
import { motion } from "framer-motion";

type Phase = {
  id: number;
  name: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  description: string;
  details: string[];
  time: string;
  cost: string;
};

export function ContractLifecycleTimeline() {
  const [selectedPhase, setSelectedPhase] = useState<number>(0);

  const phases: Phase[] = [
    {
      id: 0,
      name: "Write",
      icon: Code,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
      description: "Write smart contract code in Solidity",
      details: [
        "Define state variables and data structures",
        "Implement business logic in functions",
        "Add events for external communication",
        "Set up access controls and security",
      ],
      time: "Hours to Weeks",
      cost: "Development Time",
    },
    {
      id: 1,
      name: "Compile",
      icon: Cpu,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
      description: "Transform Solidity code into bytecode and ABI",
      details: [
        "Solidity compiler validates syntax",
        "Code is optimized for gas efficiency",
        "Bytecode generated for EVM execution",
        "ABI created for external interactions",
      ],
      time: "Seconds",
      cost: "Free (Local)",
    },
    {
      id: 2,
      name: "Deploy",
      icon: Rocket,
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-100 dark:bg-orange-900/30",
      description: "Deploy contract to the blockchain network",
      details: [
        "Create deployment transaction with bytecode",
        "Broadcast to network and wait for validation",
        "Contract receives permanent address",
        "Constructor runs and initializes state",
      ],
      time: "~1 second on Zilliqa",
      cost: "$0.20 - $1.60",
    },
    {
      id: 3,
      name: "Interact",
      icon: MousePointer,
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-100 dark:bg-green-900/30",
      description: "Users and applications call contract functions",
      details: [
        "Send transactions to modify state",
        "Make free read calls for data queries",
        "Listen for emitted events",
        "Integrate with frontend applications",
      ],
      time: "Ongoing",
      cost: "$0.01 - $0.50 per transaction",
    },
    {
      id: 4,
      name: "Update",
      icon: RefreshCw,
      color: "text-teal-600 dark:text-teal-400",
      bgColor: "bg-teal-100 dark:bg-teal-900/30",
      description: "Upgrade or migrate contract (if designed for it)",
      details: [
        "Deploy new version of contract code",
        "Use proxy pattern for upgrades (optional)",
        "Migrate data if necessary",
        "Update frontend to point to new address",
      ],
      time: "As Needed",
      cost: "Similar to Deployment",
    },
  ];

  return (
    <div className="my-8 w-full rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-6">Smart Contract Lifecycle</h3>

        {/* Timeline */}
        <div className="relative mb-8">
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-border" />
          <div className="relative flex justify-between">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const isActive = selectedPhase === index;
              const isCompleted = selectedPhase > index;

              return (
                <div key={phase.id} className="flex flex-col items-center" style={{ width: "20%" }}>
                  <motion.button
                    onClick={() => setSelectedPhase(index)}
                    className={`w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all relative z-10 ${
                      isActive
                        ? `${phase.bgColor} border-primary shadow-lg scale-110`
                        : isCompleted
                        ? "bg-green-100 dark:bg-green-900/30 border-green-500"
                        : "bg-background border-border hover:border-primary/50"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isCompleted && !isActive ? (
                      <Check className="w-6 h-6 text-green-600 dark:text-green-400" />
                    ) : (
                      <Icon className={`w-6 h-6 ${isActive ? phase.color : "text-muted-foreground"}`} />
                    )}
                  </motion.button>
                  <div className="mt-2 text-xs font-semibold text-center">{phase.name}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Phase Details */}
        <motion.div
          key={selectedPhase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`p-6 rounded-lg ${phases[selectedPhase].bgColor} border border-border/50`}
        >
          <div className="flex items-start gap-4 mb-4">
            {React.createElement(phases[selectedPhase].icon, {
              className: `w-8 h-8 ${phases[selectedPhase].color}`,
            })}
            <div className="flex-1">
              <h4 className="font-semibold text-lg mb-1">{phases[selectedPhase].name}</h4>
              <p className="text-sm text-muted-foreground">{phases[selectedPhase].description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                What Happens
              </div>
              <ul className="space-y-1">
                {phases[selectedPhase].details.map((detail, i) => (
                  <li key={i} className="text-sm flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                  Time Required
                </div>
                <div className="text-sm font-mono">{phases[selectedPhase].time}</div>
              </div>
              <div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                  Cost
                </div>
                <div className="text-sm font-mono">{phases[selectedPhase].cost}</div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-4 text-xs text-muted-foreground text-center">
          Click on each phase to learn more about the contract lifecycle
        </div>
      </div>
    </div>
  );
}
