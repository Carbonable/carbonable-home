import { useScroll, motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { PlusIconBlack } from '~/components/Icons/PlusIcon';

const values = [
    {
        title: 'We fight climate change with profit.',
        subtitle: 'Because it’s the best shot we’ve got.',
        bg: 'bg-lightblue'
    },
    {
        title: 'The world runs on profit.',
        subtitle: '& it won’t stop turning.',
        title2: 'Turn that profit for a purpose.',
        text: 'Global warming is the biggest threat humanity is facing both for ecosystems, societies as well as the global economy. Carbon and other greenhouse gases, which act as a catalyst for global warming, are public enemy number one.',
        bg: 'bg-green'
    },
    {
        title: 'Responsible people',
        subtitle: '& businesses reduce emissions.',
        subtitle2: 'Game-changers empower us all to do more.',
        text: 'With nature-backed NFTS, Carbonable uses the blockchain to fund CO2 absorption and restore the wild.',
        bg: 'bg-lightblue'
    },
];

function TopEffect() {
    const refTop = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: refTop, offset: ["-50vh", "end"] });
    const marginLeft = useMotionValue('0%');
    const marginRight = useMotionValue('0%');
    const x = useTransform(scrollYProgress, (value) => `${value * 100 }%`);

    useEffect(() => {
        function updateLeftMargin() {
            marginLeft.set(x.get());
            marginRight.set(x.get());
        }

        x.onChange(updateLeftMargin)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div ref={refTop} className="text-center w-full  bg-green grid align-center justify-center justify-items-center">
            <motion.div style={{ x}} className=" whitespace-nowrap font-trash text-2xl font-bold uppercase md:text-4xl xl:text-7xl 2xl:text-8xl pt-3 w-full"><p>We align best interests</p></motion.div>
            <motion.div style={{ marginRight }} className="  whitespace-nowrap font-americana text-2xl uppercase md:text-4xl xl:text-7xl 2xl:text-8xl w-full">of investors, business</motion.div>
            <motion.div style={{ x}} className="overflow-hidden whitespace-nowrap font-trash text-2xl font-bold uppercase md:text-4xl xl:text-7xl 2xl:text-8xl lg:pt-3 w-full">and the planet</motion.div>
        </div>
    )
}

function BottomEffect() {
    const refBottom = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: refBottom, offset: ["-50vh", "end"] });
    const marginLeft = useMotionValue('0%');
    const marginRight = useMotionValue('0%');
    const x = useTransform(scrollYProgress, (value) => `${value * 100 }%`);

    useEffect(() => {
        function updateLeftMargin() {
            marginLeft.set(x.get());
            marginRight.set(x.get() );
        }

        x.onChange(updateLeftMargin)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div ref={refBottom} className="text-center w-full rounded-b-xl bg-green grid align-center justify-center justify-items-center">
            <motion.div style={{ x }} className=" whitespace-nowrap font-trash text-3xl font-bold uppercase md:text-5xl xl:text-8xl 2xl:text-8xl pt-3 w-full">Because the best</motion.div>
            <motion.div style={{ marginRight }} className=" whitespace-nowrap font-americana text-2xl uppercase md:text-4xl xl:text-7xl 2xl:text-8xl w-full">investments earn you</motion.div>
            <motion.div style={{ x }} className=" whitespace-nowrap font-trash text-3xl font-bold uppercase md:text-5xl xl:text-8xl 2xl:text-8xl lg:pt-3 w-full">more than money.</motion.div>
        </div>
    )
}

export default function Values() {
    return (
        <div className="relative text-black">
            <div className="tracking-tighter leading-5 uppercase snap-mandatory">
                <div className="bg-green h-screen w-full flex justify-center items-center sticky top-0">
                    <div className="w-0 lg:w-2/12"><PlusIconBlack className="w-8 md:w-12 mx-auto"></PlusIconBlack></div>
                    <div className="w-full mx-auto text-center flex flex-wrap justify-center items-center lg:w-8/12 md:px-12 lg:px-6 xl:px-2">
                        <TopEffect />
                    </div>
                    <div className="w-0 lg:w-2/12"><PlusIconBlack className="w-8 md:w-12 mx-auto"></PlusIconBlack></div>
                </div>
                {values.map((value, index) => (
                    <div key={`value_${index}`} className={value.bg + " h-screen w-full flex justify-center items-center sticky top-0" }>
                        <div className="w-2/12"><PlusIconBlack className="w-8 md:w-12 mx-auto"></PlusIconBlack></div>
                        <div className="w-8/12 mx-auto text-center flex flex-wrap justify-center items-center md:px-12 lg:px-6 xl:px-2">
                            <div className="font-trash w-full text-2xl md:text-3xl xl:text-5xl">{value.title}</div>
                            <div className="font-americana w-full text-xl md:text-2xl xl:text-4xl">{value.subtitle}</div>
                            {value.title2 && <div className="font-trash w-full text-xl md:text-2xl xl:text-4xl">{value.title2}</div>}
                            {value.subtitle2 && <div className="font-inter w-full text-sm mt-8 md:text-base xl:text-xl">{value.subtitle2}</div>}
                            {value.text && <div className="font-inter w-full text-sm normal-case mt-12 md:text-base lg:w-8/12 xl:text-xl mx-auto xl:w-6/12">{value.text}</div>}
                        </div>
                        <div className="w-2/12"><PlusIconBlack className="w-8 md:w-12 mx-auto"></PlusIconBlack></div>
                    </div>
                ))}
                <div className="bg-green h-screen w-full flex justify-center items-center sticky top-0">
                    <div className="w-0 lg:w-2/12"><PlusIconBlack className="w-8 md:w-12 mx-auto"></PlusIconBlack></div>
                    <div className="w-full mx-auto text-center flex flex-wrap justify-center items-center lg:w-8/12 md:px-12 lg:px-6 xl:px-2">
                        <BottomEffect />
                    </div>
                    <div className="w-0 lg:w-2/12"><PlusIconBlack className="w-8 md:w-12 mx-auto"></PlusIconBlack></div>
                </div>
            </div>
            
        </div>
    )
}
