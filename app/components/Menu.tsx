import { CalculatorIcon, PresentationChartLineIcon, WalletIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "@remix-run/react";

export default function Menu({dAppLink}: {dAppLink: string}) {
    const location = useLocation();
    
    return (
        <div className="w-full md:w-11/12 mx-auto sticky top-0 z-10">
            <div className="w-full flex items-center justify-between bg-neutral-800/80 backdrop-blur-sm p-4">
                <div className="">
                    <img src="/assets/images/logo.svg" alt="Carbonable logo" className="w-32 md:w-48" />
                </div>
                <div className="flex items-center justify-end md:hidden">
                    <Link to="/simulator" className="mr-4"><PresentationChartLineIcon className={`w-6 ${location.pathname === '/simulator' ? "text-greenish-500" : ""}`} /></Link>
                    <Link to="/calculator" className="mr-4"><CalculatorIcon className={`w-6 ${location.pathname === '/calculator' ? "text-greenish-500" : ""}`} /></Link>
                    <a href={dAppLink} target="_blank" rel="noreferrer"><WalletIcon className="w-6" /></a>
                </div>
                <div className="hidden items-center justify-end md:flex">
                    <div><Link to="/simulator" className={`w-6 mr-4 text-xl font-light ${location.pathname === '/simulator' ? "text-greenish-500" : "hover:text-neutral-300"}`}>Simulator</Link></div>
                    <div><Link to="/calculator"className={`w-6 mr-12 text-xl font-light ${location.pathname === '/calculator' ? "text-greenish-500" : "hover:text-neutral-300"}`}>Calculator</Link></div>
                    <a href={dAppLink} target="_blank" rel="noreferrer" className="border border-neutral-300 bg-transparent uppercase px-4 py-2 rounded-lg hover:bg-opacityLight-5">Launch APP</a>
                </div>
            </div>
        </div>
    )
}