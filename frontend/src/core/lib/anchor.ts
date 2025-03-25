import { ConfirmOptions, Connection } from '@solana/web3.js'
import { AnchorProvider, Program, Wallet } from '@coral-xyz/anchor'
import { useAnchorWallet, useConnection } from '@solana/wallet-adapter-react'
import { IDL, MemetropolisType } from '../constants/memetropolis_idl_types'
import { TOKEN_FACTORY_ADDRESSES } from '../constants/address'
import { CHAIN_ID } from '../constants/chains'

export const usePumpfunAnchor = () => {
  const wallet = useAnchorWallet()
  const { connection } = useConnection()
  const program = getProgram(connection, wallet as any, {
    commitment: 'confirmed',
  })

  return program
}

export const solana = {
  id: 999,
  name: 'Solana',
  nativeCurrency: {
    decimals: 9,
    name: 'Solana',
    symbol: 'SOL',
  },
  rpcUrls: {
    default: {
      http: ['https://api.mainnet-beta.solana.com'],
    },
  },
  blockExplorers: {
    default: { name: 'Solana Mainnet Explorer', url: 'https://solscan.io/' },
  },
} as const

export const SOLANA = [solana] as const

export const getProgram = (
  connection: Connection,
  wallet: Wallet,
  confirmOptions?: ConfirmOptions,
) => {
  const provider = new AnchorProvider(
    connection,
    wallet,
    confirmOptions ?? { commitment: 'confirmed' },
  )
  return new Program<MemetropolisType>(
    IDL,
    TOKEN_FACTORY_ADDRESSES[CHAIN_ID.SOLANA],
    provider,
  )
}
