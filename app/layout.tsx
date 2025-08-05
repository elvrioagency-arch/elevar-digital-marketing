import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Elevar Digital Marketing Agency | Web Design, SEO & Digital Marketing',
    template: '%s | Elevar Digital Marketing'
  },
  description: 'Elevar is a premier digital marketing agency specializing in web design, SEO, and conversion optimization. We help businesses grow their online presence with data-driven strategies.',
  keywords: [
    'digital marketing agency',
    'web design',
    'SEO services',
    'conversion optimization',
    'digital marketing',
    'web development',
    'search engine optimization',
    'marketing agency'
  ],
  authors: [{ name: 'Elevar Digital Marketing' }],
  creator: 'Elevar Digital Marketing',
  publisher: 'Elevar Digital Marketing',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://elevar-digital.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://elevar-digital.com',
    title: 'Elevar Digital Marketing Agency | Web Design, SEO & Digital Marketing',
    description: 'Elevar is a premier digital marketing agency specializing in web design, SEO, and conversion optimization. We help businesses grow their online presence with data-driven strategies.',
    siteName: 'Elevar Digital Marketing',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Elevar Digital Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elevar Digital Marketing Agency | Web Design, SEO & Digital Marketing',
    description: 'Elevar is a premier digital marketing agency specializing in web design, SEO, and conversion optimization.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Elevar Digital Marketing",
              "url": "https://elevar-digital.com",
              "logo": "https://elevar-digital.com/logo.png",
              "description": "Premier digital marketing agency specializing in web design, SEO, and conversion optimization",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://www.facebook.com/elevardigital",
                "https://www.linkedin.com/company/elevar-digital",
                "https://twitter.com/elevardigital"
              ]
            })
          }}
        />
        
        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Performance Optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 