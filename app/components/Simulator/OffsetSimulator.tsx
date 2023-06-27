import * as SliderPrimitive from '@radix-ui/react-slider';
import { useFetcher } from '@remix-run/react';
import { debounce } from 'lodash';
import { useEffect, useRef, useState } from "react";
import { RadioGroup } from '@headlessui/react';
import { Area, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { shortenNumber } from '~/utils/utils';
import Kpi from '../Common/Kpi';


export default function OffsetSimulator({offset, globalConf}: {offset: any, globalConf: any}) {

    // Inputs
    const [ccNeed, setCcNeed] = useState(10);
    const [duration, setDuration] = useState([30]);

    // Outputs
    const [carbonableValue, setCarbonableValue] = useState("0");
    const [totalCostSaving, setTotalCostSaving] = useState("0");
    const [averageYearlyCostSaving, setAverageYearlyCostSaving] = useState("0");

    // Scenarios filters
    const scenarios = ["Base", "Worst", "Best"];
    const [selectedScenario, setSelectedScenario] = useState(scenarios[0]);

    // Scenarios values
    const worst = offset.filter((offset: any) => offset.type === "worst");
    const base = offset.filter((offset: any) => offset.type === "base"); 
    const best = offset.filter((offset: any) => offset.type === "best");
    const carbonCreditPrice = globalConf.config.carbon_credit_price_per_ton;

    // Charts data
    const [graphData, setGraphData] = useState([{}]);

    // Analytics
    const analytics = useFetcher();
    const ref = useRef<HTMLInputElement>(null);

    function handleChange(event: any) {
        debouncedSubmit(event.currentTarget)
    }

    const debouncedSubmit = useRef(
        debounce(async (criteria) => {
            analytics.submit(criteria);
        }, 1000)
      ).current;

    useEffect(() => {
        return () => {
            debouncedSubmit.cancel();
        };
    }, [debouncedSubmit]);

    useEffect(() => {
        const dataGraph = [];
        const costSavingsBase = [];
        const costSavingsWorst = [];
        const costSavingsBest = [];
        const startingYear = new Date().getFullYear();
        let baseYear = 0;
        let worstYear = 0;
        let bestYear = 0;
        let carbonableInvest = 0
        let totalCostSavingExact = 0;
        
        for (let i = 0; i < duration[0]; i++)  {
            baseYear = base[0].values[i] * ccNeed;
            worstYear = worst[0].values[i] * ccNeed;
            bestYear = best[0].values[i] * ccNeed;
            carbonableInvest = carbonCreditPrice * ccNeed

            
            dataGraph.push(
                {
                    year: parseInt((startingYear + i).toString()),
                    carbonableInvest,
                    baseYear,
                    worstYear,
                    bestYear
                }
            )

            costSavingsBase.push(baseYear - carbonableInvest);
            costSavingsWorst.push(worstYear - carbonableInvest);
            costSavingsBest.push(bestYear - carbonableInvest);
        }
        setGraphData(dataGraph);
        setCarbonableValue(shortenNumber(carbonCreditPrice * ccNeed * duration[0]));

        switch(selectedScenario) {
            case "Base":
                totalCostSavingExact = costSavingsBase.reduce(function (accumVariable, curValue) {
                    return accumVariable + curValue
                }, 0);
                setTotalCostSaving(shortenNumber(totalCostSavingExact));

                break;
            case "Worst":
                totalCostSavingExact = costSavingsWorst.reduce(function (accumVariable, curValue) {
                    return accumVariable + curValue
                }, 0);
                setTotalCostSaving(shortenNumber(totalCostSavingExact));
                break;
            case "Best":
                totalCostSavingExact = costSavingsBest.reduce(function (accumVariable, curValue) {
                    return accumVariable + curValue
                }, 0);
                setTotalCostSaving(shortenNumber(totalCostSavingExact));
                break;
        }

        setAverageYearlyCostSaving(shortenNumber(totalCostSavingExact / duration[0]));


    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [duration, ccNeed, totalCostSaving, selectedScenario]);
    
    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            let index = 1;

            switch(selectedScenario) {
                case "Worst":
                    index = 2;
                    break;
                case "Best":
                    index = 3;
                    break;
            }

            return (
                <div className="px-8 pt-4 pb-4 bg-neutral-700/90 border border-neutral-500 font-inter rounded-xl">
                    <p className="text-left uppercase bold text-neutral-100">{`Forecast for ${label} `}</p>
                    <p className="text-[#ffd700] text-left mt-1">{`Carbonable offset cost: ${shortenNumber(payload[0].value)}$`}</p>
                    <p className="text-blue text-left">{`Market offset cost: ${shortenNumber(payload[index].value)}$`}</p>
                    <p className="text-greenish-500 text-left">{`Cost saving: ${shortenNumber((payload[index].value - payload[0].value) / payload[index].value * 100)}%`}</p>
                </div>
            );
        }
      
        return null;
    };

    return (
        <div className="w-full mt-6 md:mt-10 flex flex-wrap">
            <div className="w-11/12 mx-auto justify-start text-left md:w-8/12 lg:w-11/12 lg:order-1">
                <analytics.Form method="post" action="/simulators/analytics" onChange={handleChange}>
                    <div className="flex flex-wrap justify-center items-start lg:space-x-8 xl:space-x-12 xl:ml-20 lg:flex-nowrap">
                        <div className="w-full lg:w-1/3">
                            <div className="text-neutral-100 font-inter font-medium ml-1 text-sm">Carbon to offset (Tons/Year)</div>
                            <div className="relative w-full">
                                <input id="investment" type="number" ref={ref} className="text-neutral-100 border border-neutral-500 rounded-xl outline-0 w-full px-4 py-1 mt-1 bg-transparent focus:border-neutral-300" value={ccNeed} name="investment" onChange={(e) => parseInt(e.target.value) > 0 ? setCcNeed(parseInt(e.target.value) || 1) : 1 } placeholder="How much tons of carbon do you need to offset" />
                            </div>
                            <input hidden id="source" name="source" defaultValue="offset" />
                        </div>
                        <div className="w-full lg:w-1/3">
                            <div className="text-neutral-100 font-inter font-medium ml-1 text-sm mt-8 lg:mt-0">Duration (years)</div>
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
                                            <SliderPrimitive.Range className="absolute h-full rounded-full" />
                                        </SliderPrimitive.Track>
                                        <SliderPrimitive.Thumb className="block h-6 w-6 rounded-full bg-green-blue focus:outline-none focus-visible:ring focus-visible:ring-green-blue focus-visible:ring-opacity-75 cursor-pointer" >
                                            <div className="absolute top-8 left-[2px]">{duration}</div>
                                        </SliderPrimitive.Thumb>
                                    </SliderPrimitive.Root>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3">
                        <div className="text-neutral-100 font-inter font-medium ml-1 text-sm mt-8 lg:mt-0">Filter by scenario</div>
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
            <div className="w-full px-0 mt-8 min-h-[300px] md:min-h-[400px] lg:w-9/12 lg:order-3">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        width={1000}
                        height={3000}
                        data={graphData}
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
                    <Line name="Carbonable forecast" type="monotone" dataKey="carbonableInvest" stroke='#ffd700' dot={false} />
                    <Area name="Market forecast base" type="monotone" dataKey="baseYear" fill={selectedScenario === "Base" ? 'url(#colorBase)' : 'transparent'} stroke={selectedScenario === "Base" ? '#AAC6FD' : 'transparent'} dot={false} activeDot={selectedScenario === "Base" ? true : false} />
                    <Area name="Market forecast worst" type="monotone" dataKey="worstYear" fill={selectedScenario === "Worst" ? 'url(#colorWorst)' : 'transparent'} stroke={selectedScenario === "Worst" ? '#787675' : 'transparent'} dot={false} activeDot={selectedScenario === "Worst" ? true : false} />
                    <Area name="Market forecast best" type="monotone" dataKey="bestYear" fill={selectedScenario === "Best" ? 'url(#colorBest)' : 'transparent'} stroke={selectedScenario === "Best" ? '#0AF2AD' : 'transparent'} dot={false} activeDot={selectedScenario === "Best" ? true : false} />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
            <div className="w-full mb-4 flex flex-wrap lg:w-3/12 lg:order-2 lg:items-center">
                <Kpi value={carbonableValue} unit={"$"} label={"Investment value Carbonable"}></Kpi>
                <Kpi value={totalCostSaving} unit={"$"} label={"Total cost saving"}></Kpi>
                <Kpi value={averageYearlyCostSaving} unit={"$"} label={"Average Yearly Cost saving"}></Kpi>
            </div>
        </div>
    )
}