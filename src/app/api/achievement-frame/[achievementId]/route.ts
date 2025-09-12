import { NextRequest, NextResponse } from 'next/server';

interface AchievementData {
  name: string;
  description: string;
  image: string;
  attributes: Array<{
    trait_type: string;
    value: string | number;
  }>;
}

async function fetchAchievementData(achievementId: string): Promise<AchievementData | null> {
  try {
    const response = await fetch(`https://static.plunderswap.com/training/${achievementId}.json`);
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    console.error(`Error fetching achievement ${achievementId}:`, error);
    return null;
  }
}

async function createFramedImage(achievementData: AchievementData): Promise<Buffer> {
  // Create a simple SVG-based framed image
  const moduleAttribute = achievementData.attributes.find(attr => attr.trait_type === 'Module');
  const moduleTitle = moduleAttribute?.value as string || 'Unknown Module';

  const svg = `
    <svg width="1200" height="628" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0f172a"/>
          <stop offset="50%" style="stop-color:#1e293b"/>
          <stop offset="100%" style="stop-color:#334155"/>
        </linearGradient>
        <linearGradient id="frame" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#fef3c7"/>
          <stop offset="100%" style="stop-color:#f59e0b"/>
        </linearGradient>
        <linearGradient id="text" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#fbbf24"/>
          <stop offset="100%" style="stop-color:#f59e0b"/>
        </linearGradient>
      </defs>
      
      <!-- Background -->
      <rect width="1200" height="628" fill="url(#bg)"/>
      
      <!-- Decorative circles -->
      <circle cx="240" cy="500" r="100" fill="rgba(59, 130, 246, 0.1)"/>
      <circle cx="960" cy="125" r="80" fill="rgba(234, 179, 8, 0.1)"/>
      <circle cx="480" cy="250" r="60" fill="rgba(16, 185, 129, 0.05)"/>
      
      <!-- Achievement image - Maximum size, no borders -->
      <image x="30" y="60" width="480" height="508" href="${achievementData.image}" preserveAspectRatio="xMidYMid meet"/>
      
      <!-- Header text -->
      <text x="580" y="140" fill="#fbbf24" font-size="32" font-weight="bold" font-family="Arial, sans-serif">🏴‍☠️ Achievement Unlocked!</text>
      
      <!-- Achievement name -->
      <text x="580" y="200" fill="url(#text)" font-size="48" font-weight="bold" font-family="Arial, sans-serif">${achievementData.name}</text>
      
      <!-- Module badge -->
      <rect x="580" y="240" width="400" height="50" rx="12" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" stroke-width="2"/>
      <text x="600" y="270" fill="#93c5fd" font-size="24" font-weight="500" font-family="Arial, sans-serif">📚 ${moduleTitle}</text>
      
      <!-- Call to action -->
      <text x="580" y="340" fill="#e2e8f0" font-size="28" font-weight="600" font-family="Arial, sans-serif">⚔️ Claim your treasure at</text>
      <text x="580" y="380" fill="#e2e8f0" font-size="28" font-weight="600" font-family="Arial, sans-serif">PlunderAcademy.com</text>
      
      <!-- Bottom branding -->
      <text x="1050" y="600" fill="#64748b" font-size="18" font-weight="500" font-family="Arial, sans-serif">PlunderAcademy.com</text>
    </svg>
  `;

  return Buffer.from(svg, 'utf8');
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ achievementId: string }> }
) {
  try {
    const resolvedParams = await params;
    const achievementData = await fetchAchievementData(resolvedParams.achievementId);
    
    if (!achievementData) {
      return new NextResponse('Achievement not found', { status: 404 });
    }

    const imageBuffer = await createFramedImage(achievementData);

    return new NextResponse(imageBuffer.toString(), {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
      },
    });
  } catch (error) {
    console.error('Error generating framed image:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
