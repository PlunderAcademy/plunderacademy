import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, ExternalLink } from "lucide-react";
import Image from "next/image";

interface ShareAchievementPageProps {
  params: Promise<{
    achievementId: string;
  }>;
}

// Achievement data types
interface AchievementAttribute {
  trait_type: string;
  value: string | number;
}

interface AchievementData {
  name: string;
  description: string;
  image: string;
  attributes: AchievementAttribute[];
}

const IMAGES_BASE_URL = 'https://static.plunderswap.com/training/images';

function getBackgroundId(achievementId: string): string | null {
  if (achievementId.startsWith('000')) {
    return '0001-background';
  } else if (achievementId.startsWith('002')) {
    return '0020-background';
  } else if (achievementId.startsWith('003')) {
    return '0030-background';
  } else if (achievementId.startsWith('004')) {
    return '0040-background';
  } else if (achievementId.startsWith('005')) {
    return '0050-background';
  } else if (achievementId.startsWith('100')) {
    return '1001-background';
  } else if (achievementId.startsWith('200')) {
    return '2001-background';
  }
  return null;
}

// Fetch achievement data from API
async function fetchAchievementData(achievementId: string): Promise<AchievementData | null> {
  try {
    const response = await fetch(`https://static.plunderswap.com/training/${achievementId}.json`);
    if (!response.ok) {
      return null;
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching achievement ${achievementId}:`, error);
    return null;
  }
}

// Extract module name from attributes
function getModuleFromAttributes(attributes: AchievementAttribute[]): string {
  const moduleAttribute = attributes.find(attr => attr.trait_type === 'Module');
  return moduleAttribute?.value as string || 'Unknown Module';
}

export async function generateMetadata(
  { params }: ShareAchievementPageProps
): Promise<Metadata> {
  const resolvedParams = await params;
  const achievementData = await fetchAchievementData(resolvedParams.achievementId);
  
  if (!achievementData) {
    return {
      title: 'Achievement Not Found - Plunder Academy',
    };
  }

  const moduleTitle = getModuleFromAttributes(achievementData.attributes);
  
  // Use dynamic URLs based on environment
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` 
    : 'https://plunderacademy.vercel.app';
  
  const shareUrl = `${baseUrl}/share/achievement/${resolvedParams.achievementId}`;
  const framedImageUrl = `${baseUrl}/api/achievement-frame/${resolvedParams.achievementId}`;
  
  const shareText = `🏴‍☠️ Just earned "${achievementData.name}" by conquering ${moduleTitle} at Plunder Academy!`;

  return {
    title: `${achievementData.name} Achievement - Plunder Academy`,
    description: shareText,
    openGraph: {
      title: `🏴‍☠️ Achievement Unlocked: ${achievementData.name}`,
      description: `${shareText}\n\n⚔️ Ready to test your blockchain skills? Set sail to plunderacademy.com and claim your own treasure!`,
      url: shareUrl,
      siteName: 'Plunder Academy',
      images: [
        {
          url: framedImageUrl,
          width: 1200,
          height: 628,
          alt: `${achievementData.name} Achievement NFT`,
          type: 'image/png',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `🏴‍☠️ Achievement Unlocked: ${achievementData.name}`,
      description: `${shareText}\n\n⚔️ Set sail to plunderacademy.com and claim your treasure!`,
      images: [
        {
          url: framedImageUrl,
          alt: `${achievementData.name} Achievement NFT`,
        }
      ],
      creator: '@PlunderAcademy',
      site: '@PlunderAcademy',
    },
    alternates: {
      canonical: shareUrl,
    },
    // Additional meta tags for better Twitter compatibility
    other: {
      'twitter:image': framedImageUrl,
      'twitter:image:width': '1200',
      'twitter:image:height': '628',
      'twitter:image:alt': `${achievementData.name} Achievement NFT`,
    },
  };
}

export async function generateStaticParams() {
  // Generate static params for all achievement IDs
  const achievementIds = [
    // Island 1 - Jungle Island
    '0001', '0002', '0003', '0004', '0005',
    // Island 2 - Frost Peak
    '0021', '0022', '0023', '0024', '0025',
    // Island 3 - Desert Bluff
    '0031', '0032', '0033',
    // Island 4 - Gilded Bastion
    '0041', '0042', '0043', '0044', '0045', '0046',
    // Island 5 - Neon Haven
    '0051', '0052', '0053', '0054',
    // Secret Achievements
    '1001', '1002', '1003', '1004', '1005', '1006',
    // Secret Achievements (AI Discoveries)
    '2001', '2002', '2003', '2004', '2005'
  ];
  
  return achievementIds.map(achievementId => ({
    achievementId
  }));
}

export default async function ShareAchievementPage({ params }: ShareAchievementPageProps) {
  const resolvedParams = await params;
  const achievementData = await fetchAchievementData(resolvedParams.achievementId);
  
  if (!achievementData) {
    notFound();
  }

  const moduleTitle = getModuleFromAttributes(achievementData.attributes);
  
  // Get background image URL based on achievement ID
  const backgroundId = getBackgroundId(resolvedParams.achievementId);
  const backgroundImageUrl = backgroundId ? `${IMAGES_BASE_URL}/${backgroundId}.webp` : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950 flex items-center justify-center p-4">
      <Card className="max-w-md w-full shadow-2xl border-2 border-yellow-400/20">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
              🏴‍☠️ Achievement Unlocked!
            </h1>
            <p className="text-muted-foreground text-sm mt-1">Plunder Academy</p>
          </div>
        </CardHeader>
        
        <CardContent className="text-center space-y-6">
          {/* Achievement Image with Background Layer */}
          <div className="relative">
            <div className="inline-block border-4 border-yellow-400 rounded-lg p-3 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 shadow-lg">
              <div className="relative w-48 h-64">
                {/* Background Frame Layer */}
                {backgroundImageUrl && (
                  <Image 
                    src={backgroundImageUrl} 
                    alt="Background frame"
                    fill
                    className="object-contain rounded"
                    unoptimized
                  />
                )}
                {/* Achievement Image */}
                <Image 
                  src={achievementData.image} 
                  alt={`${achievementData.name} Achievement NFT`}
                  fill
                  className="object-contain rounded"
                  unoptimized
                  priority
                />
              </div>
            </div>
          </div>

          {/* Achievement Details */}
          <div className="space-y-3">
            <div>
              <h2 className="text-xl font-bold flex items-center justify-center gap-2">
                🏆 {achievementData.name}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                {achievementData.description}
              </p>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 p-3 rounded-lg">
              <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                📚 Module Completed: {moduleTitle}
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-3 pt-2">
            <p className="text-sm text-muted-foreground">
              ⚔️ Ready to test your blockchain skills?
            </p>
            <Button 
              asChild 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
            >
              <a href="https://plunderacademy.com/lessons" className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Start Your Adventure at Plunder Academy
              </a>
            </Button>
            <p className="text-xs text-muted-foreground">
              Join thousands of developers mastering Web3 skills
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
