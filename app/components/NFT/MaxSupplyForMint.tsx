import { useStarknet } from '@starknet-react/core'
import React, { useEffect, useState } from 'react'
import { useMaxSupplyForMint } from '../../adapters/minter';

export default function MaxSupplyForMint({ contractAddress }: { contractAddress: string }) {
    const { account } = useStarknet()
    const { maxSupplyForMint, loading, error, refresh } = useMaxSupplyForMint(contractAddress);
    const [shouldRefresh, setShouldRefresh] = useState(true)
  
    console.log(`max_supply_for_mint: ${maxSupplyForMint}, loading: ${loading}, error: ${error}`);
  
    useEffect(() => {
      if (!account || !shouldRefresh) return;
      setShouldRefresh(false)
      refresh()
    }, [account, shouldRefresh, refresh])
    
    if (!account) {
      return null;
    }
    
    return (
        <>
            { maxSupplyForMint ? maxSupplyForMint.toString() : null }
        </>
    );
  }
