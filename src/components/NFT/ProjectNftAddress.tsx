import { useStarknet } from '@starknet-react/core'
import React, { useEffect, useState } from 'react'
import { toHex } from 'starknet/utils/number';
import { useProjectNftAddress } from '../../adapters/minter';

export default function ProjectNFTAddress({ contractAddress }: { contractAddress: string }) {
    const { account } = useStarknet()
    const { projectNftAddress, loading, error, refresh } = useProjectNftAddress(contractAddress);
    const [shouldRefresh, setShouldRefresh] = useState(true)
  
    console.log(`project_nft_address: ${projectNftAddress}, loading: ${loading}, error: ${error}`)
  
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
            { projectNftAddress ? toHex(projectNftAddress) : null }
        </>
    );
  }
