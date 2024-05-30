import Image from "next/image";
import Badge from "./badge";
import { StarIcon } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Link from "next/link";

const Sidebar = () => {
    return (
        <div className="max-w-[260px] border border-[#35243D] border-solid min-h-screen fixed overflow-auto max-h-screen scroll-smooth [&::-webkit-scrollbar]:[width:5px] [&::-webkit-scrollbar-thumb]:bg-[#35243d] max-[768px]:hidden">
            <div className="flex flex-col px-4 py-4">
                <div className="flex items-center justify-between border-2 border-[#35243D] border-solid rounded-lg p-2">
                    <div className="flex items-center gap-2 gradient-button px-2 py-2 rounded-md">
                        <Image src="/1.png" alt="" width={13} height={15} />
                        <h1 className="text-title font-bold text-base">CASINO</h1>
                    </div>
                    <div>
                        <Image src="/2.png" alt="" width={15} height={15} />
                    </div>
                    <div>
                        <Image src="/3.png" alt="" width={13} height={15} />
                    </div>
                </div>

                <div className="flex items-center justify-between mt-10 gap-5">
                    <div className="flex gap-2">
                        <div className="bg-primary w-10 h-10 rounded-full flex justify-center items-center">
                            <Image src="/p.svg" alt="" width={16} height={18} />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-title font-bold text-sm">Pigmo Coin</p>
                            <p className="text-secondary font-medium">$0.0000</p>
                        </div>
                    </div>

                    <div>
                        <Badge option="default" />
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                    <Image src="/categorias/8.svg" alt="" width={16} height={16} />  <span className="font-semibold text-secondary">$PIG Airdrop</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <StarIcon className="text-secondary" />  <span className="font-semibold text-secondary">NFT Staking</span>
                    </div>
                </div>
            </div>

            <Accordion type="multiple">
                <AccordionItem value="item-1" className="border-solid border-b-[#35243D]">
                    <AccordionTrigger className="text-primary font-bold text-sm px-2 hover:decoration-transparent">CASSINO</AccordionTrigger>
                    <AccordionContent className="bg-[#25192999]">
                        <div className="flex items-center gap-2 p-2">
                            <Image src="/categorias/1.svg" alt="" width={14} height={16} />
                            <Link href="/" className="text-secondary font-semibold text-sm">
                                Originais
                            </Link>
                        </div>
                        <div className="flex items-center gap-2 p-2">
                            <Image src="/categorias/2.svg" alt="" width={14} height={16} />
                            <Link href="/" className="text-secondary font-semibold text-sm">
                                Caça-Níqueis
                            </Link>
                        </div>
                        <div className="flex items-center gap-2 p-2">
                            <Image src="/categorias/3.svg" alt="" width={14} height={16} />
                            <Link href="/" className="text-secondary font-semibold text-sm">
                                Cassino Ao Vivo
                            </Link>
                        </div>
                        <div className="flex items-center gap-2 p-2">
                            <Image src="/categorias/4.svg" alt="" width={14} height={16} />
                            <Link href="/" className="text-secondary font-semibold text-sm">
                                Lançamentos
                            </Link>
                        </div>
                        <div className="flex items-center gap-2 p-2">
                            <Image src="/categorias/5.svg" alt="" width={14} height={16} />
                            <Link href="/" className="text-secondary font-semibold text-sm">
                                Jogos de Mesa
                            </Link>
                        </div>
                        <div className="flex items-center gap-2 p-2">
                            <Image src="/categorias/6.svg" alt="" width={14} height={16} />
                            <Link href="/" className="text-secondary font-semibold text-sm">
                                Roleta
                            </Link>
                        </div>
                        <div className="flex items-center gap-2 p-2">
                            <Image src="/categorias/7.svg" alt="" width={14} height={16} />
                            <Link href="/" className="text-secondary font-semibold text-sm">
                                Blackjack
                            </Link>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-solid border-b-[#35243D]">
                    <AccordionTrigger className="text-primary font-bold text-sm px-2 hover:decoration-transparent">TRADE</AccordionTrigger>
                    <AccordionContent className="bg-[#25192999]">
                        <div className="flex items-center gap-2 p-2">
                            <Image src="/categorias/1.svg" alt="" width={14} height={16} />
                            <Link href="/" className="text-secondary font-semibold text-sm">
                                Originais
                            </Link>
                        </div>
                        <div className="flex items-center gap-2 p-2">
                            <Image src="/categorias/2.svg" alt="" width={14} height={16} />
                            <Link href="/" className="text-secondary font-semibold text-sm">
                                Caça-Níqueis
                            </Link>
                        </div>
                        <div className="flex items-center gap-2 p-2">
                            <Image src="/categorias/3.svg" alt="" width={14} height={16} />
                            <Link href="/" className="text-secondary font-semibold text-sm">
                                Cassino Ao Vivo
                            </Link>
                        </div>
                        <div className="flex items-center gap-2 p-2">
                            <Image src="/categorias/4.svg" alt="" width={14} height={16} />
                            <Link href="/" className="text-secondary font-semibold text-sm">
                                Lançamentos
                            </Link>
                        </div>
                        <div className="flex items-center gap-2 p-2">
                            <Image src="/categorias/5.svg" alt="" width={14} height={16} />
                            <Link href="/" className="text-secondary font-semibold text-sm">
                                Jogos de Mesa
                            </Link>
                        </div>
                        <div className="flex items-center gap-2 p-2">
                            <Image src="/categorias/6.svg" alt="" width={14} height={16} />
                            <Link href="/" className="text-secondary font-semibold text-sm">
                                Roleta
                            </Link>
                        </div>
                        <div className="flex items-center gap-2 p-2">
                            <Image src="/categorias/7.svg" alt="" width={14} height={16} />
                            <Link href="/" className="text-secondary font-semibold text-sm">
                                Blackjack
                            </Link>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-solid border-b-transparent">
                    <AccordionTrigger className="text-primary font-bold text-sm px-2">ESPORTES</AccordionTrigger>
                    <AccordionContent className="bg-[#25192999]">
                        <div className="flex items-center gap-2 p-2">
                            <Image src="/categorias/1.svg" alt="" width={14} height={16} />
                            <Link href="/" className="text-secondary font-semibold text-sm">
                                Originais
                            </Link>
                        </div>
                        <div className="flex items-center gap-2 p-2">
                            <Image src="/categorias/2.svg" alt="" width={14} height={16} />
                            <Link href="/" className="text-secondary font-semibold text-sm">
                                Caça-Níqueis
                            </Link>
                        </div>
                        <div className="flex items-center gap-2 p-2">
                            <Image src="/categorias/3.svg" alt="" width={14} height={16} />
                            <Link href="/" className="text-secondary font-semibold text-sm">
                                Cassino Ao Vivo
                            </Link>
                        </div>
                        <div className="flex items-center gap-2 p-2">
                            <Image src="/categorias/4.svg" alt="" width={14} height={16} />
                            <Link href="/" className="text-secondary font-semibold text-sm">
                                Lançamentos
                            </Link>
                        </div>
                        <div className="flex items-center gap-2 p-2">
                            <Image src="/categorias/5.svg" alt="" width={14} height={16} />
                            <Link href="/" className="text-secondary font-semibold text-sm">
                                Jogos de Mesa
                            </Link>
                        </div>
                        <div className="flex items-center gap-2 p-2">
                            <Image src="/categorias/6.svg" alt="" width={14} height={16} />
                            <Link href="/" className="text-secondary font-semibold text-sm">
                                Roleta
                            </Link>
                        </div>
                        <div className="flex items-center gap-2 p-2">
                            <Image src="/categorias/7.svg" alt="" width={14} height={16} />
                            <Link href="/" className="text-secondary font-semibold text-sm">
                                Blackjack
                            </Link>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <div className="mt-20 mb-5 px-3 relative">
                <div className="overflow-hidden rounded-lg ">
                    <div className="gradient-card p-4 ">
                        <div className="flex flex-col">
                            <h3 className="text-white font-bold texts-sm">Fale conosco</h3>
                            <p className="text-secondary text-sm">
                                Se precisar de ajuda<br></br>
                                nós estamos aqui
                            </p>
                        </div>

                    </div>

                </div>
                <div className="w-[150px] h-full absolute top-0 -right-0">
                    <Image src="/cubo2.png" alt="" fill style={{
                        objectFit: "cover"
                    }} />
                </div>
            </div>

            <div className="my-5 px-3 flex justify-between items-center">
                <p className="text-white font-bold text-sm">Idioma</p>
                <Image src="/br.png" alt="BRAZIL" width={28} height={20} />
            </div>
        </div>
    );
}

export default Sidebar;