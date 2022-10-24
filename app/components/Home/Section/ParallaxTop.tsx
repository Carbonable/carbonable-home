import type { MotionValue} from "framer-motion";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { LinkButtonBig } from "~/components/Button";
import { Menu } from "../Menu";

function useParallaxTop(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

function useParallaxBottom(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [distance, -distance]);
}

function Title() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallaxBottom(scrollYProgress, 500);

    return (
        <div className="w-screen h-screen text-center max-w-screen-2xl mx-auto relative scroll-snap pt-1 overflow-hidden">
            <Menu />
            <div ref={ref}>
                <div className="z-10 relative">
                    <h1 className="font-americana text-2xl md:text-4xl pt-12 lg:text-6xl lg:pt-36 w-9/12 mx-auto uppercase">
                        LONG TERM YIELDS FOR INVESTORS & THE PLANET
                    </h1>
                    <h2 className="font-trash text-bold text-green text-lg w-10/12 lg:text-2xl lg:w-6/12 mx-auto mt-8">
                        BEST VALUE INVESTMENTS VALUES THE PLANET
                    </h2>
                    <div className="mt-12 w-fit mx-auto">
                        <LinkButtonBig href="#" className="bg-green w-[200px] text-center before:content-['Invest\00a0Now'] hover:before:content-['Coming\00a0Soon'] hover:cursor-not-allowed hover:opacity-75">
                        </LinkButtonBig>
                    </div>
                </div>
                <div className="mx-auto w-11/12 z-0 relative" >
                    <img src="/assets/images/home/map-bg.svg" alt="world map" />
                </div>
            </div>
            <motion.div style={{ y }} className="mx-auto w-4/12 z-10 mr-[15%] mt-[-50%]">
                <img src="/assets/images/home/project_card.png" alt="project card"/>
            </motion.div>
        </div>
    )
}

function Video() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallaxBottom(scrollYProgress, 400);
    return (
        <>
            <div ref={ref} id="video" className="z-0 w-11/12 h-[50vh] mx-auto bg-home-video chip-clip text-center bg-no-repeat bg-cover mt-12 xl:mt-20 py-32 lg:py-52 scroll-snap">
            <motion.div style={{ y }} className="mx-auto w-4/12 z-10 mr-[15%] mt-[-10%]">
                <img src="/assets/images/home/project_card.png" alt="project card"/>
            </motion.div>
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