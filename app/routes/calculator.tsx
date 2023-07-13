import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { redirect, type LoaderArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import CalculatorB2B from "~/components/Calculator/CalculatorB2B";
import ComparativeAnalysis from "~/components/Calculator/ComparativeAnalysis";
import TooltipInfo from "~/components/Common/Tooltip";
import type { LoaderData } from "~/types/types";
import { getSession } from "~/utils/sessions.server";
import { fetchConfiguration } from "~/utils/simulator.server";

export async function loader({ request }: LoaderArgs) {
    const session = await getSession(request.headers.get("Cookie"));
    const data = await session.get("data");
  
    if (data === undefined) return redirect("/login");
  
    // Try to parse the data
    if (typeof data === "string") {
      try {
        if (!JSON.parse(data).data?.hasOwnProperty("userId")) return redirect("/login");
      } catch (error) {
        return redirect("/login");
      }
    }

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

export default function Calculator() {
    const data = useLoaderData();
    const config = data.config.simulators_config;
    const [yieldConfig] = useState(config ? config.filter((conf: any) => conf.type === "yield") : null);
    const [globalConfig] = useState(config ? config.filter((conf: any) => conf.type === "global") : null);
    const [buyConfig] = useState(config ? config.filter((conf: any) => conf.type === "buy") : null);

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
              <h1 className="uppercase font-extrabold text-2xl text-center md:text-3xl xl:text-5xl text-neutral-50 flex items-start justify-center">
                Carbon Contribution Calculator
                <TooltipInfo text={<TooltipText />} />
              </h1>
              <div className="text-sm text-neutral-300 mt-2">Based on BloombergNEF and McKinsey forecasts for a project duration of 20 years</div>
              <div className="text-sm text-neutral-300 flex items-center justify-center">
                <ExclamationTriangleIcon className="w-6 mr-1" />
                NOT FINANCIAL ADVICE
              </div>
            </div>
            <div className="w-full mt-8">
              <div className="text-xl">
                <CalculatorB2B carbonPrices={yieldConfig[0].config.annual_growth[0].carbonable} globalConf={globalConfig[0]} buyPrices={buyConfig[0].config.carbonable} />
              </div>
            </div>
            <div className="w-11/12 mx-auto mt-6 text-neutral-200 text-center">
              We offer <b>risk rating A</b> opportunities through recognized certifiers
            </div>
            <div className="w-11/12 mx-auto mt-16 mb-24">
              <div className="font-extrabold text-xl text-left md:text-2xl xl:text-4xl text-neutral-50">
                Comparative analysis
              </div>
              <div className="mt-8 overflow-x-auto w-full">
                <ComparativeAnalysis />
              </div>
            </div>
        </div>
      )
}