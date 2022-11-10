import { LEGACY_LAUNCHPAD_LINK } from "~/utils/links";
import { LinkOutsideButton } from "../../Button";

export default function Mobile() {
    return (
        <div className="flex lg:hidden items-center">
            <div className="w-5/12"><img className="w-10/12 md:w-8/12" src="/assets/images/home/logo.svg" alt="Logo carbonable" /></div>
            <div className="w-7/12 flex justify-end space-x-2">
                <LinkOutsideButton
                    href="https://carbonable.notion.site/CarbonABLE-Lite-Paper-82bda161f3594964931b2be7d84429ff"
                    className="bg-white text-xs md:text-sm"
                >
                    Litepaper
                </LinkOutsideButton>
                <LinkOutsideButton
                    href={LEGACY_LAUNCHPAD_LINK}
                    className="bg-green w-[124px] text-center before:content-['Invest']"
                >
                </LinkOutsideButton>
            </div>
        </div>
    )
}