import { useStarknet } from '@starknet-react/core'
import React, { useEffect, useState } from 'react'
import { useWhitelistedSaleOpen } from '../../adapters/minter';

export default function WhitelistedSaleOpen({ contractAddress }: { contractAddress: string }) {
    const { account } = useStarknet()
    const { whitelistedSaleOpen, loading, error, refresh } = useWhitelistedSaleOpen(contractAddress);
    const [shouldRefresh, setShouldRefresh] = useState(true)
  
    console.log(`whitelisted_sale_open: ${whitelistedSaleOpen}, loading: ${loading}, error: ${error}`)
  
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
            { whitelistedSaleOpen ? whitelistedSaleOpen.toString() : null }
        </>
    );
  }

