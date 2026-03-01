import React from "react";

const ItemDetailsPage = async ({
  params,
}: {
  params: { itemName: string };
}): Promise<React.ReactNode> => {
  const { itemName } = await params;

  console.log("Received itemName:", itemName);

  const item = {
    name: "Wagyu Steak",
    price: "$120",
    category: "Main Course",
    description:
      "A5 Miyazaki Wagyu, silk truffle mash, vintage red wine reduction, and micro-greens.",
    image:
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1000&auto=format&fit=crop",
  };

  return (
    <section className="bg-[#0C0C0C]">
      <div className="flex flex-col lg:flex-row justify-center p-20 text-white font-work selection:bg-[#F3B340] selection:text-black">
        <div className="w-lg">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover grayscale-[15%] brightness-90"
          />
        </div>

        <section className="lg:w-2xl flex flex-col justify-center p-8 md:p-16 lg:p-24 bg-[#0C0C0C]">
          <div className="max-w-md mx-auto lg:mx-0">
            <div className="mb-12 border-b border-gray-900 pb-4">
              <span className="text-[#F3B340] uppercase tracking-[0.4em] text-[10px] font-bold">
                {item.category}
              </span>
            </div>

            <div className="mb-10">
              <h1 className="text-5xl md:text-6xl font-serif tracking-tight mb-4">
                {item.name}
              </h1>
              <p className="text-2xl font-serif text-[#F3B340] tracking-wider">
                {item.price}
              </p>
            </div>

            <div className="mb-12">
              <p className="text-xl text-gray-300 font-serif italic leading-relaxed">
                &quot;{item.description}&quot;
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ItemDetailsPage;
