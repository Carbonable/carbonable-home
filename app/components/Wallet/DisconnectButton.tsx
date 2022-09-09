import { useConnectors } from '@starknet-react/core';

interface ButtonProps {
    account: string;
}

export default function DisconnectWallet({ account }: ButtonProps) {
    const { disconnect } = useConnectors();
    return (
        <div>
            <span className="pr-8">{account}</span>
            <button className="font-inter uppercase rounded-3xl px-4 py-2 text-sm bg-red-900 text-white" onClick={() => disconnect()}>Disconnect</button>
        </div>
    )
}