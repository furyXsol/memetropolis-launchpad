import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import CopyButton from '@/app/profile/[address]/_components/copy-button'
import EditProfileDialog from '@/app/profile/[address]/_components/edit-profile-dialog'
import Tier from '@/app/profile/[address]/_components/tier'
import { Button } from '@/components/ui/button'
import { Socials } from '@/components/socials'
import { shortenAddress, getChainLogo } from '@/core/utils'
import { getAccountProfile } from '@/core/services/_api/use-account'
import Image from 'next/image'
import {
  WalletIcon,
  EditIcon,
  SquareRightIcon,
} from '@/components/profile-icons'

export const ProfileSummary = ({
  address,
  isConnectedWallet,
}: {
  address: string
  isConnectedWallet: boolean
}) => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const { data: user, isLoading } = useQuery({
    ...getAccountProfile(address),
    enabled: !!address,
  })

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-[#FFFAFF]"></div>
      </div>
    )
  }

  return (
    <>
      <div className="relative mt-[50px] flex w-full flex-col gap-6 border-accent bg-[url('/assets/img/profile/summary/background.svg')] bg-cover pb-16 pt-32 text-white md:mt-[200px] md:border-l-2 md:bg-primary md:py-28">
        <div className="absolute left-0 top-1/2 hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent md:block"></div>

        <div className="absolute left-[50px] top-0 hidden h-[40px] w-[124px] -translate-y-1/2 rounded-full bg-background md:block"></div>
        <div className="absolute bottom-0 left-[20px] flex h-[34px] w-[114px] translate-y-1/2 items-center justify-around rounded-full bg-[url('/assets/img/profile/summary/social-background.png')] bg-cover md:left-[55px] md:top-0 md:-translate-y-1/2">
          {user?.socials && <Socials social={user?.socials} />}
        </div>

        {user && user.image ? (
          <Image
            src={user.image}
            width={100}
            height={100}
            alt="User profile image"
            className="absolute left-1/2 top-[50px] w-[100px] -translate-x-1/2 rounded-full md:top-0 md:w-[14%] md:-translate-y-[calc(50%-15px)]"
          />
        ) : (
          <Image
            src="/assets/img/profile/summary/avatar.svg"
            width={100}
            height={100}
            alt="Default avatar"
            className="absolute left-1/2 top-[50px] w-[100px] -translate-x-1/2 rounded-full md:top-0 md:w-[18%] md:-translate-y-[calc(50%-15px)]"
          />
        )}

        <div className="absolute right-0 top-0 hidden -translate-y-1/2 items-center gap-6 bg-[url('/assets/img/profile/summary/wallet-address-bg.png')] bg-cover p-2 pl-16 md:flex">
          <div className="flex items-center space-x-2">
            <WalletIcon className="h-5 w-5" />
            <span className="flex items-center gap-1">
              <Image
                src={getChainLogo(1)}
                width={20}
                height={20}
                className="size-5"
                alt={`Chain: ${1}`}
              />
              {shortenAddress(address)}
            </span>
          </div>
          <CopyButton textToCopy={address} />
        </div>

        <div className="flex flex-col items-center space-y-2">
          <h1 className="mt-5 flex items-center gap-[10px] text-2xl font-semibold">
            <span>{user?.username || user?.name} </span>
            <Tier tier={user?.tier || 0} />
            {isConnectedWallet && (
              <button
                className="ml-1"
                onClick={() => setIsEditDialogOpen(true)}
              >
                <EditIcon className="h-4 w-4" />
              </button>
            )}
          </h1>
          <p className="flex gap-2 text-[#B5B3B8]">
            @{user?.name}{' '}
            {/*<img
              src="/assets/img/profile/summary/icons_copy.svg"
              className="cursor-pointer"
            />*/}
          </p>
        </div>

        {/*<div className="flex justify-center space-x-6">
        <div className="text-center">
          <div className="font-medium">4500</div>
          <div className="text-sm text-[#E8E8E8]">Followers</div>
        </div>
        <div className="text-center">
          <div className="font-medium">1134</div>
          <div className="text-sm text-[#E8E8E8]">Following</div>
        </div>
        <div className="text-center">
          <div className="font-medium">1134</div>
          <div className="text-sm text-[#E8E8E8]">Likes</div>
        </div>
      </div>*/}

        <div className="flex flex-col items-center space-y-4">
          <Button
            borderColor="border-accent"
            className={
              'group relative h-[40px] w-[200px] overflow-hidden rounded-none border border-accent bg-accent md:h-[60px] md:w-[380px]'
            }
          >
            <span className="relative z-10 font-medium text-[#110A1A]">
              + Follow
            </span>
          </Button>

          <p className="text-sm text-[#B5B3B8]">{user?.bio}</p>
        </div>

        <div className="absolute bottom-0 left-1/2 hidden h-[120px] w-[120px] -translate-x-1/2 translate-y-1/2 rounded-3xl bg-background md:block"></div>
        <Image
          src="/assets/img/profile/summary/qr-code.svg"
          width={240}
          height={240}
          alt="QR Code"
          priority
          className="absolute bottom-0 left-1/2 hidden h-[240px] w-[240px] -translate-x-1/2 translate-y-1/2 md:block"
        />

        <SquareRightIcon className="absolute bottom-0 right-0" />

        <EditProfileDialog
          user={user}
          address={address}
          isOpen={isEditDialogOpen}
          onClose={() => setIsEditDialogOpen(false)}
          onSuccess={() => setIsEditDialogOpen(false)}
        />
      </div>
      <div className="flex items-center gap-6 rounded-3xl bg-black px-8 py-2 md:hidden">
        <div className="flex items-center space-x-2">
          <WalletIcon className="h-5 w-5" />
          <span className="flex items-center gap-1">
            <Image
              src={getChainLogo(1)}
              width={20}
              height={20}
              className="h-4 w-4"
              alt={`Chain: ${1}`}
            />
            {shortenAddress(address)}
          </span>
        </div>
        <CopyButton textToCopy={address} />
      </div>
    </>
  )
}
