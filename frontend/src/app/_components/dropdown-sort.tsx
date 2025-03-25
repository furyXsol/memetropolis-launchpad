import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export interface TokenTradingViewProps {
  onChange: (value: string) => void
}

const DropdownSort = ({
  onChange,
}: TokenTradingViewProps) => {
  return (
    <Select defaultValue="hot" onValueChange={onChange}>
      <SelectTrigger className="flex w-full items-center border border-accent md:w-[290px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="border border-accent bg-primary">
        <SelectGroup>
          <SelectItem
            value="hot"
            className="cursor-pointer hover:bg-secondary"
          >
            Hottest Tokens
          </SelectItem>
          <hr className="border-secondary" />
          <SelectItem
            value="new"
            className="cursor-pointer hover:bg-secondary"
          >
            Newest Tokens
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default DropdownSort
