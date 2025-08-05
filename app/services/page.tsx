import { Metadata } from 'next'
import { ArrowRight, Target, TrendingUp, Users, Award, Globe, BarChart3, Zap, Shield, BookOpen, Lightbulb, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Digital Marketing Services | Elevar - Practical Solutions for SMEs',
  description: 'Affordable, practical digital marketing services for SMEs. WordPress development, SEO, social media marketing, content creation, and paid advertising with professional supervision.',
  keywords: [
    'WordPress development',
    'SEO services',
    'social media marketing',
    'content creation',
    'paid advertising',
    'affordable marketing services',
    'SME marketing',
    'practical marketing solutions'
  ],
  openGraph: {
    title: 'Digital Marketing Services | Elevar - Practical Solutions for SMEs',
    description: 'Affordable, practical digital marketing services for SMEs. WordPress development, SEO, social media marketing, content creation, and paid advertising.',
    url: 'https://elevar-digital.com/services',
    siteName: 'Elevar Digital Marketing',
    images: [
      {
        url: '/services-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Digital Marketing Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: '/services',
  },
}

const services = [
  {
    icon: Globe,
    title: 'WordPress Development',
    description: 'Custom WordPress websites designed for conversion, built with modern technologies and optimized for performance.',
    features: [
      'Custom website design',
      'E-commerce development',
      'Mobile-first responsive design',
      'Performance optimization',
      'Ongoing maintenance'
    ],
    price: 'From SGD 2,500'
  },
  {
    icon: Target,
    title: 'SEO Optimization',
    description: 'Improve your search engine rankings and drive organic traffic with our comprehensive SEO strategies.',
    features: [
      'Technical SEO optimization',
      'On-page SEO improvements',
      'Content strategy development',
      'Local SEO optimization',
      'SEO audits and reporting'
    ],
    price: 'From SGD 1,200/month'
  },
  {
    icon: Users,
    title: 'Social Media Marketing',
    description: 'Build brand awareness and engage with your audience across all major social media platforms.',
    features: [
      'Content creation & curation',
      'Community management',
      'Paid social advertising',
      'Influencer partnerships',
      'Analytics & reporting'
    ],
    price: 'From SGD 800/month'
  },
  {
    icon: BarChart3,
    title: 'Content Creation',
    description: 'Strategic content creation that attracts, engages, and converts your target audience.',
    features: [
      'Content strategy development',
      'Blog writing & management',
      'Email marketing campaigns',
      'Video content creation',
      'Content performance tracking'
    ],
    price: 'From SGD 600/month'
  },
  {
    icon: TrendingUp,
    title: 'Paid Advertising',
    description: 'Targeted paid advertising campaigns that deliver measurable results and maximize your ROI.',
    features: [
      'Google Ads management',
      'Facebook & Instagram ads',
      'Remarketing campaigns',
      'A/B testing & optimization',
      'Performance tracking'
    ],
    price: 'From SGD 1,000/month'
  },
  {
    icon: Lightbulb,
    title: 'Digital Consultancy',
    description: 'Strategic guidance, audits, and digital planning to help businesses understand and act on what matters most.',
    features: [
      'Digital strategy development',
      'Marketing audits',
      'Competitor analysis',
      'ROI optimization',
      'Growth planning'
    ],
    price: 'From SGD 1,500'
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#151F34] text-white">
      {/* Structured Data for Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Digital Marketing Services",
            "description": "Practical digital marketing services offered by Elevar Digital Marketing for SMEs",
            "itemListElement": services.map((service, index) => ({
              "@type": "Service",
              "position": index + 1,
              "name": service.title,
              "description": service.description,
              "provider": {
                "@type": "Organization",
                "name": "Elevar Digital Marketing"
              },
              "offers": {
                "@type": "Offer",
                "price": service.price,
                "priceCurrency": "SGD"
              }
            }))
          })
        }}
      />

      {/* Header */}
      <header className="flex h-20 w-full items-center justify-between px-6 md:px-12">
        <Link href="/" className="text-2xl font-light hover:text-[#2FDAA9] transition-colors">
          Elevar<span className="brand-accent">_</span>
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link href="/services" className="brand-accent">Services</Link>
          <Link href="/portfolio" className="hover:text-[#2FDAA9] transition-colors">Portfolio</Link>
          <Link href="/about" className="hover:text-[#2FDAA9] transition-colors">About</Link>
          <Link href="/contact" className="hover:text-[#2FDAA9] transition-colors">Contact</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-8">
            Practical <span className="brand-accent">digital marketing services</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Affordable, accessible, and results-oriented marketing solutions designed for SMEs. 
            Our supervised team delivers quality outcomes while contributing to Singapore's inclusive economy.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-[#1a2a4a] p-8 rounded-lg card-hover">
                <div className="w-16 h-16 bg-[#2FDAA9] rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-[#151F34]" />
                </div>
                <h3 className="text-2xl font-medium mb-4 brand-accent">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <Shield className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <span className="brand-accent font-medium">{service.price}</span>
                  <Button variant="primary" size="sm" asChild>
                    <Link href="/contact">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-[#1a2a4a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
              Why choose <span className="brand-accent">Elevar</span>?
            </h2>
            <p className="text-xl text-gray-400">
              We bridge the gap between marketing education and industry application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2FDAA9] rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-[#151F34]" />
              </div>
              <h3 className="text-xl font-medium mb-4 brand-accent">Affordable Excellence</h3>
              <p className="text-gray-400">
                Quality marketing services at accessible price points, designed specifically for SMEs and budget-conscious businesses.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#2850E5] rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-4 brand-primary">Professional Supervision</h3>
              <p className="text-gray-400">
                All work is executed under expert supervision, ensuring quality outcomes while providing learning opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#2513FF] rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-medium mb-4 brand-secondary">Social Impact</h3>
              <p className="text-gray-400">
                Contributing to Singapore's inclusive economy by training aspiring marketers through real client work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
              Our inclusive productivity approach
            </h2>
            <p className="text-xl text-gray-400">
              A proven methodology that delivers results for both clients and learners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2FDAA9] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#151F34]">1</span>
              </div>
              <h3 className="text-xl font-medium mb-4">Discovery</h3>
              <p className="text-gray-400">
                We analyze your business needs and match you with the right supervised team for your project.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#2850E5] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-medium mb-4">Strategy</h3>
              <p className="text-gray-400">
                We create a customized marketing plan tailored to your specific goals and budget constraints.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#2513FF] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-medium mb-4">Execution</h3>
              <p className="text-gray-400">
                Our supervised team implements your strategy with precision, learning while delivering quality results.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FAFF83] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#151F34]">4</span>
              </div>
              <h3 className="text-xl font-medium mb-4">Optimization</h3>
              <p className="text-gray-400">
                We continuously monitor, analyze, and optimize your campaigns for maximum performance and learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8">
            Ready to grow your business?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss how our practical digital marketing services can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#2FDAA9] text-[#151F34] hover:bg-[#FAFF83] font-medium" asChild>
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-[#2850E5] text-white hover:bg-[#2513FF] bg-transparent" asChild>
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 border-t border-[#2850E5]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-light">
            Elevar<span className="brand-accent">_</span>
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