"use client";

import React, { useState } from "react";
import { Info, Settings, Save, Lightbulb } from "lucide-react";
import { menuSubmitHandler } from "@/actions/menu";
import ImagePicker from "@/components/image-picker";
import { useSearchParams } from "next/navigation";

const UpdateMenuPage = (): React.ReactNode => {
  const [isAvailable, setIsAvailable] = useState(true);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  console.log(id);
  return (
    <main className="flex-1 p-10 overflow-y-auto">
      <form action={menuSubmitHandler}>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8 space-y-6">
            <section className="bg-[#1D1912] p-8 rounded-3xl border border-[#2A2419]">
              <div className="flex items-center gap-2 mb-6">
                <Info size={20} className="text-primary" />
                <h3 className="text-xl font-semibold">General Information</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-primary mb-2 font-medium">
                    Food Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Signature Truffle Mac & Cheese"
                    className="w-full bg-[#120F08] border border-[#2A2419] rounded-xl p-4 text-white placeholder:font-work focus:outline-none focus:border-[#F5A623] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-primary mb-2 font-medium">
                      Category
                    </label>
                    <select
                      name="category"
                      className="w-full bg-[#120F08] border border-[#2A2419] rounded-xl p-4 text-white appearance-none focus:outline-none"
                    >
                      <option>Appetizers</option>
                      <option>Main Course</option>
                      <option>Desserts</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-primary mb-2 font-medium">
                      Price ($)
                    </label>
                    <input
                      type="number"
                      name="price"
                      placeholder="0.00"
                      className="w-full bg-[#120F08] border border-[#2A2419] rounded-xl p-4 text-white placeholder:font-work focus:outline-none focus:border-[#F5A623]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-primary mb-2 font-medium">
                    Description
                  </label>
                  <textarea
                    rows={4}
                    name="desc"
                    placeholder="Tell customers about the ingredients, taste, and preparation..."
                    className="w-full bg-[#120F08] border border-[#2A2419] rounded-xl p-4 text-white placeholder:font-work focus:outline-none focus:border-[#F5A623] resize-none"
                  ></textarea>
                </div>
              </div>
            </section>

            <section className="bg-[#1D1912] p-8 rounded-3xl border border-[#2A2419]">
              <div className="flex items-center gap-2 mb-6">
                <Settings size={20} className="text-primary" />
                <h3 className="text-xl font-semibold">
                  Availability & Options
                </h3>
              </div>

              <div className="bg-[#262118] p-5 rounded-2xl flex justify-between items-center mb-6">
                <div>
                  <p className="font-semibold">Available for Order</p>
                  <p className="text-xs text-light">
                    Toggle to show or hide this item from the public menu.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsAvailable(!isAvailable)}
                  className={`w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-300 ${
                    isAvailable ? "bg-primary" : "bg-[#332D21]"
                  }`}
                >
                  <div
                    className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
                      isAvailable ? "translate-x-7" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              <input
                type="hidden"
                name="status"
                value={isAvailable ? "true" : "false"}
              />
            </section>
          </div>

          <div className="col-span-4 space-y-6">
            <ImagePicker />

            <button
              type="submit"
              className="w-full bg-primary text-[#120F08] py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#d98f1d] transition-all shadow-lg shadow-[#F5A623]/10"
            >
              <Save size={20} />
              SAVE FOOD ITEM
            </button>
            <button className="w-full bg-[#262118] text-light py-4 rounded-xl font-bold border border-[#332D21] hover:text-white transition-colors uppercase tracking-wide text-sm">
              Discard Changes
            </button>

            <div className="bg-[#231F16]/50 p-6 rounded-2xl border border-[#332D21] flex gap-4">
              <Lightbulb className="text-primary shrink-0" size={24} />
              <p className="text-xs text-light font-bold leading-relaxed">
                <span className="text-primary font-bold">PRO TIP:</span>{" "}
                High-quality vertical shots (9:16) perform 40% better on mobile
                menu views. Try to use natural lighting for food photos.
              </p>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default UpdateMenuPage;
