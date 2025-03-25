import { z } from 'zod'

export const updateTokenSchema = z.object({
  chainId: z.string(),
  tokenAddress: z.string(),
  facebook: z.string().url().optional(),
  x: z.string().url().optional(),
  linkedin: z.string().url().optional(),
  banner: z.string().optional(),
  description: z.string().optional(),
})
export type UpdateTokenSchema = z.infer<typeof updateTokenSchema>
