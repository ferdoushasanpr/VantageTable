"use client";

import React, { useState } from "react";
import { Image as ImageIcon, Type, Upload, Save, Plus } from "lucide-react";
import ImageCard from "@/components/image-card";

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

        <div className="col-span-5">
          <section className="bg-[#1D1912] p-8 rounded-3xl border border-[#2A2419] shadow-xl h-full">
            <div className="flex items-center justify-between mb-8 border-b border-[#2A2419] pb-4">
              <div className="flex items-center gap-3">
                <ImageIcon size={22} className="text-[#F5A623]" />
                <h3 className="text-xl font-semibold text-white">
                  Hero Carousel
                </h3>
              </div>
              <button className="text-[#F5A623] hover:text-white transition-colors">
                <Plus size={24} />
              </button>
            </div>

            <div className="space-y-6">
              {carouselImages.map((img) => (
                <ImageCard key={img.id} url={img.url} label={img.label} />
              ))}

              {/* Empty State / Add New Slot */}
              <div className="border-2 border-dashed border-[#332D21] rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#F5A623]/50 transition-colors">
                <Upload
                  size={32}
                  className="text-[#8E8370] mb-2"
                  strokeWidth={1.5}
                />
                <p className="text-xs text-[#8E8370] font-medium">
                  Drop new carousel image here
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default SettingsPage;
