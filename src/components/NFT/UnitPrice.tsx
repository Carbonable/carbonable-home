import { useStarknet } from '@starknet-react/core'
import React, { useEffect, useState } from 'react'
import { useUnitPrice } from '../../adapters/minter';

export default function UnitPrice({ contractAddress }: { contractAddress: string }) {
    const { account } = useStarknet()
    const { unitPrice, loading, error, refresh } = useUnitPrice(contractAddress);
    const [shouldRefresh, setShouldRefresh] = useState(true)
  
    console.log(`unit_price: ${unitPrice}, loading: ${loading}, error: ${error}`);
  
    useEffect(() => {
      if (!account || !shouldRefresh) return;
      setShouldRefresh(false)
      refresh()
    }, [account, shouldRefresh, refresh]);

    if (!account) {
        return null;
    }
    
    return (
        <>
            { unitPrice ? unitPrice.toString() : null }
        </>
    );
  }
