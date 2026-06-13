"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { mockHotels, Hotel } from "../home/HotelsPreview";
import AuthModal from "../components/AuthModal";

export default function HotelsPage() {
  const router = useRouter();
  const { isLoggedIn, rfCard, bookHotel } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [bookingStatus, setBookingStatus] = useState<{ status: "idle" | "success" | "error"; msg: string }>({
    status: "idle",
    msg: "",
  });

  const locations = ["All", "Kerala", "Tamil Nadu"];

  const filteredHotels = mockHotels.filter((hotel) => {
    const matchesSearch = hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          hotel.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === "All" || hotel.location.includes(selectedLocation);
    return matchesSearch && matchesLocation;
  });

  const handleBooking = (hotel: Hotel) => {
    if (!isLoggedIn) {
      setIsAuthOpen(true);
      return;
    }

    if (!rfCard) return;

    if (rfCard.balance < hotel.price) {
      setBookingStatus({
        status: "error",
        msg: `Insufficient balance on your RF Card. Room costs ₹${hotel.price.toLocaleString("en-IN")}, your balance is ₹${rfCard.balance.toLocaleString("en-IN")}. Please recharge your card first!`,
      });
      return;
    }

    // Attempt booking
    const booking = bookHotel({
      id: hotel.id,
      name: hotel.name,
      image: hotel.image,
      location: hotel.location,
      price: hotel.price,
    });

    if (booking) {
      setBookingStatus({
        status: "success",
        msg: `Successfully booked your room at ${hotel.name}! Redirecting to your RF Card dashboard to select your free luxury car...`,
      });
      
      // Redirect after 3 seconds
      setTimeout(() => {
        router.push("/rf-card");
      }, 3000);
    } else {
      setBookingStatus({
        status: "error",
        msg: "An unexpected error occurred during the booking transaction.",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Banner */}
      <section className="py-16 bg-slate-50 border-b border-slate-100 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-size-[4rem_4rem]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <h1 className="text-4xl font-black text-slate-900 font-serif">Explore Partner Hotels</h1>
          <p className="text-brand-green text-sm font-extrabold uppercase tracking-widest">
            Book room stays using your Relux RF Card to unlock a free Luxury Car
          </p>
        </div>
      </section>

      {/* Filter and Content section */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Booking Status Alerts */}
          {bookingStatus.status !== "idle" && (
            <div
              className={`p-4 rounded-xl border text-sm font-semibold flex items-center justify-between animate-in slide-in-from-top duration-200 ${
                bookingStatus.status === "success"
                  ? "bg-brand-green/10 border-brand-green/30 text-brand-green"
                  : "bg-brand-red/10 border-brand-red/30 text-brand-red"
              }`}
            >
              <div className="flex items-center gap-2">
                <span>{bookingStatus.status === "success" ? "✓" : "⚠"}</span>
                <p>{bookingStatus.msg}</p>
              </div>
              <button
                onClick={() => setBookingStatus({ status: "idle", msg: "" })}
                className="text-slate-500 hover:text-slate-800"
              >
                ✕
              </button>
            </div>
          )}

          {/* Search controls */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search hotels or destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-green"
              />
              <span className="absolute left-3.5 top-3.5 text-slate-500 text-sm">🔍</span>
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <span className="text-xs font-bold text-slate-500 uppercase whitespace-nowrap">Filter State:</span>
              <div className="flex gap-1.5 overflow-x-auto pb-1 md:pb-0">
                {locations.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => setSelectedLocation(loc)}
                    className={`px-4 py-1.5 rounded-lg text-xs font-extrabold transition-colors whitespace-nowrap ${
                      selectedLocation === loc
                        ? "bg-brand-green text-slate-950"
                        : "bg-white text-slate-600 border border-slate-200 hover:text-slate-950 hover:bg-slate-100"
                    }`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Hotel cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHotels.map((hotel) => (
              <div
                key={hotel.id}
                className="group rounded-2xl overflow-hidden bg-slate-50/50 border border-slate-200 hover:border-brand-green/30 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col h-full grow"
              >
                {/* Image */}
                <div className="relative aspect-[1.6] w-full overflow-hidden bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent" />
                  
                  {/* Free Car Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-brand-red text-white text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-lg">
                    <span>🚗</span> 1-Day Free Luxury Car
                  </div>

                  {/* Rating */}
                  <div className="absolute bottom-4 right-4 px-2 py-1 rounded-lg bg-black/60 border border-white/10 text-brand-yellow text-xs font-extrabold flex items-center gap-1 backdrop-blur-sm">
                    ★ {hotel.rating}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-brand-green uppercase tracking-wider block">
                      {hotel.location}
                    </span>
                    <h3 className="text-xl font-bold text-slate-800 leading-tight">{hotel.name}</h3>
                    <p className="text-slate-600 text-xs leading-relaxed">{hotel.description}</p>
                  </div>

                  <div className="space-y-4">
                    {/* Amenities */}
                    <div className="flex flex-wrap gap-1.5">
                      {hotel.amenities.map((am) => (
                        <span
                          key={am}
                          className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100/80 text-slate-600 border border-slate-200/60"
                        >
                          {am}
                        </span>
                      ))}
                    </div>

                    {/* Booking Panel */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div>
                        <span className="text-[10px] text-slate-500 font-bold uppercase block">Nightly Price</span>
                        <span className="text-lg font-black text-amber-600">
                          ₹{hotel.price.toLocaleString("en-IN")}
                        </span>
                        <span className="text-xs text-slate-500 font-semibold"> / night</span>
                      </div>

                      <button
                        onClick={() => handleBooking(hotel)}
                        className="px-4 py-2 bg-gradient-brand text-white text-xs font-black rounded-lg hover:opacity-95 transition-opacity"
                      >
                        Book With RF Card
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {filteredHotels.length === 0 && (
            <div className="text-center py-20 bg-slate-50 rounded-2xl border border-slate-200">
              <span className="text-4xl block mb-2">🏖</span>
              <h3 className="text-base font-bold text-slate-800">No Hotels Found</h3>
              <p className="text-slate-500 text-xs mt-1">Try modifying your search or filters.</p>
            </div>
          )}

        </div>
      </section>

      {/* Auth Modal Trigger */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </div>
  );
}
