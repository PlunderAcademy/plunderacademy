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

export type ModuleMeta = {
  id: string;
  slug: string;
  title: string;
  description: string;
  lessons: LessonMeta[];
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
  
  return articles;
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

export async function getModules(): Promise<ModuleMeta[]> {
  const moduleDirs = fs.readdirSync(modulesDirectory)
    .filter(name => fs.statSync(path.join(modulesDirectory, name)).isDirectory());
  
  // Module metadata - now using slugs
  const moduleMetadata: Record<string, { title: string; description: string; order: number }> = {
    'blockchain-fundamentals': {
      title: 'Blockchain Fundamentals',
      description: 'Gain a thorough understanding of blockchain\'s fundamental characteristics, technical structure, and growing real-world impact.',
      order: 1
    },
    'evm-fundamentals': {
      title: 'EVM Fundamentals',
      description: 'Gain a thorough understanding of Ethereum Virtual Machine, the virtualized computing environment that executes smart contracts.',
      order: 2
    },
    'intro-to-solidity': {
      title: 'Intro to Solidity',
      description: 'Learn Solidity, the primary programming language for writing smart contracts on Ethereum and all EVM-compatible blockchains.',
      order: 3
    },
    'zilliqa-evm-setup': {
      title: 'Setting Up the Zilliqa EVM Development Environment',
      description: 'Set up your development environment with MetaMask, Remix IDE, and other essential tools for Zilliqa EVM development.',
      order: 4
    },
    'creating-erc20-tokens': {
      title: 'Creating Your Own Token on Zilliqa EVM',
      description: 'Learn how to create, deploy, and manage ERC-20 tokens on Zilliqa EVM using OpenZeppelin\'s secure contract libraries.',
      order: 5
    }
  };
  
  const modules = moduleDirs
    .filter(dir => moduleMetadata[dir]) // Only include known modules
    .sort((a, b) => moduleMetadata[a].order - moduleMetadata[b].order) // Sort by order
    .map(moduleSlug => {
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
      
      return {
        id: moduleSlug,
        slug: moduleSlug,
        title: `Module ${metadata.order}: ${metadata.title}`,
        description: metadata.description,
        lessons,
      };
    });
  
  return modules;
}

export async function getLessonByIds(moduleSlug: string, lessonSlug: string) {
  const modulePath = path.join(modulesDirectory, moduleSlug);
  
  if (!fs.existsSync(modulePath)) {
    throw new Error(`Module ${moduleSlug} not found`);
  }
  
  const lessonFiles = fs.readdirSync(modulePath)
    .filter(file => file.endsWith('.mdx'));
  
  // Find the lesson file that matches the lessonSlug
  const lessonFile = lessonFiles.find(file => {
    const fullPath = path.join(modulePath, file);
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