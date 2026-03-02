/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.mallikaindubai.com' },
    ],
  },
}

module.exports = nextConfig
