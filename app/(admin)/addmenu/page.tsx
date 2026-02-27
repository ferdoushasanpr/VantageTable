"use client";

import React, { useState } from "react";
import {
  PlusCircle,
  Upload,
  Info,
  Settings,
  Save,
  Lightbulb,
} from "lucide-react";
import Sidebar from "@/components/sidebar/sidebar";
import Checkbox from "@/components/checkbox";

const AddMenuPage = (): React.ReactNode => {
  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <div className="flex min-h-screen bg-[#120F08] text-[#E0D7C6] font-sans">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        <header className="mb-8 font-work">
          <p className="text-sm text-[#8E8370] mb-2">
            Dashboard <span className="mx-2">›</span> Menu{" "}
            <span className="mx-2">›</span>{" "}
            <span className="text-[#F5A623]">Add New Food</span>
          </p>
          <h2 className="text-4xl font-bold text-white mb-2">
            Create Menu Item
          </h2>
          <p className="text-[#8E8370]">
            Introduce a new culinary masterpiece to your customers.
          </p>
        </header>
      </main>
    </div>
  );
};

export default AddMenuPage;
