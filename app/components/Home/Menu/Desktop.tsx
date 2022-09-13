import { LinkButton, LinkOutsideButton } from "../../Button";
import MenuLink from "../../Link/MenuLink";

export default function Desktop() {
    return (
        <div className="hidden lg:flex items-center">
            <div className="w-3/12">Carbonable</div>
            <div className="font-inter w-6/12 text-beaige flex uppercase space-x-8 text-sm justify-center">
                <MenuLink href="#projects">Projects</MenuLink>
                <MenuLink href="#defiyield">Defi Yields</MenuLink>
                <MenuLink href="#howitworks">How it works</MenuLink>
                <MenuLink href="#blog">Blog</MenuLink>
            </div>
            <div className="w-3/12 flex justify-end space-x-4">
                <LinkOutsideButton
                    href="https://carbonable.notion.site/CarbonABLE-Lite-Paper-82bda161f3594964931b2be7d84429ff"
                    className="bg-white text-black/50"
                >
                    Litepaper
                </LinkOutsideButton>
                <LinkButton
                    href="/launchpad"
                    className="bg-green text-black/50"
                >
                    Invest
                </LinkButton>
            </div>
        </div>
    )
}