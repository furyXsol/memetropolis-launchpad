'use client'
import Link from 'next/link'
import { GlobeIcon, InstagramLogoIcon } from '@radix-ui/react-icons'
import { useQuery } from '@tanstack/react-query'
import { getTokenTopMarketCapList } from '@/core/services/_api/use-token'
import { convertToCurrency } from '@/core/utils/format-number'
import CustomizedImage from '@/components/customized-image'
import Image from 'next/image'
import XLogo from '../../../../public/assets/img/home/top/top-icon-x.svg'
import { Button } from '@/components/ui/button'
import TopArrow from '../../../../public/assets/img/home/top/top-arrow-up.svg'

const INIT_SUPPLY = 200_000

// A small spinner component for the token section
const SmallSpinner = () => (
  <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-t-2 border-[#FFFAFF]" />
)

const PageTop = () => {
  const { data: tokenDetails, isLoading } = useQuery(
    getTokenTopMarketCapList(1),
  )

  // Grab the first token if available
  const token = tokenDetails && tokenDetails.length > 0 ? tokenDetails[0] : null

  // If we do have a token, calculate the percentSold
  let formattedPercent: string | null = null
  if (token) {
    const percentSold =
      (Number(token.tokenSold) / (Number(token.totalSupply) - INIT_SUPPLY)) *
      100
    formattedPercent = percentSold.toFixed(2)
  }

  return (
    <div className="relative flex min-h-[40vh] w-full flex-col items-center justify-center gap-2">
      {/* Background Image */}
      <Image
        src="/assets/img/home/projects/portal_bg.png"
        alt="Portal Background"
        fill
        priority
        className="absolute left-0 top-0 z-[-1] h-full w-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 z-[-1] h-36 w-full bg-gradient-to-t from-background to-transparent"></div>
      <div className="absolute left-0 top-0 z-[-1] h-36 w-full bg-gradient-to-b from-background to-transparent"></div>

      {/* TOKEN SECTION */}
      <div className="z-[1] mt-8 flex h-11 w-1/2 items-center justify-around rounded-md bg-black p-4 text-xs">
        {isLoading || !token ? (
          <SmallSpinner />
        ) : (
          <>
            <div className="flex items-center gap-2">
              <CustomizedImage
                image={token.image}
                fallbackImage="/assets/img/home/top/top-super-fwog.svg"
                className="size-[28px] rounded-full"
              />
              {token.symbol}
            </div>
            <div className="flex gap-1">
              {formattedPercent}%
              <TopArrow className={'size-3'} />
            </div>
            <p>${convertToCurrency(Number(token.marketcap))}</p>
          </>
        )}
      </div>

      {/* HEADER SECTION */}
      <div className="z-[1] my-16 flex w-full flex-col items-center justify-center leading-none">
        <span className="font-hanson text-[10vw]">MEMETROPOLIS</span>
        <span className="text-center font-hanson text-lg uppercase md:text-3xl">
          Omnichain Token <span className="text-accent">Launchpad</span>
        </span>
      </div>

      {/* BUTTONS SECTION */}
      <div className="z-[1] mb-8 flex flex-col items-center justify-center gap-4 md:flex-row">
        <Link href="/launch-token">
          <Button
            borderColor="border-accent"
            className="group relative h-[60px] w-[200px] overflow-hidden rounded-md border border-accent bg-accent font-medium text-[#110A1A] md:w-[380px]"
          >
            <span className="relative z-10">Launch meme</span>
          </Button>
        </Link>
        <Button
          borderColor="border-white"
          className="h-[60px] w-[200px] rounded-md border bg-transparent font-medium text-[#FFFAFF] md:w-[380px]"
        >
          Track meme
        </Button>
      </div>

      {/* SOCIALS SECTION */}
      <div className="z-[1] flex h-full w-full flex-row items-center justify-center gap-4 p-6">
        <Link href="https://www.instagram.com/bookofdyor" target="_blank">
          <InstagramLogoIcon
            width={24}
            height={24}
            className="text-white transition duration-300 hover:text-accent"
          />
        </Link>
        <Link href="https://x.com/MEMETR0P0LIS" target="_blank">
          <XLogo className="stroke-white text-white transition duration-300 hover:stroke-accent" />
        </Link>
        <Link href="https://memetropolis.party" target="_blank">
          <GlobeIcon
            width={24}
            height={24}
            className="text-white transition duration-300 hover:text-accent"
          />
        </Link>
      </div>
    </div>
  )
}

export default PageTop
