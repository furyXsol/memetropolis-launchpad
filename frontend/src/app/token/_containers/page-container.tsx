import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { useQuery } from '@tanstack/react-query'
import { getTokenByAddress } from '@/core/services/_api/use-token'
import TradingChat from '@/app/token/_containers/trading-chat'
import { CopyAddress } from '@/app/token/_components/copy-address'
import { Transactions } from '@/app/token/_containers/transactions'
import CarouselContent from '@/app/launch-token/_components/carousel-content'
import TokenDetails from '@/app/_components/token-details'
import { TradingDetails } from '@/app/token/_components/trading-details'
import TokenSwap from '@/app/token/_components/token-swap'
import TopTraders from '@/app/_containers/top-traders'
import Spotlights from '@/app/_containers/spotlights'
import TokenBanner from '@/app/token/_containers/token-banner'
import Image from 'next/image'
// import { TVChartContainer } from '@/components/TVChartContainer';

const TVChartContainer = dynamic(
  () =>
    import('@/components/TVChartContainer').then((mod) => mod.TVChartContainer),
  { ssr: false },
)

interface TokenPageProps {
  tokenAddress: string
  tokenSymbol: string
  chainId: string
}

export default function TokenPageContainer({
  tokenAddress,
  tokenSymbol,
  chainId,
}: TokenPageProps) {
  const { data: tokenDetails, isLoading } = useQuery(
    getTokenByAddress(chainId, tokenAddress),
  )
  const [, setTvchartUpdate] = useState(false)

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-[#FFFAFF]"></div>
      </div>
    )
  }

  if (!tokenDetails) {
    return <div>Error loading token details</div>
  }

  const onSwap = () => {
    setTvchartUpdate((tvChartUpdate) => !tvChartUpdate)
  }

  return (
    <main className="flex h-full w-full flex-col items-center justify-between gap-10 pb-10 pt-36 md:gap-36 md:pb-28 2xl:gap-52 2xl:pt-40">
      <div className="relative flex w-full flex-col gap-8 md:gap-16">
        <div className="hidden md:block">
          <CarouselContent />
        </div>

        <TokenBanner
          tokenDetails={tokenDetails}
          tokenAddress={tokenAddress}
          chainId={chainId}
        />

        <div className="relative mt-20 block md:hidden">
          <CopyAddress address={tokenAddress} />
        </div>

        <section className="mx-auto mt-20 flex w-full max-w-screen-xl flex-col justify-between gap-6 px-3 md:flex-row">
          <TokenDetails chainId={chainId} tokenAddress={tokenAddress} />
          <TradingDetails chainId={chainId} tokenAddress={tokenAddress} />
        </section>
      </div>

      <section className="mx-auto flex w-full max-w-screen-xl flex-col gap-4 px-3 md:gap-16">
        <TokenSwap
          tokenAddress={tokenAddress}
          tokenSymbol={tokenSymbol}
          chainId={chainId}
          onSwap={onSwap}
        />
      </section>

      <section className="mx-auto flex w-full max-w-screen-xl flex-col gap-4 px-3 md:gap-16">
        <h1 className="relative text-center font-hanson text-3xl font-bold uppercase text-[#FFFAFF] md:text-6xl">
          Chart
        </h1>
        <div className="h-[400px]">
          <TVChartContainer
            symbol={tokenDetails.symbol}
            chainId={tokenDetails.chainId}
            tokenAddress={tokenDetails.address}
          />
        </div>
      </section>

      <section className="mx-auto mt-28 flex w-full max-w-screen-xl flex-col gap-4 px-3 md:mt-0 md:gap-16">
        <Transactions chainId={chainId} tokenAddress={tokenAddress} />
      </section>

      <section className="mx-auto flex w-full max-w-screen-xl flex-col gap-4 px-3 md:gap-16">
        <TradingChat token={tokenDetails} />
      </section>

      <section className="mx-auto flex w-full max-w-screen-xl flex-col items-center gap-4 px-3 md:gap-16">
        <TopTraders />
      </section>

      <section className="relative w-full">
        <Image
          src="/assets/img/home/spotlights/bg-gradient-effect-tr.svg"
          width={439}
          height={494}
          alt="Top right gradient effect"
          className="absolute right-0 top-0 h-[494px] w-[439px] -translate-y-1/2"
        />
        <Image
          src="/assets/img/home/spotlights/bg-gradient-effect-bl.svg"
          width={439}
          height={494}
          alt="Bottom left gradient effect"
          className="absolute bottom-0 left-0 h-[494px] w-[439px] translate-y-1/2"
        />
        <Spotlights />
      </section>
    </main>
  )
}
