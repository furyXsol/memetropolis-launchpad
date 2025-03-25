import { z } from 'zod'

export const crosschainQuoteSchema = z.object({
  sellBuyFlag: z.string(),
  sourceChainId: z.number(),
  chainId: z.number(),
  memeTokenAddress: z.string(),
  walletAddress: z.string(),
  value: z.string(), // ethAmount = buy, tokenQty = sell
})
export type CrosschainQuoteSchema = z.infer<typeof crosschainQuoteSchema>
