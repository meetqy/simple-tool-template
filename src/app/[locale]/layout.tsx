import { type Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { MyNavbar } from "~/components/my-navbar";
import { Providers } from "~/components/providers";
import { routing } from "~/i18n/routing";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: {
    default: "How To Calculator",
    template: "%s | How To Calculator",
  },
  description: "How to calculator,  Solve your calculate problems in life.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${GeistSans.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <MyNavbar />
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
