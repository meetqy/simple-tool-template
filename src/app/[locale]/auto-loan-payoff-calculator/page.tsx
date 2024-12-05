import { Divider } from "@nextui-org/react";
import { Calculator } from "./calculator";

type Params = Promise<{ locale: string }>;

export default async function Page({ params }: { params: Params }) {
  const { locale } = await params;
  const Article = (await import(`./article/${locale}.mdx`)).default;

  return (
    <section className="tool-container">
      <main className="max-w-screen-md">
        <Calculator />
      </main>

      <Divider className="my-8" />

      <article className="prose">
        <Article />
      </article>
    </section>
  );
}
