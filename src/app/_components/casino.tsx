import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";


const CASSINO = () => {
    return (
        <div className="max-w-[1100px] mx-auto mt-10 max-[1280px]:max-w-[950px] max-md:px-2">
            <div className="flex items-center gap-4">
                <div className="flex gap-2">
                    <Image src="/7.png" alt="" width={14} height={15} />
                    <h3 className="text-title font-bold text-base">CASSINO</h3>
                </div>
            </div>
        
            <div className="flex gap-2 mt-4 max-[768px]:grid max-[768px]:grid-cols-2 max-[1280px]:px-2 flex-shrink-carrosel">
                <Carousel className="w-ful  max-w-full" opts={{
                    align: "start",
                    loop: true,
                }}>
                    <CarouselContent className="gap-0 max-md:mt-14">
                        <CarouselItem className="max-w-[200px] pr-0">
                            <Image src="/cassino/1.png" width={177} height={200} alt="" className="max-md:w-full" />
                        </CarouselItem>
                        <CarouselItem className="max-w-[200px]  pr-0">
                            <Image src="/cassino/2.png" width={177} height={200} alt="" className="max-md:w-full" />
                        </CarouselItem>
                        <CarouselItem className="max-w-[200px]  pr-0">
                            <Image src="/cassino/3.png" width={177} height={200} alt="" className="max-md:w-full" />
                        </CarouselItem>
                        <CarouselItem className="max-w-[200px]  pr-0">
                            <Image src="/cassino/4.png" width={177} height={200} alt="" className="max-md:w-full" />
                        </CarouselItem>
                        <CarouselItem className="max-w-[200px]  pr-0">
                            <Image src="/cassino/5.png" width={177} height={200} alt="" className="max-md:w-full" />
                        </CarouselItem>
                        <CarouselItem className="max-w-[200px]  pr-0">
                            <Image src="/cassino/6.png" width={177} height={200} alt="" className="max-md:w-full" />
                        </CarouselItem>
                        <CarouselItem className="max-w-[200px]  pr-0">
                            <Image src="/cassino/7.png" width={177} height={200} alt="" className="max-md:w-full" />
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

export default CASSINO;