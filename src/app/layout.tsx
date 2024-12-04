import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Providers } from "~/components/providers";
import { MyNavbar } from "~/components/my-navbar";

export const metadata: Metadata = {
  title: {
    default: "How To Calculator",
    template: "%s | How To Calculator",
  },
  description: "How to calculator,  Solve your calculate problems in life.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Providers>
          <MyNavbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
