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
  },
  
  // Ultimate Achievement (1006)
  {
    taskCode: 1006,
    title: "Plunder Master",
    description: "You have achieved the ultimate rank of Plunder Master, conquering all challenges across the seven seas!",
    category: "advanced"
  },
  
  // Secret Achievements (2001+)
  {
    taskCode: 2001,
    title: "Parley",
    description: "You've mastered the art of cryptographic negotiation.",
    category: "advanced"
  },
  {
    taskCode: 2002,
    title: "Buried Treasure Map",
    description: "You've deciphered the ancient cryptographic treasure map.",
    category: "advanced"
  },
  {
    taskCode: 2003,
    title: "Mutiny Prevention",
    description: "You've successfully prevented a mutiny through cryptographic consensus.",
    category: "advanced"
  },
  {
    taskCode: 2004,
    title: "Dead Man's Chest",
    description: "You've unlocked the legendary Dead Man's Chest and claimed its secrets.",
    category: "advanced"
  },
  {
    taskCode: 2005,
    title: "Master Control Program",
    description: "You've mastered the art of controlling the fleet's operations.",
    category: "advanced"
  },
];

// ============================================================================
// Achievement Type Helpers
// ============================================================================

/**
 * Check if an achievement is a module achievement (training modules)
 * Module achievements: 1-5, 21-25, 31-33, 41-46, 51-54
 */
export function isModuleAchievement(taskCode: number): boolean {
  return (
    (taskCode >= 1 && taskCode <= 5) ||      // Island 1
    (taskCode >= 21 && taskCode <= 25) ||    // Island 2
    (taskCode >= 31 && taskCode <= 33) ||    // Island 3
    (taskCode >= 41 && taskCode <= 46) ||    // Island 4
    (taskCode >= 51 && taskCode <= 54)       // Island 5
  );
}

/**
 * Check if an achievement is time-limited (1100-1199)
 */
export function isTimeLimitedAchievement(taskCode: number): boolean {
  return taskCode >= 1100 && taskCode < 1200;
}

/**
 * Check if an achievement is the Plunder Master (1006)
 */
export function isPlunderMasterAchievement(taskCode: number): boolean {
  return taskCode === 1006;
}

/**
 * Check if an achievement is a secret achievement
 * Secret achievements: 1001-1005, 2001-2010 (NOT 1006 - that's Plunder Master)
 */
export function isSecretAchievement(taskCode: number): boolean {
  return (
    (taskCode >= 1001 && taskCode <= 1005) ||  // Island secrets
    (taskCode >= 2001 && taskCode <= 2010)     // AI discovery secrets
  );
}

/**
 * @deprecated Use isPlunderMasterAchievement instead
 */
export function isUltimateAchievement(taskCode: number): boolean {
  return isPlunderMasterAchievement(taskCode);
}

// ============================================================================
// Achievement Group Getters
// ============================================================================

/**
 * Get all module achievements (training modules)
 */
export function getModuleAchievements(): Achievement[] {
  return ALL_ACHIEVEMENTS.filter(a => isModuleAchievement(a.taskCode));
}

/**
 * Get all secret achievements (1001-1005, 2001-2010)
 */
export function getSecretAchievements(): Achievement[] {
  return ALL_ACHIEVEMENTS.filter(a => isSecretAchievement(a.taskCode));
}

/**
 * Get all time-limited achievements (1100-1199)
 */
export function getTimeLimitedAchievements(): Achievement[] {
  return ALL_ACHIEVEMENTS.filter(a => isTimeLimitedAchievement(a.taskCode));
}

/**
 * Get the Plunder Master achievement (1006)
 */
export function getPlunderMasterAchievement(): Achievement | undefined {
  return ALL_ACHIEVEMENTS.find(a => isPlunderMasterAchievement(a.taskCode));
}

// ============================================================================
// Plunder Master Requirements
// ============================================================================

/**
 * Task codes required to claim Plunder Master (1006)
 * Includes all module achievements (23) + all secret achievements (10) = 33 total
 */
export const PLUNDER_MASTER_REQUIRED_ACHIEVEMENTS = [
  // Island 1 - Jungle Island (5)
  1, 2, 3, 4, 5,
  // Island 2 - Frost Peak (5)
  21, 22, 23, 24, 25,
  // Island 3 - Desert Bluff (3)
  31, 32, 33,
  // Island 4 - Gilded Bastion (6)
  41, 42, 43, 44, 45, 46,
  // Island 5 - Neon Haven (4)
  51, 52, 53, 54,
  // Secret Achievements - Island secrets (5)
  1001, 1002, 1003, 1004, 1005,
  // Secret Achievements - AI discoveries (5)
  2001, 2002, 2003, 2004, 2005,
] as const;

/**
 * Get the count of achievements required for Plunder Master
 */
export function getPlunderMasterRequiredCount(): number {
  return PLUNDER_MASTER_REQUIRED_ACHIEVEMENTS.length;
}

/**
 * Check how many required achievements a user has completed
 */
export function getPlunderMasterProgress(claimedTaskCodes: number[]): {
  completed: number;
  required: number;
  missing: number[];
  isEligible: boolean;
} {
  const completed = PLUNDER_MASTER_REQUIRED_ACHIEVEMENTS.filter(
    code => claimedTaskCodes.includes(code)
  ).length;
  
  const missing = PLUNDER_MASTER_REQUIRED_ACHIEVEMENTS.filter(
    code => !claimedTaskCodes.includes(code)
  );
  
  return {
    completed,
    required: PLUNDER_MASTER_REQUIRED_ACHIEVEMENTS.length,
    missing: [...missing],
    isEligible: missing.length === 0,
  };
}

// ============================================================================
// General Helpers
// ============================================================================

/**
 * Get achievement by task code
 */
export function getAchievementByTaskCode(taskCode: number): Achievement | undefined {
  return ALL_ACHIEVEMENTS.find(achievement => achievement.taskCode === taskCode);
}

/**
 * Get achievements by category
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
