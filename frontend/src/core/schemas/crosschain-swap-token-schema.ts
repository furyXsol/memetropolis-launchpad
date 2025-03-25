import { z } from 'zod'

export const crosschainSwapTokenSchema = z.object({
  srcChainId: z.number(),
  sellBuyFlag: z.string(),
  dstChainId: z.number(),
  memeTokenAddress: z.string(),
  receiptAddress: z.string(),
  value: z.string(), // ethAmount = buy, tokenQty = sell
})
export type CrosschainSwapTokenSchema = z.infer<
  typeof crosschainSwapTokenSchema
>
