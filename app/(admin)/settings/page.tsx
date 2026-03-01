"use client";

import React, { useState } from "react";
import {
  Image as ImageIcon,
  Type,
  Upload,
  RefreshCw,
  Save,
  Trash2,
  Plus,
} from "lucide-react";

const SettingsPage = (): React.ReactNode => {
  const [carouselImages, setCarouselImages] = useState([
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?w=400&h=600&fit=crop",
      label: "Main Feature",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=600&fit=crop",
      label: "Seasonal Special",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=600&fit=crop",
      label: "Ambience",
    },
  ]);

  return (
    <main className="flex-1 p-10 overflow-y-auto">
      <header className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-2">Website Settings</h2>
        <p className="text-[#8E8370]">
          Update your homepage content and visual assets.
        </p>
      </header>

      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-7 space-y-8">
          <section className="bg-[#1D1912] p-8 rounded-3xl border border-[#2A2419] shadow-xl">
            <div className="flex items-center gap-3 mb-8 border-b border-[#2A2419] pb-4">
              <Type size={22} className="text-[#F5A623]" />
              <h3 className="text-xl font-semibold text-white">
                Hero Section Text
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm text-[#F5A623] mb-2 font-medium">
                  Hero Title
                </label>
                <input
                  type="text"
                  defaultValue="Exquisite Dining Experience"
                  className="w-full bg-[#120F08] border border-[#2A2419] rounded-xl p-4 text-white focus:outline-none focus:border-[#F5A623] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-[#F5A623] mb-2 font-medium">
                  Hero Subtitle
                </label>
                <input
                  type="text"
                  defaultValue="Taste the perfection in every bite"
                  className="w-full bg-[#120F08] border border-[#2A2419] rounded-xl p-4 text-white focus:outline-none focus:border-[#F5A623] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-[#F5A623] mb-2 font-medium">
                  Description
                </label>
                <textarea
                  rows="4"
                  defaultValue="From farm-to-table freshness to world-class culinary techniques, we offer a dining experience that stays with you long after the meal is over."
                  className="w-full bg-[#120F08] border border-[#2A2419] rounded-xl p-4 text-white focus:outline-none focus:border-[#F5A623] resize-none"
                ></textarea>
              </div>

              <div className="pt-4">
                <button className="flex items-center gap-2 bg-[#F5A623] text-black px-8 py-3 rounded-xl font-bold hover:bg-[#d98f1d] transition-all">
                  <Save size={18} />
                  Update Content
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default SettingsPage;
