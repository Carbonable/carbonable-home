import { WalletIcon } from "@heroicons/react/24/outline";

export default function Menu({dAppLink}: {dAppLink: string}) {
    
    return (
        <div className="w-full md:w-11/12 mx-auto sticky top-0 z-10">
            <div className="w-full flex items-center justify-between bg-neutral-800/80 backdrop-blur-sm p-4">
                <div className="">
                    <img src="/assets/images/logo.svg" alt="Carbonable logo" className="w-32 md:w-48" />
                </div>
                <div className="flex items-center justify-end md:hidden">
                    <a href={dAppLink} target="_blank" rel="noreferrer"><WalletIcon className="w-6" /></a>
                </div>
                <div className="hidden items-center justify-end md:flex">
                    <a href={dAppLink} target="_blank" rel="noreferrer" className="border border-neutral-300 bg-transparent uppercase px-4 py-2 rounded-lg hover:bg-opacityLight-5">Launch APP</a>
                </div>
            </div>
        </div>
    )
}