import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const languages = [
  { locale: "en", name: "English", icon: "🇺🇸" },
  { locale: "zh-hans", name: "简体中文", icon: "🇨🇳" },
  { locale: "zh-hant", name: "繁體中文", icon: "🇨🇳" },
  { locale: "ja", name: "日本語", icon: "🇯🇵" },
];

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: languages.map((lang) => lang.locale),

  // Used when no locale matches
  defaultLocale: "en",
  localePrefix: "as-needed",
  localeDetection: false,
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
