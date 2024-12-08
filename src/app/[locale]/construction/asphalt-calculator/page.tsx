import { Divider } from "@nextui-org/react";
import { Calculator } from "./calculator";
import { getTranslations } from "next-intl/server";
import { type Metadata } from "next";
import { generateAlternates } from "~/utils/generate-alternates";

type Params = Promise<{ locale: string }>;

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations();
  const { alternates } = generateAlternates("/construction/asphalt-calculator");

  return {
    title: t("asphalt-calculator.title"),
    description: t("asphalt-calculator.description"),
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
