"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState("Customer Care");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "", company: "" });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API submission
    setSuccess(true);
    setFormData({ name: "", email: "", phone: "", message: "", company: "" });
    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Banner */}
      <section className="py-16 bg-slate-50 border-b border-slate-100 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-size-[4rem_4rem]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <h1 className="text-4xl font-black text-slate-900 font-serif">Contact & Partnerships</h1>
          <p className="text-brand-green text-sm font-extrabold uppercase tracking-widest">
            Corporate inquiries, B2B collaborations, and customer support channels
          </p>
        </div>
      </section>

      {/* Main Board */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left side: details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <h3 className="text-lg font-bold text-slate-800 font-serif">Relux HQ Address</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Relux Holidays Infotech Ltd.<br />
                  6th Floor, Cyber Plaza, Infopark Phase II,<br />
                  Kochi, Kerala, India - 682030
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <h3 className="text-lg font-bold text-slate-800 font-serif">Quick Support Details</h3>
                <table className="w-full text-xs text-slate-600">
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="py-2 font-bold uppercase text-[9px] text-slate-500">Customer Helpline</td>
                      <td className="py-2 text-slate-800 text-right">+91 1800 293 8822 (Toll Free)</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="py-2 font-bold uppercase text-[9px] text-slate-500">Support Email</td>
                      <td className="py-2 text-slate-800 text-right">support@reluxholidays.com</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-bold uppercase text-[9px] text-slate-500">Business Partnerships</td>
                      <td className="py-2 text-emerald-700 font-bold text-right">partners@reluxholidays.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="text-lg font-bold text-slate-800 font-serif">B2B Integrations</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We offer direct API integrations for hotel channel managers to sync check-ins and lock car rentals. We also contract lease agreements for property owners wishing to install fast chargers.
                </p>
              </div>

            </div>

            {/* Right side: inquiry form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-xl space-y-6">
                
                <div>
                  <h3 className="text-xl font-bold text-slate-800 font-serif">Send Us An Inquiry</h3>
                  <p className="text-xs text-slate-500 mt-1">Select your inquiry format and we will route it to the appropriate division.</p>
                </div>

                {success && (
                  <p className="p-3 bg-brand-green/10 border border-brand-green/20 text-brand-green text-sm font-bold rounded-xl">
                    ✓ Thank you! Your inquiry has been routed successfully. A representative will connect in 24 hours.
                  </p>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Inquiry selector */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">Inquiry Department</label>
                    <div className="grid grid-cols-3 gap-2">
                      {["Customer Care", "Hotel Partner", "EV Charger Lease"].map((dept) => (
                        <button
                          key={dept}
                          type="button"
                          onClick={() => setInquiryType(dept)}
                          className={`py-2 px-3 rounded-lg text-xs font-bold border transition-colors ${
                            inquiryType === dept
                              ? "bg-brand-green border-brand-green text-slate-950"
                              : "bg-white border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-50"
                          }`}
                        >
                          {dept}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Full Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-800 text-xs focus:outline-none focus:border-brand-green"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Email Address</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-800 text-xs focus:outline-none focus:border-brand-green"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-800 text-xs focus:outline-none focus:border-brand-green"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Company / Organization (Optional)</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-800 text-xs focus:outline-none focus:border-brand-green"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Message Detail</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify your inquiry details here..."
                      className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-800 text-xs focus:outline-none focus:border-brand-green"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-brand text-white font-extrabold rounded-xl text-xs hover:opacity-95 transition-opacity"
                  >
                    Submit Department Inquiry
                  </button>

                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
