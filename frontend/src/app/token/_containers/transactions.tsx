import { useQuery } from '@tanstack/react-query'
import { getTransactionRecent } from '@/core/services/_api/use-transaction'
import { SUPPORT_CHAINS } from '@/core/constants/chains'
import { getTimeAgo } from '@/core/utils/format-date'
import React from 'react'
import { shortenAddress } from '@/core/utils'
import Image from 'next/image'

export const Transactions = ({
  chainId,
  tokenAddress,
}: {
  chainId: string
  tokenAddress: string
}) => {
  const { data: transactions, isLoading } = useQuery(
    getTransactionRecent(chainId, tokenAddress),
  )

  const currentChain = SUPPORT_CHAINS.find((c) => c.id === Number(chainId))

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-[#FFFAFF]"></div>
      </div>
    )
  }

  return (
    <>
      <h1 className="relative text-center font-hanson text-3xl font-bold uppercase text-[#FFFAFF] md:text-6xl">
        Transactions
      </h1>

      <div className="flex flex-col gap-8">
        <div className="flex w-full">
          <Image
            src="/assets/img/home/trader-ribbon-2.svg"
            width={300}
            height={50}
            alt="Trader ribbon"
            className="w-2/5"
          />
          <Image
            src="/assets/img/home/trader-ribbon-1.svg"
            width={300}
            height={50}
            alt="Trader ribbon"
            className="-ml-[10%] w-2/5"
          />
          <Image
            src="/assets/img/home/trader-ribbon-2.svg"
            width={300}
            height={50}
            alt="Trader ribbon"
            className="-ml-[10%] w-2/5 -scale-x-100"
          />
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full border-separate">
            <thead className="text-left text-[#999999]">
              <tr>
                <th className="min-w-[90px]">
                  <p className="flex gap-1">Date</p>
                </th>
                <th className="min-w-[50px]">
                  <p className="flex gap-1">Type</p>
                </th>
                <th className="min-w-[120px]">
                  <p className="flex gap-1">USD</p>
                </th>
                <th className="min-w-[100px]">
                  <p className="flex gap-1">
                    {currentChain?.nativeCurrency.symbol} amount
                  </p>
                </th>
                <th className="min-w-[100px]">
                  <p className="flex gap-1">Price</p>
                </th>
                <th className="min-w-[200px]">
                  <p className="flex gap-1">Address</p>
                </th>
                <th className="min-w-[40px]">
                  <p className="flex gap-1">TXN</p>
                </th>
              </tr>
            </thead>
            <tbody className="text-white">
              {transactions &&
                transactions.map((transaction, index) => (
                  <tr
                    key={index}
                    className={
                      transaction.type === 'buy'
                        ? 'text-[#00FFA3]'
                        : 'text-[#EC205E]'
                    }
                  >
                    <td className="py-2 text-[#928E96]">
                      {getTimeAgo(Number(transaction.blockTimestamp))}
                    </td>
                    <td>{transaction.type}</td>
                    <td>${transaction.ethAmountInUsd}</td>
                    <td>{transaction.ethAmount}</td>
                    <td>
                      $
                      {(
                        parseFloat(transaction.ethAmountInUsd) /
                        parseFloat(transaction.tokenAmount)
                      ).toFixed(5)}
                    </td>
                    <td>
                      <p className="flex items-center gap-1">
                        {transaction.address}
                      </p>
                    </td>
                    <td>
                      <div className="flex">
                        <a
                          href={`${currentChain?.blockExplorers?.default.url}/tx/${transaction.hash}`}
                          target="_blank"
                          className="underline"
                        >
                          {shortenAddress(transaction.hash)}
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <div className="flex w-full">
          <Image
            src="/assets/img/home/trader-ribbon-2.svg"
            width={300}
            height={50}
            alt="Trader ribbon"
            className="w-2/5 -scale-y-100"
          />
          <Image
            src="/assets/img/home/trader-ribbon-1.svg"
            width={300}
            height={50}
            alt="Trader ribbon"
            className="-ml-[10%] w-2/5 -scale-y-100"
          />
          <Image
            src="/assets/img/home/trader-ribbon-2.svg"
            width={300}
            height={50}
            alt="Trader ribbon"
            className="-ml-[10%] w-2/5 -scale-x-100 -scale-y-100"
          />
        </div>
      </div>
    </>
  )
}
