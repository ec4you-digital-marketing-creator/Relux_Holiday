import React from "react";
import Link from "next/link";

export interface Hotel {
  id: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  amenities: string[];
  description: string;
}

export const mockHotels: Hotel[] = [
  {
    id: "h1",
    name: "Relux Palm Beach Resort",
    location: "Kovalam, Kerala",
    price: 9500,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
    amenities: ["Private Beach", "Infinity Pool", "Ayurvedic Spa"],
    description: "Nestled along the pristine cliffs of Kovalam, this sanctuary offers panoramic Arabian Sea vistas, private sunbathing decks, and gourmet dining.",
  },
  {
    id: "h2",
    name: "Aura Heights Castle",
    location: "Ooty, Tamil Nadu",
    price: 12000,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
    amenities: ["Tea Plantations", "Heritage Suite", "Fireplace"],
    description: "A beautifully restored colonial heritage retreat sitting 2,200m above sea level, surrounded by misty gardens, log fires, and tea valleys.",
  },
  {
    id: "h3",
    name: "Munnar Mist Canopy",
    location: "Munnar, Kerala",
    price: 8000,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=600&q=80",
    amenities: ["Valley View", "Trekking Trails", "Treehouses"],
    description: "Hovering over mountain peaks, this eco-resort features elevated glass-walled chalets, wildlife safaris, and organic plantation trails.",
  },
];

export default function HotelsPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-brand-green">
              Partner Hospitality
            </h2>
            <p className="text-3xl sm:text-4xl font-black text-slate-900 font-serif">
              Ultra-Luxury Stays Under Your RF Card
            </p>
            <p className="text-slate-600 text-sm font-medium">
              We partner exclusively with certified eco-conscious 5-star hotels. Booking any of these rooms automatically includes an EV smart rental car.
            </p>
          </div>
          <Link
            href="/hotels"
            className="px-6 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors text-sm font-bold flex items-center gap-2 whitespace-nowrap"
          >
            Browse All 120+ Stays
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Hotel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockHotels.map((hotel) => (
            <div
              key={hotel.id}
              className="group rounded-2xl overflow-hidden bg-slate-50/50 border border-slate-100 hover:border-brand-green/30 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col h-full grow"
            >
              {/* Hotel Image with Overlay Banner */}
              <div className="relative aspect-[1.6] w-full overflow-hidden bg-slate-100">
                {/* Fallback pattern */}
                <div className="absolute inset-0 bg-slate-100 flex items-center justify-center text-slate-400 text-xs">
                  Resort Image
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent" />
                
                {/* Free Car Badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-brand-red text-white text-[10px] font-black uppercase tracking-wider shadow-lg flex items-center gap-1">
                  <span>🚗</span> 1-Day Free Luxury Car
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 right-4 px-2 py-1 rounded-lg bg-black/60 border border-white/10 text-brand-yellow text-xs font-extrabold flex items-center gap-1 backdrop-blur-sm">
                  ★ {hotel.rating}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="text-xs font-semibold text-brand-green tracking-wider uppercase mb-1">
                    {hotel.location}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight group-hover:text-brand-green transition-colors">
                    {hotel.name}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    {hotel.description}
                  </p>
                </div>

                <div>
                  {/* Amenities List */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {hotel.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-slate-100/80 text-slate-600 border border-slate-200/60"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>

                  {/* Pricing and Action */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div>
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">Starting at</span>
                      <span className="text-lg font-black text-amber-600">
                        ₹{hotel.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold"> / night</span>
                    </div>

                    <Link
                      href="/rf-card"
                      className="px-4 py-2 bg-gradient-brand text-white text-xs font-black rounded-lg hover:opacity-95 transition-opacity"
                    >
                      Book With RF Card
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
