import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    SPOTIFY_CLIENT_ID: z.string().min(1),
    SPOTIFY_CLIENT_SECRET: z.string().min(1),
    SPOTIFY_REFRESH_TOKEN: z.string().min(1),
    WAKATIME_ACCESS_TOKEN: z.string().startsWith('waka'),
    WEATHER_API_TOKEN: z.string().min(1),
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development')
  },
  client: {
    NEXT_PUBLIC_UMAMI_URL: z.string().url(),
    NEXT_PUBLIC_UMAMI_WEBSITE_ID: z.string().uuid()
  },
  runtimeEnv: {
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN,
    WAKATIME_ACCESS_TOKEN: process.env.WAKATIME_ACCESS_TOKEN,
    WEATHER_API_TOKEN: process.env.WEATHER_API_TOKEN,
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_UMAMI_URL: process.env.NEXT_PUBLIC_UMAMI_URL,
    NEXT_PUBLIC_UMAMI_WEBSITE_ID: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID
  }
})
