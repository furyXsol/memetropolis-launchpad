import { useWallet as useSolanaWallet } from '@solana/wallet-adapter-react'
import { encodeBase58 } from 'ethers'
import { useCallback } from 'react'

import { Web3Wallet } from '@/core/types/web3'

export const useSolanaSignMessage = () => {
  const { signMessage: signSolanaMessage } = useSolanaWallet()

  const signMessage = useCallback<Web3Wallet.SignMessageFunction>(
    async (message: string) => {
      const messageToSign = new TextEncoder().encode(message)
      const signature =
        signSolanaMessage && (await signSolanaMessage(messageToSign))

      return encodeBase58(signature as Uint8Array)
    },
    [signSolanaMessage],
  )

  return {
    signMessage,
  }
}
