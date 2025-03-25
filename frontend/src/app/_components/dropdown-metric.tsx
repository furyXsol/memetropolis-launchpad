'use client'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const options = [
  { value: 'all', label: 'Sort By Metric' },
  { value: 'volume', label: 'Volume' },
  { value: 'marketCapAggregate', label: 'Market Cap Aggregate' },
  { value: 'marketCapPerChain', label: 'Market Cap Per Chain' },
  { value: 'priceChange', label: 'Price Change %' },
  { value: 'txns', label: 'Txns' },
  { value: 'holders', label: 'Holders' },
  { value: 'liquidity', label: 'Liquidity' },
  { value: 'launchDate', label: 'Launch Date' },
]

const DropdownMetric = ({
  metric,
  setMetric,
}: {
  metric: string
  setMetric: (metric: string) => void
}) => {
  return (
    <Select defaultValue="all" value={metric} onValueChange={setMetric}>
      <SelectTrigger className="flex w-full items-center border border-accent md:w-[290px]">
        <SelectValue placeholder="Select Metric" />
      </SelectTrigger>
      <SelectContent className="border border-accent bg-primary">
        <SelectGroup>
          {options.map((option, index) => (
            <div key={option.value}>
              <SelectItem
                value={option.value}
                className="cursor-pointer hover:bg-secondary"
              >
                {option.label}
              </SelectItem>
              {/* Add separator except after the last item */}
              {index < options.length - 1 && (
                <hr className="border-secondary" />
              )}
            </div>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default DropdownMetric
