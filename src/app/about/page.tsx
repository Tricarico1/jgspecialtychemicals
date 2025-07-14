import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative z-50 bg-white/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="https://ext.same-assets.com/1812289277/320265055.png"
                  alt="J&G Specialty Chemicals"
                  width={60}
                  height={60}
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium border-b-2 border-yellow-400">
                About
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-gray-900 font-medium">
                J&G Blog
              </Link>
              <div className="relative group">
                <Button className="flex items-center text-gray-700 hover:text-gray-900 font-medium">
                  Solutions
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <Link href="/solutions/industrial-wastewater" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Industrial Wastewater
                    </Link>
                    <Link href="/solutions/municipal-wastewater" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Municipal Wastewater
                    </Link>
                    <Link href="/solutions/treatment-chemicals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Treatment Chemicals
                    </Link>
                    <Link href="/solutions/pump-station-maintenance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Pump Station Maintenance
                    </Link>
                  </div>
                </div>
              </div>
            </nav>

            {/* Contact Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button asChild className="primary-gold rounded-full px-6 py-2 font-medium hidden sm:block">
                <Link href="/#contact">Contact Us</Link>
              </Button>

              {/* Mobile Navigation */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="flex flex-col space-y-6 mt-8">
                    <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium text-lg">
                      Home
                    </Link>
                    <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium text-lg text-yellow-600">
                      About
                    </Link>
                    <Link href="/blog" className="text-gray-700 hover:text-gray-900 font-medium text-lg">
                      J&G Blog
                    </Link>
                    <div className="space-y-2">
                      <p className="text-gray-700 font-medium text-lg">Solutions</p>
                      <div className="pl-4 space-y-2">
                        <Link href="/solutions/industrial-wastewater" className="block text-gray-600 hover:text-gray-900">
                          Industrial Wastewater
                        </Link>
                        <Link href="/solutions/municipal-wastewater" className="block text-gray-600 hover:text-gray-900">
                          Municipal Wastewater
                        </Link>
                        <Link href="/solutions/treatment-chemicals" className="block text-gray-600 hover:text-gray-900">
                          Treatment Chemicals
                        </Link>
                        <Link href="/solutions/pump-station-maintenance" className="block text-gray-600 hover:text-gray-900">
                          Pump Station Maintenance
                        </Link>
                      </div>
                    </div>
                    <Button asChild className="primary-gold rounded-full px-6 py-2 font-medium w-full">
                      <Link href="/#contact">Contact Us</Link>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="https://ext.same-assets.com/1812289277/3793900429.jpeg"
          alt="About Us - Nature Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold heading-font">
            ABOUT US
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm text-gray-600 mb-4 body-font">High Quality Tactical Solutions</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 heading-font">
                Finding A Permanent Solution Is Our Ultimate Goal!
              </h2>

              <h3 className="text-2xl font-semibold text-gray-900 mb-6 heading-font">
                Since 2005, Our Team Has Succeeded In Understanding The Needs Of The Industry
              </h3>

              <p className="text-gray-600 body-font leading-relaxed">
                In the Berks and Lehigh County areas, we have earned a reputation as a prominent
                local leader by providing top-quality chemicals to previously underserved utilities
                and industries, all while maintaining a cost-effective approach. However, it is
                important to note that the cornerstone of our success lies in the trust and
                recommendations of our satisfied clients, as a substantial portion of our business
                originates from referrals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-sm text-gray-600 mb-4 body-font">Some Cool Facts</p>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 heading-font">
                Numbers Speak For Themselves
              </h3>

              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-6xl font-bold text-gray-700 mb-2">50</div>
                  <p className="text-gray-600 body-font">Products</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-bold text-gray-700 mb-2">18</div>
                  <p className="text-gray-600 body-font">Years of<br />Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 heading-font">
            Quality Comes First! We Make Sure That Every Detail Is Looked Into, Even The
            Smallest Product. Our Focus Is 100% On Client Needs And Satisfaction.
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 heading-font">
                Quality Unsurpassed
              </h3>
              <p className="text-gray-600 body-font leading-relaxed">
                Our journey began in an era when only customers making large-scale purchases
                received adequate service, including chemical delivery. Smaller orders were often
                overlooked by suppliers who deemed the profit margins insufficient to warrant their
                attention. During that time, we operated a modest facility, seemingly deemed
                inconsequential by larger suppliers. Nonetheless, we faced numerous challenges,
                including the scarcity of technical guidance to optimize chemical usage within our
                processes. Fortunately, we encountered a dedicated chemical supplier who became our
                invaluable mentor, guiding us towards effective solutions. As we overcame these
                obstacles, we recognized the need to extend our assistance to others encountering
                similar struggles. This marked the initial step towards broadening our impact,
                offering technical support and delivering the necessary products to enhance
                operational efficiency across diverse conditions, thereby alleviating the stress
                faced by operators.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 heading-font">
                We Are The Creators You Can Trust For A Perfect Solution To All Your Needs.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 heading-font">
            Need Help with Easier Solutions? We Are Experts!
          </h2>
          <Button asChild className="primary-gold rounded-full px-8 py-3 text-lg font-medium">
            <Link href="/#contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-gray-400 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center body-font">
            Copyright © 2025 J&G Specialty Chemicals
          </p>
        </div>
      </footer>
    </div>
  );
}
