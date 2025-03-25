import { UseMutationResult } from '@tanstack/react-query'
import { UpdateTokenSchema } from '../schemas/update-token-schema'

export type Token = {
  id: string
  address: string
  chainId: number
  name: string
  symbol: string
  image: string
  description: string
  decimals: number
  currentHolderCount: string
  transferCount: string
  mintCount: string
  burnCount: string
  totalSupply: string
  socials: string
  banner: string
  creationTimestamp: number
  priceInDecimal: string
  owner: string
  ownerName: string
  ownerImage: string
  ownerSocial: string
  isFundingFinished?: boolean
  marketcap?: string
  tokenSold?: string
  meta?: string
}

export type TokenDetails = {
  tokenPrice: string
  marketCap: string
  fdv: string
  liquidity: string
}

export namespace UseUpdateTokenInfo {
  export type Params = {
    data: UpdateTokenSchema
    address: string
  }
  export type ReturnType = UseMutationResult<
    {
      success: boolean
      message: string
    },
    Error,
    Params
  >
  export type FunctionType = () => ReturnType
}

export type TokenTradeInfo = {
  address: string
  chainId: number
  name: string
  symbol: string
  priceChange5m: number
  priceChange1h: number
  priceChange6h: number
  priceChange24h: number
  transactionCount: number
  volume: number
  makerCount: number
  buyTokenAmount: number
  buyVolume: number
  sellTokenAmount: number
  sellVolume: number
}

export namespace UseTokenCreateApi {
  export type Params = {
    data: {
      image?: string
      chain: string
      jeetTax: number
      name: string
      symbol: string
      description: string
      kyc?: string
      twitter?: string
      telegram?: string
      tokenAddress: string
      creator: string
      salesRatio?: number
      reservedRatio?: number
      liquidityRatio?: number
      launchDate?: number
      maximumPerUser?: number
    }
    address: string
  }
  export type ReturnType = UseMutationResult<
    {
      success: boolean
      message: string
    },
    Error,
    Params
  >
  export type FunctionType = () => ReturnType
}
