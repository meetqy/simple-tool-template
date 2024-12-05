import { type Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { MyNavbar } from "~/components/my-navbar";
import { Providers } from "~/components/providers";
import { routing } from "~/i18n/routing";
import { GeistSans } from "geist/font/sans";
import { Footer } from "~/components/footer";
import { Languages } from "~/components/languages";
import { generateAlternates } from "~/utils/generate-alternates";

export const generateMetadata = async (): Promise<Metadata> => {
  const { alternates } = generateAlternates();
  const t = await getTranslations();

  return {
    title: {
      default: t("Site.title"),
      template: "%s | HowToCalculator",
    },
    description: `HowToCalculator, ${t("Site.description")}`,
    alternates,
    icons: [{ rel: "icon", url: "/favicon.ico" }],
  };
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
      <head>
        <script
          defer
          data-domain="howtocalculator.com"
          src="https://plausible.moyuo.com/js/script.file-downloads.hash.outbound-links.js"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.plausible = window.plausible || function(){" "}
          {(window.plausible.q = window.plausible.q || []).push(arguments)}`,
          }}
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <MyNavbar />
            {children}
            <Languages />
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
