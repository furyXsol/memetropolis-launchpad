import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
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
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useUpdate } from '@/core/services/auth/update'
import { useUploadPinata } from '@/core/services/images/use-upload-pinata'
import { toast } from 'react-toastify'
import { Account } from '@/core/types/account'
import Image from 'next/image'

const editProfileSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  bio: z.string().max(150, 'Bio cannot exceed 150 characters'),
  image: z.string(),
  facebook: z.string().optional(),
  x: z.string().optional(),
  linkedin: z.string().optional(),
  telegram: z.string().optional(),
})

type EditProfileFormData = z.infer<typeof editProfileSchema>

interface EditProfileDialogProps {
  user: Account | undefined
  address: string
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

const EditProfileDialog: React.FC<EditProfileDialogProps> = ({
  user,
  address,
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [imagePreview, setImagePreview] = useState(user?.image)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const { mutate: updateProfile, isPending } = useUpdate(address)
  const { mutateAsync: uploadToPinataAsync, isPending: isUploading } =
    useUploadPinata()

  const form = useForm<EditProfileFormData>({
    resolver: zodResolver(editProfileSchema),
  })

  useEffect(() => {
    if (user) {
      form.setValue('name', user.name)
      form.setValue('bio', user.bio)
      form.setValue('image', user.image)
      form.setValue('facebook', user.socials?.facebook || '')
      form.setValue('x', user.socials?.x || '')
      form.setValue('linkedin', user.socials?.linkedin || '')
    }
  }, [user, form])

  const onSubmit = async (data: EditProfileFormData) => {
    let imageUrl = data.image
    if (selectedFile) {
      try {
        // Upload image to IPFS using Pinata
        imageUrl = await uploadToPinataAsync(selectedFile)
      } catch (error) {
        console.error('Error uploading to IPFS:', error)
        toast.error('Failed to upload image to IPFS')
        return
      }
    }

    // Update the profile using the new useUpdate function
    updateProfile(
      {
        name: data.name,
        bio: data.bio,
        image: imageUrl,
        facebook: data.facebook || '',
        x: data.x || '',
        linkedin: data.linkedin || '',
      },
      {
        onSuccess: (response) => {
          onSuccess()
          toast.success(response.message || 'Profile updated successfully!')
        },
        onError: (error) => {
          toast.error('Failed to update profile')
          console.error(error)
        },
      },
    )
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
        form.setValue('image', String(reader.result))
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-2xl border-none p-0"
        aria-describedby={undefined}
      >
        <div className="relative space-y-4 p-8">
          <Image
            src="/assets/img/launch-token/start-with-the-info/bg-gradient.svg"
            width={300}
            height={300}
            alt="Background gradient"
            className="absolute left-0 top-0"
          />
          <DialogClose asChild>
            <button className="absolute right-8 top-8 z-[10] rounded-full bg-[#322C3A]">
              <Image
                src="/assets/img/launch-token/advanced/icon-close.svg"
                width={24}
                height={24}
                alt="Close dialog"
              />
            </button>
          </DialogClose>
          <DialogTitle>
            <p className="text-2xl font-semibold text-white">Edit Profile</p>
            <p className="text-sm text-[#B5B3B8]">
              Customize your details as you like.
            </p>
          </DialogTitle>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="flex items-center gap-4">
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative flex min-h-32 min-w-32 items-center justify-center rounded-full bg-[#07040B]">
                          {imagePreview ? (
                            <Image
                              src={imagePreview}
                              alt="Profile"
                              width={128}
                              height={128}
                              className="size-full rounded-full object-cover"
                            />
                          ) : user?.image ? (
                            <Image
                              src={user.image}
                              alt="Profile"
                              width={128}
                              height={128}
                              className="size-full rounded-full object-cover"
                            />
                          ) : (
                            <Image
                              src="/assets/img/launch-token/icon-file-upload.svg"
                              alt="File upload"
                              width={48}
                              height={48}
                              className="h-12 w-12 rounded-full object-cover"
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
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="w-full space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Display Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="rounded-none border border-[#E8DA521A] bg-[#07040B] p-3 text-[#FFFAFF] outline-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex justify-between">
                          <p>Short bio</p>
                          <p className="text-sm font-medium text-[#928E96]">
                            {field.value?.length ?? 0}/150 chars
                          </p>
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            className="rounded-none border border-[#E8DA521A] bg-[#07040B] p-3 text-[#FFFAFF] outline-none"
                            maxLength={150}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
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
                          className="rounded-none border border-[#E8DA521A] bg-[#07040B] p-3 text-[#FFFAFF] outline-none"
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
                        <Input
                          {...field}
                          placeholder="https://x.com/username"
                          className="rounded-none border border-[#E8DA521A] bg-[#07040B] p-3 text-[#FFFAFF] outline-none"
                        />
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
                          className="rounded-none border border-[#E8DA521A] bg-[#07040B] p-3 text-[#FFFAFF] outline-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-end gap-4">
                <Button
                  type="button"
                  onClick={onClose}
                  showBorder
                  className="h-[48px] w-[180px] flex-1 border border-white bg-primary text-white"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isPending || isUploading}
                  className="h-[48px] w-[180px] flex-1 bg-accent text-black"
                >
                  Save changes
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default EditProfileDialog
