import { DISCORD_LINK, LINKEDIN_LINK, MEDIUM_LINK, TWITTER_LINK } from "~/utils/links";

export default function Footer() {
    return (
        <div className="relative mt-12 md:mt-24 mb-8 w-11/12 mx-auto flex items-center justify-between space-x-10">
            <div className="relative w-3/4 md:w-fit">
                <img className="w-48" src="/assets/images/logo.svg" alt="Logo carbonable" />
                <div className="mt-4 text-xs md:text-sm text-neutral-300">Copyright © 2023 Carbonable</div>
            </div>
            <div className="flex flex-wrap justify-end">
                <a href={LINKEDIN_LINK} target="_blank" rel="noreferrer" className="mr-4 mb-2 md:mr-4 md:mb-0"><img src="/assets/images/icons/linkedin.svg" alt="Twitter" className="w-8" /></a>
                <a href={TWITTER_LINK} target="_blank" rel="noreferrer" className="mr-0 mb-2 md:mr-4 md:mb-0"><img src="/assets/images/icons/twitter.svg" alt="Twitter" className="w-8" /></a>
                <a href={MEDIUM_LINK} target="_blank" rel="noreferrer" className="mr-4 md:mr-4"><img src="/assets/images/icons/medium.svg" alt="Medium" className="w-8" /></a>
                <a href={DISCORD_LINK} target="_blank" rel="noreferrer" className="mr-0 md:mr-2"><img src="/assets/images/icons/discord.svg" alt="Discord" className="w-8" /></a>
            </div>
        </div>
    )
}