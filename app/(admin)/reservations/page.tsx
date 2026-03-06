import React from "react";
import {
  Users,
  Search,
  Filter,
  ChevronDown,
  Edit2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import PageButton from "@/components/pagebutton";
import StatusBadge from "@/components/status-badge";
import { getAllReservations } from "@/actions/reserve";
import { getNameInitial } from "@/utilities/nameInitial";

type Reservation = {
  id: number;
  name: string;
  date: Date;
  time: string;
  guests: number;
  phone: string;
  status: string;
};

const ReservationsPage = async (): Promise<React.ReactNode> => {
  const data = await getAllReservations();
  const reservations = data.data;

  return (
    <main className="flex-1 p-10 flex flex-col">
      <header className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-1">Reservations</h2>
          <p className="text-light">Manage and monitor all guest bookings.</p>
        </div>
      </header>

      <div className="flex items-center justify-end mb-8">
        <div className="flex gap-3">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-light"
              size={18}
            />
            <input
              type="text"
              placeholder="Search customer, phone or status..."
              className="bg-[#1D1912] border border-[#2A2419] rounded-xl py-2.5 pl-12 pr-4 w-80 text-sm focus:outline-none focus:border-[#F5A623] transition-colors"
            />
          </div>
          <button className="bg-[#1D1912] text-[#E0D7C6] border border-[#2A2419] px-4 py-2 rounded-xl text-sm flex items-center gap-2 hover:border-[#F5A623] transition-colors">
            <Filter size={16} /> Filter
          </button>
          <button className="bg-[#1D1912] text-[#E0D7C6] border border-[#2A2419] px-4 py-2 rounded-xl text-sm flex items-center gap-2 hover:border-[#F5A623] transition-colors">
            Sort by Date <ChevronDown size={16} />
          </button>
        </div>
      </div>

      <div className="bg-[#1D1912] rounded-3xl border border-[#2A2419] overflow-hidden shadow-2xl mb-8">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-[#2A2419] text-white text-[11px] uppercase tracking-widest font-bold">
              <th className="px-8 py-5">Customer Name</th>
              <th className="px-8 py-5">Phone</th>
              <th className="px-8 py-5">Date</th>
              <th className="px-8 py-5">Time</th>
              <th className="px-8 py-5">Guests</th>
              <th className="px-8 py-5">Status</th>
              <th className="px-8 py-5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#2A2419]">
            {reservations.map((res: Reservation) => (
              <tr
                key={res.id}
                className="hover:bg-[#231F16] transition-colors group"
              >
                <td className="px-8 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#2A2419] flex items-center justify-center text-primary text-xs font-bold border border-[#332D21]">
                      {getNameInitial(res.name)}
                    </div>
                    <span className="font-bold text-white text-sm">
                      {res.name}
                    </span>
                  </div>
                </td>
                <td className="px-8 py-4 text-sm text-light">{res.phone}</td>
                <td className="px-8 py-4 text-sm text-light">
                  {new Date(res.date).toLocaleString()}
                </td>
                <td className="px-8 py-4 text-sm text-light">{res.time}</td>
                <td className="px-8 py-4">
                  <div className="flex items-center gap-2 text-sm text-light">
                    <Users size={14} className="text-light" /> {res.guests}
                  </div>
                </td>
                <td className="px-8 py-4">
                  <StatusBadge type={res.status} />
                </td>
                <td className="px-8 py-4 text-right">
                  <button className="text-light hover:text-[#F5A623] transition-colors">
                    <Edit2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="p-6 flex justify-between items-center border-t border-[#2A2419] bg-[#1D1912]/50">
          <p className="text-xs text-light">
            Showing 1 to 5 of 42 reservations
          </p>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-[#231F16] text-light">
              <ChevronLeft size={18} />
            </button>
            <PageButton active>1</PageButton>
            <PageButton>2</PageButton>
            <PageButton>3</PageButton>
            <button className="p-2 rounded-full hover:bg-[#231F16] text-light">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ReservationsPage;
