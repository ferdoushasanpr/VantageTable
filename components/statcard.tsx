import { UtensilsCrossed } from "lucide-react";
import React from "react";

interface StatCardProps {
  title: string;
  value: string;
}

export default function StatCard({
  title,
  value,
}: StatCardProps): React.ReactNode {
  return (
    <div className="bg-[#1a1610] border border-stone-800/50 p-8 rounded-4xl relative overflow-hidden group">
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-[#f2a922]"></div>
          <p className="text-stone-500 text-sm font-medium font-work">
            {title}
          </p>
        </div>
        <div className="flex items-baseline gap-4">
          <h4 className="text-6xl font-bold text-white font-work">{value}</h4>
        </div>
        <p className="text-stone-600 text-xs font-work mt-4">
          Confirmed bookings this month
        </p>
      </div>
      <UtensilsCrossed
        size={120}
        className="absolute -right-6 top-0 text-stone-500 rotate-12 group-hover:scale-110 transition-transform"
      />
    </div>
  );
}
