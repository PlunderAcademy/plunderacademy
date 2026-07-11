import { createFileRoute } from "@tanstack/react-router";

// Served as a full server-rendered HTML page (not part of the SPA) so social
// crawlers, which do not execute JavaScript, can read the Open Graph tags.

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

const IMAGES_BASE_URL = "https://static.plunderswap.com/training/images";

function getBackgroundId(achievementId: string): string | null {
  if (achievementId.startsWith("000")) {
    return "0001-background";
  } else if (achievementId.startsWith("002")) {
    return "0020-background";
  } else if (achievementId.startsWith("003")) {
    return "0030-background";
  } else if (achievementId.startsWith("004")) {
    return "0040-background";
  } else if (achievementId.startsWith("005")) {
    return "0050-background";
  } else if (achievementId.startsWith("100")) {
    return "1001-background";
  } else if (achievementId.startsWith("200")) {
    return "2001-background";
  }
  return null;
}

async function fetchAchievementData(
  achievementId: string
): Promise<AchievementData | null> {
  try {
    const response = await fetch(
      `https://static.plunderswap.com/training/${achievementId}.json`
    );
    if (!response.ok) {
      return null;
    }
    return (await response.json()) as AchievementData;
  } catch (error) {
    console.error(`Error fetching achievement ${achievementId}:`, error);
    return null;
  }
}

function getModuleFromAttributes(attributes: AchievementAttribute[]): string {
  const moduleAttribute = attributes.find(
    (attr) => attr.trait_type === "Module"
  );
  return (moduleAttribute?.value as string) || "Unknown Module";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function shareAchievementPage(request: Request, achievementId: string) {
  const achievementData = await fetchAchievementData(achievementId);

  if (!achievementData) {
    return new Response("Achievement not found", { status: 404 });
  }

  const moduleTitle = getModuleFromAttributes(achievementData.attributes);
  const baseUrl = new URL(request.url).origin;
  const shareUrl = `${baseUrl}/share/achievement/${achievementId}`;
  const framedImageUrl = `${baseUrl}/api/achievement-frame/${achievementId}`;
  const shareText = `🏴‍☠️ Just earned "${achievementData.name}" by conquering ${moduleTitle} at Plunder Academy!`;

  const backgroundId = getBackgroundId(achievementId);
  const backgroundImageUrl = backgroundId
    ? `${IMAGES_BASE_URL}/${backgroundId}.webp`
    : null;

  const name = escapeHtml(achievementData.name);
  const description = escapeHtml(achievementData.description);
  const module_ = escapeHtml(moduleTitle);
  const title = `${name} Achievement - Plunder Academy`;
  const ogTitle = `🏴‍☠️ Achievement Unlocked: ${name}`;
  const ogDescription = escapeHtml(
    `${shareText}\n\n⚔️ Ready to test your blockchain skills? Set sail to plunderacademy.com and claim your own treasure!`
  );

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(shareText)}" />
<link rel="canonical" href="${shareUrl}" />
<link rel="icon" href="/favicon.ico" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="en_US" />
<meta property="og:site_name" content="Plunder Academy" />
<meta property="og:url" content="${shareUrl}" />
<meta property="og:title" content="${escapeHtml(ogTitle)}" />
<meta property="og:description" content="${ogDescription}" />
<meta property="og:image" content="${framedImageUrl}" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="628" />
<meta property="og:image:type" content="image/png" />
<meta property="og:image:alt" content="${name} Achievement NFT" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escapeHtml(ogTitle)}" />
<meta name="twitter:description" content="${escapeHtml(`${shareText}\n\n⚔️ Set sail to plunderacademy.com and claim your treasure!`)}" />
<meta name="twitter:image" content="${framedImageUrl}" />
<meta name="twitter:image:width" content="1200" />
<meta name="twitter:image:height" content="628" />
<meta name="twitter:image:alt" content="${name} Achievement NFT" />
<meta name="twitter:creator" content="@PlunderAcademy" />
<meta name="twitter:site" content="@PlunderAcademy" />
<style>
  body { margin: 0; font-family: ui-sans-serif, system-ui, sans-serif; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 16px; background: linear-gradient(135deg, #eff6ff, #eef2ff, #faf5ff); }
  .card { max-width: 28rem; width: 100%; background: white; border: 2px solid rgba(250, 204, 21, 0.2); border-radius: 16px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); padding: 24px; text-align: center; }
  .trophy { width: 80px; height: 80px; margin: 0 auto 16px; border-radius: 9999px; background: linear-gradient(135deg, #facc15, #f97316); display: flex; align-items: center; justify-content: center; font-size: 36px; }
  h1 { font-size: 24px; background: linear-gradient(90deg, #ca8a04, #ea580c); -webkit-background-clip: text; background-clip: text; color: transparent; margin: 0 0 4px; }
  .subtitle { color: #6b7280; font-size: 14px; margin-bottom: 24px; }
  .frame { display: inline-block; border: 4px solid #facc15; border-radius: 8px; padding: 12px; background: linear-gradient(135deg, #fefce8, #fff7ed); margin-bottom: 24px; }
  .images { position: relative; width: 192px; height: 256px; }
  .images img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; border-radius: 4px; }
  h2 { font-size: 20px; margin: 0 0 4px; }
  .description { font-size: 14px; color: #6b7280; margin-bottom: 12px; }
  .module { background: #eff6ff; border: 1px solid #bfdbfe; padding: 12px; border-radius: 8px; font-size: 14px; font-weight: 500; color: #1e40af; margin-bottom: 24px; }
  .cta { display: block; padding: 12px 16px; border-radius: 8px; background: linear-gradient(90deg, #2563eb, #9333ea); color: white; text-decoration: none; font-weight: 600; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
  .footnote { font-size: 12px; color: #6b7280; margin-top: 12px; }
</style>
</head>
<body>
  <div class="card">
    <div class="trophy">🏆</div>
    <h1>🏴‍☠️ Achievement Unlocked!</h1>
    <div class="subtitle">Plunder Academy</div>
    <div class="frame">
      <div class="images">
        ${backgroundImageUrl ? `<img src="${backgroundImageUrl}" alt="Background frame" />` : ""}
        <img src="${escapeHtml(achievementData.image)}" alt="${name} Achievement NFT" />
      </div>
    </div>
    <h2>🏆 ${name}</h2>
    <div class="description">${description}</div>
    <div class="module">📚 Module Completed: ${module_}</div>
    <a class="cta" href="${baseUrl}/lessons">⚔️ Start Your Adventure at Plunder Academy</a>
    <div class="footnote">Join thousands of developers mastering Web3 skills</div>
  </div>
</body>
</html>`;

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

export const Route = createFileRoute("/share/achievement/$achievementId")({
  server: {
    handlers: {
      GET: ({ request, params }) =>
        shareAchievementPage(request, params.achievementId),
    },
  },
});
