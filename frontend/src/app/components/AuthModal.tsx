"use client";

import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContext";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const { login, verifyOtp, pendingOtpPhone, generatedOtp, cancelOtp } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpVal, setOtpVal] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  
  const otpRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  // Reset state when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setPhoneNumber("");
      setOtpVal(["", "", "", ""]);
      setError("");
      setShowToast(false);
      cancelOtp();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Countdown timer for OTP
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (pendingOtpPhone && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [pendingOtpPhone, timer]);

  // Show simulated OTP Toast when generated
  useEffect(() => {
    if (generatedOtp) {
      setShowToast(true);
      setError("");
      setTimer(60);
      setOtpVal(["", "", "", ""]);

      // Auto-hide toast after 12 seconds
      const timeout = setTimeout(() => {
        setShowToast(false);
      }, 12000);
      return () => clearTimeout(timeout);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [generatedOtp]);

  if (!isOpen) return null;

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length < 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    setError("");
    login(phoneNumber);
  };

  const handleOtpChange = (index: number, val: string) => {
    if (isNaN(Number(val))) return; // only numbers
    
    const newOtp = [...otpVal];
    newOtp[index] = val.substring(val.length - 1); // take last digit
    setOtpVal(newOtp);

    // Auto-focus next input
    if (val && index < 3) {
      otpRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otpVal[index] && index > 0) {
      otpRefs[index - 1].current?.focus();
    }
  };

  const handleOtpVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredOtp = otpVal.join("");
    if (enteredOtp.length < 4) {
      setError("Please enter the 4-digit code.");
      return;
    }

    const success = verifyOtp(enteredOtp);
    if (success) {
      setError("");
      setShowToast(false);
      onClose();
    } else {
      setError("Invalid OTP code. Please try again.");
    }
  };

  const handleResend = () => {
    if (phoneNumber) {
      login(phoneNumber);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Simulated OTP Notification Toast */}
      {showToast && generatedOtp && (
        <div className="absolute top-6 right-6 z-55 flex w-96 flex-col gap-1 rounded-xl border border-slate-200 bg-white p-4 shadow-2xl animate-bounce">
          <div className="flex items-center justify-between text-sm font-bold text-brand-green">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-green animate-ping" />
              SIMULATED SMS GATEWAY
            </span>
            <button
              onClick={() => setShowToast(false)}
              className="text-slate-500 hover:text-slate-800"
            >
              ✕
            </button>
          </div>
          <p className="text-sm text-slate-600">
            Relux OTP verification code for phone <strong className="text-slate-900">{pendingOtpPhone}</strong> is:
          </p>
          <div className="mt-2 text-center text-2xl font-black tracking-widest text-amber-600 bg-slate-50 py-1.5 rounded-lg border border-slate-200">
            {generatedOtp}
          </div>
        </div>
      )}

      {/* Modal Container */}
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-2xl animate-in fade-in zoom-in duration-200">
        {/* Glow Decor */}
        <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-brand-green/5 blur-2xl" />
        <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-brand-blue/5 blur-2xl" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 transition-colors"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {!pendingOtpPhone ? (
          /* Phone Entry Form */
          <div>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-black text-slate-900 font-serif">Customer Login</h2>
              <p className="text-slate-500 text-sm mt-1">
                Access your Relux RF Card & Holiday Rewards
              </p>
            </div>

            <form onSubmit={handlePhoneSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                  Mobile Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-500 text-sm font-medium">
                    +91
                  </div>
                  <input
                    type="tel"
                    maxLength={10}
                    placeholder="Enter 10-digit phone number"
                    value={phoneNumber}
                    onChange={(e) => {
                      const clean = e.target.value.replace(/\D/g, "");
                      setPhoneNumber(clean);
                    }}
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-green/60 focus:ring-1 focus:ring-brand-green/60 text-sm tracking-widest font-medium"
                    required
                  />
                </div>
              </div>

              {error && <p className="text-xs font-semibold text-brand-red">{error}</p>}

              <button
                type="submit"
                className="w-full py-3 bg-gradient-brand text-white font-bold rounded-xl hover:opacity-90 transition-opacity text-sm flex items-center justify-center gap-2"
              >
                Send Verification OTP
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>

              <div className="pt-4 border-t border-slate-100 text-center">
                <p className="text-xs text-slate-500">
                  By logging in, you agree to Relux Holidays&apos;{" "}
                  <a href="#" className="text-slate-600 hover:text-brand-green underline">
                    Terms of Service
                  </a>{" "}
                  &{" "}
                  <a href="#" className="text-slate-600 hover:text-brand-green underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>
        ) : (
          /* OTP Entry Form */
          <div>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-black text-slate-900 font-serif">Verify OTP</h2>
              <p className="text-slate-600 text-sm mt-1">
                We sent a 4-digit code to <span className="text-brand-green font-medium">+91 {pendingOtpPhone}</span>
              </p>
            </div>

            <form onSubmit={handleOtpVerify} className="space-y-6">
              <div className="flex justify-center gap-3">
                {otpVal.map((digit, index) => (
                  <input
                    key={index}
                    ref={otpRefs[index]}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-14 h-14 bg-slate-50 border border-slate-200 rounded-xl text-center text-xl font-bold text-slate-900 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green"
                  />
                ))}
              </div>

              {error && (
                <p className="text-xs font-semibold text-brand-red text-center">{error}</p>
              )}

              <div className="text-center text-sm text-slate-500">
                {timer > 0 ? (
                  <span>Resend code in <strong className="text-amber-600 font-bold">{timer}s</strong></span>
                ) : (
                  <button
                    type="button"
                    onClick={handleResend}
                    className="text-brand-green font-bold hover:underline"
                  >
                    Resend Verification OTP
                  </button>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={cancelOtp}
                  className="w-1/2 py-3 border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-colors text-sm"
                >
                  Change Number
                </button>
                <button
                  type="submit"
                  className="w-1/2 py-3 bg-gradient-brand text-white font-bold rounded-xl hover:opacity-90 transition-opacity text-sm"
                >
                  Verify & Login
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
