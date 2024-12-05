"use client";

import { Button, Link as LinkUi } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { Link } from "~/i18n/routing";

export const Hero = () => {
  const t = useTranslations();

  return (
    <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          {t("Site.title")}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-default-500">
          <LinkUi href={"/"} as={Link}>
            HowToCalculator.com
          </LinkUi>{" "}
          , {t("Site.description")}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button size="lg" color="primary">
            {t("Site.views-all-calculators")}
          </Button>
        </div>
      </div>
    </div>
  );
};
