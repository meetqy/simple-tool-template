"use client";

import { Button, Divider } from "@nextui-org/react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "~/i18n/routing";

const languages = [
  { locale: "en", name: "English", icon: "🇺🇸" },
  { locale: "zh-hans", name: "简体中文", icon: "🇨🇳" },
  { locale: "zh-hant", name: "繁體中文", icon: "🇨🇳" },
];

export const Languages = () => {
  const pathname = usePathname();
  const lo = useLocale();

  return (
    <div className="container mb-12 mt-24">
      <div className="flex w-full flex-wrap justify-center gap-2">
        {languages.map(({ locale, name, icon }) => (
          <Button
            as={Link}
            href={`/${locale}${pathname}`}
            size="sm"
            key={locale}
            variant={lo === locale ? "solid" : "light"}
            color="primary"
          >
            {icon} {name}
          </Button>
        ))}
      </div>
    </div>
  );
};
