"use client";

import { reservationInputHandler } from "@/actions/reserve";
import React, { useActionState } from "react";
import SubmitButton from "./buttons/submit-button";

export const dynamic = "force-dynamic";

export default function Reservation(): React.ReactNode {
  const [state, formAction] = useActionState(reservationInputHandler, {
    error: "",
  });

  return (
    <section className="flex items-center justify-center bg-[#0d0a07f5] py-24">
      <div className="w-full max-w-3xl bg-dark-light border border-[#CBB790]/20 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
        <div className="text-center my-4">
          <h2 className="text-3xl md:text-3xl font-bold text-white mb-4">
            Book Your Table
          </h2>
          <p className="text-light/70 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Secure your spot for an exceptional dining experience. For groups
            larger than 8, please call us directly.
          </p>
        </div>
        <form className="space-y-6" action={formAction}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-light">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="bg-[#241f1a] border border-[#36302a] text-gray-300 rounded-xl px-4 py-3 outline-none focus:border-amber-500/50 transition-colors placeholder:text-gray-600"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-light">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+1 (555) 000-0000"
                className="bg-[#241f1a] border border-[#36302a] text-gray-300 rounded-xl px-4 py-3 outline-none focus:border-amber-500/50 transition-colors placeholder:text-gray-600"
              />
            </div>

            <div className="md:col-span-1 flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-light">
                Date
              </label>
              <input
                type="date"
                name="date"
                placeholder="mm/dd/yyyy"
                className="bg-[#241f1a] border border-[#36302a] text-gray-300 rounded-xl px-4 py-3 outline-none focus:border-amber-500/50 transition-colors placeholder:text-gray-600"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-light">
                  Time
                </label>
                <select
                  name="time"
                  className="bg-[#241f1a] border border-[#36302a] text-gray-300 rounded-xl px-4 py-3 outline-none focus:border-amber-500/50 transition-colors appearance-none cursor-pointer"
                >
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#CBB790]">
                  Guests
                </label>
                <select
                  name="guests"
                  className="bg-[#241f1a] border border-[#36302a] text-gray-300 rounded-xl px-4 py-3 outline-none focus:border-amber-500/50 transition-colors appearance-none cursor-pointer"
                >
                  <option value="2">2 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="8">8 Guests</option>
                </select>
              </div>
            </div>
          </div>

          {state?.error && (
            <p className="text-red-500 text-sm text-center">{state.error}</p>
          )}

          <SubmitButton />
        </form>
      </div>
    </section>
  );
}
