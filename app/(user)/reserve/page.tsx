import React from "react";

export default function ReserveNowPage(): React.ReactNode {
  return (
    <section className="flex items-center justify-center bg-[#0d0a07f5] py-24">
      <div className="w-full max-w-3xl bg-[#231D10] border border-[#CBB790]/20 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
        <div className="text-center my-4">
          <h2 className="text-3xl md:text-3xl font-bold font-work text-white mb-4">
            Book Your Table
          </h2>
          <p className="text-[#CBB790]/70 text-sm md:text-base font-work max-w-xl mx-auto leading-relaxed">
            Secure your spot for an exceptional dining experience. For groups
            larger than 8, please call us directly.
          </p>
        </div>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold font-work uppercase tracking-widest text-[#CBB790]">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="bg-[#241f1a] border border-[#36302a] text-gray-300 rounded-xl px-4 py-3 outline-none focus:border-amber-500/50 transition-colors placeholder:text-gray-600"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold font-work uppercase tracking-widest text-[#CBB790]">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="bg-[#241f1a] border border-[#36302a] text-gray-300 rounded-xl px-4 py-3 outline-none focus:border-amber-500/50 transition-colors placeholder:text-gray-600"
              />
            </div>

            <div className="md:col-span-1 flex flex-col gap-2">
              <label className="text-xs font-bold font-work uppercase tracking-widest text-[#CBB790]">
                Date
              </label>
              <input
                type="text"
                placeholder="mm/dd/yyyy"
                className="bg-[#241f1a] border border-[#36302a] text-gray-300 rounded-xl px-4 py-3 outline-none focus:border-amber-500/50 transition-colors placeholder:text-gray-600"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold font-work uppercase tracking-widest text-[#CBB790]">
                  Time
                </label>
                <select className="bg-[#241f1a] border border-[#36302a] text-gray-300 rounded-xl px-4 py-3 outline-none focus:border-amber-500/50 transition-colors appearance-none cursor-pointer">
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold font-work uppercase tracking-widest text-[#CBB790]">
                  Guests
                </label>
                <select className="bg-[#241f1a] border border-[#36302a] text-gray-300 rounded-xl px-4 py-3 outline-none focus:border-amber-500/50 transition-colors appearance-none cursor-pointer">
                  <option>2 Guests</option>
                  <option>4 Guests</option>
                  <option>6 Guests</option>
                  <option>8 Guests</option>
                </select>
              </div>
            </div>
          </div>

          <input
            type="submit"
            className="w-full mt-4 bg-[#F4AF25] hover:bg-[#e6a22b] text-[#1a1612] font-bold py-4 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(250,177,49,0.3)] active:scale-[0.98]"
            value="Confirm Reservation"
          />
        </form>
      </div>
    </section>
  );
}
