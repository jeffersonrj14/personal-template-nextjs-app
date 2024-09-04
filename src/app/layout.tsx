import './globals.css'
import { Metadata } from 'next'
import { SizeIndicator } from '@/components/shared/sizeIndicator'
import { Analytics } from '@/components/shared/analytics'
import { SITE_DESCRIPTION, SITE_KEYWORDS, SITE_NAME, SITE_TITLE, SITE_URL } from '@/lib/constants'
import MainFooter from '@/components/shared/MainFooter'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`
  },
  description: SITE_DESCRIPTION,
  authors: {
    name: SITE_NAME,
    url: SITE_URL
  },
  manifest: '/favicon/site.webmanifest',
  keywords: SITE_KEYWORDS,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: SITE_TITLE,
    siteName: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/images/og.png',
        width: 1200,
        height: 630,
        alt: SITE_DESCRIPTION,
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    creator: '@jeffersonrj14',
    images: [
      {
        url: '/images/og.png',
        width: 1200,
        height: 630,
        alt: SITE_DESCRIPTION
      }
    ]
  },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon.ico',
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon/favicon-16x16.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon/favicon-32x32.png'
      }
    ]
  }
}

interface ChildrenProps {
  readonly children: React.ReactNode
}

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang='en-US' suppressHydrationWarning>
      <body className='min-h-screen bg-gradient-to-br from-ternary-dark to-quaternary-green to-65% px-4 pb-12 text-zinc-50'>
        <div>
          {/* <MainHeader /> */}
          {/* Show Screen Size (Development Only)*/}
          <SizeIndicator />
          <div>{children}</div>
          <div className='rounded-lg border-zinc-800 col-span-12 p-2 flex justify-center items-center bg-transparent border-0 pt-20 pb-10'>
            <MainFooter />
          </div>
        </div>
      </body>
      <Analytics />
    </html>
  )
}
