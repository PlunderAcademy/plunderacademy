import { NextRequest } from 'next/server';
import { ImageResponse } from 'next/og';
import React from 'react';

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
    const data = await response.json();
    
    // Convert WebP image URL to PNG version for next/og compatibility
    if (data.image && data.image.endsWith('.webp')) {
      data.image = data.image.replace('.webp', '.png');
    }
    
    return data;
  } catch (error) {
    console.error(`Error fetching achievement ${achievementId}:`, error);
    return null;
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ achievementId: string }> }
) {
  try {
    const resolvedParams = await params;
    const achievementData = await fetchAchievementData(resolvedParams.achievementId);
    
    if (!achievementData) {
      return new Response('Achievement not found', { status: 404 });
    }

    const moduleAttribute = achievementData.attributes.find(attr => attr.trait_type === 'Module');
    const moduleTitle = moduleAttribute?.value as string || 'Unknown Module';
    
    // Get background image URL based on achievement ID
    const backgroundId = getBackgroundId(resolvedParams.achievementId);
    const backgroundImageUrl = backgroundId ? `${IMAGES_BASE_URL}/${backgroundId}.png` : null;

    // Generate PNG using ImageResponse with proper headers
    const imageResponse = new ImageResponse(
      (
        <div
          style={{
            height: '628px',
            width: '1200px',
            display: 'flex',
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
            position: 'relative',
          }}
        >
          {/* Achievement Image Container with Background Layer */}
          <div
            style={{
              position: 'absolute',
              left: '30px',
              top: '60px',
              width: '480px',
              height: '508px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Background Frame Layer */}
            {backgroundImageUrl && (
              <img
                src={backgroundImageUrl}
                alt="Background"
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            )}
            {/* Achievement Image - PNG version for next/og compatibility */}
            {achievementData.image ? (
              <img
                src={achievementData.image}
                alt={achievementData.name}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            ) : (
              <div
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                  border: '3px solid #fbbf24',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <div style={{ fontSize: '80px', marginBottom: '20px' }}>🏴‍☠️</div>
                <div style={{ fontSize: '24px', color: '#fbbf24', fontWeight: 'bold', textAlign: 'center' }}>
                  NFT Achievement
                </div>
                <div style={{ fontSize: '18px', color: '#e2e8f0', textAlign: 'center', marginTop: '10px' }}>
                  {achievementData.name}
                </div>
              </div>
            )}
          </div>

          {/* Text Content */}
          <div
            style={{
              position: 'absolute',
              left: '580px',
              top: '100px',
              display: 'flex',
              flexDirection: 'column',
              color: 'white',
              width: '580px',
            }}
          >
            {/* Header */}
            <div
              style={{
                fontSize: '32px',
                fontWeight: 'bold',
                color: '#fbbf24',
                marginBottom: '20px',
              }}
            >
              🏴‍☠️ Achievement Unlocked!
            </div>

            {/* Achievement Name */}
            <div
              style={{
                fontSize: '42px',
                fontWeight: 'bold',
                lineHeight: 1.1,
                marginBottom: '30px',
                color: '#fbbf24',
              }}
            >
              {achievementData.name}
            </div>

            {/* Module Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '24px',
                padding: '12px 24px',
                backgroundColor: 'rgba(59, 130, 246, 0.2)',
                border: '2px solid #3b82f6',
                borderRadius: '12px',
                color: '#93c5fd',
                marginBottom: '40px',
                width: '400px',
              }}
            >
              📚 {moduleTitle}
            </div>

            {/* Call to Action */}
            <div
              style={{
                fontSize: '28px',
                color: '#e2e8f0',
                fontWeight: '600',
                lineHeight: 1.3,
              }}
            >
              ⚔️ Claim your treasure at
            </div>
            <div
              style={{
                fontSize: '28px',
                color: '#e2e8f0',
                fontWeight: '600',
                lineHeight: 1.3,
              }}
            >
              PlunderAcademy.com
            </div>
          </div>

          {/* Bottom Branding */}
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '30px',
              fontSize: '16px',
              color: '#64748b',
              fontWeight: '500',
            }}
          >
            PlunderAcademy.com
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 628,
        headers: {
          'Content-Type': 'image/png',
          'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      }
    );

    // Add additional headers for better Twitter compatibility
    imageResponse.headers.set('X-Content-Type-Options', 'nosniff');
    imageResponse.headers.set('X-Frame-Options', 'DENY');
    
    return imageResponse;
  } catch (error) {
    console.error('Error generating framed image:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
