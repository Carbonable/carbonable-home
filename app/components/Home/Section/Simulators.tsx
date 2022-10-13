
import { useState } from "react"
import OffsetSimulator from "./Simulator/OffsetSimulator";
import YieldSimulator from "./Simulator/YieldSimulator";

export default function Simulators({config}: any) {
    const [selectedSimulator, setSelectedSimulator] = useState("yield");
    const yieldConfig = config.filter((conf:any) => conf.type === "yield");
    const offsetConfig = config.filter((conf:any) => conf.type === "offset");
    const globalConfig = config.filter((conf:any) => conf.type === "global");

    return (
        <div id="simulator" className="w-full scroll-mt-12 text-center mt-20 xl:mt-32 max-w-screen-2xl mx-auto">
            <h1 className="w-10/12 mx-auto mt-8 items-center uppercase font-trash font-bold text-2xl text-center md:text-3xl xl:text-5xl">
                ESTIMATE YOUR GAIN
                <div className="font-americana font-medium text-lg md:text-2xl lg:text-3xl">FOR YOU AND FOR THE PLANET</div>
            </h1>
            <div className="w-11/12 max-w-screen-2xl mx-auto bg-footerBg rounded-2xl shadow-home backdrop-blur-md py-4 px-2 md:w-11/12 md:mx-auto mt-8">
                <div className="w-full md:w-9/12 lg:w-6/12 menu-bg p-1 flex items-center mx-auto justify-evenly uppercase text-xs md:text-base mt-1">
                    <div className={selectedSimulator === 'yield' ? "bg-green-blue rounded-full px-2 md:px-12 py-2 md:py-4 w-1/2 text-black/50" : "cursor-pointer w-1/2 text-beaige"} onClick = {() => { setSelectedSimulator("yield"); }}>Yield simulator</div>
                    <div className={selectedSimulator === 'offset' ? "bg-green-blue rounded-full px-2 md:px-12 py-2 md:py-4 w-1/2 text-black/50" : "cursor-pointer w-1/2 text-beaige"} onClick = {() => { setSelectedSimulator("offset"); }}>Offseting simulator</div>
                </div>
                <div className="">
                    { selectedSimulator === 'yield' && <YieldSimulator carbonPrices={yieldConfig[0].config.annual_growth[0].carbonable} /> }
                    { selectedSimulator === 'offset' && <OffsetSimulator offset={offsetConfig[0].config.annual_growth[0].carbonable} globalConf={globalConfig[0]} /> }
                </div>
            </div>
            
        </div>
    )
}