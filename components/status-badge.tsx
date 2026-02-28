import React from "react";

interface StatusBadgeProps {
  type: string;
}

export default function StatusBadge({
  type,
}: StatusBadgeProps): React.ReactNode {
  const styles: { [key: string]: string } = {
    Confirmed: "bg-[#F5A623]/10 text-[#F5A623] border-[#F5A623]/20",
    Pending: "bg-[#8E8370]/10 text-[#8E8370] border-[#8E8370]/20",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${styles[type]}`}
    >
      {type}
    </span>
  );
}
