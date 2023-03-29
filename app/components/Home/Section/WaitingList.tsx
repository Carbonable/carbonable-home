import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useFetcher, useSubmit, useTransition } from "@remix-run/react";
import { useRef } from "react";
import { WhitelistButton } from "~/components/Button";
import { PlusIconBlack } from "~/components/Icons/PlusIcon";

export default function WaitingList() {

    const newsletter = useFetcher();
    const ref = useRef<HTMLInputElement>(null);

    const transition = useTransition();
    const state: "idle" | "success" | "error" | "submitting" = transition.submission
        ? "submitting"
        : newsletter?.data?.message
        ? "success"
        : newsletter?.data?.error
        ? "error"
        : "idle";

    return (
        <div className="bg-waiting-list bg-no-repeat bg-bottom bg-origin-padding rounded-2xl w-11/12 mx-auto py-2 px-2 mt-20 text-black md:w-10/12 md:px-12 xl:w-6/12">
            <div className="flex items-center justify-center mt-10">
                <PlusIconBlack className="w-8 md:w-12"></PlusIconBlack>
                <div className="w-10/12 mx-auto px-6 uppercase text-center">
                    <h1 className="uppercase font-trash font-bold text-2xl text-center md:text-3xl xl:text-5xl">
                        HELP NATURE
                        <div className="font-americana font-medium text-xl text-center md:text-2xl xl:text-4xl">HELP YOU</div>
                    </h1>
                </div>
                <PlusIconBlack className="w-8 md:w-12"></PlusIconBlack>
            </div>
            <div className="my-10">
                <img className="mx-auto" src="/assets/images/home/infinite-earth.svg" alt="Infinite earth" />
            </div>
            <div className="w-full font-inter text-lg text-center px-4 mx-auto md:px-12 md:w-8/12">At Carbonable, we’re on a mission to align the best interests of business, investors & the planet.</div>
                <div className="w-full text-center my-10 mx-auto md:mt-16 md:w-10/12">
                <newsletter.Form
                    method="post"
                    action="/newsletter/subscribe"
                    >
                    <div className={state === 'error' ? 'bg-white mt-4 rounded-full w-11/12 pl-4 pr-2 py-2 mx-auto flex lg:w-10/12 border-2 border-red-400' : 'bg-white mt-4 rounded-full w-full pl-4 pr-2 py-2 mx-auto flex lg:w-10/12 border-2'}>
                        <input type="email" className="text-sm text-slate-500 outline-0 w-full" name="email" ref={ref} placeholder="Join our waiting list" aria-label="Email address" aria-describedby="error-message" />
                        <WhitelistButton className="bg-green flex items-center text-xs lg:ml-28 w-min text-right" onClick={useSubmit}>
                            <PaperAirplaneIcon className={state === 'submitting' ? 'lg:hidden w-6 text-white animate-pulse' : 'lg:hidden w-6 text-white'} />
                            <div className="hidden uppercase lg:block min-w-max">Join our waitlist</div>
                        </WhitelistButton>
                    </div>
                    <div id="error-message" className={state === "success" ? 'text-green mt-1 mx-auto w-full lg:w-6/12 lg:text-left lg:pl-6 text-center' : "text-red-600 mt-1 mx-auto w-full lg:w-6/12 lg:text-left lg:pl-6 text-center"}>{state === "error" ? newsletter?.data?.error : newsletter?.data?.message}</div>
                </newsletter.Form>
            </div>
        </div>
    )
}