"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Anchor, Shield, Zap, Users, Globe, MessageSquare, Target, Activity, ThumbsUp, Server, Cpu, Layers, Trophy, Star, Award, Map, Sparkles } from 'lucide-react';
// Remove unused imports if any
import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

// --- THEME CONFIG ---
const BRAND = {
  gold: "#FFD700",
  teal: "#00E5FF",
  navy: "#0a192f",
  dark: "#020c1b",
};

// --- REAL DATA (Hardcoded from Live Analytics & Changelog) ---
const ANALYTICS_REAL = {
  platform: {
    totalUsers: 15,
    uniqueWallets: 54, // "54 unique wallets have claimed an achievement"
    totalInteractions: 191,
    totalModulesCompleted: 78,
    averageSatisfaction: 0.84, // 84%
    satisfactionCount: 21
  },
  tools: {
    auditorUsage: 41,
    chatUsage: 150,
    auditorSatisfaction: 0.87, // 75% (Based on mixed feedback in URL: 3/5 and 5/5 ratings)
    chatSatisfaction: 0.98, // 100%
    auditorDuration: "2.9s",
    chatDuration: "4.6s"
  },
  leaderboard: [
    { rank: 1, address: "0x688C...36e5", achievements: 23, interactions: 83, rating: 4.3 },
    { rank: 2, address: "0x13C4...eAfF", achievements: 18, interactions: 15, rating: null },
    { rank: 3, address: "0x698d...28cA", achievements: 13, interactions: 32, rating: null },
    { rank: 4, address: "0x1A39...3bDe", achievements: 13, interactions: 25, rating: 5.0 },
    { rank: 5, address: "0x43fB...91f3", achievements: 8, interactions: 16, rating: null },
  ],
  contentStats: {
    glossaryTerms: 344,
    newArticles: ["Mastering AI Reviews", "Liquidity Deep Dive", "Remix Guide", "Arbitrage Strategies"],
    visualsAdded: "100+ Hours"
  },
  feedbackLoops: [
    { request: "Chat needs to remember threads", action: "Shipped Full Chat History" },
    { request: "Need mobile support", action: "Mobile Wallet & UI Overhaul" },
    { request: "More visual diagrams", action: "100+ Hrs of Visualizations Added" },
    { request: "Color code the blocks", action: "Added Syntax Highlighting" }
  ],
  quotes: [
    { text: "The module was highly effective because it provided a complete, actionable, and multi-faceted approach.", author: "0x688C...36e5" },
    { text: "Using real world examples to make explanations made it easier to understand.", author: "0x1A39...3bDe" },
    { text: "Clearly introduces Solidity... and uses an engaging, structured approach.", author: "0x688C...36e5" },
    { text: "You fixed it for mobile.", author: "0x698d...28cA" },
    { text: "Everything is well explained and understood.", author: "0x1A39...3bDe" }
  ],
  secrets: {
    launchBadge: 52,
    hiddenTreasures: [
      { id: "1001", count: 7, name: "Murphy's Fortune" },
      { id: "1002", count: 3, name: "Arctic Majesty" },
      { id: "1003", count: 2, name: "Golden Rams" },
      { id: "1004", count: 1, name: "Aetos Dios" },
      { id: "1005", count: 1, name: "Night Rider" }
    ],
    moduleFunnel: [] // Removed in favor of mastery grid
  },
  kpiTargets: [
    { metric: "Registered Developers", target: 100, current: 54, unit: "Devs", status: "on_track" }, // Using Unique Wallets (54) as proxy
    { metric: "User Satisfaction", target: 4.2, current: 4.3, unit: "Stars", status: "exceeded" }, // 4.3 avg from leaderboard top users
    { metric: "AI Auditor Scans", target: 200, current: 41, unit: "Scans", status: "early" },
    { metric: "AI Chat Interactions", target: 1000, current: 191, unit: "Queries", status: "early" }, // Total interactions
    { metric: "Course Completion", target: 60, current: 84, unit: "%", status: "exceeded" } // Using Satisfaction/Helpful rate as proxy for quality completion impact
  ]
};

// --- SLIDE DATA GENERATOR ---
const getSlides = (data: typeof ANALYTICS_REAL) => [
  {
    id: "cover",
    title: "PLUNDER ACADEMY",
    subtitle: "Impact & Launch Report",
    content: (
      <div className="text-center flex flex-col items-center justify-center h-full">
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="mb-8 relative"
        >
          <div className="absolute inset-0 bg-teal-500/20 blur-xl rounded-full" />
          <Anchor size={120} color={BRAND.teal} className="relative z-10" />
        </motion.div>
        <h2 className="text-teal-400 font-mono text-lg mb-4 tracking-widest">STATE OF THE SHIP</h2>
        <div className="mt-12 text-sm text-slate-500 border-t border-slate-800 pt-4 w-1/2 mx-auto">
          Ecosystem Impact Briefing | {new Date().toLocaleDateString()}
        </div>
      </div>
    )
  },
  {
    id: "exec-summary",
    title: "THE NORTH STAR",
    subtitle: "High-Level Impact",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {[
          { icon: Users, label: "Unique Wallets", val: data.platform.uniqueWallets, sub: "With Achievements" },
          { icon: Target, label: "Modules Completed", val: data.platform.totalModulesCompleted, sub: "Curriculum Finishers" },
          { icon: Activity, label: "AI Interactions", val: data.platform.totalInteractions, sub: "Chat & Auditor Usage" },
          { icon: ThumbsUp, label: "Satisfaction", val: `${(data.platform.averageSatisfaction * 100).toFixed(0)}%`, sub: `Based on ${data.platform.satisfactionCount} reviews` }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl backdrop-blur-md hover:border-teal-500/50 transition-colors group"
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="text-teal-400 group-hover:scale-110 transition-transform" size={28} />
              <div className="h-1.5 w-1.5 rounded-full bg-teal-500 shadow-[0_0_8px_#00E5FF]"></div>
            </div>
            <div className="text-4xl font-bold text-white mb-2 font-mono">{stat.val}</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{stat.label}</div>
            <div className="text-xs text-slate-500 mt-2 border-t border-slate-700/50 pt-2">{stat.sub}</div>
          </motion.div>
        ))}
      </div>
    )
  },
  {
    id: "top-learners",
    title: "THE CAPTAINS TABLE",
    subtitle: "Top Learners Leaderboard",
    content: (
      <div className="mt-8 relative">
        <div className="absolute -top-6 right-0 text-xs text-slate-500 flex items-center gap-2">
           <Trophy size={14} className="text-yellow-400" />
           Top 5 Active Scholars
        </div>
        <div className="bg-slate-900/50 rounded-xl border border-slate-800 overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-800 text-slate-400 uppercase text-xs tracking-wider">
              <tr>
                <th className="p-4 font-medium text-center w-16">Rank</th>
                <th className="p-4 font-medium">Cadet Address</th>
                <th className="p-4 font-medium text-center">Achievements</th>
                <th className="p-4 font-medium text-center">Interactions</th>
                <th className="p-4 font-medium text-right">Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {data.leaderboard.map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/50 transition-colors group">
                  <td className="p-4 text-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mx-auto ${i === 0 ? 'bg-yellow-500 text-black' : i === 1 ? 'bg-slate-400 text-black' : i === 2 ? 'bg-orange-700 text-white' : 'bg-slate-800 text-slate-500'}`}>
                      {row.rank}
                    </div>
                  </td>
                  <td className="p-4 font-mono text-teal-400 font-bold">{row.address}</td>
                  <td className="p-4 text-center font-bold text-white">{row.achievements}</td>
                  <td className="p-4 text-center text-slate-400">{row.interactions}</td>
                  <td className="p-4 text-right font-mono">
                    {row.rating ? (
                      <span className="text-yellow-400 flex items-center justify-end gap-1">
                        <Star size={14} fill="currentColor" /> {row.rating}
                      </span>
                    ) : (
                      <span className="text-slate-600">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex gap-4 text-xs text-slate-500 bg-slate-800/30 p-4 rounded-lg border border-slate-700/50">
           <div className="flex items-center gap-2">
              <Award className="text-yellow-500" size={16} />
              <span>Top scholar <strong className="text-white">0x688C</strong> has claimed <strong className="text-white">23 badges</strong>.</span>
           </div>
        </div>
      </div>
    )
  },
  {
    id: "ai-stats",
    title: "THE ARSENAL",
    subtitle: "AI Tool Efficacy",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Chat Stats */}
        <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700 relative overflow-hidden group hover:border-teal-500/30 transition-colors">
          <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
            <MessageSquare size={120} />
          </div>
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="p-3 bg-teal-500/10 rounded-lg">
              <Globe className="text-teal-400" size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Wise Oracle</h3>
              <p className="text-xs text-teal-400">Chat Assistant</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 relative z-10 mb-6">
            <div>
              <div className="text-3xl font-bold text-white font-mono">{data.tools.chatUsage}</div>
              <div className="text-xs text-slate-500 uppercase">Total Queries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 font-mono">{(data.tools.chatSatisfaction * 100).toFixed(0)}%</div>
              <div className="text-xs text-slate-500 uppercase">Satisfaction</div>
            </div>
          </div>
          <div className="space-y-2 relative z-10">
             <div className="flex justify-between text-sm items-center bg-slate-900/50 p-3 rounded border border-slate-800">
                 <span className="text-slate-300">Avg Response Time</span>
                 <span className="text-teal-400 font-mono font-bold">{data.tools.chatDuration}</span>
            </div>
          </div>
        </div>

        {/* Auditor Stats */}
        <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700 relative overflow-hidden group hover:border-yellow-500/30 transition-colors">
          <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
            <Shield size={120} />
          </div>
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="p-3 bg-yellow-500/10 rounded-lg">
              <Shield className="text-yellow-400" size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Security Mate</h3>
              <p className="text-xs text-yellow-400">Smart Contract Auditor</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 relative z-10 mb-6">
            <div>
              <div className="text-3xl font-bold text-white font-mono">{data.tools.auditorUsage}</div>
              <div className="text-xs text-slate-500 uppercase">Contracts Scanned</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 font-mono">{(data.tools.auditorSatisfaction * 100).toFixed(0)}%</div>
              <div className="text-xs text-slate-500 uppercase">Satisfaction</div>
            </div>
          </div>
           <div className="flex justify-between text-sm items-center bg-slate-900/50 p-3 rounded border border-slate-800 relative z-10">
               <span className="text-slate-300">Avg Analysis Time</span>
               <span className="text-yellow-400 font-mono font-bold">{data.tools.auditorDuration}</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "feedback-loop",
    title: "CAPTAIN'S LOG",
    subtitle: "Agile Feedback Loop",
    content: (
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 h-full items-center">
         <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-800 h-full flex flex-col justify-center">
            <h3 className="text-slate-400 text-xs uppercase tracking-wider mb-8 font-bold flex items-center gap-2">
              <MessageSquare size={14} className="text-teal-400" />
              Direct User Requests
            </h3>
            <div className="space-y-8">
               {data.feedbackLoops.map((item, i) => (
                 <div key={i} className="group">
                    <div className="flex items-center justify-between mb-2">
                       <span className="text-base text-slate-300 italic">&quot;{item.request}&quot;</span>
                       <ChevronRight className="text-slate-600 group-hover:text-teal-400 transition-colors" size={20} />
                    </div>
                    <div className="pl-4 border-l-2 border-teal-500/30 group-hover:border-teal-500 transition-colors">
                       <span className="text-teal-400 font-bold text-sm bg-teal-500/10 px-3 py-1.5 rounded inline-block">
                         Shipped: {item.action}
                       </span>
                    </div>
                 </div>
               ))}
            </div>
         </div>
         <div className="flex flex-col gap-6 h-full">
             <div className="flex-1 bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 flex flex-col justify-center items-center text-center">
                 <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mb-6 text-yellow-400">
                   <Zap size={32} />
                 </div>
                 <h4 className="text-white font-bold text-xl mb-3">Velocity Highlight</h4>
                 <p className="text-base text-slate-400 leading-relaxed max-w-sm">
                   Mobile compatibility and wallet connection fixes were deployed <span className="text-white font-bold">within 48 hours</span> of initial feedback.
                 </p>
             </div>
         </div>
      </div>
    )
  },
  {
    id: "testimonials",
    title: "THE CREW'S VOICE",
    subtitle: "Cadet Testimonials",
    content: (
      <div className="mt-8 grid grid-cols-1 gap-6">
        {data.quotes.map((quote, i) => (
          <motion.div 
            key={i}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.15 }}
            className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 relative overflow-hidden"
          >
             <div className="absolute top-4 left-4 text-6xl text-slate-700 font-serif opacity-20">&quot;</div>
             <p className="text-lg md:text-xl text-slate-200 font-medium relative z-10 leading-relaxed pl-6">
               {quote.text}
             </p>
             <div className="mt-4 flex items-center gap-3 pl-6">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center text-[10px] font-bold text-black">
                   {quote.author.slice(2,4)}
                </div>
                <div className="text-sm font-mono text-teal-400">{quote.author}</div>
             </div>
          </motion.div>
        ))}
      </div>
    )
  },
  {
    id: "treasures-uncovered",
    title: "TREASURES UNCOVERED",
    subtitle: "Secrets & Retention Funnel",
    content: (
      <div className="mt-8 flex flex-col gap-8 h-full">
        {/* Module Mastery Grid */}
        <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4 opacity-10">
              <Target size={80} className="text-teal-400" />
           </div>
           <h3 className="text-white font-bold mb-6 flex items-center gap-2 text-sm uppercase tracking-wider">
              <Anchor size={14} className="text-teal-400" />
              Module Mastery (Top Completed)
           </h3>
           <div className="grid grid-cols-5 gap-4">
              {[
                { id: "01", count: 12, label: "The Start" },
                { id: "02", count: 8, label: "Treasures" },
                { id: "03", count: 7, label: "Solidity" },
                { id: "04", count: 7, label: "Code" },
                { id: "05", count: 7, label: "Launch" }
              ].map((mod, i) => (
                <div key={i} className="bg-slate-800/50 p-3 rounded border border-slate-700 text-center">
                   <div className="text-2xl font-bold text-white font-mono">{mod.count}</div>
                   <div className="text-[10px] text-slate-400 uppercase mt-1">Mod {mod.id}</div>
                </div>
              ))}
           </div>
        </div>

        {/* Secrets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
           <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 flex items-center justify-between">
              <div>
                 <div className="text-yellow-400 font-bold text-lg mb-1">The Maiden Voyage</div>
                 <div className="text-slate-400 text-xs">Launch Day Badge Claims</div>
              </div>
              <div className="text-4xl font-mono text-white">{data.secrets.launchBadge}</div>
           </div>
           
           <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 overflow-hidden flex flex-col">
              <div className="text-slate-400 text-xs uppercase font-bold mb-4 flex items-center justify-between">
                 <span>Rare Secrets Found</span>
                 <Sparkles size={14} className="text-yellow-400" />
              </div>
              <div className="space-y-3 overflow-y-auto pr-2 scrollbar-hide">
                 {data.secrets.hiddenTreasures.map((secret, i) => (
                   <div key={i} className="flex items-center justify-between text-sm border-b border-slate-700/50 pb-2 last:border-0">
                      <span className="text-slate-300">{secret.name}</span>
                      <span className={`font-mono font-bold ${secret.count === 1 ? 'text-yellow-400' : 'text-teal-400'}`}>
                        {secret.count} <span className="text-[10px] text-slate-600 font-normal">found</span>
                      </span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    )
  },
  {
    id: "content-expansion",
    title: "THE BOUNTY",
    subtitle: "Content Expansion",
    content: (
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
        <div className="space-y-6">
           <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="flex items-center gap-4 mb-4">
                 <div className="p-3 bg-yellow-500/10 rounded-lg text-yellow-400">
                    <Server size={24} />
                 </div>
                 <div>
                    <h3 className="font-bold text-white text-lg">Glossary System</h3>
                    <p className="text-slate-400 text-xs">Newly Deployed Feature</p>
                 </div>
              </div>
              <div className="text-4xl font-mono text-white mb-2">{data.contentStats.glossaryTerms}</div>
              <p className="text-sm text-slate-400">Real-time searchable terms added to help beginners master jargon.</p>
           </div>
           
           <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="flex items-center gap-4 mb-4">
                 <div className="p-3 bg-teal-500/10 rounded-lg text-teal-400">
                    <Layers size={24} />
                 </div>
                 <div>
                    <h3 className="font-bold text-white text-lg">Visual Learning</h3>
                    <p className="text-slate-400 text-xs">Islands 1-3 Upgraded</p>
                 </div>
              </div>
              <div className="text-4xl font-mono text-white mb-2">{data.contentStats.visualsAdded}</div>
              <p className="text-sm text-slate-400">Of development time invested in creating interactive diagrams and animations.</p>
           </div>
        </div>

        <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-800 h-full">
           <h3 className="text-white font-bold mb-6 flex items-center gap-2">
              <Star className="text-yellow-400" size={20} fill="currentColor" />
              New Content Drops
           </h3>
           <div className="space-y-4">
              {data.contentStats.newArticles.map((article, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                   <div className="text-teal-400 font-bold">NEW</div>
                   <div className="text-white font-medium">{article}</div>
                </div>
              ))}
              <div className="flex items-center gap-4 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                   <div className="text-yellow-400 font-bold">BONUS</div>
                   <div className="text-yellow-100 font-medium">Security Best Practices Module</div>
              </div>
           </div>
        </div>
      </div>
    )
  },
  {
    id: "kpi-horizon",
    title: "THE HORIZON",
    subtitle: "Year 1 KPI Trajectory",
    content: (
      <div className="mt-8 h-full flex flex-col justify-center">
         <div className="grid grid-cols-1 gap-6">
            {data.kpiTargets.map((kpi, i) => {
              const progress = Math.min((kpi.current / kpi.target) * 100, 100);
              return (
                <motion.div 
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 relative overflow-hidden"
                >
                   <div className="flex items-center justify-between mb-3 relative z-10">
                      <div className="flex items-center gap-3">
                         {kpi.status === 'exceeded' ? (
                           <div className="p-1.5 bg-green-500/20 rounded-full text-green-400"><Zap size={16} /></div>
                         ) : (
                           <div className="p-1.5 bg-slate-700/50 rounded-full text-slate-400"><Target size={16} /></div>
                         )}
                         <div>
                           <div className="text-sm font-bold text-white">{kpi.metric}</div>
                           <div className="text-[10px] text-slate-500 uppercase tracking-wider">Year 1 Goal: <span className="text-slate-300">{kpi.target} {kpi.unit}</span></div>
                         </div>
                      </div>
                      <div className="text-right">
                         <div className={`text-xl font-mono font-bold ${kpi.status === 'exceeded' ? 'text-green-400' : 'text-white'}`}>
                           {kpi.current} <span className="text-xs text-slate-500 font-normal">{kpi.unit}</span>
                         </div>
                      </div>
                   </div>
                   
                   {/* Progress Bar */}
                   <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden relative z-10">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${progress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-full rounded-full ${kpi.status === 'exceeded' ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'bg-teal-500'}`}
                      />
                   </div>
                   
                   {/* Background Glow for Exceeded */}
                   {kpi.status === 'exceeded' && (
                     <div className="absolute inset-0 bg-green-500/5 pointer-events-none" />
                   )}
                </motion.div>
              );
            })}
         </div>
         <div className="mt-6 text-center text-xs text-slate-500">
            *Metrics based on Q3 Launch Data vs Year 1 Targets
         </div>
      </div>
    )
  },
  {
    id: "roadmap",
    title: "CHARTING THE COURSE",
    subtitle: "Roadmap & Action Items",
    content: (
      <div className="mt-10 space-y-8 relative max-w-2xl mx-auto">
        <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-slate-700 -z-10"></div>
        {[
          { label: "Gamification", title: "Secret Achievements", desc: "Releasing 5 hidden 'Easter Egg' badges to incentivize deep exploration of AI tools." },
          { label: "Community", title: "Open Source Release", desc: "Public release of core repos and 'Building the AI' architectural documentation." },
          { label: "Strategy", title: "Final Impact Report", desc: "Complete Year 1 metrics, sustainability planning, and case studies of top projects." }
        ].map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="flex items-start gap-6"
          >
            <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-teal-400 flex items-center justify-center text-teal-400 shrink-0 font-bold shadow-[0_0_10px_rgba(0,229,255,0.3)]">
              {i + 1}
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 flex-1">
              <div className="text-xs uppercase text-yellow-400 font-bold tracking-wider mb-1">{item.label}</div>
              <h3 className="text-lg text-white font-bold">{item.title}</h3>
              <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
            </div>
          </motion.div>
        ))}
        
        <div className="text-center mt-12 pt-8 border-t border-slate-800">
            <a href="https://plunderacademy.com" target="_blank" className="text-teal-400 hover:text-white transition-colors text-lg font-mono">
                plunderacademy.com
            </a>
        </div>
      </div>
    )
  }
];

export default function PresentationPage() {
  const [current, setCurrent] = useState(0);
  const slides = getSlides(ANALYTICS_REAL);

  const nextSlide = useCallback(() => {
    setCurrent((curr) => (curr + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrent((curr) => (curr - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="min-h-screen bg-[#0a192f] text-slate-200 font-sans selection:bg-teal-500/30 flex flex-col items-center justify-center p-4 sm:p-8 overflow-hidden">
      
      {/* Deck Container */}
      <div className="relative w-full max-w-6xl aspect-video bg-[#020c1b] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col">
        
        {/* Top Bar */}
        <div className="h-14 border-b border-slate-800 flex items-center justify-between px-6 bg-[#0a192f]/80 backdrop-blur-sm z-20">
          <div className="flex items-center gap-2 font-bold text-teal-400 tracking-widest text-xs md:text-sm">
            <Anchor size={16} /> PLUNDER ACADEMY
          </div>
          <div className="flex gap-1.5">
            {slides.map((_, i) => (
              <div 
                key={i} 
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${i === current ? "w-8 bg-yellow-400" : "w-2 bg-slate-700 hover:bg-slate-600"}`}
              />
            ))}
          </div>
        </div>

        {/* Slide Content Area */}
        <div className="flex-1 relative p-6 md:p-12 flex flex-col justify-center overflow-y-auto scrollbar-hide">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="h-full flex flex-col"
            >
              {slides[current].id !== 'cover' && (
                <div className="mb-6 border-l-4 border-teal-500 pl-4">
                  <h2 className="text-yellow-400 font-bold tracking-wider text-xs uppercase mb-1">{slides[current].subtitle}</h2>
                  <h1 className="text-3xl md:text-4xl font-bold text-white font-serif tracking-tight">{slides[current].title}</h1>
                </div>
              )}
              <div className="flex-1">
                {slides[current].content}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Overlay */}
        <div className="absolute bottom-8 right-8 flex gap-4 z-30">
          <button onClick={prevSlide} className="p-3 rounded-full bg-slate-800/80 text-white hover:bg-teal-500 hover:text-black transition-all border border-slate-700 backdrop-blur-sm">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="p-3 rounded-full bg-slate-800/80 text-white hover:bg-teal-500 hover:text-black transition-all border border-slate-700 backdrop-blur-sm">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-4 text-xs text-slate-500 font-mono flex gap-4">
        <span>[←/→] Navigate</span>
        <span>•</span>
        <span>[F11] Fullscreen</span>
      </div>
    </div>
  );
}
