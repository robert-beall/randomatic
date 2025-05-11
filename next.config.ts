import type { NextConfig } from "next";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
import pkg from "./package.json";

const nextConfig: NextConfig = {
  /* config options here */
  publicRuntimeConfig: {
    version: pkg.version,
  },
};

export default nextConfig;
