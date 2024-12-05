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
  description: "HowToCalculator, Solve your calculate problems in life.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

type Params = Promise<{ locale: string }>;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
