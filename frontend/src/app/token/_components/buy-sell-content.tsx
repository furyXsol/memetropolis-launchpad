import React, { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { SwapTokenSchema } from '@/core/schemas/swap-token-schema'
import { useEvmAccount } from '@/core/hooks/evm/use-account'
import {
  useBalance as useEvmBalance,
  useTokenBalance as useEvmTokenBalance,
} from '@/core/hooks/evm/use-balance'
import { useSolanaAccount } from '@/core/hooks/solana/use-account'
import {
  useBalance as useSolanaBalance,
  useTokenBalance as useSolanaTokenBalance,
} from '@/core/hooks/solana/use-balance'
import { getChainShortName } from '@/core/utils'
import { isAddress, zeroAddress } from 'viem'
import { switchUserChain } from '@/core/utils/wagmi'
import { getEvmTokenBalance } from '@/core/lib/utils'
import Image from 'next/image'

interface BuySellContentProps {
  activeTab: 'Buy' | 'Sell'
  tokenAddress: string
  chainId: string
  onSubmit: (data: SwapTokenSchema) => void
  isPending: boolean
}

export function BuySellContent({
  activeTab,
  tokenAddress,
  chainId,
  onSubmit,
  isPending,
}: BuySellContentProps) {
  const [amount, setAmount] = useState('')
  const [isNativeInput, setIsNativeInput] = useState(true)

  const { wallet: solanaWallet } = useSolanaAccount()
  const { data: solBalance } = useSolanaBalance(solanaWallet?.address)
  const { data: solTokenBalance } = useSolanaTokenBalance(
    solanaWallet?.address,
    tokenAddress,
  )

  const { wallet: evmWallet } = useEvmAccount()
  const { data: evmBalance } = useEvmBalance(evmWallet?.address, chainId)
  const { data: evmTokenBalance } = useEvmTokenBalance(
    evmWallet?.address,
    tokenAddress,
    Number(chainId),
  )

  const [nativeBalance, setNativeBalance] = useState(0)
  const [tokenBalance, setTokenBalance] = useState(0)

  useEffect(() => {
    const switchChain = async () => {
      try {
        if (evmWallet?.address) {
          await switchUserChain({
            account: evmWallet.address,
            chainId: Number(chainId),
          })
        }
      } catch (error) {
        console.error('Error switching chain:', error)
      }
    }

    switchChain()
  }, [chainId, evmWallet?.address])

  const getEvmNativeBalance = useCallback(async () => {
    if (evmWallet?.address) {
      const balance = await getEvmTokenBalance(
        parseInt(chainId),
        zeroAddress,
        evmWallet.address,
      )
      setNativeBalance(parseFloat(balance))
    }
  }, [chainId, evmWallet?.address, setNativeBalance])

  useEffect(() => {
    const isEvm = isAddress(tokenAddress)

    if (isEvm) {
      getEvmNativeBalance()
      setTokenBalance(evmTokenBalance ?? 0)
    } else {
      setNativeBalance(solBalance ?? 0)
      setTokenBalance(solTokenBalance ?? 0)
    }
  }, [
    tokenAddress,
    evmBalance,
    evmTokenBalance,
    solBalance,
    solTokenBalance,
    getEvmNativeBalance,
  ])

  const handleAmountChange = useCallback((value: string) => {
    const regex = /^\d*\.?\d{0,8}$/
    if (regex.test(value) || value === '') {
      setAmount(value)
    }
  }, [])

  const handleQuickAmount = (value: number) => {
    setAmount(Math.min(value, nativeBalance ?? 0).toString())
  }

  const handleMaxAmount = () => {
    if (activeTab === 'Buy') {
      setAmount(
        isNativeInput
          ? (nativeBalance ?? 0).toString()
          : (tokenBalance ?? 0).toString(),
      )
    } else {
      setAmount(tokenBalance ? tokenBalance.toString() : '0')
    }
  }

  useEffect(() => {
    const numAmount = parseFloat(amount)
    if (activeTab === 'Buy') {
      if (isNativeInput && numAmount > (nativeBalance ?? 0)) {
        setAmount((nativeBalance ?? 0).toString())
      }
    } else {
      if (numAmount > (tokenBalance ?? 0)) {
        setAmount((tokenBalance ?? 0).toString())
      }
    }
  }, [amount, nativeBalance, tokenBalance, activeTab, isNativeInput])

  return (
    <>
      <div className="mb-6 w-full rounded-lg md:w-[538px]">
        {activeTab === 'Buy' && (
          <div className="mb-4 flex justify-end">
            <Button
              onClick={() => setIsNativeInput(!isNativeInput)}
              className="rounded-lg border border-accent px-3 py-1 text-sm"
            >
              Switch to{' '}
              {isNativeInput ? 'Token' : getChainShortName(Number(chainId))}{' '}
              Input
            </Button>
          </div>
        )}

        <div className="relative flex items-center justify-between rounded-lg border border-[#FFFEEF] px-5 py-4">
          <div className="absolute left-5 top-0 mb-2 -translate-y-1/2 bg-[#07040B] px-2 text-xs font-bold text-accent">
            INPUT {activeTab.toUpperCase()} AMOUNT
          </div>
          <input
            type="text"
            value={amount}
            onChange={(e) => handleAmountChange(e.target.value)}
            className="bg-transparent text-white outline-none placeholder:text-[#605B66]"
            placeholder="0"
          />
          <div className="flex space-x-2">
            {activeTab === 'Buy' && isNativeInput && (
              <>
                <button
                  onClick={() => handleQuickAmount(3)}
                  className="hidden rounded-full border border-[#928E96] bg-transparent px-[6px] text-sm text-[#928E96] md:block"
                >
                  3 {getChainShortName(Number(chainId))}
                </button>
                <button
                  onClick={() => handleQuickAmount(10)}
                  className="hidden rounded-full border border-[#928E96] bg-transparent px-[6px] text-sm text-[#928E96] md:block"
                >
                  10 {getChainShortName(Number(chainId))}
                </button>
                <button
                  onClick={() => handleQuickAmount(50)}
                  className="hidden rounded-full border border-[#928E96] bg-transparent px-[6px] text-sm text-[#928E96] md:block"
                >
                  50 {getChainShortName(Number(chainId))}
                </button>
              </>
            )}

            {!(activeTab === 'Buy' && !isNativeInput) && (
              <button
                onClick={handleMaxAmount}
                className="rounded-full border border-[#928E96] bg-transparent px-[6px] text-sm text-[#928E96]"
              >
                MAX
              </button>
            )}
          </div>
        </div>
        {!(activeTab === 'Buy' && !isNativeInput) && (
          <div className="mt-2 flex items-center justify-end gap-2 text-right text-sm text-[#999999]">
            <Image
              src="/assets/img/icons/mingcute_wallet-line.svg"
              width={16}
              height={16}
              alt="Wallet icon"
            />
            {activeTab === 'Buy'
              ? isNativeInput
                ? `${Number(nativeBalance ?? 0).toFixed(5)} ${getChainShortName(Number(chainId))}`
                : `${tokenBalance ?? 0} TOKEN`
              : `${tokenBalance ?? 0} TOKEN`}
          </div>
        )}
      </div>

      <div className="space-y-4">
        {/*<div className="flex space-x-4">
          <Button
            borderColor="border-accent"
            className={
              'group relative h-[60px] w-[150px] overflow-hidden rounded-none border border-accent bg-accent font-medium text-[#110A1A] md:w-[270px]'
            }
            disabled
          >
            <span className="relative z-10">
              Whale {activeTab.toLowerCase()}
            </span>
          </Button>
          <Button
            borderColor="border-white"
            className="group relative h-[60px] w-[150px] overflow-hidden rounded-none border border-white bg-transparent font-medium text-[#FFFAFF] md:w-[270px]"
          >
            <span className="relative z-10">Swap Bridge</span>
          </Button>
        </div>*/}
        <Button
          borderColor="border-accent"
          className={
            'group relative h-[60px] w-[300px] overflow-hidden rounded-none border border-accent bg-accent font-medium text-[#110A1A] md:w-[570px]'
          }
          onClick={() =>
            onSubmit({
              chainId: Number(chainId),
              sellBuyFlag:
                activeTab === 'Buy'
                  ? isNativeInput
                    ? 'buyInETH'
                    : 'buy'
                  : 'sell',
              tokenAddress,
              tokenQty: Number(amount),
            })
          }
          disabled={Number(amount) === 0} // Disable button if amount is zero
        >
          {isPending ? (
            <div className="flex items-center justify-center">
              <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-black"></div>
              <span className="relative z-10 ml-2">Processing...</span>
            </div>
          ) : (
            <span className="relative z-10">
              Quick {activeTab.toLowerCase()}
            </span>
          )}
        </Button>
      </div>
    </>
  )
}
