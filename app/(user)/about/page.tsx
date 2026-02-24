import React from "react";
import Image from "next/image";
import JosephGonzalexImage from "@/assets/images/joseph-gonzalez.jpg";
import LouisHanselImage from "@/assets/images/louis-hansel.jpg";
import Link from "next/link";

const AboutPage = (): React.ReactNode => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <section className="pt-20 pb-16 px-6 border-b border-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#c48e2a] uppercase tracking-[0.2em] text-xs font-bold font-work mb-4 block">
              The Gourmet Haven Story
            </span>
            <h1 className="text-5xl md:text-6xl font-bold font-work mb-6 leading-tight">
              A Legacy of <br />
              <span className="text-[#f4b433]">Culinary Art</span>
            </h1>
            <p className="text-gray-400 text-lg font-work leading-relaxed mb-8">
              Founded on the principle that dining is a form of theater, Gourmet
              Haven has been redefining fine dining since 2012. We believe every
              ingredient has a soul and every plate tells a story.
            </p>
          </div>
          <div className="w-2/3 justify-self-end">
            <Image
              src={JosephGonzalexImage}
              alt="Restaurant Interior"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-work mb-16">
            Our Three Pillars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Sourcing",
                desc: "Working exclusively with local organic farms to ensure peak freshness.",
              },
              {
                title: "Innovation",
                desc: "Merging traditional French techniques with modern molecular gastronomy.",
              },
              {
                title: "Ambience",
                desc: "A curated sensory experience from the lighting to the acoustics.",
              },
            ].map((pillar, i) => (
              <div
                key={i}
                className="p-8 border border-gray-900 rounded-2xl hover:border-[#c48e2a]/50 transition-colors"
              >
                <div className="text-[#f4b433] text-4xl mb-6 font-work italic">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold font-work mb-4">
                  {pillar.title}
                </h3>
                <p className="text-gray-500 font-work leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="bg-[#141414] rounded-3xl overflow-hidden flex flex-col md:flex-row justify-around items-center">
          <div className="md:w-1/2 p-12 lg:p-20">
            <h2 className="text-4xl font-bold font-work mb-6 italic">
              “The plate is my canvas, the seasons are my palette.”
            </h2>
            <p className="text-gray-400 font-work mb-8 leading-relaxed">
              Executive Chef Julian Vane brings 20 years of Michelin-star
              experience to Gourmet Haven. His approach is simple: respect the
              product, elevate the flavor, and surprise the guest.
            </p>
            <div>
              <p className="font-bold font-work text-[#f4b433] text-lg">
                Julian Vane
              </p>
              <p className="text-gray-500 font-work text-sm uppercase tracking-widest">
                Executive Chef & Founder
              </p>
            </div>
          </div>
          <div className="md:w-1/4">
            <Image
              src={LouisHanselImage}
              alt="Chef Julian"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <h3 className="text-2xl font-work mb-8">
          Ready to experience it yourself?
        </h3>
        <div className="flex justify-center gap-6">
          <Link
            href="/reservations"
            className="bg-[#f4b433] text-black font-work px-10 py-4 rounded-full font-bold hover:bg-[#e2a32b] transition-colors"
          >
            Reserve a Table
          </Link>
          <Link
            href="/menu"
            className="border border-gray-700 font-work px-10 py-4 rounded-full font-bold hover:border-white transition-colors"
          >
            View Menu
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
