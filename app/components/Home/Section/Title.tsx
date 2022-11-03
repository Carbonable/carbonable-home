import { motion } from "framer-motion";
import { LinkButtonBig } from "~/components/Button";

export default function Title() {
    return (
        <div className="w-screen h-auto text-center max-w-screen-2xl mx-auto relative scroll-snap-start pt-1">
            <div className="relative md:mt-12 lg:mt-4 z-10">
                <h1 className="font-trash text-bold text-2xl md:text-4xl pt-12 lg:text-5xl w-9/12 mx-auto uppercase">
                    Best value<br/>
                    <span className="font-americana text-xl md:text-3xl pt-12 lg:text-[2.5rem] w-9/12 mx-auto uppercase">Investments</span><br/>
                    value the planet
                </h1>
                <h2 className="font-trash text-green uppercase text-lg w-10/12 md:text-xl lg:text-2xl lg:w-6/12 xl:mt-8 xl:text-3xl mx-auto mt-8">
                long-term yields for investors <br/>& mother earth
                </h2>
                <div className="mt-12 w-fit mx-auto xl:mt-20">
                    <LinkButtonBig href="#" className="bg-green w-[200px] text-center before:content-['Invest\00a0Now'] hover:before:content-['Coming\00a0Soon'] hover:cursor-not-allowed hover:opacity-75">
                    </LinkButtonBig>
                </div>
            </div>
            <div className="mx-auto w-[320px] relative mt-12 md:w-[780px] md:mt-12 lg:mt-[-140px] lg:w-[920px] xl:w-[1200px] 2xl:w-[1400px] z-0" >
                <img src="/assets/images/home/map-bg.png" alt="world map" className="w-full" />
                <motion.img
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ ease: "easeOut", duration: 1.5 }}
                    src="assets/images/maps/marker-line.png" alt="map marker" className="absolute top-[98px] left-[78px] w-[100px] md:w-[200px] md:left-[194px] md:top-[234px] lg:w-[220px] lg:left-[228px] lg:top-[276px] xl:w-[250px] xl:left-[300px] xl:top-[358px] 2xl:w-[280px] 2xl:left-[349px] 2xl:top-[420px]">
                </motion.img>
                <motion.img 
                    initial={{ height: 0, y: -200 }}
                    animate={{ height: 32, y: 0 }}
                    transition={{ ease: "easeOut", duration: 2 }}
                    src="assets/images/maps/leaf-marker.svg" alt="map marker" className="absolute top-[70px] left-[68px] w-[20px] md:w-[200px] md:left-[94px] md:top-[200px] lg:w-[220px] lg:left-[118px] lg:top-[244px] xl:w-[250px] xl:left-[176px] xl:top-[324px] 2xl:w-[280px] 2xl:left-[210px] 2xl:top-[384px]">
                </motion.img>
                <motion.img
                    initial={{ x: 200 }}
                    animate={{ x: 0 }}
                    transition={{ ease: "easeOut", duration: 1.5 }}
                    src="/assets/images/home/project_card.png" alt="project card" className="absolute top-[69px] left-[184px] w-[40%] md:w-[30%] md:left-[404px] md:top-[191px] lg:top-[216px] lg:left-[458px] xl:top-[256px] xl:left-[562px] 2xl:w-[25%] 2xl:top-[345px] 2xl:left-[644px]">
                </motion.img>
            </div>
        </div>
    )
}
