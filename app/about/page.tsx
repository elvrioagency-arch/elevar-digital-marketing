import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Users, Target, Lightbulb, BookOpen, CheckCircle, TrendingUp, Award, Heart, ArrowRight } from 'lucide-react'

export default function AboutPage() {
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
                    <Link href="/about" className="text-[#2FDAA9] font-inter">
                      About Us
                    </Link>
                    <Link href="/services" className="text-white hover:text-[#2FDAA9] transition-colors font-inter">
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
                About <span className="brand-accent font-inter-semibold">Elevar</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto font-inter leading-relaxed">
                We're revolutionizing digital marketing by creating an inclusive ecosystem where SMEs, learners, and society all win together.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-[#151F34] p-8 rounded-lg border border-[#2FDAA9]/20 card-hover">
                <div className="w-16 h-16 bg-[#2FDAA9] rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-[#151F34]" />
                </div>
                <h3 className="text-2xl font-inter-semibold mb-4 brand-accent">Our Mission</h3>
                <p className="text-gray-400 font-inter leading-relaxed">
                  To democratize digital marketing by making professional services accessible to SMEs while providing real-world experience to aspiring marketers.
                </p>
              </div>

              <div className="bg-[#151F34] p-8 rounded-lg border border-[#2FDAA9]/20 card-hover">
                <div className="w-16 h-16 bg-[#2FDAA9] rounded-full flex items-center justify-center mb-6">
                  <Lightbulb className="w-8 h-8 text-[#151F34]" />
                </div>
                <h3 className="text-2xl font-inter-semibold mb-4 brand-accent">Our Vision</h3>
                <p className="text-gray-400 font-inter leading-relaxed">
                  A world where every SME can access quality digital marketing, every learner gets real experience, and society benefits from inclusive growth.
                </p>
              </div>
            </div>

            {/* Story Section */}
            <div className="bg-[#151F34] p-8 md:p-12 rounded-lg border border-[#2FDAA9]/20 mb-16 card-hover">
              <h2 className="text-3xl md:text-4xl font-inter-semibold mb-8 text-center">
                Our <span className="brand-accent font-inter-semibold">Story</span>
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="space-y-8 text-lg font-inter leading-relaxed text-gray-300">
                  <p>
                    It all began with a simple observation: while some businesses thrived with professional marketing support, others struggled to access the same opportunities. At the same time, talented individuals were eager to learn but lacked real-world experience.
                  </p>
                  <p>
                    We saw an opportunity to bridge this gap. By connecting businesses with aspiring professionals under expert guidance, we created a model where everyone benefits. Small businesses get quality marketing services, learners gain valuable experience, and society sees positive economic impact.
                  </p>
                  <p>
                    Today, this vision has grown into a thriving ecosystem. We've helped numerous businesses achieve their goals while providing meaningful learning opportunities. The results speak for themselves - satisfied clients, skilled professionals, and a more inclusive digital economy.
                  </p>
                  <p>
                    Our story continues to evolve as we discover new ways to serve our community. Every project teaches us something new, every success inspires us to reach further, and every challenge makes us stronger.
                  </p>
                </div>
              </div>
            </div>

            {/* Values Section */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-inter-semibold mb-12 text-center">
                Our <span className="brand-accent font-inter-semibold">Values</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#2FDAA9] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-[#151F34]" />
                  </div>
                  <h4 className="font-inter-semibold mb-2">Inclusivity</h4>
                  <p className="text-gray-400 text-sm font-inter">
                    Making digital marketing accessible to all businesses
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#2FDAA9] rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-[#151F34]" />
                  </div>
                  <h4 className="font-inter-semibold mb-2">Growth</h4>
                  <p className="text-gray-400 text-sm font-inter">
                    Fostering continuous learning and development
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#2FDAA9] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-[#151F34]" />
                  </div>
                  <h4 className="font-inter-semibold mb-2">Quality</h4>
                  <p className="text-gray-400 text-sm font-inter">
                    Delivering excellence through expert supervision
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#2FDAA9] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-[#151F34]" />
                  </div>
                  <h4 className="font-inter-semibold mb-2">Impact</h4>
                  <p className="text-gray-400 text-sm font-inter">
                    Creating positive social and economic change
                  </p>
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div className="bg-[#151F34] p-8 md:p-12 rounded-lg border border-[#2FDAA9]/20 card-hover">
              <h2 className="text-3xl md:text-4xl font-inter-semibold mb-8 text-center">
                Meet Our <span className="brand-accent font-inter-semibold">Team</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#2FDAA9] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-[#151F34]" />
                  </div>
                  <h4 className="font-inter-semibold mb-2">Expert Supervisors</h4>
                  <p className="text-gray-400 text-sm font-inter">
                    Industry professionals guiding learners and ensuring quality
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#2FDAA9] rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-10 h-10 text-[#151F34]" />
                  </div>
                  <h4 className="font-inter-semibold mb-2">Aspiring Marketers</h4>
                  <p className="text-gray-400 text-sm font-inter">
                    Learners gaining real experience on client projects
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#2FDAA9] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-10 h-10 text-[#151F34]" />
                  </div>
                  <h4 className="font-inter-semibold mb-2">SME Partners</h4>
                  <p className="text-gray-400 text-sm font-inter">
                    Small businesses getting affordable, quality marketing
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
              Join our inclusive ecosystem and see how we can help your business grow
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#2FDAA9] hover:bg-[#2FDAA9]/90 text-[#151F34] font-inter-semibold px-8 py-3">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-[#2FDAA9] text-[#2FDAA9] hover:bg-[#2FDAA9] hover:text-[#151F34] font-inter-semibold px-8 py-3">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 