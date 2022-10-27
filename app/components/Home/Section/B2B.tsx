import PlusIconWhite from "~/components/Icons/PlusIcon";

export default function B2B() {
    return (
        <div id="b2b" className="block snap-align-start scroll-mt-12 relative bg-home-b2b w-full text-center bg-no-repeat bg-cover mt-12 xl:mt-20 py-48">
            <div className="w-11/12 max-w-screen-2xl mx-auto bg-home-b2b-gradient rounded-2xl shadow-home backdrop-blur-md py-8 px-2 md:w-10/12 md:mx-auto lg:w-8/12 xl:w-5/12">
                <div className="flex items-start justify-center">
                    <PlusIconWhite className="w-8 md:w-12"></PlusIconWhite>
                    <h1 className="w-10/12 items-center uppercase font-trash font-bold text-2xl lg:text-3xl text-center md:text-4xl xl:text-5xl">
                        The easiest 
                        <div className="font-americana font-medium text-lg md:text-2xl lg:text-3xl">and smartest way</div>
                        <div className="uppercase font-inter font-semibold text-sm mt-1 md:text-base">to offset your residual carbon emissions</div>
                    </h1>
                    <PlusIconWhite className="w-8 md:w-12"></PlusIconWhite>
                </div>
                <div className="h-[1px] w-11/12 mx-auto bg-green-blue mt-6"></div>
                <div className="font-inter w-10/12 mx-auto mt-8 text-sm pb-4">
                    Show your RSE team a little TLC. Carbonable offers you simple, intuitive and cost-effective carbon compensation management. Why go through the hassle of carrying complex carbon-control projects when Carbonable can handle it for you ? Our team of experts is ready to select projects with best-in-class partners, secure carbon credits & manage your assets at best financial value. 
                </div>
            </div>
        </div>
    )
}