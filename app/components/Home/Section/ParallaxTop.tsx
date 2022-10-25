import { LinkButtonBig } from "~/components/Button";

function Title() {

    return (
        <div className="w-screen h-auto text-center max-w-screen-2xl mx-auto relative scroll-snap-start pt-1">
            <div className="relative md:mt-12 lg:mt-4 z-10">
                <h1 className="font-americana text-2xl md:text-4xl pt-12 lg:text-5xl w-9/12 mx-auto uppercase">
                    LONG TERM YIELDS FOR INVESTORS & THE PLANET
                </h1>
                <h2 className="font-trash text-bold text-green text-lg w-10/12 md:text-xl lg:text-2xl lg:w-6/12 xl:mt-8 xl:text-3xl mx-auto mt-8">
                    BEST VALUE INVESTMENTS VALUES THE PLANET
                </h2>
                <div className="mt-12 w-fit mx-auto xl:mt-20">
                    <LinkButtonBig href="#" className="bg-green w-[200px] text-center before:content-['Invest\00a0Now'] hover:before:content-['Coming\00a0Soon'] hover:cursor-not-allowed hover:opacity-75">
                    </LinkButtonBig>
                </div>
            </div>
            <div className="mx-auto w-[320px] relative mt-12 md:w-[780px] md:mt-12 lg:mt-[-140px] lg:w-[920px] xl:w-[1200px] 2xl:w-[1400px] z-0" >
                <img src="/assets/images/home/map-bg.svg" alt="world map" className="w-full" />
                <img src="assets/images/maps/marker-line.png" alt="map marker" className="absolute top-[92px] left-[76px] w-[100px] md:w-[200px] md:left-[190px] md:top-[228px] lg:w-[220px] lg:left-[222px] lg:top-[266px] xl:w-[250px] xl:left-[294px] xl:top-[350px] 2xl:w-[280px] 2xl:left-[340px] 2xl:top-[408px]" />
                <img src="/assets/images/home/project_card.png" alt="project card" className="absolute top-[67px] left-[180px] w-[40%] md:w-[30%] md:left-[398px] md:top-[194px] lg:top-[214px] lg:left-[452px] xl:top-[258px] xl:left-[556px] 2xl:w-[25%] 2xl:top-[344px] 2xl:left-[634px]"/>
            </div>
        </div>
    )
}

function Video() {

    return (
        <>
            <div id="video" className="z-0 w-full min-h-[50vh] bg-home-video bg-no-repeat bg-cover mt-16 scroll-snap-center flex flex-wrap items-center">
                <div className="w-7/12 pl-6">
                    <h1 className="uppercase font-trash text-bold text-lg leading-5 md:text-3xl lg:text-4xl xl:text-5xl text-left">be significant<br/>by financing</h1>
                    <h2 className="uppercase font-americana text-bold text-green leading-5 text-lg md:text-3xl lg:text-4xl xl:text-5xl text-left">natures<br/>regeneration</h2>
                    <p className="font-inter mt-4 text-xs leading-5">Carbonable empowers anyone to invest in the greatest challenge of our time, by financing nature’s regeneration. 
                       Get a significant, long-term and growing yield while fighting climate change.</p>
                </div>
                <div className="w-5/12">
                    
                </div>
            </div>
            
        </>
    )
}

export default function ParallaxTop() {
    return (
        <>
            <Title />
            <Video />
        </>
        
    )
}