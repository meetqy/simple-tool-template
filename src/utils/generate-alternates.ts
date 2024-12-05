export function generateAlternates(pathname = "/") {
  const baseUrl = process.env.NEXT_PUBLIC_HOST;

  return {
    alternates: {
      canonical: `${baseUrl}${pathname}`,
      languages: {
        en: `${baseUrl}${pathname}`,
        zh: `${baseUrl}/zh${pathname}`,
      },
    },
  };
}
