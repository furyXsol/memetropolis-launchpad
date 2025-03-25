import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { PUBLIC_ALL_NODES } from '../constants/chains'
import { ChainId } from './wagmi'
import {
  ethers,
  JsonRpcProvider,
  Contract,
  formatEther,
  formatUnits,
} from 'ethers'
import { parseEther, zeroAddress } from 'viem'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDateBasedOnToday(utcTime: string): string {
  const date = new Date(utcTime)
  const now = new Date()

  // Check if the date is today
  const isToday =
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear()

  if (isToday) {
    // If today, return only the time
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
  } else {
    // If another day, return only the date
    return date.toLocaleDateString([], {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
  }
}

export const getEvmTokenBalance = async (
  chainId: number,
  tokenAddress: string,
  walletAddress: string,
): Promise<string> => {
  const rpcURL = PUBLIC_ALL_NODES[chainId as ChainId][0]
  const client = new JsonRpcProvider(rpcURL)
  if (
    tokenAddress === zeroAddress ||
    tokenAddress.toLowerCase() === '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
  ) {
    const balance = await client.getBalance(walletAddress)
    const balanceInEth = formatEther(balance)

    return balanceInEth
  }

  const ERC20_ABI = [
    'function decimals() view returns (uint8)',
    'function balanceOf(address) view returns (uint256)',
  ]

  const erc20Contract = new Contract(tokenAddress, ERC20_ABI, client)
  const decimals = await erc20Contract.decimals!()
  const balance = await erc20Contract.balanceOf!(walletAddress)

  const balanceInToken = formatUnits(balance, decimals || 18)
  return balanceInToken
}

export const getKAndInitialPrice = (
  raisedAmount?: number,
  maxSupply?: number,
  salesRatio?: number,
) => {
  let kValue = '0'
  let initialPrice = '0'
  if (raisedAmount && maxSupply) {
    const salesRatioDefault = salesRatio || 80
    const salesSupply = (maxSupply * salesRatioDefault) / 100
    const salesSupplyLength = salesSupply.toString().length
    const kValueNum = 5 * 10 ** -salesSupplyLength
    kValue = parseEther(kValueNum.toFixed(salesSupplyLength)).toString()
    // P0 = raisedAmount / (e^(k*c)- e^(k*(c-x))) * k
    const initPriceNum =
      (raisedAmount * kValueNum) / (Math.exp(kValueNum * salesSupply) - 1)
    initialPrice = parseEther(initPriceNum.toFixed(20)).toString()
  }
  return { kValue, initialPrice }
}

export function hexStringToByteArray(hexString: string): number[] {
  if (hexString.length % 2 !== 0) {
    throw new Error('Hex string length must be even')
  }

  return hexString.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16))
}
