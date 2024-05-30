import { Carousel, CarouselItem, CarouselPrevious, CarouselNext, CarouselContent } from "@/components/ui/carousel";
import Banner from "./_components/banner";
import CASSINO from "./_components/casino";
import CRYPTOCURRENCIES from "./_components/cripto";
import Foother from "./_components/foother";
import Header from "./_components/header";
import Sidebar from "./_components/sidebar";
import SPORTS from "./_components/sports";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-[232px] max-[768px]:ml-0">
        <Header />
        <Banner />
        <CRYPTOCURRENCIES />
        <CASSINO />
        <SPORTS />

        <Foother />
      </div>
    </div>
  );
}
