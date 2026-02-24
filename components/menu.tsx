"use client";

import React, { useState } from "react";

const Menu = (): React.ReactNode => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Starters", "Main Course", "Desserts"];

  const menuItems = [
    {
      name: "Burrata di Bufala",
      price: "$22",
      description: "Heirloom tomatoes, balsamic glaze, basil pesto pearls",
      category: "Starters",
    },
    {
      name: "Wild Mushroom Risotto",
      price: "$34",
      description: "Porcini, chanterelles, arborio rice, 24-month parmesan",
      category: "Main Course",
    },
    {
      name: "Lobster Thermidor",
      price: "$68",
      description: "Atlantic lobster, cognac cream, gruyère crust",
      category: "Main Course",
    },
    {
      name: "Herb Crusted Lamb",
      price: "$52",
      description: "New Zealand rack, pea purée, mint jus, fondant potato",
      category: "Main Course",
    },
    {
      name: "Dark Chocolate Soufflé",
      price: "$18",
      description: "70% Valrhona, Madagascar vanilla gelato",
      category: "Desserts",
    },
    {
      name: "Crème Brûlée",
      price: "$16",
      description: "Tahitian vanilla, caramelized sugar, forest berries",
      category: "Desserts",
    },
  ];

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-[#0a0a0a] text-white font-sans px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#F4AF25] uppercase tracking-[0.2em] text-sm font-bold font-work mb-3">
            Discover Our Flavors
          </p>
          <h1 className="text-2xl md:text-4xl font-bold font-work mb-10">
            Culinary Menu
          </h1>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-2 font-work rounded-full border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#F4AF25] text-black border-[#F4AF25] font-bold"
                    : "bg-transparent border-gray-800 text-gray-300 hover:border-gray-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mt-16">
          {filteredItems.map((item, index) => (
            <div key={index} className="group border-b border-gray-900 pb-8">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-bold font-work flex items-center gap-2">
                  {item.name}
                  <span className="w-2 h-2 rounded-full bg-[#c48e2a]/40 inline-block"></span>
                </h3>
                <span className="text-[#F4AF25] font-bold font-work text-md">
                  {item.price}
                </span>
              </div>
              <p className="text-gray-400 text-sm font-light font-work leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
