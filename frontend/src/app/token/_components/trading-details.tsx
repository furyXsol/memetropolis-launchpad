import { getTokenTradeInfoByAddress } from '@/core/services/_api/use-token'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useState } from 'react'
import TradingDetailsRibbon from '../../../../public/assets/img/icons/trading-details-ribbon.svg'

export interface TradingDetailsProps {
  chainId: string
  tokenAddress: string
}

export const TradingDetails = ({
  chainId,
  tokenAddress,
}: TradingDetailsProps) => {
  const { data: tokenTradeInfo } = useQuery(
    getTokenTradeInfoByAddress(chainId, tokenAddress),
  )

  return (
    <div className="relative flex h-[283px] w-full max-w-[510px] flex-col items-center justify-center rounded-lg bg-[url('/assets/img/project/token-details/background1.svg')] bg-cover p-8">
      <p className="absolute -top-3 left-[10%] flex gap-2 bg-[#110A1A] px-2 font-bold">
        Trading details
        <TradingDetailsRibbon className="h-5 w-5" />
      </p>
      <div className="space-y-4">
        <div className="grid grid-cols-4 gap-2 text-center">
          <div className="rounded bg-[#1E1E1E] p-2">
            <div className="text-sm font-semibold text-[#605B66]">5M</div>
            <div
              className={
                tokenTradeInfo && tokenTradeInfo.priceChange5m > 0
                  ? 'text-sm text-[#00FFA3]'
                  : 'text-sm text-[#EC205E]'
              }
            >
              {tokenTradeInfo ? Math.abs(tokenTradeInfo.priceChange5m) : 0}%
            </div>
          </div>
          <div className="rounded bg-[#1E1E1E] p-2">
            <div className="text-sm font-semibold text-[#605B66]">1H</div>
            <div
              className={
                tokenTradeInfo && tokenTradeInfo.priceChange1h > 0
                  ? 'text-sm text-[#00FFA3]'
                  : 'text-sm text-[#EC205E]'
              }
            >
              {tokenTradeInfo ? Math.abs(tokenTradeInfo.priceChange1h) : 0}%
            </div>
          </div>
          <div className="rounded bg-[#1E1E1E] p-2">
            <div className="text-sm font-semibold text-[#605B66]">6H</div>
            <div
              className={
                tokenTradeInfo && tokenTradeInfo.priceChange6h > 0
                  ? 'text-sm text-[#00FFA3]'
                  : 'text-sm text-[#EC205E]'
              }
            >
              {tokenTradeInfo ? Math.abs(tokenTradeInfo.priceChange6h) : 0}%
            </div>
          </div>
          <div className="rounded bg-[#1E1E1E] p-2">
            <div className="text-sm font-semibold text-[#605B66]">24H</div>
            <div
              className={
                tokenTradeInfo && tokenTradeInfo.priceChange24h > 0
                  ? 'text-sm text-[#00FFA3]'
                  : 'text-sm text-[#EC205E]'
              }
            >
              {tokenTradeInfo ? Math.abs(tokenTradeInfo.priceChange24h) : 0}%
            </div>
          </div>
        </div>
        <div className='bg-[url("/assets/img/project/trading-details/background1.svg")] bg-cover px-12 py-3'>
          <div className="grid grid-cols-3 gap-12 text-center">
            <div className="rounded p-2">
              <div className="text-sm text-gray-400">Txns</div>
              <div className="text-[#B5B3B8]">
                {tokenTradeInfo?.transactionCount}
              </div>
            </div>
            <div className="rounded p-2">
              <div className="text-sm text-gray-400">Volume</div>
              <div className="text-[#B5B3B8]">
                ${tokenTradeInfo?.volume.toFixed(2)}
              </div>
            </div>
            <div className="rounded p-2">
              <div className="text-sm text-gray-400">Makers</div>
              <div className="text-[#B5B3B8]">{tokenTradeInfo?.makerCount}</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex">
              <div className="h-2 w-3/5 rounded-full bg-[#00FFA3]"></div>
              <div className="h-2 w-2/5 rounded-full bg-[#E93A43]"></div>
            </div>
            <div className="flex justify-between text-sm text-[#605B66]">
              <div>
                <span className="">Buys: </span>
                <span className="">{tokenTradeInfo?.buyTokenAmount}</span>
              </div>
              <div>
                <span className="">Sell: </span>
                <span className="">{tokenTradeInfo?.sellTokenAmount}</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="text-[#FFFEEF]">
                ${tokenTradeInfo?.buyVolume.toFixed(2)}
              </div>
              <div className="text-[#FFFEEF]">
                ${tokenTradeInfo?.sellVolume.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
