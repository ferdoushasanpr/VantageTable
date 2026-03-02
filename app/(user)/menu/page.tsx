import Link from "next/link";
import React from "react";

const menuData = {
  Starters: [
    {
      name: "Burrata di Bufala",
      price: "$22",
      description: "Heirloom tomatoes, balsamic glaze, basil pesto pearls",
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&h=100&fit=crop",
    },
    {
      name: "Wild Mushroom Risotto",
      price: "$34",
      description: "Porcini, chanterelles, arborio rice, 24-month parmesan",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=100&fit=crop",
    },
  ],
  "Main Course": [
    {
      name: "Lobster Thermidor",
      price: "$58",
      description: "Atlantic lobster, cognac cream, gruyère crust",
      img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=100&h=100&fit=crop",
    },
    {
      name: "Herb Crusted Lamb",
      price: "$52",
      description: "New Zealand rack, pea purée, mint jus, fondant potato",
      img: "https://images.unsplash.com/photo-1623065422902-30a2ad44924b?w=100&h=100&fit=crop",
    },
    {
      name: "Wagyu Steak",
      price: "$120",
      description:
        "A5 Miyazaki Wagyu, silk truffle mash, vintage red wine reduction",
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&h=100&fit=crop",
    },
  ],
  Desserts: [
    {
      name: "Dark Chocolate Soufflé",
      price: "$18",
      description: "70% Valrhona, Madagascar vanilla gelato",
      img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=100&h=100&fit=crop",
    },
    {
      name: "Crème Brûlée",
      price: "$16",
      description: "Tahitian vanilla, caramelized sugar, forest berries",
      img: "https://images.unsplash.com/photo-1623065422902-30a2ad44924b?w=100&h=100&fit=crop",
    },
  ],
};

const MenuPage = (): React.ReactNode => {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white selection:bg-primary selection:text-black">
      <header className="py-24 text-center">
        <span className="text-primary uppercase tracking-[0.4em] text-[10px] font-bold">
          Fine Dining Excellence
        </span>
        <h1 className="text-5xl md:text-7xl mt-6 mb-4 tracking-tight">
          Culinary <span className="text-primary">Menu</span>
        </h1>
        <div className="w-16 h-px bg-primary mx-auto mt-8 opacity-50"></div>
      </header>

      <main className="max-w-6xl mx-auto px-8 pb-32">
        {Object.entries(menuData).map(([category, items]) => (
          <section key={category} className="mb-20 last:mb-0">
            <div className="flex items-center gap-6 mb-12">
              <h2 className="text-primary text-xs uppercase tracking-[0.3em] font-bold whitespace-nowrap">
                {category}
              </h2>
              <div className="w-full h-px bg-linear-to-r from-gray-800 to-transparent"></div>
            </div>

            <div className="pl-8 grid md:grid-cols-2 gap-x-20 gap-y-12">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="group border border-gray-800 p-4 rounded-sm hover:border-[#F3B340]/30 transition-colors"
                >
                  <Link
                    href={`/menu/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className="flex gap-2">
                      <div className="w-24 h-24 -ml-10 rounded-sm overflow-hidden shrink-0">
                        <img src={item.img} alt={item.name} />
                      </div>
                      <div>
                        <div className="flex justify-between items-baseline mb-3 border-b border-dashed border-gray-800 pb-1 group-hover:border-[#F3B340]/30 transition-colors">
                          <h3 className="text-lg font-medium tracking-wide group-hover:text-primary transition-colors">
                            {item.name}
                          </h3>
                          <span className="text-primary font-semibold tracking-tighter">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed italic">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Link>
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
