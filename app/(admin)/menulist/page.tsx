import React from "react";
import {
  Search,
  Plus,
  Edit2,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import FilterTab from "@/components/filtertab";
import PageButton from "@/components/pagebutton";
import { fetchMenu } from "@/actions/menu";
import Image from "next/image";
import Link from "next/link";

type Menuitems = {
  id: number;
  name: string;
  desc: string;
  cat: string;
  price: number;
  slug: string;
  image: string;
  status: boolean;
};

const MenulistPage = async (): Promise<React.ReactNode> => {
  const data = await fetchMenu();
  const menuItems = data.data;

  return (
    <main className="flex-1 p-10 flex flex-col">
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold text-white">Food Menu</h2>
          <span className="bg-[#231F16] text-primary text-xs px-3 py-1 rounded-full border border-[#F5A623]/20">
            128 Items
          </span>
        </div>

        <div className="flex gap-4 items-center">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-light"
              size={18}
            />
            <input
              type="text"
              placeholder="Search menu items..."
              className="bg-[#1D1912] border border-[#2A2419] rounded-xl py-2.5 pl-12 pr-4 w-72 text-sm focus:outline-none focus:border-[#F5A623] transition-colors"
            />
          </div>
          <Link
            href="/addmenu"
            className="bg-primary text-black px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-[#d98f1d] transition-all"
          >
            <Plus size={18} />
            Add New Item
          </Link>
        </div>
      </header>

      <div className="flex gap-3 mb-8">
        <FilterTab label="All Menu" active />
        <FilterTab label="Appetizers" />
        <FilterTab label="Mains" />
        <FilterTab label="Desserts" />
        <FilterTab label="Drinks" />
        <FilterTab label="Specialties" />
      </div>

      <div className="bg-[#1D1912] rounded-3xl border border-[#2A2419] overflow-hidden flex flex-col flex-1 justify-between shadow-2xl">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-[#2A2419] text-light text-[11px] uppercase tracking-widest font-bold">
              <th className="px-8 py-5">Image</th>
              <th className="px-8 py-5">Product Name</th>
              <th className="px-8 py-5">Category</th>
              <th className="px-8 py-5">Price</th>
              <th className="px-8 py-5">Status</th>
              <th className="px-8 py-5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#2A2419]">
            {menuItems &&
              menuItems.map((item: Menuitems) => (
                <tr
                  key={item.id}
                  className="hover:bg-[#231F16] transition-colors group"
                >
                  <td className="px-8 py-4">
                    <Image
                      src={item.image}
                      width={80}
                      height={80}
                      alt={item.name}
                      className="w-14 h-14 rounded-2xl object-cover border border-[#2A2419]"
                    />
                  </td>
                  <td className="px-8 py-4">
                    <p className="font-bold text-white text-sm">{item.name}</p>
                    <p className="text-xs text-light">{item.desc}</p>
                  </td>
                  <td className="px-8 py-4 text-sm text-light">{item.cat}</td>
                  <td className="px-8 py-4 font-bold text-primary">
                    ${item.price}
                  </td>
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${item.status ? "bg-green-500" : "bg-red-500"}`}
                      />
                      <span
                        className={`text-xs font-semibold ${item.status ? "text-green-500" : "text-red-500"}`}
                      >
                        {item.status ? "In Stock" : "Out of Stock"}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-4">
                    <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 bg-[#231F16] border border-[#332D21] rounded-lg text-light hover:text-primary hover:border-primary transition-all">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-2 bg-[#231F16] border border-[#332D21] rounded-lg text-light hover:text-red-500 hover:border-red-500 transition-all">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <footer className="p-6 border-t border-[#2A2419] flex justify-between items-center bg-[#1D1912]">
          <p className="text-xs text-light">Showing 1 to 4 of 128 items</p>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-[#231F16] text-light">
              <ChevronLeft size={18} />
            </button>
            <PageButton active>1</PageButton>
            <PageButton>2</PageButton>
            <PageButton>3</PageButton>
            <span className="text-light px-2 text-sm">...</span>
            <PageButton>32</PageButton>
            <button className="p-2 rounded-full hover:bg-[#231F16] text-light">
              <ChevronRight size={18} />
            </button>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default MenulistPage;
