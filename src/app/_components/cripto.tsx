import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CRYPTOITEMS from "./cripto-items";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const CRYPTOCURRENCIES = () => {
    return (
        <div className="max-w-[1100px] mx-auto mt-10 max-[1280px]:max-w-[950px]">
            <div className="flex items-center gap-5 max-[1280px]:flex-col">
                <div className="flex gap-2 items-center">
                    <Image src="/planta.png" alt="" width={14} height={16} />
                    <h3 className="text-title font-bold text-base">CRIPTMOEDAS</h3>
                </div>
                <div className="flex items-center gap-3">
                    <p className="text-secondary font-semibold text-xs uppercase">Total 24h volume: <span className="text-[#24D861]">$2.27B</span></p>
                    <Button className="text-sm text-white fontmax-w-[200px] rounded-lg btn-trade h-0">
                        TRADE
                    </Button>
                </div>
            </div>
            <div className="flex gap-2 mt-4  max-[1280px]:px-2 flex-shrink-carrosel max-[768px]:grid max-[768px]:grid-cols-2">
                <Carousel className="w-ful  max-w-full " opts={{
                    align: "start",
                    loop: true,
                    breakpoints: {
                        "768px": {
                            slides: '2'
                        }
                    }
                }}>
                    <CarouselContent className="gap-0 max-md:mt-14">
                        <CarouselItem className="max-w-[200px] pr-0">
                            <CRYPTOITEMS option="success" />
                        </CarouselItem>
                        <CarouselItem className="max-w-[200px]  pr-0">
                            <CRYPTOITEMS option="error" />
                        </CarouselItem>
                        <CarouselItem className="max-w-[200px]  pr-0">
                            <CRYPTOITEMS option="success" />
                        </CarouselItem>
                        <CarouselItem className="max-w-[200px]  pr-0">
                            <CRYPTOITEMS option="error" />
                        </CarouselItem>
                        <CarouselItem className="max-w-[200px]  pr-0">
                            <CRYPTOITEMS option="success" />
                        </CarouselItem>
                        <CarouselItem className="max-w-[200px]  pr-0">
                            <CRYPTOITEMS option="success" />
                        </CarouselItem>
                    </CarouselContent>
                    <div className="max-md:absolute max-md:top-0  max-md:mt-5 btns-carrosel">
                        <CarouselPrevious className="text-white" />
                        <CarouselNext className="text-white" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default CRYPTOCURRENCIES;