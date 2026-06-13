import React from "react";
import Link from "next/link";

interface ExtendedCar {
  id: string;
  name: string;
  type: string;
  image: string;
  acceleration: string;
  topSpeed: string;
  range: string;
  power: string;
  battery: string;
  drive: string;
  seats: number;
}

const extendedCars: ExtendedCar[] = [
  {
    id: "c1",
    name: "Tesla Model S Plaid",
    type: "Ultra Sedan",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=500&q=80",
    acceleration: "2.1 seconds",
    topSpeed: "322 km/h",
    range: "637 km",
    power: "1,020 hp",
    battery: "100 kWh",
    drive: "AWD (Tri-Motor)",
    seats: 5,
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
    battery: "93.4 kWh",
    drive: "AWD (Dual-Motor)",
    seats: 4,
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
    battery: "93.4 kWh",
    drive: "Quattro AWD",
    seats: 5,
  },
  {
    id: "c4",
    name: "Jaguar I-PACE",
    type: "Premium SUV",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=500&q=80",
    acceleration: "4.8 seconds",
    topSpeed: "200 km/h",
    range: "470 km",
    power: "394 hp",
    battery: "90 kWh",
    drive: "AWD",
    seats: 5,
  },
];

export default function CarsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Banner */}
      <section className="py-16 bg-slate-50 border-b border-slate-100 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-size-[4rem_4rem]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <h1 className="text-4xl font-black text-slate-900 font-serif">Luxury Fleet Catalog</h1>
          <p className="text-brand-red text-sm font-extrabold uppercase tracking-widest">
            Unlock a free 24-hour rental drive when you book partner hotels
          </p>
        </div>
      </section>

      {/* Fleet showcase */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Rules info */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-1">
              <h4 className="text-sm font-extrabold text-slate-800">1. Complimentary 24-Hour Rental</h4>
              <p className="text-xs text-slate-600">Included free with any hotel booking made on the Relux Holidays portal.</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-extrabold text-slate-800">2. Delivery at Lobby</h4>
              <p className="text-xs text-slate-600">The car will be delivered pre-cleaned and fully charged directly to your hotel check-in lobby.</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-extrabold text-slate-800">3. Driver Requirements</h4>
              <p className="text-xs text-slate-600">Requires a valid Indian or International driving license matching the registered guest name.</p>
            </div>
          </div>

          {/* Cars list */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {extendedCars.map((car) => (
              <div
                key={car.id}
                className="rounded-2xl overflow-hidden bg-slate-50/50 border border-slate-200 hover:bg-white transition-all duration-300 flex flex-col md:flex-row"
              >
                {/* Image */}
                <div className="relative w-full md:w-1/2 aspect-[1.5] md:aspect-auto bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={car.image}
                    alt={car.name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-slate-950/20 via-transparent to-transparent" />
                </div>

                {/* Specs */}
                <div className="p-6 w-full md:w-1/2 space-y-4 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold text-brand-red uppercase tracking-wider block">
                      {car.type}
                    </span>
                    <h3 className="text-lg font-bold text-slate-800 leading-tight mt-1">{car.name}</h3>
                  </div>

                  <table className="w-full text-xs text-left text-slate-600">
                    <tbody>
                      <tr className="border-b border-slate-100">
                        <td className="py-1.5 font-bold uppercase text-[9px] text-slate-500">Acceleration</td>
                        <td className="py-1.5 font-bold text-slate-800 text-right">{car.acceleration}</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-1.5 font-bold uppercase text-[9px] text-slate-500">Peak Power</td>
                        <td className="py-1.5 font-bold text-slate-800 text-right">{car.power}</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-1.5 font-bold uppercase text-[9px] text-slate-500">Battery Pack</td>
                        <td className="py-1.5 font-bold text-slate-800 text-right">{car.battery}</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-1.5 font-bold uppercase text-[9px] text-slate-500">Range (WLTP)</td>
                        <td className="py-1.5 font-bold text-slate-800 text-right">{car.range}</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 font-bold uppercase text-[9px] text-slate-500">Drivetrain</td>
                        <td className="py-1.5 font-bold text-slate-800 text-right">{car.drive}</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] text-slate-500 font-extrabold">Capacity: {car.seats} Seats</span>
                    <Link
                      href="/hotels"
                      className="px-4 py-1.5 bg-slate-50 border border-slate-200 hover:border-brand-red text-slate-600 hover:text-brand-red rounded-lg text-xs font-bold transition-colors"
                    >
                      Book Hotel to Unlock
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
