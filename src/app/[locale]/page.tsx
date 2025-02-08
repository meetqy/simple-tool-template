import { Tool } from "./tool";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { default: Readme } = await import(`./readme/${locale}.mdx`);

  return (
    <>
      <Tool />
      <div className="prose mx-auto my-24">
        <Readme />
      </div>
    </>
  );
}
