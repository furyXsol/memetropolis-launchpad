import React from 'react'
import { User } from 'lucide-react'
import Link from 'next/link'
import { formatUnits } from 'viem'
import CustomizedImage from '@/components/customized-image'
import { Socials } from '@/components/socials'
import { getTimeAgo } from '@/core/utils/format-date'
import { Token } from '@/core/types/token'
import { getChainLogo } from '@/core/utils'
import Image from 'next/image'

interface ProjectCardProps {
  hoverUrl: string
  token: Token
}

const ProjectCard = ({ hoverUrl, token }: ProjectCardProps) => {
  return (
    <div className="group relative cursor-pointer">
      <div
        className={`invisible absolute left-[-40px] top-[-40px] h-[calc(100%+80px)] w-[calc(100%+80px)] bg-cover bg-center bg-no-repeat group-hover:visible`}
        style={{
          backgroundImage: `url('${hoverUrl}')`,
        }}
      />
      <div className="relative min-w-[320px] bg-[url('/assets/img/home/spotlights/spotlights-background.svg')] bg-cover bg-center bg-no-repeat p-4 pl-8">
        <Link
          href={`/token/${token.address}?chain=${token.chainId}&symbol=${token.symbol}`}
        >
          <Image
            src={getChainLogo(token.chainId)}
            className="absolute right-[10px] top-[-10px] h-7 w-7"
            alt={`Chain: ${token.chainId}`}
            width={28}
            height={28}
          />
          <div className="flex items-center gap-2">
            <CustomizedImage
              image={token.image}
              fallbackImage="/assets/img/logo.png"
              className="size-[60px] rounded-full"
            />
            <div className="flex flex-col gap-[6px]">
              <p className="text-sm font-semibold text-[#8A8A8A]">
                {getTimeAgo(token.creationTimestamp)}
              </p>
              <p>{token.name}</p>
              <p className="text-sm font-semibold text-white">
                Total Supply:{' '}
                {Number(
                  formatUnits(BigInt(token.totalSupply), token.decimals),
                ).toLocaleString()}
              </p>
            </div>
          </div>
          <hr className="my-[10px] border-[#FFFFFF33]" />
        </Link>
        <div className="flex items-center justify-between">
          <Socials social={token.socials} />
          <p className="flex gap-2 text-sm text-[#DEDEDE]">
            <CustomizedImage
              image={token.ownerImage}
              fallbackImage={<User className="size-5" />}
              className="size-[20px] rounded-full"
            />
            Created By
            <Link href={`/profile/${token.owner}`}>
              <span className="underline underline-offset-4">
                {token.ownerName}
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
