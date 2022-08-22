import { useStarknet } from '@starknet-react/core';
import React from 'react';
import { ConnectButton, DisconnectButton } from '../components/Wallet';


function TestPage() {
    const { account } = useStarknet();

  return (
    <>
        <h1>This is the test page</h1>
        <h2>Connect my wallet</h2>
        { undefined !== account ? <DisconnectButton account={account} /> : <ConnectButton /> }
    </>
    
  );
}

export default TestPage;
