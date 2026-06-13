"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import Logo from "./Logo";
import AuthModal from "./AuthModal";

export default function Navbar() {
  const pathname = usePathname();
  const { isLoggedIn, userPhone, rfCard, logout } = useAuth();
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Relux RF Card", href: "/rf-card" },
    { name: "Hotels", href: "/hotels" },
    { name: "Luxury Fleet", href: "/cars" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/85 backdrop-blur-md shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-4">
            
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Logo className="h-12 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
                      isActive
                        ? "text-brand-green bg-slate-50"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Auth / Card Status Area */}
            <div className="hidden sm:flex items-center gap-4">
              {isLoggedIn && rfCard ? (
                /* Authenticated User Status */
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-brand-green/40 transition-colors text-left"
                  >
                    {/* Tiny User Icon */}
                    <div className="h-8 w-8 rounded-full bg-gradient-brand flex items-center justify-center text-white text-xs font-black">
                      {userPhone ? userPhone.substring(userPhone.length - 2) : "G"}
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-semibold leading-none">RF Card Linked</p>
                      <p className="text-sm text-amber-600 font-extrabold mt-0.5 leading-none">
                        ₹{rfCard.balance.toLocaleString("en-IN")}
                      </p>
                    </div>
                    {/* Arrow */}
                    <svg className={`h-4 w-4 text-slate-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-64 rounded-xl border border-slate-200 bg-white p-4 shadow-xl">
                      <div className="border-b border-slate-100 pb-3 mb-3">
                        <p className="text-xs text-slate-500 font-semibold">Logged Phone</p>
                        <p className="text-sm font-bold text-slate-800 mt-0.5">+91 {userPhone}</p>
                        <p className="text-xs text-slate-500 font-semibold mt-2">Card Code</p>
                        <p className="text-xs font-mono text-brand-green mt-0.5 tracking-wider">{rfCard.cardNumber}</p>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <Link
                          href="/rf-card"
                          onClick={() => setIsDropdownOpen(false)}
                          className="flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                        >
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                          </svg>
                          RF Card Portal
                        </Link>
                        <button
                          onClick={() => {
                            setIsDropdownOpen(false);
                            logout();
                          }}
                          className="flex items-center gap-2 w-full px-3 py-2 text-sm font-semibold rounded-lg text-brand-red hover:bg-brand-red/5 transition-colors text-left"
                        >
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                          </svg>
                          Logout Session
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* Unauthenticated Login Trigger */
                <button
                  onClick={() => setIsAuthOpen(true)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-brand text-white text-sm font-bold shadow-lg shadow-brand-blue/10 hover:opacity-95 transition-opacity"
                >
                  Customer Login
                </button>
              )}
            </div>

            {/* Mobile hamburger menu */}
            <div className="flex xl:hidden items-center gap-3">
              {isLoggedIn && rfCard && (
                <div className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-bold text-amber-600">
                  ₹{rfCard.balance.toLocaleString("en-IN")}
                </div>
              )}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-500 hover:text-slate-950 rounded-lg hover:bg-slate-50"
              >
                {isMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="xl:hidden border-t border-slate-100 bg-white p-4 space-y-2 animate-in slide-in-from-top duration-200 shadow-lg">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-2 text-sm font-semibold rounded-lg ${
                    isActive
                      ? "text-brand-green bg-slate-50"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            <div className="pt-4 border-t border-slate-100 mt-2">
              {isLoggedIn ? (
                <div className="space-y-2">
                  <div className="px-4 text-xs text-slate-500 font-semibold">
                    Linked Phone: +91 {userPhone}
                  </div>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      logout();
                    }}
                    className="w-full text-left px-4 py-2 text-sm font-semibold rounded-lg text-brand-red hover:bg-brand-red/5"
                  >
                    Logout Session
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsAuthOpen(true);
                  }}
                  className="w-full text-center py-2.5 bg-gradient-brand text-white text-sm font-bold rounded-lg"
                >
                  Customer Login
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Shared Auth Modal */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
}
