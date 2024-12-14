"use client";

import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { Link } from "~/i18n/routing";

export const Grid = () => {
  const t = useTranslations();

  const categories = {
    financial: [
      {
        href: "/financial/auto-loan-payoff-calculator",
        title: t("auto-loan-payoff-calculator.title"),
        description: t("auto-loan-payoff-calculator.description"),
      },
      {
        href: "/financial/mobile-home-mortgage-calculator",
        title: t("mobile-home-mortgage-calculator.title"),
        description: t("mobile-home-mortgage-calculator.description"),
      },
    ],
    media: [
      {
        href: "/media/audiobook-speed-calculator",
        title: t("audiobook-speed-calculator.title"),
        description: t("audiobook-speed-calculator.description"),
      },
    ],
    construction: [
      {
        href: "/construction/asphalt-calculator",
        title: t("asphalt-calculator.title"),
        description: t("asphalt-calculator.description"),
      },
    ],
    health: [
      {
        href: "/health/baby-eye-color-calculator",
        title: t("baby-eye-color-calculator.title"),
        description: t("baby-eye-color-calculator.description"),
      },
    ],
    game: [
      {
        href: "/game/kd-calculator-kill-to-death-ratio",
        title: t("kd-calculator-kill-to-death-ratio.title"),
        description: t("kd-calculator-kill-to-death-ratio.description"),
      },
    ],
    transportation: [
      {
        href: "/transportation/veaero-calculator",
        title: t("veaero-calculator.title"),
        description: t("veaero-calculator.description"),
      },
    ],
  };

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
