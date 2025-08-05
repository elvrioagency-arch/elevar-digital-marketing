import { Metadata } from 'next'
import { ArrowRight, Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Contact Us | Elevar Digital Marketing Agency',
  description: 'Get in touch with Elevar Digital Marketing. We\'re here to help SMEs grow with practical marketing solutions and provide mentorship for aspiring marketers. Contact us today for a free consultation.',
  keywords: [
    'contact digital marketing agency',
    'SME marketing consultation',
    'WordPress development consultation',
    'SEO consultation Singapore',
    'marketing mentorship contact',
    'free consultation'
  ],
  openGraph: {
    title: 'Contact Us | Elevar Digital Marketing Agency',
    description: 'Get in touch with Elevar Digital Marketing. We\'re here to help SMEs grow with practical marketing solutions and provide mentorship for aspiring marketers.',
    url: 'https://elevar-digital.com/contact',
    siteName: 'Elevar Digital Marketing',
    images: [
      {
        url: '/contact-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Elevar Digital Marketing',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#151F34] text-white">
      {/* Structured Data for Contact */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Elevar Digital Marketing",
            "description": "Contact page for Elevar Digital Marketing Agency",
            "url": "https://elevar-digital.com/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "Elevar Digital Marketing",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+65-XXXX-XXXX",
                  "contactType": "customer service",
                  "availableLanguage": "English"
                },
                {
                  "@type": "ContactPoint",
                  "email": "hello@elevar-digital.com",
                  "contactType": "customer service"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Digital Street",
                "addressLocality": "Singapore",
                "postalCode": "123456",
                "addressCountry": "SG"
              }
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
        <div className="flex-1 flex justify-end items-center gap-8">
          <nav className="hidden md:flex gap-8">
            <Link href="/services" className="hover:text-[#2FDAA9] transition-colors">Services</Link>
            <Link href="/portfolio" className="hover:text-[#2FDAA9] transition-colors">Portfolio</Link>
            <Link href="/about" className="hover:text-[#2FDAA9] transition-colors">About</Link>
            <Link href="/contact" className="brand-accent">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-8">
            Let's <span className="brand-accent">connect</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Ready to grow your business or start your marketing journey? Get in touch with our team of experts 
            and let's discuss how we can help you achieve practical, measurable results.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-light mb-8">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 bg-[#1a2a4a] border border-[#2850E5] rounded-lg focus:outline-none focus:border-[#2FDAA9] transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 bg-[#1a2a4a] border border-[#2850E5] rounded-lg focus:outline-none focus:border-[#2FDAA9] transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-[#1a2a4a] border border-[#2850E5] rounded-lg focus:outline-none focus:border-[#2FDAA9] transition-colors"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-[#1a2a4a] border border-[#2850E5] rounded-lg focus:outline-none focus:border-[#2FDAA9] transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 bg-[#1a2a4a] border border-[#2850E5] rounded-lg focus:outline-none focus:border-[#2FDAA9] transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="wordpress">WordPress Development</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="social-media">Social Media Marketing</option>
                    <option value="content">Content Creation</option>
                    <option value="paid-advertising">Paid Advertising</option>
                    <option value="consultancy">Digital Consultancy</option>
                    <option value="mentorship">Marketing Mentorship</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-[#1a2a4a] border border-[#2850E5] rounded-lg focus:outline-none focus:border-[#2FDAA9] transition-colors resize-none"
                    placeholder="Tell us about your project and goals..."
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full bg-[#2FDAA9] text-[#151F34] hover:bg-[#FAFF83] font-medium">
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-light mb-8">Get in touch</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#2FDAA9] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#151F34]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Email</h3>
                    <p className="text-gray-400 mb-1">hello@elevar-digital.com</p>
                    <p className="text-gray-400">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#2850E5] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Phone</h3>
                    <p className="text-gray-400 mb-1">+65 (0) XXXX XXXX</p>
                    <p className="text-gray-400">Mon-Fri: 9am-6pm SGT</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#2513FF] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Office</h3>
                    <p className="text-gray-400 mb-1">123 Digital Street</p>
                    <p className="text-gray-400">Singapore 123456</p>
                    <p className="text-gray-400">Singapore</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#FAFF83] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#151F34]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Business Hours</h3>
                    <p className="text-gray-400 mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-400">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-gray-400">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-12 p-6 bg-[#1a2a4a] rounded-lg">
                <h3 className="text-xl font-medium mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <Link href="/services" className="flex items-center text-gray-400 hover:text-[#2FDAA9] transition-colors">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    View Our Services
                  </Link>
                  <Link href="/portfolio" className="flex items-center text-gray-400 hover:text-[#2FDAA9] transition-colors">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    See Our Work
                  </Link>
                  <Link href="/about" className="flex items-center text-gray-400 hover:text-[#2FDAA9] transition-colors">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Learn About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-[#1a2a4a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400">
              Common questions about working with Elevar Digital Marketing
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-[#151F34] p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">How quickly can you start working on my project?</h3>
              <p className="text-gray-400">
                We typically begin projects within 1-2 weeks of contract signing. The exact timeline depends on project complexity and our current capacity.
              </p>
            </div>

            <div className="bg-[#151F34] p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">What makes Elevar different from other agencies?</h3>
              <p className="text-gray-400">
                We deliver inclusive productivity as a managed service—combining affordable, practical solutions with social impact through mentorship and training.
              </p>
            </div>

            <div className="bg-[#151F34] p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Do you offer mentorship for aspiring marketers?</h3>
              <p className="text-gray-400">
                Yes, we provide hands-on experience through real client work under professional supervision, helping learners build confidence, skills, and career readiness.
              </p>
            </div>

            <div className="bg-[#151F34] p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4">What is your pricing structure?</h3>
              <p className="text-gray-400">
                We offer affordable, accessible pricing designed specifically for SMEs. Our services start from SGD 600/month, with transparent pricing and no hidden costs.
              </p>
            </div>
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