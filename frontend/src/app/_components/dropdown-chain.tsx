import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { SUPPORT_CHAINS } from '@/core/constants/chains'
import { getChainLogo } from '@/core/utils'
import Image from 'next/image'

const DropdownChain = ({
  chainId,
  setChainId,
}: {
  chainId: string
  setChainId: (chainId: string) => void
}) => {
  return (
    <Select defaultValue="all" value={chainId} onValueChange={setChainId}>
      <SelectTrigger className="flex w-full items-center border border-accent md:w-[290px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="border border-accent bg-primary">
        <SelectGroup>
          <SelectItem value="all" className="cursor-pointer hover:bg-secondary">
            <p className="flex gap-2">
              <Image
                src="/assets/img/home/projects/chain-all.svg"
                width={24}
                height={24}
                alt="All chains icon"
              />
              All chains
            </p>
          </SelectItem>
          {SUPPORT_CHAINS.map((chain) => {
            return (
              <div key={chain.id}>
                <hr className="border-secondary" />
                <SelectItem
                  value={chain.id.toString()}
                  className="cursor-pointer hover:bg-secondary"
                >
                  <p className="flex gap-2">
                    <Image
                      src={getChainLogo(chain.id)}
                      width={24}
                      height={24}
                      alt={`${chain.name} chain logo`}
                      className="h-6 w-6"
                    />
                    {chain.name}
                  </p>
                </SelectItem>
              </div>
            )
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default DropdownChain
