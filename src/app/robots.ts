import { type MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

const robots = (): MetadataRoute.Robots => ({
  rules: [
    {
      userAgent: '*'
    }
  ],
  sitemap: `${SITE_URL}/sitemap.xml`,
  host: SITE_URL
})

export default robots
