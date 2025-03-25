'use client'

import { useQuery } from '@tanstack/react-query'
import { LucideIcon } from '@/components/ui/lucide-icon'
import { UserWallets } from '@/components/layout/header/user-wallets'
import AuthContainer from '@/components/auth-container'
import { getAccountProfile } from '@/core/services/_api/use-account'
import { useWallet } from '@/core/hooks/use-wallet'
import { Web3Wallet } from '@/core/types/web3'
import { useClientOnly } from '@/core/hooks/use-client-only'

export default function ConnectWallet() {
  const { wallets, disconnect } = useWallet()
  const walletAddress = wallets?.[0]?.address
  const { data: user, isLoading } = useQuery({
    ...getAccountProfile(walletAddress),
    enabled: !!walletAddress,
  })

  // Using client-side only rendering to avoid hydration mismatch
  const isClient = useClientOnly()

  return (
    <AuthContainer>
      <div className="flex gap-2">
        {isClient && user ? (
          <UserWallets
            user={user}
            wallet={wallets[0].address}
            disconnect={() =>
              disconnect(wallets[0].provider as Web3Wallet.Providers)
            }
          />
        ) : (
          <LucideIcon icon="Loader2" className="animate-spin" />
        )}
      </div>
    </AuthContainer>
  )
}
