"use client";

import React, { useState, useEffect } from "react";
import { RefreshCw, Copy, Check } from "lucide-react";

export function HashGenerator() {
  const [input, setInput] = useState("Hello Blockchain!");
  const [hash, setHash] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const generateHash = async () => {
      const msgBuffer = new TextEncoder().encode(input);
      const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
      setHash(hashHex);
    };
    generateHash();
  }, [input]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(hash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 w-full rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      <div className="p-6 space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Data Input</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="Type anything here..."
          />
          <p className="text-xs text-muted-foreground">
            Try changing a single character and watch the hash change completely.
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground flex items-center gap-2">
            SHA-256 Hash Output
            <RefreshCw className="w-3 h-3 text-muted-foreground animate-spin-slow" />
          </label>
          <div className="relative group">
            <div className="w-full p-4 rounded-md bg-slate-950 text-slate-50 font-mono text-xs break-all border border-slate-800">
              {hash}
            </div>
            <button
              onClick={copyToClipboard}
              className="absolute top-2 right-2 p-1.5 rounded-md bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors opacity-0 group-hover:opacity-100"
              title="Copy Hash"
            >
              {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-muted/30 p-4 border-t border-border">
        <div className="flex gap-3 items-start">
          <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mt-0.5">
            <RefreshCw className="w-4 h-4" />
          </div>
          <div className="text-sm">
            <p className="font-semibold text-foreground mb-1">The Avalanche Effect</p>
            <p className="text-muted-foreground">
              Notice how even a tiny change (like adding a space or changing capitalization) results in a completely different hash. This property makes blockchains tamper-evident.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
