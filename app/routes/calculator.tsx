import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { redirect, type LoaderArgs } from "@remix-run/node";
import CalculatorB2B from "~/components/Calculator/CalculatorB2B";
import TooltipInfo from "~/components/Common/Tooltip";
import { getSession } from "~/utils/sessions.server";

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
    
    return;
}

export default function Calculator() {
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
                    Carbon Investment Calculator
                    <TooltipInfo text={<TooltipText />}  />
                </h1>
                <div className="text-sm text-neutral-300 mt-2">Based on BloombergNEF and McKinsey forecasts</div>
                <div className="text-sm text-neutral-300 flex items-center justify-center">
                    <ExclamationTriangleIcon className="w-6 mr-1" />
                    NOT FINANCIAL ADVICE
                </div>
            </div>
            <div className="w-full rounded-2xl bg-neutral-700 border border-neutral-500 py-8 px-2 md:w-11/12 md:mx-auto mt-8">
                <div className="text-xl">
                    <CalculatorB2B />
                </div>
            </div>
            <div className="w-11/12 mx-auto mt-8 text-neutral-200 text-center">
                We offer <b>risk rating A</b> opportunities through recognized certifiers
            </div>
        </div>
      )
}