import "./src/env.js";
import createNextIntlPlugin from "next-intl/plugin";
import createMDX from "@next/mdx";

/** @type {import("next").NextConfig} */
const config = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withNextIntl = createNextIntlPlugin();

const withMDX = createMDX({});

export default withNextIntl(withMDX(config));
