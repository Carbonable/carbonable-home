import { useStarknet } from '@starknet-react/core'
import React, { useEffect, useState } from 'react'
import { toHex } from 'starknet/utils/number';
import { usePaymentTokenAddress } from '../../adapters/minter';

export default function PaymentTokenAddress({ contractAddress }: { contractAddress: string }) {
    const { account } = useStarknet()
    const { paymentTokenAddress, loading, error, refresh } = usePaymentTokenAddress(contractAddress);
    const [shouldRefresh, setShouldRefresh] = useState(true)
  
    console.log(`payment_token_address: ${paymentTokenAddress}, loading: ${loading}, error: ${error}`)
  
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
            { paymentTokenAddress ? toHex(paymentTokenAddress) : null }
        </>
    );
  }
