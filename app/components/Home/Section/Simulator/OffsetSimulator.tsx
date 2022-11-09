import * as SliderPrimitive from '@radix-ui/react-slider';
import { Form, useSubmit } from '@remix-run/react';
import { debounce } from 'lodash';
import { useEffect, useRef, useState } from "react";
import { RadioGroup } from '@headlessui/react';
import { XCircleIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Kpi from './Kpi';

export default function OffsetSimulator({offset, globalConf}: any) {

    // Inputs
    const [ccNeed, setCcNeed] = useState(10);
    const [duration, setDuration] = useState([20]);

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


    const submit = useSubmit();
    function handleChange(event: any) {
        debouncedSubmit(event.currentTarget)
    }

    const debouncedSubmit = useRef(
        debounce(async (criteria) => {
            submit(criteria);;
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
        let worstAccrued = 0;
        let baseAccrued = 0;
        let bestAccrued = 0;
        let carbonableInvestAccrued = 0;
        
        for (let i = 0; i < duration[0]; i++)  {
            worstAccrued = worstAccrued + (ccNeed * worst[0].values[i]);
            baseAccrued = baseAccrued + (ccNeed * base[0].values[i]);
            bestAccrued = bestAccrued + (ccNeed * best[0].values[i]);
            carbonableInvestAccrued = (ccNeed * (i+1) * carbonCreditPrice);
            
            dataGraph.push(
                {
                    year: parseInt((startingYear + i).toString()),
                    worst: parseInt(worstAccrued.toString()),
                    base: parseInt(baseAccrued.toString()),
                    best: parseInt(bestAccrued.toString()),
                    base_cc_unit_price: carbonCreditPrice,
                    carbonableInvestAccrued: parseInt(carbonableInvestAccrued.toString())
                }
            )
        }
        setGraphData(dataGraph);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [duration, ccNeed]);
    
    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
          return (
            <div className="p-4 bg-black font-inter">
              <p className="text-[#ffd700] text-center">{`Carbonable offset cost in ${label}: ${payload[0].value}$`}</p>
              
              
            </div>
          );
        }
      
        return null;
    };

    return (
        <div className="w-full mt-6 md:mt-10 flex flex-wrap">
            <div className="w-11/12 mx-auto justify-start text-left md:w-8/12 lg:w-11/12 lg:order-1">
                <Form method="post" onChange={handleChange}>
                    <div className="flex flex-wrap justify-center items-start lg:space-x-8 xl:space-x-12 xl:ml-20">
                        <div className="w-full lg:w-1/4">
                            <div className="text-white uppercase font-inter font-extralight ml-1 text-sm">Carbon to offset (Tons)</div>
                            <div className="relative w-full">
                                <input id="investment" type="number" className="text-white border border-white rounded-full outline-0 w-full px-4 py-1 mt-1 bg-transparent" value={ccNeed} name="investment" onChange={(e) => setCcNeed(parseInt(e.target.value))} placeholder="How much tons of carbon do you need to offset" />
                                <button className="outline-none rounded-full bg-white text-black flex items-end justify-center text-xl w-6 h-6 absolute top-[8px] right-[34px]" onClick={() => setCcNeed(ccNeed + 1)}>+</button>
                                <button className="outline-none rounded-full bg-white text-black flex items-end justify-center text-xl w-6 h-6 absolute top-[8px] right-[6px]" onClick={() => setCcNeed(ccNeed - 1)}>-</button>
                            </div>
                            <input hidden id="source" name="source" defaultValue="yield" />
                        </div>
                        <div className="w-full lg:w-1/4">
                            <div className="text-white uppercase font-inter font-extralight mt-8 ml-1 text-sm lg:mt-0">Duration (years)</div>
                            <div className="mt-1 mb-10">
                                <div className="border border-white w-full pt-[5px] pl-[4px] pr-[4px] rounded-full bg-transparent h-8 grow">
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
                            <div className="text-white uppercase font-inter font-extralight ml-1 text-sm">Filter by scenario</div>
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
                                            checked ? 'bg-white' : 'bg-transparent'
                                        }
                                            relative flex cursor-pointer rounded-full shadow-md border border-white focus:outline-none uppercase text-sm`
                                        }
                                    >
                                        {({ checked }) => (
                                        <>
                                            <div className="flex w-full items-center pl-1 pr-4 py-1">
                                                {checked && (
                                                    <div className="shrink-0 text-black">
                                                    <CheckCircleIcon className="h-5 w-5" />
                                                    </div>
                                                )}
                                                {!checked && (
                                                    <div className="shrink-0 text-white">
                                                    <XCircleIcon className="h-5 w-5" />
                                                    </div>
                                                )}
                                                <div className="pl-2">
                                                    <div className="text-sm">
                                                        <RadioGroup.Label
                                                            as="p"
                                                            className={` ${
                                                            checked ? 'text-black/50' : ' text-white'
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
                </Form>
            </div>
            <div className="w-full px-0 mt-8 min-h-[300px] md:min-h-[400px] lg:w-9/12 lg:order-3">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
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
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Line name="Worst market forecast" type="monotone" dataKey="worst" stroke={selectedScenario === "Worst" ? '#787675' : 'transparent'} dot={false} activeDot={selectedScenario === "Worst" ? true : false}  />
                    <Line name="Base market forecast" type="monotone" dataKey="base" stroke={selectedScenario === "Base" ? '#AAC6FD' : 'transparent'} dot={false} activeDot={selectedScenario === "Base" ? true : false} />
                    <Line name="Best market forecast" type="monotone" dataKey="best" stroke={selectedScenario === "Best" ? '#0AF2AD' : 'transparent'} dot={false} activeDot={selectedScenario === "Best" ? true : false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="w-full mb-4 flex flex-wrap lg:w-3/12 lg:order-2 lg:items-center">
                <Kpi value={50} unit={"$"} label={"Investment value Carbonable"}></Kpi>
                <Kpi value={50} unit={"$"} label={"Total cost saving"}></Kpi>
                <Kpi value={100} unit={"$"} label={"Average Yearly Cost saving"}></Kpi>
            </div>
        </div>
    )
}