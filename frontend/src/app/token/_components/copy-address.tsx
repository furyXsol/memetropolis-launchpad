import React, { useState } from 'react'
import { copyToClipboard } from '@/core/utils/copy-to-clipboard'
import Image from 'next/image'
import CopyIcon from '../../../../public/assets/img/icons/copy.svg'

export const CopyAddress = ({ address }: { address: string }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    copyToClipboard(address).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    })
  }

  return (
    <div className="absolute bottom-0 right-[50%] min-w-fit translate-x-1/2 translate-y-1/2 rounded-md border-[3px] border-dashed border-[#8C8432] bg-background py-[5px] md:right-[5%] md:w-[39%] md:translate-x-0 md:px-[10px]">
      <button
        onClick={handleCopy}
        className="flex w-full gap-[10px] overflow-hidden text-[#B5B3B8]"
      >
        <CopyIcon className="h-4 w-4 flex-shrink-0" />
        <span className="hidden truncate md:block" title={address}>
          CA: {address}
        </span>
        <span className="block whitespace-nowrap md:hidden" title={address}>
          Copy contract address
        </span>
      </button>
    </div>
  )
}
