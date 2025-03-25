'use client'

import { useClientOnly } from '@/core/hooks/use-client-only'
import { RemixIcon } from '@/components/ui/remix-icon'
import Link from 'next/link'
import { shortenAddress } from '@/core/utils'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useConnectWalletModalState } from '@/components/layout/connect-wallet'
import { Account } from '@/core/types/account'
import { BADGE_MAP } from '@/app/profile/[address]/_components/tier'
import React from 'react'
import Image from 'next/image'

type UserWalletsType = {
  user: Account
  wallet: string
  disconnect: () => void
}

export function UserWallets({ user, wallet, disconnect }: UserWalletsType) {
  const onOpenConnectWallet = useConnectWalletModalState((s) => s.onOpenChange)
  // Using client-side only rendering to avoid hydration mismatch with badges and images
  const isClient = useClientOnly()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          aria-label="Open wallet details"
          className="relative flex h-[inherit] w-[250px] justify-between gap-2 rounded-full bg-[#0F0918] px-2"
        >
          {isClient && (
            <div className="absolute top-2 size-5">
              {BADGE_MAP[user.tier || 0]}
            </div>
          )}
          {isClient && user.image ? (
            <Image
              src={user.image}
              width={60}
              height={60}
              alt={`${user.username || user.name || 'User'}'s profile picture`}
              className="size-[60px] rounded-full"
            />
          ) : (
            <Image
              src="/assets/img/menu-profile/mock-profile.svg"
              width={60}
              height={60}
              alt="Default profile picture"
              className="size-[60px] rounded-full"
            />
          )}
          <div className="flex flex-col items-start justify-start">
            <span>{user.username || user.name || 'Anonymous User'}</span>
            <span className="hidden text-[#B5B3B8] sm:block">
              {shortenAddress(wallet, 6, 8)}
            </span>
          </div>
          <RemixIcon icon="RiArrowDownSLine" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        align="start"
        sideOffset={8}
        className="ml-4 w-[220px] space-y-1 overflow-hidden border-none bg-[#0F0918] px-4 py-3"
      >
        {/* <span className="p-2">Connected Wallets</span> */}

        {/* {wallets.map(({ connector, displayName, provider }) => {
          return (
            <div
              className="flex h-10 items-center gap-2"
              key={`wallet-${provider}`}
            >
              <span className="flex-1">{displayName}</span>
              <button
                type="button"
                className="flex items-center justify-center"
                onClick={() => disconnect(provider as Web3Wallet.Providers)}
              >
                <RiLogoutCircleRLine className="text-state-error size-4" />
              </button>
            </div>
          )
        })} */}

        <Link href={`/profile/${wallet}`}>
          <Button className="w-full gap-2 border-0 bg-transparent p-0">
            <div className="flex size-[60px] items-center justify-center rounded-full bg-[#1B1727]">
              <Image
                src="/assets/img/menu-profile/mingcute_user-3-fill.svg"
                width={24}
                height={24}
                alt="User profile icon"
              />
            </div>
            <span className="inline-block flex-1 text-start">Profile</span>
          </Button>
        </Link>

        <Button
          className="w-full gap-2 border-0 bg-transparent p-0"
          onClick={() => onOpenConnectWallet(true)}
        >
          <div className="flex size-[60px] items-center justify-center rounded-full bg-[#1B1727]">
            <Image
              src="/assets/img/menu-profile/icons_reload.svg"
              width={24}
              height={24}
              alt="Reload icon"
            />
          </div>
          <span className="inline-block flex-1 text-start">Change wallet</span>
        </Button>

        <Button
          className="w-full gap-2 border-0 bg-transparent p-0"
          onClick={disconnect}
        >
          <div className="flex size-[60px] items-center justify-center rounded-full bg-[#1B1727]">
            <Image
              src="/assets/img/menu-profile/log-out-outline.svg"
              width={24}
              height={24}
              alt="Logout icon"
            />
          </div>
          <span className="inline-block flex-1 text-start text-[#FF4949]">
            Log out
          </span>
        </Button>
      </PopoverContent>
    </Popover>
  )
}
