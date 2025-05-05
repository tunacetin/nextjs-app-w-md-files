import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

const nextConfig: NextConfig = {
  turbopack: {
    resolveExtensions: ['.md', '.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

export default withMDX(nextConfig);
