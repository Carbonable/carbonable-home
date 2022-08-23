import { useStarknet } from '@starknet-react/core'
import React, { useEffect, useState } from 'react'
import { toHex } from 'starknet/utils/number';
import { useWhitelistMerkleRoot } from '../../adapters/minter';

export default function WhitelistMerkleRoot({ contractAddress }: { contractAddress: string }) {
    const { account } = useStarknet()
    const { whitelistMerkleRoot, loading, error, refresh } = useWhitelistMerkleRoot(contractAddress);
    const [shouldRefresh, setShouldRefresh] = useState(true)
  
    console.log(`whitelist_merkle_root: ${whitelistMerkleRoot}, loading: ${loading}, error: ${error}`)
  
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
            { whitelistMerkleRoot ? toHex(whitelistMerkleRoot) : null }
        </>
    );
  }