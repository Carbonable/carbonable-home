import { LinkButtonBig } from "~/components/Button";

export default function Title() {
    return (
        <div className="block w-full text-center max-w-screen-2xl mx-auto mt-12">
            <div className="mx-auto mt-48 w-11/12 z-0 relative" >
                <img src="/assets/images/home/map-bg.svg" alt="world map" />
            </div>
            <div className="mt-[-90%] z-10 relative md:mt-[-60%]">
                <h1 className="font-americana text-3xl md:text-4xl pt-16 lg:text-6xl lg:pt-36 w-9/12 mx-auto uppercase">
                    LONG TERM YIELDS FOR INVESTORS & THE PLANET
                </h1>
                <h2 className="font-trash text-bold text-green text-lg w-10/12 lg:text-2xl lg:w-6/12 mx-auto mt-8">
                    BEST VALUE INVESTMENTS VALUES THE PLANET
                </h2>
                <div className="mt-12 w-fit mx-auto">
                    <LinkButtonBig href="#" className="bg-green w-[200px] text-center before:content-['Invest\00a0Now'] hover:before:content-['Coming\00a0Soon'] hover:cursor-not-allowed hover:opacity-75">
                    </LinkButtonBig>
                </div>
                <img className="mx-auto mt-12 w-8/12 md:mt-24 md:w-6/12" src="/assets/images/home/project_card.png" alt="project card" />
            </div>
        </div>
    )
}

