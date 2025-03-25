'use client'

import React from 'react'

import ProfileDetails from './profile-details'
import { ProfileSummary } from '@/app/profile/[address]/_containers/profile-summary'
import { ReferFriendSection } from '@/app/profile/[address]/_containers/refer-friend-section'

import { useWallet } from '@/core/hooks/use-wallet'
import { useClientOnly } from '@/core/hooks/use-client-only'

const ProfilePageContainer = ({ address }: { address: string }) => {
  const { wallets, isConnected } = useWallet()
  // Using client-side only rendering to avoid hydration mismatch
  const isClient = useClientOnly()

  const isConnectedWallet =
    isClient && wallets[0]?.address.toLowerCase() === address.toLowerCase()

  // Display loading state during server render or initial client load
  if (!isClient) {
    return (
      <div className="flex h-[calc(100dvh-217px)] items-center justify-center">
        <div className="size-12 animate-spin rounded-full border-4 border-accent border-b-transparent"></div>
      </div>
    )
  }

  return (
    <>
      {!isConnected ? (
        <div className="flex h-[calc(100dvh-217px)] items-center justify-center">
          <p className="text-6xl">Connect Wallet to Continue</p>
        </div>
      ) : (
        <main className="flex h-full w-full flex-col items-center justify-between gap-20 pb-10 pt-28 md:gap-36 md:pb-28 2xl:gap-52 2xl:pt-40">
          <section className="mx-auto flex w-full max-w-[1300px] flex-col items-center gap-16 px-4">
            <ProfileSummary
              address={address}
              isConnectedWallet={isConnectedWallet}
            />
          </section>

          <section className="mx-auto flex w-full max-w-[1300px] flex-col items-center gap-16 px-4">
            <ProfileDetails
              address={address}
              isConnectedWallet={isConnectedWallet}
            />
          </section>

          {isConnectedWallet && (
            <section className="mx-auto hidden w-full max-w-[1300px] flex-col items-center gap-16 px-4 md:flex">
              <ReferFriendSection
                address={address}
                isConnectedWallet={isConnectedWallet}
              />
            </section>
          )}
        </main>
      )}
    </>
  )
}

export default ProfilePageContainer
