import { PlayIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { ModalVideo } from "~/components/Modal";
import Image from "~/components/Image"


export default function Video() {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
      };

    return (
        <div className="relative oHidden">
            <Image 
                src="/assets/images/home/home-header-bg.jpg"
                w={1920}
                h={1080}
                className="background clip-video"
            />
            <div id="video" className="w-full min-h-[33vh] md:min-h-[50vh] mt-28 md:mt-16 flex flex-wrap items-center xl:min-h-[70vh] xl:w-[1136px] mx-auto">
                <div 
                    className="w-1/2 ml-[8.33%] md:ml-[8.33%] md:w-5/12 lg:w-[556px]"
                    id="sticky-card-end"
                >
                    <h1 className="uppercase font-trash text-bold text-base leading-5 md:text-3xl lg:text-4xl xl:text-5xl text-left">FIGHT CLIMATE CHANGE</h1>
                    <h2 className="uppercase font-americana text-bold text-green leading-5 text-base md:text-3xl lg:text-4xl xl:text-5xl text-left">GET HIGH & GROWING YIELD</h2>
                    <div className="font-inter mt-4 text-xs leading-5 md:text-sm lg:text-base 2xl:max-w-[90%]">Carbonable empowers anyone to invest in the greatest challenge of our time, by financing nature’s regeneration.</div>
                </div>
            </div>
            <div className="md:mt-[-10%] 2xl:mt-[0] relative w-full flex items-center justify-center md:w-1/2 mx-auto">
                <img src="/assets/images/home/play-button-text.svg" alt="play button background" className="w-[122px] animate-spin-slow md:w-[216px] xl:w-[312px]" />
                <img src="/assets/images/home/play-button-bg.png" alt="play button background" className="absolute w-[72px] mt-[1px] md:w-[124px] xl:w-[190px]" />
                <PlayIcon className="w-10 absolute mt-1 ml-1 xl:w-20 hover:text-green cursor-pointer" onClick={() => setOpen(true)} />
            </div>
            <ModalVideo open={open} handleClose={handleClose} />

            <svg width="0" height="0">
                <defs>
                    <clipPath
                        transform="scale(0.0007293946024799417, 0.0011111111111111111)"
                        clipPathUnits="objectBoundingBox"
                        id="clip-video"
                    >
                        <path d="M658.994 0H101.558c-12.68 0-22.96 10.28-22.96 22.96v88.348a22.96 22.96 0 01-10.338 19.18l-57.921 38.115A22.96 22.96 0 000 187.782v200.203a22.96 22.96 0 0010.164 19.064l35.023 23.507A22.96 22.96 0 0155.35 449.62v427.42c0 12.681 10.28 22.96 22.96 22.96H1348.04c12.68 0 22.96-10.279 22.96-22.96V595.725c0-12.68-10.28-22.959-22.96-22.959h-59.25c-12.68 0-22.96-10.28-22.96-22.96V461.73c0-7.815 3.98-15.094 10.55-19.318l71.89-46.179a22.95 22.95 0 0010.55-19.318V52.099c0-12.68-10.28-22.96-22.96-22.96H718.689a22.962 22.962 0 01-12.193-3.505l-35.309-22.13A22.96 22.96 0 00658.994 0z" fill="#C4C4C4" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    )
}