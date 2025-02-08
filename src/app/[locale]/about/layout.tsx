"use client";
import { useParams } from "next/navigation";
import { MyNavbar } from "~/components/my-navbar";
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

  return (
    <>
      <MyNavbar />
      <div className="my-32 px-4">{children}</div>
    </>
  );
}
