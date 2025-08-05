import { Metadata } from 'next'
import { Menu, ArrowRight, CheckCircle, Star, TrendingUp, Users, Award, Target, Globe, BarChart3, Zap, Shield, Heart, Lightbulb, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Elevar Digital Marketing Agency | Practical Marketing Solutions for SMEs',
  description: 'Elevar delivers inclusive productivity as a managed service—giving you consistent digital marketing outcomes, reduced operational hassle, and measurable social impact. All in one subscription.',
  keywords: [
    'digital marketing agency',
    'SME marketing',
    'affordable marketing services',
    'practical marketing solutions',
    'marketing mentorship',
    'digital marketing consultancy',
    'small business marketing',
    'marketing apprenticeship'
  ],
  openGraph: {
    title: 'Elevar Digital Marketing Agency | Practical Marketing Solutions for SMEs',
    description: 'Elevar delivers inclusive productivity as a managed service—giving you consistent digital marketing outcomes, reduced operational hassle, and measurable social impact.',
    url: 'https://elevar-digital.com',
    siteName: 'Elevar Digital Marketing',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Elevar Digital Marketing Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elevar Digital Marketing Agency | Practical Marketing Solutions for SMEs',
    description: 'Elevar delivers inclusive productivity as a managed service—giving you consistent digital marketing outcomes, reduced operational hassle, and measurable social impact.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#151F34] text-white">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Elevar Digital Marketing",
            "url": "https://elevar-digital.com",
            "logo": "https://elevar-digital.com/logo.png",
            "description": "Digital marketing agency and consultancy designed to help small and medium-sized enterprises grow through accessible, practical, and results-oriented marketing solutions",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "SG"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+65-XXXX-XXXX",
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
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Digital Marketing Services",
            "provider": {
              "@type": "Organization",
              "name": "Elevar Digital Marketing"
            },
            "description": "Inclusive productivity as a managed service—giving you consistent digital marketing outcomes, reduced operational hassle, and measurable social impact",
            "serviceType": "Digital Marketing",
            "areaServed": "Singapore",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Digital Marketing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "WordPress Development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "SEO Optimization"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Social Media Marketing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Content Creation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Paid Advertising"
                  }
                }
              ]
            }
          })
        }}
      />

      {/* Header */}
      <header className="relative flex h-20 w-full items-center px-6 md:px-12">
        {/* Left side - empty space */}
        <div className="flex-1"></div>
        
        {/* Center - logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image 
              src="/logo.png" 
              alt="Elevar Digital Marketing" 
              width={100} 
              height={32} 
              className="h-8 w-auto brightness-0 invert"
              priority
            />
          </Link>
        </div>

        {/* Right side - navigation */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <Button
            variant="outline"
            className="hidden md:inline-flex border-[#2850E5] text-white hover:bg-[#2513FF] bg-transparent"
            asChild
          >
            <Link href="/support">Support portal</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white focus-ring">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#151F34] border-[#2850E5]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/services" className="text-lg hover:text-[#2FDAA9] transition-colors">
                  Services
                </Link>
                <Link href="/portfolio" className="text-lg hover:text-[#2FDAA9] transition-colors">
                  Portfolio
                </Link>
                <Link href="/about" className="text-lg hover:text-[#2FDAA9] transition-colors">
                  About
                </Link>
                <Link href="/contact" className="text-lg hover:text-[#2FDAA9] transition-colors">
                  Contact
                </Link>
                <Button variant="outline" className="mt-4 border-[#2850E5] text-white hover:bg-[#2513FF] bg-transparent" asChild>
                  <Link href="/support">Support portal</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-12 text-balance">
            We deliver <span className="brand-accent">inclusive productivity</span> as a managed service—giving you consistent digital marketing outcomes, reduced operational hassle, and measurable social impact. All in one subscription.
          </h1>

          {/* Value Proposition */}
          <div className="mb-16">
            <div className="text-lg mb-2">Our AI-powered micro-workforce completes real work (content, campaigns, analytics), guided by experts and delivered to you on time—while also contributing to Singapore's inclusive economy.</div>
            <div className="text-gray-400 mb-1">Practical, accessible, and results-oriented marketing solutions</div>
            <div className="text-gray-400">For SMEs and aspiring marketers</div>
          </div>

          {/* Decorative line with dot */}
          <div className="relative mb-16">
            <div className="h-px bg-[#2850E5] w-full"></div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#2FDAA9] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl">
          <div className="animate-fade-in-up">
            <div className="text-4xl md:text-5xl font-light mb-4 brand-accent">100+</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              SMEs empowered with practical digital marketing solutions
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-4xl md:text-5xl font-light mb-4 brand-accent">50+</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Aspiring marketers trained through real client work
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl md:text-5xl font-light mb-4 brand-accent">95%</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Client satisfaction rate with our managed service approach
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-4xl md:text-5xl font-light mb-4 brand-accent">24/7</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Support and guidance for both clients and learners
            </p>
          </div>
        </div>
      </section>

      {/* Brand Architecture Section */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-[#1a2a4a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
              Three interconnected functions, <span className="brand-accent">one unified brand</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Elevar bridges the gap between marketing education and industry application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#151F34] p-8 rounded-lg card-hover">
              <div className="w-16 h-16 bg-[#2FDAA9] rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#151F34]" />
              </div>
              <h3 className="text-2xl font-medium mb-4 brand-accent">Agency</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Provides SMEs with practical digital marketing services executed by our supervised marketing team.
              </p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                  WordPress development
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                  SEO optimization
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                  Social media marketing
                </li>
              </ul>
            </div>

            <div className="bg-[#151F34] p-8 rounded-lg card-hover">
              <div className="w-16 h-16 bg-[#2850E5] rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-medium mb-4 brand-primary">Consultancy</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Offers strategic guidance, audits, and digital planning to help businesses understand and act on what matters most.
              </p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#2850E5] mr-3 flex-shrink-0" />
                  Strategic guidance
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#2850E5] mr-3 flex-shrink-0" />
                  Digital audits
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#2850E5] mr-3 flex-shrink-0" />
                  Digital planning
                </li>
              </ul>
            </div>

            <div className="bg-[#151F34] p-8 rounded-lg card-hover">
              <div className="w-16 h-16 bg-[#2513FF] rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-medium mb-4 brand-secondary">Mentorship</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Trains aspiring marketers through real client work under professional supervision, ensuring quality outcomes for clients and growth for learners.
              </p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#2513FF] mr-3 flex-shrink-0" />
                  Hands-on experience
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#2513FF] mr-3 flex-shrink-0" />
                  Professional supervision
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#2513FF] mr-3 flex-shrink-0" />
                  Career readiness
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl">
          {/* Primary Audience */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
              For <span className="brand-accent">growth-minded SMEs</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-[#1a2a4a] p-6 rounded-lg">
                <h3 className="text-xl font-medium brand-accent mb-3">Budget-conscious businesses</h3>
                <p className="text-gray-300 leading-relaxed">
                  Companies seeking creative, cost-effective marketing solutions while understanding they're partnering with emerging talent under professional supervision.
                </p>
              </div>

              <div className="bg-[#1a2a4a] p-6 rounded-lg">
                <h3 className="text-xl font-medium brand-accent mb-3">Marketing-curious entrepreneurs</h3>
                <p className="text-gray-300 leading-relaxed">
                  Business owners who recognize the need for a digital presence but want guidance and support in their marketing journey.
                </p>
              </div>

              <div className="bg-[#1a2a4a] p-6 rounded-lg">
                <h3 className="text-xl font-medium brand-accent mb-3">Local businesses ready to embrace digital</h3>
                <p className="text-gray-300 leading-relaxed">
                  SMEs looking for foundational services at accessible price points with practical, results-oriented solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Secondary Audience */}
          <div className="space-y-8 animate-slide-in-right">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              For <span className="brand-primary">aspiring marketers</span>
            </h2>
            
            <div className="bg-[#1a2a4a] p-6 rounded-lg">
              <h3 className="text-xl font-medium brand-primary mb-3">Learners, interns & apprentices</h3>
              <p className="text-gray-300 leading-relaxed">
                University students, bootcamp graduates, and self-learners seeking hands-on experience in WordPress development, SEO, social media marketing, content creation, and paid advertising.
              </p>
            </div>

            <div className="bg-[#1a2a4a] p-6 rounded-lg">
              <h3 className="text-xl font-medium brand-primary mb-3">Career changers</h3>
              <p className="text-gray-300 leading-relaxed">
                Professionals transitioning into digital marketing who need practical experience to complement their theoretical knowledge.
              </p>
            </div>

            <div className="bg-[#1a2a4a] p-6 rounded-lg">
              <h3 className="text-xl font-medium brand-primary mb-3">Guided, hands-on experience</h3>
              <p className="text-gray-300 leading-relaxed">
                Real client work under professional supervision that builds confidence, skills, and career readiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-[#1a2a4a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
              What our clients and learners say
            </h2>
            <p className="text-xl text-gray-400">
              Don't just take our word for it—hear from SMEs and aspiring marketers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#151F34] p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#2FDAA9] fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "Elevar helped us establish our digital presence without breaking the bank. The team's practical approach and affordable solutions were exactly what we needed."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#2FDAA9] rounded-full mr-4"></div>
                <div>
                  <div className="font-medium">Sarah Lim</div>
                  <div className="text-sm text-gray-400">Founder, Local Bakery</div>
                </div>
              </div>
            </div>

            <div className="bg-[#151F34] p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#2850E5] fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "The mentorship program gave me real-world experience I couldn't get anywhere else. I'm now confident in my digital marketing skills."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#2850E5] rounded-full mr-4"></div>
                <div>
                  <div className="font-medium">Alex Chen</div>
                  <div className="text-sm text-gray-400">Marketing Graduate</div>
                </div>
              </div>
            </div>

            <div className="bg-[#151F34] p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#2513FF] fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "As a career changer, the hands-on experience with real clients was invaluable. Elevar's approach made the transition smooth and practical."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#2513FF] rounded-full mr-4"></div>
                <div>
                  <div className="font-medium">Maria Rodriguez</div>
                  <div className="text-sm text-gray-400">Former Teacher, Now Marketer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 py-16 md:py-24 border-t border-[#2850E5]">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8">
            Ready to grow your business or start your marketing journey?
          </h2>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Let's discuss how we can help you achieve practical, measurable results through our inclusive productivity approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-[#2FDAA9] text-[#151F34] hover:bg-[#FAFF83] font-medium" asChild>
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-[#2850E5] text-white hover:bg-[#2513FF] bg-transparent" asChild>
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 border-t border-[#2850E5]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="Elevar Digital Marketing" 
              width={80} 
              height={24} 
              className="h-6 w-auto brightness-0 invert"
            />
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-[#2FDAA9] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#2FDAA9] transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-[#2FDAA9] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
} 