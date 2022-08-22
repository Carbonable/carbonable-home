import { useConnectors } from '@starknet-react/core';

export default function DisconnectWallet({ account }: { account: string }) {
    const { disconnect } = useConnectors();
    return (
        <div>
            <p>Account: {account}</p>
            <button onClick={() => disconnect()}>Disconnect</button>
        </div>
    )
}