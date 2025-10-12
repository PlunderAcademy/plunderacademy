import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type ArticleLevel = "beginner" | "intermediate" | "advanced";

export type ArticleMeta = {
  slug: string;
  title: string;
  excerpt: string;
  level: ArticleLevel;
  tags: string[];
  hero?: string;
};

export type LessonMeta = {
  id: string;
  slug: string;
  module: string;
  number: string;
  title: string;
  objective: string;
  practicalTakeaway?: string;
};

export type MissionMeta = {
  title: string;
  subtitle: string;
  objective: string;
  module: string;
  content: string;
  storyIntro: string;
  monologue: string[];
  achievementReward?: {
    name: string;
    description: string;
  };
};

export type QuizQuestion = {
  id: number;
  type: 'multiple-choice' | 'multiple-select' | 'word-jumble' | 'concept-matching' | 'timeline-builder' | 'drag-drop-puzzle' | 'true-false-statements';
  lesson: string;
  question: string;
  options: string[];
  points: number;
  // Interactive element specific data
  interactiveData?: {
    // Word Jumble
    word?: string;  // Only in learning mode
    hint?: string;
    scrambled?: string;
    // Concept Matching
    pairs?: Array<{ conceptId: string; definitionId: string; concept: string; definition: string; category?: string }>;  // Learning mode
    concepts?: Array<{ id: string; text: string; category?: string }>;  // Assessment mode (no answers)
    definitions?: Array<{ id: string; text: string }>;  // Assessment mode (no answers)
    // Timeline Builder
    events?: Array<{ id: string; text: string; correctPosition?: number }>;  // correctPosition only in learning mode
    // Drag & Drop Puzzle
    codeBlocks?: Array<{ id: string; content: string; correctPosition?: number }>;  // correctPosition only in learning mode
    // True/False
    statements?: Array<{ id: string; text: string; correctAnswer?: boolean; explanation?: string }>;  // correctAnswer only in learning mode
  };
};

export type QuizMeta = {
  id: string;
  slug: string;
  module: string;
  title: string;
  description: string;
  totalQuestions: number;
  passingScore: number;
  timeLimit: number;
  questions: QuizQuestion[];
  content: string;
};

export type ModuleMeta = {
  id: string;
  slug: string;
  title: string;
  description: string;
  island: string;
  lessons: LessonMeta[];
};

export type IslandMeta = {
  id: string;
  slug: string;
  name: string;
  title: string;
  description: string;
  status: 'available' | 'coming-soon';
  estimatedHours: string;
  icon: string;
  color: string;
  modules: ModuleMeta[];
};

const articlesDirectory = path.join(process.cwd(), 'src/content/articles');
const modulesDirectory = path.join(process.cwd(), 'src/content/modules');

export async function getArticles(): Promise<ArticleMeta[]> {
  const fileNames = fs.readdirSync(articlesDirectory);
  
  const articles = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      
      return {
        slug: data.slug || fileName.replace(/\.mdx$/, ''),
        title: data.title,
        excerpt: data.excerpt,
        level: data.level as ArticleLevel,
        tags: data.tags || [],
        hero: data.hero,
      };
    });
  
  // Define logical learning order: Beginner → Intermediate → Advanced
  const learningOrder = [
    // Beginner fundamentals (left column, top to bottom)
    'zilliqa-evm-introduction',
    'role-of-solidity-in-zilliqa-growth', 
    'zilliqa-evm-important-information',
    'zilliqa-wallets-and-rpc',
    'evm-storage-layout',
    
    // Intermediate development (right column, top to bottom)
    'examples-of-solidity-on-zilliqa',
    'foundry-testing',
    'gas-optimizations',
    
    // Advanced optimization (right column, bottom)
    'security-checklist',
    'zilliqa-performance-and-fees'
  ];
  
  // Sort articles by learning order
  return articles.sort((a, b) => {
    const aIndex = learningOrder.indexOf(a.slug);
    const bIndex = learningOrder.indexOf(b.slug);
    
    // If both articles are in the learning order, sort by their position
    if (aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex;
    }
    
    // If only one article is in the learning order, prioritize it
    if (aIndex !== -1) return -1;
    if (bIndex !== -1) return 1;
    
    // If neither article is in the learning order, maintain original order
    return 0;
  });
}

export async function getArticleBySlug(slug: string) {
  // First try to find the file by matching the slug in frontmatter
  const fileNames = fs.readdirSync(articlesDirectory);
  
  for (const fileName of fileNames) {
    if (!fileName.endsWith('.mdx')) continue;
    
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Check if this file's slug matches
    if (data.slug === slug || fileName.replace(/\.mdx$/, '') === slug) {
      return {
        meta: {
          slug: data.slug || slug,
          title: data.title,
          excerpt: data.excerpt,
          level: data.level as ArticleLevel,
          tags: data.tags || [],
          hero: data.hero,
        },
        content,
      };
    }
  }
  
  throw new Error(`Article with slug "${slug}" not found`);
}

// Island metadata
const islandMetadata: Record<string, { name: string; title: string; description: string; status: 'available' | 'coming-soon'; estimatedHours: string; icon: string; color: string; order: number }> = {
  'jungle': {
    name: 'Jungle Island',
    title: 'Jungle Island - Fundamentals', 
    description: 'Master the fundamental concepts of blockchain technology and EVM development in this comprehensive starting adventure.',
    status: 'available',
    estimatedHours: '3-5h',
    icon: '🌴',
    color: 'green',
    order: 1
  },
  'frost': {
    name: 'Frost Peak',
    title: 'Frost Peak - Advanced Solidity',
    description: 'Scale the heights of advanced Solidity development with inheritance, testing, staking contracts, and complex data structures.',
    status: 'coming-soon', 
    estimatedHours: '5-8h',
    icon: '❄️',
    color: 'blue',
    order: 2
  },
  'desert': {
    name: 'Desert Bluff',
    title: 'Desert Bluff - Token & NFT Launchpad',
    description: 'Navigate the vast dunes of NFT creation, metadata handling, and token collection deployments with modern standards.',
    status: 'coming-soon',
    estimatedHours: '3-4h', 
    icon: '🏜️',
    color: 'orange',
    order: 3
  },
  'castle': {
    name: 'Gilded Bastion',
    title: 'Gilded Bastion - On-Chain Systems',
    description: 'Discover the treasures of DeFi protocols, oracles, upgradeability patterns, and advanced blockchain architecture.',
    status: 'coming-soon',
    estimatedHours: '6-9h',
    icon: '🏰',
    color: 'yellow',
    order: 4
  },
  'neon': {
    name: 'Neon Haven', 
    title: 'Neon Haven - Frontend Integration',
    description: 'Enter the digital metropolis and connect smart contracts to web applications with modern Web3 libraries and user interfaces.',
    status: 'coming-soon',
    estimatedHours: '3-5h',
    icon: '🌃',
    color: 'cyan',
    order: 5
  }
};

export async function getIslands(): Promise<IslandMeta[]> {
  const modules = await getModules();
  
  return Object.entries(islandMetadata)
    .sort(([, a], [, b]) => a.order - b.order)
    .map(([slug, metadata]) => ({
      id: slug,
      slug,
      name: metadata.name,
      title: metadata.title,
      description: metadata.description,
      status: metadata.status,
      estimatedHours: metadata.estimatedHours,
      icon: metadata.icon,
      color: metadata.color,
      modules: modules.filter(module => module.island === slug)
    }));
}

export async function getModules(): Promise<ModuleMeta[]> {
  // Check if new island-based structure exists
  const islandDirs = fs.readdirSync(modulesDirectory)
    .filter(name => fs.statSync(path.join(modulesDirectory, name)).isDirectory());
  
  // Module metadata - now using slugs and including island info
  const moduleMetadata: Record<string, { title: string; description: string; order: number; island: string }> = {
    // Island 1: Jungle (Fundamentals)
    'blockchain-fundamentals': {
      title: 'Blockchain Fundamentals',
      description: 'Gain a thorough understanding of blockchain\'s fundamental characteristics, technical structure, and growing real-world impact.',
      order: 1,
      island: 'jungle'
    },
    'evm-fundamentals': {
      title: 'EVM Fundamentals',
      description: 'Gain a thorough understanding of Ethereum Virtual Machine, the virtualized computing environment that executes smart contracts.',
      order: 2,
      island: 'jungle'
    },
    'intro-to-solidity': {
      title: 'Intro to Solidity',
      description: 'Learn Solidity, the primary programming language for writing smart contracts on Ethereum and all EVM-compatible blockchains.',
      order: 3,
      island: 'jungle'
    },
    'zilliqa-evm-setup': {
      title: 'Setting Up the Zilliqa EVM Development Environment',
      description: 'Set up your development environment with MetaMask, Hardhat, and other essential tools for Zilliqa EVM development.',
      order: 4,
      island: 'jungle'
    },
    'creating-erc20-tokens': {
      title: 'Creating Your Own Token on Zilliqa EVM',
      description: 'Learn how to create, deploy, and manage ERC-20 tokens on Zilliqa EVM using OpenZeppelin\'s secure contract libraries.',
      order: 5,
      island: 'jungle'
    },
    // Island 2: Frost Peak (Advanced Solidity)
    'advanced-solidity-foundations': {
      title: 'Advanced Solidity Foundations',
      description: 'Master contract inheritance, interfaces, events, libraries, and OpenZeppelin ecosystem integration.',
      order: 6,
      island: 'frost'
    },
    'advanced-data-structures-error-handling': {
      title: 'Advanced Data Structures & Error Handling',
      description: 'Learn complex mappings, gas optimization, custom errors, and security patterns like reentrancy guards.',
      order: 7,
      island: 'frost'
    },
    'testing-fundamentals': {
      title: 'Testing Fundamentals',
      description: 'Set up testing frameworks, write unit tests, and implement test-driven development for smart contracts.',
      order: 8,
      island: 'frost'
    },
    'staking-concepts-time-logic': {
      title: 'Staking Concepts & Time-Based Logic',
      description: 'Understand staking architecture, time-based logic, reward calculations, and security considerations.',
      order: 9,
      island: 'frost'
    },
    'staking-contract-practical': {
      title: 'Staking Contract Practical',
      description: 'Deploy a complete staking contract with time-locked staking, rewards, and comprehensive testing.',
      order: 10,
      island: 'frost'
    },
    // Island 3: Desert Bluff (Token & NFT Launchpad)
    'erc721-standards-implementation': {
      title: 'ERC721 Standards & Implementation',
      description: 'Implement ERC721 NFTs with enumerable extensions, gas-efficient minting, and security best practices.',
      order: 11,
      island: 'desert'
    },
    'advanced-nft-features': {
      title: 'Advanced NFT Features',
      description: 'Add metadata standards, IPFS integration, reveal mechanics, royalties, and multi-phase minting.',
      order: 12,
      island: 'desert'
    },
    'nft-collection-practical': {
      title: 'NFT Collection Practical',
      description: 'Deploy a complete NFT collection with reveal mechanics, royalties, and IPFS metadata integration.',
      order: 13,
      island: 'desert'
    },
    // Island 4: Gilded Bastion (On-Chain Systems & Upgradeability)
    'defi-fundamentals-simple-swaps': {
      title: 'DeFi Fundamentals & Simple Swaps',
      description: 'Learn token economics, liquidity concepts, simple swap mechanics, and DeFi security considerations.',
      order: 14,
      island: 'castle'
    },
    'oracles-randomness-airdrop-patterns': {
      title: 'Oracles, Randomness & Airdrop Patterns',
      description: 'Implement Chainlink oracles, commit-reveal sequences, and efficient airdrop mechanisms.',
      order: 15,
      island: 'castle'
    },
    'random-number-generator-practical': {
      title: 'Random Number Generator Practical',
      description: 'Deploy a fair randomness generator using commit-reveal patterns with anti-manipulation safeguards.',
      order: 16,
      island: 'castle'
    },
    'proxy-patterns-upgradeability': {
      title: 'Proxy Patterns & Upgradeability',
      description: 'Master transparent and UUPS proxy patterns, storage collision prevention, and upgrade safety.',
      order: 17,
      island: 'castle'
    },
    'gas-optimization-security-patterns': {
      title: 'Gas Optimization & Security Patterns',
      description: 'Advanced gas optimization techniques, storage packing, vulnerability patterns, and audit preparation.',
      order: 18,
      island: 'castle'
    },
    'upgradable-contract-practical': {
      title: 'Upgradable Contract Practical',
      description: 'Deploy upgradable contracts using proven templates with safe upgrade mechanisms and testing.',
      order: 19,
      island: 'castle'
    },
    // Island 5: Neon Haven (Frontend Integration)
    'web3-frontend-basics': {
      title: 'Web3 Frontend Basics',
      description: 'Connect wallets with RainbowKit, use wagmi and viem, read contract data, and handle networks.',
      order: 20,
      island: 'neon'
    },
    'contract-interactions-error-handling': {
      title: 'Contract Interactions & Error Handling',
      description: 'Write to contracts, monitor transactions, estimate gas, handle errors, and listen to events.',
      order: 21,
      island: 'neon'
    },
    'dapp-interface-practical': {
      title: 'dApp Interface Practical',
      description: 'Build a complete dApp interface with wallet connection, contract interactions, and mobile design.',
      order: 22,
      island: 'neon'
    }
  };
  
  const allModules: ModuleMeta[] = [];
  
  // Check for both old and new directory structures
  for (const islandDir of islandDirs) {
    const islandPath = path.join(modulesDirectory, islandDir);
    
    if (fs.statSync(islandPath).isDirectory()) {
      // Check if this is an island directory (like 'jungle')
      const moduleDirs = fs.readdirSync(islandPath)
        .filter(name => fs.statSync(path.join(islandPath, name)).isDirectory());
      
      for (const moduleSlug of moduleDirs) {
        if (moduleMetadata[moduleSlug]) {
          const modulePath = path.join(islandPath, moduleSlug);
          const lessonFiles = fs.readdirSync(modulePath)
            .filter(file => file.endsWith('.mdx'));
          
          // Read all lessons and sort by number
          const lessons = lessonFiles.map(lessonFile => {
            const fullPath = path.join(modulePath, lessonFile);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data } = matter(fileContents);
            
            return {
              id: data.id || data.slug,
              slug: data.slug || data.id,
              module: data.module,
              number: String(data.number),
              title: data.title,
              objective: data.objective,
              practicalTakeaway: data.practicalTakeaway,
            };
          }).sort((a, b) => {
            // Sort by lesson number (e.g., "1.1", "1.2", etc.)
            const aNum = typeof a.number === 'string' 
              ? parseFloat(a.number.replace(/[^\d.]/g, ''))
              : a.number;
            const bNum = typeof b.number === 'string'
              ? parseFloat(b.number.replace(/[^\d.]/g, ''))
              : b.number;
            return aNum - bNum;
          });
          
          const metadata = moduleMetadata[moduleSlug];
          
          allModules.push({
            id: moduleSlug,
            slug: moduleSlug,
            title: metadata.title,
            description: metadata.description,
            island: metadata.island,
            lessons,
          });
        }
      }
    } else {
      // Handle old structure (direct module directories)
      const moduleSlug = islandDir;
      if (moduleMetadata[moduleSlug]) {
        const modulePath = path.join(modulesDirectory, moduleSlug);
        const lessonFiles = fs.readdirSync(modulePath)
          .filter(file => file.endsWith('.mdx'));
        
        // Read all lessons and sort by number
        const lessons = lessonFiles.map(lessonFile => {
          const fullPath = path.join(modulePath, lessonFile);
          const fileContents = fs.readFileSync(fullPath, 'utf8');
          const { data } = matter(fileContents);
          
          return {
            id: data.id || data.slug,
            slug: data.slug || data.id,
            module: data.module,
            number: String(data.number),
            title: data.title,
            objective: data.objective,
            practicalTakeaway: data.practicalTakeaway,
          };
        }).sort((a, b) => {
          // Sort by lesson number (e.g., "1.1", "1.2", etc.)
          const aNum = typeof a.number === 'string' 
            ? parseFloat(a.number.replace(/[^\d.]/g, ''))
            : a.number;
          const bNum = typeof b.number === 'string'
            ? parseFloat(b.number.replace(/[^\d.]/g, ''))
            : b.number;
          return aNum - bNum;
        });
        
        const metadata = moduleMetadata[moduleSlug];
        
        allModules.push({
          id: moduleSlug,
          slug: moduleSlug,
          title: metadata.title,
          description: metadata.description,
          island: metadata.island,
          lessons,
        });
      }
    }
  }
  
  // Sort all modules by order
  return allModules.sort((a, b) => {
    const aOrder = moduleMetadata[a.slug]?.order || 0;
    const bOrder = moduleMetadata[b.slug]?.order || 0;
    return aOrder - bOrder;
  });
}

export async function getLessonByIds(moduleSlug: string, lessonSlug: string) {
  // Find the module path by checking all island directories
  let modulePath: string | null = null;
  
  const islandDirs = fs.readdirSync(modulesDirectory)
    .filter(name => fs.statSync(path.join(modulesDirectory, name)).isDirectory());
  
  // Check island-based structure first
  for (const islandDir of islandDirs) {
    const islandPath = path.join(modulesDirectory, islandDir);
    const potentialModulePath = path.join(islandPath, moduleSlug);
    
    if (fs.existsSync(potentialModulePath) && fs.statSync(potentialModulePath).isDirectory()) {
      modulePath = potentialModulePath;
      break;
    }
  }
  
  // Fallback to old structure (direct module directories)
  if (!modulePath) {
    const oldModulePath = path.join(modulesDirectory, moduleSlug);
    if (fs.existsSync(oldModulePath) && fs.statSync(oldModulePath).isDirectory()) {
      modulePath = oldModulePath;
    }
  }
  
  if (!modulePath) {
    throw new Error(`Module ${moduleSlug} not found`);
  }
  
  const lessonFiles = fs.readdirSync(modulePath)
    .filter(file => file.endsWith('.mdx'));
  
  // Find the lesson file that matches the lessonSlug
  const lessonFile = lessonFiles.find(file => {
    const fullPath = path.join(modulePath!, file);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return data.slug === lessonSlug || data.id === lessonSlug;
  });
  
  if (!lessonFile) {
    throw new Error(`Lesson ${lessonSlug} not found in module ${moduleSlug}`);
  }
  
  const fullPath = path.join(modulePath, lessonFile);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    meta: {
      id: data.id || data.slug,
      slug: data.slug || data.id,
      module: data.module,
      number: String(data.number),
      title: data.title,
      objective: data.objective,
      practicalTakeaway: data.practicalTakeaway,
    },
    content,
  };
}

export async function getMissionByModule(moduleSlug: string): Promise<MissionMeta | null> {
  try {
    // Find which island this module belongs to
    const islandDirs = fs.readdirSync(modulesDirectory)
      .filter(name => fs.statSync(path.join(modulesDirectory, name)).isDirectory());
    
    for (const islandDir of islandDirs) {
      const missionsDirectory = path.join(modulesDirectory, islandDir, 'missions');
      const missionFileName = `${moduleSlug}-mission.mdx`;
      const fullPath = path.join(missionsDirectory, missionFileName);
      
      if (fs.existsSync(fullPath)) {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        
        // Parse content into intro and monologue sections
        const sections = content.split('---').map(section => section.trim()).filter(Boolean);
        const storyIntro = sections[0] || '';
        const monologue = sections.slice(1).filter(section => section.length > 0);
        
        return {
          title: data.title,
          subtitle: data.subtitle,
          objective: data.objective,
          module: data.module || moduleSlug,
          content,
          storyIntro,
          monologue,
          achievementReward: data.achievementReward,
        };
      }
    }
    
    return null;
  } catch (error) {
    console.error(`Error loading mission for module ${moduleSlug}:`, error);
    return null;
  }
}

export async function getQuizByModule(moduleSlug: string): Promise<QuizMeta | null> {
  try {
    // Find which island this module belongs to
    const islandDirs = fs.readdirSync(modulesDirectory)
      .filter(name => fs.statSync(path.join(modulesDirectory, name)).isDirectory());
    
    for (const islandDir of islandDirs) {
      const quizzesDirectory = path.join(modulesDirectory, islandDir, 'quizzes');
      const quizFileName = `${moduleSlug}-quiz.mdx`;
      const fullPath = path.join(quizzesDirectory, quizFileName);
      
      if (fs.existsSync(fullPath)) {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        
        // Parse quiz questions from content
        const questions = parseQuizQuestions(content);
        
        return {
          id: data.id,
          slug: data.slug,
          module: data.module,
          title: data.title,
          description: data.description,
          totalQuestions: data.totalQuestions,
          passingScore: data.passingScore,
          timeLimit: data.timeLimit,
          questions,
          content,
        };
      }
    }
    
    return null;
  } catch (error) {
    console.error(`Error loading quiz for module ${moduleSlug}:`, error);
    return null;
  }
}

function parseQuizQuestions(content: string): QuizQuestion[] {
  const questions: QuizQuestion[] = [];
  
  // Split content by question headers
  const questionBlocks = content.split(/### Question \d+/).slice(1);
  
  questionBlocks.forEach((block, index) => {
    const lines = block.trim().split('\n');
    let type: QuizQuestion['type'] = 'multiple-choice';
    let points = 1;
    let lesson = '';
    let question = '';
    const options: string[] = [];
    let interactiveData: QuizQuestion['interactiveData'] = undefined;
    
    // Parse each line of the question block
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      if (line.startsWith('**Type:**')) {
        const typeStr = line.replace('**Type:**', '').trim().toLowerCase();
        if (typeStr.includes('multiple select')) {
          type = 'multiple-select';
        } else if (typeStr.includes('word jumble')) {
          type = 'word-jumble';
        } else if (typeStr.includes('concept matching')) {
          type = 'concept-matching';
        } else if (typeStr.includes('timeline')) {
          type = 'timeline-builder';
        } else if (typeStr.includes('drag') || typeStr.includes('puzzle')) {
          type = 'drag-drop-puzzle';
        } else if (typeStr.includes('true') || typeStr.includes('false')) {
          type = 'true-false-statements';
        } else {
          type = 'multiple-choice';
        }
      } else if (line.startsWith('**Points:**')) {
        points = parseInt(line.replace('**Points:**', '').trim()) || 1;
      } else if (line.startsWith('**Lesson:**')) {
        lesson = line.replace('**Lesson:**', '').trim();
      } else if (line.startsWith('**Interactive Data:**')) {
        // Parse JSON block for interactive data
        let jsonStart = -1;
        let jsonEnd = -1;
        for (let j = i + 1; j < lines.length; j++) {
          if (lines[j].trim() === '```json') {
            jsonStart = j + 1;
          } else if (lines[j].trim() === '```' && jsonStart !== -1) {
            jsonEnd = j;
            break;
          }
        }
        if (jsonStart !== -1 && jsonEnd !== -1) {
          const jsonStr = lines.slice(jsonStart, jsonEnd).join('\n');
          try {
            interactiveData = JSON.parse(jsonStr);
          } catch (e) {
            console.error('Error parsing interactive data JSON:', e);
          }
        }
      } else if (line.startsWith('**Options:**')) {
        // Start parsing options from the next line
        for (let j = i + 1; j < lines.length; j++) {
          const optionLine = lines[j].trim();
          if (optionLine.startsWith('-') && optionLine.includes(')')) {
            options.push(optionLine);
          } else if (optionLine === '---' || optionLine.startsWith('**')) {
            break;
          }
        }
        break;
      } else if (line && !line.startsWith('**') && !line.startsWith('-') && !line.startsWith('#') && !line.startsWith('```') && !question) {
        question = line;
      }
    }
    
    // For interactive elements, options may not be required
    if (question && (options.length > 0 || interactiveData)) {
      questions.push({
        id: index + 1,
        type,
        lesson,
        question,
        options,
        points,
        interactiveData,
      });
    }
  });
  
  return questions;
}