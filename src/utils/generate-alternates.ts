export function generateAlternates(pathname = "") {
  const baseUrl = process.env.NEXT_PUBLIC_HOST;

  return {
    alternates: {
      canonical: `${baseUrl}${pathname}`,
      languages: {
        en: `${baseUrl}${pathname}`,
        "zh-hans": `${baseUrl}/zh-hans/${pathname}`,
        "zh-hant": `${baseUrl}/zh-hant/${pathname}`,
        ja: `${baseUrl}/ja/${pathname}`,
      },
    },
  };
}
