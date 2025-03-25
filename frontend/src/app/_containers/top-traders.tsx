'use client'

import { getAccountTopTraders } from '@/core/services/_api/use-account'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Link from 'next/link'
import { User } from 'lucide-react'
import CustomizedImage from '@/components/customized-image'
import Image from 'next/image'
import { Skeleton } from '@/components/ui/skeleton'

const TopTraders = () => {
  const { data: traders, isLoading } = useQuery(getAccountTopTraders())

  return (
    <div className="mx-auto flex w-full max-w-[1300px] flex-col items-center gap-16 px-3">
      <h1 className="relative text-center font-hanson text-3xl font-bold uppercase text-[#FFFAFF] md:text-6xl">
        top traders
        <Image
          src="/assets/img/home/top-traders/title-ribbon.svg"
          alt="Title Ribbon"
          width={90}
          height={90}
          className="absolute left-[-60px] top-[-60px] hidden md:block"
        />
      </h1>

      <div className="flex w-full flex-col gap-8">
        <div className="flex w-full">
          <Image
            src="/assets/img/home/trader-ribbon-2.svg"
            alt="Trader Ribbon"
            width={400}
            height={200}
            className="w-2/5"
          />
          <Image
            src="/assets/img/home/trader-ribbon-1.svg"
            alt="Trader Ribbon"
            width={400}
            height={200}
            className="-ml-[10%] w-2/5"
          />
          <Image
            src="/assets/img/home/trader-ribbon-2.svg"
            alt="Trader Ribbon"
            width={400}
            height={200}
            className="-ml-[10%] w-2/5 -scale-x-100"
          />
        </div>

        <div className="w-full max-w-full overflow-x-auto">
          <table className="w-full table-auto border-separate border-spacing-0">
            <thead className="text-left text-[#999999]">
              <tr>
                <th className="min-w-[90px] px-4 py-2 font-normal">Name</th>
                <th className="min-w-[120px] px-4 py-2 font-normal">
                  Volume Total
                </th>
                <th className="min-w-[200px] px-4 py-2 font-normal">
                  Volume Average Per Trade
                </th>
                <th className="min-w-[100px] px-4 py-2 font-normal">
                  Trades Per Week
                </th>
              </tr>
            </thead>
            <tbody className="text-white">
              {isLoading
                ? [...Array(10)].map((_, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2">
                        <Skeleton className="h-6 w-40" />
                      </td>
                      <td className="px-4 py-2">
                        <Skeleton className="h-6 w-24" />
                      </td>
                      <td className="px-4 py-2">
                        <Skeleton className="h-6 w-40" />
                      </td>
                      <td className="px-4 py-2">
                        <Skeleton className="h-6 w-20" />
                      </td>
                    </tr>
                  ))
                : traders &&
                  traders.map((trader, index) => {
                    return (
                      <tr key={index}>
                        <td className="px-4 py-2">
                          <Link
                            href={`/profile/${trader.address}`}
                            className="underline underline-offset-4"
                          >
                            <div className="flex items-center gap-2">
                              <CustomizedImage
                                image={trader.image}
                                fallbackImage={<User className="size-6" />}
                                className="h-6 w-6 rounded-full"
                              />
                              <span>{trader.name}</span>
                            </div>
                          </Link>
                        </td>
                        <td className="px-4 py-2">${trader.volumeTotal}</td>
                        <td className="px-4 py-2">
                          ${trader.volumeAveragePerTrade}
                        </td>
                        <td className="px-4 py-2">{trader.tradesPerWeek}</td>
                      </tr>
                    )
                  })}
            </tbody>
          </table>
        </div>

        <div className="flex w-full">
          <Image
            src="/assets/img/home/trader-ribbon-2.svg"
            alt="Trader Ribbon"
            width={400}
            height={200}
            className="w-2/5 -scale-y-100"
          />
          <Image
            src="/assets/img/home/trader-ribbon-1.svg"
            alt="Trader Ribbon"
            width={400}
            height={200}
            className="-ml-[10%] w-2/5 -scale-y-100"
          />
          <Image
            src="/assets/img/home/trader-ribbon-2.svg"
            alt="Trader Ribbon"
            width={400}
            height={200}
            className="-ml-[10%] w-2/5 -scale-x-100 -scale-y-100"
          />
        </div>
      </div>
    </div>
  )
}

export default TopTraders
