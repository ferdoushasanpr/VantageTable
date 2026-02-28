import React from "react";
import {
  Search,
  Plus,
  Filter,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Bell,
} from "lucide-react";
import PageButton from "@/components/pagebutton";

const ReservationsPage = (): React.ReactNode => {
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
        <div className="flex items-center gap-4">
          <div className="p-2.5 rounded-xl bg-[#1D1912] border border-[#2A2419] text-[#8E8370] hover:text-white cursor-pointer transition-colors">
            <Bell size={20} />
          </div>
          <button className="bg-[#F5A623] text-black px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-[#d98f1d] transition-all shadow-lg shadow-[#F5A623]/20">
            <Plus size={18} />
            Add Reservation
          </button>
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
