import React from "react";

const menuData = {
  Starters: [
    {
      name: "Burrata di Bufala",
      price: "$22",
      description: "Heirloom tomatoes, balsamic glaze, basil pesto pearls",
    },
    {
      name: "Wild Mushroom Risotto",
      price: "$34",
      description: "Porcini, chanterelles, arborio rice, 24-month parmesan",
    },
  ],
  "Main Course": [
    {
      name: "Lobster Thermidor",
      price: "$58",
      description: "Atlantic lobster, cognac cream, gruyère crust",
    },
    {
      name: "Herb Crusted Lamb",
      price: "$52",
      description: "New Zealand rack, pea purée, mint jus, fondant potato",
    },
    {
      name: "Wagyu Steak",
      price: "$120",
      description:
        "A5 Miyazaki Wagyu, silk truffle mash, vintage red wine reduction",
    },
  ],
  Desserts: [
    {
      name: "Dark Chocolate Soufflé",
      price: "$18",
      description: "70% Valrhona, Madagascar vanilla gelato",
    },
    {
      name: "Crème Brûlée",
      price: "$16",
      description: "Tahitian vanilla, caramelized sugar, forest berries",
    },
  ],
};

const MenuPage = (): React.ReactNode => {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white font-sans selection:bg-[#F3B340] selection:text-black">
      {/* Header Section */}
      <header className="py-24 text-center">
        <span className="text-[#F3B340] uppercase tracking-[0.4em] text-[10px] font-bold">
          Fine Dining Excellence
        </span>
        <h1 className="text-5xl md:text-7xl font-serif mt-6 mb-4 tracking-tight">
          Culinary <span className="text-[#F3B340]">Menu</span>
        </h1>
        <div className="w-16 h-px bg-[#F3B340] mx-auto mt-8 opacity-50"></div>
      </header>

      {/* Menu Container */}
      <main className="max-w-5xl mx-auto px-8 pb-32">
        {Object.entries(menuData).map(([category, items]) => (
          <section key={category} className="mb-20 last:mb-0">
            {/* Category Title */}
            <div className="flex items-center gap-6 mb-12">
              <h2 className="text-[#F3B340] text-xs uppercase tracking-[0.3em] font-bold whitespace-nowrap">
                {category}
              </h2>
              <div className="w-full h-px bg-linear-to-r from-gray-800 to-transparent"></div>
            </div>

            {/* Items Grid */}
            <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">
              {items.map((item, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-baseline mb-3 border-b border-dashed border-gray-800 pb-1 group-hover:border-[#F3B340]/30 transition-colors">
                    <h3 className="text-lg font-medium tracking-wide group-hover:text-[#F3B340] transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-[#F3B340] font-semibold font-mono tracking-tighter">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed italic">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default MenuPage;
