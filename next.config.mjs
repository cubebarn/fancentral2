
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });
    return config;
  },
  typescript: {
    ignoreBuildErrors: true,
 },
};

export default nextConfig;