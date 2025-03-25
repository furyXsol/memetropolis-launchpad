import React, { useState } from 'react'
import { cn } from '@/core/lib/utils'
import { IconClose } from '@/components/icons'
import Image from 'next/image'

type ImageInputProps = {
  defaultImage: string
  className?: string
  previewClassName?: string
  setFile: (file: File | null) => void
}

export default function ImageInput({
  defaultImage,
  className,
  previewClassName,
  setFile,
}: ImageInputProps) {
  const [imagePreview, setImagePreview] = useState(defaultImage)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <>
      {imagePreview ? (
        <Image
          src={imagePreview}
          alt="Profile"
          width={96}
          height={96}
          className={cn(
            'h-24 w-full rounded-lg object-cover',
            previewClassName,
          )}
        />
      ) : (
        <Image
          src="/assets/img/launch-token/icon-file-upload.svg"
          alt="File upload"
          width={48}
          height={48}
          className={cn('h-12 w-12 rounded-lg object-cover', className)}
        />
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
        id="profile-image"
      />
      <label
        htmlFor="profile-image"
        className="absolute h-20 w-20 cursor-pointer"
      ></label>
      {imagePreview && (
        <IconClose
          className="absolute -right-1 -top-1 cursor-pointer rounded-full fill-white stroke-white"
          onClick={() => {
            setImagePreview('')
            setFile(null)
          }}
        />
      )}
    </>
  )
}
