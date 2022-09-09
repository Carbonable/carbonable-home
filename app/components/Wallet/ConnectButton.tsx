import { useConnectors } from '@starknet-react/core';

export default function ConnectWallet() {
    const { available, connect } = useConnectors();
    return (
        <div>
            {available.map((connector) => (
                <button key={connector.id()} className="font-inter text-black/50 uppercase rounded-3xl px-4 py-2 text-sm bg-green hover:bg-gradient-to-r from-green to-lightblue" onClick={() => connect(connector)}>
                {`Connect ${connector.name()}`}
                </button>
            ))}
        </div>
    )
    
}