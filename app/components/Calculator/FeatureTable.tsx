import Tag from "../Common/Tag";
import { shortenNumber } from "~/utils/utils";

export default function FeatureTable({startingYear, projectDuration, totalCost, totalBuyCarbonable, totalFundCarbonable, totalTailoredCarbonable, currentYear, totalBuyCarbonableCurrentYear, totalFundCarbonableCurrentYear, totalTailoredCarbonableCurrentYear}: 
    {startingYear: number, projectDuration: number, totalCost: number, totalBuyCarbonable: number, totalFundCarbonable: number, totalTailoredCarbonable: number, currentYear: number, totalBuyCarbonableCurrentYear: number, totalFundCarbonableCurrentYear: number, totalTailoredCarbonableCurrentYear: number}) {
    
    
    return (
        <div className="min-w-full">
            <div className="grid grid-cols-5 gap-4 min-w-max text-left font-inter w-11/12 mx-auto">
                {/* Column headers */}
                <div className="p-2 text-white max-w-[195px]">
                    <div>Features</div>
                    <div className="text-sm text-neutral-300 mt-4">Everything your need to take your carbon investment to the next level.</div>
                </div>
                <div className="p-2 text-white max-w-[195px]">
                    <div className="flex flex-nowrap justify-start items-center">Brokers <Tag color="#878A94" text="Buy" /></div>
                    <div className="text-sm text-neutral-200 mt-4">Lorem Ipsum.</div>
                </div>
                <div className="p-2 text-white max-w-[195px]">
                    <div className="flex flex-nowrap justify-start items-center">Carbonable <Tag color="#9EBAF0" text="Buy" /></div>
                    <div className="text-sm text-neutral-200 mt-4">Lorem Ipsum</div>
                </div>
                <div className="p-2 text-white max-w-[195px]">
                    <div className="flex flex-nowrap justify-start items-center">Carbonable <Tag color="#29A46F" text="Fund" /></div>
                    <div className="text-sm text-neutral-200 mt-4">Lorem Ipsum</div>
                </div>
                <div className="p-2 text-white max-w-[195px]">
                    <div className="flex flex-nowrap justify-start items-center">Carbonable <Tag color="#CFBD70" text="Tailored" /></div>
                    <div className="text-sm text-neutral-200 mt-4">Lorem Ipsum</div>
                </div>
                <div className="col-span-5 mx-2 my-4 border-t border-neutral-600 w-full"></div>
                <div className="p-2 text-sm text-neutral-200 max-w-[195px]">
                    Total cost: {startingYear}
                </div>
                <div className="p-2 text-sm text-neutral-300 max-w-[195px] font-semibold">
                    $ {shortenNumber(totalCost)}
                </div>
                <div className="p-2 text-sm text-blue max-w-[195px] font-semibold">
                    $ {shortenNumber(totalBuyCarbonable)}
                </div>
                <div className="p-2 text-sm text-greenish-500 max-w-[195px] font-semibold">
                    $ {shortenNumber(totalFundCarbonable)}
                </div>
                <div className="p-2 text-sm text-orange max-w-[195px] font-semibold">
                    $ {shortenNumber(totalTailoredCarbonable)}
                </div>
                <div className="p-2 text-sm text-neutral-200 max-w-[195px]">
                    Average yearly cost: {startingYear}
                </div>
                <div className="p-2 text-sm text-neutral-300 max-w-[195px] font-semibold">
                    $ {shortenNumber(totalCost / projectDuration)}
                </div>
                <div className="p-2 text-sm text-neutral-100 max-w-[195px] font-semibold">
                    $ {shortenNumber(totalBuyCarbonable / projectDuration)}
                </div>
                <div className="p-2 text-sm text-neutral-100 max-w-[195px] font-semibold">
                    $ {shortenNumber(totalFundCarbonable / projectDuration)}
                </div>
                <div className="p-2 text-sm text-neutral-100 max-w-[195px] font-semibold">
                    $ {shortenNumber(totalTailoredCarbonable / projectDuration)}
                </div>
            </div>
            <div className="border border-neutral-300 rounded-xl py-4 mt-4 bg-neutral-700 w-fit xl:w-[94%] mx-auto">
                <div className="grid grid-cols-5 gap-4 min-w-max text-left font-inter w-[98%] mx-auto">
                    <div className="p-2 text-sm text-neutral-100 max-w-[195px]">
                        Total cost: {currentYear}
                    </div>
                    <div className="p-2 text-sm text-neutral-100 max-w-[195px] font-semibold">
                        /
                    </div>
                    <div className="p-2 text-sm text-neutral-100  max-w-[195px] font-semibold">
                        $ {shortenNumber(totalBuyCarbonableCurrentYear)}
                    </div>
                    <div className="p-2 text-sm text-neutral-100  max-w-[195px] font-semibold">
                        $ {shortenNumber(totalFundCarbonableCurrentYear)}
                    </div>
                    <div className="p-2 text-sm text-neutral-100  max-w-[195px] font-semibold">
                        $ {shortenNumber(totalTailoredCarbonableCurrentYear)}
                    </div>
                    <div className="p-2 text-sm text-neutral-100 max-w-[195px]">
                        Average yearly cost:: {currentYear}
                    </div>
                    <div className="p-2 text-sm text-neutral-100 max-w-[195px] font-semibold">
                        /
                    </div>
                    <div className="p-2 text-sm text-neutral-100  max-w-[195px] font-semibold">
                        $ {shortenNumber(totalBuyCarbonableCurrentYear / projectDuration)}
                    </div>
                    <div className="p-2 text-sm text-neutral-100  max-w-[195px] font-semibold">
                        $ {shortenNumber(totalFundCarbonableCurrentYear / projectDuration)}
                    </div>
                    <div className="p-2 text-sm text-neutral-100  max-w-[195px] font-semibold">
                        $ {shortenNumber(totalTailoredCarbonableCurrentYear / projectDuration)}
                    </div>
                </div>
            </div>
        </div>
    )
}