import React, { useState } from 'react'
import Link from 'next/link'
import { User } from 'lucide-react'
import CustomizedImage from '@/components/customized-image'
import { Socials } from '@/components/socials'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { CopyAddress } from '@/app/token/_components/copy-address'
import { formatDate, getTimeAgo } from '@/core/utils/format-date'
import { Token } from '@/core/types/token'
import { useWallet } from '@/core/hooks/use-wallet'
import EditTokenDialog from '@/app/token/_components/edit-token-dialog'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { getChainLogo } from '@/core/utils'
import CalendarIcon from '../../../../public/assets/img/icons/calendar.svg'
import { EditIcon } from '@/components/profile-icons'

export default function TokenBanner({
  tokenDetails,
  tokenAddress,
  chainId,
  hideControls = false,
}: {
  tokenDetails: Token
  tokenAddress: string
  chainId: string
  hideControls?: boolean
}) {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const { wallets, isConnected } = useWallet()

  const onEditTokenSuccess = () => {
    setIsEditDialogOpen(false)
  }

  // Use currentHolderCount if available
  const communityCount = parseInt(tokenDetails.currentHolderCount || '0', 10)

  return (
    <section className="relative mx-auto min-h-[440px] w-full max-w-screen-xl">
      <CustomizedImage
        image={tokenDetails.banner}
        fallbackImage={'/assets/img/project/top/banner.png'}
        className="h-[440px] w-full rounded-3xl object-cover"
      />
      <div className="absolute left-[5%] top-0 flex -translate-y-1/2 gap-2 rounded-md bg-accent p-[10px] font-medium text-primary">
        <CalendarIcon className="h-4 w-4" />
        Launch date: {formatDate(tokenDetails.creationTimestamp)}
      </div>
      {tokenDetails.banner && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 480 480"
          fill="currentColor"
          className="absolute right-[20%] top-0 h-[80px] w-[80px] fill-background"
        >
          <path d="M0 0h230c138 0 250 112 250 250v230H250C112 480 0 368 0 230V0Z"></path>
        </svg>
      )}
      <div className="absolute right-0 top-0 hidden w-[25%] space-y-2 rounded-bl-3xl bg-background p-4 md:block">
        <div className="flex justify-between">
          <Link href={`/profile/${tokenDetails.owner}`}>
            <p className="flex items-center gap-2 underline underline-offset-4">
              <CustomizedImage
                image={tokenDetails.ownerImage}
                fallbackImage={<User className="size-5" />}
                className="size-[20px] rounded-full"
              />
              {tokenDetails.ownerName}
            </p>
          </Link>
          <p className="text-[#725AC1]">
            {getTimeAgo(tokenDetails.creationTimestamp)}
          </p>
        </div>
        <div className="flex justify-between">
          <Socials social={tokenDetails.ownerSocial} />
        </div>
      </div>
      <div className="absolute bottom-0 left-[50%] -translate-x-1/2 translate-y-1/3 md:left-[10%] md:translate-x-0">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <CustomizedImage
                image={tokenDetails.image}
                fallbackImage="/assets/img/project/top/token.svg"
                className="size-[130px] rounded-3xl"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-[220px] break-words text-white">
                {tokenDetails.description}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="flex items-center">
          <p className="text-lg font-semibold">${tokenDetails.symbol}</p>
          {isConnected &&
            tokenDetails.owner.toLowerCase() ===
              wallets[0].address.toLowerCase() && (
              <button
                className="ml-1"
                onClick={() => setIsEditDialogOpen(true)}
              >
                <EditIcon className="h-4 w-4" />
              </button>
            )}
        </div>
        <p className="text-[#928E96]">{tokenDetails.name}</p>
        <div className="flex items-center space-x-4">
          <Socials social={tokenDetails.socials} />
        </div>
      </div>
      <div className="relative hidden md:block">
        <CopyAddress address={tokenAddress} />
      </div>

      <EditTokenDialog
        tokenSocials={tokenDetails.socials}
        banner={tokenDetails.banner}
        description={tokenDetails.description}
        chainId={chainId}
        address={tokenAddress}
        isOpen={isEditDialogOpen}
        onClose={() => setIsEditDialogOpen(false)}
        onSuccess={() => onEditTokenSuccess()}
      />

      {/* <div className="absolute bottom-0 flex -translate-y-[40%] gap-2 rounded-md bg-accent p-[10px] font-medium text-primary sm:left-[5%]">
        <Image
          src="/assets/img/icons/bi_people-fill.svg"
          width={16}
          height={16}
          alt="People icon"
        />
        Community: {communityCount.toLocaleString()}
      </div> */}

      {hideControls ? null : (
        <div className="ms:justify-start ms:pb-0 flex justify-end pb-2">
          <Link
            href={`https://block-explorer.memetropolis.xyz/address/${tokenDetails.address}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="secondary"
              className="size-[30px] p-0 md:size-[40px] md:px-0"
              type="button"
            >
              <Image
                src={getChainLogo(tokenDetails.chainId)}
                width={24}
                height={24}
                alt={`${tokenDetails.chainId} chain logo`}
              />
            </Button>
          </Link>
        </div>
      )}
    </section>
  )
}
