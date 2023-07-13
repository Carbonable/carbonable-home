import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function ComparativeAnalysis() {
    return (
        <div className="min-w-full">
            <div className="grid grid-cols-6 gap-x-4 gap-y-8 min-w-max text-left font-inter w-full">
                <div className="col-span-2"></div>
                <div className="text-neutral-200 font-medium text-center">Carbon Accouting</div>
                <div className="text-neutral-200 font-medium text-center">Carbon Marketplace</div>
                <div className="text-neutral-200 font-medium text-center">Carbon Broker</div>
                <div className="text-neutral-50 font-extrabold text-center">Carbonable</div>
                <div className="col-span-6 border-b border-neutral-600 h-1"></div>
                <div className="text-neutral-100 pr-2 col-span-2">Access to prime projects, tailored to strategy</div>
                <div><XMarkIcon className="text-neutral-400 w-6 mx-auto" /></div>
                <div><XMarkIcon className="text-neutral-400 w-6 mx-auto" /></div>
                <div><XMarkIcon className="text-neutral-400 w-6 mx-auto" /></div>
                <div><CheckIcon className="text-greenish-500 w-6 mx-auto font-extrabold" /></div>
                <div className="text-neutral-100 pr-2 col-span-2">Investment/risk diversification</div>
                <div><CheckIcon className="text-neutral-200 w-6 mx-auto" /></div>
                <div><XMarkIcon className="text-neutral-400 w-6 mx-auto" /></div>
                <div><XMarkIcon className="text-neutral-400 w-6 mx-auto" /></div>
                <div><CheckIcon className="text-greenish-500 w-6 mx-auto font-extrabold" /></div>
                <div className="text-neutral-100 pr-2 col-span-2">Full transparency and traceability</div>
                <div><XMarkIcon className="text-neutral-400 w-6 mx-auto" /></div>
                <div><CheckIcon className="text-neutral-200 w-6 mx-auto" /></div>
                <div><XMarkIcon className="text-neutral-400 w-6 mx-auto" /></div>
                <div><CheckIcon className="text-greenish-500 w-6 mx-auto font-extrabold" /></div>
                <div className="text-neutral-100 pr-2 col-span-2">Carbon Removal management platform</div>
                <div><XMarkIcon className="text-neutral-400 w-6 mx-auto" /></div>
                <div><XMarkIcon className="text-neutral-400 w-6 mx-auto" /></div>
                <div><XMarkIcon className="text-neutral-400 w-6 mx-auto" /></div>
                <div><CheckIcon className="text-greenish-500 w-6 mx-auto font-extrabold" /></div>
                <div className="text-neutral-100 pr-2 col-span-2">Automated carbon accounting</div>
                <div><XMarkIcon className="text-neutral-400 w-6 mx-auto" /></div>
                <div><XMarkIcon className="text-neutral-400 w-6 mx-auto" /></div>
                <div><CheckIcon className="text-neutral-200 w-6 mx-auto" /></div>
                <div><CheckIcon className="text-greenish-500 w-6 mx-auto font-extrabold" /></div>
                <div className="text-neutral-100 pr-2 col-span-2">Legal compliance and auditability</div>
                <div><CheckIcon className="text-neutral-200 w-6 mx-auto" /></div>
                <div><XMarkIcon className="text-neutral-400 w-6 mx-auto" /></div>
                <div><XMarkIcon className="text-neutral-400 w-6 mx-auto" /></div>
                <div><CheckIcon className="text-greenish-500 w-6 mx-auto font-extrabold" /></div>
                <div className="text-neutral-100 pr-2 col-span-2">Ongoing Monitoring & Impact Reports</div>
                <div><XMarkIcon className="text-neutral-400 w-6 mx-auto" /></div>
                <div><XMarkIcon className="text-neutral-400 w-6 mx-auto" /></div>
                <div><XMarkIcon className="text-neutral-400 w-6 mx-auto" /></div>
                <div><CheckIcon className="text-greenish-500 w-6 mx-auto font-extrabold" /></div>
            </div>
        </div>
    )
}