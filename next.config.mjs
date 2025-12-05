const iconsRegex = /icons[/\\].*\.svg$/i;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
    ],
  },

  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,

  // React Compiler is now stable in Next.js 16
  reactCompiler: true,

  // Turbopack configuration - exact translation from webpack
  turbopack: {
    rules: {
      "*.svg": {
        condition: {
          path: iconsRegex,
        },
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {},
          },
        ],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
