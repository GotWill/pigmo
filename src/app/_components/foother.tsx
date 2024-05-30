import { Mail } from "lucide-react";
import Image from "next/image";

const Foother = () => {
    return (
        <div className="bg-[#120B14] ">
            <div className="max-w-[1100px] mx-auto mt-10 py-10 max-[1280px]:max-w-[950px]  max-md:px-2">
                <div className="flex items-start gap-5 max-md:flex-col">
                    <div className="flex items-center  max-md:flex-col">
                        <Image src="/logo-pigmo.svg" alt="" width={146} height={67} />
                        <div className="flex items-center gap-4">
                            <Image src="/robo.png" alt="" width={38} height={33} />
                            <div className="flex gap-3">
                                <span className="text-secondary text-sm font-medium">B</span>
                                <span className="text-secondary text-sm font-medium">E</span>
                                <span className="text-secondary text-sm font-medium">Y</span>
                                <span className="text-secondary text-sm font-medium">O</span>
                                <span className="text-secondary text-sm font-medium">N</span>
                                <span className="text-secondary text-sm font-medium">D</span>
                                <span className="text-white text-sm font-bold">L</span>
                                <span className="text-white text-sm font-bold">U</span>
                                <span className="text-white text-sm font-bold">C</span>
                                <span className="text-white text-sm font-bold">K</span>
                            </div>
                            <Image src="/robo.png" alt="" width={38} height={33} />
                        </div>
                    </div>
                    <div className="flex-1 flex  justify-between  max-md:flex-wrap  max-md:gap-2">
                        <div className="flex flex-col">
                            <h3 className="text-white font-bold text-base">PLATAFORM</h3>
                            <div className="flex flex-col space-y-2 mt-3">
                                <span className="text-secondary text-sm">About</span>
                                <span className="text-secondary text-sm">Support</span>
                                <span className="text-secondary text-sm">Provably Fair</span>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <h3 className="text-white font-bold text-base uppercase">Policy</h3>
                            <div className="flex flex-col space-y-2 mt-3">
                                <span className="text-secondary text-sm">Terms of Service</span>
                                <span className="text-primary text-sm font-bold">• Privacy Policy</span>
                                <span className="text-secondary text-sm">License</span>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <h3 className="text-white font-bold text-base uppercase">Community</h3>
                            <div className="flex gap-4 items-baseline  mt-3">
                                <div className="flex flex-col space-y-2">
                                    <span className="text-secondary text-sm">Twitter</span>
                                    <span className="text-secondary text-sm">Instagram</span>
                                    <span className="text-secondary text-sm">Facebook</span>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <span className="text-secondary text-sm">Telegram</span>
                                    <span className="text-secondary text-sm">Discord</span>
                                    <span className="text-secondary text-sm">Zealy</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full mt-12 gap-4  max-md:flex-col max-md:px-2">
                    <div className="max-w-[392px] h-[90px] w-full rounded-xl card-discord p-3 flex items-center gap-3 max-md:max-w-[340px]">
                        <Image src="/midias/discord.svg" alt="" width={38} height={30} />
                        <p className="text-white">
                            Join <span className="font-bold">Discord's largest community</span><br></br>
                            of players now!
                        </p>
                    </div>
                    <div className="max-w-[392px] h-[90px] w-full rounded-xl card-telegram flex items-center p-3 gap-3 max-md:max-w-[340px]">
                        <Image src="/midias/telegram.svg" alt="" width={35} height={30} />
                        <p className="text-white">
                            Pigmo is also on Telegram. <br></br>
                            <strong className="font-bold">Discover more now</strong>
                        </p>
                    </div>
                    <div className="max-w-[392px] h-[90px] w-full rounded-xl card-x flex items-center p-3 gap-3 max-md:max-w-[340px]">
                        <Image src="/midias/x.svg" alt="" width={30} height={30} />
                        <p className="text-white">
                            <span className="font-bold">  Follow us on X</span> and keep up <br></br>
                            everything about us
                        </p>
                    </div>
                </div>
            </div>
            <div className="foother-bottom mt-5 p-4 ">
                <div className="max-w-[1100px] mx-auto flex justify-between  max-md:flex-col  max-md:gap-2">
                    <p className="text-secondary text-sm">
                        <span className="font-bold text-white">@2024 Pigmo</span> - All rights reserved. Pigmo is licensed and authorized, operating under the Game Service Provider Master License.
                    </p>
                    <div className="flex items-center gap-2">
                        <Mail className="text-primary" />
                        <span className="uppercase text-secondary font-semibold">contact us</span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Foother;