import { createFileRoute } from "@tanstack/react-router";
import { ImageResponse } from "workers-og";

interface AchievementData {
  name: string;
  description: string;
  image: string;
  attributes: Array<{
    trait_type: string;
    value: string | number;
  }>;
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

async function fetchAchievementData(achievementId: string): Promise<AchievementData | null> {
  try {
    const response = await fetch(`https://static.plunderswap.com/training/${achievementId}.json`);
    if (!response.ok) return null;
    const data = await response.json() as AchievementData;

    // Convert WebP image URL to PNG version for satori compatibility
    if (data.image && data.image.endsWith('.webp')) {
      data.image = data.image.replace('.webp', '.png');
    }

    return data;
  } catch (error) {
    console.error(`Error fetching achievement ${achievementId}:`, error);
    return null;
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

async function generateFrame(achievementId: string) {
  try {
    const achievementData = await fetchAchievementData(achievementId);

    if (!achievementData) {
      return new Response('Achievement not found', { status: 404 });
    }

    const moduleAttribute = achievementData.attributes.find(attr => attr.trait_type === 'Module');
    const moduleTitle = escapeHtml((moduleAttribute?.value as string) || 'Unknown Module');
    const achievementName = escapeHtml(achievementData.name);

    // Get background image URL based on achievement ID
    const backgroundId = getBackgroundId(achievementId);
    const backgroundImageUrl = backgroundId ? `${IMAGES_BASE_URL}/${backgroundId}.png` : null;

    const html = `
      <div style="height: 628px; width: 1200px; display: flex; background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%); position: relative;">
        <div style="position: absolute; left: 30px; top: 60px; width: 480px; height: 508px; display: flex; align-items: center; justify-content: center;">
          ${backgroundImageUrl ? `<img src="${backgroundImageUrl}" style="position: absolute; width: 100%; height: 100%; object-fit: contain;" />` : ''}
          ${achievementData.image
            ? `<img src="${achievementData.image}" style="position: absolute; width: 100%; height: 100%; object-fit: contain;" />`
            : `<div style="position: absolute; width: 100%; height: 100%; background: linear-gradient(135deg, #1e293b 0%, #334155 100%); border: 3px solid #fbbf24; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-direction: column;">
                <div style="font-size: 24px; color: #fbbf24; font-weight: bold; text-align: center;">NFT Achievement</div>
                <div style="font-size: 18px; color: #e2e8f0; text-align: center; margin-top: 10px;">${achievementName}</div>
              </div>`}
        </div>
        <div style="position: absolute; left: 580px; top: 100px; display: flex; flex-direction: column; color: white; width: 580px;">
          <div style="font-size: 32px; font-weight: bold; color: #fbbf24; margin-bottom: 20px;">Achievement Unlocked!</div>
          <div style="font-size: 42px; font-weight: bold; line-height: 1.1; margin-bottom: 30px; color: #fbbf24;">${achievementName}</div>
          <div style="display: flex; align-items: center; font-size: 24px; padding: 12px 24px; background-color: rgba(59, 130, 246, 0.2); border: 2px solid #3b82f6; border-radius: 12px; color: #93c5fd; margin-bottom: 40px; width: 400px;">${moduleTitle}</div>
          <div style="font-size: 28px; color: #e2e8f0; font-weight: 600; line-height: 1.3;">Claim your treasure at</div>
          <div style="font-size: 28px; color: #e2e8f0; font-weight: 600; line-height: 1.3;">PlunderAcademy.com</div>
        </div>
        <div style="position: absolute; bottom: 20px; right: 30px; font-size: 16px; color: #64748b; font-weight: 500;">PlunderAcademy.com</div>
      </div>
    `;

    const imageResponse = new ImageResponse(html, {
      width: 1200,
      height: 628,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });

    // Add additional headers for better Twitter compatibility
    imageResponse.headers.set('X-Content-Type-Options', 'nosniff');
    imageResponse.headers.set('X-Frame-Options', 'DENY');

    return imageResponse;
  } catch (error) {
    console.error('Error generating framed image:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

export const Route = createFileRoute("/api/achievement-frame/$achievementId")({
  server: {
    handlers: {
      GET: ({ params }) => generateFrame(params.achievementId),
    },
  },
});
