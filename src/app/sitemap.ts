import type { MetadataRoute } from "next";
import { generateAlternates } from "~/utils/generate-alternates";

export default function sitemap(): MetadataRoute.Sitemap {
  const categories = {
    financial: ["/financial/auto-loan-payoff-calculator"],
    media: ["/media/audiobook-speed-calculator"],
    construction: ["/construction/asphalt-calculator"],
    health: ["/health/baby-eye-color-calculator"],
    game: ["/game/kd-calculator-kill-to-death-ratio"],
    transportation: ["/transportation/veaero-calculator"],
  };

  const urls = Object.values(categories).flat();

  return urls.map((href) => {
    const { alternates } = generateAlternates(href);
    return {
      url: `https://howtocalculator.com${href}`,
      alternates,
    };
  });
}
