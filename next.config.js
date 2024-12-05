import "./src/env.js";
import createNextIntlPlugin from "next-intl/plugin";
import createMDX from "@next/mdx";

const withNextIntl = createNextIntlPlugin();
const withMDX = createMDX({});

/** @type {import("next").NextConfig} */
const config = {};

export default withNextIntl(withMDX(config));
