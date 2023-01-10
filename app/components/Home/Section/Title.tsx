import { motion } from "framer-motion";
import { LinkOutsideButtonBig } from "~/components/Button";
import { LEGACY_LAUNCHPAD_LINK } from "~/utils/links";
import Image from "~/components/Image";
import { useBreakpoint, useCenterCard } from "~/utils/scrollingFunctions"
import { useEffect, useState } from "react";

const cardId = "sticky-card"
const containerId = "sticky-card-end"

// Shadow component
const ShadowComp = ({ children }: any) => children

/**
 * Lazy load component
 */
const useLazyComponent = (importer: any, enabled: any) => {
  const [Component, setComponent] = useState(() => ShadowComp)

  useEffect(() => {
    if (enabled) {
      importer()
        .then(({ default: LazyComponent }: any) => setComponent(() => LazyComponent))
        .catch(console.log)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled])

  return Component
}

export default function Title() {
    const isMobile = useBreakpoint()    
    const Sticky = useLazyComponent(() => import("react-stickynode"), !isMobile)
    const [top, bottom] = useCenterCard(cardId, containerId)

    return (
        <div className="md:pb-[20%] w-screen h-auto text-center max-w-screen-2xl mx-auto relative pt-1">
            <div className="mx-auto w-11/12 md:w-10/12 xl:w-[1136px] relative md:mt-12 lg:mt-4 z-10">
                <h1 className="font-trash text-bold text-2xl md:text-4xl pt-12 lg:text-5xl uppercase">
                    Best value<br/>
                    <span className="font-americana text-xl md:text-3xl pt-12 lg:text-[2.5rem] uppercase">Investments</span><br/>
                    value the planet
                </h1>
                <h2 className="font-trash text-green uppercase text-lg md:text-xl lg:text-2xl xl:mt-8 xl:text-3xl mx-auto mt-8">
                long-term yields for investors <br/>& mother earth
                </h2>
                <div className="mt-12 w-fit mx-auto xl:mt-20">
                    <LinkOutsideButtonBig href={LEGACY_LAUNCHPAD_LINK} className="bg-green w-[200px] text-center before:content-['Invest\00a0Now']">
                    </LinkOutsideButtonBig>
                </div>
            </div>
            <div id="carbo-map" className="mx-auto w-11/12 md:w-10/12 xl:w-[1136px] relative z-1 mt-12 md:mt-12" >
                {/* Image with forced aspect ratio to position element based on % */}
                <Image 
                    src="/assets/images/home/map-bg.png" 
                    alt="world map"
                    w={2946}
                    h={1442}
                />
                <motion.div
                    id="line-marker"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ ease: "easeOut", duration: 1.5 }}
                    className="absolute bottom-[-9.5%] left-[25.55%] w-[35%] z-2"
                >
                </motion.div>
                <motion.img 
                    initial={{ height: 0, y: -200 }}
                    animate={{ height: 32, y: 0 }}
                    transition={{ ease: "easeOut", duration: 2 }}
                    src="assets/images/maps/leaf-marker.svg" alt="map marker" 
                    className="absolute w-[2.15%] top-[57.5%] left-[24.5%]"
                >
                </motion.img>
                <div className="z-3 absolute right-[7%] w-[30%] md:w-[30%] md:right-[7%] bottom-[-25%]">
                    <Sticky 
                        innerZ={2}
                        enabled={!isMobile} 
                        bottomBoundary={bottom}
                        top={top}
                    >
                        <motion.img
                            initial={{ x: 200 }}
                            animate={{ x: 0 }}
                            transition={{ ease: "easeOut", duration: 1.5 }}
                            src="/assets/images/home/project_card.png" alt="project card" 
                            id={cardId}>
                        </motion.img>
                    </Sticky>
                </div>
            </div>
        </div>
    )
}
