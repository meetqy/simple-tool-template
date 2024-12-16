"use client";

import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { navs } from "~/app/sitemap";
import { Link } from "~/i18n/routing";

export const Grid = () => {
  const t = useTranslations();

  const categories = Object.entries(navs).reduce(
    (acc, [category, items]) => {
      acc[category] = items.map((href) => {
        const slug = href.split("/").pop() ?? "";
        return {
          href,
          title: t(`${slug}.title`),
          description: t(`${slug}.description`),
        };
      });
      return acc;
    },
    {} as Record<
      string,
      { href: string; title: string; description: string }[]
    >,
  );

  return (
    <section className="container grid max-w-screen-xl gap-12 p-4 xl:p-0">
      {Object.entries(categories).map(([category, calculators]) => (
        <div key={category} className="grid gap-4">
          <h2 id={category} className="h2 capitalize">
            {category}
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {calculators.map((calculator) => (
              <Card key={calculator.href} className="relative w-full">
                <Link
                  className="absolute inset-0 z-20 h-full w-full opacity-0"
                  href={calculator.href}
                >
                  {calculator.title}
                </Link>
                <CardHeader className="p-0">
                  <div className="flex aspect-video w-full items-center justify-center bg-foreground p-4 text-background">
                    <h2 className="h2 border-0 text-center">
                      {calculator.title}
                    </h2>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="text-center">{calculator.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
