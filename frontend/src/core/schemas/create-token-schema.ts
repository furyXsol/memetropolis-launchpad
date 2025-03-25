import { z } from 'zod'

export const createTokenSchema = z.object({
  image: z.string().optional(),
  chain: z.string().min(1, 'Chain is required'),
  jeetTax: z.number().min(0, 'Jeet tax must be non-negative'),
  name: z.string().min(1, 'Token name is required'),
  symbol: z.string().min(1, 'Token symbol is required'),
  description: z.string().min(1, 'Description is required'),
  kyc: z.string().optional(),
  twitter: z.string().optional(),
  telegram: z.string().optional(),
  raisedAmount: z
    .number()
    .min(0, 'Raised amount must be non-negative')
    .optional(),
  maxSupply: z.number().min(0, 'Total supply must be non-negative').optional(),
  salesRatio: z.number().min(0, 'Sales ratio must be non-negative').optional(),
  reservedRatio: z
    .number()
    .min(0, 'Reserved ratio must be non-negative')
    .optional(),
  liquidityRatio: z
    .number()
    .min(0, 'liquidity ratio must be non-negative')
    .optional(),
  launchDate: z.string().optional(),
  maximumPerUser: z
    .number()
    .min(0, 'Maximum per user must be non-negative')
    .optional(),
  meta: z.string().nonempty('Meta is required'),
})
export type CreateTokenSchema = z.infer<typeof createTokenSchema>
