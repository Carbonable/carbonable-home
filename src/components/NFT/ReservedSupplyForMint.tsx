import { useStarknet } from '@starknet-react/core'
import React, { useEffect, useState } from 'react'
import { useReservedSupplyForMint } from '../../adapters/minter';

export default function MaxSupplyForMint({ contractAddress }: { contractAddress: string }) {
    const { account } = useStarknet()
    const { reservedSupplyForMint, loading, error, refresh } = useReservedSupplyForMint(contractAddress);
    const [shouldRefresh, setShouldRefresh] = useState(true)
  
    console.log(`reserved_supply_for_mint: ${reservedSupplyForMint}, loading: ${loading}, error: ${error}`);
  
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
            { reservedSupplyForMint ? reservedSupplyForMint.toString() : null }
        </>
    );
  }
