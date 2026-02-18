import Image from "next/image";
import NavIcon from "@/assets/icons/Icon.png";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="bg-[#12100A] text-white px-16 py-8 flex items-center justify-between font-sans">
        {/* Logo Section */}
        <div className="flex items-center gap-4 cursor-pointer">
          <Image
            src={NavIcon}
            alt="Gourmet Haven Logo"
            width={24}
            height={24}
          />
          <Link href="/" className="text-2xl font-bold tracking-tight">
            Gourmet Haven
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="menu" className="hover:text-[#fbb02d] transition-colors">
            Menu
          </Link>
          <Link
            href="reservations"
            className="hover:text-[#fbb02d] transition-colors"
          >
            Reservations
          </Link>
          <Link href="about" className="hover:text-[#fbb02d] transition-colors">
            About
          </Link>
        </div>

        {/* Action Button */}
        <div>
          <Link
            href="reservations"
            className="bg-[#fbb02d] hover:bg-[#e69f26] text-black font-bold py-3 px-8 rounded-full transition-all"
          >
            Reserve Now
          </Link>
        </div>
      </nav>
    </header>
  );
}
