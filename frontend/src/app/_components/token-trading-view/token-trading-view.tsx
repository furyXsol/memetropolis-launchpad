// import { TVChartContainer } from '@/components/TVChartContainer';
import dynamic from 'next/dynamic'
import { SUPPORT_CHAINS } from '@/core/constants/chains'

export interface TokenTradingViewProps {
  symbol: string
  chainId: number
  tokenAddress: string
}

const TVChartContainer = dynamic(
  () =>
    import('@/components/TVChartContainer').then((mod) => mod.TVChartContainer),
  { ssr: false },
)

export const TokenTradingView = ({
  symbol,
  chainId,
  tokenAddress,
}: TokenTradingViewProps) => {
  const currentChain = SUPPORT_CHAINS.find((c) => c.id === Number(chainId))

  return (
    <>
      {chainId > 0 && tokenAddress ? (
        <TVChartContainer
          symbol={symbol}
          chainId={chainId}
          tokenAddress={tokenAddress}
        />
      ) : (
        <></>
      )}
    </>
  )
}
