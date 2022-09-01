import { useStarknetCall } from "@starknet-react/core";
import { useMinterContract } from "../hooks/minter";


export function useMaxBuyPerTx(contractAddress: string) {
    const { contract: minter } = useMinterContract(contractAddress);
    const { data, loading, error, refresh } = useStarknetCall({ contract: minter, method: 'max_buy_per_tx', args: [] });
    
    return { maxBuyPerTx: data, error, loading, refresh }; 
}

export function useMaxSupplyForMint(contractAddress: string) {
    const { contract: minter } = useMinterContract(contractAddress);
    const { data, loading, error, refresh } = useStarknetCall({ contract: minter, method: 'max_supply_for_mint', args: [] });
    const maxSupply = data ? data[0] : undefined;
    return { maxSupplyForMint: maxSupply?.low, error, loading, refresh };  
}

export function usePublicSaleOpen(contractAddress: string) {
    const { contract: minter } = useMinterContract(contractAddress);
    const { data, loading, error, refresh } = useStarknetCall({ contract: minter, method: 'public_sale_open', args: [] });
    
    return { publicSaleOpen: data, error, loading, refresh }; 
}

export function usePaymentTokenAddress(contractAddress: string) {
    const { contract: minter } = useMinterContract(contractAddress);
    const { data, loading, error, refresh } = useStarknetCall({ contract: minter, method: 'payment_token_address', args: [] });
    
    return { paymentTokenAddress: data, error, loading, refresh }; 
}


export function useProjectNftAddress(contractAddress: string) {
    const { contract: minter } = useMinterContract(contractAddress);
    const { data, loading, error, refresh } = useStarknetCall({ contract: minter, method: 'project_nft_address', args: [] });
    
    return { projectNftAddress: data, error, loading, refresh }; 
}

export function useReservedSupplyForMint(contractAddress: string) {
    const { contract: minter } = useMinterContract(contractAddress);
    const { data, loading, error, refresh } = useStarknetCall({ contract: minter, method: 'reserved_supply_for_mint', args: [] });
    const reservedSupply = data ? data[0] : undefined;
    return { reservedSupplyForMint: reservedSupply?.low, error, loading, refresh }; 
}

export function useUnitPrice(contractAddress: string) {
    const { contract: minter } = useMinterContract(contractAddress);
    const { data, loading, error, refresh } = useStarknetCall({ contract: minter, method: 'unit_price', args: [] });
    const price = data ? data[0] : undefined;
    return { unitPrice: price?.low, error, loading, refresh }; 
}

export function useWhitelistedSaleOpen(contractAddress: string) {
    const { contract: minter } = useMinterContract(contractAddress);
    const { data, loading, error, refresh } = useStarknetCall({ contract: minter, method: 'whitelisted_sale_open', args: [] });
    
    return { whitelistedSaleOpen: data, error, loading, refresh }; 
}

export function useWhitelistMerkleRoot(contractAddress: string) {
    const { contract: minter } = useMinterContract(contractAddress);
    const { data, loading, error, refresh } = useStarknetCall({ contract: minter, method: 'whitelist_merkle_root', args: [] });
    
    return { whitelistMerkleRoot: data, error, loading, refresh }; 
}
