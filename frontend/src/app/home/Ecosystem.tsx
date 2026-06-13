import React from "react";
import Link from "next/link";

export default function Ecosystem() {
  const steps = [
    {
      step: "01",
      title: "Recharge RF Card",
      description:
        "Load funds onto your physical or virtual Relux RF Card easily via phone, credit card, or UPI. Get 5% cashback points.",
      icon: (
        <svg className="h-6 w-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "border-slate-100 hover:border-brand-green/40 hover:shadow-lg hover:shadow-brand-green/5",
    },
    {
      step: "02",
      title: "Pay For EV Charging",
      description:
        "Tap and charge at any of our 500+ hyper-fast charging ports nationwide. Fast charging speeds from 50kW to 350kW.",
      icon: (
        <svg className="h-6 w-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "border-slate-100 hover:border-brand-blue/40 hover:shadow-lg hover:shadow-brand-blue/5",
    },
    {
      step: "03",
      title: "Book Luxury Hotel Stays",
      description:
        "Use your card balance to book luxury suites at partner resorts (Goa, Kovalam, Ooty, Munnar) with 10% holiday rewards.",
      icon: (
        <svg className="h-6 w-6 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: "border-slate-100 hover:border-brand-yellow/40 hover:shadow-lg hover:shadow-brand-yellow/5",
    },
    {
      step: "04",
      title: "Get Free Luxury Car",
      description:
        "Every hotel stay booked triggers a free 1-day rental of a top-tier premium vehicle (Tesla, Porsche, Audi) on check-in.",
      icon: (
        <svg className="h-6 w-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1M18 16h1a1 1 0 001-1v-5a1 1 0 00-1-1h-2L15 6h-3" />
        </svg>
      ),
      color: "border-slate-100 hover:border-brand-red/40 hover:shadow-lg hover:shadow-brand-red/5",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-brand-green">
            Our Business Model
          </h2>
          <p className="text-3xl sm:text-4xl font-black text-slate-900 font-serif">
            How the Relux Holidays Ecosystem Works
          </p>
          <p className="text-slate-600 text-sm font-medium">
            We bridge clean transportation infrastructure and premium hospitality. The Relux RF Card operates as a single gateway to both charging and travel.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => (
            <div
              key={item.step}
              className={`p-6 rounded-2xl bg-white border transition-all duration-300 relative group overflow-hidden ${item.color}`}
            >
              <div className="absolute top-4 right-4 text-slate-100 font-black text-4xl leading-none select-none group-hover:text-slate-200 transition-colors">
                {item.step}
              </div>
              
              <div className="h-12 w-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Callout Info */}
        <div className="mt-16 p-8 rounded-2xl border border-brand-yellow/30 bg-brand-yellow/5 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2 text-center lg:text-left">
            <h4 className="text-lg font-bold text-amber-800 flex items-center justify-center lg:justify-start gap-2">
              <span>🎁</span> Special Launch Privilege
            </h4>
            <p className="text-slate-700 text-sm max-w-3xl">
              Activate your RF Card today and receive an immediate starting credit of <strong className="text-slate-900">₹15,000</strong> pre-loaded into your account. Book any partner hotel instantly to experience the complimentary 1-day luxury car benefit!
            </p>
          </div>
          <Link
            href="/rf-card"
            className="px-6 py-3 rounded-xl bg-brand-yellow hover:bg-amber-500 text-slate-900 font-extrabold text-sm transition-colors whitespace-nowrap"
          >
            Claim ₹15,000 Mock Balance
          </Link>
        </div>

      </div>
    </section>
  );
}
