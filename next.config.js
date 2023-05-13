/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '**/*',
      },
      {
        hostname: 'www.free-css.com',
        port: '',
      }
    ],
  },
};

module.exports = nextConfig;
