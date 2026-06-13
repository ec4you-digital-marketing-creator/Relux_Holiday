"use client";

import React from "react";
import Link from "next/link";

interface PlanCardProps {
  name: string;
  price: string;
  emi: string;
  badgeSrc: string;
  headerColorClass: string;
  titleColorClass: string;
  buttonClass: string;
  linkHref: string;
}

const PlanCard: React.FC<PlanCardProps> = ({
  name,
  price,
  emi,
  badgeSrc,
  headerColorClass,
  titleColorClass,
  buttonClass,
  linkHref,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100/80 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full relative group">
      {/* Top Banner */}
      <div className={`h-28 w-full ${headerColorClass} transition-colors duration-300`} />

      {/* Overlapping badge circle */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 h-32 w-32 rounded-full bg-white shadow-md flex items-center justify-center p-1.5 z-10 border border-slate-100 group-hover:scale-105 transition-transform duration-300">
        <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-50 flex items-center justify-center">
          <img
            src={badgeSrc}
            alt={`${name} Badge`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Card Content */}
      <div className="pt-20 pb-8 px-6 flex flex-col items-center text-center flex-grow space-y-5 relative">
        {/* Subtle grid background overlay inside card for premium look */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000002_1px,transparent_1px),linear-gradient(to_bottom,#00000002_1px,transparent_1px)] bg-size-[2rem_2rem] pointer-events-none rounded-b-2xl" />

        <div className="space-y-1 relative z-10">
          <h3 className={`text-2xl font-extrabold uppercase tracking-wider ${titleColorClass}`}>
            {name}
          </h3>
          <p className="text-3xl font-black text-slate-800 tracking-tight font-serif mt-1">
            {price}
          </p>
        </div>

        <div className="space-y-1 relative z-10 py-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            EMI Starts from
          </p>
          <p className="text-2xl font-black text-cyan-500 tracking-wide">
            {emi}
          </p>
        </div>

        <div className="w-full pt-4 mt-auto relative z-10">
          <Link
            href={linkHref}
            className={`block w-full py-3.5 px-6 rounded-full font-bold text-center transition-all duration-300 shadow-md ${buttonClass}`}
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function MembershipPlans() {
  const plans = [
    {
      name: "SILVER",
      price: "₹ 2,00,000",
      emi: "₹5,000",
      badgeSrc: "/silver_badge.png",
      headerColorClass: "bg-[#8cc63f]", // bright lime-green
      titleColorClass: "text-[#14b8a6]", // teal/cyan text
      buttonClass: "bg-[#14b8a6] hover:bg-[#0d9488] text-white hover:shadow-[#14b8a6]/25",
      linkHref: "/membership/silver",
    },
    {
      name: "Gold",
      price: "₹ 4,00,000",
      emi: "₹10,000",
      badgeSrc: "/gold_badge.png",
      headerColorClass: "bg-[#e75129]", // reddish-orange
      titleColorClass: "text-slate-800", // dark-gray text
      buttonClass: "bg-slate-800 hover:bg-slate-900 text-white hover:shadow-slate-800/25",
      linkHref: "/membership/gold",
    },
    {
      name: "Platinum",
      price: "₹ 8,00,000",
      emi: "₹20,000",
      badgeSrc: "/platinum_badge.png",
      headerColorClass: "bg-[#fbb03b]", // orange/yellow
      titleColorClass: "text-slate-800", // dark-gray text
      buttonClass: "bg-slate-800 hover:bg-slate-900 text-white hover:shadow-slate-800/25",
      linkHref: "/membership/platinum",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      {/* Background glowing decorations */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-brand-green/5 blur-[120px] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-green/20 bg-brand-green/5 text-xs font-extrabold tracking-wider text-brand-green uppercase">
            Exclusive Packages
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-serif leading-tight">
            Relux Premium Memberships
          </h2>
          <p className="text-slate-600 font-medium">
            Choose a plan that fits your luxury travel lifestyle. Recharge and unlock unlimited benefits, including 5-star hotel bookings, complimentary luxury car rentals, and secure EV charging.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {plans.map((plan) => (
            <PlanCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
