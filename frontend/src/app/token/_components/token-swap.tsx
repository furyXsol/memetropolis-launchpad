import React, { useState } from 'react'
import { toast } from 'react-toastify'

import { SwapTokenSchema } from '@/core/schemas/swap-token-schema'
import { CrosschainSwapTokenSchema } from '@/core/schemas/crosschain-swap-token-schema'
import { useSwapToken } from '@/core/services/_contract/evm/use-swap-token'
import { useSolanaSwapToken } from '@/core/services/_contract/solana/use-swap-token'
import { useCrosschainSwapToken } from '@/core/services/_contract/evm/use-crosschain-swap-token'

import { BuySellContent } from './buy-sell-content'
import { CorsschainContent } from './crosschain-content'
import { isAddress as isEvmAddress } from 'viem'
import { toggleConfetti } from "@/core/lib/confetti";

interface TokenSwapProps {
  tokenAddress: string
  tokenSymbol: string
  chainId: string
  onSwap: () => void
}

const tabs = ['Buy', 'Sell', 'Crosschain Swap'] as const
type TabType = (typeof tabs)[number]

export default function TokenSwap({
  tokenAddress,
  tokenSymbol,
  chainId,
  onSwap,
}: TokenSwapProps) {
  const [activeTab, setActiveTab] = useState<TabType>('Buy')

  const { mutate: swapTokenMutate, isPending: isSwapTokenPending } =
    useSwapToken()
  const { mutate: swapSolanaTokenMutate, isPending: isSwapSolanaTokenPending } =
    useSolanaSwapToken()

  const {
    mutate: crosschainSwapTokenMutate,
    isPending: crosschainSwapTokenIsPending,
  } = useCrosschainSwapToken()

  const onSwapSubmit = async (data: SwapTokenSchema) => {
    if (isEvmAddress(data.tokenAddress)) {
      swapTokenMutate(
        { data },
        {
          onSuccess: () => {
            onSwap()
            const action = data.sellBuyFlag === 'sell' ? 'Sold' : 'Bought'
            toggleConfetti()
            toast.success(`${action} ${data.tokenQty} Tokens Successfully!`)
          },
          onError: (e: any) => {
            toast.error(e.shortMessage)
          },
        },
      )
    } else {
      swapSolanaTokenMutate(
        { data },
        {
          onSuccess: () => {
            onSwap()
            const action = data.sellBuyFlag === 'buy' ? 'Bought' : 'Sold'
            toast.success(`${action} ${data.tokenQty} Tokens Successfully!`)
          },
          onError: (e: any) => {
            toast.error(e.shortMessage)
          },
        },
      )
    }
  }

  const onCrosschainSubmit = async (data: CrosschainSwapTokenSchema) => {
    crosschainSwapTokenMutate(
      { data },
      {
        onSuccess: () => {
          onSwap()
          toast.success(`Crosschain swap Successful!`)
        },
        onError: (e: any) => {
          toast.error(e.shortMessage)
        },
      },
    )
  }

  return (
    <>
      <h1 className="relative text-center font-hanson text-3xl font-bold uppercase text-[#FFFAFF] md:text-6xl">
        Swap
      </h1>
      <div className='bg-none md:bg-[url("/assets/img/project/swap/background1.svg")] bg-cover px-4 md:px-[135px] pb-8 md:pb-[100px] pt-0 md:pt-[56px]'>
        <div className='flex flex-col items-center bg-none md:bg-[url("/assets/img/project/swap/background2.svg")] bg-cover pb-8 md:pb-[61px] pt-0 md:pt-[66px] min-h-auto md:min-h-[559px]'>
          <div className="mb-12 flex w-full md:w-auto rounded-full">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`h-[58px] w-[180px] flex-1 py-2 text-sm font-medium transition-all duration-300 ${activeTab === tab
                  ? 'border-2 border-white text-white'
                  : 'border border-[#605B66] text-[#605B66] hover:text-white'
                  } ${index === 0 ? 'rounded-l-full' : ''} ${index === tabs.length - 1 ? 'rounded-r-full' : ''} ${index !== 0 ? '-ml-px' : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab !== 'Crosschain Swap' ? (
            <BuySellContent
              activeTab={activeTab as 'Buy' | 'Sell'}
              tokenAddress={tokenAddress}
              chainId={chainId}
              onSubmit={onSwapSubmit}
              isPending={
                isEvmAddress(tokenAddress)
                  ? isSwapTokenPending
                  : isSwapSolanaTokenPending
              }
            />
          ) : (
            <CorsschainContent
              tokenAddress={tokenAddress}
              tokenSymbol={tokenSymbol}
              chainId={chainId}
              onSubmit={onCrosschainSubmit}
              isPending={crosschainSwapTokenIsPending}
            />
          )}
        </div>
      </div>
    </>
  )
}
