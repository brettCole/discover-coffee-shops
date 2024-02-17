/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unsplash.com',
        pathname: '**'
      }
    ],
    unoptimized: true
  }
};

export default nextConfig;
