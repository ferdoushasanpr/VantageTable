import Sidebar from "@/components/sidebar/sidebar";
import React from "react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-[#120F08] text-[#E0D7C6] font-work">
      <Sidebar />
      {children}
    </div>
  );
}
