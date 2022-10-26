import PlusIconWhite from "~/components/Icons/PlusIcon";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function Steps() {
    return (
        <div id="steps" className="w-11/12 max-w-screen-2xl scroll-mt-12 mx-auto mt-12 scroll-snap-start lg:mt-12 xl:mt-24">
            <div className="flex items-center justify-center">
                <PlusIconWhite className="w-8 md:w-12"></PlusIconWhite>
                <h1 className="w-10/12 items-center uppercase font-trash text-bold text-xl md:text-3xl lg:text-4xl xl:text-5xl text-center">
                    The Carbonable<br/>
                    <span className="font-americana font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">win win</span><br/>
                    snowball effect
                </h1>
                <PlusIconWhite className="w-8 md:w-12"></PlusIconWhite>
            </div>
            <div className="w-full h-full">
                <ParallaxMobile />
            </div>
        </div>
    )
}

function ParallaxMobile() {
    return (
        <Parallax pages={2} style={{ top: '0', left: '0' }}>
            <ParallaxLayer
                offset={0}
                speed={2.5}
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    <img className="w-10/12" src="/assets/images/home/steps/step1.png" alt="Buy carbonable NFT" />
                    <div>Step 1</div>
                    <div>You buy a Carbonable NFT</div>
                </div>
            </ParallaxLayer>
            <ParallaxLayer
                offset={1}
                speed={2.5}
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    <img className="w-10/12" src="/assets/images/home/steps/step2.png" alt="Buy carbonable NFT" />
                    <div>Step 1</div>
                    <div>You have stakes in a nature regeneration project which generates yearly carbon credits</div>
                </div>
            </ParallaxLayer>
        </Parallax>
    )
}