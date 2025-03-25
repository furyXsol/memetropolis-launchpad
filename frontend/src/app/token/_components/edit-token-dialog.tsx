import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useWallet } from '@/core/hooks/use-wallet'
import ImageInput from '@/components/ui/image-input'
import { useUpdateTokenInfo } from '@/core/services/_api/token/use-update'
import { useUploadPinata } from '@/core/services/images/use-upload-pinata'
import Image from 'next/image'

const EditTokenSchema = z.object({
  facebook: z.union([z.literal(''), z.string().trim().url()]),
  x: z.union([z.literal(''), z.string().trim().url()]),
  linkedin: z.union([z.literal(''), z.string().trim().url()]),
  banner: z.string().optional(),
  description: z.string().optional(),
})

type EditTokenFormData = z.infer<typeof EditTokenSchema>

interface EditTokenDialogProps {
  tokenSocials: string
  banner: string
  description: string
  chainId: string
  address: string
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

const EditTokenDialog: React.FC<EditTokenDialogProps> = ({
  tokenSocials,
  banner,
  description,
  chainId,
  address,
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const { wallets } = useWallet()
  const { mutate: updateTokenInfoMutation, isPending } = useUpdateTokenInfo()
  const { mutateAsync: uploadToPinataAsync, isPending: isUploading } =
    useUploadPinata()

  const form = useForm<EditTokenFormData>({
    resolver: zodResolver(EditTokenSchema),
  })

  useEffect(() => {
    const socials = JSON.parse(tokenSocials)
    const formValues: EditTokenFormData = {
      facebook: socials?.facebook || '',
      x: socials?.x || '',
      linkedin: socials?.linkedin || '',
      banner: banner,
      description: description,
    }

    form.reset(formValues)
  }, [tokenSocials, banner, description, form])

  const onSubmit = async (data: EditTokenFormData) => {
    let imageUrl = data.banner
    if (selectedFile) {
      try {
        // Upload image to IPFS using Pinata
        imageUrl = await uploadToPinataAsync(selectedFile)
      } catch (error) {
        toast.error('Failed to upload image to IPFS')
        return
      }
    }

    // Update the profile using the new useUpdate function
    updateTokenInfoMutation(
      {
        data: {
          chainId: chainId,
          tokenAddress: address,
          facebook: data.facebook,
          x: data.x,
          linkedin: data.linkedin,
          banner: imageUrl,
          description: data.description,
        },
        address: wallets[0].address,
      },
      {
        onSuccess: (response) => {
          onSuccess()
          toast.success(
            response.message || 'Token Profile updated successfully!',
          )
        },
        onError: (error) => {
          toast.error('Failed to update token profile')
          console.error(error)
        },
      },
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]" aria-describedby={undefined}>
        <DialogClose asChild>
          <button className="absolute right-4 top-4 z-[10] rounded-full bg-[#322C3A]">
            <Image
              src="/assets/img/launch-token/advanced/icon-close.svg"
              width={24}
              height={24}
              alt="Close dialog"
            />
          </button>
        </DialogClose>
        <DialogTitle>Edit Token Info</DialogTitle>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="banner"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative flex min-h-32 min-w-32 items-center justify-center rounded-lg bg-[#07040B] p-4">
                      <ImageInput
                        defaultImage={banner}
                        setFile={setSelectedFile}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="facebook"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Facebook</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="https://facebook.com/username"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="x"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>X {`(formerly Twitter)`}</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="https://x.com/username" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="linkedin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>LinkedIn</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="https://linkedin.com/in/username"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="Token description" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={isPending || isUploading}
              loading={isPending || isUploading}
              borderColor="border-accent"
              className="group relative h-[60px] w-full overflow-hidden rounded-none border border-accent bg-accent font-medium text-[#110A1A]"
            >
              {isPending ? 'Updating...' : 'Update Token Info'}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default EditTokenDialog
