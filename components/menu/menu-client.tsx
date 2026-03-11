"use client";

import { Menuitem } from "@/types/menu";
import Link from "next/link";
import React, { useState } from "react";

interface MenuClientProps {
  menuItems: Menuitem[];
}

export default function MenuClient({
  menuItems,
}: MenuClientProps): React.ReactNode {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Main Course", "Appetizers", "Desserts"];

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item: Menuitem) => item.cat === activeCategory);

  return (
    <div className="bg-dark text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-bold mb-3">
            Discover Our Flavors
          </p>
          <h1 className="text-2xl md:text-4xl font-bold mb-10">
            Culinary Menu
          </h1>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-2 rounded-full border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-black border-primary font-bold"
                    : "bg-transparent border-gray-800 text-gray-300 hover:border-gray-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mt-16">
          {filteredItems.map((item: Menuitem) => (
            <div key={item.id} className="group border-b border-gray-900 pb-8">
              <div className="flex justify-between items-baseline mb-2">
                <Link href={`/menu/${item.slug}`}>
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    {item.name}
                    <span className="w-2 h-2 rounded-full bg-primary/40 inline-block"></span>
                  </h3>
                </Link>
                <span className="text-primary font-bold text-md">
                  {item.price}
                </span>
              </div>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
