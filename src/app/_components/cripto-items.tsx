import Badge from "./badge";

interface CRYPTOITEMS {
    option: "success" | "error"
}

const CRYPTOITEMS = ({option}: CRYPTOITEMS) => {
    return (
        <div className="max-w-[177px] w-full border border-[#35243D] border-solid rounded-md p-3 cards-cripto">
            <div className="flex justify-between border border-transparent border-b-[#35243D] border-solid pb-3">
                <div className="flex gap-2 items-center">
                    <div className="w-[30px] h-[30px] bg-[#FF8500] rounded-md text-white flex justify-center items-center">
                        B
                    </div>
                    <span className="font-semibold text-white text-base">BTC</span>

                </div>
                <Badge option={option}/>
            </div>
                <p className="text-white font-semibold text-lg py-1 border border-transparent border-b-[#35243D] border-solid">$ 60,390.85</p>
            <div className="flex flex-col">
                <div className="flex justify-between py-1">
                    <span className="text-secondary text-sm font-semibold">24 VOL</span>
                    <span className="text-white text-sm font-semibold">$757M</span>
                </div>
                <div className="flex justify-between py-1">
                    <span className="text-secondary text-sm font-semibold">LEVERAGE</span>
                    <span className="text-white text-sm font-semibold">1000x</span>
                </div>
            </div>
        </div>
    );
}

export default CRYPTOITEMS;