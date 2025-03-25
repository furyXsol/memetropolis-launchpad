import {
  mainnet,
  sepolia,
  bscTestnet,
  baseSepolia,
  arbitrumSepolia,
  bsc,
  base,
  arbitrum,
} from 'wagmi/chains'

export const SOLANA_PROGRAM_ID = 'CiQZ4gYrjqkWE6QLWcRt5zYkjKrond7Ww1SD33qAtGQr'

export const TOKEN_FACTORY_ADDRESSES: { [chainId: number]: string } = {
  [bscTestnet.id]: '0x33844B1C9de1e9D61ec3af4610634D3C2268A6f4',
  [baseSepolia.id]: '0xAb170C8B67deee723398A03213d6EB2Fb9a89e3E',
  [arbitrumSepolia.id]: '0x16c19a9643b9f1dab1adb7543499e4976a3dd6c3',
  [bsc.id]: '0x16C19A9643b9F1Dab1adb7543499E4976a3DD6c3',
  [base.id]: '0x16C19A9643b9F1Dab1adb7543499E4976a3DD6c3',
  [arbitrum.id]: '0x16C19A9643b9F1Dab1adb7543499E4976a3DD6c3',
  [mainnet.id]: '0xE1164a7a364929C3ba3Da9671c8003DD71975D2d',
  [999]: SOLANA_PROGRAM_ID, // solana OApp Program ID
}

export const CHAINLINK_ETH_USD_FEED: { [chainId: number]: string } = {
  [mainnet.id]: '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
  [sepolia.id]: '0x694AA1769357215DE4FAC081bf1f309aDC325306',
  [bscTestnet.id]: '0x2514895c72f50D8bd4B4F9b1110F0D6bD2c97526',
}
