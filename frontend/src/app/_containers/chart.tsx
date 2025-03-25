'use client'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import AutocompleteSearchToken from '../_components/autocomplete-search-token'
import DropdownSort from '../_components/dropdown-sort'
import { TokenTradingView } from '../_components/token-trading-view/token-trading-view'
import { getTokenListByCategory } from '@/core/services/_api/use-token'
import { useState } from 'react'
import { Token } from '@/core/types/token'
import SearchLogo from '../../../public/assets/img/home/charts/chart-search.svg'

enum ActiveTab {
  SortTab,
  SearchTab,
}

export const Charts = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>(ActiveTab.SortTab)
  const [category, setCategory] = useState('hot')
  const [selectedToken, setSelectedToken] = useState<Token | null>(null)
  const queryClient = useQueryClient()
  const { data: categoryTokens, isLoading } = useQuery(
    getTokenListByCategory(category),
  )
  const filteredCategoryTokens = categoryTokens
    ?.filter(
      (token) =>
        token.symbol &&
        token.chainId &&
        token.address &&
        token.transferCount !== '0',
    )
    .slice(0, 4)
  const countTokens = filteredCategoryTokens?.length ?? 0
  const onSortChange = async (value: string) => {
    setCategory(value)
    await queryClient.invalidateQueries({
      queryKey: ['GET_TOKEN_LIST_BY_CATEGORY'],
    })
    setActiveTab(ActiveTab.SortTab)
  }

  const onSearchBoxSelect = (token: Token | null) => {
    setSelectedToken(token)
    if (token !== null) {
    setActiveTab(ActiveTab.SearchTab)
    } else {
      setActiveTab(ActiveTab.SortTab)
    }
  }

  return (
    <div className="relative z-[1] mx-auto flex w-full max-w-7xl flex-col gap-4 px-4">
      <h1 className="text-center font-hanson text-3xl font-bold uppercase text-[#FFFAFF] md:text-6xl">
        Charts
      </h1>
      <div className="mb-8 flex flex-col items-center justify-center gap-4 md:flex-row">
        <div className="relative w-full md:w-[660px]">
          <AutocompleteSearchToken onSelect={onSearchBoxSelect} />
          <SearchLogo className="absolute left-4 top-[14px]" />
        </div>
        <DropdownSort onChange={onSortChange} />
      </div>
      <div className="-mx-3 flex flex-wrap">
        {isLoading &&
          Array.from({ length: 2 }).map((_, index) => (
            <div
              key={index}
              className="mb-6 flex min-h-[256px] w-full items-center justify-center px-3 lg:w-1/2"
            >
              <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-t-2 border-[#FFFAFF]"></div>
            </div>
          ))}
        {activeTab === ActiveTab.SortTab
          ? (filteredCategoryTokens ?? []).map((token, index) => (
              <div
                key={token.id}
                className={`mb-6 w-full px-3 md:${
                  countTokens < 2
                    ? 'w-full'
                    : countTokens < 3
                      ? 'w-full'
                      : countTokens < 4
                        ? index < 2
                          ? 'w-1/2'
                          : 'w-full'
                        : 'w-1/2'
                }`}
              >
                <div className="h-[400px]">
                  <TokenTradingView
                    symbol={token.symbol}
                    chainId={token.chainId}
                    tokenAddress={token.address.toString()}
                  />
                </div>
              </div>
            ))
          : selectedToken && (
              <div className="mb-6 w-full px-3">
                <div className="h-[400px]">
                  <TokenTradingView
                    symbol={selectedToken.symbol}
                    chainId={selectedToken.chainId}
                    tokenAddress={selectedToken.address}
                  />
                </div>
              </div>
            )}
      </div>
    </div>
  )
}
