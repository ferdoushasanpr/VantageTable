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

const MenulistPage = (): React.ReactNode => {
  const menuItems = [
    {
      id: 1,
      name: "Classic Beef Burger",
      desc: "Grass-fed beef, cheddar, brioche",
      cat: "Mains",
      price: "14.99",
      status: "In Stock",
      statusColor: "text-green-500",
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&h=100&fit=crop",
    },
    {
      id: 2,
      name: "Gourmet Caesar Salad",
      desc: "Romaine, parmesan, croutons",
      cat: "Appetizers",
      price: "9.50",
      status: "In Stock",
      statusColor: "text-green-500",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=100&fit=crop",
    },
    {
      id: 3,
      name: "Chocolate Lava Cake",
      desc: "Rich chocolate with vanilla dip",
      cat: "Desserts",
      price: "7.25",
      status: "Low Stock",
      statusColor: "text-[#F5A623]",
      img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=100&h=100&fit=crop",
    },
    {
      id: 4,
      name: "Tropical Mango Smoothie",
      desc: "Fresh mango, coconut milk",
      cat: "Drinks",
      price: "5.50",
      status: "Out of Stock",
      statusColor: "text-red-500",
      img: "https://images.unsplash.com/photo-1623065422902-30a2ad44924b?w=100&h=100&fit=crop",
    },
    {
      id: 1,
      name: "Classic Beef Burger",
      desc: "Grass-fed beef, cheddar, brioche",
      cat: "Mains",
      price: "14.99",
      status: "In Stock",
      statusColor: "text-green-500",
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&h=100&fit=crop",
    },
    {
      id: 2,
      name: "Gourmet Caesar Salad",
      desc: "Romaine, parmesan, croutons",
      cat: "Appetizers",
      price: "9.50",
      status: "In Stock",
      statusColor: "text-green-500",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=100&fit=crop",
    },
  ];

  return (
    <main className="flex-1 p-10 flex flex-col">
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold text-white">Food Menu</h2>
          <span className="bg-[#231F16] text-[#F5A623] text-xs px-3 py-1 rounded-full border border-[#F5A623]/20">
            128 Items
          </span>
        </div>

        <div className="flex gap-4 items-center">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8E8370]"
              size={18}
            />
            <input
              type="text"
              placeholder="Search menu items..."
              className="bg-[#1D1912] border border-[#2A2419] rounded-xl py-2.5 pl-12 pr-4 w-72 text-sm focus:outline-none focus:border-[#F5A623] transition-colors"
            />
          </div>
          <button className="bg-[#F5A623] text-black px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-[#d98f1d] transition-all">
            <Plus size={18} />
            Add New Item
          </button>
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

      <div className="bg-[#1D1912] rounded-3xl border border-[#2A2419] overflow-hidden flex-1 shadow-2xl">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-[#2A2419] text-[#8E8370] text-[11px] uppercase tracking-widest font-bold">
              <th className="px-8 py-5">Image</th>
              <th className="px-8 py-5">Product Name</th>
              <th className="px-8 py-5">Category</th>
              <th className="px-8 py-5">Price</th>
              <th className="px-8 py-5">Status</th>
              <th className="px-8 py-5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#2A2419]">
            {menuItems.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-[#231F16] transition-colors group"
              >
                <td className="px-8 py-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-14 h-14 rounded-2xl object-cover border border-[#2A2419]"
                  />
                </td>
                <td className="px-8 py-4">
                  <p className="font-bold text-white text-sm">{item.name}</p>
                  <p className="text-xs text-[#8E8370]">{item.desc}</p>
                </td>
                <td className="px-8 py-4 text-sm text-[#E0D7C6]">{item.cat}</td>
                <td className="px-8 py-4 font-bold text-[#F5A623]">
                  ${item.price}
                </td>
                <td className="px-8 py-4">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${item.statusColor.replace("text-", "bg-")}`}
                    />
                    <span
                      className={`text-xs font-semibold ${item.statusColor}`}
                    >
                      {item.status}
                    </span>
                  </div>
                </td>
                <td className="px-8 py-4">
                  <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 bg-[#231F16] border border-[#332D21] rounded-lg text-[#8E8370] hover:text-[#F5A623] hover:border-[#F5A623] transition-all">
                      <Edit2 size={16} />
                    </button>
                    <button className="p-2 bg-[#231F16] border border-[#332D21] rounded-lg text-[#8E8370] hover:text-red-500 hover:border-red-500 transition-all">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <footer className="p-6 border-t border-[#2A2419] flex justify-between items-center bg-[#1D1912]">
          <p className="text-xs text-[#8E8370]">Showing 1 to 4 of 128 items</p>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-[#231F16] text-[#8E8370]">
              <ChevronLeft size={18} />
            </button>
            <PageButton active>1</PageButton>
            <PageButton>2</PageButton>
            <PageButton>3</PageButton>
            <span className="text-[#8E8370] px-2 text-sm">...</span>
            <PageButton>32</PageButton>
            <button className="p-2 rounded-full hover:bg-[#231F16] text-[#8E8370]">
              <ChevronRight size={18} />
            </button>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default MenulistPage;
