const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => [
    {
      source: "/resume",
      destination: "/resume.pdf",
      permanent: true,
    },
  ],
};

module.exports = withContentlayer(nextConfig);
