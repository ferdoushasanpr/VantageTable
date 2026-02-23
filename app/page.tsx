import HeroSection from "@/components/hero-section";
import LatestMenu from "@/components/latest-menu/latest-menu";
import Reservation from "@/components/reservation";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <LatestMenu />
      <Reservation />
    </div>
  );
}
