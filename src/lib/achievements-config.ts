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
  {
    taskCode: 1,
    title: "Training Quiz Master",
    description: "Complete the comprehensive training quiz with perfect scores",
    category: "fundamentals"
  },
  {
    taskCode: 2,
    title: "On-Chain Pioneer",
    description: "Successfully create and submit a transaction on the blockchain",
    category: "advanced"
  },
  {
    taskCode: 3,
    title: "Security Sentinel",
    description: "Master smart contract security best practices",
    category: "security"
  },
  {
    taskCode: 4,
    title: "Gas Optimization Expert",
    description: "Optimize contract gas usage to professional standards",
    category: "gas"
  },
  {
    taskCode: 5,
    title: "Advanced Developer",
    description: "Complete advanced blockchain development challenges",
    category: "advanced"
  }
  // Add new achievements here following the same pattern
  // {
  //   taskCode: 6,
  //   title: "New Achievement Title",
  //   description: "Description of what the user accomplished",
  //   category: "fundamentals" // or "advanced", "security", "gas"
  // }
];

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
