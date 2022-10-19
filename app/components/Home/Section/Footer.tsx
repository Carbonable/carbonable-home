import { LinkFooter } from "~/components/Button";
import { MenuLink } from "~/components/Link";
import { DISCORD_LINK, LINKEDIN_LINK, MEDIUM_LINK, TELEGRAM_LINK, TWITTER_LINK, YOUTUBE_LINK } from "~/utils/links";

export default function Footer() {
    return (
        <div className="relative mt-12 mb-4 w-full max-w-screen-2xl mx-auto">
            <div className="w-11/12 mx-auto menu-bg p-6 flex flex-wrap items-center justify-items-center md:items-start">
                <div className="w-full md:w-7/12 md:order-1 xl:md:w-8/12">
                    <img className="w-10/12 mx-auto md:ml-8 md:mt-8 md:w-9/12 xl:w-8/12" src="/assets/images/home/logo.svg" alt="Logo carbonable" />
                </div>
                <div className="mt-8 w-full flex flex-wrap justify-between md:w-5/12 md:order-2 xl:md:w-4/12">
                    <LinkFooter className="w-[32%]" href={TWITTER_LINK}><img src="/assets/images/icons/twitter-icon.svg" alt="twitter" /></LinkFooter>
                    <LinkFooter className="w-[32%]" href={DISCORD_LINK}><img src="/assets/images/icons/discord-icon.svg" alt="discord" /></LinkFooter>
                    <LinkFooter className="w-[32%]" href={LINKEDIN_LINK}><img src="/assets/images/icons/linkedin-icon.svg" alt="linkedin" /></LinkFooter>
                    <LinkFooter className="w-[32%] mt-[4%]" href={MEDIUM_LINK}><img src="/assets/images/icons/medium-icon.svg" alt="medium" /></LinkFooter>
                    <LinkFooter className="w-[32%] mt-[4%]" href={TELEGRAM_LINK}><img src="/assets/images/icons/telegram-icon.svg" alt="telegram" /></LinkFooter>
                    <LinkFooter className="w-[32%] mt-[4%]" href={YOUTUBE_LINK}><img src="/assets/images/icons/youtube-icon.svg" alt="youtube" /></LinkFooter>
                </div>
                <div className="w-full flex flex-wrap font-inter uppercase text-center mt-8 text-beaige md:w-7/12 md:order-3 md:mt-[-64px] md:text-left md:ml-12 xl:md:w-8/12 lg:items-center lg:mt-[-32px]">
                    <div className="w-11/12 mx-auto justify-between text-center flex md:w-full md:justify-start md:text-left lg:w-[36%] lg:text-sm items-center">
                        <div className="w-[33%] md:w-[30%] lg:w-[33%]"><MenuLink href="#">Privacy</MenuLink></div>
                        <div className="w-[33%] md:w-[30%] lg:w-[33%]"><MenuLink href="#">Terms</MenuLink></div>
                        <div className="w-[33%] md:w-[30%] lg:w-[33%]"><MenuLink href="#">Legal</MenuLink></div>
                    </div>
                    <div className="w-full text-xs md:text-sm mt-4 lg:w-[64%] lg:text-xs lg:mt-0">CARBONABLE 2022. All Rights Reserved.</div>
                </div>
            </div>
        </div>
    )
}