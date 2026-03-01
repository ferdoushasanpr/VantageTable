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

const ReservationsPage = (): React.ReactNode => {
  const reservations = [
    {
      id: 1,
      initials: "JD",
      name: "John Doe",
      phone: "(555) 123-4567",
      date: "Oct 24, 2023",
      time: "19:00",
      guests: 4,
      status: "Confirmed",
    },
    {
      id: 2,
      initials: "JS",
      name: "Jane Smith",
      phone: "(555) 987-6543",
      date: "Oct 24, 2023",
      time: "20:30",
      guests: 2,
      status: "Pending",
    },
    {
      id: 3,
      initials: "RB",
      name: "Robert Brown",
      phone: "(555) 456-7890",
      date: "Oct 25, 2023",
      time: "18:00",
      guests: 6,
      status: "Confirmed",
    },
    {
      id: 4,
      initials: "ED",
      name: "Emily Davis",
      phone: "(555) 222-3333",
      date: "Oct 25, 2023",
      time: "19:15",
      guests: 2,
      status: "Pending",
    },
    {
      id: 5,
      initials: "MW",
      name: "Michael Wilson",
      phone: "(555) 444-5555",
      date: "Oct 26, 2023",
      time: "21:00",
      guests: 3,
      status: "Confirmed",
    },
  ];

  return (
    <main className="flex-1 p-10 flex flex-col">
      {/* Header Section */}
      <header className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-1">Reservations</h2>
          <p className="text-[#8E8370]">
            Manage and monitor all guest bookings.
          </p>
        </div>
      </header>

      {/* Filters and Tabs */}
      <div className="flex items-center justify-end mb-8">
        <div className="flex gap-3">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8E8370]"
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

      {/* Reservation Table */}
      <div className="bg-[#1D1912] rounded-3xl border border-[#2A2419] overflow-hidden shadow-2xl mb-8">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-[#2A2419] text-[#8E8370] text-[11px] uppercase tracking-widest font-bold">
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
            {reservations.map((res) => (
              <tr
                key={res.id}
                className="hover:bg-[#231F16] transition-colors group"
              >
                <td className="px-8 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#2A2419] flex items-center justify-center text-[#F5A623] text-xs font-bold border border-[#332D21]">
                      {res.initials}
                    </div>
                    <span className="font-bold text-white text-sm">
                      {res.name}
                    </span>
                  </div>
                </td>
                <td className="px-8 py-4 text-sm text-[#8E8370]">
                  {res.phone}
                </td>
                <td className="px-8 py-4 text-sm text-[#E0D7C6]">{res.date}</td>
                <td className="px-8 py-4 text-sm text-[#E0D7C6]">{res.time}</td>
                <td className="px-8 py-4">
                  <div className="flex items-center gap-2 text-sm text-[#E0D7C6]">
                    <Users size={14} className="text-[#8E8370]" /> {res.guests}
                  </div>
                </td>
                <td className="px-8 py-4">
                  <StatusBadge type={res.status} />
                </td>
                <td className="px-8 py-4 text-right">
                  <button className="text-[#8E8370] hover:text-[#F5A623] transition-colors">
                    <Edit2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Table Footer */}
        <div className="p-6 flex justify-between items-center border-t border-[#2A2419] bg-[#1D1912]/50">
          <p className="text-xs text-[#8E8370]">
            Showing 1 to 5 of 42 reservations
          </p>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-[#231F16] text-[#8E8370]">
              <ChevronLeft size={18} />
            </button>
            <PageButton active>1</PageButton>
            <PageButton>2</PageButton>
            <PageButton>3</PageButton>
            <button className="p-2 rounded-full hover:bg-[#231F16] text-[#8E8370]">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ReservationsPage;
