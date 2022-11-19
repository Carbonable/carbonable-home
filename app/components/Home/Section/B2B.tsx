import { LinkOutsideButton } from "~/components/Button";
import PlusIconWhite from "~/components/Icons/PlusIcon";
import { EMAIL_LINK } from "~/utils/links";

export default function B2B() {
    return (
        <div className="relative w-full overflow-hidden">
            <div id="b2b" className=" relative w-11/12 max-w-screen-2xl scroll-mt-12 mx-auto mt-12 lg:mt-12 xl:mt-24">
                <div className="flex items-center justify-center">
                    <PlusIconWhite className="w-8 md:w-12"></PlusIconWhite>
                    <h1 className="w-10/12 items-center uppercase font-trash text-bold md:text-3xl lg:text-4xl xl:text-5xl text-center">
                        The easiest and smartest<br/>
                        <span className="font-americana font-bold md:text-2xl lg:text-3xl xl:text-4xl">way for your business</span><br/>
                    </h1>
                    <PlusIconWhite className="w-8 md:w-12"></PlusIconWhite>
                </div>
                <h2 className="text-center font-inter mt-4 uppercase text-xs px-8 md:text-sm">TO OFFSET YOUR RESIDUAL CARBON EMISSIONS… AND MORE!</h2>
                <div className="relative p-[1px] bg-carousel-button-border rounded-lg mt-12 md:mt-24">
                    <div className="relative flex flex-wrap rounded-lg bg-black">
                        <div className="w-full bg-home-b2b-mobile bg-cover bg-no-repeat p-12 rounded-t-lg lg:w-1/2 lg:rounded-t-none lg:rounded-l-lg lg:bg-home-b2b-landscape flex items-center justify-center">
                            <img src="/assets/images/home/b2b-placeholder2.png" alt="b2b placeholder" className="w-full md:mt-12 xl:w-10/12 mx-auto" />
                        </div>
                        <div className="w-full bg-black p-8 md:p-12 rounded-b-lg lg:w-1/2 lg:rounded-b-none lg:rounded-r-lg py-8 lg:py-32 lg:mt-12">
                            <div className="bg-clip-text text-transparent bg-gradient-to-r from-green to-lightblue font-trash uppercase text-lg md:text-2xl md:pr-4 lg:pr-16 xl:text-4xl">
                                Show your CSR team A little TLC
                            </div>
                            <div className="text-beaige font-inter mt-4 pr-8 md:pr-4 lg:pr-16">
                                Carbonable offers you simple, intuitive and cost-effective carbon compensation management, generating a sustainable impact for local communities and biodiversity.
                                <br/><br/>
                                Why go through the hassle of carrying complex carbon-control projects when Carbonable can handle it for you ? Our team of experts is ready to select projects with best-in-class partners, secure carbon credits & manage your assets at best financial value, while providing you with tailor-made impact reports. 
                            </div>
                        </div>
                    </div>
                    <img src="/assets/images/home/globe.png" alt="globe" className="absolute top-[45%] right-[-42px] w-[120px] md:top-[-80px] md:right-[70px] md:w-[180px] xl:right-[150px]" />
                </div>
                <div className="mt-8 w-full mx-auto uppercase text-center">
                    <div className="font-americana text-bold text-beaige text-base md:text-2xl">Are you a company committed</div>
                    <div className="font-trash text-lg text-green md:text-2xl">to carbon neutrality?</div>
                    <LinkOutsideButton
                            href={EMAIL_LINK}
                            className="bg-white w-fit mt-8 mx-auto md:px-8 md:py-4"
                        >
                            Let's discuss!
                        </LinkOutsideButton>
                </div>
            </div>
        </div>
        
    )
}
