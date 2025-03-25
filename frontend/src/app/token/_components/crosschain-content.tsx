import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react'
import Image from 'next/image'
import { Chain, isAddress } from 'viem'
import { Button } from '@/components/ui/button'
import { CrosschainSwapTokenSchema } from '@/core/schemas/crosschain-swap-token-schema'
import { useTokenPrice } from '@/core/services/_contract/evm/use-token-price'
import { useCrosschainQuote as useEvmCrosschainQuote } from '@/core/services/_contract/evm/use-crosschain-quote'
import { useCrosschainQuote as useSolanaCrossChainQuote } from '@/core/services/_contract/solana/use-crosschain-quote'

import { useEvmAccount } from '@/core/hooks/evm/use-account'
import { getChainLogo } from '@/core/utils'
import { CHAIN_ID, SUPPORT_CHAINS } from '@/core/constants/chains'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { switchUserChain } from '@/core/utils/wagmi'
import { useBalance as useEvmBalance } from '@/core/hooks/evm/use-balance'
import { useSolanaAccount } from '@/core/hooks/solana/use-account'
import { getChainShortName } from '@/core/utils'

interface CrosschainContentProps {
  tokenAddress: string
  tokenSymbol: string
  chainId: string
  onSubmit: (data: CrosschainSwapTokenSchema) => void
  isPending: boolean
}

export function CorsschainContent({
  tokenAddress,
  tokenSymbol,
  chainId: tokenChainId, //token's chain id
  onSubmit,
  isPending,
}: CrosschainContentProps) {
  const [isAmountLocked, setIsAmountLocked] = useState(false)
  const [sendDestNativeAmount, setSendDestNativeAmount] = useState('')
  const [receiveAmount, setReceiveAmount] = useState('0')
  const [nativeFeeAmount, setNativeFeeAmount] = useState('0')
  const [isBuySell, setIsBuySell] = useState('buy')
  const [receiptAddress, setReceiptAddress] = useState('')

  const { wallet: evmWallet, isConnected: isEvmConnected } = useEvmAccount()
  const { wallet: solanaWallet, isConnected: isSolanaConnected } =
    useSolanaAccount()
  const [isLoadingQuote, setIsLoadingQuote] = useState(false)

  // Extract wallet properties to use in dependency arrays
  const walletAddress = isEvmConnected
    ? evmWallet?.address
    : isSolanaConnected
      ? solanaWallet?.address
      : null

  const walletChainId = isEvmConnected
    ? evmWallet?.chainId
    : isSolanaConnected
      ? solanaWallet?.chainId // 999
      : null

  const { data: evmBalance } = useEvmBalance(
    evmWallet?.address,
    Number(evmWallet?.chainId),
  )
  const [tokenPrice, setTokenPrice] = useState('0')
  const handleSendDestNativeAmountChange = (value: string) => {
    const regex = /^\d*\.?\d{0,8}$/
    if (regex.test(value) || value === '') {
      setSendDestNativeAmount(value)
    }
  }

  const { mutate: evmCrossChainQuoteMutate } = useEvmCrosschainQuote()
  const { mutate: solanaCrossChainQuoteMutate } = useSolanaCrossChainQuote()

  const { mutate: getTokenPrice } = useTokenPrice()

  const supportedChainsExcludeConnected = useMemo(() => {
    return SUPPORT_CHAINS.filter((chain) => chain.id !== Number(tokenChainId))
  }, [tokenChainId])

  const destNativeInput = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (destNativeInput.current) destNativeInput.current.focus()
  }, [])

  useEffect(() => {
    getTokenPrice(
      {
        data: {
          chainId: Number(tokenChainId),
          tokenAddress,
        },
      },
      {
        onSuccess: (result: any) => {
          setTokenPrice(result.amount)
        },
        onError: (e: any) => {
          console.log(e.shortMessage)
          setTokenPrice('0')
        },
      },
    )
  }, [tokenChainId, tokenAddress, getTokenPrice])

  useEffect(() => {
    if (!sendDestNativeAmount || parseFloat(sendDestNativeAmount) <= 0) {
      setReceiveAmount('0')
      setNativeFeeAmount('0')
      setIsLoadingQuote(false)
      return
    }

    setIsLoadingQuote(true)
    const data = {
      sellBuyFlag: isBuySell as 'buy' | 'sell',
      sourceChainId: Number(walletChainId) || 0,
      chainId: Number(tokenChainId), // dest Chain
      memeTokenAddress: tokenAddress,
      walletAddress: walletAddress || '',
      value: sendDestNativeAmount,
    }
    if (walletChainId === CHAIN_ID.SOLANA) {
      solanaCrossChainQuoteMutate(
        { data },
        {
          onSuccess: (result: any) => {
            setReceiveAmount(result.tokenAmount) // buy: tokenAmount, sell: eth amount
            setNativeFeeAmount(result.nativeFee)
            setIsLoadingQuote(false)
          },
          onError: (e: any) => {
            console.log(e.shortMessage)
            setIsLoadingQuote(false)
          },
        },
      )
    } else {
      evmCrossChainQuoteMutate(
        { data },
        {
          onSuccess: (result: any) => {
            setReceiveAmount(result.tokenAmount) // buy: tokenAmount, sell: eth amount
            setNativeFeeAmount(result.nativeFee)
            setIsLoadingQuote(false)
          },
          onError: (e: any) => {
            console.log(e.shortMessage)
            setIsLoadingQuote(false)
          },
        },
      )
    }
  }, [
    sendDestNativeAmount,
    isBuySell,
    tokenChainId,
    tokenAddress,
    solanaCrossChainQuoteMutate,
    evmCrossChainQuoteMutate,
    walletAddress,
    walletChainId,
  ])

  const toggleAmountLock = useCallback(() => {
    setIsAmountLocked((prev) => !prev)
    setSendDestNativeAmount('')
  }, [])

  const handleTokenToggle = () => {
    setSendDestNativeAmount('')
    setReceiveAmount('0')
    setNativeFeeAmount('0')
    if (isBuySell == 'buy') setIsBuySell('sell')
    else setIsBuySell('buy')
  }

  const [currentEvmChain, setCurrentEvmChain] = useState<Chain>(
    SUPPORT_CHAINS[0],
  )

  useEffect(() => {
    if (isEvmConnected && walletChainId) {
      const chainData = SUPPORT_CHAINS.find((c) => c.id === walletChainId)
      if (chainData) setCurrentEvmChain(chainData)
    }
    if (isAddress(walletAddress || '')) {
      setReceiptAddress(walletAddress || '')
    } else {
      setReceiptAddress('')
    }
  }, [isEvmConnected, walletAddress, walletChainId])

  const onHandleChainChange = async (value: string) => {
    await switchUserChain({
      chainId: Number(value),
    })
  }

  if (walletChainId === Number(tokenChainId) && !isPending) {
    return (
      <div className="flex flex-col items-center space-y-4">
        <p className="text-center text-2xl">
          You are currently on{' '}
          {isSolanaConnected ? 'Solana' : currentEvmChain.name}.<br />
        </p>
        <Select onValueChange={onHandleChainChange}>
          <SelectTrigger>
            <SelectValue placeholder="Switch to other chain we support" />
          </SelectTrigger>
          <SelectContent className="bg-[#07040B]">
            {supportedChainsExcludeConnected.map((chain) => {
              return (
                <SelectItem
                  key={chain.id.toString()}
                  value={chain.id.toString()}
                  className="cursor-pointer hover:bg-secondary"
                >
                  {chain.name}
                </SelectItem>
              )
            })}
            {!isSolanaConnected && (
              <SelectItem
                key={'solana'}
                value={CHAIN_ID.SOLANA.toString()}
                className="cursor-pointer hover:bg-secondary"
              >
                {'Solana'}
              </SelectItem>
            )}
          </SelectContent>
        </Select>
      </div>
    )
  }

  return (
    <>
      <div className="-mt-8">
        You are currently on{' '}
        {isSolanaConnected ? 'Solana' : currentEvmChain.name}.
      </div>
      <div className="relative mb-2 w-full max-w-[570px] rounded-lg p-2 pb-4">
        <div className="relative flex items-center justify-between rounded-lg border border-[#FFFEEF] px-5">
          <div className="absolute left-5 top-0 mb-2 -translate-y-1/2 bg-[#07040B] px-2 text-xs font-bold text-accent">
            SEND
          </div>
          {isBuySell === 'buy' ? (
            <>
              <input
                type="text"
                value={nativeFeeAmount}
                placeholder="0"
                readOnly
                className={`w-full border-r-2 border-white bg-transparent py-2 text-white outline-none placeholder:text-[#605B66] ${
                  isLoadingQuote ? 'blur-sm' : ''
                }`}
              />
              {isLoadingQuote && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                </div>
              )}
            </>
          ) : (
            <input
              ref={destNativeInput}
              type="text"
              value={sendDestNativeAmount}
              onChange={(e) => handleSendDestNativeAmountChange(e.target.value)}
              className="w-full border-r-2 border-white bg-transparent py-2 text-white outline-none placeholder:text-[#605B66]"
              placeholder="0.00000000"
              readOnly={isAmountLocked}
            />
          )}
          {isBuySell === 'buy' ? (
            <div className="flex w-[150px] items-center justify-center space-x-1 py-1 pl-5 text-white">
              <Image
                src={getChainLogo(Number(walletChainId))}
                width={20}
                height={20}
                alt=""
              />
              <span>
                {isSolanaConnected
                  ? 'SOL'
                  : currentEvmChain.nativeCurrency.symbol}
              </span>
            </div>
          ) : (
            <div className="flex w-[150px] items-center justify-center space-x-1 py-1 pl-5 text-white">
              <Image
                src={getChainLogo(Number(tokenChainId))}
                width={20}
                height={20}
                alt=""
              />
              <span>{tokenSymbol}</span>
            </div>
          )}
        </div>

        <Image
          src="/assets/img/project/swap/arrow-down.svg"
          width={10}
          height={16}
          alt="Swap Image"
          className="absolute -bottom-2 right-12 cursor-pointer"
          onClick={() => {}}
        />
        <div className="absolute -bottom-2 flex">
          <p className="text-sm text-[#999999]">
            Balance: {Number(Number(evmBalance ?? 0).toFixed(5))}{' '}
            {currentEvmChain.nativeCurrency.symbol}
          </p>
        </div>
      </div>
      <div className="relative w-full max-w-[570px] rounded-lg p-2">
        <div className="mb-4 pb-2">
          <div className="relative flex items-center justify-between rounded-lg border border-[#FFFEEF] px-5">
            <div className="absolute left-5 top-0 mb-2 -translate-y-1/2 bg-[#07040B] px-2 text-xs font-bold text-accent">
              {isBuySell === 'buy' ? 'Bridged To' : 'Equal To'}
            </div>
            {isBuySell === 'buy' ? (
              <input
                ref={destNativeInput}
                type="text"
                value={sendDestNativeAmount}
                onChange={(e) =>
                  handleSendDestNativeAmountChange(e.target.value)
                }
                className="w-full border-r-2 border-white bg-transparent py-2 text-white outline-none placeholder:text-[#605B66]"
                placeholder="0.00000000"
                readOnly={isAmountLocked}
              />
            ) : (
              <>
                <input
                  type="text"
                  value={nativeFeeAmount}
                  placeholder="0"
                  readOnly
                  className={`w-full border-r-2 border-white bg-transparent py-2 text-white outline-none placeholder:text-[#605B66] ${
                    isLoadingQuote ? 'blur-sm' : ''
                  }`}
                />
                {isLoadingQuote && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                  </div>
                )}
              </>
            )}
            <div className="flex w-[150px] items-center justify-center space-x-1 py-1 pl-5 text-white">
              <Image
                src={getChainLogo(Number(tokenChainId))}
                width={20}
                height={20}
                alt=""
              />
              <span>
                {
                  SUPPORT_CHAINS.find((c) => c.id === Number(tokenChainId))
                    ?.nativeCurrency.symbol
                }
              </span>
            </div>
          </div>
        </div>

        <div className="relative mb-8 w-full max-w-[570px] rounded-lg pb-2">
          <div className="relative flex items-center justify-between rounded-lg border border-[#FFFEEF] px-5">
            <div className="absolute left-5 top-0 mb-2 -translate-y-1/2 bg-[#07040B] px-2 text-xs font-bold text-accent">
              GET UP TO
            </div>
            <div className="relative flex w-full items-center border-r-2 border-white py-2">
              <input
                type="text"
                value={receiveAmount}
                readOnly
                className={`w-full bg-transparent text-white outline-none transition-all duration-300 ${
                  isLoadingQuote ? 'blur-sm' : ''
                }`}
              />
              {isLoadingQuote && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                </div>
              )}
            </div>

            {isBuySell === 'buy' ? (
              <div className="flex w-[150px] items-center justify-center space-x-1 py-1 pl-5 text-white">
                <Image
                  src={getChainLogo(Number(tokenChainId))}
                  width={20}
                  height={20}
                  alt=""
                />
                <span>{tokenSymbol}</span>
              </div>
            ) : (
              <div className="flex w-[150px] items-center justify-center space-x-1 py-1 pl-5 text-white">
                <Image
                  src={getChainLogo(Number(walletChainId))}
                  width={20}
                  height={20}
                  alt=""
                />
                <span>
                  {isSolanaConnected
                    ? 'SOL'
                    : currentEvmChain.nativeCurrency.symbol}
                </span>
              </div>
            )}
          </div>
          <div className="absolute -bottom-4 flex">
            <p className="text-sm text-[#999999]">
              Price: {tokenPrice} {getChainShortName(Number(tokenChainId))}
            </p>
          </div>
        </div>

        <div className="relative mb-4 w-full max-w-[570px] rounded-lg">
          <div className="relative flex items-center justify-between rounded-lg border border-[#FFFEEF] px-5">
            <div className="absolute left-5 top-0 mb-2 -translate-y-1/2 bg-[#07040B] px-2 text-xs font-bold text-accent">
              Receipt Address
            </div>
            <input
              type="text"
              value={receiptAddress}
              onChange={(e) => setReceiptAddress(e.target.value)}
              className="w-full bg-transparent py-2 text-white outline-none placeholder:text-[#605B66]"
              placeholder=""
              readOnly={isAmountLocked}
            />
          </div>
        </div>

        <Button
          borderColor="border-accent"
          className={
            'group relative h-[60px] w-full overflow-hidden rounded-none border border-accent bg-accent font-medium text-[#110A1A]'
          }
          onClick={() => {
            onSubmit({
              sellBuyFlag: isBuySell as 'buy' | 'sell',
              srcChainId: Number(walletChainId),
              memeTokenAddress: tokenAddress,
              dstChainId: Number(tokenChainId),
              receiptAddress,
              value: sendDestNativeAmount,
            })
          }}
          disabled={Number(sendDestNativeAmount) === 0 || !walletAddress}
        >
          {isPending ? (
            <div className="flex items-center justify-center">
              <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-black"></div>
              <span className="relative z-10 ml-2">Processing...</span>
            </div>
          ) : (
            <span className="relative z-10">Exchange</span>
          )}
        </Button>
      </div>
    </>
  )
}
