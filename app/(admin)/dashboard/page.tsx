import React from "react";
import { Search, Bell } from "lucide-react";
import Sidebar from "@/components/sidebar/sidebar";
import StatCard from "@/components/statcard";

const DashboardPage = (): React.ReactNode => {
  const reservations = [
    {
      name: "John Doe",
      date: "Oct 24, 2023",
      time: "7:00 PM",
      guests: 4,
      status: "CONFIRMED",
      color: "text-emerald-500",
    },
    {
      name: "Jane Smith",
      date: "Oct 24, 2023",
      time: "7:30 PM",
      guests: 2,
      status: "CONFIRMED",
      color: "text-emerald-500",
    },
    {
      name: "Michael Brown",
      date: "Oct 24, 2023",
      time: "8:00 PM",
      guests: 6,
      status: "ARRIVED",
      color: "text-amber-500",
    },
    {
      name: "Emily Davis",
      date: "Oct 25, 2023",
      time: "6:30 PM",
      guests: 3,
      status: "CONFIRMED",
      color: "text-emerald-500",
    },
    {
      name: "Chris Wilson",
      date: "Oct 25, 2023",
      time: "7:00 PM",
      guests: 2,
      status: "PENDING",
      color: "text-gray-400",
    },
    {
      name: "Sarah Miller",
      date: "Oct 25, 2023",
      time: "8:30 PM",
      guests: 5,
      status: "CONFIRMED",
      color: "text-emerald-500",
    },
    {
      name: "David Taylor",
      date: "Oct 26, 2023",
      time: "6:00 PM",
      guests: 4,
      status: "CANCELLED",
      color: "text-red-500",
    },
  ];

  return (
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

      {/* Reservations Table */}
      <div className="bg-[#1a1610] border border-stone-800/50 rounded-3xl p-6">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-bold">Top 10 Recent Reservations</h3>
          <button className="text-[#f2a922] text-sm font-medium hover:underline">
            View All Reservations
          </button>
        </div>

        <table className="w-full text-left">
          <thead>
            <tr className="text-stone-500 text-[11px] uppercase tracking-widest border-b border-stone-800">
              <th className="pb-4 font-medium">Guest Name</th>
              <th className="pb-4 font-medium">Date</th>
              <th className="pb-4 font-medium">Time</th>
              <th className="pb-4 font-medium">Guests</th>
              <th className="pb-4 font-medium text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-800/50">
            {reservations.map((res, idx) => (
              <tr
                key={idx}
                className="group hover:bg-stone-800/20 transition-colors"
              >
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#3d3324] text-[#f2a922] flex items-center justify-center text-[10px] font-bold">
                      {res.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <span className="font-semibold text-sm">{res.name}</span>
                  </div>
                </td>
                <td className="py-4 text-sm text-stone-400">{res.date}</td>
                <td className="py-4 text-sm text-stone-400">{res.time}</td>
                <td className="py-4 text-sm text-stone-400">
                  <span className="bg-[#241e15] px-2 py-1 rounded-md">
                    {res.guests} Guests
                  </span>
                </td>
                <td
                  className={`py-4 text-right text-[11px] font-bold tracking-tighter ${res.color}`}
                >
                  {res.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default DashboardPage;
