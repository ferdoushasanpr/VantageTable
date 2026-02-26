import React from "react";

interface NavitemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

export default function NavItem({ icon, label, active = false }: NavitemProps) {
  return (
    <div
      className={`flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition-all ${
        active
          ? "bg-[#f2a922] text-[#120f0a]"
          : "text-stone-500 hover:text-stone-200"
      }`}
    >
      {icon}
      <span className="font-semibold font-work text-sm">{label}</span>
    </div>
  );
}
