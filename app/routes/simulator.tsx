import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import TooltipInfo from "~/components/Common/Tooltip";
import OffsetSimulator from "~/components/Simulator/OffsetSimulator";
import YieldSimulator from "~/components/Simulator/YieldSimulator";
import type { ConfigData } from "~/types/types";
import { fetchConfiguration } from "~/utils/simulator.server";

type LoaderData = { simulators_config: Array<ConfigData> | null };

export async function loader() {
  const config: LoaderData = {
    simulators_config: await fetchConfiguration(),
  };

  if (!config) {
    throw new Response("Database unavailable", {
      status: 500
    });
  }

  return json({ config });
}

export default function Simulator() {
  const data = useLoaderData();
  const config = data.config.simulators_config;
  const [selectedSimulator, setSelectedSimulator] = useState("yield");
  const [yieldConfig] = useState(config ? config.filter((conf: any) => conf.type === "yield") : null);
  const [offsetConfig] = useState(config ? config.filter((conf: any) => conf.type === "offset") : null);
  const [globalConfig] = useState(config ? config.filter((conf: any) => conf.type === "global") : null);

  const TooltipText: React.FC = () => {
    return (
      <div>
        This graph aims to  provide global forecasts by taking into account today's market information, and using a linear carbon credit reception model.<br />
        That said, by definition, all projects are specific, as well as their carbon capture reception schedule.
      </div>
    )
  }

  return (
    <div className="w-full text-center mt-8 xl:mt-16">
      <div className="w-11/12 mx-auto">
        <div className="w-full md:w-9/12 lg:w-8/12 mt-8 p-1 flex font-semibold border border-neutral-300 rounded-full items-center mx-auto justify-evenly uppercase text-xs md:text-base whitespace-nowrap">
          <div className={selectedSimulator === 'yield' ? "bg-opacityLight-5 rounded-full px-2 md:px-12 py-2 md:py-4 w-1/2 text-neutral-100" : "cursor-pointer w-1/2 text-neutral-100"} onClick = {() => { setSelectedSimulator("yield"); }}>Yield simulator</div>
          <div className={selectedSimulator === 'offset' ? "bg-opacityLight-5 rounded-full px-2 md:px-12 py-2 md:py-4 w-1/2 text-neutral-100" : "cursor-pointer w-1/2 text-neutral-100"} onClick = {() => { setSelectedSimulator("offset"); }}>Offset simulator</div>
        </div>
        <h1 className="uppercase font-extrabold text-2xl text-center md:text-3xl xl:text-5xl text-neutral-50 flex items-start justify-center mt-12">
          { selectedSimulator === 'yield' && <div>YIELD SIMULATOR </div>}
          { selectedSimulator === 'offset' && <div>OFFSET SIMULATOR </div>}
            <TooltipInfo text={<TooltipText />}  />
        </h1>
        <div className="text-sm text-neutral-300 mt-2">Based on BloombergNEF and McKinsey forecasts</div>
        <div className="text-sm text-neutral-300 flex items-center justify-center">
          <ExclamationTriangleIcon className="w-6 mr-1" />
          NOT FINANCIAL ADVICE
        </div>
      </div>
      <div className="w-full rounded-2xl bg-neutral-700 border border-neutral-500 py-8 px-2 md:w-11/12 md:mx-auto mt-12">
        {config === null || config === undefined || config.length === 0
          ? 
          <div className="text-xl">
            Sorry, the simulator is not available at the moment. Please try again later.
          </div>
          :
          <div>
            { selectedSimulator === 'yield' && <YieldSimulator carbonPrices={yieldConfig[0].config.annual_growth[0].carbonable} globalConf={globalConfig[0]} />}
            { selectedSimulator === 'offset' && <OffsetSimulator offset={offsetConfig[0].config.annual_growth[0].carbonable} globalConf={globalConfig[0]} /> }
          </div>
          
        }
      </div>
    </div>
  )
}