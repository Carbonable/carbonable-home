import { Link } from "@remix-run/react";
import { useStarknet } from "@starknet-react/core";
import { ConnectButton, DisconnectButton } from "../Wallet";

export default function Header() {
    const { account } = useStarknet();
    return (
        <>
            <div className="relative top-4 w-full flex items-center justify-center">
                <div className="w-11/12 menu-bg p-6 text-right flex items-center">
                    <div className="text-left w-3/12">
                        <Link to="/">Carbonable</Link>
                    </div>
                    <div className="text-right w-9/12">
                        { undefined !== account ? <DisconnectButton account={account} /> : <ConnectButton /> }
                    </div>
                </div>
            </div>
        </>
    )
}