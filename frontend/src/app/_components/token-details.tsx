import { useQuery } from '@tanstack/react-query'
import { getTokenDetails } from '@/core/services/_api/use-token'
import Image from 'next/image'
import TradingDetailsRibbon from '../../../public/assets/img/icons/trading-details-ribbon.svg'

interface DetailCardProps {
  title: string
  value: string
  showArrow?: boolean
}

const DetailCard = ({ title, value, showArrow = false }: DetailCardProps) => {
  return (
    <div className="flex h-[93px] w-[194px] flex-col items-center justify-center bg-[url('/assets/img/project/token-details/background2.svg')] bg-cover">
      <div className="mb-2 text-sm text-gray-400">{title}</div>
      <div className="text-lg font-semibold text-white">
        {value}
        {showArrow && (
          <span className="ml-2 inline-block text-green-500">▼</span>
        )}
      </div>
    </div>
  )
}

interface TokenDetailsProps {
  tokenAddress: string
  chainId: string
}

const TokenDetails = ({ tokenAddress, chainId }: TokenDetailsProps) => {
  const { data: tokenDetails, isLoading } = useQuery(
    getTokenDetails(chainId, tokenAddress),
  )

  if (isLoading) {
    return (
      <div className="flex h-[283px] w-[510px] items-center justify-center">
        <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-[#FFFAFF]"></div>
      </div>
    )
  }

  if (!tokenDetails) {
    return <div>Error loading token details</div>
  }

  return (
    <div className="relative mx-auto flex min-h-[283px] flex-col items-center justify-center rounded-lg bg-cover bg-center bg-no-repeat p-8 md:w-full md:max-w-[510px] md:bg-[url('/assets/img/project/token-details/background1.svg')]">
      <Image
        src="/assets/img/project/token-details/mobile-top.svg"
        width={150}
        height={150}
        alt="Token details ribbon"
        className="absolute right-0 top-0 block md:hidden"
      />
      <Image
        src="/assets/img/project/token-details/mobile-bottom.svg"
        width={150}
        height={150}
        alt="Token details ribbon"
        className="absolute bottom-0 left-0 block md:hidden"
      />
      <TradingDetailsRibbon className="absolute bottom-0 left-0 block h-[100px] w-[100px] md:hidden" />
      <p className="absolute -top-3 left-[10%] hidden gap-2 bg-[#110A1A] px-2 font-bold md:flex">
        Token details
        <TradingDetailsRibbon className="h-5 w-5" />
      </p>
      <p className="mb-8 flex gap-2 bg-[#110A1A] px-2 font-bold md:hidden">
        Token details
        <TradingDetailsRibbon className="h-5 w-5" />
      </p>
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2">
        <DetailCard
          title="Price (USD)"
          value={`$${tokenDetails.tokenPrice}`}
          showArrow={true}
        />
        <DetailCard title="Liquidity" value={`$${tokenDetails.liquidity}`} />
        <DetailCard title="FDV" value={`$${tokenDetails.fdv}`} />
        <DetailCard title="Marketcap" value={`$${tokenDetails.marketCap}`} />
      </div>
    </div>
  )
}

export default TokenDetails
