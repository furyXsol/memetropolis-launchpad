import Image from 'next/image'
import DatePicker from 'react-datepicker'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import {
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
  Tooltip,
} from '@/components/ui/tooltip'

import {
  createTokenSchema,
  CreateTokenSchema,
} from '@/core/schemas/create-token-schema'
import moment from 'moment'
import { SUPPORT_CHAINS } from '@/core/constants/chains'
import { getChainLogo } from '@/core/utils'
import { useState } from 'react'
import { metaCategories } from '@/core/constants/meta-categories'

interface TokenCreationAdvancedFormProps {
  onSubmit: (data: CreateTokenSchema) => Promise<void>
}

export const TokenCreationAdvancedForm = ({
  onSubmit,
}: TokenCreationAdvancedFormProps) => {
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
  const [nativeCoin, setNativeCoin] = useState<string>(
    SUPPORT_CHAINS[0].nativeCurrency.symbol,
  )

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative space-y-6"
      >
        <div className="">
          <h1 className="text-2xl font-semibold text-white">Project Info</h1>
          <p className="text-base text-[#B5B3B8]">
            Welcome to the advanced options of project creation
          </p>
        </div>
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
                  onValueChange={(value) => {
                    const activeChain = SUPPORT_CHAINS.find(
                      (chain) => chain.id.toString() === value,
                    )
                    if (activeChain)
                      setNativeCoin(activeChain.nativeCurrency.symbol)
                    field.onChange(value)
                  }}
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
                      <TooltipTrigger type="button" asChild>
                        <button
                          type="button"
                          onClick={(e) => e.preventDefault()}
                        >
                          <Image
                            src="/assets/img/launch-token/start-with-the-info/icon-info.svg"
                            width={20}
                            height={20}
                            alt="Info"
                          />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent className="rounded-xl border border-white bg-[#07040B] p-2 text-[#FFFAFF]">
                        <p>
                          Optional 50% Jeet Tax on all sales on Bonding
                          <br />
                          Curve - 40% to LP of token
                        </p>
                      </TooltipContent>
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
                        field.onChange(Math.max(0, Number(e.target.value)))
                      }
                      className="h-[44px] w-full rounded-none border border-[#E8DA521A] bg-[#07040B] p-3 text-[#FFFAFF] outline-none"
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                  placeholder="Your KYC"
                  className="h-[44px] w-full rounded-none border border-[#E8DA521A] bg-[#07040B] p-3 text-[#FFFAFF] outline-none"
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
                    placeholder="Link"
                    className="h-[44px] w-full rounded-none border border-[#E8DA521A] bg-[#07040B] p-3 text-[#FFFAFF] outline-none"
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
                    placeholder="Link"
                    className="h-[44px] w-full rounded-none border border-[#E8DA521A] bg-[#07040B] p-3 text-[#FFFAFF] outline-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="maxSupply"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Total supply</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="number"
                    min={0}
                    onChange={(e) =>
                      field.onChange(Math.max(0, Number(e.target.value)))
                    }
                    placeholder="1000000"
                    className="h-[44px] w-full rounded-none border border-[#E8DA521A] bg-[#07040B] p-3 text-[#FFFAFF] outline-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="raisedAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Raised amount {`(${nativeCoin})`}</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="number"
                    placeholder="24"
                    min={0}
                    onChange={(e) =>
                      field.onChange(Math.max(0, Number(e.target.value)))
                    }
                    className="h-[44px] w-full rounded-none border border-[#E8DA521A] bg-[#07040B] p-3 text-[#FFFAFF] outline-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
          <FormField
            control={form.control}
            name="salesRatio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sales ratio</FormLabel>
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Input
                      {...field}
                      type="number"
                      placeholder="80"
                      min={0}
                      onChange={(e) =>
                        field.onChange(Math.max(0, Number(e.target.value)))
                      }
                      className="h-[44px] w-full rounded-none border border-[#E8DA521A] bg-[#07040B] p-3 text-[#FFFAFF] outline-none"
                    />
                    <p>%</p>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="reservedRatio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reserved ratio</FormLabel>
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Input
                      {...field}
                      type="number"
                      placeholder="0"
                      min={0}
                      onChange={(e) =>
                        field.onChange(Math.max(0, Number(e.target.value)))
                      }
                      className="h-[44px] w-full rounded-none border border-[#E8DA521A] bg-[#07040B] p-3 text-[#FFFAFF] outline-none"
                    />
                    <p>%</p>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="liquidityRatio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Liquidity Pool Ratio</FormLabel>
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Input
                      {...field}
                      type="number"
                      placeholder="20"
                      min={0}
                      onChange={(e) =>
                        field.onChange(Math.max(0, Number(e.target.value)))
                      }
                      className="h-[44px] w-full rounded-none border border-[#E8DA521A] bg-[#07040B] p-3 text-[#FFFAFF] outline-none"
                    />
                    <p>%</p>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="launchDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Launch date - GMT</FormLabel>
              <FormControl>
                <div className="relative">
                  <DatePicker
                    selected={
                      field.value
                        ? moment.utc(field.value, 'YYYY/MM/DD h:mm A').toDate()
                        : null
                    }
                    onChange={(date: Date | null) => {
                      field.onChange(
                        date ? moment(date).format('YYYY/MM/DD h:mm A') : null,
                      )
                    }}
                    showTimeSelect
                    timeIntervals={15}
                    timeCaption="Time"
                    customInput={
                      <div className="relative">
                        <Input
                          placeholder={'2024/08/11 03:00 AM'}
                          value={field.value}
                          readOnly
                          className="h-[44px] min-w-full cursor-pointer rounded-none border border-[#E8DA521A] bg-[#07040B] p-3 text-[#FFFAFF] outline-none"
                        />
                        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center pl-3">
                          <Image
                            src="/assets/img/launch-token/advanced/akar-icons_calendar.svg"
                            alt="Calendar"
                            width={20}
                            height={20}
                          />
                        </div>
                      </div>
                    }
                    className="block w-full border-[#E8DA521A] bg-[#07040B] text-[#FFFAFF]"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="maximumPerUser"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Maximum per user - {nativeCoin} {`(optional)`}
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  placeholder=""
                  onChange={(e) =>
                    field.onChange(Math.max(0, Number(e.target.value)))
                  }
                  className="h-[44px] w-full rounded-none border border-[#E8DA521A] bg-[#07040B] p-3 text-[#FFFAFF] outline-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          borderColor="border-accent"
          className="group relative h-[60px] w-full overflow-hidden rounded-none border border-accent bg-accent font-medium text-[#110A1A]"
        >
          Launch meme
        </Button>
      </form>
    </Form>
  )
}
