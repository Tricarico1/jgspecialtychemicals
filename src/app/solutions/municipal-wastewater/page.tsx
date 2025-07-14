import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";

export default function MunicipalWastewaterPage() {
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
                    <a href="/solutions/industrial-wastewater" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Industrial Wastewater
                    </a>
                    <a href="/solutions/municipal-wastewater" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 bg-yellow-50">
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
                        <a href="/solutions/industrial-wastewater" className="block text-gray-600 hover:text-gray-900">
                          Industrial Wastewater
                        </a>
                        <a href="/solutions/municipal-wastewater" className="block text-yellow-600 hover:text-gray-900 font-medium">
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
          alt="Municipal Wastewater"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold heading-font">
            MUNICIPAL<br />WASTEWATER
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* 1. Water Drop */}
            <div>
              <img
                src="/Water Drop Liquid Municipal Wastewater.jpg"
                alt="water, drop, liquid"
                className="w-full h-56 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold mb-2">Why is there a growing public demand for cleaner water?</h3>
              <p className="text-gray-700">
                Today, more than any other time in history there are ever increasing environmental concerns regarding water pollution in general and water scarcity as it relates to sources of “usable” water. Water resources are one of the top environmental concerns facing mankind today.
              </p>
            </div>
            {/* 2. Municipal Wastewater Project (industrial) */}
            <div>
              <img
                src="/Municipal Wastewater Project.jpg"
                alt="municipal wastewater project"
                className="w-full h-56 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold mb-2">What is the regulatory history of water pollution control?</h3>
              <p className="text-gray-700">
                Water pollution had become more of a public issue since shortly after WWII marked by the Federal Water Pollution Control Act (FWPCA) of 1948. The FWPCA became the basis for a later action by the newly founded Environmental Protection Agency (EPA) that resulted in broadening the FWPCA in 1972 into what is known today the Clean Water Act (CWA).
              </p>
            </div>
            {/* 3. Courthouse/Building/Black Icon */}
            <div>
              <img
                src="/Courthouse Building Black.png"
                alt="courthouse, building, black"
                className="w-full h-56 object-contain bg-white rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold mb-2">How have regulations become more restrictive?</h3>
              <p className="text-gray-700">
                Similar to the changes in the regulatory environment that occurred between the end of WWII and the institution of the Clean Water Act, we are now seeing new NPDES permit requirements that are much more restrictive when compared to those at the onset of this program. This shift towards a greater appreciation for clean water has is not based solely on consumption, included also is the effects to the ecosystem at large as well as well as agriculture and a large number of other uses.
              </p>
            </div>
            {/* 4. Brook/Stream */}
            <div>
              <img
                src="/Brook Water Clean.jpg"
                alt="brook, water, clean"
                className="w-full h-56 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold mb-2">How have operations improved over time?</h3>
              <p className="text-gray-700">
                Many of the treatment systems whose designs and expected treatment capabilities predated implementation of the more recent NPDES water quality standards are not equipped to provide treatment standards demanded of systems today. Today a lot of attention is being given to nutrient removal from waste streams prior to surface discharges. This nutrient group includes, but is not limited to; nitrogen, phosphorous and carbonaceous biochemical oxygen demand – 5 day (CBOD5). With that being said, the three primary options are treatment system upgrades, improved operational strategies and/or chemical programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 heading-font">
            Ready to Optimize Your Municipal Wastewater System?
          </h2>
          <p className="text-lg text-gray-600 mb-8 body-font">
            Contact our experts to learn how we can help improve your treatment efficiency and compliance.
          </p>
          <Button asChild className="primary-gold rounded-full px-8 py-3 text-lg font-medium">
            <a href="/#contact">Get Started Today</a>
          </Button>
        </div>
      </section>
    </div>
  );
} 