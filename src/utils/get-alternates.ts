import { languages } from "~/i18n/routing";

export function getAlternates(pathname = "") {
  const baseUrl = process.env.NEXT_PUBLIC_HOST;

  const json: Record<string, string> = {};

  languages.forEach(({ locale }) => {
    json[locale] =
      locale === "en"
        ? `${baseUrl}${pathname}`
        : `${baseUrl}/${locale}${pathname}`;
  });

  return {
    alternates: {
      canonical: `${baseUrl}${pathname}`,
      languages: json,
    },
  };
}
