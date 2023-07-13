import { useEffect, useState } from "react";
import { Area, ComposedChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, Label } from "recharts";
import { shortenNumber } from "~/utils/utils";

export default function Chart({emission, startingIndex, buyPrices, carbonPrices, projectDuration, repartition}: {emission: number, startingIndex: number, buyPrices: any, carbonPrices: any, projectDuration: number, repartition: number}) {
    const [graphData, setGraphData] = useState([{}]);

    useEffect(() => {
        const dataGraph = [];
        const startingYear = new Date().getFullYear();
        let baseYear = 0;
        let buyYear = 0;
        let fundYear = 0;
        let tailoredYear = 0;

        for (let i = startingIndex; i < projectDuration; i++) {
            baseYear = carbonPrices[i] * emission;
            buyYear = carbonPrices[i] * (emission * 0.9);
            fundYear = buyPrices[i] * emission;
            tailoredYear = ((repartition / 100 * buyPrices[i]) + (((100 - repartition) / 100) * carbonPrices[i] * 0.9)) * emission;

            dataGraph.push({
                year: startingYear + i,
                baseYear,
                buyYear,
                fundYear,
                tailoredYear,
            });

        }

        setGraphData(dataGraph);
    }, [emission, startingIndex, buyPrices, carbonPrices, projectDuration, repartition]);

    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="px-8 pt-4 pb-4 bg-neutral-700/90 border border-neutral-500 font-inter rounded-xl">
                    <p className="text-left uppercase bold text-neutral-100">{`Forecast for ${label} `}</p>
                    <p className="text-left text-neutral-200">Broker buy: {shortenNumber(payload[0].value)}</p>
                    <p className="text-left text-blue">Carbonable buy: {shortenNumber(payload[2].value)}</p>
                    <p className="text-left text-orange">Carbonable tailored: {shortenNumber(payload[3].value)}</p>
                    <p className="text-left text-greenish-500">Carbonable fund: {shortenNumber(payload[1].value)}</p>
                </div>
            );
        }
      
        return null;
    };

    return (
        <div className="w-full min-h-[400px]">
            <ResponsiveContainer width="100%" height="100%" minHeight='400px'>
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
                        <linearGradient id="colorBase" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#555861" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#555861" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="year">
                        <Label value="Years" offset={-4} position="insideBottom" style={{ textAnchor: 'middle', fontSize: '100%', fill: '#878A94' }} />
                    </XAxis>
                    <YAxis>
                        <Label value="Cost (USD)" offset={-2}  angle={-90} position="insideLeft" style={{ textAnchor: 'middle', fontSize: '100%', fill: '#878A94' }} />
                    </YAxis>
                    <Tooltip content={<CustomTooltip />} wrapperStyle={{ outline: "none" }} />
                    <Area name="Market forecast base" type="monotone" dataKey="baseYear" fill={'url(#colorBase)'} stroke={'#555861'} dot={false} activeDot={true} />
                    <Line name="Carbonable fund" type="monotone" dataKey="fundYear" stroke="#29A46F" dot={false} activeDot={true} />
                    <Line name="Carbonable buy" type="monotone" dataKey="buyYear" stroke="#9EBAF0" dot={false} activeDot={true} />
                    <Line name="Carbonable tailored" type="monotone" dataKey="tailoredYear" stroke="#CFBD70" dot={false} activeDot={true} />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    )
}