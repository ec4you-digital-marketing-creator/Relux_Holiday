"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is the Relux RF Card?",
    answer: "The Relux RF Card is a secure, RFID-enabled smart passport that bridges green energy charging infrastructure and luxury hospitality. It serves as your physical key to tap-and-charge at any Relux EV station and pay for curated hotel packages directly.",
  },
  {
    question: "How do I recharge my RF Card?",
    answer: "You can recharge your RF Card instantly using our online portal. Log in with your phone number, navigate to the dashboard, and top up using UPI, NetBanking, or Credit/Debit Cards. A physical card is shipped to your registration address, but you can also use your card balance and NFC on your smartphone.",
  },
  {
    question: "Can I use the card balance for both charging and bookings?",
    answer: "Absolutely! The balance is fully shared. You can use it to pay ₹450 for a charging session on a highway terminal, and the remaining balance can be used to book a luxury weekend resort stay. Every transaction accumulates loyalty points.",
  },
  {
    question: "How does the complimentary 1-day luxury car rental work?",
    answer: "Whenever you book a partner hotel room through the Relux portal using your RF Card balance, a complimentary luxury electric vehicle rental is unlocked. You select your model (Tesla, Porsche, Audi) from the fleet list. The vehicle will be waiting for you fully charged at the hotel lobby upon check-in, ready to drive for 24 hours.",
  },
  {
    question: "Are there any hidden charges or deposit fees for the free luxury car?",
    answer: "No. The 1-day car rental is 100% free of charge as part of our exclusive Relux package. Third-party insurance and basic charging are fully covered. You only need a valid driver's license matching the registered guest name to receive the keys.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-brand-yellow">
            Customer Support
          </h2>
          <p className="text-3xl sm:text-4xl font-black text-slate-900 font-serif">
            Frequently Asked Questions
          </p>
          <p className="text-slate-600 text-sm font-medium">
            Everything you need to know about the Relux RF Card, stay partnerships, and vehicle fleet rules.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-800 hover:text-brand-green transition-colors"
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`h-5 w-5 text-slate-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-brand-green" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-60 border-t border-slate-100 p-5 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
