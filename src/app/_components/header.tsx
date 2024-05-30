import { Button } from "@/components/ui/button";
import Image from "next/image";

const Header = () => {
    return (
        <div className="p-4 border border-l-transparent border-[#35243D] border-solid flex justify-between items-center ">
            <div className="flex items-center gap-2">
                     <Image src="/menu.svg" alt="" width={24} height={16} className="object-cover rounded-lg max-[768px]:hidden" />

                     

                     <div className="bg-primary w-10 h-10 rounded-full justify-center items-center hidden max-md-[768px]:flex">
                     <Image src="/p.svg" alt="" width={16} height={18} className=""/>
                     </div>
                <div className="relative h-[24px] w-[100px]">
                    <Image src="/logo.svg" alt="" fill className="object-cover rounded-lg max-[768px]:hidden" />
                </div>
            </div>
            <div className="flex items-center gap-3">
                <p className="text-white font-bold ">Login</p>
                <Button className="font-bold text-white gradient-button" variant="ghost">
                    REGISTER
                </Button>
            </div>
        </div>
    );
}

export default Header;