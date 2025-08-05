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
    <div className="bg-[#151F34] text-white pt-20">
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
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out" id="navbar">
        <div className="relative flex h-20 w-full items-center px-6 md:px-12 bg-[#151F34]/95 backdrop-blur-sm border-b border-[#2850E5]/20">
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
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-6xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-inter-semibold leading-tight mb-12 text-balance tracking-tight">
            We deliver <span className="brand-accent font-inter-semibold animate-highlight-pulse" style={{animation: 'highlightPulse 3s ease-in-out infinite'}}>productivity</span> through digital marketing solutions.
          </h1>

          {/* Value Proposition */}
          <div className="mb-16">
            <div className="text-lg mb-3 font-inter leading-relaxed">AI-powered digital marketing for SMEs in Singapore.</div>
            <div className="text-gray-400 mb-1 font-inter">Practical solutions for growing businesses.</div>
            <div className="text-gray-400 font-inter">For SMEs and aspiring marketers.</div>
          </div>

          {/* Decorative line with dot */}
          <div className="relative mb-8">
            <div className="h-px bg-[#2850E5] w-full"></div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#2FDAA9] rounded-full"></div>
          </div>

          {/* Statistics Section - Part of Hero */}
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="animate-fade-in-up text-center">
                <div className="text-4xl md:text-5xl font-inter-semibold mb-3 brand-accent">100+</div>
                <p className="text-gray-400 text-sm leading-relaxed font-inter">
                  SMEs empowered with practical digital marketing solutions
                </p>
              </div>

              <div className="animate-fade-in-up text-center" style={{ animationDelay: '0.1s' }}>
                <div className="text-4xl md:text-5xl font-inter-semibold mb-3 brand-accent">50+</div>
                <p className="text-gray-400 text-sm leading-relaxed font-inter">
                  Aspiring marketers trained through real client work
                </p>
              </div>

              <div className="animate-fade-in-up text-center" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl md:text-5xl font-inter-semibold mb-3 brand-accent">95%</div>
                <p className="text-gray-400 text-sm leading-relaxed font-inter">
                  Client satisfaction rate with our managed service approach
                </p>
              </div>

              <div className="animate-fade-in-up text-center" style={{ animationDelay: '0.3s' }}>
                <div className="text-4xl md:text-5xl font-inter-semibold mb-3 brand-accent">24/7</div>
                <p className="text-gray-400 text-sm leading-relaxed font-inter">
                  Support and guidance for both clients and learners
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Architecture Section */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-[#1a2a4a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter-semibold mb-6">
              Three interconnected functions, <span className="brand-accent font-inter-semibold">one unified brand</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-inter">
              Elevar bridges the gap between marketing education and industry application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#151F34] p-8 rounded-lg card-hover">
              <div className="w-16 h-16 bg-[#2FDAA9] rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#151F34]" />
              </div>
              <h3 className="text-2xl font-inter-semibold mb-4 brand-accent">Agency</h3>
              <p className="text-gray-400 mb-6 leading-relaxed font-inter">
                Provides SMEs with practical digital marketing services executed by our supervised marketing team.
              </p>
              <ul className="space-y-3 text-sm text-gray-300 font-inter">
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
              <div className="w-16 h-16 bg-[#2FDAA9] rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-[#151F34]" />
              </div>
              <h3 className="text-2xl font-inter-semibold mb-4 brand-accent">Consultancy</h3>
              <p className="text-gray-400 mb-6 leading-relaxed font-inter">
                Offers strategic guidance, audits, and digital planning to help businesses understand and act on what matters most.
              </p>
              <ul className="space-y-3 text-sm text-gray-300 font-inter">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                  Strategic guidance
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                  Digital audits
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                  Digital planning
                </li>
              </ul>
            </div>

            <div className="bg-[#151F34] p-8 rounded-lg card-hover">
              <div className="w-16 h-16 bg-[#2FDAA9] rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-[#151F34]" />
              </div>
              <h3 className="text-2xl font-inter-semibold mb-4 brand-accent">Mentorship</h3>
              <p className="text-gray-400 mb-6 leading-relaxed font-inter">
                Trains aspiring marketers through real client work under professional supervision, ensuring quality outcomes for clients and growth for learners.
              </p>
              <ul className="space-y-3 text-sm text-gray-300 font-inter">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                  Hands-on experience
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                  Professional supervision
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
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
              For <span className="brand-accent">aspiring marketers</span>
            </h2>
            
            <div className="bg-[#1a2a4a] p-6 rounded-lg">
              <h3 className="text-xl font-medium brand-accent mb-3">Learners, interns & apprentices</h3>
              <p className="text-gray-300 leading-relaxed">
                University students, bootcamp graduates, and self-learners seeking hands-on experience in WordPress development, SEO, social media marketing, content creation, and paid advertising.
              </p>
            </div>

            <div className="bg-[#1a2a4a] p-6 rounded-lg">
              <h3 className="text-xl font-medium brand-accent mb-3">Career changers</h3>
              <p className="text-gray-300 leading-relaxed">
                Professionals transitioning into digital marketing who need practical experience to complement their theoretical knowledge.
              </p>
            </div>

            <div className="bg-[#1a2a4a] p-6 rounded-lg">
              <h3 className="text-xl font-medium brand-accent mb-3">Guided, hands-on experience</h3>
              <p className="text-gray-300 leading-relaxed">
                Real client work under professional supervision that builds confidence, skills, and career readiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Diagram Section */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-[#1a2a4a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter-semibold mb-6">
              How <span className="brand-accent font-inter-semibold">inclusive productivity</span> works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-inter">
              Our unique three-in-one model creates a sustainable ecosystem where everyone wins
            </p>
          </div>

          {/* Process Flow Diagram */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Step 1: SMEs */}
            <div className="bg-[#151F34] p-8 rounded-lg border border-[#2FDAA9]/20 animate-fade-in-up">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#2FDAA9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#151F34]" />
                </div>
                <h3 className="text-2xl font-inter-semibold mb-3 brand-accent">SMEs Need Marketing</h3>
                <p className="text-gray-400 font-inter">
                  Small businesses need digital marketing but can't afford agency prices
                </p>
              </div>
              <ul className="space-y-2 text-sm text-gray-300 font-inter">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                  Limited marketing budget
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                  Need practical solutions
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                  Want measurable results
                </li>
              </ul>
            </div>

            {/* Step 2: Elevar Bridge */}
            <div className="bg-[#151F34] p-8 rounded-lg border border-[#2FDAA9]/20 relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#2FDAA9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-[#151F34]" />
                </div>
                <h3 className="text-2xl font-inter-semibold mb-3 brand-accent">Elevar Connects</h3>
                <p className="text-gray-400 font-inter">
                  We bridge the gap with supervised learners and expert guidance
                </p>
              </div>
              <ul className="space-y-2 text-sm text-gray-300 font-inter">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                  Professional supervision
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                  Quality assurance
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                  Affordable pricing
                </li>
              </ul>
              
              {/* Fixed Connection Lines */}
              <div className="hidden lg:block absolute -left-12 top-1/2 transform -translate-y-1/2">
                <div className="w-24 h-0.5 bg-[#2FDAA9] relative">
                  <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-[#2FDAA9] border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent"></div>
                </div>
              </div>
              <div className="hidden lg:block absolute -right-12 top-1/2 transform -translate-y-1/2">
                <div className="w-24 h-0.5 bg-[#2FDAA9] relative">
                  <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-[#2FDAA9] border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent"></div>
                </div>
              </div>
            </div>

            {/* Step 3: Learners */}
            <div className="bg-[#151F34] p-8 rounded-lg border border-[#2FDAA9]/20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#2FDAA9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-[#151F34]" />
                </div>
                <h3 className="text-2xl font-inter-semibold mb-3 brand-accent">Learners Get Experience</h3>
                <p className="text-gray-400 font-inter">
                  Aspiring marketers work on real projects under expert supervision
                </p>
              </div>
              <ul className="space-y-2 text-sm text-gray-300 font-inter">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                  Real client projects
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                  Professional guidance
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                  Career readiness
                </li>
              </ul>
            </div>
          </div>

          {/* Results Section */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="bg-[#151F34] p-8 rounded-lg border border-[#2FDAA9]/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-inter-semibold mb-4 brand-accent">Everyone Wins</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#2FDAA9] rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-6 h-6 text-[#151F34]" />
                  </div>
                  <h4 className="font-inter-semibold mb-2">SMEs Get Results</h4>
                  <p className="text-sm text-gray-400 font-inter">Quality marketing at affordable prices</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#2FDAA9] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-[#151F34]" />
                  </div>
                  <h4 className="font-inter-semibold mb-2">Learners Get Skills</h4>
                  <p className="text-sm text-gray-400 font-inter">Real experience and career growth</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#2FDAA9] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-6 h-6 text-[#151F34]" />
                  </div>
                  <h4 className="font-inter-semibold mb-2">Society Benefits</h4>
                  <p className="text-sm text-gray-400 font-inter">Inclusive economy and social impact</p>
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