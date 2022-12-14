import { LEGACY_LAUNCHPAD_LINK, LITE_PAPER_LINK } from "~/utils/links";
import { LinkOutsideButton } from "../../Button";
import MenuLink from "../../Link/MenuLink";

export default function Desktop() {
    return (
        <div className="hidden lg:flex items-center">
            <div className="w-3/12"><img className="w-8/12 xl:w-6/12" src="/assets/images/home/logo.svg" alt="Logo carbonable" /></div>
            <div className="flex font-inter w-6/12 text-beaige uppercase space-x-8 text-sm justify-center items-center text-center">
                <MenuLink href="#video">Explainer video</MenuLink>
                <MenuLink href="#assets">Our assets</MenuLink>
                <MenuLink href="#howitworks">How it works</MenuLink>
                <MenuLink href="#b2b">B2B</MenuLink>
            </div>
            <div className="w-3/12 flex justify-end space-x-4">
                <LinkOutsideButton
                    href={LITE_PAPER_LINK}
                    className="bg-white"
                >
                    Litepaper
                </LinkOutsideButton>
                <LinkOutsideButton
                    href={LEGACY_LAUNCHPAD_LINK}
                    className="bg-green min-w-[50%] text-center before:content-['Invest']"
                >
                </LinkOutsideButton>
            </div>
        </div>
    )
}