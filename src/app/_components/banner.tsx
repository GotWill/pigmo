import { Button } from "@/components/ui/button";
import { CircleArrowOutUpRight } from "lucide-react";
import Image from "next/image";

const Banner = () => {
    return (
        <div className="relative max-h-[350px] h-full flex items-center border border-l-transparent border-t-transparent  border-solid border-b-[#35243D] max-md:h-[220px]">



            <div className="max-w-[1100px] w-full mx-auto flex  max-h-[350px] h-full items-center max-[1280px]:max-w-[950px] max-[768px]:max-w-[400px] max-[768px]:mx-auto">
                <div className="max-md:w-full max-md:flex max-md:flex-col max-md:items-center">
                    <div className="flex flex-col gap-2 max-[768px]:text-center">
                        <h1 className="text-white text-4xl font-bold max-[1280px]:text-2xl max-md:text-center">Boas vindas  ao <span className="text-primary">Pigmo</span>!</h1>
                        <p className="text-secondary font-medium text-lg max-md:text-base">
                            Jogue inteligente conosco. Crie sua conta<br></br>
                            ou entre agora para ganhar recompensas.
                        </p>
                    </div>
                    <div className="flex gap-2 items-center mt-4 max-md:flex max-md:justify-center">
                        <Button variant="ghost" className="gradient-button text-white font-semibold">
                            QUERO ME REGISTRAR
                        </Button>

                        <Button variant="outline" className="h-8 w-8 p-1 border-solid border-[#35243D]">
                            <Image src="/midias/google.svg" alt="" width={18} height={18} />
                        </Button>
                        <Button variant="outline" className="h-8 w-8 p-1 border-solid border-[#35243D]">
                            <Image src="/midias/2.svg" alt="" width={22} height={22} />
                        </Button>
                        <Button variant="outline" className="h-8 w-8 p-1 border-solid border-[#35243D]">
                            <Image src="/midias/3.svg" alt="" width={18} height={14} />
                        </Button>
                    </div>
                </div>

                <div className="absolute right-0 w-[797px]  max-h-[350px] h-full max-[1280px]:-right-10 max-[768px]:hidden">
                    <Image src="/img-casino.png" alt="" fill />
                </div>
            </div>


        </div>
    );
}

export default Banner;