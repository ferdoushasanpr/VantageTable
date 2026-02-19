import Image from "next/image";
import Link from "next/link";
import { CalendarDays, CircleStar } from "lucide-react";
import HeroImage from "@/assets/images/Gourmet-Plating.png";

export default function HeroSection() {
  return (
    <section className="bg-[#12100A] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-20">
          <div className="w-1/2">
            <span className="inline-flex gap-2 text-[#F4AF25] bg-[#F4AF25]/20 border-[#F4AF25] border px-4 py-1 font-bold uppercase font-work text-xs my-6 rounded-full tracking-wider">
              <CircleStar width={16} height={16} /> Fine Dining Excellence
            </span>
            <h1 className="text-white text-7xl font-bold font-work tracking-tighter leading-none">
              <span className="block">Gourmet</span>
              <span className="block text-[#F4AF25] mt-5">Haven</span>
            </h1>

            <p className="text-[#CBB790] text-xl font-work my-6">
              Exquisite Flavors, Timeless Memories.
            </p>

            <p className="text-lg text-white font-work">
              Experience culinary excellence in every bite with our handcrafted
              seasonal menus. We source the finest ingredients to bring you an
              unforgettable gastronomic journey.
            </p>
            <div className="flex my-10 gap-4">
              <Link
                href="reservations"
                className="flex gap-2 bg-[#F4AF25] hover:bg-[#e69f26] text-black font-bold font-work py-4.5 px-8 rounded-full transition-all text-lg"
              >
                Reserve Now <CalendarDays />
              </Link>
              <Link
                href="reservations"
                className="bg-[#12100A] text-white font-bold font-work py-4.5 px-8 rounded-full transition-all text-lg outline outline-[#6B7280]"
              >
                View Menu
              </Link>
            </div>
          </div>
          <div className="w-1/2 flex justify-center">
            <Image src={HeroImage} alt="Gourmet-Plating" />
          </div>
        </div>
      </div>
    </section>
  );
}
