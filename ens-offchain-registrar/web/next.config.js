/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rose-melodic-felidae-510.mypinata.cloud',
        port: '',
      },
    ],
  },
}
module.exports = nextConfig
