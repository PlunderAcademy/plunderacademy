"use client";

import * as React from "react";
import { useAccount } from "wagmi";

interface SessionContextType {
  sessionId: string;
  address?: string;
  isConnected: boolean;
}

const SessionContext = React.createContext<SessionContextType | null>(null);

/**
 * Generates or retrieves a persistent session ID from localStorage
 */
function getOrCreateSessionId(): string {
  if (typeof window === "undefined") {
    return crypto.randomUUID();
  }

  const STORAGE_KEY = "plunder-academy-session-id";
  const stored = localStorage.getItem(STORAGE_KEY);

  if (stored) {
    return stored;
  }

  const newSessionId = crypto.randomUUID();
  localStorage.setItem(STORAGE_KEY, newSessionId);
  return newSessionId;
}

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const { address, isConnected } = useAccount();
  const [sessionId] = React.useState(getOrCreateSessionId);

  return (
    <SessionContext.Provider value={{ sessionId, address, isConnected }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  const context = React.useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within SessionProvider");
  }
  return context;
}

