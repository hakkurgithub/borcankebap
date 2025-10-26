/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  images: {
    remotePatterns: [
      {
        // 1. İZİN (GitHub CDN'i jsDelivr için)
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        port: '',
        pathname: '/gh/hakkurgithub/images@main/**',
      },
      {
        // 2. İZİN (readdy.ai linkleri için)
        protocol: 'https',
        hostname: 'readdy.ai',
        port: '',
        pathname: '/api/search-image/**',
      }
    ],
  },
};

module.exports = nextConfig;