import React from "react";

interface StatusBadgeProps {
  type: string;
}

export default function StatusBadge({
  type,
}: StatusBadgeProps): React.ReactNode {
  const styles: { [key: string]: string } = {
    Confirmed: "bg-primary/10 text-primary border-primary/20",
    Pending: "bg-light/10 text-light border-light/20",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${styles[type]}`}
    >
      {type}
    </span>
  );
}
