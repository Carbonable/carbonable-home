import PlusIconWhite from "~/components/Icons/PlusIcon";
import type { StepData } from "~/types/types";

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
        }

    ];

    return (
        <div id="steps" className="scroll-snap-start w-11/12 max-w-screen-2xl scroll-mt-12 mx-auto mt-12 lg:mt-12 xl:mt-24">
            <div className="flex items-center justify-center">
                <PlusIconWhite className="w-8 md:w-12"></PlusIconWhite>
                <h1 className="w-10/12 items-center uppercase font-trash text-bold text-xl md:text-3xl lg:text-4xl xl:text-5xl text-center">
                    The Carbonable<br/>
                    <span className="font-americana font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">win win</span><br/>
                    snowball effect
                </h1>
                <PlusIconWhite className="w-8 md:w-12"></PlusIconWhite>
            </div>
            <div className="w-full">
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

function Step({step}: StepProps) {
    return (
        <div className="flex flex-wrap items-start justify-center text-center mt-16">
            <div className="w-full">
                <img className="w-[300px] mx-auto" src={`/assets/images/home/steps/${step.id}.png`} alt="Buy carbonable NFT" />
            </div>
            <div className="w-full text-green font-trash font-bold mt-2 text-2xl uppercase">{step.title}</div>
            <div className="w-full font-inter mt-1 text-beaige text-sm">{step.text}</div>
        </div>
    )
}