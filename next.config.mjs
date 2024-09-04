/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co'
      }
    ]
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US'
  },
  async redirects() {
    return [
      {
        source: '/(github|gh|git)',
        destination: 'https://github.com/jeffersonrj14',
        permanent: true
      },
      {
        source: '/(twitter|x)',
        destination: 'https://x.com/jeffersonrj14',
        permanent: true
      }
    ]
  }
}

export default nextConfig
