import { fetchMenuBySlug } from "@/actions/menu";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const ItemDetailsPage = async ({
  params,
}: {
  params: { slug: string };
}): Promise<React.ReactNode> => {
  const { slug } = await params;

  const result = await fetchMenuBySlug(slug);

  if (!result) {
    notFound();
  }

  const item = result.data;

  return (
    <section className="bg-[#0C0C0C]">
      <div className="flex flex-col lg:flex-row justify-center p-20 text-white selection:bg-primary selection:text-black">
        <div className="w-lg relative">
          <Image
            src={item.image}
            fill
            alt={item.name}
            className="w-full h-full object-cover grayscale-15 brightness-90"
          />
        </div>

        <section className="lg:w-2xl flex flex-col justify-center p-8 md:p-16 lg:p-24 bg-[#0C0C0C]">
          <div className="max-w-md mx-auto lg:mx-0">
            <div className="mb-12 border-b border-gray-900 pb-4">
              <span className="text-primary uppercase tracking-[0.4em] text-[10px] font-bold">
                {item.cat}
              </span>
            </div>

            <div className="mb-10">
              <h1 className="text-5xl md:text-6xl tracking-tight mb-4">
                {item.name}
              </h1>
              {item.status === true ? (
                <p className="text-green-500 font-bold">Available</p>
              ) : (
                <p className="text-red-500 font-bold">Not Available</p>
              )}
              <p className="text-2xl text-primary tracking-wider">
                ${item.price}
              </p>
            </div>

            <div className="mb-12">
              <p className="text-xl text-gray-300 italic leading-relaxed">
                &quot;{item.desc}&quot;
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ItemDetailsPage;
