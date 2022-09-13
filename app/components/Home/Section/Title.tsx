import { BanknotesIcon } from "@heroicons/react/24/outline";
import { LinkButtonBig } from "~/components/Button";

export default function Title() {
    return (
        <div className="block w-full text-center">
            <div className="font-americana text-2xl pt-16 lg:text-5xl lg:pt-36 w-9/12 mx-auto uppercase">
                OUTSTANDING LONG TERM YIELDS FOR INVESTORS & THE PLANET
            </div>
            <div className="font-trash text-bold text-green text-lg w-10/12 lg:text-2xl lg:w-6/12 mx-auto mt-8">
                BEST VALUE INVESTMENTS VALUES THE PLANET
            </div>
            <div className="mt-12 w-fit mx-auto">
                <LinkButtonBig href="/launchpad" className="bg-green text-white flex items-center justify-center mx-auto">
                    <BanknotesIcon className="w-10 rounded-full mr-2"></BanknotesIcon>
                    Invest
                </LinkButtonBig>
            </div>
        </div>
    )
}