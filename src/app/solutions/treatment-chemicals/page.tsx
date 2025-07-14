import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";

export default function TreatmentChemicalsPage() {
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
                    <a href="/solutions/municipal-wastewater" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Municipal Wastewater
                    </a>
                    <a href="/solutions/treatment-chemicals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 bg-yellow-50">
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
                        <a href="/solutions/municipal-wastewater" className="block text-gray-600 hover:text-gray-900">
                          Municipal Wastewater
                        </a>
                        <a href="/solutions/treatment-chemicals" className="block text-yellow-600 hover:text-gray-900 font-medium">
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
          alt="Treatment Chemicals"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold heading-font">
            TREATMENT<br />CHEMICALS
          </h1>
          <p className="text-xl mt-4 font-medium">The right solution for every problem</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center heading-font">
            We deploy these types of chemicals:
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 heading-font">
                  Coagulants
                </h3>
                <p className="text-gray-600 body-font leading-relaxed">
                  Chemicals directly or indirectly used to begin allowing stuff in water that would not come together under normal circumstances. Their use depends on how acidic or basic the water is, the types of stuff to be removed, temperature, etc.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 heading-font">
                  Bio-augmentation
                </h3>
                <p className="text-gray-600 body-font leading-relaxed">
                  This is used mostly to help biological processes to begin, be more complete or to help processes become more economical. The microbes that make up the bio-augmentation aids are typically those same microbes that are normally occurring in nature, these microbes are just more concentrated.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 heading-font">
                  Flocculants
                </h3>
                <p className="text-gray-600 body-font leading-relaxed">
                  Normally, once coagulants begin bringing stuff in the water together, flocculants are added to make those particles both bigger and stronger to make their removal easier. One exception to this is dewatering sludge. Often times sludge is dewatered with flocculants only, though the use of a coagulant may result in less sludge particles returned to the treatment system and/or drier sludge with less water in it.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 heading-font">
                  pH Adjustment
                </h3>
                <p className="text-gray-600 body-font leading-relaxed">
                  Many times chemicals added to water to treat or remove pollutants cause the pH to either decrease or increase to the point where it has a negative effect on the receiving waters. To help fix this problem, chemicals are added to increase or decrease the pH as needed.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 heading-font">
                  General and Industrial Treatment
                </h3>
                <p className="text-gray-600 body-font leading-relaxed">
                  These are somewhat general and are used to fix some very specific issues that may help some of the other treatment chemical groups.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 heading-font">
                  Final Effluent Disinfection and De-chlorination
                </h3>
                <p className="text-gray-600 body-font leading-relaxed">
                  These chemicals are added to inactivate many of the pathogenic bacteria. Once disinfection is completed, de-chlorination chemicals are added to remove enough of the excess chlorine to make the water less hazardous to the things living in the receiving waters.
                </p>
              </div>
            </div>
          </div>

          {/* Images Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Image
              src="/Lake Reeds Sunset.jpg"
              alt="lake, reeds, sunset"
              width={500}
              height={350}
              className="mx-auto"
            />
            <Image
              src="/Nature River Lotus.jpg"
              alt="nature, river, lotus"
              width={500}
              height={350}
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Full List of Chemicals Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center heading-font">
            Full List of Chemicals
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* Coagulants */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 heading-font">
                Coagulants
              </h3>
              <ul className="text-gray-600 body-font leading-relaxed space-y-2">
                <li>• PAC (poly-aluminum chloride)</li>
                <li>• Ferric chloride</li>
                <li>• Ferric Sulfate</li>
                <li>• Sodium Hydroxide</li>
                <li>• Magnesium Hydroxide</li>
                <li>• Polyamine</li>
                <li>• Aluminum Sulfate</li>
                <li>• Aluminum Chloride</li>
                <li>• Sodium Aluminate</li>
                <li>• Sulfuric Acid (Aid)</li>
              </ul>
            </div>

            {/* General and Industrial Treatment */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 heading-font">
                General and Industrial Treatment
              </h3>
              <ul className="text-gray-600 body-font leading-relaxed space-y-2">
                <li>• Solvents</li>
                <li>• Surfactants</li>
                <li>• Phosphates</li>
                <li>• Activated Carbon</li>
                <li>• Calcium Chloride</li>
                <li>• Hydrogen Peroxide</li>
                <li>• Odor Control Agents</li>
                <li>• Sludge Conditioners</li>
                <li>• Diatomaceous Earth</li>
              </ul>
            </div>

            {/* pH Adjustment */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 heading-font">
                pH Adjustment
              </h3>
              <ul className="text-gray-600 body-font leading-relaxed space-y-2">
                <li>• Lime</li>
                <li>• Soda Ash</li>
                <li>• Acetic Acid</li>
                <li>• Citric Acid</li>
                <li>• Nitric Acid</li>
                <li>• Phosphoric Acid</li>
                <li>• Hydrochloric Acid</li>
                <li>• Magnesium Sulfate</li>
                <li>• Calcium Hydroxide</li>
                <li>• Calcium Carbonate</li>
                <li>• Sodium Bicarbonate</li>
                <li>• Calcium Oxide (Quicklime)</li>
                <li>• Sodium Hydroxide (Caustic)</li>
                <li>• Potash - Potassium Hydroxide (Dry)</li>
                <li>• Potash - Potassium Hydroxide (Liquid)</li>
              </ul>
            </div>

            {/* Flocculants */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 heading-font">
                Flocculants
              </h3>
              <ul className="text-gray-600 body-font leading-relaxed space-y-2">
                <li>• Dry and Emulsion Cationic Polymers</li>
                <li>• Dry and Emulsion Anionic Polymers</li>
                <li>• Dry and Emulsion Nonionic Polymers</li>
                <li>• Monomers</li>
                <li>• DADMAC</li>
              </ul>
            </div>

            {/* Bio-augmentation */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 heading-font">
                Bio-augmentation
              </h3>
              <ul className="text-gray-600 body-font leading-relaxed space-y-2">
                <li>• Enzymes</li>
                <li>• Treatment System (Nitrifiers)</li>
                <li>• Methanol (Aid)</li>
                <li>• Aerobic (Sludge Reduction and Stabilization)</li>
                <li>• Anaerobic Food Supplement (Sludge Reduction and Stabilization)</li>
                <li>• Collection System (Degreaser - Control Grease Before Treatment Plant)</li>
                <li>• Anaerobic Micronutrients</li>
              </ul>
            </div>

            {/* Final Effluent Disinfection and De-chlorination */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 heading-font">
                Final Effluent Disinfection and De-chlorination
              </h3>
              <ul className="text-gray-600 body-font leading-relaxed space-y-2">
                <li>• Defoamer (Aid)</li>
                <li>• Sodium Bisulfite</li>
                <li>• Sodium Hypochlorite (Bleach)</li>
                <li>• HTH (Granular - Calcium Hypochlorite)</li>
                <li>• De-Chlor Tablets (Tablet - Calcium Bisulfite)</li>
                <li>• Chlorine Tablets (Tablet - Calcium Hypochlorite)</li>
              </ul>
            </div>

          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 heading-font">
            Need Custom Chemical Solutions?
          </h2>
          <p className="text-lg text-gray-600 mb-8 body-font">
            Our team of experts can formulate specialized chemicals tailored to your specific treatment requirements.
          </p>
          <Button asChild className="primary-gold rounded-full px-8 py-3 text-lg font-medium">
            <a href="/#contact">Get a Custom Quote</a>
          </Button>
        </div>
      </section>
    </div>
  );
} 