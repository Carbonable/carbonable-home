import { LinkButtonBig } from "~/components/Button";

export default function Title() {
    return (
        <div className="block w-full text-center max-w-screen-2xl mx-auto mt-12">
            <h1 className="font-americana text-3xl md:text-4xl pt-16 lg:text-6xl lg:pt-36 w-9/12 mx-auto uppercase">
                LONG TERM YIELDS FOR INVESTORS & THE PLANET
            </h1>
            <h2 className="font-trash text-bold text-green text-lg w-10/12 lg:text-2xl lg:w-6/12 mx-auto mt-8">
                BEST VALUE INVESTMENTS VALUES THE PLANET
            </h2>
            <div className="mt-12 w-fit mx-auto">
                <LinkButtonBig href="/launchpad" className="bg-green flex items-center justify-center mx-auto">
                    Invest
                </LinkButtonBig>
            </div>
        </div>
    )
}