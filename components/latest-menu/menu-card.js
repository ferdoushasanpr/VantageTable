import Image from "next/image";

export default function MenuCard({
  image,
  price,
  title,
  desc,
  recommendationIcon,
  recommendation,
}) {
  return (
    <div className="relative max-w-sm border border-[#CBB790] rounded-2xl overflow-hidden">
      <Image src={image} full="true" alt="Wagyu Steak" />
      <h6 className="absolute top-6 right-6 z-20 text-[#F4AF25] font-bold font-work text-md">
        ${price}
      </h6>
      <div className="bg-[#231D10] p-6">
        <h5 className="font-bold font-work text-xl text-white">{title}</h5>
        <p className="font-work text-sm text-[#CBB790]/70 py-2">{desc}</p>
        <div className="flex gap-2 py-2">
          {recommendationIcon}
          <h6 className="uppercase font-bold font-work text-[#CBB790] text-sm">
            {recommendation}
          </h6>
        </div>
      </div>
    </div>
  );
}
