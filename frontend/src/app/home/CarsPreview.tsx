import React from "react";
import Link from "next/link";

export interface Car {
  id: string;
  name: string;
  type: string;
  image: string;
  acceleration: string; // 0-100 km/h
  topSpeed: string;
  range: string;
  power: string;
}

export const mockCars: Car[] = [
  {
    id: "c1",
    name: "Tesla Model S Plaid",
    type: "Ultra Sedan",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=500&q=80",
    acceleration: "2.1 seconds",
    topSpeed: "322 km/h",
    range: "637 km",
    power: "1,020 hp",
  },
  {
    id: "c2",
    name: "Porsche Taycan Turbo S",
    type: "Sports EV",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=500&q=80",
    acceleration: "2.8 seconds",
    topSpeed: "260 km/h",
    range: "450 km",
    power: "750 hp",
  },
  {
    id: "c3",
    name: "Audi e-tron GT",
    type: "Grand Tourer",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=500&q=80",
    acceleration: "3.3 seconds",
    topSpeed: "250 km/h",
    range: "488 km",
    power: "637 hp",
  },
];

export default function CarsPreview() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-brand-red">
              Executive Privilege
            </h2>
            <p className="text-3xl sm:text-4xl font-black text-slate-900 font-serif">
              Complimentary Luxury Rental Fleet
            </p>
            <p className="text-slate-600 text-sm font-medium">
              Pick your high-performance electric drive. Delivered straight to your resort on arrival day, completely pre-charged and detailed.
            </p>
          </div>
          <Link
            href="/cars"
            className="px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors text-sm font-bold flex items-center gap-2 whitespace-nowrap"
          >
            Explore Complete Fleet
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockCars.map((car) => (
            <div
              key={car.id}
              className="rounded-2xl overflow-hidden bg-white border border-slate-100 hover:border-brand-red/30 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Car Image Area */}
              <div className="relative aspect-[1.7] w-full bg-slate-100 overflow-hidden">
                <div className="absolute inset-0 bg-slate-100 flex items-center justify-center text-slate-400 text-xs">
                  Fleet Vehicle
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={car.image}
                  alt={car.name}
                  className="absolute inset-0 h-full w-full object-cover opacity-85 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 px-2.5 py-1 rounded bg-black/60 border border-white/10 text-[10px] font-black text-slate-300 uppercase tracking-widest backdrop-blur-sm">
                  {car.type}
                </div>
              </div>

              {/* Specs and Details */}
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 leading-tight">{car.name}</h3>
                  <div className="h-[2px] w-12 bg-brand-red mt-2" />
                </div>

                {/* Spec Indicators Grid */}
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="text-brand-red text-base">⚡</span>
                    <div>
                      <p className="text-[9px] text-slate-500 font-bold uppercase">0-100 km/h</p>
                      <p className="font-extrabold text-slate-800 mt-0.5">{car.acceleration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="text-brand-red text-base">🏁</span>
                    <div>
                      <p className="text-[9px] text-slate-500 font-bold uppercase">Top Speed</p>
                      <p className="font-extrabold text-slate-800 mt-0.5">{car.topSpeed}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="text-brand-red text-base">🔌</span>
                    <div>
                      <p className="text-[9px] text-slate-500 font-bold uppercase">EV Range</p>
                      <p className="font-extrabold text-slate-800 mt-0.5">{car.range}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="text-brand-red text-base">💪</span>
                    <div>
                      <p className="text-[9px] text-slate-500 font-bold uppercase">Peak Power</p>
                      <p className="font-extrabold text-slate-800 mt-0.5">{car.power}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs">
                  <span className="text-slate-600 font-bold flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-brand-red animate-pulse" />
                    Unlimited Charging Included
                  </span>
                  <Link
                    href="/rf-card"
                    className="text-brand-red font-black hover:underline tracking-wider uppercase"
                  >
                    Unlock Booking →
                  </Link>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
