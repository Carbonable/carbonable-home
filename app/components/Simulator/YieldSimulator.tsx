import * as SliderPrimitive from '@radix-ui/react-slider';
import { useEffect, useRef, useState } from "react"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { debounce } from "lodash"
import { useFetcher } from '@remix-run/react';
import { RadioGroup } from '@headlessui/react';
import Kpi from '../Common/Kpi';
import { shortenNumber } from '~/utils/utils';

function getAccruedRevenues({selectedScenario, chartsData}: any) {
    if (chartsData.length === 1) { return 0 };

    switch(selectedScenario) {
        case "Base":
            return shortenNumber(parseFloat(chartsData[chartsData.length - 1].baseAccrued));
        case "Worst":
            return shortenNumber(parseFloat(chartsData[chartsData.length - 1].worstAccrued));
        case "Best":
            return shortenNumber(parseFloat(chartsData[chartsData.length - 1].bestAccrued));
    }
}

function getAverageAPR({selectedScenario, chartsData, investment, duration}: any) {
    if (chartsData.length === 1) { return 0 };

    const totalInvestment = investment * duration;

    switch(selectedScenario) {
        case "Base":
            return (parseInt(chartsData[chartsData.length - 1].baseAccrued) * 100 / totalInvestment).toFixed(0);
        case "Worst":
            return (parseInt(chartsData[chartsData.length - 1].worstAccrued) * 100 / totalInvestment).toFixed(0);
        case "Best":
            return (parseInt(chartsData[chartsData.length - 1].bestAccrued) * 100 / totalInvestment).toFixed(0);
    }
}

function getTooltipData({payload, selectedScenario, investment}: any) {
    let yearlyYield;
    let APR;
    let accruedYield;
    let shortenYield;

    switch(selectedScenario) {
        case "Base":
            yearlyYield = payload[0].payload.baseExact.toFixed(2);
            shortenYield = shortenNumber(yearlyYield);
            APR = (yearlyYield / investment * 100).toFixed(2);
            accruedYield = shortenNumber(payload[0].payload.baseAccrued);
            
            return { shortenYield, APR, accruedYield };
        case "Worst":
            yearlyYield = payload[0].payload.worstExact.toFixed(2);
            shortenYield = shortenNumber(yearlyYield);
            APR = (yearlyYield / investment * 100).toFixed(2);
            accruedYield = shortenNumber(payload[0].payload.worstAccrued);
            
            return { shortenYield, APR, accruedYield };
        case "Best":
            yearlyYield = payload[0].payload.bestExact.toFixed(2);
            shortenYield = shortenNumber(yearlyYield);
            APR = (yearlyYield / investment * 100).toFixed(2);
            accruedYield = shortenNumber(payload[0].payload.bestAccrued);
            
            return { shortenYield, APR, accruedYield };
    }
    return { yearlyYield, APR, accruedYield }
}

export default function YieldSimulator({carbonPrices, globalConf}: any) {
    // Inputs
    const [investment, setInvestment] = useState(100);
    const [duration, setDuration] = useState([30]);

    // Scenarios filters
    const scenarios = ["Base", "Worst", "Best"];
    const [selectedScenario, setSelectedScenario] = useState(scenarios[0]);

    // Scenarios values
    const worst = carbonPrices.filter((carbonPrice: any) => carbonPrice.type === "worst");
    const base = carbonPrices.filter((carbonPrice: any) => carbonPrice.type === "base"); 
    const best = carbonPrices.filter((carbonPrice: any) => carbonPrice.type === "best"); 
    const carbonCreditPrice = globalConf.config.carbon_credit_price_per_ton;
    const resellComission = globalConf.config.resell_commission;

    // Charts data
    const [chartsData, setChartsData] = useState([{}]);

    // Analytics
    const analytics = useFetcher();
    const ref = useRef<HTMLInputElement>(null);

    function handleChange(event: any) {
        debouncedSubmit(event.currentTarget)
    }

    const debouncedSubmit = useRef(
        debounce(async (criteria) => {
            analytics.submit(criteria);;
        }, 1000)
      ).current;

    useEffect(() => {
        return () => {
            debouncedSubmit.cancel();
        };
    }, [debouncedSubmit]);

    useEffect(() => {
        let dataGraph = [];
        const startingYear = new Date().getFullYear();
        const carbonAbsorption = investment / (duration[0] * carbonCreditPrice);

        // Value per year
        let worstYear = 0;
        let baseYear = 0;
        let bestYear = 0;

        // Accrued values
        let worstAccrued = 0;
        let baseAccrued = 0;
        let bestAccrued = 0;
        
        for (let i = 0; i < duration[0]; i++)  {
            worstYear = carbonAbsorption * worst[0].values[i] * (1 - (resellComission/100));
            worstAccrued = worstAccrued + worstYear;
            baseYear = carbonAbsorption * base[0].values[i] * (1 - (resellComission/100));
            baseAccrued = baseAccrued + baseYear;
            bestYear = carbonAbsorption * best[0].values[i] * (1 - (resellComission/100));
            bestAccrued = bestAccrued + bestYear;
            
            dataGraph.push(
                {
                    year: parseInt((startingYear + i).toString()),
                    worst: parseInt(worstYear.toString()),
                    base: parseInt(baseYear.toString()),
                    best: parseInt(bestYear.toString()),
                    worstExact: worstYear,
                    baseExact: baseYear,
                    bestExact: bestYear,
                    worstAccrued: worstAccrued,
                    baseAccrued: baseAccrued,
                    bestAccrued: bestAccrued
                }
            )
        }
        setChartsData(dataGraph);
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [duration, investment]);
    
    // Tooltip to display on mouse over the chart
    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            let { shortenYield, APR, accruedYield } = getTooltipData({payload, selectedScenario, investment});
            
            return (
                <div className="px-8 pt-4 pb-4 bg-neutral-700/90 border border-neutral-500 font-inter rounded-xl">
                    <p className="text-left uppercase bold text-neutral-100">{`Forecast for ${label} `}</p>
                    <p className="text-blue text-left mt-1">{`Yield: ${shortenYield}$`}</p>
                    <p className="text-neutral-100 text-left">{`APR: ${APR}%`}</p>
                    <p className="text-greenish-500 text-left">{`Accrued Yield: ${accruedYield}$`}</p>
                </div>
            );
        }
      
        return null;
    };

    return (
        <div className="w-full mt-6 md:mt-10 flex flex-wrap">
            <div className="w-11/12 mx-auto justify-start text-left md:w-8/12 lg:w-11/12 lg:order-1">
                <analytics.Form method="post" action="/simulators/analytics" onChange={handleChange}>
                    <div className="flex flex-wrap justify-center items-start lg:space-x-8 xl:space-x-12 xl:ml-20">
                        <div className="w-full lg:w-1/4">
                            <div className="text-neutral-100 font-inter font-medium ml-1 text-sm">Investment ($)</div>
                            <div className="relative w-full">
                                <input id="investment" type="number" ref={ref} className="text-neutral-100 border border-neutral-500 rounded-xl outline-0 w-full px-4 py-1 mt-1 bg-transparent focus:border-neutral-300" value={investment} name="investment" onChange={(e) => parseInt(e.target.value) > 0 ? setInvestment(parseInt(e.target.value) || 1) : 1} placeholder="How much do you want to invest" />
                            </div>
                            <input hidden id="source" name="source" defaultValue="yield" />
                        </div>
                        <div className="w-full lg:w-1/4">
                            <div className="text-neutral-100 font-inter font-medium ml-1 text-sm mt-4 lg:mt-0">Duration (years)</div>
                            <div className="mt-1 mb-10">
                                <div className="text-neutral-100 border border-neutral-500 w-full pt-[5px] pl-[4px] pr-[4px] rounded-xl bg-transparent h-8 grow hover:border-neutral-300">
                                    <SliderPrimitive.Root
                                        min={20}
                                        max={30}
                                        aria-label="value"
                                        className="relative flex h-5 w-full touch-none items-center"
                                        value={duration}
                                        onValueChange={(val) => setDuration(val)}
                                        id="duration"
                                        >
                                        <SliderPrimitive.Track className="w-full h-8 grow">
                                            <SliderPrimitive.Range className="absolute h-full rounded-xl" />
                                        </SliderPrimitive.Track>
                                        <SliderPrimitive.Thumb className="block h-6 w-6 rounded-xl bg-green-blue focus:outline-none focus-visible:ring focus-visible:ring-green-blue focus-visible:ring-opacity-75 cursor-pointer" >
                                            <div className="absolute top-8 left-[2px] text-neutral-100 font-inter font-medium">{duration}</div>
                                        </SliderPrimitive.Thumb>
                                    </SliderPrimitive.Root>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3">
                            <div className="text-neutral-100 font-inter font-medium ml-1 text-sm">Filter by scenario</div>
                            <div className="w-full">
                                <RadioGroup value={selectedScenario} onChange={setSelectedScenario}>
                                <RadioGroup.Label className="sr-only">Scenarios</RadioGroup.Label>
                                <div className="space-x-2 flex flex-wrap items-center justify-start w-full mt-2">
                                    {scenarios.map((scenario) => (
                                    <RadioGroup.Option
                                        key={scenario}
                                        value={scenario}
                                        className={({ checked }) =>
                                        `
                                        ${
                                            checked ? 'text-neutral-100 border-neutral-100 bg-opacityLight-5' : 'bg-transparent text-neutral-400 border-neutral-400'
                                        }
                                            relative flex cursor-pointer rounded-full shadow-md border focus:outline-none uppercase text-sm`
                                        }
                                    >
                                        {({ checked }) => (
                                        <>
                                            <div className="flex w-full items-center px-2 py-1">
                                                <div className="px-2">
                                                    <div className="text-sm">
                                                        <RadioGroup.Label
                                                            as="p"
                                                            className={` ${
                                                            checked ? 'text-neutral-100' : ' text-neutral-400'
                                                            }`}
                                                        >
                                                            {scenario}
                                                        </RadioGroup.Label>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                        )}
                                    </RadioGroup.Option>
                                    ))}
                                </div>
                                </RadioGroup>
                            </div>
                        </div>
                    </div>
                </analytics.Form>
            </div>
            <div className="w-full px-0 mt-8 lg:w-9/12 lg:order-3">
                <div className="w-full min-h-[400px]">
                    <ResponsiveContainer width="100%" height="100%" minHeight='400px'>
                        <AreaChart
                            width={1000}
                            height={3000}
                            data={chartsData}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            style={{
                                fontSize: '14px',
                                fontFamily: 'Inter',
                            }}
                        >
                            <defs>
                                <linearGradient id="colorBest" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#0AF2AD" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#0AF2AD" stopOpacity={0}/>
                                </linearGradient>
                                <linearGradient id="colorBase" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#AAC6FD" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#AAC6FD" stopOpacity={0}/>
                                </linearGradient>
                                <linearGradient id="colorWorst" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#787675" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#787675" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip content={<CustomTooltip />} wrapperStyle={{ outline: "none" }} />
                        <Area name="Worst market forecast" type="monotone" dataKey="worst" fill={selectedScenario === "Worst" ? 'url(#colorWorst)' : 'transparent'} stroke={selectedScenario === "Worst" ? '#787675' : 'transparent'} dot={false} activeDot={selectedScenario === "Worst" ? true : false}  />
                        <Area name="Base market forecast" type="monotone" dataKey="base" fill={selectedScenario === "Base" ? 'url(#colorBase)' : 'transparent'} stroke={selectedScenario === "Base" ? '#AAC6FD' : 'transparent'} dot={false} activeDot={selectedScenario === "Base" ? true : false} />
                        <Area name="Best market forecast" type="monotone" dataKey="best" fill={selectedScenario === "Best" ? 'url(#colorBest)' : 'transparent'} stroke={selectedScenario === "Best" ? '#0AF2AD' : 'transparent'} dot={false} activeDot={selectedScenario === "Best" ? true : false} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="w-full mt-8 lg:mt-0 mb-4 lg:pb-24 flex flex-wrap lg:w-3/12 lg:order-2 lg:items-center">
                <Kpi value={getAverageAPR({selectedScenario, chartsData, investment, duration})} unit={"%"} label={"Average APR"}></Kpi>
                <Kpi value={getAccruedRevenues({selectedScenario, chartsData, investment})} unit={"$"} label={"Total revenue"}></Kpi>
            </div>
        </div>
    )
}