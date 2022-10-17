import Desktop from "./Desktop";
import Mobile from "./Mobile";

export default function Menu() {
    return (
        <>
            <div className="relative top-12 w-full flex items-center justify-center max-w-screen-2xl mx-auto">
                <div className="w-11/12 menu-bg px-6 py-4">
                    <Mobile />
                    <Desktop /> 
                </div>
            </div>
        </>
    )
}