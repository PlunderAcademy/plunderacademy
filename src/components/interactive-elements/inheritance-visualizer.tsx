import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitMerge, Play, RotateCcw, ArrowUp } from 'lucide-react';

const InheritanceVisualizer = () => {
  const [step, setStep] = useState(0); // 0: idle, 1: Diamond, 2: Right, 3: Left, 4: Base, 5: Return Base, 6: Return Left, 7: Return Right, 8: Return Diamond
  const [isPlaying, setIsPlaying] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    if (isPlaying) {
      const timeouts: NodeJS.Timeout[] = [];
      
      // Execution Phase (Going Up)
      timeouts.push(setTimeout(() => { setStep(1); addLog("Diamond.onPing() called"); }, 100));
      timeouts.push(setTimeout(() => { setStep(2); addLog("Diamond calls super -> Right.onPing()"); }, 1500));
      timeouts.push(setTimeout(() => { setStep(3); addLog("Right calls super -> Left.onPing()"); }, 3000));
      timeouts.push(setTimeout(() => { setStep(4); addLog("Left calls super -> Base.onPing()"); }, 4500));

      // Return Phase (Going Down)
      timeouts.push(setTimeout(() => { setStep(5); addLog("Base returns 'Base'"); }, 6000));
      timeouts.push(setTimeout(() => { setStep(6); addLog("Left returns 'Left->Base'"); }, 7500));
      timeouts.push(setTimeout(() => { setStep(7); addLog("Right returns 'Right->Left->Base'"); }, 9000));
      timeouts.push(setTimeout(() => { setStep(8); addLog("Diamond returns 'Diamond->Right->Left->Base'"); setIsPlaying(false); }, 10500));

      return () => timeouts.forEach(clearTimeout);
    }
  }, [isPlaying]);

  const addLog = (msg: string) => {
    setLogs(prev => [...prev, msg]);
  };

  const reset = () => {
    setStep(0);
    setLogs([]);
    setIsPlaying(false);
  };

  const Node = ({ id, label, activeStep, returnStep, x, y }: { id: number, label: string, activeStep: number, returnStep: number, x: number, y: number }) => {
    const isActive = step === activeStep;
    const isReturning = step === returnStep;
    const isVisited = step > activeStep;

    return (
      <motion.div
        className={`absolute w-24 h-12 rounded-lg border-2 flex items-center justify-center text-sm font-bold transition-colors duration-300 z-10
          ${isActive ? 'bg-blue-600 border-blue-400 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 
            isReturning ? 'bg-green-600 border-green-400 text-white shadow-[0_0_15px_rgba(34,197,94,0.5)]' :
            isVisited ? 'bg-slate-800 border-slate-600 text-slate-400' : 
            'bg-slate-900 border-slate-700 text-slate-300'}`}
        style={{ left: x, top: y }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        {label}
        {(isActive || isReturning) && (
          <motion.div
            layoutId="active-glow"
            className="absolute inset-0 rounded-lg bg-white/10"
            transition={{ duration: 0.2 }}
          />
        )}
      </motion.div>
    );
  };

  const Arrow = ({ start, end, active }: { start: {x: number, y: number}, end: {x: number, y: number}, active: boolean }) => {
    // Simple straight line for now
    const angle = Math.atan2(end.y - start.y, end.x - start.x) * 180 / Math.PI;
    const length = Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));

    return (
      <div 
        className="absolute h-0.5 origin-left transition-colors duration-300"
        style={{
          left: start.x,
          top: start.y,
          width: length,
          transform: `rotate(${angle}deg)`,
          backgroundColor: active ? '#60a5fa' : '#334155'
        }}
      >
        {active && (
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full"
            initial={{ left: 0 }}
            animate={{ left: '100%' }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        )}
      </div>
    );
  };

  return (
    <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-sans my-8 shadow-sm">
      <div className="flex items-center justify-between mb-6 border-b border-slate-200 dark:border-slate-700 pb-4">
        <div className="flex items-center gap-2">
          <GitMerge className="w-6 h-6 text-purple-500 dark:text-purple-400" />
          <h3 className="text-lg font-semibold">Diamond Inheritance (C3 Linearization)</h3>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => !isPlaying && setIsPlaying(true)}
            disabled={isPlaying || step === 8}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg text-sm font-medium transition-colors text-white"
          >
            <Play className="w-4 h-4" />
            {step === 8 ? 'Completed' : isPlaying ? 'Running...' : 'Call Diamond.onPing()'}
          </button>
          <button
            onClick={reset}
            className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-slate-500 dark:text-slate-400 transition-colors"
            title="Reset"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Diagram */}
        <div className="relative h-[300px] bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Coordinates based on 300x300 canvas roughly */}
            {/* Base: Top Center */}
            <Node id={1} label="Base" activeStep={4} returnStep={5} x={130} y={20} />
            
            {/* Left: Middle Left */}
            <Node id={2} label="Left" activeStep={3} returnStep={6} x={40} y={120} />
            
            {/* Right: Middle Right */}
            <Node id={3} label="Right" activeStep={2} returnStep={7} x={220} y={120} />
            
            {/* Diamond: Bottom Center */}
            <Node id={4} label="Diamond" activeStep={1} returnStep={8} x={130} y={220} />

            {/* Arrows (Visual only, simplified) */}
            {/* Diamond -> Right */}
            <Arrow start={{x: 180, y: 220}} end={{x: 220, y: 170}} active={step === 1} />
            {/* Right -> Left */}
            <Arrow start={{x: 220, y: 145}} end={{x: 136, y: 145}} active={step === 2} />
             {/* Left -> Base */}
             <Arrow start={{x: 90, y: 120}} end={{x: 130, y: 70}} active={step === 3} />
          </div>
          
          <div className="absolute bottom-2 right-2 text-xs text-slate-400 dark:text-slate-600">
            Linearization: Diamond → Right → Left → Base
          </div>
        </div>

        {/* Console/Logs */}
        <div className="bg-slate-900 dark:bg-black rounded-xl border border-slate-200 dark:border-slate-800 p-4 font-mono text-sm h-[300px] overflow-y-auto flex flex-col shadow-inner">
          <div className="text-slate-400 dark:text-slate-500 mb-2 border-b border-slate-700 dark:border-slate-800 pb-2">Execution Log</div>
          <div className="flex-1 space-y-2">
            <AnimatePresence>
              {logs.map((log, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex items-start gap-2 ${
                    log.includes("returns") ? "text-green-400" : "text-blue-300"
                  }`}
                >
                  <span className="text-slate-500 dark:text-slate-600 text-xs mt-1">{(i + 1).toString().padStart(2, '0')}</span>
                  <span>{log}</span>
                </motion.div>
              ))}
            </AnimatePresence>
            {step === 0 && (
              <div className="text-slate-500 dark:text-slate-600 italic">Waiting to start...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InheritanceVisualizer;
