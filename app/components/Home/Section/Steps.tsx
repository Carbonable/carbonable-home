import type { Variants } from "framer-motion";
import { useMotionValue, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { LinkOutsideButton } from "~/components/Button";
import PlusIconWhite from "~/components/Icons/PlusIcon";
import type { StepData } from "~/types/types";
import { MEDIUM_LINK } from "~/utils/links";

export default function Steps() {
    const steps = [
        {
            "title": "Step 1",
            "text": "You buy a Carbonable NFT",
            "id": "step1"
        },
        {
            "title": "Step 2",
            "text": "You have stakes in a nature regeneration project which generates yearly carbon credits",
            "id": "step2"
        },
        {
            "title": "Step 3",
            "text": "You decide whether you want Carbonable to sell these credits at the best price to receive a yield, or whether you want to use them to offset carbon emissions",
            "id": "step3"
        },
        {
            "title": "Step 4",
            "text": "Your yield (sale) or savings (offset) increase along with the value of carbon credits, throughout the lifetime of the project (20-30Y)",
            "id": "step4"
        },
        {
            "title": "Step 5",
            "text": "Track your impact through personalized reports, leveraging cutting-edge monitoring technology",
            "id": "step5",
            "hasButton": true
        }

    ];

    const ref = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll({ target: ref });
    const height = useMotionValue(0);

    useEffect(() => {
        function updateHeight() {
            const offsetTop = ref.current?.offsetTop || 0;
            height.set(scrollY.get() - offsetTop + 400);
          }

          scrollY.onChange(updateHeight)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div ref={ref} id="steps" className="scroll-snap-start w-11/12 max-w-screen-2xl scroll-mt-12 mx-auto mt-12 lg:mt-12 xl:mt-24">
            <div className="flex items-center justify-center">
                <PlusIconWhite className="w-8 md:w-12"></PlusIconWhite>
                <h1 className="w-10/12 items-center uppercase font-trash text-bold text-xl md:text-3xl lg:text-4xl xl:text-5xl text-center">
                    The Carbonable<br/>
                    <span className="font-americana font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">win win</span><br/>
                    snowball effect
                </h1>
                <PlusIconWhite className="w-8 md:w-12"></PlusIconWhite>
            </div>
            <div className="w-full relative">
                <div className="absolute w-[4px] h-[2250px]  md:h-[2000px] bg-progress-unfill top-12 left-0 rounded-full md:left-[55%] lg:left-[52%] xl:left-[50%]"></div>
                <motion.div 
                    style={{ height }}
                    className="absolute w-[4px] min-h-[10px] max-h-[2250px] md:max-h-[2000px] rounded-full bg-progress-fill top-12 left-0 md:left-[55%] lg:left-[52%] xl:left-[50%]">

                </motion.div>
                {steps.map((step) => (
                    <Step key={step.id} step={step} />
                ))}
            </div>
        </div>
    )
}

interface StepProps {
   step: StepData
}

const cardVariants: Variants = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 50,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

function Step({step}: StepProps) {

    return (
        <motion.div
            className="relative mb-24 min-h-[350px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            >
                <motion.div variants={cardVariants} className="text-left flex flex-wrap mx-auto md:w-10/12">
                    <div className="w-full md:w-1/2">
                        <img className="w-[300px] mx-auto" src={`/assets/images/home/steps/${step.id}.png`} alt="Buy carbonable NFT" />
                    </div>
                    <div className="pl-8 w-full md:w-1/2 md:pl-20">
                        <div className="w-full text-green font-trash font-bold mt-2 text-2xl uppercase">{step.title}</div>
                        <div className="w-full font-inter mt-1 text-beaige text-sm">{step.text}</div>
                        { step.hasButton && <LinkOutsideButton
                            href={MEDIUM_LINK}
                            className="bg-white w-fit mt-12"
                        >
                            Learn more
                        </LinkOutsideButton>}
                    </div>
                </motion.div>
            
        </motion.div>
    )
}