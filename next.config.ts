/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        // 1. İZİN (GitHub raw URL'leri için)
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/hakkurgithub/images/main/**',
      },
      {
        // 2. İZİN (GitHub CDN'i jsDelivr için)
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        port: '',
        pathname: '/gh/hakkurgithub/images@main/**',
      },
      {
        // 3. İZİN (readdy.ai linkleri için)
        protocol: 'https',
        hostname: 'readdy.ai',
        port: '',
        pathname: '/api/search-image/**',
      },
      {
        // 4. İZİN (Unsplash için)
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

module.exports = nextConfig;