import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react'
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TrustWalletAdapter,
} from '@solana/wallet-adapter-wallets'
import { clusterApiUrl } from '@solana/web3.js'
import { ReactNode, useMemo, useState, useEffect } from 'react'
import { State, WagmiProvider } from 'wagmi'
import { wagmiConfig } from '@/core/lib/wagmi'
import { QueryClientProvider } from '@tanstack/react-query'
import { getQueryClient } from '@/core/lib/tanstack-query'

// Track WalletConnect initialization in the module scope
let walletConnectInitialized = false

type BlockchainProviderProps = {
  children: ReactNode
  initialState?: State
}

export const BlockchainProvider = ({
  children,
  initialState,
}: BlockchainProviderProps) => {
  const network = WalletAdapterNetwork.Devnet
  const [queryClient] = useState(() => getQueryClient())
  const endpoint = useMemo(() => clusterApiUrl(network), [network])

  // This effect prevents duplicate initialization of WalletConnect components
  useEffect(() => {
    // We want to mark it as initialized only in client-side
    if (typeof window !== 'undefined' && !walletConnectInitialized) {
      walletConnectInitialized = true
      // We don't need to do anything else here - the flag will prevent reinitializing
      // when this component is remounted
    }
    return () => {
      // We don't reset the flag on unmount, as we want to prevent future initializations
    }
  }, [])

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new TrustWalletAdapter(),
      new SolflareWalletAdapter({ network }),
    ],
    [network],
  )

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WagmiProvider config={wagmiConfig} initialState={initialState}>
        <QueryClientProvider client={queryClient}>
          <WalletProvider wallets={wallets} autoConnect>
            {children}
          </WalletProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ConnectionProvider>
  )
}
