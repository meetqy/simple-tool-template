import { getTranslations } from "next-intl/server";
import { Tool } from "./tool";
import { getAlternates } from "~/utils/get-alternates";

export const generateMetadata = async () => {
  const t = await getTranslations();

  return {
    title: t("example.title"),
    description: t("example.description"),
    alternates: getAlternates("/"),
    icons: [{ rel: "icon", url: "/favicon.ico" }],
  };
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { default: Readme } = await import(`./_readme/${locale}.mdx`);

  return (
    <>
      <Tool />
      <div className="prose mx-auto my-24">
        <Readme />
      </div>
    </>
  );
}
