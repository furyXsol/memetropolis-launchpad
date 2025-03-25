'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import Image from 'next/image'
import { Token } from '@/core/types/token'

interface ProjectPortalProps {
  token: Token
}

const isValidImageUrl = (url?: string): boolean => {
  return (
    !!url &&
    url.trim() !== '' &&
    !url.includes('/ipfs/undefined') &&
    !url.includes('/undefined')
  )
}

const ProjectPortal = ({ token }: ProjectPortalProps) => {
  // Set default fallback image right away if image is invalid
  const [imgSrc, setImgSrc] = useState('/assets/img/logo.png')

  // Set image only if it's valid
  useEffect(() => {
    if (isValidImageUrl(token.image)) {
      setImgSrc(token.image)
    }
  }, [token.image])

  const altText = token.name
    ? `${token.name} Logo`
    : token.symbol
      ? `${token.symbol} Logo`
      : 'Project Logo'

  return (
    <Link
      href={`/token/${token.address}?chain=${token.chainId}&symbol=${token.symbol}`}
      className="flex cursor-pointer flex-col items-center justify-center"
    >
      {/* Wrapper Container */}
      <div className="relative flex h-[150px] w-[150px] flex-col items-center justify-center">
        {/* Project Image */}
        <motion.div
          whileHover={{
            y: [0, -10, 0],
            transition: { duration: 1.5, ease: 'easeInOut', repeat: Infinity },
          }}
          initial={{ y: 0 }}
          className="relative z-[2] h-[80px] w-[80px]"
        >
          <Image
            src={imgSrc}
            alt={altText}
            fill
            sizes="80px"
            onError={() => setImgSrc('/assets/img/logo.png')}
            className="rounded-3xl object-contain"
          />
        </motion.div>

        {/* Decorative Frame */}
        <div className="relative -z-[2] mt-[-20px] h-[80px] w-[80px]">
          <Image
            src="/assets/img/home/projects/project_portals2.png"
            alt="Decorative Project Portal Frame"
            fill
            sizes="50px"
            className="object-contain"
          />
        </div>
      </div>
    </Link>
  )
}

export default ProjectPortal
