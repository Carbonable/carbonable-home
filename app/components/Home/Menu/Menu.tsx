import Desktop from "./Desktop";
import Mobile from "./Mobile";

export default function Menu() {
    return (
        <>
            <div className="relative top-4 w-full flex items-center justify-center">
                <div className="w-11/12 menu-bg p-6">
                    <Mobile />
                    <Desktop /> 
                </div>
            </div>
        </>
    )
}