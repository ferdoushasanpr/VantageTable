import React from "react";
import { Search, Bell } from "lucide-react";
import Sidebar from "@/components/sidebar/sidebar";
import StatCard from "@/components/statcard";

const DashboardPage = (): React.ReactNode => {
  return (
    <div className="flex min-h-screen bg-[#120f0a] text-stone-200 font-sans">
      <Sidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-start mb-10">
          <div>
            <h2 className="text-3xl font-bold font-work">Dashboard Overview</h2>
            <p className="text-stone-500 font-work mt-1">
              Welcome back, Marco. Here&apos;s what&apos;s happening today.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500"
                size={18}
              />
              <input
                type="text"
                placeholder="Search orders, guests..."
                className="bg-[#1a1610] border border-stone-800 font-work rounded-full py-2.5 pl-12 pr-6 w-80 placeholder:font-work focus:outline-none focus:border-[#f2a922]/50 transition-all text-sm"
              />
            </div>
            <button className="p-2.5 bg-[#1a1610] border border-stone-800 rounded-full text-stone-400 hover:text-[#f2a922]">
              <Bell size={20} />
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-6 mb-10">
          <StatCard title="Total Food Items" value="42" />
          <StatCard title="Total Reservations" value="128" />
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
