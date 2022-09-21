import { PlusIcon } from "@heroicons/react/24/outline";

export default function Values() {
    const backed = [
        {
            img_src: "/assets/images/home/ethereal.svg",
            alt: "Logo Ethereal"
        },
        {
            img_src: "/assets/images/home/laposte.svg",
            alt: "Logo La Poste"
        },
        {
            img_src: "/assets/images/home/starknet.svg",
            alt: "Logo Starknet"
        },
    ];

    const experiences = [
        {
            img_src: "/assets/images/home/ethereum.svg",
            alt: "Logo Ethereum"
        },
        {
            img_src: "/assets/images/home/consensys.svg",
            alt: "Logo Consensys"
        },
        {
            img_src: "/assets/images/home/pegasys.svg",
            alt: "Logo Pegasys"
        },
        {
            img_src: "/assets/images/home/klub.svg",
            alt: "Logo Key Klub"
        },
        {
            img_src: "/assets/images/home/stradigiai.svg",
            alt: "Logo Stradidi.ai"
        },
        {
            img_src: "/assets/images/home/murex.svg",
            alt: "Logo Murex"
        },
        {
            img_src: "/assets/images/home/broadbandtv.svg",
            alt: "Logo Broadband TV"
        },
        {
            img_src: "/assets/images/home/pg.svg",
            alt: "Logo Procter and Gamble"
        },
        {
            img_src: "/assets/images/home/timefortheplanet.svg",
            alt: "Logo Time for the planet"
        },
        {
            img_src: "/assets/images/home/wildsense.svg",
            alt: "Logo Wildsense"
        },
        {
            img_src: "/assets/images/home/care.svg",
            alt: "Logo Care"
        },
        {
            img_src: "/assets/images/home/arise.svg",
            alt: "Logo Arise"
        }
    ];

    return (
        <div className="w-11/12 mx-auto text-center mt-12 xl:mt-20">
            <div className="flex items-center justify-center">
                <PlusIcon className="w-8 md:w-12"></PlusIcon>
                <div className="w-10/12 uppercase font-trash text-bold text-xl md:text-2xl lg:text-3xl text-center">BACKED BY</div>
                <PlusIcon className="w-8 md:w-12"></PlusIcon>
            </div>
            <div className="flex item-center justify-center mt-8 md:mt-12 lg:mt-20">
                {backed.map((partner, index) => (
                    <img key={`backed_${index}`} className="w-4/12 px-3 md:w-3/12 md:px-8 lg:px-16" src={partner.img_src} alt={partner.alt} />
                ))}

            </div>
            <div className="flex items-center justify-center mt-16 md:mt-32">
                <PlusIcon className="w-8 md:w-12"></PlusIcon>
                <div className="w-10/12 px-6 uppercase font-trash text-bold text-xl md:text-2xl lg:text-3xl text-center">Bringing experience from</div>
                <PlusIcon className="w-8 md:w-12"></PlusIcon>
            </div>
            <div className="flex flex-wrap item-center justify-center mt-8 md:mt-12 lg:mt-20">
                {experiences.map((partner, index) => (
                    <img key={`backed_${index}`} className="w-3/12 px-4 py-2 md:p-12 lg:w-2/12 xl:px-16" src={partner.img_src} alt={partner.alt} />
                ))}
            </div>
            <div className="bg-green-blue rounded-2xl w-full mx-auto py-6 px-2 mt-12 text-black">
                <div className="font-trash text-xl uppercase">Help nature help you</div>
                <div className="flex items-center justify-center mt-4">
                    <PlusIcon className="w-8 md:w-10"></PlusIcon>
                    <div className="w-10/12 font-inter text-sm px-4 md:px-8">At Carbonable, we’re on a mission to align the best interests of business, investors & the planet.</div>
                    <PlusIcon className="w-8 md:w-10"></PlusIcon>
                </div>
            </div>
        </div>
    )
}