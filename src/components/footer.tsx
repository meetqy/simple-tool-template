import Link from "next/link";
import { siteConfig } from "~/config/siteConfig";

const navigation = {
  main: [
    { name: "Terms", href: "/about/terms" },
    { name: "Privacy Policy", href: "/about/privacy-policy" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-purple-900">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-8">
        <nav
          aria-label="Footer"
          className="flex flex-wrap justify-center gap-x-12 gap-y-3"
        >
          {navigation.main.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <p className="mt-8 text-center text-sm text-white/80">
          &copy; {new Date().getFullYear()} {siteConfig.title}. All rights
          reserved. Made by{" "}
          <Link href={"https://github.com/meetqy/simple-tool-template"}>
            meetqy/simple-tool-template
          </Link>
        </p>
      </div>
    </footer>
  );
}
