import type { MetadataRoute } from "next";
import { generateAlternates } from "~/utils/generate-alternates";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/financial/auto-loan-payoff-calculator",
    "/media/audiobook-speed-calculator",
    "/construction/asphalt-calculator",
    "/health/baby-eye-color-calculator",
    "/game/kd-calculator-kill-to-death-ratio",
    "/transportation/veaero-calculator",
  ].map((href) => {
    const { alternates } = generateAlternates(href);
    return {
      url: `https://howtocalculator.com${href}`,
      alternates,
    };
  });
}
