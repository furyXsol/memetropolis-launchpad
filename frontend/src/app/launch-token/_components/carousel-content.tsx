import { useQuery } from '@tanstack/react-query'
import CustomizedImage from '@/components/customized-image'
import Marquee from '@/components/ui/marquee'
import { convertToCurrency } from '@/core/utils/format-number'
import { getTokenTopMarketCapList } from '@/core/services/_api/use-token'
import { Token } from '@/core/types/token'
import TopArrow from '../../../../public/assets/img/home/top/top-arrow-up.svg'
import { Skeleton } from '@/components/ui/skeleton'

const INIT_SUPPLY = 200_000

const CarouselBox = ({
  token,
  isLoading,
}: {
  token?: Token
  isLoading?: boolean
}) => {
  if (isLoading) {
    return (
      <div className="relative flex h-[83px] w-[468px] items-center justify-around bg-[url('/assets/img/header/carousel-bg.svg')] bg-cover bg-center bg-no-repeat px-4 pb-2 text-xs md:text-base">
        <Skeleton className="size-[28px] rounded-full" />
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-16" />
      </div>
    )
  }

  const percentSold =
    (Number(token?.tokenSold) / (Number(token?.totalSupply) - INIT_SUPPLY)) *
    100
  const formattedPercent = percentSold.toFixed(2)

  return (
    <div className="relative flex h-[83px] w-[468px] items-center justify-around bg-[url('/assets/img/header/carousel-bg.svg')] bg-cover bg-center bg-no-repeat px-4 pb-2 text-xs md:text-base">
      <p className="flex items-center gap-2">
        <CustomizedImage
          image={token?.image}
          fallbackImage="/assets/img/home/top/top-super-fwog.svg"
          className="size-[28px] rounded-full"
        />
        {token?.symbol}
      </p>
      <p className="flex items-center gap-1">
        {formattedPercent}%
        <TopArrow className={'size-3'} />
      </p>
      <p>${convertToCurrency(Number(token?.marketcap))}</p>
    </div>
  )
}

const CarouselContent = () => {
  const { data: tokenDetails, isLoading } = useQuery(
    getTokenTopMarketCapList(3),
  )

  return (
    <div className="mx-auto flex w-full max-w-[720px] flex-col items-center gap-4 md:max-w-[1380px] md:flex-row">
      <Marquee pauseOnHover className="[--duration:20s]">
        {isLoading
          ? [...Array(3)].map((_, index) => (
              <div
                key={index}
                className="relative h-[35px] w-[240px] md:h-[70px] md:w-[460px]"
              >
                <CarouselBox isLoading={true} />
              </div>
            ))
          : tokenDetails &&
            tokenDetails.map((token, index) => {
              return (
                <div
                  key={index}
                  className="relative h-[35px] w-[240px] md:h-[70px] md:w-[460px]"
                >
                  <CarouselBox token={token} />
                </div>
              )
            })}
      </Marquee>
    </div>
  )
}

export default CarouselContent
