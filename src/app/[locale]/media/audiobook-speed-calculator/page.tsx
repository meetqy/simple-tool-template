import { Divider } from "@nextui-org/react";
import { Calculator } from "./calculator";
import { getTranslations } from "next-intl/server";
import { type Metadata } from "next";
import { generateAlternates } from "~/utils/generate-alternates";

type Params = Promise<{ locale: string }>;

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations();
  const { alternates } = generateAlternates(
    "/media/audiobook-speed-calculator",
  );

  return {
    title: t("audiobook-speed-calculator.title"),
    description: t("audiobook-speed-calculator.description"),
    alternates,
  };
};

export default async function Page({ params }: { params: Params }) {
  const { locale } = await params;
  const Article = (await import(`./article/${locale}.mdx`)).default;

  return (
    <section className="tool-container">
      <main className="w-full max-w-screen-md">
        <Calculator />
      </main>

      <Divider className="my-8" />

      <article className="prose">
        <Article />
      </article>
    </section>
  );
}
