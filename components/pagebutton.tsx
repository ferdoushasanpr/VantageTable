import React from "react";

interface PageButtonProps {
  children: React.ReactNode;
  active?: boolean;
}

export default function PageButton({
  children,
  active = false,
}: PageButtonProps): React.ReactNode {
  return (
    <button
      className={`w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold transition-all ${active ? "bg-primary text-black" : "text-light hover:bg-[#231F16] hover:text-white"}`}
    >
      {children}
    </button>
  );
}
