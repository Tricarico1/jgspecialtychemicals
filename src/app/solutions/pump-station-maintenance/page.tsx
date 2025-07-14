import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";

export default function PumpStationMaintenancePage() {
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
              <Link href="/blog" className="text-gray-700 hover:text-gray-900 font-medium">
                J&G Blog
              </Link>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-gray-900 font-medium border-b-2 border-yellow-400">
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
                    <Link href="/solutions/pump-station-maintenance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 bg-yellow-50">
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
                        <Link href="/solutions/pump-station-maintenance" className="block text-yellow-600 hover:text-gray-900 font-medium">
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
          src="https://ext.same-assets.com/1812289277/2955831043.jpeg"
          alt="Pump Station Maintenance"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold heading-font">
            PUMP STATION<br />MAINTENANCE
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left: Text */}
            <div>
              <h3 className="text-lg font-bold mb-2">Many times</h3>
              <p className="mb-6 text-gray-700">
                Utility operators accept the idea that nothing can be done to fix either grease or odor problems that are often times found at pump stations.
              </p>
              <h3 className="text-lg font-bold mb-2">Grease problems</h3>
              <p className="mb-6 text-gray-700">
                Can cause pumps to become clogged or reduce the volume of the discharge line to the treatment plant. This problem can be fixed by either de-greasing chemicals or with biological treatment, depending on the wet well detention time, severity and how quickly the problem needs to be fixed. The force mains leaving the pump station can transition to gravity flow through larger pipes. These larger pipes allow water speed to slow allowing grease to build up in these sections.
              </p>
            </div>
            {/* Right: Image and ODOR section */}
            <div className="flex flex-col items-center">
              <img
                src="/Pump Station Maintenance Disgusted Woman.png"
                alt="disgusted woman, smelly"
                className="w-64 h-64 object-contain mb-6"
              />
              <h3 className="text-lg font-bold mb-2">ODOR</h3>
              <p className="text-gray-700">
                Can be fixed as well if it becomes a problem. If physical pump station changes can not fix this problem, either deodorants or an oxygen source will often times help. Deodorants are just that, deodorants, while the oxygen source is often times hydrogen peroxide. As flow volumes through the pump station increase, odor issues from low flow conditions may improve enough to make deodorants or additional oxygen sources unnecessary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-yellow-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 heading-font">
            Need Help With Easier Solutions? We Are Experts!
          </h2>
          <Button asChild className="primary-gold rounded-full px-8 py-3 text-lg font-medium">
            <Link href="/#contact">Contact Us</Link>
          </Button>
        </div>
      </section>



    </div>
  );
} 