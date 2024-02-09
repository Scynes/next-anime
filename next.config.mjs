/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**.kitsu.io',
            port: '',
          },
        ],
    },
};

export default nextConfig;
