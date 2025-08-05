import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Target, Lightbulb, BookOpen, CheckCircle, ArrowRight, Globe, Search, Share2, Monitor, Smartphone, BarChart3, Users, Zap, Award } from 'lucide-react'

export default function ServicesPage() {
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
                    <Link href="/services" className="text-[#2FDAA9] font-inter">
                      Services
                    </Link>
                    <Link href="/contact" className="text-white hover:text-[#2FDAA9] transition-colors font-inter">
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
                Our <span className="brand-accent font-inter-semibold">Services</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto font-inter leading-relaxed">
                Comprehensive digital marketing solutions delivered by supervised learners under expert guidance
              </p>
            </div>

            {/* Service Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-[#151F34] p-8 rounded-lg border border-[#2FDAA9]/20 card-hover">
                <div className="w-16 h-16 bg-[#2FDAA9] rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-[#151F34]" />
                </div>
                <h3 className="text-2xl font-inter-semibold mb-4 brand-accent">Agency Services</h3>
                <p className="text-gray-400 mb-6 font-inter">
                  Professional digital marketing services executed by our supervised team
                </p>
                <ul className="space-y-3 text-sm text-gray-300 font-inter">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                    Website development
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

              <div className="bg-[#151F34] p-8 rounded-lg border border-[#2FDAA9]/20 card-hover">
                <div className="w-16 h-16 bg-[#2FDAA9] rounded-full flex items-center justify-center mb-6">
                  <Lightbulb className="w-8 h-8 text-[#151F34]" />
                </div>
                <h3 className="text-2xl font-inter-semibold mb-4 brand-accent">Consultancy</h3>
                <p className="text-gray-400 mb-6 font-inter">
                  Strategic guidance and digital planning for your business growth
                </p>
                <ul className="space-y-3 text-sm text-gray-300 font-inter">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                    Digital strategy
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                    Marketing audits
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                    Growth planning
                  </li>
                </ul>
              </div>

              <div className="bg-[#151F34] p-8 rounded-lg border border-[#2FDAA9]/20 card-hover">
                <div className="w-16 h-16 bg-[#2FDAA9] rounded-full flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-[#151F34]" />
                </div>
                <h3 className="text-2xl font-inter-semibold mb-4 brand-accent">Training</h3>
                <p className="text-gray-400 mb-6 font-inter">
                  Real-world experience for aspiring marketers on client projects
                </p>
                <ul className="space-y-3 text-sm text-gray-300 font-inter">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                    Hands-on learning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                    Expert supervision
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                    Career development
                  </li>
                </ul>
              </div>
            </div>

            {/* Detailed Services */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-inter-semibold mb-12 text-center">
                Detailed <span className="brand-accent font-inter-semibold">Services</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                 {/* Web Development */}
                 <div className="bg-[#151F34] p-8 rounded-lg border border-[#2FDAA9]/20 card-hover">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#2FDAA9] rounded-lg flex items-center justify-center mr-4">
                      <Globe className="w-6 h-6 text-[#151F34]" />
                    </div>
                    <h3 className="text-xl font-inter-semibold brand-accent">Web Development</h3>
                  </div>
                  <p className="text-gray-400 mb-4 font-inter">
                    Modern, responsive websites built with the latest technologies
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300 font-inter">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                      WordPress development
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                      Custom web applications
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                      E-commerce solutions
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                      Mobile-responsive design
                    </li>
                  </ul>
                </div>

                                 {/* SEO Optimization */}
                 <div className="bg-[#151F34] p-8 rounded-lg border border-[#2FDAA9]/20 card-hover">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#2FDAA9] rounded-lg flex items-center justify-center mr-4">
                      <Search className="w-6 h-6 text-[#151F34]" />
                    </div>
                    <h3 className="text-xl font-inter-semibold brand-accent">SEO Optimization</h3>
                  </div>
                  <p className="text-gray-400 mb-4 font-inter">
                    Improve your search rankings and drive organic traffic
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300 font-inter">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                      Technical SEO audit
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                      On-page optimization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                      Content strategy
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                      Local SEO
                    </li>
                  </ul>
                </div>

                                 {/* Social Media Marketing */}
                 <div className="bg-[#151F34] p-8 rounded-lg border border-[#2FDAA9]/20 card-hover">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#2FDAA9] rounded-lg flex items-center justify-center mr-4">
                      <Share2 className="w-6 h-6 text-[#151F34]" />
                    </div>
                    <h3 className="text-xl font-inter-semibold brand-accent">Social Media Marketing</h3>
                  </div>
                  <p className="text-gray-400 mb-4 font-inter">
                    Build your brand presence across all social platforms
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300 font-inter">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                      Content creation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                      Community management
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                      Paid advertising
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                      Influencer partnerships
                    </li>
                  </ul>
                </div>

                                 {/* Digital Analytics */}
                 <div className="bg-[#151F34] p-8 rounded-lg border border-[#2FDAA9]/20 card-hover">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#2FDAA9] rounded-lg flex items-center justify-center mr-4">
                      <BarChart3 className="w-6 h-6 text-[#151F34]" />
                    </div>
                    <h3 className="text-xl font-inter-semibold brand-accent">Digital Analytics</h3>
                  </div>
                  <p className="text-gray-400 mb-4 font-inter">
                    Data-driven insights to optimize your marketing performance
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300 font-inter">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                      Google Analytics setup
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                      Performance tracking
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                      Conversion optimization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#2FDAA9] mr-3 flex-shrink-0" />
                      ROI reporting
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Process Section */}
                         <div className="bg-[#151F34] p-8 md:p-12 rounded-lg border border-[#2FDAA9]/20 mb-16 card-hover">
              <h2 className="text-3xl md:text-4xl font-inter-semibold mb-8 text-center">
                Our <span className="brand-accent font-inter-semibold">Process</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#2FDAA9] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-[#151F34]" />
                  </div>
                  <h4 className="font-inter-semibold mb-2">Discovery</h4>
                  <p className="text-gray-400 text-sm font-inter">
                    Understanding your business needs and goals
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#2FDAA9] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-8 h-8 text-[#151F34]" />
                  </div>
                  <h4 className="font-inter-semibold mb-2">Strategy</h4>
                  <p className="text-gray-400 text-sm font-inter">
                    Developing a customized marketing plan
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#2FDAA9] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-[#151F34]" />
                  </div>
                  <h4 className="font-inter-semibold mb-2">Execution</h4>
                  <p className="text-gray-400 text-sm font-inter">
                    Implementing solutions with expert supervision
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#2FDAA9] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-[#151F34]" />
                  </div>
                  <h4 className="font-inter-semibold mb-2">Optimization</h4>
                  <p className="text-gray-400 text-sm font-inter">
                    Continuous improvement and performance tracking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 md:px-12 py-16 md:py-24 bg-[#1a2a4a]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-inter-semibold mb-6">
              Ready to <span className="brand-accent font-inter-semibold">Get Started</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-8 font-inter">
              Let's discuss how our services can help your business grow
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#2FDAA9] hover:bg-[#2FDAA9]/90 text-[#151F34] font-inter-semibold px-8 py-3">
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-[#2FDAA9] text-[#2FDAA9] hover:bg-[#2FDAA9] hover:text-[#151F34] font-inter-semibold px-8 py-3">
                View Pricing
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 