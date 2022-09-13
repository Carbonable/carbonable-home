import LinkButton, { LinkOutsideButton } from "../../Button";

export default function Mobile() {
    return (
        <div className="flex lg:hidden items-center">
            <div className="w-5/12">Carbonable</div>
            <div className="w-7/12 flex justify-end space-x-2">
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