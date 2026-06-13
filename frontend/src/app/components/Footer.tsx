"use client";

import React from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50 pt-16 pb-8 text-slate-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Logo & Info column */}
          <div className="space-y-4">
            <Logo className="h-10 w-auto" />
            <p className="text-sm text-slate-500 max-w-xs mt-4">
              Pioneering the green holiday ecosystem. One unified card for premium EV charging networks and ultra-luxury stays.
            </p>
            <div className="text-xs text-slate-600 mt-2">
              © {new Date().getFullYear()} Relux Holidays. All rights reserved.
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">
              Explore Relux
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-brand-green transition-colors">
                  Home Landing
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-green transition-colors">
                  Corporate About
                </Link>
              </li>
              <li>
                <Link href="/rf-card" className="hover:text-brand-green transition-colors">
                  RF Card Portal
                </Link>
              </li>
              <li>
                <Link href="/hotels" className="hover:text-brand-green transition-colors">
                  Luxury Partner Stays
                </Link>
              </li>
            </ul>
          </div>

          {/* Technology & Cars Column */}
          <div>
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">
              Services & Fleet
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/charging" className="hover:text-brand-green transition-colors">
                  EV Charging Locator
                </Link>
              </li>
              <li>
                <Link href="/cars" className="hover:text-brand-green transition-colors">
                  Luxury Rental Fleet
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-green transition-colors">
                  Business Partnerships
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-brand-green transition-colors">
                  Support & Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">
              Subscribe to Updates
            </h3>
            <p className="text-sm text-slate-500">
              Get notified of new luxury resorts, charging hubs, and fleet upgrades.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-2 mt-2"
            >
              <input
                type="email"
                placeholder="Business email"
                className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-green/60 text-sm"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-brand text-white font-bold rounded-lg text-sm hover:opacity-90 transition-opacity"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Corporate bottom info */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#" className="hover:text-slate-800">Privacy Policy</a>
            <a href="#" className="hover:text-slate-800">Terms of Use</a>
            <a href="#" className="hover:text-slate-800">Card User Agreement</a>
            <a href="#" className="hover:text-slate-800">EV Station Terms</a>
          </div>
          <div>
            Headquarters: Relux Tech Park, Kochi, Kerala, India
          </div>
        </div>

      </div>
    </footer>
  );
}
