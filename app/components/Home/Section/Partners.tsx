import PlusIconWhite from "~/components/Icons/PlusIcon";

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
        <div className="w-11/12 max-w-screen-2xl mx-auto text-center mt-12 xl:mt-20 xl:w-8/12">
            
            <div className="flex items-center justify-center mt-16 md:mt-36">
                <PlusIconWhite className="w-8 md:w-12"></PlusIconWhite>
                <div className="w-10/12 mx-auto px-6 uppercase text-center">
                    <h1 className="font-trash font-bold text-sm text-center md:text-3xl xl:text-5xl">
                        We draw our experience
                        <div className="font-americana font-medium text-xs md:text-2xl lg:text-3xl">from an expert community</div>
                    </h1>
                </div>
                <PlusIconWhite className="w-8 md:w-12"></PlusIconWhite>
            </div>
            <div className="flex flex-wrap item-center justify-center mt-8 md:mt-12 lg:mt-20">
                {experiences.map((partner, index) => (
                    <img key={`backed_${index}`} className="w-4/12 p-[24px] md:w-3/12 md:p-[48px] lg:p-[72px] xl:p-[88px]" src={partner.img_src} alt={partner.alt} />
                ))}
            </div>
        </div>
    )
}