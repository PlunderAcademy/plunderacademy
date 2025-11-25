import React from 'react';
import { Edit, PenTool, Send, Clock, CheckCircle, ChevronRight } from 'lucide-react';

const TransactionLifecycleVisualizer = () => {
  return (
    <div className="pb-6 px-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 my-8">
      <h3 className="text-lg font-semibold mb-2">Transaction Lifecycle</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
        Every write operation follows these 5 stages from your code to the blockchain
      </p>

      <div className="grid grid-cols-5 gap-2 md:gap-4">
        <Stage 
          number={1}
          icon={Edit} 
          title="Prepare"
          description="Build transaction data"
          hookInfo="useWriteContract"
          bgColor="bg-slate-100 dark:bg-slate-800"
          iconColor="text-slate-600 dark:text-slate-300"
        />
        
        <Stage 
          number={2}
          icon={PenTool} 
          title="Sign"
          description="Wallet prompts user"
          hookInfo="User approval"
          bgColor="bg-blue-50 dark:bg-blue-950/40"
          iconColor="text-blue-600 dark:text-blue-400"
        />
        
        <Stage 
          number={3}
          icon={Send} 
          title="Broadcast"
          description="Sent to network"
          hookInfo="Returns txHash"
          bgColor="bg-purple-50 dark:bg-purple-950/40"
          iconColor="text-purple-600 dark:text-purple-400"
        />
        
        <Stage 
          number={4}
          icon={Clock} 
          title="Pending"
          description="Awaiting inclusion"
          hookInfo="useWaitForTx"
          bgColor="bg-orange-50 dark:bg-orange-950/40"
          iconColor="text-orange-600 dark:text-orange-400"
        />
        
        <Stage 
          number={5}
          icon={CheckCircle} 
          title="Confirmed"
          description="Block finalized"
          hookInfo="Receipt ready"
          bgColor="bg-green-50 dark:bg-green-950/40"
          iconColor="text-green-600 dark:text-green-400"
        />
      </div>

      {/* Flow arrow connecting all stages */}
      <div className="mt-4 flex items-center justify-center gap-1 text-slate-400 dark:text-slate-500">
        <span className="text-xs">Your dApp</span>
        <ChevronRight className="w-3 h-3" />
        <ChevronRight className="w-3 h-3 -ml-2" />
        <div className="flex-1 h-px bg-gradient-to-r from-slate-300 via-blue-400 to-green-400 dark:from-slate-600 dark:via-blue-500 dark:to-green-500 mx-2" />
        <ChevronRight className="w-3 h-3" />
        <ChevronRight className="w-3 h-3 -ml-2" />
        <span className="text-xs">Blockchain</span>
      </div>
    </div>
  );
};

interface StageProps {
  number: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  hookInfo: string;
  bgColor: string;
  iconColor: string;
}

const Stage = ({ number, icon: Icon, title, description, hookInfo, bgColor, iconColor }: StageProps) => (
  <div className={`${bgColor} rounded-lg p-3 flex flex-col items-center text-center`}>
    <div className="flex items-center gap-1.5 mb-2">
      <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500">{number}</span>
      <Icon className={`w-5 h-5 ${iconColor}`} />
    </div>
    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{title}</span>
    <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">{description}</span>
    <code className="text-[10px] text-slate-400 dark:text-slate-500 mt-2 font-mono">{hookInfo}</code>
  </div>
);

export default TransactionLifecycleVisualizer;
