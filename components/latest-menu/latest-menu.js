import MenuCard from "./menu-card";
import { Flame, Leaf, Microwave, MoveRight } from "lucide-react";
import WagyuSteakImage from "@/assets/images/Wagyu-Steak.png";
import Link from "next/link";

export default function LatestMenu() {
  return (
    <section className="bg-[#12100A]/90 py-20">
      <div className="container mx-auto">
        <div className="flex justify-between my-10">
          <div>
            <h6 className="font-bold font-work uppercase text-[#F4AF25] text-sm py-2">
              Curated Selection
            </h6>
            <h3 className="text-white font-bold font-work text-4xl">
              Our Signature Dishes
            </h3>
          </div>
          <Link href="/menu" className="flex gap-2 self-end">
            <h6 className="font-bold font-work text-md text-[#F4AF25]">
              View Full Menu
            </h6>
            <MoveRight className="text-[#F4AF25]" />
          </Link>
        </div>
        <div className="grid gap-10 grid-cols-3 justify-items-center">
          <MenuCard
            image={WagyuSteakImage}
            title={"Wagyu Steak"}
            price={120}
            desc={`A5 Miyazaki Wagyu, silk truffle mash, vintage red wine reduction, and
          micro-greens.`}
            recommendationIcon={
              <Flame className="text-[#CBB790]" width={18} height={18} />
            }
            recommendation={"chef's recommendation"}
          />
          <MenuCard
            image={WagyuSteakImage}
            title={"Truffle Pasta"}
            price={45}
            desc={`Handmade tagliatelle, fresh black truffle shavings, aged parmesan cream, and organic herbs.`}
            recommendationIcon={
              <Leaf className="text-[#CBB790]" width={18} height={18} />
            }
            recommendation={"Vegetarian Option"}
          />
          <MenuCard
            image={WagyuSteakImage}
            title={"Seared Scallops"}
            price={38}
            desc={`Hokkaido jumbo scallops, smoky cauliflower purée, pancetta crisp, and lemon oil.`}
            recommendationIcon={
              <Microwave className="text-[#CBB790]" width={18} height={18} />
            }
            recommendation={"Fresh Catch"}
          />
        </div>
      </div>
    </section>
  );
}
