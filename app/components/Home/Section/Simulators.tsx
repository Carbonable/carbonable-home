
import { useState } from "react"
import PlusIconWhite from "~/components/Icons/PlusIcon";
import OffsetSimulator from "./Simulator/OffsetSimulator";
import YieldSimulator from "./Simulator/YieldSimulator";

export default function Simulators({config}: any) {
    const [selectedSimulator, setSelectedSimulator] = useState("yield");
    const yieldConfig = config.filter((conf:any) => conf.type === "yield");
    const offsetConfig = config.filter((conf:any) => conf.type === "offset");
    const globalConfig = config.filter((conf:any) => conf.type === "global");

    return (
        <div id="simulator" className="w-full scroll-mt-12 text-center mt-20 xl:mt-32 max-w-screen-2xl mx-auto">
            <div className="w-11/12 flex items-center justify-center mx-auto">
                <PlusIconWhite className="w-8 md:w-12"></PlusIconWhite>
                <h1 className="w-10/12 mx-auto mt-8 items-center uppercase font-trash font-bold text-2xl text-center md:text-3xl xl:text-5xl">
                    ESTIMATE YOUR GAIN
                    <div className="font-americana font-medium text-lg md:text-2xl lg:text-3xl">FOR YOU AND FOR THE PLANET</div>
                </h1>
                <PlusIconWhite className="w-8 md:w-12"></PlusIconWhite>
            </div>
            <div className="w-full max-w-screen-2xl mx-auto bg-home-simulator rounded-2xl backdrop-blur-md py-8 px-2 md:w-11/12 md:mx-auto mt-8">
                <div className="w-full md:w-9/12 lg:w-8/12 xl:w-6/12 p-1 flex font-semibold border border-white rounded-full items-center mx-auto justify-evenly uppercase text-xs md:text-base mt-1">
                    <div className={selectedSimulator === 'yield' ? "bg-green-blue rounded-full px-2 md:px-12 py-2 md:py-4 w-1/2 text-black/50" : "cursor-pointer w-1/2 text-beaige"} onClick = {() => { setSelectedSimulator("yield"); }}>Yield simulator</div>
                    <div className={selectedSimulator === 'offset' ? "bg-green-blue rounded-full px-2 md:px-12 py-2 md:py-4 w-1/2 text-black/50" : "cursor-pointer w-1/2 text-beaige"} onClick = {() => { setSelectedSimulator("offset"); }}>Offseting simulator</div>
                </div>
                <div>
                    { selectedSimulator === 'yield' && <YieldSimulator carbonPrices={yieldConfig[0].config.annual_growth[0].carbonable} globalConf={globalConfig[0]} /> }
                    { selectedSimulator === 'offset' && <OffsetSimulator offset={offsetConfig[0].config.annual_growth[0].carbonable} globalConf={globalConfig[0]} /> }
                </div>
                <div className="text-beaige px-6 py-3 mt-2 rounded-xl text-center md:text-right font-inter w-full md:w-9/12 lg:w-6/12 mr-0 ml-auto">
                    <div className="text-xs">Based on BloombergNEF and McKinsey forecasts</div>
                    <div>NOT FINANCIAL ADVICE</div>
                </div>
            </div>
        </div>
    )
}