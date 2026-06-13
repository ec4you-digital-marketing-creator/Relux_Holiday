import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Header */}
      <section className="relative py-20 border-b border-slate-100 bg-slate-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-size-[4rem_4rem]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 font-serif">
            About Relux Holidays
          </h1>
          <p className="text-brand-green text-sm font-extrabold uppercase tracking-widest">
            Bridging Green Energy and Luxury Leisure
          </p>
          <div className="h-1 w-20 bg-brand-green mx-auto mt-2" />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Pitch */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-6">
              <h2 className="text-2xl font-bold text-slate-800 font-serif">
                A Visionary Travel Paradigm
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Relux Holidays was founded with a singular, ambitious objective: to prove that premium luxury travel and environmental sustainability do not have to be mutually exclusive. 
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                By integrating a proprietary **EV Smart Charging Grid** with a curated network of **5-star boutique resorts**, we created a unified travel ecosystem. Our customers travel in style, power their journey with 100% green electrons, and stay at the finest destinations in India—all powered by a single **Relux RF Card**.
              </p>
            </div>
            <div className="md:col-span-5 p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 text-center">
              <span className="text-5xl">🌱</span>
              <h3 className="text-lg font-bold text-slate-800">Our ESG Goal</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                To offset 10,000 metric tons of carbon emissions by 2028 through 100% solar-assisted fast charging networks and certified carbon-neutral luxury hotel operations.
              </p>
            </div>
          </div>

          {/* Business Model Details */}
          <div className="space-y-6 border-t border-slate-100 pt-16">
            <h2 className="text-2xl font-bold text-slate-900 font-serif text-center">
              Our Core Pillars
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
                <h3 className="text-base font-extrabold text-brand-green uppercase tracking-wide">1. Integrated Smart Utility</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The RF Card operates on a custom micro-ledger, allowing instantaneous secure payments at charging docks and hotel front desks. No credit cards or cash needed during the tour.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
                <h3 className="text-base font-extrabold text-brand-blue uppercase tracking-wide">2. Certified Green Partners</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  All 120+ hotels in our list undergo rigorous checks for waste recycling, energy sourcing, and local employment support. Luxury hospitality that respects local environments.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
                <h3 className="text-base font-extrabold text-amber-600 uppercase tracking-wide">3. Carbon-Free Transit</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Providing complimentary luxury electric cars on check-in encourages guests to explore holiday locations locally without contributing to local urban smog or emissions.
                </p>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="p-8 rounded-2xl bg-gradient-brand text-center text-white space-y-4 shadow-xl shadow-brand-blue/15">
            <h2 className="text-2xl font-bold font-serif">Are You a Hotel Owner or EV Investor?</h2>
            <p className="text-sm text-slate-100 max-w-xl mx-auto">
              Partner with Relux Holidays. List your resort in our travel ledger or co-invest in expanding our fast charging grid across national highway corridors.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-white text-slate-950 font-black rounded-xl text-sm hover:bg-slate-100 transition-colors"
              >
                Get In Touch / Partner With Us
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
