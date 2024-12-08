"use client";

import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { Link } from "~/i18n/routing";

export const Grid = () => {
  const t = useTranslations();

  const calculators = [
    {
      href: "/financial/auto-loan-payoff-calculator",
      title: t("auto-loan-payoff-calculator.title"),
      description: t("auto-loan-payoff-calculator.description"),
    },
    {
      href: "/media/audiobook-speed-calculator",
      title: t("audiobook-speed-calculator.title"),
      description: t("audiobook-speed-calculator.description"),
    },
    {
      href: "/construction/asphalt-calculator",
      title: t("asphalt-calculator.title"),
      description: t("asphalt-calculator.description"),
    },
  ];

  return (
    <main className="container my-12 max-w-screen-xl columns-1 gap-4 p-4 sm:columns-2 xl:columns-3">
      {calculators.map((calculator, index) => (
        <Card key={index} className="relative w-full">
          <Link
            className="absolute inset-0 z-20 h-full w-full opacity-0"
            href={calculator.href}
          >
            {calculator.title}
          </Link>
          <CardHeader className="p-0">
            <div className="flex aspect-video w-full items-center justify-center bg-foreground text-background">
              <h2 className="h2 border-0 text-center">{calculator.title}</h2>
            </div>
          </CardHeader>
          <CardBody>
            <p className="text-center">{calculator.description}</p>
          </CardBody>
        </Card>
      ))}
    </main>
  );
};
