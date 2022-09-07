import Desktop from "./Desktop";
import Mobile from "./Mobile";

export default function Menu() {
    return (
        <>
            <div className="mt-4 mx-auto w-11/12 menu-bg p-6">
                <Mobile />
                <Desktop />
            </div>
        </>
    )
}