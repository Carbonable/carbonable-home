import { PlayIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { ModalVideo } from "~/components/Modal";


export default function Video() {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
      };

    return (
        <>
            <div id="video" className="z-0 w-full min-h-[50vh] bg-home-video bg-no-repeat bg-cover mt-16 scroll-snap-center flex flex-wrap items-center xl:min-h-[70vh]">
                <div className="w-7/12 pl-6 md:w-1/2 md:pl-16 lg:pl-36 xl:pl-52 2xl:pl-[25%]">
                    <h1 className="uppercase font-trash text-bold text-lg leading-5 md:text-3xl lg:text-4xl xl:text-5xl text-left">be significant<br/>by financing</h1>
                    <h2 className="uppercase font-americana text-bold text-green leading-5 text-lg md:text-3xl lg:text-4xl xl:text-5xl text-left">natures<br/>regeneration</h2>
                    <div className="font-inter mt-4 text-xs leading-5 md:text-sm lg:text-base 2xl:max-w-[90%]">Carbonable empowers anyone to invest in the greatest challenge of our time, by financing nature’s regeneration. 
                       Get a significant, long-term and growing yield while fighting climate change.</div>
                </div>
                <div className="w-5/12 md:w-1/2">
                    <div className="relative w-full flex items-center justify-center md:w-1/2 mx-auto 2xl:mr-[40%]">
                        <img src="/assets/images/home/play-button-text.svg" alt="play button background" className="w-[122px] animate-spin-slow md:w-[216px] xl:w-[312px]" />
                        <img src="/assets/images/home/play-button-bg.png" alt="play button background" className="absolute w-[72px] mt-[1px] md:w-[124px] xl:w-[190px]" />
                        <PlayIcon className="w-10 absolute mt-1 ml-1 xl:w-20 hover:text-green cursor-pointer" onClick={() => setOpen(true)} />
                    </div>
                </div>
            </div>
            <ModalVideo open={open} handleClose={handleClose} />
        </>
    )
}