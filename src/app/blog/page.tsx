import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
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
              <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium">
                About
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-gray-900 font-medium border-b-2 border-yellow-400">
                J&G Blog
              </Link>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-gray-900 font-medium">
                  Solutions
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
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
                    <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium text-lg">
                      About
                    </Link>
                    <Link href="/blog" className="text-gray-700 hover:text-gray-900 font-medium text-lg text-yellow-600">
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
          alt="J&G Blog - Water Treatment Insights"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold heading-font">
            WATER BLOGGED<br />JOURNAL
          </h1>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <Image src="/1.png" alt="Filaments, What to Do?" width={600} height={300} className="w-full h-48 object-cover" />
              <div className="flex-1 flex flex-col p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-2 heading-font">Filaments, What to Do?</h2>
                <p className="text-gray-600 body-font text-sm mb-4 flex-1">Filamentous Bacteria As is the case with any group of microorganism populations, the relative proportion…</p>
                <Button asChild className="primary-gold rounded-full px-6 py-2 font-medium self-start">
                  <Link href="/blog/filaments-what-to-do">Read More</Link>
                </Button>
              </div>
            </div>
            {/* Blog Post 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <Image src="/2.png" alt="Settleability, Problem or Not?" width={600} height={300} className="w-full h-48 object-cover" />
              <div className="flex-1 flex flex-col p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-2 heading-font">Settleability, Problem or Not?</h2>
                <p className="text-gray-600 body-font text-sm mb-4 flex-1">Settleability Test – Interpretation One of the most useful and easy tests for operators to…</p>
                <Button asChild className="primary-gold rounded-full px-6 py-2 font-medium self-start">
                  <Link href="/blog/settleability-problem-or-not">Read More</Link>
                </Button>
              </div>
            </div>
            {/* Blog Post 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <Image src="/3.png" alt="Nitrification – What's Needed?" width={600} height={300} className="w-full h-48 object-cover" />
              <div className="flex-1 flex flex-col p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-2 heading-font">Nitrification – What's Needed?</h2>
                <p className="text-gray-600 body-font text-sm mb-4 flex-1">Nitrification is the biological oxidation of ammonia nitrogen to nitrate and accounts for most ammonia…</p>
                <Button asChild className="primary-gold rounded-full px-6 py-2 font-medium self-start">
                  <Link href="/blog/nitrification-whats-needed">Read More</Link>
                </Button>
              </div>
            </div>
            {/* Blog Post 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <Image src="/4.png" alt="Present Issues, Are Operators a Shrinking Resource?" width={600} height={300} className="w-full h-48 object-cover" />
              <div className="flex-1 flex flex-col p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-2 heading-font">Present Issues, Are Operators a Shrinking Resource?</h2>
                <p className="text-gray-600 body-font text-sm mb-4 flex-1">Compliance · Increased and expanding regulations (EPA and state) · Nutrient removal (improved operations typically…</p>
                <Button asChild className="primary-gold rounded-full px-6 py-2 font-medium self-start">
                  <Link href="/blog/present-issues-are-operators-a-shrinking-resource">Read More</Link>
                </Button>
              </div>
            </div>
            {/* Blog Post 5 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <Image src="/5.png" alt="De-Nitrification, Only after Nitrification" width={600} height={300} className="w-full h-48 object-cover" />
              <div className="flex-1 flex flex-col p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-2 heading-font">De-Nitrification, Only after Nitrification</h2>
                <p className="text-gray-600 body-font text-sm mb-4 flex-1">De-nitrification is when facultative (common) treatment bacteria change nitrate (NO3) to (nitrogen gas (N), carbon…</p>
                <Button asChild className="primary-gold rounded-full px-6 py-2 font-medium self-start">
                  <Link href="/blog/de-nitrification-only-after-nitrification">Read More</Link>
                </Button>
              </div>
            </div>
            {/* Blog Post 6 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <Image src="/6.png" alt="Knowing Your System, Nitrification as an Indicator?" width={600} height={300} className="w-full h-48 object-cover" />
              <div className="flex-1 flex flex-col p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-2 heading-font">Knowing Your System, Nitrification as an Indicator?</h2>
                <p className="text-gray-600 body-font text-sm mb-4 flex-1">Effective operation of your system begins with knowing your system. While two systems may be…</p>
                <Button asChild className="primary-gold rounded-full px-6 py-2 font-medium self-start">
                  <Link href="/blog/knowing-your-system-nitrification-as-an-indicator">Read More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 heading-font">
            Need Expert Water Treatment Guidance?
          </h2>
          <Button asChild className="primary-gold rounded-full px-8 py-3 text-lg font-medium">
            <Link href="/#contact">Contact Our Experts</Link>
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
