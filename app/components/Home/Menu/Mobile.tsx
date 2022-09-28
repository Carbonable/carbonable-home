import LinkButton, { LinkOutsideButton } from "../../Button";

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
                <LinkButton
                    href="#"
                    className="bg-green text-xs md:text-sm"
                >
                    Invest
                </LinkButton>
            </div>
        </div>
    )
}