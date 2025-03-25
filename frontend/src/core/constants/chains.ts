import {
  sepolia,
  baseSepolia,
  bscTestnet,
  arbitrumSepolia,
  mainnet,
  base,
  arbitrum,
  bsc,
} from 'wagmi/chains'
import { PublicKey } from '@solana/web3.js'
import { TOKEN_FACTORY_ADDRESSES } from './address'

export const SUPPORT_TESTNET_CHAINS = [
  { ...bscTestnet, name: 'BSC Testnet' },
  baseSepolia,
  arbitrumSepolia,
] as const

export const SUPPORT_MAINNET_CHAINS = [mainnet, base, arbitrum, bsc] as const

export const SUPPORT_ALL_CHAINS = [
  ...SUPPORT_TESTNET_CHAINS,
  ...SUPPORT_MAINNET_CHAINS,
] as const

export const SUPPORT_CHAINS =
  process.env.NEXT_PUBLIC_ENV === 'prod'
    ? SUPPORT_MAINNET_CHAINS
    : SUPPORT_TESTNET_CHAINS

export const PUBLIC_TESTNET_NODES: Record<
  (typeof SUPPORT_TESTNET_CHAINS)[number]['id'],
  string[] | readonly string[]
> = {
  [bscTestnet.id]: bscTestnet.rpcUrls.default.http,
  [baseSepolia.id]: baseSepolia.rpcUrls.default.http,
  [arbitrumSepolia.id]: arbitrumSepolia.rpcUrls.default.http,
}

export const PUBLIC_MAINNET_NODES: Record<
  (typeof SUPPORT_MAINNET_CHAINS)[number]['id'],
  string[] | readonly string[]
> = {
  [mainnet.id]: mainnet.rpcUrls.default.http,
  [base.id]: base.rpcUrls.default.http,
  [arbitrum.id]: arbitrum.rpcUrls.default.http,
  [bsc.id]: bsc.rpcUrls.default.http,
}

export const PUBLIC_ALL_NODES = {
  ...PUBLIC_MAINNET_NODES,
  ...PUBLIC_TESTNET_NODES,
}

export const CHAIN_ID = {
  MAINNET: 1,
  SEPOLIA: 11155111,
  ARBITRUM_ONE: 42161,
  BNB: 56,
  BSC_TESTNET: bscTestnet.id,
  BASE_TESTNET: baseSepolia.id,
  ARBITRUM_SEPOLIA: arbitrumSepolia.id,
  OPBNB: 204,
  AVALANCHE: 43114,
  BASE: 8453,
  BLAST: 81457,
  SOLANA: 999,
  LINEA: 59144,
  FANTOM: 250,
  ZKSYNC: 324,
} as const

export const LAYERZERO_CHAIN_ID_MAP: Record<number, number> = {
  [sepolia.id]: 40161,
  [bscTestnet.id]: 40102,
  [baseSepolia.id]: 40245,
  [arbitrumSepolia.id]: 40231,
  [mainnet.id]: 30101,
  [base.id]: 30184,
  [arbitrum.id]: 30110,
  [bsc.id]: 30102,
  [CHAIN_ID.SOLANA]: 40168,
}

export const SOLANA_OAPP_CONFIG = PublicKey.findProgramAddressSync(
  [Buffer.from('OApp')],
  new PublicKey(TOKEN_FACTORY_ADDRESSES[CHAIN_ID.SOLANA]),
)[0]
