import {  ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { YieldSimulator } from "~/components/Simulator";
import TooltipInfo from "~/components/Simulator/Tooltip";
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
};

export default function Simulator() {
  const data = useLoaderData();
  const config = data.config.simulators_config;
  const [yieldConfig] = useState(config ? config.filter((conf: any) => conf.type === "yield") : null);
  const [globalConfig] = useState(config ? config.filter((conf: any) => conf.type === "global") : null);

  if (config.simulators_config === null || config.simulators_config === null) {
    return (
      <div>
        
      </div>
    );
  }

  const TooltipText: React.FC = () => {
    return (
      <div>
        This graph aims to  provide global forecasts by taking into account today's market information, and using a linear carbon credit reception model.<br />
        That said, by definition, all projects are specific, as well as their carbon capture reception schedule.
      </div>
    )
  }

  return (
    <div className="w-full text-center mt-8 xl:mt-12">
      <div className="w-11/12  mx-auto">
          <h1 className="uppercase font-extrabold text-2xl text-center md:text-3xl xl:text-5xl text-neutral-50 flex items-start justify-center">
              YIELD SIMULATOR
              <TooltipInfo text={<TooltipText />}  />
          </h1>
          <div className="text-sm text-neutral-300 mt-2">Based on BloombergNEF and McKinsey forecasts</div>
          <div className="text-sm text-neutral-300 flex items-center justify-center">
            <ExclamationTriangleIcon className="w-6 mr-1" />
            NOT FINANCIAL ADVICE
          </div>
      </div>
      <div className="w-full rounded-2xl bg-neutral-700 border border-neutral-500 py-8 px-2 md:w-11/12 md:mx-auto mt-8">
          <div>
            <YieldSimulator carbonPrices={yieldConfig[0].config.annual_growth[0].carbonable} globalConf={globalConfig[0]} />
          </div>
      </div>
    </div>
  )
}