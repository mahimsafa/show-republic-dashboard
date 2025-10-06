/** @type {import('next').NextConfig} */
const nextConfig = {
  // transpilePackages: ['@repo/common'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', 
      },
      {
        protocol: 'http',
        hostname: 'localhost', 
        port: '5001',
      },
      {
        protocol: 'https',
        hostname: 'www.mahimsafa.com', 
      },
    ],
  },
  // experimental: {
  //   externalDir: true,
  // },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
