"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface NavitemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}

export default function NavItem({ icon, label, href }: NavitemProps) {
  const path = usePathname();

  return (
    <Link href={href}>
      <div
        className={`flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition-all ${
          path.startsWith(href)
            ? "bg-[#f2a922] text-[#120f0a]"
            : "text-stone-500 hover:text-stone-200"
        }`}
      >
        {icon}
        <span className="font-semibold font-work text-sm">{label}</span>
      </div>
    </Link>
  );
}
