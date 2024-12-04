import { Calculator } from "./calculator";

export default function Page() {
  return (
    <section className="container mx-auto my-12 flex max-w-screen-xl gap-8">
      <main className="flex-1">
        <Calculator />
      </main>
      <aside className="bg-content2 text-content2-foreground rounded-medium w-96 flex-shrink-0"></aside>
    </section>
  );
}
