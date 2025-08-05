import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Mail, Phone, MapPin, Clock, MessageSquare, ArrowRight, Send } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="bg-[#151F34] text-white pt-20">
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

          {/* Right side - contact button and hamburger menu */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <Button
              variant="outline"
              className="border-[#2850E5] text-white hover:bg-[#2513FF] bg-transparent"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:text-[#2FDAA9] border border-[#2850E5]/20 hover:border-[#2FDAA9] p-2">
                  <Menu className="h-8 w-8" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-[#151F34] border-l border-[#2850E5]/20">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-center mb-8">
                    <Image
                      src="/logo.png"
                      alt="Elevar"
                      width={120}
                      height={40}
                      className="brightness-0 invert"
                    />
                  </div>
                  <nav className="flex flex-col space-y-4">
                    <Link href="/" className="text-white hover:text-[#2FDAA9] transition-colors font-inter">
                      Home
                    </Link>
                    <Link href="/about" className="text-white hover:text-[#2FDAA9] transition-colors font-inter">
                      About Us
                    </Link>
                    <Link href="/services" className="text-white hover:text-[#2FDAA9] transition-colors font-inter">
                      Services
                    </Link>
                    <Link href="/contact" className="text-[#2FDAA9] font-inter">
                      Contact Us
                    </Link>
                  </nav>
                  <div className="mt-auto">
                    <Button className="w-full bg-[#2FDAA9] hover:bg-[#2FDAA9]/90 text-[#151F34] font-inter-semibold">
                      Get Started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div>
        {/* Hero Section */}
        <section className="px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-inter-semibold leading-tight mb-8 text-balance tracking-tight">
                Get in <span className="brand-accent font-inter-semibold">Touch</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto font-inter leading-relaxed">
                Ready to start your digital marketing journey? Let's discuss how we can help your business grow.
              </p>
            </div>

            {/* Contact Form & Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-[#151F34] p-8 rounded-lg border border-[#2FDAA9]/20 card-hover">
                <h2 className="text-2xl font-inter-semibold mb-6 brand-accent">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-inter-semibold mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 bg-[#1a2a4a] border border-[#2850E5]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#2FDAA9] transition-colors font-inter"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-inter-semibold mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 bg-[#1a2a4a] border border-[#2850E5]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#2FDAA9] transition-colors font-inter"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-inter-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-[#1a2a4a] border border-[#2850E5]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#2FDAA9] transition-colors font-inter"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-inter-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-[#1a2a4a] border border-[#2850E5]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#2FDAA9] transition-colors font-inter"
                      placeholder="+65 9123 4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-inter-semibold mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 bg-[#1a2a4a] border border-[#2850E5]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#2FDAA9] transition-colors font-inter"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-inter-semibold mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 bg-[#1a2a4a] border border-[#2850E5]/20 rounded-lg text-white focus:outline-none focus:border-[#2FDAA9] transition-colors font-inter"
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="seo">SEO Optimization</option>
                      <option value="social-media">Social Media Marketing</option>
                      <option value="consultancy">Digital Consultancy</option>
                      <option value="analytics">Digital Analytics</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-inter-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-[#1a2a4a] border border-[#2850E5]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#2FDAA9] transition-colors font-inter resize-none"
                      placeholder="Tell us about your project and how we can help..."
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-[#2FDAA9] hover:bg-[#2FDAA9]/90 text-[#151F34] font-inter-semibold py-3">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                                   <div className="bg-[#151F34] p-8 rounded-lg border border-[#2FDAA9]/20 card-hover">
                     <h3 className="text-xl font-inter-semibold mb-6 brand-accent">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-[#2FDAA9] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail className="w-6 h-6 text-[#151F34]" />
                      </div>
                      <div>
                        <h4 className="font-inter-semibold mb-1">Email</h4>
                        <p className="text-gray-400 font-inter">hello@elevar-digital.com</p>
                        <p className="text-gray-400 font-inter">support@elevar-digital.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-[#2FDAA9] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="w-6 h-6 text-[#151F34]" />
                      </div>
                      <div>
                        <h4 className="font-inter-semibold mb-1">Phone</h4>
                        <p className="text-gray-400 font-inter">+65 9123 4567</p>
                        <p className="text-gray-400 font-inter">+65 6789 0123</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-[#2FDAA9] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="w-6 h-6 text-[#151F34]" />
                      </div>
                      <div>
                        <h4 className="font-inter-semibold mb-1">Address</h4>
                        <p className="text-gray-400 font-inter">
                          123 Business Street<br />
                          Singapore 123456<br />
                          Singapore
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-[#2FDAA9] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Clock className="w-6 h-6 text-[#151F34]" />
                      </div>
                      <div>
                        <h4 className="font-inter-semibold mb-1">Business Hours</h4>
                        <p className="text-gray-400 font-inter">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-400 font-inter">Saturday: 10:00 AM - 2:00 PM</p>
                        <p className="text-gray-400 font-inter">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Contact */}
                                 <div className="bg-[#151F34] p-8 rounded-lg border border-[#2FDAA9]/20 card-hover">
                   <h3 className="text-xl font-inter-semibold mb-6 brand-accent">Quick Contact</h3>
                  <div className="space-y-4">
                    <Button className="w-full bg-[#2FDAA9] hover:bg-[#2FDAA9]/90 text-[#151F34] font-inter-semibold">
                      Schedule a Call
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="w-full border-[#2FDAA9] text-[#2FDAA9] hover:bg-[#2FDAA9] hover:text-[#151F34] font-inter-semibold">
                      WhatsApp Chat
                      <MessageSquare className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 md:px-12 py-16 md:py-24 bg-[#1a2a4a]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-inter-semibold mb-12 text-center">
              Frequently Asked <span className="brand-accent font-inter-semibold">Questions</span>
            </h2>
                         <div className="space-y-6">
               <div className="bg-[#151F34] p-6 rounded-lg border border-[#2FDAA9]/20 card-hover">
                 <h3 className="text-lg font-inter-semibold mb-3">How quickly can you start a project?</h3>
                <p className="text-gray-400 font-inter">
                  We typically start projects within 1-2 weeks of initial consultation. The timeline depends on project complexity and current team availability.
                </p>
              </div>
                             <div className="bg-[#151F34] p-6 rounded-lg border border-[#2FDAA9]/20 card-hover">
                 <h3 className="text-lg font-inter-semibold mb-3">What are your pricing models?</h3>
                <p className="text-gray-400 font-inter">
                  We offer flexible pricing including project-based, monthly retainers, and performance-based models. Contact us for a customized quote.
                </p>
              </div>
                             <div className="bg-[#151F34] p-6 rounded-lg border border-[#2FDAA9]/20 card-hover">
                 <h3 className="text-lg font-inter-semibold mb-3">Do you work with international clients?</h3>
                <p className="text-gray-400 font-inter">
                  Yes, we work with clients globally. While we're based in Singapore, we serve businesses worldwide with our digital marketing services.
                </p>
              </div>
                             <div className="bg-[#151F34] p-6 rounded-lg border border-[#2FDAA9]/20 card-hover">
                 <h3 className="text-lg font-inter-semibold mb-3">How do you ensure quality with supervised learners?</h3>
                <p className="text-gray-400 font-inter">
                  All work is reviewed and approved by experienced professionals before delivery. We maintain strict quality standards through our supervision process.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 