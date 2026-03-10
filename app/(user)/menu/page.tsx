import { fetchMenu } from "@/actions/menu";
import { Menuitem } from "@/types/menu";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const categories = ["Main Course", "Appetizers", "Desserts"];

const MenuPage = async (): Promise<React.ReactNode> => {
  const data = await fetchMenu();
  const menuItems = data.data;

  const filterMenu = (cat: string) => {
    return menuItems.filter((item: Menuitem) => item.cat == cat);
  };

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
        {categories.map((category) => (
          <section key={category} className="mb-20 last:mb-0">
            <div className="flex items-center gap-6 mb-12">
              <h2 className="text-primary text-xs uppercase tracking-[0.3em] font-bold whitespace-nowrap">
                {category}
              </h2>
              <div className="w-full h-px bg-linear-to-r from-gray-800 to-transparent"></div>
            </div>

            <div className="pl-8 grid md:grid-cols-2 gap-x-20 gap-y-12">
              {filterMenu(category).map((item: Menuitem) => (
                <div
                  key={item.id}
                  className="group border border-gray-800 p-4 rounded-sm hover:border-[#F3B340]/30 transition-colors"
                >
                  <Link
                    href={`/menu/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className="flex gap-2">
                      <div className="w-24 h-24 -ml-10 rounded-sm overflow-hidden shrink-0 relative">
                        <Image
                          src={item.image}
                          fill
                          className="object-cover"
                          alt={item.name}
                        />
                      </div>
                      <div>
                        <div className="flex justify-between items-baseline mb-3 border-b border-dashed border-gray-800 pb-1 group-hover:border-[#F3B340]/30 transition-colors">
                          <h3 className="text-lg font-medium tracking-wide group-hover:text-primary transition-colors">
                            {item.name}
                          </h3>
                          <span className="text-primary font-semibold tracking-tighter">
                            ${item.price}
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed italic">
                          {item.desc}
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
