'use client'

import React from 'react'
import { useWallet } from '@/core/hooks/use-wallet'
import { Button } from '@/components/ui/button'
import { useConnectWalletModalState } from '@/components/layout/connect-wallet'
import { useClientOnly } from '@/core/hooks/use-client-only'

export default function AuthContainer({
  children,
}: {
  children: React.ReactNode
}) {
  const { isConnected } = useWallet()
  const onOpenWalletConnectChange = useConnectWalletModalState(
    (s) => s.onOpenChange,
  )

  // Using client-side only rendering to avoid hydration mismatch
  const isClient = useClientOnly()

  // On first server render, show a placeholder loading state
  if (!isClient) {
    return (
      <div className="h-[60px] w-[150px] animate-pulse rounded-md bg-accent/30 md:w-[200px]"></div>
    )
  }

  if (!isConnected) {
    return (
      <Button
        borderColor="border-accent"
        onClick={() => onOpenWalletConnectChange(true)}
        className="h-[60px] w-[150px] overflow-hidden border border-accent bg-accent font-medium text-[#110A1A] md:w-[200px]"
      >
        Connect wallet
      </Button>
    )
  }

  return children
}
