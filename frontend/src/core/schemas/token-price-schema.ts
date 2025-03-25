import { z } from 'zod'

export const tokenPriceSchema = z.object({
  chainId: z.number(),
  tokenAddress: z.string(),
})
export type TokenPriceSchema = z.infer<typeof tokenPriceSchema>
