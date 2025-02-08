"use client";
import { useParams } from "next/navigation";
import { redirect, usePathname } from "~/i18n/routing";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { locale } = useParams();
  const pathname = usePathname();

  if (locale != "en") {
    return redirect({
      href: pathname,
      locale: "en",
    });
  }

  return children;
}
