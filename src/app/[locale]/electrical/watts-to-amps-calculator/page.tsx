import { Divider } from "@nextui-org/react";
import Calculator from "./calculator";
import { getTranslations } from "next-intl/server";
import { type Metadata } from "next";
import { generateAlternates } from "~/utils/generate-alternates";

type Params = Promise<{ locale: string }>;

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations();
  const { alternates } = generateAlternates(
    "/electrical/watts-to-amps-calculator",
  );

  return {
    title: "Watts to Amps Calculator",
    description: "Watts to Amps Calculator",
    alternates,
  };
};

export default async function Page({ params }: { params: Params }) {
  const { locale } = await params;

  let Article = () => <div>In translation...</div>;

  try {
    Article = (await import(`./article/${locale}.mdx`)).default;
  } catch (e) {
    // console.error(e);
    console.log(e);
  }

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
