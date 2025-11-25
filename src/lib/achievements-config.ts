/**
 * Shared Achievement Configuration
 * 
 * This file contains the centralized configuration for all achievements in the system.
 * Add new achievements here and they will automatically appear in:
 * - Header achievements counter and preview
 * - Achievements modal (both earned and placeholder cards)
 * - Animated map overlays
 * - Demo page
 */

export interface Achievement {
  taskCode: number;
  title: string;
  description: string;
  category: "security" | "gas" | "fundamentals" | "advanced";
}

/**
 * All available achievements in the system.
 * 
 * When you create new achievements:
 * 1. Add them to this array with the next available taskCode
 * 2. Ensure the taskCode matches your backend achievement number (e.g., taskCode: 6 = achievement 0006)
 * 3. Choose an appropriate category for consistent styling
 * 4. All components will automatically show placeholders for unearned achievements
 */
export const ALL_ACHIEVEMENTS: Achievement[] = [
  // Island 1 - Jungle Island
  {
    taskCode: 1,
    title: "The Last Bottle of Rum",
    description: "The last bottle of rum hidden in the captain's quarters.",
    category: "fundamentals"
  },
  {
    taskCode: 2,
    title: "The Bring 'Em Closer",
    description: "A finely-crafted telescope for seeing hidden blockchain development paths clearly.",
    category: "fundamentals"
  },
  {
    taskCode: 3,
    title: "The Molten Mountain",
    description: "Symbol of Solidity mastery forged in the heart of volcanic fire.",
    category: "fundamentals"
  },
  {
    taskCode: 4,
    title: "The Sharded Sun Temple",
    description: "Proof of growth as a skilled Zilliqa blockchain development builder.",
    category: "fundamentals"
  },
  {
    taskCode: 5,
    title: "The Gobekli Sun Disk",
    description: "Your lasting token creation shining bright in the blockchain network.",
    category: "fundamentals"
  },
  
  // Island 2 - Frost Peak
  {
    taskCode: 21,
    title: "The Crash Landing",
    description: "A fragment of the island's consciousness — proof that even in collapse, the architect endures.",
    category: "advanced"
  },
  {
    taskCode: 22,
    title: "The Frostbitten Frontier",
    description: "A sigil of truth forged in light. Your code and your will now glow with proof.",
    category: "advanced"
  },
  {
    taskCode: 23,
    title: "The Crystal Mountain",
    description: "The mountain remembers you — a token of those who have learned restraint in the storm.",
    category: "advanced"
  },
  {
    taskCode: 24,
    title: "The Shattered Divide",
    description: "You have learned the rhythm of the island. The pulse of patience. The logic of restraint.",
    category: "advanced"
  },
  {
    taskCode: 25,
    title: "The Woolly Mammoth",
    description: "The final proof. A symbol of creation unbound. The circle closes; the thread becomes light.",
    category: "advanced"
  },
  
  // Island 3 - Desert Bluff
  {
    taskCode: 31,
    title: "The Siwa Sanctuary",
    description: "A pool of reflection within the desert's heart, proof that under burning skies, individuality endures.",
    category: "advanced"
  },
  {
    taskCode: 32,
    title: "The Alcazaba Kasbah",
    description: "A fortress of encoded dreams, proof that art survives when its story is bound to the chain of memory.",
    category: "advanced"
  },
  {
    taskCode: 33,
    title: "The Mound of Morning",
    description: "The pyramid of light stands eternal — proof of mastery.",
    category: "advanced"
  },
  
  // Island 4 - Gilded Bastion
  {
    taskCode: 41,
    title: "The Watchers Gate",
    description: "You have crossed the threshold of flow — guardian of balance.",
    category: "advanced"
  },
  {
    taskCode: 42,
    title: "The Old Shambles",
    description: "Where chaos once reigned, your logic brings order through oracles and patterns of fairness.",
    category: "advanced"
  },
  {
    taskCode: 43,
    title: "The Dome of The Rock",
    description: "Beyond a passing shadow.",
    category: "advanced"
  },
  {
    taskCode: 44,
    title: "The Gothic Spire",
    description: "Ever-reaching, never collapsing.",
    category: "advanced"
  },
  {
    taskCode: 45,
    title: "The Seaward Pillar",
    description: "A beacon of restraint — shining far, standing firm.",
    category: "gas"
  },
  {
    taskCode: 46,
    title: "The Garden Ruins",
    description: "The Garden breathes again.",
    category: "advanced"
  },
  
  // Island 5 - Neon Haven
  {
    taskCode: 51,
    title: "The Nuclear Reactor",
    description: "A token of balance between pleasure and peril.",
    category: "advanced"
  },
  {
    taskCode: 52,
    title: "The Sushi Joint",
    description: "Master of the flow — watching every transaction, anticipating every error, commanding the system.",
    category: "advanced"
  },
  {
    taskCode: 53,
    title: "The Flying Dutchman",
    description: "A seamless bridge between worlds — where code meets user, and vision becomes reality.",
    category: "advanced"
  },
  
  // Time-Limited Achievements (1100+)
  {
    taskCode: 1101,
    title: "The Maiden Voyage",
    description: "The Maiden Voyage was a time limited achievement event. (Launch day of PlunderAcademy)",
    category: "advanced"
  },
  
  // Secret Achievements (1001+)
  {
    taskCode: 1001,
    title: "Murphy's Fortune",
    description: "You found the hidden treasure on the island!",
    category: "advanced"
  },
  {
    taskCode: 1002,
    title: "Artic Majesty",
    description: "You found the artic majesty on the island!",
    category: "advanced"
  },
  {
    taskCode: 1003,
    title: "Golden Rams Head",
    description: "You found the golden rams head on the island!",
    category: "advanced"
  },
  {
    taskCode: 1004,
    title: "Aetos Dios",
    description: "You found the aetos dios on the island!",
    category: "advanced"
  },
  {
    taskCode: 1005,
    title: "Night Rider",
    description: "You found the night rider on the island!",
    category: "advanced"
  }
];

/**
 * Helper to check if an achievement is time-limited
 */
export function isTimeLimitedAchievement(taskCode: number): boolean {
  return taskCode >= 1100 && taskCode < 2000;
}

/**
 * Helper to get all time-limited achievements
 */
export function getTimeLimitedAchievements(): Achievement[] {
  return ALL_ACHIEVEMENTS.filter(achievement => isTimeLimitedAchievement(achievement.taskCode));
}

/**
 * Helper function to get achievement by task code
 */
export function getAchievementByTaskCode(taskCode: number): Achievement | undefined {
  return ALL_ACHIEVEMENTS.find(achievement => achievement.taskCode === taskCode);
}

/**
 * Helper function to get achievements by category
 */
export function getAchievementsByCategory(category: Achievement["category"]): Achievement[] {
  return ALL_ACHIEVEMENTS.filter(achievement => achievement.category === category);
}

/**
 * Get the total number of available achievements
 */
export function getTotalAchievementsCount(): number {
  return ALL_ACHIEVEMENTS.length;
}
