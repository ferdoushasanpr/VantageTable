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
import Checkbox from "@/components/checkbox";

const AddMenuPage = (): React.ReactNode => {
  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <main className="flex-1 p-10 overflow-y-auto">
      <div className="grid grid-cols-12 gap-8">
        {/* Form Section */}
        <div className="col-span-8 space-y-6">
          {/* General Info */}
          <section className="bg-[#1D1912] p-8 rounded-3xl border border-[#2A2419]">
            <div className="flex items-center gap-2 mb-6">
              <Info size={20} className="text-[#F5A623]" />
              <h3 className="text-xl font-semibold font-work">
                General Information
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm text-[#F5A623] mb-2 font-medium font-work">
                  Food Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Signature Truffle Mac & Cheese"
                  className="w-full bg-[#120F08] font-work border border-[#2A2419] rounded-xl p-4 text-white placeholder:font-work focus:outline-none focus:border-[#F5A623] transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#F5A623] mb-2 font-medium font-work">
                    Category
                  </label>
                  <select className="w-full bg-[#120F08] font-work border border-[#2A2419] rounded-xl p-4 text-white appearance-none focus:outline-none">
                    <option>Appetizers</option>
                    <option>Main Course</option>
                    <option>Desserts</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-[#F5A623] mb-2 font-medium font-work">
                    Price ($)
                  </label>
                  <input
                    type="text"
                    placeholder="0.00"
                    className="w-full bg-[#120F08] font-work border border-[#2A2419] rounded-xl p-4 text-white placeholder:font-work focus:outline-none focus:border-[#F5A623]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-[#F5A623] mb-2 font-medium font-work">
                  Description
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell customers about the ingredients, taste, and preparation..."
                  className="w-full bg-[#120F08] font-work border border-[#2A2419] rounded-xl p-4 text-white placeholder:font-work focus:outline-none focus:border-[#F5A623] resize-none"
                ></textarea>
              </div>
            </div>
          </section>

          {/* Availability */}
          <section className="bg-[#1D1912] p-8 rounded-3xl border border-[#2A2419]">
            <div className="flex items-center gap-2 mb-6">
              <Settings size={20} className="text-[#F5A623]" />
              <h3 className="text-xl font-semibold font-work">
                Availability & Options
              </h3>
            </div>

            <div className="bg-[#262118] p-5 rounded-2xl flex justify-between items-center mb-6">
              <div>
                <p className="font-semibold font-work">Available for Order</p>
                <p className="text-xs text-[#8E8370] font-work">
                  Toggle to show or hide this item from the public menu.
                </p>
              </div>
              <button
                onClick={() => setIsAvailable(!isAvailable)}
                className={`w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-300 ${isAvailable ? "bg-[#F5A623]" : "bg-[#332D21]"}`}
              >
                <div
                  className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${isAvailable ? "translate-x-7" : "translate-x-0"}`}
                />
              </button>
            </div>

            <div className="space-y-4 font-work">
              <Checkbox label="Mark as Vegetarian" />
              <Checkbox label="Spicy Item (Low/Med/High)" />
              <Checkbox label="Contains Nuts / Allergens" />
            </div>
          </section>
        </div>

        {/* Media Section */}
        <div className="col-span-4 space-y-6">
          <section className="bg-[#1D1912] p-8 rounded-3xl border border-[#2A2419]">
            <div className="flex items-center gap-2 mb-6">
              <Upload size={20} className="text-[#F5A623]" />
              <h3 className="text-xl font-semibold font-work">Food Media</h3>
            </div>

            <div className="border-2 border-dashed border-[#332D21] rounded-2xl p-10 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#F5A623] transition-colors mb-6">
              <div className="text-[#F5A623] mb-4">
                <Upload size={48} strokeWidth={1} />
              </div>
              <p className="font-bold font-work text-white mb-1">
                Click to upload image
              </p>
              <p className="text-[10px] font-work text-[#8E8370] uppercase">
                PNG, JPG or WEBP (Max. 5MB)
              </p>
            </div>

            <div className="flex gap-3">
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=100&fit=crop"
                className="w-14 h-14 rounded-xl object-cover border-2 border-[#F5A623]"
                alt="prev"
              />
              <img
                src="https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445?w=100&h=100&fit=crop"
                className="w-14 h-14 rounded-xl object-cover opacity-50"
                alt="prev"
              />
              <div className="w-14 h-14 rounded-xl border-2 border-dashed border-[#332D21] flex items-center justify-center text-[#8E8370] hover:text-[#F5A623] cursor-pointer">
                <PlusCircle size={20} />
              </div>
            </div>
          </section>

          <button className="w-full bg-[#F5A623] text-[#120F08] font-work py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#d98f1d] transition-all shadow-lg shadow-[#F5A623]/10">
            <Save size={20} />
            SAVE FOOD ITEM
          </button>
          <button className="w-full bg-[#262118] text-[#8E8370] font-work py-4 rounded-xl font-bold border border-[#332D21] hover:text-white transition-colors uppercase tracking-wide text-sm">
            Discard Changes
          </button>

          <div className="bg-[#231F16]/50 p-6 rounded-2xl border border-[#332D21] flex gap-4">
            <Lightbulb className="text-[#F5A623] shrink-0" size={24} />
            <p className="text-xs text-[#8E8370] font-work font-bold leading-relaxed">
              <span className="text-[#F5A623] font-bold">PRO TIP:</span>{" "}
              High-quality vertical shots (9:16) perform 40% better on mobile
              menu views. Try to use natural lighting for food photos.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddMenuPage;
