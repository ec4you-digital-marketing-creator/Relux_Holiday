"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function SilverMembershipPage() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setIsJoinModalOpen(false);
      setSubmitted(false);
      setName("");
      setPhone("");
    }, 3000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800">
      
      {/* Navigation Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <span>←</span> Back to Homepage
        </Link>
      </div>

      {/* Main Split Section */}
      <section className="py-12 grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Travel Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative max-w-md w-full">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
                  alt="Relux Holidays Travel Concept"
                  className="w-full h-auto rounded-3xl shadow-xl border border-slate-100 object-cover aspect-[4/5]"
                />
                <div className="absolute -bottom-4 -right-4 bg-[#8cc63f] text-white font-extrabold px-6 py-3 rounded-2xl shadow-lg transform rotate-3">
                  10 Years Validity!
                </div>
              </div>
            </div>

            {/* Right side: Detailed Information & Pricing Table */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#8cc63f] bg-[#8cc63f]/5 border border-[#8cc63f]/25 px-3 py-1 rounded-full">
                  Tier 1 Package
                </span>
                <h1 className="text-3xl sm:text-4xl font-black text-slate-900 font-serif">
                  Silver Membership
                </h1>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                Relux Silver Memberships gives you a comfortable stay in a decent properties
                across India, and a perfect Hatchback/Compact for your comfortable travel with a 24Hrs Online
                Executive Support for Guidance. You can spend your leisure timings with a beautiful
                friends, family and surroundings with this memberships.
              </p>

              {/* Styled Table from Screenshot */}
              <div className="overflow-hidden rounded-xl border border-slate-200/80 shadow-md">
                <table className="w-full border-collapse text-left text-sm font-semibold text-white">
                  <tbody>
                    {/* Row 1: Total Nights */}
                    <tr className="bg-[#e67e22] border-b border-white/10">
                      <td className="p-4 flex items-center gap-2">
                        <span>🌙</span> Total Nights
                      </td>
                      <td className="p-4 border-l border-white/10">70 Nights</td>
                      <td className="p-4 border-l border-white/10">Rs.2,00,000</td>
                    </tr>
                    {/* Row 2: Travel Voucher */}
                    <tr className="bg-[#e67e22] border-b border-white/10">
                      <td className="p-4 flex items-center gap-2">
                        <span>🎟️</span> Travel Voucher
                      </td>
                      <td className="p-4 border-l border-white/10">2500 Kms</td>
                      <td className="p-4 border-l border-white/10">Rs.50,000</td>
                    </tr>
                    {/* Row 3: Food Voucher */}
                    <tr className="bg-[#e67e22] border-b border-white/10">
                      <td className="p-4 flex items-center gap-2">
                        <span>🍴</span> Food Voucher
                      </td>
                      <td className="p-4 border-l border-white/10">2500/Year</td>
                      <td className="p-4 border-l border-white/10">Rs.25,000</td>
                    </tr>
                    {/* Row 4: Validity */}
                    <tr className="bg-[#f5b041] border-b border-white/10 text-slate-900">
                      <td className="p-4 font-bold">Validity</td>
                      <td className="p-4 border-l border-black/10 font-bold" colSpan={2}>10 Years</td>
                    </tr>
                    {/* Row 5: Appreciation for 10 Years */}
                    <tr className="bg-[#d35400] border-b border-white/10">
                      <td className="p-4" colSpan={2}>Appreciation for 10 Years</td>
                      <td className="p-4 border-l border-white/10">1,50,000</td>
                    </tr>
                    {/* Row 6: Cost Without Membership */}
                    <tr className="bg-[#784212] border-b border-white/10">
                      <td className="p-4" colSpan={2}>Cost Without Membership</td>
                      <td className="p-4 border-l border-white/10 line-through text-slate-300">4,50,000</td>
                    </tr>
                    {/* Row 7: Our Offer with Membership */}
                    <tr className="bg-[#27ae60] text-lg font-black">
                      <td className="p-4" colSpan={2}>Our Offer with Membership</td>
                      <td className="p-4 border-l border-white/15">2,00,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* JOIN NOW Button */}
              <div className="pt-2">
                <button
                  onClick={() => setIsJoinModalOpen(true)}
                  className="px-8 py-3.5 bg-[#14b8a6] hover:bg-[#0d9488] text-white font-extrabold rounded-full transition-all duration-300 shadow-lg shadow-[#14b8a6]/25 hover:shadow-xl hover:scale-105"
                >
                  JOIN NOW
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Other Benefits Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-2xl font-black text-center text-slate-900 font-serif">
            Other Benefits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            
            <div className="flex items-start gap-3">
              <span className="text-amber-500 font-bold text-lg">✓</span>
              <p className="text-sm text-slate-700 font-medium">Upgrade at any point of time.</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-amber-500 font-bold text-lg">✓</span>
              <p className="text-sm text-slate-700 font-medium">Additional discounts available for domestic flights.</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-amber-500 font-bold text-lg">✓</span>
              <p className="text-sm text-slate-700 font-medium">
                Complimentary new year party tickets on various destinations of India until Validity period.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-amber-500 font-bold text-lg">✓</span>
              <p className="text-sm text-slate-700 font-medium">100% Transferable & Upgradeable at any point of time.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Modal Popup */}
      {isJoinModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-xs" onClick={() => setIsJoinModalOpen(false)} />
          <div className="relative w-full max-w-md bg-white rounded-2xl border border-slate-150 p-6 shadow-2xl animate-in zoom-in-95 duration-200">
            {submitted ? (
              <div className="text-center py-6 space-y-4">
                <span className="text-5xl block">🎉</span>
                <h3 className="text-xl font-bold text-emerald-950">Registration Received!</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Thank you for joining Relux Silver. Our VIP relationship officer will contact you within 2 hours to confirm your membership card delivery.
                </p>
              </div>
            ) : (
              <form onSubmit={handleJoinSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-slate-950 font-serif">Apply for Silver Membership</h3>
                <p className="text-xs text-slate-600">
                  Fill in your details below to activate your premium 10-year Silver holiday card immediately.
                </p>

                <div className="space-y-3">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="e.g. John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#14b8a6]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Mobile Number</label>
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#14b8a6]"
                      required
                    />
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-grow py-3 bg-[#14b8a6] hover:bg-[#0d9488] text-white font-extrabold rounded-xl text-xs transition-colors"
                  >
                    Submit Application
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsJoinModalOpen(false)}
                    className="px-4 py-3 border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold rounded-xl text-xs"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
