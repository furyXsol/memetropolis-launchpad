import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const DropdownBonded = ({
  bonded,
  setBonded,
}: {
  bonded: string | undefined
  setBonded: (bonded: string) => void
}) => {
  return (
    <Select value={bonded} onValueChange={setBonded}>
      <SelectTrigger className="flex w-full items-center border border-accent px-2 text-xs md:w-48">
        <SelectValue placeholder="bonded" />
      </SelectTrigger>
      <SelectContent className="border border-accent bg-primary">
        <SelectGroup>
          <SelectItem value="all" className="cursor-pointer hover:bg-secondary">
            Bonded/Unbonded
          </SelectItem>
          <hr className="border-secondary" />
          <SelectItem
            value="bonded"
            className="cursor-pointer hover:bg-secondary"
          >
            Bonded
          </SelectItem>
          <hr className="border-secondary" />
          <SelectItem
            value="unbonded"
            className="cursor-pointer hover:bg-secondary"
          >
            Unbonded
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default DropdownBonded
