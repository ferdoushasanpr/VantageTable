import React from "react";

interface FilterTabProps {
  label: string;
  active?: boolean;
}

export default function FilterTab({
  label,
  active = false,
}: FilterTabProps): React.ReactNode {
  return (
    <button
      className={`px-5 py-2 rounded-xl text-sm font-semibold border transition-all ${active ? "bg-[#F5A623] text-black border-[#F5A623]" : "bg-[#1D1912] text-[#8E8370] border-[#2A2419] hover:border-[#F5A623] hover:text-[#F5A623]"}`}
    >
      {label}
    </button>
  );
}
