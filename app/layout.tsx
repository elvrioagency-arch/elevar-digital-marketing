import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
})

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
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Elevar Digital Marketing",
              "description": "AI-powered digital marketing solutions for SMEs in Singapore",
              "url": "https://elevar.sg",
              "logo": "https://elevar.sg/logo.png",
              "sameAs": [
                "https://linkedin.com/company/elevar-digital-marketing",
                "https://facebook.com/elevardigitalmarketing"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+65-XXXX-XXXX",
                "contactType": "customer service",
                "areaServed": "SG",
                "availableLanguage": "English"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Singapore",
                "addressCountry": "SG"
              },
              "serviceType": [
                "Digital Marketing",
                "SEO Optimization", 
                "Social Media Marketing",
                "Content Creation",
                "PPC Management"
              ]
            })
          }}
        />

        {/* Navbar Scroll Animation */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Navbar scroll animation
              let lastScrollTop = 0;
              let navbar = null;
              
              function initNavbar() {
                navbar = document.getElementById('navbar');
                if (!navbar) return;
                
                window.addEventListener('scroll', function() {
                  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                  const windowHeight = window.innerHeight;
                  const documentHeight = document.documentElement.scrollHeight;
                  const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
                  
                  // Stay visible until 25% scroll
                  if (scrollPercent <= 25) {
                    navbar.style.transform = 'translateY(0)';
                    navbar.style.opacity = '1';
                  } else {
                    // Animate out after 25% scroll
                    navbar.style.transform = 'translateY(-100%)';
                    navbar.style.opacity = '0';
                  }
                  
                  lastScrollTop = scrollTop;
                });
              }
              
              // Initialize when DOM is ready
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initNavbar);
              } else {
                initNavbar();
              }
            `
          }}
        />
      </body>
    </html>
  )
} 