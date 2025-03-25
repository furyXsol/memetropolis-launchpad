'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useForm, useWatch } from 'react-hook-form'
import { toast } from 'react-toastify'

import { useCreateToken } from '@/core/services/_contract/evm/use-create-token'
import {
  createTokenSchema,
  CreateTokenSchema,
} from '@/core/schemas/create-token-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { isAddress as isEvmAddress } from 'viem'
import { useCreateToken as useSolanaCreateToken } from '@/core/services/_contract/solana/use-create-token'
import { useWallet } from '@/core/hooks/use-wallet'
import { useUploadPinata } from '@/core/services/images/use-upload-pinata'
import { SUPPORT_CHAINS } from '@/core/constants/chains'
import {
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
  Tooltip,
} from '@/components/ui/tooltip'
import { useCreate } from '@/core/services/_api/token/use-create'
import { getChainLogo } from '@/core/utils'
import { TokenCreationAdvancedForm } from './token-creation-advanced-form'
import { metaCategories } from '@/core/constants/meta-categories'

export default function TokenCreationForm() {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const { mutateAsync: createTokenAsync, isPending: isCreatingToken } =
    useCreateToken()
  const { mutateAsync: createTokenApiAsync, isPending: isCreatingTokenApi } =
    useCreate()
  const { mutate: createSolanaToken, isPending: isSolanaTokenCreating } =
    useSolanaCreateToken()
  const { mutateAsync: uploadToPinataAsync, isPending: isUploading } =
    useUploadPinata()

  const router = useRouter()
  const { wallets, isConnected, chainId } = useWallet()
  const form = useForm<CreateTokenSchema>({
    resolver: zodResolver(createTokenSchema),
    defaultValues: {
      image: '',
      chain: '',
      jeetTax: 0,
      name: '',
      symbol: '',
      description: '',
      kyc: '',
      twitter: '',
      telegram: '',
      meta: 'all',
    },
  })

  const imageUrl = useWatch({ control: form.control, name: 'image' })

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        const imageDataUrl = reader.result as string
        form.setValue('image', imageDataUrl)
      }
      reader.readAsDataURL(file)
    }
  }

  const onSubmit = async (_data: CreateTokenSchema) => {
    let imageUrl
    if (selectedFile) {
      try {
        imageUrl = await uploadToPinataAsync(selectedFile)
      } catch (error) {
        console.error('Error uploading to IPFS:', error)
        toast.error('Failed to upload image to IPFS')
      }
    }

    const data = { ..._data, image: imageUrl }

    if (isConnected) {
      if (isEvmAddress(wallets[0].address)) {
        const createdData = await createTokenAsync({ data })
        await createTokenApiAsync({
          data: createdData,
          address: wallets[0].address,
        })
        toast.success('New Meme Token Created!')
        router.push(
          `/token/${createdData.tokenAddress}?symbol=${createdData.symbol}&chain=${createdData.chain}`,
        )
      } else {
        createSolanaToken(
          { data },
          {
            onSuccess: () => {
              toast.success('New Meme Token Created!')
            },
            onError: (e: any) => {
              toast.error(e.shortMessage)
            },
          },
        )
      }
    }
    setIsModalOpen(false)
  }

  if (!isClient) {
    return (
      <div className="flex h-full min-h-[500px] w-full items-center justify-center">
        <div className="size-12 animate-spin rounded-full border-4 border-accent border-b-transparent"></div>
      </div>
    )
  }

  return (
    <>
      <h1 className="relative text-center font-hanson text-3xl font-bold uppercase text-[#FFFAFF] md:text-6xl">
        Launch Token
        <Image
          src="/assets/img/launch-token/start-with-the-info/title-ribbon.svg"
          alt="Left Ribbon"
          className="absolute left-[-70px] top-[-60px]"
          width={100}
          height={100}
        />
        <Image
          src="/assets/img/launch-token/start-with-the-info/title-ribbon.svg"
          alt="Right Ribbon"
          className="absolute right-[-70px] top-[-60px] -scale-x-100"
          width={100}
          height={100}
        />
      </h1>

      <div className="flex w-full flex-col gap-6 md:flex-row">
        <div
          className="relative min-h-[300px] w-full cursor-pointer bg-[url('/assets/img/launch-token/start-with-the-info/background-file-upload.svg')] bg-contain bg-center bg-no-repeat md:w-1/2"
          onClick={() => fileInputRef.current?.click()}
        >
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt="Uploaded token image"
              className="absolute left-1/2 top-1/2 max-h-full max-w-full -translate-x-1/2 -translate-y-1/2 object-contain"
              width={300}
              height={300}
            />
          ) : (
            <Image
              src="/assets/img/launch-token/start-with-the-info/icon-file-upload.svg"
              alt="File Upload Icon"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              width={50}
              height={50}
            />
          )}
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
        <div className="w-full text-lg font-semibold text-[#FFFAFF] md:w-1/2">
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="chain"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mb-2 block text-sm font-medium text-[#FFFAFF]">
                        Select chain
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl className="flex h-[44px] w-full items-center gap-2 border border-[#E8DA521A] bg-[#07040B] text-[#FFFAFF]">
                          <SelectTrigger>
                            <SelectValue placeholder="Chain select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-[#07040B]">
                          {SUPPORT_CHAINS.map((chain) => {
                            return (
                              <SelectItem
                                key={chain.id.toString()}
                                value={chain.id.toString()}
                                className="cursor-pointer hover:bg-secondary"
                              >
                                <div className="flex items-center gap-2">
                                  <Image
                                    src={getChainLogo(chain.id)}
                                    width={20}
                                    height={20}
                                    alt=""
                                  />
                                  <span>{chain.name}</span>
                                </div>
                              </SelectItem>
                            )
                          })}
                          {/* <SelectItem
                            value="999"
                            className="cursor-pointer hover:bg-secondary"
                          >
                            Solana
                          </SelectItem> */}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="jeetTax"
                  render={({ field }) => (
                    <FormItem className="hidden">
                      <FormLabel className="mb-2 flex items-center gap-2 text-sm font-medium text-[#FFFAFF]">
                        Jeet tax
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Image
                                src="/assets/img/launch-token/start-with-the-info/icon-info.svg"
                                width={20}
                                height={20}
                                alt=""
                              />
                            </TooltipTrigger>
                            <TooltipContent></TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type="number"
                            placeholder="Enter value"
                            {...field}
                            min={0}
                            onChange={(e) =>
                              field.onChange(
                                Math.max(0, Number(e.target.value)),
                              )
                            }
                            className="h-[44px] rounded-none border border-[#E8DA521A] bg-[#07040B] p-3 pr-16 text-[#FFFAFF]"
                          />
                          <div className="absolute right-3 top-1/2 flex -translate-y-1/2">
                            <button
                              type="button"
                              className="mr-2 flex h-6 w-6 items-center justify-center rounded-sm border border-[#E8DA521A]"
                              onClick={() =>
                                field.onChange(Math.max(0, field.value - 1))
                              }
                            >
                              <Image
                                src="/assets/img/launch-token/start-with-the-info/icon-left-arrow.svg"
                                width={6}
                                height={24}
                                alt=""
                              />
                            </button>
                            <button
                              type="button"
                              className="flex h-6 w-6 items-center justify-center rounded-sm border border-[#E8DA521A]"
                              onClick={() => field.onChange(field.value + 1)}
                            >
                              <Image
                                src="/assets/img/launch-token/start-with-the-info/icon-right-arrow.svg"
                                width={6}
                                height={24}
                                alt=""
                              />
                            </button>
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mb-2 block text-sm font-medium text-[#FFFAFF]">
                        Token Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Token Name"
                          className="h-[44px] w-full rounded-none border border-[#E8DA521A] bg-[#07040B] p-3 text-[#FFFAFF] outline-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="symbol"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mb-2 block text-sm font-medium text-[#FFFAFF]">
                        Token Symbol
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Token Symbol"
                          className="h-[44px] w-full rounded-none border border-[#E8DA521A] bg-[#07040B] p-3 text-[#FFFAFF] outline-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="meta"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mb-2 block text-sm font-medium text-[#FFFAFF]">
                      Select Meta Category
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="flex h-[44px] w-full items-center gap-2 border border-[#E8DA521A] bg-[#07040B] text-[#FFFAFF]">
                        <SelectTrigger>
                          <SelectValue placeholder="Meta select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-[#07040B]">
                        {metaCategories.map((category) => (
                          <SelectItem
                            key={category.value}
                            value={category.value}
                            className="cursor-pointer hover:bg-secondary"
                          >
                            {category.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mb-2 block text-sm font-medium text-[#FFFAFF]">
                      Description
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Description"
                        rows={4}
                        className="w-full rounded-none border border-[#E8DA521A] bg-[#07040B] p-3 text-[#FFFAFF] outline-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="kyc"
                render={({ field }) => (
                  <FormItem className="hidden">
                    <FormLabel className="mb-2 block text-sm font-medium text-[#FFFAFF]">
                      KYC / Non KYC
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="h-[44px] w-full rounded-none border border-[#E8DA521A] bg-[#07040B] p-3 text-[#FFFAFF] outline-none"
                        placeholder="Your KYC"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="twitter"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mb-2 block text-sm font-medium text-[#FFFAFF]">
                        X Link (optional)
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="h-[44px] w-full rounded-none border border-[#E8DA521A] bg-[#07040B] p-3 text-[#FFFAFF] outline-none"
                          placeholder="Link"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="telegram"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mb-2 block text-sm font-medium text-[#FFFAFF]">
                        Telegram Link (optional)
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="h-[44px] w-full rounded-none border border-[#E8DA521A] bg-[#07040B] p-3 text-[#FFFAFF] outline-none"
                          placeholder="Link"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex w-full flex-col justify-between gap-6">
                <Button
                  borderColor="border-accent"
                  className={
                    'group relative h-[60px] w-full min-w-[290px] overflow-hidden rounded-none border border-accent font-medium text-accent'
                  }
                  onClick={(e) => {
                    e.preventDefault()
                    setIsModalOpen(true)
                  }}
                >
                  + Advanced options
                </Button>

                <Button
                  type="submit"
                  disabled={
                    isUploading ||
                    isCreatingToken ||
                    isCreatingTokenApi ||
                    isSolanaTokenCreating
                  }
                  loading={
                    isUploading ||
                    isCreatingToken ||
                    isCreatingTokenApi ||
                    isSolanaTokenCreating
                  }
                  borderColor="border-accent"
                  className={
                    'group relative h-[60px] w-full min-w-[290px] overflow-hidden rounded-none border border-accent bg-accent font-medium text-[#110A1A]'
                  }
                >
                  <span className="relative z-10">
                    {isUploading ? 'Uploading to IPFS...' : 'Launch Token'}
                  </span>
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent
          className="flex h-[80vh] w-full max-w-screen-lg flex-col items-center justify-start overflow-y-auto rounded-3xl border-[1.5px] border-[#413B484D] p-0 sm:max-h-[80vh]"
          aria-describedby={undefined}
        >
          <div className="relative p-8">
            <Image
              src="/assets/img/launch-token/start-with-the-info/bg-gradient.svg"
              alt="Background Gradient"
              className="absolute left-0 top-0"
              width={1920}
              height={1080}
            />

            <DialogClose asChild>
              <button className="absolute right-8 top-12 z-[10] rounded-full bg-[#322C3A] transition-all duration-300 hover:bg-[#5b4c6e]">
                <Image
                  src="/assets/img/launch-token/advanced/icon-close.svg"
                  alt="Close Icon"
                  width={20}
                  height={20}
                />{' '}
              </button>
            </DialogClose>
            <DialogTitle className="mb-4" />
            <div className="w-full">
              <TokenCreationAdvancedForm onSubmit={onSubmit} />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
