import { useStarknet } from "@starknet-react/core";
import Header from "~/components/Header";

export function meta() {
    return {
        title: "Carbonable | Launchpad",
        description: "This is where you make moula"
    };
}

export default function Launchpad() {
    const { account } = useStarknet();
    return (
        <>
            <Header />
            { undefined !== account ? <div className="w-full mt-24 text-white text-7xl text-center uppercase font-trash">Par ici la moula</div> : null }
        </>
    )
}