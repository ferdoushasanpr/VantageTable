import React from "react";
import Image from "next/image";
import {
  CalendarDays,
  LayoutDashboard,
  LogOut,
  PlusCircle,
  Settings,
  UtensilsCrossed,
} from "lucide-react";
import NavIcon from "@/assets/icons/Icon.png";
import NavItem from "./sidebar-navitem";

export default function Sidebar(): React.ReactNode {
  return (
    <aside className="w-64 bg-[#1a1610] flex flex-col p-6 border-r border-stone-800/50 sticky top-0 h-screen">
      <div className="flex items-center gap-3 mb-10">
        <Image src={NavIcon} alt="Gourmet Haven Logo" width={18} height={24} />
        <div>
          <h1 className="font-bold font-work text-lg leading-tight">
            GourmetAdmin
          </h1>
          <p className="text-[10px] font-work uppercase tracking-widest text-stone-500">
            Management Suite
          </p>
        </div>
      </div>

      <nav className="flex-1 space-y-2">
        <NavItem
          icon={<LayoutDashboard size={20} />}
          label="Dashboard"
          href="/dashboard"
        />
        <NavItem
          icon={<PlusCircle size={20} />}
          label="Add Food"
          href="/addmenu"
        />
        <NavItem
          icon={<UtensilsCrossed size={20} />}
          label="Food List"
          href="/menulist"
        />
        <NavItem
          icon={<CalendarDays size={20} />}
          label="Reservations"
          href="/reservations"
        />
      </nav>

      <div className="mt-auto space-y-6">
        <NavItem
          icon={<Settings size={20} />}
          label="Settings"
          href="/settings"
        />

        <button className="w-full bg-[#2a1a15] text-red-400 py-3 rounded-xl flex items-center justify-center gap-2 font-medium font-work hover:bg-red-950/30 transition-colors">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}
