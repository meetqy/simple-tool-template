"use client";

import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { Link } from "~/i18n/routing";

export const Grid = () => {
  const t = useTranslations();

  return (
    <main className="container my-12 max-w-screen-xl columns-1 gap-4 p-4 sm:columns-2 xl:columns-3">
      <Card className="relative w-full">
        <Link
          className="absolute inset-0 z-20 h-full w-full opacity-0"
          href={"/financial/auto-loan-payoff-calculator"}
        >
          {t("auto-loan-payoff-calculator.title")}
        </Link>
        <CardHeader className="p-0">
          <div className="flex aspect-video w-full items-center justify-center bg-foreground text-background">
            <h2 className="h2 border-0 text-center">
              {t("auto-loan-payoff-calculator.title")}
            </h2>
          </div>
        </CardHeader>
        <CardBody>
          <p className="text-center">
            {t("auto-loan-payoff-calculator.description")}
          </p>
        </CardBody>
      </Card>

      <Card className="relative w-full">
        <Link
          className="absolute inset-0 z-20 h-full w-full opacity-0"
          href={"/media/audiobook-speed-calculator"}
        >
          {t("audiobook-speed-calculator.title")}
        </Link>
        <CardHeader className="p-0">
          <div className="flex aspect-video w-full items-center justify-center bg-foreground text-background">
            <h2 className="h2 border-0 text-center">
              {t("audiobook-speed-calculator.title")}
            </h2>
          </div>
        </CardHeader>
        <CardBody>
          <p className="text-center">
            {t("audiobook-speed-calculator.description")}
          </p>
        </CardBody>
      </Card>
    </main>
  );
};
