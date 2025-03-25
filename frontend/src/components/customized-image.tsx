'use client'
import React, { useState } from 'react'
import Image from 'next/image'

interface CustomizedImageProps {
  image?: string
  fallbackImage: string | React.ReactElement
  className?: string
}

const isValidImageUrl = (url?: string): boolean => {
  // Check if the URL is undefined, empty, or contains 'undefined' as part of the path
  // This specifically checks for gateway.pinata.cloud/ipfs/undefined which causes 403 errors
  return (
    !!url &&
    url.trim() !== '' &&
    !url.includes('/ipfs/undefined') &&
    !url.includes('/undefined')
  )
}

const CustomizedImage = ({
  image,
  fallbackImage,
  className = '',
}: CustomizedImageProps) => {
  const [imageError, setImageError] = useState(false)

  const showFallback = !isValidImageUrl(image) || imageError

  return (
    <>
      {!showFallback ? (
        <Image
          src={image as string}
          className={className}
          alt="custom"
          width={1024}
          height={1024}
          onError={() => setImageError(true)}
        />
      ) : typeof fallbackImage === 'string' ? (
        <Image
          width={512}
          height={512}
          src={fallbackImage}
          className={className}
          alt="fallback"
        />
      ) : (
        fallbackImage
      )}
    </>
  )
}

export default CustomizedImage
