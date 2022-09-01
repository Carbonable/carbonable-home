import { useStarknet } from "@starknet-react/core";
import { MaxBuyPerTx, MaxSupplyForMint, PaymentTokenAddress, ProjectNFTAddress, PublicSaleOpen, ReservedSupplyForMint, UnitPrice, WhitelistedSaleOpen, WhitelistMerkleRoot } from "~/components/NFT";
import { ConnectButton, DisconnectButton } from "~/components/Wallet";
import { MINTER_CONTRACT_ADDRESS } from "~/contracts/addresses";

export default function Index() {
  const { account } = useStarknet();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <h2>Connect my wallet</h2>
            { undefined !== account ? <DisconnectButton account={account} /> : <ConnectButton /> }
           
            <h2>Call contract</h2>
            <h3>project_nft_address</h3>
            <ProjectNFTAddress contractAddress={MINTER_CONTRACT_ADDRESS} />

            <h3>payment_token_address</h3>
            <PaymentTokenAddress contractAddress={MINTER_CONTRACT_ADDRESS} />

            <h3>whitelisted_sale_open</h3>
            <WhitelistedSaleOpen contractAddress={MINTER_CONTRACT_ADDRESS} />
            
            <h3>public_sale_open</h3>
            <PublicSaleOpen contractAddress={MINTER_CONTRACT_ADDRESS} />

            <h3>max_buy_per_tx</h3>
            <MaxBuyPerTx contractAddress={MINTER_CONTRACT_ADDRESS} />

            <h3>unit_price</h3>
            <UnitPrice contractAddress={MINTER_CONTRACT_ADDRESS} />

            <h3>max_supply_for_mint</h3>
            <MaxSupplyForMint contractAddress={MINTER_CONTRACT_ADDRESS} />

            <h3>reserved_supply_for_mint</h3>
            <ReservedSupplyForMint contractAddress={MINTER_CONTRACT_ADDRESS} />

            <h3>whitelist_merkle_root</h3>
            <WhitelistMerkleRoot contractAddress={MINTER_CONTRACT_ADDRESS} />
    </div>
  );
}
