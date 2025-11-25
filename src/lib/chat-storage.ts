/**
 * Chat storage utilities for persisting conversation history in localStorage
 */

import type { UIMessage } from "ai";

export interface StoredConversation {
  id: string;
  title: string;
  messages: UIMessage[];
  createdAt: number;
  updatedAt: number;
  walletAddress?: string;
}

const STORAGE_KEY = "plunder_chat_conversations";
const MAX_CONVERSATIONS = 50; // Limit to prevent localStorage bloat

/**
 * Get all stored conversations for a wallet address
 */
export function getConversations(walletAddress?: string): StoredConversation[] {
  if (typeof window === "undefined") return [];
  
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];
    
    const allConversations: StoredConversation[] = JSON.parse(data);
    
    // Filter by wallet address if provided
    if (walletAddress) {
      return allConversations
        .filter((c) => c.walletAddress === walletAddress)
        .sort((a, b) => b.updatedAt - a.updatedAt);
    }
    
    return allConversations.sort((a, b) => b.updatedAt - a.updatedAt);
  } catch (error) {
    console.error("Error loading conversations:", error);
    return [];
  }
}

/**
 * Get a specific conversation by ID
 */
export function getConversation(id: string): StoredConversation | null {
  if (typeof window === "undefined") return null;
  
  try {
    const conversations = getConversations();
    return conversations.find((c) => c.id === id) || null;
  } catch (error) {
    console.error("Error loading conversation:", error);
    return null;
  }
}

/**
 * Save or update a conversation
 */
export function saveConversation(conversation: StoredConversation): void {
  if (typeof window === "undefined") return;
  
  try {
    let conversations = getConversations();
    
    const existingIndex = conversations.findIndex((c) => c.id === conversation.id);
    
    if (existingIndex >= 0) {
      // Update existing
      conversations[existingIndex] = {
        ...conversation,
        updatedAt: Date.now(),
      };
    } else {
      // Add new
      conversations.unshift({
        ...conversation,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });
    }
    
    // Limit total conversations
    if (conversations.length > MAX_CONVERSATIONS) {
      conversations = conversations.slice(0, MAX_CONVERSATIONS);
    }
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(conversations));
  } catch (error) {
    console.error("Error saving conversation:", error);
  }
}

/**
 * Delete a conversation
 */
export function deleteConversation(id: string): void {
  if (typeof window === "undefined") return;
  
  try {
    const conversations = getConversations();
    const filtered = conversations.filter((c) => c.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error("Error deleting conversation:", error);
  }
}

/**
 * Generate a title from the first user message
 */
export function generateConversationTitle(messages: UIMessage[]): string {
  const firstUserMessage = messages.find((m) => m.role === "user");
  
  if (!firstUserMessage) return "New conversation";
  
  // Extract text from message parts
  let text = "";
  if (Array.isArray(firstUserMessage.parts)) {
    text = firstUserMessage.parts
      .filter((p) => p?.type === "text")
      .map((p) => (p.type === "text" ? p.text : ""))
      .join(" ");
  }
  
  // Truncate to reasonable length
  const maxLength = 50;
  if (text.length > maxLength) {
    return text.slice(0, maxLength).trim() + "...";
  }
  
  return text || "New conversation";
}

/**
 * Create a new conversation ID
 */
export function createConversationId(): string {
  return `chat-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

