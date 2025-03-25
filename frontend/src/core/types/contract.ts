import { UseMutationResult } from '@tanstack/react-query'
import { CreateTokenSchema } from '@/core/schemas/create-token-schema'
import { SwapTokenSchema } from '@/core/schemas/swap-token-schema'
import { CrosschainSwapTokenSchema } from '@/core/schemas/crosschain-swap-token-schema'
import { CrosschainQuoteSchema } from '@/core/schemas/crosschain-quote-schema'
import { SwapQuoteSchema } from '../schemas/swap-quote-schema'
import { TokenPriceSchema } from '../schemas/token-price-schema'

export namespace UseCreateToken {
  export type Params = {
    data: CreateTokenSchema
  }
  export type ReturnType = UseMutationResult<
    {
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
    },
    Error,
    Params
  >
  export type FunctionType = () => ReturnType
}

export namespace UseSwapToken {
  export type Params = {
    data: SwapTokenSchema
  }
  export type ReturnType = UseMutationResult<
    {
      transactionHash: string
      transactionUrl: string
      result: number // buy - result, sell - receivedAmount
    },
    Error,
    Params
  >
  export type FunctionType = () => ReturnType
}

export namespace UseCrosschainSwapToken {
  export interface Params {
    data: CrosschainSwapTokenSchema
  }

  export interface Result {
    transactionHash: string
    transactionUrl: string
  }

  export type FunctionType = () => UseMutationResult<Result, Error, Params>
}

export namespace UseCrosschainQuote {
  export interface Params {
    data: CrosschainQuoteSchema
  }

  export interface Result {
    tokenAmount: any
    nativeFee: any
  }

  export type FunctionType = () => UseMutationResult<Result, Error, Params>
}

export namespace UseSwapQuote {
  export interface Params {
    data: SwapQuoteSchema
  }

  export interface Result {
    amount: any
  }
  export type FunctionType = () => UseMutationResult<Result, Error, Params>
}

export namespace UseTokenPrice {
  export interface Params {
    data: TokenPriceSchema
  }

  export interface Result {
    amount: any
  }
  export type FunctionType = () => UseMutationResult<Result, Error, Params>
}
