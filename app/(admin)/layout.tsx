"use client";

import Sidebar from "@/components/sidebar/sidebar";
import { usePathname } from "next/navigation";
import React from "react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return (
    <div className="flex min-h-screen bg-[#120F08] text-[#E0D7C6] font-work">
      {!isLoginPage && <Sidebar />}
      {children}
    </div>
  );
}
