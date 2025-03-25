import { useState, useEffect, useRef } from 'react'

import { useQuery } from '@tanstack/react-query'
import { getTokenList } from '@/core/services/_api/use-token'
import { Token } from '@/core/types/token'
import { SUPPORT_CHAINS } from '@/core/constants/chains'
import { shortenAddress } from '@/core/utils'
import ClearSvg from '../../../public/assets/img/icons/clear.svg'

export interface TokenTradingViewProps {
  onSelect: (token: Token | null) => void
}

const AutocompleteSearchToken = ({ onSelect }: TokenTradingViewProps) => {
  const { data: tokens } = useQuery(getTokenList('all', 'all', 'all', 'all'))

  const [inputValue, setInputValue] = useState('')
  const [filteredTokens, setFilteredTokens] = useState<Token[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (tokens && tokens.length > 0) {
      const filtered = tokens.filter(
        (token) =>
          token.name.toLowerCase().includes(inputValue.toLowerCase()) ||
          token.address.toLowerCase().includes(inputValue.toLowerCase()) ||
          token.symbol.toLowerCase().includes(inputValue.toLocaleLowerCase()),
      )
      setFilteredTokens(filtered)
    }
  }, [inputValue, tokens])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    setIsOpen(true)
  }

  const handleTokenSelect = (token: Token) => {
    setInputValue(token.name)
    setIsOpen(false)
    onSelect(token)
  }

  const handleClickOutside = (e: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={inputRef}>
      <input
        type="text"
        placeholder="Search token by name or address or symbol"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
        className="w-full bg-secondary py-3 pl-12 pr-6 text-[#FFFAFF] outline-none"
      />
      {isOpen && filteredTokens.length > 0 && (
        <ul className="absolute z-[100] mt-1 w-full rounded-sm bg-secondary shadow-lg">
          {filteredTokens.map((token, index) => (
            <li
              key={index}
              onClick={() => handleTokenSelect(token)}
              className="flex cursor-pointer items-center px-4 py-2 hover:bg-[#3D3D3D]"
            >
              <span className="text-[#FFFAFF]">
                {token.name} -{' '}
                {SUPPORT_CHAINS.find((c) => c.id === token.chainId)?.name} (
                {shortenAddress(token.address)})
              </span>
            </li>
          ))}
        </ul>
      )}
      <div
        className="absolute right-5 top-[14px] h-4 w-4 cursor-pointer"
        onClick={() => {
          setInputValue('')
          onSelect(null)
        }}
      >
        <ClearSvg />
      </div>
    </div>
  )
}

export default AutocompleteSearchToken
