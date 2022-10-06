import * as SliderPrimitive from '@radix-ui/react-slider';
import { useEffect, useState } from "react"
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function OffsetSimulator(offset: any) {

    const [ccNeed, setCcNeed] = useState(10);
    const [duration, setDuration] = useState([20]);
    const [graphData, setGraphData] = useState([{}]);

    const worst = offset.offset.filter((offset: any) => offset.type === "worst");
    const base = offset.offset.filter((offset: any) => offset.type === "base"); 
    const best = offset.offset.filter((offset: any) => offset.type === "best"); 

    const updateCCNeed = (event: any) => {
        setCcNeed(event.target.value);
    };

    useEffect(() => {
        let dataGraph = [];
        const startingYear = new Date().getFullYear();
        let worstAccrued = 0;
        let baseAccrued = 0;
        let bestAccrued = 0;
        
        for (let i = 0; i < duration[0]; i++)  {
            worstAccrued = worstAccrued + ((ccNeed * (1 + worst[0].values[i]/100) - ccNeed));
            baseAccrued = baseAccrued + ((ccNeed * (1 + base[0].values[i]/100) - ccNeed));
            bestAccrued = bestAccrued + ((ccNeed * (1 + best[0].values[i]/100) - ccNeed));
            
            dataGraph.push(
                {
                    year: parseInt((startingYear + i).toString()),
                    worst: parseInt(worstAccrued.toString()),
                    base: parseInt(baseAccrued.toString()),
                    best: parseInt(bestAccrued.toString())
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
              <p className="text-center font-thin">{`Accrued yield in ${label} `}</p>
              <p className="text-green text-left">{`Best: ${payload[2].value}$`}</p>
              <p className="text-lightblue text-left">{`Base: ${payload[1].value}$`}</p>
              <p className="text-grey text-left">{`Worst: ${payload[0].value}$`}</p>
            </div>
          );
        }
      
        return null;
    };

    return (
        <div className="w-full bg-footerBg mt-6 md:mt-20 flex flex-wrap">
            <div className="w-11/12 mx-auto md:w-1/3 justify-start text-left md:p-6">
                <div className="text-white uppercase font-inter font-extralight">Carbon Credit to compensate (T/YEAR)</div>
                <input type="number" className="text-black/50 outline-0 w-full p-4 mt-1" defaultValue={ccNeed} name="email" onChange={updateCCNeed} placeholder="How much do you want to invest" />
                <div className="text-white uppercase font-inter font-extralight mt-8">Duration (years)</div>
                <div className="mt-2 mb-10">
                    <SliderPrimitive.Root
                        min={20}
                        max={30}
                        aria-label="value"
                        className="relative flex h-5 w-full touch-none items-center"
                        value={duration}
                        onValueChange={(val) => setDuration(val)}
                        >
                        <SliderPrimitive.Track className="relative h-1 w-full grow rounded-full bg-black">
                            <SliderPrimitive.Range className="absolute h-full rounded-full bg-green" />
                        </SliderPrimitive.Track>
                        <SliderPrimitive.Thumb className="relative block h-5 w-5 rounded-full bg-green focus:outline-none focus-visible:ring focus-visible:ring-green focus-visible:ring-opacity-75 cursor-pointer" >
                            <div className="absolute top-6">{duration}</div>
                        </SliderPrimitive.Thumb>
                    </SliderPrimitive.Root>
                </div>
            </div>
            <div className="w-full md:w-2/3 px-0 md:px-4 min-h-[300px] md:min-h-[400px] mt-8 md:mt-0">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                    width={500}
                    height={300}
                    data={graphData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year"/>
                        <YAxis />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        <Line type="monotone" dataKey="worst" stroke="#787675" />
                        <Line type="monotone" dataKey="base" stroke="#AAC6FD" />
                        <Line type="monotone" dataKey="best" stroke="#0AF2AD" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}