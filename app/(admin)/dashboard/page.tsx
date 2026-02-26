import React from "react";

import Sidebar from "@/components/sidebar/sidebar";

const DashboardPage = (): React.ReactNode => {
  return (
    <div className="flex min-h-screen bg-[#120f0a] text-stone-200 font-sans">
      <Sidebar />

      {/* --- Main Content --- */}
      <main className="flex-1 p-8 overflow-y-auto"></main>
    </div>
  );
};

export default DashboardPage;
