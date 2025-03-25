import { z } from 'zod'

export const swapQuoteSchema = z.object({
  chainId: z.number(),
  isInputNativeToken: z.boolean(),
  sellBuyFlag: z.string(),
  tokenAddress: z.string(),
  amount: z.number(),
})
export type SwapQuoteSchema = z.infer<typeof swapQuoteSchema>
