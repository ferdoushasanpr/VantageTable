import React from "react";
import Image from "next/image";
import { MapPin, Phone, Award, Aperture, Share2 } from "lucide-react";
import Logo from "@/assets/icons/Icon.png";

export default function Footer(): React.ReactNode {
  return (
    <footer className="bg-dark text-[#a3a3a3] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[2.2fr_0.9fr_0.9fr] gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white">
              <Image src={Logo} width={18} height={24} alt="gourmet-hoven" />
              <span className="text-2xl font-bold">Gourmet Haven</span>
            </div>
            <p className="text-md leading-relaxed max-w-sm">
              Stay informed on seasonal menus, exclusive events, and culinary
              insights from our head chef.
            </p>
            <div className="flex gap-2 max-w-md">
              <input
                type="email"
                placeholder="Email address"
                className="bg-[#6B7280]/40 border border-gray-800 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-[#F4AF25] transition-colors"
              />
              <button className="bg-primary text-black font-bold text-md px-6 py-3 rounded-lg hover:bg-[#e0a22a] transition-colors">
                Join
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-white font-bold tracking-widest text-sm uppercase">
              Find Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0" size={18} />
                <address className="not-italic text-sm leading-6">
                  123 Culinary Ave,
                  <br />
                  London, UK SW1A 1AA
                </address>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <span className="text-sm">+44 20 7946 0000</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-white font-bold tracking-widest text-sm uppercase">
              Opening Hours
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Mon - Thu:</span>
                <span className="text-white">17:00 - 23:00</span>
              </div>
              <div className="flex justify-between">
                <span>Fri - Sat:</span>
                <span className="text-white">17:00 - 01:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-white">12:00 - 22:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs tracking-[0.2em] uppercase">
            © 2024 GOURMET HAVEN. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 items-center">
            <Award
              size={20}
              className="hover:text-white cursor-pointer transition-colors"
            />
            <Aperture
              size={20}
              className="hover:text-white cursor-pointer transition-colors"
            />
            <Share2
              size={20}
              className="hover:text-white cursor-pointer transition-colors"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
