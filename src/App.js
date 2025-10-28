import React from 'react';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-osisBlue to-blue-500 flex items-center justify-center text-white font-bold">OS</div>
          <div>
            <h1 className="text-lg font-semibold">OSIS</h1>
            <p className="text-xs text-gray-500">OverSeas International Solutions</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#how" className="hover:underline">How it works</a>
          <a href="#pricing" className="hover:underline">Packages</a>
          <a href="#contact" className="px-4 py-2 rounded-md bg-gradient-to-r from-osisGold to-yellow-400 shadow-sm font-medium">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="text-4xl md:text-5xl font-extrabold leading-tight text-osisBlue">
              Get your shipments cleared — fast, transparent, and on budget.
            </motion.h2>
            <p className="mt-4 text-lg text-gray-600">Customs brokerage, documentation, and freight solutions tailored for importers who want predictable costs and zero surprises.</p>

            <div className="mt-8 flex gap-3">
              <a href="#contact" className="inline-flex items-center gap-3 px-5 py-3 rounded-md shadow-md bg-osisBlue text-white font-semibold">Get a free quote</a>
              <a href="#how" className="inline-flex items-center gap-2 px-4 py-3 rounded-md border">How it works</a>
            </div>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
              <li>✅ Instant cost estimates</li>
              <li>✅ Customs documents handled</li>
              <li>✅ Clearance within hours</li>
              <li>✅ Dedicated account manager</li>
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg overflow-hidden flex items-center justify-center">
              <img alt="logistics" src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" className="object-cover w-full h-full opacity-95"/>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold text-osisBlue">Services</h3>
        <p className="mt-2 text-gray-600">Full-stack customs, shipping and trade solutions — pick what you need.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {title: 'Customs clearance', desc: 'Brokerage, tariff classification, HS code checks, duty optimization.'},
            {title: 'Shipping & freight', desc: 'Sea, air and courier — door-to-door options and tracking.'},
            {title: 'Documentation & compliance', desc: 'Commercial invoices, certificates of origin, import permits.'}
          ].map((s)=> (
            <div key={s.title} className="p-6 bg-white rounded-xl shadow-sm">
              <h4 className="font-semibold text-lg text-osisBlue">{s.title}</h4>
              <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
              <ul className="mt-4 text-sm text-gray-600 space-y-1">
                <li>• Expert support</li>
                <li>• Fast processing</li>
                <li>• Clear pricing</li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-gradient-to-b from-white to-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-osisBlue">How it works</h3>
          <p className="mt-2 text-gray-600">Simple 3-step process so you always know where your shipment stands.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl shadow">
              <div className="text-sm font-semibold">1. Get a quote</div>
              <p className="mt-2 text-gray-600 text-sm">Enter shipment details or send docs — we’ll provide an estimated cost.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <div className="text-sm font-semibold">2. We arrange transport</div>
              <p className="mt-2 text-gray-600 text-sm">Booking, paperwork, and carrier coordination handled end-to-end.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <div className="text-sm font-semibold">3. Clear & deliver</div>
              <p className="mt-2 text-gray-600 text-sm">Customs cleared quickly and cargo delivered to your door.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold text-osisBlue">Packages</h3>
        <p className="mt-2 text-gray-600">Transparent pricing for businesses of every size.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <div className="font-semibold">Starter</div>
            <div className="mt-2 text-3xl font-bold">$49</div>
            <p className="mt-2 text-sm text-gray-600">Per shipment — basic customs clearance and documentation.</p>
            <ul className="mt-4 text-sm text-gray-600 space-y-1">
              <li>• Customs processing</li>
              <li>• Basic support</li>
            </ul>
            <a href="#contact" className="mt-4 inline-block px-4 py-2 rounded-md border">Choose</a>
          </div>

          <div className="p-6 bg-gradient-to-r from-osisBlue to-blue-500 text-white rounded-xl shadow-lg transform scale-100">
            <div className="font-semibold">Business</div>
            <div className="mt-2 text-3xl font-bold">$199</div>
            <p className="mt-2 text-sm">Per month — priority handling + account manager.</p>
            <ul className="mt-4 text-sm space-y-1">
              <li>• Priority customs</li>
              <li>• Account manager</li>
            </ul>
            <a href="#contact" className="mt-4 inline-block px-4 py-2 rounded-md bg-osisGold text-osisBlue font-semibold">Get it</a>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm">
            <div className="font-semibold">Enterprise</div>
            <div className="mt-2 text-3xl font-bold">Custom</div>
            <p className="mt-2 text-sm text-gray-600">Volume pricing, SLAs, and integrations.</p>
            <ul className="mt-4 text-sm text-gray-600 space-y-1">
              <li>• Custom SLAs</li>
              <li>• API integrations</li>
            </ul>
            <a href="#contact" className="mt-4 inline-block px-4 py-2 rounded-md border">Contact sales</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold text-osisBlue">Get a quote</h3>
        <p className="mt-2 text-gray-600">Send shipment details and we’ll reply within one business day.</p>

        <form action="#" method="post" className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="name" required placeholder="Full name" className="p-3 rounded-md border"/>
          <input name="company" placeholder="Company (optional)" className="p-3 rounded-md border"/>
          <input name="email" type="email" required placeholder="Email" className="p-3 rounded-md border"/>
          <input name="phone" placeholder="Phone" className="p-3 rounded-md border"/>
          <textarea name="message" placeholder="Describe shipment (inc. incoterm, weight, value)" className="md:col-span-2 p-3 rounded-md border" rows={5}/>
          <button type="submit" className="md:col-span-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-osisBlue text-white font-semibold">Send request</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-bold text-osisGold">OSIS</div>
            <div className="text-sm text-gray-400">Customs, shipping & trade solutions</div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm hover:underline">Privacy</a>
            <a href="#" className="text-sm hover:underline">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
