import React from "react";
import { Calendar, Clock, Users, Phone, User } from "lucide-react";
import { getAllReservations } from "@/actions/reserve";
import { Reservation } from "@/types/reservation";

export const dynamic = "force-dynamic";

const ReservationListPage = async (): Promise<React.ReactNode> => {
  const data = await getAllReservations();
  const reservations = data.data;
  return (
    <div className="min-h-screen bg-dark-light text-white font-work p-6 md:p-12">
      <header className="max-w-6xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl mt-2 tracking-tight">
          Upcoming <span className="text-primary">Reservations</span>
        </h1>
      </header>

      <main className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
        {reservations.map((res: Reservation) => (
          <div
            key={res.id}
            className="group relative bg-dark border border-gray-800 p-8 rounded-sm hover:border-[#F3B340]/40 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="absolute top-6 right-8 flex items-center gap-2">
              <span
                className={`text-[10px] uppercase tracking-widest font-bold ${res.status === "Confirmed" ? "text-green-500" : "text-[#F3B340]"}`}
              >
                {res.status}
              </span>
              <div
                className={`w-1.5 h-1.5 rounded-full ${res.status === "Confirmed" ? "bg-green-500" : "bg-primary animate-pulse"}`}
              ></div>
            </div>

            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center bg-dark group-hover:border-[#F3B340]/50 transition-colors">
                <User
                  size={18}
                  className="text-gray-400 group-hover:text-[#F3B340]"
                />
              </div>
              <h2 className="text-xl tracking-wide">{res.name}</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-400">
                <Calendar size={16} className="text-primary" />
                <span className="text-sm font-light tracking-wide">
                  {new Date(res.date).toLocaleString()}
                </span>
              </div>

              <div className="flex items-center gap-4 text-gray-400">
                <Clock size={16} className="text-primary" />
                <span className="text-sm font-light tracking-wide">
                  {res.time}
                </span>
              </div>

              <div className="flex items-center gap-4 text-gray-400">
                <Users size={16} className="text-primary" />
                <span className="text-sm font-light tracking-wide">
                  {res.guests} Guests
                </span>
              </div>

              <div className="flex items-center gap-4 text-gray-400 pt-4 border-t border-gray-800 mt-4 group-hover:border-[#F3B340]/20 transition-colors">
                <Phone size={14} className="text-gray-600" />
                <span className="text-xs">{res.phone}</span>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default ReservationListPage;
