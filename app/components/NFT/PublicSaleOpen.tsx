import { useStarknet } from '@starknet-react/core'
import React, { useEffect, useState } from 'react'
import { usePublicSaleOpen } from '../../adapters/minter';

export default function PublicSaleOpen({ contractAddress }: { contractAddress: string }) {
    const { account } = useStarknet()
    const { publicSaleOpen, loading, error, refresh } = usePublicSaleOpen(contractAddress);
    const [shouldRefresh, setShouldRefresh] = useState(true)
  
    console.log(`public_sale_open: ${publicSaleOpen}, loading: ${loading}, error: ${error}`)
  
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
            { publicSaleOpen ? publicSaleOpen.toString() : null }
        </>
    );
  }
