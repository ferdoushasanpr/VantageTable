import React from "react";
import { Calendar, Clock, Users, Phone, User, CheckCircle } from "lucide-react";

const reservations = [
  {
    id: 1,
    name: "Alexander Wright",
    date: "Oct 24, 2024",
    time: "19:30",
    guests: 2,
    phone: "+44 20 7946 0012",
    status: "Confirmed",
  },
  {
    id: 2,
    name: "Elena Rodriguez",
    date: "Oct 24, 2024",
    time: "20:00",
    guests: 4,
    phone: "+44 20 7946 0558",
    status: "Confirmed",
  },
  {
    id: 3,
    name: "James Sterling",
    date: "Oct 25, 2024",
    time: "18:45",
    guests: 6,
    phone: "+44 20 7946 0119",
    status: "Pending",
  },
  {
    id: 4,
    name: "Sophia Chen",
    date: "Oct 25, 2024",
    time: "21:15",
    guests: 2,
    phone: "+44 20 7946 0882",
    status: "Confirmed",
  },
];

const ReservationListPage = (): React.ReactNode => {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white font-work p-6 md:p-12">
      <header className="max-w-6xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-serif mt-2 tracking-tight">
          Upcoming <span className="text-[#F3B340]">Reservations</span>
        </h1>
      </header>

      <main className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
        {reservations.map((res) => (
          <div
            key={res.id}
            className="group relative bg-[#121212] border border-gray-800 p-8 rounded-sm hover:border-[#F3B340]/40 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="absolute top-6 right-8 flex items-center gap-2">
              <span
                className={`text-[10px] uppercase tracking-widest font-bold ${res.status === "Confirmed" ? "text-green-500" : "text-[#F3B340]"}`}
              >
                {res.status}
              </span>
              <div
                className={`w-1.5 h-1.5 rounded-full ${res.status === "Confirmed" ? "bg-green-500" : "bg-[#F3B340] animate-pulse"}`}
              ></div>
            </div>

            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center bg-[#1A1A1A] group-hover:border-[#F3B340]/50 transition-colors">
                <User
                  size={18}
                  className="text-gray-400 group-hover:text-[#F3B340]"
                />
              </div>
              <h2 className="text-xl font-serif tracking-wide">{res.name}</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-400">
                <Calendar size={16} className="text-[#F3B340]" />
                <span className="text-sm font-light tracking-wide">
                  {res.date}
                </span>
              </div>

              <div className="flex items-center gap-4 text-gray-400">
                <Clock size={16} className="text-[#F3B340]" />
                <span className="text-sm font-light tracking-wide">
                  {res.time}
                </span>
              </div>

              <div className="flex items-center gap-4 text-gray-400">
                <Users size={16} className="text-[#F3B340]" />
                <span className="text-sm font-light tracking-wide">
                  {res.guests} Guests
                </span>
              </div>

              <div className="flex items-center gap-4 text-gray-400 pt-4 border-t border-gray-800 mt-4 group-hover:border-[#F3B340]/20 transition-colors">
                <Phone size={14} className="text-gray-600" />
                <span className="text-xs font-mono">{res.phone}</span>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default ReservationListPage;
