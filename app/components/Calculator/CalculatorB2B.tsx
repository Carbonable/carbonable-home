import { useState } from "react";
import Repartition from "./Repartition";

export default function CalculatorB2B() {
    const [value, setValue] = useState([50]);
    return (
        <div className="w-full mt-6 md:mt-10 flex flex-wrap">
            <div className="w-11/12 mx-auto justify-start text-left lg:w-11/12 flex flex-wrap md:flex-nowrap items-center md:gap-4">
                <div className="w-full md:w-1/2">
                    <div className="text-neutral-100 font-inter font-medium ml-1 text-sm">Incompressible Yearly Emissions (t)</div>
                    <div className="relative w-full">
                        <input id="emission" type="number" className="text-neutral-100 border border-neutral-500 rounded-xl outline-0 w-full px-4 py-1 mt-1 bg-transparent focus:border-neutral-300" name="emission" placeholder="100" />
                    </div>
                </div>
                <div className="w-full md:w-1/2 mt-4 md:mt-0">
                    <div className="text-neutral-100 font-inter font-medium ml-1 text-sm">Define a duration (years)</div>
                    <div className="relative w-full">
                        <input id="duration" type="number" className="text-neutral-100 border border-neutral-500 rounded-xl outline-0 w-full px-4 py-1 mt-1 bg-transparent focus:border-neutral-300" name="duration" placeholder="20" />
                    </div>
                </div>
            </div>
            <div className="mt-8 w-11/12 mx-auto lg:w-11/12 text-left">
                <div className="text-neutral-100 font-inter font-medium ml-1 text-sm">Investment Strategy Split</div>
                <div className="mt-2 w-full">
                    <Repartition value={value} setValue={setValue} />
                </div>
                <div className="w-full flex flex-nowrap justify-between text-sm px-1">
                    <div className="w-1/2 text-greenish-500">
                        {value[0]}% - Forward
                    </div>
                    <div className="w-1/2 text-right text-blue">
                        {100 - value[0]}% - Purchase
                    </div>
                </div>
            </div>
        </div>
    )
}