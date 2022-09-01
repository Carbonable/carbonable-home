import { useStarknet } from '@starknet-react/core'
import React, { useEffect, useState } from 'react'
import { useMaxBuyPerTx } from '../../adapters/minter';

export default function MaxBuyPerTx({ contractAddress }: { contractAddress: string }) {
    const { account } = useStarknet()
    const { maxBuyPerTx, loading, error, refresh } = useMaxBuyPerTx(contractAddress);
    const [shouldRefresh, setShouldRefresh] = useState(true)
  
    console.log(`max_buy_per_tx: ${maxBuyPerTx}, loading: ${loading}, error: ${error}`)
  
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
            { maxBuyPerTx ? maxBuyPerTx.toString() : null }
        </>
    );
  }
