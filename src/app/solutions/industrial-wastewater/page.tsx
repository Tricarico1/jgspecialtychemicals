import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";

export default function IndustrialWastewaterPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative z-50 bg-white/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/">
                <Image
                  src="https://ext.same-assets.com/1812289277/320265055.png"
                  alt="J&G Specialty Chemicals"
                  width={60}
                  height={60}
                  className="h-12 w-auto"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-gray-900 font-medium">
                Home
              </a>
              <a href="/about" className="text-gray-700 hover:text-gray-900 font-medium">
                About
              </a>
              <a href="/blog" className="text-gray-700 hover:text-gray-900 font-medium">
                J&G Blog
              </a>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-gray-900 font-medium border-b-2 border-yellow-400">
                  Solutions
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <a href="/solutions/industrial-wastewater" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 bg-yellow-50">
                      Industrial Wastewater
                    </a>
                    <a href="/solutions/municipal-wastewater" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Municipal Wastewater
                    </a>
                    <a href="/solutions/treatment-chemicals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Treatment Chemicals
                    </a>
                    <a href="/solutions/pump-station-maintenance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Pump Station Maintenance
                    </a>
                  </div>
                </div>
              </div>
            </nav>

            {/* Contact Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button asChild className="primary-gold rounded-full px-6 py-2 font-medium hidden sm:block">
                <a href="/#contact">Contact Us</a>
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
                    <a href="/" className="text-gray-700 hover:text-gray-900 font-medium text-lg">
                      Home
                    </a>
                    <a href="/about" className="text-gray-700 hover:text-gray-900 font-medium text-lg">
                      About
                    </a>
                    <a href="/blog" className="text-gray-700 hover:text-gray-900 font-medium text-lg">
                      J&G Blog
                    </a>
                    <div className="space-y-2">
                      <p className="text-gray-700 font-medium text-lg">Solutions</p>
                      <div className="pl-4 space-y-2">
                        <a href="/solutions/industrial-wastewater" className="block text-yellow-600 hover:text-gray-900 font-medium">
                          Industrial Wastewater
                        </a>
                        <a href="/solutions/municipal-wastewater" className="block text-gray-600 hover:text-gray-900">
                          Municipal Wastewater
                        </a>
                        <a href="/solutions/treatment-chemicals" className="block text-gray-600 hover:text-gray-900">
                          Treatment Chemicals
                        </a>
                        <a href="/solutions/pump-station-maintenance" className="block text-gray-600 hover:text-gray-900">
                          Pump Station Maintenance
                        </a>
                      </div>
                    </div>
                    <Button asChild className="primary-gold rounded-full px-6 py-2 font-medium w-full">
                      <a href="/#contact">Contact Us</a>
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
          alt="Industrial Wastewater"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold heading-font">
            INDUSTRIAL<br />WASTEWATER
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm text-gray-600 mb-4 body-font">Optimized & Industry-ready Solutions</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 heading-font">
                We cater to the following industries:
              </h2>

              <div className="space-y-4 mb-8">
                <p className="text-lg font-semibold text-gray-900">1. Beverage and Food</p>
                <p className="text-lg font-semibold text-gray-900">2. Industrial and Municipal Wastewater</p>
                <p className="text-lg font-semibold text-gray-900">3. Meat and Poultry</p>
              </div>

              <p className="text-gray-600 body-font leading-relaxed">
                Innovations in Technology: We stay abreast of the latest advancements in the industry,
                ensuring our methods evolve with new and emerging technologies.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://ext.same-assets.com/1812289277/890639232.jpeg"
                alt="Industrial Pipes and Ventilation"
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-full"
              />
              <Image
                src="https://ext.same-assets.com/1812289277/634656711.jpeg"
                alt="Food Service Industry"
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DAF Effluent Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 heading-font">
            Does your DAF Effluent look like this?
          </h2>

          <div className="mb-8">
            <Image
              src="https://ext.same-assets.com/1812289277/4206905732.jpeg"
              alt="DAF Effluent Sample"
              width={400}
              height={300}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>

          <Button asChild className="primary-gold rounded-full px-8 py-3 text-lg font-medium">
            <a href="/#contact">Contact Us</a>
          </Button>
        </div>
      </section>

      {/* Treatment Methods Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 heading-font">
                  Ozone Treatment
                </h3>
                <p className="text-gray-600 body-font leading-relaxed">
                  First conceived in the mid-1800s, ozone treatment is gaining renewed interest for
                  its robust pollutant-removal capabilities. This technology excels in disinfecting
                  water, eliminating stubborn pollutants, and neutralizing potential carcinogens.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 heading-font">
                  Nanotechnology
                </h3>
                <p className="text-gray-600 body-font leading-relaxed">
                  Our nanomembrane filtration is a fine example of nanotechnology in action. This
                  filtration process, utilizing pores around one nanometer in size, effectively
                  removes total dissolved solids and organic materials from water.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 heading-font">
                  Membrane Filtration
                </h3>
                <p className="text-gray-600 body-font leading-relaxed">
                  This process employs physical filters to remove particles based on size. A pressure
                  differential propels the liquid through the filter, screening out contaminants. The
                  scale of filtration ranges from particle filtration with 10-micrometer pores to
                  reverse osmosis with pores less than 1 nanometer.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 heading-font">
                  Natural Treatment Systems
                </h3>
                <p className="text-gray-600 body-font leading-relaxed">
                  Echoing nature's own methods, our natural treatment systems create ideal, controlled
                  conditions for wastewater treatment. We use a variety of methods, including wetlands
                  applications, land application methods, peat moss bio-filtration, and microalgae
                  aquaculture.
                </p>
              </div>
            </div>
          </div>
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
