"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAuth, Booking } from "../context/AuthContext";
import AuthModal from "../components/AuthModal";
import { mockCars } from "../home/CarsPreview";

export default function RFCardPage() {
  const {
    isLoggedIn,
    userPhone,
    rfCard,
    bookings,
    rechargeCard,
    selectCar,
    clearBookings,
  } = useAuth();

  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [rechargeAmount, setRechargeAmount] = useState("");
  const [selectedBookingForCar, setSelectedBookingForCar] = useState<Booking | null>(null);
  const [activeVoucher, setActiveVoucher] = useState<Booking | null>(null);
  const [rechargeSuccess, setRechargeSuccess] = useState(false);
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const handleRecharge = (e: React.FormEvent) => {
    e.preventDefault();
    const amt = Number(rechargeAmount);
    if (isNaN(amt) || amt <= 0) return;
    
    rechargeCard(amt);
    setRechargeAmount("");
    setRechargeSuccess(true);
    
    setTimeout(() => {
      setRechargeSuccess(false);
    }, 3000);
  };

  const handleCarPick = (car: { name: string; image: string }) => {
    if (selectedBookingForCar) {
      selectCar(selectedBookingForCar.id, car);
      setSelectedBookingForCar(null);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Banner */}
      <section className="py-12 bg-slate-50 border-b border-slate-100 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-size-[4rem_4rem]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <h1 className="text-4xl font-black text-slate-900 font-serif">Relux RF Card Portal</h1>
          <p className="text-brand-green text-sm font-extrabold uppercase tracking-widest">
            Manage your card balance, recharge funds, and view luxury trip vouchers
          </p>
        </div>
      </section>

      {/* Main Board */}
      <section className="py-12 grow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {!isLoggedIn ? (
            /* Logged Out State Prompt */
            <div className="max-w-md mx-auto text-center p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-xl space-y-6">
              <span className="text-6xl block">🔒</span>
              <h2 className="text-xl font-bold text-slate-800">Access Dashboard</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Please log in with your phone number and verify via OTP to view your active Relux RF Card balance, transaction logs, and hotel vouchers.
              </p>
              <button
                onClick={() => setIsAuthOpen(true)}
                className="w-full py-3 bg-gradient-brand text-white font-extrabold rounded-xl text-sm hover:opacity-95 transition-opacity"
              >
                Log In With Mobile Number
              </button>
            </div>
          ) : (
            /* Logged In Dashboard */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Card View and Recharge Form (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* 3D Flippable Card view */}
                <div
                  className="w-full aspect-[1.586/1] cursor-pointer"
                  onClick={() => setIsCardFlipped(!isCardFlipped)}
                >
                  <div className={`rf-card-inner relative w-full h-full rounded-2xl shadow-xl ${isCardFlipped ? "rf-card-flipped" : ""}`}>
                    {/* Front */}
                    <div className="rf-card-front absolute inset-0 w-full h-full rounded-2xl bg-linear-to-br from-slate-900 via-[#101a26] to-slate-950 border border-white/10 p-6 flex flex-col justify-between overflow-hidden">
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-lg font-black tracking-widest text-white uppercase leading-none block">RELUX</span>
                          <span className="text-[9px] font-extrabold tracking-widest text-brand-green uppercase leading-none mt-0.5 block">HOLIDAYS</span>
                        </div>
                        <span className="text-slate-500 text-xs font-bold font-mono">RFID ENABLED</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="h-9 w-11 rounded-md bg-linear-to-r from-amber-400 to-amber-600 opacity-90 relative" />
                        <div className="text-right">
                          <p className="text-[8px] uppercase tracking-wider text-slate-500 font-bold">Balance</p>
                          <p className="text-xl font-black text-white">₹{rfCard?.balance.toLocaleString("en-IN")}</p>
                        </div>
                      </div>

                      <div className="flex items-end justify-between">
                        <div>
                          <p className="text-[10px] font-mono text-slate-400 tracking-wider">{rfCard?.cardNumber}</p>
                          <p className="text-[9px] uppercase tracking-widest text-slate-500 font-bold mt-1">Phone: +91 {userPhone}</p>
                        </div>
                        <span className="text-[9px] font-black text-brand-green bg-brand-green/10 border border-brand-green/20 px-2 py-0.5 rounded-full">
                          {rfCard?.status}
                        </span>
                      </div>
                    </div>

                    {/* Back */}
                    <div className="rf-card-back absolute inset-0 w-full h-full rounded-2xl bg-slate-950 border border-white/10 py-6 flex flex-col justify-between overflow-hidden">
                      <div className="w-full h-9 bg-slate-900 mt-2" />
                      <div className="px-6 space-y-3">
                        <div className="h-6 bg-slate-800 rounded px-2 flex items-center justify-end text-[10px] text-slate-400 font-mono">
                          CVV: ***
                        </div>
                        <p className="text-[8px] text-slate-600 leading-relaxed">
                          Secure NFC holiday card. Accepted at all Relux Charging grids and official luxury hotels.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-xs text-slate-600 font-bold">★ Card Status: Active | Points Accrued: <span className="text-amber-600 font-extrabold">{rfCard?.points} pts</span></p>
                </div>

                {/* Recharge Card Form */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-md space-y-4">
                  <h3 className="text-base font-bold text-slate-800 flex items-center gap-1.5">
                    <span>💳</span> Card Recharge Terminal
                  </h3>
                  
                  {rechargeSuccess && (
                    <p className="p-2.5 rounded-lg bg-brand-green/10 border border-brand-green/25 text-brand-green text-xs font-bold">
                      ✓ Mock Balance Top-Up Successful!
                    </p>
                  )}

                  <form onSubmit={handleRecharge} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Recharge Amount (₹)</label>
                      <input
                        type="number"
                        placeholder="e.g. 5000"
                        value={rechargeAmount}
                        onChange={(e) => setRechargeAmount(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-brand-green"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 bg-gradient-brand text-white font-bold rounded-xl text-xs hover:opacity-95 transition-opacity"
                    >
                      Top-Up Balance Now
                    </button>
                  </form>
                </div>

              </div>

              {/* Right Column: Hotel Bookings list & Car rentals chooser (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xl space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-800 font-serif flex items-center gap-1.5">
                      <span>🏨</span> Active Hotel Bookings
                    </h3>
                    {bookings.length > 0 && (
                      <button
                        onClick={clearBookings}
                        className="text-xs text-slate-500 hover:text-brand-red font-bold"
                      >
                        Reset Ledger
                      </button>
                    )}
                  </div>

                  <div className="space-y-4">
                    {bookings.map((booking) => (
                      <div
                        key={booking.id}
                        className="p-5 rounded-xl bg-white border border-slate-100 shadow-xs flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] text-emerald-700 bg-brand-green/10 px-2 py-0.5 rounded font-black tracking-wider uppercase">
                              CONFIRMED
                            </span>
                            <span className="text-xs font-mono text-slate-500">ID: {booking.id}</span>
                          </div>
                          <h4 className="text-base font-extrabold text-slate-800 mt-1">{booking.hotelName}</h4>
                          <p className="text-xs text-slate-600 mt-0.5">{booking.location}</p>
                          <p className="text-xs text-slate-500 font-semibold mt-1">Stays: {booking.checkIn} - {booking.checkOut}</p>
                        </div>

                        <div className="flex flex-col items-stretch sm:items-end gap-2 w-full sm:w-auto">
                          {booking.carReserved ? (
                            /* Car Reserved Badge */
                            <div className="space-y-1 text-left sm:text-right">
                              <p className="text-[10px] text-slate-500 uppercase font-black">Complementary Car</p>
                              <div className="text-xs font-extrabold text-amber-700 flex items-center gap-1.5">
                                <span>🚗</span> {booking.carReserved}
                              </div>
                              <button
                                onClick={() => setActiveVoucher(booking)}
                                className="text-xs text-brand-green font-bold underline block hover:text-emerald-800 mt-1"
                              >
                                View Travel Voucher
                              </button>
                            </div>
                          ) : (
                            /* Trigger to Select Car */
                            <button
                              onClick={() => setSelectedBookingForCar(booking)}
                              className="px-4 py-2 bg-brand-red text-white text-xs font-black rounded-lg hover:opacity-90 transition-opacity animate-pulse text-center"
                            >
                              🎁 Select Free Luxury Car
                            </button>
                          )}
                        </div>

                      </div>
                    ))}

                    {bookings.length === 0 && (
                      <div className="text-center py-10 bg-white rounded-xl border border-slate-100">
                        <span className="text-3xl block mb-2">🌴</span>
                        <h4 className="text-sm font-bold text-slate-800">No active hotel reservations found</h4>
                        <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
                          Book a premium resort stay with your card balance to unlock a free 1-day luxury car rental!
                        </p>
                        <Link
                          href="/hotels"
                          className="inline-block mt-4 px-4 py-2 bg-gradient-brand text-white text-xs font-bold rounded-lg"
                        >
                          Book Stay Now
                        </Link>
                      </div>
                    )}
                  </div>
                </div>

              </div>

            </div>
          )}

        </div>
      </section>

      {/* Free Luxury Car Selection Modal Overlay */}
      {selectedBookingForCar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm" onClick={() => setSelectedBookingForCar(null)} />
          
          <div className="relative w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-2xl animate-in zoom-in-95 duration-200">
            <h3 className="text-2xl font-black text-slate-800 font-serif mb-2">Choose Your Free Luxury Car</h3>
            <p className="text-xs text-slate-600 mb-6">
              Complimentary 1-day drive for your booking at <span className="text-slate-900 font-bold">{selectedBookingForCar.hotelName}</span>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {mockCars.map((car) => (
                <div
                  key={car.id}
                  onClick={() => handleCarPick({ name: car.name, image: car.image })}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-brand-red hover:bg-white hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between gap-4 group"
                >
                  <div className="aspect-[1.6] w-full rounded-lg overflow-hidden bg-slate-100 relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={car.image} alt={car.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-extrabold text-slate-800">{car.name}</h4>
                    <p className="text-[10px] text-slate-500 font-medium">Power: {car.power}</p>
                    <p className="text-[10px] font-bold text-brand-red">Range: {car.range}</p>
                  </div>
                  <button className="w-full py-1.5 bg-brand-red text-white text-[10px] font-black rounded-lg uppercase">
                    Select Car
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={() => setSelectedBookingForCar(null)}
              className="mt-6 px-4 py-2 border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-800 rounded-lg text-xs font-bold"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Trip Voucher Print Modal */}
      {activeVoucher && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm" onClick={() => setActiveVoucher(null)} />
          
          <div className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-white text-slate-900 p-8 shadow-2xl animate-in zoom-in-95 duration-200">
            {/* Voucher Body (Print style) */}
            <div className="border-2 border-dashed border-slate-300 p-6 rounded-xl space-y-6">
              
              {/* Head */}
              <div className="flex items-start justify-between pb-4 border-b border-slate-200">
                <div>
                  <h2 className="text-xl font-black uppercase tracking-widest text-slate-950 leading-none">RELUX</h2>
                  <span className="text-[10px] font-black tracking-widest text-brand-green uppercase leading-none block mt-0.5">HOLIDAYS</span>
                </div>
                <div className="text-right">
                  <p className="text-[8px] font-black text-slate-400 uppercase">VOUCHER CODE</p>
                  <p className="text-sm font-mono font-bold text-slate-950">{activeVoucher.voucherCode}</p>
                </div>
              </div>

              {/* Hotel Detail */}
              <div className="space-y-1">
                <p className="text-[9px] font-black text-slate-400 uppercase">Resort Destination</p>
                <h3 className="text-lg font-bold text-slate-950">{activeVoucher.hotelName}</h3>
                <p className="text-xs text-slate-600 font-semibold">{activeVoucher.location}</p>
                <div className="grid grid-cols-2 gap-4 pt-2 text-xs">
                  <div>
                    <span className="text-[8px] font-black text-slate-400 uppercase block">CHECK IN</span>
                    <span className="font-bold text-slate-900">{activeVoucher.checkIn}</span>
                  </div>
                  <div>
                    <span className="text-[8px] font-black text-slate-400 uppercase block">CHECK OUT</span>
                    <span className="font-bold text-slate-900">{activeVoucher.checkOut}</span>
                  </div>
                </div>
              </div>

              {/* Car Detail */}
              <div className="p-3 bg-slate-100 rounded-lg border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-[8px] font-black text-slate-400 uppercase block">COMPLIMENTARY RENTAL DRIVE</span>
                  <span className="text-sm font-extrabold text-slate-950">{activeVoucher.carReserved}</span>
                  <p className="text-[9px] text-slate-500 mt-0.5">24 hours drive key delivered at lobby.</p>
                </div>
                <span className="text-2xl">🚗</span>
              </div>

              {/* Bottom detail with mock QR code */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200 gap-4">
                <div className="text-[9px] text-slate-500 space-y-1">
                  <p>• Show this voucher at check-in counter.</p>
                  <p>• Account Phone: +91 {userPhone}</p>
                  <p>• Verified RF Card transaction ledger.</p>
                </div>
                
                {/* Mock QR Code vector */}
                <div className="h-16 w-16 bg-slate-200 p-1.5 border border-slate-300 rounded flex flex-wrap gap-0.5 justify-center items-center">
                  <div className="h-2 w-2 bg-slate-950" />
                  <div className="h-2 w-2 bg-slate-950" />
                  <div className="h-2 w-2 bg-slate-200" />
                  <div className="h-2 w-2 bg-slate-950" />
                  <div className="h-2 w-2 bg-slate-200" />
                  <div className="h-2 w-2 bg-slate-950" />
                  <div className="h-2 w-2 bg-slate-950" />
                  <div className="h-2 w-2 bg-slate-950" />
                  <div className="h-2 w-2 bg-slate-950" />
                  <div className="h-2 w-2 bg-slate-200" />
                  <div className="h-2 w-2 bg-slate-950" />
                  <div className="h-2 w-2 bg-slate-950" />
                  <div className="h-2 w-2 bg-slate-950" />
                  <div className="h-2 w-2 bg-slate-950" />
                  <div className="h-2 w-2 bg-slate-200" />
                  <div className="h-2 w-2 bg-slate-950" />
                </div>
              </div>

            </div>

            <div className="mt-6 flex justify-between gap-4">
              <button
                onClick={() => window.print()}
                className="px-6 py-2 bg-slate-950 text-white font-extrabold rounded-lg text-xs hover:opacity-90"
              >
                Print Voucher
              </button>
              <button
                onClick={() => setActiveVoucher(null)}
                className="px-4 py-2 border border-slate-300 text-slate-600 hover:text-slate-950 font-bold rounded-lg text-xs"
              >
                Close View
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Auth modal */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </div>
  );
}
