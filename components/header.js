import Image from "next/image";
import NavIcon from "@/assets/icons/Icon.png";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="bg-[#12100A] text-white px-16 py-6 flex items-center justify-between font-work">
        {/* Logo Section */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src={NavIcon}
            alt="Gourmet Haven Logo"
            width={18}
            height={24}
          />
          <Link href="/" className="text-xl font-bold tracking-tight">
            Gourmet Haven
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            href="menu"
            className="hover:text-[#F4AF25] transition-colors text-sm"
          >
            Menu
          </Link>
          <Link
            href="reservations"
            className="hover:text-[#F4AF25] transition-colors text-sm"
          >
            Reservations
          </Link>
          <Link
            href="about"
            className="hover:text-[#F4AF25] transition-colors text-sm"
          >
            About
          </Link>
        </div>

        {/* Action Button */}
        <div>
          <Link
            href="reservations"
            className="bg-[#F4AF25] hover:bg-[#e69f26] text-black font-bold py-3 px-8 rounded-full transition-all text-sm"
          >
            Reserve Now
          </Link>
        </div>
      </nav>
    </header>
  );
}
