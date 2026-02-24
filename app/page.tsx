import HeroSection from "@/components/hero-section";
import LatestMenu from "@/components/latest-menu/latest-menu";
import Menu from "@/components/menu";
import Reservation from "@/components/reservation";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <LatestMenu />
      <Menu />
      <Reservation />
    </div>
  );
}
