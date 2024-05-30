import Image from "next/image";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";


const SPORTS = () => {
    return (
        <div className="max-w-[1100px] mx-auto mt-10 pb-24 max-[1280px]:max-w-[950px] max-md:px-2  max-md:pb-0">
            <div className="flex gap-2">
                <Image src="/sports.png" alt="" width={16} height={16} />
                <h3 className="text-title font-bold text-base">ESPORTES</h3>
            </div>

            <div className="flex gap-2 mt-4 max-[768px]:grid max-[768px]:grid-cols-2 max-[1280px]:px-2 flex-shrink-carrosel">
                <Carousel className="w-ful  max-w-full" opts={{
                    align: "start",
                    loop: true,
                }}>
                    <CarouselContent className="gap-0 max-md:mt-14">
                        <CarouselItem className="max-w-[200px] pr-0">
                            <Link href="/" className="w-full max-h-[150px] min-h-[150px] border border-[#35243D] border-solid rounded-md flex flex-col gap-4 justify-center items-center">
                                <Image src="/sports/1.png" alt="" width={41} height={41} />
                                <h4 className="text-secondary font-bold text-sm">TÊNIS DE MESA</h4>
                            </Link>
                        </CarouselItem>
                        <CarouselItem className="max-w-[200px]  pr-0">
                            <Link href="/" className="card-sport-hover w-full max-h-[150px] min-h-[150px] border border-[#35243D] border-solid rounded-md flex flex-col gap-4 justify-center items-center">
                                <Image src="/sports/2.png" alt="" width={41} height={41} />
                                <h4 className="text-white font-bold text-sm">VOLEIBOL</h4>
                            </Link>
                        </CarouselItem>
                        <CarouselItem className="max-w-[200px]  pr-0">
                            <Link href="/" className="w-full max-h-[150px] min-h-[150px] border border-[#35243D] border-solid rounded-md flex flex-col gap-4 justify-center items-center">
                                <Image src="/sports/3.png" alt="" width={41} height={41} />
                                <h4 className="text-secondary font-bold text-sm">BOXE</h4>
                            </Link>
                        </CarouselItem>
                        <CarouselItem className="max-w-[200px]  pr-0">
                            <Link href="/" className="w-full max-h-[150px] min-h-[150px] border border-[#35243D] border-solid rounded-md flex flex-col gap-4 justify-center items-center">
                                <Image src="/sports/4.png" alt="" width={41} height={41} />
                                <h4 className="text-secondary font-bold text-sm">GOLFE</h4>
                            </Link>
                        </CarouselItem>
                        <CarouselItem className="max-w-[200px]  pr-0">
                            <Link href="/" className="w-full max-h-[150px] min-h-[150px] border border-[#35243D] border-solid rounded-md flex flex-col gap-4 justify-center items-center">
                                <Image src="/sports/5.png" alt="" width={41} height={41} />
                                <h4 className="text-secondary font-bold text-sm">MMA</h4>
                            </Link>
                        </CarouselItem>
                        <CarouselItem className="max-w-[200px]  pr-0">
                            <Link href="/" className="w-full max-h-[150px] min-h-[150px] border border-[#35243D] border-solid rounded-md flex flex-col gap-4 justify-center items-center">
                                <Image src="/sports/6.png" alt="" width={41} height={41} />
                                <h4 className="text-secondary font-bold text-sm">SINUCA</h4>
                            </Link>
                        </CarouselItem>
                        <CarouselItem className="max-w-[200px] pr-0">
                            <Link href="/" className="w-full max-h-[150px] min-h-[150px] border border-[#35243D] border-solid rounded-md flex flex-col gap-4 justify-center items-center">
                                <Image src="/sports/1.png" alt="" width={41} height={41} />
                                <h4 className="text-secondary font-bold text-sm">TÊNIS DE MESA</h4>
                            </Link>
                        </CarouselItem>
                        <CarouselItem className="max-w-[200px]  pr-0">
                            <Link href="/" className="card-sport-hover w-full max-h-[150px] min-h-[150px] border border-[#35243D] border-solid rounded-md flex flex-col gap-4 justify-center items-center">
                                <Image src="/sports/2.png" alt="" width={41} height={41} />
                                <h4 className="text-white font-bold text-sm">VOLEIBOL</h4>
                            </Link>
                        </CarouselItem>
                        <CarouselItem className="max-w-[200px]  pr-0">
                            <Link href="/" className="w-full max-h-[150px] min-h-[150px] border border-[#35243D] border-solid rounded-md flex flex-col gap-4 justify-center items-center">
                                <Image src="/sports/3.png" alt="" width={41} height={41} />
                                <h4 className="text-secondary font-bold text-sm">BOXE</h4>
                            </Link>
                        </CarouselItem>
                        <CarouselItem className="max-w-[200px]  pr-0">
                            <Link href="/" className="w-full max-h-[150px] min-h-[150px] border border-[#35243D] border-solid rounded-md flex flex-col gap-4 justify-center items-center">
                                <Image src="/sports/3.png" alt="" width={41} height={41} />
                                <h4 className="text-secondary font-bold text-sm">BOXE</h4>
                            </Link>
                        </CarouselItem>
                        <CarouselItem className="max-w-[200px]  pr-0">
                            <Link href="/" className="w-full max-h-[150px] min-h-[150px] border border-[#35243D] border-solid rounded-md flex flex-col gap-4 justify-center items-center">
                                <Image src="/sports/4.png" alt="" width={41} height={41} />
                                <h4 className="text-secondary font-bold text-sm">GOLFE</h4>
                            </Link>
                        </CarouselItem>
                        <CarouselItem className="max-w-[200px]  pr-0">
                            <Link href="/" className="w-full max-h-[150px] min-h-[150px] border border-[#35243D] border-solid rounded-md flex flex-col gap-4 justify-center items-center">
                                <Image src="/sports/5.png" alt="" width={41} height={41} />
                                <h4 className="text-secondary font-bold text-sm">MMA</h4>
                            </Link>
                        </CarouselItem>
                        <CarouselItem className="max-w-[200px]  pr-0">
                            <Link href="/" className="w-full max-h-[150px] min-h-[150px] border border-[#35243D] border-solid rounded-md flex flex-col gap-4 justify-center items-center">
                                <Image src="/sports/6.png" alt="" width={41} height={41} />
                                <h4 className="text-secondary font-bold text-sm">SINUCA</h4>
                            </Link>
                        </CarouselItem>
                        <CarouselItem className="max-w-[200px]  pr-0">
                            <Link href="/" className="w-full max-h-[150px] min-h-[150px] border border-[#35243D] border-solid rounded-md flex flex-col gap-4 justify-center items-center">
                                <Image src="/sports/3.png" alt="" width={41} height={41} />
                                <h4 className="text-secondary font-bold text-sm">BOXE</h4>
                            </Link>
                        </CarouselItem>
                        <CarouselItem className="max-w-[200px]  pr-0">
                            <Link href="/" className="w-full max-h-[150px] min-h-[150px] border border-[#35243D] border-solid rounded-md flex flex-col gap-4 justify-center items-center">
                                <Image src="/sports/4.png" alt="" width={41} height={41} />
                                <h4 className="text-secondary font-bold text-sm">GOLFE</h4>
                            </Link>
                        </CarouselItem>
                        <CarouselItem className="max-w-[200px]  pr-0">
                            <Link href="/" className="w-full max-h-[150px] min-h-[150px] border border-[#35243D] border-solid rounded-md flex flex-col gap-4 justify-center items-center">
                                <Image src="/sports/5.png" alt="" width={41} height={41} />
                                <h4 className="text-secondary font-bold text-sm">MMA</h4>
                            </Link>
                        </CarouselItem>
                        <CarouselItem className="max-w-[200px]  pr-0">
                            <Link href="/" className="w-full max-h-[150px] min-h-[150px] border border-[#35243D] border-solid rounded-md flex flex-col gap-4 justify-center items-center">
                                <Image src="/sports/6.png" alt="" width={41} height={41} />
                                <h4 className="text-secondary font-bold text-sm">SINUCA</h4>
                            </Link>
                        </CarouselItem>

                    </CarouselContent>
                    <div className="max-md:absolute max-md:top-0  max-md:mt-5 btns-carrosel">
                        <CarouselPrevious className="text-white" />
                        <CarouselNext className="text-white" />
                    </div>
                </Carousel>
            </div>

            {/* <div className="flex gap-2 mt-4  max-[1280px]:px-2">
                <Carousel className="w-ful  max-w-ful" opts={{
                    align: "start",
                    loop: true,
                }}>
                    <CarouselContent>
                        <CarouselItem className="basis-2/3 p-0">
                            <Link href="/" className="max-w-[200px] w-full max-h-[150px] min-h-[150px] border border-[#35243D] border-solid rounded-md flex flex-col gap-4 justify-center items-center">
                                <Image src="/sports/1.png" alt="" width={41} height={41} />
                                <h4 className="text-secondary font-bold text-sm">TÊNIS DE MESA</h4>
                            </Link>
                        </CarouselItem>
                        <CarouselItem className="basis-2/3 p-0">
                            <Link href="/" className="max-w-[200px] card-sport-hover w-full max-h-[150px] min-h-[150px] border border-[#35243D] border-solid rounded-md flex flex-col gap-4 justify-center items-center">
                                <Image src="/sports/2.png" alt="" width={41} height={41} />
                                <h4 className="text-white font-bold text-sm">VOLEIBOL</h4>
                            </Link>
                        </CarouselItem>
                        <CarouselItem className="basis-2/3 p-0">
                            <Link href="/" className="max-w-[200px] w-full max-h-[150px] min-h-[150px] border border-[#35243D] border-solid rounded-md flex flex-col gap-4 justify-center items-center">
                                <Image src="/sports/3.png" alt="" width={41} height={41} />
                                <h4 className="text-secondary font-bold text-sm">BOXE</h4>
                            </Link>
                        </CarouselItem>
                        <CarouselItem className="basis-2/3 p-0">
                            <Link href="/" className="max-w-[200px] w-full max-h-[150px] min-h-[150px] border border-[#35243D] border-solid rounded-md flex flex-col gap-4 justify-center items-center">
                                <Image src="/sports/4.png" alt="" width={41} height={41} />
                                <h4 className="text-secondary font-bold text-sm">GOLFE</h4>
                            </Link>
                        </CarouselItem>
                        <CarouselItem className="basis-2/3 p-0">
                            <Link href="/" className="max-w-[200px] w-full max-h-[150px] min-h-[150px] border border-[#35243D] border-solid rounded-md flex flex-col gap-4 justify-center items-center">
                                <Image src="/sports/5.png" alt="" width={41} height={41} />
                                <h4 className="text-secondary font-bold text-sm">MMA</h4>
                            </Link>
                        </CarouselItem>
                        <CarouselItem className="basis-2/3 p-0">
                            <Link href="/" className="max-w-[200px] w-full max-h-[150px] min-h-[150px] border border-[#35243D] border-solid rounded-md flex flex-col gap-4 justify-center items-center">
                                <Image src="/sports/6.png" alt="" width={41} height={41} />
                                <h4 className="text-secondary font-bold text-sm">SINUCA</h4>
                            </Link>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="text-white" />
                    <CarouselNext className="text-white" />
                </Carousel>
            </div> */}

        </div>
    );
}

export default SPORTS;