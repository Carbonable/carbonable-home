import { useEffect, useState } from "react";
import Repartition from "./Repartition";
import FeatureTable from "./FeatureTable";
import { shortenNumber } from "~/utils/utils";
import Chart from "./Chart";


function calculateMixedArray(firstArray: number[], secondArray: number[], repartition: number): number[] {
    if (firstArray.length !== secondArray.length) {
      throw new Error("Arrays must have the same length");
    }
  
    const mixedArray: number[] = [];

    for (let i = 0; i < firstArray.length; i++) {
      const mixedValue = (repartition / 100 * firstArray[i]) + (((100 - repartition) / 100) * secondArray[i] * 0.9);
      mixedArray.push(mixedValue);
    }
    return mixedArray;
  }

export default function CalculatorB2B({carbonPrices, globalConf, buyPrices}: {carbonPrices: any, globalConf: any, buyPrices: any}) {

    const projectDuration = 20;
    const [repartition, setRepartition] = useState([50]);
    const [emission, setEmission] = useState(100);
    const [startingYear, setStartingYear] = useState(new Date().getFullYear());
    const currentYear = new Date().getFullYear();
    const [startingIndex, setStartingIndex] = useState(startingYear - currentYear);

    // Cost for targetted starting year
    const [totalCost, setTotalCost] = useState(carbonPrices[1].values.slice(startingIndex, projectDuration + startingIndex).reduce((a: number, b: number) => a + b, 0) * emission);
    const [totalFundCarbonable, setTotalFundCarbonable] = useState(buyPrices.values.slice(startingIndex, projectDuration + startingIndex).reduce((a: number, b: number) => a + b, 0) * emission);
    const [totalBuyCarbonable, setTotalBuyCarbonable] = useState(carbonPrices[1].values.slice(startingIndex, projectDuration + startingIndex).reduce((a: number, b: number) => a + b, 0) * (emission * 0.9));
    const [tailoredCarbonableValues, setTailoredCarbonableValues] = useState(calculateMixedArray(buyPrices.values, carbonPrices[1].values, repartition[0]));
    const [totalTailoredCarbonable, setTotalTailoredCarbonable] = useState(tailoredCarbonableValues.slice(startingIndex, projectDuration + startingIndex).reduce((a: number, b: number) => a + b, 0) * emission);

    // Cost for current year
    const [totalFundCarbonableCurrentYear, setTotalFundCarbonableCurrentYear] = useState(buyPrices.values.slice(0, projectDuration).reduce((a: number, b: number) => a + b, 0) * emission);
    const [totalBuyCarbonableCurrentYear, setTotalBuyCarbonableCurrentYear] = useState(carbonPrices[1].values.slice(0, projectDuration).reduce((a: number, b: number) => a + b, 0) * (emission * 0.9));
    const [tailoredCarbonableValuesCurrentYear, setTailoredCarbonableValuesCurrentYear] = useState(calculateMixedArray(buyPrices.values, carbonPrices[1].values, repartition[0]));
    const [totalTailoredCarbonableCurrentYear, setTotalTailoredCarbonableCurrentYear] = useState(tailoredCarbonableValues.slice(0, projectDuration).reduce((a: number, b: number) => a + b, 0) * emission);

    useEffect(() => {
        setStartingIndex(startingYear - currentYear);
    }, [startingYear]);

    useEffect(() => {
        setTotalCost(carbonPrices[1].values.slice(startingIndex, projectDuration + startingIndex).reduce((a: number, b: number) => a + b, 0) * emission);
        setTotalFundCarbonable(buyPrices.values.slice(startingIndex, projectDuration + startingIndex).reduce((a: number, b: number) => a + b, 0) * emission);
        setTotalBuyCarbonable(carbonPrices[1].values.slice(startingIndex, projectDuration + startingIndex).reduce((a: number, b: number) => a + b, 0) * emission * 0.9);
        setTailoredCarbonableValues(calculateMixedArray(buyPrices.values, carbonPrices[1].values, repartition[0]));
        
        setTotalFundCarbonableCurrentYear(buyPrices.values.slice(0, projectDuration).reduce((a: number, b: number) => a + b, 0) * emission);
        setTotalBuyCarbonableCurrentYear(carbonPrices[1].values.slice(0, projectDuration).reduce((a: number, b: number) => a + b, 0) * emission * 0.9);
        setTailoredCarbonableValuesCurrentYear(calculateMixedArray(buyPrices.values, carbonPrices[1].values, repartition[0]));
    }, [emission, startingIndex, repartition]);

    useEffect(() => {
        setTotalTailoredCarbonable(tailoredCarbonableValues.slice(startingIndex, projectDuration + startingIndex).reduce((a: number, b: number) => a + b, 0) * emission);

        setTotalTailoredCarbonableCurrentYear(tailoredCarbonableValuesCurrentYear.slice(0, projectDuration).reduce((a: number, b: number) => a + b, 0) * emission);
    }, [tailoredCarbonableValues, startingIndex]);

    // Build the possible options for the select based on the buyPrices array length 
    const options = Array.from({ length: buyPrices.values.length - projectDuration - 1 }, (_, index) => new Date().getFullYear() + index);

    return (
        <>
            <div className="mt-6 md:mt-10 w-11/12 mx-auto lg:w-11/12 text-left rounded-2xl bg-neutral-700 border border-neutral-500 p-8">
                <div className="flex flex-wrap md:flex-nowrap items-center md:gap-4 justify-start ">
                    <div className="w-full md:w-1/2">
                        <div className="text-neutral-100 font-inter font-medium ml-1 text-sm">Incompressible Yearly Emissions (t)</div>
                        <div className="relative w-full">
                            <input 
                                id="emission" 
                                type="number" 
                                className="text-neutral-100 border border-neutral-500 rounded-xl outline-0 w-full px-4 py-1 mt-1 bg-transparent focus:border-neutral-300" 
                                value={emission} 
                                name="emission" 
                                placeholder="100" 
                                onChange={(e) => setEmission(parseInt(e.target.value))} />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 mt-4 md:mt-0">
                        <div className="text-neutral-100 font-inter font-medium ml-1 text-sm">Define a starting year of investment</div>
                        <div className="relative w-full border border-neutral-500 rounded-xl pl-4 pr-2 py-1 mt-1 focus:border-neutral-300">
                            <select 
                                id="startingYear" 
                                className="text-neutral-100 outline-0 w-full bg-transparent cursor-pointer" 
                                style={{ WebkitPaddingEnd: '20px'}} 
                                name="startingYear" 
                                placeholder="2023"
                                onChange={(e) => setStartingYear(parseInt(e.target.value))}
                            >
                                {options.map((value: any, index: number) => {
                                    return (
                                        <option key={index} value={value}>{value}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="text-neutral-100 font-inter font-medium ml-1 text-sm">Investment Strategy Split</div>
                    <div className="mt-2 w-full">
                        <Repartition value={repartition} setValue={setRepartition} />
                    </div>
                    <div className="w-full flex flex-nowrap justify-between text-sm px-1">
                        <div className="w-1/2 text-greenish-500">
                            {repartition[0]}% - Forward
                        </div>
                        <div className="w-1/2 text-right text-blue">
                            {100 - repartition[0]}% - Purchase
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 overflow-x-auto mx-auto w-11/12">
                <FeatureTable 
                    startingYear={startingYear}
                    projectDuration={projectDuration}
                    currentYear={currentYear}
                    totalBuyCarbonable={totalBuyCarbonable}
                    totalFundCarbonable={totalFundCarbonable}
                    totalTailoredCarbonable={totalTailoredCarbonable}
                    totalCost={totalCost}
                    totalBuyCarbonableCurrentYear={totalBuyCarbonableCurrentYear}
                    totalFundCarbonableCurrentYear={totalFundCarbonableCurrentYear}
                    totalTailoredCarbonableCurrentYear={totalTailoredCarbonableCurrentYear}
                />
            </div>
            <div className="mt-8 text-2xl text-neutral-100">
                <span className="text-orange">Save up to ${shortenNumber(totalTailoredCarbonable - totalTailoredCarbonableCurrentYear)} </span> on your project by starting today.
            </div>
            <div className="text-sm text-neutral-300 mt-2">
                For the same quality and quantity of carbon credits.
            </div>
            <div className="mt-20 mx-auto w-11/12">
                <Chart emission={emission} startingIndex={startingIndex} buyPrices={buyPrices.values} carbonPrices={carbonPrices[1].values} projectDuration={projectDuration} repartition={repartition[0]} />
            </div>
        </>
    )
}