import { Web3Wallet } from '../types/web3'
import { useWatchWalletEvm } from './evm/use-watch-wallet'
import { useWatchWalletSolana } from './solana/use-watch-wallet'

export function useWatchWallet({ onChange }: Web3Wallet.UseWatchWalletParams) {
  useWatchWalletSolana({ onChange })
  useWatchWalletEvm({ onChange })
}
