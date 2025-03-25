'use client'

import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { getTokenList } from '@/core/services/_api/use-token'
import DropdownChain from '@/app/_components/dropdown-chain'
import DropdownCategory from '@/app/_components/dropdown-category'
import ProjectPortal from '@/app/_components/project-portal'
import Image from 'next/image'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import TokenDataTable from '../_components/token-data-table/TokenDataTable'
import DropdownTimeframe from '../_components/dropdown-timeframe'
import DropdownBonded from '../_components/dropdown-bonded'
import DropdownMetric from '../_components/dropdown-metric'
import DropdownMeta from '../_components/dropdown-meta'
import { Skeleton } from '@/components/ui/skeleton'

export default function TopProjects() {
  const [chainId, setChainId] = useState('all')
  const [timeframe, setTimeframe] = useState('5min')
  const [bonded, setBonded] = useState('all')
  const [metric, setMetric] = useState('all')
  const [meta, setMeta] = useState('all') // Meta state for filtering
  const [tableView, setTableView] = useState(false)

  const {
    data: tokens = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery(getTokenList(chainId, meta, bonded, metric))

  useEffect(() => {
    refetch()
  }, [chainId, meta, bonded, metric, refetch])

  return (
    <div className="relative flex w-full flex-col items-center gap-4 px-3">
      <h1 className="relative mt-4 text-center font-hanson text-lg font-bold uppercase md:text-2xl lg:text-5xl">
        SEARCH TRADERS AND TOKENS
        <Image
          width={60}
          height={60}
          alt="Title Ribbon"
          src="/assets/img/home/projects/title-ribbon.svg"
          className="absolute left-[-40px] top-[-30px] size-[60px] md:left-[-70px] md:top-[-60px] md:size-[104px]"
        />
        <Image
          width={60}
          height={60}
          alt="Title Ribbon"
          src="/assets/img/home/projects/title-ribbon.svg"
          className="absolute right-[-40px] top-[-30px] size-[60px] -scale-x-100 md:right-[-70px] md:top-[-60px] md:size-[104px]"
        />
      </h1>

      <div className="absolute bottom-0 left-0 z-[-1] h-36 w-full bg-gradient-to-t from-background to-transparent" />

      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-center space-x-2">
          <Label htmlFor="table-view" className="font-hanson text-lg font-bold">
            Portal View
          </Label>
          <Switch
            id="table-view"
            onCheckedChange={() => setTableView(!tableView)}
          />
          <Label htmlFor="table-view" className="font-hanson text-lg font-bold">
            Table View
          </Label>
        </div>
        <div className="flex items-center justify-center gap-4">
          {/* <DropdownTimeframe
            timeframe={timeframe}
            setTimeframe={setTimeframe}
          /> */}
          <DropdownBonded bonded={bonded} setBonded={setBonded} />
        </div>
        <div className="mb-8 flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row">
          <DropdownChain chainId={chainId} setChainId={setChainId} />
          <DropdownCategory />
          <DropdownMetric metric={metric} setMetric={setMetric} />
          <DropdownMeta meta={meta} setMeta={setMeta} />{' '}
          {/* Pass meta and setMeta */}
        </div>
      </div>

      {isError && (
        <div className="mt-2 text-red-500">
          There was an error: {String(error)}
        </div>
      )}
      {!tableView ? (
        <div className="relative flex w-5/6 flex-col items-center justify-center gap-4">
          {tokens.length === 0 && !isLoading ? ( // Show message if no tokens match
            <div className="relative mt-8 flex h-36 w-full items-center justify-between text-lg text-white lg:w-3/4">
              {/* Left image */}
              <Image
                width={87}
                height={175}
                src="/assets/img/home/projects/side_portal_2.png"
                alt="Decorative Left Frame"
                className=""
              />
              <span className="text-center text-xl">
                No tokens match your filter criteria.
              </span>
              {/* Right image (mirrored or same) */}
              <Image
                width={87}
                height={175}
                src="/assets/img/home/projects/side_portal_2.png"
                alt="Decorative Right Frame"
                className="-scale-x-100"
              />
            </div>
          ) : (
            [1, 2, 3].map((layer) => (
              <div
                key={layer}
                className="relative grid h-36 w-full grid-cols-5 items-center justify-center gap-4"
              >
                {isLoading ? (
                  <div className="col-span-5 flex justify-around">
                    <Skeleton className="size-24" />
                    <Skeleton className="size-24" />
                    <Skeleton className="size-24" />
                    <Skeleton className="size-24" />
                    <Skeleton className="size-24" />
                  </div>
                ) : (
                  tokens.slice((layer - 1) * 5, layer * 5).map(
                    (token, index) =>
                      token && (
                        <div
                          key={index}
                          className="relative scale-75 transform sm:scale-75 md:scale-100"
                        >
                          <ProjectPortal token={token} />
                        </div>
                      ),
                  )
                )}

                <div className="hidden md:block">
                  {/* Left image */}
                  <Image
                    width={87}
                    height={175}
                    src="/assets/img/home/projects/side_portal_2.png"
                    alt="Decorative Left Frame"
                    className="absolute -bottom-6 -left-14 scale-50 sm:scale-50 md:scale-75 lg:scale-100"
                  />

                  {/* Right image (mirrored or same) */}
                  <Image
                    width={87}
                    height={175}
                    src="/assets/img/home/projects/side_portal_2.png"
                    alt="Decorative Right Frame"
                    className="absolute -bottom-6 -right-14 scale-50 -scale-x-50 md:scale-75 md:-scale-x-75 lg:scale-100 lg:-scale-x-100"
                  />
                </div>
              </div>
            ))
          )}
        </div>
      ) : (
        <TokenDataTable tokens={tokens} />
      )}
    </div>
  )
}
