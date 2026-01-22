import type { NextConfig } from "next";
// @ts-expect-error - next-pwa doesn't have TypeScript definitions
import withPWA from "next-pwa";

const nextConfig: NextConfig = {
  /* config options here */
};

const pwaConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  runtimeCaching: [
    {
      urlPattern: ({ url, request }: { url: URL; request: Request }) => {
        const isSameOrigin = url.origin === self.location.origin;
        const isNotImage = request.destination !== "image";
        return isSameOrigin && isNotImage;
      },
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "ideacards-origin",
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
        },
      },
    },
    {
      urlPattern: ({ request }: { request: Request }) => {
        return request.destination === "image";
      },
      handler: "CacheFirst",
      options: {
        cacheName: "ideacards-images",
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 60 * 60 * 24 * 90, // 90 days
        },
      },
    },
  ],
});

export default pwaConfig(nextConfig);
