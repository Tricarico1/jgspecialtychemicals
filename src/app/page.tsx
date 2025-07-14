"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, MapPin, Mail, Phone, Menu } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [submitting, setSubmitting] = useState(false);

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
                <button className="flex items-center text-gray-700 hover:text-gray-900 font-medium">
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
                <a href="#contact">Contact Us</a>
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
                        <a href="/solutions/treatment-chemicals" className="block text-gray-600 hover:text-gray-900">
                          Treatment Chemicals
                        </a>
                        <a href="/solutions/pump-station-maintenance" className="block text-gray-600 hover:text-gray-900">
                          Pump Station Maintenance
                        </a>
                      </div>
                    </div>
                    <Button asChild className="primary-gold rounded-full px-6 py-2 font-medium w-full">
                      <a href="#contact">Contact Us</a>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="https://ext.same-assets.com/1812289277/1170246138.jpeg"
          alt="Industrial Chemical Facility"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <p className="text-xl mb-4 heading-font font-light">
            Excellence in Chemistry, Affordable by Design
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 heading-font tracking-tight">
            J&G SPECIALTY<br />CHEMICALS
          </h1>
          <Button asChild className="primary-gold rounded-full px-8 py-3 text-lg font-medium">
            <a href="#services">Learn More</a>
          </Button>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gray-600 text-lg mb-4 body-font">Our Contributions</p>
            <h2 className="text-4xl font-bold text-gray-900 heading-font">Services we offer!</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Municipal/Industrial Wastewater */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <Image
                  src="https://ext.same-assets.com/1812289277/2006683017.jpeg"
                  alt="Municipal/Industrial Wastewater - Water Lily Pads"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 heading-font">
                  Municipal/Industrial Wastewater
                </h3>
                <p className="text-gray-600 mb-4 body-font">
                  We cater to the following industries:
                </p>
                <ul className="text-gray-600 mb-4 body-font space-y-1">
                  <li>1. Beverage and Food</li>
                  <li>2. Industrial and Municipal Wastewater</li>
                  <li>3. Meat and Poultry</li>
                </ul>
                <p className="text-gray-600 text-sm body-font">
                  Similar to the changes in the regulatory environment that occurred between the
                  end of WWII and the institution of the Clean Water Act, we are now seeing new
                  NPDES permit requirements that are much restrictive when compared to those at
                  the onset of this program.
                </p>
              </CardContent>
            </Card>

            {/* Treatment Chemicals */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video relative overflow-hidden rounded-t-lg flex items-center justify-center bg-gray-100">
                <Image
                  src="https://ext.same-assets.com/1812289277/2802019628.png"
                  alt="Treatment Chemicals"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 heading-font">
                  Treatment Chemicals
                </h3>
                <p className="text-gray-600 mb-4 body-font">
                  We have an assortment of chemicals available for use: Coagulants,
                  Bio-augmentation, Flocculants, pH Adjustment, General and Industrial
                  Treatment, and Final Effluent disinfection and de-chloriation.
                </p>
                <Button className="primary-gold rounded-full px-6 py-2 text-sm">
                  Full list of Chemicals
                </Button>
              </CardContent>
            </Card>

            {/* Pump Station Maintenance */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <Image
                  src="https://ext.same-assets.com/1812289277/1899648351.jpeg"
                  alt="Pump Station Maintenance"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 heading-font">
                  Pump Station Maintenance/ Odor Control
                </h3>
                <p className="text-gray-600 text-sm body-font">
                  Utility operators often believe grease and odor issues at pump stations are
                  unfixable. However, grease blockages can be addressed with de-greasing
                  chemicals or biological treatments, and larger pipes can accumulate grease
                  due to slower water flow. Odor issues can be resolved using deodorants or
                  oxygen sources like hydrogen peroxide, though increased flow volumes might
                  naturally mitigate these problems.
                </p>
              </CardContent>
            </Card>
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
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 heading-font">FIND US</h3>
                  <p className="text-gray-600 body-font">
                    4300 Danor Drive, Reading, Pennsylvania 19605, United States
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 heading-font">SAY HI</h3>
                  <p className="text-gray-600 body-font">
                    jgspecialtychemicals@comcast.net
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 heading-font">CALL US</h3>
                  <p className="text-gray-600 body-font">
                    610-301-6241
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://ext.same-assets.com/1812289277/2526197897.png"
                alt="Map location"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold heading-font">CONTACT US</h2>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4"></div>
          </div>

          <form className="space-y-6" onSubmit={async (e) => {
            e.preventDefault();
            setStatus(null);
            setSubmitting(true);
            try {
              const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, subject, message }),
              });
              if (res.ok) {
                setStatus("success");
                setName("");
                setEmail("");
                setSubject("");
                setMessage("");
              } else {
                setStatus("error");
              }
            } catch {
              setStatus("error");
            }
            setSubmitting(false);
          }}>
            <div>
              <label className="block text-sm font-medium mb-2 body-font">
                Your name
              </label>
              <Input
                type="text"
                className="w-full bg-white border-0 rounded-none h-12"
                placeholder=""
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 body-font">
                Your email
              </label>
              <Input
                type="email"
                className="w-full bg-white border-0 rounded-none h-12"
                placeholder=""
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 body-font">
                Subject
              </label>
              <Input
                type="text"
                className="w-full bg-white border-0 rounded-none h-12"
                placeholder=""
                value={subject}
                onChange={e => setSubject(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 body-font">
                Your message (optional)
              </label>
              <Textarea
                className="w-full bg-white border-0 rounded-none min-h-32"
                placeholder=""
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </div>

            {status === "success" && (
              <div className="text-green-500 font-medium">Message sent successfully!</div>
            )}
            {status === "error" && (
              <div className="text-red-500 font-medium">Failed to send message. Please try again.</div>
            )}

            <div className="text-left">
              <Button className="primary-gold rounded-full px-8 py-3 font-medium" type="submit" disabled={submitting}>
                {submitting ? "Sending..." : "Submit"}
              </Button>
            </div>
          </form>
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
