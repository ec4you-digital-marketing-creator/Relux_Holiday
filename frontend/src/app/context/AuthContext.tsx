"use client";

import React, { createContext, useContext, useState } from "react";

export interface RFCard {
  cardNumber: string;
  balance: number;
  status: "Active" | "Inactive";
  points: number;
}

export interface Booking {
  id: string;
  hotelId: string;
  hotelName: string;
  hotelImage: string;
  location: string;
  price: number;
  checkIn: string;
  checkOut: string;
  carReserved: string | null;
  carImage: string | null;
  voucherCode: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  userPhone: string | null;
  rfCard: RFCard | null;
  bookings: Booking[];
  pendingOtpPhone: string | null;
  generatedOtp: string | null;
  login: (phone: string) => void;
  verifyOtp: (otp: string) => boolean;
  logout: () => void;
  cancelOtp: () => void;
  rechargeCard: (amount: number) => void;
  bookHotel: (hotel: { id: string; name: string; image: string; location: string; price: number }) => Booking | null;
  selectCar: (bookingId: string, car: { name: string; image: string }) => void;
  clearBookings: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return !!localStorage.getItem("relux_phone");
  });
  const [userPhone, setUserPhone] = useState<string | null>(() => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("relux_phone");
  });
  const [rfCard, setRfCard] = useState<RFCard | null>(() => {
    if (typeof window === "undefined") return null;
    const stored = localStorage.getItem("relux_card");
    return stored ? JSON.parse(stored) : null;
  });
  const [bookings, setBookings] = useState<Booking[]>(() => {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem("relux_bookings");
    return stored ? JSON.parse(stored) : [];
  });
  const [pendingOtpPhone, setPendingOtpPhone] = useState<string | null>(null);
  const [generatedOtp, setGeneratedOtp] = useState<string | null>(null);

  // Sync state to localStorage
  const saveAuthState = (phone: string | null, card: RFCard | null, newBookings: Booking[]) => {
    if (phone) {
      localStorage.setItem("relux_phone", phone);
      setIsLoggedIn(true);
    } else {
      localStorage.removeItem("relux_phone");
      setIsLoggedIn(false);
    }

    if (card) {
      localStorage.setItem("relux_card", JSON.stringify(card));
    } else {
      localStorage.removeItem("relux_card");
    }

    localStorage.setItem("relux_bookings", JSON.stringify(newBookings));
  };

  const login = (phone: string) => {
    setPendingOtpPhone(phone);
    // Generate a random 4-digit OTP for simulation
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(otp);
    
    // Simulate sending OTP to phone by displaying a browser alert / console log
    console.log(`[Relux OTP System] Sent OTP ${otp} to phone ${phone}`);
  };

  const verifyOtp = (otp: string): boolean => {
    if (otp === generatedOtp && pendingOtpPhone) {
      const phone = pendingOtpPhone;
      setUserPhone(phone);
      setIsLoggedIn(true);
      setPendingOtpPhone(null);
      setGeneratedOtp(null);

      // Check if there is already a card, otherwise create one
      let card = rfCard;
      if (!card) {
        // Generate a mock RF Card number: 8820 XXXX XXXX
        const randPart = () => Math.floor(1000 + Math.random() * 9000).toString();
        card = {
          cardNumber: `8820 ${randPart()} ${randPart()}`,
          balance: 15000, // Starts with a default mock balance of ₹15,000 to allow demo bookings
          status: "Active",
          points: 250,
        };
        setRfCard(card);
      }

      saveAuthState(phone, card, bookings);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUserPhone(null);
    setIsLoggedIn(false);
    setRfCard(null);
    setBookings([]);
    setPendingOtpPhone(null);
    setGeneratedOtp(null);
    localStorage.removeItem("relux_phone");
    localStorage.removeItem("relux_card");
    localStorage.removeItem("relux_bookings");
  };

  const cancelOtp = () => {
    setPendingOtpPhone(null);
    setGeneratedOtp(null);
  };

  const rechargeCard = (amount: number) => {
    if (!rfCard) return;
    const updatedCard: RFCard = {
      ...rfCard,
      balance: rfCard.balance + amount,
      points: rfCard.points + Math.floor(amount * 0.05), // 5% points back
    };
    setRfCard(updatedCard);
    saveAuthState(userPhone, updatedCard, bookings);
  };

  const bookHotel = (hotel: { id: string; name: string; image: string; location: string; price: number }): Booking | null => {
    if (!rfCard || rfCard.balance < hotel.price) return null;

    // Deduct cost from card balance
    const updatedCard: RFCard = {
      ...rfCard,
      balance: rfCard.balance - hotel.price,
      points: rfCard.points + Math.floor(hotel.price * 0.1), // 10% holiday reward points
    };
    setRfCard(updatedCard);

    // Create a new booking
    const today = new Date();
    const checkInDate = new Date(today);
    checkInDate.setDate(today.getDate() + 14); // Stays in 2 weeks
    const checkOutDate = new Date(checkInDate);
    checkOutDate.setDate(checkInDate.getDate() + 2); // 2 night stay

    const newBooking: Booking = {
      id: Math.floor(100000 + Math.random() * 900000).toString(),
      hotelId: hotel.id,
      hotelName: hotel.name,
      hotelImage: hotel.image,
      location: hotel.location,
      price: hotel.price,
      checkIn: checkInDate.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
      checkOut: checkOutDate.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
      carReserved: null,
      carImage: null,
      voucherCode: `RLX-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
    };

    const newBookingsList = [newBooking, ...bookings];
    setBookings(newBookingsList);
    saveAuthState(userPhone, updatedCard, newBookingsList);
    return newBooking;
  };

  const selectCar = (bookingId: string, car: { name: string; image: string }) => {
    const updatedBookings = bookings.map((b) => {
      if (b.id === bookingId) {
        return {
          ...b,
          carReserved: car.name,
          carImage: car.image,
        };
      }
      return b;
    });
    setBookings(updatedBookings);
    saveAuthState(userPhone, rfCard, updatedBookings);
  };

  const clearBookings = () => {
    setBookings([]);
    saveAuthState(userPhone, rfCard, []);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userPhone,
        rfCard,
        bookings,
        pendingOtpPhone,
        generatedOtp,
        login,
        verifyOtp,
        logout,
        cancelOtp,
        rechargeCard,
        bookHotel,
        selectCar,
        clearBookings,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
