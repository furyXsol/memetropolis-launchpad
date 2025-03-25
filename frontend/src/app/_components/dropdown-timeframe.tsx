'use client'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const timeframes = [
  { value: 'all', label: 'Timeframe' },
  { value: '5min', label: 'Real time (5 minutes)' },
  { value: '1hr', label: '1 Hour' },
  { value: '3hr', label: '3 Hours' },
  { value: '6hr', label: '6 Hours' },
  { value: '12hr', label: '12 Hours' },
  { value: '7days', label: '7 Days' },
  { value: '30days', label: '30 Days' },
]

const DropdownTimeframe = ({
  timeframe,
  setTimeframe,
}: {
  timeframe: string
  setTimeframe: (timeframe: string) => void
}) => {
  return (
    <Select value={timeframe} onValueChange={setTimeframe}>
      <SelectTrigger className="flex w-full items-center border border-accent px-2 text-xs md:w-48">
        <SelectValue placeholder="Timeframe" />
      </SelectTrigger>
      <SelectContent className="border border-accent bg-primary">
        <SelectGroup>
          {timeframes.map((timeframe, index) => (
            <div key={timeframe.value}>
              <SelectItem
                value={timeframe.value}
                className="cursor-pointer hover:bg-secondary"
              >
                {timeframe.label}
              </SelectItem>
              {/* Add separator except after the last item */}
              {index < timeframes.length - 1 && (
                <hr className="border-secondary" />
              )}
            </div>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default DropdownTimeframe
