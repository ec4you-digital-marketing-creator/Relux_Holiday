"use client";

import React from "react";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";

export default function Hero() {
  const { isLoggedIn } = useAuth();



  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-white">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand-green/5 blur-[120px] pointer-events-none" />

      {/* Thin grid background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-size-[4rem_4rem] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-green/20 bg-brand-green/5 text-xs font-extrabold tracking-wider text-brand-green uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-ping" />
              The Smart Holiday Revolution
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-slate-900 font-serif leading-tight">
              One Smart Card. <br />
              <span className="text-brand-green">Infinite Luxury Stays.</span> <br />
              Free Premium Rides.
            </h1>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-medium">
              Recharge your <span className="text-slate-900 font-bold">Relux RF Card</span> to pay for EV charging sessions, book stays at our partner 5-star resorts, and instantly unlock a <span className="text-amber-600 font-bold">complimentary 1-day Luxury Car rental</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/rf-card"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-brand text-white font-extrabold rounded-xl shadow-lg shadow-brand-blue/20 hover:shadow-brand-green/20 hover:opacity-95 transition-all text-base text-center"
              >
                {isLoggedIn ? "Manage My RF Card" : "Activate Your RF Card"}
              </Link>
              <Link
                href="/hotels"
                className="w-full sm:w-auto px-8 py-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-900 font-bold rounded-xl transition-all text-base text-center"
              >
                Explore Partner Hotels
              </Link>
            </div>

            {/* Microstats banner */}
            {/* <div className="grid grid-cols-3 gap-6 pt-10 border-t border-slate-100 max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-amber-600 font-serif">500+</p>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">EV Charging Stations</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-brand-green font-serif">120+</p>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">Luxury Hotels</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-brand-blue font-serif">15+</p>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">Premium Fleet Cars</p>
              </div>
            </div> */}
          </div>

          {/* RF Card Image */}
          <div className="lg:col-span-5 flex items-center justify-center overflow-visible">
            <img
              src="/Id.png"
              alt="Relux Holidays RF Card"
              className="w-[130%] max-w-none object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
